import { describe, it, expect, vi } from 'vitest';
import { checkRateLimit } from '../rateLimit';
import * as valkeyModule from '../../db/valkey';

describe('Rate Limit Policy & Fail-Closed Protection Test', () => {
  it('Allows requests under the configured limit', async () => {
    const testUid = `user_rl_test_${Date.now()}`;
    const res1 = await checkRateLimit(testUid, 'test.bucket', { limit: 5, windowSeconds: 60 });
    expect(res1.allowed).toBe(true);
    expect(res1.remaining).toBe(4);
  });

  it('Fails CLOSED on Valkey error/outage when failClosed is true', async () => {
    // Mock getValkey to throw an error simulating Valkey Redis outage
    vi.spyOn(valkeyModule, 'getValkey').mockImplementationOnce(() => {
      throw new Error('Valkey connection timeout');
    });

    const res = await checkRateLimit('user_outage_test', 'sensitive.bucket', {
      limit: 5,
      windowSeconds: 60,
      failClosed: true,
    });

    expect(res.allowed).toBe(false);
    expect(res.remaining).toBe(0);
  });

  it('Falls back to local in-memory rate limiting when failClosed is false during Valkey outage', async () => {
    vi.spyOn(valkeyModule, 'getValkey').mockImplementation(() => {
      throw new Error('Valkey connection timeout');
    });

    const uid = `fallback_user_${Date.now()}`;

    // First 2 requests should be allowed by in-memory fallback (limit: 2)
    const r1 = await checkRateLimit(uid, 'read.bucket', { limit: 2, windowSeconds: 60, failClosed: false });
    expect(r1.allowed).toBe(true);

    const r2 = await checkRateLimit(uid, 'read.bucket', { limit: 2, windowSeconds: 60, failClosed: false });
    expect(r2.allowed).toBe(true);

    // 3rd request exceeds limit on in-memory fallback
    const r3 = await checkRateLimit(uid, 'read.bucket', { limit: 2, windowSeconds: 60, failClosed: false });
    expect(r3.allowed).toBe(false);

    vi.restoreAllMocks();
  });
});
