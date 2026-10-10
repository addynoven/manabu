import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import {
  calculateKanjiSetProgressAndStars,
  calculateVocabularySetProgressAndStars,
  KANJI_SET_PROGRESS_CAP,
  KANJI_SET_PROGRESS_TARGET,
  type SetProgressResult,
  VOCAB_SET_PROGRESS_CAP,
  VOCAB_SET_PROGRESS_TARGET,
} from '../lib/setProgress';

interface SetProgressState {
  kanjiProgress: Record<string, number>;
  vocabProgress: Record<string, number>;

  recordKanjiProgress: (char: string) => void;
  recordVocabProgress: (word: string) => void;

  getKanjiSetStats: (chars: string[], target?: number) => SetProgressResult;
  getVocabSetStats: (words: string[], target?: number) => SetProgressResult;

  clearSetProgress: () => void;
}

export const useSetProgressStore = create<SetProgressState>()(
  persist(
    (set, get) => ({
      kanjiProgress: {},
      vocabProgress: {},

      recordKanjiProgress: (char: string) => {
        set(state => {
          const current = state.kanjiProgress[char] || 0;
          if (current >= KANJI_SET_PROGRESS_CAP) return state;
          return {
            kanjiProgress: {
              ...state.kanjiProgress,
              [char]: current + 1,
            },
          };
        });
      },

      recordVocabProgress: (word: string) => {
        set(state => {
          const current = state.vocabProgress[word] || 0;
          if (current >= VOCAB_SET_PROGRESS_CAP) return state;
          return {
            vocabProgress: {
              ...state.vocabProgress,
              [word]: current + 1,
            },
          };
        });
      },

      getKanjiSetStats: (
        chars: string[],
        target: number = KANJI_SET_PROGRESS_TARGET,
      ): SetProgressResult => {
        const { kanjiProgress } = get();
        const entries = chars.map(c => ({
          correct: kanjiProgress[c] || 0,
        }));
        return calculateKanjiSetProgressAndStars(entries, target);
      },

      getVocabSetStats: (
        words: string[],
        target: number = VOCAB_SET_PROGRESS_TARGET,
      ): SetProgressResult => {
        const { vocabProgress } = get();
        const entries = words.map(w => ({
          correct: vocabProgress[w] || 0,
        }));
        return calculateVocabularySetProgressAndStars(entries, target);
      },

      clearSetProgress: () => {
        set({
          kanjiProgress: {},
          vocabProgress: {},
        });
      },
    }),
    {
      name: 'manabu_set_progress_store',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
