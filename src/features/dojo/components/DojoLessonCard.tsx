import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Lock, Clock, Check, HelpCircle, AlertCircle, Key, Trophy } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import type { DojoLesson } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';

interface DojoLessonCardProps {
  lesson: DojoLesson;
  isActive: boolean;
  onPress: (lesson: DojoLesson) => void;
}

export function DojoLessonCard({ lesson, isActive, onPress }: DojoLessonCardProps) {
  const { colors: theme } = useAppTheme();
  const isLessonLocked = useDojoStore(state => state.isLessonLocked);
  const completedLessons = useDojoStore(state => state.completedLessons);

  const lockStatus = isLessonLocked(lesson.id);
  const isCompleted = !!completedLessons[lesson.id];
  const isLocked = lockStatus.locked && !isCompleted;
  const isCooldown = lockStatus.reason === 'cooldown';

  const formatCooldown = (seconds?: number) => {
    if (!seconds) return '2h 0m';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m}m`;
  };

  const handlePress = () => {
    if (isLocked) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }
    Haptics.selectionAsync().catch(() => {});
    onPress(lesson);
  };

  // Render Category Icon / Avatar
  const renderIcon = () => {
    if (lesson.category === 'Unit Test') {
      return (
        <View style={[styles.avatarCircle, { backgroundColor: '#FDE68A' }]}>
          <Trophy size={24} color="#D97706" />
        </View>
      );
    }
    if (lesson.category === 'Practice') {
      return (
        <View style={[styles.avatarCircle, { backgroundColor: theme.surfaceSubtle }]}>
          <AlertCircle size={24} color={isLocked ? theme.textMuted : theme.primary} />
        </View>
      );
    }
    if (lesson.category === 'Review Quiz') {
      return (
        <View style={[styles.avatarCircle, { backgroundColor: theme.surfaceSubtle }]}>
          <HelpCircle size={24} color={isLocked ? theme.textMuted : '#3B82F6'} />
        </View>
      );
    }
    if (lesson.category === 'Vocabulary') {
      return (
        <View style={[styles.avatarCircle, { backgroundColor: '#E0E7FF' }]}>
          <Text style={[styles.avatarGlyph, { color: '#4338CA' }]}>
            {lesson.kanjiKeywords[0] || '語'}
          </Text>
        </View>
      );
    }
    // Default Expression: Japanese character avatar badge
    return (
      <View style={[styles.avatarCircle, { backgroundColor: '#D1FAE5' }]}>
        <Text style={[styles.avatarGlyph, { color: '#065F46' }]}>
          {lesson.titleJp.slice(0, 1)}
        </Text>
      </View>
    );
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.surface,
          borderColor: isActive
            ? '#10B981'
            : isCompleted
            ? theme.border
            : isLocked
            ? theme.borderSubtle
            : theme.border,
          borderWidth: isActive ? 2 : 1,
          opacity: isLocked && !isCooldown ? 0.65 : 1,
          transform: [{ scale: pressed && !isLocked ? 0.98 : 1 }],
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${lesson.title}, ${lesson.category}`}
    >
      {/* Left Avatar / Icon */}
      {renderIcon()}

      {/* Main Content */}
      <View style={styles.textContainer}>
        <View style={styles.categoryRow}>
          <Text style={[styles.categoryTag, { color: theme.textSecondary }]}>
            {lesson.category}
          </Text>

          {/* Right badge: Key / Lock / Cooldown / Checkmark */}
          {lesson.category === 'Unit Test' && isLocked && (
            <View style={styles.keyBadge}>
              <Key size={11} color="#0D9488" />
              <Text style={styles.keyText}>1</Text>
            </View>
          )}

          {isCompleted && (
            <View style={[styles.statusBadge, { backgroundColor: '#DEF7EC' }]}>
              <Check size={12} color="#0E9F6E" />
              <Text style={[styles.statusText, { color: '#0E9F6E' }]}>Done</Text>
            </View>
          )}

          {isCooldown && (
            <View style={[styles.statusBadge, { backgroundColor: '#FEF3C7' }]}>
              <Clock size={11} color="#D97706" />
              <Text style={[styles.statusText, { color: '#D97706' }]}>
                {formatCooldown(lockStatus.remainingSeconds)}
              </Text>
            </View>
          )}

          {isLocked && !isCooldown && lesson.category !== 'Unit Test' && (
            <Lock size={14} color={theme.textMuted} />
          )}
        </View>

        <Text
          style={[styles.title, { color: isLocked ? theme.textSecondary : theme.textPrimary }]}
          numberOfLines={1}
        >
          {lesson.title}
        </Text>

        <Text style={[styles.titleJp, { color: theme.textSecondary }]} numberOfLines={1}>
          {lesson.titleJp}
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
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: radii.xl,
    gap: 12,
    ...shadows.sm,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarGlyph: {
    fontSize: 20,
    fontWeight: '900',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  categoryTag: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 2,
  },
  titleJp: {
    fontSize: 12,
    fontWeight: '600',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.full,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '800',
  },
  keyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#CCFBF1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: '#99F6E4',
  },
  keyText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0F766E',
  },
});
