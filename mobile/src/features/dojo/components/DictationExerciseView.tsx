import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Volume2, Snail, Headphones } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';

interface DictationExerciseViewProps {
  item: LessonItem;
  assembledTokens: string[];
  onAddToken: (token: string) => void;
  onRemoveToken: (index: number) => void;
  onPlayAudio: (rate?: number) => void;
}

export function DictationExerciseView({
  item,
  assembledTokens,
  onAddToken,
  onRemoveToken,
  onPlayAudio,
}: DictationExerciseViewProps) {
  const { colors: theme } = useAppTheme();

  // Tokens for dictation (from item.dictateTokens or scrambleTokens or fallback)
  const allTokens = item.dictateTokens || item.scrambleTokens || [];

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

  const uniqueBankTokens = Array.from(new Set(allTokens));

  return (
    <View style={styles.container}>
      {/* Header Badge */}
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: '#6366F120' }]}>
          <Text style={[styles.badgeText, { color: '#6366F1' }]}>LISTENING DICTATION</Text>
        </View>
        <Text style={[styles.instruction, { color: theme.textSecondary }]}>
          Listen carefully and reconstruct what you hear
        </Text>
      </View>

      {/* Prominent Audio Listening Stage */}
      <View style={[styles.listeningCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <View style={[styles.headphonesCircle, { backgroundColor: theme.primaryLight }]}>
          <Headphones size={32} color={theme.primary} />
        </View>
        <Text style={[styles.listenPromptText, { color: theme.textSecondary }]}>
          Tap to play audio
        </Text>

        <View style={styles.audioControlsRow}>
          <Pressable
            onPress={() => onPlayAudio(0.9)}
            style={[styles.mainAudioBtn, { backgroundColor: theme.primary }]}
            accessibilityLabel="Play audio normal speed"
          >
            <Volume2 size={28} color={theme.textOnPrimary} />
            <Text style={[styles.mainAudioText, { color: theme.textOnPrimary }]}>Normal</Text>
          </Pressable>

          <Pressable
            onPress={() => onPlayAudio(0.6)}
            style={[styles.turtleAudioBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            accessibilityLabel="Play audio slow speed"
          >
            <Snail size={24} color="#10B981" />
            <Text style={[styles.turtleAudioText, { color: '#10B981' }]}>Slow</Text>
          </Pressable>
        </View>
      </View>

      {/* Assembly Area */}
      <View style={styles.assemblySection}>
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          What you heard:
        </Text>
        <View
          style={[
            styles.assemblyArea,
            { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
          ]}
        >
          {assembledTokens.length === 0 ? (
            <Text style={[styles.placeholderText, { color: theme.textMuted }]}>
              Tap words below to transcribe the sentence
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
  listeningCard: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    marginBottom: 24,
  },
  headphonesCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  listenPromptText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
  },
  audioControlsRow: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  mainAudioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 16,
  },
  mainAudioText: {
    fontSize: 16,
    fontWeight: '800',
  },
  turtleAudioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  turtleAudioText: {
    fontSize: 16,
    fontWeight: '800',
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
