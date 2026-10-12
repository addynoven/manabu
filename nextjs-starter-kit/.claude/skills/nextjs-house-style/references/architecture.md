# Architecture, layout, feature modules, code quality

> Contains blueprint sections 0, 1, 3, 6, 9. Section numbers in cross-references (e.g. "section 13.3") refer to the full blueprint; see the map in SKILL.md.

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

## 9. Code Quality Standards

1. File limits: sub-component 150 lines, screen assembler 180, anything >250 must be split. (Guideline, not worship: split by responsibility first, line count second.)
2. TypeScript `strict: true`, plus `noUncheckedIndexedAccess`. Zero `any`, zero `@ts-ignore` (use `@ts-expect-error` with a reason if truly needed).
3. UI never calls SQL or raw fetch; goes through repositories/actions/hooks.
4. Naming: components `PascalCase.tsx`, hooks `useX.ts`, repositories `xRepository.ts`, Zod schemas `xSchema`, types inferred (`type X = z.infer<typeof xSchema>`).
5. No barrel files that import the whole world: barrels (`index.ts`) only at feature and screen boundaries, to keep bundles and cycles under control.
6. Comments explain *why*, not *what*. Delete dead code; git remembers.
7. Prefer composition over config-heavy mega-components.
