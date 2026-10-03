import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Animated,
  ActivityIndicator,
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
  WifiOff,
  Clock,
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
import { duelService } from '../services/duel.service';
import type { DuelState } from '../models/duel.model';

interface KanjiDuelViewProps {
  onClose: () => void;
  duelMatchId?: string;
  initialDuelState?: DuelState;
}

export function KanjiDuelView({
  onClose,
  duelMatchId,
  initialDuelState,
}: KanjiDuelViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const isMultiplayer = Boolean(duelMatchId);

  // Multiplayer State
  const [duelState, setDuelState] = useState<DuelState | null>(initialDuelState || null);
  const [hasSubmittedCurrentRound, setHasSubmittedCurrentRound] = useState(false);
  const lastRoundRef = useRef<number | null>(null);

  // Difficulty & Opponent (Solo Mode)
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

  const [timerAnim] = useState(() => new Animated.Value(1));
  const [slashAnim] = useState(() => new Animated.Value(0));
  const [shakeAnim] = useState(() => new Animated.Value(0));

  const currentQ = questions[currentIndex] || null;

  const clearAllTimers = () => {
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    if (nextRoundTimerRef.current) clearTimeout(nextRoundTimerRef.current);
    if (introTimerRef.current) clearTimeout(introTimerRef.current);
  };

  const startRoundAnimation = (duration: number) => {
    timerAnim.setValue(1);
    Animated.timing(timerAnim, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
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

  // Safe close with forfeit if in live match
  const handleSafeClose = () => {
    if (isMultiplayer && duelMatchId && duelState && (duelState.status === 'live' || duelState.status === 'waiting')) {
      duelService.forfeitDuel(duelMatchId).catch(() => {});
    }
    clearAllTimers();
    onClose();
  };

  // -------------------------------------------------------------
  // SOLO BOT MODE LOGIC
  // -------------------------------------------------------------
  const startSoloRound = (
    index: number,
    queue: KanjiDuelQuestion[],
    diff: 'easy' | 'medium' | 'hard',
    currentPlayerHp: number,
    currentBotHp: number
  ) => {
    if (currentPlayerHp <= 0 || currentBotHp <= 0 || index >= queue.length) {
      finishSoloDuel(currentPlayerHp > 0 && currentBotHp <= 0);
      return;
    }

    const question = queue[index];
    if (!question) return;

    setSelectedOptionIndex(null);
    setIsAnsweringLocked(false);
    setIsRoundActive(true);
    roundStartTimeRef.current = Date.now();

    speakJapanese(question.ttsAudio).catch(() => {});

    const activeBot = KANJI_DUEL_BOTS[diff];
    const duration = activeBot.attackTimerMs;
    startRoundAnimation(duration);

    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    botTimerRef.current = setTimeout(() => {
      handleBotStrike(question, queue, index, diff, currentPlayerHp, currentBotHp);
    }, duration);
  };

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
      finishSoloDuel(false);
    } else {
      transitionToNextSoloRound(index, queue, diff, newPlayerHp, curBotHp);
    }
  };

  const transitionToNextSoloRound = (
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
      startSoloRound(nextIdx, nextQueue, diff, curPlayerHp, curBotHp);
    }, 1400);
  };

  const finishSoloDuel = (playerWon: boolean) => {
    clearAllTimers();
    setIsRoundActive(false);
    setIsMatchOver(true);
    Haptics.notificationAsync(
      playerWon ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error
    ).catch(() => {});
  };

  const startNewSoloDuel = useCallback(
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
        startSoloRound(0, matchQuestions, diff, 1000, activeBot.maxHp);
      }, 500);
    },
    [difficulty]
  );

  // -------------------------------------------------------------
  // MULTIPLAYER LIVE SYNCHRONIZATION
  // -------------------------------------------------------------
  useEffect(() => {
    if (!isMultiplayer || !duelMatchId) {
      const timer = setTimeout(() => {
        startNewSoloDuel(difficulty);
      }, 0);
      return () => {
        clearTimeout(timer);
        clearAllTimers();
      };
    }

    // Initial fetch with deck if not present
    duelService.getDuelState(duelMatchId, true).then(res => {
      if (res.ok) {
        setDuelState(res.data);
        if (res.data.deck && res.data.deck.length > 0) {
          setQuestions(res.data.deck);
        }
      }
    });

    const stopPolling = duelService.pollDuel(
      duelMatchId,
      (newState) => {
        setDuelState(newState);

        // Deck loading
        if (newState.deck && newState.deck.length > 0) {
          setQuestions(prev => (prev.length === 0 ? newState.deck! : prev));
        }

        if (newState.status === 'live') {
          const serverRound = newState.round;

          if (lastRoundRef.current === null) {
            // Start round 0
            lastRoundRef.current = serverRound;
            setCurrentIndex(serverRound);
            setSelectedOptionIndex(null);
            setIsAnsweringLocked(false);
            setIsRoundActive(true);
            setHasSubmittedCurrentRound(false);
            roundStartTimeRef.current = Date.now();
            startRoundAnimation(10000);
          } else if (serverRound !== lastRoundRef.current) {
            // Advanced round!
            const prevRound = lastRoundRef.current;
            lastRoundRef.current = serverRound;

            const hist = newState.history.find(h => h.round === prevRound);
            if (hist) {
              if (hist.winner === 'me') {
                triggerSlashAnimation();
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
                setLastCombatEvent(`⚡ Round ${prevRound + 1} WON! Faster reaction time!`);
              } else if (hist.winner === 'them') {
                triggerShakeAnimation();
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
                setLastCombatEvent(`💥 Round ${prevRound + 1} LOST! Opponent struck faster!`);
              } else {
                setLastCombatEvent(`⚔️ Round ${prevRound + 1} TIE!`);
              }
            }

            setCurrentIndex(serverRound);
            setSelectedOptionIndex(null);
            setIsAnsweringLocked(false);
            setIsRoundActive(true);
            setHasSubmittedCurrentRound(false);
            roundStartTimeRef.current = Date.now();
            startRoundAnimation(10000);
          }
        } else if (newState.status === 'finished' || newState.status === 'forfeit') {
          setIsRoundActive(false);
          setIsMatchOver(true);
          if (newState.result?.winner === 'me') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
          } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
          }
        }
      },
      (err) => {
        console.warn('[KanjiDuelView] Live match poll error:', err);
      },
      700
    );

    return () => {
      stopPolling();
      clearAllTimers();
    };
  }, [isMultiplayer, duelMatchId]);

  // Handle question recitation
  useEffect(() => {
    if (isMultiplayer && currentQ && isRoundActive) {
      speakJapanese(currentQ.ttsAudio).catch(() => {});
    }
  }, [currentIndex, isMultiplayer, isRoundActive, currentQ]);

  // -------------------------------------------------------------
  // OPTION SELECTION (SOLO & MULTIPLAYER)
  // -------------------------------------------------------------
  const handleSelectOption = (optionIndex: number) => {
    if (!isRoundActive || isAnsweringLocked || !currentQ) return;

    setIsAnsweringLocked(true);
    setIsRoundActive(false);
    setSelectedOptionIndex(optionIndex);

    const reactionMs = Date.now() - roundStartTimeRef.current;
    const isCorrect = optionIndex === currentQ.correctIndex;

    if (isMultiplayer && duelMatchId) {
      setHasSubmittedCurrentRound(true);
      if (isCorrect) {
        setFastestReactionMs(prev => (prev === null ? reactionMs : Math.min(prev, reactionMs)));
        triggerSlashAnimation();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
        setLastCombatEvent(`⚡ Correct answer (${(reactionMs / 1000).toFixed(2)}s)! Waiting for opponent...`);
      } else {
        triggerShakeAnimation();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
        setLastCombatEvent(`🛡️ Incorrect! Waiting for round resolution...`);
      }

      duelService.submitAnswer(duelMatchId, currentIndex, isCorrect, reactionMs).then(res => {
        if (res.ok) {
          setDuelState(res.data);
        }
      });
      return;
    }

    // Solo bot execution
    if (botTimerRef.current) clearTimeout(botTimerRef.current);

    if (isCorrect) {
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
        finishSoloDuel(true);
      } else {
        transitionToNextSoloRound(currentIndex, questions, difficulty, playerHp, newBotHp);
      }
    } else {
      const counterDmg = 160;
      const newPlayerHp = Math.max(0, playerHp - counterDmg);
      setPlayerHp(newPlayerHp);

      triggerShakeAnimation();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});

      setLastCombatEvent(`🛡️ PARRIED! Counter-attack took -${counterDmg} HP!`);

      if (newPlayerHp <= 0) {
        finishSoloDuel(false);
      } else {
        transitionToNextSoloRound(currentIndex, questions, difficulty, newPlayerHp, botHp);
      }
    }
  };

  // Victor evaluation
  const isPlayerVictor = isMultiplayer
    ? duelState?.result?.winner === 'me'
    : botHp <= 0 && playerHp > 0;

  // Multiplayer HP mapping based on rounds won
  const totalRounds = isMultiplayer ? (duelState?.totalRounds || 10) : 10;
  const mpWinsMe = duelState?.winsMe ?? 0;
  const mpWinsThem = duelState?.winsThem ?? 0;
  const displayPlayerHp = isMultiplayer
    ? Math.max(0, 1000 - Math.round((mpWinsThem / totalRounds) * 1000))
    : playerHp;
  const displayOpponentHp = isMultiplayer
    ? Math.max(0, 1000 - Math.round((mpWinsMe / totalRounds) * 1000))
    : botHp;
  const maxOpponentHp = isMultiplayer ? 1000 : bot.maxHp;

  const opponentName = isMultiplayer
    ? duelState?.opponent.displayName || 'Opponent'
    : bot.name;
  const opponentAvatar = isMultiplayer
    ? duelState?.opponent.avatarEmoji || '🥷'
    : bot.avatarEmoji;

  // Waiting room view if waiting for friend to accept
  if (isMultiplayer && duelState?.status === 'waiting') {
    return (
      <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <Pressable
            onPress={handleSafeClose}
            style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            hitSlop={8}
            accessibilityLabel="Close Kanji Duel"
          >
            <X size={20} color={theme.textPrimary} />
          </Pressable>
          <View style={styles.headerTitleWrap}>
            <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
              ⚔️ 漢字決闘 • Live Duel
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
              Awaiting clan opponent response...
            </Text>
          </View>
        </View>

        <View style={styles.waitingContainer}>
          <View style={[styles.waitingCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Text style={styles.waitingEmoji}>{opponentAvatar}</Text>
            <Text style={[styles.waitingTitle, { color: theme.textPrimary }]}>
              Challenging {opponentName}
            </Text>
            <Text style={[styles.waitingSubtitle, { color: theme.textSecondary }]}>
              Waiting for them to accept the duel invitation. The battle begins the instant they accept!
            </Text>
            <ActivityIndicator size="large" color={theme.primary} style={{ marginVertical: 20 }} />
            <Pressable
              onPress={handleSafeClose}
              style={[styles.cancelChallengeBtn, { borderColor: theme.border }]}
            >
              <Text style={[styles.cancelChallengeText, { color: theme.textSecondary }]}>
                Cancel Challenge
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={handleSafeClose}
          style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={8}
          accessibilityLabel="Close Kanji Duel"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerTitleWrap}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
            ⚔️ 漢字決闘 (Kanji Duel) {isMultiplayer && '• LIVE'}
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
            {isMultiplayer ? `1-on-1 Duel vs ${opponentName}` : 'High-Speed Combat: Strike with correct reading & meaning!'}
          </Text>
        </View>

        {!isMultiplayer && (
          <Pressable
            onPress={() => startNewSoloDuel(difficulty)}
            style={[styles.resetBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            hitSlop={8}
          >
            <RotateCcw size={18} color={theme.textPrimary} />
          </Pressable>
        )}
      </View>

      {/* Difficulty Switcher (Solo only) or Live Match Indicator */}
      {!isMultiplayer ? (
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
                    startNewSoloDuel(diffKey);
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
      ) : (
        <View style={[styles.liveOpponentBar, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
          <View style={styles.liveOpponentRow}>
            <View style={styles.livePlayerBadge}>
              <Text style={styles.liveScoreBadgeText}>YOU: {mpWinsMe} pts</Text>
            </View>
            <Text style={[styles.liveVsText, { color: theme.textSecondary }]}>ROUND {currentIndex + 1} OF {totalRounds}</Text>
            <View style={styles.liveOpponentBadge}>
              <Text style={styles.liveScoreBadgeText}>{opponentName}: {mpWinsThem} pts</Text>
            </View>
          </View>
          {duelState?.opponentGone && (
            <View style={styles.opponentGoneNotice}>
              <WifiOff size={14} color="#EF4444" />
              <Text style={styles.opponentGoneText}>Opponent connection warning</Text>
            </View>
          )}
        </View>
      )}

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
              <Text style={[styles.fighterHpText, { color: displayPlayerHp > 300 ? '#48BB78' : '#E53E3E' }]}>
                {displayPlayerHp} / 1000 HP
              </Text>
            </View>
          </View>
          {/* Health Bar */}
          <View style={[styles.hpTrack, { backgroundColor: theme.border }]}>
            <View
              style={[
                styles.hpFill,
                {
                  width: `${Math.max(0, Math.min(100, (displayPlayerHp / 1000) * 100))}%`,
                  backgroundColor: displayPlayerHp > 300 ? '#48BB78' : '#E53E3E',
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
              <Text style={[styles.fighterName, { color: theme.textPrimary }]}>{opponentName}</Text>
              <Text style={[styles.fighterHpText, { color: displayOpponentHp > 300 ? '#E53E3E' : '#ECC94B' }]}>
                {displayOpponentHp} / {maxOpponentHp} HP
              </Text>
            </View>
            <Text style={styles.fighterAvatar}>{opponentAvatar}</Text>
          </View>
          {/* Health Bar */}
          <View style={[styles.hpTrack, { backgroundColor: theme.border }]}>
            <View
              style={[
                styles.hpFill,
                {
                  width: `${Math.max(0, Math.min(100, (displayOpponentHp / maxOpponentHp) * 100))}%`,
                  backgroundColor: displayOpponentHp > 300 ? '#E53E3E' : '#ECC94B',
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
              {isPlayerVictor ? '🏆' : duelState?.result?.winner === 'draw' ? '🤝' : '💀'}
            </Text>

            <Text style={[styles.gameOverTitle, { color: theme.textPrimary }]}>
              {isPlayerVictor
                ? '勝負あり! VICTORY (K.O.)'
                : duelState?.result?.winner === 'draw'
                ? '引き分け! DRAW'
                : '敗北! DEFEATED'}
            </Text>

            <Text style={[styles.gameOverSubtitle, { color: theme.textSecondary }]}>
              {isMultiplayer
                ? duelState?.result?.reason === 'forfeit'
                  ? isPlayerVictor
                    ? `${opponentName} surrendered the duel!`
                    : 'You forfeited the duel.'
                  : `Final score: ${mpWinsMe} - ${mpWinsThem} vs ${opponentName}`
                : isPlayerVictor
                ? `You struck down ${bot.name} in high-speed combat!`
                : `${bot.name} overpowered you with lethal strikes!`}
            </Text>

            {/* Duel Stats */}
            <View style={[styles.statsRow, { backgroundColor: theme.surfaceSubtle }]}>
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {isMultiplayer ? mpWinsMe : roundsWon}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Your Wins</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {isMultiplayer ? mpWinsThem : (1000 - displayPlayerHp > 0 ? `${displayPlayerHp} HP` : '0 HP')}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
                  {isMultiplayer ? 'Opponent Wins' : 'HP Left'}
                </Text>
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
              {!isMultiplayer && (
                <Pressable
                  onPress={() => startNewSoloDuel(difficulty)}
                  style={[styles.rematchBtn, { backgroundColor: theme.primary }]}
                >
                  <RotateCcw size={18} color={theme.textOnPrimary} />
                  <Text style={[styles.rematchBtnText, { color: theme.textOnPrimary }]}>
                    Duel Again (再戦)
                  </Text>
                </Pressable>
              )}

              <Pressable
                onPress={handleSafeClose}
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
    paddingVertical: 8,
    borderRadius: radii.md,
    gap: 6,
  },
  diffEmoji: {
    fontSize: 14,
  },
  diffLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  liveOpponentBar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  liveOpponentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  livePlayerBadge: {
    backgroundColor: '#1E3A2F',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  liveOpponentBadge: {
    backgroundColor: '#3A1E1E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  liveScoreBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFF',
  },
  liveVsText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  opponentGoneNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  opponentGoneText: {
    color: '#EF4444',
    fontSize: 11,
    fontWeight: '700',
  },
  arenaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    padding: 12,
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
    gap: 8,
    marginBottom: 6,
  },
  fighterAvatar: {
    fontSize: 24,
  },
  fighterName: {
    fontSize: 12,
    fontWeight: '800',
  },
  fighterHpText: {
    fontSize: 10,
    fontWeight: '700',
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
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  roundBadge: {
    fontSize: 11,
    fontWeight: '900',
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
    paddingTop: 12,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  questionCard: {
    padding: 16,
    borderRadius: radii.xl,
    borderWidth: 1.5,
    alignItems: 'center',
    ...shadows.md,
  },
  questionHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  typeBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  ttsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  ttsBtnText: {
    fontSize: 11,
    fontWeight: '700',
  },
  kanjiEmblemWrapper: {
    marginBottom: 12,
  },
  kanjiEmblemBox: {
    width: 90,
    height: 90,
    borderRadius: radii.lg,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  kanjiBigText: {
    fontSize: 52,
    fontWeight: '900',
    color: '#F7FAFC',
  },
  questionPrompt: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 4,
  },
  questionSub: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 14,
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
  waitingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  waitingCard: {
    width: '100%',
    padding: 28,
    borderRadius: radii.xl,
    borderWidth: 1.5,
    alignItems: 'center',
    ...shadows.md,
  },
  waitingEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  waitingTitle: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 8,
    textAlign: 'center',
  },
  waitingSubtitle: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  cancelChallengeBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  cancelChallengeText: {
    fontSize: 13,
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
