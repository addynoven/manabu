import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../../../core/theme';
import { radii, shadows, spacing } from '../../../core/theme';
import { KanaChoiceGrid } from '../../kana/components/KanaChoiceGrid';
import { useVocabByLevelQuery } from '../hooks/useVocabularyQuery';
import { useVocabularyStore } from '../store/useVocabularyStore';
import { generateVocabQuestion } from '../lib/vocabularyGenerator';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useSetProgressStore } from '../../progress/store/useSetProgressStore';
import { BlitzModal } from '../../challenges/components/BlitzModal';
import { GauntletModal } from '../../challenges/components/GauntletModal';
import { VocabSetCard } from '../components/VocabSetCard';
import { VocabSetDictionaryModal } from '../components/VocabSetDictionaryModal';
import { useCrazyModeTrigger } from '../../settings/hooks/useCrazyModeTrigger';
import { useRouter } from 'expo-router';
import type { ChallengeQuestion } from '../../challenges/models/challenge.model';
import type { VocabEntry, VocabLevel, VocabQuestion } from '../models/vocabulary.model';
import { AudioButton } from '../../../core/audio/components/AudioButton';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

const JLPT_LEVELS: VocabLevel[] = ['n5', 'n4', 'n3', 'n2', 'n1'];

export function VocabularyDojoScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { selectedLevel, setSelectedLevel } = useVocabularyStore();
  const { data: vocabList, isLoading } = useVocabByLevelQuery(selectedLevel);
  const { triggerCrazyMode } = useCrazyModeTrigger();

  // Mode: 'sets' vs 'drill'
  const [viewMode, setViewMode] = useState<'sets' | 'drill'>('sets');
  const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);

  // Dictionary modal
  const [dictionarySet, setDictionarySet] = useState<{
    name: string;
    list: VocabEntry[];
  } | null>(null);

  // Set completion celebration
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [sessionResults, setSessionResults] = useState<{
    correct: number;
    total: number;
  }>({ correct: 0, total: 0 });

  const [practiceWeakOnly, setPracticeWeakOnly] = useState(false);
  const mastery = useProgressStore(state => state.mastery);
  const weakVocab = useMemo(() => {
    return Object.values(mastery).filter(
      m => m.category === 'vocab' && m.masteryLevel === 'needs-practice',
    );
  }, [mastery]);
  const weakVocabKeys = useMemo(
    () => new Set(weakVocab.map(w => w.character)),
    [weakVocab],
  );

  // 10-word sets chunking
  const vocabSets = useMemo(() => {
    if (!vocabList || vocabList.length === 0) return [];
    const chunks: VocabEntry[][] = [];
    for (let i = 0; i < vocabList.length; i += 10) {
      chunks.push(vocabList.slice(i, i + 10));
    }
    return chunks;
  }, [vocabList]);

  // Active pool for drilling
  const activePool = useMemo(() => {
    if (!vocabList || vocabList.length === 0) return [];

    if (activeSetIndex !== null && vocabSets[activeSetIndex]) {
      return vocabSets[activeSetIndex];
    }

    if (practiceWeakOnly && weakVocabKeys.size > 0) {
      const filtered = vocabList.filter(v =>
        weakVocabKeys.has(v.kanji || v.kana),
      );
      return filtered.length > 0 ? filtered : vocabList;
    }
    return vocabList;
  }, [vocabList, activeSetIndex, vocabSets, practiceWeakOnly, weakVocabKeys]);

  const [currentQuestion, setCurrentQuestion] = useState<VocabQuestion | null>(
    null,
  );
  const [stats, setStats] = useState({ correct: 0, total: 0, streak: 0 });
  const [setDrillCount, setSetDrillCount] = useState(0);
  const [showBlitz, setShowBlitz] = useState(false);
  const [showGauntlet, setShowGauntlet] = useState(false);

  const generateChallengeQuestion = useCallback((): ChallengeQuestion | null => {
    if (!activePool || activePool.length === 0) return null;
    const q = generateVocabQuestion(activePool);
    return {
      id: q.id,
      prompt: q.prompt,
      promptSub: q.promptReading,
      options: q.options,
      correctAnswer: q.correctAnswer,
      characterKey: q.entry.kanji || q.entry.kana,
      category: 'vocab',
    };
  }, [activePool]);

  const nextQuestion = useCallback(() => {
    if (!activePool || activePool.length === 0) {
      setCurrentQuestion(null);
      return;
    }
    triggerCrazyMode();
    const q = generateVocabQuestion(activePool);
    setCurrentQuestion(q);
  }, [activePool, triggerCrazyMode]);

  useEffect(() => {
    nextQuestion();
  }, [nextQuestion]);

  const { ttsAutoPlay, ttsEnabled, ttsRate, showFuriganaInDrills } = useSettingsStore();

  useEffect(() => {
    if (ttsAutoPlay && ttsEnabled && currentQuestion?.prompt) {
      speakJapanese(currentQuestion.prompt, { rate: ttsRate });
    }
  }, [currentQuestion?.id, ttsAutoPlay, ttsEnabled, ttsRate]);

  const handleAnswer = (selected: string, isCorrect: boolean) => {
    if (currentQuestion) {
      const wordKey = currentQuestion.entry.kanji || currentQuestion.entry.kana;
      useProgressStore
        .getState()
        .recordAnswer(wordKey, isCorrect, 'vocab');
      if (isCorrect) {
        useSetProgressStore.getState().recordVocabProgress(wordKey);
      }
    }

    const nextCorrect = isCorrect ? stats.correct + 1 : stats.correct;
    const nextTotal = stats.total + 1;
    const nextSetCount = setDrillCount + 1;

    setStats(prev => ({
      correct: nextCorrect,
      total: nextTotal,
      streak: isCorrect ? prev.streak + 1 : 0,
    }));
    setSetDrillCount(nextSetCount);

    if (activeSetIndex !== null && nextSetCount >= 10) {
      setSessionResults({
        correct: isCorrect ? sessionResults.correct + 1 : sessionResults.correct,
        total: nextSetCount,
      });
      setTimeout(() => {
        setShowCompletionModal(true);
      }, 300);
      return;
    }

    setSessionResults(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: nextSetCount,
    }));

    setTimeout(() => {
      nextQuestion();
    }, 150);
  };

  const handleStartSetPractice = (index: number) => {
    setActiveSetIndex(index);
    setSetDrillCount(0);
    setSessionResults({ correct: 0, total: 0 });
    setViewMode('drill');
  };

  const handleRestartSet = () => {
    setShowCompletionModal(false);
    setSetDrillCount(0);
    setSessionResults({ correct: 0, total: 0 });
    nextQuestion();
  };

  const handleBackToSets = () => {
    setShowCompletionModal(false);
    setActiveSetIndex(null);
    setViewMode('sets');
  };

  return (
    <View
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
        },
      ]}
    >
      {/* Header Level Selector */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            Vocab Dojo (語彙)
          </Text>
          <View
            style={[styles.streakBadge, { backgroundColor: theme.surfaceSubtle }]}
          >
            <Text style={[styles.streakText, { color: theme.primary }]}>
              🔥 {stats.streak}
            </Text>
          </View>
        </View>

        {/* Level Selector Pills */}
        <View style={styles.levelRow}>
          {JLPT_LEVELS.map(level => {
            const isSelected = selectedLevel === level;
            return (
              <Pressable
                key={level}
                onPress={() => {
                  setSelectedLevel(level);
                  setActiveSetIndex(null);
                }}
                style={[
                  styles.levelButton,
                  {
                    backgroundColor: isSelected ? theme.primary : theme.surfaceSubtle,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.levelText,
                    { color: isSelected ? theme.textOnPrimary : theme.textSecondary },
                  ]}
                >
                  {level.toUpperCase()}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Action Row: Mode Switch & Launchers */}
        <View style={styles.actionRow}>
          <View
            style={[styles.modeToggle, { backgroundColor: theme.surfaceSubtle }]}
          >
            <Pressable
              onPress={() => {
                setViewMode('sets');
                setActiveSetIndex(null);
              }}
              style={[
                styles.modeButton,
                viewMode === 'sets' && [
                  styles.modeButtonActive,
                  { backgroundColor: theme.surface },
                ],
              ]}
            >
              <Text
                style={[
                  styles.modeButtonText,
                  {
                    color:
                      viewMode === 'sets' ? theme.textPrimary : theme.textSecondary,
                  },
                ]}
              >
                📚 Sets ({vocabSets.length})
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setViewMode('drill');
                setActiveSetIndex(null);
              }}
              style={[
                styles.modeButton,
                viewMode === 'drill' && [
                  styles.modeButtonActive,
                  { backgroundColor: theme.surface },
                ],
              ]}
            >
              <Text
                style={[
                  styles.modeButtonText,
                  {
                    color:
                      viewMode === 'drill' ? theme.textPrimary : theme.textSecondary,
                  },
                ]}
              >
                🎲 Quick Drill
              </Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalLaunchers}
          >
            <Pressable
              onPress={() => setShowBlitz(true)}
              style={[
                styles.smallButton,
                { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
              ]}
            >
              <Text style={[styles.smallButtonText, { color: theme.textPrimary }]}>
                ⚡ Blitz
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setShowGauntlet(true)}
              style={[
                styles.smallButton,
                { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
              ]}
            >
              <Text style={[styles.smallButtonText, { color: theme.textPrimary }]}>
                🛡️ Gauntlet
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/cloze')}
              style={[
                styles.smallButton,
                { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
              ]}
            >
              <Text style={[styles.smallButtonText, { color: theme.textPrimary }]}>
                穴 Cloze
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/conjugator')}
              style={[
                styles.smallButton,
                {
                  backgroundColor: theme.primaryLight,
                  borderColor: theme.primary,
                },
              ]}
            >
              <Text
                style={[styles.smallButtonText, { color: theme.primary }]}
              >
                🪓 Conjugator
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/arcade')}
              style={[
                styles.smallButton,
                {
                  backgroundColor: '#10B98118',
                  borderColor: '#10B981',
                },
              ]}
            >
              <Text style={[styles.smallButtonText, { color: '#059669' }]}>
                🎮 Arcade
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>

      {/* Content Area */}
      {viewMode === 'sets' ? (
        <ScrollView
          contentContainerStyle={styles.setsScrollContent}
          showsVerticalScrollIndicator={false}
        >
          {isLoading ? (
            <View style={styles.centerContainer}>
              <ActivityIndicator size="large" color={theme.primary} />
            </View>
          ) : vocabSets.length > 0 ? (
            vocabSets.map((setItems, index) => {
              const words = setItems.map(v => v.kanji || v.kana);
              const stats = useSetProgressStore
                .getState()
                .getVocabSetStats(words);

              return (
                <VocabSetCard
                  key={index}
                  setIndex={index}
                  vocabList={setItems}
                  stats={stats}
                  onPractice={() => handleStartSetPractice(index)}
                  onOpenDictionary={() =>
                    setDictionarySet({
                      name: `${selectedLevel.toUpperCase()} Set ${index + 1}`,
                      list: setItems,
                    })
                  }
                />
              );
            })
          ) : (
            <View style={styles.centerContainer}>
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                No vocab sets found for {selectedLevel.toUpperCase()}.
              </Text>
            </View>
          )}
        </ScrollView>
      ) : (
        /* Drill Mode */
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {activeSetIndex !== null && (
            <View style={styles.setDrillHeader}>
              <Pressable
                onPress={handleBackToSets}
                style={[
                  styles.backToSetsButton,
                  { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.backToSetsText, { color: theme.textPrimary }]}>
                  ← Back to Sets
                </Text>
              </Pressable>
              <Text style={[styles.setDrillProgress, { color: theme.textPrimary }]}>
                Set {activeSetIndex + 1}: {setDrillCount}/10
              </Text>
            </View>
          )}

          {isLoading ? (
            <View style={styles.centerContainer}>
              <ActivityIndicator size="large" color={theme.primary} />
            </View>
          ) : currentQuestion ? (
            <View style={styles.arena}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View style={styles.cardTopRow}>
                  <Text style={[styles.badge, { color: theme.primary }]}>
                    {activeSetIndex !== null
                      ? `SET ${activeSetIndex + 1}`
                      : `${selectedLevel.toUpperCase()} VOCABULARY`}
                  </Text>
                  <AudioButton
                    text={currentQuestion.prompt}
                    size="sm"
                    variant="solid"
                  />
                </View>
                <Text style={[styles.vocabWord, { color: theme.textPrimary }]}>
                  {currentQuestion.prompt}
                </Text>
                {showFuriganaInDrills && currentQuestion.promptReading ? (
                  <Text
                    style={[styles.readingHint, { color: theme.textSecondary }]}
                  >
                    {currentQuestion.promptReading}
                  </Text>
                ) : null}
              </View>

              <KanaChoiceGrid
                options={currentQuestion.options}
                correctAnswer={currentQuestion.correctAnswer}
                onSelect={handleAnswer}
              />
            </View>
          ) : (
            <View style={styles.centerContainer}>
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                Loading vocabulary...
              </Text>
            </View>
          )}
        </ScrollView>
      )}

      {/* Set Dictionary Modal */}
      {dictionarySet && (
        <VocabSetDictionaryModal
          visible={!!dictionarySet}
          setName={dictionarySet.name}
          vocabList={dictionarySet.list}
          onClose={() => setDictionarySet(null)}
        />
      )}

      {/* Set Completion Celebration Modal */}
      <Modal
        visible={showCompletionModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCompletionModal(false)}
      >
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.completionCard,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <Text style={styles.completionEmoji}>🎉</Text>
            <Text style={[styles.completionTitle, { color: theme.textPrimary }]}>
              Set {activeSetIndex !== null ? activeSetIndex + 1 : ''} Complete!
            </Text>
            <Text
              style={[
                styles.completionSubtitle,
                { color: theme.textSecondary },
              ]}
            >
              Score: {sessionResults.correct} / {sessionResults.total} Correct (
              {Math.round(
                (sessionResults.correct / (sessionResults.total || 1)) * 100,
              )}
              %)
            </Text>

            <View style={styles.completionButtons}>
              <Pressable
                onPress={handleRestartSet}
                style={[
                  styles.completionBtnSecondary,
                  { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                ]}
              >
                <Text
                  style={[
                    styles.completionBtnSecondaryText,
                    { color: theme.textPrimary },
                  ]}
                >
                  🔄 Drill Again
                </Text>
              </Pressable>

              <Pressable
                onPress={handleBackToSets}
                style={[
                  styles.completionBtnPrimary,
                  { backgroundColor: theme.primary },
                ]}
              >
                <Text style={[styles.completionBtnPrimaryText, { color: theme.textOnPrimary }]}>
                  📚 Back to Sets
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <BlitzModal
        visible={showBlitz}
        onClose={() => setShowBlitz(false)}
        dojoName="Vocabulary"
        category="vocab"
        questionGenerator={generateChallengeQuestion}
      />

      <GauntletModal
        visible={showGauntlet}
        onClose={() => setShowGauntlet(false)}
        dojoName="Vocabulary"
        category="vocab"
        questionGenerator={generateChallengeQuestion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
    gap: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
  },
  streakBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  streakText: {
    fontSize: 14,
    fontWeight: '700',
  },
  levelRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  levelButton: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  levelText: {
    fontSize: 13,
    fontWeight: '700',
  },
  actionRow: {
    gap: spacing.xs,
  },
  modeToggle: {
    flexDirection: 'row',
    borderRadius: radii.md,
    padding: 3,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: radii.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeButtonActive: {
    ...shadows.sm,
  },
  modeButtonText: {
    fontSize: 12,
    fontWeight: '700',
  },
  horizontalLaunchers: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 2,
  },
  smallButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  smallButtonText: {
    fontSize: 12,
    fontWeight: '700',
  },
  setsScrollContent: {
    padding: spacing.base,
  },
  setDrillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  backToSetsButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  backToSetsText: {
    fontSize: 13,
    fontWeight: '700',
  },
  setDrillProgress: {
    fontSize: 14,
    fontWeight: '700',
  },
  content: {
    flexGrow: 1,
    padding: spacing.base,
    justifyContent: 'center',
  },
  arena: {
    gap: spacing.lg,
  },
  card: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    ...shadows.md,
  },
  cardTopRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  vocabWord: {
    fontSize: 54,
    fontWeight: '900',
    marginVertical: spacing.md,
    textAlign: 'center',
  },
  readingHint: {
    fontSize: 18,
    fontWeight: '500',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 15,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  completionCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1.5,
    ...shadows.md,
  },
  completionEmoji: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  completionTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  completionSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  completionButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
    width: '100%',
  },
  completionBtnSecondary: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: radii.lg,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completionBtnSecondaryText: {
    fontSize: 13,
    fontWeight: '700',
  },
  completionBtnPrimary: {
    flex: 1.2,
    paddingVertical: 12,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completionBtnPrimaryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
