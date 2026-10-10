import { z } from 'zod';

export const configSchema = z.object({
  appName: z.string().default('Manabu'),
  appVersion: z.string().default('1.0.0'),
  environment: z
    .enum(['development', 'staging', 'production'])
    .default('development'),
  apiBaseUrl: z.string().url().optional(),
});

export type AppConfig = z.infer<typeof configSchema>;
