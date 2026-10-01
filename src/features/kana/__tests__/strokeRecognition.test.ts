import { describe, it, expect } from 'vitest';
import { resamplePoints, validateStroke, calculateCharacterStars } from '../lib/strokeRecognition';

describe('strokeRecognition', () => {
  it('resamples polyline to exact target count', () => {
    const raw = [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
    ];
    const res = resamplePoints(raw, 5);
    expect(res).toHaveLength(5);
    expect(res[0]).toEqual({ x: 0, y: 0 });
    expect(res[2].x).toBeCloseTo(50, 0);
    expect(res[4].x).toBeCloseTo(100, 0);
  });

  it('validates a closely matched stroke with high score', () => {
    const ref = [
      { x: 20, y: 30 },
      { x: 40, y: 30 },
      { x: 60, y: 30 },
      { x: 80, y: 30 },
    ];
    const user = [
      { x: 21, y: 31 },
      { x: 50, y: 30 },
      { x: 79, y: 31 },
    ];

    const result = validateStroke(user, ref);
    expect(result.success).toBe(true);
    expect(result.score).toBeGreaterThanOrEqual(80);
    expect(result.message).toContain('★');
  });

  it('rejects a stroke drawn in the reverse direction', () => {
    const ref = [
      { x: 20, y: 30 },
      { x: 50, y: 30 },
      { x: 80, y: 30 },
    ];
    // Drawn backwards from right to left
    const user = [
      { x: 80, y: 30 },
      { x: 50, y: 30 },
      { x: 20, y: 30 },
    ];

    const result = validateStroke(user, ref);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('wrong_start');
  });

  it('rejects a stroke starting too far away', () => {
    const ref = [
      { x: 10, y: 10 },
      { x: 20, y: 20 },
      { x: 30, y: 30 },
    ];
    const user = [
      { x: 70, y: 70 },
      { x: 80, y: 80 },
      { x: 90, y: 90 },
    ];

    const result = validateStroke(user, ref);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('wrong_start');
  });

  it('calculates correct star rating for character accuracy', () => {
    expect(calculateCharacterStars([90, 88, 92]).stars).toBe(3);
    expect(calculateCharacterStars([70, 75, 72]).stars).toBe(2);
    expect(calculateCharacterStars([50, 45, 60]).stars).toBe(1);
  });
});
