import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useChallengeStore } from '../store/useChallengeStore';
import type { BlitzDuration, ChallengeQuestion } from '../models/challenge.model';

interface BlitzModalProps {
  visible: boolean;
  onClose: () => void;
  dojoName: string;
  category: 'kana' | 'kanji' | 'vocab';
  questionGenerator: () => ChallengeQuestion | null;
}

export function BlitzModal({
  visible,
  onClose,
  dojoName,
  category,
  questionGenerator,
}: BlitzModalProps) {
  const { colors: theme } = useAppTheme();
  const [selectedDuration, setSelectedDuration] = useState<BlitzDuration>(60);
  const [gameState, setGameState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [currentQuestion, setCurrentQuestion] = useState<ChallengeQuestion | null>(null);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrectFeedback, setIsCorrectFeedback] = useState<boolean | null>(null);

  const { recordBlitz, getBlitzStats } = useChallengeStore();
  const currentStats = getBlitzStats(category, selectedDuration);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stop timer on unmount or visibility change
  useEffect(() => {
    if (!visible) {
      if (timerRef.current) clearInterval(timerRef.current);
      setGameState('idle');
    }
  }, [visible]);

  const loadNextQuestion = useCallback(() => {
    const q = questionGenerator();
    setCurrentQuestion(q);
    setSelectedOption(null);
    setIsCorrectFeedback(null);
  }, [questionGenerator]);

  const startGame = useCallback(() => {
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
    setBestStreak(0);
    setIsNewRecord(false);
    setTimeLeft(selectedDuration);
    setGameState('running');
    loadNextQuestion();

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [selectedDuration, loadNextQuestion]);

  // Handle game end when timer hits 0
  useEffect(() => {
    if (gameState === 'running' && timeLeft === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setGameState('finished');
      const { isNewBest } = recordBlitz(category, selectedDuration, score, bestStreak);
      setIsNewRecord(isNewBest);
    }
  }, [timeLeft, gameState, category, selectedDuration, score, bestStreak, recordBlitz]);

  const handleSelectOption = (option: string) => {
    if (selectedOption !== null || !currentQuestion || gameState !== 'running') return;

    const isCorrect = option === currentQuestion.correctAnswer;
    setSelectedOption(option);
    setIsCorrectFeedback(isCorrect);

    // Track attempt in Progress Store for mastery
    useProgressStore
      .getState()
      .recordAnswer(currentQuestion.characterKey, isCorrect, currentQuestion.category);

    setTotalAnswered(prev => prev + 1);
    if (isCorrect) {
      const nextScore = score + 1;
      const nextStreak = streak + 1;
      setScore(nextScore);
      setStreak(nextStreak);
      setBestStreak(prev => Math.max(prev, nextStreak));
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (gameState === 'running') {
        loadNextQuestion();
      }
    }, 200);
  };

  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Top Navigation */}
        <View style={[styles.topBar, { borderBottomColor: theme.border }]}>
          <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>⚡ {dojoName} Blitz</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={[styles.closeText, { color: theme.textSecondary }]}>✕</Text>
          </Pressable>
        </View>

        {/* State 1: IDLE / CONFIGURATION */}
        {gameState === 'idle' && (
          <View style={styles.menuContainer}>
            <View style={[styles.iconCircle, { backgroundColor: theme.primaryLight }]}>
              <Text style={styles.heroIcon}>⚡</Text>
            </View>
            <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>Rapid-Fire Recall</Text>
            <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
              Answer as many as you can before the clock expires!
            </Text>

            {/* Duration Selector */}
            <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>Select Time Limit</Text>
            <View style={styles.durationRow}>
              {([30, 60, 120] as BlitzDuration[]).map(d => {
                const isSelected = selectedDuration === d;
                return (
                  <Pressable
                    key={d}
                    onPress={() => setSelectedDuration(d)}
                    style={[
                      styles.durationTab,
                      {
                        backgroundColor: isSelected ? theme.primary : theme.surfaceSubtle,
                        borderColor: isSelected ? theme.primary : theme.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.durationTabText,
                        {
                          color: isSelected ? theme.textOnPrimary : theme.textPrimary,
                        },
                      ]}
                    >
                      {d}s
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* High Score Card */}
            <View
              style={[
                styles.statsCard,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>{currentStats.bestScore}</Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Best Score</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>{currentStats.bestStreak}</Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Best Streak</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>{currentStats.sessionsCompleted}</Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Runs</Text>
              </View>
            </View>

            <Pressable
              style={[styles.primaryButton, { backgroundColor: theme.primary }]}
              onPress={startGame}
            >
              <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
                ⚡ START BLITZ
              </Text>
            </Pressable>
          </View>
        )}

        {/* State 2: RUNNING GAME */}
        {gameState === 'running' && currentQuestion && (
          <View style={styles.gameContainer}>
            {/* Live HUD */}
            <View style={styles.hudRow}>
              <View
                style={[
                  styles.timerBadge,
                  {
                    backgroundColor: theme.surfaceSubtle,
                    borderColor: theme.border,
                  },
                  timeLeft <= 10 && styles.timerBadgeWarning,
                  timeLeft <= 5 && styles.timerBadgeCritical,
                ]}
              >
                <Text style={[styles.timerText, { color: theme.textPrimary }]}>⏱️ {timeLeft}s</Text>
              </View>

              <View style={styles.scoreContainer}>
                <Text style={[styles.scoreText, { color: theme.textPrimary }]}>Score: {score}</Text>
                <Text style={[styles.streakText, { color: theme.accent }]}>🔥 {streak}</Text>
              </View>
            </View>

            {/* Question Card */}
            <View
              style={[
                styles.card,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <Text style={[styles.prompt, { color: theme.textPrimary }]}>{currentQuestion.prompt}</Text>
              {currentQuestion.promptSub ? (
                <Text style={[styles.promptSub, { color: theme.textSecondary }]}>{currentQuestion.promptSub}</Text>
              ) : null}
            </View>

            {/* Options Grid */}
            <View style={styles.grid}>
              {currentQuestion.options.map(option => {
                const isSelected = selectedOption === option;
                const isTarget = option === currentQuestion.correctAnswer;
                const isAnswered = selectedOption !== null;
                const isSelectedCorrect = isSelected && isCorrectFeedback;
                const isSelectedWrong = isSelected && !isCorrectFeedback;
                const isRevealedTarget = isAnswered && isTarget;

                let optBg = theme.surface;
                let optBorder = theme.border;
                let optText = theme.textPrimary;

                if (isSelectedCorrect || isRevealedTarget) {
                  optBg = theme.success;
                  optBorder = theme.success;
                  optText = '#FFFFFF';
                } else if (isSelectedWrong) {
                  optBg = theme.error;
                  optBorder = theme.error;
                  optText = '#FFFFFF';
                }

                return (
                  <Pressable
                    key={option}
                    style={[
                      styles.optionButton,
                      { backgroundColor: optBg, borderColor: optBorder },
                    ]}
                    activeOpacity={0.8}
                    onPress={() => handleSelectOption(option)}
                  >
                    <Text style={[styles.optionText, { color: optText }]}>
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}

        {/* State 3: FINISHED / SUMMARY */}
        {gameState === 'finished' && (
          <View style={styles.summaryContainer}>
            <View style={[styles.iconCircle, { backgroundColor: theme.primaryLight }]}>
              <Text style={styles.heroIcon}>{score >= 20 ? '🏆' : '⏱️'}</Text>
            </View>
            <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>Time's Up!</Text>

            {isNewRecord && (
              <View style={styles.recordBadge}>
                <Text style={styles.recordText}>🎉 NEW PERSONAL BEST! 🎉</Text>
              </View>
            )}

            <View style={styles.summaryGrid}>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{score}</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Final Score</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{accuracy}%</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Accuracy</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{bestStreak}</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Max Streak</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>+{score * 10} XP</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Earned</Text>
              </View>
            </View>

            <Pressable
              style={[styles.primaryButton, { backgroundColor: theme.primary }]}
              onPress={startGame}
            >
              <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
                🔄 Play Again
              </Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={onClose}>
              <Text style={[styles.secondaryButtonText, { color: theme.textSecondary }]}>Done</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  closeButton: {
    padding: spacing.xs,
  },
  closeText: {
    fontSize: 20,
    fontWeight: '700',
  },
  menuContainer: {
    flex: 1,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  heroIcon: {
    fontSize: 44,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  heroSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  durationRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xl,
    width: '100%',
  },
  durationTab: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
  },
  durationTabText: {
    fontSize: 16,
    fontWeight: '700',
  },
  statsCard: {
    flexDirection: 'row',
    borderRadius: radii.lg,
    borderWidth: 1,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.md,
    width: '100%',
    marginBottom: spacing.xl,
    ...shadows.sm,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  primaryButton: {
    borderRadius: radii.full,
    paddingVertical: spacing.base,
    width: '100%',
    alignItems: 'center',
    ...shadows.md,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    paddingVertical: spacing.md,
    width: '100%',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  gameContainer: {
    flex: 1,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    justifyContent: 'space-between',
  },
  hudRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  timerBadge: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  timerBadgeWarning: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  timerBadgeCritical: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  timerText: {
    fontSize: 16,
    fontWeight: '800',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '700',
  },
  streakText: {
    fontSize: 16,
    fontWeight: '700',
  },
  card: {
    flex: 1,
    maxHeight: 240,
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    ...shadows.md,
  },
  prompt: {
    fontSize: 72,
    fontWeight: '500',
  },
  promptSub: {
    fontSize: 15,
    marginTop: spacing.xs,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  optionButton: {
    width: '48%',
    flexGrow: 1,
    borderRadius: radii.lg,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    ...shadows.sm,
  },
  optionText: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  summaryContainer: {
    flex: 1,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordBadge: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
    paddingHorizontal: spacing.base,
    paddingVertical: 6,
    borderRadius: radii.full,
    marginBottom: spacing.lg,
  },
  recordText: {
    color: '#B45309',
    fontSize: 13,
    fontWeight: '700',
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    width: '100%',
    marginBottom: spacing.xl,
  },
  summaryItem: {
    width: '48%',
    borderRadius: radii.md,
    borderWidth: 1,
    paddingVertical: spacing.base,
    alignItems: 'center',
  },
  summaryVal: {
    fontSize: 22,
    fontWeight: '800',
  },
  summaryLbl: {
    fontSize: 12,
    marginTop: 2,
  },
});
