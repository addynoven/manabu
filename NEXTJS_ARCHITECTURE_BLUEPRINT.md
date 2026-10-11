# 🏛️ Universal Next.js App Router Enterprise Architecture Blueprint & Playbook (v3)

> **A 100% domain-agnostic, production-tested specification for building high-scale Next.js App Router applications, SaaS products, & web workstations.**
> _Designed for teams, solo developers, and AI agents building maintainable, zero-desync full-stack web applications._

---

## ⚖️ 0. Architectural Tier Selection (Scale To Reality)

Pick your project tier before writing any boilerplate or folder structure:

- **Tier A: Lean MVP / Solo Developer (<10k Users)**:
  - Use the **Lean Core**. Direct repository pattern, simple database queries, client-side SWR/React Query caching, basic session cookies.
  - Skip complex pub-sub queues or multi-region caching until user scale requires it.

- **Tier B: Enterprise / Multi-Dev Team (>10k Users)**:
  - Use the **Full Core**. 3-Tier Layering, Next.js Edge Proxy Middleware, Valkey Redis Distributed Caching, Zod API Contracts, Atomic Invalidation, and 1:1 Mirror Feature Screen Architecture.

---

## 📐 1. The Core 3-Tier Layout

```text
/
├── app/          # Tier 1: Thin Routing & Adapter Layer (Next.js App Router)
├── core/         # Tier 2: Shared System Foundations (DB, Cache, Auth, Primitives)
├── features/     # Tier 3: Self-Contained Domain Feature Modules
├── data/         # Static datasets, SSOT schemas & seed files
├── public/       # Static assets, media, SVGs
├── middleware.ts # Next.js Edge Proxy Middleware
└── types.ts      # Global application-level type declarations
```

### 1.1 The Golden Rule of `app/` Routing
Routes in `app/**/*.tsx` act **strictly as thin adapters (<10 lines)** importing composite screens from `@/features/<feature>/screens/`.

```tsx
// app/dashboard/page.tsx
import { DashboardScreen } from '@/features/analytics/screens';

export default function Page() {
  return <DashboardScreen />;
}
```

> [!CRITICAL]
> **NEVER** write inline business logic, heavy state hooks, raw Tailwind markup templates, or direct SQL database queries inside `app/*.tsx`. Keep page routes as ultra-thin entry points.

---

## 🧱 2. Shared System Foundations (`core/`)

```text
core/
├── api/
│   ├── httpClient.ts              # Traced fetch client (Bearer tokens, Result<T, E> handling)
│   ├── response.ts                # Standard JSON API response helpers (ok, fail, unauthorized)
│   └── index.ts
│
├── auth/
│   ├── auth.ts                    # Server-side cookie & token verification logic
│   └── index.ts
│
├── components/
│   ├── AppHeader.tsx              # Global workstation navigation bar
│   ├── AuthGate.tsx               # Auth boundary wrapper (SSR-safe, 0ms hydration flash)
│   ├── FeatureGate.tsx            # Declarative feature flag gate
│   ├── Button.tsx / Modal.tsx     # Reusable design system primitives
│   └── index.ts
│
├── db/
│   ├── postgres.ts                # PostgreSQL query pool (`pg` + SSL CA configuration)
│   ├── valkey.ts                  # Valkey / Redis client (`ioredis` for caching & pub-sub)
│   └── index.ts
│
├── config/
│   ├── config.schema.ts           # Zod schema validating runtime env vars
│   ├── config.ts                  # Validated runtime configuration singleton
│   ├── flags.ts                   # Flat boolean feature flag object
│   └── index.ts
│
├── errors/
│   ├── result.ts                  # Type-safe Result<T, E> envelope: { ok: true, data } | { ok: false, error }
│   ├── error-handler.ts           # AppError class & captureError() Sentry/LogRocket wrapper
│   ├── ErrorBoundary.tsx          # Root React crash recovery fallback
│   └── index.ts
│
├── storage/
│   ├── indexedDB.ts               # Client-side IndexedDB for large offline datasets
│   └── localStorage.ts            # Synchronous local storage for user preferences & themes
│
└── theme/
    ├── colors.ts / spacing.ts / typography.ts
    └── index.ts
```

---

## 🧩 3. The 1:1 Mirror Feature Screen Architecture (`features/<feature>/`)

```text
features/<feature_name>/
├── components/     # Private UI sub-widgets used only inside this feature
├── engine/         # Pure domain logic (e.g., scoring math, state machines, tokenizers)
├── hooks/          # Feature-specific React hooks & SWR data fetching
├── models/         # Zod schemas + inferred TypeScript types
├── repositories/   # Data access layer (PostgreSQL queries, Valkey cache, API bridges)
├── screens/        # 1:1 Mirror Screen Folders
│   └── <screen_name>/
│       ├── components/    # Screen-specific sub-components (<150 lines each)
│       │   ├── HeaderSection.tsx
│       │   ├── DataGrid.tsx
│       │   └── index.ts
│       ├── <Screen>.tsx   # Composite screen assembler (<180 lines)
│       └── index.ts
├── store/          # Zustand reactive client state
├── __tests__/      # Integration & unit tests for this feature
├── keys.ts         # Query key factories for data fetching
└── index.ts        # Public barrel export
```

---

## 🔒 4. Enterprise 4-Tier Hydration & Auth-Guarded Layout Shell

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ TIER 1: Next.js Server Cookie Auth (HTTP-Only)                          │
│  • Browser attaches 'app_session' HTTP-Only cookie on every request.    │
│  • Next.js Edge Middleware verifies token in <1ms BEFORE sending HTML.  │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│ TIER 2: Instant 0ms Auth Pre-Rendered Layout Shell                      │
│  • HTML arrives at the browser ALREADY authenticated.                   │
│  • ZERO client-side auth delay or holding time (0ms client hold).       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│ TIER 3: React Query / SWR Stale-While-Revalidate Cache Lifecycle        │
│  • 1st Visit / Cold Load: Shows Shimmering Skeleton Screen (~200ms).     │
│  • Subsequent Visits / Reloads: Instant 0ms render from React Query!    │
│  • Background Revalidation: Quietly updates state without flickering.   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│ TIER 4: Shimmering Skeleton Screen Placeholders                         │
│  • Slate skeleton loader matching exact screen layout on cold loads.    │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Server-Side HTTP-Only Cookie Authentication
To eliminate client-side auth delays and flashes on page reload:
1. Session tokens are stored in an `HTTP-Only, SameSite=Lax, Secure` cookie (`app_session`).
2. Next.js Edge Proxy Middleware (`middleware.ts`) verifies the session cookie in $<1\text{ms}$ on the server *before* rendering HTML.
3. The server pre-renders the authenticated layout shell directly into the initial HTTP payload ($0\text{ms}$ client auth wait time).

### 4.2 React Query Cold Load vs. Warm Load Lifecycle
- **Cold Load (1st Visit / Fresh Cache)**:
  - React Query has no cached data yet.
  - The UI displays **Tier 4 (Shimmering Skeleton Screen)** matching the exact layout dimensions while the initial network request completes (~200ms).
- **Warm Load (Subsequent Visits / Page Reloads / Tab Switch)**:
  - React Query **instantly renders the cached data ($0\text{ms}$ delay)**—the user does **NOT** see the skeleton screen!
  - In the background, React Query quietly revalidates with PostgreSQL via Valkey Redis (`stale-while-revalidate`).
  - If server data has changed, the UI smoothly updates in place without layout shifts or flickering.

### 4.3 Zero-Flash Hydration Protection Pattern (`AuthGate.tsx`)
Never render a full-screen loading spinner during initial hydration (`!mounted`). Returning a full-screen loading spinner before `useEffect` fires destroys SSR HTML and causes a 1ms black/blank flash on route transitions.

```tsx
// core/components/AuthGate.tsx
export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, profile } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const hasLocalSession = (() => {
    if (typeof window === 'undefined') return true; // Pre-render during SSR
    try {
      return !!(localStorage.getItem('app_user') || localStorage.getItem('app_profile'));
    } catch {
      return true;
    }
  })();

  // Pre-render children by default during SSR and initial hydration (!mounted)
  if (!mounted || user || profile || hasLocalSession) {
    return <>{children}</>;
  }

  return <AuthModalOverlay />;
}
```

---

## ⚡ 5. Clean 2-Layer Data Caching & Invalidation Architecture

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ LAYER 1: React Query / SWR Client Cache (Instant 0ms Browser Render)    │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Cache Miss / Revalidation)
┌────────────────────────────────────▼────────────────────────────────────┐
│ LAYER 2: Valkey / Redis Distributed Cache (5-Minute TTL, <2ms)          │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Cache Miss)
┌────────────────────────────────────▼────────────────────────────────────┐
│ DATABASE SSOT: Production Database (PostgreSQL / MySQL)                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.1 Invalidation Rule
When a mutation occurs (`POST`, `PUT`, `DELETE`):
1. **Client Layer**: React Query / SWR invalidates query keys and refetches in background.
2. **Server Layer**: `valkey.del("app:cache:${uid}*")` atomically purges Redis for all serverless instances globally in 1 command.

---

## 📏 6. Code Quality, File Limits & Engineering Standards

1. **File Size Limits**:
   - Sub-components: Max 150 lines of code.
   - Screen Assemblers: Max 180 lines of code.
   - Any file exceeding 250 lines MUST be refactored into modular sub-components.
2. **Strict Type Safety**:
   - TypeScript strict mode enabled (`"strict": true`). Zero `any`, zero `@ts-ignore`.
3. **Data Access Isolation**:
   - UI components NEVER call raw SQL or un-sanitized API fetches directly. All data access flows through Repository functions returning `Result<T, AppError>`.
4. **Zod Validation Envelopes**:
   - All environment variables, API request bodies, and database rows are validated through Zod schemas.

---

## 🤖 7. Universal Master Prompt for AI Coding Assistants

```text
I am building a full-stack Next.js App Router application.
Follow this domain-agnostic 3-Tier Architecture Blueprint:

1. Directory Structure:
   - app/ (Thin routing adapters ONLY + API route handlers under app/api/)
   - core/ (Shared system infrastructure: db/postgres, db/valkey, auth, components, errors, config, storage)
   - features/<feature>/ (Self-contained domain modules: components, engine, hooks, models, repositories, screens/<screen_name>/, store, __tests__, index.ts)
   - data/ (Central static datasets and SSOT schemas)

2. Core Architectural Rules:
   - Page Routes (app/**/*.tsx): Thin 3-line adapters ONLY importing <FeatureScreen /> from features/<feature>/screens. NEVER write inline business logic or heavy UI templates inside app/*.tsx.
   - Zero-Flash Auth Gate: Pre-render children by default during SSR and initial hydration (!mounted) to eliminate 1ms full-screen loading flashes.
   - File Size Limit: Max 150 lines per sub-component file, max 180 lines per screen assembler file.
   - Data Layer: Use Repository Pattern with Zod mappers. UI components must never execute raw SQL or un-sanitized API fetches directly.
   - Caching: Use 2-Layer Caching (React Query Client + Valkey Redis Distributed Cache). Atomic invalidation via valkey.del().
   - Type Safety: TypeScript strict mode enabled ("strict": true). Zero `any`, zero `@ts-ignore`.

3. Verification Requirement:
   Before declaring any task complete, verify that `bunx tsc --noEmit` and `bun run build` compile with 0 errors.
```
