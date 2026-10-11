import { getValkey } from '@/core/db/valkey';

const SRS_QUEUE_CACHE_TTL_SECONDS = 300; // 5-minute cache TTL

export async function getCachedSrsPayload<T>(uidKey: string): Promise<T | null> {
  if (!uidKey) return null;
  try {
    const valkey = getValkey();
    const key = `manabu:srs:queue:${uidKey}`;
    const cached = await valkey.get(key);
    if (cached) {
      return JSON.parse(cached) as T;
    }
  } catch (err) {
    console.warn('[srsCache] Valkey read miss or error:', err);
  }
  return null;
}

export async function setCachedSrsPayload<T>(uidKey: string, payload: T): Promise<void> {
  if (!uidKey || !payload) return;
  try {
    const valkey = getValkey();
    const key = `manabu:srs:queue:${uidKey}`;
    await valkey.setex(key, SRS_QUEUE_CACHE_TTL_SECONDS, JSON.stringify(payload));
  } catch (err) {
    console.warn('[srsCache] Valkey write error:', err);
  }
}

export async function invalidateSrsCache(uid: string): Promise<void> {
  if (!uid) return;
  try {
    const valkey = getValkey();
    const pattern = `manabu:srs:queue:${uid}*`;
    const keys = await valkey.keys(pattern);
    if (keys && keys.length > 0) {
      await valkey.del(...keys);
    }
  } catch (err) {
    console.warn('[srsCache] Valkey invalidation error:', err);
  }
}
