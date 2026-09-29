import { describe, it, expect } from 'vitest';
import {
  generateDailyChallenge,
  getDayOfYear,
  createSeededRandom,
} from '../lib/dailyChallengeGenerator';

describe('dailyChallengeGenerator', () => {
  it('generates 5 curated questions for a given date', () => {
    const questions = generateDailyChallenge('2026-09-30');
    expect(questions).toHaveLength(5);
    questions.forEach(q => {
      expect(q.prompt).toBeTruthy();
      expect(q.options).toHaveLength(4);
      expect(q.options).toContain(q.correctAnswer);
      expect(['kana', 'kanji', 'vocab']).toContain(q.category);
    });
  });

  it('is completely deterministic for the same date', () => {
    const qA = generateDailyChallenge('2026-09-30');
    const qB = generateDailyChallenge('2026-09-30');
    expect(qA).toEqual(qB);
  });

  it('generates different questions for different dates', () => {
    const q1 = generateDailyChallenge('2026-09-30');
    const q2 = generateDailyChallenge('2026-10-01');
    expect(q1[0].prompt).not.toBe(q2[0].prompt);
  });

  it('calculates day of year correctly', () => {
    const jan1 = new Date(2026, 0, 1);
    expect(getDayOfYear(jan1)).toBe(1);
  });
});
