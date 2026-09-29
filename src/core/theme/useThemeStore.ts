import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../storage/mmkv';
import {
  THEME_PALETTES,
  DEFAULT_THEME_ID,
  getThemePalette,
  ThemePalette,
} from './palettes';

interface ThemeState {
  activeThemeId: string;
  setThemeId: (id: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      activeThemeId: DEFAULT_THEME_ID,
      setThemeId: (id: string) => {
        if (THEME_PALETTES[id]) {
          set({ activeThemeId: id });
        }
      },
    }),
    {
      name: 'manabu_theme_store',
      storage: createJSONStorage(() => clientStorage),
    }
  )
);

/**
 * Reactive hook returning the currently active theme palette and colors.
 */
export function useAppTheme(): {
  theme: ThemePalette;
  colors: ThemePalette['colors'];
  setThemeId: (id: string) => void;
  activeThemeId: string;
} {
  const activeThemeId = useThemeStore((state) => state.activeThemeId);
  const setThemeId = useThemeStore((state) => state.setThemeId);
  const theme = getThemePalette(activeThemeId);

  return {
    theme,
    colors: theme.colors,
    setThemeId,
    activeThemeId,
  };
}
