import { describe, it, expect, beforeEach } from 'vitest';
import {
  calculateNextSrsStep,
  isItemDue,
  getStageGroup,
  getStageColor,
} from '../services/srsEngine';
import { resolveReviewItem } from '../services/reviewResolver.service';
import { useProgressStore } from '../../progress/store/useProgressStore';
import type { CharacterMastery } from '../../progress/models/progress.model';

describe('SRS Engine (Spaced Repetition System)', () => {
  it('advances SRS stages and increases intervals on correct answers', () => {
    const fixedNow = new Date('2026-09-30T10:00:00.000Z');

    // 1. Apprentice 1 -> Apprentice 2
    const step1 = calculateNextSrsStep('apprentice-1', true, fixedNow);
    expect(step1.nextStage).toBe('apprentice-2');
    expect(step1.intervalDays).toBeCloseTo(8 / 24, 2);
    expect(new Date(step1.nextReviewAt).getTime()).toBeGreaterThan(fixedNow.getTime());

    // 2. Apprentice 4 -> Guru 1 (7 days)
    const step2 = calculateNextSrsStep('apprentice-4', true, fixedNow);
    expect(step2.nextStage).toBe('guru-1');
    expect(step2.intervalDays).toBe(7);

    // 3. Guru 2 -> Master (30 days)
    const step3 = calculateNextSrsStep('guru-2', true, fixedNow);
    expect(step3.nextStage).toBe('master');
    expect(step3.intervalDays).toBe(30);

    // 4. Enlightened -> Burned
    const step4 = calculateNextSrsStep('enlightened', true, fixedNow);
    expect(step4.nextStage).toBe('burned');
  });

  it('demotes SRS stages on incorrect answers', () => {
    const fixedNow = new Date('2026-09-30T10:00:00.000Z');

    // Apprentice miss resets to Apprentice 1
    const miss1 = calculateNextSrsStep('apprentice-3', false, fixedNow);
    expect(miss1.nextStage).toBe('apprentice-1');

    // Guru miss drops back by 2 levels to Apprentice 3
    const miss2 = calculateNextSrsStep('guru-1', false, fixedNow);
    expect(miss2.nextStage).toBe('apprentice-3');
  });

  it('determines whether an item is due for review', () => {
    const now = new Date('2026-09-30T12:00:00.000Z');

    const pastDueItem: CharacterMastery = {
      character: 'ク',
      category: 'kana',
      correct: 2,
      incorrect: 1,
      total: 3,
      accuracy: 67,
      masteryLevel: 'learning',
      lastPracticedAt: '2026-09-29T10:00:00.000Z',
      srsStage: 'apprentice-1',
      nextReviewAt: '2026-09-30T10:00:00.000Z', // 2 hours in the past
      intervalDays: 0.16,
      streak: 1,
    };
    expect(isItemDue(pastDueItem, now)).toBe(true);

    const futureItem: CharacterMastery = {
      ...pastDueItem,
      nextReviewAt: '2026-10-01T12:00:00.000Z', // tomorrow
    };
    expect(isItemDue(futureItem, now)).toBe(false);

    const burnedItem: CharacterMastery = {
      ...pastDueItem,
      srsStage: 'burned',
      nextReviewAt: '2026-09-29T10:00:00.000Z',
    };
    expect(isItemDue(burnedItem, now)).toBe(false);

    const unassignedItem: CharacterMastery = {
      ...pastDueItem,
      nextReviewAt: null,
      total: 5,
    };
    expect(isItemDue(unassignedItem, now)).toBe(true);
  });

  it('provides stage groups and colors', () => {
    expect(getStageGroup('apprentice-2')).toBe('apprentice');
    expect(getStageGroup('guru-1')).toBe('guru');
    expect(getStageGroup('master')).toBe('master');
    expect(getStageGroup('enlightened')).toBe('enlightened');
    expect(getStageGroup('burned')).toBe('burned');

    expect(getStageColor('apprentice')).toBe('#EC4899');
    expect(getStageColor('guru')).toBe('#8B5CF6');
    expect(getStageColor('master')).toBe('#3B82F6');
  });
});

describe('Review Item Resolver', () => {
  it('resolves Kana items with reading and distractors', () => {
    const item: CharacterMastery = {
      character: 'あ',
      category: 'kana',
      correct: 5,
      incorrect: 0,
      total: 5,
      accuracy: 100,
      masteryLevel: 'mastered',
      lastPracticedAt: new Date().toISOString(),
      srsStage: 'guru-1',
      nextReviewAt: null,
      intervalDays: 7,
      streak: 5,
    };

    const resolved = resolveReviewItem(item);
    expect(resolved.japanese).toBe('あ');
    expect(resolved.reading.toLowerCase()).toBe('a');
    expect(resolved.options.length).toBe(4);
    expect(resolved.options).toContain(resolved.correctAnswer);
  });

  it('resolves Kanji items with meanings and distractors', () => {
    const item: CharacterMastery = {
      character: '日',
      category: 'kanji',
      correct: 3,
      incorrect: 1,
      total: 4,
      accuracy: 75,
      masteryLevel: 'learning',
      lastPracticedAt: new Date().toISOString(),
      srsStage: 'apprentice-2',
      nextReviewAt: null,
      intervalDays: 0.33,
      streak: 1,
    };

    const resolved = resolveReviewItem(item);
    expect(resolved.japanese).toBe('日');
    expect(resolved.english.length).toBeGreaterThan(0);
    expect(resolved.options.length).toBe(4);
    expect(resolved.options).toContain(resolved.correctAnswer);
  });

  it('resolves Dojo vocabulary items', () => {
    const item: CharacterMastery = {
      character: '学生',
      category: 'vocab',
      correct: 2,
      incorrect: 0,
      total: 2,
      accuracy: 100,
      masteryLevel: 'learning',
      lastPracticedAt: new Date().toISOString(),
      srsStage: 'apprentice-1',
      nextReviewAt: null,
      intervalDays: 0.16,
      streak: 2,
    };

    const resolved = resolveReviewItem(item);
    expect(resolved.japanese).toBe('学生');
    expect(resolved.reading.length).toBeGreaterThan(0);
    expect(resolved.english.length).toBeGreaterThan(0);
    expect(resolved.options.length).toBe(4);
  });
});

describe('useProgressStore SRS Integration', () => {
  beforeEach(() => {
    useProgressStore.getState().resetAllStats();
  });

  it('records SRS reviews and updates stages and XP', () => {
    const store = useProgressStore.getState();

    // 1. Initial answer
    store.recordSrsReview('ク', true, 'kana');
    const item1 = useProgressStore.getState().getCharacterMastery('ク');
    expect(item1).not.toBeNull();
    expect(item1?.srsStage).toBe('apprentice-2');
    expect(item1?.correct).toBe(1);
    expect(item1?.streak).toBe(1);
    expect(useProgressStore.getState().totalXp).toBe(15);

    // 2. Second correct answer -> apprentice-3
    store.recordSrsReview('ク', true, 'kana');
    const item2 = useProgressStore.getState().getCharacterMastery('ク');
    expect(item2?.srsStage).toBe('apprentice-3');
    expect(item2?.streak).toBe(2);

    // 3. Incorrect answer resets to apprentice-1
    store.recordSrsReview('ク', false, 'kana');
    const item3 = useProgressStore.getState().getCharacterMastery('ク');
    expect(item3?.srsStage).toBe('apprentice-1');
    expect(item3?.streak).toBe(0);
    expect(item3?.incorrect).toBe(1);
  });

  it('computes due review items and SRS distribution', () => {
    const store = useProgressStore.getState();

    store.recordSrsReview('あ', true, 'kana');
    store.recordSrsReview('い', true, 'kana');
    store.recordSrsReview('う', false, 'kana');

    const distribution = store.getSrsDistribution('kana');
    expect(distribution.total).toBe(3);
    expect(distribution.apprentice).toBe(3);

    // All newly reviewed items have nextReviewAt set into the future
    // Manually simulate one item being due in the past
    useProgressStore.setState(state => ({
      mastery: {
        ...state.mastery,
        あ: {
          ...state.mastery['あ'],
          nextReviewAt: '2020-01-01T00:00:00.000Z',
        },
      },
    }));

    const dueItems = useProgressStore.getState().getDueReviewItems('kana');
    expect(dueItems.length).toBe(1);
    expect(dueItems[0].character).toBe('あ');
  });
});
