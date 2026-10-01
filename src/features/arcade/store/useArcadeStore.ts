import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import type { ArcadeStats, MemoryDeckMode } from '../models/arcade.model';

interface ArcadeState extends ArcadeStats {
  recordWordleResult: (won: boolean) => void;
  recordMemoryScore: (deck: MemoryDeckMode, moves: number) => void;
  recordRainScore: (score: number) => { isNewHigh: boolean };
  recordSnakeScore: (score: number) => { isNewHigh: boolean };
  recordCatchScore: (score: number) => { isNewHigh: boolean };
  recordSurvivalScore: (mode: string, score: number) => { isNewHigh: boolean };
  addZenSession: (seconds: number, cycles: number) => void;
  recordDailyChallenge: (score: number, timeSeconds: number, accuracy: number) => void;
  resetArcadeStats: () => void;
}

const initialStats: ArcadeStats = {
  wordlePlayed: 0,
  wordleWins: 0,
  wordleCurrentStreak: 0,
  wordleMaxStreak: 0,
  memoryBestMoves: {
    'kana-romaji': 0,
    'hira-kata': 0,
    'kanji-meaning': 0,
  },
  rainHighScore: 0,
  snakeHighScore: 0,
  catchHighScore: 0,
  survivalHighScores: {
    kana: 0,
    kanji: 0,
    vocab: 0,
    hell: 0,
  },
  zenMinutesTotal: 0,
  zenCyclesTotal: 0,
  dailyChallengeDate: '',
  dailyChallengeStreak: 0,
  dailyChallengeCompleted: false,
  dailyChallengeLastResult: null,
};

export const useArcadeStore = create<ArcadeState>()(
  persist(
    (set, get) => ({
      ...initialStats,

      recordWordleResult: (won: boolean) => {
        set(state => {
          const played = state.wordlePlayed + 1;
          const wins = won ? state.wordleWins + 1 : state.wordleWins;
          const currentStreak = won ? state.wordleCurrentStreak + 1 : 0;
          const maxStreak = Math.max(state.wordleMaxStreak, currentStreak);

          return {
            wordlePlayed: played,
            wordleWins: wins,
            wordleCurrentStreak: currentStreak,
            wordleMaxStreak: maxStreak,
          };
        });
      },

      recordMemoryScore: (deck: MemoryDeckMode, moves: number) => {
        set(state => {
          const currentBest = state.memoryBestMoves[deck] || 0;
          const newBest = currentBest === 0 ? moves : Math.min(currentBest, moves);

          return {
            memoryBestMoves: {
              ...state.memoryBestMoves,
              [deck]: newBest,
            },
          };
        });
      },

      recordRainScore: (score: number) => {
        const state = get();
        const isNewHigh = score > state.rainHighScore;
        if (isNewHigh) {
          set({ rainHighScore: score });
        }
        return { isNewHigh };
      },

      recordSnakeScore: (score: number) => {
        const state = get();
        const isNewHigh = score > state.snakeHighScore;
        if (isNewHigh) {
          set({ snakeHighScore: score });
        }
        return { isNewHigh };
      },

      recordCatchScore: (score: number) => {
        const state = get();
        const isNewHigh = score > state.catchHighScore;
        if (isNewHigh) {
          set({ catchHighScore: score });
        }
        return { isNewHigh };
      },

      recordSurvivalScore: (mode: string, score: number) => {
        const state = get();
        const currentHigh = state.survivalHighScores?.[mode] || 0;
        const isNewHigh = score > currentHigh;
        if (isNewHigh) {
          set({
            survivalHighScores: {
              ...(state.survivalHighScores || {}),
              [mode]: score,
            },
          });
        }
        return { isNewHigh };
      },

      addZenSession: (seconds: number, cycles: number) => {
        set(state => {
          const addedMinutes = Math.round((seconds / 60) * 10) / 10;
          return {
            zenMinutesTotal: Math.round((state.zenMinutesTotal + addedMinutes) * 10) / 10,
            zenCyclesTotal: state.zenCyclesTotal + cycles,
          };
        });
      },

      recordDailyChallenge: (score: number, timeSeconds: number, accuracy: number) => {
        const today = new Date().toISOString().split('T')[0];
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterday = yesterdayDate.toISOString().split('T')[0];

        set(state => {
          let newStreak = state.dailyChallengeStreak;
          if (state.dailyChallengeDate === today) {
            // Already played today, maintain streak
          } else if (state.dailyChallengeDate === yesterday) {
            newStreak += 1;
          } else {
            newStreak = 1;
          }

          return {
            dailyChallengeDate: today,
            dailyChallengeStreak: newStreak,
            dailyChallengeCompleted: true,
            dailyChallengeLastResult: {
              score,
              timeSeconds,
              accuracy,
              date: today,
            },
          };
        });
      },

      resetArcadeStats: () => {
        set(initialStats);
      },
    }),
    {
      name: 'manabu_arcade_store',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
