import { describe, it, expect } from 'vitest';
import { ok, err, isOk, isErr } from '../result';

describe('Result<T, E> envelope', () => {
  it('creates an Ok result correctly', () => {
    const res = ok({ value: 42 });
    expect(isOk(res)).toBe(true);
    expect(isErr(res)).toBe(false);
    if (isOk(res)) {
      expect(res.data.value).toBe(42);
    }
  });

  it('creates an Err result correctly', () => {
    const res = err(new Error('Sample failure'));
    expect(isOk(res)).toBe(false);
    expect(isErr(res)).toBe(true);
    if (isErr(res)) {
      expect(res.error.message).toBe('Sample failure');
    }
  });
});
