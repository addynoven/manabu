import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Animated,
} from 'react-native';
import {
  X,
  RotateCcw,
  Trophy,
  Zap,
  Flame,
  Volume2,
  VolumeX,
  Sparkles,
  Skull,
  Play,
  Clock,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { radii, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { useArcadeStore } from '../store/useArcadeStore';
import {
  evaluateAnswer,
  generateSurvivalQuestion,
  SURVIVAL_CONFIG,
  type SurvivalMode,
  type SurvivalQuestion,
} from '../lib/survivalEngine';

interface FlashSurvivalViewProps {
  onClose: () => void;
  initialMode?: SurvivalMode;
}

export function FlashSurvivalView({
  onClose,
  initialMode = 'kana',
}: FlashSurvivalViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const globalTtsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);

  const { survivalHighScores, recordSurvivalScore } = useArcadeStore();

  const [mode, setMode] = useState<SurvivalMode>(initialMode);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isNewHigh, setIsNewHigh] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const [timeLeft, setTimeLeft] = useState<number>(SURVIVAL_CONFIG.initialTimeSec[initialMode]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState<SurvivalQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrectFeedback, setIsCorrectFeedback] = useState<boolean | null>(null);
  const [timeDeltaNotice, setTimeDeltaNotice] = useState<string | null>(null);

  // Animations
  const timeBarAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const feedbackFadeAnim = useRef(new Animated.Value(0)).current;

  // Refs for loop
  const questionStartTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(timeLeft);
  timeLeftRef.current = timeLeft;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;
  const streakRef = useRef(streak);
  streakRef.current = streak;
  const scoreRef = useRef(score);
  scoreRef.current = score;

  const currentHighScore = survivalHighScores?.[mode] || 0;

  // Screen shake animation on mistake
  const triggerShake = useCallback(() => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 5, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 40, useNativeDriver: true }),
    ]).start();
  }, [shakeAnim]);

  // Flash feedback animation
  const triggerFeedback = useCallback((text: string) => {
    setTimeDeltaNotice(text);
    feedbackFadeAnim.setValue(1);
    Animated.timing(feedbackFadeAnim, {
      toValue: 0,
      duration: 750,
      useNativeDriver: true,
    }).start(() => setTimeDeltaNotice(null));
  }, [feedbackFadeAnim]);

  // End Game
  const endGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setGameOver(true);
    triggerShake();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});

    const finalScore = scoreRef.current;
    const { isNewHigh: newHigh } = recordSurvivalScore(modeRef.current, finalScore);
    setIsNewHigh(newHigh);
  }, [recordSurvivalScore, triggerShake]);

  // Load next question
  const loadNextQuestion = useCallback((targetMode?: SurvivalMode) => {
    const q = generateSurvivalQuestion(targetMode || modeRef.current);
    setCurrentQuestion(q);
    setSelectedOption(null);
    setIsCorrectFeedback(null);
    questionStartTimeRef.current = Date.now();
  }, []);

  // Start game session
  const startGame = useCallback(() => {
    const initialTime = SURVIVAL_CONFIG.initialTimeSec[mode];
    setTimeLeft(initialTime);
    timeLeftRef.current = initialTime;
    setScore(0);
    scoreRef.current = 0;
    setStreak(0);
    streakRef.current = 0;
    setMaxStreak(0);
    setMultiplier(mode === 'hell' ? 2 : 1);
    setTotalAnswered(0);
    setIsNewHigh(false);
    setGameOver(false);
    setIsPlaying(true);
    loadNextQuestion(mode);

    if (timerRef.current) clearInterval(timerRef.current);

    // High frequency interval (100ms) for ultra-smooth fluid countdown bar
    const tickMs = 100;
    timerRef.current = setInterval(() => {
      if (!isPlayingRef.current) return;

      const current = timeLeftRef.current;
      const nextTime = Math.max(0, current - tickMs / 1000);
      timeLeftRef.current = nextTime;
      setTimeLeft(nextTime);

      if (nextTime <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        endGame();
      }
    }, tickMs);
  }, [mode, loadNextQuestion, endGame]);

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Handle option select
  const handleSelectOption = useCallback(
    (opt: string) => {
      if (!isPlaying || selectedOption !== null || !currentQuestion) return;

      const durationMs = Date.now() - questionStartTimeRef.current;
      const isCorrect = opt === currentQuestion.correctAnswer;
      setSelectedOption(opt);
      setIsCorrectFeedback(isCorrect);
      setTotalAnswered(t => t + 1);

      const evaluation = evaluateAnswer(isCorrect, streakRef.current, durationMs, mode);

      if (isCorrect) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        if (soundEnabled && globalTtsEnabled && currentQuestion.ttsTarget) {
          speakJapanese(currentQuestion.ttsTarget, { rate: ttsRate }).catch(() => {});
        }

        const notice = evaluation.isFastReflex
          ? `+${evaluation.timeDelta.toFixed(1)}s ⚡ LIGHTNING!`
          : `+${evaluation.timeDelta.toFixed(1)}s`;
        triggerFeedback(notice);

        setStreak(evaluation.newStreak);
        streakRef.current = evaluation.newStreak;
        setMaxStreak(m => Math.max(m, evaluation.newStreak));
        setMultiplier(evaluation.newMultiplier);

        const nextScore = scoreRef.current + evaluation.pointsGained;
        setScore(nextScore);
        scoreRef.current = nextScore;

        // Add bonus time capped at max
        const cappedTime = Math.min(
          SURVIVAL_CONFIG.maxTimeSec,
          timeLeftRef.current + evaluation.timeDelta
        );
        timeLeftRef.current = cappedTime;
        setTimeLeft(cappedTime);

        // Next question delay
        setTimeout(() => {
          loadNextQuestion();
        }, 220);
      } else {
        triggerShake();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});

        triggerFeedback(`${evaluation.timeDelta.toFixed(1)}s 💥`);

        setStreak(0);
        streakRef.current = 0;
        setMultiplier(evaluation.newMultiplier);

        const reducedTime = Math.max(0, timeLeftRef.current + evaluation.timeDelta);
        timeLeftRef.current = reducedTime;
        setTimeLeft(reducedTime);

        if (reducedTime <= 0) {
          endGame();
          return;
        }

        // Show mistake briefly then advance
        setTimeout(() => {
          loadNextQuestion();
        }, 450);
      }
    },
    [
      isPlaying,
      selectedOption,
      currentQuestion,
      mode,
      soundEnabled,
      globalTtsEnabled,
      ttsRate,
      triggerFeedback,
      triggerShake,
      loadNextQuestion,
      endGame,
    ]
  );

  // Time bar ratio
  const timeRatio = Math.min(1, Math.max(0, timeLeft / SURVIVAL_CONFIG.maxTimeSec));
  const isCriticalTime = timeLeft <= 5.0;
  const isMidTime = timeLeft <= 12.0;

  const barColor = isCriticalTime ? '#F43F5E' : isMidTime ? '#F59E0B' : '#34D399';

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, 14),
          paddingBottom: Math.max(insets.bottom, 14),
          transform: [{ translateX: shakeAnim }],
        },
      ]}
    >
      {/* 1. Header HUD */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable
            onPress={onClose}
            style={[styles.iconButton, { backgroundColor: '#1E293B' }]}
            accessibilityLabel="Close Flash Survival"
          >
            <X size={20} color="#94A3B8" />
          </Pressable>

          <View style={styles.headerTitleWrap}>
            <View style={styles.titleBadgeRow}>
              <Text style={styles.headerTitle}>閃光サバイバル</Text>
              <View
                style={[
                  styles.modeBadge,
                  mode === 'hell' && styles.modeBadgeHell,
                ]}
              >
                <Text
                  style={[
                    styles.modeBadgeText,
                    mode === 'hell' && styles.modeBadgeTextHell,
                  ]}
                >
                  {mode === 'kana'
                    ? 'あ KANA'
                    : mode === 'kanji'
                    ? '漢 KANJI'
                    : mode === 'vocab'
                    ? '語 VOCAB'
                    : '🔥 HELL'}
                </Text>
              </View>
            </View>
            <Text style={styles.recordSubtitle}>
              🏆 BEST: {Math.max(score, currentHighScore)} pts
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Pressable
            onPress={() => setSoundEnabled(v => !v)}
            style={[styles.iconButton, { backgroundColor: '#1E293B' }]}
            accessibilityLabel="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 size={18} color="#38BDF8" />
            ) : (
              <VolumeX size={18} color="#64748B" />
            )}
          </Pressable>
        </View>
      </View>

      {/* 2. Overdrive Time Gauge Bar */}
      <View style={styles.timerDeck}>
        <View style={styles.timerHeaderRow}>
          <View style={styles.timerLabelWrap}>
            <Clock size={14} color={barColor} />
            <Text style={[styles.timerSecText, { color: barColor }]}>
              {timeLeft.toFixed(1)}s
            </Text>
          </View>

          {/* Floating Time Delta Notice (+2.5s / -4.0s) */}
          {timeDeltaNotice && (
            <Animated.View
              style={[
                styles.deltaNoticeWrap,
                {
                  opacity: feedbackFadeAnim,
                  backgroundColor: timeDeltaNotice.includes('-')
                    ? '#F43F5E30'
                    : '#34D39930',
                  borderColor: timeDeltaNotice.includes('-')
                    ? '#F43F5E'
                    : '#34D399',
                },
              ]}
            >
              <Text
                style={[
                  styles.deltaNoticeText,
                  {
                    color: timeDeltaNotice.includes('-')
                      ? '#F43F5E'
                      : '#34D399',
                  },
                ]}
              >
                {timeDeltaNotice}
              </Text>
            </Animated.View>
          )}

          <View style={styles.scoreHudWrap}>
            <Text style={styles.scoreHudLabel}>SCORE</Text>
            <Text style={styles.scoreHudValue}>{score}</Text>
          </View>
        </View>

        {/* Dynamic Depleting Time Bar */}
        <View style={styles.progressBarTrack}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${timeRatio * 100}%`,
                backgroundColor: barColor,
              },
            ]}
          />
        </View>
      </View>

      {/* 3. Multiplier & Streak Bar */}
      <View style={styles.streakStrip}>
        <View style={styles.streakBadge}>
          <Flame size={14} color={streak > 0 ? '#F59E0B' : '#64748B'} />
          <Text
            style={[
              styles.streakText,
              streak > 0 && { color: '#F59E0B' },
            ]}
          >
            STREAK: {streak}
          </Text>
        </View>

        <View
          style={[
            styles.multiplierBadge,
            multiplier > 1 && styles.multiplierActive,
            mode === 'hell' && styles.multiplierHell,
          ]}
        >
          <Zap size={14} color={multiplier > 1 ? '#34D399' : '#64748B'} />
          <Text
            style={[
              styles.multiplierText,
              multiplier > 1 && { color: '#34D399' },
              mode === 'hell' && { color: '#F43F5E' },
            ]}
          >
            {multiplier}x MULTIPLIER
          </Text>
        </View>
      </View>

      {/* 4. Active Question Arena */}
      {isPlaying && currentQuestion && (
        <View style={styles.questionCard}>
          <View style={styles.promptHeader}>
            <Text style={styles.categoryBadge}>
              {currentQuestion.category.toUpperCase()}
            </Text>
            <Text style={styles.promptSub}>{currentQuestion.promptSub}</Text>
          </View>

          <Text style={styles.heroPrompt}>{currentQuestion.prompt}</Text>

          {/* 4 Interactive Option Buttons */}
          <View style={styles.optionsGrid}>
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === opt;
              const isCorrectTarget =
                selectedOption !== null && opt === currentQuestion.correctAnswer;
              const isWrongSelected = isSelected && !isCorrectFeedback;

              return (
                <Pressable
                  key={`opt-${idx}-${opt}`}
                  onPress={() => handleSelectOption(opt)}
                  disabled={selectedOption !== null}
                  style={[
                    styles.optionBtn,
                    isCorrectTarget && styles.optionCorrect,
                    isWrongSelected && styles.optionWrong,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isCorrectTarget && styles.optionTextCorrect,
                      isWrongSelected && styles.optionTextWrong,
                    ]}
                  >
                    {opt}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      {/* 5. Pre-Game Configuration Overlay */}
      {!isPlaying && !gameOver && (
        <View style={styles.preGameOverlay}>
          <View style={styles.preGameCard}>
            <View style={styles.heroBadge}>
              <Zap size={28} color="#EAB308" />
            </View>
            <Text style={styles.heroTitle}>閃光サバイバル • FLASH SURVIVAL</Text>
            <Text style={styles.heroSubtitle}>
              Race the ticking clock! Correct answers add time & boost multipliers.
            </Text>

            {/* Mode Selector */}
            <View style={styles.configGroup}>
              <Text style={styles.configHeader}>SELECT GAME MODE</Text>
              <View style={styles.pillRow}>
                {(['kana', 'kanji', 'vocab', 'hell'] as SurvivalMode[]).map(m => (
                  <Pressable
                    key={m}
                    onPress={() => {
                      setMode(m);
                      setTimeLeft(SURVIVAL_CONFIG.initialTimeSec[m]);
                    }}
                    style={[
                      styles.pill,
                      mode === m && (m === 'hell' ? styles.pillHellActive : styles.pillActive),
                    ]}
                  >
                    <Text
                      style={[
                        styles.pillText,
                        mode === m && (m === 'hell' ? styles.pillHellText : styles.pillTextActive),
                      ]}
                    >
                      {m === 'kana'
                        ? 'あ Kana'
                        : m === 'kanji'
                        ? '漢 Kanji N5'
                        : m === 'vocab'
                        ? '語 Vocab N5'
                        : '🔥 HELL MODE'}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Rules Summary */}
            <View style={styles.rulesCard}>
              <View style={styles.ruleRow}>
                <Clock size={14} color="#34D399" />
                <Text style={styles.ruleText}>
                  +2.5s on correct answer (+1.0s under 1s reflex)
                </Text>
              </View>
              <View style={styles.ruleRow}>
                <Flame size={14} color="#F59E0B" />
                <Text style={styles.ruleText}>
                  Streak builds up to 5x Score Multiplier
                </Text>
              </View>
              <View style={styles.ruleRow}>
                <Skull size={14} color="#F43F5E" />
                <Text style={styles.ruleText}>
                  Wrong answer loses -4.0s (Hell: -5.0s & tighter clock)
                </Text>
              </View>
            </View>

            <Pressable onPress={startGame} style={styles.startBtn}>
              <Play size={20} color="#0F172A" fill="#0F172A" />
              <Text style={styles.startBtnText}>START SURVIVAL ATTACK</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* 6. Game Over Modal */}
      <Modal visible={gameOver} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View
              style={[
                styles.modalIconWrap,
                { backgroundColor: isNewHigh ? '#F59E0B20' : '#EF444420' },
              ]}
            >
              {isNewHigh ? (
                <Trophy size={48} color="#F59E0B" />
              ) : (
                <RotateCcw size={48} color="#EF4444" />
              )}
            </View>

            <Text style={styles.modalTitle}>
              {isNewHigh ? 'NEW HIGH SCORE!' : 'TIME EXPIRED'}
            </Text>
            <Text style={styles.modalSubtitle}>
              {isNewHigh
                ? 'Incredible reflexes! You set a new personal record!'
                : 'The clock caught up to you. Sharpen your recall and attack again!'}
            </Text>

            <View style={styles.modalStatsCard}>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>FINAL SCORE</Text>
                <Text style={styles.modalStatValue}>{score}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>MAX STREAK</Text>
                <Text style={styles.modalStatValue}>🔥 {maxStreak}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>ANSWERED</Text>
                <Text style={styles.modalStatValue}>{totalAnswered}</Text>
              </View>
            </View>

            <View style={styles.modalActions}>
              <Pressable onPress={startGame} style={styles.modalPlayAgainBtn}>
                <RotateCcw size={18} color="#0F172A" />
                <Text style={styles.modalPlayAgainText}>PLAY AGAIN</Text>
              </Pressable>

              <Pressable onPress={onClose} style={styles.modalExitBtn}>
                <Text style={styles.modalExitText}>EXIT TO ARCADE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050811',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleWrap: {
    gap: 2,
  },
  titleBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  modeBadge: {
    backgroundColor: '#EAB30825',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EAB308',
  },
  modeBadgeHell: {
    backgroundColor: '#F43F5E25',
    borderColor: '#F43F5E',
  },
  modeBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#EAB308',
  },
  modeBadgeTextHell: {
    color: '#F43F5E',
  },
  recordSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },
  timerDeck: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1E293B',
    marginVertical: 6,
    gap: 8,
  },
  timerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerLabelWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timerSecText: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  deltaNoticeWrap: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  deltaNoticeText: {
    fontSize: 12,
    fontWeight: '900',
  },
  scoreHudWrap: {
    alignItems: 'flex-end',
  },
  scoreHudLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  scoreHudValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F8FAFC',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: '#1E293B',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  streakStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  streakText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
  },
  multiplierBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: '#1E293B',
  },
  multiplierActive: {
    backgroundColor: '#34D39920',
  },
  multiplierHell: {
    backgroundColor: '#F43F5E20',
  },
  multiplierText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#64748B',
  },
  questionCard: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#1E293B',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  promptHeader: {
    alignItems: 'center',
    gap: 4,
  },
  categoryBadge: {
    fontSize: 10,
    fontWeight: '900',
    color: '#38BDF8',
    letterSpacing: 1,
  },
  promptSub: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '700',
  },
  heroPrompt: {
    fontSize: 54,
    fontWeight: '900',
    color: '#F8FAFC',
    textAlign: 'center',
    marginVertical: 14,
  },
  optionsGrid: {
    width: '100%',
    gap: 10,
  },
  optionBtn: {
    backgroundColor: '#1E293B',
    borderWidth: 1.5,
    borderColor: '#334155',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionCorrect: {
    backgroundColor: '#34D39925',
    borderColor: '#34D399',
  },
  optionWrong: {
    backgroundColor: '#F43F5E25',
    borderColor: '#F43F5E',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F8FAFC',
    textAlign: 'center',
  },
  optionTextCorrect: {
    color: '#34D399',
  },
  optionTextWrong: {
    color: '#F43F5E',
  },
  preGameOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(5, 8, 17, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 30,
    padding: 16,
  },
  preGameCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#334155',
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
  heroBadge: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    backgroundColor: '#EAB30820',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 17,
  },
  configGroup: {
    width: '100%',
    gap: 6,
  },
  configHeader: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#0F172A',
  },
  pillActive: {
    borderColor: '#EAB308',
    backgroundColor: '#EAB30825',
  },
  pillHellActive: {
    borderColor: '#F43F5E',
    backgroundColor: '#F43F5E25',
  },
  pillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  pillTextActive: {
    color: '#EAB308',
  },
  pillHellText: {
    color: '#F43F5E',
    fontWeight: '900',
  },
  rulesCard: {
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 10,
    gap: 6,
    borderWidth: 1,
    borderColor: '#33415550',
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ruleText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    flex: 1,
  },
  startBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    backgroundColor: '#EAB308',
    paddingVertical: 14,
    borderRadius: radii.lg,
    marginTop: 6,
  },
  startBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#334155',
    padding: 24,
    alignItems: 'center',
    gap: 14,
  },
  modalIconWrap: {
    width: 72,
    height: 72,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1,
  },
  modalSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
  },
  modalStatsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#33415550',
  },
  modalStatItem: {
    alignItems: 'center',
    gap: 4,
  },
  modalStatLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  modalStatValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F8FAFC',
  },
  modalStatDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#334155',
  },
  modalActions: {
    width: '100%',
    gap: 10,
    marginTop: 4,
  },
  modalPlayAgainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#EAB308',
    paddingVertical: 14,
    borderRadius: radii.lg,
  },
  modalPlayAgainText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  modalExitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33415550',
    paddingVertical: 12,
    borderRadius: radii.lg,
  },
  modalExitText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#94A3B8',
  },
});
