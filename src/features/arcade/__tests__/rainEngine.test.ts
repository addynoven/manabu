import { describe, it, expect } from 'vitest';
import {
  getCandidatesForMode,
  spawnRainItem,
  getComboMultiplier,
  calculateDropScore,
  DIFFICULTY_SPEED_MAP,
  HIRAGANA_RAIN_CANDIDATES,
  KATAKANA_RAIN_CANDIDATES,
  KANJI_RAIN_CANDIDATES,
} from '../lib/rainEngine';

describe('rainEngine', () => {
  it('returns candidate list based on mode', () => {
    const hira = getCandidatesForMode('hiragana');
    expect(hira.length).toBeGreaterThanOrEqual(46);
    expect(hira[0].category).toBe('hiragana');

    const kata = getCandidatesForMode('katakana');
    expect(kata.length).toBeGreaterThanOrEqual(46);
    expect(kata[0].category).toBe('katakana');

    const kanji = getCandidatesForMode('kanji');
    expect(kanji.length).toBeGreaterThanOrEqual(15);
    expect(kanji[0].category).toBe('kanji');

    const mixed = getCandidatesForMode('mixed');
    expect(mixed.length).toBe(hira.length + kata.length + kanji.length);
  });

  it('spawns a rain item with 4 distinct options including the correct answer', () => {
    const item = spawnRainItem(1, 1.0, 'hiragana');
    expect(item.id).toMatch(/^rain-\d+-1$/);
    expect(item.glyph).toBeDefined();
    expect(item.answer).toBeDefined();
    expect(item.options).toHaveLength(4);
    expect(item.options).toContain(item.answer);
    expect(item.column).toBeGreaterThanOrEqual(0);
    expect(item.column).toBeLessThan(4);
    expect(item.speed).toBeGreaterThan(0);
  });

  it('applies speed multiplier on spawned item', () => {
    const normal = spawnRainItem(1, 1.0, 'hiragana');
    const fast = spawnRainItem(2, 2.0, 'hiragana');
    expect(fast.speed).toBeGreaterThan(normal.speed);
  });

  it('calculates combo multipliers correctly based on streak thresholds', () => {
    expect(getComboMultiplier(0)).toBe(1);
    expect(getComboMultiplier(4)).toBe(1);
    expect(getComboMultiplier(5)).toBe(2);
    expect(getComboMultiplier(9)).toBe(2);
    expect(getComboMultiplier(10)).toBe(3);
    expect(getComboMultiplier(14)).toBe(3);
    expect(getComboMultiplier(15)).toBe(4);
    expect(getComboMultiplier(50)).toBe(4);
  });

  it('calculates drop score incorporating combo and speed bonus', () => {
    const baseScore = calculateDropScore(1, 1.0);
    expect(baseScore).toBe(10);

    const comboScore = calculateDropScore(5, 1.0); // 2x
    expect(comboScore).toBe(20);

    const fastScore = calculateDropScore(1, 1.5);
    expect(fastScore).toBeGreaterThan(10);
  });

  it('has valid difficulty speed mappings', () => {
    expect(DIFFICULTY_SPEED_MAP.easy).toBeLessThan(DIFFICULTY_SPEED_MAP.medium);
    expect(DIFFICULTY_SPEED_MAP.medium).toBeLessThan(DIFFICULTY_SPEED_MAP.hard);
  });
});
