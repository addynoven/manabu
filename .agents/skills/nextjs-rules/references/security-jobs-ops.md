# Security, background jobs, webhooks, email, operations, privacy

> Contains blueprint sections 8, 12, 13, 14. Section numbers in cross-references (e.g. "section 13.3") refer to the full blueprint; see the map in SKILL.md.

## 8. Security Baseline

- Security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors`) via `next.config` or proxy.
- Rate limit auth endpoints, mutations, and anything public (Valkey token bucket through `core/cache`; in-memory driver locally).
- Secrets only in env, validated by `config.schema.ts`; never `NEXT_PUBLIC_` for secrets.
- Sanitize user-generated HTML (DOMPurify) before `dangerouslySetInnerHTML`; prefer not using it.
- File uploads: validate type/size server-side, use signed URLs to object storage.
- Dependencies: `bun audit` / Dependabot weekly; pin major versions.
- Log auth events; never log tokens, passwords, or full PII.

---

## 12. Background Jobs, Webhooks & Email

### 12.1 Queue: BullMQ on Valkey/Redis (part of the base from day one)
- `core/queue/` exposes a queue factory and the connection. Features define jobs in `features/<name>/jobs/<job>.job.ts`: a Zod payload schema plus a processor function.
- `worker/index.ts` registers every processor and runs as its own process (`bun run worker` locally).
- Rules:
  1. Validate payloads with Zod on enqueue and on process.
  2. **Jobs must be idempotent** (safe to run twice). Retries will happen.
  3. Retries with exponential backoff; failed jobs stay in the failed set and trigger an alert (section 13.3).
  4. Processors hold no business logic: they call the feature's `engine/` and `repositories/`.
  5. Enqueue **after** the DB write commits.
  6. Scheduled work uses BullMQ job schedulers (repeatable jobs), not a separate cron system.

### 12.2 Where the worker runs
Vercel functions can **enqueue** jobs, but they are short-lived and cannot host a worker. Run `worker/` as an always-on process (Docker on Railway, Fly.io, a VPS, etc.). Document the target in the deploy notes.

### 12.3 Redis/Valkey configuration
- BullMQ needs `maxmemory-policy noeviction` (it must never lose job keys). A cache usually wants an eviction policy. **Use separate instances for queue and cache**, or you risk losing jobs under memory pressure.
- Workers need `maxRetriesPerRequest: null` on the ioredis connection.
- Valkey is Redis-protocol compatible and generally works with BullMQ; verify with a smoke test in CI.

### 12.4 Webhooks
- **API call:** you call them, when you want something ("is payment X paid?").
- **Webhook:** they call you, when something happens on their side ("payment X just succeeded"), at a URL you registered. Same HTTP mechanics, opposite direction. Payments need it because the user pays on the gateway's page and your server cannot know when it finishes.
- Rules for every webhook route (`app/api/webhooks/<provider>/route.ts`, thin adapter into `features/<f>/`):
  1. **Verify the signature** using the raw body and the provider's secret. Reject otherwise.
  2. **Respond 2xx fast**; do the real work in a queue job.
  3. **Idempotency:** store the provider's event id; ignore duplicates (providers retry and sometimes send twice).
  4. Don't assume ordering; re-fetch current state from the provider when it matters.
  5. Log event id and outcome; never log secrets or card data.
  6. Test locally with the provider's CLI or a tunnel; keep a sample payload fixture for tests.
- For payments: your database is the source of truth, updated by the verified webhook. A redirect back to your site from the gateway is a hint, not proof.

### 12.5 Email
Send through `core/email` (provider interface, one driver) from a queue job, never inline in a request. Templates live in the feature that owns them.

---

## 13. Operations

### 13.1 Database migrations without downtime
During a deploy, old and new code run side by side for a while, so a migration must work with both. Use **expand then contract**:
1. **Expand:** add the new column/table (nullable or with a default). Deploy.
2. Code writes to both old and new; **backfill** old rows (in a job, in batches).
3. Switch reads to the new column. Deploy.
4. **Contract:** drop the old column in a later deploy.
Never rename or drop a column in the same deploy as the code that stops using it. Large index builds: `CREATE INDEX CONCURRENTLY`. Take a backup before any destructive migration.

### 13.2 Environments
- **Local:** own database, seeded from `data/`.
- **Preview:** Vercel deploys a preview per PR; point it at a separate preview/staging database, never production.
- **Production:** deploys from `main` only after CI is green.
- Same env var names everywhere, validated by `config.schema.ts`.

### 13.3 Monitoring minimum
- Error tracking (Sentry or equivalent) via `captureError()`.
- `GET /api/health` (checks DB and Valkey); external uptime monitor pings it and alerts you.
- Alert when a queue's failed-job count grows or jobs stall.
- Vercel logs and analytics on; structured logs from section 11.
- `RUNBOOK.md` in the repo: how to roll back a deploy, how to restore the database, where logs and dashboards are, who/what to check first.

---

## 14. Privacy & Compliance (asked at project start)

When a project is created, the generator asks which level applies, and records the answer in `docs/privacy.md`:

| Level | Meaning | Baseline |
|---|---|---|
| 0 | Hobby/no personal data | Don't collect what you don't need; no secrets in logs |
| 1 | Normal app with accounts | Privacy policy + terms, cookie consent where required, user data export and delete, minimal PII, encryption in transit, backups |
| 2 | Sensitive data or regulated users | Level 1 plus audit log of reads/writes to sensitive data, retention schedule, data-processor agreements with vendors, field-level encryption where needed, access reviews |

Always: collect the minimum, know where personal data lives (a short data map in `docs/privacy.md`), and make account deletion actually remove or anonymise data including caches and queue payloads. This is engineering guidance, not legal advice; check the rules for your users' regions.
