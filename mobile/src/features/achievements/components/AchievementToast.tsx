import React, { useEffect } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { radii, shadows, spacing } from '../../../core/theme';
import { useAchievementStore } from '../store/useAchievementStore';

export function AchievementToast() {
  const insets = useSafeAreaInsets();
  const currentAchievement = useAchievementStore(state => state.queue[0]);
  const popToast = useAchievementStore(state => state.popToast);

  useEffect(() => {
    if (!currentAchievement) return;

    const timer = setTimeout(() => {
      popToast();
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentAchievement, popToast]);

  if (!currentAchievement) return null;

  return (
    <View
      style={[
        styles.toastWrapper,
        { top: insets.top + spacing.xs },
      ]}
      pointerEvents="box-none"
    >
      <Pressable
        style={styles.toastCard}
        onPress={popToast}
      >
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>{currentAchievement.icon}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.subtitle}>🏆 ACHIEVEMENT UNLOCKED</Text>
          <Text style={styles.title}>{currentAchievement.title}</Text>
          <Text style={styles.desc} numberOfLines={1}>
            {currentAchievement.description}
          </Text>
        </View>

        <View style={styles.pointsBadge}>
          <Text style={styles.pointsText}>+{currentAchievement.points} pts</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    left: spacing.base,
    right: spacing.base,
    zIndex: 9999,
  },
  toastCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: radii.xl,
    padding: spacing.sm + 2,
    borderWidth: 1,
    borderColor: '#334155',
    ...shadows.md,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  iconText: {
    fontSize: 22,
  },
  content: {
    flex: 1,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#F59E0B',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F8FAFC',
    marginTop: 1,
  },
  desc: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 1,
  },
  pointsBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.4)',
    marginLeft: spacing.xs,
  },
  pointsText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FBBF24',
  },
});
