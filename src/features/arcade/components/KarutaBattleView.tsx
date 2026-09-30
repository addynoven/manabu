import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  Animated,
  Dimensions,
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

interface KarutaBattleViewProps {
  onClose: () => void;
}

interface SlapEvent {
  cardId: string;
  who: 'player' | 'bot';
  reactionMs: number;
  rank?: 'S' | 'A' | 'B' | 'C';
  points?: number;
}

export function KarutaBattleView({ onClose }: KarutaBattleViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  // Difficulty & Bot
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

  // Animations
  const timerAnim = useRef(new Animated.Value(1)).current;
  const slapScaleAnim = useRef(new Animated.Value(1)).current;

  const currentTargetCard = readingQueue[currentCardIndex] || null;

  const clearAllTimers = () => {
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    if (introTimerRef.current) clearTimeout(introTimerRef.current);
    if (otetsukiTimerRef.current) clearTimeout(otetsukiTimerRef.current);
  };

  // Initialize a new match
  const startNewMatch = useCallback((
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

    // Launch first round after brief intro delay
    introTimerRef.current = setTimeout(() => {
      startRound(0, match.readingQueue, diff);
    }, 600);
  }, [difficulty, gameMode]);

  // Start reading a specific card
  const startRound = (index: number, queue: KarutaCard[], diff: 'easy' | 'medium' | 'hard') => {
    if (index >= queue.length) {
      // All cards claimed!
      finishMatch();
      return;
    }

    const target = queue[index];
    if (!target) return;

    setIsRoundActive(true);
    setOtetsukiCardId(null);
    roundStartTimeRef.current = Date.now();

    // Play reader voice
    speakJapanese(target.audioText).catch(() => {});

    // Authentic Karuta recitation lead time: players listen to the poem recitation
    // before the decisive slap window closes.
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

    // Schedule bot reaction after recitation lead time
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    botTimerRef.current = setTimeout(() => {
      handleBotSlap(target, totalSlapWindow, queue, index, diff);
    }, totalSlapWindow);
  };

  // Bot attempts slap
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
      // Bot fouls (otetsuki)! Give player an extra 1.5 seconds
      setLastEvent(`⚠️ ${activeBot.avatarEmoji} ${activeBot.name} fouled (お手つき)!`);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      botTimerRef.current = setTimeout(() => {
        // Bot recovers and takes it
        finalizeCardClaim(target.id, 'bot', queue, index, diff);
      }, 1500);
      return;
    }

    // Bot claims the card
    setLastEvent(`👺 ${activeBot.name} slapped it! (${(reactionMs / 1000).toFixed(2)}s)`);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    finalizeCardClaim(target.id, 'bot', queue, index, diff);
  };

  // Player slaps a card on the tatami mat
  const handlePlayerSlap = (card: KarutaCard) => {
    if (!isRoundActive || !currentTargetCard || claimedCards[card.id]) return;

    const reactionMs = Date.now() - roundStartTimeRef.current;

    // Trigger visual slap bounce
    Animated.sequence([
      Animated.timing(slapScaleAnim, { toValue: 1.15, duration: 80, useNativeDriver: true }),
      Animated.timing(slapScaleAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();

    if (card.id === currentTargetCard.id) {
      // SUCCESS! Player slapped the correct card first!
      if (botTimerRef.current) clearTimeout(botTimerRef.current);
      setIsRoundActive(false);

      const scoreResult = calculateSlapScore(reactionMs);
      setPlayerScore(prev => prev + scoreResult.points);
      setPlayerSlapTimes(prev => [...prev, reactionMs]);

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
      setLastEvent(
        `⚡ SLAP! Rank ${scoreResult.rank} (${(reactionMs / 1000).toFixed(2)}s) +${scoreResult.points} pts!`
      );

      finalizeCardClaim(card.id, 'player', readingQueue, currentCardIndex, difficulty);
    } else {
      // OTETSUKI! (Foul - player slapped wrong card)
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setOtetsukiCardId(card.id);
      setPlayerScore(prev => Math.max(0, prev - 50));
      setLastEvent(`⚠️ お手つき (Otetsuki)! Wrong card (-50 pts)`);

      // Clear otetsuki highlight after 600ms
      otetsukiTimerRef.current = setTimeout(() => {
        setOtetsukiCardId(null);
      }, 600);
    }
  };

  // Finalize claiming a card and transition to next round
  const finalizeCardClaim = (
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
      startRound(nextIdx, queue, diff);
    }, 1500);
  };

  // Match ended
  const finishMatch = () => {
    clearAllTimers();
    setIsRoundActive(false);
    setIsMatchOver(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  };

  useEffect(() => {
    startNewMatch(difficulty, gameMode);
    return () => {
      clearAllTimers();
    };
  }, []);

  // Stats calculation
  const playerCardsCount = Object.values(claimedCards).filter(w => w === 'player').length;
  const botCardsCount = Object.values(claimedCards).filter(w => w === 'bot').length;
  const avgReactionSec =
    playerSlapTimes.length > 0
      ? (
          playerSlapTimes.reduce((acc, v) => acc + v, 0) /
          playerSlapTimes.length /
          1000
        ).toFixed(2)
      : '0.00';

  const isPlayerWinner = playerCardsCount > botCardsCount;
  const isDraw = playerCardsCount === botCardsCount;

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={onClose}
          style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={8}
          accessibilityLabel="Close Karuta Battle"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.headerTitleWrap}>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
            🥋 競技かるた (Karuta Battle)
          </Text>
          <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
            Listen & Slap the matching Tatami card!
          </Text>
        </View>

        <Pressable
          onPress={() => startNewMatch(difficulty, gameMode)}
          style={[styles.resetBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={8}
        >
          <RotateCcw size={18} color={theme.textPrimary} />
        </Pressable>
      </View>

      {/* Game Mode Selector: Classic Poem vs Vocab */}
      <View style={[styles.modeBar, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => {
            if (gameMode !== 'poem') {
              Haptics.selectionAsync().catch(() => {});
              setGameMode('poem');
              startNewMatch(difficulty, 'poem');
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
              startNewMatch(difficulty, 'vocab');
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

      {/* Difficulty Switcher */}
      <View style={[styles.diffBar, { backgroundColor: theme.surfaceSubtle }]}>
        {(['easy', 'medium', 'hard'] as const).map(diffKey => {
          const profile = KARUTA_BOT_PROFILES[diffKey];
          const isSelected = difficulty === diffKey;
          return (
            <Pressable
              key={diffKey}
              onPress={() => {
                if (difficulty !== diffKey) {
                  Haptics.selectionAsync().catch(() => {});
                  setDifficulty(diffKey);
                  startNewMatch(diffKey, gameMode);
                }
              }}
              style={[
                styles.diffPill,
                isSelected && { backgroundColor: theme.primary },
              ]}
            >
              <Text style={styles.diffEmoji}>{profile.avatarEmoji}</Text>
              <Text
                style={[
                  styles.diffLabel,
                  { color: theme.textSecondary },
                  isSelected && { color: theme.textOnPrimary, fontWeight: '700' },
                ]}
              >
                {diffKey.toUpperCase()}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Scoreboard Bar */}
      <View style={[styles.scoreboard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        {/* Player side */}
        <View style={styles.scorePlayer}>
          <Text style={styles.scoreAvatar}>🥋</Text>
          <View>
            <Text style={[styles.scoreName, { color: theme.textPrimary }]}>YOU</Text>
            <Text style={[styles.scoreCards, { color: theme.primary }]}>
              {playerCardsCount} Cards ({playerScore} pts)
            </Text>
          </View>
        </View>

        {/* Match progress */}
        <View style={styles.matchProgress}>
          <Text style={[styles.vsText, { color: theme.textMuted }]}>VS</Text>
          <Text style={[styles.roundIndicator, { color: theme.textSecondary }]}>
            {Math.min(currentCardIndex + 1, matCards.length)} / {matCards.length}
          </Text>
        </View>

        {/* Bot side */}
        <View style={styles.scoreBot}>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.scoreName, { color: theme.textPrimary }]}>{bot.name}</Text>
            <Text style={[styles.scoreCards, { color: '#E53E3E' }]}>
              {botCardsCount} Cards
            </Text>
          </View>
          <Text style={styles.scoreAvatar}>{bot.avatarEmoji}</Text>
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
                  ? `百人一首 #${currentTargetCard.poemNumber} • ${currentTargetCard.poetJapanese}`
                  : '詠み手 (YOMITE READER)'}
              </Text>
            </View>

            <Pressable
              onPress={() => speakJapanese(currentTargetCard.audioText).catch(() => {})}
              style={[styles.audioReplayBtn, { backgroundColor: theme.surfaceSubtle }]}
              hitSlop={8}
            >
              <Volume2 size={15} color={theme.primary} />
              <Text style={[styles.audioReplayText, { color: theme.primary }]}>Recite Again</Text>
            </Pressable>
          </View>

          {/* Poem Recitation vs Vocab Clue */}
          {currentTargetCard.mode === 'poem' ? (
            <View style={styles.poemPromptBox}>
              <Text style={[styles.poemKamiNoKu, { color: theme.textPrimary }]}>
                {currentTargetCard.kamiNoKu}
              </Text>
              {currentTargetCard.kimariji && (
                <View style={styles.kimarijiPill}>
                  <Sparkles size={11} color="#C53030" />
                  <Text style={styles.kimarijiPillText}>
                    決まり字: {currentTargetCard.kimariji}
                  </Text>
                </View>
              )}
              <Text style={[styles.cluePoemEnglish, { color: theme.textSecondary }]} numberOfLines={2}>
                "{currentTargetCard.english}"
              </Text>
            </View>
          ) : (
            <>
              <Text style={[styles.clueEnglish, { color: theme.textPrimary }]}>
                "{currentTargetCard.english}"
              </Text>
              <Text style={[styles.clueReadingHint, { color: theme.textSecondary }]}>
                Reading: {currentTargetCard.reading} ({currentTargetCard.romaji})
              </Text>
            </>
          )}

          {/* Shrinking reaction timer bar */}
          <View style={[styles.timerTrack, { backgroundColor: theme.border }]}>
            <Animated.View
              style={[
                styles.timerFill,
                {
                  backgroundColor: theme.primary,
                  transform: [
                    {
                      scaleX: timerAnim,
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      )}

      {/* Real-time Status / Event Banner */}
      {lastEvent && (
        <View style={[styles.eventBanner, { backgroundColor: theme.surfaceSubtle }]}>
          <Text style={[styles.eventText, { color: theme.textPrimary }]}>{lastEvent}</Text>
        </View>
      )}

      {/* Tatami Mat Field */}
      <View style={styles.tatamiWrapper}>
        <View style={[styles.tatamiMat, { backgroundColor: '#1b3b22', borderColor: '#d4af37' }]}>
          {/* Mat Grid of 8 Cards */}
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
                      <Text style={styles.claimedIcon}>{bot.avatarEmoji}</Text>
                      <Text style={styles.claimedLabelBot}>BOT 取</Text>
                    </View>
                  ) : (
                    <>
                      {/* Japanese Kanji / Kana or Poem Shimo-no-ku */}
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

                      {/* Reading hint */}
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
              {isPlayerWinner
                ? `You out-slapped ${bot.name} on the tatami mat!`
                : `${bot.name} was faster to the cards this match!`}
            </Text>

            {/* Score comparison stats */}
            <View style={[styles.statsRow, { backgroundColor: theme.surfaceSubtle }]}>
              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {playerCardsCount} - {botCardsCount}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Cards Won</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {playerScore}
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Score Pts</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: theme.primary }]}>
                  {avgReactionSec}s
                </Text>
                <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Avg Reaction</Text>
              </View>
            </View>

            {/* Action buttons */}
            <View style={styles.gameOverActions}>
              <Pressable
                onPress={() => startNewMatch(difficulty, gameMode)}
                style={[styles.rematchBtn, { backgroundColor: theme.primary }]}
              >
                <RotateCcw size={18} color={theme.textOnPrimary} />
                <Text style={[styles.rematchBtnText, { color: theme.textOnPrimary }]}>
                  Play Again (もう一度)
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
  modeBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    borderBottomWidth: 1,
  },
  modePill: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modePillText: {
    fontSize: 12,
    fontWeight: '700',
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
  scoreboard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: radii.lg,
    borderWidth: 1,
    ...shadows.sm,
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
    fontSize: 13,
    fontWeight: '700',
  },
  scoreCards: {
    fontSize: 12,
    fontWeight: '800',
  },
  matchProgress: {
    alignItems: 'center',
  },
  vsText: {
    fontSize: 12,
    fontWeight: '800',
  },
  roundIndicator: {
    fontSize: 11,
    fontWeight: '600',
  },
  readerContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    padding: 14,
    borderRadius: radii.lg,
    borderWidth: 2,
    ...shadows.md,
  },
  readerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  readerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B0000',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
    gap: 5,
  },
  readerBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  audioReplayBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.sm,
    gap: 4,
  },
  audioReplayText: {
    fontSize: 11,
    fontWeight: '700',
  },
  clueEnglish: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginVertical: 4,
  },
  clueReadingHint: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  poemPromptBox: {
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: 8,
  },
  poemKamiNoKu: {
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  kimarijiPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE3E3',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.full,
    gap: 4,
    marginVertical: 3,
  },
  kimarijiPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#C53030',
  },
  cluePoemEnglish: {
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 15,
    marginTop: 4,
    paddingHorizontal: 8,
  },
  timerTrack: {
    height: 4,
    borderRadius: radii.full,
    overflow: 'hidden',
  },
  timerFill: {
    height: '100%',
    width: '100%',
    transformOrigin: 'left',
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
  tatamiWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  tatamiMat: {
    flex: 1,
    borderRadius: radii.xl,
    borderWidth: 4,
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
    aspectRatio: 0.72,
    borderRadius: radii.md,
    borderWidth: 2,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  cardPressed: {
    transform: [{ scale: 0.95 }],
  },
  cardClaimedPlayer: {
    backgroundColor: '#1E3A2F',
    borderColor: '#48BB78',
    opacity: 0.7,
  },
  cardClaimedBot: {
    backgroundColor: '#3A1E1E',
    borderColor: '#E53E3E',
    opacity: 0.7,
  },
  cardOtetsuki: {
    backgroundColor: '#742A2A',
    borderColor: '#E53E3E',
  },
  cardJapanese: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1A202C',
    textAlign: 'center',
  },
  cardJapaneseLong: {
    fontSize: 11,
  },
  cardJapanesePoem: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '800',
  },
  cardReading: {
    fontSize: 9,
    color: '#718096',
    marginTop: 4,
    textAlign: 'center',
  },
  cardReadingPoem: {
    fontSize: 7.5,
    marginTop: 2,
  },
  claimedOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  claimedIcon: {
    fontSize: 16,
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
