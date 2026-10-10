import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Volume2, Snail, Sparkles } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';

interface ScrambleExerciseViewProps {
  item: LessonItem;
  assembledTokens: string[];
  onAddToken: (token: string) => void;
  onRemoveToken: (index: number) => void;
  onPlayAudio: (rate?: number) => void;
}

export function ScrambleExerciseView({
  item,
  assembledTokens,
  onAddToken,
  onRemoveToken,
  onPlayAudio,
}: ScrambleExerciseViewProps) {
  const { colors: theme } = useAppTheme();

  // All available tokens (including distractors)
  const allTokens = item.scrambleTokens || [];

  // Count how many times each token is in allTokens vs used in assembledTokens
  const getRemainingCount = (token: string) => {
    const total = allTokens.filter(t => t === token).length;
    const used = assembledTokens.filter(t => t === token).length;
    return total - used;
  };

  const handleTokenPress = (token: string) => {
    if (getRemainingCount(token) <= 0) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    speakJapanese(token, { rate: 1.0 }).catch(() => {});
    onAddToken(token);
  };

  const handleAssembledPress = (index: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onRemoveToken(index);
  };

  // Unique tokens for the bank buttons
  const uniqueBankTokens = Array.from(new Set(allTokens));

  return (
    <View style={styles.container}>
      {/* Header Badge */}
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: '#3B82F620' }]}>
          <Text style={[styles.badgeText, { color: '#3B82F6' }]}>SENTENCE BUILDER</Text>
        </View>
        <Text style={[styles.instruction, { color: theme.textSecondary }]}>
          Tap the words to build the Japanese sentence
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

      {/* English Meaning Card */}
      <View style={[styles.promptCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Sparkles size={18} color={theme.primary} style={styles.sparkleIcon} />
        <Text style={[styles.englishText, { color: theme.textPrimary }]}>
          {item.english}
        </Text>
      </View>

      {/* Assembly Area */}
      <View style={styles.assemblySection}>
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          Your Sentence:
        </Text>
        <View
          style={[
            styles.assemblyArea,
            { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
          ]}
        >
          {assembledTokens.length === 0 ? (
            <Text style={[styles.placeholderText, { color: theme.textMuted }]}>
              Tap word blocks below to place them here
            </Text>
          ) : (
            <View style={styles.tokensRow}>
              {assembledTokens.map((token, idx) => (
                <Pressable
                  key={idx}
                  onPress={() => handleAssembledPress(idx)}
                  style={[styles.placedBubble, { backgroundColor: theme.primary }]}
                  accessibilityLabel={`Remove ${token}`}
                >
                  <Text style={[styles.placedBubbleText, { color: theme.textOnPrimary }]}>
                    {token}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Word Bank */}
      <View style={styles.bankSection}>
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          Word Bank:
        </Text>
        <View style={styles.bankGrid}>
          {uniqueBankTokens.map((token, idx) => {
            const available = getRemainingCount(token);
            const isExhausted = available <= 0;
            return (
              <Pressable
                key={idx}
                disabled={isExhausted}
                onPress={() => handleTokenPress(token)}
                style={[
                  styles.bankBubble,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                  isExhausted && { opacity: 0.25, backgroundColor: theme.surfaceSubtle },
                ]}
                accessibilityLabel={`Word ${token}`}
              >
                <Text
                  style={[
                    styles.bankBubbleText,
                    { color: theme.textPrimary },
                    isExhausted && { color: theme.textMuted },
                  ]}
                >
                  {token}
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
  promptCard: {
    width: '100%',
    padding: 20,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 24,
  },
  sparkleIcon: {
    marginRight: 4,
  },
  englishText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
  },
  assemblySection: {
    width: '100%',
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  assemblyArea: {
    width: '100%',
    minHeight: 80,
    padding: 14,
    borderRadius: 18,
    borderWidth: 2,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  tokensRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placedBubble: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  placedBubbleText: {
    fontSize: 18,
    fontWeight: '700',
  },
  bankSection: {
    width: '100%',
  },
  bankGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  bankBubble: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankBubbleText: {
    fontSize: 18,
    fontWeight: '700',
  },
});
