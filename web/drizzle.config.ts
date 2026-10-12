import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './core/db/schema.ts',
  out: './core/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  },
  schemaFilter: ['manabu'],
});
