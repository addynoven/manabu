import { configSchema, type AppConfig } from './config.schema';

const rawConfig = {
  appName: 'Manabu',
  appVersion: '1.0.0',
  environment: __DEV__ ? 'development' : 'production',
};

const parsed = configSchema.safeParse(rawConfig);

if (!parsed.success) {
  console.error('[ConfigError] Invalid app configuration:', parsed.error.format());
  throw new Error('Invalid app configuration');
}

export const config: AppConfig = parsed.data;
