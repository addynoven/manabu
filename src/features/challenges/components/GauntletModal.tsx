import React, { useCallback, useEffect, useState } from 'react';
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
import {
  GAUNTLET_DIFFICULTY_INFO,
  type ChallengeQuestion,
  type GauntletDifficulty,
} from '../models/challenge.model';

interface GauntletModalProps {
  visible: boolean;
  onClose: () => void;
  dojoName: string;
  category: 'kana' | 'kanji' | 'vocab';
  questionGenerator: () => ChallengeQuestion | null;
}

export function GauntletModal({
  visible,
  onClose,
  dojoName,
  category,
  questionGenerator,
}: GauntletModalProps) {
  const { colors: theme } = useAppTheme();
  const [difficulty, setDifficulty] = useState<GauntletDifficulty>('normal');
  const [targetCount, setTargetCount] = useState<number>(10);
  const [gameState, setGameState] = useState<'idle' | 'running' | 'victory' | 'gameover'>('idle');

  const [lives, setLives] = useState(3);
  const [maxLives, setMaxLives] = useState(3);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<ChallengeQuestion | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [regenNotification, setRegenNotification] = useState(false);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrectFeedback, setIsCorrectFeedback] = useState<boolean | null>(null);

  const { recordGauntlet, getGauntletStats } = useChallengeStore();
  const currentStats = getGauntletStats(category, difficulty);

  useEffect(() => {
    if (!visible) {
      setGameState('idle');
    }
  }, [visible]);

  const loadNextQuestion = useCallback(() => {
    const q = questionGenerator();
    setCurrentQuestion(q);
    setSelectedOption(null);
    setIsCorrectFeedback(null);
  }, [questionGenerator]);

  const startGauntlet = useCallback(() => {
    const diffInfo = GAUNTLET_DIFFICULTY_INFO[difficulty];
    setLives(diffInfo.lives);
    setMaxLives(diffInfo.lives);
    setQuestionIndex(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectCount(0);
    setRegenNotification(false);
    setGameState('running');
    loadNextQuestion();
  }, [difficulty, loadNextQuestion]);

  const handleSelectOption = (option: string) => {
    if (selectedOption !== null || !currentQuestion || gameState !== 'running') return;

    const isCorrect = option === currentQuestion.correctAnswer;
    setSelectedOption(option);
    setIsCorrectFeedback(isCorrect);

    // Track attempt in Progress Store for mastery
    useProgressStore
      .getState()
      .recordAnswer(currentQuestion.characterKey, isCorrect, currentQuestion.category);

    if (isCorrect) {
      const nextStreak = streak + 1;
      const nextCorrect = correctCount + 1;
      setStreak(nextStreak);
      setCorrectCount(nextCorrect);
      setBestStreak(prev => Math.max(prev, nextStreak));

      // Health regeneration in Normal mode: every 5-streak if below max lives
      const diffInfo = GAUNTLET_DIFFICULTY_INFO[difficulty];
      if (diffInfo.regenerates && nextStreak % 5 === 0 && lives < maxLives) {
        setLives(prev => Math.min(maxLives, prev + 1));
        setRegenNotification(true);
        setTimeout(() => setRegenNotification(false), 1200);
      }

      setTimeout(() => {
        const nextIndex = questionIndex + 1;
        if (nextIndex >= targetCount) {
          // Cleared Gauntlet!
          setGameState('victory');
          recordGauntlet(category, difficulty, true, Math.max(bestStreak, nextStreak));
        } else {
          setQuestionIndex(nextIndex);
          loadNextQuestion();
        }
      }, 250);
    } else {
      // Wrong answer -> lose a life
      const remainingLives = lives - 1;
      setLives(remainingLives);
      setStreak(0);

      setTimeout(() => {
        if (remainingLives <= 0) {
          // Game Over!
          setGameState('gameover');
          recordGauntlet(category, difficulty, false, bestStreak);
        } else {
          const nextIndex = questionIndex + 1;
          if (nextIndex >= targetCount) {
            setGameState('victory');
            recordGauntlet(category, difficulty, true, bestStreak);
          } else {
            setQuestionIndex(nextIndex);
            loadNextQuestion();
          }
        }
      }, 350);
    }
  };

  // Hearts rendering helper
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < maxLives; i++) {
      hearts.push(
        <Text key={i} style={styles.heartIcon}>
          {i < lives ? '❤️' : '💔'}
        </Text>,
      );
    }
    return hearts;
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Top Header */}
        <View style={[styles.topBar, { borderBottomColor: theme.border }]}>
          <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>🛡️ {dojoName} Gauntlet</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={[styles.closeText, { color: theme.textSecondary }]}>✕</Text>
          </Pressable>
        </View>

        {/* State 1: IDLE / CONFIGURATION */}
        {gameState === 'idle' && (
          <View style={styles.menuContainer}>
            <View style={[styles.iconCircle, { backgroundColor: theme.primaryLight }]}>
              <Text style={styles.heroIcon}>🛡️</Text>
            </View>
            <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>Survival Gauntlet</Text>
            <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
              Test your recall under pressure. Don't run out of hearts!
            </Text>

            {/* Difficulty Selector */}
            <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>Select Difficulty</Text>
            <View style={styles.diffRow}>
              {(['normal', 'hard', 'instant-death'] as GauntletDifficulty[]).map(d => {
                const isSelected = difficulty === d;
                const info = GAUNTLET_DIFFICULTY_INFO[d];
                return (
                  <Pressable
                    key={d}
                    onPress={() => setDifficulty(d)}
                    style={[
                      styles.diffTab,
                      {
                        backgroundColor: isSelected ? theme.primary : theme.surfaceSubtle,
                        borderColor: isSelected ? theme.primary : theme.border,
                      },
                    ]}
                  >
                    <Text style={styles.diffIcon}>{info.icon}</Text>
                    <Text
                      style={[
                        styles.diffTabText,
                        {
                          color: isSelected ? theme.textOnPrimary : theme.textPrimary,
                        },
                      ]}
                    >
                      {info.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Text style={[styles.diffDesc, { color: theme.textSecondary }]}>
              {GAUNTLET_DIFFICULTY_INFO[difficulty].desc}
            </Text>

            {/* Queue Length Selector */}
            <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>Rounds to Clear</Text>
            <View style={styles.roundsRow}>
              {[10, 20].map(cnt => {
                const isSelected = targetCount === cnt;
                return (
                  <Pressable
                    key={cnt}
                    onPress={() => setTargetCount(cnt)}
                    style={[
                      styles.roundTab,
                      {
                        backgroundColor: isSelected ? theme.primary : theme.surfaceSubtle,
                        borderColor: isSelected ? theme.primary : theme.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.roundTabText,
                        {
                          color: isSelected ? theme.textOnPrimary : theme.textPrimary,
                        },
                      ]}
                    >
                      {cnt} Questions
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Stats Card */}
            <View
              style={[
                styles.statsCard,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>{currentStats.clears}</Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Clears</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>{currentStats.attempts}</Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Attempts</Text>
              </View>
              <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>{currentStats.bestStreak}</Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Best Streak</Text>
              </View>
            </View>

            <Pressable
              style={[styles.primaryButton, { backgroundColor: theme.primary }]}
              onPress={startGauntlet}
            >
              <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
                ⚔️ ENTER GAUNTLET
              </Text>
            </Pressable>
          </View>
        )}

        {/* State 2: RUNNING GAME */}
        {gameState === 'running' && currentQuestion && (
          <View style={styles.gameContainer}>
            {/* Live HUD */}
            <View style={styles.hudRow}>
              <View style={styles.heartsRow}>
                {renderHearts()}
                {regenNotification && (
                  <Text style={[styles.regenText, { color: theme.success }]}>+1 ❤️ Regen!</Text>
                )}
              </View>

              <View style={styles.counterRow}>
                <Text style={[styles.counterText, { color: theme.textPrimary }]}>
                  {questionIndex + 1}/{targetCount}
                </Text>
                <Text style={[styles.streakText, { color: theme.accent }]}>🔥 {streak}</Text>
              </View>
            </View>

            {/* Question Card */}
            <View
              style={[
                styles.card,
                {
                  backgroundColor: theme.surface,
                  borderColor:
                    selectedOption !== null && !isCorrectFeedback
                      ? theme.error
                      : theme.border,
                },
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

        {/* State 3: VICTORY */}
        {gameState === 'victory' && (
          <View style={styles.summaryContainer}>
            <View style={[styles.iconCircle, { backgroundColor: '#DEF7EC' }]}>
              <Text style={styles.heroIcon}>👑</Text>
            </View>
            <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>Gauntlet Cleared!</Text>
            <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
              You survived all {targetCount} rounds on{' '}
              {GAUNTLET_DIFFICULTY_INFO[difficulty].label} mode!
            </Text>

            <View style={styles.summaryGrid}>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{correctCount}/{targetCount}</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Score</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{lives} ❤️</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Lives Left</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{bestStreak}</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Best Streak</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>+{targetCount * 15} XP</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Reward</Text>
              </View>
            </View>

            <Pressable
              style={[styles.primaryButton, { backgroundColor: theme.primary }]}
              onPress={startGauntlet}
            >
              <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
                ⚔️ Play Again
              </Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={onClose}>
              <Text style={[styles.secondaryButtonText, { color: theme.textSecondary }]}>Done</Text>
            </Pressable>
          </View>
        )}

        {/* State 4: GAME OVER */}
        {gameState === 'gameover' && (
          <View style={styles.summaryContainer}>
            <View style={[styles.iconCircle, { backgroundColor: '#FEE2E2' }]}>
              <Text style={styles.heroIcon}>💀</Text>
            </View>
            <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>Defeat!</Text>
            <Text style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
              You ran out of lives at round {questionIndex + 1} of {targetCount}.
            </Text>

            <View style={styles.summaryGrid}>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{correctCount}</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Correct</Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.summaryVal, { color: theme.primary }]}>{bestStreak}</Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>Best Streak</Text>
              </View>
            </View>

            <Pressable
              style={[styles.primaryButton, { backgroundColor: theme.primary }]}
              onPress={startGauntlet}
            >
              <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
                🔄 Try Again
              </Text>
            </Pressable>

            <Pressable style={styles.secondaryButton} onPress={onClose}>
              <Text style={[styles.secondaryButtonText, { color: theme.textSecondary }]}>Exit</Text>
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
  diffRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
    width: '100%',
  },
  diffTab: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    gap: 4,
  },
  diffIcon: {
    fontSize: 20,
  },
  diffTabText: {
    fontSize: 13,
    fontWeight: '700',
  },
  diffDesc: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  roundsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xl,
    width: '100%',
  },
  roundTab: {
    flex: 1,
    paddingVertical: spacing.sm + 2,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
  },
  roundTabText: {
    fontSize: 14,
    fontWeight: '600',
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
  heartsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  heartIcon: {
    fontSize: 22,
  },
  regenText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 6,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  counterText: {
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
