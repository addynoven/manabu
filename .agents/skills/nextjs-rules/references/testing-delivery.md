# Testing, observability/performance/a11y, project hygiene, definition of done

> Contains blueprint sections 10, 11, 15, 16. Section numbers in cross-references (e.g. "section 13.3") refer to the full blueprint; see the map in SKILL.md.

## 10. Testing Strategy

| Layer | Tool | What |
|---|---|---|
| `engine/` | Vitest | Pure logic, high coverage, fast |
| `repositories/` | Vitest + real test DB (Docker/Testcontainers) | Queries, ownership filters, transactions |
| Actions/handlers | Vitest | Authz, validation, error mapping |
| Screens/components | Testing Library | Critical interactions only |
| E2E | Playwright | 3 to 5 golden paths (login, core create/edit, payment) |

- Mock at the network/DB edge, not internal modules.
- Every bug fix ships with a regression test.
- CI runs typecheck, lint, unit, build; E2E on main or PR label.

---

## 11. Observability, Performance, Accessibility

- **Logging:** structured JSON logger with request id; one log line per request/action outcome.
- **Errors:** `captureError()` wraps Sentry (or equivalent) with user id + route, no PII.
- **Performance:** use `next/image`, `next/font`, dynamic import for heavy client libs, `Suspense` streaming for slow sections. Check bundle with `@next/bundle-analyzer` before adding any large dependency. Watch Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1).
- **Accessibility:** semantic HTML first, keyboard-navigable modals (focus trap + Esc), labels on inputs, color contrast AA, `eslint-plugin-jsx-a11y` on.
- **SEO/Metadata:** `generateMetadata` per public route, `sitemap.ts`, `robots.ts`, OG images.
- **i18n (only if needed):** decide early (`next-intl`); retrofitting is painful.

---

## 15. Project Hygiene & Delivery

- **ADRs:** one short markdown file per significant decision in `docs/adr/NNN-title.md` (context, decision, consequences). Required for every significant architecture decision.
- **Generator:** `bun run gen:feature <name>` scaffolds a complete feature (folders, barrels, test stub, route adapter). Never create feature folders by hand.
- **Env:** `.env.example` committed, real `.env*` ignored, validated at boot.
- **Formatting & linting:** Prettier (formatting) + ESLint (rules, import boundaries). One config, committed.
- **Pre-commit hook (Husky + lint-staged):** on each commit, run ESLint `--fix` and Prettier only on the staged files. Keep it fast (seconds); typecheck can run on pre-push, and the full build belongs to CI. Setup:
  1. `bun add -D husky lint-staged` then `bunx husky init`
  2. Put `bunx lint-staged` in `.husky/pre-commit`
  3. In `package.json`: `"lint-staged": { "*.{ts,tsx}": ["eslint --fix", "prettier --write"], "*.{json,md,css}": ["prettier --write"] }`
- **CI (GitHub Actions):** install, typecheck, lint, test, build, (optional) E2E. Branch protection: `main` requires green CI. Vercel deploys automatically from `main` and creates previews per PR.
- **Git:** small PRs, Conventional Commits, no direct pushes to main.
- **Feature flags:** flat boolean object in `flags.ts`; remove flags after rollout.
- **Deploy:** document target (Vercel/Docker), required env vars, DB migration step, rollback plan.
- **Backups & recovery:** DB backups enabled, restore tested at least once.

---

## 16. Definition of Done

A task is complete only when all are true:
1. `bunx tsc --noEmit` passes with 0 errors.
2. `bun run lint` passes.
3. `bun run test` passes (new logic has tests).
4. `bun run build` passes with 0 errors.
5. New data access has authz + ownership checks and input validation.
6. Loading, empty, and error states exist for every new screen.
7. No new dependency without a one-line justification.
