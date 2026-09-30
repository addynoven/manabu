import { describe, expect, it } from 'vitest';
import {
  calculateMultiplier,
  evaluateAnswer,
  generateKanaSurvivalQuestion,
  generateKanjiSurvivalQuestion,
  generateSurvivalQuestion,
  generateVocabSurvivalQuestion,
  SURVIVAL_CONFIG,
} from '../lib/survivalEngine';

describe('survivalEngine', () => {
  describe('Question Generators', () => {
    it('generates valid Kana question with 4 unique options and correct answer', () => {
      const q = generateKanaSurvivalQuestion();
      expect(q.category).toBe('kana');
      expect(q.prompt).toBeTruthy();
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.options).toContain(q.correctAnswer);
    });

    it('generates valid Kanji question with 4 options and correct meaning', () => {
      const q = generateKanjiSurvivalQuestion();
      expect(q.category).toBe('kanji');
      expect(q.prompt).toBeTruthy();
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.options).toContain(q.correctAnswer);
    });

    it('generates valid Vocab question with 4 options', () => {
      const q = generateVocabSurvivalQuestion();
      expect(q.category).toBe('vocab');
      expect(q.prompt).toBeTruthy();
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.options).toContain(q.correctAnswer);
    });

    it('generates questions for Hell mode dynamically across all categories', () => {
      const categories = new Set<string>();
      for (let i = 0; i < 30; i++) {
        const q = generateSurvivalQuestion('hell');
        categories.add(q.category);
        expect(q.options).toHaveLength(4);
        expect(q.options).toContain(q.correctAnswer);
      }
      expect(categories.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Multipliers', () => {
    it('scales multipliers for standard modes', () => {
      expect(calculateMultiplier(0, 'kana')).toBe(1);
      expect(calculateMultiplier(4, 'kana')).toBe(1);
      expect(calculateMultiplier(5, 'kana')).toBe(2);
      expect(calculateMultiplier(9, 'kanji')).toBe(2);
      expect(calculateMultiplier(10, 'vocab')).toBe(3);
      expect(calculateMultiplier(20, 'kana')).toBe(4);
    });

    it('gives +1x bonus multiplier in Hell mode', () => {
      expect(calculateMultiplier(0, 'hell')).toBe(2);
      expect(calculateMultiplier(5, 'hell')).toBe(3);
      expect(calculateMultiplier(10, 'hell')).toBe(4);
      expect(calculateMultiplier(20, 'hell')).toBe(5);
    });
  });

  describe('Answer Evaluation & Time Deltas', () => {
    it('applies time bonus and streak points on correct answer', () => {
      const res = evaluateAnswer(true, 4, 1500, 'kana');
      expect(res.isCorrect).toBe(true);
      expect(res.newStreak).toBe(5);
      expect(res.newMultiplier).toBe(2);
      expect(res.timeDelta).toBe(SURVIVAL_CONFIG.correctBonusSec.standard);
      expect(res.isFastReflex).toBe(false);
      expect(res.pointsGained).toBe(200); // 100 * 2
    });

    it('awards extra fast reflex time bonus when answered under 1 second', () => {
      const res = evaluateAnswer(true, 0, 800, 'kana');
      expect(res.isCorrect).toBe(true);
      expect(res.isFastReflex).toBe(true);
      expect(res.timeDelta).toBe(
        SURVIVAL_CONFIG.correctBonusSec.standard + SURVIVAL_CONFIG.fastReflexBonusSec
      );
      expect(res.pointsGained).toBe(150); // 100 * 1 + 50 reflex bonus
    });

    it('penalizes time and resets streak on wrong answer in standard mode', () => {
      const res = evaluateAnswer(false, 8, 1200, 'kana');
      expect(res.isCorrect).toBe(false);
      expect(res.newStreak).toBe(0);
      expect(res.newMultiplier).toBe(1);
      expect(res.timeDelta).toBe(SURVIVAL_CONFIG.wrongPenaltySec.standard);
      expect(res.pointsGained).toBe(0);
    });

    it('applies steeper penalty and hell time bonus in Hell mode', () => {
      const correct = evaluateAnswer(true, 0, 1500, 'hell');
      expect(correct.timeDelta).toBe(SURVIVAL_CONFIG.correctBonusSec.hell);

      const wrong = evaluateAnswer(false, 10, 1500, 'hell');
      expect(wrong.timeDelta).toBe(SURVIVAL_CONFIG.wrongPenaltySec.hell);
      expect(wrong.newStreak).toBe(0);
      expect(wrong.newMultiplier).toBe(2);
    });
  });
});
