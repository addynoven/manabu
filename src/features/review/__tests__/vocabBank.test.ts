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
        accuracy: 0.3,
        totalAttempts: 5,
        correctCount: 1,
        incorrectCount: 4,
        lastPracticedAt: new Date().toISOString(),
        interval: 1,
        easeFactor: 2.5,
        itemType: 'vocab' as const,
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
