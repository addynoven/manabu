import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { spacing, useAppTheme } from '../../../core/theme';
import type { DojoLesson } from '../models/dojo.model';
import { DojoLessonCard } from './DojoLessonCard';
import { useDojoStore } from '../store/useDojoStore';

interface DojoTimelineRailProps {
  lessons: DojoLesson[];
  onSelectLesson: (lesson: DojoLesson) => void;
}

export function DojoTimelineRail({ lessons, onSelectLesson }: DojoTimelineRailProps) {
  const { colors: theme } = useAppTheme();
  const completedLessons = useDojoStore(state => state.completedLessons);
  const isLessonLocked = useDojoStore(state => state.isLessonLocked);

  return (
    <View style={styles.container}>
      {lessons.map((lesson, index) => {
        const isCompleted = !!completedLessons[lesson.id];
        const lockStatus = isLessonLocked(lesson.id);
        const isLocked = lockStatus.locked && !isCompleted;
        const isActive = !isLocked && !isCompleted;

        // Is this the first lesson of a new day?
        const isFirstOfDay = index === 0 || lessons[index - 1].dayNumber !== lesson.dayNumber;

        // Node badge label:
        // If completed: show 'A' grade (Teuida hallmark)
        // If first of day: show 'Day 0X'
        // If locked: show 'Day 0X' or lock
        const formatDay = (d: number) => `Day\n0${d}`;

        return (
          <View key={lesson.id} style={styles.rowWrapper}>
            {/* Section Header if defined */}
            {lesson.sectionTitle && (
              <View style={styles.sectionHeaderRow}>
                <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
                  {lesson.sectionTitle}
                </Text>
              </View>
            )}

            <View style={styles.itemRow}>
              {/* Left Timeline Rail Column */}
              <View style={styles.railColumn}>
                {/* Connecting Line Segment Top */}
                {index > 0 && (
                  <View
                    style={[
                      styles.verticalLineTop,
                      {
                        backgroundColor: isCompleted
                          ? '#10B981'
                          : theme.borderSubtle,
                      },
                    ]}
                  />
                )}

                {/* Connecting Line Segment Bottom */}
                {index < lessons.length - 1 && (
                  <View
                    style={[
                      styles.verticalLineBottom,
                      {
                        backgroundColor:
                          isCompleted && !!completedLessons[lessons[index + 1]?.id]
                            ? '#10B981'
                            : theme.borderSubtle,
                      },
                    ]}
                  />
                )}

                {/* Timeline Circle Badge */}
                <View
                  style={[
                    styles.nodeCircle,
                    isCompleted
                      ? styles.nodeCompleted
                      : isActive
                      ? [styles.nodeActive, { borderColor: '#10B981' }]
                      : [styles.nodeLocked, { backgroundColor: theme.surfaceSubtle, borderColor: theme.borderSubtle }],
                  ]}
                >
                  {isCompleted ? (
                    <Text style={styles.nodeTextCompleted}>A</Text>
                  ) : isFirstOfDay ? (
                    <Text
                      style={[
                        styles.nodeTextDay,
                        { color: isActive ? '#10B981' : theme.textSecondary },
                      ]}
                    >
                      {formatDay(lesson.dayNumber)}
                    </Text>
                  ) : (
                    <Text
                      style={[
                        styles.nodeTextMuted,
                        { color: isActive ? '#10B981' : theme.textSecondary },
                      ]}
                    >
                      {isActive ? 'A' : `D0${lesson.dayNumber}`}
                    </Text>
                  )}
                </View>
              </View>

              {/* Right Card Component */}
              <DojoLessonCard
                lesson={lesson}
                isActive={isActive}
                onPress={onSelectLesson}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.xxl,
  },
  rowWrapper: {
    marginBottom: spacing.md,
  },
  sectionHeaderRow: {
    paddingLeft: 60,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  railColumn: {
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    minHeight: 80,
  },
  verticalLineTop: {
    position: 'absolute',
    top: 0,
    bottom: '50%',
    width: 3,
    zIndex: 1,
  },
  verticalLineBottom: {
    position: 'absolute',
    top: '50%',
    bottom: 0,
    width: 3,
    zIndex: 1,
  },
  nodeCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    borderWidth: 2,
  },
  nodeCompleted: {
    backgroundColor: '#10B981',
    borderColor: '#059669',
  },
  nodeActive: {
    backgroundColor: '#ECFDF5',
    borderWidth: 2.5,
  },
  nodeLocked: {
    borderWidth: 1.5,
  },
  nodeTextCompleted: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  nodeTextDay: {
    fontSize: 9,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 11,
  },
  nodeTextMuted: {
    fontSize: 11,
    fontWeight: '800',
  },
});
