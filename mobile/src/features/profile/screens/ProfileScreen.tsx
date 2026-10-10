import React, { useMemo, useState } from 'react';
import {
  Alert,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Edit3,
  Flame,
  Languages,
  Lock,
  LogIn,
  LogOut,
  Palette,
  Settings as SettingsIcon,
  Target,
  Volume2,
  X,
  Zap,
  Users,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { THEME_PALETTES } from '../../../core/theme/palettes';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useAuthStore } from '../../auth/store/useAuthStore';
import { useCloudSync } from '../../sync';
import { StreakBadge } from '../../progress/components/StreakBadge';
import {
  ACHIEVEMENTS,
  RARITY_COLORS,
  type Achievement,
  type AchievementCategory,
} from '../../achievements/models/achievement.model';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { useSetProgressStore } from '../../progress/store/useSetProgressStore';
import { useSettingsStore } from '../../settings/store/useSettingsStore';
import { SettingsModal } from '../../settings';
import { ThemeSelectorModal } from '../../settings/components/ThemeSelectorModal';

const AVATAR_OPTIONS = [
  { emoji: '🥋', label: 'Karateka (White Belt)' },
  { emoji: '🥷', label: 'Shinobi Ninja' },
  { emoji: '🦊', label: 'Mystic Kitsune' },
  { emoji: '👺', label: 'Tengu Master' },
  { emoji: '🌸', label: 'Sakura Blossom' },
  { emoji: '⛩️', label: 'Torii Shrine' },
  { emoji: '🐉', label: 'Japanese Dragon' },
  { emoji: '🍙', label: 'Onigiri Traveler' },
  { emoji: '🎋', label: 'Tanabata Bamboo' },
  { emoji: '🏮', label: 'Chochin Lantern' },
  { emoji: '🏯', label: 'Feudal Castle' },
  { emoji: '🌊', label: 'Kanagawa Wave' },
];

const DAILY_GOAL_OPTIONS = [
  { xp: 20, label: 'Casual', desc: '5 min/day' },
  { xp: 50, label: 'Standard', desc: '15 min/day' },
  { xp: 100, label: 'Intense', desc: '30 min/day' },
];

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors: theme, activeThemeId } = useAppTheme();

  // Modals state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [resetModalStep, setResetModalStep] = useState<0 | 1 | 2>(0);

  // Stores
  const {
    currentStreak,
    bestStreak,
    totalQuestionsAnswered,
    totalCorrect,
    totalXp,
    todayXp,
    todayDate,
    dailyGoalXp,
    displayName,
    avatarEmoji,
    joinedDate,
    setDisplayName,
    setAvatarEmoji,
    setDailyGoalXp,
    resetAllStats,
    mastery,
  } = useProgressStore();

  const { currentUser, signOut } = useAuthStore();
  const { isSyncing, lastError, syncNow, restoreFromCloud } = useCloudSync();

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out? Your progress on this device is safely saved.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
            await signOut();
          },
        },
      ],
    );
  };

  const {
    hapticsEnabled,
    ttsEnabled,
    ttsRate,
    showFuriganaInDrills,
    showRomajiInCharts,
    setHapticsEnabled,
    setTtsEnabled,
    setShowFuriganaInDrills,
    setShowRomajiInCharts,
  } = useSettingsStore();

  const { getPlayerLevelInfo, getTotalPoints, unlocked } = useAchievementStore();
  const levelInfo = getPlayerLevelInfo();
  const totalPoints = getTotalPoints();
  const unlockedCount = Object.keys(unlocked).length;

  // Temporary state for editing name
  const [inputName, setInputName] = useState(displayName || 'Manabu Student');

  // Daily goal calculation
  const today = new Date().toISOString().slice(0, 10);
  const effectiveTodayXp = todayDate === today ? (todayXp || 0) : 0;
  const currentDailyGoal = dailyGoalXp || 50;
  const goalProgress = Math.min(100, Math.round((effectiveTodayXp / currentDailyGoal) * 100));

  // Overall accuracy
  const accuracy =
    totalQuestionsAnswered > 0
      ? Math.round((totalCorrect / totalQuestionsAnswered) * 100)
      : 0;

  // Curriculum Mastery Metrics
  const masteryRecords = useMemo(() => Object.values(mastery || {}), [mastery]);

  const uniqueKanaPracticed = useMemo(
    () => masteryRecords.filter(m => m.category === 'kana').length,
    [masteryRecords],
  );
  const kanaMastered = useMemo(
    () => masteryRecords.filter(m => m.category === 'kana' && m.masteryLevel === 'mastered').length,
    [masteryRecords],
  );

  const uniqueKanjiPracticed = useMemo(
    () => masteryRecords.filter(m => m.category === 'kanji').length,
    [masteryRecords],
  );
  const kanjiMastered = useMemo(
    () => masteryRecords.filter(m => m.category === 'kanji' && m.masteryLevel === 'mastered').length,
    [masteryRecords],
  );

  const uniqueVocabPracticed = useMemo(
    () => masteryRecords.filter(m => m.category === 'vocab').length,
    [masteryRecords],
  );
  const vocabMastered = useMemo(
    () => masteryRecords.filter(m => m.category === 'vocab' && m.masteryLevel === 'mastered').length,
    [masteryRecords],
  );


  // Achievements filter & sort (unlocked first)
  const [selectedAchievementCat, setSelectedAchievementCat] = useState<AchievementCategory | 'all'>('all');
  const sortedAchievements = useMemo(() => {
    const list = selectedAchievementCat === 'all'
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter(a => a.category === selectedAchievementCat);
    return [...list].sort((a, b) => (unlocked[b.id] ? 1 : 0) - (unlocked[a.id] ? 1 : 0));
  }, [selectedAchievementCat, unlocked]);

  // Handlers
  const handleOpenSettings = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setSettingsOpen(true);
  };

  const handleSelectAvatar = (emoji: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    setAvatarEmoji(emoji);
    setAvatarModalOpen(false);
  };

  const handleSaveName = () => {
    const trimmed = inputName.trim();
    if (trimmed) {
      setDisplayName(trimmed);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    }
    setNameModalOpen(false);
  };

  const handleGoalSelect = (xp: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setDailyGoalXp(xp);
  };

  const handleExecuteFullReset = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
    resetAllStats();
    useDojoStore.getState().resetDojoProgress();
    useAchievementStore.getState().resetAchievements();
    useSetProgressStore.getState().clearSetProgress();
    setResetModalStep(0);
  };

  const currentThemeName = THEME_PALETTES[activeThemeId]?.name || 'Tokyo Night';

  return (
    <View
      style={[
        styles.safeArea,
        { backgroundColor: theme.background, paddingTop: insets.top },
      ]}
    >
      {/* Header Bar */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.surface, borderBottomColor: theme.border },
        ]}
      >
        <View style={styles.headerLeft}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>My Profile</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>プロフィール & 道場記録</Text>
        </View>

        <View style={styles.headerRight}>
          <StreakBadge streak={currentStreak} />
          <Pressable
            onPress={handleOpenSettings}
            style={[
              styles.gearButton,
              { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
            ]}
            accessibilityLabel="Open settings"
            hitSlop={8}
          >
            <SettingsIcon size={20} color={theme.textPrimary} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Identity & Belt Rank Card */}
        <View style={[styles.card, styles.heroIdentityCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.heroRow}>
            {/* Avatar with Belt Ring */}
            <Pressable
              onPress={() => setAvatarModalOpen(true)}
              style={[
                styles.avatarCircle,
                { backgroundColor: theme.surfaceSubtle, borderColor: theme.primary },
              ]}
              accessibilityLabel="Change avatar"
            >
              {currentUser?.avatarUrl ? (
                <Image
                  source={{ uri: currentUser.avatarUrl }}
                  style={styles.avatarImage}
                  contentFit="cover"
                  transition={200}
                />
              ) : (
                <Text style={styles.avatarEmoji}>{avatarEmoji || '🥋'}</Text>
              )}
              <View style={[styles.avatarEditBadge, { backgroundColor: theme.primary }]}>
                <Edit3 size={11} color="#FFFFFF" />
              </View>
            </Pressable>

            {/* User Info */}
            <View style={styles.heroDetails}>
              <Pressable
                onPress={() => {
                  setInputName(displayName || 'Manabu Student');
                  setNameModalOpen(true);
                }}
                style={styles.nameRow}
              >
                <Text style={[styles.userNameText, { color: theme.textPrimary }]} numberOfLines={1}>
                  {displayName || 'Manabu Student'}
                </Text>
                <Edit3 size={15} color={theme.textMuted} style={{ marginLeft: 6 }} />
              </Pressable>

              {/* Belt & Level Badge */}
              <View style={styles.rankBadgeRow}>
                <View style={[styles.levelPill, { backgroundColor: theme.primary }]}>
                  <Text style={[styles.levelPillText, { color: theme.textOnPrimary }]}>
                    LV {levelInfo.level}
                  </Text>
                </View>
                <Text style={[styles.rankTitleText, { color: theme.textSecondary }]}>
                  {levelInfo.title}
                </Text>
              </View>

              {/* Joined info (Streak removed here to eliminate duplicate) */}
              <Text style={[styles.joinedText, { color: theme.textMuted }]}>
                Joined {joinedDate || 'Sept 2026'} • Dojo Belt Rank #{levelInfo.level}
              </Text>
            </View>
          </View>

          {/* Currency Clarification Pills */}
          <View style={styles.currencyRow}>
            <View style={[styles.currencyPill, { backgroundColor: 'rgba(249, 115, 22, 0.12)', borderColor: 'rgba(249, 115, 22, 0.25)' }]}>
              <Text style={[styles.currencyText, { color: theme.primary }]}>
                🥋 <Text style={{ fontWeight: '800' }}>{totalPoints}</Text> Belt Pts (Rank)
              </Text>
            </View>
            <View style={[styles.currencyPill, { backgroundColor: 'rgba(245, 158, 11, 0.12)', borderColor: 'rgba(245, 158, 11, 0.25)' }]}>
              <Text style={[styles.currencyText, { color: '#F59E0B' }]}>
                ⚡ <Text style={{ fontWeight: '800' }}>{totalXp}</Text> Total XP (Effort)
              </Text>
            </View>
          </View>

          {/* Level Progress Bar with Exact Relative Math */}
          <View style={styles.levelProgressContainer}>
            <View style={styles.levelProgressMeta}>
              <Text style={[styles.levelProgressLabel, { color: theme.textSecondary }]}>
                {levelInfo.progressPercent}% to Level {levelInfo.level + 1}
              </Text>
              <Text style={[styles.levelProgressPoints, { color: theme.accent }]}>
                {levelInfo.pointsInCurrentLevel} / {levelInfo.pointsNeededForNextLevel} to Level {levelInfo.level + 1}
              </Text>
            </View>
            <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle }]}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${levelInfo.progressPercent}%`, backgroundColor: theme.primary },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Cloud Account & Backup Banner */}
        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.accountCardContent}>
            <View style={styles.accountHeaderRow}>
              <View style={styles.accountHeaderLeft}>
                <View style={[styles.accountIconBg, { backgroundColor: 'rgba(34, 197, 94, 0.15)' }]}>
                  <Cloud size={18} color="#22C55E" />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <Text style={[styles.accountTitle, { color: theme.textPrimary }]} numberOfLines={1}>
                      {currentUser?.displayName || 'Manabu Learner'}
                    </Text>
                    <View style={[styles.providerBadge, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
                      <Text style={[styles.providerBadgeText, { color: '#3B82F6' }]}>
                        {currentUser?.authProvider === 'google' ? 'Google' : 'Email'}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.accountSub, { color: theme.textSecondary }]} numberOfLines={1}>
                    {currentUser?.email || 'Cloud Account Connected'}
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={handleSignOut}
                style={[styles.signOutBtn, { borderColor: theme.border, backgroundColor: theme.surfaceSubtle }]}
                hitSlop={8}
              >
                <LogOut size={13} color={theme.textMuted} style={{ marginRight: 4 }} />
                <Text style={[styles.signOutText, { color: theme.textSecondary }]}>Sign Out</Text>
              </Pressable>
            </View>

            <Pressable
              onPress={async () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
                await restoreFromCloud();
              }}
              style={({ pressed }) => [
                styles.syncStatusRow,
                {
                  backgroundColor: lastError ? 'rgba(239, 68, 68, 0.08)' : 'rgba(34, 197, 94, 0.08)',
                  borderColor: lastError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                  opacity: pressed ? 0.75 : 1,
                },
              ]}
            >
              {lastError ? (
                <>
                  <AlertTriangle size={13} color="#EF4444" />
                  <Text style={[styles.syncStatusText, { color: '#EF4444' }]} numberOfLines={1}>
                    Cloud sync issue: {lastError} (Tap to retry)
                  </Text>
                </>
              ) : (
                <>
                  <CheckCircle2 size={13} color="#22C55E" />
                  <Text style={[styles.syncStatusText, { color: '#22C55E' }]}>
                    {isSyncing
                      ? 'Syncing with Cloud...'
                      : 'Cloud Protected • Synced Automatically (Tap to sync)'}
                  </Text>
                </>
              )}
            </Pressable>
          </View>
        </View>

        {/* Sapphire League Study Circles Card (Stitch Screen #11) */}
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
            router.push('/friends' as any);
          }}
          style={({ pressed }) => [
            styles.card,
            {
              backgroundColor: theme.surface,
              borderColor: 'rgba(59, 130, 246, 0.4)',
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardHeaderLeft}>
              <View style={[styles.leagueShieldPill, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
                <Text style={{ fontSize: 13 }}>💎</Text>
              </View>
              <View>
                <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>Sapphire League • Study Circles</Text>
                <Text style={{ fontSize: 11, color: theme.primary, fontWeight: '700' }}>Tier V Cohort #42 Standings</Text>
              </View>
            </View>
            <ChevronRight size={18} color={theme.textMuted} />
          </View>
          <Text style={{ fontSize: 13, color: theme.textSecondary, marginTop: 8 }}>
            Compete in weekly 15-member cohorts. Top 3 promote to Diamond League, bottom 3 relegate.
          </Text>
        </Pressable>

        {/* Daily Study Goal Card */}
        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardHeaderLeft}>
              <Target size={18} color={theme.primary} />
              <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>Daily Study Goal</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: effectiveTodayXp >= currentDailyGoal ? 'rgba(34, 197, 94, 0.15)' : 'rgba(249, 115, 22, 0.15)' }]}>
              <Text style={[styles.statusBadgeText, { color: effectiveTodayXp >= currentDailyGoal ? theme.success : theme.primary }]}>
                {effectiveTodayXp >= currentDailyGoal ? '✓ Goal Hit!' : `${currentDailyGoal - effectiveTodayXp} XP to go`}
              </Text>
            </View>
          </View>

          {/* Goal Progress Bar */}
          <View style={{ marginTop: spacing.sm }}>
            <View style={styles.goalMetaRow}>
              <Text style={[styles.goalAmountText, { color: theme.textPrimary }]}>
                {effectiveTodayXp} <Text style={{ fontSize: 13, color: theme.textMuted }}>/ {currentDailyGoal} XP today</Text>
              </Text>
              <Text style={[styles.goalPctText, { color: theme.primary }]}>{goalProgress}%</Text>
            </View>

            <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle, height: 10, marginTop: 6 }]}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${goalProgress}%`,
                    backgroundColor: effectiveTodayXp >= currentDailyGoal ? theme.success : theme.primary,
                  },
                ]}
              />
            </View>
          </View>

          {/* Goal Selector Options */}
          <Text style={[styles.goalSelectLabel, { color: theme.textSecondary }]}>Set Daily Target:</Text>
          <View style={styles.goalPillsRow}>
            {DAILY_GOAL_OPTIONS.map(opt => {
              const isSelected = currentDailyGoal === opt.xp;
              return (
                <Pressable
                  key={opt.xp}
                  onPress={() => handleGoalSelect(opt.xp)}
                  style={[
                    styles.goalPill,
                    { borderColor: theme.border, backgroundColor: theme.surfaceSubtle },
                    isSelected && { backgroundColor: theme.primary, borderColor: theme.primary },
                  ]}
                >
                  <Text
                    style={[
                      styles.goalPillXp,
                      { color: theme.textPrimary },
                      isSelected && { color: theme.textOnPrimary, fontWeight: '800' },
                    ]}
                  >
                    {opt.xp} XP
                  </Text>
                  <Text
                    style={[
                      styles.goalPillDesc,
                      { color: theme.textMuted },
                      isSelected && { color: theme.textOnPrimary, opacity: 0.9 },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>


        {/* 3. Real Curriculum Mastery Progress */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Japanese Curriculum Progress</Text>
          <Text style={[styles.sectionSub, { color: theme.textMuted }]}>Real retention & coverage</Text>
        </View>

        {/* Kana Card */}
        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.curriculumHeader}>
            <View style={[styles.curriculumIconCircle, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
              <Text style={[styles.curriculumIconText, { color: '#3B82F6' }]}>あ</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.curriculumTitle, { color: theme.textPrimary }]}>Kana Mastery (仮名)</Text>
              <Text style={[styles.curriculumSubtitle, { color: theme.textSecondary }]}>
                {uniqueKanaPracticed} of 142 characters practiced ({Math.round((uniqueKanaPracticed / 142) * 100)}%)
              </Text>
            </View>
            <Pressable
              onPress={() => router.push('/(tabs)')}
              style={[styles.miniActionBtn, { backgroundColor: theme.surfaceSubtle }]}
            >
              <Text style={[styles.miniActionBtnText, { color: theme.primary }]}>Chart</Text>
              <ChevronRight size={14} color={theme.primary} />
            </Pressable>
          </View>
          <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle, marginTop: 10 }]}>
            <View
              style={[
                styles.progressFill,
                { width: `${Math.min(100, Math.round((uniqueKanaPracticed / 142) * 100))}%`, backgroundColor: '#3B82F6' },
              ]}
            />
          </View>
          <Text style={[styles.curriculumMeta, { color: theme.textMuted }]}>
            {kanaMastered} mastered with 90%+ recall • Hiragana & Katakana
          </Text>
        </View>

        {/* Kanji Card */}
        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.curriculumHeader}>
            <View style={[styles.curriculumIconCircle, { backgroundColor: 'rgba(249, 115, 22, 0.15)' }]}>
              <Text style={[styles.curriculumIconText, { color: '#F97316' }]}>漢</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.curriculumTitle, { color: theme.textPrimary }]}>Kanji Mastery (漢字)</Text>
              <Text style={[styles.curriculumSubtitle, { color: theme.textSecondary }]}>
                {uniqueKanjiPracticed} of 2,495 Kanji practiced
              </Text>
            </View>
            <Pressable
              onPress={() => router.push('/(tabs)')}
              style={[styles.miniActionBtn, { backgroundColor: theme.surfaceSubtle }]}
            >
              <Text style={[styles.miniActionBtnText, { color: theme.primary }]}>Dojo</Text>
              <ChevronRight size={14} color={theme.primary} />
            </Pressable>
          </View>
          <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle, marginTop: 10 }]}>
            <View
              style={[
                styles.progressFill,
                { width: `${Math.min(100, Math.round((uniqueKanjiPracticed / 2495) * 100))}%`, backgroundColor: '#F97316' },
              ]}
            />
          </View>
          <Text style={[styles.curriculumMeta, { color: theme.textMuted }]}>
            {kanjiMastered} kanji mastered • Full JLPT N5 through N1 coverage
          </Text>
        </View>

        {/* Vocab Card */}
        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.curriculumHeader}>
            <View style={[styles.curriculumIconCircle, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
              <Text style={[styles.curriculumIconText, { color: '#10B981' }]}>語</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.curriculumTitle, { color: theme.textPrimary }]}>Vocabulary Mastery (語彙)</Text>
              <Text style={[styles.curriculumSubtitle, { color: theme.textSecondary }]}>
                {uniqueVocabPracticed} of 800 Core words practiced
              </Text>
            </View>
            <Pressable
              onPress={() => router.push('/(tabs)')}
              style={[styles.miniActionBtn, { backgroundColor: theme.surfaceSubtle }]}
            >
              <Text style={[styles.miniActionBtnText, { color: theme.primary }]}>Dojo</Text>
              <ChevronRight size={14} color={theme.primary} />
            </Pressable>
          </View>
          <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle, marginTop: 10 }]}>
            <View
              style={[
                styles.progressFill,
                { width: `${Math.min(100, Math.round((uniqueVocabPracticed / 800) * 100))}%`, backgroundColor: '#10B981' },
              ]}
            />
          </View>
          <Text style={[styles.curriculumMeta, { color: theme.textMuted }]}>
            {vocabMastered} words mastered • Essential core vocabulary
          </Text>
        </View>

        {/* 4. Clearly Labeled Performance Statistics */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Study Performance & Records</Text>
          <Text style={[styles.sectionSub, { color: theme.textMuted }]}>Lifetime metrics</Text>
        </View>

        <View style={styles.statsGrid}>
          {/* Total XP */}
          <View style={[styles.statTile, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.statTileHeader}>
              <Zap size={18} color="#F59E0B" />
              <Text style={[styles.statTileTitle, { color: theme.textMuted }]}>Total XP</Text>
            </View>
            <Text style={[styles.statTileNumber, { color: theme.textPrimary }]}>{totalXp}</Text>
            <Text style={[styles.statTileExplanation, { color: theme.textSecondary }]}>
              Daily study effort from drills, quizzes & lessons
            </Text>
          </View>

          {/* Belt Points */}
          <View style={[styles.statTile, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.statTileHeader}>
              <Award size={18} color={theme.primary} />
              <Text style={[styles.statTileTitle, { color: theme.textMuted }]}>Belt Points</Text>
            </View>
            <Text style={[styles.statTileNumber, { color: theme.textPrimary }]}>{totalPoints}</Text>
            <Text style={[styles.statTileExplanation, { color: theme.textSecondary }]}>
              Dojo rank currency earned from milestones & belts
            </Text>
          </View>

          {/* Accuracy */}
          <View style={[styles.statTile, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.statTileHeader}>
              <Target size={18} color="#10B981" />
              <Text style={[styles.statTileTitle, { color: theme.textMuted }]}>Drill Accuracy</Text>
            </View>
            <Text style={[styles.statTileNumber, { color: theme.textPrimary }]}>{accuracy}%</Text>
            <Text style={[styles.statTileExplanation, { color: theme.textSecondary }]}>
              {totalCorrect} correct of {totalQuestionsAnswered} answered questions
            </Text>
          </View>

          {/* Best Streak */}
          <View style={[styles.statTile, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.statTileHeader}>
              <Flame size={18} color="#EF4444" />
              <Text style={[styles.statTileTitle, { color: theme.textMuted }]}>Streak Record</Text>
            </View>
            <Text style={[styles.statTileNumber, { color: theme.textPrimary }]}>{bestStreak}d</Text>
            <Text style={[styles.statTileExplanation, { color: theme.textSecondary }]}>
              Longest consecutive daily study record
            </Text>
          </View>
        </View>

        {/* 5. Achievements Showcase (Compact 3-column badge grid, unlocked first) */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            Achievements ({unlockedCount} / {ACHIEVEMENTS.length})
          </Text>
          <Text style={[styles.sectionSub, { color: theme.textMuted }]}>Tap badge for details</Text>
        </View>

        {/* Category Filter Pills */}
        <View style={styles.pillRow}>
          {(['all', 'streak', 'milestones', 'mastery', 'dojos', 'challenges'] as const).map(cat => (
            <Pressable
              key={cat}
              style={[
                styles.filterPill,
                { borderColor: theme.border, backgroundColor: theme.surface },
                selectedAchievementCat === cat && { backgroundColor: theme.primary, borderColor: theme.primary },
              ]}
              onPress={() => setSelectedAchievementCat(cat)}
            >
              <Text
                style={[
                  styles.filterPillText,
                  { color: theme.textSecondary },
                  selectedAchievementCat === cat && { color: theme.textOnPrimary, fontWeight: '700' },
                ]}
              >
                {cat.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Compact 3-Column Badge Grid */}
        <View style={styles.badgeGrid}>
          {sortedAchievements.map(achievement => {
            const isUnlocked = !!unlocked[achievement.id];
            const rarityStyle = RARITY_COLORS[achievement.rarity];
            return (
              <Pressable
                key={achievement.id}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                  setSelectedAchievement(achievement);
                }}
                style={[
                  styles.badgeTile,
                  {
                    backgroundColor: isUnlocked ? theme.surface : theme.surfaceSubtle,
                    borderColor: isUnlocked ? rarityStyle.border : theme.border,
                    opacity: isUnlocked ? 1 : 0.65,
                  },
                ]}
              >
                <View style={[styles.badgeIconContainer, isUnlocked && { backgroundColor: rarityStyle.bg }]}>
                  <Text style={[styles.badgeIcon, !isUnlocked && styles.badgeIconLocked]}>
                    {achievement.icon}
                  </Text>
                  {!isUnlocked && (
                    <View style={styles.lockBadgeOverlay}>
                      <Lock size={10} color="#9CA3AF" />
                    </View>
                  )}
                </View>
                <Text
                  style={[styles.badgeTileTitle, { color: isUnlocked ? theme.textPrimary : theme.textMuted }]}
                  numberOfLines={2}
                >
                  {achievement.title}
                </Text>
                <View
                  style={[
                    styles.badgePointsTag,
                    { backgroundColor: isUnlocked ? 'rgba(249, 115, 22, 0.15)' : 'rgba(156, 163, 175, 0.15)' },
                  ]}
                >
                  <Text
                    style={[
                      styles.badgePointsText,
                      { color: isUnlocked ? theme.primary : theme.textMuted },
                    ]}
                  >
                    +{achievement.points} pts
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* 6. Quick Settings & App Preferences */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>App Preferences</Text>
          <Text style={[styles.sectionSub, { color: theme.textMuted }]}>Customization</Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          {/* Theme Selector Row */}
          <Pressable
            onPress={() => setThemeModalOpen(true)}
            style={[styles.settingRow, { borderBottomColor: theme.border }]}
          >
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconBg, { backgroundColor: 'rgba(168, 85, 247, 0.15)' }]}>
                <Palette size={18} color="#A855F7" />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.textPrimary }]}>Theme & Appearance</Text>
                <Text style={[styles.settingSub, { color: theme.textSecondary }]}>{currentThemeName}</Text>
              </View>
            </View>
            <View style={styles.settingRowRight}>
              <Text style={[styles.settingActionText, { color: theme.primary }]}>Change</Text>
              <ChevronRight size={16} color={theme.textMuted} />
            </View>
          </Pressable>

          {/* TTS Audio Row */}
          <View style={[styles.settingRow, { borderBottomColor: theme.border }]}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconBg, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]}>
                <Volume2 size={18} color="#3B82F6" />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.textPrimary }]}>Voice Pronunciation</Text>
                <Text style={[styles.settingSub, { color: theme.textSecondary }]}>
                  Japanese speech audio ({ttsRate}x speed)
                </Text>
              </View>
            </View>
            <Switch
              value={ttsEnabled}
              onValueChange={setTtsEnabled}
              trackColor={{ false: theme.border, true: theme.primary }}
              thumbColor={Platform.OS === 'android' ? '#FFFFFF' : undefined}
            />
          </View>

          {/* Furigana in Drills */}
          <View style={[styles.settingRow, { borderBottomColor: theme.border }]}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconBg, { backgroundColor: 'rgba(234, 179, 8, 0.15)' }]}>
                <BookOpen size={18} color="#EAB308" />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.textPrimary }]}>Furigana in Drills</Text>
                <Text style={[styles.settingSub, { color: theme.textSecondary }]}>Show phonetic reading aids</Text>
              </View>
            </View>
            <Switch
              value={showFuriganaInDrills}
              onValueChange={setShowFuriganaInDrills}
              trackColor={{ false: theme.border, true: theme.primary }}
              thumbColor={Platform.OS === 'android' ? '#FFFFFF' : undefined}
            />
          </View>

          {/* Romaji in Charts */}
          <View style={[styles.settingRow, { borderBottomColor: theme.border }]}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconBg, { backgroundColor: 'rgba(99, 102, 241, 0.15)' }]}>
                <Languages size={18} color="#6366F1" />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.textPrimary }]}>Romaji in Charts</Text>
                <Text style={[styles.settingSub, { color: theme.textSecondary }]}>Show Latin alphabet guides</Text>
              </View>
            </View>
            <Switch
              value={showRomajiInCharts}
              onValueChange={setShowRomajiInCharts}
              trackColor={{ false: theme.border, true: theme.primary }}
              thumbColor={Platform.OS === 'android' ? '#FFFFFF' : undefined}
            />
          </View>

          {/* Haptic Feedback */}
          <View style={[styles.settingRow, { borderBottomColor: theme.border }]}>
            <View style={styles.settingRowLeft}>
              <View style={[styles.settingIconBg, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
                <Zap size={18} color="#10B981" />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.textPrimary }]}>Haptic Vibrations</Text>
                <Text style={[styles.settingSub, { color: theme.textSecondary }]}>Tactile response on answer</Text>
              </View>
            </View>
            <Switch
              value={hapticsEnabled}
              onValueChange={setHapticsEnabled}
              trackColor={{ false: theme.border, true: theme.primary }}
              thumbColor={Platform.OS === 'android' ? '#FFFFFF' : undefined}
            />
          </View>

          {/* Show All Settings Button */}
          <Pressable
            onPress={() => setSettingsOpen(true)}
            style={styles.moreSettingsRow}
          >
            <Text style={[styles.moreSettingsText, { color: theme.primary }]}>
              Open All Settings & Cloud Backup
            </Text>
            <ChevronRight size={16} color={theme.primary} />
          </Pressable>
        </View>

        {/* 7. Hardened Progress Reset (Two-step confirmation modal trigger) */}
        <View style={styles.resetContainer}>
          <Pressable
            onPress={() => setResetModalStep(1)}
            style={[styles.resetButton, { borderColor: 'rgba(239, 68, 68, 0.4)', backgroundColor: 'rgba(239, 68, 68, 0.08)' }]}
          >
            <AlertTriangle size={16} color={theme.error} style={{ marginRight: 6 }} />
            <Text style={[styles.resetButtonText, { color: theme.error }]}>Reset All Progress Data</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Achievement Inspector Modal */}
      <Modal
        visible={!!selectedAchievement}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedAchievement(null)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setSelectedAchievement(null)}
        >
          {selectedAchievement && (
            <Pressable
              style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={e => e.stopPropagation()}
            >
              <View style={styles.modalHeaderRow}>
                <View style={styles.inspectHeaderLeft}>
                  <View
                    style={[
                      styles.inspectIconCircle,
                      {
                        backgroundColor: unlocked[selectedAchievement.id]
                          ? RARITY_COLORS[selectedAchievement.rarity].bg
                          : theme.surfaceSubtle,
                        borderColor: unlocked[selectedAchievement.id]
                          ? RARITY_COLORS[selectedAchievement.rarity].border
                          : theme.border,
                      },
                    ]}
                  >
                    <Text style={styles.inspectIconEmoji}>{selectedAchievement.icon}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.inspectTitle, { color: theme.textPrimary }]}>
                      {selectedAchievement.title}
                    </Text>
                    <View style={styles.inspectTagsRow}>
                      <View
                        style={[
                          styles.rarityPill,
                          {
                            backgroundColor: RARITY_COLORS[selectedAchievement.rarity].bg,
                            borderColor: RARITY_COLORS[selectedAchievement.rarity].border,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.rarityPillText,
                            { color: RARITY_COLORS[selectedAchievement.rarity].text },
                          ]}
                        >
                          {selectedAchievement.rarity.toUpperCase()}
                        </Text>
                      </View>
                      <Text style={[styles.inspectCategoryText, { color: theme.textMuted }]}>
                        • {selectedAchievement.category.toUpperCase()}
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable onPress={() => setSelectedAchievement(null)} hitSlop={8}>
                  <X size={20} color={theme.textMuted} />
                </Pressable>
              </View>

              <Text style={[styles.inspectDescription, { color: theme.textSecondary }]}>
                {selectedAchievement.description}
              </Text>

              {/* Status Section */}
              <View
                style={[
                  styles.inspectStatusCard,
                  {
                    backgroundColor: unlocked[selectedAchievement.id]
                      ? 'rgba(34, 197, 94, 0.1)'
                      : theme.surfaceSubtle,
                    borderColor: unlocked[selectedAchievement.id]
                      ? 'rgba(34, 197, 94, 0.3)'
                      : theme.border,
                  },
                ]}
              >
                {unlocked[selectedAchievement.id] ? (
                  <View style={styles.statusRow}>
                    <CheckCircle2 size={18} color={theme.success} />
                    <View style={{ flex: 1 }}>
                      <Text style={[styles.statusTitleText, { color: theme.success }]}>
                        Unlocked (+{selectedAchievement.points} Belt Points)
                      </Text>
                      <Text style={[styles.statusSubText, { color: theme.textMuted }]}>
                        Earned on {new Date(unlocked[selectedAchievement.id].unlockedAt).toLocaleDateString()}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View style={styles.statusRow}>
                    <Lock size={18} color="#9CA3AF" />
                    <View style={{ flex: 1 }}>
                      <Text style={[styles.statusTitleText, { color: theme.textPrimary }]}>
                        Locked • Worth +{selectedAchievement.points} Belt Points
                      </Text>
                      <Text style={[styles.statusSubText, { color: theme.textMuted }]}>
                        Next up: Complete the requirements above in practice or drills to unlock this badge.
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              <Pressable
                onPress={() => setSelectedAchievement(null)}
                style={[styles.inspectCloseBtn, { backgroundColor: theme.primary }]}
              >
                <Text style={[styles.inspectCloseBtnText, { color: theme.textOnPrimary }]}>Close</Text>
              </Pressable>
            </Pressable>
          )}
        </Pressable>
      </Modal>

      {/* Hardened 2-Step Reset Modal */}
      <Modal
        visible={resetModalStep > 0}
        transparent
        animationType="fade"
        onRequestClose={() => setResetModalStep(0)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            {resetModalStep === 1 ? (
              <View>
                <View style={styles.resetModalHeader}>
                  <View style={[styles.warningIconBg, { backgroundColor: 'rgba(239, 68, 68, 0.15)' }]}>
                    <AlertTriangle size={24} color="#EF4444" />
                  </View>
                  <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>
                    Reset Study Progress? (Step 1/2)
                  </Text>
                </View>
                <Text style={[styles.resetWarningBody, { color: theme.textSecondary }]}>
                  This action will clear all your active study sessions, curriculum unit completions, SRS review intervals, and streak records.
                </Text>
                <View style={[styles.resetItemizedBox, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
                  <Text style={[styles.resetItemText, { color: theme.textPrimary }]}>• All SRS Review cards & intervals</Text>
                  <Text style={[styles.resetItemText, { color: theme.textPrimary }]}>• Dojo unit locks & cumulative revision check</Text>
                  <Text style={[styles.resetItemText, { color: theme.textPrimary }]}>• Daily streak count & total XP</Text>
                  <Text style={[styles.resetItemText, { color: theme.textPrimary }]}>• Unlocked achievements & belt points</Text>
                </View>

                <View style={styles.modalActionRow}>
                  <Pressable
                    onPress={() => setResetModalStep(0)}
                    style={[styles.modalCancelBtn, { borderColor: theme.border }]}
                  >
                    <Text style={{ color: theme.textSecondary, fontWeight: '700' }}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setResetModalStep(2)}
                    style={[styles.modalSaveBtn, { backgroundColor: theme.error }]}
                  >
                    <Text style={{ color: '#FFFFFF', fontWeight: '800' }}>I Understand, Proceed</Text>
                  </Pressable>
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.resetModalHeader}>
                  <View style={[styles.warningIconBg, { backgroundColor: 'rgba(239, 68, 68, 0.2)' }]}>
                    <AlertTriangle size={26} color="#DC2626" />
                  </View>
                  <Text style={[styles.modalTitle, { color: theme.error }]}>
                    Final Confirmation (Step 2/2)
                  </Text>
                </View>
                <Text style={[styles.resetWarningBody, { color: theme.textPrimary, fontWeight: '700' }]}>
                  Are you absolutely certain? This operation cannot be reversed.
                </Text>
                <Text style={[styles.resetWarningSub, { color: theme.textMuted }]}>
                  All local data will be permanently wiped and your account will restart from Day 1 / Novice White Belt.
                </Text>

                <View style={styles.modalActionRow}>
                  <Pressable
                    onPress={() => setResetModalStep(1)}
                    style={[styles.modalCancelBtn, { borderColor: theme.border }]}
                  >
                    <Text style={{ color: theme.textSecondary, fontWeight: '700' }}>Go Back</Text>
                  </Pressable>
                  <Pressable
                    onPress={handleExecuteFullReset}
                    style={[styles.modalSaveBtn, { backgroundColor: '#DC2626' }]}
                  >
                    <Text style={{ color: '#FFFFFF', fontWeight: '900' }}>Permanently Wipe All Data</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Avatar Picker Modal */}
      <Modal
        visible={avatarModalOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setAvatarModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.modalHeaderRow}>
              <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Choose Avatar</Text>
              <Pressable onPress={() => setAvatarModalOpen(false)} hitSlop={8}>
                <X size={20} color={theme.textMuted} />
              </Pressable>
            </View>

            <View style={styles.avatarGrid}>
              {AVATAR_OPTIONS.map(opt => (
                <Pressable
                  key={opt.emoji}
                  onPress={() => handleSelectAvatar(opt.emoji)}
                  style={[
                    styles.avatarGridItem,
                    { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                    avatarEmoji === opt.emoji && { borderColor: theme.primary, backgroundColor: 'rgba(249, 115, 22, 0.15)' },
                  ]}
                >
                  <Text style={styles.avatarGridEmoji}>{opt.emoji}</Text>
                  <Text style={[styles.avatarGridLabel, { color: theme.textSecondary }]} numberOfLines={1}>
                    {opt.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {/* Name Edit Modal */}
      <Modal
        visible={nameModalOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setNameModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.modalHeaderRow}>
              <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Edit Display Name</Text>
              <Pressable onPress={() => setNameModalOpen(false)} hitSlop={8}>
                <X size={20} color={theme.textMuted} />
              </Pressable>
            </View>

            <TextInput
              value={inputName}
              onChangeText={setInputName}
              placeholder="Enter your name"
              placeholderTextColor={theme.textMuted}
              maxLength={24}
              style={[
                styles.nameInput,
                { color: theme.textPrimary, borderColor: theme.border, backgroundColor: theme.surfaceSubtle },
              ]}
              autoFocus
            />

            <View style={styles.modalActionRow}>
              <Pressable
                onPress={() => setNameModalOpen(false)}
                style={[styles.modalCancelBtn, { borderColor: theme.border }]}
              >
                <Text style={{ color: theme.textSecondary, fontWeight: '600' }}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={handleSaveName}
                style={[styles.modalSaveBtn, { backgroundColor: theme.primary }]}
              >
                <Text style={{ color: theme.textOnPrimary, fontWeight: '700' }}>Save Name</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Full Settings Modal */}
      <SettingsModal
        visible={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

      {/* Theme Selector Modal */}
      <ThemeSelectorModal
        visible={themeModalOpen}
        onClose={() => setThemeModalOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  gearButton: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: spacing.base,
    gap: spacing.md,
    paddingBottom: spacing.xxl + 20,
  },
  card: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    ...shadows.sm,
  },
  heroIdentityCard: {
    paddingTop: spacing.base + 2,
    paddingBottom: spacing.base + 2,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
  },
  avatarCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarEmoji: {
    fontSize: 34,
  },
  avatarImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  avatarEditBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1E1E2E',
  },
  heroDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  rankBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  levelPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  levelPillText: {
    fontSize: 11,
    fontWeight: '800',
  },
  rankTitleText: {
    fontSize: 13,
    fontWeight: '700',
  },
  joinedText: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
  },
  currencyRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  currencyPill: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: 11,
    fontWeight: '600',
  },
  levelProgressContainer: {
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
  },
  levelProgressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  levelProgressLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  levelProgressPoints: {
    fontSize: 12,
    fontWeight: '700',
  },
  progressTrack: {
    height: 8,
    borderRadius: radii.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: radii.full,
  },

  // Daily goal
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '800',
  },
  goalMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  goalAmountText: {
    fontSize: 18,
    fontWeight: '800',
  },
  goalPctText: {
    fontSize: 14,
    fontWeight: '800',
  },
  goalSelectLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  goalPillsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  goalPill: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: radii.lg,
    alignItems: 'center',
    borderWidth: 1,
  },
  goalPillXp: {
    fontSize: 14,
    fontWeight: '700',
  },
  goalPillDesc: {
    fontSize: 10,
    marginTop: 2,
  },

  // Stats Grid
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
    paddingHorizontal: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  sectionSub: {
    fontSize: 12,
    fontWeight: '500',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  statTile: {
    width: '48.5%',
    borderRadius: radii.lg,
    padding: spacing.base,
    borderWidth: 1,
    ...shadows.sm,
  },
  statTileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statTileTitle: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  statTileNumber: {
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 4,
  },
  statTileExplanation: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 14,
  },

  // Curriculum
  curriculumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  curriculumIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curriculumIconText: {
    fontSize: 18,
    fontWeight: '800',
  },
  curriculumTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  curriculumSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 1,
  },
  miniActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
  },
  miniActionBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  curriculumMeta: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 8,
  },

  // Priority Focus (2x2 Grid)


  // Achievements Compact 3-Column Grid
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  filterPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  filterPillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'flex-start',
  },
  badgeTile: {
    width: '31%',
    borderRadius: radii.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    ...shadows.sm,
  },
  badgeIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 4,
  },
  badgeIcon: {
    fontSize: 22,
  },
  badgeIconLocked: {
    opacity: 0.45,
  },
  lockBadgeOverlay: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#374151',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTileTitle: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
    minHeight: 28,
  },
  badgePointsTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.full,
    marginTop: 4,
  },
  badgePointsText: {
    fontSize: 9,
    fontWeight: '800',
  },

  // Settings
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  leagueShieldPill: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  settingRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  settingSub: {
    fontSize: 12,
    marginTop: 1,
  },
  settingRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  settingActionText: {
    fontSize: 13,
    fontWeight: '700',
  },
  moreSettingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingTop: 14,
    paddingBottom: 2,
  },
  moreSettingsText: {
    fontSize: 13,
    fontWeight: '700',
  },

  // Reset
  resetContainer: {
    marginTop: spacing.sm,
    alignItems: 'center',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  resetButtonText: {
    fontSize: 13,
    fontWeight: '800',
  },

  // Modals
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.base,
  },
  modalCard: {
    width: '100%',
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    ...shadows.md,
  },
  modalHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
  avatarGridItem: {
    width: '30%',
    paddingVertical: 12,
    borderRadius: radii.lg,
    alignItems: 'center',
    borderWidth: 1,
  },
  avatarGridEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  avatarGridLabel: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  nameInput: {
    height: 48,
    borderRadius: radii.lg,
    borderWidth: 1,
    paddingHorizontal: spacing.base,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: spacing.base,
  },
  modalActionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  modalCancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  modalSaveBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: radii.md,
  },

  // Achievement Inspector Modal
  inspectHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  inspectIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inspectIconEmoji: {
    fontSize: 26,
  },
  inspectTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  inspectTagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  rarityPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  rarityPillText: {
    fontSize: 9,
    fontWeight: '800',
  },
  inspectCategoryText: {
    fontSize: 10,
    fontWeight: '700',
  },
  inspectDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  inspectStatusCard: {
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  statusTitleText: {
    fontSize: 13,
    fontWeight: '800',
  },
  statusSubText: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: 2,
  },
  inspectCloseBtn: {
    paddingVertical: 12,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inspectCloseBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },

  // Hardened Reset Modal
  resetModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: spacing.sm,
  },
  warningIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetWarningBody: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: spacing.sm,
  },
  resetWarningSub: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  resetItemizedBox: {
    padding: spacing.sm,
    borderRadius: radii.md,
    borderWidth: 1,
    gap: 4,
    marginBottom: spacing.sm,
  },
  resetItemText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Account & Cloud Sync Banner Styles
  accountCardContent: {
    gap: spacing.sm,
  },
  accountHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  accountHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  accountIconBg: {
    width: 38,
    height: 38,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  accountSub: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    lineHeight: 16,
  },
  providerBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  providerBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 6,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  signOutText: {
    fontSize: 12,
    fontWeight: '600',
  },
  syncStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 6,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  syncStatusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  guestCardContent: {
    gap: spacing.md,
  },
  guestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
  },
  signInActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: spacing.base,
    borderRadius: radii.md,
  },
  signInActionBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
});

