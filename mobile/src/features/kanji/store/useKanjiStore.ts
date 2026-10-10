import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import type { KanjiLevel } from '../models/kanji.model';

interface KanjiState {
  selectedLevel: KanjiLevel;
  setSelectedLevel: (level: KanjiLevel) => void;
}

export const useKanjiStore = create<KanjiState>()(
  persist(
    set => ({
      selectedLevel: 'N5',
      setSelectedLevel: (level: KanjiLevel) => set({ selectedLevel: level }),
    }),
    {
      name: 'manabu_kanji_store',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
