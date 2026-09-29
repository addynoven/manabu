import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Wind,
  Target,
  Layers,
  CloudRain,
  Flame,
  Clock,
  Trophy,
  Sparkles,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { useArcadeStore } from '../store/useArcadeStore';
import { ZenBreathingView } from '../components/ZenBreathingView';
import { KanaWordleView } from '../components/KanaWordleView';
import { MemoryMatchView } from '../components/MemoryMatchView';
import { KanaRainView } from '../components/KanaRainView';

type ActiveGame = 'zen' | 'wordle' | 'memory' | 'rain' | null;

export function ArcadeHubScreen() {
  const router = useRouter();
  const { colors: theme } = useAppTheme();
  const insets = useSafeAreaInsets();

  const {
    wordleCurrentStreak,
    wordleWins,
    zenMinutesTotal,
    zenCyclesTotal,
    rainHighScore,
    memoryBestMoves,
  } = useArcadeStore();

  const [activeGame, setActiveGame] = useState<ActiveGame>(null);

  const launchGame = (game: ActiveGame) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    setActiveGame(game);
  };

  const closeGame = () => {
    setActiveGame(null);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Top Navigation */}
      <View style={styles.navBar}>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Go back"
        >
          <ArrowLeft size={20} color={theme.textPrimary} />
        </Pressable>

        <View style={styles.navTitles}>
          <Text style={[styles.navTitle, { color: theme.textPrimary }]}>
            遊楽道場 • Arcade & Zen
          </Text>
          <Text style={[styles.navSubtitle, { color: theme.textSecondary }]}>
            Playful micro-games & mindfulness
          </Text>
        </View>

        <View style={styles.navSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats Summary Banner */}
        <View style={[styles.statsCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.statCol}>
            <Flame size={18} color="#F97316" />
            <Text style={[styles.statValue, { color: theme.textPrimary }]}>{wordleCurrentStreak}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Wordle Streak</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCol}>
            <Clock size={18} color={theme.accent} />
            <Text style={[styles.statValue, { color: theme.textPrimary }]}>{zenMinutesTotal}m</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Zen Mind</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCol}>
            <Trophy size={18} color="#EAB308" />
            <Text style={[styles.statValue, { color: theme.textPrimary }]}>{rainHighScore}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Rain Record</Text>
          </View>
        </View>

        {/* 1. Zen Breathing Mode */}
        <Pressable
          activeOpacity={0.9}
          onPress={() => launchGame('zen')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#10B98118' }]}>
              <Wind size={24} color="#10B981" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                禅 • 呼吸法 (Zen Breathing)
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Mindfulness & Serenity
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Soothing 4-4-4-2 breathing sphere synced to Japanese calligraphy, gentle haptic pulses, and contemplative audio.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#10B981' }]}>
              🧘 {zenCyclesTotal} cycles completed
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Begin Zen</Text>
            </View>
          </View>
        </Pressable>

        {/* 2. Kana Wordle */}
        <Pressable
          activeOpacity={0.9}
          onPress={() => launchGame('wordle')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#F59E0B18' }]}>
              <Target size={24} color="#F59E0B" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                言葉パズル • Kana Wordle
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Daily Japanese Word Puzzle
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            5-guess wordle challenge using authentic N5 vocabulary. Tap kana tiles and unlock meanings and pronunciations.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#F59E0B' }]}>
              🎯 {wordleWins} victories
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Play Wordle</Text>
            </View>
          </View>
        </Pressable>

        {/* 3. Memory Match Tiles */}
        <Pressable
          activeOpacity={0.9}
          onPress={() => launchGame('memory')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#6366F118' }]}>
              <Layers size={24} color="#6366F1" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                神経衰弱 • Memory Tiles
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Character Pair Matching
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Match character pairs across Kana ↔ Sound, Hiragana ↔ Katakana, or Kanji ↔ Meaning with audio on match.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#6366F1' }]}>
              🀄 Best: {memoryBestMoves['kana-romaji'] ? `${memoryBestMoves['kana-romaji']} moves` : 'New'}
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Match Tiles</Text>
            </View>
          </View>
        </Pressable>

        {/* 4. Kana Rain */}
        <Pressable
          activeOpacity={0.9}
          onPress={() => launchGame('rain')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#EC489918' }]}>
              <CloudRain size={24} color="#EC4899" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                仮名の雨 • Kana Rain
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Fast Reflex Action Arcade
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Characters cascade down the columns. Tap the correct reading before they hit the ground. 3 lives & combo multipliers!
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#EC4899' }]}>
              ⚡ Record: {rainHighScore} pts
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Catch Rain</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>

      {/* Active Game Modals */}
      <Modal
        visible={activeGame === 'zen'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <ZenBreathingView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'wordle'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaWordleView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'memory'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <MemoryMatchView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'rain'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaRainView onClose={closeGame} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitles: {
    flex: 1,
    marginLeft: 12,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  navSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 1,
  },
  navSpacer: {
    width: 40,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 14,
  },
  statsCard: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statCol: {
    alignItems: 'center',
    flex: 1,
    gap: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 2,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
  statDivider: {
    width: 1,
    height: 32,
  },
  gameCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 18,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  gameSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 1,
  },
  gameDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  cardStatBadge: {
    fontSize: 12,
    fontWeight: '700',
  },
  playPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 18,
  },
  playPillText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
