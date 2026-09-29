import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface KanaSnakeViewProps {
  onClose: () => void;
}

const GRID_SIZE = 10;

const FOOD_ITEMS = [
  { kana: 'あ', romaji: 'a' },
  { kana: 'い', romaji: 'i' },
  { kana: 'う', romaji: 'u' },
  { kana: 'え', romaji: 'e' },
  { kana: 'お', romaji: 'o' },
];

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export function KanaSnakeView({ onClose }: KanaSnakeViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  const [snake, setSnake] = useState<Point[]>([{ x: 5, y: 5 }, { x: 5, y: 6 }]);
  const [direction, setDirection] = useState<Direction>('UP');
  const [targetFood, setTargetFood] = useState(FOOD_ITEMS[0]);
  const [foodPos, setFoodPos] = useState<Point>({ x: 2, y: 2 });
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const spawnFood = useCallback(() => {
    const nextFood = FOOD_ITEMS[Math.floor(Math.random() * FOOD_ITEMS.length)];
    setTargetFood(nextFood);
    setFoodPos({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    });
  }, []);

  const startGame = useCallback(() => {
    setSnake([{ x: 5, y: 5 }, { x: 5, y: 6 }]);
    setDirection('UP');
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    spawnFood();
  }, [spawnFood]);

  const changeDirection = (newDir: Direction) => {
    if (!isPlaying) return;
    Haptics.selectionAsync().catch(() => {});
    if (newDir === 'UP' && direction !== 'DOWN') setDirection('UP');
    if (newDir === 'DOWN' && direction !== 'UP') setDirection('DOWN');
    if (newDir === 'LEFT' && direction !== 'RIGHT') setDirection('LEFT');
    if (newDir === 'RIGHT' && direction !== 'LEFT') setDirection('RIGHT');
  };

  // Game Loop
  useEffect(() => {
    if (!isPlaying || gameOver) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      return;
    }

    gameLoopRef.current = setInterval(() => {
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };
        if (direction === 'UP') head.y -= 1;
        if (direction === 'DOWN') head.y += 1;
        if (direction === 'LEFT') head.x -= 1;
        if (direction === 'RIGHT') head.x += 1;

        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setIsPlaying(false);
          setGameOver(true);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
          return prevSnake;
        }

        // Self collision
        if (prevSnake.some(seg => seg.x === head.x && seg.y === head.y)) {
          setIsPlaying(false);
          setGameOver(true);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
          return prevSnake;
        }

        // Check Food
        const newSnake = [head, ...prevSnake];
        if (head.x === foodPos.x && head.y === foodPos.y) {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
          if (ttsEnabled) {
            speakJapanese(targetFood.kana).catch(() => {});
          }
          setScore(s => s + 10);
          spawnFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 250);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, gameOver, direction, foodPos, targetFood, spawnFood, ttsEnabled]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={onClose}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <X size={20} color={theme.textSecondary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>ヘビゲーム • Kana Snake</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Target: {targetFood.kana} ({targetFood.romaji}) • Score: {score}
          </Text>
        </View>

        <Pressable
          onPress={startGame}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* Grid Board */}
      <View style={[styles.board, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        {Array.from({ length: GRID_SIZE }).map((_, row) => (
          <View key={row} style={styles.row}>
            {Array.from({ length: GRID_SIZE }).map((_, col) => {
              const isHead = snake[0].x === col && snake[0].y === row;
              const isBody = snake.some((s, idx) => idx > 0 && s.x === col && s.y === row);
              const isFood = foodPos.x === col && foodPos.y === row;

              return (
                <View
                  key={col}
                  style={[
                    styles.cell,
                    { borderColor: theme.borderSubtle },
                    isHead && { backgroundColor: theme.primary },
                    isBody && { backgroundColor: theme.primaryLight },
                    isFood && { backgroundColor: theme.accent },
                  ]}
                >
                  {isFood && (
                    <Text style={styles.foodText}>{targetFood.kana}</Text>
                  )}
                  {isHead && <Text style={styles.headText}>👀</Text>}
                </View>
              );
            })}
          </View>
        ))}
      </View>

      {/* D-Pad Controls */}
      <View style={styles.controls}>
        {!isPlaying ? (
          <Pressable
            onPress={startGame}
            style={[styles.startBtn, { backgroundColor: theme.primary }]}
          >
            <Text style={styles.startBtnText}>START SNAKE</Text>
          </Pressable>
        ) : (
          <View style={styles.dpad}>
            <Pressable
              onPress={() => changeDirection('UP')}
              style={[styles.dpadBtn, styles.dpadUp, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <ArrowUp size={24} color={theme.textPrimary} />
            </Pressable>
            <View style={styles.dpadRow}>
              <Pressable
                onPress={() => changeDirection('LEFT')}
                style={[styles.dpadBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              >
                <ArrowLeft size={24} color={theme.textPrimary} />
              </Pressable>
              <View style={{ width: 40 }} />
              <Pressable
                onPress={() => changeDirection('RIGHT')}
                style={[styles.dpadBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              >
                <ArrowRight size={24} color={theme.textPrimary} />
              </Pressable>
            </View>
            <Pressable
              onPress={() => changeDirection('DOWN')}
              style={[styles.dpadBtn, styles.dpadDown, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <ArrowDown size={24} color={theme.textPrimary} />
            </Pressable>
          </View>
        )}
      </View>

      {/* Game Over Modal */}
      <Modal visible={gameOver} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Trophy size={48} color="#F59E0B" />
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Game Over!</Text>
            <Text style={[styles.modalSub, { color: theme.textSecondary }]}>
              Final Score: {score} pts
            </Text>

            <Pressable
              onPress={startGame}
              style={[styles.playAgainBtn, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.playAgainText}>Play Again</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    aspectRatio: 1,
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 4,
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  headText: {
    fontSize: 12,
  },
  controls: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtn: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
  },
  startBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  dpad: {
    alignItems: 'center',
  },
  dpadRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  dpadBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dpadUp: {},
  dpadDown: {},
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  modalCard: {
    width: '100%',
    maxWidth: 300,
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  modalSub: {
    fontSize: 14,
  },
  playAgainBtn: {
    width: '100%',
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playAgainText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
