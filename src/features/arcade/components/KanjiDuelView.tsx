import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  X,
  Volume2,
  Trophy,
  Zap,
  RotateCcw,
  Sparkles,
  Swords,
  ShieldAlert,
  Flame,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import {
  KANJI_DUEL_BOTS,
  generateDuelMatch,
  calculateDuelDamage,
  type KanjiDuelQuestion,
  type KanjiDuelBot,
} from '../lib/kanjiDuelEngine';

interface KanjiDuelViewProps {
  onClose: () => void;
}

export function KanjiDuelView({ onClose }: KanjiDuelViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  // Difficulty & Opponent
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const bot = KANJI_DUEL_BOTS[difficulty];

  // Match Questions
  const [questions, setQuestions] = useState<KanjiDuelQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Health Points (HP)
  const [playerHp, setPlayerHp] = useState(1000);
  const [botHp, setBotHp] = useState(bot.maxHp);

  // Stats
  const [roundsWon, setRoundsWon] = useState(0);
  const [fastestReactionMs, setFastestReactionMs] = useState<number | null>(null);
  const [lastCombatEvent, setLastCombatEvent] = useState<string | null>(null);

  // Round State
  const [isRoundActive, setIsRoundActive] = useState(false);
  const [isMatchOver, setIsMatchOver] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnsweringLocked, setIsAnsweringLocked] = useState(false);

  // Timers and Animation refs
  const roundStartTimeRef = useRef<number>(0);
  const botTimerRef = useRef<NodeJS.Timeout | null>(null);
  const nextRoundTimerRef = useRef<NodeJS.Timeout | null>(null);
  const introTimerRef = useRef<NodeJS.Timeout | null>(null);

  const timerAnim = useRef(new Animated.Value(1)).current;
  const slashAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const currentQ = questions[currentIndex] || null;

  const clearAllTimers = () => {
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    if (nextRoundTimerRef.current) clearTimeout(nextRoundTimerRef.current);
    if (introTimerRef.current) clearTimeout(introTimerRef.current);
  };

  // Start new duel
  const startNewDuel = useCallback(
    (diff: 'easy' | 'medium' | 'hard' = difficulty) => {
      clearAllTimers();

      const activeBot = KANJI_DUEL_BOTS[diff];
      const matchQuestions = generateDuelMatch(true);

      setQuestions(matchQuestions);
      setCurrentIndex(0);
      setPlayerHp(1000);
      setBotHp(activeBot.maxHp);
      setRoundsWon(0);
      setFastestReactionMs(null);
      setLastCombatEvent(null);
      setSelectedOptionIndex(null);
      setIsAnsweringLocked(false);
      setIsMatchOver(false);

      introTimerRef.current = setTimeout(() => {
        startRound(0, matchQuestions, diff, 1000, activeBot.maxHp);
      }, 500);
    },
    [difficulty]
  );

  // Start specific round
  const startRound = (
    index: number,
    queue: KanjiDuelQuestion[],
    diff: 'easy' | 'medium' | 'hard',
    currentPlayerHp: number,
    currentBotHp: number
  ) => {
    if (currentPlayerHp <= 0 || currentBotHp <= 0 || index >= queue.length) {
      finishDuel(currentPlayerHp > 0 && currentBotHp <= 0);
      return;
    }

    const question = queue[index];
    if (!question) return;

    setSelectedOptionIndex(null);
    setIsAnsweringLocked(false);
    setIsRoundActive(true);
    roundStartTimeRef.current = Date.now();

    // Recite question audio
    speakJapanese(question.ttsAudio).catch(() => {});

    // Animate attack countdown
    const activeBot = KANJI_DUEL_BOTS[diff];
    const duration = activeBot.attackTimerMs;

    timerAnim.setValue(1);
    Animated.timing(timerAnim, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();

    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    botTimerRef.current = setTimeout(() => {
      handleBotStrike(question, queue, index, diff, currentPlayerHp, currentBotHp);
    }, duration);
  };

  // Bot strikes if player is too slow
  const handleBotStrike = (
    question: KanjiDuelQuestion,
    queue: KanjiDuelQuestion[],
    index: number,
    diff: 'easy' | 'medium' | 'hard',
    curPlayerHp: number,
    curBotHp: number
  ) => {
    if (isAnsweringLocked) return;
    setIsAnsweringLocked(true);
    setIsRoundActive(false);

    const activeBot = KANJI_DUEL_BOTS[diff];
    const newPlayerHp = Math.max(0, curPlayerHp - activeBot.baseDamage);
    setPlayerHp(newPlayerHp);

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    triggerShakeAnimation();

    setLastCombatEvent(`💥 ${activeBot.name} struck! (-${activeBot.baseDamage} HP)`);

    if (newPlayerHp <= 0) {
      finishDuel(false);
    } else {
      transitionToNextRound(index, queue, diff, newPlayerHp, curBotHp);
    }
  };

  // Player answers
  const handleSelectOption = (optionIndex: number) => {
    if (!isRoundActive || isAnsweringLocked || !currentQ) return;

    setIsAnsweringLocked(true);
    setIsRoundActive(false);
    if (botTimerRef.current) clearTimeout(botTimerRef.current);

    setSelectedOptionIndex(optionIndex);
    const reactionMs = Date.now() - roundStartTimeRef.current;

    if (optionIndex === currentQ.correctIndex) {
      // SUCCESSFUL STRIKE!
      const { damage, isCritical, strikeTitle } = calculateDuelDamage(reactionMs);
      const newBotHp = Math.max(0, botHp - damage);

      setBotHp(newBotHp);
      setRoundsWon(prev => prev + 1);
      setFastestReactionMs(prev => (prev === null ? reactionMs : Math.min(prev, reactionMs)));

      triggerSlashAnimation();
      Haptics.impactAsync(
        isCritical ? Haptics.ImpactFeedbackStyle.Heavy : Haptics.ImpactFeedbackStyle.Medium
      ).catch(() => {});

      setLastCombatEvent(`${strikeTitle} -${damage} HP (${(reactionMs / 1000).toFixed(2)}s)`);

      if (newBotHp <= 0) {
        finishDuel(true);
      } else {
        transitionToNextRound(currentIndex, questions, difficulty, playerHp, newBotHp);
      }
    } else {
      // COUNTERED / BLOCKED!
      const counterDmg = 160;
      const newPlayerHp = Math.max(0, playerHp - counterDmg);
      setPlayerHp(newPlayerHp);

      triggerShakeAnimation();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});

      setLastCombatEvent(`🛡️ PARRIED! Counter-attack took -${counterDmg} HP!`);

      if (newPlayerHp <= 0) {
        finishDuel(false);
      } else {
        transitionToNextRound(currentIndex, questions, difficulty, newPlayerHp, botHp);
      }
    }
  };

  const transitionToNextRound = (
    index: number,
    queue: KanjiDuelQuestion[],
    diff: 'easy' | 'medium' | 'hard',
    curPlayerHp: number,
    curBotHp: number
  ) => {
    const nextIdx = index + 1;
    let nextQueue = queue;
    if (nextIdx >= queue.length) {
      nextQueue = [...queue, ...generateDuelMatch(true)];
      setQuestions(nextQueue);
    }
    setCurrentIndex(nextIdx);

    nextRoundTimerRef.current = setTimeout(() => {
      startRound(nextIdx, nextQueue, diff, curPlayerHp, curBotHp);
    }, 1400);
  };

  const finishDuel = (playerWon: boolean) => {
    clearAllTimers();
    setIsRoundActive(false);
    setIsMatchOver(true);
    Haptics.notificationAsync(
      playerWon ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error
    ).catch(() => {});
  };

  const triggerSlashAnimation = () => {
    slashAnim.setValue(0);
    Animated.sequence([
      Animated.timing(slashAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
      Animated.timing(slashAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
    ]).start();
  };

  const triggerShakeAnimation = () => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  useEffect(() => {
    startNewDuel(difficulty);
    return () => {
      clearAllTimers();
    };
  }, []);

  const isPlayerVictor = botHp <= 0 && playerHp > 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={onClose}
          style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={8}
          accessibilityLabel="Close Kanji Duel"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerTitleWrap}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
            ⚔️ 漢字決闘 (Kanji Duel)
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
            High-Speed Combat: Strike with the correct reading & meaning!
          </Text>
        </View>

        <Pressable
          onPress={() => startNewDuel(difficulty)}
          style={[styles.resetBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={8}
        >
          <RotateCcw size={18} color={theme.textPrimary} />
        </Pressable>
      </View>

      {/* Difficulty Switcher */}
      <View style={[styles.diffBar, { backgroundColor: theme.surfaceSubtle }]}>
        {(['easy', 'medium', 'hard'] as const).map(diffKey => {
          const profile = KANJI_DUEL_BOTS[diffKey];
          const isSelected = difficulty === diffKey;
          return (
            <Pressable
              key={diffKey}
              onPress={() => {
                if (difficulty !== diffKey) {
                  Haptics.selectionAsync().catch(() => {});
                  setDifficulty(diffKey);
                  startNewDuel(diffKey);
                }
              }}
              style={[
                styles.diffPill,
                isSelected && { backgroundColor: '#8B0000' },
              ]}
            >
              <Text style={styles.diffEmoji}>{profile.avatarEmoji}</Text>
              <Text
                style={[
                  styles.diffLabel,
                  { color: theme.textSecondary },
                  isSelected && { color: '#FFF', fontWeight: '800' },
                ]}
              >
                {diffKey.toUpperCase()}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Combat Arena Health Bars */}
      <Animated.View
        style={[
          styles.arenaCard,
          { backgroundColor: theme.surface, borderColor: theme.border },
          { transform: [{ translateX: shakeAnim }] },
        ]}
      >
        {/* Player Fighter */}
        <View style={styles.fighterSide}>
          <View style={styles.fighterHeader}>
            <Text style={styles.fighterAvatar}>🥋</Text>
            <View>
              <Text style={[styles.fighterName, { color: theme.textPrimary }]}>YOU</Text>
              <Text style={[styles.fighterHpText, { color: playerHp > 300 ? '#48BB78' : '#E53E3E' }]}>
                {playerHp} / 1000 HP
              </Text>
            </View>
          </View>
          {/* Health Bar */}
          <View style={[styles.hpTrack, { backgroundColor: theme.border }]}>
            <View
              style={[
                styles.hpFill,
                {
                  width: `${Math.max(0, Math.min(100, (playerHp / 1000) * 100))}%`,
                  backgroundColor: playerHp > 300 ? '#48BB78' : '#E53E3E',
                },
              ]}
            />
          </View>
        </View>

        {/* Center Clash */}
        <View style={styles.centerClash}>
          <Swords size={20} color={theme.primary} />
          <Text style={[styles.roundBadge, { color: theme.textSecondary }]}>
            R{currentIndex + 1}
          </Text>
        </View>

        {/* Opponent Fighter */}
        <View style={styles.fighterSide}>
          <View style={[styles.fighterHeader, { justifyContent: 'flex-end' }]}>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={[styles.fighterName, { color: theme.textPrimary }]}>{bot.name}</Text>
              <Text style={[styles.fighterHpText, { color: botHp > 300 ? '#E53E3E' : '#ECC94B' }]}>
                {botHp} / {bot.maxHp} HP
              </Text>
            </View>
            <Text style={styles.fighterAvatar}>{bot.avatarEmoji}</Text>
          </View>
          {/* Health Bar */}
          <View style={[styles.hpTrack, { backgroundColor: theme.border }]}>
            <View
              style={[
                styles.hpFill,
                {
                  width: `${Math.max(0, Math.min(100, (botHp / bot.maxHp) * 100))}%`,
                  backgroundColor: botHp > 300 ? '#E53E3E' : '#ECC94B',
                  alignSelf: 'flex-end',
                },
              ]}
            />
          </View>
        </View>
      </Animated.View>

      {/* Combat Event Banner */}
      {lastCombatEvent && (
        <View style={[styles.eventBanner, { backgroundColor: theme.surfaceSubtle }]}>
          <Text style={[styles.eventText, { color: theme.textPrimary }]}>{lastCombatEvent}</Text>
        </View>
      )}

      {/* Central Kanji Focus Emblem */}
      {currentQ && !isMatchOver && (
        <View style={styles.duelQuestionContainer}>
          {/* Question Box */}
          <View style={[styles.questionCard, { backgroundColor: theme.surface, borderColor: theme.primary }]}>
            {/* Header with Type & TTS */}
            <View style={styles.questionHeader}>
              <View style={[styles.typeBadge, { backgroundColor: '#2B6CB0' }]}>
                <Text style={styles.typeBadgeText}>
                  {currentQ.type.toUpperCase()}
                </Text>
              </View>

              <Pressable
                onPress={() => speakJapanese(currentQ.ttsAudio).catch(() => {})}
                style={[styles.ttsBtn, { backgroundColor: theme.surfaceSubtle }]}
                hitSlop={8}
              >
                <Volume2 size={16} color={theme.primary} />
                <Text style={[styles.ttsBtnText, { color: theme.primary }]}>Pronounce</Text>
              </Pressable>
            </View>

            {/* Glowing Big Kanji Character */}
            <View style={styles.kanjiEmblemWrapper}>
              <View style={[styles.kanjiEmblemBox, { backgroundColor: '#1A202C', borderColor: '#d4af37' }]}>
                <Text style={styles.kanjiBigText}>{currentQ.kanjiChar}</Text>
              </View>
            </View>

            {/* Question prompt */}
            <Text style={[styles.questionPrompt, { color: theme.textPrimary }]}>
              {currentQ.questionTitle}
            </Text>
            <Text style={[styles.questionSub, { color: theme.textSecondary }]}>
              {currentQ.questionSubtitle}
            </Text>

            {/* Attack Countdown Gauge */}
            <View style={[styles.timerTrack, { backgroundColor: theme.border }]}>
              <Animated.View
                style={[
                  styles.timerFill,
                  {
                    backgroundColor: theme.primary,
                    transform: [{ scaleX: timerAnim }],
                  },
                ]}
              />
            </View>
          </View>

          {/* 4 Choices Grid */}
          <View style={styles.optionsGrid}>
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedOptionIndex === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let btnBg = theme.surface;
              let btnBorder = theme.border;

              if (selectedOptionIndex !== null) {
                if (isCorrect) {
                  btnBg = '#1E3A2F';
                  btnBorder = '#48BB78';
                } else if (isSelected) {
                  btnBg = '#3A1E1E';
                  btnBorder = '#E53E3E';
                }
              }

              return (
                <Pressable
                  key={optIdx}
                  disabled={isAnsweringLocked}
                  onPress={() => handleSelectOption(optIdx)}
                  style={({ pressed }) => [
                    styles.optionTile,
                    {
                      backgroundColor: btnBg,
                      borderColor: btnBorder,
                    },
                    pressed && !isAnsweringLocked && styles.optionPressed,
                  ]}
                >
                  <View style={[styles.optIndexCircle, { backgroundColor: theme.surfaceSubtle }]}>
                    <Text style={[styles.optIndexText, { color: theme.textSecondary }]}>
                      {String.fromCharCode(65 + optIdx)}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.optionText,
                      { color: theme.textPrimary },
                      selectedOptionIndex !== null && isCorrect && { color: '#48BB78', fontWeight: '800' },
                      isSelected && !isCorrect && { color: '#E53E3E', fontWeight: '800' },
                    ]}
                    numberOfLines={2}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      {/* Match Over Modal Overlay */}
      {isMatchOver && (
        <View style={[styles.gameOverModal, { backgroundColor: 'rgba(0,0,0,0.85)' }]}>
          <View style={[styles.gameOverCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Text style={styles.gameOverEmoji}>
              {isPlayerVictor ? '🏆' : '💀'}
            </Text>

            <Text style={[styles.gameOverTitle, { color: theme.textPrimary }]}>
              {isPlayerVictor ? '勝負あり! VICTORY (K.O.)' : '敗北! DEFEATED'}
            </Text>

            <Text style={[styles.gameOverSubtitle, { color: theme.textSecondary }]}>
              {isPlayerVictor
                ? `You struck down ${bot.name} in high-speed combat!`
                : `${bot.name} overpowered you with lethal strikes!`}
            </Text>

            {/* Duel Stats */}
            <View style={[styles.statsRow, { backgroundColor: theme.surfaceSubtle }]}>
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {roundsWon}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Strikes Landed</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {playerHp}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>HP Remaining</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {fastestReactionMs !== null ? `${(fastestReactionMs / 1000).toFixed(2)}s` : '--'}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Fastest Strike</Text>
              </View>
            </View>

            {/* Actions */}
            <View style={styles.gameOverActions}>
              <Pressable
                onPress={() => startNewDuel(difficulty)}
                style={[styles.rematchBtn, { backgroundColor: theme.primary }]}
              >
                <RotateCcw size={18} color={theme.textOnPrimary} />
                <Text style={[styles.rematchBtnText, { color: theme.textOnPrimary }]}>
                  Duel Again (再戦)
                </Text>
              </Pressable>

              <Pressable
                onPress={onClose}
                style={[styles.exitBtn, { borderColor: theme.border }]}
              >
                <Text style={[styles.exitBtnText, { color: theme.textSecondary }]}>
                  Exit to Arcade
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  closeBtn: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetBtn: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleWrap: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  headerSubtitle: {
    fontSize: 12,
  },
  diffBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  diffPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: radii.md,
    gap: 6,
  },
  diffEmoji: {
    fontSize: 14,
  },
  diffLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  arenaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: radii.lg,
    borderWidth: 1,
    ...shadows.sm,
  },
  fighterSide: {
    flex: 1,
  },
  fighterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  fighterAvatar: {
    fontSize: 20,
  },
  fighterName: {
    fontSize: 12,
    fontWeight: '700',
  },
  fighterHpText: {
    fontSize: 10,
    fontWeight: '800',
  },
  hpTrack: {
    height: 8,
    borderRadius: radii.full,
    overflow: 'hidden',
  },
  hpFill: {
    height: '100%',
    borderRadius: radii.full,
  },
  centerClash: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  roundBadge: {
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
  },
  eventBanner: {
    marginHorizontal: 16,
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: radii.md,
    alignItems: 'center',
  },
  eventText: {
    fontSize: 12,
    fontWeight: '700',
  },
  duelQuestionContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  questionCard: {
    padding: 14,
    borderRadius: radii.xl,
    borderWidth: 2,
    alignItems: 'center',
    ...shadows.md,
  },
  questionHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
  },
  typeBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
  ttsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.sm,
    gap: 4,
  },
  ttsBtnText: {
    fontSize: 11,
    fontWeight: '700',
  },
  kanjiEmblemWrapper: {
    marginBottom: 10,
  },
  kanjiEmblemBox: {
    width: 76,
    height: 76,
    borderRadius: radii.lg,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  kanjiBigText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFF',
  },
  questionPrompt: {
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 4,
  },
  questionSub: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
  },
  timerTrack: {
    width: '100%',
    height: 5,
    borderRadius: radii.full,
    overflow: 'hidden',
  },
  timerFill: {
    height: '100%',
    width: '100%',
    transformOrigin: 'left',
  },
  optionsGrid: {
    gap: 10,
  },
  optionTile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: radii.lg,
    borderWidth: 1.5,
    gap: 12,
    ...shadows.sm,
  },
  optionPressed: {
    transform: [{ scale: 0.98 }],
  },
  optIndexCircle: {
    width: 26,
    height: 26,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optIndexText: {
    fontSize: 12,
    fontWeight: '800',
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
  },
  gameOverModal: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    zIndex: 1000,
    elevation: 30,
  },
  gameOverCard: {
    width: '100%',
    padding: 24,
    borderRadius: radii.xl,
    borderWidth: 2,
    alignItems: 'center',
    ...shadows.md,
  },
  gameOverEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  gameOverTitle: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  gameOverSubtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    padding: 12,
    borderRadius: radii.lg,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '900',
  },
  statLabel: {
    fontSize: 11,
    marginTop: 2,
  },
  gameOverActions: {
    width: '100%',
    gap: 10,
  },
  rematchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: radii.lg,
    gap: 8,
  },
  rematchBtnText: {
    fontSize: 15,
    fontWeight: '800',
  },
  exitBtn: {
    paddingVertical: 12,
    borderRadius: radii.lg,
    borderWidth: 1,
    alignItems: 'center',
  },
  exitBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
