# Runbook

Fill this in once, before you need it.

## Roll back a bad deploy
- Vercel dashboard -> Deployments -> pick the last good one -> Promote / Instant Rollback.
- If a migration shipped with it: see "Restore the database" and check the expand/contract state first.

## Restore the database
- Provider: <fill in>
- Backups: <where, how often>
- Restore steps: <fill in, and test them once>

## Where to look
- App logs: <Vercel logs link>
- Errors: <Sentry project link>
- Uptime / health: GET /api/health, monitor: <link>
- Queue: <how to inspect failed jobs>
- Worker host: <Railway/Fly/VPS, how to restart>

## First checks when something is down
1. Is /api/health green? (DB and Valkey)
2. Latest deploy or migration in the last hour?
3. Failed jobs piling up?
4. Third-party status pages (payment gateway, email provider).
