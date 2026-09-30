import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Volume2, Snail } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';

interface ClozeExerciseViewProps {
  item: LessonItem;
  selectedChip: string | null;
  onSelectChip: (chip: string | null) => void;
  onPlayAudio: (rate?: number) => void;
}

export function ClozeExerciseView({
  item,
  selectedChip,
  onSelectChip,
  onPlayAudio,
}: ClozeExerciseViewProps) {
  const { colors: theme } = useAppTheme();

  // Format sentence template with placeholder
  const rawSentence = item.clozeSentence || item.contextSentence || item.prompt;
  const parts = rawSentence.includes('{{BLANK}}')
    ? rawSentence.split('{{BLANK}}')
    : rawSentence.includes('____')
    ? rawSentence.split('____')
    : [rawSentence, ''];

  const prefix = parts[0] || '';
  const suffix = parts[1] || '';

  const options = item.clozeOptions || item.options || [];

  const handleChipPress = (chip: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    if (selectedChip === chip) {
      // Toggle off
      onSelectChip(null);
    } else {
      onSelectChip(chip);
    }
  };

  const handleSlotPress = () => {
    if (selectedChip) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      onSelectChip(null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Badge */}
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: '#F59E0B20' }]}>
          <Text style={[styles.badgeText, { color: '#F59E0B' }]}>FILL IN THE BLANK</Text>
        </View>
        <Text style={[styles.instruction, { color: theme.textSecondary }]}>
          Choose the missing word or particle
        </Text>
      </View>

      {/* Audio Playback Controls */}
      <View style={styles.audioRow}>
        <Pressable
          onPress={() => onPlayAudio(0.9)}
          style={[styles.audioBubble, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Play audio normal speed"
        >
          <Volume2 size={24} color={theme.primary} />
        </Pressable>

        <Pressable
          onPress={() => onPlayAudio(0.6)}
          style={[styles.audioBubble, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Play audio slow speed"
        >
          <Snail size={24} color="#10B981" />
        </Pressable>
      </View>

      {/* Cloze Sentence Card */}
      <View style={[styles.sentenceCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <View style={styles.sentenceLine}>
          {prefix.length > 0 && (
            <Text style={[styles.sentenceText, { color: theme.textPrimary }]}>
              {prefix}
            </Text>
          )}

          {/* Dynamic Fill Slot */}
          <Pressable
            onPress={handleSlotPress}
            style={[
              styles.slotBox,
              selectedChip
                ? { backgroundColor: theme.primary, borderColor: theme.primary }
                : { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
            ]}
            accessibilityLabel={selectedChip ? `Filled with ${selectedChip}, tap to remove` : 'Empty slot'}
          >
            <Text
              style={[
                styles.slotText,
                { color: selectedChip ? theme.textOnPrimary : theme.textMuted },
              ]}
            >
              {selectedChip || '____'}
            </Text>
          </Pressable>

          {suffix.length > 0 && (
            <Text style={[styles.sentenceText, { color: theme.textPrimary }]}>
              {suffix}
            </Text>
          )}
        </View>

        {/* English Translation */}
        <Text style={[styles.translationText, { color: theme.textMuted }]}>
          {item.english}
        </Text>
      </View>

      {/* Option Chips Tray */}
      <View style={styles.traySection}>
        <Text style={[styles.trayLabel, { color: theme.textSecondary }]}>
          Tap to insert:
        </Text>
        <View style={styles.chipsContainer}>
          {options.map((option, idx) => {
            const isUsed = selectedChip === option;
            return (
              <Pressable
                key={idx}
                disabled={isUsed}
                onPress={() => handleChipPress(option)}
                style={[
                  styles.chipButton,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                  isUsed && { opacity: 0.3, backgroundColor: theme.surfaceSubtle },
                ]}
                accessibilityLabel={`Option ${option}`}
              >
                <Text
                  style={[
                    styles.chipText,
                    { color: theme.textPrimary },
                    isUsed && { color: theme.textMuted },
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  headerRow: {
    width: '100%',
    marginBottom: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '600',
  },
  audioRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  audioBubble: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentenceCard: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    marginBottom: 28,
  },
  sentenceLine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sentenceText: {
    fontSize: 24,
    fontWeight: '700',
  },
  slotBox: {
    minWidth: 70,
    height: 44,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotText: {
    fontSize: 22,
    fontWeight: '800',
  },
  translationText: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  traySection: {
    width: '100%',
  },
  trayLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  chipButton: {
    minWidth: 80,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
