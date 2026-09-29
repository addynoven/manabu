import React from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { radii, spacing, useAppTheme } from '../theme';

export type BadgeVariant = 'primary' | 'success' | 'accent' | 'muted';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
  icon?: React.ReactNode;
}

export function Badge({
  label,
  variant = 'primary',
  style,
  icon,
}: BadgeProps) {
  const { colors: theme } = useAppTheme();

  const getColors = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: theme.primaryLight,
          text: theme.primary,
        };
      case 'success':
        return {
          bg: theme.successLight,
          text: theme.success,
        };
      case 'accent':
        return {
          bg: theme.accentLight,
          text: theme.accent,
        };
      case 'muted':
        return {
          bg: theme.surfaceSubtle,
          text: theme.textSecondary,
        };
    }
  };

  const scheme = getColors();

  return (
    <View style={[styles.badge, { backgroundColor: scheme.bg }, style]}>
      {icon}
      <Text style={[styles.label, { color: scheme.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm + 2,
    borderRadius: radii.full,
    gap: spacing.xs,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
