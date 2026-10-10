import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  Animated,
  ActivityIndicator,
  Keyboard,
  Platform,
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
  WifiOff,
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
  SHIRITORI_DICTIONARY,
} from '../lib/shiritoriEngine';
import { duelService } from '../services/duel.service';
import type { DuelState } from '../models/duel.model';

interface ShiritoriArenaViewProps {
  onClose: () => void;
  duelMatchId?: string;
  initialDuelState?: DuelState;
  onRematch?: () => void;
}

export function ShiritoriArenaView({
  onClose,
  duelMatchId,
  initialDuelState,
  onRematch,
}: ShiritoriArenaViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const isMultiplayer = Boolean(duelMatchId);

  // Multiplayer State
  const [duelState, setDuelState] = useState<DuelState | null>(initialDuelState || null);

  // Difficulty & Bot (Solo)
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
  const TURN_SECONDS = isMultiplayer
    ? 30
    : difficulty === 'hard'
    ? 12
    : difficulty === 'medium'
    ? 20
    : 30;
  const [timeLeft, setTimeLeft] = useState(TURN_SECONDS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Game Over state
  const [gameOver, setGameOver] = useState<{
    isOver: boolean;
    winner: 'player' | 'bot' | null;
    reason: string;
  }>({ isOver: false, winner: null, reason: '' });

  const scrollRef = useRef<ScrollView>(null);

  // Keyboard avoidance height tracking
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        setTimeout(() => {
          scrollRef.current?.scrollToEnd({ animated: true });
        }, 80);
      }
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // Suggestions for player
  const suggestions = getPlayerSuggestions(requiredKana, usedKanaSet, 4);

  const opponentName = isMultiplayer
    ? duelState?.opponent.displayName || 'Opponent'
    : bot.name;

  const opponentAvatar = isMultiplayer
    ? duelState?.opponent.avatarEmoji || '🥷'
    : bot.avatarEmoji;

  const handleSafeClose = () => {
    if (isMultiplayer && duelMatchId && duelState && (duelState.status === 'live' || duelState.status === 'waiting')) {
      duelService.forfeitDuel(duelMatchId).catch(() => {});
    }
    if (timerRef.current) clearInterval(timerRef.current);
    onClose();
  };

  // -------------------------------------------------------------
  // SOLO BOT MODE LOGIC
  // -------------------------------------------------------------
  const startNewGame = useCallback((diff: ShiritoriDifficulty = difficulty) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
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

  // -------------------------------------------------------------
  // MULTIPLAYER LIVE SYNCHRONIZATION
  // -------------------------------------------------------------
  useEffect(() => {
    if (!isMultiplayer || !duelMatchId) {
      const initTimer = setTimeout(() => {
        startNewGame(difficulty);
      }, 0);
      return () => {
        clearTimeout(initTimer);
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }

    // Initial fetch
    duelService.getDuelState(duelMatchId, true).then(res => {
      if (res.ok) setDuelState(res.data);
    });

    const stopPolling = duelService.pollDuel(
      duelMatchId,
      (newState) => {
        setDuelState(newState);

        // Synchronize word chain
        if (newState.words && newState.words.length > 0) {
          const usedSet = new Set<string>();
          const parsedHistory: ShiritoriTurn[] = newState.words.map((w, idx) => {
            const dictMatch = SHIRITORI_DICTIONARY.find(
              entry => entry.word === w.word || entry.kana === w.word
            );
            const kana = dictMatch?.kana || wanakana.toHiragana(w.word);
            usedSet.add(kana);

            return {
              id: `move_${idx}_${w.timestamp}`,
              player: w.by === 'me' ? 'player' : 'opponent',
              word: dictMatch?.word || w.word,
              kana,
              romaji: dictMatch?.romaji || wanakana.toRomaji(kana),
              english: dictMatch?.english || 'Custom Word',
              timestamp: w.timestamp,
            };
          });

          setHistory(parsedHistory);
          setUsedKanaSet(usedSet);

          const lastWord = parsedHistory[parsedHistory.length - 1];
          if (lastWord) {
            setRequiredKana(getShiritoriLastKana(lastWord.kana));
          }

          setTimeout(() => {
            scrollRef.current?.scrollToEnd({ animated: true });
          }, 100);
        }

        // Synchronize turn
        if (newState.status === 'live') {
          setCurrentTurn(newState.turn === 'me' ? 'player' : 'bot');
          if (newState.turnDeadlineMs) {
            const remSec = Math.max(0, Math.round((newState.turnDeadlineMs - Date.now()) / 1000));
            setTimeLeft(remSec);
          }
        } else if (newState.status === 'finished' || newState.status === 'forfeit') {
          const isMe = newState.result?.winner === 'me';
          let reason = '';
          if (newState.result?.reason === 'ended_with_n') {
            reason = isMe
              ? `${opponentName} played a word ending in「ん」!`
              : 'You played a word ending in「ん」!';
          } else if (newState.result?.reason === 'timeout') {
            reason = isMe
              ? `${opponentName} ran out of time!`
              : 'You ran out of time!';
          } else if (newState.result?.reason === 'forfeit') {
            reason = isMe
              ? `${opponentName} surrendered!`
              : 'You surrendered.';
          } else {
            reason = isMe ? 'You won the match!' : `${opponentName} won!`;
          }

          setGameOver({
            isOver: true,
            winner: isMe ? 'player' : 'bot',
            reason,
          });

          if (isMe) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
          } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
          }
        }
      },
      (err) => {
        console.warn('[ShiritoriArenaView] Poll error:', err);
      },
      700
    );

    return () => {
      stopPolling();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMultiplayer, duelMatchId]);

  // Turn timer countdown (Solo mode only; in multiplayer, deadline is server-driven)
  useEffect(() => {
    if (isMultiplayer || gameOver.isOver || isBotThinking) return;

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
  }, [currentTurn, gameOver.isOver, isBotThinking, isMultiplayer]);

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

  // Bot Turn Logic (Solo mode)
  const triggerBotTurn = (nextKana: string, currentUsed: Set<string>) => {
    setCurrentTurn('bot');
    setIsBotThinking(true);
    setTimeLeft(TURN_SECONDS);

    setTimeout(() => {
      const botMove = getBotShiritoriMove(nextKana, currentUsed, difficulty);

      if (!botMove) {
        handleGameOver('player', `${bot.japaneseName} is stumped! You win!`);
        setIsBotThinking(false);
        return;
      }

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

  // Player Word Submission (Solo & Multiplayer)
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

    if (isMultiplayer && duelMatchId) {
      setInputWord('');
      duelService.submitMove(duelMatchId, wordData.word).then(res => {
        if (!res.ok) {
          setErrorMessage(res.error.message);
        } else {
          setDuelState(res.data);
        }
      });
      return;
    }

    // Solo bot execution
    const playerTurn: ShiritoriTurn = {
      id: `turn_${Date.now()}`,
      player: 'player',
      word: wordData.word,
      kana: wordData.kana,
      romaji: wordData.romaji,
      english: wordData.english,
      timestamp: Date.now(),
    };

    if (result.error === 'ends_in_n') {
      setHistory(prev => [...prev, playerTurn]);
      handlePlayAudio(wordData.word).catch(() => {});
      handleGameOver('bot', `You played「${wordData.word}」which ends in「ん」!`);
      return;
    }

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

    triggerBotTurn(newNextKana, nextUsed);
  };

  // Waiting room view if challenger is waiting for accept
  if (isMultiplayer && duelState?.status === 'waiting') {
    return (
      <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
        <View style={[styles.navBar, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <Pressable
            onPress={handleSafeClose}
            style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
            hitSlop={8}
            accessibilityLabel="Close Shiritori"
          >
            <X size={20} color={theme.textPrimary} />
          </Pressable>
          <View style={styles.botProfileHeader}>
            <Text style={[styles.botName, { color: theme.textPrimary }]}>
              🗣️ しりとり • Live Duel
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
              Waiting for them to accept the Shiritori duel. Words will chain in real-time as turns flip back and forth!
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
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: keyboardHeight > 0 ? keyboardHeight : insets.bottom,
        },
      ]}
    >
      {/* Top Navigation & Status Bar */}
      <View style={[styles.navBar, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={handleSafeClose}
          style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
          hitSlop={8}
          accessibilityLabel="Exit Shiritori"
        >
          <X size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.botProfileHeader}>
          <Text style={styles.botAvatar}>{opponentAvatar}</Text>
          <View>
            <View style={styles.botNameRow}>
              <Text style={[styles.botName, { color: theme.textPrimary }]}>
                {opponentName} {isMultiplayer && '• LIVE'}
              </Text>
              {!isMultiplayer && (
                <Text style={[styles.botJpName, { color: theme.textSecondary }]}>
                  ({bot.japaneseName})
                </Text>
              )}
            </View>
            <Text style={[styles.botSubtitle, { color: theme.textMuted }]}>
              {isMultiplayer ? 'Turn-based Word Duel' : bot.title}
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

      {/* Difficulty Selector Row (Solo mode only) */}
      {!isMultiplayer && (
        <View style={[styles.diffRow, { backgroundColor: theme.surfaceSubtle, borderBottomColor: theme.border }]}>
          {(['easy', 'medium', 'hard'] as const).map(d => {
            const p = BOT_PROFILES[d];
            const isSelected = difficulty === d;
            return (
              <Pressable
                key={d}
                onPress={() => {
                  if (difficulty !== d) {
                    Haptics.selectionAsync().catch(() => {});
                    setDifficulty(d);
                    startNewGame(d);
                  }
                }}
                style={[
                  styles.diffPill,
                  isSelected && { backgroundColor: theme.primary },
                ]}
              >
                <Text style={styles.diffPillEmoji}>{p.avatarEmoji}</Text>
                <Text
                  style={[
                    styles.diffPillText,
                    { color: theme.textSecondary },
                    isSelected && { color: theme.textOnPrimary, fontWeight: '700' },
                  ]}
                >
                  {d.toUpperCase()}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {/* Current Turn & Required Kana Banner */}
      <View
        style={[
          styles.turnBanner,
          {
            backgroundColor: currentTurn === 'player' ? 'rgba(72, 187, 120, 0.08)' : theme.surface,
            borderBottomColor: currentTurn === 'player' ? '#48BB7840' : theme.border,
          },
        ]}
      >
        <View style={styles.requiredKanaBox}>
          <Text style={[styles.requiredKanaLabel, { color: currentTurn === 'player' ? '#276749' : theme.textMuted }]}>
            {currentTurn === 'player' ? 'Your Start Kana:' : 'Opponent Start:'}
          </Text>
          <View
            style={[
              styles.requiredKanaBadge,
              { backgroundColor: currentTurn === 'player' ? '#10B981' : '#8B0000' },
            ]}
          >
            <Text style={styles.requiredKanaChar}>{requiredKana}</Text>
          </View>
        </View>

        <View style={styles.turnStatusWrap}>
          {currentTurn === 'player' ? (
            <View style={[styles.statusTag, { backgroundColor: '#48BB7825', borderColor: '#48BB78', borderWidth: 1 }]}>
              <Text style={[styles.statusTagText, { color: '#276749', fontWeight: '900' }]}>
                🎯 YOUR TURN
              </Text>
            </View>
          ) : (
            <View style={[styles.statusTag, { backgroundColor: theme.surfaceSubtle }]}>
              <Text style={[styles.statusTagText, { color: theme.textSecondary }]}>
                {isMultiplayer ? `⏳ ${opponentName}'s Turn` : `⏳ ${bot.name} is thinking...`}
              </Text>
            </View>
          )}

          <View style={[styles.timerTag, timeLeft <= 5 && { backgroundColor: '#E53E3E20' }]}>
            <Text style={[styles.timerText, { color: timeLeft <= 5 ? '#E53E3E' : theme.textPrimary }]}>
              ⏱️ {timeLeft}s
            </Text>
          </View>
        </View>
      </View>

      {/* Speech Chat Stream */}
      <ScrollView
        ref={scrollRef}
        style={styles.chatScroll}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {history.map((turn) => {
          const isPlayer = turn.player === 'player';
          return (
            <View
              key={turn.id}
              style={[
                styles.messageRow,
                isPlayer ? styles.messageRowPlayer : styles.messageRowBot,
              ]}
            >
              {!isPlayer && (
                <Text style={styles.messageAvatar}>{opponentAvatar}</Text>
              )}

              <View
                style={[
                  styles.bubble,
                  isPlayer
                    ? [styles.bubblePlayer, { backgroundColor: theme.primary }]
                    : [styles.bubbleBot, { backgroundColor: theme.surface, borderColor: theme.border }],
                ]}
              >
                <View style={styles.bubbleWordHeader}>
                  <CopyableJapaneseText
                    text={turn.word}
                    textStyle={[
                      styles.bubbleWord,
                      { color: isPlayer ? theme.textOnPrimary : theme.textPrimary },
                    ]}
                  />
                  <Pressable
                    onPress={() => handlePlayAudio(turn.word)}
                    hitSlop={8}
                    style={styles.speakerBtn}
                  >
                    <Volume2
                      size={14}
                      color={isPlayer ? theme.textOnPrimary : theme.primary}
                    />
                  </Pressable>
                </View>

                <Text
                  style={[
                    styles.bubbleKana,
                    { color: isPlayer ? 'rgba(255,255,255,0.85)' : theme.textSecondary },
                  ]}
                >
                  {turn.kana} • {turn.romaji}
                </Text>

                <Text
                  style={[
                    styles.bubbleEnglish,
                    { color: isPlayer ? 'rgba(255,255,255,0.7)' : theme.textMuted },
                  ]}
                >
                  {turn.english}
                </Text>
              </View>

              {isPlayer && <Text style={styles.messageAvatar}>🥋</Text>}
            </View>
          );
        })}

        {isBotThinking && (
          <View style={[styles.messageRow, styles.messageRowBot]}>
            <Text style={styles.messageAvatar}>{opponentAvatar}</Text>
            <View style={[styles.bubble, styles.bubbleBot, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.thinkingText, { color: theme.textMuted }]}>
                {opponentName} is pondering words...
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Suggestions Row (Quick helper chips) */}
      {!gameOver.isOver && currentTurn === 'player' && suggestions.length > 0 && (
        <View style={[styles.suggestRow, { backgroundColor: theme.surfaceSubtle }]}>
          <Text style={[styles.suggestTitle, { color: theme.textMuted }]}>💡 Ideas:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.suggestScroll}>
            {suggestions.map((w) => (
              <Pressable
                key={w.word}
                onPress={() => handlePlayerMove(w.word)}
                style={[styles.suggestChip, { backgroundColor: theme.surface, borderColor: theme.border }]}
              >
                <Text style={[styles.suggestChipWord, { color: theme.textPrimary }]}>{w.word}</Text>
                <Text style={[styles.suggestChipEng, { color: theme.textSecondary }]}>({w.english})</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Input Bar or Game Over Panel */}
      {gameOver.isOver ? (
        <View style={[styles.gameOverCard, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
          <Text style={[styles.gameOverTitle, { color: gameOver.winner === 'player' ? theme.primary : '#E53E3E' }]}>
            {gameOver.winner === 'player' ? '🎉 勝負あり! YOU WIN!' : '💀 敗北... DEFEATED!'}
          </Text>
          <Text style={[styles.gameOverReason, { color: theme.textSecondary }]}>
            {gameOver.reason}
          </Text>
          <Text style={[styles.gameOverScore, { color: theme.textPrimary }]}>
            Final Words Chained: {history.length}
          </Text>

          {!isMultiplayer ? (
            <Pressable
              onPress={() => startNewGame(difficulty)}
              style={[styles.playAgainBtn, { backgroundColor: theme.primary }]}
            >
              <RotateCcw size={16} color={theme.textOnPrimary} />
              <Text style={[styles.playAgainBtnText, { color: theme.textOnPrimary }]}>
                Play Again (再戦)
              </Text>
            </Pressable>
          ) : (
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              {onRematch && (
                <Pressable
                  onPress={() => {
                    handleSafeClose();
                    onRematch();
                  }}
                  style={[styles.playAgainBtn, { backgroundColor: '#10B981' }]}
                >
                  <Text style={[styles.playAgainBtnText, { color: '#FFF' }]}>
                    ⚔️ Find Another Match
                  </Text>
                </Pressable>
              )}
              <Pressable
                onPress={handleSafeClose}
                style={[styles.playAgainBtn, { backgroundColor: theme.surfaceSubtle, borderWidth: 1, borderColor: theme.border }]}
              >
                <Text style={[styles.playAgainBtnText, { color: theme.textPrimary }]}>
                  Exit to Arcade
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      ) : (
        <View style={[styles.inputWrapper, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
          {errorMessage && (
            <View style={styles.errorNotice}>
              <AlertTriangle size={14} color="#E53E3E" />
              <Text style={styles.errorNoticeText}>{errorMessage}</Text>
            </View>
          )}

          <View style={styles.inputBar}>
            <TextInput
              style={[
                styles.textInput,
                {
                  backgroundColor: theme.background,
                  borderColor: errorMessage ? '#E53E3E' : theme.border,
                  color: theme.textPrimary,
                },
              ]}
              placeholder={
                currentTurn === 'player'
                  ? `Word starting with「${requiredKana}」...`
                  : `Waiting for ${opponentName}...`
              }
              placeholderTextColor={theme.textMuted}
              value={inputWord}
              onChangeText={setInputWord}
              onSubmitEditing={() => handlePlayerMove(inputWord)}
              editable={currentTurn === 'player'}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
            />

            <Pressable
              onPress={() => handlePlayerMove(inputWord)}
              disabled={currentTurn !== 'player' || !inputWord.trim()}
              style={[
                styles.sendBtn,
                {
                  backgroundColor: currentTurn === 'player' && inputWord.trim() ? theme.primary : theme.surfaceSubtle,
                },
              ]}
            >
              <Send
                size={18}
                color={currentTurn === 'player' && inputWord.trim() ? theme.textOnPrimary : theme.textMuted}
              />
            </Pressable>
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
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 12,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botProfileHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    fontSize: 14,
    fontWeight: '800',
  },
  botJpName: {
    fontSize: 12,
  },
  botSubtitle: {
    fontSize: 11,
  },
  statsPillGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
    gap: 4,
  },
  statPillText: {
    fontSize: 11,
    fontWeight: '800',
  },
  diffRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: 1,
    gap: 8,
  },
  diffPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: radii.full,
    gap: 4,
  },
  diffPillEmoji: {
    fontSize: 12,
  },
  diffPillText: {
    fontSize: 11,
  },
  turnBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  requiredKanaBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  requiredKanaLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  requiredKanaBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.md,
  },
  requiredKanaChar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '900',
  },
  turnStatusWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  statusTagText: {
    fontSize: 11,
    fontWeight: '800',
  },
  timerTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  timerText: {
    fontSize: 12,
    fontWeight: '800',
  },
  chatScroll: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
    gap: 12,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  messageRowPlayer: {
    justifyContent: 'flex-end',
  },
  messageRowBot: {
    justifyContent: 'flex-start',
  },
  messageAvatar: {
    fontSize: 22,
    marginBottom: 4,
  },
  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: radii.lg,
    ...shadows.sm,
  },
  bubblePlayer: {
    borderBottomRightRadius: 2,
  },
  bubbleBot: {
    borderBottomLeftRadius: 2,
    borderWidth: 1,
  },
  bubbleWordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  bubbleWord: {
    fontSize: 18,
    fontWeight: '900',
  },
  speakerBtn: {
    padding: 2,
  },
  bubbleKana: {
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 2,
  },
  bubbleEnglish: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  thinkingText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  inputWrapper: {
    padding: 12,
    borderTopWidth: 1,
  },
  errorNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  errorNoticeText: {
    color: '#E53E3E',
    fontSize: 12,
    fontWeight: '600',
  },
  suggestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 6,
  },
  suggestTitle: {
    fontSize: 11,
    fontWeight: '700',
  },
  suggestScroll: {
    gap: 6,
  },
  suggestChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  suggestChipWord: {
    fontSize: 12,
    fontWeight: '700',
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
});
