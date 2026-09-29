export const colors = {
  light: {
    background: '#FAF8F5',
    surface: '#FFFFFF',
    surfaceSubtle: '#F4EFEA',
    surfaceHighlight: '#EFE9E1',
    border: '#E7E2DA',
    borderSubtle: '#F0EBE3',
    textPrimary: '#1F1E1D',
    textSecondary: '#6B6661',
    textMuted: '#9E9890',
    primary: '#D92D43', // Japanese Torii Crimson
    textOnPrimary: '#FFFFFF',
    primaryLight: '#FEE2E2',
    primaryDark: '#B91C1C',
    accent: '#D97706', // Ochre Amber
    accentLight: '#FEF3C7',
    success: '#059669', // Bamboo Green
    successLight: '#D1FAE5',
    error: '#DC2626',
    errorLight: '#FEE2E2',
    card: '#FFFFFF',
    tabBar: '#FAF8F5',
    tabBarBorder: '#E7E2DA',
  },
  dark: {
    background: '#121214',
    surface: '#18181B',
    surfaceSubtle: '#27272A',
    surfaceHighlight: '#3F3F46',
    border: '#2E2E33',
    borderSubtle: '#222226',
    textPrimary: '#FAFAFA',
    textSecondary: '#A1A1AA',
    textMuted: '#71717A',
    primary: '#FB7185', // Soft Crimson
    textOnPrimary: '#000000',
    primaryLight: '#3F1219',
    primaryDark: '#E11D48',
    accent: '#FBBF24',
    accentLight: '#3B2903',
    success: '#34D399',
    successLight: '#063B28',
    error: '#F87171',
    errorLight: '#450A0A',
    card: '#18181B',
    tabBar: '#121214',
    tabBarBorder: '#27272A',
  },
} as const;

export type ThemeColors = typeof colors.light;
