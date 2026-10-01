import React, { useState, useMemo } from 'react';
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
  Target,
  Layers,
  CloudRain,
  Flame,
  Trophy,
  Sparkles,
  Zap,
  Users,
  Share2,
  Calendar,
  Swords,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, typography, useAppTheme } from '../../../core/theme';
import { useArcadeStore } from '../store/useArcadeStore';
import { KanaWordleView } from '../components/KanaWordleView';
import { MemoryMatchView } from '../components/MemoryMatchView';
import { KanaRainView } from '../components/KanaRainView';
import { KanaSnakeView } from '../components/KanaSnakeView';
import { FlashSurvivalView } from '../components/FlashSurvivalView';
import { KanaCatchView } from '../components/KanaCatchView';
import { KanaTraceView } from '../../kana/components/KanaTraceView';
import { ShiritoriArenaView } from '../components/ShiritoriArenaView';
import { KarutaBattleView } from '../components/KarutaBattleView';
import { KanjiDuelView } from '../components/KanjiDuelView';
import { DailyChallengeModal } from '../components/DailyChallengeModal';
import { getDayOfYear } from '../lib/dailyChallengeGenerator';

type ActiveGame =
  | 'shiritori'
  | 'karuta'
  | 'kanjiDuel'
  | 'wordle'
  | 'memory'
  | 'rain'
  | 'snake'
  | 'survival'
  | 'rush'
  | 'catch'
  | 'trace'
  | null;

type ArcadeCategory = 'all' | 'battles' | 'challenges' | 'classics';

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
    rainHighScore,
    snakeHighScore,
    catchHighScore,
    memoryBestMoves,
    dailyChallengeDate,
    dailyChallengeStreak,
    dailyChallengeCompleted,
    dailyChallengeLastResult,
    survivalHighScores,
  } = useArcadeStore();

  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [selectedCategory, setSelectedCategory] = useState<ArcadeCategory>('all');
  const [showDailyChallenge, setShowDailyChallenge] = useState(false);

  const bestSurvivalScore = Math.max(
    survivalHighScores?.kana || 0,
    survivalHighScores?.kanji || 0,
    survivalHighScores?.vocab || 0,
    survivalHighScores?.hell || 0
  );

  const CATEGORIES: { id: ArcadeCategory; label: string }[] = useMemo(
    () => [
      { id: 'all', label: 'All' },
      { id: 'battles', label: '⚔️ Battles (3)' },
      { id: 'challenges', label: '⚡ Survival' },
      { id: 'classics', label: '🎮 Classics (6)' },
    ],
    []
  );

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
            遊楽道場 • Arcade
          </Text>
          <Text style={[styles.navSubtitle, { color: theme.textSecondary }]}>
            Playful micro-games & challenges
          </Text>
        </View>

        <View style={styles.navSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
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
                <Text style={[styles.doneBadgeText, { color: theme.success }]} numberOfLines={1}>
                  ✓ Completed ({dailyChallengeLastResult?.score ?? 0} pts)
                </Text>
              </View>
              <Pressable
                onPress={() => setShowDailyChallenge(true)}
                style={[styles.dailyPlayBtn, styles.dailyDoneShareBtn, { backgroundColor: theme.primary }]}
              >
                <Share2 size={16} color="#FFFFFF" />
                <Text style={styles.dailyDoneShareBtnText} numberOfLines={1}>Share Result</Text>
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
            <Zap size={18} color="#EAB308" />
            <Text style={[styles.statValue, { color: theme.textPrimary }]}>{bestSurvivalScore}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Survival Best</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCol}>
            <Trophy size={18} color="#EAB308" />
            <Text style={[styles.statValue, { color: theme.textPrimary }]}>{rainHighScore}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Rain Record</Text>
          </View>
        </View>

        {/* Category Filter Pills */}
        <ScrollView
          horizontal
          nestedScrollEnabled
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <Pressable
                key={cat.id}
                hitSlop={8}
                onPress={() => {
                  Haptics.selectionAsync().catch(() => {});
                  setSelectedCategory(cat.id);
                }}
                style={[
                  styles.categoryPill,
                  {
                    backgroundColor: isSelected ? theme.primary : theme.surface,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    { color: isSelected ? '#FFFFFF' : theme.textPrimary },
                  ]}
                >
                  {cat.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* 1. Authentic Japanese Battle Arena (Multiplayer Ready) */}
        {(selectedCategory === 'all' || selectedCategory === 'battles') && (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={[styles.sectionIconBadge, { backgroundColor: '#EF444420' }]}>
                <Swords size={16} color="#EF4444" />
              </View>
              <View style={styles.sectionHeaderTextWrap}>
                <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
                  対戦バトル • Battle Arena
                </Text>
                <Text style={[styles.sectionSubtitle, { color: theme.textSecondary }]}>
                  Authentic Japanese multiplayer games vs AI opponents
                </Text>
              </View>
            </View>

            {/* Shiritori Arena */}
            <Pressable
              onPress={() => launchGame('shiritori')}
              style={[styles.battleCard, { backgroundColor: theme.surface, borderColor: '#EF444470' }]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.iconWrap, { backgroundColor: '#EF444418' }]}>
                  <Swords size={24} color="#EF4444" />
                </View>
                <View style={styles.headerInfo}>
                  <View style={styles.battleTagRow}>
                    <View style={[styles.battleTag, { backgroundColor: '#EF444420' }]}>
                      <Text style={[styles.battleTagText, { color: '#EF4444' }]}>
                        🎌 MULTIPLAYER READY
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                    しりとり • Shiritori Arena
                  </Text>
                  <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                    言葉の鎖 (Word-Chain Duel)
                  </Text>
                </View>
              </View>

              <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
                Turn-based Japanese word-chain duel vs AI bots (Tanuki, Kitsune, Tengu). Real-time turn timer, authentic &apos;ん&apos; loss rule, Kana/Kanji input engine, and TTS audio recitation.
              </Text>

              <View style={styles.cardFooter}>
                <Text style={[styles.cardStatBadge, { color: '#EF4444' }]}>
                  ⏱️ 15s Turn Timer
                </Text>
                <View style={[styles.playPill, { backgroundColor: '#EF4444' }]}>
                  <Text style={styles.playPillText}>Play Shiritori</Text>
                </View>
              </View>
            </Pressable>

            {/* Competitive Karuta */}
            <Pressable
              onPress={() => launchGame('karuta')}
              style={[styles.battleCard, { backgroundColor: theme.surface, borderColor: '#F59E0B70' }]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.iconWrap, { backgroundColor: '#F59E0B18' }]}>
                  <Layers size={24} color="#F59E0B" />
                </View>
                <View style={styles.headerInfo}>
                  <View style={styles.battleTagRow}>
                    <View style={[styles.battleTag, { backgroundColor: '#F59E0B20' }]}>
                      <Text style={[styles.battleTagText, { color: '#F59E0B' }]}>
                        🎴 POEMS & VOCAB
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                    競技かるた • Competitive Karuta
                  </Text>
                  <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                    百人一首 & 単語スラップ (Tatami Slap Battle)
                  </Text>
                </View>
              </View>

              <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
                Tatami mat reaction slap battle! Yomite reader pronounces Japanese classical poems or vocabulary. Race against AI bot to slap matching card before they snatch it. Watch out for Otetsuki!
              </Text>

              <View style={styles.cardFooter}>
                <Text style={[styles.cardStatBadge, { color: '#F59E0B' }]}>
                  🌸 12 Poems Mode
                </Text>
                <View style={[styles.playPill, { backgroundColor: '#F59E0B' }]}>
                  <Text style={styles.playPillText}>Play Karuta</Text>
                </View>
              </View>
            </Pressable>

            {/* Kanji Duel */}
            <Pressable
              onPress={() => launchGame('kanjiDuel')}
              style={[styles.battleCard, { backgroundColor: theme.surface, borderColor: '#8B5CF670' }]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.iconWrap, { backgroundColor: '#8B5CF618' }]}>
                  <Zap size={24} color="#8B5CF6" />
                </View>
                <View style={styles.headerInfo}>
                  <View style={styles.battleTagRow}>
                    <View style={[styles.battleTag, { backgroundColor: '#8B5CF620' }]}>
                      <Text style={[styles.battleTagText, { color: '#8B5CF6' }]}>
                        ⚔️ 1000 HP COMBAT
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                    漢字決闘 • Kanji Duel
                  </Text>
                  <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                    早押しクイズ (Speed Strike Battle)
                  </Text>
                </View>
              </View>

              <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
                High-speed martial arts combat! 1000 HP clash against Tanuki, Kitsune, or Tengu. Strike with Onyomi vs Kunyomi, Radicals, Stroke counts, and Compound words. Faster answers trigger Critical Hits!
              </Text>

              <View style={styles.cardFooter}>
                <Text style={[styles.cardStatBadge, { color: '#8B5CF6' }]}>
                  ⚡ Critical Strikes
                </Text>
                <View style={[styles.playPill, { backgroundColor: '#8B5CF6' }]}>
                  <Text style={styles.playPillText}>Start Duel</Text>
                </View>
              </View>
            </Pressable>
          </>
        )}

        {/* 2. Speed & Survival Section */}
        {(selectedCategory === 'all' || selectedCategory === 'challenges') && (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={[styles.sectionIconBadge, { backgroundColor: '#EAB30820' }]}>
                <Zap size={16} color="#EAB308" />
              </View>
              <View style={styles.sectionHeaderTextWrap}>
                <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
                  特訓 & サバイバル • Speed & Survival
                </Text>
                <Text style={[styles.sectionSubtitle, { color: theme.textSecondary }]}>
                  High-speed time attack & hell mode
                </Text>
              </View>
            </View>

            {/* Unified Flash Survival Card */}
            <Pressable
              onPress={() => launchGame('survival')}
              style={[styles.gameCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.iconWrap, { backgroundColor: '#EAB30818' }]}>
                  <Zap size={24} color="#EAB308" />
                </View>
                <View style={styles.headerInfo}>
                  <Text style={[styles.gameTitle, { color: theme.textPrimary }]}>
                    閃光サバイバル • Flash Survival
                  </Text>
                  <Text style={[styles.gameSubtitle, { color: theme.textSecondary }]}>
                    Time Attack Overdrive & Hell Mode
                  </Text>
                </View>
              </View>

              <Text style={[styles.gameDesc, { color: theme.textSecondary }]}>
                Race against the ticking clock! Correct answers add seconds, fast reflexes grant bonuses, and streaks unlock up to 5x multipliers. Test Kana, Kanji, Vocab, or mixed Hell Mode!
              </Text>

              <View style={styles.cardFooter}>
                <Text style={[styles.cardStatBadge, { color: '#EAB308' }]}>
                  ⚡ Best: {bestSurvivalScore} pts
                </Text>
                <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
                  <Text style={styles.playPillText}>Enter Survival</Text>
                </View>
              </View>
            </Pressable>
          </>
        )}

        {/* 3. Classic Japanese Drills & Micro-Games */}
        {(selectedCategory === 'all' || selectedCategory === 'classics') && (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={[styles.sectionIconBadge, { backgroundColor: '#3B82F620' }]}>
                <Layers size={16} color="#3B82F6" />
              </View>
              <View style={styles.sectionHeaderTextWrap}>
                <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
                  クラシック • Classic Drills
                </Text>
                <Text style={[styles.sectionSubtitle, { color: theme.textSecondary }]}>
                  Casual word puzzles and character drills
                </Text>
              </View>
            </View>

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

        {/* 5. Kana Snake */}
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
            Guide the snake with touch & swipes to eat target Kana tiles across the expanded grid.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#84CC16' }]}>
              🐍 {snakeHighScore > 0 ? `Record: ${snakeHighScore} pts` : 'Snake Mode'}
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Play Snake</Text>
            </View>
          </View>
        </Pressable>

        {/* 6. Kana Catch */}
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
            Catch falling Kanji matching the top target word into your paddle basket. Powered by dual Touch Drag &amp; Gyroscope tilt steering.
          </Text>

          <View style={styles.cardFooter}>
            <Text style={[styles.cardStatBadge, { color: '#F59E0B' }]}>
              🧺 {catchHighScore > 0 ? `Record: ${catchHighScore} pts` : 'Kanji & Kana Catch'}
            </Text>
            <View style={[styles.playPill, { backgroundColor: theme.primary }]}>
              <Text style={styles.playPillText}>Catch Kanji</Text>
            </View>
          </View>
        </Pressable>

        {/* 7. Stroke Tracing */}
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
          </>
        )}
      </ScrollView>

      {/* Active Game Modals */}
      <Modal
        visible={activeGame === 'shiritori'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <ShiritoriArenaView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'karuta'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KarutaBattleView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'kanjiDuel'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanjiDuelView onClose={closeGame} />
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
        visible={activeGame === 'snake'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaSnakeView onClose={closeGame} />
      </Modal>

      <Modal
        visible={activeGame === 'survival' || activeGame === 'rush'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <FlashSurvivalView onClose={closeGame} />
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
        visible={activeGame === 'trace'}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={closeGame}
      >
        <KanaTraceView onClose={closeGame} />
      </Modal>

      <DailyChallengeModal
        visible={showDailyChallenge}
        onClose={() => setShowDailyChallenge(false)}
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
    paddingHorizontal: 20,
    borderRadius: radii.lg,
  },
  dailyPlayBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
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
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneBadgeText: {
    fontSize: 13,
    fontWeight: '700',
  },
  dailyDoneShareBtn: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  dailyDoneShareBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  battleCard: {
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 18,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  battleTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  battleTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.full,
  },
  battleTagText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  categoryRow: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 4,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  categoryPillText: {
    fontSize: 13,
    fontWeight: '700',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 2,
  },
  sectionIconBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeaderTextWrap: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  sectionSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 1,
  },
});
