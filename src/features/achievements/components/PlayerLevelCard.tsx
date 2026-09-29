import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { ACHIEVEMENTS } from '../models/achievement.model';
import { useAchievementStore } from '../store/useAchievementStore';

export function PlayerLevelCard() {
  const { colors: theme } = useAppTheme();
  const { getPlayerLevelInfo, getTotalPoints, unlocked } = useAchievementStore();
  const levelInfo = getPlayerLevelInfo();
  const totalPoints = getTotalPoints();
  const unlockedCount = Object.keys(unlocked).length;

  return (
    <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
      <View style={styles.topRow}>
        <View style={[styles.levelBadge, { backgroundColor: theme.primary }]}>
          <Text style={[styles.levelNumber, { color: theme.textOnPrimary }]}>LV {levelInfo.level}</Text>
        </View>

        <View style={styles.headerInfo}>
          <Text style={[styles.titleText, { color: theme.textPrimary }]}>{levelInfo.title}</Text>
          <Text style={[styles.pointsText, { color: theme.accent }]}>{totalPoints} Achievement Points</Text>
        </View>

        <View style={styles.badgeCounter}>
          <Text style={[styles.badgeCountNumber, { color: theme.textPrimary }]}>
            {unlockedCount}/{ACHIEVEMENTS.length}
          </Text>
          <Text style={[styles.badgeCountLabel, { color: theme.textSecondary }]}>Badges</Text>
        </View>
      </View>

      {/* Progress Bar to next level */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressTrack, { backgroundColor: theme.surfaceSubtle }]}>
          <View
            style={[
              styles.progressFill,
              { width: `${levelInfo.progressPercent}%`, backgroundColor: theme.primary },
            ]}
          />
        </View>
        <View style={styles.progressMeta}>
          <Text style={[styles.progressText, { color: theme.textSecondary }]}>
            {levelInfo.progressPercent}% to Level {levelInfo.level + 1}
          </Text>
          <Text style={[styles.progressNextText, { color: theme.textSecondary }]}>
            {totalPoints} / {levelInfo.nextLevelPoints} pts
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    marginBottom: spacing.base,
    ...shadows.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  levelBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  levelNumber: {
    fontSize: 14,
    fontWeight: '900',
  },
  headerInfo: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '800',
  },
  pointsText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  badgeCounter: {
    alignItems: 'flex-end',
  },
  badgeCountNumber: {
    fontSize: 16,
    fontWeight: '800',
  },
  badgeCountLabel: {
    fontSize: 11,
  },
  progressContainer: {
    marginTop: spacing.md,
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
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  progressText: {
    fontSize: 11,
    fontWeight: '700',
  },
  progressNextText: {
    fontSize: 11,
  },
});
