import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import type { ArcadeStats, MemoryDeckMode } from '../models/arcade.model';

interface ArcadeState extends ArcadeStats {
  recordWordleResult: (won: boolean) => void;
  recordMemoryScore: (deck: MemoryDeckMode, moves: number) => void;
  recordRainScore: (score: number) => { isNewHigh: boolean };
  addZenSession: (seconds: number, cycles: number) => void;
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
  zenMinutesTotal: 0,
  zenCyclesTotal: 0,
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

      addZenSession: (seconds: number, cycles: number) => {
        set(state => {
          const addedMinutes = Math.round((seconds / 60) * 10) / 10;
          return {
            zenMinutesTotal: Math.round((state.zenMinutesTotal + addedMinutes) * 10) / 10,
            zenCyclesTotal: state.zenCyclesTotal + cycles,
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
