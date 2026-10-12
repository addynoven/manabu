# Architecture, layout, feature modules, code quality

## 0. One Architecture, No Tiers

Every project starts with the full skeleton: `app/`, `core/`, `features/`, import boundaries, repositories, Server Actions, error/loading files, cache adapter, tests setup, CI.

```text
/
├── app/            # Routing adapters + app/api route handlers
├── core/           # Shared foundations (db, cache, auth, config, errors, ui primitives)
├── features/       # Self-contained domain modules
├── data/           # Static datasets, seeds
├── worker/         # Long-running BullMQ worker process
├── public/
├── proxy.ts        # Edge auth gate
└── types.ts
```

### Golden rule of `app/`
Routes are thin adapters (<10 lines) importing screens from `@/features/<feature>/screens`.

```tsx
// app/dashboard/page.tsx
import { DashboardScreen } from '@/features/analytics/screens';
export default function Page() { return <DashboardScreen />; }
```

### Feature Module Layout (`features/<name>/`)
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
└── index.ts        # public API
```

### File Limits
1. Sub-components <= 150 lines.
2. Screen assemblers <= 180 lines.
3. Any file > 250 lines MUST be split.
