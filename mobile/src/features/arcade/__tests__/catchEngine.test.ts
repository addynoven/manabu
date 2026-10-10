import { describe, it, expect } from 'vitest';
import {
  getCandidatePool,
  getRandomCatchTarget,
  getDifficultyConfig,
  spawnFallingWave,
  isBasketColliding,
  calculateCatchScore,
  clampBasketPosition,
  columnToPercent,
  percentToColumn,
  KANJI_CATCH_ITEMS,
  KANA_CATCH_ITEMS,
  VOCAB_CATCH_ITEMS,
} from '../lib/catchEngine';

describe('catchEngine', () => {
  describe('candidate pools', () => {
    it('returns kanji pool for kanji mode', () => {
      const pool = getCandidatePool('kanji');
      expect(pool).toBe(KANJI_CATCH_ITEMS);
      expect(pool.length).toBeGreaterThanOrEqual(20);
    });

    it('returns kana pool for kana mode', () => {
      const pool = getCandidatePool('kana');
      expect(pool).toBe(KANA_CATCH_ITEMS);
      expect(pool.length).toBeGreaterThanOrEqual(40);
    });

    it('returns vocab pool for vocab mode', () => {
      const pool = getCandidatePool('vocab');
      expect(pool).toBe(VOCAB_CATCH_ITEMS);
      expect(pool.length).toBeGreaterThanOrEqual(10);
    });

    it('returns combined pool for mixed mode', () => {
      const pool = getCandidatePool('mixed');
      expect(pool.length).toBe(KANJI_CATCH_ITEMS.length + VOCAB_CATCH_ITEMS.length);
    });
  });

  describe('getRandomCatchTarget', () => {
    it('generates a target from the kanji pool', () => {
      const target = getRandomCatchTarget('kanji');
      expect(target).toBeDefined();
      expect(target.category).toBe('kanji');
      expect(target.glyph.length).toBeGreaterThan(0);
      expect(target.promptPrimary.length).toBeGreaterThan(0);
    });

    it('generates a target from the kana pool', () => {
      const target = getRandomCatchTarget('kana');
      expect(target).toBeDefined();
      expect(target.category).toBe('kana');
      expect(target.promptPrimary).toContain('SOUND:');
    });

    it('respects excluded IDs when eligible items remain', () => {
      const pool = getCandidatePool('vocab');
      const excluded = new Set([pool[0].id]);
      const target = getRandomCatchTarget('vocab', excluded);
      expect(target.id).not.toBe(pool[0].id);
    });
  });

  describe('getDifficultyConfig', () => {
    it('returns distinct settings for chill, normal, and turbo', () => {
      const chill = getDifficultyConfig('chill');
      const normal = getDifficultyConfig('normal');
      const turbo = getDifficultyConfig('turbo');

      expect(chill.fallSpeed).toBeLessThan(normal.fallSpeed);
      expect(normal.fallSpeed).toBeLessThan(turbo.fallSpeed);
      expect(chill.spawnIntervalMs).toBeGreaterThan(normal.spawnIntervalMs);
      expect(normal.spawnIntervalMs).toBeGreaterThan(turbo.spawnIntervalMs);
      expect(chill.lives).toBeGreaterThanOrEqual(normal.lives);
    });
  });

  describe('spawnFallingWave', () => {
    it('spawns wave containing target when includeTarget is true', () => {
      const target = getRandomCatchTarget('kanji');
      const pool = getCandidatePool('kanji');
      const wave = spawnFallingWave(target, 4, pool, 'normal', true);

      expect(wave.length).toBeGreaterThan(0);
      expect(wave.length).toBeLessThanOrEqual(4);

      const targetItem = wave.find(item => item.isTarget);
      expect(targetItem).toBeDefined();
      expect(targetItem?.glyph).toBe(target.glyph);

      // Verify all items are on distinct columns and within bounds [0, 3]
      const cols = wave.map(item => item.column);
      const uniqueCols = new Set(cols);
      expect(cols.length).toBe(uniqueCols.size);
      cols.forEach(c => {
        expect(c).toBeGreaterThanOrEqual(0);
        expect(c).toBeLessThan(4);
      });
    });

    it('spawns only distractors when includeTarget is false', () => {
      const target = getRandomCatchTarget('kanji');
      const pool = getCandidatePool('kanji');
      const wave = spawnFallingWave(target, 4, pool, 'normal', false);

      const targetItem = wave.find(item => item.isTarget);
      expect(targetItem).toBeUndefined();
    });
  });

  describe('isBasketColliding', () => {
    it('detects collision when basket is aligned with column at catch height', () => {
      // 4 columns: Col 0 center = 12.5%, Col 1 center = 37.5%, Col 2 center = 62.5%, Col 3 center = 87.5%
      // Basket at 12.5% catching item on col 0 at y = 85%
      expect(isBasketColliding(0, 85, 12.5, 4, 25)).toBe(true);
      // Basket at 37.5% catching item on col 1 at y = 88%
      expect(isBasketColliding(1, 88, 37.5, 4, 25)).toBe(true);
    });

    it('rejects collision when item Y is outside catch threshold', () => {
      // Above threshold
      expect(isBasketColliding(0, 50, 12.5, 4, 25)).toBe(false);
      expect(isBasketColliding(0, 75, 12.5, 4, 25)).toBe(false);
      // Below threshold
      expect(isBasketColliding(0, 96, 12.5, 4, 25)).toBe(false);
    });

    it('rejects collision when basket is on a different column', () => {
      // Item is on column 0 (center 12.5%), basket is on column 3 (center 87.5%)
      expect(isBasketColliding(0, 85, 87.5, 4, 25)).toBe(false);
      // Item is on column 1 (center 37.5%), basket is on column 3 (center 87.5%)
      expect(isBasketColliding(1, 85, 87.5, 4, 25)).toBe(false);
    });

    it('tolerates small dragging offsets within catch width', () => {
      // Col 1 center is 37.5%. Basket is at 33% (slightly left of center)
      expect(isBasketColliding(1, 85, 33, 4, 25)).toBe(true);
      // Basket at 42% (slightly right of center)
      expect(isBasketColliding(1, 85, 42, 4, 25)).toBe(true);
    });
  });

  describe('calculateCatchScore', () => {
    it('calculates score based on difficulty and streak multiplier', () => {
      expect(calculateCatchScore(0, 'normal')).toBe(100);
      expect(calculateCatchScore(3, 'normal')).toBe(150); // 1.5x
      expect(calculateCatchScore(6, 'normal')).toBe(200); // 2.0x
      expect(calculateCatchScore(10, 'normal')).toBe(300); // 3.0x

      expect(calculateCatchScore(0, 'chill')).toBe(80);
      expect(calculateCatchScore(0, 'turbo')).toBe(150);
    });

    it('awards 250 bonus points for bonus star item', () => {
      expect(calculateCatchScore(0, 'normal', true)).toBe(250);
      expect(calculateCatchScore(10, 'turbo', true)).toBe(250);
    });
  });

  describe('clamping and column conversions', () => {
    it('clamps basket position within bounds', () => {
      expect(clampBasketPosition(-10, 20)).toBe(10);
      expect(clampBasketPosition(110, 20)).toBe(90);
      expect(clampBasketPosition(50, 20)).toBe(50);
    });

    it('converts column index to percentage center', () => {
      expect(columnToPercent(0, 4)).toBe(12.5);
      expect(columnToPercent(1, 4)).toBe(37.5);
      expect(columnToPercent(2, 4)).toBe(62.5);
      expect(columnToPercent(3, 4)).toBe(87.5);
    });

    it('converts percentage position to nearest column', () => {
      expect(percentToColumn(10, 4)).toBe(0);
      expect(percentToColumn(35, 4)).toBe(1);
      expect(percentToColumn(65, 4)).toBe(2);
      expect(percentToColumn(90, 4)).toBe(3);
    });
  });
});
