---
name: nextjs-rules
description: Essential Next.js App Router 3-tier architecture and coding conventions. Use this skill whenever the user says "setup Next.js as I like it", "follow our Next.js rules", "make Next.js project properly", or asks to create, refactor, or structure any Next.js App Router project (app/ core/ features/ layout, Server Components, repositories, Server Actions, cookie session auth, 2-layer caching, BullMQ jobs, DB migrations, file limits, tests).
---

# Next.js Master Rules

One architecture, full structure from day one. Nothing is "upgraded" or moved later. Content stays small; the skeleton is always complete.

## Workflow

1. **New feature?** Run `bun run gen:feature <kebab-name>`. Never create feature folders by hand. Then fill in, in this order: `models/` (Zod) -> `repositories/` -> `actions/` -> `screens/`.
2. **Read the reference for the area you are touching** (`references/`) before writing code. Read only what you need.
3. **Apply the checklist** below to every change.
4. **Finish with the verification commands.** Do not claim done until they pass.

## Hard rules

1. Server Components by default. `'use client'` only where needed, as low as possible.
2. Fetch on the server first. Mutations via Server Actions; route handlers only for webhooks and external clients.
3. Every action/handler: authenticate -> authorize (ownership) -> validate (Zod) -> repository.
4. Repositories: `import 'server-only'`, return `Result<T, AppError>`, always filter by `userId`.
5. Features import other features only via `index.ts`. `core/` never imports `features/` or `app/`. (ESLint enforces this.)
6. Cache only through `core/cache`. Redis `DEL` has no wildcards: use key versioning or tag sets.
7. Background work = BullMQ jobs: Zod payloads, idempotent, retried, never inline in a request.
8. Auth: HttpOnly session cookie verified on the server. Proxy is only a fast gate. Never gate on localStorage.
9. TypeScript strict. No `any`, no `@ts-ignore`. Components <= 150 lines, screens <= 180, files <= 250.

## Done means

```bash
bun run typecheck && bun run lint && bun run test && bun run build   # all 0 errors
```
