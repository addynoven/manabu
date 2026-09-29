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
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { Card } from '../../../core/components/Card';
import { useProgressStore } from '../store/useProgressStore';
import { StreakBadge } from '../components/StreakBadge';
import { router } from 'expo-router';
import { PlayerLevelCard } from '../../achievements/components/PlayerLevelCard';
import { AchievementCard } from '../../achievements/components/AchievementCard';
import {
  ACHIEVEMENTS,
  type AchievementCategory,
} from '../../achievements/models/achievement.model';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import type { CharacterMastery } from '../models/progress.model';

export function ProgressScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const {
    currentStreak,
    bestStreak,
    totalQuestionsAnswered,
    totalCorrect,
    totalXp,
    kanaPracticedCount,
    kanjiPracticedCount,
    vocabPracticedCount,
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
    return getMasteryDistribution(selectedCategoryArg);
  }, [mastery, selectedCategoryArg, getMasteryDistribution]);

  const weakestChars = useMemo(() => {
    return getWeakestCharacters(selectedCategoryArg, 5);
  }, [mastery, selectedCategoryArg, getWeakestCharacters]);

  const strongestChars = useMemo(() => {
    return getStrongestCharacters(selectedCategoryArg, 5);
  }, [mastery, selectedCategoryArg, getStrongestCharacters]);

  const categoryBreakdowns = useMemo(() => {
    return [
      { name: 'Kana Dojo (仮名)', icon: 'あ', dist: getMasteryDistribution('kana'), route: '/(tabs)' },
      { name: 'Kanji Dojo (漢字)', icon: '漢', dist: getMasteryDistribution('kanji'), route: '/(tabs)/kanji' },
      { name: 'Vocab Dojo (語彙)', icon: '語', dist: getMasteryDistribution('vocab'), route: '/(tabs)/vocab' },
    ];
  }, [mastery, getMasteryDistribution]);

  const [selectedCategory, setSelectedCategory] = useState<
    AchievementCategory | 'all'
  >('all');
  const unlockedAchievements = useAchievementStore(state => state.unlocked);

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'all') return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

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
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <Text style={[styles.title, { color: theme.textPrimary }]}>Progress & Mastery</Text>
        <StreakBadge streak={currentStreak} />
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
          <View style={styles.filterPillRow}>
            {(['all', 'kana', 'kanji', 'vocab'] as const).map(cat => {
              const isSelected = masteryCategory === cat;
              return (
                <Pressable
                  key={cat}
                  onPress={() => setMasteryCategory(cat)}
                  style={[
                    styles.filterPill,
                    { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                    isSelected && { backgroundColor: theme.primary, borderColor: theme.primary },
                  ]}
                >
                  <Text
                    style={[
                      styles.filterPillText,
                      { color: theme.textSecondary },
                      isSelected && { color: theme.textOnPrimary },
                    ]}
                  >
                    {cat.toUpperCase()}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}

        {/* Content based on masteryView */}
        {masteryView === 'weakness' && (
          <View style={styles.meterList}>
            {weakestChars.length > 0 ? (
              weakestChars.map(item => {
                const barColor =
                  item.accuracy >= 70
                    ? theme.accent
                    : theme.error;
                return (
                  <Pressable
                    key={`${item.category}-${item.character}`}
                    style={[styles.meterCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
                    onPress={() => {
                      if (item.category === 'kana') router.push('/(tabs)');
                      else if (item.category === 'kanji') router.push('/(tabs)/kanji');
                      else if (item.category === 'vocab') router.push('/(tabs)/vocab');
                    }}
                  >
                    <View style={styles.meterHeader}>
                      <View style={[styles.meterCharBadge, styles.meterCharBadgeWeak]}>
                        <Text style={[styles.meterCharText, { color: theme.textPrimary }]}>{item.character}</Text>
                      </View>
                      <View style={styles.meterMeta}>
                        <View style={styles.meterTagRow}>
                          <Text style={[styles.meterCategoryTag, { color: theme.textMuted }]}>
                            {item.category.toUpperCase()}
                          </Text>
                          <Text style={[styles.meterPracticeHint, { color: theme.primary }]}>
                            • TAP TO DRILL
                          </Text>
                        </View>
                        <Text style={[styles.meterAttemptsText, { color: theme.textSecondary }]}>
                          {item.correct}/{item.total} correct
                        </Text>
                      </View>
                      <View style={[styles.meterStatusBadge, styles.meterStatusBadgeWeak]}>
                        <Text style={[styles.meterStatusText, { color: theme.error }]}>
                          {item.accuracy}% Acc
                        </Text>
                      </View>
                    </View>
                    {/* Horizontal Visual Meter */}
                    <View style={[styles.meterTrack, { backgroundColor: theme.borderSubtle }]}>
                      <View
                        style={[
                          styles.meterFill,
                          {
                            width: `${Math.max(item.accuracy, 6)}%`,
                            backgroundColor: barColor,
                          },
                        ]}
                      />
                    </View>
                  </Pressable>
                );
              })
            ) : (
              <View style={[styles.emptyMasteryCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Text style={[styles.emptyMasteryTitle, { color: theme.textPrimary }]}>🎯 No Weaknesses Found</Text>
                <Text style={[styles.emptyMasterySubtitle, { color: theme.textSecondary }]}>
                  Great work! Keep practicing drills in the Dojos to track tricky characters.
                </Text>
              </View>
            )}
          </View>
        )}

        {masteryView === 'strength' && (
          <View style={styles.meterList}>
            {strongestChars.length > 0 ? (
              strongestChars.map(item => {
                const isMastered = item.masteryLevel === 'mastered';
                return (
                  <Pressable
                    key={`${item.category}-${item.character}`}
                    style={[styles.meterCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
                    onPress={() => {
                      if (item.category === 'kana') router.push('/(tabs)');
                      else if (item.category === 'kanji') router.push('/(tabs)/kanji');
                      else if (item.category === 'vocab') router.push('/(tabs)/vocab');
                    }}
                  >
                    <View style={styles.meterHeader}>
                      <View style={[styles.meterCharBadge, styles.meterCharBadgeStrong]}>
                        <Text style={[styles.meterCharText, { color: theme.textPrimary }]}>{item.character}</Text>
                      </View>
                      <View style={styles.meterMeta}>
                        <View style={styles.meterTagRow}>
                          <Text style={[styles.meterCategoryTag, { color: theme.textMuted }]}>
                            {item.category.toUpperCase()}
                          </Text>
                          <Text style={[styles.meterPracticeHint, { color: theme.primary }]}>
                            • {isMastered ? '👑 MASTERED' : '⭐ STRONG'}
                          </Text>
                        </View>
                        <Text style={[styles.meterAttemptsText, { color: theme.textSecondary }]}>
                          {item.correct}/{item.total} correct
                        </Text>
                      </View>
                      <View style={[styles.meterStatusBadge, styles.meterStatusBadgeStrong]}>
                        <Text style={[styles.meterStatusText, { color: theme.success }]}>
                          {item.accuracy}% Acc
                        </Text>
                      </View>
                    </View>
                    {/* Horizontal Visual Meter */}
                    <View style={[styles.meterTrack, { backgroundColor: theme.borderSubtle }]}>
                      <View
                        style={[
                          styles.meterFill,
                          {
                            width: `${Math.max(item.accuracy, 6)}%`,
                            backgroundColor: theme.success,
                          },
                        ]}
                      />
                    </View>
                  </Pressable>
                );
              })
            ) : (
              <View style={[styles.emptyMasteryCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Text style={[styles.emptyMasteryTitle, { color: theme.textPrimary }]}>🌟 No Strengths Logged Yet</Text>
                <Text style={[styles.emptyMasterySubtitle, { color: theme.textSecondary }]}>
                  Complete more Dojo sessions with high accuracy to crown your strongest characters!
                </Text>
              </View>
            )}
          </View>
        )}

        {masteryView === 'breakdown' && (
          <View style={styles.meterList}>
            {categoryBreakdowns.map(cat => (
              <Pressable
                key={cat.name}
                style={[styles.breakdownCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
                onPress={() => router.push(cat.route as any)}
              >
                <View style={styles.breakdownHeader}>
                  <View style={[styles.breakdownIconBadge, { backgroundColor: theme.primaryLight }]}>
                    <Text style={[styles.breakdownIconText, { color: theme.primary }]}>{cat.icon}</Text>
                  </View>
                  <View style={styles.breakdownTitleCol}>
                    <Text style={[styles.breakdownName, { color: theme.textPrimary }]}>{cat.name}</Text>
                    <Text style={[styles.breakdownSub, { color: theme.textSecondary }]}>
                      {cat.dist.total} tracked characters • Tap to train
                    </Text>
                  </View>
                  <Text style={[styles.breakdownChevron, { color: theme.textMuted }]}>›</Text>
                </View>

                {/* Ratio bar */}
                <View style={[styles.miniProgressBar, { backgroundColor: theme.border }]}>
                  {cat.dist.total > 0 ? (
                    <>
                      <View
                        style={{
                          flex: cat.dist.mastered,
                          backgroundColor: theme.success,
                        }}
                      />
                      <View
                        style={{
                          flex: cat.dist.learning,
                          backgroundColor: theme.accent,
                        }}
                      />
                      <View
                        style={{
                          flex: cat.dist.needsPractice,
                          backgroundColor: theme.error,
                        }}
                      />
                    </>
                  ) : (
                    <View style={{ flex: 1, backgroundColor: theme.border }} />
                  )}
                </View>

                <View style={styles.breakdownLegend}>
                  <Text style={[styles.legendText, { color: theme.textSecondary }]}>🟢 {cat.dist.mastered} Mastered</Text>
                  <Text style={[styles.legendText, { color: theme.textSecondary }]}>🟡 {cat.dist.learning} Learning</Text>
                  <Text style={[styles.legendText, { color: theme.textSecondary }]}>🔴 {cat.dist.needsPractice} Needs Work</Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}

        {/* Dojo Breakdown */}
        <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>Dojo Drills Completed</Text>
        <View style={styles.grid}>
          <Card style={styles.dojoCard}>
            <Text style={[styles.dojoIcon, { color: theme.primary }]}>あ</Text>
            <Text style={[styles.dojoNumber, { color: theme.textPrimary }]}>{kanaPracticedCount}</Text>
            <Text style={[styles.dojoName, { color: theme.textSecondary }]}>Kana Dojo</Text>
          </Card>
          <Card style={styles.dojoCard}>
            <Text style={[styles.dojoIcon, { color: theme.primary }]}>漢</Text>
            <Text style={[styles.dojoNumber, { color: theme.textPrimary }]}>{kanjiPracticedCount}</Text>
            <Text style={[styles.dojoName, { color: theme.textSecondary }]}>Kanji Dojo</Text>
          </Card>
          <Card style={styles.dojoCard}>
            <Text style={[styles.dojoIcon, { color: theme.primary }]}>語</Text>
            <Text style={[styles.dojoNumber, { color: theme.textPrimary }]}>{vocabPracticedCount}</Text>
            <Text style={[styles.dojoName, { color: theme.textSecondary }]}>Vocab Dojo</Text>
          </Card>
        </View>

        {/* Achievements Showcase */}
        <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>Achievements & Badges</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {(['all', 'streak', 'milestones', 'mastery', 'dojos', 'challenges'] as const).map(
            cat => {
              const isSelected = selectedCategory === cat;
              return (
                <Pressable
                  key={cat}
                  onPress={() => setSelectedCategory(cat)}
                  style={[
                    styles.categoryTab,
                    { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                    isSelected && { backgroundColor: theme.primary, borderColor: theme.primary },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryTabText,
                      { color: theme.textSecondary },
                      isSelected && { color: theme.textOnPrimary },
                    ]}
                  >
                    {cat.toUpperCase()}
                  </Text>
                </Pressable>
              );
            },
          )}
        </ScrollView>

        <View style={styles.achievementList}>
          {filteredAchievements.map(ach => (
            <AchievementCard
              key={ach.id}
              achievement={ach}
              isUnlocked={Boolean(unlockedAchievements[ach.id])}
              unlockedAt={unlockedAchievements[ach.id]?.unlockedAt}
            />
          ))}
        </View>

        {/* Action button */}
        <Pressable
          onPress={handleReset}
          style={[styles.resetButton, { backgroundColor: theme.surface, borderColor: theme.error }]}
        >
          <Text style={[styles.resetText, { color: theme.error }]}>Reset All Stats</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  heroCard: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: 'center',
    ...shadows.md,
  },
  heroXpTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroXpNumber: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  heroStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: radii.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  statCol: {
    alignItems: 'center',
    flex: 1,
  },
  statNum: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 11,
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 24,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: spacing.sm,
  },
  masteryCard: {
    borderRadius: radii.lg,
    padding: spacing.lg,
    borderWidth: 1,
    gap: spacing.md,
    ...shadows.sm,
  },
  masteryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  masteryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radii.full,
  },
  masteryValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  masteryLabel: {
    fontSize: 12,
  },
  progressBar: {
    height: 8,
    borderRadius: radii.full,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  segmentedRow: {
    flexDirection: 'row',
    borderRadius: radii.lg,
    padding: 3,
    gap: 4,
  },
  segmentedTab: {
    flex: 1,
    paddingVertical: spacing.xs + 2,
    alignItems: 'center',
    borderRadius: radii.md,
  },
  segmentedTabActive: {
    ...shadows.sm,
  },
  segmentedTabText: {
    fontSize: 12,
    fontWeight: '600',
  },
  segmentedTabTextActive: {
    fontWeight: '700',
  },
  filterPillRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  filterPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  filterPillActive: {},
  filterPillText: {
    fontSize: 11,
    fontWeight: '700',
  },
  filterPillTextActive: {},
  meterList: {
    gap: spacing.sm,
  },
  meterCard: {
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    gap: spacing.sm,
    ...shadows.sm,
  },
  meterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  meterCharBadge: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meterCharBadgeWeak: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  meterCharBadgeStrong: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  meterCharText: {
    fontSize: 22,
    fontWeight: '700',
  },
  meterMeta: {
    flex: 1,
  },
  meterTagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  meterCategoryTag: {
    fontSize: 11,
    fontWeight: '700',
  },
  meterPracticeHint: {
    fontSize: 10,
    fontWeight: '700',
  },
  meterAttemptsText: {
    fontSize: 12,
    marginTop: 2,
  },
  meterStatusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  meterStatusBadgeWeak: {
    backgroundColor: '#FEE2E2',
  },
  meterStatusBadgeStrong: {
    backgroundColor: '#D1FAE5',
  },
  meterStatusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  meterStatusTextWeak: {},
  meterStatusTextStrong: {},
  meterTrack: {
    height: 6,
    borderRadius: radii.full,
    overflow: 'hidden',
  },
  meterFill: {
    height: '100%',
    borderRadius: radii.full,
  },
  emptyMasteryCard: {
    borderRadius: radii.lg,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    gap: 4,
  },
  emptyMasteryTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  emptyMasterySubtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 2,
  },
  breakdownCard: {
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    gap: spacing.sm,
    ...shadows.sm,
  },
  breakdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  breakdownIconBadge: {
    width: 38,
    height: 38,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  breakdownIconText: {
    fontSize: 18,
    fontWeight: '700',
  },
  breakdownTitleCol: {
    flex: 1,
  },
  breakdownName: {
    fontSize: 15,
    fontWeight: '700',
  },
  breakdownSub: {
    fontSize: 11,
    marginTop: 1,
  },
  breakdownChevron: {
    fontSize: 20,
  },
  miniProgressBar: {
    height: 6,
    borderRadius: radii.full,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  breakdownLegend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2,
  },
  legendText: {
    fontSize: 11,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  dojoCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.sm,
    gap: spacing.xs,
  },
  dojoIcon: {
    fontSize: 24,
    fontWeight: '700',
  },
  dojoNumber: {
    fontSize: 20,
    fontWeight: '700',
  },
  dojoName: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  resetButton: {
    marginTop: spacing.sm,
    borderWidth: 1,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  resetText: {
    fontSize: 14,
    fontWeight: '600',
  },
  categoryScroll: {
    gap: spacing.xs,
    paddingBottom: spacing.sm,
  },
  categoryTab: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  categoryTabActive: {},
  categoryTabText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  categoryTabTextActive: {},
  achievementList: {
    marginTop: spacing.xs,
    marginBottom: spacing.base,
  },
});
