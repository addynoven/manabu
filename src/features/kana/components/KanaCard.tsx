import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { radii, shadows, spacing } from '../../../core/theme';
import { useAppTheme } from '../../../core/theme/useThemeStore';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { speakJapanese } from '../../../core/audio/tts';
import type { KanaCharacter } from '../models/kana.model';
import type { MasteryLevel } from '../../progress/models/progress.model';

interface KanaCardProps {
  character: KanaCharacter;
  masteryLevel?: MasteryLevel | null;
  onPress?: () => void;
  showRomaji?: boolean;
}

export function KanaCard({
  character,
  masteryLevel,
  onPress,
  showRomaji,
}: KanaCardProps) {
  const { colors } = useAppTheme();
  const { showRomajiInCharts, ttsEnabled, ttsRate } = useSettingsStore();

  const shouldShowRomaji = showRomaji !== undefined ? showRomaji : showRomajiInCharts;

  const handlePress = () => {
    if (ttsEnabled) {
      speakJapanese(character.kana, { rate: ttsRate });
    }
    onPress?.();
  };

  const getBadgeColor = () => {
    switch (masteryLevel) {
      case 'mastered':
        return colors.success;
      case 'needs-practice':
        return colors.error;
      default:
        return null;
    }
  };

  const badgeColor = getBadgeColor();

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Character ${character.kana}, reading ${character.romaji}`}
    >
      {badgeColor && (
        <View style={[styles.masteryDot, { backgroundColor: badgeColor }]} />
      )}
      <Text style={[styles.kana, { color: colors.textPrimary }]}>
        {character.kana}
      </Text>
      {shouldShowRomaji && (
        <Text style={[styles.romaji, { color: colors.textSecondary }]}>
          {character.romaji}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 72,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xs,
    position: 'relative',
    ...shadows.sm,
  },
  masteryDot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 7,
    height: 7,
    borderRadius: radii.full,
  },
  kana: {
    fontSize: 24,
    fontWeight: '600',
  },
  romaji: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
});
