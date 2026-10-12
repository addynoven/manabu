# Manabu — Project Audit

[‎Hiragana : learn and memorizeアプリ - App Store](https://images.openai.com/static-rsc-4/ALZZwNkT7JOfC28ezGtvRmrY94EhqW2cnuBtKfyyNYE6Vay_iOw6hTqmBM6WUc1RJkf85CuQPcOcWo-NwsaL04AEwBvzNPjnq-c4h8HEj7mh5mKhsK1-zugL7a9o1KMjFP9M9JH5-w9WYNYS9sFjxTJ_mjDOR0y8cdeRlPignmk?purpose=inline)

# 学ぶ Manabu

Repository reviewed: October 12, 2026

[GitHub repository](https://github.com/addynoven/manabu) · [Web application](https://manabu-admin.vercel.app)

React Native + Expo

Next.js + TypeScript

PostgreSQL + Valkey

Neon, I went beyond the README and started tracing the actual implementation. My first impression is that Manabu has real engineering substance, but it also has some production-readiness gaps that deserve immediate attention.

This is an ambitious Japanese-learning platform: it combines mobile learning, a web workstation, FSRS spaced repetition, a curriculum, progress synchronization, social features, and multiplayer games. That is substantially more interesting as an engineering project than a simple CRUD application.

The concern is that features can work individually while the boundaries between them—authentication, database writes, synchronization, and game state—remain unreliable.

## 1. What I found

Security: investigate immediately

The admin API contains a hard-coded fallback secret. Also, the middleware does not actually block unauthenticated access to the routes it calls protected.

High priority

Data integrity: needs work

Account deletion and some social operations make multiple database writes without a transaction. A failure halfway through can leave inconsistent state.

High priority

Mobile synchronization: needs deeper testing

The client performs periodic cloud pulls and throttled pushes. That design needs conflict resolution to prevent older snapshots from overwriting newer learning progress.

Investigate

Architecture: promising foundation

Domain-oriented features, separate mobile and web workspaces, typed validation in many endpoints, and dedicated learning/game engines are good foundations to build on.

Strength

These are findings from repository inspection, not a completed penetration test or a live production incident. I have not claimed that an attacker has exploited the application or that all builds are failing.

## 2. Critical findings with exact code locations

### Finding A — Hard-coded admin secret

Priority 0 · Fix first

File: [`web/app/api/admin/auth/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/admin/auth/route.ts)

The login handler contains:

```
const adminSecret =
  process.env.ADMIN_SECRET || 'manabu_admin_2026_secure';
```

The same fallback is used by the admin user-management and configuration endpoints.

Why this matters: when `ADMIN_SECRET` is missing in the deployment environment, the fallback becomes the effective credential. Anyone who knows that value can potentially authenticate to the administrative API. The risk is particularly serious because the admin APIs can read user profiles, ban accounts, delete profiles, and change application configuration.

The login also stores the original secret directly in the session cookie for seven days. `HttpOnly` helps prevent JavaScript from reading the cookie, but does not make a weak or exposed credential safe.

Fix:

1. Require `ADMIN_SECRET` at startup and fail closed if it is missing.
2. Replace the shared-secret cookie with a random server-side session identifier, or a properly signed and expiring session.
3. Add login rate limiting and audit logging.
4. Rotate the admin secret immediately if this fallback has ever been used in a real deployment.

Do not assume the production site is exploitable right now; that depends on its actual environment configuration. The unsafe fallback is confirmed in the source.

### Finding B — Protected routes are not really protected by middleware

File: [`web/middleware.ts`](https://github.com/addynoven/manabu/blob/master/web/middleware.ts)

The middleware identifies paths such as `/admin`, `/friends`, and `/settings`, but continues the request:

```
const response = NextResponse.next();

if (sessionCookie) {
  response.headers.set('x-manabu-session', 'active');
}

return response;
```

If the cookie is missing, the middleware still returns `NextResponse.next()`. It also reads an authorization header without actually using it to make an access decision.

This does not automatically expose private user data: an API route can still enforce authentication independently. However, the middleware itself is not providing the protection its comments imply, and the frontend's `AuthGate` should not be treated as a security boundary.

Fix: use middleware or the appropriate Next.js request interception mechanism as an early redirect/deny layer, and independently enforce authentication and authorization on the server for every sensitive operation. Verify the supported convention for the exact Next.js version before changing the mechanism.

### Finding C — Account deletion is not atomic

File: [`web/app/api/v1/account/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/account/route.ts)

The handler deletes the profile and then anonymizes historical match results using two separate queries:

```
await query(
  'DELETE FROM manabu.profiles WHERE uid = $1',
  [user.uid]
);

await query(`
  UPDATE manabu.match_results
  SET player_a = CASE WHEN player_a = $1
                      THEN 'deleted' ELSE player_a END,
      player_b = CASE WHEN player_b = $1
                      THEN 'deleted' ELSE player_b END,
      winner = CASE WHEN winner = $1
                    THEN 'deleted' ELSE winner END
  WHERE player_a = $1 OR player_b = $1;
`, [user.uid]);
```

If the first statement succeeds and the second fails, the operation returns an error even though the profile has already been deleted. Depending on the foreign keys and cascade configuration, this can leave historical records or other associated data inconsistent.

Fix: perform related database changes in one transaction, define exactly what gets anonymized or deleted, and test a failure between each step.

Also verify that deleting the profile removes the associated backup and review history, and that it cleans up relevant cached or active multiplayer state. The foreign-key cascade behavior needs to be checked against the actual deployed schema before assuming those records are handled.

## 3. More issues that could affect real users

### Finding D — Browser login state can bypass the visual auth gate

File: [`web/features/auth/components/AuthGate.tsx`](https://github.com/addynoven/manabu/blob/master/web/features/auth/components/AuthGate.tsx)

The component explicitly treats local storage as evidence of an existing session:

```
const hasLocalSession = (() => {
  const u = localStorage.getItem('manabu_user');
  const p = localStorage.getItem('manabu_auth_profile');
  return !!(u || p);
})();
```

The actual code also handles server-side rendering and storage errors, but the core issue remains: the presence of client-controlled values can cause the gate to render its children.

This is not by itself a backend authorization bypass. Your Firebase ID token verification is a separate control. However, it means that frontend access checks must be treated as convenience and not security.

Fix: derive the authenticated state from the Firebase auth lifecycle, and let the server verify the ID token for every private API call. Never use a profile cached in local storage to establish identity.

### Finding E — The client controls the score in multiplayer challenges

Files:

- [`web/app/api/v1/challenges/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/challenges/route.ts)
- [`web/app/api/v1/challenges/[id]/respond/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/challenges/%5Bid%5D/respond/route.ts)

The create-challenge endpoint accepts `creatorScore` from the client. The response endpoint accepts `score` from the other player. Both values are validated as non-negative integers, but the server does not independently verify how those scores were earned.

That means someone can submit a fabricated score and have it become part of the challenge result.

Fix: calculate authoritative scores on the server, or validate an immutable server-recorded game result. For an arcade challenge, the server should own the result that gets persisted, not simply trust the score posted by a client.

This is a confirmed integrity weakness in the inspected score-challenge API, although I have not tested whether the UI or another service imposes additional restrictions.

### Finding F — Rate limiting fails open

File: [`web/core/network/rateLimit.ts`](https://github.com/addynoven/manabu/blob/master/web/core/network/rateLimit.ts)

The implementation correctly uses an atomic Valkey increment for its normal path. However, on a Valkey failure it returns:

```
return { allowed: true, remaining: 1 };
```

That is a deliberate fail-open policy.

For a learning app, that may be acceptable for some non-critical functionality. For endpoints vulnerable to spam, account abuse, or expensive requests, it means the rate limit stops protecting you precisely when the dependency is unavailable.

Fix: classify routes by risk. Apply a fail-closed or independently enforced fallback limit to sensitive operations, and emit alerts when the limiter becomes unavailable.

### Finding G — The profile sync API trusts client-supplied progression

File: [`web/app/api/v1/profile/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/profile/route.ts)

The profile update validates values such as `totalXp`, `level`, and `currentStreak`, then writes them to PostgreSQL from the client payload.

Validation ensures these fields have acceptable shapes and ranges. It does not prove they represent achievements legitimately earned.

An authenticated user can potentially submit an arbitrary high XP value or level, subject to the accepted numeric constraints. Profile progression then becomes untrustworthy as a competitive measure.

Fix: distinguish between display preferences and authoritative game state. Let clients submit learning events, and calculate XP, streaks, levels, and leaderboard values on the server. If offline progress must be supported, define explicit reconciliation rules rather than accepting every snapshot as authoritative.

### Finding H — Social operations have race conditions

File: [`web/app/api/v1/friends/requests/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/friends/requests/route.ts)

The endpoint checks whether users are already friends, counts their friends, checks pending requests, and then performs an insertion. These are separate queries, with no enclosing transaction in the inspected handler.

Two simultaneous requests can pass the checks before either insertion completes. The same pattern can undermine the 50-friend limit or create competing requests unless the database has appropriate uniqueness constraints and the mutations are made concurrency-safe.

Fix: enforce the actual invariants in PostgreSQL, add appropriate unique indexes, and use transactions with suitable locking or atomic insert patterns. Application-side checks alone cannot guarantee correctness under concurrency.

### Finding I — Some settings do not reach the underlying systems

File: [`web/features/auth/screens/settings/SettingsScreen.tsx`](https://github.com/addynoven/manabu/blob/master/web/features/auth/screens/settings/SettingsScreen.tsx)

The settings component keeps retention, voice, and speed values in React state. Its save handler persists these keys in browser local storage:

```
localStorage.setItem(
  'manabu_fsrs_retention',
  String(retentionRate)
);

localStorage.setItem('manabu_voice', voicePack);
```

However, the server-side SRS repository reads `desired_retention` from PostgreSQL. I did not find an end-to-end write connecting the web slider to that database field in the inspected settings handler.

Similarly, the speech-speed control updates `speechSpeed`, but the playback calls shown in the component do not pass that value to the speech synthesizer.

The distinction is simple: saving a preference is not the same as applying it.

Complete the data flow for each setting:

`UI → validated preference → persistence → consuming service → observable behavior`

Either implement the actual behavior or clearly mark the control as unavailable until it is supported.

## 4. Engineering strengths worth preserving

The audit is not all negative. Several implementation choices are genuinely good.

SRS reviews use database transactions

`SrsRepository.executeReviewTransaction()` updates the card state, writes a review log, and awards XP inside one PostgreSQL transaction. It also uses `FOR UPDATE` to lock an existing card row. Preserve this approach; investigate the concurrent first-review case separately because a missing row cannot be locked.

Parameterized database queries

The inspected profile, SRS, and social endpoints generally pass values through query parameters instead of interpolating user input into SQL. That is an important protection against SQL injection.

Authentication verifies Firebase tokens server-side

`web/features/auth/repositories/auth.ts` uses `jose` to verify Firebase ID tokens against the expected issuer and audience. That is a much stronger identity boundary than trusting local storage.

A meaningful testing foundation

The repo includes tests for learning engines, authentication state, synchronization, and multiple arcade mechanics. It also has a GitHub Actions workflow covering web typechecking, tests, and a production build.

The system has clear domain boundaries

Separating mobile features, web features, infrastructure, and data-access repositories gives you places to enforce business rules without putting everything into route handlers or UI components.

These strengths make the project a reasonable candidate for hardening rather than rewriting from scratch.

## 5. Architecture audit

Here is how I would assess the system's engineering maturity from the repository.

| Area                | Assessment                        | Main concern                                           |
| ------------------- | --------------------------------- | ------------------------------------------------------ |
| Mobile architecture | Good foundation                   | Synchronization and state ownership                    |
| Web architecture    | Good foundation, uneven execution | Documented rules are not consistently enforced         |
| Authentication      | Needs hardening                   | Admin secret/session design                            |
| Authorization       | Needs review                      | UI gates are not security boundaries                   |
| Database integrity  | Mixed                             | Transactions and concurrency controls are inconsistent |
| Spaced repetition   | Promising                         | Test concurrent reviews and missing-row cases          |
| Multiplayer         | Needs hardening                   | Trust boundaries and atomic state transitions          |
| Caching             | Useful foundation                 | Invalidation and failure behavior                      |
| Testing             | Good breadth on mobile            | More web API and integration coverage needed           |
| Deployment / CI     | A useful start                    | Workflow does not typecheck or test the mobile app     |

These are qualitative engineering assessments based on the source I inspected, not results from running the application or benchmarking its performance.

One additional issue: `web/core/db/postgres.ts` configures PostgreSQL TLS with `rejectUnauthorized: false` when no CA certificate is supplied. That disables server-certificate verification. Configure and verify the appropriate CA in production instead of silently accepting an unverified database certificate.

Also, the repository has a single GitHub Actions workflow that runs web typechecking, tests, and a production build. The README separately documents mobile typechecking, but those mobile checks are not present in that CI workflow. I did not run the workflow, so its current pass/fail status remains unverified.

## 6. What I would fix first

The order matters. Do not start by reorganizing folders or replacing your state-management library. Fix the correctness and security boundaries first.

## Phase 1 — Secure the application

First priority

Remove hard-coded admin secrets and fail closed on missing configuration

Replace the raw-secret admin cookie with a secure session design

Verify protected routes and every sensitive server/API operation

Stop trusting client-supplied scores and XP as authoritative

Restore PostgreSQL TLS certificate verification

0 of 5 marked complete

## Phase 2 — Make data mutations reliable

Wrap account deletion and associated data changes in a transaction

Make friend-request acceptance and creation concurrency-safe

Use atomic compare-and-set transitions for multiplayer state

Define idempotency rules for repeat submissions

Add explicit conflict handling to cloud progress synchronization

0 of 5 marked complete

## Phase 3 — Prove correctness with tests

Add API integration tests for admin authorization and user ownership

Test simultaneous submissions to the same SRS card

Test concurrent friend requests and friend-limit enforcement

Test sync conflicts across two devices

Add mobile typecheck and relevant tests to CI

0 of 5 marked complete

## 7. How I would improve the codebase without overengineering it

Your `NEXTJS_ARCHITECTURE_BLUEPRINT.md` contains a lot of good architectural intent: thin route adapters, feature modules, repositories, typed boundaries, caching, and tests. The gap is the distance between the written rules and the existing implementation.

I would focus on enforcing a small set of invariants:

- Identity: the server determines who the user is from a verified credential.
- Ownership: every private query and mutation is scoped to that identity.
- Authority: the server calculates consequential progression and game results.
- Atomicity: a single business operation either commits completely or does not commit.
- Idempotency: retrying a request does not duplicate its effects.
- Consistency: multiple devices cannot silently overwrite newer state with older snapshots.

Those rules transfer across frameworks. They matter whether you use Next.js, FastAPI, Spring Boot, or Go.

For example, consider an SRS review. The important sequence is not simply “update a row.” It is:

1. Verify the learner's identity.
2. Validate the review event.
3. Lock or safely claim the card state.
4. Calculate the next FSRS state.
5. Persist the card transition, review log, and XP update in one transaction.
6. Prevent duplicate requests from awarding XP twice.
7. Invalidate cached review data.

Your implementation already covers much of this sequence. Adding a deliberate idempotency strategy and regression tests would make that core substantially stronger.

## 8. Final verdict

# Keep building Manabu. Harden it before expanding it.

Manabu demonstrates a meaningful breadth of full-stack engineering: a substantial mobile app, a separate web application, domain-specific learning engines, a relational database, caching, and multiplayer workflows. The repository also contains useful tests and architectural documentation.

The biggest risk is not that the project is too small or uses the wrong framework. It is that a handful of security and data-integrity problems exist at boundaries between otherwise sensible components.

My recommendation is to freeze new feature development temporarily and complete the first two hardening phases. Then run the full web and mobile checks, test the critical API paths, and verify the deployed environment before describing the system as production-ready.

One limitation to be explicit about: I inspected source files and repository metadata, but did not run the application, execute the test suites, query the production database, or perform live exploit testing. The findings above are code-review findings, with exploitability and runtime impact still requiring verification where noted.

The source files to start with are [`web/app/api/admin/auth/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/admin/auth/route.ts), [`web/app/api/v1/account/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/account/route.ts), [`web/app/api/v1/profile/route.ts`](https://github.com/addynoven/manabu/blob/master/web/app/api/v1/profile/route.ts), and [`web/features/duels/repositories/duels.ts`](https://github.com/addynoven/manabu/blob/master/web/features/duels/repositories/duels.ts).

Those give you a focused starting point for turning this ambitious project into a more reliable system.
