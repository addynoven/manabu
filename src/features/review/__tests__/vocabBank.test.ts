import { describe, it, expect } from 'vitest';
import { getLearnedVocabWords } from '../services/vocabBank.service';

describe('vocabBank.service', () => {
  it('extracts real vocabulary words and phrases from dojo units', () => {
    const words = getLearnedVocabWords(new Set());
    expect(words.length).toBeGreaterThan(10);

    const konnichiwa = words.find((w) => w.japanese === 'こんにちは');
    expect(konnichiwa).toBeDefined();
    expect(konnichiwa?.english.toLowerCase()).toContain('hello');
    expect(konnichiwa?.reading).toBe('こんにちは');
    expect(konnichiwa?.distractors.length).toBe(3);
  });

  it('filters by status: needs-practice', () => {
    const mockMastery = {
      'こんにちは': {
        character: 'こんにちは',
        category: 'vocab' as const,
        correct: 1,
        incorrect: 4,
        total: 5,
        accuracy: 0.2,
        masteryLevel: 'needs-practice' as const,
        lastPracticedAt: new Date().toISOString(),
        srsStage: 'apprentice-1' as const,
        nextReviewAt: null,
        intervalDays: 0.16,
        streak: 0,
      },
    };

    const words = getLearnedVocabWords(new Set(), mockMastery, {
      statusFilter: 'needs-practice',
    });
    expect(words.some((w) => w.japanese === 'こんにちは')).toBe(true);
    expect(words.every((w) => w.status === 'weak' || w.status === 'review')).toBe(true);
  });

  it('filters by unitFilter', () => {
    const unit1Words = getLearnedVocabWords(new Set(), {}, { unitFilter: 'unit_1' });
    expect(unit1Words.length).toBeGreaterThan(0);
    expect(unit1Words.every((w) => w.unitId === 'unit_1')).toBe(true);
  });
});
