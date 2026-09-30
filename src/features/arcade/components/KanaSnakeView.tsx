import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  PanResponder,
  type LayoutChangeEvent,
  type GestureResponderEvent,
  type PanResponderGestureState,
  Animated,
} from 'react-native';
import {
  X,
  RotateCcw,
  Trophy,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Flame,
  Zap,
  Sparkles,
  Touchpad,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { radii, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { useArcadeStore } from '../store/useArcadeStore';
import {
  DIFFICULTY_SPEED_MS,
  getNextHeadPosition,
  checkSelfCollision,
  spawnFoodPosition,
  getFoodForMode,
  isValidDirectionChange,
  calculateSnakeScore,
  type Coordinate,
  type Direction,
  type GridBounds,
  type SnakeDifficulty,
  type SnakeFoodItem,
  type SnakeMode,
  type WallMode,
} from '../lib/snakeEngine';

interface KanaSnakeViewProps {
  onClose: () => void;
}

const DEFAULT_CELL_SIZE = 20;
const MIN_COLS = 12;
const MIN_ROWS = 14;

export function KanaSnakeView({ onClose }: KanaSnakeViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const globalTtsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);
  const { snakeHighScore, recordSnakeScore } = useArcadeStore();

  // Settings
  const [mode, setMode] = useState<SnakeMode>('hiragana');
  const [difficulty, setDifficulty] = useState<SnakeDifficulty>('normal');
  const [wallMode, setWallMode] = useState<WallMode>('classic');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Board dimensions
  const [boardSize, setBoardSize] = useState({ width: 330, height: 380 });
  const [cellSize, setCellSize] = useState(DEFAULT_CELL_SIZE);
  const [bounds, setBounds] = useState<GridBounds>({ cols: 15, rows: 17 });

  // Game state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isNewHigh, setIsNewHigh] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [foodEatenCount, setFoodEatenCount] = useState(0);

  // Entities
  const [snake, setSnake] = useState<Coordinate[]>([
    { x: 5, y: 7 },
    { x: 5, y: 8 },
    { x: 5, y: 9 },
  ]);
  const [direction, setDirection] = useState<Direction>('UP');
  const [food, setFood] = useState<SnakeFoodItem>({ kana: 'あ', romaji: 'a' });
  const [foodPos, setFoodPos] = useState<Coordinate>({ x: 5, y: 3 });

  // Word quest state
  const [wordQuestNotice, setWordQuestNotice] = useState<string | null>(null);
  const wordQuestStateRef = useRef<{ wordIndex: number; syllableIndex: number }>({
    wordIndex: 0,
    syllableIndex: 0,
  });

  // Animation values
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  // Refs for fixed-interval tick loop
  const snakeRef = useRef(snake);
  snakeRef.current = snake;
  const directionRef = useRef(direction);
  directionRef.current = direction;
  const nextDirectionQueueRef = useRef<Direction[]>([]);
  const boundsRef = useRef(bounds);
  boundsRef.current = bounds;
  const foodPosRef = useRef(foodPos);
  foodPosRef.current = foodPos;
  const foodRef = useRef(food);
  foodRef.current = food;
  const wallModeRef = useRef(wallMode);
  wallModeRef.current = wallMode;
  const difficultyRef = useRef(difficulty);
  difficultyRef.current = difficulty;
  const streakRef = useRef(streak);
  streakRef.current = streak;
  const scoreRef = useRef(score);
  scoreRef.current = score;
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  // Pulsing animation for food orb
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.15,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1.0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim]);

  // Screen shake on death
  const triggerShake = useCallback(() => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 7, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -7, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 4, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 40, useNativeDriver: true }),
    ]).start();
  }, [shakeAnim]);

  // Handle board layout measurement
  const handleBoardLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (width <= 0 || height <= 0) return;

    const cell = DEFAULT_CELL_SIZE;
    const cols = Math.max(MIN_COLS, Math.floor(width / cell));
    const rows = Math.max(MIN_ROWS, Math.floor(height / cell));

    setBoardSize({ width: cols * cell, height: rows * cell });
    setCellSize(cell);
    setBounds({ cols, rows });
  };

  // Queue direction change (prevents 180 instant turnaround and handles rapid multi-swipes)
  const queueDirection = useCallback((newDir: Direction) => {
    if (!isPlayingRef.current || isPausedRef.current) return;

    const queue = nextDirectionQueueRef.current;
    const lastDir = queue.length > 0 ? queue[queue.length - 1] : directionRef.current;

    if (isValidDirectionChange(lastDir, newDir) && queue.length < 2) {
      queue.push(newDir);
      Haptics.selectionAsync().catch(() => {});
    }
  }, []);

  // End game cleanly
  const endGame = useCallback((finalScore: number) => {
    setIsPlaying(false);
    setGameOver(true);
    triggerShake();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    const { isNewHigh: newHigh } = recordSnakeScore(finalScore);
    setIsNewHigh(newHigh);
  }, [recordSnakeScore, triggerShake]);

  // Spawn food
  const spawnFood = useCallback(() => {
    const result = getFoodForMode(mode, wordQuestStateRef.current);
    setFood(result.food);
    foodRef.current = result.food;

    if (result.nextWordState) {
      wordQuestStateRef.current = {
        wordIndex: result.nextWordState.wordIndex,
        syllableIndex: result.nextWordState.syllableIndex,
      };
      if (result.nextWordState.completedWord) {
        setWordQuestNotice(`🎉 Completed: ${result.nextWordState.completedWord}`);
        setTimeout(() => setWordQuestNotice(null), 2500);
      }
    }

    const newPos = spawnFoodPosition(boundsRef.current, snakeRef.current);
    setFoodPos(newPos);
    foodPosRef.current = newPos;
  }, [mode]);

  // Start new game
  const startGame = useCallback(() => {
    const startX = Math.floor(boundsRef.current.cols / 2);
    const startY = Math.floor(boundsRef.current.rows / 2);

    const initialSnake: Coordinate[] = [
      { x: startX, y: startY },
      { x: startX, y: startY + 1 },
      { x: startX, y: startY + 2 },
    ];

    nextDirectionQueueRef.current = [];
    wordQuestStateRef.current = { wordIndex: 0, syllableIndex: 0 };
    setWordQuestNotice(null);
    setSnake(initialSnake);
    setDirection('UP');
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setFoodEatenCount(0);
    setGameOver(false);
    setIsPaused(false);
    setIsNewHigh(false);
    setIsPlaying(true);

    spawnFood();
  }, [spawnFood]);

  // Fixed Game Tick Loop
  useEffect(() => {
    if (!isPlaying || gameOver || isPaused) return;

    const baseSpeed = DIFFICULTY_SPEED_MS[difficulty];
    // Progressive slight speedup every 6 food items (up to 25% faster)
    const speedDiscount = Math.min(Math.floor(foodEatenCount / 6) * 6, 30);
    const intervalMs = Math.max(55, baseSpeed - speedDiscount);

    const timer = setInterval(() => {
      // 1. Process queued direction
      if (nextDirectionQueueRef.current.length > 0) {
        const nextDir = nextDirectionQueueRef.current.shift()!;
        directionRef.current = nextDir;
        setDirection(nextDir);
      }

      const currentHead = snakeRef.current[0];
      const curDir = directionRef.current;
      const curBounds = boundsRef.current;
      const curWallMode = wallModeRef.current;

      // 2. Next head position
      const nextHead = getNextHeadPosition(currentHead, curDir, curBounds, curWallMode);
      if (!nextHead) {
        // Wall collision in classic mode
        endGame(scoreRef.current);
        return;
      }

      // 3. Self collision check (excluding the tail segment that is about to vacate)
      const bodySegments = snakeRef.current.slice(0, -1);
      if (checkSelfCollision(nextHead, bodySegments)) {
        endGame(scoreRef.current);
        return;
      }

      // 4. Check Food Eat
      const isEating = nextHead.x === foodPosRef.current.x && nextHead.y === foodPosRef.current.y;
      if (isEating) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        if (soundEnabled && globalTtsEnabled) {
          speakJapanese(foodRef.current.kana, { rate: ttsRate }).catch(() => {});
        }

        const newStreak = streakRef.current + 1;
        setStreak(newStreak);
        streakRef.current = newStreak;
        setMaxStreak(m => Math.max(m, newStreak));
        setFoodEatenCount(c => c + 1);

        const gainedPoints = calculateSnakeScore(
          newStreak,
          difficultyRef.current,
          Boolean(foodRef.current.isBonus)
        );
        setScore(s => {
          const nextScore = s + gainedPoints;
          scoreRef.current = nextScore;
          return nextScore;
        });

        // Grow snake: keep all segments + new head
        const newSnake = [nextHead, ...snakeRef.current];
        setSnake(newSnake);
        snakeRef.current = newSnake;

        spawnFood();
      } else {
        // Regular move: add head, drop tail
        const newSnake = [nextHead, ...snakeRef.current.slice(0, -1)];
        setSnake(newSnake);
        snakeRef.current = newSnake;
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [
    isPlaying,
    gameOver,
    isPaused,
    difficulty,
    foodEatenCount,
    soundEnabled,
    globalTtsEnabled,
    ttsRate,
    endGame,
    spawnFood,
  ]);

  const hasSwipedRef = useRef(false);

  // PanResponder for smooth directional swipes & touch-direction taps across the entire game board
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
          return Math.abs(gestureState.dx) > 8 || Math.abs(gestureState.dy) > 8;
        },
        onPanResponderGrant: () => {
          hasSwipedRef.current = false;
        },
        onPanResponderMove: (_e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
          if (hasSwipedRef.current) return;
          const { dx, dy } = gestureState;
          const absDx = Math.abs(dx);
          const absDy = Math.abs(dy);

          // Fast instant swipe detection during motion (>= 22px threshold)
          if (absDx >= 22 || absDy >= 22) {
            hasSwipedRef.current = true;
            if (absDx > absDy) {
              if (dx > 0) queueDirection('RIGHT');
              else queueDirection('LEFT');
            } else {
              if (dy > 0) queueDirection('DOWN');
              else queueDirection('UP');
            }
          }
        },
        onPanResponderRelease: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
          if (hasSwipedRef.current) return;

          const { dx, dy } = gestureState;
          const absDx = Math.abs(dx);
          const absDy = Math.abs(dy);

          // 1. Swipe gesture steering if released quickly
          if (absDx >= 12 || absDy >= 12) {
            if (absDx > absDy) {
              if (dx > 0) queueDirection('RIGHT');
              else queueDirection('LEFT');
            } else {
              if (dy > 0) queueDirection('DOWN');
              else queueDirection('UP');
            }
            return;
          }

          // 2. Touch / Tap direction steering (tap anywhere on screen relative to snake head)
          const { locationX, locationY } = e.nativeEvent;
          const currentHead = snakeRef.current[0];
          if (!currentHead) return;

          const headPixelX = currentHead.x * cellSize + cellSize / 2;
          const headPixelY = currentHead.y * cellSize + cellSize / 2;

          const diffX = locationX - headPixelX;
          const diffY = locationY - headPixelY;

          if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) queueDirection('RIGHT');
            else queueDirection('LEFT');
          } else {
            if (diffY > 0) queueDirection('DOWN');
            else queueDirection('UP');
          }
        },
      }),
    [cellSize, queueDirection]
  );

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, 14),
          paddingBottom: Math.max(insets.bottom, 14),
          transform: [{ translateX: shakeAnim }],
        },
      ]}
    >
      {/* 1. Header Navigation & HUD */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable
            onPress={onClose}
            style={[styles.iconButton, { backgroundColor: '#1E293B' }]}
            accessibilityLabel="Close Kana Snake"
          >
            <X size={20} color="#94A3B8" />
          </Pressable>

          <View style={styles.headerTitleWrap}>
            <View style={styles.titleBadgeRow}>
              <Text style={styles.headerTitle}>ヘビゲーム • SNAKE</Text>
              <View style={styles.modeBadge}>
                <Text style={styles.modeBadgeText}>
                  {mode === 'hiragana'
                    ? 'あ HIRA'
                    : mode === 'katakana'
                    ? 'ア KATA'
                    : mode === 'kanji'
                    ? '漢 KANJI'
                    : '✨ QUEST'}
                </Text>
              </View>
            </View>
            <Text style={styles.recordSubtitle}>
              🏆 BEST: {Math.max(score, snakeHighScore)} pts
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Pressable
            onPress={() => setSoundEnabled(v => !v)}
            style={[styles.iconButton, { backgroundColor: '#1E293B' }]}
            accessibilityLabel="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 size={18} color="#38BDF8" />
            ) : (
              <VolumeX size={18} color="#64748B" />
            )}
          </Pressable>

          {isPlaying && (
            <Pressable
              onPress={() => setIsPaused(p => !p)}
              style={[
                styles.iconButton,
                { backgroundColor: isPaused ? '#F59E0B25' : '#1E293B' },
              ]}
              accessibilityLabel="Pause Game"
            >
              {isPaused ? (
                <Play size={18} color="#F59E0B" />
              ) : (
                <Pause size={18} color="#94A3B8" />
              )}
            </Pressable>
          )}
        </View>
      </View>

      {/* 2. Tactical Info Strip: Score, Streak, Target Kana */}
      <View style={styles.hudRow}>
        <View style={styles.hudScoreBox}>
          <Text style={styles.hudLabel}>SCORE</Text>
          <Text style={styles.hudValue}>{score}</Text>
        </View>

        {/* Target Kana / Meaning display */}
        <View style={styles.targetFoodBox}>
          <Text style={styles.targetFoodLabel}>TARGET GLYPH</Text>
          <View style={styles.targetFoodRow}>
            <Text style={styles.targetFoodKana}>{food.kana}</Text>
            <View style={styles.targetFoodMeta}>
              <Text style={styles.targetFoodRomaji}>{food.romaji}</Text>
              {food.meaning && (
                <Text style={styles.targetFoodMeaning} numberOfLines={1}>
                  {food.meaning}
                </Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.streakBox}>
          <View
            style={[
              styles.comboPill,
              {
                backgroundColor: streak >= 4 ? '#F9731620' : '#1E293B',
                borderColor: streak >= 4 ? '#F97316' : '#334155',
              },
            ]}
          >
            {streak >= 4 ? (
              <Flame size={14} color="#F97316" />
            ) : (
              <Zap size={14} color="#38BDF8" />
            )}
            <Text
              style={[
                styles.comboText,
                { color: streak >= 4 ? '#F97316' : '#94A3B8' },
              ]}
            >
              {streak}x
            </Text>
          </View>
          <Text style={styles.snakeLenLabel}>LEN: {snake.length}</Text>
        </View>
      </View>

      {/* Word Quest Notice Banner */}
      {wordQuestNotice && (
        <View style={styles.wordNoticeBanner}>
          <Sparkles size={14} color="#F59E0B" />
          <Text style={styles.wordNoticeText}>{wordQuestNotice}</Text>
        </View>
      )}

      {/* 3. Main Retro Arcade Arena Board */}
      <View
        onLayout={handleBoardLayout}
        style={[styles.boardWrapper, { backgroundColor: '#090D16' }]}
        {...panResponder.panHandlers}
      >
        <View
          style={[
            styles.board,
            {
              width: boardSize.width,
              height: boardSize.height,
            },
          ]}
        >
          {/* Grid visual lines */}
          <View style={styles.gridOverlay} pointerEvents="none">
            {Array.from({ length: bounds.rows }).map((_, r) => (
              <View
                key={`row-${r}`}
                style={[
                  styles.gridRowLine,
                  { top: r * cellSize, height: cellSize },
                ]}
              />
            ))}
          </View>

          {/* Snake Segments */}
          {snake.map((seg, idx) => {
            const isHead = idx === 0;
            const isTail = idx === snake.length - 1;

            if (isHead) {
              return (
                <View
                  key={`snake-head`}
                  style={[
                    styles.snakeHead,
                    {
                      left: seg.x * cellSize + 1,
                      top: seg.y * cellSize + 1,
                      width: cellSize - 2,
                      height: cellSize - 2,
                    },
                  ]}
                >
                  {/* Directional Eyes */}
                  <View
                    style={[
                      styles.eyesContainer,
                      direction === 'UP' && styles.eyesUp,
                      direction === 'DOWN' && styles.eyesDown,
                      direction === 'LEFT' && styles.eyesLeft,
                      direction === 'RIGHT' && styles.eyesRight,
                    ]}
                  >
                    <View style={styles.eyePupil} />
                    <View style={styles.eyePupil} />
                  </View>
                </View>
              );
            }

            return (
              <View
                key={`snake-${idx}-${seg.x}-${seg.y}`}
                style={[
                  styles.snakeSegment,
                  isTail && styles.snakeTail,
                  {
                    left: seg.x * cellSize + 1,
                    top: seg.y * cellSize + 1,
                    width: cellSize - 2,
                    height: cellSize - 2,
                    opacity: Math.max(0.6, 1 - (idx / snake.length) * 0.4),
                  },
                ]}
              />
            );
          })}

          {/* Food Orb */}
          {isPlaying && (
            <Animated.View
              style={[
                styles.foodItem,
                {
                  left: foodPos.x * cellSize,
                  top: foodPos.y * cellSize,
                  width: cellSize,
                  height: cellSize,
                  transform: [{ scale: pulseAnim }],
                },
              ]}
            >
              <View
                style={[
                  styles.foodGlow,
                  food.isBonus && styles.foodGlowBonus,
                ]}
              />
              <Text
                style={[
                  styles.foodKanaText,
                  food.isBonus && styles.foodKanaBonus,
                  { fontSize: cellSize > 20 ? 14 : 12 },
                ]}
              >
                {food.kana}
              </Text>
            </Animated.View>
          )}

          {/* Pause Overlay */}
          {isPaused && isPlaying && (
            <View style={styles.pauseOverlay}>
              <View style={styles.pauseCard}>
                <Pause size={36} color="#F59E0B" />
                <Text style={styles.pauseTitle}>GAME PAUSED</Text>
                <Pressable
                  onPress={() => setIsPaused(false)}
                  style={styles.resumeBtn}
                >
                  <Play size={18} color="#FFFFFF" fill="#FFFFFF" />
                  <Text style={styles.resumeBtnText}>RESUME</Text>
                </Pressable>
              </View>
            </View>
          )}

          {/* Pre-Game Configuration Overlay */}
          {!isPlaying && !gameOver && (
            <View style={styles.preGameOverlay}>
              <View style={styles.preGameCard}>
                <View style={styles.heroBadge}>
                  <Touchpad size={24} color="#34D399" />
                </View>
                <Text style={styles.heroTitle}>KANA SERPENT</Text>
                <Text style={styles.heroSubtitle}>
                  Swipe or tap directional heading to eat target Japanese glyphs!
                </Text>

                {/* Mode Selector */}
                <View style={styles.configGroup}>
                  <Text style={styles.configHeader}>ALPHABET / MODE</Text>
                  <View style={styles.pillRow}>
                    {(['hiragana', 'katakana', 'kanji', 'words'] as SnakeMode[]).map(m => (
                      <Pressable
                        key={m}
                        onPress={() => {
                          Haptics.selectionAsync().catch(() => {});
                          setMode(m);
                        }}
                        style={[styles.pill, mode === m && styles.pillActive]}
                      >
                        <Text style={[styles.pillText, mode === m && styles.pillTextActive]}>
                          {m === 'hiragana'
                            ? 'あ Hiragana'
                            : m === 'katakana'
                            ? 'ア Katakana'
                            : m === 'kanji'
                            ? '漢 Kanji'
                            : '✨ Quest'}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                {/* Difficulty Selector */}
                <View style={styles.configGroup}>
                  <Text style={styles.configHeader}>SPEED TEMPO</Text>
                  <View style={styles.pillRow}>
                    {(['chill', 'normal', 'turbo'] as SnakeDifficulty[]).map(d => (
                      <Pressable
                        key={d}
                        onPress={() => {
                          Haptics.selectionAsync().catch(() => {});
                          setDifficulty(d);
                        }}
                        style={[styles.pill, difficulty === d && styles.pillActiveOrange]}
                      >
                        <Text
                          style={[
                            styles.pillText,
                            difficulty === d && styles.pillTextActiveOrange,
                          ]}
                        >
                          {d === 'chill'
                            ? '🌱 Chill'
                            : d === 'normal'
                            ? '⚡ Normal'
                            : '🔥 Turbo'}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                {/* Wall Mode Selector */}
                <View style={styles.configGroup}>
                  <Text style={styles.configHeader}>WALL COLLISION</Text>
                  <View style={styles.pillRow}>
                    {(['classic', 'zen'] as WallMode[]).map(w => (
                      <Pressable
                        key={w}
                        onPress={() => {
                          Haptics.selectionAsync().catch(() => {});
                          setWallMode(w);
                        }}
                        style={[styles.pill, wallMode === w && styles.pillActive]}
                      >
                        <Text style={[styles.pillText, wallMode === w && styles.pillTextActive]}>
                          {w === 'classic' ? '🧱 Classic (Lethal)' : '🌀 Zen (Wrap)'}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                <Pressable onPress={startGame} style={styles.startBtn}>
                  <Play size={20} color="#0F172A" fill="#0F172A" />
                  <Text style={styles.startBtnText}>START SNAKE ARCADE</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>

        {/* Edge Direction Status Chevrons */}
        {isPlaying && (
          <>
            <View
              pointerEvents="none"
              style={[
                styles.edgeIndicator,
                styles.edgeTop,
                direction === 'UP' && styles.edgeActive,
              ]}
            >
              <ArrowUp
                size={14}
                color={direction === 'UP' ? '#34D399' : '#334155'}
              />
            </View>
            <View
              pointerEvents="none"
              style={[
                styles.edgeIndicator,
                styles.edgeBottom,
                direction === 'DOWN' && styles.edgeActive,
              ]}
            >
              <ArrowDown
                size={14}
                color={direction === 'DOWN' ? '#34D399' : '#334155'}
              />
            </View>
            <View
              pointerEvents="none"
              style={[
                styles.edgeIndicator,
                styles.edgeLeft,
                direction === 'LEFT' && styles.edgeActive,
              ]}
            >
              <ArrowLeft
                size={14}
                color={direction === 'LEFT' ? '#34D399' : '#334155'}
              />
            </View>
            <View
              pointerEvents="none"
              style={[
                styles.edgeIndicator,
                styles.edgeRight,
                direction === 'RIGHT' && styles.edgeActive,
              ]}
            >
              <ArrowRight
                size={14}
                color={direction === 'RIGHT' ? '#34D399' : '#334155'}
              />
            </View>
          </>
        )}
      </View>

      {/* 4. Controls: Sleek Touch & Swipe Direction Guide */}
      <View style={styles.touchGuideDeck}>
        <View style={styles.touchGuideRow}>
          <Touchpad size={14} color="#34D399" />
          <Text style={styles.touchGuideTitle}>TOUCH DIRECTION OR SWIPE TO STEER</Text>
        </View>
        <Text style={styles.touchGuideSubtitle}>
          {wallMode === 'classic' ? '🧱 WALLS LETHAL' : '🌀 PORTAL WRAP-AROUND'} • TAP ANYWHERE RELATIVE TO SNAKE
        </Text>
      </View>

      {/* 5. Game Over Modal */}
      <Modal visible={gameOver} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View
              style={[
                styles.modalIconWrap,
                { backgroundColor: isNewHigh ? '#F59E0B20' : '#EF444420' },
              ]}
            >
              {isNewHigh ? (
                <Trophy size={48} color="#F59E0B" />
              ) : (
                <RotateCcw size={48} color="#EF4444" />
              )}
            </View>

            <Text style={styles.modalTitle}>
              {isNewHigh ? '🏆 NEW RECORD!' : 'GAME OVER'}
            </Text>
            <Text style={styles.modalSubtitle}>
              {isNewHigh
                ? 'Legendary snake mastery! You set a new all-time high score.'
                : 'The serpent coiled into an obstacle. Sharpen your path and retry!'}
            </Text>

            {/* Score Grid */}
            <View style={styles.modalStatsCard}>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>FINAL SCORE</Text>
                <Text style={styles.modalStatValue}>{score}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>SNAKE LEN</Text>
                <Text style={styles.modalStatValue}>{snake.length}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>KANA EATEN</Text>
                <Text style={styles.modalStatValue}>{foodEatenCount}</Text>
              </View>
            </View>

            <View style={styles.modalActions}>
              <Pressable
                onPress={() => {
                  setGameOver(false);
                  setIsPlaying(false);
                }}
                style={styles.modalPlayAgainBtn}
              >
                <RotateCcw size={18} color="#FFFFFF" />
                <Text style={styles.modalPlayAgainText}>PLAY AGAIN</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setGameOver(false);
                  onClose();
                }}
                style={styles.modalExitBtn}
              >
                <Text style={styles.modalExitText}>EXIT TO ARCADE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050811',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleWrap: {
    gap: 2,
  },
  titleBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  modeBadge: {
    backgroundColor: '#34D39925',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#34D39950',
  },
  modeBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#34D399',
  },
  recordSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#F59E0B',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hudRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    gap: 8,
  },
  hudScoreBox: {
    alignItems: 'flex-start',
    minWidth: 60,
  },
  hudLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  hudValue: {
    fontSize: 20,
    fontWeight: '900',
    color: '#38BDF8',
  },
  targetFoodBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E293B80',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#33415550',
  },
  targetFoodLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
  targetFoodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  targetFoodKana: {
    fontSize: 20,
    fontWeight: '900',
    color: '#F59E0B',
  },
  targetFoodMeta: {
    alignItems: 'flex-start',
  },
  targetFoodRomaji: {
    fontSize: 12,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  targetFoodMeaning: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94A3B8',
    maxWidth: 110,
  },
  streakBox: {
    alignItems: 'flex-end',
    minWidth: 65,
    gap: 2,
  },
  comboPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  comboText: {
    fontSize: 11,
    fontWeight: '800',
  },
  snakeLenLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
  },
  wordNoticeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#F59E0B20',
    borderWidth: 1,
    borderColor: '#F59E0B50',
    borderRadius: 8,
    paddingVertical: 4,
    marginVertical: 2,
  },
  wordNoticeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#F59E0B',
  },
  boardWrapper: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1E293B',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: 4,
  },
  board: {
    position: 'relative',
  },
  gridOverlay: {
    ...StyleSheet.absoluteFill,
  },
  gridRowLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B30',
  },
  snakeHead: {
    position: 'absolute',
    backgroundColor: '#34D399',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#6EE7B7',
    zIndex: 5,
    shadowColor: '#34D399',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyesContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  eyesUp: {
    top: 2,
    flexDirection: 'row',
  },
  eyesDown: {
    bottom: 2,
    flexDirection: 'row',
  },
  eyesLeft: {
    left: 2,
    flexDirection: 'column',
    height: '65%',
    width: undefined,
  },
  eyesRight: {
    right: 2,
    flexDirection: 'column',
    height: '65%',
    width: undefined,
  },
  eyePupil: {
    width: 3.5,
    height: 3.5,
    borderRadius: 2,
    backgroundColor: '#064E3B',
  },
  snakeSegment: {
    position: 'absolute',
    backgroundColor: '#059669',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#10B98140',
    zIndex: 4,
  },
  snakeTail: {
    borderRadius: 8,
    backgroundColor: '#047857',
  },
  foodItem: {
    position: 'absolute',
    zIndex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodGlow: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#F59E0B30',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#F59E0B',
  },
  foodGlowBonus: {
    backgroundColor: '#EC489940',
    borderColor: '#EC4899',
  },
  foodKanaText: {
    fontWeight: '900',
    color: '#F59E0B',
    textAlign: 'center',
  },
  foodKanaBonus: {
    color: '#F43F5E',
  },
  pauseOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(5, 8, 17, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
  pauseCard: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#334155',
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  pauseTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1,
  },
  resumeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#0284C7',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: radii.full,
  },
  resumeBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  preGameOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(5, 8, 17, 0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 30,
    padding: 16,
  },
  preGameCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#334155',
    padding: 18,
    alignItems: 'center',
    gap: 12,
  },
  heroBadge: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: '#34D39920',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1,
  },
  heroSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 4,
  },
  configGroup: {
    width: '100%',
    gap: 4,
  },
  configHeader: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#0F172A',
  },
  pillActive: {
    borderColor: '#34D399',
    backgroundColor: '#34D39925',
  },
  pillActiveOrange: {
    borderColor: '#F59E0B',
    backgroundColor: '#F59E0B25',
  },
  pillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  pillTextActive: {
    color: '#34D399',
  },
  pillTextActiveOrange: {
    color: '#F59E0B',
  },
  startBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    backgroundColor: '#34D399',
    paddingVertical: 12,
    borderRadius: radii.lg,
    marginTop: 4,
  },
  startBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  touchGuideDeck: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 3,
  },
  touchGuideRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  touchGuideTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#34D399',
    letterSpacing: 0.6,
  },
  touchGuideSubtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.4,
  },
  edgeIndicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    padding: 3,
    borderRadius: 6,
    backgroundColor: '#0F172A95',
  },
  edgeActive: {
    backgroundColor: '#34D39930',
  },
  edgeTop: {
    top: 6,
    left: '50%',
    marginLeft: -10,
  },
  edgeBottom: {
    bottom: 6,
    left: '50%',
    marginLeft: -10,
  },
  edgeLeft: {
    left: 6,
    top: '50%',
    marginTop: -10,
  },
  edgeRight: {
    right: 6,
    top: '50%',
    marginTop: -10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#334155',
    padding: 24,
    alignItems: 'center',
    gap: 14,
  },
  modalIconWrap: {
    width: 72,
    height: 72,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1,
  },
  modalSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
  },
  modalStatsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#33415550',
  },
  modalStatItem: {
    alignItems: 'center',
    gap: 4,
  },
  modalStatLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  modalStatValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F8FAFC',
  },
  modalStatDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#334155',
  },
  modalActions: {
    width: '100%',
    gap: 10,
    marginTop: 4,
  },
  modalPlayAgainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#34D399',
    paddingVertical: 14,
    borderRadius: radii.lg,
  },
  modalPlayAgainText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  modalExitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33415550',
    paddingVertical: 12,
    borderRadius: radii.lg,
  },
  modalExitText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#94A3B8',
  },
});
