import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Volume2, Snail, CheckCircle2, XCircle } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';

interface ClozeExerciseViewProps {
  item: LessonItem;
  selectedChip: string | null;
  onSelectChip: (chip: string | null) => void;
  onPlayAudio: (rate?: number) => void;
  evaluation?: 'correct' | 'incorrect' | null;
}

export function ClozeExerciseView({
  item,
  selectedChip,
  onSelectChip,
  onPlayAudio,
  evaluation = null,
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
  const correctTarget = item.clozeTarget || item.correctAnswer;

  const handleChipPress = (chip: string) => {
    if (evaluation !== null) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    if (selectedChip === chip) {
      onSelectChip(null);
    } else {
      onSelectChip(chip);
    }
  };

  const handleSlotPress = () => {
    if (evaluation !== null) return;
    if (selectedChip) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      onSelectChip(null);
    }
  };

  // Determine slot styling based on evaluation
  const isEvaluated = evaluation !== null;
  const isIncorrect = evaluation === 'incorrect';
  const isCorrect = evaluation === 'correct';

  const slotBg = isCorrect
    ? '#DEF7EC'
    : isIncorrect
    ? '#FDE8E8'
    : selectedChip
    ? theme.primary
    : theme.surfaceSubtle;

  const slotBorder = isCorrect
    ? '#059669'
    : isIncorrect
    ? '#E02424'
    : selectedChip
    ? theme.primary
    : theme.border;

  const slotTextColor = isCorrect
    ? '#03543F'
    : isIncorrect
    ? '#9B1C1C'
    : selectedChip
    ? theme.textOnPrimary
    : theme.textMuted;

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
              {
                backgroundColor: slotBg,
                borderColor: slotBorder,
                minWidth: (selectedChip && selectedChip.length > 3) ? 110 : 80,
              },
            ]}
            accessibilityLabel={selectedChip ? `Filled with ${selectedChip}` : 'Empty slot'}
          >
            <View style={styles.slotInnerRow}>
              <Text
                style={[
                  styles.slotText,
                  {
                    color: slotTextColor,
                    fontSize: selectedChip && selectedChip.length > 5 ? 16 : 22,
                  },
                ]}
              >
                {selectedChip || '____'}
              </Text>
              {isCorrect && <CheckCircle2 size={18} color="#059669" style={{ marginLeft: 4 }} />}
              {isIncorrect && <XCircle size={18} color="#E02424" style={{ marginLeft: 4 }} />}
            </View>
          </Pressable>

          {suffix.length > 0 && (
            <Text style={[styles.sentenceText, { color: theme.textPrimary }]}>
              {suffix}
            </Text>
          )}
        </View>

        {/* Inline Correction Highlight when Incorrect */}
        {isIncorrect && (
          <View style={styles.inlineCorrectionRow}>
            <CheckCircle2 size={16} color="#059669" />
            <Text style={styles.inlineCorrectionLabel}>Correct answer: </Text>
            <Text style={styles.inlineCorrectionTarget}>{correctTarget}</Text>
          </View>
        )}

        {/* English Translation */}
        <Text style={[styles.translationText, { color: theme.textMuted }]}>
          {item.english}
        </Text>
      </View>

      {/* Option Chips Tray */}
      <View style={styles.traySection}>
        <Text style={[styles.trayLabel, { color: theme.textSecondary }]}>
          {isEvaluated ? 'Options:' : 'Tap to insert:'}
        </Text>
        <View style={styles.chipsContainer}>
          {options.map((option, idx) => {
            const isUsed = selectedChip === option;
            const isOptionTarget = option === correctTarget;

            let chipBg = theme.surface;
            let chipBorder = theme.border;
            let chipText = theme.textPrimary;

            if (isEvaluated) {
              if (isOptionTarget) {
                chipBg = '#DEF7EC';
                chipBorder = '#059669';
                chipText = '#03543F';
              } else if (isUsed && isIncorrect) {
                chipBg = '#FDE8E8';
                chipBorder = '#E02424';
                chipText = '#9B1C1C';
              }
            } else if (isUsed) {
              chipBg = theme.surfaceSubtle;
              chipBorder = theme.border;
              chipText = theme.textMuted;
            }

            return (
              <Pressable
                key={idx}
                disabled={isEvaluated || isUsed}
                onPress={() => handleChipPress(option)}
                style={[
                  styles.chipButton,
                  { backgroundColor: chipBg, borderColor: chipBorder },
                  !isEvaluated && isUsed && { opacity: 0.3 },
                ]}
                accessibilityLabel={`Option ${option}`}
              >
                <View style={styles.chipInnerRow}>
                  <Text
                    style={[
                      styles.chipText,
                      {
                        color: chipText,
                        fontSize: option.length > 5 ? 16 : 20,
                        fontWeight: isOptionTarget && isEvaluated ? '800' : '700',
                      },
                    ]}
                  >
                    {option}
                  </Text>
                  {isEvaluated && isOptionTarget && (
                    <CheckCircle2 size={16} color="#059669" style={{ marginLeft: 6 }} />
                  )}
                  {isEvaluated && isUsed && isIncorrect && (
                    <XCircle size={16} color="#E02424" style={{ marginLeft: 6 }} />
                  )}
                </View>
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
  slotInnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineCorrectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEF7EC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#31C48D',
  },
  inlineCorrectionLabel: {
    fontSize: 13,
    color: '#03543F',
    fontWeight: '600',
    marginLeft: 6,
  },
  inlineCorrectionTarget: {
    fontSize: 14,
    color: '#03543F',
    fontWeight: '800',
  },
  chipInnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
