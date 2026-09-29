import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, typography, useAppTheme } from '../../../core/theme';
import { Button } from '../../../core/components/Button';
import { useKanaGroupsQuery } from '../hooks/useKanaQuery';
import { useKanaStore } from '../store/useKanaStore';
import {
  flattenGroups,
  generateKanaQuestion,
} from '../lib/kanaGenerator';
import { isKanaAnswerCorrect } from '../lib/kanaChecker';
import * as wanakana from 'wanakana';
import { KanaChoiceGrid } from '../components/KanaChoiceGrid';
import { KanaGroupSelector } from '../components/KanaGroupSelector';
import { BlitzModal } from '../../challenges/components/BlitzModal';
import { GauntletModal } from '../../challenges/components/GauntletModal';
import type { ChallengeQuestion } from '../../challenges/models/challenge.model';
import { useProgressStore } from '../../progress/store/useProgressStore';
import type { KanaGameMode, KanaQuestion } from '../models/kana.model';
import { AudioButton } from '../../../core/audio/components/AudioButton';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { useRouter } from 'expo-router';

interface KanaDojoScreenProps {
  onSessionFinish?: (correct: number, total: number) => void;
}

export function KanaDojoScreen({ onSessionFinish }: KanaDojoScreenProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { data: groups, isLoading } = useKanaGroupsQuery();

  const {
    selectedGroupIds,
    toggleGroupId,
    setGroupIds,
    selectAllForScript,
    gameMode,
    setGameMode,
    activeScript,
    setActiveScript,
  } = useKanaStore();

  const [currentQuestion, setCurrentQuestion] = useState<KanaQuestion | null>(
    null,
  );
  const [typedInput, setTypedInput] = useState('');
  const [liveTransliteration, setLiveTransliteration] = useState(true);
  const [inputFeedback, setInputFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [stats, setStats] = useState({ correct: 0, total: 0, streak: 0 });
  const [showBlitz, setShowBlitz] = useState(false);
  const [showGauntlet, setShowGauntlet] = useState(false);

  const handleTextInputChange = useCallback(
    (text: string) => {
      if (liveTransliteration) {
        const converted =
          activeScript === 'katakana'
            ? wanakana.toKatakana(text, { IMEMode: true })
            : wanakana.toHiragana(text, { IMEMode: true });
        setTypedInput(converted);
      } else {
        setTypedInput(text);
      }
    },
    [liveTransliteration, activeScript],
  );

  // Filter groups according to active script
  const scriptGroups = useMemo(() => {
    if (!groups) return [];
    return groups.filter(g => g.script === activeScript);
  }, [groups, activeScript]);

  // Selected character pool
  const characterPool = useMemo(() => {
    if (!groups) return [];
    const activeGroups = groups.filter(
      g => g.script === activeScript && selectedGroupIds.includes(g.id),
    );
    return flattenGroups(activeGroups);
  }, [groups, activeScript, selectedGroupIds]);

  const generateChallengeQuestion = useCallback((): ChallengeQuestion | null => {
    if (characterPool.length === 0) return null;
    const q = generateKanaQuestion(characterPool, 'pick');
    if (!q.options) return null;
    return {
      id: q.id,
      prompt: q.prompt,
      promptSub: q.promptSub,
      options: q.options,
      correctAnswer: q.correctAnswer,
      characterKey: q.target.kana,
      category: 'kana',
    };
  }, [characterPool]);

  const mastery = useProgressStore(state => state.mastery);

  // Find all groups in the current script that have weak characters
  const weakKanaList = useMemo(() => {
    return Object.values(mastery).filter(
      m => m.category === 'kana' && m.masteryLevel === 'needs-practice',
    );
  }, [mastery]);

  const handlePracticeWeaknesses = useCallback(() => {
    if (!groups) return;
    const weakChars = new Set(weakKanaList.map(w => w.character));
    // Find all group IDs containing at least one weak kana
    const weakGroupIds = scriptGroups
      .filter(g => g.kana.some(k => weakChars.has(k)))
      .map(g => g.id);

    if (weakGroupIds.length > 0) {
      setGroupIds(weakGroupIds);
    }
  }, [groups, weakKanaList, scriptGroups, setGroupIds]);

  useEffect(() => {
    if (scriptGroups.length > 0 && characterPool.length === 0) {
      setGroupIds(
        [scriptGroups[0]?.id, scriptGroups[1]?.id, scriptGroups[2]?.id].filter(
          (id): id is number => typeof id === 'number',
        ),
      );
    }
  }, [scriptGroups, characterPool.length, setGroupIds]);

  // Load next question
  const nextQuestion = useCallback(() => {
    if (characterPool.length === 0) {
      setCurrentQuestion(null);
      return;
    }
    const q = generateKanaQuestion(characterPool, gameMode);
    setCurrentQuestion(q);
    setTypedInput('');
    setInputFeedback('idle');
  }, [characterPool, gameMode]);

  useEffect(() => {
    nextQuestion();
  }, [nextQuestion]);

  const { ttsAutoPlay, ttsEnabled, ttsRate } = useSettingsStore();

  useEffect(() => {
    if (ttsAutoPlay && ttsEnabled && currentQuestion?.target?.kana) {
      speakJapanese(currentQuestion.target.kana, { rate: ttsRate });
    }
  }, [currentQuestion?.id, ttsAutoPlay, ttsEnabled, ttsRate]);

  const handlePickAnswer = (selected: string, isCorrect: boolean) => {
    if (currentQuestion) {
      useProgressStore
        .getState()
        .recordAnswer(currentQuestion.target.kana, isCorrect, 'kana');
    }

    setStats(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
      streak: isCorrect ? prev.streak + 1 : 0,
    }));

    setTimeout(() => {
      nextQuestion();
    }, 150);
  };

  const handleInputSubmit = () => {
    if (!currentQuestion || !typedInput.trim()) return;

    const isCorrect = isKanaAnswerCorrect(
      currentQuestion.target,
      typedInput,
      gameMode === 'reverse-input',
    );

    useProgressStore
      .getState()
      .recordAnswer(currentQuestion.target.kana, isCorrect, 'kana');

    if (isCorrect) {
      setInputFeedback('correct');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setStats(prev => ({
        correct: prev.correct + 1,
        total: prev.total + 1,
        streak: prev.streak + 1,
      }));
      setTimeout(() => {
        nextQuestion();
      }, 500);
    } else {
      setInputFeedback('wrong');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setStats(prev => ({
        ...prev,
        total: prev.total + 1,
        streak: 0,
      }));
      setTimeout(() => {
        setInputFeedback('idle');
      }, 800);
    }
  };

  const handleSelectAll = () => {
    selectAllForScript(scriptGroups.map(g => g.id));
  };

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.safeArea,
        { backgroundColor: theme.background, paddingTop: insets.top },
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        {/* Header Tabs: Hiragana vs Katakana */}
        <View style={styles.scriptToggleRow}>
          <Pressable
            onPress={() => setActiveScript('hiragana')}
            style={[
              styles.scriptTab,
              { backgroundColor: theme.surfaceSubtle },
              activeScript === 'hiragana' && [styles.scriptTabActive, { backgroundColor: theme.primary }],
            ]}
          >
            <Text
              style={[
                styles.scriptTabText,
                { color: theme.textSecondary },
                activeScript === 'hiragana' && [styles.scriptTabTextActive, { color: theme.textOnPrimary }],
              ]}
            >
              Hiragana (ひらがな)
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveScript('katakana')}
            style={[
              styles.scriptTab,
              { backgroundColor: theme.surfaceSubtle },
              activeScript === 'katakana' && [styles.scriptTabActive, { backgroundColor: theme.primary }],
            ]}
          >
            <Text
              style={[
                styles.scriptTabText,
                { color: theme.textSecondary },
                activeScript === 'katakana' && [styles.scriptTabTextActive, { color: theme.textOnPrimary }],
              ]}
            >
              Katakana (カタカナ)
            </Text>
          </Pressable>
        </View>

        {/* Group Selector Chips */}
        <KanaGroupSelector
          groups={scriptGroups}
          selectedIds={selectedGroupIds}
          weakCount={weakKanaList.length}
          onToggle={toggleGroupId}
          onSelectAll={handleSelectAll}
          onPracticeWeaknesses={handlePracticeWeaknesses}
        />

        {/* Mode Selector and Score Strip */}
        <View style={styles.controlStrip}>
          <View style={[styles.modeButtonGroup, { backgroundColor: theme.surfaceSubtle }]}>
            {(['pick', 'reverse-pick', 'input', 'reverse-input'] as KanaGameMode[]).map(mode => (
              <Pressable
                key={mode}
                onPress={() => setGameMode(mode)}
                style={[
                  styles.modeButton,
                  gameMode === mode && [styles.modeButtonActive, { backgroundColor: theme.surface }],
                ]}
              >
                <Text
                  style={[
                    styles.modeButtonText,
                    { color: theme.textSecondary },
                    gameMode === mode && [styles.modeButtonTextActive, { color: theme.primary }],
                  ]}
                >
                  {mode === 'pick'
                    ? 'Pick'
                    : mode === 'reverse-pick'
                      ? 'Rev-Pick'
                      : mode === 'input'
                        ? 'Type'
                        : 'Rev-Type'}
                </Text>
              </Pressable>
            ))}
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengeButtonGroup}
          >
            <Pressable
              onPress={() => setShowBlitz(true)}
              style={[styles.challengeButton, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <Text style={[styles.challengeButtonText, { color: theme.textPrimary }]}>⚡ Blitz</Text>
            </Pressable>
            <Pressable
              onPress={() => setShowGauntlet(true)}
              style={[styles.challengeButton, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <Text style={[styles.challengeButtonText, { color: theme.textPrimary }]}>🛡️ Gauntlet</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/cloze')}
              style={[styles.challengeButton, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <Text style={[styles.challengeButtonText, { color: theme.textPrimary }]}>穴 Cloze</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/conjugator')}
              style={[styles.challengeButton, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <Text style={[styles.challengeButtonText, { color: theme.textPrimary }]}>🪓 Conjugator</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/arcade')}
              style={[styles.challengeButton, styles.arcadeButton]}
            >
              <Text style={[styles.challengeButtonText, styles.arcadeButtonText]}>🎮 Arcade & Zen</Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* Main Drill Arena */}
        <ScrollView
          contentContainerStyle={styles.drillContent}
          showsVerticalScrollIndicator={false}
        >
          {currentQuestion ? (
            <View style={styles.arena}>
              <View style={[styles.promptCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <View style={styles.promptCardTopRow}>
                  <Text style={[styles.promptSub, { color: theme.textMuted }]}>
                    {currentQuestion.promptSub}
                  </Text>
                  <AudioButton
                    text={currentQuestion.target.kana}
                    size="sm"
                    variant="solid"
                  />
                </View>
                <Text style={[styles.promptChar, { color: theme.textPrimary }]}>
                  {currentQuestion.prompt}
                </Text>
              </View>

              {/* Interaction: Options Grid or Text Input */}
              {currentQuestion.options ? (
                <KanaChoiceGrid
                  options={currentQuestion.options}
                  correctAnswer={currentQuestion.correctAnswer}
                  onSelect={handlePickAnswer}
                />
              ) : (
                <View style={styles.inputContainer}>
                  <View style={styles.inputHeaderRow}>
                    <Text style={[styles.inputModeHint, { color: theme.textSecondary }]}>
                      {gameMode === 'reverse-input'
                        ? `Prompt: Romaji → Type ${activeScript === 'katakana' ? 'Katakana' : 'Hiragana'}`
                        : 'Type Romaji or Kana'}
                    </Text>
                    <Pressable
                      onPress={() => setLiveTransliteration(prev => !prev)}
                      style={[
                        styles.liveKanaPill,
                        { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                        liveTransliteration && [styles.liveKanaPillActive, { backgroundColor: theme.primaryLight, borderColor: theme.primary }],
                      ]}
                    >
                      <Text
                        style={[
                          styles.liveKanaPillText,
                          { color: theme.textMuted },
                          liveTransliteration && [styles.liveKanaPillTextActive, { color: theme.primary }],
                        ]}
                      >
                        {liveTransliteration ? '🔤 Live Kana: ON' : '🔤 Live Kana: OFF'}
                      </Text>
                    </Pressable>
                  </View>
                  <TextInput
                    value={typedInput}
                    onChangeText={handleTextInputChange}
                    onSubmitEditing={handleInputSubmit}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={
                      liveTransliteration
                        ? 'Type Romaji (converts live)...'
                        : 'Type Romaji...'
                    }
                    placeholderTextColor={theme.textMuted}
                    style={[
                      styles.textInput,
                      {
                        backgroundColor: theme.surface,
                        borderColor: theme.border,
                        color: theme.textPrimary,
                      },
                      inputFeedback === 'correct' && { borderColor: theme.success, backgroundColor: theme.successLight },
                      inputFeedback === 'wrong' && { borderColor: theme.error, backgroundColor: theme.errorLight },
                    ]}
                  />
                  <Button
                    title="Check"
                    onPress={handleInputSubmit}
                    style={styles.submitButton}
                  />
                </View>
              )}
            </View>
          ) : (
            <View style={[styles.emptyCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No characters selected</Text>
              <Text style={[styles.emptySubtitle, { color: theme.textSecondary }]}>
                Select at least one row above to begin training.
              </Text>
              <Button
                title="Select All Rows"
                onPress={handleSelectAll}
                style={{ marginTop: spacing.md }}
              />
            </View>
          )}
        </ScrollView>

        <BlitzModal
          visible={showBlitz}
          onClose={() => setShowBlitz(false)}
          dojoName="Kana"
          category="kana"
          questionGenerator={generateChallengeQuestion}
        />

        <GauntletModal
          visible={showGauntlet}
          onClose={() => setShowGauntlet(false)}
          dojoName="Kana"
          category="kana"
          questionGenerator={generateChallengeQuestion}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scriptToggleRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.base,
    paddingTop: spacing.xs,
    gap: spacing.sm,
  },
  scriptTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: radii.md,
  },
  scriptTabActive: {},
  scriptTabText: {
    fontSize: 13,
    fontWeight: '600',
  },
  scriptTabTextActive: {},
  controlStrip: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.xs,
    gap: spacing.xs,
  },
  modeButtonGroup: {
    flexDirection: 'row',
    borderRadius: radii.md,
    padding: 2,
    gap: 2,
  },
  modeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: radii.sm,
  },
  modeButtonActive: {
    ...shadows.sm,
  },
  modeButtonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  modeButtonTextActive: {},
  challengeButtonGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  challengeButton: {
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.sm,
    borderWidth: 1,
  },
  challengeButtonText: {
    fontSize: 11,
    fontWeight: '700',
  },
  arcadeButton: {
    backgroundColor: '#10B98115',
    borderColor: '#10B98140',
  },
  arcadeButtonText: {
    color: '#059669',
  },
  drillContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    justifyContent: 'center',
  },
  arena: {
    alignItems: 'center',
    gap: spacing.xl,
    width: '100%',
  },
  promptCard: {
    width: '100%',
    borderRadius: radii.xl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    ...shadows.md,
  },
  promptCardTopRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    marginBottom: spacing.xs,
  },
  promptSub: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  promptChar: {
    fontSize: 72,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    gap: spacing.md,
  },
  inputHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  inputModeHint: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
    marginRight: spacing.xs,
  },
  liveKanaPill: {
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  liveKanaPillActive: {},
  liveKanaPillText: {
    fontSize: 11,
    fontWeight: '700',
  },
  liveKanaPillTextActive: {},
  textInput: {
    borderWidth: 2,
    borderRadius: radii.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  textInputCorrect: {},
  textInputWrong: {},
  submitButton: {
    width: '100%',
  },
  emptyCard: {
    alignItems: 'center',
    padding: spacing.xl,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
});
