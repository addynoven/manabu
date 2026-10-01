import { describe, it, expect, beforeEach } from 'vitest';
import { useArcadeStore } from '../store/useArcadeStore';

describe('arcadeStore', () => {
  beforeEach(() => {
    useArcadeStore.getState().resetArcadeStats();
  });

  it('records wordle results and streaks', () => {
    const store = useArcadeStore.getState();
    expect(store.wordlePlayed).toBe(0);
    expect(store.wordleWins).toBe(0);

    // Win 1
    store.recordWordleResult(true);
    let updated = useArcadeStore.getState();
    expect(updated.wordlePlayed).toBe(1);
    expect(updated.wordleWins).toBe(1);
    expect(updated.wordleCurrentStreak).toBe(1);
    expect(updated.wordleMaxStreak).toBe(1);

    // Win 2
    store.recordWordleResult(true);
    updated = useArcadeStore.getState();
    expect(updated.wordleCurrentStreak).toBe(2);
    expect(updated.wordleMaxStreak).toBe(2);

    // Loss resets current streak but preserves max streak
    store.recordWordleResult(false);
    updated = useArcadeStore.getState();
    expect(updated.wordlePlayed).toBe(3);
    expect(updated.wordleWins).toBe(2);
    expect(updated.wordleCurrentStreak).toBe(0);
    expect(updated.wordleMaxStreak).toBe(2);
  });

  it('records memory best moves (lower is better)', () => {
    const store = useArcadeStore.getState();
    expect(store.memoryBestMoves['kana-romaji']).toBe(0);

    store.recordMemoryScore('kana-romaji', 14);
    expect(useArcadeStore.getState().memoryBestMoves['kana-romaji']).toBe(14);

    // Better score (fewer moves)
    store.recordMemoryScore('kana-romaji', 10);
    expect(useArcadeStore.getState().memoryBestMoves['kana-romaji']).toBe(10);

    // Worse score should not overwrite
    store.recordMemoryScore('kana-romaji', 16);
    expect(useArcadeStore.getState().memoryBestMoves['kana-romaji']).toBe(10);
  });

  it('records rain high score', () => {
    const store = useArcadeStore.getState();
    const res1 = store.recordRainScore(120);
    expect(res1.isNewHigh).toBe(true);
    expect(useArcadeStore.getState().rainHighScore).toBe(120);

    const res2 = store.recordRainScore(80);
    expect(res2.isNewHigh).toBe(false);
    expect(useArcadeStore.getState().rainHighScore).toBe(120);
  });

  it('records catch high score', () => {
    const store = useArcadeStore.getState();
    expect(store.catchHighScore).toBe(0);

    const res1 = store.recordCatchScore(250);
    expect(res1.isNewHigh).toBe(true);
    expect(useArcadeStore.getState().catchHighScore).toBe(250);

    const res2 = store.recordCatchScore(150);
    expect(res2.isNewHigh).toBe(false);
    expect(useArcadeStore.getState().catchHighScore).toBe(250);

    const res3 = store.recordCatchScore(400);
    expect(res3.isNewHigh).toBe(true);
    expect(useArcadeStore.getState().catchHighScore).toBe(400);
  });

  it('records zen minutes and cycles', () => {
    const store = useArcadeStore.getState();
    store.addZenSession(120, 5); // 2 minutes, 5 cycles
    const state = useArcadeStore.getState();
    expect(state.zenMinutesTotal).toBe(2);
    expect(state.zenCyclesTotal).toBe(5);
  });

  it('records daily challenge results and maintains streaks', () => {
    const store = useArcadeStore.getState();
    expect(store.dailyChallengeStreak).toBe(0);
    expect(store.dailyChallengeCompleted).toBe(false);

    // Day 1 completion
    store.recordDailyChallenge(180, 24, 100);
    let state = useArcadeStore.getState();
    expect(state.dailyChallengeCompleted).toBe(true);
    expect(state.dailyChallengeStreak).toBe(1);
    expect(state.dailyChallengeLastResult?.score).toBe(180);
    expect(state.dailyChallengeLastResult?.accuracy).toBe(100);

    // Same day play maintains streak
    store.recordDailyChallenge(200, 20, 100);
    state = useArcadeStore.getState();
    expect(state.dailyChallengeStreak).toBe(1);
    expect(state.dailyChallengeLastResult?.score).toBe(200);
  });
});
