import { getValkey } from '../db/valkey';

export interface RateLimitConfig {
  limit: number;
  windowSeconds: number;
  /**
   * If true, rate limiting fails CLOSED on Valkey error/outage to protect sensitive/high-risk endpoints.
   * If false, falls back to a local in-memory rate limiter before failing open.
   */
  failClosed?: boolean;
}

// Local in-memory sliding window fallback map when Valkey is unreachable
const inMemoryFallbackMap = new Map<string, { count: number; resetAt: number }>();
const MAX_FALLBACK_MAP_SIZE = 5000;

function cleanupFallbackMap(nowSec: number) {
  if (inMemoryFallbackMap.size < MAX_FALLBACK_MAP_SIZE) return;
  for (const [k, v] of inMemoryFallbackMap.entries()) {
    if (nowSec > v.resetAt) {
      inMemoryFallbackMap.delete(k);
    }
  }
}

export async function checkRateLimit(
  uid: string,
  bucket: string,
  config: RateLimitConfig
): Promise<{ allowed: boolean; remaining: number }> {
  const nowSec = Math.floor(Date.now() / 1000);

  try {
    const valkey = getValkey();
    const windowStart = Math.floor(nowSec / config.windowSeconds) * config.windowSeconds;
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
    console.error(
      `[RateLimit ALERT] Valkey outage/failure for bucket '${bucket}' (user: ${uid}). Policy: failClosed=${!!config.failClosed}`,
      error
    );

    // If failClosed is set for sensitive/high-risk endpoints, reject the request safely
    if (config.failClosed) {
      return { allowed: false, remaining: 0 };
    }

    // Secondary local in-memory rate limiting fallback
    cleanupFallbackMap(nowSec);
    const fallbackKey = `${uid}:${bucket}`;
    const existing = inMemoryFallbackMap.get(fallbackKey);

    if (!existing || nowSec > existing.resetAt) {
      inMemoryFallbackMap.set(fallbackKey, {
        count: 1,
        resetAt: nowSec + config.windowSeconds,
      });
      return { allowed: true, remaining: config.limit - 1 };
    }

    existing.count += 1;
    if (existing.count > config.limit) {
      return { allowed: false, remaining: 0 };
    }

    return { allowed: true, remaining: Math.max(0, config.limit - existing.count) };
  }
}
