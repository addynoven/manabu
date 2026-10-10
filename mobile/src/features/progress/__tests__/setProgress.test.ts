import { describe, it, expect, beforeEach } from 'vitest';
import {
  calculateKanjiSetProgressAndStars,
  calculateVocabularySetProgressAndStars,
  KANJI_SET_PROGRESS_TARGET,
  MAX_STARS_PER_SET,
} from '../lib/setProgress';
import { useSetProgressStore } from '../store/useSetProgressStore';

describe('setProgress logic', () => {
  it('returns 0 stars and 0 progress for empty entries', () => {
    const res = calculateKanjiSetProgressAndStars([]);
    expect(res.stars).toBe(0);
    expect(res.progress).toBe(0);
    expect(res.isMaxed).toBe(false);
  });

  it('calculates progress within 0-star band accurately', () => {
    // 10 items, target 5 per item = cycleTarget 50
    // 25 correct = 50% of 1st star
    const entries = Array(10).fill({ correct: 2.5 });
    const res = calculateKanjiSetProgressAndStars(entries, 5);
    expect(res.stars).toBe(0);
    expect(res.progress).toBe(0.5);
    expect(res.isMaxed).toBe(false);
  });

  it('awards 1 star and wraps progress when cycleTarget is reached', () => {
    // 10 items, 5 correct each = 50 correct = 1 star, 0% to next
    const entries = Array(10).fill({ correct: 5 });
    const res = calculateKanjiSetProgressAndStars(entries, 5);
    expect(res.stars).toBe(1);
    expect(res.progress).toBe(0);
    expect(res.isMaxed).toBe(false);
  });

  it('caps at MAX_STARS_PER_SET (3 stars) and 100% progress', () => {
    // 10 items, 15 correct each = 150 correct = 3 stars (maxed)
    const entries = Array(10).fill({ correct: 15 });
    const res = calculateKanjiSetProgressAndStars(entries, 5);
    expect(res.stars).toBe(3);
    expect(res.progress).toBe(1);
    expect(res.isMaxed).toBe(true);
  });
});

describe('useSetProgressStore', () => {
  beforeEach(() => {
    useSetProgressStore.getState().clearSetProgress();
  });

  it('records kanji progress and updates set stats', () => {
    const store = useSetProgressStore.getState();
    store.recordKanjiProgress('日');
    store.recordKanjiProgress('日');

    expect(useSetProgressStore.getState().kanjiProgress['日']).toBe(2);

    const stats = useSetProgressStore
      .getState()
      .getKanjiSetStats(['日', '一'], 5);
    // 2 items, target 5 each -> cycle target 10. earned: 2. progress: 2/10 = 0.2
    expect(stats.stars).toBe(0);
    expect(stats.progress).toBe(0.2);
  });

  it('records vocab progress correctly', () => {
    const store = useSetProgressStore.getState();
    store.recordVocabProgress('猫');
    expect(useSetProgressStore.getState().vocabProgress['猫']).toBe(1);
  });
});
