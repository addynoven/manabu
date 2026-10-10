import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Animated,
} from 'react-native';
import { Mic, Volume2, Snail, VolumeX, CheckCircle2 } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';

interface SpeechDrillViewProps {
  item: LessonItem;
  onSpeechRecorded: (recognizedText: string) => void;
  onBypassSpeech: () => void;
  onPlayAudio: (rate?: number) => void;
}

export function SpeechDrillView({
  item,
  onSpeechRecorded,
  onBypassSpeech,
  onPlayAudio,
}: SpeechDrillViewProps) {
  const { colors: theme } = useAppTheme();
  const [isRecording, setIsRecording] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false);

  // Pulsing animation for mic recording
  const [waveAnim1] = useState(() => new Animated.Value(1));
  const [waveAnim2] = useState(() => new Animated.Value(1));
  const [waveAnim3] = useState(() => new Animated.Value(1));

  useEffect(() => {
    if (isRecording) {
      const loop = Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(waveAnim1, { toValue: 1.8, duration: 400, useNativeDriver: true }),
            Animated.timing(waveAnim1, { toValue: 1, duration: 400, useNativeDriver: true }),
          ]),
          Animated.sequence([
            Animated.timing(waveAnim2, { toValue: 1.5, duration: 550, useNativeDriver: true }),
            Animated.timing(waveAnim2, { toValue: 1, duration: 550, useNativeDriver: true }),
          ]),
          Animated.sequence([
            Animated.timing(waveAnim3, { toValue: 1.3, duration: 700, useNativeDriver: true }),
            Animated.timing(waveAnim3, { toValue: 1, duration: 700, useNativeDriver: true }),
          ]),
        ])
      );
      loop.start();
      return () => loop.stop();
    } else {
      waveAnim1.setValue(1);
      waveAnim2.setValue(1);
      waveAnim3.setValue(1);
    }
  }, [isRecording, waveAnim1, waveAnim2, waveAnim3]);

  const handleMicPress = () => {
    if (isRecording) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    setIsRecording(true);

    // Simulate speech detection window
    setTimeout(() => {
      setIsRecording(false);
      setHasSpoken(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      onSpeechRecorded(item.prompt);
    }, 1800);
  };

  const handleBypassPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onBypassSpeech();
  };

  return (
    <View style={styles.container}>
      {/* Header Badge */}
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: '#EC489920' }]}>
          <Text style={[styles.badgeText, { color: '#EC4899' }]}>SPEAKING DRILL</Text>
        </View>
        <Text style={[styles.instruction, { color: theme.textSecondary }]}>
          Tap the microphone and read the phrase aloud
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

      {/* Target Phrase Card */}
      <View style={[styles.phraseCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Text style={[styles.phraseJapanese, { color: theme.textPrimary }]}>
          {item.prompt}
        </Text>

        {item.romaji && (
          <Text style={[styles.phraseRomaji, { color: theme.textSecondary }]}>
            {item.romaji}
          </Text>
        )}

        <Text style={[styles.phraseEnglish, { color: theme.textMuted }]}>
          {item.english}
        </Text>
      </View>

      {/* Center Microphone & Wave Area */}
      <View style={styles.micContainer}>
        {isRecording && (
          <>
            <Animated.View
              style={[
                styles.pulseRing,
                { backgroundColor: theme.primary, transform: [{ scale: waveAnim1 }], opacity: 0.15 },
              ]}
            />
            <Animated.View
              style={[
                styles.pulseRing,
                { backgroundColor: theme.primary, transform: [{ scale: waveAnim2 }], opacity: 0.25 },
              ]}
            />
          </>
        )}

        <Pressable
          onPress={handleMicPress}
          style={[
            styles.micButton,
            { backgroundColor: hasSpoken ? '#10B981' : isRecording ? '#EF4444' : theme.primary },
          ]}
          accessibilityLabel={isRecording ? 'Listening...' : 'Tap to speak'}
        >
          {hasSpoken ? (
            <CheckCircle2 size={36} color="#FFFFFF" />
          ) : (
            <Mic size={36} color="#FFFFFF" />
          )}
        </Pressable>

        <Text
          style={[
            styles.micStatusText,
            { color: isRecording ? '#EF4444' : hasSpoken ? '#10B981' : theme.textSecondary },
          ]}
        >
          {isRecording ? 'Listening to speech...' : hasSpoken ? 'Speech recognized!' : 'Tap mic to speak'}
        </Text>
      </View>

      {/* Bypass Action Button */}
      <Pressable
        onPress={handleBypassPress}
        style={[styles.bypassButton, { borderColor: theme.border, backgroundColor: theme.surfaceSubtle }]}
        accessibilityLabel="Can't speak now"
      >
        <VolumeX size={18} color={theme.textMuted} />
        <Text style={[styles.bypassText, { color: theme.textMuted }]}>
          {"CAN'T SPEAK RIGHT NOW"}
        </Text>
      </Pressable>
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
  phraseCard: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    marginBottom: 32,
  },
  phraseJapanese: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  phraseRomaji: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  phraseEnglish: {
    fontSize: 15,
    textAlign: 'center',
  },
  micContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 36,
  },
  pulseRing: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  micButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  micStatusText: {
    position: 'absolute',
    bottom: -28,
    fontSize: 14,
    fontWeight: '700',
  },
  bypassButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1.5,
  },
  bypassText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
