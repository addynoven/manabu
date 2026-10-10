import { ConfigSchema, type Config } from './config.schema';

function loadConfig(): Config {
  const raw = {
    adminSecret: process.env.ADMIN_SECRET || 'manabu_admin_2026_secure',
    postgresUrl: process.env.POSTGRES_URL || process.env.DATABASE_URL,
    valkeyUrl: process.env.VALKEY_URL || process.env.REDIS_URL,
    nodeEnv: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    firebaseApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  };

  const parsed = ConfigSchema.safeParse(raw);
  if (!parsed.success) {
    console.warn('[Config] Validation warnings:', parsed.error.format());
    return raw as Config;
  }
  return parsed.data;
}

export const config: Config = loadConfig();
