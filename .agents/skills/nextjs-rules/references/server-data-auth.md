# Server-first rules, auth/session, data & caching, errors & validation

> Contains blueprint sections 2, 4, 5, 7. Section numbers in cross-references (e.g. "section 13.3") refer to the full blueprint; see the map in SKILL.md.

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

## 7. Errors & Validation

- **Result vs throw:** repositories and actions return `Result<T, AppError>` for expected failures (not found, validation, forbidden). Throw only for programmer errors/unexpected crashes; let `error.tsx` catch them.
- `AppError` has `code` (stable string), `message` (safe for users), `cause`, `status`.
- Validate at boundaries: env vars (startup), request bodies, action inputs, external API responses. **Do not re-validate every internal DB row** unless the schema can drift (raw SQL, JSON columns).
- Never leak stack traces or SQL errors to the client.
- Every route segment with data has `loading.tsx` and `error.tsx`; add `not-found.tsx` where `notFound()` is used.
