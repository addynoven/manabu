import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  X,
  Volume2,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Flame,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useProgressStore } from '../../progress/store/useProgressStore';
import {
  resolveReviewItem,
  type ResolvedReviewItem,
} from '../services/reviewResolver.service';
import {
  getStageColor,
  SRS_CONFIG,
  calculateNextSrsStep,
} from '../services/srsEngine';

export type ReviewMode = 'daily' | 'weakness' | 'speed';

interface ReviewSessionModalProps {
  visible: boolean;
  onClose: () => void;
  mode: ReviewMode;
  category?: 'kana' | 'kanji' | 'vocab';
}

function ReviewSessionContent({
  onClose,
  mode,
  category,
}: {
  onClose: () => void;
  mode: ReviewMode;
  category?: 'kana' | 'kanji' | 'vocab';
}) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const getDueReviewItems = useProgressStore(state => state.getDueReviewItems);
  const getWeakestCharacters = useProgressStore(state => state.getWeakestCharacters);
  const recordSrsReview = useProgressStore(state => state.recordSrsReview);

  // Initialize Items on mount
  const [items] = useState<ResolvedReviewItem[]>(() => {
    let sourceRecords = [];
    if (mode === 'daily') {
      sourceRecords = getDueReviewItems(category);
      if (sourceRecords.length === 0) {
        sourceRecords = getWeakestCharacters(category, 10);
      }
    } else if (mode === 'weakness') {
      sourceRecords = getWeakestCharacters(category, 12);
    } else {
      sourceRecords = getWeakestCharacters(category, 25);
    }
    return sourceRecords.map(r => resolveReviewItem(r));
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewType, setReviewType] = useState<'quiz' | 'flashcard'>('quiz');
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<'correct' | 'incorrect' | null>(null);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // Speed Mode State
  const [speedTimeLeft, setSpeedTimeLeft] = useState(60);
  const [combo, setCombo] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Metrics
  const [correctCount, setCorrectCount] = useState(0);
  const [promotionsCount, setPromotionsCount] = useState(0);
  const [demotionsCount, setDemotionsCount] = useState(0);

  useEffect(() => {
    if (mode === 'speed') {
      timerRef.current = setInterval(() => {
        setSpeedTimeLeft(prev => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setSessionCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode]);

  const currentItem = items[currentIndex];

  const handlePlayAudio = async (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(text, { rate: 0.85 });
  };

  const advanceNext = () => {
    if (currentIndex + 1 >= items.length) {
      if (timerRef.current) clearInterval(timerRef.current);
      setSessionCompleted(true);
    } else {
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
      setSelectedOption(null);
      setEvaluation(null);
    }
  };

  const handleSelectOption = (option: string) => {
    if (evaluation !== null || !currentItem) return;

    setSelectedOption(option);
    const isCorrect = option === currentItem.correctAnswer;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setEvaluation('correct');
      setCorrectCount(c => c + 1);
      setCombo(c => c + 1);
      setPromotionsCount(p => p + 1);
      recordSrsReview(currentItem.characterKey, true, currentItem.category);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setEvaluation('incorrect');
      setCombo(0);
      setDemotionsCount(d => d + 1);
      recordSrsReview(currentItem.characterKey, false, currentItem.category);
    }

    handlePlayAudio(currentItem.audioText).catch(() => {});

    if (mode === 'speed') {
      setTimeout(() => {
        advanceNext();
      }, 400);
    }
  };

  const handleFlashcardGrade = (isCorrect: boolean) => {
    if (!currentItem) return;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setCorrectCount(c => c + 1);
      setPromotionsCount(p => p + 1);
      recordSrsReview(currentItem.characterKey, true, currentItem.category);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setDemotionsCount(d => d + 1);
      recordSrsReview(currentItem.characterKey, false, currentItem.category);
    }

    advanceNext();
  };

  const progressPercent = items.length > 0 ? ((currentIndex + 1) / items.length) * 100 : 0;
  const currentSrsConfig = currentItem ? SRS_CONFIG[currentItem.srsStage] : null;

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          style={[styles.closeButton, { backgroundColor: theme.surfaceSubtle }]}
          onPress={onClose}
          hitSlop={8}
          accessibilityLabel="Close review session"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
            {mode === 'daily'
              ? '復習 • SRS Review'
              : mode === 'weakness'
              ? '⚡ Weakness Sprint'
              : '🔥 Speed Blitz'}
          </Text>
          {mode === 'speed' ? (
            <View style={styles.timerBadge}>
              <Clock size={14} color="#EF4444" />
              <Text style={styles.timerText}>{speedTimeLeft}s</Text>
              {combo > 1 && (
                <View style={styles.comboBadge}>
                  <Flame size={12} color="#F59E0B" />
                  <Text style={styles.comboText}>{combo}x Combo</Text>
                </View>
              )}
            </View>
          ) : (
            <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
              {items.length > 0 ? `Card ${currentIndex + 1} of ${items.length}` : 'Preparing queue...'}
            </Text>
          )}
        </View>

        {mode !== 'speed' ? (
          <Pressable
            style={[styles.modeToggle, { backgroundColor: theme.surfaceSubtle }]}
            onPress={() => {
              setReviewType(t => (t === 'quiz' ? 'flashcard' : 'quiz'));
              setIsFlipped(false);
              setSelectedOption(null);
              setEvaluation(null);
            }}
            accessibilityLabel="Toggle review mode"
          >
            <Text style={[styles.modeToggleText, { color: theme.textSecondary }]}>
              {reviewType === 'quiz' ? 'Flashcard' : 'Quiz'}
            </Text>
          </Pressable>
        ) : (
          <View style={{ width: 36 }} />
        )}
      </View>

      {/* Progress Bar */}
      {mode !== 'speed' && (
        <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle }]}>
          <View
            style={[
              styles.progressFill,
              { width: `${progressPercent}%`, backgroundColor: theme.primary },
            ]}
          />
        </View>
      )}

      {sessionCompleted ? (
        /* Victory / Summary Screen */
        <ScrollView
          contentContainerStyle={styles.summaryContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={[styles.trophyCircle, { backgroundColor: theme.primary + '20' }]}>
            <Sparkles size={48} color={theme.primary} />
          </View>

          <Text style={[styles.summaryTitle, { color: theme.textPrimary }]}>
            {mode === 'speed' ? 'Blitz Finished!' : 'Review Completed!'}
          </Text>
          <Text style={[styles.summarySub, { color: theme.textSecondary }]}>
            Your memory traces have been reinforced with spaced repetition.
          </Text>

          {/* Stats Grid */}
          <View style={[styles.summaryCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.summaryRow}>
              <View style={styles.summaryStat}>
                <Text style={[styles.summaryStatValue, { color: theme.primary }]}>
                  {items.length}
                </Text>
                <Text style={[styles.summaryStatLabel, { color: theme.textMuted }]}>
                  Cards Reviewed
                </Text>
              </View>
              <View style={styles.summaryStat}>
                <Text style={[styles.summaryStatValue, { color: theme.success }]}>
                  {items.length > 0 ? Math.round((correctCount / items.length) * 100) : 0}%
                </Text>
                <Text style={[styles.summaryStatLabel, { color: theme.textMuted }]}>
                  Accuracy
                </Text>
              </View>
              <View style={styles.summaryStat}>
                <Text style={[styles.summaryStatValue, { color: '#F59E0B' }]}>
                  +{correctCount * 15}
                </Text>
                <Text style={[styles.summaryStatLabel, { color: theme.textMuted }]}>
                  XP Gained
                </Text>
              </View>
            </View>

            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            <View style={styles.srsSummaryRow}>
              <View style={styles.srsBadgeSummary}>
                <ArrowRight size={16} color={theme.success} />
                <Text style={[styles.srsSummaryText, { color: theme.textPrimary }]}>
                  <Text style={{ fontWeight: '700', color: theme.success }}>
                    {promotionsCount}
                  </Text>{' '}
                  Items advanced SRS stage
                </Text>
              </View>
              {demotionsCount > 0 && (
                <View style={styles.srsBadgeSummary}>
                  <RotateCcw size={16} color={theme.error} />
                  <Text style={[styles.srsSummaryText, { color: theme.textPrimary }]}>
                    <Text style={{ fontWeight: '700', color: theme.error }}>
                      {demotionsCount}
                    </Text>{' '}
                    Items queued for re-study
                  </Text>
                </View>
              )}
            </View>
          </View>

          <Pressable
            style={[styles.finishButton, { backgroundColor: theme.primary }]}
            onPress={onClose}
            accessibilityLabel="Finish review"
          >
            <Text style={[styles.finishButtonText, { color: theme.textOnPrimary }]}>
              RETURN TO REVIEW HUB
            </Text>
          </Pressable>
        </ScrollView>
      ) : !currentItem ? (
        /* Empty Queue State */
        <View style={styles.emptyContainer}>
          <CheckCircle2 size={48} color={theme.success} />
          <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
            Queue is clear!
          </Text>
          <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
            All spaced repetition cards are up to date.
          </Text>
          <Pressable
            style={[styles.finishButton, { backgroundColor: theme.primary, marginTop: 24 }]}
            onPress={onClose}
          >
            <Text style={[styles.finishButtonText, { color: theme.textOnPrimary }]}>
              RETURN
            </Text>
          </Pressable>
        </View>
      ) : (
        /* Active Review Session Content */
        <ScrollView
          contentContainerStyle={[styles.reviewContent, { paddingBottom: insets.bottom + 32 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          {/* SRS Stage Chip */}
          <View style={styles.stageRow}>
            <View
              style={[
                styles.stageBadge,
                { backgroundColor: getStageColor(currentItem.srsStage) + '20' },
              ]}
            >
              <Text style={[styles.stageBadgeText, { color: getStageColor(currentItem.srsStage) }]}>
                {currentSrsConfig?.name.toUpperCase() || 'APPRENTICE'}
              </Text>
            </View>
            <Text style={[styles.categoryBadge, { color: theme.textMuted }]}>
              {currentItem.category.toUpperCase()} • ACCURACY: {currentItem.accuracy}%
            </Text>
          </View>

          {/* Target Japanese Card */}
          <Pressable
            style={[
              styles.card,
              { backgroundColor: theme.surface, borderColor: theme.border },
              reviewType === 'flashcard' && styles.flashcardInteractive,
            ]}
            onPress={() => {
              if (reviewType === 'flashcard') {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                setIsFlipped(f => !f);
              }
            }}
            accessibilityLabel={`Target card: ${currentItem.japanese}`}
          >
            <View style={styles.cardHeader}>
              <Pressable
                style={[styles.audioIconBtn, { backgroundColor: theme.surfaceSubtle }]}
                onPress={() => handlePlayAudio(currentItem.audioText)}
                accessibilityLabel="Play Japanese audio"
              >
                <Volume2 size={22} color={theme.primary} />
              </Pressable>
            </View>

            <Text style={[styles.targetJapanese, { color: theme.textPrimary }]}>
              {currentItem.japanese}
            </Text>

            {/* Reveal Section in Flashcard mode or after answer in Quiz */}
            {(isFlipped || evaluation !== null) && (
              <View style={styles.revealedSection}>
                <Text style={[styles.targetReading, { color: theme.textSecondary }]}>
                  {currentItem.reading}
                </Text>
                <Text style={[styles.targetMeaning, { color: theme.textPrimary }]}>
                  {currentItem.english}
                </Text>
              </View>
            )}

            {reviewType === 'flashcard' && !isFlipped && (
              <Text style={[styles.flipHint, { color: theme.textMuted }]}>
                Tap to flip & reveal meaning
              </Text>
            )}
          </Pressable>

          {/* Interaction Section */}
          {reviewType === 'quiz' ? (
            /* 4 Multiple Choice Chips */
            <View style={styles.optionsContainer}>
              <Text style={[styles.optionsLabel, { color: theme.textSecondary }]}>
                SELECT THE MATCHING MEANING:
              </Text>
              {currentItem.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentItem.correctAnswer;

                let optBg = theme.surface;
                let optBorder = theme.border;
                let optText = theme.textPrimary;

                if (evaluation !== null) {
                  if (isCorrect) {
                    optBg = '#10B98120';
                    optBorder = '#10B981';
                    optText = '#10B981';
                  } else if (isSelected) {
                    optBg = '#EF444420';
                    optBorder = '#EF4444';
                    optText = '#EF4444';
                  }
                }

                return (
                  <Pressable
                    key={`${option}_${idx}`}
                    style={[
                      styles.optionCard,
                      { backgroundColor: optBg, borderColor: optBorder },
                    ]}
                    onPress={() => handleSelectOption(option)}
                    disabled={evaluation !== null}
                    accessibilityLabel={`Option: ${option}`}
                  >
                    <Text style={[styles.optionText, { color: optText }]}>
                      {option}
                    </Text>
                    {evaluation !== null && isCorrect && (
                      <CheckCircle2 size={18} color="#10B981" />
                    )}
                    {evaluation !== null && isSelected && !isCorrect && (
                      <XCircle size={18} color="#EF4444" />
                    )}
                  </Pressable>
                );
              })}
            </View>
          ) : (
            /* Flashcard Anki-Style Self Assessment */
            <View style={styles.flashcardActions}>
              {!isFlipped ? (
                <Pressable
                  style={[styles.revealButton, { backgroundColor: theme.primary }]}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                    setIsFlipped(true);
                    handlePlayAudio(currentItem.audioText).catch(() => {});
                  }}
                  accessibilityLabel="Reveal answer"
                >
                  <Text style={[styles.revealButtonText, { color: theme.textOnPrimary }]}>
                    SHOW ANSWER
                  </Text>
                </Pressable>
              ) : (
                <View style={styles.gradeGrid}>
                  <Pressable
                    style={[styles.gradeBtn, { backgroundColor: '#EF4444' }]}
                    onPress={() => handleFlashcardGrade(false)}
                    accessibilityLabel="Grade Again"
                  >
                    <Text style={styles.gradeBtnText}>Again</Text>
                    <Text style={styles.gradeSubText}>Reset 4h</Text>
                  </Pressable>

                  <Pressable
                    style={[styles.gradeBtn, { backgroundColor: '#10B981' }]}
                    onPress={() => handleFlashcardGrade(true)}
                    accessibilityLabel="Grade Good"
                  >
                    <Text style={styles.gradeBtnText}>Good</Text>
                    <Text style={styles.gradeSubText}>Advance SRS</Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}

          {/* Bottom Continue Sheet for Quiz Mode */}
          {reviewType === 'quiz' && mode !== 'speed' && evaluation !== null && (
            <View style={[styles.feedbackBanner, { backgroundColor: evaluation === 'correct' ? '#10B98115' : '#EF444415' }]}>
              <View style={styles.feedbackLeft}>
                {evaluation === 'correct' ? (
                  <CheckCircle2 size={24} color="#10B981" />
                ) : (
                  <XCircle size={24} color="#EF4444" />
                )}
                <View style={{ marginLeft: 12 }}>
                  <Text style={[styles.feedbackTitle, { color: evaluation === 'correct' ? '#10B981' : '#EF4444' }]}>
                    {evaluation === 'correct' ? 'Nicely Done!' : 'Keep Practicing'}
                  </Text>
                  <Text style={[styles.feedbackSub, { color: theme.textSecondary }]}>
                    {evaluation === 'correct'
                      ? `Promoted to ${calculateNextSrsStep(currentItem.srsStage, true).nextStage}`
                      : 'Review scheduled again soon'}
                  </Text>
                </View>
              </View>

              <Pressable
                style={[styles.continueButton, { backgroundColor: evaluation === 'correct' ? '#10B981' : '#EF4444' }]}
                onPress={advanceNext}
                accessibilityLabel="Continue to next card"
              >
                <Text style={[styles.continueButtonText, { color: '#FFFFFF' }]}>CONTINUE</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}

export function ReviewSessionModal({
  visible,
  onClose,
  mode,
  category,
  sessionKey = 0,
}: ReviewSessionModalProps & { sessionKey?: number }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={false} onRequestClose={onClose}>
      {visible ? (
        <ReviewSessionContent
          key={`${mode}_${category || 'all'}_${sessionKey}`}
          onClose={onClose}
          mode={mode}
          category={category}
        />
      ) : null}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  timerText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#EF4444',
  },
  comboBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F59E0B20',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    gap: 4,
  },
  comboText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#F59E0B',
  },
  modeToggle: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
  },
  modeToggleText: {
    fontSize: 12,
    fontWeight: '700',
  },
  progressTrack: {
    height: 4,
    width: '100%',
  },
  progressFill: {
    height: '100%',
  },
  reviewContent: {
    padding: 20,
    alignItems: 'center',
  },
  stageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  stageBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  stageBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  categoryBadge: {
    fontSize: 11,
    fontWeight: '700',
  },
  card: {
    width: '100%',
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    ...shadows.md,
  },
  flashcardInteractive: {
    borderStyle: 'dashed',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  audioIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetJapanese: {
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    marginVertical: 12,
    letterSpacing: 1,
  },
  revealedSection: {
    alignItems: 'center',
    marginTop: 8,
  },
  targetReading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  targetMeaning: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  flipHint: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 12,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 24,
  },
  optionsLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: radii.lg,
    borderWidth: 1.5,
    marginBottom: 10,
    ...shadows.sm,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  flashcardActions: {
    width: '100%',
    marginTop: 28,
  },
  revealButton: {
    height: 52,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  revealButtonText: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  gradeGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  gradeBtn: {
    flex: 1,
    height: 56,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradeBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  gradeSubText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  feedbackBanner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: radii.lg,
    marginTop: 20,
  },
  feedbackLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  feedbackSub: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  continueButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: radii.md,
  },
  continueButtonText: {
    fontSize: 13,
    fontWeight: '800',
  },
  summaryContainer: {
    padding: 24,
    alignItems: 'center',
  },
  trophyCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 26,
    fontWeight: '900',
  },
  summarySub: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
  },
  summaryCard: {
    width: '100%',
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 20,
    marginTop: 24,
    ...shadows.sm,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  summaryStat: {
    alignItems: 'center',
  },
  summaryStatValue: {
    fontSize: 28,
    fontWeight: '900',
  },
  summaryStatLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 16,
  },
  srsSummaryRow: {
    gap: 8,
  },
  srsBadgeSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  srsSummaryText: {
    fontSize: 13,
  },
  finishButton: {
    width: '100%',
    height: 52,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  finishButtonText: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 16,
  },
  emptySub: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
  },
});
