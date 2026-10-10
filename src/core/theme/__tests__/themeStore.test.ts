import { describe, it, expect, beforeEach } from 'vitest';
import { THEME_PALETTES, DEFAULT_THEME_ID, getThemePalette } from '../palettes';
import { useThemeStore } from '../useThemeStore';

describe('Theme Palettes & Store', () => {
  beforeEach(() => {
    useThemeStore.getState().setThemeId(DEFAULT_THEME_ID);
  });

  it('contains handcrafted Japanese theme palettes', () => {
    const themeIds = Object.keys(THEME_PALETTES);
    expect(themeIds.length).toBeGreaterThanOrEqual(12);
    expect(themeIds).toContain('torii-crimson');
    expect(themeIds).toContain('midnight-tokyo');
    expect(themeIds).toContain('sakura-blossom');
    expect(themeIds).toContain('matcha-zen');
    expect(themeIds).toContain('cyberpunk-neo');
    expect(themeIds).toContain('kyoto-sunset');
    expect(themeIds).toContain('fuji-snow');
    expect(themeIds).toContain('sapphire-bloom');
    expect(themeIds).toContain('amethyst-mist');
    expect(themeIds).toContain('monkeytype-charcoal');
    expect(themeIds).toContain('paper-and-ink');
    expect(themeIds).toContain('shinobi-stealth');
  });

  it('provides default theme fallback when invalid theme requested', () => {
    const invalid = getThemePalette('non-existent-theme-xyz');
    expect(invalid.id).toBe(DEFAULT_THEME_ID);
    expect(invalid.name).toBe('Torii Crimson');
  });

  it('updates active theme in useThemeStore', () => {
    expect(useThemeStore.getState().activeThemeId).toBe('torii-crimson');

    useThemeStore.getState().setThemeId('midnight-tokyo');
    expect(useThemeStore.getState().activeThemeId).toBe('midnight-tokyo');

    // Invalid ID should not overwrite
    useThemeStore.getState().setThemeId('bogus-id');
    expect(useThemeStore.getState().activeThemeId).toBe('midnight-tokyo');
  });

  it('each theme defines all required color tokens with valid hex strings', () => {
    const requiredTokens = [
      'background',
      'surface',
      'surfaceSubtle',
      'surfaceHighlight',
      'border',
      'borderSubtle',
      'textPrimary',
      'textSecondary',
      'textMuted',
      'primary',
      'textOnPrimary',
      'primaryLight',
      'primaryDark',
      'accent',
      'accentLight',
      'success',
      'error',
      'card',
      'tabBar',
      'tabBarBorder',
    ] as const;

    for (const [id, palette] of Object.entries(THEME_PALETTES)) {
      expect(palette.id).toBe(id);
      expect(palette.name).toBeTruthy();
      expect(palette.japaneseName).toBeTruthy();
      for (const token of requiredTokens) {
        const colorVal = palette.colors[token];
        expect(colorVal).toBeDefined();
        expect(colorVal.startsWith('#')).toBe(true);
      }
    }
  });
});
