import { describe, it, expect } from 'vitest';
import {
  KANJI_DUEL_BANK,
  KANJI_DUEL_BOTS,
  calculateDuelDamage,
  generateDuelMatch,
} from '../lib/kanjiDuelEngine';

describe('kanjiDuelEngine', () => {
  describe('KANJI_DUEL_BANK', () => {
    it('has at least 10 well-formed Kanji duel questions', () => {
      expect(KANJI_DUEL_BANK.length).toBeGreaterThanOrEqual(10);
      KANJI_DUEL_BANK.forEach((q) => {
        expect(q.id).toBeDefined();
        expect(q.kanjiChar).toBeTruthy();
        expect(q.questionTitle).toBeTruthy();
        expect(q.options).toHaveLength(4);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(4);
        expect(q.explanation).toBeTruthy();
        expect(q.ttsAudio).toBeTruthy();
      });
    });
  });

  describe('calculateDuelDamage', () => {
    it('deals critical strike damage for fast answers (<1200ms)', () => {
      const res = calculateDuelDamage(850);
      expect(res.isCritical).toBe(true);
      expect(res.damage).toBe(280);
      expect(res.strikeTitle).toContain('CRITICAL');
    });

    it('deals standard clean strike damage for medium answers (1200-2499ms)', () => {
      const res = calculateDuelDamage(1600);
      expect(res.isCritical).toBe(false);
      expect(res.damage).toBe(200);
      expect(res.strikeTitle).toContain('CLEAN');
    });

    it('deals graze strike damage for slow answers (>=2500ms)', () => {
      const res = calculateDuelDamage(2800);
      expect(res.isCritical).toBe(false);
      expect(res.damage).toBe(130);
      expect(res.strikeTitle).toContain('GRAZE');
    });
  });

  describe('generateDuelMatch', () => {
    it('returns questions array matching bank length', () => {
      const match = generateDuelMatch();
      expect(match).toHaveLength(KANJI_DUEL_BANK.length);
      const uniqueIds = new Set(match.map((q) => q.id));
      expect(uniqueIds.size).toBe(KANJI_DUEL_BANK.length);
    });
  });

  describe('KANJI_DUEL_BOTS', () => {
    it('contains easy, medium, and hard bots with scaled combat stats', () => {
      const easy = KANJI_DUEL_BOTS.easy;
      const medium = KANJI_DUEL_BOTS.medium;
      const hard = KANJI_DUEL_BOTS.hard;

      expect(easy.attackTimerMs).toBeGreaterThan(medium.attackTimerMs);
      expect(medium.attackTimerMs).toBeGreaterThan(hard.attackTimerMs);

      expect(hard.baseDamage).toBeGreaterThan(medium.baseDamage);
      expect(medium.baseDamage).toBeGreaterThan(easy.baseDamage);

      expect(hard.accuracy).toBeGreaterThan(medium.accuracy);
      expect(medium.accuracy).toBeGreaterThan(easy.accuracy);
    });
  });
});
