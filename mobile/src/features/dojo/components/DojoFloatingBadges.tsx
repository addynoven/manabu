import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing } from '../../../core/theme';
import { KanaChartScreen } from '../../kana/screens/KanaChartScreen';
import { KanjiDojoScreen } from '../../kanji/screens/KanjiDojoScreen';

export function DojoFloatingBadges() {
  const [kanaModalOpen, setKanaModalOpen] = useState(false);
  const [kanjiModalOpen, setKanjiModalOpen] = useState(false);

  const handleOpenKana = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setKanaModalOpen(true);
  };

  const handleOpenKanji = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setKanjiModalOpen(true);
  };

  return (
    <>
      <View style={styles.badgeContainer}>
        {/* あ Kana Badge */}
        <Pressable
          style={({ pressed }) => [
            styles.badgeItem,
            {
              backgroundColor: '#F97316',
              transform: [{ scale: pressed ? 0.94 : 1 }],
            },
          ]}
          android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false }}
          onPress={handleOpenKana}
          accessibilityLabel="Open Kana Charts"
        >
          <View style={styles.badgeCircle}>
            <Text style={styles.badgeChar}>あ</Text>
          </View>
          <Text style={styles.badgeLabel}>Kana</Text>
        </Pressable>

        {/* 漢 Kanji Badge */}
        <Pressable
          style={({ pressed }) => [
            styles.badgeItem,
            {
              backgroundColor: '#6366F1',
              transform: [{ scale: pressed ? 0.94 : 1 }],
            },
          ]}
          android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false }}
          onPress={handleOpenKanji}
          accessibilityLabel="Open Kanji Explorer"
        >
          <View style={styles.badgeCircle}>
            <Text style={styles.badgeChar}>漢</Text>
          </View>
          <Text style={styles.badgeLabel}>Kanji</Text>
        </Pressable>
      </View>

      {/* Kana Chart Modal */}
      <Modal
        visible={kanaModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setKanaModalOpen(false)}
      >
        <KanaChartScreen onClose={() => setKanaModalOpen(false)} />
      </Modal>

      {/* Kanji Explorer Modal */}
      <Modal
        visible={kanjiModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setKanjiModalOpen(false)}
      >
        <KanjiDojoScreen onClose={() => setKanjiModalOpen(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: radii.full,
    gap: 6,
    ...shadows.sm,
  },
  badgeCircle: {
    width: 24,
    height: 24,
    borderRadius: radii.full,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeChar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
  badgeLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});
