import { getValkey } from '../db/valkey';

interface RateLimitConfig {
  limit: number;
  windowSeconds: number;
}

export async function checkRateLimit(
  uid: string,
  bucket: string,
  config: RateLimitConfig
): Promise<{ allowed: boolean; remaining: number }> {
  try {
    const valkey = getValkey();
    const now = Math.floor(Date.now() / 1000);
    const windowStart = Math.floor(now / config.windowSeconds) * config.windowSeconds;
    const key = `manabu:rl:${uid}:${bucket}:${windowStart}`;

    const count = await valkey.incr(key);
    if (count === 1) {
      await valkey.expire(key, config.windowSeconds + 2);
    }

    if (count > config.limit) {
      return { allowed: false, remaining: 0 };
    }

    return { allowed: true, remaining: config.limit - count };
  } catch (error) {
    console.error('[RateLimit] Valkey error, failing open:', error);
    return { allowed: true, remaining: 1 };
  }
}
