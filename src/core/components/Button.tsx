import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  Pressable,
  type GestureResponderEvent,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { radii, spacing, useAppTheme } from '../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  haptic?: boolean;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
  haptic = true,
}: ButtonProps) {
  const { colors: theme } = useAppTheme();

  const handlePress = (e: GestureResponderEvent) => {
    if (disabled || loading) return;
    if (haptic) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    }
    onPress(e);
  };

  const getVariantContainerStyle = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.primary,
          borderWidth: 0,
        };
      case 'secondary':
        return {
          backgroundColor: theme.surfaceSubtle,
          borderWidth: 1,
          borderColor: theme.border,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: theme.primary,
        };
      case 'danger':
        return {
          backgroundColor: theme.error,
          borderWidth: 0,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          borderWidth: 0,
        };
    }
  };

  const getVariantTextStyle = (): TextStyle => {
    switch (variant) {
      case 'primary':
        return { color: theme.textOnPrimary };
      case 'danger':
        return { color: '#FFFFFF' };
      case 'secondary':
        return { color: theme.textPrimary };
      case 'outline':
      case 'ghost':
        return { color: theme.primary };
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.75}
      style={[
        styles.base,
        getVariantContainerStyle(),
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? theme.textOnPrimary : theme.primary}
        />
      ) : (
        <>
          {icon}
          <Text style={[styles.text, getVariantTextStyle(), textStyle]}>
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radii.md,
    gap: spacing.sm,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
