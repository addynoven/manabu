import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import type {
  BlitzDuration,
  BlitzStats,
  GauntletDifficulty,
  GauntletStats,
} from '../models/challenge.model';

interface ChallengeState {
  blitzRecords: Record<string, BlitzStats>;
  gauntletRecords: Record<string, GauntletStats>;

  recordBlitz: (
    dojo: string,
    duration: BlitzDuration,
    score: number,
    streak: number,
  ) => { isNewBest: boolean };

  recordGauntlet: (
    dojo: string,
    difficulty: GauntletDifficulty,
    cleared: boolean,
    streak: number,
  ) => void;

  getBlitzStats: (dojo: string, duration: BlitzDuration) => BlitzStats;
  getGauntletStats: (dojo: string, difficulty: GauntletDifficulty) => GauntletStats;
}

export const useChallengeStore = create<ChallengeState>()(
  persist(
    (set, get) => ({
      blitzRecords: {},
      gauntletRecords: {},

      recordBlitz: (dojo, duration, score, streak) => {
        const key = `${dojo}_${duration}`;
        const current = get().blitzRecords[key] || {
          bestScore: 0,
          bestStreak: 0,
          sessionsCompleted: 0,
        };

        const isNewBest = score > current.bestScore;
        const updated: BlitzStats = {
          bestScore: Math.max(current.bestScore, score),
          bestStreak: Math.max(current.bestStreak, streak),
          sessionsCompleted: current.sessionsCompleted + 1,
        };

        set(state => ({
          blitzRecords: {
            ...state.blitzRecords,
            [key]: updated,
          },
        }));

        useAchievementStore.getState().checkAchievements({
          blitzSession: { duration, score },
        });

        return { isNewBest };
      },

      recordGauntlet: (dojo, difficulty, cleared, streak) => {
        const key = `${dojo}_${difficulty}`;
        const current = get().gauntletRecords[key] || {
          clears: 0,
          attempts: 0,
          bestStreak: 0,
        };

        const updated: GauntletStats = {
          clears: cleared ? current.clears + 1 : current.clears,
          attempts: current.attempts + 1,
          bestStreak: Math.max(current.bestStreak, streak),
        };

        set(state => ({
          gauntletRecords: {
            ...state.gauntletRecords,
            [key]: updated,
          },
        }));

        useAchievementStore.getState().checkAchievements({
          gauntletResult: { difficulty, cleared },
        });
      },

      getBlitzStats: (dojo, duration) => {
        const key = `${dojo}_${duration}`;
        return (
          get().blitzRecords[key] || {
            bestScore: 0,
            bestStreak: 0,
            sessionsCompleted: 0,
          }
        );
      },

      getGauntletStats: (dojo, difficulty) => {
        const key = `${dojo}_${difficulty}`;
        return (
          get().gauntletRecords[key] || {
            clears: 0,
            attempts: 0,
            bestStreak: 0,
          }
        );
      },
    }),
    {
      name: 'manabu-challenge-storage',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
