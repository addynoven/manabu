import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';

describe('ProgressStore', () => {
  beforeEach(() => {
    useProgressStore.getState().resetAllStats();
  });

  it('records correct answers and awards XP', () => {
    const store = useProgressStore.getState();
    expect(store.totalCorrect).toBe(0);
    expect(store.totalXp).toBe(0);

    store.recordAnswer('あ', true, 'kana');

    const updated = useProgressStore.getState();
    expect(updated.totalQuestionsAnswered).toBe(1);
    expect(updated.totalCorrect).toBe(1);
    expect(updated.totalXp).toBe(10);
    expect(updated.currentStreak).toBe(1);
    expect(updated.kanaPracticedCount).toBe(1);
  });

  it('records incorrect answers with reduced XP and resets streak', () => {
    const store = useProgressStore.getState();
    store.recordAnswer('日', false, 'kanji');

    const updated = useProgressStore.getState();
    expect(updated.totalQuestionsAnswered).toBe(1);
    expect(updated.totalCorrect).toBe(0);
    expect(updated.totalXp).toBe(2);
    expect(updated.kanjiPracticedCount).toBe(1);
  });

  it('correctly sorts strongest and weakest characters', () => {
    const store = useProgressStore.getState();
    // 'あ' has 100% (2/2)
    store.recordAnswer('あ', true, 'kana');
    store.recordAnswer('あ', true, 'kana');

    // 'い' has 0% (0/2)
    store.recordAnswer('い', false, 'kana');
    store.recordAnswer('い', false, 'kana');

    const strongest = useProgressStore.getState().getStrongestCharacters('kana', 1);
    expect(strongest.length).toBe(1);
    expect(strongest[0]?.character).toBe('あ');
    expect(strongest[0]?.accuracy).toBe(100);

    const weakest = useProgressStore.getState().getWeakestCharacters('kana', 1);
    expect(weakest.length).toBe(1);
    expect(weakest[0]?.character).toBe('い');
    expect(weakest[0]?.accuracy).toBe(0);
  });
});
