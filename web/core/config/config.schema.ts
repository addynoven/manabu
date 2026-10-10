import { z } from 'zod';

export const ConfigSchema = z.object({
  adminSecret: z.string().default('manabu_admin_2026_secure'),
  postgresUrl: z.string().optional(),
  valkeyUrl: z.string().optional(),
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  firebaseApiKey: z.string().optional(),
  firebaseAuthDomain: z.string().optional(),
  firebaseProjectId: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;
