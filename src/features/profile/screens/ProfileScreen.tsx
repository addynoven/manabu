import React, { useMemo, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Settings as SettingsIcon } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { StreakBadge } from '../../progress/components/StreakBadge';
import { PlayerLevelCard } from '../../achievements/components/PlayerLevelCard';
import { AchievementCard } from '../../achievements/components/AchievementCard';
import {
  ACHIEVEMENTS,
  type AchievementCategory,
} from '../../achievements/models/achievement.model';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { SettingsModal } from '../../settings';

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const {
    currentStreak,
    bestStreak,
    totalQuestionsAnswered,
    totalCorrect,
    totalXp,
    resetAllStats,
  } = useProgressStore();

  const mastery = useProgressStore(state => state.mastery);
  const getWeakestCharacters = useProgressStore(state => state.getWeakestCharacters);
  const getStrongestCharacters = useProgressStore(state => state.getStrongestCharacters);
  const getMasteryDistribution = useProgressStore(state => state.getMasteryDistribution);

  const [masteryView, setMasteryView] = useState<'weakness' | 'strength' | 'breakdown'>('weakness');
  const [masteryCategory, setMasteryCategory] = useState<'all' | 'kana' | 'kanji' | 'vocab'>('all');

  const accuracy =
    totalQuestionsAnswered > 0
      ? Math.round((totalCorrect / totalQuestionsAnswered) * 100)
      : 0;

  const selectedCategoryArg = masteryCategory === 'all' ? undefined : masteryCategory;

  const distribution = useMemo(() => {
    if (!mastery) return { mastered: 0, learning: 0, needsPractice: 0, total: 0 };
    return getMasteryDistribution(selectedCategoryArg);
  }, [mastery, selectedCategoryArg, getMasteryDistribution]);

  const weakestChars = useMemo(() => {
    if (!mastery) return [];
    return getWeakestCharacters(selectedCategoryArg, 5);
  }, [mastery, selectedCategoryArg, getWeakestCharacters]);

  const strongestChars = useMemo(() => {
    if (!mastery) return [];
    return getStrongestCharacters(selectedCategoryArg, 5);
  }, [mastery, selectedCategoryArg, getStrongestCharacters]);

  const categoryBreakdowns = useMemo(() => {
    if (!mastery) return [];
    return [
      { name: 'Kana Dojo (仮名)', icon: 'あ', dist: getMasteryDistribution('kana') },
      { name: 'Kanji Dojo (漢字)', icon: '漢', dist: getMasteryDistribution('kanji') },
      { name: 'Vocab Dojo (語彙)', icon: '語', dist: getMasteryDistribution('vocab') },
    ];
  }, [mastery, getMasteryDistribution]);

  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>('all');
  const unlocked = useAchievementStore(state => state.unlocked);
  const unlockedCount = Object.keys(unlocked).length;

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'all') return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenSettings = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setSettingsOpen(true);
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Progress',
      'Are you sure you want to reset all your stats and streak history?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', style: 'destructive', onPress: resetAllStats },
      ],
    );
  };

  const isTextOnPrimaryDark = theme.textOnPrimary !== '#FFFFFF';
  const heroSubColor = isTextOnPrimaryDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.8)';
  const heroRowBg = isTextOnPrimaryDark ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.12)';
  const heroDividerBg = isTextOnPrimaryDark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.2)';

  return (
    <View
      style={[
        styles.safeArea,
        { backgroundColor: theme.background, paddingTop: insets.top },
      ]}
    >
      {/* Top Header with Profile Title, Streak, and Settings Gear Icon */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.surface, borderBottomColor: theme.border },
        ]}
      >
        <View style={styles.headerLeft}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Profile & Mastery</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>マイページ</Text>
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
        {/* Player Martial Arts Level Card */}
        <PlayerLevelCard />

        {/* Hero Card */}
        <View style={[styles.heroCard, { backgroundColor: theme.primary }]}>
          <Text style={[styles.heroXpTitle, { color: heroSubColor }]}>Total Experience</Text>
          <Text style={[styles.heroXpNumber, { color: theme.textOnPrimary }]}>{totalXp} XP</Text>
          <View style={[styles.heroStatsRow, { backgroundColor: heroRowBg }]}>
            <View style={styles.statCol}>
              <Text style={[styles.statNum, { color: theme.textOnPrimary }]}>{accuracy}%</Text>
              <Text style={[styles.statLabel, { color: heroSubColor }]}>Accuracy</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: heroDividerBg }]} />
            <View style={styles.statCol}>
              <Text style={[styles.statNum, { color: theme.textOnPrimary }]}>{totalQuestionsAnswered}</Text>
              <Text style={[styles.statLabel, { color: heroSubColor }]}>Drills Done</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: heroDividerBg }]} />
            <View style={styles.statCol}>
              <Text style={[styles.statNum, { color: theme.textOnPrimary }]}>{bestStreak}d</Text>
              <Text style={[styles.statLabel, { color: heroSubColor }]}>Best Streak</Text>
            </View>
          </View>
        </View>

        {/* Character Mastery Distribution Bar */}
        <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>Mastery Distribution</Text>
        <View style={[styles.masteryCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.masteryRow}>
            <View style={styles.masteryPill}>
              <View style={[styles.dot, { backgroundColor: theme.success }]} />
              <Text style={[styles.masteryValue, { color: theme.textPrimary }]}>{distribution.mastered}</Text>
              <Text style={[styles.masteryLabel, { color: theme.textSecondary }]}>Mastered</Text>
            </View>
            <View style={styles.masteryPill}>
              <View style={[styles.dot, { backgroundColor: theme.accent }]} />
              <Text style={[styles.masteryValue, { color: theme.textPrimary }]}>{distribution.learning}</Text>
              <Text style={[styles.masteryLabel, { color: theme.textSecondary }]}>Learning</Text>
            </View>
            <View style={styles.masteryPill}>
              <View style={[styles.dot, { backgroundColor: theme.error }]} />
              <Text style={[styles.masteryValue, { color: theme.textPrimary }]}>{distribution.needsPractice}</Text>
              <Text style={[styles.masteryLabel, { color: theme.textSecondary }]}>Needs Work</Text>
            </View>
          </View>

          {/* Ratio bar */}
          <View style={[styles.progressBar, { backgroundColor: theme.border }]}>
            {distribution.total > 0 ? (
              <>
                <View
                  style={{
                    flex: distribution.mastered,
                    backgroundColor: theme.success,
                  }}
                />
                <View
                  style={{
                    flex: distribution.learning,
                    backgroundColor: theme.accent,
                  }}
                />
                <View
                  style={{
                    flex: distribution.needsPractice,
                    backgroundColor: theme.error,
                  }}
                />
              </>
            ) : (
              <View style={{ flex: 1, backgroundColor: theme.border }} />
            )}
          </View>
        </View>

        {/* Detailed Character Mastery Dashboard */}
        <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>Detailed Mastery & Performance</Text>

        {/* Primary Segmented View Switcher */}
        <View style={[styles.segmentedRow, { backgroundColor: theme.surfaceSubtle }]}>
          <Pressable
            style={[
              styles.segmentedTab,
              masteryView === 'weakness' && [styles.segmentedTabActive, { backgroundColor: theme.surface }],
            ]}
            onPress={() => setMasteryView('weakness')}
          >
            <Text
              style={[
                styles.segmentedTabText,
                { color: theme.textSecondary },
                masteryView === 'weakness' && [styles.segmentedTabTextActive, { color: theme.primary }],
              ]}
            >
              ⚠️ Weaknesses
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.segmentedTab,
              masteryView === 'strength' && [styles.segmentedTabActive, { backgroundColor: theme.surface }],
            ]}
            onPress={() => setMasteryView('strength')}
          >
            <Text
              style={[
                styles.segmentedTabText,
                { color: theme.textSecondary },
                masteryView === 'strength' && [styles.segmentedTabTextActive, { color: theme.primary }],
              ]}
            >
              🌟 Strengths
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.segmentedTab,
              masteryView === 'breakdown' && [styles.segmentedTabActive, { backgroundColor: theme.surface }],
            ]}
            onPress={() => setMasteryView('breakdown')}
          >
            <Text
              style={[
                styles.segmentedTabText,
                { color: theme.textSecondary },
                masteryView === 'breakdown' && [styles.segmentedTabTextActive, { color: theme.primary }],
              ]}
            >
              📊 Breakdown
            </Text>
          </Pressable>
        </View>

        {/* Category Filter Pills (for weakness & strength) */}
        {masteryView !== 'breakdown' && (
          <View style={styles.pillRow}>
            {(['all', 'kana', 'kanji', 'vocab'] as const).map(cat => (
              <Pressable
                key={cat}
                style={[
                  styles.filterPill,
                  { borderColor: theme.border, backgroundColor: theme.surface },
                  masteryCategory === cat && { backgroundColor: theme.primary, borderColor: theme.primary },
                ]}
                onPress={() => setMasteryCategory(cat)}
              >
                <Text
                  style={[
                    styles.filterPillText,
                    { color: theme.textSecondary },
                    masteryCategory === cat && { color: theme.textOnPrimary, fontWeight: '700' },
                  ]}
                >
                  {cat.toUpperCase()}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Weakness View */}
        {masteryView === 'weakness' && (
          <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>Priority Focus Items</Text>
            <Text style={[styles.cardDesc, { color: theme.textSecondary }]}>
              Items with low accuracy or repeated misses. Target these in Review!
            </Text>

            {weakestChars.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyIcon}>🎉</Text>
                <Text style={[styles.emptyText, { color: theme.textPrimary }]}>No critical weaknesses identified!</Text>
                <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
                  Keep practicing to generate retention metrics.
                </Text>
              </View>
            ) : (
              <View style={styles.charList}>
                {weakestChars.map(item => (
                  <View
                    key={item.character}
                    style={[styles.charRow, { borderColor: theme.borderSubtle }]}
                  >
                    <View style={styles.charBadge}>
                      <Text style={[styles.charMain, { color: theme.textPrimary }]}>{item.character}</Text>
                      <Text style={[styles.charType, { color: theme.textMuted }]}>{item.category}</Text>
                    </View>
                    <View style={styles.charStats}>
                      <Text style={[styles.charStatText, { color: theme.error }]}>
                        {item.accuracy}% accuracy ({item.incorrect} misses)
                      </Text>
                      <Text style={[styles.charStreakText, { color: theme.textSecondary }]}>
                        Status: {item.masteryLevel.toUpperCase()} • Total attempts: {item.total}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Strength View */}
        {masteryView === 'strength' && (
          <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>Top Mastered Items</Text>
            <Text style={[styles.cardDesc, { color: theme.textSecondary }]}>
              Characters with high retention streaks and rapid recall.
            </Text>

            {strongestChars.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyIcon}>🌱</Text>
                <Text style={[styles.emptyText, { color: theme.textPrimary }]}>No mastered items yet</Text>
                <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
                  Complete more drills to build mastery.
                </Text>
              </View>
            ) : (
              <View style={styles.charList}>
                {strongestChars.map(item => (
                  <View
                    key={item.character}
                    style={[styles.charRow, { borderColor: theme.borderSubtle }]}
                  >
                    <View style={styles.charBadge}>
                      <Text style={[styles.charMain, { color: theme.textPrimary }]}>{item.character}</Text>
                      <Text style={[styles.charType, { color: theme.textMuted }]}>{item.category}</Text>
                    </View>
                    <View style={styles.charStats}>
                      <Text style={[styles.charStatText, { color: theme.success }]}>
                        {item.accuracy}% accuracy ({item.correct} correct)
                      </Text>
                      <Text style={[styles.charStreakText, { color: theme.textSecondary }]}>
                        Status: {item.masteryLevel.toUpperCase()} • Total attempts: {item.total}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Breakdown View */}
        {masteryView === 'breakdown' && (
          <View style={styles.breakdownList}>
            {categoryBreakdowns.map((cat, idx) => {
              const catTotal = cat.dist.total;
              const catPct = catTotal > 0 ? Math.round((cat.dist.mastered / catTotal) * 100) : 0;
              return (
                <View
                  key={idx}
                  style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}
                >
                  <View style={styles.catHeader}>
                    <Text style={[styles.catIcon, { color: theme.primary }]}>{cat.icon}</Text>
                    <View style={styles.catHeaderText}>
                      <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>{cat.name}</Text>
                      <Text style={[styles.cardDesc, { color: theme.textSecondary }]}>
                        {cat.dist.mastered} of {catTotal} items mastered ({catPct}%)
                      </Text>
                    </View>
                  </View>

                  <View style={[styles.progressBar, { backgroundColor: theme.border, marginTop: 12 }]}>
                    {catTotal > 0 ? (
                      <>
                        <View style={{ flex: cat.dist.mastered, backgroundColor: theme.success }} />
                        <View style={{ flex: cat.dist.learning, backgroundColor: theme.accent }} />
                        <View style={{ flex: cat.dist.needsPractice, backgroundColor: theme.error }} />
                      </>
                    ) : (
                      <View style={{ flex: 1, backgroundColor: theme.border }} />
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        )}

        {/* Achievements Section */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>
            Achievements ({unlockedCount}/{ACHIEVEMENTS.length})
          </Text>
        </View>

        {/* Category Filter Pills */}
        <View style={styles.pillRow}>
          {(['all', 'streak', 'milestones', 'mastery', 'dojos', 'challenges'] as const).map(cat => (
            <Pressable
              key={cat}
              style={[
                styles.filterPill,
                { borderColor: theme.border, backgroundColor: theme.surface },
                selectedCategory === cat && { backgroundColor: theme.primary, borderColor: theme.primary },
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.filterPillText,
                  { color: theme.textSecondary },
                  selectedCategory === cat && { color: theme.textOnPrimary, fontWeight: '700' },
                ]}
              >
                {cat.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Achievements List */}
        <View style={styles.achievementsList}>
          {filteredAchievements.map(achievement => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              isUnlocked={!!unlocked[achievement.id]}
            />
          ))}
        </View>

        {/* Settings Shortcut Row */}
        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border, marginTop: spacing.md }]}>
          <Pressable
            style={styles.settingsShortcut}
            onPress={handleOpenSettings}
          >
            <View style={styles.settingsShortcutLeft}>
              <View style={[styles.settingsIconBox, { backgroundColor: theme.surfaceSubtle }]}>
                <SettingsIcon size={20} color={theme.primary} />
              </View>
              <View>
                <Text style={[styles.shortcutTitle, { color: theme.textPrimary }]}>App Preferences & Settings</Text>
                <Text style={[styles.shortcutSub, { color: theme.textSecondary }]}>Theme, audio, furigana, data backup & reset</Text>
              </View>
            </View>
            <Text style={[styles.chevron, { color: theme.textMuted }]}>›</Text>
          </Pressable>
        </View>

        {/* Reset Button */}
        <Pressable
          style={[styles.resetButton, { borderColor: theme.error }]}
          onPress={handleReset}
        >
          <Text style={[styles.resetText, { color: theme.error }]}>Reset All Data & Stats</Text>
        </Pressable>
      </ScrollView>

      {/* Settings Modal */}
      <SettingsModal
        visible={settingsOpen}
        onClose={() => setSettingsOpen(false)}
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
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
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
    paddingBottom: spacing.xxl,
  },
  heroCard: {
    borderRadius: radii.xl,
    padding: spacing.base,
    alignItems: 'center',
    ...shadows.md,
  },
  heroXpTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  heroXpNumber: {
    fontSize: 32,
    fontWeight: '900',
    marginVertical: spacing.xs,
  },
  heroStatsRow: {
    flexDirection: 'row',
    borderRadius: radii.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  statCol: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: '70%',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  masteryCard: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    ...shadows.sm,
  },
  masteryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  masteryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  masteryValue: {
    fontSize: 15,
    fontWeight: '700',
  },
  masteryLabel: {
    fontSize: 13,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  segmentedRow: {
    flexDirection: 'row',
    borderRadius: radii.lg,
    padding: 3,
  },
  segmentedTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: radii.md,
  },
  segmentedTabActive: {
    ...shadows.sm,
  },
  segmentedTabText: {
    fontSize: 13,
    fontWeight: '600',
  },
  segmentedTabTextActive: {
    fontWeight: '700',
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  filterPillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  card: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    ...shadows.sm,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardDesc: {
    fontSize: 13,
    marginTop: 2,
    marginBottom: spacing.sm,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  emptyIcon: {
    fontSize: 32,
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '700',
  },
  emptySub: {
    fontSize: 13,
    marginTop: 2,
  },
  charList: {
    gap: spacing.xs,
  },
  charRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  charBadge: {
    width: 44,
    alignItems: 'center',
  },
  charMain: {
    fontSize: 22,
    fontWeight: '800',
  },
  charType: {
    fontSize: 10,
    fontWeight: '600',
  },
  charStats: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  charStatText: {
    fontSize: 13,
    fontWeight: '600',
  },
  charStreakText: {
    fontSize: 11,
    marginTop: 2,
  },
  breakdownList: {
    gap: spacing.sm,
  },
  catHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catIcon: {
    fontSize: 24,
    fontWeight: '800',
    marginRight: spacing.sm,
  },
  catHeaderText: {
    flex: 1,
  },
  achievementsList: {
    gap: spacing.sm,
  },
  settingsShortcut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingsShortcutLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  settingsIconBox: {
    width: 40,
    height: 40,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortcutTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  shortcutSub: {
    fontSize: 12,
    marginTop: 2,
  },
  chevron: {
    fontSize: 22,
    fontWeight: '300',
  },
  resetButton: {
    borderWidth: 1,
    borderRadius: radii.lg,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  resetText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
