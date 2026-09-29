import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import type { KanaGameMode } from '../models/kana.model';

interface KanaState {
  selectedGroupIds: number[];
  gameMode: KanaGameMode;
  activeScript: 'hiragana' | 'katakana';
  toggleGroupId: (id: number) => void;
  setGroupIds: (ids: number[]) => void;
  selectAllForScript: (allIds: number[]) => void;
  clearSelection: () => void;
  setGameMode: (mode: KanaGameMode) => void;
  setActiveScript: (script: 'hiragana' | 'katakana') => void;
}

export const useKanaStore = create<KanaState>()(
  persist(
    (set, get) => ({
      // Default to first 3 groups (A, Ka, Sa rows)
      selectedGroupIds: [1, 2, 3],
      gameMode: 'pick',
      activeScript: 'hiragana',

      toggleGroupId: (id: number) => {
        const current = get().selectedGroupIds;
        const exists = current.includes(id);
        const next = exists ? current.filter(i => i !== id) : [...current, id];
        // Ensure at least 1 group is selected
        if (next.length === 0) return;
        set({ selectedGroupIds: next });
      },

      setGroupIds: (ids: number[]) => set({ selectedGroupIds: ids }),

      selectAllForScript: (allIds: number[]) =>
        set({ selectedGroupIds: allIds }),

      clearSelection: () => set({ selectedGroupIds: [1] }),

      setGameMode: (mode: KanaGameMode) => set({ gameMode: mode }),

      setActiveScript: (script: 'hiragana' | 'katakana') =>
        set({ activeScript: script }),
    }),
    {
      name: 'manabu_kana_store',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
