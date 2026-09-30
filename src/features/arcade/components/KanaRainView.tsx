import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import {
  X,
  Heart,
  Zap,
  Trophy,
  Play,
  CloudRain,
  Volume2,
  VolumeX,
  Flame,
  RotateCcw,
  Sparkles,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { radii, useAppTheme } from '../../../core/theme';
import {
  getComboMultiplier,
  spawnRainItem,
  calculateDropScore,
  DIFFICULTY_SPEED_MAP,
  type RainMode,
  type RainDifficulty,
} from '../lib/rainEngine';
import type { RainItem } from '../models/arcade.model';
import { useArcadeStore } from '../store/useArcadeStore';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

const INITIAL_LIVES = 3;
const OPTION_COLORS = ['#38BDF8', '#A855F7', '#F59E0B', '#10B981'];

interface KanaRainViewProps {
  onClose: () => void;
}

interface FloatingScore {
  id: number;
  text: string;
  x: number;
  y: number;
}

export function KanaRainView({ onClose }: KanaRainViewProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const globalTtsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);
  const { rainHighScore, recordRainScore } = useArcadeStore();

  // Settings
  const [mode, setMode] = useState<RainMode>('hiragana');
  const [difficulty, setDifficulty] = useState<RainDifficulty>('medium');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Gameplay State
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [dropsCaught, setDropsCaught] = useState(0);
  const [totalDropsSpawned, setTotalDropsSpawned] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [currentDrop, setCurrentDrop] = useState<RainItem | null>(null);
  const [dropY, setDropY] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isWrongChoice, setIsWrongChoice] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isNewHigh, setIsNewHigh] = useState(false);

  // Arena Geometry
  const [arenaHeight, setArenaHeight] = useState(440);
  const [arenaWidth, setArenaWidth] = useState(360);

  // Floating score popups
  const [floatingScores, setFloatingScores] = useState<FloatingScore[]>([]);

  // Animations
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const floorFlashAnim = useRef(new Animated.Value(0)).current;
  const splashAnim = useRef(new Animated.Value(0)).current;
  const [splashCoords, setSplashCoords] = useState<{ x: number; y: number } | null>(null);

  // Refs
  const counterRef = useRef(0);
  const speedMultiplierRef = useRef(1.0);
  const loopTimerRef = useRef<NodeJS.Timeout | null>(null);

  const livesRef = useRef(INITIAL_LIVES);
  livesRef.current = lives;
  const scoreRef = useRef(score);
  scoreRef.current = score;
  const dropYRef = useRef(dropY);
  dropYRef.current = dropY;
  const arenaHeightRef = useRef(arenaHeight);
  arenaHeightRef.current = arenaHeight;
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;
  const gameOverRef = useRef(gameOver);
  gameOverRef.current = gameOver;

  // Measure arena layout
  const handleArenaLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (height > 100) setArenaHeight(height);
    if (width > 100) setArenaWidth(width);
  };

  // Trigger screen shake
  const triggerShake = useCallback(() => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 5, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 40, useNativeDriver: true }),
    ]).start();
  }, [shakeAnim]);

  // Trigger floor laser flash on miss
  const triggerFloorFlash = useCallback(() => {
    floorFlashAnim.setValue(1);
    Animated.timing(floorFlashAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, [floorFlashAnim]);

  // Trigger splash ripple at catch
  const triggerSplash = useCallback((x: number, y: number) => {
    setSplashCoords({ x, y });
    splashAnim.setValue(0);
    Animated.timing(splashAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setSplashCoords(null));
  }, [splashAnim]);

  // Spawn next drop
  const spawnNextDrop = useCallback(() => {
    counterRef.current++;
    setTotalDropsSpawned(prev => prev + 1);
    const baseDiffSpeed = DIFFICULTY_SPEED_MAP[difficulty];
    const next = spawnRainItem(counterRef.current, speedMultiplierRef.current * baseDiffSpeed, mode);
    setCurrentDrop(next);
    dropYRef.current = 0;
    setDropY(0);
    setSelectedOption(null);
    setIsWrongChoice(false);
  }, [difficulty, mode]);

  // End game cleanly
  const endGame = useCallback((finalScore: number) => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    setGameOver(true);
    gameOverRef.current = true;
    const { isNewHigh: newHigh } = recordRainScore(finalScore);
    setIsNewHigh(newHigh);
  }, [recordRainScore]);

  // Start new game
  const startGame = () => {
    setScore(0);
    scoreRef.current = 0;
    setStreak(0);
    setMaxStreak(0);
    setDropsCaught(0);
    setTotalDropsSpawned(0);
    setLives(INITIAL_LIVES);
    livesRef.current = INITIAL_LIVES;
    setGameOver(false);
    gameOverRef.current = false;
    setIsNewHigh(false);
    setFloatingScores([]);
    speedMultiplierRef.current = 1.0;
    dropYRef.current = 0;
    setDropY(0);
    setIsPlaying(true);
    isPlayingRef.current = true;
    spawnNextDrop();
  };

  // Handle a missed drop (hit bottom floor)
  const handleDropMiss = useCallback(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    triggerShake();
    triggerFloorFlash();
    setStreak(0);

    const nextLives = livesRef.current - 1;
    livesRef.current = nextLives;
    setLives(nextLives);

    if (nextLives > 0) {
      spawnNextDrop();
    } else {
      endGame(scoreRef.current);
    }
  }, [triggerShake, triggerFloorFlash, spawnNextDrop, endGame]);

  // Game loop tick
  useEffect(() => {
    if (!isPlaying || gameOver || !currentDrop) return;

    const speed = currentDrop.speed;

    const interval = setInterval(() => {
      if (!isPlayingRef.current || gameOverRef.current) return;

      const nextY = dropYRef.current + 1.6 * speed;
      // Check if drop hit the bottom threshold
      if (nextY >= arenaHeightRef.current - 68) {
        dropYRef.current = 0;
        setDropY(0);
        handleDropMiss();
      } else {
        dropYRef.current = nextY;
        setDropY(nextY);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, currentDrop, handleDropMiss]);

  // Player presses an answer option
  const handleAnswerPress = (option: string) => {
    if (!isPlaying || gameOver || !currentDrop) return;
    setSelectedOption(option);

    if (option === currentDrop.answer) {
      // Correct Catch!
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      if (soundEnabled && globalTtsEnabled) {
        speakJapanese(currentDrop.glyph, { rate: ttsRate }).catch(() => {});
      }

      // Calculate score & streak
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setDropsCaught(c => c + 1);

      const points = calculateDropScore(newStreak, speedMultiplierRef.current);
      const nextScore = scoreRef.current + points;
      scoreRef.current = nextScore;
      setScore(nextScore);

      // Trigger splash animation at current drop location
      const dropColWidth = arenaWidth / 4;
      const splashX = currentDrop.column * dropColWidth + dropColWidth / 2;
      triggerSplash(splashX, dropY);

      // Add floating score
      const newFloatId = Date.now();
      const combo = getComboMultiplier(newStreak);
      const floatText = combo > 1 ? `+${points} (${combo}x)` : `+${points}`;
      setFloatingScores(prev => [...prev.slice(-3), { id: newFloatId, text: floatText, x: splashX - 24, y: dropY - 10 }]);
      setTimeout(() => {
        setFloatingScores(prev => prev.filter(f => f.id !== newFloatId));
      }, 700);

      // Progressive speedup every 5 catches
      if (newStreak % 5 === 0) {
        speedMultiplierRef.current = Math.min(speedMultiplierRef.current + 0.1, 2.0);
      }

      spawnNextDrop();
    } else {
      // Wrong Answer!
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      setIsWrongChoice(true);
      triggerShake();
      setStreak(0);

      const nextLives = livesRef.current - 1;
      livesRef.current = nextLives;
      setLives(nextLives);

      if (nextLives > 0) {
        spawnNextDrop();
      } else {
        endGame(scoreRef.current);
      }
    }
  };

  const comboMultiplier = getComboMultiplier(streak);
  const accuracy = totalDropsSpawned > 0 ? Math.round((dropsCaught / totalDropsSpawned) * 100) : 0;

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
      {/* 1. Header Bar */}
      <View style={styles.header}>
        <Pressable
          onPress={onClose}
          style={[styles.iconButton, { backgroundColor: '#1E293B', borderColor: '#334155' }]}
          accessibilityLabel="Close Kana Rain"
        >
          <X size={20} color="#94A3B8" />
        </Pressable>

        <View style={styles.headerCenter}>
          <View style={styles.titleBadge}>
            <CloudRain size={16} color="#38BDF8" />
            <Text style={styles.title}>仮名の雨 • KANA RAIN</Text>
          </View>
          <View style={styles.bestBadge}>
            <Trophy size={12} color="#F59E0B" />
            <Text style={styles.bestScoreText}>
              BEST: {Math.max(score, rainHighScore)} pts
            </Text>
          </View>
        </View>

        <View style={styles.headerRightControls}>
          <Pressable
            onPress={() => setSoundEnabled(v => !v)}
            style={[styles.smallIconBtn, { backgroundColor: '#1E293B' }]}
          >
            {soundEnabled ? (
              <Volume2 size={16} color="#38BDF8" />
            ) : (
              <VolumeX size={16} color="#64748B" />
            )}
          </Pressable>

          <View style={styles.livesContainer}>
            {Array.from({ length: INITIAL_LIVES }).map((_, i) => (
              <Heart
                key={`heart-${i}`}
                size={18}
                color={i < lives ? '#EF4444' : '#334155'}
                fill={i < lives ? '#EF4444' : 'transparent'}
              />
            ))}
          </View>
        </View>
      </View>

      {/* 2. HUD: Score & Active Combo */}
      <View style={styles.hudRow}>
        <View style={styles.scoreContainer}>
          <Text style={styles.hudLabel}>SCORE</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>

        <View style={styles.streakContainer}>
          <View
            style={[
              styles.comboPill,
              {
                backgroundColor: comboMultiplier > 1 ? '#F9731620' : '#1E293B',
                borderColor: comboMultiplier > 1 ? '#F97316' : '#334155',
              },
            ]}
          >
            {comboMultiplier > 1 ? (
              <Flame size={14} color="#F97316" />
            ) : (
              <Zap size={14} color="#38BDF8" />
            )}
            <Text
              style={[
                styles.comboText,
                { color: comboMultiplier > 1 ? '#F97316' : '#94A3B8' },
              ]}
            >
              {comboMultiplier > 1 ? `${comboMultiplier}x COMBO` : '1x STREAK'} ({streak})
            </Text>
          </View>
        </View>
      </View>

      {/* 3. Main Falling Sky Arena */}
      <View
        onLayout={handleArenaLayout}
        style={styles.arenaContainer}
      >
        {/* Cloud Canopy Top Glow */}
        <View style={styles.cloudCanopy}>
          <View style={styles.cloudLaneGuide}>
            <Text style={styles.laneMarker}>1</Text>
            <Text style={styles.laneMarker}>2</Text>
            <Text style={styles.laneMarker}>3</Text>
            <Text style={styles.laneMarker}>4</Text>
          </View>
        </View>

        {/* 4 Illuminated Rain Columns */}
        <View style={styles.columnDividers}>
          <View style={styles.columnTrack} />
          <View style={styles.columnTrack} />
          <View style={styles.columnTrack} />
          <View style={[styles.columnTrack, { borderRightWidth: 0 }]} />
        </View>

        {/* Falling Raindrop Tile */}
        {isPlaying && currentDrop && (
          <View
            style={[
              styles.raindropBadge,
              {
                left: `${currentDrop.column * 25 + 2.5}%`,
                top: dropY,
              },
            ]}
          >
            <View style={styles.raindropGlow} />
            <Text style={styles.raindropGlyph}>{currentDrop.glyph}</Text>
            {/* Speed indicator pip */}
            <View style={styles.dropGlowPip} />
          </View>
        )}

        {/* Splash Ripple Visual Effect */}
        {splashCoords && (
          <Animated.View
            style={[
              styles.splashRipple,
              {
                left: splashCoords.x - 36,
                top: splashCoords.y - 12,
                transform: [
                  {
                    scale: splashAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.3, 1.8],
                    }),
                  },
                ],
                opacity: splashAnim.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [1, 0.8, 0],
                }),
              },
            ]}
          />
        )}

        {/* Floating Scores */}
        {floatingScores.map(item => (
          <View
            key={`float-${item.id}`}
            style={[styles.floatingScoreWrap, { left: item.x, top: item.y }]}
          >
            <Text style={styles.floatingScoreText}>{item.text}</Text>
          </View>
        ))}

        {/* Bottom Splash Waterline with Warning Laser */}
        <View style={styles.floorContainer}>
          <Animated.View
            style={[
              styles.floorLaser,
              {
                opacity: floorFlashAnim,
              },
            ]}
          />
          <View style={styles.waterSurface} />
        </View>

        {/* Pre-Game Overlay & Difficulty Selector */}
        {!isPlaying && !gameOver && (
          <View style={styles.preGameOverlay}>
            <View style={styles.preGameCard}>
              <View style={styles.preGameHeader}>
                <Sparkles size={24} color="#38BDF8" />
                <Text style={styles.preGameTitle}>RAIN OF GLYPHS</Text>
                <Text style={styles.preGameSubtitle}>
                  Catch descending characters before they hit the waterline!
                </Text>
              </View>

              {/* Mode Selector */}
              <View style={styles.configSection}>
                <Text style={styles.configLabel}>CHARACTER SET</Text>
                <View style={styles.modePillRow}>
                  {(['hiragana', 'katakana', 'kanji', 'mixed'] as RainMode[]).map(m => (
                    <Pressable
                      key={m}
                      onPress={() => {
                        Haptics.selectionAsync().catch(() => {});
                        setMode(m);
                      }}
                      style={[
                        styles.modePill,
                        mode === m && styles.modePillActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.modePillText,
                          mode === m && styles.modePillTextActive,
                        ]}
                      >
                        {m === 'hiragana'
                          ? 'あ Hiragana'
                          : m === 'katakana'
                          ? 'ア Katakana'
                          : m === 'kanji'
                          ? '漢 Kanji'
                          : '🌀 Mixed'}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Difficulty Selector */}
              <View style={styles.configSection}>
                <Text style={styles.configLabel}>TEMPO / SPEED</Text>
                <View style={styles.diffPillRow}>
                  {(['easy', 'medium', 'hard'] as RainDifficulty[]).map(d => (
                    <Pressable
                      key={d}
                      onPress={() => {
                        Haptics.selectionAsync().catch(() => {});
                        setDifficulty(d);
                      }}
                      style={[
                        styles.diffPill,
                        difficulty === d && styles.diffPillActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.diffPillText,
                          difficulty === d && styles.diffPillTextActive,
                        ]}
                      >
                        {d === 'easy'
                          ? '💧 Drizzle'
                          : d === 'medium'
                          ? '🌧️ Downpour'
                          : '⛈️ Typhoon'}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Start Arcade Button */}
              <Pressable
                onPress={startGame}
                style={styles.heroStartButton}
              >
                <Play size={20} color="#FFFFFF" fill="#FFFFFF" />
                <Text style={styles.heroStartText}>START RAIN ARCADE</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>

      {/* 4. Tactile Arcade Answer Deck (4 Response Tiles) */}
      <View style={styles.controlsDeck}>
        <View style={styles.controlsHeader}>
          <Text style={styles.deckPrompt}>
            {isPlaying ? 'TAP THE MATCHING SOUND:' : 'RESPONSE TILES'}
          </Text>
          {isPlaying && currentDrop && (
            <View style={styles.hintBadge}>
              <Text style={styles.hintBadgeText}>FAST REFLEX</Text>
            </View>
          )}
        </View>

        <View style={styles.optionsRow}>
          {([0, 1, 2, 3] as const).map(index => {
            const option = currentDrop?.options[index] ?? '';
            const isChosen = selectedOption === option;
            const isCorrect = isChosen && currentDrop && option === currentDrop.answer;
            const isWrong = isChosen && isWrongChoice;
            const accentColor = OPTION_COLORS[index];

            return (
              <Pressable
                key={`btn-tile-${index}`}
                onPress={() => option && handleAnswerPress(option)}
                disabled={!isPlaying || !option}
                style={[
                  styles.optionTile,
                  {
                    borderColor: isCorrect
                      ? '#22C55E'
                      : isWrong
                      ? '#EF4444'
                      : isPlaying
                      ? accentColor
                      : '#334155',
                    backgroundColor: isCorrect
                      ? '#22C55E24'
                      : isWrong
                      ? '#EF444424'
                      : '#1E293B',
                  },
                ]}
              >
                <View
                  style={[
                    styles.tileLabelPip,
                    { backgroundColor: accentColor + '30' },
                  ]}
                >
                  <Text style={[styles.tileLabelLetter, { color: accentColor }]}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.optionSoundText,
                    {
                      color: !isPlaying
                        ? '#475569'
                        : isCorrect
                        ? '#22C55E'
                        : isWrong
                        ? '#EF4444'
                        : '#F8FAFC',
                    },
                  ]}
                >
                  {isPlaying ? option : '—'}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* 5. Game Over Summary Modal */}
      <Modal
        visible={gameOver}
        transparent
        animationType="fade"
        onRequestClose={() => setGameOver(false)}
      >
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
                <CloudRain size={48} color="#38BDF8" />
              )}
            </View>

            <Text style={styles.modalTitle}>
              {isNewHigh ? '🏆 NEW RECORD!' : 'GAME OVER'}
            </Text>
            <Text style={styles.modalSubtitle}>
              {isNewHigh
                ? 'Sensational reflexes! You shattered the previous high score.'
                : 'The rain overtook the floor line! Sharpen your reflexes and try again.'}
            </Text>

            {/* Score Grid */}
            <View style={styles.modalScoreCard}>
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>FINAL SCORE</Text>
                <Text style={styles.modalStatValue}>{score}</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>MAX STREAK</Text>
                <Text style={styles.modalStatValue}>{maxStreak}x</Text>
              </View>
              <View style={styles.modalStatDivider} />
              <View style={styles.modalStatItem}>
                <Text style={styles.modalStatLabel}>ACCURACY</Text>
                <Text style={styles.modalStatValue}>{accuracy}%</Text>
              </View>
            </View>

            <View style={styles.modalActions}>
              <Pressable
                onPress={() => {
                  setGameOver(false);
                  setIsPlaying(false);
                  setCurrentDrop(null);
                  setDropY(0);
                  setLives(INITIAL_LIVES);
                  setScore(0);
                  setStreak(0);
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
    backgroundColor: '#080C16',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    alignItems: 'center',
    gap: 2,
  },
  titleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.8,
  },
  bestBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bestScoreText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#F59E0B',
    letterSpacing: 0.5,
  },
  headerRightControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  smallIconBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  livesContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  hudRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  hudLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: '900',
    color: '#38BDF8',
    textShadowColor: 'rgba(56, 189, 248, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comboPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  comboText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  arenaContainer: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#1E293B',
    overflow: 'hidden',
    position: 'relative',
    marginVertical: 8,
    minHeight: 380,
  },
  cloudCanopy: {
    height: 28,
    backgroundColor: '#1E293B40',
    borderBottomWidth: 1,
    borderBottomColor: '#33415530',
    justifyContent: 'center',
  },
  cloudLaneGuide: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  laneMarker: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  columnDividers: {
    flexDirection: 'row',
    position: 'absolute',
    top: 28,
    bottom: 20,
    left: 0,
    right: 0,
  },
  columnTrack: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#33415525',
    borderStyle: 'dashed',
  },
  raindropBadge: {
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#1E293B',
    borderWidth: 2.5,
    borderColor: '#38BDF8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  raindropGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 34,
    backgroundColor: '#38BDF815',
  },
  raindropGlyph: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFFFFF',
    textShadowColor: 'rgba(56, 189, 248, 0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  dropGlowPip: {
    position: 'absolute',
    bottom: -6,
    width: 12,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#38BDF8',
  },
  splashRipple: {
    position: 'absolute',
    width: 72,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#38BDF8',
    backgroundColor: 'rgba(56, 189, 248, 0.2)',
  },
  floatingScoreWrap: {
    position: 'absolute',
    zIndex: 10,
  },
  floatingScoreText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#22C55E',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  floorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 16,
  },
  floorLaser: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#EF4444',
  },
  waterSurface: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: '#38BDF8',
    opacity: 0.6,
  },
  preGameOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.88)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  preGameCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 20,
    gap: 16,
    alignItems: 'center',
  },
  preGameHeader: {
    alignItems: 'center',
    gap: 4,
  },
  preGameTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1,
  },
  preGameSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 16,
  },
  configSection: {
    width: '100%',
    gap: 6,
  },
  configLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  modePillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  modePill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
  },
  modePillActive: {
    backgroundColor: '#38BDF820',
    borderColor: '#38BDF8',
  },
  modePillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  modePillTextActive: {
    color: '#38BDF8',
  },
  diffPillRow: {
    flexDirection: 'row',
    gap: 6,
  },
  diffPill: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: radii.md,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  diffPillActive: {
    backgroundColor: '#F59E0B20',
    borderColor: '#F59E0B',
  },
  diffPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  diffPillTextActive: {
    color: '#F59E0B',
  },
  heroStartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    backgroundColor: '#0284C7',
    paddingVertical: 14,
    borderRadius: radii.lg,
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  heroStartText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  controlsDeck: {
    gap: 10,
    paddingTop: 4,
  },
  controlsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  deckPrompt: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  hintBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: '#38BDF820',
  },
  hintBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#38BDF8',
    letterSpacing: 0.5,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  optionTile: {
    flex: 1,
    height: 64,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  tileLabelPip: {
    position: 'absolute',
    top: 4,
    left: 6,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
  },
  tileLabelLetter: {
    fontSize: 9,
    fontWeight: '900',
  },
  optionSoundText: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#334155',
    backgroundColor: '#0F172A',
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  modalIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  modalSubtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 6,
    marginBottom: 18,
  },
  modalScoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#1E293B',
    borderRadius: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 20,
  },
  modalStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  modalStatLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 0.5,
  },
  modalStatValue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#38BDF8',
    marginTop: 2,
  },
  modalStatDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#334155',
  },
  modalActions: {
    width: '100%',
    gap: 10,
  },
  modalPlayAgainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0284C7',
  },
  modalPlayAgainText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  modalExitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
  },
  modalExitText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '800',
  },
});
