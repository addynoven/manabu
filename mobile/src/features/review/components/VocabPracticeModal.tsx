import React, { useState, useEffect } from 'react';
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
  Sparkles,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import { useProgressStore } from '../../progress/store/useProgressStore';
import type { VocabWord } from '../services/vocabBank.service';

interface VocabPracticeModalProps {
  visible: boolean;
  onClose: () => void;
  words: VocabWord[];
  title?: string;
}

function VocabPracticeContent({
  onClose,
  words,
  title = 'Vocabulary Practice',
}: {
  onClose: () => void;
  words: VocabWord[];
  title?: string;
}) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const recordAnswer = useProgressStore(state => state.recordAnswer);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<'correct' | 'incorrect' | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentWord = words[currentIndex];

  // Prepare shuffled options for current word
  const [options] = useState<string[][]>(() => {
    return words.map(w => {
      const all = [...w.distractors, w.english];
      return all.sort(() => Math.random() - 0.5);
    });
  });

  const currentOptions = options[currentIndex] || [];

  const handlePlayAudio = async (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(text, { rate: 0.85 });
  };

  // Auto-play audio as soon as question appears
  useEffect(() => {
    if (currentWord && !evaluation && !isFinished) {
      const textToSpeak = currentWord.audioText || currentWord.japanese;
      const timer = setTimeout(() => {
        speakJapanese(textToSpeak, { rate: 0.9 }).catch(() => {});
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentWord, evaluation, isFinished]);

  const handleSelectOption = (opt: string) => {
    if (evaluation !== null || !currentWord) return;

    setSelectedOption(opt);
    const isCorrect = opt === currentWord.english;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setEvaluation('correct');
      setCorrectCount(c => c + 1);
      recordAnswer(currentWord.japanese, true, 'vocab');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setEvaluation('incorrect');
      recordAnswer(currentWord.japanese, false, 'vocab');
    }

    handlePlayAudio(currentWord.audioText).catch(() => {});
  };

  const handleContinue = () => {
    if (currentIndex + 1 >= words.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setEvaluation(null);
    }
  };

  const progressPercent = words.length > 0 ? ((currentIndex + 1) / words.length) * 100 : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
          onPress={onClose}
          hitSlop={8}
          accessibilityLabel="Close practice"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>{title}</Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
            {words.length > 0 ? `Word ${currentIndex + 1} of ${words.length}` : 'Loading...'}
          </Text>
        </View>

        <View style={{ width: 36 }} />
      </View>

      {/* Progress Track */}
      <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle }]}>
        <View
          style={[
            styles.progressFill,
            { width: `${progressPercent}%`, backgroundColor: theme.primary },
          ]}
        />
      </View>

      {isFinished ? (
        /* Victory Screen */
        <ScrollView
          contentContainerStyle={styles.finishedContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={[styles.trophyBox, { backgroundColor: theme.primary + '20' }]}>
            <Sparkles size={48} color={theme.primary} />
          </View>

          <Text style={[styles.finishedTitle, { color: theme.textPrimary }]}>Practice Complete!</Text>
          <Text style={[styles.finishedSub, { color: theme.textSecondary }]}>
            Great job reviewing your vocabulary and phrases.
          </Text>

          <View style={[styles.scoreCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.statBox}>
              <Text style={[styles.statNum, { color: theme.primary }]}>{words.length}</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>Words Practiced</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.statNum, { color: theme.success }]}>
                {words.length > 0 ? Math.round((correctCount / words.length) * 100) : 0}%
              </Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>Accuracy</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.statNum, { color: '#F59E0B' }]}>+{correctCount * 10}</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>XP Gained</Text>
            </View>
          </View>

          <Pressable
            style={[styles.finishBtn, { backgroundColor: theme.primary }]}
            onPress={onClose}
            accessibilityLabel="Done"
          >
            <Text style={[styles.finishBtnText, { color: theme.textOnPrimary }]}>
              BACK TO VOCABULARY BANK
            </Text>
          </Pressable>
        </ScrollView>
      ) : !currentWord ? (
        <View style={styles.emptyBox}>
          <Text style={{ color: theme.textSecondary }}>No words queued for practice.</Text>
        </View>
      ) : (
        /* Question Card */
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          {/* Unit Badge */}
          <View style={styles.unitBadgeRow}>
            <Text style={[styles.unitBadgeText, { color: theme.primary }]}>
              UNIT {currentWord.unitNumber} • {currentWord.unitTitle.toUpperCase()}
            </Text>
          </View>

          {/* Word Card */}
          <View style={[styles.wordCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Pressable
              style={[styles.audioPill, { backgroundColor: theme.surfaceSubtle }]}
              onPress={() => handlePlayAudio(currentWord.audioText)}
              accessibilityLabel="Listen to word"
            >
              <Volume2 size={22} color={theme.primary} />
            </Pressable>

            <CopyableJapaneseText text={currentWord.japanese}>
              <Text style={[styles.jpWord, { color: theme.textPrimary }]}>
                {currentWord.japanese}
              </Text>
            </CopyableJapaneseText>
            {currentWord.reading && currentWord.reading !== currentWord.japanese && (
              <Text style={[styles.furigana, { color: theme.textSecondary }]}>
                {currentWord.reading}
              </Text>
            )}
          </View>

          {/* Meaning Prompt & Options */}
          <View style={styles.optionsWrap}>
            <Text style={[styles.optionsHeader, { color: theme.textSecondary }]}>
              SELECT THE ENGLISH MEANING:
            </Text>

            {currentOptions.map((opt, idx) => {
              const isSelected = selectedOption === opt;
              const isCorrect = opt === currentWord.english;

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
                  key={`${opt}_${idx}`}
                  style={[styles.optionCard, { backgroundColor: optBg, borderColor: optBorder }]}
                  onPress={() => handleSelectOption(opt)}
                  disabled={evaluation !== null}
                  accessibilityLabel={`Option: ${opt}`}
                >
                  <Text style={[styles.optionText, { color: optText }]}>{opt}</Text>
                  {evaluation !== null && isCorrect && <CheckCircle2 size={20} color="#10B981" />}
                  {evaluation !== null && isSelected && !isCorrect && (
                    <XCircle size={20} color="#EF4444" />
                  )}
                </Pressable>
              );
            })}
          </View>

          {/* Feedback & Continue */}
          {evaluation !== null && (
            <View
              style={[
                styles.feedbackBar,
                { backgroundColor: evaluation === 'correct' ? '#10B98115' : '#EF444415' },
              ]}
            >
              <View style={styles.feedbackLeft}>
                {evaluation === 'correct' ? (
                  <CheckCircle2 size={24} color="#10B981" />
                ) : (
                  <XCircle size={24} color="#EF4444" />
                )}
                <View style={{ marginLeft: 12 }}>
                  <Text
                    style={[
                      styles.feedbackTitle,
                      { color: evaluation === 'correct' ? '#10B981' : '#EF4444' },
                    ]}
                  >
                    {evaluation === 'correct' ? 'Correct!' : 'Keep practicing!'}
                  </Text>
                  <Text style={[styles.feedbackSub, { color: theme.textSecondary }]}>
                    {currentWord.english}
                  </Text>
                </View>
              </View>

              <Pressable
                style={[
                  styles.continueBtn,
                  { backgroundColor: evaluation === 'correct' ? '#10B981' : '#EF4444' },
                ]}
                onPress={handleContinue}
                accessibilityLabel="Continue"
              >
                <Text style={styles.continueBtnText}>CONTINUE</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}

export function VocabPracticeModal({
  visible,
  onClose,
  words,
  title,
}: VocabPracticeModalProps) {
  return (
    <Modal visible={visible && words.length > 0} animationType="slide" transparent={false} onRequestClose={onClose}>
      {visible && words.length > 0 ? (
        <VocabPracticeContent onClose={onClose} words={words} title={title} />
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
  closeBtn: {
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
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  progressTrack: {
    height: 4,
    width: '100%',
  },
  progressFill: {
    height: '100%',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  unitBadgeRow: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  unitBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  wordCard: {
    width: '100%',
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
    position: 'relative',
    ...shadows.sm,
  },
  audioPill: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jpWord: {
    fontSize: 38,
    fontWeight: '900',
    textAlign: 'center',
    marginVertical: 8,
  },
  furigana: {
    fontSize: 18,
    fontWeight: '600',
  },
  optionsWrap: {
    width: '100%',
    marginTop: 24,
  },
  optionsHeader: {
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
  feedbackBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: radii.lg,
    marginTop: 16,
  },
  feedbackLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  continueBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: radii.md,
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  finishedContainer: {
    padding: 24,
    alignItems: 'center',
  },
  trophyBox: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 20,
  },
  finishedTitle: {
    fontSize: 26,
    fontWeight: '900',
  },
  finishedSub: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
  },
  scoreCard: {
    width: '100%',
    borderRadius: radii.xl,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 24,
    ...shadows.sm,
  },
  statBox: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 26,
    fontWeight: '900',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
  },
  finishBtn: {
    width: '100%',
    height: 52,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  finishBtnText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
