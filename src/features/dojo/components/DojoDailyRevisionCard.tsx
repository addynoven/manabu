import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { RotateCcw, Check, Lock, Sparkles } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, useAppTheme } from '../../../core/theme';

interface DojoDailyRevisionCardProps {
  unitId: string;
  dayNumber: number;
  isUnlocked: boolean; // previous day was completed
  isPassed: boolean;
  onPress: () => void;
}

export function DojoDailyRevisionCard({
  dayNumber,
  isUnlocked,
  isPassed,
  onPress,
}: DojoDailyRevisionCardProps) {
  const { colors: theme } = useAppTheme();

  const handlePress = () => {
    if (!isUnlocked) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onPress();
  };

  const isActive = isUnlocked && !isPassed;

  return (
    <Pressable
      onPress={handlePress}
      android_ripple={{
        color: 'rgba(255, 255, 255, 0.08)',
        foreground: true,
      }}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: isActive ? theme.surface : isPassed ? theme.surface : theme.surfaceSubtle,
          borderColor: isActive
            ? 'rgba(139, 92, 246, 0.45)'
            : isPassed
            ? 'rgba(16, 185, 129, 0.25)'
            : 'rgba(255, 255, 255, 0.05)',
          borderWidth: 1,
          borderBottomWidth: pressed && isUnlocked ? 1 : isActive ? 3 : 2,
          borderBottomColor: isActive
            ? '#7C3AED'
            : isPassed
            ? '#059669'
            : 'transparent',
          opacity: !isUnlocked ? 0.6 : 1,
          transform: [
            { translateY: pressed && isUnlocked ? 2 : 0 },
            { scale: pressed && isUnlocked ? 0.985 : 1 },
          ],
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Day ${dayNumber} Daily Revision Checkpoint`}
    >
      {/* Left Icon Badge */}
      <View
        style={[
          styles.avatarCircle,
          {
            backgroundColor: isPassed
              ? '#D1FAE5'
              : isActive
              ? '#EDE9FE'
              : theme.surfaceSubtle,
          },
        ]}
      >
        {isPassed ? (
          <Check size={22} color="#059669" strokeWidth={2.5} />
        ) : isActive ? (
          <RotateCcw size={22} color="#7C3AED" strokeWidth={2.5} />
        ) : (
          <Sparkles size={20} color={theme.textMuted} />
        )}
      </View>

      {/* Main Content */}
      <View style={styles.textContainer}>
        <View style={styles.categoryRow}>
          <Text
            style={[
              styles.categoryTag,
              { color: isActive ? '#8B5CF6' : isPassed ? '#10B981' : theme.textSecondary },
            ]}
          >
            {`DAILY REVISION • DAY 0${dayNumber}`}
          </Text>

          {/* Status Badge */}
          {isPassed && (
            <View style={[styles.statusBadge, { backgroundColor: '#DEF7EC' }]}>
              <Check size={12} color="#0E9F6E" />
              <Text style={[styles.statusText, { color: '#0E9F6E' }]}>Cleared</Text>
            </View>
          )}

          {isActive && (
            <View style={[styles.statusBadge, { backgroundColor: 'rgba(139, 92, 246, 0.15)' }]}>
              <View style={[styles.activeDot, { backgroundColor: '#8B5CF6' }]} />
              <Text style={[styles.statusText, { color: '#8B5CF6' }]}>Start Test</Text>
            </View>
          )}

          {!isUnlocked && (
            <Lock size={14} color={theme.textMuted} />
          )}
        </View>

        <Text
          style={[styles.title, { color: !isUnlocked ? theme.textSecondary : theme.textPrimary }]}
          numberOfLines={1}
        >
          {`Day 0${dayNumber} Cumulative Checkpoint`}
        </Text>

        <Text style={[styles.titleJp, { color: theme.textSecondary }]} numberOfLines={1}>
          総合復習 • Test everything learned up to Day {dayNumber}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
    borderRadius: radii.xl,
    gap: 12,
    elevation: 2,
    overflow: 'hidden',
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  categoryTag: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: radii.sm,
    gap: 4,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  titleJp: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
});
