import { beforeEach, describe, expect, it } from 'vitest';
import { useChallengeStore } from '../store/useChallengeStore';

describe('useChallengeStore', () => {
  beforeEach(() => {
    useChallengeStore.setState({
      blitzRecords: {},
      gauntletRecords: {},
    });
  });

  describe('Blitz Records', () => {
    it('records blitz sessions and detects new best scores', () => {
      const { recordBlitz, getBlitzStats } = useChallengeStore.getState();

      const r1 = recordBlitz('kana', 60, 15, 12);
      expect(r1.isNewBest).toBe(true);

      const stats1 = getBlitzStats('kana', 60);
      expect(stats1.bestScore).toBe(15);
      expect(stats1.bestStreak).toBe(12);
      expect(stats1.sessionsCompleted).toBe(1);

      // Second session with lower score is not new best
      const r2 = recordBlitz('kana', 60, 10, 8);
      expect(r2.isNewBest).toBe(false);

      const stats2 = getBlitzStats('kana', 60);
      expect(stats2.bestScore).toBe(15);
      expect(stats2.bestStreak).toBe(12);
      expect(stats2.sessionsCompleted).toBe(2);

      // Third session with higher score
      const r3 = recordBlitz('kana', 60, 22, 18);
      expect(r3.isNewBest).toBe(true);

      const stats3 = getBlitzStats('kana', 60);
      expect(stats3.bestScore).toBe(22);
      expect(stats3.bestStreak).toBe(18);
      expect(stats3.sessionsCompleted).toBe(3);
    });

    it('isolates blitz records across different durations and dojos', () => {
      const { recordBlitz, getBlitzStats } = useChallengeStore.getState();

      recordBlitz('kana', 30, 8, 5);
      recordBlitz('kana', 60, 18, 14);
      recordBlitz('kanji', 60, 12, 10);

      expect(getBlitzStats('kana', 30).bestScore).toBe(8);
      expect(getBlitzStats('kana', 60).bestScore).toBe(18);
      expect(getBlitzStats('kanji', 60).bestScore).toBe(12);
      expect(getBlitzStats('vocab', 60).bestScore).toBe(0);
    });
  });

  describe('Gauntlet Records', () => {
    it('records gauntlet clears and attempts', () => {
      const { recordGauntlet, getGauntletStats } = useChallengeStore.getState();

      recordGauntlet('kana', 'normal', false, 4);
      let stats = getGauntletStats('kana', 'normal');
      expect(stats.attempts).toBe(1);
      expect(stats.clears).toBe(0);
      expect(stats.bestStreak).toBe(4);

      recordGauntlet('kana', 'normal', true, 10);
      stats = getGauntletStats('kana', 'normal');
      expect(stats.attempts).toBe(2);
      expect(stats.clears).toBe(1);
      expect(stats.bestStreak).toBe(10);
    });

    it('isolates gauntlet stats by difficulty', () => {
      const { recordGauntlet, getGauntletStats } = useChallengeStore.getState();

      recordGauntlet('kana', 'normal', true, 10);
      recordGauntlet('kana', 'instant-death', false, 3);

      expect(getGauntletStats('kana', 'normal').clears).toBe(1);
      expect(getGauntletStats('kana', 'instant-death').clears).toBe(0);
      expect(getGauntletStats('kana', 'instant-death').bestStreak).toBe(3);
    });
  });
});
