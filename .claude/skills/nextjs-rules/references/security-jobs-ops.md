# Security, background jobs, webhooks, email, operations, privacy

- **BullMQ on Valkey/Redis**: Jobs in `features/<name>/jobs/`. Processors call `engine/` and `repositories/`.
- **Webhooks**: Verify signature on raw body, respond 2xx fast, process in background job.
- **Migrations**: Backward-compatible expand then contract.
- **Environments**: Secrets in env validated by Zod `config.schema.ts`.
