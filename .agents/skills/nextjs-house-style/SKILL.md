---
name: nextjs-house-style
description: The user's Next.js App Router architecture and coding conventions (app/ core/ features/ layout, server-first data fetching, repositories, Server Actions, auth/session, caching, BullMQ jobs, webhooks and payments, safe DB migrations, testing, security). Use this skill whenever creating or changing anything in a Next.js project that follows this layout - new features, screens, routes, Server Actions, repositories, auth, caching, queues, webhooks, migrations, tests, or CI - even if the user never says "architecture" or "blueprint". Also use it when reviewing code for convention violations.
---

# Next.js House Style

One architecture, full structure from day one. Nothing is "upgraded" or moved later. Content stays small; the skeleton is always complete.

## Workflow

1. **New feature?** Run `bun run gen:feature <kebab-name>`. Never create feature folders by hand. Then fill in, in this order: `models/` (Zod) -> `repositories/` -> `actions/` -> `screens/`.
2. **Read the reference for the area you are touching** (map below) before writing code. Read only what you need.
3. **Apply the checklist** below to every change.
4. **Finish with the verification commands.** Do not claim done until they pass.

## Reference map

| Working on | Read | Blueprint sections |
|---|---|---|
| Folder layout, feature modules, import boundaries, file limits, naming | `references/architecture.md` | 0, 1, 3, 6, 9 |
| Server vs client components, fetching, auth/session, caching, Redis invalidation, DB, errors, Zod | `references/server-data-auth.md` | 2, 4, 5, 7 |
| Security, BullMQ jobs, webhooks, payments, email, migrations, environments, monitoring, privacy | `references/security-jobs-ops.md` | 8, 12, 13, 14 |
| Tests, logging, performance, a11y, CI, git, definition of done | `references/testing-delivery.md` | 10, 11, 15, 16 |

## Checklist for every change

1. `app/**` files are thin adapters (<10 lines) importing from `features/<f>/screens`. No logic, SQL or big markup there.
2. Server Components by default; `'use client'` only where needed, as low in the tree as possible.
3. Every Server Action / route handler: authenticate -> authorize (ownership) -> validate with Zod -> repository.
4. Repositories start with `import 'server-only'`, return `Result<T, AppError>`, and always filter by `userId`.
5. Features import other features only via their `index.ts`; use relative imports inside a feature. `core/` never imports `features/` or `app/`.
6. Caching only through `core/cache`; never call Redis directly from a feature. Redis `DEL` has no wildcards: use key versioning or tag sets.
7. Background work goes through BullMQ jobs (`features/<f>/jobs`, `worker/`). Jobs are idempotent. Email is sent from a job.
8. Webhook routes: verify the signature on the raw body, respond 2xx fast, dedupe by event id, process in a job. A gateway redirect is never proof of payment.
9. Migrations are backward-compatible (expand, then contract). Never drop or rename in the same deploy as the code change.
10. Every route segment with data has `loading.tsx` and `error.tsx`. New logic gets a test; every bug fix gets a regression test.
11. TypeScript strict: no `any`, no `@ts-ignore`. Components <= 150 lines, screens <= 180, nothing > 250.
12. No new dependency without a one-line justification.

## Verification (must all pass with 0 errors)

```bash
bun run typecheck && bun run lint && bun run test && bun run build
```

## When rules conflict

This skill and `AGENTS.md` win over generic skills (e.g. general Next.js or React skills). If a requirement truly needs breaking a rule, say so and ask before doing it.
