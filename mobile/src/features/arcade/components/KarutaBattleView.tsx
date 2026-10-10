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
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Swords,
  Timer,
  ChevronRight,
  WifiOff,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import {
  KARUTA_BOT_PROFILES,
  generateKarutaMatch,
  calculateSlapScore,
  type KarutaCard,
  type KarutaBotDifficulty,
} from '../lib/karutaEngine';
import { duelService } from '../services/duel.service';
import type { DuelState } from '../models/duel.model';

interface KarutaBattleViewProps {
  onClose: () => void;
  duelMatchId?: string;
  initialDuelState?: DuelState;
}

export function KarutaBattleView({
  onClose,
  duelMatchId,
  initialDuelState,
}: KarutaBattleViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const isMultiplayer = Boolean(duelMatchId);

  // Multiplayer State
  const [duelState, setDuelState] = useState<DuelState | null>(initialDuelState || null);
  const lastRoundRef = useRef<number | null>(null);

  // Difficulty & Bot (Solo)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [gameMode, setGameMode] = useState<'poem' | 'vocab'>('poem');
  const bot = KARUTA_BOT_PROFILES[difficulty];

  // Match Cards
  const [matCards, setMatCards] = useState<KarutaCard[]>([]);
  const [readingQueue, setReadingQueue] = useState<KarutaCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Claimed Cards: cardId -> 'player' | 'bot'
  const [claimedCards, setClaimedCards] = useState<Record<string, 'player' | 'bot'>>({});

  // Score & Stats
  const [playerScore, setPlayerScore] = useState(0);
  const [playerSlapTimes, setPlayerSlapTimes] = useState<number[]>([]);
  const [lastEvent, setLastEvent] = useState<string | null>(null);
  const [otetsukiCardId, setOtetsukiCardId] = useState<string | null>(null);

  // Round State
  const [isRoundActive, setIsRoundActive] = useState(false);
  const [isMatchOver, setIsMatchOver] = useState(false);
  const roundStartTimeRef = useRef<number>(0);
  const botTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const introTimerRef = useRef<NodeJS.Timeout | null>(null);
  const otetsukiTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Animations using useState for React 19 safety
  const [timerAnim] = useState(() => new Animated.Value(1));
  const [slapScaleAnim] = useState(() => new Animated.Value(1));

  const currentTargetCard = readingQueue[currentCardIndex] || null;

  const clearAllTimers = () => {
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    if (introTimerRef.current) clearTimeout(introTimerRef.current);
    if (otetsukiTimerRef.current) clearTimeout(otetsukiTimerRef.current);
  };

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
  const startSoloRound = (index: number, queue: KarutaCard[], diff: 'easy' | 'medium' | 'hard') => {
    if (index >= queue.length) {
      finishSoloMatch();
      return;
    }

    const target = queue[index];
    if (!target) return;

    setIsRoundActive(true);
    setOtetsukiCardId(null);
    roundStartTimeRef.current = Date.now();

    speakJapanese(target.audioText).catch(() => {});

    const isPoem = target.mode === 'poem';
    const recitationLeadMs = isPoem ? 2200 : 500;

    const activeBot = KARUTA_BOT_PROFILES[diff];
    const botReaction =
      Math.floor(Math.random() * (activeBot.maxReactionMs - activeBot.minReactionMs)) +
      activeBot.minReactionMs;

    const totalSlapWindow = recitationLeadMs + botReaction;

    timerAnim.setValue(1);
    Animated.timing(timerAnim, {
      toValue: 0,
      duration: totalSlapWindow,
      useNativeDriver: false,
    }).start();

    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    botTimerRef.current = setTimeout(() => {
      handleBotSlap(target, totalSlapWindow, queue, index, diff);
    }, totalSlapWindow);
  };

  const handleBotSlap = (
    target: KarutaCard,
    reactionMs: number,
    queue: KarutaCard[],
    index: number,
    diff: 'easy' | 'medium' | 'hard'
  ) => {
    const activeBot = KARUTA_BOT_PROFILES[diff];
    const isFoul = Math.random() < activeBot.foulChance;

    if (isFoul) {
      setLastEvent(`⚠️ ${activeBot.avatarEmoji} ${activeBot.name} fouled (お手つき)!`);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      botTimerRef.current = setTimeout(() => {
        finalizeSoloCardClaim(target.id, 'bot', queue, index, diff);
      }, 1500);
      return;
    }

    setLastEvent(`👺 ${activeBot.name} slapped it! (${(reactionMs / 1000).toFixed(2)}s)`);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    finalizeSoloCardClaim(target.id, 'bot', queue, index, diff);
  };

  const finalizeSoloCardClaim = (
    cardId: string,
    winner: 'player' | 'bot',
    queue: KarutaCard[],
    index: number,
    diff: 'easy' | 'medium' | 'hard'
  ) => {
    setIsRoundActive(false);
    clearAllTimers();

    setClaimedCards(prev => ({
      ...prev,
      [cardId]: winner,
    }));

    const nextIdx = index + 1;
    setCurrentCardIndex(nextIdx);

    transitionTimerRef.current = setTimeout(() => {
      startSoloRound(nextIdx, queue, diff);
    }, 1500);
  };

  const finishSoloMatch = () => {
    clearAllTimers();
    setIsRoundActive(false);
    setIsMatchOver(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  };

  const startNewSoloMatch = useCallback((
    diff: 'easy' | 'medium' | 'hard' = difficulty,
    mode: 'poem' | 'vocab' = gameMode,
  ) => {
    clearAllTimers();

    const match = generateKarutaMatch(8, mode);
    setMatCards(match.matCards);
    setReadingQueue(match.readingQueue);
    setCurrentCardIndex(0);
    setClaimedCards({});
    setPlayerScore(0);
    setPlayerSlapTimes([]);
    setLastEvent(null);
    setOtetsukiCardId(null);
    setIsMatchOver(false);
    setIsRoundActive(false);

    introTimerRef.current = setTimeout(() => {
      startSoloRound(0, match.readingQueue, diff);
    }, 600);
  }, [difficulty, gameMode]);

  // -------------------------------------------------------------
  // MULTIPLAYER LIVE SYNCHRONIZATION
  // -------------------------------------------------------------
  useEffect(() => {
    if (!isMultiplayer || !duelMatchId) {
      const initTimer = setTimeout(() => {
        startNewSoloMatch(difficulty, gameMode);
      }, 0);
      return () => {
        clearTimeout(initTimer);
        clearAllTimers();
      };
    }

    // Initial fetch with deck
    duelService.getDuelState(duelMatchId, true).then(res => {
      if (res.ok) {
        setDuelState(res.data);
        const deckData = res.data.deck as any;
        if (deckData?.matCards && deckData?.readingQueue) {
          setMatCards(deckData.matCards);
          setReadingQueue(deckData.readingQueue);
        }
      }
    });

    const stopPolling = duelService.pollDuel(
      duelMatchId,
      (newState) => {
        setDuelState(newState);

        const deckData = newState.deck as any;
        if (deckData?.matCards && deckData?.readingQueue) {
          setMatCards(prev => (prev.length === 0 ? deckData.matCards : prev));
          setReadingQueue(prev => (prev.length === 0 ? deckData.readingQueue : prev));
        }

        if (newState.status === 'live') {
          const serverRound = newState.round;

          if (lastRoundRef.current === null) {
            // Start round 0
            lastRoundRef.current = serverRound;
            setCurrentCardIndex(serverRound);
            setIsRoundActive(true);
            setOtetsukiCardId(null);
            roundStartTimeRef.current = Date.now();

            timerAnim.setValue(1);
            Animated.timing(timerAnim, {
              toValue: 0,
              duration: 10000,
              useNativeDriver: false,
            }).start();
          } else if (serverRound !== lastRoundRef.current) {
            // Advanced round!
            const prevRound = lastRoundRef.current;
            lastRoundRef.current = serverRound;

            const hist = newState.history.find(h => h.round === prevRound);
            if (hist && readingQueue[prevRound]) {
              const targetCardId = readingQueue[prevRound].id;
              if (hist.winner === 'me') {
                setClaimedCards(prev => ({ ...prev, [targetCardId]: 'player' }));
                setPlayerScore(prev => prev + 100);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
                setLastEvent(`⚡ Round ${prevRound + 1} WON! Fastest slap! (+100 pts)`);
              } else if (hist.winner === 'them') {
                setClaimedCards(prev => ({ ...prev, [targetCardId]: 'bot' }));
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
                setLastEvent(`👺 Opponent claimed card ${prevRound + 1}!`);
              } else {
                setLastEvent(`⚔️ Round ${prevRound + 1} TIE! Card unclaimed.`);
              }
            }

            setCurrentCardIndex(serverRound);
            setIsRoundActive(true);
            setOtetsukiCardId(null);
            roundStartTimeRef.current = Date.now();

            timerAnim.setValue(1);
            Animated.timing(timerAnim, {
              toValue: 0,
              duration: 10000,
              useNativeDriver: false,
            }).start();
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
        console.warn('[KarutaBattleView] Live match poll error:', err);
      },
      700
    );

    return () => {
      stopPolling();
      clearAllTimers();
    };
  }, [isMultiplayer, duelMatchId]);

  // Handle recitation in multiplayer
  useEffect(() => {
    if (isMultiplayer && currentTargetCard && isRoundActive) {
      speakJapanese(currentTargetCard.audioText).catch(() => {});
    }
  }, [currentCardIndex, isMultiplayer, isRoundActive, currentTargetCard]);

  // -------------------------------------------------------------
  // SLAP INTERACTION (SOLO & MULTIPLAYER)
  // -------------------------------------------------------------
  const handlePlayerSlap = (card: KarutaCard) => {
    if (!isRoundActive || !currentTargetCard || claimedCards[card.id]) return;

    const reactionMs = Date.now() - roundStartTimeRef.current;

    Animated.sequence([
      Animated.timing(slapScaleAnim, { toValue: 1.15, duration: 80, useNativeDriver: true }),
      Animated.timing(slapScaleAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();

    if (isMultiplayer && duelMatchId) {
      if (card.id === currentTargetCard.id) {
        // Correct Card Slap!
        setIsRoundActive(false);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
        setPlayerSlapTimes(prev => [...prev, reactionMs]);
        setLastEvent(`⚡ SLAP! (${(reactionMs / 1000).toFixed(2)}s) Waiting for opponent...`);

        duelService.submitAnswer(duelMatchId, currentCardIndex, true, reactionMs).then(res => {
          if (res.ok) setDuelState(res.data);
        });
      } else {
        // Otetsuki foul in multiplayer!
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
        setOtetsukiCardId(card.id);
        setLastEvent(`⚠️ お手つき (Otetsuki)! Wrong card!`);

        duelService.submitAnswer(duelMatchId, currentCardIndex, false, null).then(res => {
          if (res.ok) setDuelState(res.data);
        });

        otetsukiTimerRef.current = setTimeout(() => {
          setOtetsukiCardId(null);
        }, 600);
      }
      return;
    }

    // Solo bot execution
    if (card.id === currentTargetCard.id) {
      if (botTimerRef.current) clearTimeout(botTimerRef.current);
      setIsRoundActive(false);

      const scoreResult = calculateSlapScore(reactionMs);
      setPlayerScore(prev => prev + scoreResult.points);
      setPlayerSlapTimes(prev => [...prev, reactionMs]);

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
      setLastEvent(
        `⚡ SLAP! Rank ${scoreResult.rank} (${(reactionMs / 1000).toFixed(2)}s) +${scoreResult.points} pts!`
      );

      finalizeSoloCardClaim(card.id, 'player', readingQueue, currentCardIndex, difficulty);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setOtetsukiCardId(card.id);
      setPlayerScore(prev => Math.max(0, prev - 50));
      setLastEvent(`⚠️ お手つき (Otetsuki)! Wrong card (-50 pts)`);

      otetsukiTimerRef.current = setTimeout(() => {
        setOtetsukiCardId(null);
      }, 600);
    }
  };

  // Stats calculation
  const playerCardsCount = isMultiplayer
    ? (duelState?.winsMe ?? 0)
    : Object.values(claimedCards).filter(w => w === 'player').length;

  const botCardsCount = isMultiplayer
    ? (duelState?.winsThem ?? 0)
    : Object.values(claimedCards).filter(w => w === 'bot').length;

  const avgReactionSec =
    playerSlapTimes.length > 0
      ? (
          playerSlapTimes.reduce((acc, v) => acc + v, 0) /
          playerSlapTimes.length /
          1000
        ).toFixed(2)
      : '0.00';

  const isPlayerWinner = isMultiplayer
    ? duelState?.result?.winner === 'me'
    : playerCardsCount > botCardsCount;

  const isDraw = isMultiplayer
    ? duelState?.result?.winner === 'draw'
    : playerCardsCount === botCardsCount;

  const opponentName = isMultiplayer
    ? duelState?.opponent.displayName || 'Opponent'
    : bot.name;

  const opponentAvatar = isMultiplayer
    ? duelState?.opponent.avatarEmoji || '🥷'
    : bot.avatarEmoji;

  // Waiting room view if challenger is waiting for accept
  if (isMultiplayer && duelState?.status === 'waiting') {
    return (
      <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <Pressable
            onPress={handleSafeClose}
            style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            hitSlop={8}
            accessibilityLabel="Close Karuta Battle"
          >
            <X size={20} color={theme.textPrimary} />
          </Pressable>
          <View style={styles.headerTitleWrap}>
            <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
              🎴 競技かるた • Live Battle
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
              Waiting for them to accept the Karuta challenge. Fast-slap battle begins immediately on accept!
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
          accessibilityLabel="Close Karuta Battle"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerTitleWrap}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
            🥋 競技かるた (Karuta Battle) {isMultiplayer && '• LIVE'}
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
            {isMultiplayer ? `1-on-1 vs ${opponentName}` : 'Listen & Slap the matching Tatami card!'}
          </Text>
        </View>

        {!isMultiplayer && (
          <Pressable
            onPress={() => startNewSoloMatch(difficulty, gameMode)}
            style={[styles.resetBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            hitSlop={8}
          >
            <RotateCcw size={18} color={theme.textPrimary} />
          </Pressable>
        )}
      </View>

      {/* Mode / Opponent Banner */}
      {!isMultiplayer ? (
        <View style={[styles.modeBar, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <Pressable
            onPress={() => {
              if (gameMode !== 'poem') {
                Haptics.selectionAsync().catch(() => {});
                setGameMode('poem');
                startNewSoloMatch(difficulty, 'poem');
              }
            }}
            style={[
              styles.modePill,
              { borderColor: theme.border },
              gameMode === 'poem' && { backgroundColor: '#8B0000', borderColor: '#8B0000' },
            ]}
          >
            <Text
              style={[
                styles.modePillText,
                { color: theme.textSecondary },
                gameMode === 'poem' && { color: '#FFF', fontWeight: '800' },
              ]}
            >
              🌸 百人一首 (Classic Poems)
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              if (gameMode !== 'vocab') {
                Haptics.selectionAsync().catch(() => {});
                setGameMode('vocab');
                startNewSoloMatch(difficulty, 'vocab');
              }
            }}
            style={[
              styles.modePill,
              { borderColor: theme.border },
              gameMode === 'vocab' && { backgroundColor: theme.primary, borderColor: theme.primary },
            ]}
          >
            <Text
              style={[
                styles.modePillText,
                { color: theme.textSecondary },
                gameMode === 'vocab' && { color: theme.textOnPrimary, fontWeight: '800' },
              ]}
            >
              🔤 語彙 (Vocab & Kanji)
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={[styles.liveOpponentBar, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
          <View style={styles.liveOpponentRow}>
            <View style={styles.livePlayerBadge}>
              <Text style={styles.liveScoreBadgeText}>YOU: {playerCardsCount} cards</Text>
            </View>
            <Text style={[styles.liveVsText, { color: theme.textSecondary }]}>
              CARD {Math.min(currentCardIndex + 1, matCards.length)} OF {matCards.length}
            </Text>
            <View style={styles.liveOpponentBadge}>
              <Text style={styles.liveScoreBadgeText}>{opponentName}: {botCardsCount} cards</Text>
            </View>
          </View>
          {duelState?.opponentGone && (
            <View style={styles.opponentGoneNotice}>
              <WifiOff size={14} color="#EF4444" />
              <Text style={styles.opponentGoneText}>Opponent connection lost</Text>
            </View>
          )}
        </View>
      )}

      {/* Scoreboard Bar */}
      <View style={[styles.scoreboard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <View style={styles.scorePlayer}>
          <Text style={styles.scoreAvatar}>🥋</Text>
          <View>
            <Text style={[styles.scoreName, { color: theme.textPrimary }]}>YOU</Text>
            <Text style={[styles.scoreCards, { color: theme.primary }]}>
              {playerCardsCount} Cards {!isMultiplayer && `(${playerScore} pts)`}
            </Text>
          </View>
        </View>

        <View style={styles.matchProgress}>
          <Text style={[styles.vsText, { color: theme.textMuted }]}>VS</Text>
          <Text style={[styles.roundIndicator, { color: theme.textSecondary }]}>
            {Math.min(currentCardIndex + 1, matCards.length)} / {matCards.length}
          </Text>
        </View>

        <View style={styles.scoreBot}>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.scoreName, { color: theme.textPrimary }]}>{opponentName}</Text>
            <Text style={[styles.scoreCards, { color: '#E53E3E' }]}>
              {botCardsCount} Cards
            </Text>
          </View>
          <Text style={styles.scoreAvatar}>{opponentAvatar}</Text>
        </View>
      </View>

      {/* Yomite (The Reader Clue Box) */}
      {currentTargetCard && !isMatchOver && (
        <View style={[styles.readerContainer, { backgroundColor: theme.surface, borderColor: theme.primary }]}>
          <View style={styles.readerHeader}>
            <View style={[styles.readerBadge, currentTargetCard.mode === 'poem' && { backgroundColor: '#8B0000' }]}>
              <Volume2 size={13} color="#FFF" />
              <Text style={styles.readerBadgeText}>
                {currentTargetCard.mode === 'poem'
                  ? `百人一首 #${currentTargetCard.poemNumber || ''} • ${currentTargetCard.poetJapanese || ''}`
                  : '詠み手 (YOMITE READER)'}
              </Text>
            </View>

            <Pressable
              onPress={() => speakJapanese(currentTargetCard.audioText).catch(() => {})}
              style={[styles.audioReplayBtn, { backgroundColor: theme.surfaceSubtle }]}
              hitSlop={8}
            >
              <Volume2 size={14} color={theme.primary} />
              <Text style={[styles.audioReplayText, { color: theme.primary }]}>Repeat</Text>
            </Pressable>
          </View>

          {currentTargetCard.mode === 'poem' && currentTargetCard.kamiNoKu ? (
            <View style={styles.poemClueWrap}>
              <Text style={[styles.kamiNoKuText, { color: theme.textPrimary }]}>
                {currentTargetCard.kamiNoKu}
              </Text>
              <Text style={[styles.poemEnglish, { color: theme.textSecondary }]}>
                {currentTargetCard.english}
              </Text>
            </View>
          ) : (
            <View style={styles.vocabClueWrap}>
              <Text style={[styles.vocabClueText, { color: theme.textPrimary }]}>
                {currentTargetCard.english}
              </Text>
            </View>
          )}

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
      )}

      {/* Event Banner */}
      {lastEvent && (
        <View style={[styles.eventBanner, { backgroundColor: theme.surfaceSubtle }]}>
          <Text style={[styles.eventText, { color: theme.textPrimary }]}>{lastEvent}</Text>
        </View>
      )}

      {/* Tatami Mat Field */}
      <View style={styles.tatamiWrapper}>
        <View style={[styles.tatamiMat, { backgroundColor: '#1b3b22', borderColor: '#d4af37' }]}>
          <View style={styles.cardsGrid}>
            {matCards.map((card) => {
              const claimedBy = claimedCards[card.id];
              const isOtetsuki = otetsukiCardId === card.id;

              return (
                <Pressable
                  key={card.id}
                  disabled={Boolean(claimedBy) || !isRoundActive}
                  onPress={() => handlePlayerSlap(card)}
                  style={({ pressed }) => [
                    styles.cardTile,
                    {
                      backgroundColor: '#FCFAF2',
                      borderColor: '#4A3525',
                    },
                    claimedBy === 'player' && styles.cardClaimedPlayer,
                    claimedBy === 'bot' && styles.cardClaimedBot,
                    isOtetsuki && styles.cardOtetsuki,
                    pressed && !claimedBy && styles.cardPressed,
                  ]}
                >
                  {claimedBy === 'player' ? (
                    <View style={styles.claimedOverlay}>
                      <Text style={styles.claimedIcon}>🥋</Text>
                      <Text style={styles.claimedLabelPlayer}>YOU 取</Text>
                    </View>
                  ) : claimedBy === 'bot' ? (
                    <View style={styles.claimedOverlay}>
                      <Text style={styles.claimedIcon}>{opponentAvatar}</Text>
                      <Text style={styles.claimedLabelBot}>OPP 取</Text>
                    </View>
                  ) : (
                    <>
                      <Text
                        style={[
                          styles.cardJapanese,
                          card.mode === 'poem'
                            ? styles.cardJapanesePoem
                            : card.japanese.length > 5 && styles.cardJapaneseLong,
                        ]}
                        numberOfLines={card.mode === 'poem' ? 3 : 2}
                      >
                        {card.japanese}
                      </Text>
                      <Text
                        style={[
                          styles.cardReading,
                          card.mode === 'poem' && styles.cardReadingPoem,
                        ]}
                        numberOfLines={1}
                      >
                        {card.reading}
                      </Text>
                    </>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>

      {/* Match Over Modal Overlay */}
      {isMatchOver && (
        <View style={[styles.gameOverModal, { backgroundColor: 'rgba(0,0,0,0.85)' }]}>
          <View style={[styles.gameOverCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Text style={styles.gameOverEmoji}>
              {isPlayerWinner ? '🏆' : isDraw ? '🤝' : '👺'}
            </Text>

            <Text style={[styles.gameOverTitle, { color: theme.textPrimary }]}>
              {isPlayerWinner ? '勝利! VICTORY!' : isDraw ? '引き分け! DRAW!' : '敗北 DEFEAT'}
            </Text>

            <Text style={[styles.gameOverSubtitle, { color: theme.textSecondary }]}>
              {isMultiplayer
                ? duelState?.result?.reason === 'forfeit'
                  ? isPlayerWinner
                    ? `${opponentName} forfeited the battle!`
                    : 'You forfeited the battle.'
                  : `Final score: You ${playerCardsCount} - ${botCardsCount} ${opponentName}`
                : isPlayerWinner
                ? `You out-slapped ${bot.name} on the tatami mat!`
                : `${bot.name} was faster to the cards this match!`}
            </Text>

            <View style={[styles.statsRow, { backgroundColor: theme.surfaceSubtle }]}>
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {playerCardsCount} - {botCardsCount}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Cards Won</Text>
              </View>

              {!isMultiplayer && (
                <View style={styles.statBox}>
                  <Text style={[styles.statValue, { color: theme.primary }]}>
                    {playerScore}
                  </Text>
                  <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Score Pts</Text>
                </View>
              )}

              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {avgReactionSec}s
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Avg Reaction</Text>
              </View>
            </View>

            <View style={styles.gameOverActions}>
              {!isMultiplayer && (
                <Pressable
                  onPress={() => startNewSoloMatch(difficulty, gameMode)}
                  style={[styles.rematchBtn, { backgroundColor: theme.primary }]}
                >
                  <RotateCcw size={18} color={theme.textOnPrimary} />
                  <Text style={[styles.rematchBtnText, { color: theme.textOnPrimary }]}>
                    Play Again (もう一度)
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
  modeBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    gap: 8,
  },
  modePill: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modePillText: {
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
  scoreboard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  scorePlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scoreBot: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scoreAvatar: {
    fontSize: 22,
  },
  scoreName: {
    fontSize: 12,
    fontWeight: '800',
  },
  scoreCards: {
    fontSize: 11,
    fontWeight: '700',
  },
  matchProgress: {
    alignItems: 'center',
  },
  vsText: {
    fontSize: 11,
    fontWeight: '900',
  },
  roundIndicator: {
    fontSize: 10,
    fontWeight: '700',
  },
  readerContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    padding: 12,
    borderRadius: radii.lg,
    borderWidth: 1.5,
    ...shadows.sm,
  },
  readerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  readerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#2B6CB0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.full,
  },
  readerBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
  audioReplayBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.full,
  },
  audioReplayText: {
    fontSize: 11,
    fontWeight: '700',
  },
  poemClueWrap: {
    alignItems: 'center',
    marginVertical: 4,
  },
  kamiNoKuText: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 22,
  },
  poemEnglish: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
    fontStyle: 'italic',
  },
  vocabClueWrap: {
    alignItems: 'center',
    marginVertical: 6,
  },
  vocabClueText: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  timerTrack: {
    width: '100%',
    height: 4,
    borderRadius: radii.full,
    overflow: 'hidden',
    marginTop: 8,
  },
  timerFill: {
    height: '100%',
    width: '100%',
  },
  eventBanner: {
    marginHorizontal: 16,
    marginTop: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: radii.md,
    alignItems: 'center',
  },
  eventText: {
    fontSize: 11,
    fontWeight: '700',
  },
  tatamiWrapper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tatamiMat: {
    flex: 1,
    borderRadius: radii.xl,
    borderWidth: 3,
    padding: 10,
    justifyContent: 'center',
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  cardTile: {
    width: '23%',
    aspectRatio: 0.68,
    borderRadius: radii.md,
    borderWidth: 1.5,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  cardPressed: {
    transform: [{ scale: 0.94 }],
  },
  cardClaimedPlayer: {
    backgroundColor: '#1E3A2F',
    borderColor: '#48BB78',
    opacity: 0.6,
  },
  cardClaimedBot: {
    backgroundColor: '#3A1E1E',
    borderColor: '#E53E3E',
    opacity: 0.6,
  },
  cardOtetsuki: {
    backgroundColor: '#FED7D7',
    borderColor: '#E53E3E',
  },
  claimedOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  claimedIcon: {
    fontSize: 18,
  },
  claimedLabelPlayer: {
    fontSize: 9,
    fontWeight: '900',
    color: '#48BB78',
    marginTop: 2,
  },
  claimedLabelBot: {
    fontSize: 9,
    fontWeight: '900',
    color: '#E53E3E',
    marginTop: 2,
  },
  cardJapanese: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1A202C',
    textAlign: 'center',
    lineHeight: 16,
  },
  cardJapanesePoem: {
    fontSize: 11,
    lineHeight: 14,
  },
  cardJapaneseLong: {
    fontSize: 10,
    lineHeight: 12,
  },
  cardReading: {
    fontSize: 8,
    fontWeight: '600',
    color: '#718096',
    textAlign: 'center',
    marginTop: 2,
  },
  cardReadingPoem: {
    fontSize: 7,
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
