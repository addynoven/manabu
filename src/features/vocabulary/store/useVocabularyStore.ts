import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import type { VocabLevel } from '../models/vocabulary.model';

interface VocabState {
  selectedLevel: VocabLevel;
  setSelectedLevel: (level: VocabLevel) => void;
}

export const useVocabularyStore = create<VocabState>()(
  persist(
    set => ({
      selectedLevel: 'n5',
      setSelectedLevel: (level: VocabLevel) => set({ selectedLevel: level }),
    }),
    {
      name: 'manabu_vocab_store',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
