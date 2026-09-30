import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Modal,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Play, Sparkles, Swords, Zap } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../core/theme';
import { ShiritoriArenaView } from '../features/arcade/components/ShiritoriArenaView';
import { KarutaBattleView } from '../features/arcade/components/KarutaBattleView';
import { KanjiDuelView } from '../features/arcade/components/KanjiDuelView';

export default function DevCardsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const [showShiritori, setShowShiritori] = useState(false);
  const [showKaruta, setShowKaruta] = useState(false);
  const [showKanjiDuel, setShowKanjiDuel] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
          hitSlop={8}
          accessibilityLabel="Go back"
        >
          <ArrowLeft size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.titleWrap}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            🎮 Arcade Playtest Arena
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Authentic Japanese Game Prototypes for Tab 3
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 40 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.sectionHeading, { color: theme.textSecondary }]}>
          SELECT A GAME TO PLAYTEST:
        </Text>

        {/* GAME 1: Shiritori Arena */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
            setShowShiritori(true);
          }}
          style={({ pressed }) => [
            styles.gameCard,
            { backgroundColor: theme.surface, borderColor: theme.border },
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.gameCardHeader}>
            <View style={[styles.gameBadge, { backgroundColor: '#2B6CB0' }]}>
              <Text style={styles.gameBadgeText}>GAME #1 • LIVE</Text>
            </View>
            <Text style={styles.gameIcon}>🎌</Text>
          </View>

          <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
            しりとり・言葉の鎖 (Shiritori Arena)
          </Text>
          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Turn-based Japanese word-chain duel vs AI bots (Tanuki, Kitsune, Tengu). Real-time turn timer, authentic `ん` loss rule, Kana/Kanji input engine, and TTS audio recitation.
          </Text>

          <View style={styles.gameCardFooter}>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Play size={14} color={theme.textOnPrimary} fill={theme.textOnPrimary} />
              <Text style={[styles.playPillText, { color: theme.textOnPrimary }]}>
                PLAY SHIRITORI ➔
              </Text>
            </View>
          </View>
        </Pressable>

        {/* GAME 2: Competitive Karuta */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
            setShowKaruta(true);
          }}
          style={({ pressed }) => [
            styles.gameCard,
            { backgroundColor: theme.surface, borderColor: theme.primary },
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.gameCardHeader}>
            <View style={[styles.gameBadge, { backgroundColor: '#8B0000' }]}>
              <Text style={styles.gameBadgeText}>GAME #2 • READY TO TEST</Text>
            </View>
            <Text style={styles.gameIcon}>🥋</Text>
          </View>

          <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
            🥋 競技かるた (Competitive Karuta)
          </Text>
          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Tatami mat reaction slap battle! Yomite reader pronounces Japanese vocabulary and meaning. Race against the AI bot to slap the correct card before they snatch it. Watch out for Otetsuki (foul)!
          </Text>

          <View style={styles.gameCardFooter}>
            <View style={[styles.playPill, { backgroundColor: '#C53030' }]}>
              <Zap size={14} color="#FFF" fill="#FFF" />
              <Text style={[styles.playPillText, { color: '#FFF' }]}>
                PLAY KARUTA BATTLE ➔
              </Text>
            </View>
          </View>
        </Pressable>

        {/* GAME 3: Kanji Duel */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
            setShowKanjiDuel(true);
          }}
          style={({ pressed }) => [
            styles.gameCard,
            { backgroundColor: theme.surface, borderColor: '#D69E2E' },
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.gameCardHeader}>
            <View style={[styles.gameBadge, { backgroundColor: '#D69E2E' }]}>
              <Text style={styles.gameBadgeText}>GAME #3 • READY TO DUEL</Text>
            </View>
            <Text style={styles.gameIcon}>⚔️</Text>
          </View>

          <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
            ⚔️ 漢字決闘 (Kanji Duel: Speed Strike)
          </Text>
          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            High-speed Kanji combat! 1000 HP clash against Tanuki, Kitsune, or Tengu. Strike with Onyomi vs Kunyomi, Radicals, Stroke counts, and Compound words. Faster answers trigger Critical Hits!
          </Text>

          <View style={styles.gameCardFooter}>
            <View style={[styles.playPill, { backgroundColor: '#D69E2E' }]}>
              <Swords size={14} color="#FFF" />
              <Text style={[styles.playPillText, { color: '#FFF' }]}>
                START KANJI DUEL ➔
              </Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>

      {/* Shiritori Modal */}
      <Modal
        visible={showShiritori}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowShiritori(false)}
      >
        <ShiritoriArenaView onClose={() => setShowShiritori(false)} />
      </Modal>

      {/* Karuta Modal */}
      <Modal
        visible={showKaruta}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowKaruta(false)}
      >
        <KarutaBattleView onClose={() => setShowKaruta(false)} />
      </Modal>

      {/* Kanji Duel Modal */}
      <Modal
        visible={showKanjiDuel}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowKanjiDuel(false)}
      >
        <KanjiDuelView onClose={() => setShowKanjiDuel(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 12,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrap: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 12,
  },
  content: {
    padding: 16,
    gap: 14,
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  gameCard: {
    borderRadius: radii.xl,
    borderWidth: 2,
    padding: 18,
    ...shadows.sm,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  gameCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gameBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
  },
  gameBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  gameIcon: {
    fontSize: 28,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  gameDesc: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  gameCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  playPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.full,
    gap: 6,
  },
  playPillText: {
    fontSize: 12,
    fontWeight: '800',
  },
  comingSoonText: {
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'italic',
  },
});
