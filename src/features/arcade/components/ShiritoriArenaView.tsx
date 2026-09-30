import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  X,
  Volume2,
  Send,
  Sparkles,
  Trophy,
  Flame,
  AlertTriangle,
  RotateCcw,
  Zap,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import * as wanakana from 'wanakana';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import {
  BOT_PROFILES,
  getBotShiritoriMove,
  getPlayerSuggestions,
  getShiritoriLastKana,
  validateShiritoriMove,
  type ShiritoriDifficulty,
  type ShiritoriTurn,
  type ShiritoriWord,
} from '../lib/shiritoriEngine';

interface ShiritoriArenaViewProps {
  onClose: () => void;
}

export function ShiritoriArenaView({ onClose }: ShiritoriArenaViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const [difficulty, setDifficulty] = useState<ShiritoriDifficulty>('medium');
  const bot = BOT_PROFILES[difficulty];

  // Game state
  const [history, setHistory] = useState<ShiritoriTurn[]>([]);
  const [usedKanaSet, setUsedKanaSet] = useState<Set<string>>(new Set());
  const [requiredKana, setRequiredKana] = useState<string>('こ');
  const [currentTurn, setCurrentTurn] = useState<'player' | 'bot'>('player');
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [inputWord, setInputWord] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Score & Streak
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Timer
  const TURN_SECONDS = difficulty === 'hard' ? 12 : difficulty === 'medium' ? 20 : 30;
  const [timeLeft, setTimeLeft] = useState(TURN_SECONDS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Game Over state
  const [gameOver, setGameOver] = useState<{
    isOver: boolean;
    winner: 'player' | 'bot' | null;
    reason: string;
  }>({ isOver: false, winner: null, reason: '' });

  const scrollRef = useRef<ScrollView>(null);

  // Suggestions for player
  const suggestions = getPlayerSuggestions(requiredKana, usedKanaSet, 4);

  // Start initial match
  const startNewGame = useCallback((diff: ShiritoriDifficulty = difficulty) => {
    const starterWords: ShiritoriWord[] = [
      { word: '猫', kana: 'ねこ', romaji: 'neko', english: 'Cat' },
      { word: '桜', kana: 'さくら', romaji: 'sakura', english: 'Cherry blossom' },
      { word: '太陽', kana: 'たいよう', romaji: 'taiyou', english: 'Sun' },
      { word: '寿司', kana: 'すし', romaji: 'sushi', english: 'Sushi' },
    ];
    const starter = starterWords[Math.floor(Math.random() * starterWords.length)];
    const nextKana = getShiritoriLastKana(starter.kana);

    const initialTurn: ShiritoriTurn = {
      id: 'turn_start',
      player: 'opponent',
      word: starter.word,
      kana: starter.kana,
      romaji: starter.romaji,
      english: starter.english,
      timestamp: Date.now(),
    };

    setHistory([initialTurn]);
    setUsedKanaSet(new Set([starter.kana]));
    setRequiredKana(nextKana);
    setCurrentTurn('player');
    setIsBotThinking(false);
    setInputWord('');
    setErrorMessage(null);
    setScore(0);
    setStreak(0);
    setTimeLeft(diff === 'hard' ? 10 : diff === 'medium' ? 15 : 20);
    setGameOver({ isOver: false, winner: null, reason: '' });
  }, [difficulty]);

  useEffect(() => {
    startNewGame(difficulty);
  }, []);

  // Turn timer countdown
  useEffect(() => {
    if (gameOver.isOver || isBotThinking) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          if (currentTurn === 'player') {
            handleGameOver('bot', 'Time ran out on your turn!');
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentTurn, gameOver.isOver, isBotThinking]);

  const handlePlayAudio = async (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(text, { rate: 0.9 });
  };

  const handleGameOver = (winner: 'player' | 'bot', reason: string) => {
    if (winner === 'player') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    }
    setGameOver({ isOver: true, winner, reason });
  };

  // Bot Turn Logic
  const triggerBotTurn = (nextKana: string, currentUsed: Set<string>) => {
    setCurrentTurn('bot');
    setIsBotThinking(true);
    setTimeLeft(TURN_SECONDS);

    setTimeout(() => {
      const botMove = getBotShiritoriMove(nextKana, currentUsed, difficulty);

      if (!botMove) {
        // Bot is stumped!
        handleGameOver('player', `${bot.japaneseName} is stumped! You win!`);
        setIsBotThinking(false);
        return;
      }

      // Check if bot ended in 'n'
      if (botMove.kana.endsWith('ん')) {
        const turn: ShiritoriTurn = {
          id: `turn_${Date.now()}`,
          player: 'opponent',
          word: botMove.word,
          kana: botMove.kana,
          romaji: botMove.romaji,
          english: botMove.english,
          timestamp: Date.now(),
        };
        setHistory(prev => [...prev, turn]);
        handlePlayAudio(botMove.word).catch(() => {});
        handleGameOver('player', `${bot.japaneseName} played a word ending in「ん」! You win!`);
        setIsBotThinking(false);
        return;
      }

      // Normal bot turn
      const turn: ShiritoriTurn = {
        id: `turn_${Date.now()}`,
        player: 'opponent',
        word: botMove.word,
        kana: botMove.kana,
        romaji: botMove.romaji,
        english: botMove.english,
        timestamp: Date.now(),
      };

      const newNextKana = getShiritoriLastKana(botMove.kana);
      const nextUsed = new Set(currentUsed);
      nextUsed.add(botMove.kana);

      setHistory(prev => [...prev, turn]);
      setUsedKanaSet(nextUsed);
      setRequiredKana(newNextKana);
      setCurrentTurn('player');
      setIsBotThinking(false);
      setTimeLeft(TURN_SECONDS);
      handlePlayAudio(botMove.word).catch(() => {});

      setTimeout(() => {
        scrollRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, bot.thinkTimeMs);
  };

  // Player Word Submission
  const handlePlayerMove = (wordToSubmit: string) => {
    if (currentTurn !== 'player' || gameOver.isOver || isBotThinking) return;

    setErrorMessage(null);
    const result = validateShiritoriMove(wordToSubmit, requiredKana, usedKanaSet);

    if (!result.isValid) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      setErrorMessage(result.message || 'Invalid word.');
      return;
    }

    const wordData = result.matchedWord!;
    const playerTurn: ShiritoriTurn = {
      id: `turn_${Date.now()}`,
      player: 'player',
      word: wordData.word,
      kana: wordData.kana,
      romaji: wordData.romaji,
      english: wordData.english,
      timestamp: Date.now(),
    };

    // If player played a word ending in 'ん' -> Instant Loss!
    if (result.error === 'ends_in_n') {
      setHistory(prev => [...prev, playerTurn]);
      handlePlayAudio(wordData.word).catch(() => {});
      handleGameOver('bot', `You played「${wordData.word}」which ends in「ん」!`);
      return;
    }

    // Valid move!
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    handlePlayAudio(wordData.word).catch(() => {});

    const newNextKana = getShiritoriLastKana(wordData.kana);
    const nextUsed = new Set(usedKanaSet);
    nextUsed.add(wordData.kana);

    const newScore = score + (streak + 1) * 20;
    const newStreak = streak + 1;

    setHistory(prev => [...prev, playerTurn]);
    setUsedKanaSet(nextUsed);
    setRequiredKana(newNextKana);
    setScore(newScore);
    setStreak(newStreak);
    setInputWord('');

    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Pass turn to Bot
    triggerBotTurn(newNextKana, nextUsed);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Navigation & Status Bar */}
      <View style={[styles.navBar, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={onClose}
          style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
          hitSlop={8}
          accessibilityLabel="Exit Shiritori"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.botProfileHeader}>
          <Text style={styles.botAvatar}>{bot.avatarEmoji}</Text>
          <View>
            <View style={styles.botNameRow}>
              <Text style={[styles.botName, { color: theme.textPrimary }]}>
                {bot.name}
              </Text>
              <Text style={[styles.botJpName, { color: theme.textSecondary }]}>
                ({bot.japaneseName})
              </Text>
            </View>
            <Text style={[styles.botSubtitle, { color: theme.textMuted }]}>
              {bot.title}
            </Text>
          </View>
        </View>

        {/* Stats Pills */}
        <View style={styles.statsPillGroup}>
          <View style={[styles.statPill, { backgroundColor: '#F9731618' }]}>
            <Flame size={12} color="#F97316" />
            <Text style={[styles.statPillText, { color: '#F97316' }]}>{streak}</Text>
          </View>
          <View style={[styles.statPill, { backgroundColor: theme.primaryLight }]}>
            <Trophy size={12} color={theme.primary} />
            <Text style={[styles.statPillText, { color: theme.primary }]}>{score}</Text>
          </View>
        </View>
      </View>

      {/* Difficulty Selector Row */}
      <View style={[styles.diffRow, { backgroundColor: theme.surfaceSubtle, borderBottomColor: theme.border }]}>
        {(['easy', 'medium', 'hard'] as const).map(d => {
          const isSelected = difficulty === d;
          return (
            <Pressable
              key={d}
              onPress={() => {
                Haptics.selectionAsync().catch(() => {});
                setDifficulty(d);
                startNewGame(d);
              }}
              style={[
                styles.diffBtn,
                isSelected && { backgroundColor: theme.surface, borderColor: theme.primary },
              ]}
            >
              <Text
                style={[
                  styles.diffBtnText,
                  { color: isSelected ? theme.primary : theme.textMuted },
                  isSelected && { fontWeight: '800' },
                ]}
              >
                {d === 'easy' ? '🦝 Easy' : d === 'medium' ? '🦊 Medium' : '👺 Master'}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Required Next Kana Indicator & Turn Timer Banner */}
      <View style={[styles.turnBanner, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View style={styles.requiredKanaBox}>
          <Text style={[styles.requiredLabel, { color: theme.textMuted }]}>NEXT KANA</Text>
          <View style={[styles.targetKanaCircle, { backgroundColor: theme.primary }]}>
            <Text style={[styles.targetKanaText, { color: theme.textOnPrimary }]}>
              {requiredKana}
            </Text>
          </View>
        </View>

        <View style={styles.turnStatusBox}>
          <Text style={[styles.turnStatusText, { color: currentTurn === 'player' ? theme.primary : theme.textSecondary }]}>
            {isBotThinking
              ? `${bot.name} is thinking...`
              : currentTurn === 'player'
              ? 'Your Turn! Pick or type a word'
              : `${bot.name}'s turn`}
          </Text>

          {/* Time Remaining Bar */}
          <View style={[styles.timerBarBg, { backgroundColor: theme.surfaceSubtle }]}>
            <View
              style={[
                styles.timerBarFill,
                {
                  width: `${(timeLeft / TURN_SECONDS) * 100}%`,
                  backgroundColor: timeLeft <= 4 ? '#EF4444' : theme.primary,
                },
              ]}
            />
          </View>
          <Text style={[styles.timerSecondsText, { color: timeLeft <= 4 ? '#EF4444' : theme.textMuted }]}>
            ⏱️ {timeLeft}s remaining
          </Text>
        </View>
      </View>

      {/* Word Chain History Stream */}
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.streamContent}
        showsVerticalScrollIndicator={false}
      >
        {history.map((turn, idx) => {
          const isPlayer = turn.player === 'player';
          const lastChar = getShiritoriLastKana(turn.kana);

          return (
            <View
              key={turn.id}
              style={[
                styles.turnRow,
                isPlayer ? styles.turnRowPlayer : styles.turnRowBot,
              ]}
            >
              {!isPlayer && (
                <View style={[styles.chatAvatar, { backgroundColor: theme.surfaceSubtle }]}>
                  <Text style={{ fontSize: 18 }}>{bot.avatarEmoji}</Text>
                </View>
              )}

              <View
                style={[
                  styles.chatBubble,
                  {
                    backgroundColor: isPlayer ? theme.primary : theme.surface,
                    borderColor: isPlayer ? theme.primary : theme.border,
                  },
                ]}
              >
                <View style={styles.bubbleTop}>
                  <CopyableJapaneseText text={turn.word}>
                    <Text
                      style={[
                        styles.bubbleWord,
                        { color: isPlayer ? theme.textOnPrimary : theme.textPrimary },
                      ]}
                    >
                      {turn.word}
                    </Text>
                  </CopyableJapaneseText>

                  <Pressable
                    onPress={() => handlePlayAudio(turn.word)}
                    style={[
                      styles.miniAudioBtn,
                      { backgroundColor: isPlayer ? '#FFFFFF30' : theme.surfaceSubtle },
                    ]}
                    accessibilityLabel={`Pronounce ${turn.word}`}
                    hitSlop={6}
                  >
                    <Volume2
                      size={14}
                      color={isPlayer ? theme.textOnPrimary : theme.primary}
                    />
                  </Pressable>
                </View>

                {turn.romaji ? (
                  <Text
                    style={[
                      styles.bubbleRomaji,
                      { color: isPlayer ? '#FFFFFFDD' : theme.textSecondary },
                    ]}
                  >
                    {turn.kana} • {turn.romaji}
                  </Text>
                ) : null}

                <Text
                  style={[
                    styles.bubbleEnglish,
                    { color: isPlayer ? '#FFFFFFBB' : theme.textMuted },
                  ]}
                  numberOfLines={1}
                >
                  {turn.english}
                </Text>

                {/* Trailing next-character hint badge */}
                <View
                  style={[
                    styles.chainNextBadge,
                    { backgroundColor: isPlayer ? '#FFFFFF25' : theme.primaryLight },
                  ]}
                >
                  <Text
                    style={[
                      styles.chainNextText,
                      { color: isPlayer ? '#FFFFFF' : theme.primary },
                    ]}
                  >
                    Ends with「{lastChar}」➔
                  </Text>
                </View>
              </View>

              {isPlayer && (
                <View style={[styles.chatAvatar, { backgroundColor: theme.primaryLight }]}>
                  <Text style={{ fontSize: 18 }}>👤</Text>
                </View>
              )}
            </View>
          );
        })}

        {isBotThinking && (
          <View style={[styles.turnRow, styles.turnRowBot]}>
            <View style={[styles.chatAvatar, { backgroundColor: theme.surfaceSubtle }]}>
              <Text style={{ fontSize: 18 }}>{bot.avatarEmoji}</Text>
            </View>
            <View style={[styles.chatBubble, styles.thinkingBubble, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.thinkingText, { color: theme.textSecondary }]}>
                {bot.japaneseName} is thinking... 💭
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Error Message Notice */}
      {errorMessage && (
        <View style={styles.errorNotice}>
          <AlertTriangle size={14} color="#EF4444" />
          <Text style={styles.errorNoticeText}>{errorMessage}</Text>
        </View>
      )}

      {/* Bottom Controls / Player Input */}
      {!gameOver.isOver ? (
        <View style={[styles.bottomTray, { backgroundColor: theme.surface, borderTopColor: theme.border, paddingBottom: insets.bottom + 10 }]}>
          {/* Quick Word Suggestion Chips */}
          <View style={styles.suggestionsRow}>
            <Text style={[styles.suggestionsLabel, { color: theme.textMuted }]}>
              QUICK PICKS ({requiredKana}):
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsScroll}>
              {suggestions.map(s => (
                <Pressable
                  key={s.kana}
                  onPress={() => handlePlayerMove(s.word)}
                  style={[styles.suggestChip, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
                  accessibilityLabel={`Pick ${s.word}`}
                >
                  <Text style={[styles.suggestChipJp, { color: theme.textPrimary }]}>
                    {s.word}
                  </Text>
                  <Text style={[styles.suggestChipEng, { color: theme.textMuted }]}>
                    {s.english}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Typing Input Bar */}
          <View style={styles.inputBar}>
            <TextInput
              style={[styles.textInput, { backgroundColor: theme.surfaceSubtle, color: theme.textPrimary, borderColor: theme.border }]}
              placeholder={`Word starting with「${requiredKana}」...`}
              placeholderTextColor={theme.textMuted}
              value={inputWord}
              onChangeText={val => {
                const converted = wanakana.toHiragana(val);
                setInputWord(converted);
                setErrorMessage(null);
              }}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              onSubmitEditing={() => handlePlayerMove(inputWord)}
            />

            <Pressable
              onPress={() => handlePlayerMove(inputWord)}
              style={[styles.sendBtn, { backgroundColor: theme.primary }]}
              accessibilityLabel="Send word"
            >
              <Send size={18} color={theme.textOnPrimary} />
            </Pressable>
          </View>
        </View>
      ) : (
        /* Game Over Banner Overlay */
        <View style={[styles.gameOverCard, { backgroundColor: theme.surface, borderTopColor: theme.border, paddingBottom: insets.bottom + 20 }]}>
          <Text style={{ fontSize: 36, textAlign: 'center', marginBottom: 6 }}>
            {gameOver.winner === 'player' ? '🎉' : '💥'}
          </Text>
          <Text style={[styles.gameOverTitle, { color: gameOver.winner === 'player' ? '#10B981' : '#EF4444' }]}>
            {gameOver.winner === 'player' ? 'VICTORY!' : 'GAME OVER'}
          </Text>
          <Text style={[styles.gameOverReason, { color: theme.textSecondary }]}>
            {gameOver.reason}
          </Text>
          <Text style={[styles.gameOverScore, { color: theme.textPrimary }]}>
            Final Chain: {history.length} words • Score: {score} pts
          </Text>

          <Pressable
            onPress={() => startNewGame()}
            style={[styles.playAgainBtn, { backgroundColor: theme.primary }]}
          >
            <RotateCcw size={18} color={theme.textOnPrimary} />
            <Text style={[styles.playAgainBtnText, { color: theme.textOnPrimary }]}>
              Play Next Match
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botProfileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  botAvatar: {
    fontSize: 28,
  },
  botNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  botName: {
    fontSize: 15,
    fontWeight: '800',
  },
  botJpName: {
    fontSize: 12,
    fontWeight: '600',
  },
  botSubtitle: {
    fontSize: 11,
    fontWeight: '500',
  },
  statsPillGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  statPillText: {
    fontSize: 12,
    fontWeight: '800',
  },
  diffRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 6,
    gap: 8,
    borderBottomWidth: 1,
  },
  diffBtn: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  diffBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  turnBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 14,
  },
  requiredKanaBox: {
    alignItems: 'center',
  },
  requiredLabel: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  targetKanaCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  targetKanaText: {
    fontSize: 22,
    fontWeight: '900',
  },
  turnStatusBox: {
    flex: 1,
  },
  turnStatusText: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  timerBarBg: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 4,
  },
  timerBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  timerSecondsText: {
    fontSize: 10,
    fontWeight: '600',
  },
  streamContent: {
    padding: 16,
    gap: 12,
  },
  turnRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    maxWidth: '85%',
  },
  turnRowPlayer: {
    alignSelf: 'flex-end',
  },
  turnRowBot: {
    alignSelf: 'flex-start',
  },
  chatAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBubble: {
    borderRadius: radii.xl,
    padding: 12,
    borderWidth: 1,
  },
  thinkingBubble: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  thinkingText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  bubbleTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 2,
  },
  bubbleWord: {
    fontSize: 18,
    fontWeight: '900',
  },
  miniAudioBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleRomaji: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  bubbleEnglish: {
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 6,
  },
  chainNextBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  chainNextText: {
    fontSize: 10,
    fontWeight: '800',
  },
  errorNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EF444420',
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: 'center',
  },
  errorNoticeText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomTray: {
    paddingHorizontal: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    gap: 10,
  },
  suggestionsRow: {
    gap: 6,
  },
  suggestionsLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  chipsScroll: {
    flexDirection: 'row',
    gap: 8,
  },
  suggestChip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.lg,
    borderWidth: 1,
    alignItems: 'center',
  },
  suggestChipJp: {
    fontSize: 13,
    fontWeight: '800',
  },
  suggestChipEng: {
    fontSize: 10,
    fontWeight: '500',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textInput: {
    flex: 1,
    height: 44,
    borderRadius: radii.lg,
    paddingHorizontal: 14,
    borderWidth: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameOverCard: {
    padding: 24,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  gameOverTitle: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
  gameOverReason: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  gameOverScore: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 16,
  },
  playAgainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    height: 44,
    borderRadius: radii.full,
  },
  playAgainBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },
});
