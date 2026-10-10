import { useCallback } from 'react';
import { THEME_PALETTES } from '../../../core/theme/palettes';
import { useThemeStore } from '../../../core/theme/useThemeStore';
import { useSettingsStore } from '../store/useSettingsStore';

const themeIds = Object.keys(THEME_PALETTES);

export function useCrazyModeTrigger() {
  const crazyMode = useSettingsStore(state => state.crazyMode);
  const setThemeId = useThemeStore(state => state.setThemeId);

  const triggerCrazyMode = useCallback(() => {
    if (!crazyMode || themeIds.length === 0) return;
    const randomIndex = Math.floor(Math.random() * themeIds.length);
    const randomThemeId = themeIds[randomIndex];
    setThemeId(randomThemeId);
  }, [crazyMode, setThemeId]);

  return {
    isCrazyMode: crazyMode,
    triggerCrazyMode,
  };
}
