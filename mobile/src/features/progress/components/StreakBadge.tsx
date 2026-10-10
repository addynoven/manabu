import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radii, spacing, useAppTheme } from '../../../core/theme';

interface StreakBadgeProps {
  streak: number;
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  const { colors: theme } = useAppTheme();

  return (
    <View style={[styles.badge, { backgroundColor: theme.accentLight }]}>
      <Text style={styles.icon}>🔥</Text>
      <Text style={[styles.count, { color: theme.accent }]}>{streak}</Text>
      <Text style={[styles.label, { color: theme.accent }]}>day streak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radii.full,
    gap: spacing.xs,
  },
  icon: {
    fontSize: 14,
  },
  count: {
    fontSize: 14,
    fontWeight: '700',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
