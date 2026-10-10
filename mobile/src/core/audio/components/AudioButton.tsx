import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Pressable,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
} from 'react-native';
import { Volume2 } from 'lucide-react-native';
import { radii, useAppTheme } from '../../theme';
import { speakJapanese } from '../tts';
import { useSettingsStore } from '../../../features/settings/store/useSettingsStore';

export interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'pill' | 'icon' | 'solid';
  style?: StyleProp<ViewStyle>;
  color?: string;
  activeColor?: string;
  onPress?: () => void;
}

export function AudioButton({
  text,
  size = 'md',
  variant = 'icon',
  style,
  color,
  activeColor,
  onPress,
}: AudioButtonProps) {
  const { colors: theme } = useAppTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const { ttsEnabled, ttsRate } = useSettingsStore();

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 26,
  };

  const buttonPaddings = {
    sm: 6,
    md: 8,
    lg: 12,
  };

  const handlePress = useCallback(async () => {
    if (!ttsEnabled || !text) return;
    onPress?.();

    setIsPlaying(true);
    await speakJapanese(text, {
      rate: ttsRate,
      onDone: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  }, [text, ttsEnabled, ttsRate, onPress]);

  const defaultColor = color || theme.textSecondary;
  const highlightColor = activeColor || theme.primary;

  const isSolid = variant === 'solid';
  const isPill = variant === 'pill';

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[
        styles.button,
        {
          padding: buttonPaddings[size],
          borderRadius: isPill ? radii.full : radii.md,
          backgroundColor: isSolid
            ? isPlaying
              ? theme.primaryLight
              : theme.surfaceSubtle
            : isPlaying
            ? theme.surfaceHighlight
            : 'transparent',
          borderColor: isSolid || isPill ? theme.border : 'transparent',
          borderWidth: isSolid || isPill ? 1 : 0,
        },
        style,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Pronounce ${text}`}
    >
      <Volume2
        size={iconSizes[size]}
        color={isPlaying ? highlightColor : defaultColor}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
