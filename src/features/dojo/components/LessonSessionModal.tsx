import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  X,
  Volume2,
  Snail,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import type { DojoLesson, LessonItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import { useDojoStore } from '../store/useDojoStore';
import { useProgressStore } from '../../progress/store/useProgressStore';
import * as wanakana from 'wanakana';
import { SpellingExerciseView, type TileItem } from './SpellingExerciseView';
import { ClozeExerciseView } from './ClozeExerciseView';
import { ScrambleExerciseView } from './ScrambleExerciseView';
import { MatchingPairsView } from './MatchingPairsView';
import { DialogueChatView } from './DialogueChatView';
import { SpeechDrillView } from './SpeechDrillView';
import { DictationExerciseView } from './DictationExerciseView';

interface LessonSessionModalProps {
  visible: boolean;
  lesson: DojoLesson | null;
  mode?: 'comprehensive' | 'listen' | 'speak' | 'spell';
  onClose: () => void;
}

interface LessonSessionContentProps {
  lesson: DojoLesson;
  mode: 'comprehensive' | 'listen' | 'speak' | 'spell';
  onClose: () => void;
}

function LessonSessionContent({
  lesson,
  mode,
  onClose,
}: LessonSessionContentProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const completeLesson = useDojoStore(state => state.completeLesson);
  const clearCooldown = useDojoStore(state => state.clearCooldown);
  const recordAnswer = useProgressStore(state => state.recordAnswer);

  const initialItems = useMemo(() => {
    if (mode === 'comprehensive') return [...lesson.items];
    const filtered = lesson.items.filter(item => item.type === mode);
    return filtered.length > 0 ? filtered : [...lesson.items];
  }, [lesson, mode]);

  const [queue, setQueue] = useState<LessonItem[]>(() => initialItems);
  const [totalInitial] = useState(() => initialItems.length);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [assembledTiles, setAssembledTiles] = useState<TileItem[]>([]);
  const [directInput, setDirectInput] = useState<string>('');
  const [assembledTokens, setAssembledTokens] = useState<string[]>([]);
  const [allMatched, setAllMatched] = useState(false);
  const [speechRecorded, setSpeechRecorded] = useState(false);
  const [evaluation, setEvaluation] = useState<'correct' | 'incorrect' | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentItem = queue[0] || null;

  // Auto-play audio on question reveal
  useEffect(() => {
    if (currentItem && !evaluation && !isCompleted) {
      const textToSpeak = currentItem.audioText || currentItem.prompt || (currentItem.type !== 'match' ? currentItem.correctAnswer : '');
      if (textToSpeak) {
        const timer = setTimeout(() => {
          speakJapanese(textToSpeak, { rate: 0.9 }).catch(() => {});
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [currentItem?.id, evaluation, isCompleted]);

  const handlePlayAudio = useCallback(async (rate = 0.9) => {
    if (!currentItem) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(currentItem.audioText, { rate });
  }, [currentItem]);

  const handleCheck = () => {
    if (!currentItem) return;

    let isCorrect = false;

    if (currentItem.type === 'spell') {
      const inputTrimmed = directInput.trim();
      const inputKana = inputTrimmed ? wanakana.toHiragana(inputTrimmed) : '';
      const spelled = inputKana || assembledTiles.map(t => t.char).join('');
      isCorrect = spelled === currentItem.correctAnswer || inputTrimmed === currentItem.correctAnswer;
    } else if (currentItem.type === 'cloze' || currentItem.type === 'cloze_context') {
      isCorrect = selectedOption === currentItem.correctAnswer || selectedOption === currentItem.clozeTarget;
    } else if (currentItem.type === 'scramble') {
      const assembledStr = assembledTokens.join('');
      const solutionStr = (currentItem.scrambleSolution || []).join('') || currentItem.correctAnswer;
      isCorrect = assembledStr === solutionStr;
    } else if (currentItem.type === 'match') {
      isCorrect = allMatched;
    } else if (currentItem.type === 'dialogue') {
      isCorrect = selectedOption === currentItem.correctAnswer;
    } else if (currentItem.type === 'speak') {
      isCorrect = speechRecorded;
    } else if (currentItem.type === 'dictate') {
      const assembledStr = assembledTokens.join('');
      const solutionStr = (currentItem.dictateSolution || []).join('') || currentItem.correctAnswer;
      isCorrect = assembledStr === solutionStr;
    } else {
      isCorrect = selectedOption === currentItem.correctAnswer;
    }

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setEvaluation('correct');
      setCorrectCount(c => c + 1);
      recordAnswer(currentItem.prompt, true, 'vocab');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setEvaluation('incorrect');
      recordAnswer(currentItem.prompt, false, 'vocab');
    }
  };

  const handleContinue = () => {
    if (!currentItem || !lesson) return;

    if (evaluation === 'incorrect') {
      // Re-queue missed question to the end
      setQueue(prev => [...prev.slice(1), currentItem]);
    } else {
      setQueue(prev => prev.slice(1));
    }

    setSelectedOption(null);
    setAssembledTiles([]);
    setDirectInput('');
    setAssembledTokens([]);
    setAllMatched(false);
    setSpeechRecorded(false);
    setEvaluation(null);

    // If queue is now empty (was last item and correct)
    if (queue.length === 1 && evaluation === 'correct') {
      setIsCompleted(true);
      const finalScore = Math.round((correctCount / Math.max(1, totalInitial)) * 100);
      if (lesson.id.startsWith('early_unlock_')) {
        clearCooldown();
      } else {
        completeLesson(lesson.id, finalScore);
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    }
  };

  const handleExit = () => {
    Alert.alert(
      'Quit Lesson?',
      'Progress in this session will not be saved.',
      [
        { text: 'Keep Learning', style: 'cancel' },
        { text: 'Quit', style: 'destructive', onPress: onClose },
      ],
    );
  };

  const handleAddTile = (tile: TileItem) => {
    setAssembledTiles(prev => [...prev, tile]);
  };

  const handleRemoveTile = (index: number) => {
    setAssembledTiles(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleClearLastTile = () => {
    setAssembledTiles(prev => prev.slice(0, prev.length - 1));
  };

  const progressPercent = totalInitial > 0
    ? Math.min(100, Math.round(((totalInitial - queue.length) / totalInitial) * 100))
    : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
        {/* Top Header Bar */}
        <View style={styles.topHeader}>
          <Pressable
            onPress={handleExit}
            style={[styles.exitBtn, { backgroundColor: theme.surfaceSubtle }]}
            hitSlop={8}
            accessibilityLabel="Exit lesson"
          >
            <X size={20} color={theme.textPrimary} />
          </Pressable>

          {/* Progress Bar */}
          <View style={[styles.progressTrack, { backgroundColor: theme.borderSubtle }]}>
            <View
              style={[
                styles.progressFill,
                { width: `${progressPercent}%`, backgroundColor: theme.primary },
              ]}
            />
          </View>
        </View>

        {isCompleted ? (
          /* Victory Completion Screen */
          <View style={styles.completeContainer}>
            <View style={[styles.completeIconCircle, { backgroundColor: theme.primaryLight }]}>
              <Sparkles size={54} color={theme.primary} />
            </View>
            <Text style={[styles.completeTitle, { color: theme.textPrimary }]}>
              {lesson.id.startsWith('early_unlock_') ? 'Cooldown Cleared!' : 'Lesson Complete!'}
            </Text>
            <Text style={[styles.completeSub, { color: theme.textSecondary }]}>
              {lesson.id.startsWith('early_unlock_')
                ? 'Revision re-test passed! The next lesson is now unlocked.'
                : `${lesson.title} • ${lesson.titleJp}`}
            </Text>

            <View style={[styles.xpCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.xpValue, { color: lesson.id.startsWith('early_unlock_') ? '#10B981' : theme.primary }]}>
                {lesson.id.startsWith('early_unlock_') ? 'UNLOCKED' : '+50 XP'}
              </Text>
              <Text style={[styles.xpLabel, { color: theme.textSecondary }]}>
                {lesson.id.startsWith('early_unlock_') ? 'Next Lesson Ready' : 'Mastery Gained'}
              </Text>
            </View>

            <Pressable
              style={[styles.finishBtn, { backgroundColor: theme.primary }]}
              onPress={onClose}
            >
              <Text style={[styles.finishBtnText, { color: theme.textOnPrimary }]}>CONTINUE</Text>
            </Pressable>
          </View>
        ) : currentItem ? (
          /* Active Question View */
          <ScrollView
            contentContainerStyle={[styles.questionContent, { paddingBottom: insets.bottom + 120 }]}
            showsVerticalScrollIndicator={false}
          >
            {currentItem.type === 'spell' ? (
              <SpellingExerciseView
                item={currentItem}
                assembledTiles={assembledTiles}
                onAddTile={handleAddTile}
                onRemoveTile={handleRemoveTile}
                onClearLast={handleClearLastTile}
                onDirectInputChange={setDirectInput}
                directInputText={directInput}
                onPlayAudio={handlePlayAudio}
              />
            ) : currentItem.type === 'cloze' || currentItem.type === 'cloze_context' ? (
              <ClozeExerciseView
                item={currentItem}
                selectedChip={selectedOption}
                onSelectChip={setSelectedOption}
                onPlayAudio={handlePlayAudio}
              />
            ) : currentItem.type === 'scramble' ? (
              <ScrambleExerciseView
                item={currentItem}
                assembledTokens={assembledTokens}
                onAddToken={token => setAssembledTokens(prev => [...prev, token])}
                onRemoveToken={idx => setAssembledTokens(prev => prev.filter((_, i) => i !== idx))}
                onPlayAudio={handlePlayAudio}
              />
            ) : currentItem.type === 'match' ? (
              <MatchingPairsView
                item={currentItem}
                onAllMatched={() => {
                  setAllMatched(true);
                  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
                  setEvaluation('correct');
                  setCorrectCount(c => c + 1);
                  recordAnswer(currentItem.prompt, true, 'vocab');
                }}
              />
            ) : currentItem.type === 'dialogue' ? (
              <DialogueChatView
                item={currentItem}
                selectedReply={selectedOption}
                onSelectReply={setSelectedOption}
                onPlayAudio={handlePlayAudio}
              />
            ) : currentItem.type === 'speak' ? (
              <SpeechDrillView
                item={currentItem}
                onSpeechRecorded={_text => {
                  setSpeechRecorded(true);
                  setEvaluation('correct');
                  setCorrectCount(c => c + 1);
                  recordAnswer(currentItem.prompt, true, 'vocab');
                }}
                onBypassSpeech={() => {
                  setSpeechRecorded(true);
                  setEvaluation('correct');
                  setCorrectCount(c => c + 1);
                  recordAnswer(currentItem.prompt, true, 'vocab');
                }}
                onPlayAudio={handlePlayAudio}
              />
            ) : currentItem.type === 'dictate' ? (
              <DictationExerciseView
                item={currentItem}
                assembledTokens={assembledTokens}
                onAddToken={token => setAssembledTokens(prev => [...prev, token])}
                onRemoveToken={idx => setAssembledTokens(prev => prev.filter((_, i) => i !== idx))}
                onPlayAudio={handlePlayAudio}
              />
            ) : (
              <>
                {/* Audio Controls (Normal & Turtle) */}
                <View style={styles.audioRow}>
                  <Pressable
                    onPress={() => handlePlayAudio(0.9)}
                    style={[styles.audioBubble, { backgroundColor: theme.surface, borderColor: theme.border }]}
                    accessibilityLabel="Play audio normal speed"
                  >
                    <Volume2 size={24} color={theme.primary} />
                  </Pressable>

                  <Pressable
                    onPress={() => handlePlayAudio(0.6)}
                    style={[styles.audioBubble, { backgroundColor: theme.surface, borderColor: theme.border }]}
                    accessibilityLabel="Play audio slow speed"
                  >
                    <Snail size={24} color="#10B981" />
                  </Pressable>
                </View>

                {/* Prompt Card */}
                <View style={[styles.promptCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                  {currentItem.dialogueSpeaker && (
                    <View style={[styles.speakerBadge, { backgroundColor: theme.primaryLight }]}>
                      <Text style={[styles.speakerText, { color: theme.primary }]}>
                        {currentItem.dialogueSpeaker}
                      </Text>
                    </View>
                  )}

                  <CopyableJapaneseText text={currentItem.prompt}>
                    <Text style={[styles.promptJapanese, { color: theme.textPrimary }]}>
                      {currentItem.prompt}
                    </Text>
                  </CopyableJapaneseText>

                  {currentItem.romaji && (
                    <Text style={[styles.promptRomaji, { color: theme.textSecondary }]}>
                      {currentItem.romaji}
                    </Text>
                  )}

                  <Text style={[styles.promptEnglish, { color: theme.textMuted }]}>
                    {currentItem.english}
                  </Text>
                </View>

                {/* Multiple Choice Options (for Listen, Reading, Quizzes) */}
                {currentItem.options && (
                  <View style={styles.optionsList}>
                    {currentItem.options.map((opt, idx) => {
                      const isSelected = selectedOption === opt;
                      return (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                            setSelectedOption(opt);
                          }}
                          style={[
                            styles.optionCard,
                            { backgroundColor: theme.surface, borderColor: theme.border },
                            isSelected && { borderColor: theme.primary, backgroundColor: theme.primaryLight },
                          ]}
                        >
                          <Text
                            style={[
                              styles.optionText,
                              { color: theme.textPrimary },
                              isSelected && { color: theme.primary, fontWeight: '800' },
                            ]}
                          >
                            {opt}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                )}
              </>
            )}
          </ScrollView>
        ) : null}

        {/* Sliding Evaluation Bottom Sheet matching deerlino_3.jpg */}
        {evaluation ? (
          <View
            style={[
              styles.evaluationSheet,
              {
                backgroundColor: evaluation === 'correct' ? '#DEF7EC' : '#FDE8E8',
                borderTopColor: evaluation === 'correct' ? '#31C48D' : '#F98080',
                paddingBottom: insets.bottom + 16,
              },
            ]}
          >
            <View style={styles.evalTopRow}>
              {evaluation === 'correct' ? (
                <CheckCircle2 size={28} color="#0E9F6E" />
              ) : (
                <XCircle size={28} color="#E02424" />
              )}
              <Text
                style={[
                  styles.evalStatusTitle,
                  { color: evaluation === 'correct' ? '#03543F' : '#9B1C1C' },
                ]}
              >
                {evaluation === 'correct' ? 'Correct!' : 'Incorrect'}
              </Text>
            </View>

            <View style={styles.evalBreakdown}>
              <Text style={styles.evalPrompt}>{currentItem?.prompt}</Text>
              <Text style={styles.evalRomaji}>{currentItem?.romaji}</Text>
              <Text style={styles.evalEnglish}>{currentItem?.english}</Text>
            </View>

            <Pressable
              onPress={handleContinue}
              style={[
                styles.evalContinueBtn,
                { backgroundColor: evaluation === 'correct' ? '#0E9F6E' : '#E02424' },
              ]}
            >
              <Text style={styles.evalContinueText}>CONTINUE</Text>
              <ArrowRight size={20} color="#FFFFFF" />
            </Pressable>
          </View>
        ) : !isCompleted && currentItem ? (
          /* Bottom Check Button Bar */
          <View style={[styles.bottomActionBar, { paddingBottom: insets.bottom + 12, backgroundColor: theme.surface }]}>
            {(() => {
              const hasAnswer = (() => {
                if (currentItem.type === 'spell') {
                  return directInput.trim().length > 0 || assembledTiles.length > 0;
                }
                if (currentItem.type === 'scramble' || currentItem.type === 'dictate') {
                  return assembledTokens.length > 0;
                }
                if (currentItem.type === 'match') {
                  return allMatched;
                }
                if (currentItem.type === 'speak') {
                  return speechRecorded;
                }
                return !!selectedOption;
              })();

              return (
                <Pressable
                  onPress={handleCheck}
                  disabled={!hasAnswer}
                  style={[
                    styles.checkBtn,
                    {
                      backgroundColor: hasAnswer ? '#F59E0B' : theme.border,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.checkBtnText,
                      {
                        color: hasAnswer ? '#FFFFFF' : theme.textMuted,
                      },
                    ]}
                  >
                    CHECK
                  </Text>
                </Pressable>
              );
            })()}
          </View>
        ) : null}
      </View>
  );
}

export function LessonSessionModal({
  visible,
  lesson,
  mode = 'comprehensive',
  onClose,
}: LessonSessionModalProps) {
  if (!visible || !lesson) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <LessonSessionContent
        key={`${lesson.id}-${mode}`}
        lesson={lesson}
        mode={mode}
        onClose={onClose}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    gap: spacing.md,
  },
  exitBtn: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressTrack: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
  questionContent: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.md,
    gap: spacing.lg,
  },
  audioRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
  },
  audioBubble: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  promptCard: {
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1,
    alignItems: 'center',
    gap: spacing.xs,
    ...shadows.sm,
  },
  speakerBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
    marginBottom: 4,
  },
  speakerText: {
    fontSize: 12,
    fontWeight: '700',
  },
  promptJapanese: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
  },
  promptRomaji: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 2,
  },
  promptEnglish: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
  },
  spellingContainer: {
    gap: spacing.lg,
    marginTop: spacing.xs,
  },
  assembledSlot: {
    minHeight: 76,
    borderRadius: radii.xl,
    borderWidth: 2,
    borderStyle: 'dashed',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.md,
    gap: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotPlaceholder: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  tileItem: {
    width: 48,
    height: 48,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  tileText: {
    fontSize: 22,
    fontWeight: '800',
  },
  tileBank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },
  bankTile: {
    width: 52,
    height: 52,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  bankTileText: {
    fontSize: 22,
    fontWeight: '800',
  },
  optionsList: {
    gap: spacing.sm,
  },
  optionCard: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 2,
    ...shadows.sm,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderColor: 'transparent',
  },
  checkBtn: {
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  checkBtnText: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  evaluationSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    borderTopWidth: 3,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.md,
    gap: spacing.sm,
    ...shadows.md,
  },
  evalTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  evalStatusTitle: {
    fontSize: 20,
    fontWeight: '900',
  },
  evalBreakdown: {
    gap: 2,
    marginVertical: 4,
  },
  evalPrompt: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
  },
  evalRomaji: {
    fontSize: 13,
    color: '#4B5563',
  },
  evalEnglish: {
    fontSize: 13,
    color: '#374151',
  },
  evalContinueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  evalContinueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  completeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  completeIconCircle: {
    width: 96,
    height: 96,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  completeTitle: {
    fontSize: 28,
    fontWeight: '900',
  },
  completeSub: {
    fontSize: 15,
    textAlign: 'center',
  },
  xpCard: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  xpValue: {
    fontSize: 32,
    fontWeight: '900',
  },
  xpLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  finishBtn: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishBtnText: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
