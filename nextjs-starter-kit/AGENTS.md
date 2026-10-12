# AGENTS.md

Next.js App Router project. **One architecture, full structure from day one.** Never create a "temporary simple" layout that would need files moved later.

## Layout

- `app/` - thin routing adapters (<10 lines) + `app/api/**` handlers. No business logic.
- `features/<name>/` - domain modules: `components, engine, hooks, actions, jobs, models, repositories, screens/<screen>, store, __tests__, keys.ts, index.ts`.
- `core/` - shared foundations: `db, cache, queue, email, auth, config, errors, logging, security, components, theme`.
- `worker/` - BullMQ worker process (runs separately from Vercel).
- Create features with `bun run gen:feature <kebab-name>`. Never create feature folders by hand.

## Hard rules

1. Server Components by default. `'use client'` only where needed, as low as possible.
2. Fetch on the server first. Mutations via Server Actions; route handlers only for webhooks and external clients.
3. Every action/handler: authenticate -> authorize (ownership) -> validate (Zod) -> repository.
4. Repositories: `import 'server-only'`, return `Result<T, AppError>`, always filter by `userId`.
5. Features import other features only via `index.ts`. `core/` never imports `features/` or `app/`. (ESLint enforces this.)
6. Cache only through `core/cache`. Redis `DEL` has no wildcards: use key versioning or tag sets.
7. Background work = BullMQ jobs: Zod payloads, idempotent, retried, never inline in a request. Emails are sent from jobs.
8. Webhooks: verify signature on raw body, 2xx fast, dedupe by event id, process in a job.
9. Migrations: expand, then contract. Never drop/rename in the same deploy as the code change.
10. Auth: HttpOnly session cookie verified on the server. Proxy is only a fast gate. Never gate on localStorage.
11. TypeScript strict. No `any`, no `@ts-ignore`. Components <= 150 lines, screens <= 180, files <= 250.
12. No new dependency without a one-line justification. No speculative infrastructure (pub/sub, multi-region, multi-tenancy).

## Done means

```bash
bun run typecheck && bun run lint && bun run test && bun run build   # all 0 errors
```
New logic has tests; bug fixes have regression tests; new screens have loading, empty and error states.

## Full spec

Details live in `.claude/skills/nextjs-house-style/` (`SKILL.md` + `references/`). Claude Code loads it automatically as a skill; other agents should read the matching reference file before working in that area. If a skill or generic advice conflicts with this file, this file wins.
