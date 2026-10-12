# Server-first rules, auth/session, data & caching, errors & validation

## Server-First Rules
1. **Server Components by default.** Add `'use client'` only for state, effects, or browser APIs.
2. **Fetch on the server first.** Screens call repositories directly.
3. **Mutations: Server Actions by default.** Route handlers for webhooks/external clients.
4. **Auth & Ownership**: Every action/handler authenticates, authorizes ownership, validates Zod, calls repository.
5. **Cookie Auth**: HttpOnly session cookies. Never gate on localStorage.
6. **Valkey Caching**: Cache only through `core/cache`. Use key versioning or tag sets for Redis invalidation.
