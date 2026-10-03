import { Redis } from 'ioredis';

let valkeyClient: Redis | null = null;

export function getValkey(): Redis {
  if (valkeyClient) return valkeyClient;

  const url = process.env.VALKEY_URL;
  if (!url) {
    throw new Error('VALKEY_URL environment variable is missing');
  }

  valkeyClient = new Redis(url, {
    maxRetriesPerRequest: 3,
    enableReadyCheck: false,
    lazyConnect: true,
  });

  valkeyClient.on('error', (err) => {
    console.error('[Valkey] Redis connection error:', err);
  });

  return valkeyClient;
}
