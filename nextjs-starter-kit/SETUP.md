# Setup (about 15 minutes)

This kit has two layers:
- **Instructions for agents:** `AGENTS.md` (short, always loaded) and `.claude/skills/nextjs-house-style/` (full spec, loaded when relevant).
- **Enforcement for everyone:** ESLint boundary rules, pre-commit hook, CI, and a feature generator. Rules that a machine checks do not drift; rules in a document do.

## 1. Copy the kit into your project root

Copy everything except this file. If you already have `core/errors`, keep yours and make sure it exports `Result`, `ok` and `AppError` (the generator imports them from `@/core/errors`).

```text
AGENTS.md  CLAUDE.md  RUNBOOK.md  eslint.boundaries.mjs
.claude/skills/nextjs-house-style/   .husky/   .github/workflows/ci.yml
scripts/gen-feature.ts   core/errors/   docs/
```

`CLAUDE.md` contains one line (`@AGENTS.md`) so Claude Code reads the same rules. Cursor, Codex and others read `AGENTS.md` directly.

## 2. Install dev dependencies

```bash
bun add zod server-only
bun add -D husky lint-staged prettier vitest
```

## 3. Add scripts to package.json

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "test": "vitest run",
    "gen:feature": "bun scripts/gen-feature.ts",
    "worker": "bun worker/index.ts",
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

Also set `"strict": true` and `"noUncheckedIndexedAccess": true` in `tsconfig.json`, and make sure the `@/*` path alias points at the project root (the generated code imports `@/core/...` and `@/features/...`).

## 4. Turn on the hooks

```bash
bunx husky
```

The `.husky/pre-commit` file runs lint-staged (fast, staged files only). `.husky/pre-push` runs the typecheck. The full build stays in CI. If the hook files are not executable on your machine: `chmod +x .husky/pre-commit .husky/pre-push`.

## 5. Merge the architecture lint rules

In your `eslint.config.mjs`:

```js
import boundaries from './eslint.boundaries.mjs';
export default [...yourExistingConfig, ...boundaries];
```

This turns the folder rules into errors: no deep imports between features, `core/` cannot import `features/` or `app/`, `engine/` stays free of React/Next/IO, pages import only a feature's index or `screens`, and file-size limits (150 / 180 / 250 lines).

## 6. Check that it all works

```bash
bun run gen:feature demo     # creates features/demo + app/demo/page.tsx
bun run lint && bun run typecheck && bun run test
```

Then prove the guardrails: add `import {} from '@/features/other/internal'` inside a feature and confirm `bun run lint` fails. Delete the demo feature afterwards.

## 7. GitHub and Vercel

- `.github/workflows/ci.yml` runs typecheck, lint, test and build. In the repo settings, require it to pass before merging to `main`.
- Vercel deploys from `main` and makes a preview per PR. Point previews at a separate database, never production. If your build needs env vars (`config.schema.ts` validates them), add dummy values in the `env:` block of the CI file.

## 8. Worker and Redis (when you add the first job)

- Vercel functions can enqueue jobs but cannot run the worker. Host `worker/` as an always-on process (Railway, Fly.io or a VPS).
- Use a separate Redis/Valkey instance for the queue (it needs `noeviction`) and for the cache (wants eviction).

## 9. Fill in the project-specific files once

- `docs/privacy.md`: choose a level (0, 1, 2) and write the data map.
- `RUNBOOK.md`: rollback, restore and where the logs are.
- Copy `docs/adr/000-template.md` for each significant decision.

## 10. Keep it alive

After each real build, add one rule for each thing that hurt, and add the matching lint rule if a machine can check it. Edit the blueprint in `.claude/skills/nextjs-house-style/references/` (the `AGENTS.md` list should stay short).

---

## Recommended agent skills (from skills.sh)

Skills are installable instruction packs that keep an agent on current Next.js patterns instead of falling back to Pages Router habits. Install with `npx skills add <owner/repo>` (see the skills.sh CLI docs for picking individual skills from a repo).

### 1 Core set (install on day one)
| Skill | Source | Why it fits this blueprint |
|---|---|---|
| `next-best-practices` | `vercel-labs/next-skills` | File conventions, RSC boundaries, data patterns, async APIs, metadata. Backs sections 1 and 2. |
| `vercel-react-best-practices` | `vercel-labs/agent-skills` | 69 React/Next performance rules (waterfalls, bundle size, re-renders). Backs sections 2 and 11. |
| `vercel-composition-patterns` | `vercel-labs/agent-skills` | Composable component architecture. Backs the screen/component split in section 6. |

### 2 Add when the need appears
| Skill | Source | Add when |
|---|---|---|
| `next-cache-components` | `vercel-labs/next-skills` | You adopt PPR / the `use cache` directive (`cacheLife`, `cacheTag`, `revalidateTag`). Overlaps section 5, so adopt it deliberately. |
| `web-design-guidelines` | `vercel-labs/agent-skills` | UI review pass: accessibility and interface guidelines (section 11). |
| `frontend-design` | `anthropics/skills` | You want distinctive UI instead of templated defaults. |
| `shadcn` | `shadcn/ui` | Your design-system primitives are shadcn/ui. |
| `deploy-to-vercel` | `vercel-labs/agent-skills` | You actually deploy to Vercel (not needed for other targets). |
| `turborepo` | `vercel/turborepo` | You move to a monorepo. |
| `ai-sdk` | `vercel/ai` | You build chat/streaming/tool-calling features with the Vercel AI SDK. |

### 3 Match your database (pick the one you use, ignore the rest)
- Prisma: `prisma-client-api`, `prisma-cli`, `prisma-postgres`, `prisma-database-setup` (`prisma/skills`).
- Supabase: `supabase`, `supabase-postgres-best-practices` (`supabase/agent-skills`).
- Neon: `neon-postgres` (`neondatabase/agent-skills`).
- Plain `pg` / Drizzle: no dedicated skill from the directory page; section 5.3 covers it.

### 4 Process skills (optional, pair with section 16)
- `test-driven-development`, `systematic-debugging`, `verification-before-completion` (`obra/superpowers`) and `tdd` (`mattpocock/skills`) reinforce the Definition of Done and the testing strategy.

### 5 Rules for using skills
1. **Blueprint wins on conflict.** Skills are generic; this document is your house style (thin routes, import boundaries, Result types, full structure from day one).
2. **Install the core set only**, then add one skill at a time when a real need appears. More skills means more context for the agent to read and more chances of contradictory advice.
3. **Review before installing.** A skill is third-party instructions your agent will follow. Prefer official/known publishers and check the skills.sh audits page and the repo's `SKILL.md` first.
4. **Pin and re-check.** Re-read installed skills after major Next.js upgrades so they don't push outdated APIs.
5. Skills apply to any host; Vercel-specific ones are only for Vercel deployments.
