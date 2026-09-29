import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Play, Pause, RotateCcw, Volume2, X } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { getRandomZenQuote, ZEN_QUOTES } from '../lib/zenQuotes';
import type { BreathPhase, ZenQuote } from '../models/arcade.model';
import { useArcadeStore } from '../store/useArcadeStore';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

const PHASE_DURATIONS: Record<BreathPhase, number> = {
  inhale: 4000,
  hold: 4000,
  exhale: 4000,
  rest: 2000,
};

const PHASE_LABELS: Record<BreathPhase, { en: string; jp: string }> = {
  inhale: { en: 'Breathe In', jp: '息を吸う' },
  hold: { en: 'Hold & Center', jp: '息を止める' },
  exhale: { en: 'Breathe Out', jp: '息を吐く' },
  rest: { en: 'Quiet Stillness', jp: '心を休める' },
};

interface ZenBreathingViewProps {
  onClose: () => void;
}

export function ZenBreathingView({ onClose }: ZenBreathingViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);
  const addZenSession = useArcadeStore(s => s.addZenSession);

  const [isPlaying, setIsPlaying] = useState(true);
  const [phase, setPhase] = useState<BreathPhase>('inhale');
  const [currentQuote, setCurrentQuote] = useState<ZenQuote>(() => getRandomZenQuote());
  const [cycleCount, setCycleCount] = useState(0);
  const [sessionSeconds, setSessionSeconds] = useState(0);

  // Animated scale & opacity for the breathing sphere
  const scaleAnim = useRef(new Animated.Value(0.75)).current;
  const pulseAnim = useRef(new Animated.Value(0.6)).current;

  // Track session duration
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSessionSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Phase transition and animation loop
  useEffect(() => {
    if (!isPlaying) {
      scaleAnim.stopAnimation();
      pulseAnim.stopAnimation();
      return;
    }

    const duration = PHASE_DURATIONS[phase];

    // Trigger gentle haptic on phase change
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});

    if (phase === 'inhale') {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.15,
          duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1.0,
          duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    } else if (phase === 'exhale') {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.75,
          duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.5,
          duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    }

    const timer = setTimeout(() => {
      switch (phase) {
        case 'inhale':
          setPhase('hold');
          break;
        case 'hold':
          setPhase('exhale');
          break;
        case 'exhale':
          setPhase('rest');
          break;
        case 'rest':
          setPhase('inhale');
          setCurrentQuote(getRandomZenQuote());
          setCycleCount(c => c + 1);
          break;
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [phase, isPlaying, scaleAnim, pulseAnim]);

  const handleTogglePlay = () => {
    Haptics.selectionAsync().catch(() => {});
    setIsPlaying(p => !p);
  };

  const handleNextQuote = () => {
    Haptics.selectionAsync().catch(() => {});
    setCurrentQuote(getRandomZenQuote());
  };

  const handleSpeak = () => {
    speakJapanese(currentQuote.reading, { rate: ttsRate }).catch(() => {});
  };

  const handleClose = () => {
    if (sessionSeconds > 0) {
      addZenSession(sessionSeconds, cycleCount);
    }
    onClose();
  };

  const minutes = Math.floor(sessionSeconds / 60);
  const seconds = sessionSeconds % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Top Header */}
      <View style={styles.header}>
        <Pressable
          onPress={handleClose}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Close Zen Mode"
        >
          <X size={20} color={theme.textSecondary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>禅 • 呼吸法</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Zen Breathing • Cycle {cycleCount + 1} ({timeFormatted})
          </Text>
        </View>

        <Pressable
          onPress={handleNextQuote}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Next character"
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* Main Breathing Circle */}
      <View style={styles.circleContainer}>
        {/* Outer ambient glow */}
        <Animated.View
          style={[
            styles.glowRing,
            {
              borderColor: theme.accent,
              transform: [{ scale: scaleAnim }],
              opacity: pulseAnim,
            },
          ]}
        />

        {/* Breathing Sphere */}
        <Animated.View
          style={[
            styles.breathingSphere,
            {
              backgroundColor: theme.surface,
              borderColor: theme.primary,
              shadowColor: theme.primary,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Text style={[styles.kanjiGlyph, { color: theme.primary }]}>
            {currentQuote.kanji}
          </Text>
          <Text style={[styles.readingText, { color: theme.textSecondary }]}>
            {currentQuote.reading} • {currentQuote.romaji}
          </Text>
          <Text style={[styles.meaningText, { color: theme.textPrimary }]}>
            {currentQuote.meaning}
          </Text>
        </Animated.View>
      </View>

      {/* Phase Label & Prompt */}
      <View style={styles.instructionContainer}>
        <Text style={[styles.phaseJp, { color: theme.primary }]}>
          {PHASE_LABELS[phase].jp}
        </Text>
        <Text style={[styles.phaseEn, { color: theme.textPrimary }]}>
          {PHASE_LABELS[phase].en}
        </Text>
        <Text style={[styles.reflectionText, { color: theme.textSecondary }]}>
          "{currentQuote.reflection}"
        </Text>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomBar}>
        {ttsEnabled && (
          <Pressable
            onPress={handleSpeak}
            style={[styles.actionButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          >
            <Volume2 size={20} color={theme.accent} />
            <Text style={[styles.actionButtonText, { color: theme.textPrimary }]}>
              Pronounce
            </Text>
          </Pressable>
        )}

        <Pressable
          onPress={handleTogglePlay}
          style={[styles.playButton, { backgroundColor: theme.primary }]}
        >
          {isPlaying ? (
            <Pause size={22} color="#FFFFFF" />
          ) : (
            <Play size={22} color="#FFFFFF" />
          )}
          <Text style={styles.playButtonText}>
            {isPlaying ? 'Pause' : 'Resume'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  glowRing: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
  },
  breathingSphere: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  kanjiGlyph: {
    fontSize: 68,
    fontWeight: '800',
    lineHeight: 76,
  },
  readingText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  meaningText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
  },
  instructionContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  phaseJp: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 2,
  },
  phaseEn: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  reflectionText: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1,
    gap: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 28,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
