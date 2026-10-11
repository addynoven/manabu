# Next.js App Router Architecture Blueprint & Playbook (v4)

> Domain-agnostic spec for Next.js App Router apps. Written for solo devs, teams, and AI coding agents.
> **Prime directive: build the simplest thing that works. Add complexity only after hitting a real, measured limit.**

---

## 0. Tier Selection (and how to move between tiers)

### Tier A: Lean (default for every new project)
- Folders: `app/` + `features/` + a small `lib/` (no `core/` split yet).
- Data: direct queries in a `repositories/` file per feature. Server Components fetch directly.
- Client cache: React Query or SWR only where the UI needs live/optimistic data.
- Auth: signed session cookie, verified in a server helper (`getSession()`).
- No Redis, no pub/sub, no multi-layer cache, no Zod on every DB row.

### Tier B: Full Core (only when a trigger below is hit)
3-tier layout (`app/` `core/` `features/`), Redis/Valkey cache, edge proxy auth, API contracts, atomic invalidation.

### Upgrade triggers (move only when one is true, and measured)
| Trigger | Upgrade |
|---|---|
| Same query is slow (>300ms p95) AND read-heavy | Add Valkey cache for that query only |
| 2+ devs stepping on each other in shared folders | Split `lib/` into `core/`, enforce import boundaries |
| Third-party/mobile clients need your API | Add Zod-validated public API contracts + versioning |
| Auth checks needed before render on many routes | Add edge proxy (JWT-only check, see section 4) |
| >10k active users or multi-region | Revisit caching + DB read replicas |

Rule: write the trigger and the measurement in an ADR (section 12) before upgrading.

---

## 1. Layout

```text
/
├── app/            # Routing adapters + app/api route handlers
├── core/           # Tier B: shared foundations (db, cache, auth, config, errors, ui primitives)
├── features/       # Self-contained domain modules
├── data/           # Static datasets, seeds
├── public/
├── proxy.ts        # Tier B: edge auth gate (named middleware.ts on Next <16)
└── types.ts
```

Tier A swaps `core/` for `lib/` (same contents, flatter, fewer rules).

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

## 3. Shared Foundations (`core/` or `lib/`)

```text
core/
├── api/        # httpClient.ts (traced fetch), response.ts (ok/fail helpers)
├── auth/       # session.ts (verify/create), permissions.ts (RBAC helpers)
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

### 5.1 Layers (add one at a time)
1. **Server fetch + Next cache** (Tier A default).
2. **React Query/SWR** for client interactivity.
3. **Valkey/Redis** (Tier B, per-query, after measuring). Default TTL 5 min; choose TTL per data type.

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
- Rate limit auth endpoints, mutations, and anything public (Valkey token bucket in Tier B; in-memory or provider-level in Tier A).
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

## 12. Project Hygiene & Delivery

- **ADRs:** one short markdown file per significant decision in `docs/adr/NNN-title.md` (context, decision, consequences). Required for every tier upgrade.
- **Env:** `.env.example` committed, real `.env*` ignored, validated at boot.
- **CI (GitHub Actions):** install, typecheck, lint, test, build, (optional) E2E + preview deploy.
- **Git:** small PRs, Conventional Commits, no direct pushes to main.
- **Feature flags:** flat boolean object in `flags.ts`; remove flags after rollout.
- **Deploy:** document target (Vercel/Docker), required env vars, DB migration step, rollback plan.
- **Backups & recovery:** DB backups enabled, restore tested at least once.

---

## 13. Definition of Done

A task is complete only when all are true:
1. `bunx tsc --noEmit` passes with 0 errors.
2. `bun run lint` passes.
3. `bun run test` passes (new logic has tests).
4. `bun run build` passes with 0 errors.
5. New data access has authz + ownership checks and input validation.
6. Loading, empty, and error states exist for every new screen.
7. No new dependency without a one-line justification.

---

## 14. Agent Skills (from skills.sh)

Skills are installable instruction packs that keep an agent on current Next.js patterns instead of falling back to Pages Router habits. Install with `npx skills add <owner/repo>` (see the skills.sh CLI docs for picking individual skills from a repo).

### 14.1 Core set (install on day one)
| Skill | Source | Why it fits this blueprint |
|---|---|---|
| `next-best-practices` | `vercel-labs/next-skills` | File conventions, RSC boundaries, data patterns, async APIs, metadata. Backs sections 1 and 2. |
| `vercel-react-best-practices` | `vercel-labs/agent-skills` | 69 React/Next performance rules (waterfalls, bundle size, re-renders). Backs sections 2 and 11. |
| `vercel-composition-patterns` | `vercel-labs/agent-skills` | Composable component architecture. Backs the screen/component split in section 6. |

### 14.2 Add when you hit the need (lean rule applies to skills too)
| Skill | Source | Add when |
|---|---|---|
| `next-cache-components` | `vercel-labs/next-skills` | You adopt PPR / the `use cache` directive (`cacheLife`, `cacheTag`, `revalidateTag`). Overlaps section 5, so adopt it deliberately. |
| `web-design-guidelines` | `vercel-labs/agent-skills` | UI review pass: accessibility and interface guidelines (section 11). |
| `frontend-design` | `anthropics/skills` | You want distinctive UI instead of templated defaults. |
| `shadcn` | `shadcn/ui` | Your design-system primitives are shadcn/ui. |
| `deploy-to-vercel` | `vercel-labs/agent-skills` | You actually deploy to Vercel (not needed for other targets). |
| `turborepo` | `vercel/turborepo` | You move to a monorepo. |
| `ai-sdk` | `vercel/ai` | You build chat/streaming/tool-calling features with the Vercel AI SDK. |

### 14.3 Match your database (pick the one you use, ignore the rest)
- Prisma: `prisma-client-api`, `prisma-cli`, `prisma-postgres`, `prisma-database-setup` (`prisma/skills`).
- Supabase: `supabase`, `supabase-postgres-best-practices` (`supabase/agent-skills`).
- Neon: `neon-postgres` (`neondatabase/agent-skills`).
- Plain `pg` / Drizzle: no dedicated skill from the directory page; section 5.3 covers it.

### 14.4 Process skills (optional, pair with section 13)
- `test-driven-development`, `systematic-debugging`, `verification-before-completion` (`obra/superpowers`) and `tdd` (`mattpocock/skills`) reinforce the Definition of Done and the testing strategy.

### 14.5 Rules for using skills
1. **Blueprint wins on conflict.** Skills are generic; this document is your house style (Tier A first, thin routes, import boundaries, Result types).
2. **Install the core set only**, then add one skill at a time when a real need appears. More skills means more context for the agent to read and more chances of contradictory advice.
3. **Review before installing.** A skill is third-party instructions your agent will follow. Prefer official/known publishers and check the skills.sh audits page and the repo's `SKILL.md` first.
4. **Pin and re-check.** Re-read installed skills after major Next.js upgrades so they don't push outdated APIs.
5. Skills applies to any host; Vercel-specific ones are only for Vercel deployments.

---

## 15. Master Prompt for AI Coding Agents

```text
I am building a Next.js App Router application. Follow this blueprint.

PRIME RULE: Build the simplest thing that works. Start in Tier A (lean). Do NOT add Redis,
queues, extra abstraction layers, or "future-proofing" unless I name a measured trigger.
If you think complexity is needed, say why and ask first.

Structure:
- app/: thin routing adapters (<10 lines) + app/api handlers. No business logic.
- features/<feature>/: components, engine, hooks, actions, models, repositories, screens/<screen>, store, __tests__, keys.ts, index.ts
- core/ (or lib/ in Tier A): db, auth, config, errors, logging, security, shared UI.
- Features import other features only via their index.ts. core never imports features.

Rules:
1. Server Components by default; 'use client' only where needed and as low in the tree as possible.
2. Fetch on the server first. Mutations via Server Actions; route handlers only for webhooks/external clients.
3. Every action/handler: authenticate -> authorize (ownership) -> validate with Zod -> repository.
4. Repositories are 'server-only', return Result<T, AppError>, always filter by userId.
5. Auth: HttpOnly session cookie, verified server-side. Proxy/middleware is only a fast gate. Never gate on localStorage.
6. Cache only after measuring. Redis invalidation via key versioning or tag sets (DEL has no wildcards).
7. Each route segment with data has loading.tsx and error.tsx.
8. TypeScript strict, zero any, zero @ts-ignore. Files: components <=150 lines, screens <=180.
9. Add tests for new logic and a regression test for every bug fix.
10. No new dependency without a one-line justification.
11. If agent skills are installed (next-best-practices, vercel-react-best-practices, vercel-composition-patterns), use them for Next/React specifics, but THIS blueprint wins on any conflict.

Before declaring done: bunx tsc --noEmit, bun run lint, bun run test, bun run build must all pass with 0 errors.
```
