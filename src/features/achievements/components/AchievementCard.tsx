import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import {
  RARITY_COLORS,
  type Achievement,
} from '../models/achievement.model';

interface AchievementCardProps {
  achievement: Achievement;
  isUnlocked: boolean;
  unlockedAt?: string;
}

export function AchievementCard({
  achievement,
  isUnlocked,
  unlockedAt,
}: AchievementCardProps) {
  const { colors: theme } = useAppTheme();
  const rarityTheme = RARITY_COLORS[achievement.rarity];

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isUnlocked ? theme.surface : theme.surfaceSubtle,
          borderColor: theme.border,
        },
        !isUnlocked && styles.cardLocked,
      ]}
    >
      {/* Icon & Rarity Badge */}
      <View style={styles.topRow}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: isUnlocked ? rarityTheme.bg : theme.surfaceHighlight },
          ]}
        >
          <Text style={[styles.icon, !isUnlocked && styles.iconLocked]}>
            {isUnlocked ? achievement.icon : '🔒'}
          </Text>
        </View>

        <View style={styles.badgeGroup}>
          <View
            style={[
              styles.rarityBadge,
              {
                backgroundColor: rarityTheme.bg,
                borderColor: rarityTheme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.rarityText,
                { color: rarityTheme.text },
              ]}
            >
              {achievement.rarity.toUpperCase()}
            </Text>
          </View>

          <View style={styles.pointsBadge}>
            <Text style={styles.pointsText}>+{achievement.points} pts</Text>
          </View>
        </View>
      </View>

      {/* Title & Description */}
      <Text
        style={[
          styles.title,
          { color: isUnlocked ? theme.textPrimary : theme.textSecondary },
        ]}
      >
        {achievement.title}
      </Text>
      <Text style={[styles.description, { color: theme.textSecondary }]} numberOfLines={2}>
        {achievement.description}
      </Text>

      {/* Footer / Status */}
      <View style={[styles.footer, { borderTopColor: theme.borderSubtle }]}>
        {isUnlocked ? (
          <Text style={[styles.unlockedText, { color: theme.success }]}>
            ✓ Unlocked{' '}
            {unlockedAt ? new Date(unlockedAt).toLocaleDateString() : ''}
          </Text>
        ) : (
          <Text style={[styles.lockedText, { color: theme.textMuted }]}>Locked</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  cardLocked: {
    opacity: 0.75,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
  iconLocked: {
    fontSize: 20,
    opacity: 0.6,
  },
  badgeGroup: {
    flexDirection: 'row',
    gap: spacing.xs,
    alignItems: 'center',
  },
  rarityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
    borderWidth: 1,
  },
  rarityText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  pointsBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  pointsText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#B45309',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  titleLocked: {},
  description: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 18,
  },
  footer: {
    marginTop: spacing.sm,
    paddingTop: spacing.xs,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  unlockedText: {
    fontSize: 11,
    fontWeight: '700',
  },
  lockedText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
