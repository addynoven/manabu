import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AudioButton } from "../../../core/audio/components/AudioButton";
import { speakJapanese } from "../../../core/audio/tts";
import { radii, shadows, spacing, useAppTheme } from "../../../core/theme";
import { BlitzModal } from "../../challenges/components/BlitzModal";
import { GauntletModal } from "../../challenges/components/GauntletModal";
import type { ChallengeQuestion } from "../../challenges/models/challenge.model";
import { KanaChoiceGrid } from "../../kana/components/KanaChoiceGrid";
import { useProgressStore } from "../../progress/store/useProgressStore";
import { useSetProgressStore } from "../../progress/store/useSetProgressStore";
import { useCrazyModeTrigger } from "../../settings/hooks/useCrazyModeTrigger";
import { useSettingsStore } from "../../settings/store/useSettingsStore";
import { KanjiSetCard } from "../components/KanjiSetCard";
import { KanjiSetDictionaryModal } from "../components/KanjiSetDictionaryModal";
import { useKanjiByLevelQuery } from "../hooks/useKanjiQuery";
import { generateKanjiQuestion } from "../lib/kanjiGenerator";
import type {
  KanjiEntry,
  KanjiLevel,
  KanjiQuestion,
} from "../models/kanji.model";
import { useKanjiStore } from "../store/useKanjiStore";

const JLPT_LEVELS: KanjiLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export function KanjiDojoScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { selectedLevel, setSelectedLevel } = useKanjiStore();
  const { data: kanjiList, isLoading } = useKanjiByLevelQuery(selectedLevel);
  const { triggerCrazyMode } = useCrazyModeTrigger();

  // Mode: 'sets' (browse 10-kanji sets) vs 'drill' (active flashcard practice)
  const [viewMode, setViewMode] = useState<"sets" | "drill">("sets");
  const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);

  // Dictionary modal
  const [dictionarySet, setDictionarySet] = useState<{
    name: string;
    list: KanjiEntry[];
  } | null>(null);

  // Set completion celebration
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [sessionResults, setSessionResults] = useState<{
    correct: number;
    total: number;
  }>({ correct: 0, total: 0 });

  const [practiceWeakOnly, setPracticeWeakOnly] = useState(false);
  const mastery = useProgressStore((state) => state.mastery);
  const weakKanji = useMemo(() => {
    return Object.values(mastery).filter(
      (m) => m.category === "kanji" && m.masteryLevel === "needs-practice",
    );
  }, [mastery]);
  const weakKanjiKeys = useMemo(
    () => new Set(weakKanji.map((w) => w.character)),
    [weakKanji],
  );

  // 10-kanji sets chunking
  const kanjiSets = useMemo(() => {
    if (!kanjiList || kanjiList.length === 0) return [];
    const chunks: KanjiEntry[][] = [];
    for (let i = 0; i < kanjiList.length; i += 10) {
      chunks.push(kanjiList.slice(i, i + 10));
    }
    return chunks;
  }, [kanjiList]);

  // Active pool for drilling
  const activePool = useMemo(() => {
    if (!kanjiList || kanjiList.length === 0) return [];

    // If drilling a specific set
    if (activeSetIndex !== null && kanjiSets[activeSetIndex]) {
      return kanjiSets[activeSetIndex];
    }

    if (practiceWeakOnly && weakKanjiKeys.size > 0) {
      const filtered = kanjiList.filter((k) => weakKanjiKeys.has(k.kanjiChar));
      return filtered.length > 0 ? filtered : kanjiList;
    }
    return kanjiList;
  }, [kanjiList, activeSetIndex, kanjiSets, practiceWeakOnly, weakKanjiKeys]);

  const [currentQuestion, setCurrentQuestion] = useState<KanjiQuestion | null>(
    null,
  );
  const [stats, setStats] = useState({ correct: 0, total: 0, streak: 0 });
  const [setDrillCount, setSetDrillCount] = useState(0);
  const [showBlitz, setShowBlitz] = useState(false);
  const [showGauntlet, setShowGauntlet] = useState(false);

  const generateChallengeQuestion =
    useCallback((): ChallengeQuestion | null => {
      if (!activePool || activePool.length === 0) return null;
      const q = generateKanjiQuestion(activePool);
      return {
        id: q.id,
        prompt: q.prompt,
        promptSub: q.promptSub,
        options: q.options,
        correctAnswer: q.correctAnswer,
        characterKey: q.prompt,
        category: "kanji",
      };
    }, [activePool]);

  const nextQuestion = useCallback(() => {
    if (!activePool || activePool.length === 0) {
      setCurrentQuestion(null);
      return;
    }
    triggerCrazyMode();
    const q = generateKanjiQuestion(activePool);
    setCurrentQuestion(q);
  }, [activePool, triggerCrazyMode]);

  useEffect(() => {
    nextQuestion();
  }, [nextQuestion]);

  const { ttsAutoPlay, ttsEnabled, ttsRate } = useSettingsStore();

  useEffect(() => {
    if (ttsAutoPlay && ttsEnabled && currentQuestion?.ttsText) {
      speakJapanese(currentQuestion.ttsText, { rate: ttsRate });
    }
  }, [currentQuestion?.id, ttsAutoPlay, ttsEnabled, ttsRate]);

  const handleAnswer = (selected: string, isCorrect: boolean) => {
    if (currentQuestion) {
      useProgressStore
        .getState()
        .recordAnswer(currentQuestion.prompt, isCorrect, "kanji");
      if (isCorrect) {
        useSetProgressStore
          .getState()
          .recordKanjiProgress(currentQuestion.prompt);
      }
    }

    const nextCorrect = isCorrect ? stats.correct + 1 : stats.correct;
    const nextTotal = stats.total + 1;
    const nextSetCount = setDrillCount + 1;

    setStats((prev) => ({
      correct: nextCorrect,
      total: nextTotal,
      streak: isCorrect ? prev.streak + 1 : 0,
    }));
    setSetDrillCount(nextSetCount);

    // If drilling a 10-item set and completed 10 questions
    if (activeSetIndex !== null && nextSetCount >= 10) {
      setSessionResults({
        correct: isCorrect
          ? sessionResults.correct + 1
          : sessionResults.correct,
        total: nextSetCount,
      });
      setTimeout(() => {
        setShowCompletionModal(true);
      }, 300);
      return;
    }

    setSessionResults((prev) => ({
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
    setViewMode("drill");
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
    setViewMode("sets");
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
            Kanji Dojo (漢字)
          </Text>
          <View
            style={[
              styles.streakBadge,
              { backgroundColor: theme.surfaceSubtle },
            ]}
          >
            <Text style={[styles.streakText, { color: theme.primary }]}>
              🔥 {stats.streak}
            </Text>
          </View>
        </View>

        {/* Level Selector Pills */}
        <View style={styles.levelRow}>
          {JLPT_LEVELS.map((level) => {
            const isSelected = selectedLevel === level;
            return (
              <TouchableOpacity
                key={level}
                onPress={() => {
                  setSelectedLevel(level);
                  setActiveSetIndex(null);
                }}
                style={[
                  styles.levelButton,
                  {
                    backgroundColor: isSelected
                      ? theme.primary
                      : theme.surfaceSubtle,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.levelText,
                    {
                      color: isSelected
                        ? theme.textOnPrimary
                        : theme.textSecondary,
                    },
                  ]}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* View Mode Toggle: [📚 Sets] vs [🎲 Quick Drill] */}
        <View style={styles.modeRow}>
          <View
            style={[
              styles.modeToggle,
              { backgroundColor: theme.surfaceSubtle },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setViewMode("sets");
                setActiveSetIndex(null);
              }}
              style={[
                styles.modeButton,
                viewMode === "sets" && [
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
                      viewMode === "sets"
                        ? theme.textPrimary
                        : theme.textSecondary,
                  },
                ]}
              >
                📚 Sets ({kanjiSets.length})
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setViewMode("drill");
                setActiveSetIndex(null);
              }}
              style={[
                styles.modeButton,
                viewMode === "drill" && [
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
                      viewMode === "drill"
                        ? theme.textPrimary
                        : theme.textSecondary,
                  },
                ]}
              >
                🎲 Quick Drill
              </Text>
            </TouchableOpacity>
          </View>

          {/* Challenges Strip */}
          <View style={styles.challengeGroup}>
            <TouchableOpacity
              onPress={() => setShowBlitz(true)}
              style={[
                styles.challengeButton,
                {
                  backgroundColor: theme.surfaceSubtle,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.challengeButtonText,
                  { color: theme.textPrimary },
                ]}
              >
                ⚡ Blitz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowGauntlet(true)}
              style={[
                styles.challengeButton,
                {
                  backgroundColor: theme.surfaceSubtle,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.challengeButtonText,
                  { color: theme.textPrimary },
                ]}
              >
                🛡️ Gauntlet
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Content Area */}
      {viewMode === "sets" ? (
        <ScrollView
          contentContainerStyle={styles.setsScrollContent}
          showsVerticalScrollIndicator={false}
        >
          {isLoading ? (
            <View style={styles.centerContainer}>
              <ActivityIndicator size="large" color={theme.primary} />
            </View>
          ) : kanjiSets.length > 0 ? (
            kanjiSets.map((setItems, index) => {
              const chars = setItems.map((k) => k.kanjiChar);
              const stats = useSetProgressStore
                .getState()
                .getKanjiSetStats(chars);

              return (
                <KanjiSetCard
                  key={index}
                  setIndex={index}
                  kanjiList={setItems}
                  stats={stats}
                  onPractice={() => handleStartSetPractice(index)}
                  onOpenDictionary={() =>
                    setDictionarySet({
                      name: `${selectedLevel} Set ${index + 1}`,
                      list: setItems,
                    })
                  }
                />
              );
            })
          ) : (
            <View style={styles.centerContainer}>
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                No kanji sets found for {selectedLevel}.
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
          {/* Active Set indicator with back button */}
          {activeSetIndex !== null && (
            <View style={styles.setDrillHeader}>
              <TouchableOpacity
                onPress={handleBackToSets}
                style={[
                  styles.backToSetsButton,
                  {
                    backgroundColor: theme.surfaceSubtle,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  style={[styles.backToSetsText, { color: theme.textPrimary }]}
                >
                  ← Back to Sets
                </Text>
              </TouchableOpacity>
              <Text
                style={[styles.setDrillProgress, { color: theme.textPrimary }]}
              >
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
                      : `${selectedLevel} KANJI`}
                  </Text>
                  <AudioButton
                    text={currentQuestion.ttsText}
                    size="sm"
                    variant="solid"
                  />
                </View>
                <Text style={[styles.kanjiChar, { color: theme.textPrimary }]}>
                  {currentQuestion.prompt}
                </Text>
                <Text
                  style={[styles.readingHint, { color: theme.textSecondary }]}
                >
                  {currentQuestion.promptSub}
                </Text>
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
                Loading kanji list...
              </Text>
            </View>
          )}
        </ScrollView>
      )}

      {/* Set Dictionary Modal */}
      {dictionarySet && (
        <KanjiSetDictionaryModal
          visible={!!dictionarySet}
          setName={dictionarySet.name}
          kanjiList={dictionarySet.list}
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
            <Text
              style={[styles.completionTitle, { color: theme.textPrimary }]}
            >
              Set {activeSetIndex !== null ? activeSetIndex + 1 : ""} Complete!
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
              <TouchableOpacity
                onPress={handleRestartSet}
                style={[
                  styles.completionBtnSecondary,
                  {
                    backgroundColor: theme.surfaceSubtle,
                    borderColor: theme.border,
                  },
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
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleBackToSets}
                style={[
                  styles.completionBtnPrimary,
                  { backgroundColor: theme.primary },
                ]}
              >
                <Text
                  style={[
                    styles.completionBtnPrimaryText,
                    { color: theme.textOnPrimary },
                  ]}
                >
                  📚 Back to Sets
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <BlitzModal
        visible={showBlitz}
        onClose={() => setShowBlitz(false)}
        dojoName="Kanji"
        category="kanji"
        questionGenerator={generateChallengeQuestion}
      />

      <GauntletModal
        visible={showGauntlet}
        onClose={() => setShowGauntlet(false)}
        dojoName="Kanji"
        category="kanji"
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
  },
  streakBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  streakText: {
    fontSize: 14,
    fontWeight: "700",
  },
  levelRow: {
    flexDirection: "row",
    gap: spacing.xs,
  },
  levelButton: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: radii.md,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  levelText: {
    fontSize: 13,
    fontWeight: "700",
  },
  modeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.sm,
  },
  modeToggle: {
    flexDirection: "row",
    borderRadius: radii.md,
    padding: 3,
    flex: 1,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: radii.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  modeButtonActive: {
    ...shadows.sm,
  },
  modeButtonText: {
    fontSize: 12,
    fontWeight: "700",
  },
  challengeGroup: {
    flexDirection: "row",
    gap: 6,
  },
  challengeButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  challengeButtonText: {
    fontSize: 12,
    fontWeight: "700",
  },
  setsScrollContent: {
    padding: spacing.base,
  },
  setDrillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontWeight: "700",
  },
  setDrillProgress: {
    fontSize: 14,
    fontWeight: "700",
  },
  content: {
    flexGrow: 1,
    padding: spacing.base,
    justifyContent: "center",
  },
  arena: {
    gap: spacing.lg,
  },
  card: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    ...shadows.md,
  },
  cardTopRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  kanjiChar: {
    fontSize: 84,
    fontWeight: "900",
    marginVertical: spacing.md,
  },
  readingHint: {
    fontSize: 16,
    fontWeight: "500",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 15,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  completionCard: {
    width: "100%",
    maxWidth: 340,
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1.5,
    ...shadows.md,
  },
  completionEmoji: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  completionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: spacing.xs,
  },
  completionSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: spacing.lg,
    textAlign: "center",
  },
  completionButtons: {
    flexDirection: "row",
    gap: spacing.sm,
    width: "100%",
  },
  completionBtnSecondary: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: radii.lg,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  completionBtnSecondaryText: {
    fontSize: 13,
    fontWeight: "700",
  },
  completionBtnPrimary: {
    flex: 1.2,
    paddingVertical: 12,
    borderRadius: radii.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  completionBtnPrimaryText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});
