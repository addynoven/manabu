import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../theme';

export interface ToastProps {
  message: string;
  type?: 'info' | 'success' | 'error';
  visible: boolean;
}

export function Toast({ message, type = 'info', visible }: ToastProps) {
  const { colors: theme } = useAppTheme();
  if (!visible) return null;

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return theme.success;
      case 'error':
        return theme.error;
      default:
        return theme.primary;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
          borderLeftColor: getBorderColor(),
        },
      ]}
    >
      <Text style={[styles.text, { color: theme.textPrimary }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    padding: spacing.md,
    borderRadius: radii.md,
    borderLeftWidth: 4,
    borderWidth: 1,
    ...shadows.md,
    zIndex: 9999,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
