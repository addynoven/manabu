import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, CircleDot } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface KanaPopViewProps {
  onClose: () => void;
}

const POP_BUBBLES = [
  { id: '1', kana: 'あ', color: '#EF4444' },
  { id: '2', kana: 'い', color: '#F59E0B' },
  { id: '3', kana: 'う', color: '#10B981' },
  { id: '4', kana: 'え', color: '#3B82F6' },
  { id: '5', kana: 'お', color: '#8B5CF6' },
  { id: '6', kana: 'か', color: '#EC4899' },
];

export function KanaPopView({ onClose }: KanaPopViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  const [score, setScore] = useState(0);
  const [poppedIds, setPoppedIds] = useState<Record<string, boolean>>({});

  const handlePop = (bubble: typeof POP_BUBBLES[0]) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    if (ttsEnabled) {
      speakJapanese(bubble.kana).catch(() => {});
    }
    setPoppedIds(prev => ({ ...prev, [bubble.id]: true }));
    setScore(s => s + 20);

    setTimeout(() => {
      setPoppedIds(prev => ({ ...prev, [bubble.id]: false }));
    }, 1200);
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
          <Text style={[styles.title, { color: theme.textPrimary }]}>バブルポップ • Kana Pop</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Pop floating bubbles • Score: {score}
          </Text>
        </View>

        <Pressable
          onPress={() => setScore(0)}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* Bubble Grid */}
      <View style={styles.bubbleGrid}>
        {POP_BUBBLES.map(b => {
          const isPopped = !!poppedIds[b.id];
          return (
            <Pressable
              key={b.id}
              onPress={() => handlePop(b)}
              style={[
                styles.bubble,
                { backgroundColor: isPopped ? 'transparent' : b.color },
              ]}
            >
              <Text style={styles.bubbleKana}>
                {isPopped ? '💥' : b.kana}
              </Text>
            </Pressable>
          );
        })}
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
  bubbleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 'auto',
  },
  bubble: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  bubbleKana: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
  },
});
