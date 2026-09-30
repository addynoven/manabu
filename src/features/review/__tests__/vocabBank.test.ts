import { describe, it, expect } from 'vitest';
import { getLearnedVocabWords, groupWordsByUnit } from '../services/vocabBank.service';

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

  it('groups vocabulary words into unit bundles with mastery rates', () => {
    const words = getLearnedVocabWords(new Set());
    const bundles = groupWordsByUnit(words);
    expect(bundles.length).toBeGreaterThan(0);
    expect(bundles[0].unitNumber).toBeDefined();
    expect(bundles[0].words.length).toBe(bundles[0].totalCount);
    expect(bundles[0].masteryRate).toBeGreaterThanOrEqual(0);
    expect(bundles[0].masteryRate).toBeLessThanOrEqual(100);
  });

  it('automatically adds Unit 3 deck when any lesson of Unit 3 is completed', () => {
    const words = getLearnedVocabWords(new Set(['u3_l1']), {}, { maxUnits: 30 });
    const bundles = groupWordsByUnit(words);
    const unit3Bundle = bundles.find(b => b.unitNumber === 3);

    expect(unit3Bundle).toBeDefined();
    expect(unit3Bundle?.words.length).toBeGreaterThan(0);
    expect(unit3Bundle?.unitTitle).toBeDefined();
  });
});

