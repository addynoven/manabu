import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';

interface KanaChoiceGridProps {
  options: string[];
  correctAnswer: string;
  onSelect: (selected: string, isCorrect: boolean) => void;
  disabled?: boolean;
}

export function KanaChoiceGrid({
  options,
  correctAnswer,
  onSelect,
  disabled = false,
}: KanaChoiceGridProps) {
  const { colors: theme } = useAppTheme();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handlePress = (option: string) => {
    if (disabled || revealed) return;

    setSelectedOption(option);
    setRevealed(true);
    const isCorrect = option === correctAnswer;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    }

    setTimeout(() => {
      onSelect(option, isCorrect);
      setSelectedOption(null);
      setRevealed(false);
    }, 600);
  };

  const getTileStyle = (option: string) => {
    if (!revealed) {
      return {
        backgroundColor: theme.surface,
        borderColor: theme.border,
      };
    }
    if (option === correctAnswer) {
      return {
        backgroundColor: theme.successLight,
        borderColor: theme.success,
      };
    }
    if (option === selectedOption && option !== correctAnswer) {
      return {
        backgroundColor: theme.errorLight,
        borderColor: theme.error,
      };
    }
    return {
      backgroundColor: theme.surfaceSubtle,
      borderColor: theme.borderSubtle,
      opacity: 0.5,
    };
  };

  const getTextStyle = (option: string) => {
    if (!revealed) {
      return { color: theme.textPrimary };
    }
    if (option === correctAnswer || option === selectedOption) {
      return { color: theme.textPrimary };
    }
    return { color: theme.textMuted };
  };

  return (
    <View style={styles.grid}>
      {options.map((option, idx) => (
        <Pressable
          key={`${option}_${idx}`}
          onPress={() => handlePress(option)}
          activeOpacity={0.7}
          disabled={disabled || revealed}
          style={[styles.tile, getTileStyle(option)]}
        >
          <Text
            numberOfLines={3}
            adjustsFontSizeToFit
            style={[
              styles.text,
              option.length > 8 ? styles.textSmall : undefined,
              getTextStyle(option),
            ]}
          >
            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'space-between',
    width: '100%',
  },
  tile: {
    width: '48%',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.lg,
    borderWidth: 1.5,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    ...shadows.sm,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  textSmall: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
});
