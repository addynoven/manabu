import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface ClozeQuestion {
  id: string;
  sentenceWithBlank: string;
  fullSentence: string;
  english: string;
  correctParticle: string;
  options: string[];
  explanation: string;
}

const CLOZE_QUESTIONS: ClozeQuestion[] = [
  {
    id: 'c1',
    sentenceWithBlank: '私 [ __ ] 学生です。',
    fullSentence: '私は学生です。',
    english: 'I am a student.',
    correctParticle: 'は',
    options: ['は', 'が', 'を', 'に'],
    explanation: '「は」 (wa) is the topic marker particle, indicating "As for me, I am a student".',
  },
  {
    id: 'c2',
    sentenceWithBlank: '本 [ __ ] 読みます。',
    fullSentence: '本を読みます。',
    english: 'I read a book.',
    correctParticle: 'を',
    options: ['を', 'は', 'に', 'で'],
    explanation: '「を」 (o/wo) marks the direct object of an action verb (reading a book).',
  },
  {
    id: 'c3',
    sentenceWithBlank: '学校 [ __ ] 行きます。',
    fullSentence: '学校に行きます。',
    english: 'I go to school.',
    correctParticle: 'に',
    options: ['に', 'を', 'で', 'は'],
    explanation: '「に」 (ni) indicates direction or destination when moving toward a place.',
  },
  {
    id: 'c4',
    sentenceWithBlank: '図書館 [ __ ] 勉強します。',
    fullSentence: '図書館で勉強します。',
    english: 'I study at the library.',
    correctParticle: 'で',
    options: ['で', 'に', 'を', 'へ'],
    explanation: '「で」 (de) indicates the physical location where an active event takes place.',
  },
  {
    id: 'c5',
    sentenceWithBlank: '友達 [ __ ] 話します。',
    fullSentence: '友達と話します。',
    english: 'I talk with my friend.',
    correctParticle: 'と',
    options: ['と', 'に', 'を', 'は'],
    explanation: '「と」 (to) indicates "with" or "together with" a companion.',
  },
];

export function ClozeDojoScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { ttsEnabled, ttsRate } = useSettingsStore();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQ = CLOZE_QUESTIONS[currentIdx % CLOZE_QUESTIONS.length];
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === currentQ.correctParticle;

  // Auto-play sentence on question reveal
  useEffect(() => {
    if (ttsEnabled && currentQ && !isAnswered) {
      const textToSpeak = currentQ.fullSentence;
      const timer = setTimeout(() => {
        speakJapanese(textToSpeak, { rate: ttsRate }).catch(() => {});
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentIdx, isAnswered, ttsEnabled, ttsRate]);

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);

    if (opt === currentQ.correctParticle) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setScore(s => s + 1);
      if (ttsEnabled) {
        speakJapanese(currentQ.fullSentence).catch(() => {});
      }
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentIdx(prev => prev + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { backgroundColor: theme.surfaceSubtle }]}
        >
          <ArrowLeft size={20} color={theme.textPrimary} />
        </Pressable>
        <View style={styles.titleCol}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            穴埋め道場 • Cloze Grammar
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Master particles in contextual Japanese sentences
          </Text>
        </View>
        <View style={styles.scorePill}>
          <Text style={[styles.scoreText, { color: theme.primary }]}>⭐ {score}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={[styles.questionCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Text style={[styles.sentence, { color: theme.textPrimary }]}>
            {isAnswered ? currentQ.fullSentence : currentQ.sentenceWithBlank}
          </Text>
          <Text style={[styles.english, { color: theme.textSecondary }]}>
            {currentQ.english}
          </Text>
        </View>

        {/* Options Grid */}
        <View style={styles.optionsGrid}>
          {currentQ.options.map(opt => {
            const isSelected = selectedOption === opt;
            const isTarget = opt === currentQ.correctParticle;

            let bg = theme.surface;
            let border = theme.border;
            let textCol = theme.textPrimary;

            if (isAnswered) {
              if (isTarget) {
                bg = theme.success;
                border = theme.success;
                textCol = '#FFFFFF';
              } else if (isSelected) {
                bg = theme.error;
                border = theme.error;
                textCol = '#FFFFFF';
              }
            }

            return (
              <Pressable
                key={opt}
                onPress={() => handleSelectOption(opt)}
                style={[styles.optionCard, { backgroundColor: bg, borderColor: border }]}
              >
                <Text style={[styles.optionText, { color: textCol }]}>{opt}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Explanation Card */}
        {isAnswered && (
          <View style={[styles.explainCard, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
            <View style={styles.explainHeader}>
              {isCorrect ? (
                <CheckCircle2 size={20} color={theme.success} />
              ) : (
                <XCircle size={20} color={theme.error} />
              )}
              <Text style={[styles.explainTitle, { color: isCorrect ? theme.success : theme.error }]}>
                {isCorrect ? 'Correct Particle!' : `Incorrect (Answer: ${currentQ.correctParticle})`}
              </Text>
            </View>
            <Text style={[styles.explainBody, { color: theme.textSecondary }]}>
              {currentQ.explanation}
            </Text>

            <Pressable
              onPress={handleNext}
              style={[styles.nextButton, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.nextButtonText}>Next Sentence →</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    gap: spacing.md,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCol: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  scorePill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(99,102,241,0.1)',
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '800',
  },
  content: {
    padding: spacing.base,
    gap: spacing.lg,
  },
  questionCard: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    borderWidth: 1,
    alignItems: 'center',
    gap: spacing.sm,
    ...shadows.sm,
  },
  sentence: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  english: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  optionCard: {
    width: '47%',
    height: 64,
    borderRadius: radii.lg,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  optionText: {
    fontSize: 24,
    fontWeight: '800',
  },
  explainCard: {
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1,
    gap: spacing.md,
  },
  explainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  explainTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  explainBody: {
    fontSize: 14,
    lineHeight: 20,
  },
  nextButton: {
    height: 48,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
