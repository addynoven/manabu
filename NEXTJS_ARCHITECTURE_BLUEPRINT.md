# Next.js App Router Architecture Blueprint & Playbook (v4)

> Domain-agnostic spec for Next.js App Router apps. Written for solo devs, teams, and AI coding agents.
> **Prime directive: one architecture, full structure from day one. Nothing is ever "upgraded" or moved later, so there is no migration phase.**

---

## 0. One Architecture, No Tiers

Every project starts with the full skeleton: `app/`, `core/`, `features/`, import boundaries, repositories, Server Actions, error/loading files, cache adapter, tests setup, CI.

### Why no "start lean, upgrade later"
The expensive part of a rewrite is not adding Redis or a queue. It is **moving files and rewriting imports** across the whole codebase (e.g. `lib/` to `core/`, deep imports into feature internals, logic living in `app/`), while humans and AI agents keep producing code in the old shape. A full skeleton from day one means growth only ever means *adding files inside folders that already exist*.

### What stays small at the start (content, not structure)
- A feature begins with only the files it needs, but they live in the final folders (`repositories/`, `actions/`, `screens/`, `models/`).
- Infrastructure sits behind a seam from day one: `core/cache` has one interface; the driver is Valkey in production and in-memory locally. Turning caching on for a query is a one-line change in that repository, not a refactor.
- No speculative features: no pub/sub or multi-region logic until a real requirement exists. These plug into `core/` without moving anything.
- **Out of scope for now (revisit when on the roadmap):** multi-tenancy, microservices, multi-region.

### Full structure is only fast if it is generated
Hand-writing boilerplate is what makes "go full" feel slow. Keep a generator (`bun run gen:feature <name>`, via plop/hygen or a small script) that creates the whole feature folder, barrel exports, a test stub and a route adapter. Agents must use it instead of creating folders by hand.

---

## 1. Layout

```text
/
├── app/            # Routing adapters + app/api route handlers
├── core/           # Shared foundations (db, cache, auth, config, errors, ui primitives)
├── features/       # Self-contained domain modules
├── data/           # Static datasets, seeds
├── worker/         # Long-running BullMQ worker process (deployed separately from Vercel)
├── public/
├── proxy.ts        # Edge auth gate (named middleware.ts on Next <16)
└── types.ts
```

### 1.1 Golden rule of `app/`
Routes are thin adapters (<10 lines) importing screens from `@/features/<feature>/screens`.

```tsx
// app/dashboard/page.tsx
import { DashboardScreen } from '@/features/analytics/screens';
export default function Page() { return <DashboardScreen />; }
```

Never put business logic, heavy hooks, big markup, or SQL in `app/*.tsx`.
Route-level special files (`layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `generateMetadata`) also live in `app/` but stay thin: they import from features/core.

---

## 2. Server-first rules (the biggest missing piece in v3)

1. **Server Components by default.** Add `'use client'` only for state, effects, browser APIs, or event handlers. Push `'use client'` as far down the tree as possible.
2. **Fetch on the server first.** Screens that show initial data are Server Components that call repositories directly. Do not make the client fetch data the server could have rendered.
3. **Mutations: Server Actions by default**, route handlers (`app/api/**`) only for webhooks, third-party/mobile clients, or streaming.
4. **Every Server Action and route handler**: authenticate, authorize, validate input (Zod), then call the repository. No exceptions.
5. **React Query / SWR is for client-side interactivity** (polling, optimistic updates, infinite scroll), not a replacement for server fetching.
6. **Hybrid pattern when you need both**: prefetch on the server, pass via `HydrationBoundary`, hydrate into React Query.
7. **Caching in Next**: be explicit per fetch/query. Know which data is static, revalidated (`revalidateTag`/`revalidatePath`), or dynamic. Document the choice in the feature README when it is non-obvious.
8. Never import server-only code into client files: mark with `import 'server-only'` in repositories, db, auth.

---

## 3. Shared Foundations (`core/`)

```text
core/
├── api/        # httpClient.ts (traced fetch), response.ts (ok/fail helpers)
├── auth/       # session.ts (verify/create), permissions.ts (RBAC helpers)
├── cache/      # cache.ts (interface), valkey driver, in-memory driver
├── queue/      # BullMQ queue factory + connection
├── email/      # provider interface (Resend/SES/Postmark driver)
├── components/ # AppHeader, AuthGate, FeatureGate, Button, Modal
├── db/         # postgres.ts, valkey.ts, migrations/
├── config/     # config.schema.ts (Zod env), config.ts, flags.ts
├── errors/     # result.ts, AppError, captureError, ErrorBoundary
├── logging/    # logger.ts (structured JSON, request id)
├── security/   # rate-limit.ts, headers.ts, csrf.ts
├── storage/    # indexedDB.ts, localStorage.ts (client only)
└── theme/
```

---

## 4. Auth & Session (corrected)

1. Session token in an `HttpOnly; Secure; SameSite=Lax` cookie (`app_session`).
2. **Edge proxy checks only what the edge can check**: signature + expiry of a signed token (JWT/JWE). Edge cannot reliably use `pg` or hit your DB. Treat it as a fast redirect gate, not as authorization.
3. **Real authorization happens on the server** in `getSession()` + permission checks inside repositories/actions. Never trust the proxy alone (it can be bypassed by misconfigured matchers).
4. The root server layout reads the session and passes it to a client `SessionProvider`. Client components read from that provider. This gives instant, flash-free authed UI without localStorage.
5. **Do not gate on localStorage.** v3's `hasLocalSession` pattern can cause hydration mismatches and shows "authed UI" to logged-out users. If you need an offline hint, use it only to pick a skeleton, never to unlock content.
6. Cookie auth means **CSRF matters**: Server Actions have built-in origin checks; custom route handlers that mutate must verify `Origin` or use a CSRF token.
7. Authorization model: roles + ownership. Every repository function that touches user data takes `userId` and filters by it. "Forgot the WHERE user_id" is the most common data-leak bug.

### 4.1 Loading lifecycle
- Cold load: route `loading.tsx` / Suspense skeleton matching final layout.
- Warm navigation: Next client router cache + React Query in-memory cache render instantly.
- **Hard reload does not keep React Query's cache** unless you add `persistQueryClient`. Don't promise 0ms on reload; promise instant SSR HTML plus skeleton for client-only data.
- Skeletons match layout dimensions to avoid layout shift.

### 4.2 Zero-flash AuthGate (server-session version)
```tsx
// core/components/AuthGate.tsx  ('use client')
export function AuthGate({ children }: { children: React.ReactNode }) {
  const { session } = useSession(); // hydrated from server layout
  if (!session) return <AuthModalOverlay />;
  return <>{children}</>;
}
```
UI gate only. Data is protected by server checks.

---

## 5. Data & Caching

### 5.1 Layers (all wired from day one, each behind a seam)
1. **Server fetch + Next cache** for Server Components.
2. **React Query/SWR** for client interactivity.
3. **`core/cache`** (Valkey in production, in-memory driver locally). Repositories decide per query whether to cache and for how long (default TTL 5 min; choose per data type). Features never talk to Redis directly.

### 5.2 Invalidation (corrected)
- Client: invalidate query keys from `keys.ts`.
- Next: `revalidateTag` / `revalidatePath` in the mutation.
- Redis: **`DEL` does not support wildcards.** `valkey.del("app:cache:uid*")` deletes nothing. Use one of:
  - **Key versioning (preferred):** store `cache:ver:{uid}`; include it in every key; invalidate by `INCR`.
  - **Tag sets:** `SADD tag:{uid} key`, then `DEL` all members.
  - `SCAN` + `UNLINK` only for rare admin purges, never on a hot path.
- Always invalidate after the DB write commits, not before.
- Cache stampede: for hot keys use short lock or stale-while-revalidate on the server.

### 5.3 Database
- Migrations are versioned, forward-only, committed (Drizzle Kit / Prisma Migrate / node-pg-migrate; pick one per project).
- Use transactions for multi-step writes.
- Index every foreign key and every column used in `WHERE`/`ORDER BY` on large tables; check with `EXPLAIN` before adding cache.
- Connection pooling: respect serverless limits (pooler like PgBouncer or provider pooling).
- Seed script in `data/` for local dev.

---

## 6. Feature Module (`features/<name>/`)

```text
features/<name>/
├── components/     # private widgets
├── engine/         # pure domain logic (no React, no IO)
├── hooks/          # client hooks
├── actions/        # Server Actions ('use server')
├── jobs/           # BullMQ job definitions: Zod payload + processor
├── models/         # Zod schemas + inferred types
├── repositories/   # data access ('server-only'), returns Result<T, AppError>
├── screens/<screen>/{components/,<Screen>.tsx,index.ts}
├── store/          # Zustand (client UI state only)
├── __tests__/
├── keys.ts
└── index.ts        # public API (only export what other features may use)
```

### 6.1 Import boundaries (enforce with ESLint)
- `app/` → may import `features/*/index.ts`, `core/*`.
- `features/A` → may import `core/*` and `features/B/index.ts` only. **Never deep-import another feature's internals.**
- `core/` → never imports from `features/` or `app/`.
- `engine/` → imports nothing from React, db, or next.
- Use `eslint-plugin-boundaries` or `no-restricted-imports`; make CI fail on violation.

### 6.2 State placement
| State | Where |
|---|---|
| Server data | Server Components / React Query |
| URL-shareable (filters, tabs, page) | Search params (`nuqs` or `useSearchParams`) |
| Form state | `react-hook-form` + Zod resolver, or native form + Server Action |
| Ephemeral UI | `useState` |
| Cross-component client UI | Zustand |
Do not copy server data into Zustand.

---

## 7. Errors & Validation

- **Result vs throw:** repositories and actions return `Result<T, AppError>` for expected failures (not found, validation, forbidden). Throw only for programmer errors/unexpected crashes; let `error.tsx` catch them.
- `AppError` has `code` (stable string), `message` (safe for users), `cause`, `status`.
- Validate at boundaries: env vars (startup), request bodies, action inputs, external API responses. **Do not re-validate every internal DB row** unless the schema can drift (raw SQL, JSON columns).
- Never leak stack traces or SQL errors to the client.
- Every route segment with data has `loading.tsx` and `error.tsx`; add `not-found.tsx` where `notFound()` is used.

---

## 8. Security Baseline

- Security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors`) via `next.config` or proxy.
- Rate limit auth endpoints, mutations, and anything public (Valkey token bucket through `core/cache`; in-memory driver locally).
- Secrets only in env, validated by `config.schema.ts`; never `NEXT_PUBLIC_` for secrets.
- Sanitize user-generated HTML (DOMPurify) before `dangerouslySetInnerHTML`; prefer not using it.
- File uploads: validate type/size server-side, use signed URLs to object storage.
- Dependencies: `bun audit` / Dependabot weekly; pin major versions.
- Log auth events; never log tokens, passwords, or full PII.

---

## 9. Code Quality Standards

1. File limits: sub-component 150 lines, screen assembler 180, anything >250 must be split. (Guideline, not worship: split by responsibility first, line count second.)
2. TypeScript `strict: true`, plus `noUncheckedIndexedAccess`. Zero `any`, zero `@ts-ignore` (use `@ts-expect-error` with a reason if truly needed).
3. UI never calls SQL or raw fetch; goes through repositories/actions/hooks.
4. Naming: components `PascalCase.tsx`, hooks `useX.ts`, repositories `xRepository.ts`, Zod schemas `xSchema`, types inferred (`type X = z.infer<typeof xSchema>`).
5. No barrel files that import the whole world: barrels (`index.ts`) only at feature and screen boundaries, to keep bundles and cycles under control.
6. Comments explain *why*, not *what*. Delete dead code; git remembers.
7. Prefer composition over config-heavy mega-components.

---

## 10. Testing Strategy

| Layer | Tool | What |
|---|---|---|
| `engine/` | Vitest | Pure logic, high coverage, fast |
| `repositories/` | Vitest + real test DB (Docker/Testcontainers) | Queries, ownership filters, transactions |
| Actions/handlers | Vitest | Authz, validation, error mapping |
| Screens/components | Testing Library | Critical interactions only |
| E2E | Playwright | 3 to 5 golden paths (login, core create/edit, payment) |

- Mock at the network/DB edge, not internal modules.
- Every bug fix ships with a regression test.
- CI runs typecheck, lint, unit, build; E2E on main or PR label.

---

## 11. Observability, Performance, Accessibility

- **Logging:** structured JSON logger with request id; one log line per request/action outcome.
- **Errors:** `captureError()` wraps Sentry (or equivalent) with user id + route, no PII.
- **Performance:** use `next/image`, `next/font`, dynamic import for heavy client libs, `Suspense` streaming for slow sections. Check bundle with `@next/bundle-analyzer` before adding any large dependency. Watch Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1).
- **Accessibility:** semantic HTML first, keyboard-navigable modals (focus trap + Esc), labels on inputs, color contrast AA, `eslint-plugin-jsx-a11y` on.
- **SEO/Metadata:** `generateMetadata` per public route, `sitemap.ts`, `robots.ts`, OG images.
- **i18n (only if needed):** decide early (`next-intl`); retrofitting is painful.

---

## 12. Background Jobs, Webhooks & Email

### 12.1 Queue: BullMQ on Valkey/Redis (part of the base from day one)
- `core/queue/` exposes a queue factory and the connection. Features define jobs in `features/<name>/jobs/<job>.job.ts`: a Zod payload schema plus a processor function.
- `worker/index.ts` registers every processor and runs as its own process (`bun run worker` locally).
- Rules:
  1. Validate payloads with Zod on enqueue and on process.
  2. **Jobs must be idempotent** (safe to run twice). Retries will happen.
  3. Retries with exponential backoff; failed jobs stay in the failed set and trigger an alert (section 13.3).
  4. Processors hold no business logic: they call the feature's `engine/` and `repositories/`.
  5. Enqueue **after** the DB write commits.
  6. Scheduled work uses BullMQ job schedulers (repeatable jobs), not a separate cron system.

### 12.2 Where the worker runs
Vercel functions can **enqueue** jobs, but they are short-lived and cannot host a worker. Run `worker/` as an always-on process (Docker on Railway, Fly.io, a VPS, etc.). Document the target in the deploy notes.

### 12.3 Redis/Valkey configuration
- BullMQ needs `maxmemory-policy noeviction` (it must never lose job keys). A cache usually wants an eviction policy. **Use separate instances for queue and cache**, or you risk losing jobs under memory pressure.
- Workers need `maxRetriesPerRequest: null` on the ioredis connection.
- Valkey is Redis-protocol compatible and generally works with BullMQ; verify with a smoke test in CI.

### 12.4 Webhooks
- **API call:** you call them, when you want something ("is payment X paid?").
- **Webhook:** they call you, when something happens on their side ("payment X just succeeded"), at a URL you registered. Same HTTP mechanics, opposite direction. Payments need it because the user pays on the gateway's page and your server cannot know when it finishes.
- Rules for every webhook route (`app/api/webhooks/<provider>/route.ts`, thin adapter into `features/<f>/`):
  1. **Verify the signature** using the raw body and the provider's secret. Reject otherwise.
  2. **Respond 2xx fast**; do the real work in a queue job.
  3. **Idempotency:** store the provider's event id; ignore duplicates (providers retry and sometimes send twice).
  4. Don't assume ordering; re-fetch current state from the provider when it matters.
  5. Log event id and outcome; never log secrets or card data.
  6. Test locally with the provider's CLI or a tunnel; keep a sample payload fixture for tests.
- For payments: your database is the source of truth, updated by the verified webhook. A redirect back to your site from the gateway is a hint, not proof.

### 12.5 Email
Send through `core/email` (provider interface, one driver) from a queue job, never inline in a request. Templates live in the feature that owns them.

---

## 13. Operations

### 13.1 Database migrations without downtime
During a deploy, old and new code run side by side for a while, so a migration must work with both. Use **expand then contract**:
1. **Expand:** add the new column/table (nullable or with a default). Deploy.
2. Code writes to both old and new; **backfill** old rows (in a job, in batches).
3. Switch reads to the new column. Deploy.
4. **Contract:** drop the old column in a later deploy.
   Never rename or drop a column in the same deploy as the code that stops using it. Large index builds: `CREATE INDEX CONCURRENTLY`. Take a backup before any destructive migration.

### 13.2 Environments
- **Local:** own database, seeded from `data/`.
- **Preview:** Vercel deploys a preview per PR; point it at a separate preview/staging database, never production.
- **Production:** deploys from `main` only after CI is green.
- Same env var names everywhere, validated by `config.schema.ts`.

### 13.3 Monitoring minimum
- Error tracking (Sentry or equivalent) via `captureError()`.
- `GET /api/health` (checks DB and Valkey); external uptime monitor pings it and alerts you.
- Alert when a queue's failed-job count grows or jobs stall.
- Vercel logs and analytics on; structured logs from section 11.
- `RUNBOOK.md` in the repo: how to roll back a deploy, how to restore the database, where logs and dashboards are, who/what to check first.

---

## 14. Privacy & Compliance (asked at project start)

When a project is created, the generator asks which level applies, and records the answer in `docs/privacy.md`:

| Level | Meaning | Baseline |
|---|---|---|
| 0 | Hobby/no personal data | Don't collect what you don't need; no secrets in logs |
| 1 | Normal app with accounts | Privacy policy + terms, cookie consent where required, user data export and delete, minimal PII, encryption in transit, backups |
| 2 | Sensitive data or regulated users | Level 1 plus audit log of reads/writes to sensitive data, retention schedule, data-processor agreements with vendors, field-level encryption where needed, access reviews |

Always: collect the minimum, know where personal data lives (a short data map in `docs/privacy.md`), and make account deletion actually remove or anonymise data including caches and queue payloads. This is engineering guidance, not legal advice; check the rules for your users' regions.

---

## 15. Project Hygiene & Delivery

- **ADRs:** one short markdown file per significant decision in `docs/adr/NNN-title.md` (context, decision, consequences). Required for every significant architecture decision.
- **Generator:** `bun run gen:feature <name>` scaffolds a complete feature (folders, barrels, test stub, route adapter). Never create feature folders by hand.
- **Env:** `.env.example` committed, real `.env*` ignored, validated at boot.
- **Formatting & linting:** Prettier (formatting) + ESLint (rules, import boundaries). One config, committed.
- **Pre-commit hook (Husky + lint-staged):** on each commit, run ESLint `--fix` and Prettier only on the staged files. Keep it fast (seconds); typecheck can run on pre-push, and the full build belongs to CI. Setup:
  1. `bun add -D husky lint-staged` then `bunx husky init`
  2. Put `bunx lint-staged` in `.husky/pre-commit`
  3. In `package.json`: `"lint-staged": { "*.{ts,tsx}": ["eslint --fix", "prettier --write"], "*.{json,md,css}": ["prettier --write"] }`
- **CI (GitHub Actions):** install, typecheck, lint, test, build, (optional) E2E. Branch protection: `main` requires green CI. Vercel deploys automatically from `main` and creates previews per PR.
- **Git:** small PRs, Conventional Commits, no direct pushes to main.
- **Feature flags:** flat boolean object in `flags.ts`; remove flags after rollout.
- **Deploy:** document target (Vercel/Docker), required env vars, DB migration step, rollback plan.
- **Backups & recovery:** DB backups enabled, restore tested at least once.

---

## 16. Definition of Done

A task is complete only when all are true:
1. `bunx tsc --noEmit` passes with 0 errors.
2. `bun run lint` passes.
3. `bun run test` passes (new logic has tests).
4. `bun run build` passes with 0 errors.
5. New data access has authz + ownership checks and input validation.
6. Loading, empty, and error states exist for every new screen.
7. No new dependency without a one-line justification.

---

## 17. Agent Skills (from skills.sh)

Skills are installable instruction packs that keep an agent on current Next.js patterns instead of falling back to Pages Router habits. Install with `npx skills add <owner/repo>` (see the skills.sh CLI docs for picking individual skills from a repo).

### 17.1 Core set (install on day one)
| Skill | Source | Why it fits this blueprint |
|---|---|---|
| `next-best-practices` | `vercel-labs/next-skills` | File conventions, RSC boundaries, data patterns, async APIs, metadata. Backs sections 1 and 2. |
| `vercel-react-best-practices` | `vercel-labs/agent-skills` | 69 React/Next performance rules (waterfalls, bundle size, re-renders). Backs sections 2 and 11. |
| `vercel-composition-patterns` | `vercel-labs/agent-skills` | Composable component architecture. Backs the screen/component split in section 6. |

### 17.2 Add when the need appears
| Skill | Source | Add when |
|---|---|---|
| `next-cache-components` | `vercel-labs/next-skills` | You adopt PPR / the `use cache` directive (`cacheLife`, `cacheTag`, `revalidateTag`). Overlaps section 5, so adopt it deliberately. |
| `web-design-guidelines` | `vercel-labs/agent-skills` | UI review pass: accessibility and interface guidelines (section 11). |
| `frontend-design` | `anthropics/skills` | You want distinctive UI instead of templated defaults. |
| `shadcn` | `shadcn/ui` | Your design-system primitives are shadcn/ui. |
| `deploy-to-vercel` | `vercel-labs/agent-skills` | You actually deploy to Vercel (not needed for other targets). |
| `turborepo` | `vercel/turborepo` | You move to a monorepo. |
| `ai-sdk` | `vercel/ai` | You build chat/streaming/tool-calling features with the Vercel AI SDK. |

### 17.3 Match your database (pick the one you use, ignore the rest)
- Prisma: `prisma-client-api`, `prisma-cli`, `prisma-postgres`, `prisma-database-setup` (`prisma/skills`).
- Supabase: `supabase`, `supabase-postgres-best-practices` (`supabase/agent-skills`).
- Neon: `neon-postgres` (`neondatabase/agent-skills`).
- Plain `pg` / Drizzle: no dedicated skill from the directory page; section 5.3 covers it.

### 17.4 Process skills (optional, pair with section 16)
- `test-driven-development`, `systematic-debugging`, `verification-before-completion` (`obra/superpowers`) and `tdd` (`mattpocock/skills`) reinforce the Definition of Done and the testing strategy.

### 17.5 Rules for using skills
1. **Blueprint wins on conflict.** Skills are generic; this document is your house style (thin routes, import boundaries, Result types, full structure from day one).
2. **Install the core set only**, then add one skill at a time when a real need appears. More skills means more context for the agent to read and more chances of contradictory advice.
3. **Review before installing.** A skill is third-party instructions your agent will follow. Prefer official/known publishers and check the skills.sh audits page and the repo's `SKILL.md` first.
4. **Pin and re-check.** Re-read installed skills after major Next.js upgrades so they don't push outdated APIs.
5. Skills apply to any host; Vercel-specific ones are only for Vercel deployments.

---

## 18. Master Prompt for AI Coding Agents

```text
I am building a Next.js App Router application. Follow this blueprint.

PRIME RULE: One architecture, full structure from day one. Never create a "temporary simple"
layout that would need files moved later. Create features with `bun run gen:feature <name>`.
Do NOT add speculative infrastructure (pub/sub, multi-region, multi-tenancy) without a stated requirement.

Structure:
- app/: thin routing adapters (<10 lines) + app/api handlers. No business logic.
- features/<feature>/: components, engine, hooks, actions, models, repositories, screens/<screen>, store, __tests__, keys.ts, index.ts
- core/: db, cache, auth, config, errors, logging, security, shared UI.
- Features import other features only via their index.ts. core never imports features.

Rules:
1. Server Components by default; 'use client' only where needed and as low in the tree as possible.
2. Fetch on the server first. Mutations via Server Actions; route handlers only for webhooks/external clients.
3. Every action/handler: authenticate -> authorize (ownership) -> validate with Zod -> repository.
4. Repositories are 'server-only', return Result<T, AppError>, always filter by userId.
5. Auth: HttpOnly session cookie, verified server-side. Proxy/middleware is only a fast gate. Never gate on localStorage.
6. Cache only through core/cache (Valkey prod, in-memory dev); never call Redis from features. Invalidate via key versioning or tag sets (DEL has no wildcards).
7. Each route segment with data has loading.tsx and error.tsx.
8. TypeScript strict, zero any, zero @ts-ignore. Files: components <=150 lines, screens <=180.
9. Add tests for new logic and a regression test for every bug fix.
10. No new dependency without a one-line justification.
11. Background work goes through BullMQ (core/queue, features/<f>/jobs, worker/): Zod payloads, idempotent jobs, retries, never inline in a request. Email is sent from a job.
12. Webhook routes: verify signature on raw body, respond 2xx fast, dedupe by event id, process in a job. Redirects from payment gateways are never proof of payment.
13. Migrations are backward-compatible (expand then contract); never drop or rename in the same deploy as the code change.
14. If agent skills are installed (next-best-practices, vercel-react-best-practices, vercel-composition-patterns), use them for Next/React specifics, but THIS blueprint wins on any conflict.

Before declaring done: bunx tsc --noEmit, bun run lint, bun run test, bun run build must all pass with 0 errors.
```