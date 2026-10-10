import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import { DEFAULT_THEME_ID } from '../../../core/theme/palettes';
import { useThemeStore } from '../../../core/theme/useThemeStore';

interface SettingsState {
  hapticsEnabled: boolean;
  soundEffectsEnabled: boolean;
  showRomajiInCharts: boolean;
  showFuriganaInDrills: boolean;
  theme: 'light' | 'dark' | 'system';
  themeId: string;
  ttsEnabled: boolean;
  ttsRate: number;
  ttsAutoPlay: boolean;
  crazyMode: boolean;
  setHapticsEnabled: (enabled: boolean) => void;
  setSoundEffectsEnabled: (enabled: boolean) => void;
  setShowRomajiInCharts: (show: boolean) => void;
  setShowFuriganaInDrills: (show: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setThemeId: (id: string) => void;
  setTtsEnabled: (enabled: boolean) => void;
  setTtsRate: (rate: number) => void;
  setTtsAutoPlay: (autoPlay: boolean) => void;
  setCrazyMode: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      hapticsEnabled: true,
      soundEffectsEnabled: true,
      showRomajiInCharts: true,
      showFuriganaInDrills: true,
      theme: 'system',
      themeId: DEFAULT_THEME_ID,
      ttsEnabled: true,
      ttsRate: 1.0,
      ttsAutoPlay: true,
      crazyMode: false,
      setHapticsEnabled: (enabled) => set({ hapticsEnabled: enabled }),
      setSoundEffectsEnabled: (enabled) => set({ soundEffectsEnabled: enabled }),
      setShowRomajiInCharts: (show) => set({ showRomajiInCharts: show }),
      setShowFuriganaInDrills: (show) => set({ showFuriganaInDrills: show }),
      setTheme: (theme) => set({ theme }),
      setThemeId: (id) => {
        set({ themeId: id });
        useThemeStore.getState().setThemeId(id);
      },
      setTtsEnabled: (enabled) => set({ ttsEnabled: enabled }),
      setTtsRate: (rate) => set({ ttsRate: rate }),
      setTtsAutoPlay: (autoPlay) => set({ ttsAutoPlay: autoPlay }),
      setCrazyMode: (enabled) => set({ crazyMode: enabled }),
    }),
    {
      name: 'manabu_settings_store',
      storage: createJSONStorage(() => clientStorage),
    }
  )
);
