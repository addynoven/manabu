import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, Heart, Zap, Trophy, Play } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { getComboMultiplier, spawnRainItem } from '../lib/rainEngine';
import type { RainItem } from '../models/arcade.model';
import { useArcadeStore } from '../store/useArcadeStore';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

const INITIAL_LIVES = 3;
const ARENA_HEIGHT = 280; // height of the falling arena

interface KanaRainViewProps {
  onClose: () => void;
}

export function KanaRainView({ onClose }: KanaRainViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);
  const { rainHighScore, recordRainScore } = useArcadeStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [currentDrop, setCurrentDrop] = useState<RainItem | null>(null);
  const [dropY, setDropY] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isNewHigh, setIsNewHigh] = useState(false);

  const counterRef = useRef(0);
  const speedMultiplierRef = useRef(1.0);

  const spawnNextDrop = useCallback(() => {
    counterRef.current++;
    const next = spawnRainItem(counterRef.current, speedMultiplierRef.current);
    setCurrentDrop(next);
    setDropY(0);
  }, []);

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setLives(INITIAL_LIVES);
    setGameOver(false);
    setIsNewHigh(false);
    speedMultiplierRef.current = 1.0;
    setIsPlaying(true);
    spawnNextDrop();
  };

  // Falling animation tick
  useEffect(() => {
    if (!isPlaying || gameOver || !currentDrop) return;

    const interval = setInterval(() => {
      setDropY(prev => {
        const nextY = prev + 3 * currentDrop.speed;
        if (nextY >= ARENA_HEIGHT) {
          // Missed the drop!
          handleDropMiss();
          return 0;
        }
        return nextY;
      });
    }, 24);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, currentDrop]);

  useEffect(() => {
    if (lives <= 0 && isPlaying) {
      setIsPlaying(false);
      setGameOver(true);
      const { isNewHigh: newHigh } = recordRainScore(score);
      setIsNewHigh(newHigh);
    }
  }, [lives, isPlaying, score, recordRainScore]);

  const handleDropMiss = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
    setStreak(0);
    setLives(prev => {
      const nextLives = prev - 1;
      if (nextLives > 0) {
        spawnNextDrop();
      }
      return nextLives;
    });
  };

  const handleAnswerPress = (option: string) => {
    if (!isPlaying || gameOver || !currentDrop) return;

    if (option === currentDrop.answer) {
      // Correct!
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      if (ttsEnabled) {
        speakJapanese(currentDrop.glyph, { rate: ttsRate }).catch(() => {});
      }

      const multiplier = getComboMultiplier(streak + 1);
      const points = 10 * multiplier;
      setScore(s => s + points);
      setStreak(st => st + 1);

      // Slightly increase speed every 5 catches
      if ((streak + 1) % 5 === 0) {
        speedMultiplierRef.current = Math.min(speedMultiplierRef.current + 0.15, 2.5);
      }

      spawnNextDrop();
    } else {
      // Wrong answer
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      setStreak(0);
      setLives(prev => {
        const nextLives = prev - 1;
        if (nextLives > 0) {
          spawnNextDrop();
        }
        return nextLives;
      });
    }
  };

  const comboMultiplier = getComboMultiplier(streak);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Top Header */}
      <View style={styles.header}>
        <Pressable
          onPress={onClose}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Close Kana Rain"
        >
          <X size={20} color={theme.textSecondary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>仮名の雨 • Kana Rain</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            High Score: {Math.max(score, rainHighScore)} pts
          </Text>
        </View>

        <View style={styles.livesRow}>
          {Array.from({ length: INITIAL_LIVES }).map((_, i) => (
            <Heart
              key={`heart-${i}`}
              size={18}
              color={i < lives ? '#EF4444' : theme.border}
              fill={i < lives ? '#EF4444' : 'transparent'}
            />
          ))}
        </View>
      </View>

      {/* Score & Combo Bar */}
      <View style={styles.scoreRow}>
        <View style={styles.scoreBadge}>
          <Text style={[styles.scoreLabel, { color: theme.textSecondary }]}>SCORE</Text>
          <Text style={[styles.scoreValue, { color: theme.primary }]}>{score}</Text>
        </View>

        <View
          style={[
            styles.comboBadge,
            {
              backgroundColor: comboMultiplier > 1 ? theme.accent : theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <Zap
            size={14}
            color={comboMultiplier > 1 ? '#FFFFFF' : theme.textSecondary}
          />
          <Text
            style={[
              styles.comboText,
              { color: comboMultiplier > 1 ? '#FFFFFF' : theme.textSecondary },
            ]}
          >
            {comboMultiplier}x COMBO ({streak})
          </Text>
        </View>
      </View>

      {/* Falling Character Game Arena */}
      <View
        style={[
          styles.arena,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            height: ARENA_HEIGHT,
          },
        ]}
      >
        {/* Column Guides */}
        <View style={styles.arenaColumns}>
          <View style={[styles.arenaCol, { borderRightColor: theme.border }]} />
          <View style={[styles.arenaCol, { borderRightColor: theme.border }]} />
          <View style={[styles.arenaCol, { borderRightColor: theme.border }]} />
          <View style={styles.arenaCol} />
        </View>

        {/* Falling Raindrop Character */}
        {isPlaying && currentDrop && (
          <View
            style={[
              styles.raindrop,
              {
                left: `${currentDrop.column * 25 + 2.5}%`,
                top: dropY,
                backgroundColor: theme.card,
                borderColor: theme.primary,
              },
            ]}
          >
            <Text style={[styles.raindropGlyph, { color: theme.primary }]}>
              {currentDrop.glyph}
            </Text>
          </View>
        )}

        {/* Start Game Prompt Overlay */}
        {!isPlaying && !gameOver && (
          <View style={styles.startOverlay}>
            <Pressable
              onPress={startGame}
              style={[styles.startButton, { backgroundColor: theme.primary }]}
            >
              <Play size={24} color="#FFFFFF" />
              <Text style={styles.startButtonText}>Start Rain Arcade</Text>
            </Pressable>
          </View>
        )}

        {/* Floor Line */}
        <View style={[styles.floorLine, { backgroundColor: theme.error }]} />
      </View>

      {/* 4 Bottom Answer Options */}
      <View style={styles.answersContainer}>
        <Text style={[styles.answersPrompt, { color: theme.textSecondary }]}>
          Tap the matching reading:
        </Text>
        <View style={styles.optionsGrid}>
          {currentDrop?.options.map(option => (
            <Pressable
              key={`opt-${option}`}
              onPress={() => handleAnswerPress(option)}
              disabled={!isPlaying}
              style={[
                styles.optionButton,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text style={[styles.optionText, { color: theme.textPrimary }]}>
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Game Over Modal */}
      <Modal
        visible={gameOver}
        transparent
        animationType="fade"
        onRequestClose={() => setGameOver(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalCard,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <Trophy size={50} color={isNewHigh ? '#F59E0B' : theme.primary} style={styles.modalIcon} />
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>
              {isNewHigh ? '🏆 New High Score!' : 'Game Over'}
            </Text>

            <View style={styles.modalScoreBox}>
              <Text style={[styles.modalFinalScore, { color: theme.primary }]}>
                {score} pts
              </Text>
              <Text style={[styles.modalMaxCombo, { color: theme.textSecondary }]}>
                Max Streak: {streak} correct
              </Text>
            </View>

            <Pressable
              onPress={startGame}
              style={[styles.modalButton, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.modalButtonText}>Play Again</Text>
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
    paddingBottom: 20,
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
    fontWeight: '500',
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
  livesRow: {
    flexDirection: 'row',
    gap: 4,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  scoreBadge: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  scoreLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
  },
  comboBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    gap: 4,
  },
  comboText: {
    fontSize: 12,
    fontWeight: '700',
  },
  arena: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  arenaColumns: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  arenaCol: {
    flex: 1,
    borderRightWidth: 1,
    opacity: 0.25,
  },
  raindrop: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  raindropGlyph: {
    fontSize: 32,
    fontWeight: '800',
  },
  floorLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
  },
  startOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 28,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  answersContainer: {
    gap: 8,
  },
  answersPrompt: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  optionsGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  optionButton: {
    flex: 1,
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  optionText: {
    fontSize: 20,
    fontWeight: '700',
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
    maxWidth: 320,
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
  },
  modalIcon: {
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
  },
  modalScoreBox: {
    alignItems: 'center',
    marginVertical: 16,
  },
  modalFinalScore: {
    fontSize: 36,
    fontWeight: '800',
  },
  modalMaxCombo: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  modalButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
