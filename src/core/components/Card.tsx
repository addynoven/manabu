import React, { type ReactNode } from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  type GestureResponderEvent,
  type ViewStyle,
} from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../theme';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
  selected?: boolean;
  highlighted?: boolean;
}

export function Card({
  children,
  style,
  onPress,
  selected = false,
  highlighted = false,
}: CardProps) {
  const { colors: theme } = useAppTheme();

  const containerStyle = [
    styles.card,
    {
      backgroundColor: theme.surface,
      borderColor: theme.border,
    },
    selected && {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    highlighted && {
      borderColor: theme.accent,
    },
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={containerStyle}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.lg,
    borderWidth: 1,
    padding: spacing.base,
    ...shadows.sm,
  },
});
