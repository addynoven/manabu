import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Share,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import {
  X,
  Trophy,
  Flame,
  Clock,
  Share2,
  CheckCircle,
  XCircle,
  Volume2,
} from 'lucide-react-native';
import { radii, spacing, typography, useAppTheme } from '../../../core/theme';
import { useArcadeStore } from '../store/useArcadeStore';
import {
  generateDailyChallenge,
  getDayOfYear,
  type DailyChallengeQuestion,
} from '../lib/dailyChallengeGenerator';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface DailyChallengeModalProps {
  visible: boolean;
  onClose: () => void;
}

export function DailyChallengeModal({ visible, onClose }: DailyChallengeModalProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { ttsRate } = useSettingsStore();

  const {
    dailyChallengeStreak,
    dailyChallengeCompleted,
    dailyChallengeLastResult,
    recordDailyChallenge,
  } = useArcadeStore();

  const [questions, setQuestions] = useState<DailyChallengeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [resultsLog, setResultsLog] = useState<boolean[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visible) {
      const dailyQuestions = generateDailyChallenge();
      setQuestions(dailyQuestions);
      setCurrentIndex(0);
      setSelectedOption(null);
      setFeedback('idle');
      setResultsLog([]);
      setElapsedSeconds(0);
      setIsFinished(false);
      setFinalScore(0);

      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [visible]);

  const currentQ = questions[currentIndex];

  const handlePlayAudio = () => {
    if (currentQ) {
      speakJapanese(currentQ.prompt, { rate: ttsRate });
    }
  };

  // Auto-play audio on question reveal
  useEffect(() => {
    if (visible && currentQ && !isFinished && feedback === 'idle') {
      const timer = setTimeout(() => {
        speakJapanese(currentQ.prompt, { rate: ttsRate }).catch(() => {});
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [visible, currentIndex, currentQ?.prompt, isFinished, feedback, ttsRate]);

  const handleSelectOption = (option: string) => {
    if (feedback !== 'idle' || isFinished || !currentQ) return;

    setSelectedOption(option);
    const isCorrect = option === currentQ.correctAnswer;
    const newResults = [...resultsLog, isCorrect];
    setResultsLog(newResults);

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setFeedback('correct');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setFeedback('wrong');
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setFeedback('idle');
      } else {
        // Finish challenge
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }

        const correctCount = newResults.filter(Boolean).length;
        const accuracy = Math.round((correctCount / questions.length) * 100);
        const timeBonus = Math.max(0, 60 - elapsedSeconds) * 2;
        const computedScore = correctCount * 100 + timeBonus;

        setFinalScore(computedScore);
        setIsFinished(true);

        recordDailyChallenge(computedScore, elapsedSeconds, accuracy);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      }
    }, 700);
  };

  const handleShare = async () => {
    const dayNum = getDayOfYear();
    const correctCount = resultsLog.filter(Boolean).length;
    const emojiBlocks = resultsLog.map(r => (r ? '🟩' : '🟥')).join('');

    const message = [
      `Manabu Daily Challenge #${dayNum} 🥋`,
      `🔥 Streak: ${dailyChallengeStreak} Days`,
      `⏱️ ${elapsedSeconds}s | 🎯 ${Math.round((correctCount / 5) * 100)}% Accuracy`,
      `Score: ${finalScore} pts`,
      emojiBlocks,
      `Play now on Manabu Dojo! 🇯🇵`,
    ].join('\n');

    try {
      await Share.share({ message });
    } catch {
      // ignore
    }
  };

  if (!visible) return null;

  const dayNumber = getDayOfYear();

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom + spacing.md,
          },
        ]}
      >
        {/* Top Header */}
        <View style={styles.header}>
          <Pressable
            onPress={onClose}
            style={[styles.closeButton, { backgroundColor: theme.surfaceSubtle }]}
            accessibilityLabel="Close daily challenge"
            hitSlop={8}
          >
            <X size={20} color={theme.textPrimary} />
          </Pressable>

          <View style={styles.headerTitleWrap}>
            <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
              Daily Challenge #{dayNumber}
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
              {currentIndex + 1} of {questions.length || 5} Questions
            </Text>
          </View>

          <View style={[styles.timerBadge, { backgroundColor: theme.surfaceSubtle }]}>
            <Clock size={14} color={theme.primary} />
            <Text style={[styles.timerText, { color: theme.primary }]}>
              {elapsedSeconds}s
            </Text>
          </View>
        </View>

        {/* Progress Dots */}
        <View style={styles.progressDotsRow}>
          {questions.map((_, idx) => {
            const isCompleted = idx < resultsLog.length;
            const isCurrent = idx === currentIndex && !isFinished;
            const isRight = resultsLog[idx] === true;

            let dotColor = theme.surfaceSubtle;
            if (isCompleted) {
              dotColor = isRight ? theme.success : theme.error;
            } else if (isCurrent) {
              dotColor = theme.primary;
            }

            return (
              <View
                key={idx}
                style={[
                  styles.progressDot,
                  { backgroundColor: dotColor },
                  isCurrent && styles.progressDotCurrent,
                ]}
              />
            );
          })}
        </View>

        {!isFinished && currentQ ? (
          <View style={styles.arenaContent}>
            {/* Category tag */}
            <View style={[styles.categoryTag, { backgroundColor: theme.surfaceSubtle }]}>
              <Text style={[styles.categoryTagText, { color: theme.accent }]}>
                {currentQ.category.toUpperCase()} DRILL
              </Text>
            </View>

            {/* Prompt Card */}
            <View
              style={[
                styles.promptCard,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <Pressable
                onPress={handlePlayAudio}
                style={[styles.audioIconBtn, { backgroundColor: theme.primaryLight }]}
                accessibilityLabel="Play audio"
              >
                <Volume2 size={24} color={theme.primary} />
              </Pressable>

              <Text style={[styles.promptText, { color: theme.textPrimary }]}>
                {currentQ.prompt}
              </Text>
              <Text style={[styles.promptSubText, { color: theme.textSecondary }]}>
                {currentQ.promptSub}
              </Text>
            </View>

            {/* Answer Options */}
            <View style={styles.optionsGrid}>
              {currentQ.options.map(option => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentQ.correctAnswer;

                let cardBg = theme.surface;
                let cardBorder = theme.border;
                let textColor = theme.textPrimary;

                if (feedback !== 'idle' && isSelected) {
                  if (isCorrect) {
                    cardBg = theme.successLight;
                    cardBorder = theme.success;
                    textColor = theme.success;
                  } else {
                    cardBg = theme.errorLight;
                    cardBorder = theme.error;
                    textColor = theme.error;
                  }
                } else if (feedback !== 'idle' && isCorrect) {
                  cardBg = theme.successLight;
                  cardBorder = theme.success;
                  textColor = theme.success;
                }

                return (
                  <Pressable
                    key={option}
                    onPress={() => handleSelectOption(option)}
                    disabled={feedback !== 'idle'}
                    style={[
                      styles.optionCard,
                      { backgroundColor: cardBg, borderColor: cardBorder },
                    ]}
                  >
                    <Text style={[styles.optionText, { color: textColor }]}>
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ) : isFinished ? (
          /* Completion Screen */
          <View style={styles.resultsContainer}>
            <View style={[styles.trophyWrap, { backgroundColor: theme.primaryLight }]}>
              <Trophy size={48} color={theme.primary} />
            </View>

            <Text style={[styles.resultsTitle, { color: theme.textPrimary }]}>
              Daily Challenge Complete!
            </Text>
            <Text style={[styles.resultsSubtitle, { color: theme.textSecondary }]}>
              Day #{dayNumber} • Community Standing: Top 10%
            </Text>

            <View
              style={[
                styles.statsSummaryCard,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <View style={styles.summaryCol}>
                <Flame size={20} color="#F97316" />
                <Text style={[styles.summaryVal, { color: theme.textPrimary }]}>
                  {dailyChallengeStreak}
                </Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>
                  Day Streak
                </Text>
              </View>

              <View style={[styles.summaryDivider, { backgroundColor: theme.border }]} />

              <View style={styles.summaryCol}>
                <Clock size={20} color={theme.accent} />
                <Text style={[styles.summaryVal, { color: theme.textPrimary }]}>
                  {elapsedSeconds}s
                </Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>
                  Time Taken
                </Text>
              </View>

              <View style={[styles.summaryDivider, { backgroundColor: theme.border }]} />

              <View style={styles.summaryCol}>
                <Trophy size={20} color="#EAB308" />
                <Text style={[styles.summaryVal, { color: theme.textPrimary }]}>
                  {finalScore}
                </Text>
                <Text style={[styles.summaryLbl, { color: theme.textSecondary }]}>
                  Score
                </Text>
              </View>
            </View>

            {/* Emoji Grid Display */}
            <View style={[styles.emojiGridCard, { backgroundColor: theme.surfaceSubtle }]}>
              <Text style={styles.emojiGridText}>
                {resultsLog.map(r => (r ? '🟩' : '🟥')).join(' ')}
              </Text>
              <Text style={[styles.emojiGridSub, { color: theme.textSecondary }]}>
                {resultsLog.filter(Boolean).length} / 5 Questions Correct
              </Text>
            </View>

            <View style={styles.resultsActions}>
              <Pressable
                onPress={handleShare}
                style={[styles.shareBtn, { backgroundColor: theme.primary }]}
              >
                <Share2 size={20} color="#FFFFFF" />
                <Text style={styles.shareBtnText}>Share to Community</Text>
              </Pressable>

              <Pressable
                onPress={onClose}
                style={[
                  styles.doneBtn,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.doneBtnText, { color: theme.textPrimary }]}>
                  Back to Arcade
                </Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleWrap: {
    alignItems: 'center',
  },
  headerTitle: {
    ...typography.h2,
    fontWeight: '700',
  },
  headerSubtitle: {
    ...typography.caption,
    marginTop: 2,
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radii.full,
  },
  timerText: {
    ...typography.bodyBold,
    fontWeight: '700',
  },
  progressDotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  progressDot: {
    width: 24,
    height: 6,
    borderRadius: radii.full,
  },
  progressDotCurrent: {
    width: 32,
  },
  arenaContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTag: {
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radii.full,
    marginBottom: spacing.md,
  },
  categoryTagText: {
    ...typography.caption,
    fontWeight: '700',
    letterSpacing: 1,
  },
  promptCard: {
    width: '100%',
    padding: spacing.xl,
    borderRadius: radii.xl,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  audioIconBtn: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  promptText: {
    fontSize: 48,
    fontWeight: '800',
    textAlign: 'center',
  },
  promptSubText: {
    ...typography.body,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  optionsGrid: {
    width: '100%',
    gap: spacing.md,
  },
  optionCard: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.lg,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  optionText: {
    ...typography.h3,
    fontWeight: '600',
  },
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  trophyWrap: {
    width: 80,
    height: 80,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  resultsTitle: {
    ...typography.h1,
    fontWeight: '800',
    textAlign: 'center',
  },
  resultsSubtitle: {
    ...typography.body,
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  statsSummaryCard: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    borderRadius: radii.xl,
    borderWidth: 1,
    marginBottom: spacing.lg,
  },
  summaryCol: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  summaryVal: {
    ...typography.h2,
    fontWeight: '800',
  },
  summaryLbl: {
    ...typography.caption,
  },
  summaryDivider: {
    width: 1,
    height: '100%',
  },
  emojiGridCard: {
    width: '100%',
    padding: spacing.md,
    borderRadius: radii.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  emojiGridText: {
    fontSize: 22,
    letterSpacing: 4,
    marginBottom: spacing.xs,
  },
  emojiGridSub: {
    ...typography.caption,
  },
  resultsActions: {
    width: '100%',
    gap: spacing.md,
  },
  shareBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderRadius: radii.lg,
  },
  shareBtnText: {
    ...typography.h3,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  doneBtn: {
    paddingVertical: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
    alignItems: 'center',
  },
  doneBtnText: {
    ...typography.bodyBold,
    fontWeight: '600',
  },
});
