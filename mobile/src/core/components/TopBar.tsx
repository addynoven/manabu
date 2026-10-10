import React, { type ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  type ViewStyle,
} from 'react-native';
import { spacing, useAppTheme } from '../theme';

interface TopBarProps {
  title: string;
  subtitle?: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
  style?: ViewStyle;
}

export function TopBar({
  title,
  subtitle,
  leftAction,
  rightAction,
  style,
}: TopBarProps) {
  const { colors: theme } = useAppTheme();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.side}>{leftAction}</View>
      <View style={styles.center}>
        <Text style={[styles.title, { color: theme.textPrimary }]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: theme.textSecondary }]} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>
      <View style={[styles.side, styles.right]}>{rightAction}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    backgroundColor: 'transparent',
  },
  side: {
    minWidth: 40,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
});
