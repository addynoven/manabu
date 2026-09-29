import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Trophy, ArrowUp, Zap } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface YokaiRunViewProps {
  onClose: () => void;
}

const KANA_ITEMS = [
  { kana: 'あ', romaji: 'a' },
  { kana: 'か', romaji: 'ka' },
  { kana: 'さ', romaji: 'sa' },
  { kana: 'た', romaji: 'ta' },
  { kana: 'な', romaji: 'na' },
  { kana: 'は', romaji: 'ha' },
  { kana: 'ま', romaji: 'ma' },
  { kana: 'や', romaji: 'ya' },
  { kana: 'ら', romaji: 'ra' },
  { kana: 'わ', romaji: 'wa' },
];

const YOKAI_TYPES = ['👹', '👻', '👺', '💀'];

export function YokaiRunView({ onClose }: YokaiRunViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [distance, setDistance] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);

  // Player Y position (0 = ground, >0 = jumping)
  const [playerY, setPlayerY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  // Obstacle & Item state
  const [obstacleX, setObstacleX] = useState(100);
  const [obstacleIcon, setObstacleIcon] = useState('👹');
  const [itemX, setItemX] = useState(140);
  const [itemKana, setItemKana] = useState(KANA_ITEMS[0]);

  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startGame = useCallback(() => {
    setScore(0);
    setDistance(0);
    setLives(3);
    setPlayerY(0);
    setIsJumping(false);
    setObstacleX(100);
    setItemX(140);
    setGameOver(false);
    setIsPlaying(true);
  }, []);

  const jump = useCallback(() => {
    if (isJumping || !isPlaying) return;
    setIsJumping(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});

    let height = 0;
    const jumpInterval = setInterval(() => {
      height += 15;
      setPlayerY(height);
      if (height >= 90) {
        clearInterval(jumpInterval);
        const fallInterval = setInterval(() => {
          height -= 15;
          setPlayerY(height);
          if (height <= 0) {
            clearInterval(fallInterval);
            setPlayerY(0);
            setIsJumping(false);
          }
        }, 30);
      }
    }, 30);
  }, [isJumping, isPlaying]);

  // Main Game Loop
  useEffect(() => {
    if (!isPlaying || gameOver) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      return;
    }

    gameLoopRef.current = setInterval(() => {
      setDistance(prev => prev + 1);

      // Move Obstacle
      setObstacleX(prev => {
        if (prev <= -10) {
          setObstacleIcon(YOKAI_TYPES[Math.floor(Math.random() * YOKAI_TYPES.length)]);
          return 100 + Math.random() * 30;
        }
        return prev - 3;
      });

      // Move Item
      setItemX(prev => {
        if (prev <= -10) {
          setItemKana(KANA_ITEMS[Math.floor(Math.random() * KANA_ITEMS.length)]);
          return 120 + Math.random() * 40;
        }
        return prev - 3;
      });
    }, 50);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, gameOver]);

  // Collision Detection
  useEffect(() => {
    if (!isPlaying) return;

    // Obstacle Collision (when obstacle is near player x ~ 15-25 and player is grounded Y < 30)
    if (obstacleX >= 15 && obstacleX <= 25 && playerY < 35) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          setIsPlaying(false);
          setGameOver(true);
          setHighScore(h => Math.max(h, score));
        }
        return next;
      });
      setObstacleX(110);
    }

    // Item Collection (when item is near player x ~ 15-25 and player is jumping Y >= 30)
    if (itemX >= 15 && itemX <= 25 && playerY >= 25) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      if (ttsEnabled) {
        speakJapanese(itemKana.kana).catch(() => {});
      }
      setScore(s => s + 50);
      setItemX(130);
    }
  }, [obstacleX, itemX, playerY, isPlaying, score, itemKana, ttsEnabled]);

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
          <Text style={[styles.title, { color: theme.textPrimary }]}>妖怪ラン • Yokai Runner</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Score: {score} • Best: {highScore}
          </Text>
        </View>

        <Pressable
          onPress={startGame}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* HUD Bar */}
      <View style={[styles.hudRow, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Text style={styles.hudText}>
          {'❤️'.repeat(lives)}{'🖤'.repeat(Math.max(0, 3 - lives))}
        </Text>
        <Text style={[styles.hudText, { color: theme.primary }]}>
          🏃 {distance}m
        </Text>
        <Text style={[styles.hudText, { color: theme.accent }]}>
          ⭐ {score} pts
        </Text>
      </View>

      {/* Runner Track Area */}
      <View style={[styles.trackContainer, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
        {/* Sky Items */}
        {isPlaying && (
          <View style={[styles.itemTile, { left: `${itemX}%` }]}>
            <Text style={styles.itemKanaText}>{itemKana.kana}</Text>
            <Text style={styles.itemRomajiText}>{itemKana.romaji}</Text>
          </View>
        )}

        {/* Player Character */}
        <View style={[styles.player, { bottom: playerY + 20 }]}>
          <Text style={styles.playerSprite}>{isJumping ? '🥷' : '🏃'}</Text>
        </View>

        {/* Obstacle Yokai */}
        {isPlaying && (
          <View style={[styles.obstacle, { left: `${obstacleX}%` }]}>
            <Text style={styles.obstacleSprite}>{obstacleIcon}</Text>
          </View>
        )}

        {/* Ground Line */}
        <View style={[styles.ground, { backgroundColor: theme.primary }]} />
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {!isPlaying && !gameOver ? (
          <Pressable
            onPress={startGame}
            style={[styles.jumpButton, { backgroundColor: theme.primary }]}
          >
            <Zap size={24} color="#FFFFFF" />
            <Text style={styles.jumpButtonText}>START RUN</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={jump}
            style={[styles.jumpButton, { backgroundColor: theme.primary }]}
          >
            <ArrowUp size={28} color="#FFFFFF" />
            <Text style={styles.jumpButtonText}>JUMP!</Text>
          </Pressable>
        )}
      </View>

      {/* Game Over Modal */}
      <Modal visible={gameOver} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Trophy size={48} color="#F59E0B" />
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Run Finished!</Text>
            <Text style={[styles.modalSub, { color: theme.textSecondary }]}>
              Distance: {distance}m • Score: {score} pts
            </Text>

            <Pressable
              onPress={startGame}
              style={[styles.playAgainBtn, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.playAgainText}>Run Again</Text>
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
  hudRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    marginVertical: 12,
  },
  hudText: {
    fontSize: 14,
    fontWeight: '700',
  },
  trackContainer: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  player: {
    position: 'absolute',
    left: 20,
    zIndex: 10,
  },
  playerSprite: {
    fontSize: 40,
  },
  obstacle: {
    position: 'absolute',
    bottom: 20,
    zIndex: 5,
  },
  obstacleSprite: {
    fontSize: 34,
  },
  itemTile: {
    position: 'absolute',
    top: 30,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  itemKanaText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  itemRomajiText: {
    color: '#DBEAFE',
    fontSize: 10,
    fontWeight: '600',
  },
  ground: {
    height: 20,
    width: '100%',
  },
  controls: {
    marginTop: 16,
  },
  jumpButton: {
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  jumpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
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
