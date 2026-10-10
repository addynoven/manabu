# 🤖 AI Agent Protocols & Code Readability Guidelines

Welcome, AI Developer. This repository is structured as two **100% standalone, isolated project workspaces**:
1. **`web/`** — Next.js 16 Web Workstation Platform
2. **`mobile/`** — Expo React Native Mobile Application

---

## 🏛️ Workspace Isolation & Repository Rules

> [!CRITICAL]
> - **Zero Root `node_modules`**: The root directory contains **no `package.json` and no `node_modules`**. This prevents Metro bundler symlink failures and dependency hoisting conflicts.
> - **Always `cd` into the target workspace**:
>   - Web tasks: `cd web`
>   - Mobile tasks: `cd mobile`

---

## 📖 Team Code Readability & Quality Rules

### 1. 📏 File Length & Single Responsibility
- **Keep Files Short ($100 - 300$ Lines Ideal)**: No file should exceed **500 lines of code**. If a file grows beyond 300 lines, extract sub-components or custom hooks.
- **Single Concern Per File**: A file should contain one screen/component, one custom hook, or one model definition.
- **Move Static Datasets Out**: Never hardcode large arrays or JSON objects inside UI or logic files. Store datasets in `data/` or `.json` files.

### 2. 📛 Intent-Based Naming
- **Name for Intent**: Variable and function names must explain *why* they exist and *what* they represent (`cooldownClock` over `str`, `calculateFsrsRetention` over `calc`).
- **Unified Domain Vocabulary**: Use consistent domain terms across web and mobile (`exercise`, `lesson`, `cardState`).
- **No Cryptic Abbreviations**: Do not abbreviate variable names except for standard loop counters (`i`, `idx`) or HTTP parameters (`req`, `res`).

### 3. ⚙️ Function Design & Parameters
- **Single Responsibility Principle**: Each function should do **one thing well**.
- **Limit Arguments ($\le 3$)**: For 4 or more arguments, pass a single typed configuration object (`{ rating, state, desiredRetention }`).
- **Prefer Pure Functions**: Functions should be deterministic with no unintended side effects.

### 4. 🧱 Structural Clarity & Guard Clauses
- **Guard Clauses (Early Returns)**: Return or throw early at the top of functions to eliminate deep `if/else` nesting.
- **Co-locate Related Logic**: Keep helper functions, constants, and sub-components close to where they are used rather than in dumping-ground `utils` files.

### 5. 🛡️ Type Safety & Error Handling
- **Strictly No `any`**: Always define explicit TypeScript interfaces or Zod schemas at API boundaries and store interfaces.
- **Fail Fast & Explicitly**: Return structured result objects or throw typed errors instead of swallowing errors or returning ambiguous `null`/`undefined`.

### 6. 📝 Self-Documenting Code & Comments
- **Code Explains *How*; Comments Explain *Why***: Document non-obvious business rules or edge cases—do not write comments that repeat obvious code logic.
- **Zero Commented-Out Code**: Delete unused code completely. Rely on Git history for previous versions.

---

## 💻 Web Workstation Architecture (`web/`)

The Web Workstation follows a strict **3-Tier Production Architecture**:

1. **`web/app/` (Thin Routing Layer)**:
   - Route files in `web/app/` act **strictly as thin 3-line adapters** rendering composite screens from `@/features/<feature>/screens/`.
   - Example:
     ```tsx
     import { HomeScreen } from '@/features/content/screens/HomeScreen';
     export default function Page() { return <HomeScreen />; }
     ```
   - **NEVER** write inline business logic, heavy state hooks, or raw UI templates inside `web/app/*.tsx`.

2. **`web/core/` (System Infrastructure)**:
   - `db/postgres.ts` — Aiven PostgreSQL database query pool (`manabu` schema)
   - `db/valkey.ts` — Valkey / Redis in-memory cache & pub-sub client
   - `api/httpClient.ts` — Axios/fetch wrapper with auto-bearer auth headers
   - `components/StitchHeader.tsx` — Global header navigation

3. **`web/features/` (Self-Contained Domain Modules)**:
   - Co-locates private components, engines, hooks, repositories, models, and screens (`srs/`, `arcade/`, `conjugator/`, `content/`, `duels/`, `friends/`, `auth/`, `admin/`).

---

## 📱 Mobile Application Architecture (`mobile/`)

- **Framework**: Expo SDK 57 + React Native 0.86.3 + React 19.2.3.
- **Routing**: Expo Router file-based routes inside `mobile/src/app/`.
- **Navigation**: Keep non-route components, hooks, and stores outside `mobile/src/app/` (inside `mobile/src/features/`).

### Mobile Inspection Commands
Use 1-step direct streams from inside `mobile/`:
```bash
# 1. Interactive elements & coordinates:
python3 mobile/scripts/read_screen.py

# 2. Search element text:
python3 mobile/scripts/read_screen.py --search "Stroke Tracing"

# 3. Direct screenshot:
python3 mobile/scripts/read_screen.py --shot /tmp/screen.png
```

---

## 📚 Central Curriculum Data & Distractor Rules

- **SSOT Location**: `data/units/units.json` at repository root (30 Units, 450 Lessons, 3,600 Exercises).
- **Curriculum Sync**: Run `cd web && bun run sync:curriculum` to compile `data/units/units.json` into `web/data/curriculum.json`.
- **Content Versioning**: Whenever curriculum data changes, bump `CURRENT_CONTENT_VERSION` in `web/app/api/v1/content/manifest/route.ts` and `web/app/api/v1/content/[bundle]/route.ts` to trigger client IndexedDB cache invalidation.

### Exercise Formatting Rules
1. **No Generic Placeholders**: Never allow `"Antonym phrase"`, `"Different meaning"`, `"Incorrect pronunciation"`.
2. **Language Purity**: Multiple-choice options must NEVER mix Japanese choices and English choices in the same choice array.
3. **4 Clean Choices**: Every `select` exercise must have exactly 4 clean same-language options.
4. **No Answer Spoiling**: `HomeScreen.tsx` must structurally hide English translations in prompt cards prior to answer submission.
5. **Exact Exercise Type Preservation**: Non-choice types (`speak`, `match`, `scramble`, `dictation`, `dialogue`) do not render multiple-choice options. They use dedicated interactive components.

---

## 🧪 Verification Commands

Before declaring any task done, run type checks and production builds in both workspaces:

```bash
# Web Verification
cd web
bunx tsc --noEmit     # 0 errors
bun test              # FSRS-6 integration tests
bun run build         # Next.js production build

# Mobile Verification
cd mobile
bunx tsc --noEmit     # 0 errors
```
