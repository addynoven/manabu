import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Modal,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
  GestureResponderHandlers,
  LayoutChangeEvent,
} from 'react-native';
import {
  X,
  Pause,
  Play,
  RotateCcw,
  Trophy,
  Volume2,
  VolumeX,
  Smartphone,
  Compass,
  Heart,
  Zap,
  Flame,
  Sparkles,
  Hand,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { requireOptionalNativeModule, EventEmitter } from 'expo-modules-core';
import { radii } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { useArcadeStore } from '../store/useArcadeStore';
import type {
  CatchDifficulty,
  CatchMode,
  CatchTarget,
  CatchFallingItem,
} from '../models/arcade.model';
import {
  getCandidatePool,
  getRandomCatchTarget,
  getDifficultyConfig,
  spawnFallingWave,
  isBasketColliding,
  calculateCatchScore,
  clampBasketPosition,
  columnToPercent,
  percentToColumn,
} from '../lib/catchEngine';

const ExponentAccelerometer = requireOptionalNativeModule('ExponentAccelerometer');
const ExponentGyroscope = requireOptionalNativeModule('ExponentGyroscope');
const isHardwareSensorSupported = Boolean(ExponentAccelerometer || ExponentGyroscope);

const BASKET_WIDTH_PERCENT = 24;
const TOTAL_COLUMNS = 4;
const TICK_INTERVAL_MS = 33; // ~30 fps physics step

interface KanaCatchViewProps {
  onClose: () => void;
}

export function KanaCatchView({ onClose }: KanaCatchViewProps) {
  const insets = useSafeAreaInsets();

  // Settings from global store
  const globalTtsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);

  // Arcade score persistence
  const catchHighScore = useArcadeStore(s => s.catchHighScore || 0);
  const recordCatchScore = useArcadeStore(s => s.recordCatchScore);

  // Game Configuration
  const [mode, setMode] = useState<CatchMode>('kanji');
  const [difficulty, setDifficulty] = useState<CatchDifficulty>('normal');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Game Lifecycle State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isNewHigh, setIsNewHigh] = useState(false);

  // Game Metrics
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [targetCaughtCount, setTargetCaughtCount] = useState(0);
  const [scorePopup, setScorePopup] = useState<{ text: string; id: number } | null>(null);

  // Active Target Prompt (shown on top)
  const [currentTarget, setCurrentTarget] = useState<CatchTarget>(() => getRandomCatchTarget('kanji'));
  const targetRef = useRef<CatchTarget>(currentTarget);

  // Falling Items List
  const [fallingItems, setFallingItems] = useState<CatchFallingItem[]>([]);
  const fallingItemsRef = useRef<CatchFallingItem[]>(fallingItems);

  // Basket Position (0% to 100%)
  const [basketPosPercent, setBasketPosPercent] = useState<number>(50);
  const basketPosRef = useRef<number>(50);

  // Arena Dimensions
  const [fieldWidth, setFieldWidth] = useState(340);
  const fieldWidthRef = useRef(340);

  // Gyroscope / Accelerometer Tilt State
  const [tiltEnabled, setTiltEnabled] = useState(isHardwareSensorSupported);
  const baselineTiltRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasBaselineRef = useRef(false);
  const [tiltDirectionBadge, setTiltDirectionBadge] = useState<'LEFT' | 'CENTER' | 'RIGHT'>('CENTER');

  // Animations
  const [shakeAnim] = useState(() => new Animated.Value(0));
  const [catchFlashAnim] = useState(() => new Animated.Value(0));

  // Synchronous refs for 60fps tick loop
  const isPlayingRef = useRef(isPlaying);
  const isPausedRef = useRef(isPaused);
  const livesRef = useRef(lives);
  const scoreRef = useRef(score);
  const streakRef = useRef(streak);
  const difficultyRef = useRef(difficulty);
  const modeRef = useRef(mode);

  useEffect(() => {
    targetRef.current = currentTarget;
    fallingItemsRef.current = fallingItems;
    basketPosRef.current = basketPosPercent;
    fieldWidthRef.current = fieldWidth;
    isPlayingRef.current = isPlaying;
    isPausedRef.current = isPaused;
    livesRef.current = lives;
    scoreRef.current = score;
    streakRef.current = streak;
    difficultyRef.current = difficulty;
    modeRef.current = mode;
  }, [
    currentTarget,
    fallingItems,
    basketPosPercent,
    fieldWidth,
    isPlaying,
    isPaused,
    lives,
    score,
    streak,
    difficulty,
    mode,
  ]);

  // Excluded recent target IDs to avoid immediate repeats
  const recentTargetIdsRef = useRef<Set<string>>(new Set());

  // Screen Shake Effect
  const triggerShake = useCallback(() => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: -8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -4, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 40, useNativeDriver: true }),
    ]).start();
  }, [shakeAnim]);

  // Flash Catch Effect
  const triggerCatchFlash = useCallback(() => {
    catchFlashAnim.setValue(1);
    Animated.timing(catchFlashAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [catchFlashAnim]);

  // Calibrate neutral center from current holding angle
  const calibrateTilt = useCallback(() => {
    hasBaselineRef.current = false;
    setTiltDirectionBadge('CENTER');
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
  }, []);

  // Set new target prompt
  const pickNextTarget = useCallback(() => {
    recentTargetIdsRef.current.add(targetRef.current.id);
    if (recentTargetIdsRef.current.size > 8) {
      recentTargetIdsRef.current.clear();
    }
    const nextTarget = getRandomCatchTarget(modeRef.current, recentTargetIdsRef.current);
    setCurrentTarget(nextTarget);
    targetRef.current = nextTarget;
  }, []);

  // End Game
  const endGame = useCallback((finalScore: number) => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    setGameOver(true);
    triggerShake();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    const { isNewHigh: newHigh } = recordCatchScore(finalScore);
    setIsNewHigh(newHigh);
  }, [recordCatchScore, triggerShake]);

  // Start / Restart Game
  const startGame = useCallback(() => {
    const config = getDifficultyConfig(difficultyRef.current);
    setLives(config.lives);
    livesRef.current = config.lives;
    setScore(0);
    scoreRef.current = 0;
    setStreak(0);
    streakRef.current = 0;
    setMaxStreak(0);
    setTargetCaughtCount(0);
    setBasketPosPercent(50);
    basketPosRef.current = 50;
    setGameOver(false);
    setIsPaused(false);
    isPausedRef.current = false;
    setIsNewHigh(false);
    hasBaselineRef.current = false;
    setTiltDirectionBadge('CENTER');

    recentTargetIdsRef.current.clear();
    const firstTarget = getRandomCatchTarget(modeRef.current);
    setCurrentTarget(firstTarget);
    targetRef.current = firstTarget;

    // Initial wave
    const pool = getCandidatePool(modeRef.current);
    const initialWave = spawnFallingWave(firstTarget, TOTAL_COLUMNS, pool, difficultyRef.current, true);
    setFallingItems(initialWave);
    fallingItemsRef.current = initialWave;

    setIsPlaying(true);
    isPlayingRef.current = true;
  }, []);

  // Gyroscope / Accelerometer hardware sensor steering
  useEffect(() => {
    if (!isPlaying || isPaused || gameOver || !tiltEnabled || !isHardwareSensorSupported) {
      return;
    }

    let sub: { remove: () => void } | null = null;

    if (ExponentAccelerometer) {
      try {
        ExponentAccelerometer.setUpdateInterval?.(35);
        type SensorEvents = {
          accelerometerDidUpdate: (data: { x: number; y: number; z: number }) => void;
        };
        const emitter = new EventEmitter<SensorEvents>(ExponentAccelerometer);

        sub = emitter.addListener('accelerometerDidUpdate', (data: { x: number; y: number; z: number }) => {
          if (!isPlayingRef.current || isPausedRef.current) return;

          if (!hasBaselineRef.current) {
            baselineTiltRef.current = { x: data.x, y: data.y };
            hasBaselineRef.current = true;
          }

          const dx = data.x - baselineTiltRef.current.x;
          const absDx = Math.abs(dx);

          if (absDx < 0.06) {
            setTiltDirectionBadge('CENTER');
            return;
          }

          // Tilt velocity factor
          const velocity = dx * 2.2;
          setTiltDirectionBadge(dx > 0 ? 'RIGHT' : 'LEFT');

          setBasketPosPercent(prev => {
            const next = clampBasketPosition(prev + velocity, BASKET_WIDTH_PERCENT);
            basketPosRef.current = next;
            return next;
          });
        });
      } catch {}
    } else if (ExponentGyroscope) {
      try {
        ExponentGyroscope.setUpdateInterval?.(35);
        type GyroEvents = {
          gyroscopeDidUpdate: (data: { x: number; y: number; z: number }) => void;
        };
        const emitter = new EventEmitter<GyroEvents>(ExponentGyroscope);

        sub = emitter.addListener('gyroscopeDidUpdate', (data: { x: number; y: number; z: number }) => {
          if (!isPlayingRef.current || isPausedRef.current) return;

          const dy = data.y;
          const absDy = Math.abs(dy);

          if (absDy < 0.2) {
            setTiltDirectionBadge('CENTER');
            return;
          }

          const velocity = dy * 2.0;
          setTiltDirectionBadge(dy > 0 ? 'RIGHT' : 'LEFT');

          setBasketPosPercent(prev => {
            const next = clampBasketPosition(prev + velocity, BASKET_WIDTH_PERCENT);
            basketPosRef.current = next;
            return next;
          });
        });
      } catch {}
    }

    return () => {
      sub?.remove();
      setTiltDirectionBadge('CENTER');
    };
  }, [isPlaying, isPaused, gameOver, tiltEnabled]);

  // Touch Drag PanResponder across the arena
  const [panHandlers, setPanHandlers] = useState<GestureResponderHandlers>({});

  useEffect(() => {
    const pr = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        return Math.abs(gestureState.dx) > 4;
      },
      onPanResponderMove: (e: GestureResponderEvent) => {
        if (!isPlayingRef.current || isPausedRef.current) return;
        const touchX = e.nativeEvent.locationX;
        const width = fieldWidthRef.current || 340;
        const percent = (touchX / width) * 100;
        const clamped = clampBasketPosition(percent, BASKET_WIDTH_PERCENT);
        basketPosRef.current = clamped;
        setBasketPosPercent(clamped);
      },
    });
    setPanHandlers(pr.panHandlers);
  }, []);

  // Tap directly on column to jump basket
  const jumpToColumn = useCallback((col: number) => {
    if (!isPlayingRef.current || isPausedRef.current) return;
    Haptics.selectionAsync().catch(() => {});
    const targetPercent = columnToPercent(col, TOTAL_COLUMNS);
    const clamped = clampBasketPosition(targetPercent, BASKET_WIDTH_PERCENT);
    basketPosRef.current = clamped;
    setBasketPosPercent(clamped);
  }, []);

  // Main Game Tick Loop (Item Fall, Wave Spawner, Collisions)
  useEffect(() => {
    if (!isPlaying || gameOver || isPaused) return;

    const config = getDifficultyConfig(difficultyRef.current);
    let lastSpawnTime = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const currentItems = fallingItemsRef.current;
      const currentTarget = targetRef.current;
      const candidatePool = getCandidatePool(modeRef.current);

      let updatedItems: CatchFallingItem[] = [];
      let caughtTarget = false;
      let caughtDistractor = false;
      let gainedPoints = 0;
      let caughtBonus = false;

      // 1. Move items and check collisions
      for (const item of currentItems) {
        const nextY = item.yPosition + item.speed;

        // Collision Check with Basket
        const isColliding = isBasketColliding(
          item.column,
          nextY,
          basketPosRef.current,
          TOTAL_COLUMNS,
          BASKET_WIDTH_PERCENT
        );

        if (isColliding) {
          // Item was CAUGHT by basket!
          if (item.isBonus) {
            caughtBonus = true;
            gainedPoints += calculateCatchScore(streakRef.current, difficultyRef.current, true);
            continue; // Item absorbed
          }

          if (item.isTarget) {
            caughtTarget = true;
            const pts = calculateCatchScore(streakRef.current, difficultyRef.current, false);
            gainedPoints += pts;
            continue; // Item absorbed
          }

          // Distractor caught!
          caughtDistractor = true;
          continue; // Item absorbed
        }

        // Out of bounds check: item passed the bottom waterline (missed)
        if (nextY > 96) {
          if (item.isTarget) {
            // Target item fell off without being caught
            setStreak(0);
            streakRef.current = 0;
          }
          continue; // Item dropped off screen
        }

        // Item continues falling
        updatedItems.push({
          ...item,
          yPosition: nextY,
        });
      }

      // 2. Process Catch Results
      if (caughtBonus) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        triggerCatchFlash();
        setScorePopup({ text: '+250 ⭐ BONUS!', id: Date.now() });
        setScore(s => {
          const next = s + 250;
          scoreRef.current = next;
          return next;
        });
      }

      if (caughtTarget) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        triggerCatchFlash();

        if (soundEnabled && globalTtsEnabled) {
          speakJapanese(currentTarget.glyph, { rate: ttsRate }).catch(() => {});
        }

        const nextStreak = streakRef.current + 1;
        setStreak(nextStreak);
        streakRef.current = nextStreak;
        setMaxStreak(m => Math.max(m, nextStreak));
        setTargetCaughtCount(c => c + 1);

        setScore(s => {
          const next = s + gainedPoints;
          scoreRef.current = next;
          return next;
        });

        const comboText = nextStreak >= 3 ? ` (${nextStreak}x COMBO!)` : '';
        setScorePopup({ text: `+${gainedPoints}${comboText}`, id: Date.now() });

        // Change target!
        pickNextTarget();
      }

      if (caughtDistractor) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
        triggerShake();
        setStreak(0);
        streakRef.current = 0;

        const remainingLives = livesRef.current - 1;
        setLives(remainingLives);
        livesRef.current = remainingLives;

        setScorePopup({ text: 'MISS! -1 LIFE', id: Date.now() });

        if (remainingLives <= 0) {
          clearInterval(interval);
          endGame(scoreRef.current);
          return;
        }
      }

      // 3. Spawn New Waves
      const hasTargetInPlay = updatedItems.some(i => i.isTarget);
      const shouldSpawnTime = now - lastSpawnTime >= config.spawnIntervalMs;
      const shouldSpawnEmpty = updatedItems.length === 0;

      if (shouldSpawnTime || shouldSpawnEmpty) {
        lastSpawnTime = now;
        // If there is currently no target falling, ensure new wave has the target!
        const newWave = spawnFallingWave(
          targetRef.current,
          TOTAL_COLUMNS,
          candidatePool,
          difficultyRef.current,
          !hasTargetInPlay
        );
        updatedItems = [...updatedItems, ...newWave];
      }

      setFallingItems(updatedItems);
      fallingItemsRef.current = updatedItems;
    }, TICK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [
    isPlaying,
    isPaused,
    gameOver,
    soundEnabled,
    globalTtsEnabled,
    ttsRate,
    pickNextTarget,
    triggerCatchFlash,
    triggerShake,
    endGame,
  ]);

  // Handle playfield layout measurement
  const onFieldLayout = useCallback((e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (width > 50) {
      setFieldWidth(width);
      fieldWidthRef.current = width;
    }
  }, []);

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
            accessibilityLabel="Close Kana Catch"
          >
            <X size={20} color="#94A3B8" />
          </Pressable>

          <View style={styles.headerTitleWrap}>
            <View style={styles.titleBadgeRow}>
              <Text style={styles.headerTitle}>キャッチ • CATCH</Text>
              <View style={styles.modeBadge}>
                <Text style={styles.modeBadgeText}>
                  {mode === 'kanji'
                    ? '漢 KANJI'
                    : mode === 'kana'
                    ? 'あ KANA'
                    : mode === 'vocab'
                    ? '語 VOCAB'
                    : '🌀 MIXED'}
                </Text>
              </View>
            </View>
            <Text style={styles.recordSubtitle}>
              🏆 BEST: {Math.max(score, catchHighScore)} pts
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          {isHardwareSensorSupported && (
            <Pressable
              onPress={() => {
                Haptics.selectionAsync().catch(() => {});
                setTiltEnabled(v => !v);
              }}
              style={[
                styles.iconButton,
                { backgroundColor: tiltEnabled ? '#38BDF825' : '#1E293B' },
              ]}
              accessibilityLabel="Toggle Tilt Steering"
            >
              <Smartphone size={18} color={tiltEnabled ? '#38BDF8' : '#64748B'} />
            </Pressable>
          )}

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

      {/* 2. Target Prompt & Tactical Strip */}
      <View style={styles.targetCard}>
        <View style={styles.targetLeft}>
          <Text style={styles.targetLabel}>TARGET WORD / GLYPH</Text>
          <Text style={styles.targetPromptPrimary} numberOfLines={1}>
            {currentTarget.promptPrimary}
          </Text>
          {currentTarget.promptSecondary && (
            <Text style={styles.targetPromptSecondary} numberOfLines={1}>
              {currentTarget.promptSecondary}
            </Text>
          )}
        </View>

        <View style={styles.targetRight}>
          <View style={styles.targetRequiredBadge}>
            <Text style={styles.targetCatchLabel}>CATCH</Text>
            <Text style={styles.targetGlyphHighlight}>{currentTarget.glyph}</Text>
          </View>
        </View>
      </View>

      {/* 3. Tactical Stats Row: Score, Lives, Combo */}
      <View style={styles.tacticalStrip}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>SCORE</Text>
          <Text style={styles.statValue}>{score}</Text>
        </View>

        {/* Lives Counter */}
        <View style={styles.livesRow}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Heart
              key={idx}
              size={18}
              color={idx < lives ? '#EF4444' : '#334155'}
              fill={idx < lives ? '#EF4444' : 'transparent'}
            />
          ))}
        </View>

        {/* Combo Multiplier */}
        <View
          style={[
            styles.comboBadge,
            streak >= 3 && styles.comboBadgeActive,
            streak >= 6 && styles.comboBadgeSuper,
          ]}
        >
          {streak >= 6 ? (
            <Flame size={14} color="#F97316" />
          ) : (
            <Zap size={14} color="#38BDF8" />
          )}
          <Text
            style={[
              styles.comboText,
              { color: streak >= 6 ? '#F97316' : '#38BDF8' },
            ]}
          >
            {streak >= 10 ? '3x' : streak >= 6 ? '2x' : streak >= 3 ? '1.5x' : '1x'}
          </Text>
        </View>
      </View>

      {/* 4. Main Falling Arena Playfield */}
      <View
        onLayout={onFieldLayout}
        style={styles.fieldWrapper}
        {...panHandlers}
      >
        {/* Subtle Column Grid Lines */}
        <View style={styles.columnLinesOverlay} pointerEvents="none">
          {Array.from({ length: TOTAL_COLUMNS }).map((_, c) => (
            <View
              key={`col-${c}`}
              style={[
                styles.columnLane,
                { width: `${100 / TOTAL_COLUMNS}%` },
              ]}
            >
              <Text style={styles.columnLabel}>C{c + 1}</Text>
            </View>
          ))}
        </View>

        {/* Falling Items */}
        {isPlaying &&
          fallingItems.map(item => {
            const leftPercent = columnToPercent(item.column, TOTAL_COLUMNS);
            return (
              <View
                key={item.id}
                style={[
                  styles.fallingOrb,
                  item.isBonus && styles.bonusOrb,
                  item.isTarget && styles.targetOrbGlow,
                  {
                    left: `${leftPercent}%`,
                    top: `${item.yPosition}%`,
                    transform: [{ translateX: -24 }],
                  },
                ]}
              >
                <Text
                  style={[
                    styles.fallingGlyph,
                    item.isBonus && styles.bonusGlyph,
                    item.isTarget && styles.targetGlyphGlow,
                  ]}
                >
                  {item.glyph}
                </Text>
                {item.romaji ? (
                  <Text style={styles.fallingSub} numberOfLines={1}>
                    {item.isBonus ? 'BONUS' : item.romaji}
                  </Text>
                ) : null}
              </View>
            );
          })}

        {/* Catch Flash Effect */}
        <Animated.View
          pointerEvents="none"
          style={[
            styles.catchFlash,
            {
              opacity: catchFlashAnim,
            },
          ]}
        />

        {/* Floating Score Popup */}
        {scorePopup && (
          <View pointerEvents="none" style={styles.scorePopupWrap}>
            <Text style={styles.scorePopupText}>{scorePopup.text}</Text>
          </View>
        )}

        {/* Player's Catcher Basket / Lantern Paddle */}
        {isPlaying && (
          <View
            style={[
              styles.basketPaddle,
              {
                left: `${basketPosPercent}%`,
                width: `${BASKET_WIDTH_PERCENT}%`,
                transform: [{ translateX: -(fieldWidth * (BASKET_WIDTH_PERCENT / 100)) / 2 }],
              },
            ]}
          >
            <View style={styles.basketTopGlow} />
            <View style={styles.basketBody}>
              <Hand size={18} color="#F59E0B" />
              <Text style={styles.basketIcon}>🧺</Text>
            </View>
            <View style={styles.basketBase} />
          </View>
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

        {/* Pre-Game Configuration Card Overlay */}
        {!isPlaying && !gameOver && (
          <View style={styles.preGameOverlay}>
            <View style={styles.preGameCard}>
              <View style={styles.heroBadge}>
                <Sparkles size={24} color="#F59E0B" />
              </View>
              <Text style={styles.heroTitle}>KANJI & KANA CATCH</Text>
              <Text style={styles.heroSubtitle}>
                Slide your catcher basket to intercept the matching Kanji or Kana falling from the sky!
              </Text>

              {/* Mode Selector */}
              <View style={styles.configGroup}>
                <Text style={styles.configHeader}>SELECT GAME MODE</Text>
                <View style={styles.pillRow}>
                  {(['kanji', 'kana', 'vocab', 'mixed'] as CatchMode[]).map(m => (
                    <Pressable
                      key={m}
                      onPress={() => {
                        Haptics.selectionAsync().catch(() => {});
                        setMode(m);
                      }}
                      style={[styles.pill, mode === m && styles.pillActive]}
                    >
                      <Text style={[styles.pillText, mode === m && styles.pillTextActive]}>
                        {m === 'kanji'
                          ? '漢 Kanji Meaning'
                          : m === 'kana'
                          ? 'あ Kana Sound'
                          : m === 'vocab'
                          ? '語 Compounds'
                          : '🌀 Mixed'}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Speed Selector */}
              <View style={styles.configGroup}>
                <Text style={styles.configHeader}>SPEED / TEMPO</Text>
                <View style={styles.pillRow}>
                  {(['chill', 'normal', 'turbo'] as CatchDifficulty[]).map(d => (
                    <Pressable
                      key={d}
                      onPress={() => {
                        Haptics.selectionAsync().catch(() => {});
                        setDifficulty(d);
                      }}
                      style={[styles.pill, difficulty === d && styles.pillActive]}
                    >
                      <Text
                        style={[
                          styles.pillText,
                          difficulty === d && styles.pillTextActive,
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

              {/* Steering Mode Selector */}
              {isHardwareSensorSupported && (
                <View style={styles.configGroup}>
                  <Text style={styles.configHeader}>CONTROLS</Text>
                  <View style={styles.pillRow}>
                    <Pressable
                      onPress={() => {
                        Haptics.selectionAsync().catch(() => {});
                        setTiltEnabled(true);
                      }}
                      style={[styles.pill, tiltEnabled && styles.pillActive]}
                    >
                      <Text style={[styles.pillText, tiltEnabled && styles.pillTextActive]}>
                        📱 Tilt + Touch
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        Haptics.selectionAsync().catch(() => {});
                        setTiltEnabled(false);
                      }}
                      style={[styles.pill, !tiltEnabled && styles.pillActive]}
                    >
                      <Text style={[styles.pillText, !tiltEnabled && styles.pillTextActive]}>
                        👆 Touch & Drag Only
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}

              {/* Start Button */}
              <Pressable onPress={startGame} style={styles.startBtn}>
                <Play size={20} color="#0F172A" fill="#0F172A" />
                <Text style={styles.startBtnText}>START CATCH ARCADE</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>

      {/* 5. Column Quick Tap & Steering Deck */}
      <View style={styles.touchGuideDeck}>
        <View style={styles.columnButtonsRow}>
          {Array.from({ length: TOTAL_COLUMNS }).map((_, c) => {
            const isColActive = percentToColumn(basketPosPercent, TOTAL_COLUMNS) === c;
            return (
              <Pressable
                key={`btn-col-${c}`}
                onPress={() => jumpToColumn(c)}
                style={[
                  styles.columnJumpBtn,
                  isColActive && styles.columnJumpBtnActive,
                ]}
                accessibilityLabel={`Jump to column ${c + 1}`}
              >
                <Text
                  style={[
                    styles.columnJumpText,
                    isColActive && styles.columnJumpTextActive,
                  ]}
                >
                  COL {c + 1}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.touchGuideRow}>
          <Text style={styles.touchGuideTitle}>
            {tiltEnabled
              ? 'TILT PHONE TO STEER • DRAG BASKET • TAP COLUMNS'
              : 'DRAG HORIZONTALLY • TAP COLUMN TO JUMP'}
          </Text>
          {tiltEnabled && (
            <Pressable
              onPress={calibrateTilt}
              style={styles.recenterBadge}
              accessibilityLabel="Recenter Tilt Sensor"
            >
              <Compass size={11} color="#38BDF8" />
              <Text style={styles.recenterText}>
                {tiltDirectionBadge === 'CENTER' ? 'CENTERED' : `TILT: ${tiltDirectionBadge}`}
              </Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* 6. Game Over Modal */}
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
                ? 'Sensational reflexes! You set a new all-time Kanji Catch record.'
                : 'Your lives ran out. Sharpen your Kanji intuition and try again!'}
            </Text>

            {/* Score Grid */}
            <View style={styles.modalStatsCard}>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>FINAL SCORE</Text>
                <Text style={styles.modalStatValue}>{score}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>TARGETS</Text>
                <Text style={styles.modalStatValue}>{targetCaughtCount}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>MAX COMBO</Text>
                <Text style={styles.modalStatValue}>{maxStreak}x</Text>
              </View>
            </View>

            {/* Buttons */}
            <View style={styles.modalBtnRow}>
              <Pressable onPress={startGame} style={styles.modalPlayAgainBtn}>
                <RotateCcw size={18} color="#0F172A" />
                <Text style={styles.modalPlayAgainText}>PLAY AGAIN</Text>
              </Pressable>
              <Pressable onPress={onClose} style={styles.modalExitBtn}>
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
    paddingVertical: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  headerTitleWrap: {
    justifyContent: 'center',
  },
  titleBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  modeBadge: {
    backgroundColor: '#10B98125',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#10B98140',
  },
  modeBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#34D399',
    letterSpacing: 0.5,
  },
  recordSubtitle: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  targetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#1E293B',
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 6,
  },
  targetLeft: {
    flex: 1,
    paddingRight: 10,
  },
  targetLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.6,
  },
  targetPromptPrimary: {
    fontSize: 17,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.4,
    marginTop: 2,
  },
  targetPromptSecondary: {
    fontSize: 12,
    fontWeight: '600',
    color: '#38BDF8',
    marginTop: 2,
  },
  targetRight: {
    alignItems: 'center',
  },
  targetRequiredBadge: {
    backgroundColor: '#F59E0B20',
    borderColor: '#F59E0B50',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
  },
  targetCatchLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#F59E0B',
    letterSpacing: 0.8,
  },
  targetGlyphHighlight: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FBBF24',
  },
  tacticalStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '900',
    color: '#38BDF8',
  },
  livesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  comboBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#1E293B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  comboBadgeActive: {
    backgroundColor: '#38BDF820',
    borderColor: '#38BDF850',
  },
  comboBadgeSuper: {
    backgroundColor: '#F9731620',
    borderColor: '#F9731660',
  },
  comboText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  fieldWrapper: {
    flex: 1,
    backgroundColor: '#090D16',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#1E293B',
    overflow: 'hidden',
    position: 'relative',
    marginVertical: 4,
  },
  columnLinesOverlay: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
  },
  columnLane: {
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#1E293B40',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 8,
  },
  columnLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#334155',
  },
  fallingOrb: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E293B',
    borderWidth: 1.5,
    borderColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },
  targetOrbGlow: {
    backgroundColor: '#0F172A',
    borderColor: '#F59E0B',
    borderWidth: 2,
    shadowColor: '#F59E0B',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 6,
  },
  bonusOrb: {
    backgroundColor: '#78350F',
    borderColor: '#FDE047',
    borderWidth: 2,
  },
  fallingGlyph: {
    fontSize: 20,
    fontWeight: '900',
    color: '#E2E8F0',
  },
  targetGlyphGlow: {
    color: '#FBBF24',
    fontSize: 22,
  },
  bonusGlyph: {
    color: '#FDE047',
    fontSize: 22,
  },
  fallingSub: {
    fontSize: 8,
    fontWeight: '800',
    color: '#94A3B8',
    marginTop: -2,
  },
  catchFlash: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#10B98125',
  },
  scorePopupWrap: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    alignItems: 'center',
  },
  scorePopupText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#34D399',
    backgroundColor: 'rgba(5, 8, 17, 0.85)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#34D399',
  },
  basketPaddle: {
    position: 'absolute',
    top: '84%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basketTopGlow: {
    width: '100%',
    height: 4,
    backgroundColor: '#F59E0B',
    borderRadius: 2,
    shadowColor: '#F59E0B',
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 4,
  },
  basketBody: {
    width: '100%',
    height: 38,
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#F59E0B',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  basketIcon: {
    fontSize: 18,
  },
  basketBase: {
    width: '70%',
    height: 4,
    backgroundColor: '#D97706',
    borderRadius: 2,
  },
  touchGuideDeck: {
    paddingVertical: 6,
    gap: 8,
  },
  columnButtonsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  columnJumpBtn: {
    flex: 1,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnJumpBtnActive: {
    backgroundColor: '#F59E0B20',
    borderColor: '#F59E0B',
  },
  columnJumpText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 0.4,
  },
  columnJumpTextActive: {
    color: '#F59E0B',
  },
  touchGuideRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  touchGuideTitle: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.4,
    flex: 1,
  },
  recenterBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#0F172A',
    borderColor: '#38BDF860',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  recenterText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#38BDF8',
    letterSpacing: 0.3,
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
    backgroundColor: 'rgba(5, 8, 17, 0.94)',
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
  },
  heroBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F59E0B20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  heroSubtitle: {
    fontSize: 11,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 16,
    marginBottom: 14,
  },
  configGroup: {
    width: '100%',
    marginBottom: 10,
  },
  configHeader: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  pill: {
    backgroundColor: '#0F172A',
    borderColor: '#334155',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  pillActive: {
    backgroundColor: '#F59E0B20',
    borderColor: '#F59E0B',
  },
  pillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  pillTextActive: {
    color: '#FBBF24',
    fontWeight: '800',
  },
  startBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#F59E0B',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 10,
  },
  startBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(5, 8, 17, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
  },
  modalIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  modalSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  modalStatsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  modalStatItem: {
    flex: 1,
    alignItems: 'center',
  },
  modalStatDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#334155',
  },
  modalStatLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  modalStatValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F8FAFC',
    marginTop: 2,
  },
  modalBtnRow: {
    width: '100%',
    gap: 10,
  },
  modalPlayAgainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#F59E0B',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 14,
  },
  modalPlayAgainText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  modalExitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
  },
  modalExitText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#94A3B8',
  },
});
