---
name: nextjs-rules
description: Essential Next.js App Router 3-tier architecture, folder conventions, and hard rules. ALWAYS USE THIS SKILL WHENEVER the user says "setup Next.js as I like it", "follow our Next.js rules", "make Next.js project properly", "setup nextjs with rules", "build Next.js app", "create Next.js feature", or asks to scaffold, structure, write, refactor, or review any Next.js App Router project (app/ core/ features/ layout, Server Components, repositories, Server Actions, cookie session auth, 2-layer caching, BullMQ jobs, DB migrations, file limits, tests).
---

# Next.js Master Rules

One architecture, full structure from day one. Nothing is "upgraded" or moved later. Content stays small; the skeleton is always complete.

## Workflow

1. **New feature?** Run `bun run gen:feature <kebab-name>`. Never create feature folders by hand. Then fill in, in this order: `models/` (Zod) -> `repositories/` -> `actions/` -> `screens/`.
2. **Read the reference for the area you are touching** (`references/`) before writing code. Read only what you need.
3. **Apply the checklist** below to every change.
4. **Finish with the verification commands.** Do not claim done until they pass.

## Reference map

| Working on | Read | Blueprint sections |
|---|---|---|
| Folder layout, feature modules, import boundaries, file limits, naming | `references/architecture.md` | 0, 1, 3, 6, 9 |
| Server vs client components, fetching, auth/session, caching, Redis invalidation, DB, errors, Zod | `references/server-data-auth.md` | 2, 4, 5, 7 |
| Security, BullMQ jobs, webhooks, payments, email, migrations, environments, monitoring, privacy | `references/security-jobs-ops.md` | 8, 12, 13, 14 |
| Tests, logging, performance, a11y, CI, git, definition of done | `references/testing-delivery.md` | 10, 11, 15, 16 |

## Hard rules

1. Server Components by default. `'use client'` only where needed, as low as possible.
2. Fetch on the server first. Mutations via Server Actions; route handlers only for webhooks and external clients.
3. Every action/handler: authenticate -> authorize (ownership) -> validate (Zod) -> repository.
4. Repositories: `import 'server-only'`, return `Result<T, AppError>`, always filter by `userId`.
5. Features import other features only via `index.ts`. `core/` never imports `features/` or `app/`. (ESLint enforces this.)
6. Cache only through `core/cache`. Redis `DEL` has no wildcards: use key versioning or tag sets.
7. Background work = BullMQ jobs: Zod payloads, idempotent, retried, never inline in a request.
8. Webhooks: verify signature on raw body, 2xx fast, dedupe by event id, process in a job.
9. Migrations: expand, then contract. Never drop/rename in the same deploy as the code change.
10. Auth: HttpOnly session cookie verified on the server. Proxy is only a fast gate. Never gate on localStorage.
11. TypeScript strict. No `any`, no `@ts-ignore`. Components <= 150 lines, screens <= 180, files <= 250.
12. No new dependency without a one-line justification.

## Done means

```bash
bun run typecheck && bun run lint && bun run test && bun run build   # all 0 errors
```
New logic has tests; bug fixes have regression tests; new screens have loading, empty and error states.
