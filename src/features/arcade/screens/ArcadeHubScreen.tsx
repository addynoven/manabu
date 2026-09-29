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
  Zap,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { useArcadeStore } from '../store/useArcadeStore';
import { ZenBreathingView } from '../components/ZenBreathingView';
import { KanaWordleView } from '../components/KanaWordleView';
import { MemoryMatchView } from '../components/MemoryMatchView';
import { KanaRainView } from '../components/KanaRainView';
import { YokaiRunView } from '../components/YokaiRunView';
import { KanaSnakeView } from '../components/KanaSnakeView';
import { FlashRushView } from '../components/FlashRushView';
import { HanabiView } from '../components/HanabiView';
import { KanaCatchView } from '../components/KanaCatchView';
import { KanaPopView } from '../components/KanaPopView';
import { KanaTraceView } from '../../kana/components/KanaTraceView';

type ActiveGame = 'zen' | 'wordle' | 'memory' | 'rain' | 'runner' | 'snake' | 'rush' | 'hanabi' | 'catch' | 'pop' | 'trace' | null;

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

        {/* 5. Yokai Runner */}
        <Pressable
          onPress={() => launchGame('runner')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#3B82F618' }]}>
              <Flame size={24} color="#3B82F6" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                妖怪ラン • Yokai Runner
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                2D Side-Scrolling Action
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Jump over Yokai obstacles and collect target Kana glyphs in motion.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#3B82F6' }]}>
              🏃 Runner Mode
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Run Now</Text>
            </View>
          </View>
        </Pressable>

        {/* 6. Kana Snake */}
        <Pressable
          onPress={() => launchGame('snake')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#84CC1618' }]}>
              <Sparkles size={24} color="#84CC16" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                ヘビゲーム • Kana Snake
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Retro Grid Snake
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Guide the snake using the D-Pad to eat target Kana tiles across the grid.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#84CC16' }]}>
              🐍 Snake Mode
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Play Snake</Text>
            </View>
          </View>
        </Pressable>

        {/* 7. Flash Rush */}
        <Pressable
          onPress={() => launchGame('rush')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#EAB30818' }]}>
              <Zap size={24} color="#EAB308" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                閃光ラッシュ • Flash Rush
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Lightning Flashcard Rush
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            High-speed instant recall time trial with streak multipliers.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#EAB308' }]}>
              ⚡ Speed Mode
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Start Rush</Text>
            </View>
          </View>
        </Pressable>

        {/* 8. Hanabi Fireworks */}
        <Pressable
          onPress={() => launchGame('hanabi')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#EF444418' }]}>
              <Sparkles size={24} color="#EF4444" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                花火 • Kana Hanabi
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Touch Fireworks Particle Display
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Tap anywhere in the night sky to launch vibrant Japanese Kana fireworks.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#EF4444' }]}>
              🎆 Fireworks Mode
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Launch Fireworks</Text>
            </View>
          </View>
        </Pressable>

        {/* 9. Kana Catch */}
        <Pressable
          onPress={() => launchGame('catch')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#F59E0B18' }]}>
              <Trophy size={24} color="#F59E0B" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                キャッチ • Kana Catch
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Paddle Basket Catcher
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Catch target falling Kana tiles into your basket using left/right controls.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#F59E0B' }]}>
              🧺 Catch Mode
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Catch Kana</Text>
            </View>
          </View>
        </Pressable>

        {/* 10. Kana Pop */}
        <Pressable
          onPress={() => launchGame('pop')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#EC489918' }]}>
              <Sparkles size={24} color="#EC4899" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                バブルポップ • Kana Pop
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Bubble Popping Drill
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Pop floating Kana bubbles and listen to native pronunciations on pop.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#EC4899' }]}>
              🫧 Pop Mode
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Pop Bubbles</Text>
            </View>
          </View>
        </Pressable>

        {/* 11. Stroke Tracing */}
        <Pressable
          onPress={() => launchGame('trace')}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#10B98118' }]}>
              <Flame size={24} color="#10B981" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                書き順 • Stroke Tracing
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Interactive Stroke Order Practice
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Practice stroke order direction and character drawing with stroke tips.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#10B981' }]}>
              ✍️ Tracing Canvas
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Trace Stroke</Text>
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

      <Modal
        visible={activeGame === 'runner'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <YokaiRunView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'snake'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaSnakeView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'rush'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <FlashRushView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'hanabi'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <HanabiView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'catch'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaCatchView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'pop'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaPopView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'trace'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaTraceView visible={activeGame === 'trace'} onClose={closeGame} />
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
