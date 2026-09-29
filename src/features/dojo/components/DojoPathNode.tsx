import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Lock, Clock, Check, Star } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { shadows, useAppTheme } from '../../../core/theme';
import type { DojoLesson } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';

interface DojoPathNodeProps {
  lesson: DojoLesson;
  position: 'left' | 'center' | 'right';
  onPress: (lesson: DojoLesson) => void;
}

export function DojoPathNode({ lesson, position, onPress }: DojoPathNodeProps) {
  const { colors: theme } = useAppTheme();
  const isLessonLocked = useDojoStore(state => state.isLessonLocked);
  const completedLessons = useDojoStore(state => state.completedLessons);

  const lockStatus = isLessonLocked(lesson.id);
  const isCompleted = !!completedLessons[lesson.id];
  const isLocked = lockStatus.locked;
  const isCooldown = isLocked && lockStatus.reason === 'cooldown';

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onPress(lesson);
  };

  const formatRemaining = (seconds?: number) => {
    if (!seconds) return 'Locked';
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m`;
    return `${mins}m`;
  };

  const getAlignmentStyle = () => {
    switch (position) {
      case 'left':
        return { alignSelf: 'flex-start' as const, marginLeft: 24 };
      case 'right':
        return { alignSelf: 'flex-end' as const, marginRight: 24 };
      case 'center':
      default:
        return { alignSelf: 'center' as const };
    }
  };

  return (
    <View style={[styles.wrapper, getAlignmentStyle()]}>
      <Pressable
        onPress={handlePress}
        style={[
          styles.nodeCircle,
          isCompleted && [styles.nodeCompleted, { backgroundColor: '#F59E0B' }],
          !isLocked && !isCompleted && [styles.nodeActive, { backgroundColor: theme.primary, borderColor: theme.surface }],
          isLocked && [styles.nodeLocked, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }],
        ]}
        accessibilityLabel={`${lesson.titleJp} - ${lesson.title}`}
      >
        {isCompleted ? (
          <Check size={32} color="#FFFFFF" strokeWidth={3} />
        ) : isCooldown ? (
          <Clock size={28} color={theme.textMuted} />
        ) : isLocked ? (
          <Lock size={26} color={theme.textMuted} />
        ) : (
          <Star size={30} color="#FFFFFF" fill="#FFFFFF" />
        )}
      </Pressable>

      {/* Label and Status */}
      <View style={styles.textContainer}>
        <Text style={[styles.lessonTitle, { color: isLocked ? theme.textMuted : theme.textPrimary }]}>
          {lesson.title}
        </Text>
        <Text style={[styles.lessonSub, { color: theme.textSecondary }]}>
          {isCooldown
            ? `⏳ ${formatRemaining(lockStatus.remainingSeconds)}`
            : isCompleted
            ? '✓ Completed'
            : isLocked
            ? '🔒 Locked'
            : `${lesson.items.length} Drills`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: 14,
    width: 140,
  },
  nodeCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    ...shadows.md,
  },
  nodeCompleted: {
    borderColor: '#FDE68A',
  },
  nodeActive: {
    borderWidth: 4,
  },
  nodeLocked: {
    borderWidth: 2,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 6,
  },
  lessonTitle: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  lessonSub: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
    textAlign: 'center',
  },
});
