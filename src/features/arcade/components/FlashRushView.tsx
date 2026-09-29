import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Trophy, Zap, Flame } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface FlashRushViewProps {
  onClose: () => void;
}

const RUSH_DATA = [
  { prompt: 'あ', answer: 'a', options: ['a', 'i', 'u', 'e'] },
  { prompt: 'か', answer: 'ka', options: ['ka', 'ki', 'ku', 'ke'] },
  { prompt: 'さ', answer: 'sa', options: ['sa', 'shi', 'su', 'se'] },
  { prompt: 'た', answer: 'ta', options: ['ta', 'chi', 'tsu', 'te'] },
  { prompt: 'な', answer: 'na', options: ['na', 'ni', 'nu', 'ne'] },
  { prompt: 'は', answer: 'ha', options: ['ha', 'hi', 'fu', 'he'] },
  { prompt: 'ま', answer: 'ma', options: ['ma', 'mi', 'mu', 'me'] },
  { prompt: 'や', answer: 'ya', options: ['ya', 'yu', 'yo', 'wa'] },
];

export function FlashRushView({ onClose }: FlashRushViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);

  const [currentIdx, setCurrentIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeItem = RUSH_DATA[currentIdx % RUSH_DATA.length];

  const startGame = useCallback(() => {
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    setTimeLeft(30);
    setCurrentIdx(0);
    setGameOver(false);
    setIsPlaying(true);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsPlaying(false);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const handleSelectOption = (opt: string) => {
    if (!isPlaying) return;

    if (opt === activeItem.answer) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      if (ttsEnabled) {
        speakJapanese(activeItem.prompt).catch(() => {});
      }
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      const nextMult = nextStreak >= 10 ? 3 : nextStreak >= 5 ? 2 : 1;
      setMultiplier(nextMult);
      setScore(s => s + 10 * nextMult);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setStreak(0);
      setMultiplier(1);
    }

    setCurrentIdx(prev => prev + 1);
  };

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
          <Text style={[styles.title, { color: theme.textPrimary }]}>閃光ラッシュ • Flash Rush</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            High-Speed Instant Recall
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
        <Text style={[styles.hudText, { color: theme.primary }]}>⏱️ {timeLeft}s</Text>
        <Text style={[styles.hudText, { color: theme.accent }]}>🔥 {streak} ({multiplier}x)</Text>
        <Text style={[styles.hudText, { color: theme.textPrimary }]}>⭐ {score} pts</Text>
      </View>

      {/* Rush Target Card */}
      <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Text style={[styles.prompt, { color: theme.textPrimary }]}>
          {isPlaying ? activeItem.prompt : '⚡'}
        </Text>
      </View>

      {/* Options Grid */}
      <View style={styles.grid}>
        {!isPlaying ? (
          <Pressable
            onPress={startGame}
            style={[styles.startBtn, { backgroundColor: theme.primary }]}
          >
            <Zap size={22} color="#FFFFFF" />
            <Text style={styles.startBtnText}>START FLASH RUSH</Text>
          </Pressable>
        ) : (
          activeItem.options.map(opt => (
            <Pressable
              key={opt}
              onPress={() => handleSelectOption(opt)}
              style={[styles.optBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <Text style={[styles.optText, { color: theme.textPrimary }]}>{opt}</Text>
            </Pressable>
          ))
        )}
      </View>

      {/* Game Over Modal */}
      <Modal visible={gameOver} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Trophy size={48} color="#F59E0B" />
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Rush Complete!</Text>
            <Text style={[styles.modalSub, { color: theme.textSecondary }]}>
              Final Score: {score} pts (Best Streak: {streak})
            </Text>

            <Pressable
              onPress={startGame}
              style={[styles.playAgainBtn, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.playAgainText}>Rush Again</Text>
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
    fontSize: 15,
    fontWeight: '700',
  },
  card: {
    flex: 1,
    maxHeight: 220,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prompt: {
    fontSize: 72,
    fontWeight: '800',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  optBtn: {
    width: '47%',
    height: 60,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optText: {
    fontSize: 20,
    fontWeight: '700',
  },
  startBtn: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  startBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
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
