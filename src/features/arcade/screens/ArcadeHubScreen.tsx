import React, { useState, useMemo, useCallback } from 'react';
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
  Shield,
  Users,
  Share2,
  Calendar,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, typography, useAppTheme } from '../../../core/theme';
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
import { DailyChallengeModal } from '../components/DailyChallengeModal';
import { getDayOfYear } from '../lib/dailyChallengeGenerator';
import { BlitzModal } from '../../challenges/components/BlitzModal';
import { GauntletModal } from '../../challenges/components/GauntletModal';
import type { ChallengeQuestion } from '../../challenges/models/challenge.model';
import { useChallengeStore } from '../../challenges/store/useChallengeStore';
import { useKanaGroupsQuery } from '../../kana/hooks/useKanaQuery';
import { flattenGroups, generateKanaQuestion } from '../../kana/lib/kanaGenerator';

type ActiveGame = 'zen' | 'wordle' | 'memory' | 'rain' | 'runner' | 'snake' | 'rush' | 'hanabi' | 'catch' | 'pop' | 'trace' | null;

interface ArcadeHubScreenProps {
  hideBack?: boolean;
}

export function ArcadeHubScreen({ hideBack = false }: ArcadeHubScreenProps = {}) {
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
    dailyChallengeDate,
    dailyChallengeStreak,
    dailyChallengeCompleted,
    dailyChallengeLastResult,
  } = useArcadeStore();

  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [showDailyChallenge, setShowDailyChallenge] = useState(false);
  const [showBlitz, setShowBlitz] = useState(false);
  const [showGauntlet, setShowGauntlet] = useState(false);

  const { data: kanaGroups } = useKanaGroupsQuery();
  const allKana = useMemo(() => {
    if (!kanaGroups) return [];
    return flattenGroups(kanaGroups);
  }, [kanaGroups]);

  const generateChallengeQuestion = useCallback((): ChallengeQuestion | null => {
    if (allKana.length === 0) return null;
    const q = generateKanaQuestion(allKana, 'pick');
    if (!q.options) return null;
    return {
      id: q.id,
      prompt: q.prompt,
      promptSub: q.promptSub,
      options: q.options,
      correctAnswer: q.correctAnswer,
      characterKey: q.target.kana,
      category: 'kana',
    };
  }, [allKana]);

  const { getBlitzStats, getGauntletStats } = useChallengeStore();
  const blitzStats = getBlitzStats('kana', 60);
  const gauntletStats = getGauntletStats('kana', 'normal');

  const todayStr = new Date().toISOString().split('T')[0];
  const isDailyDone = dailyChallengeDate === todayStr && dailyChallengeCompleted;
  const dayNumber = getDayOfYear();

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
        {!hideBack && (
          <Pressable
            onPress={() => router.back()}
            style={[styles.backButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
            accessibilityLabel="Go back"
          >
            <ArrowLeft size={20} color={theme.textPrimary} />
          </Pressable>
        )}

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
        {/* 0. Daily Community Challenge Hero Card */}
        <View
          style={[
            styles.dailyHeroCard,
            {
              backgroundColor: theme.surface,
              borderColor: isDailyDone ? theme.success : theme.primary,
            },
          ]}
        >
          <View style={styles.dailyHeroHeader}>
            <View style={styles.dailyBadgeRow}>
              <View style={[styles.dailyTag, { backgroundColor: theme.primaryLight }]}>
                <Calendar size={12} color={theme.primary} />
                <Text style={[styles.dailyTagText, { color: theme.primary }]}>
                  DAILY #{dayNumber}
                </Text>
              </View>

              <View style={[styles.dailyTag, { backgroundColor: '#F9731618' }]}>
                <Flame size={12} color="#F97316" />
                <Text style={[styles.dailyTagText, { color: '#F97316' }]}>
                  {dailyChallengeStreak}d Streak
                </Text>
              </View>
            </View>

            <View style={styles.communityPill}>
              <Users size={12} color={theme.textMuted} />
              <Text style={[styles.communityPillText, { color: theme.textSecondary }]}>
                2,419 active
              </Text>
            </View>
          </View>

          <View style={styles.dailyHeroBody}>
            <Text style={[styles.dailyHeroTitle, { color: theme.textPrimary }]}>
              日替わり道場 • Daily Challenge
            </Text>
            <Text style={[styles.dailyHeroDesc, { color: theme.textSecondary }]}>
              5 daily questions across Kana, Kanji & Vocabulary. Test your reflexes and compare with the community.
            </Text>
          </View>

          {isDailyDone ? (
            <View style={styles.dailyDoneRow}>
              <View style={[styles.doneBadge, { backgroundColor: theme.successLight }]}>
                <Text style={[styles.doneBadgeText, { color: theme.success }]}>
                  ✓ Completed ({dailyChallengeLastResult?.score ?? 0} pts)
                </Text>
              </View>
              <Pressable
                onPress={() => setShowDailyChallenge(true)}
                style={[styles.dailyPlayBtn, { backgroundColor: theme.primary }]}
              >
                <Share2 size={16} color="#FFFFFF" />
                <Text style={styles.dailyPlayBtnText}>Share Result</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
                setShowDailyChallenge(true);
              }}
              style={[styles.dailyPlayBtn, { backgroundColor: theme.primary }]}
            >
              <Zap size={18} color="#FFFFFF" />
              <Text style={styles.dailyPlayBtnText}>Start Daily Challenge</Text>
            </Pressable>
          )}
        </View>

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

        {/* Blitz Mode Card */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
            setShowBlitz(true);
          }}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#EAB30818' }]}>
              <Zap size={24} color="#EAB308" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                稲妻特訓 • Blitz Challenge
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Speed reflex test (30s / 60s / 120s)
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            High-octane rapid fire questions against the clock. Build your highest streak before time runs out!
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#EAB308' }]}>
              ⚡ Best: {blitzStats.bestScore} pts
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Start Blitz</Text>
            </View>
          </View>
        </Pressable>

        {/* Gauntlet Mode Card */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
            setShowGauntlet(true);
          }}
          style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: '#EF444418' }]}>
              <Shield size={24} color="#EF4444" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                百人組手 • Gauntlet Survival
              </Text>
              <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                Endless survival test • 3 Lives
              </Text>
            </View>
          </View>

          <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
            Survive endless consecutive questions with 3 lives. Heal hearts with 5-streaks in normal mode!
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#EF4444' }]}>
              🛡️ Best Streak: {gauntletStats.bestStreak}
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Enter Gauntlet</Text>
            </View>
          </View>
        </Pressable>

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

      <DailyChallengeModal
        visible={showDailyChallenge}
        onClose={() => setShowDailyChallenge(false)}
      />

      <BlitzModal
        visible={showBlitz}
        onClose={() => setShowBlitz(false)}
        dojoName="Arcade"
        category="kana"
        questionGenerator={generateChallengeQuestion}
      />

      <GauntletModal
        visible={showGauntlet}
        onClose={() => setShowGauntlet(false)}
        dojoName="Arcade"
        category="kana"
        questionGenerator={generateChallengeQuestion}
      />
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
  dailyHeroCard: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 18,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  dailyHeroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dailyBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dailyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  dailyTagText: {
    ...typography.caption,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  communityPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  communityPillText: {
    ...typography.caption,
    fontSize: 11,
  },
  dailyHeroBody: {
    gap: 4,
  },
  dailyHeroTitle: {
    ...typography.h2,
    fontWeight: '800',
  },
  dailyHeroDesc: {
    ...typography.body,
    lineHeight: 20,
  },
  dailyPlayBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: radii.lg,
  },
  dailyPlayBtnText: {
    color: '#FFFFFF',
    ...typography.h3,
    fontWeight: '700',
  },
  dailyDoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  doneBadge: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: radii.lg,
    alignItems: 'center',
  },
  doneBadgeText: {
    ...typography.caption,
    fontWeight: '700',
  },
});
