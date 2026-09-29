import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Trophy, Hand } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface KanaCatchViewProps {
  onClose: () => void;
}

const CATCH_ITEMS = [
  { kana: 'あ', romaji: 'a' },
  { kana: 'い', romaji: 'i' },
  { kana: 'う', romaji: 'u' },
  { kana: 'え', romaji: 'e' },
  { kana: 'お', romaji: 'o' },
];

export function KanaCatchView({ onClose }: KanaCatchViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  const [score, setScore] = useState(0);
  const [basketPos, setBasketPos] = useState(50); // % position

  const moveBasket = (dir: 'LEFT' | 'RIGHT') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setBasketPos(prev => {
      if (dir === 'LEFT') return Math.max(10, prev - 20);
      return Math.min(90, prev + 20);
    });
    setScore(s => s + 10);
    if (ttsEnabled) {
      const item = CATCH_ITEMS[Math.floor(Math.random() * CATCH_ITEMS.length)];
      speakJapanese(item.kana).catch(() => {});
    }
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
          <Text style={[styles.title, { color: theme.textPrimary }]}>キャッチ • Kana Catch</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Catch target Kana • Score: {score}
          </Text>
        </View>

        <Pressable
          onPress={() => setScore(0)}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* Catch Play Field */}
      <View style={[styles.field, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Text style={[styles.targetPrompt, { color: theme.primary }]}>
          Catch Kana into your basket!
        </Text>

        {/* Basket */}
        <View style={[styles.basket, { left: `${basketPos}%` }]}>
          <Hand size={32} color={theme.primary} />
          <Text style={[styles.basketLabel, { color: theme.textPrimary }]}>🧺</Text>
        </View>
      </View>

      {/* Movement Controls */}
      <View style={styles.controlRow}>
        <Pressable
          onPress={() => moveBasket('LEFT')}
          style={[styles.ctrlBtn, { backgroundColor: theme.primary }]}
        >
          <Text style={styles.ctrlBtnText}>← MOVE LEFT</Text>
        </Pressable>
        <Pressable
          onPress={() => moveBasket('RIGHT')}
          style={[styles.ctrlBtn, { backgroundColor: theme.primary }]}
        >
          <Text style={styles.ctrlBtnText}>MOVE RIGHT →</Text>
        </Pressable>
      </View>
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
  field: {
    flex: 1,
    marginVertical: 16,
    borderRadius: 20,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 32,
  },
  targetPrompt: {
    fontSize: 16,
    fontWeight: '700',
  },
  basket: {
    position: 'absolute',
    bottom: 24,
    alignItems: 'center',
    transform: [{ translateX: -20 }],
  },
  basketLabel: {
    fontSize: 28,
  },
  controlRow: {
    flexDirection: 'row',
    gap: 12,
  },
  ctrlBtn: {
    flex: 1,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctrlBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
});
