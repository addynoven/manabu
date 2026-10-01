import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Lock, RotateCcw } from 'lucide-react-native';
import { spacing, useAppTheme } from '../../../core/theme';
import type { DojoLesson } from '../models/dojo.model';
import { DojoLessonCard } from './DojoLessonCard';
import { DojoDailyRevisionCard } from './DojoDailyRevisionCard';
import { useDojoStore } from '../store/useDojoStore';

interface DojoTimelineRailProps {
  lessons: DojoLesson[];
  onSelectLesson: (lesson: DojoLesson) => void;
  onSelectDailyRevision: (unitId: string, dayNumber: number) => void;
}

export function DojoTimelineRail({
  lessons,
  onSelectLesson,
  onSelectDailyRevision,
}: DojoTimelineRailProps) {
  const { colors: theme } = useAppTheme();
  const completedLessons = useDojoStore(state => state.completedLessons);
  const passedDailyRevisions = useDojoStore(state => state.passedDailyRevisions);
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
        const prevLesson = index > 0 ? lessons[index - 1] : null;
        const isPrevDayComplete = prevLesson ? !!completedLessons[prevLesson.id] : false;
        const dailyRevisionId = `${lesson.unitId}_day_${lesson.dayNumber}`;
        const isDailyRevisionPassed = !!passedDailyRevisions[dailyRevisionId];

        // Node badge label:
        // If completed: show 'A' grade (Teuida hallmark)
        // If first of day: show 'Day 0X'
        // If locked: show 'Day 0X' or lock
        const formatDay = (d: number) => `Day\n0${d}`;

        return (
          <React.Fragment key={lesson.id}>
            {/* Daily Revision Checkpoint Node between days */}
            {isFirstOfDay && lesson.dayNumber > 1 && (
              <View style={styles.rowWrapper}>
                <View style={styles.itemRow}>
                  {/* Left Timeline Rail Column */}
                  <View style={styles.railColumn}>
                    {/* Connecting Line Segment Top from previous day */}
                    <View
                      style={[
                        styles.verticalLineTop,
                        {
                          backgroundColor: isPrevDayComplete
                            ? '#10B981'
                            : theme.borderSubtle,
                        },
                      ]}
                    />

                    {/* Connecting Line Segment Bottom toward this day's lessons */}
                    <View
                      style={[
                        styles.verticalLineBottom,
                        {
                          backgroundColor: isDailyRevisionPassed
                            ? '#10B981'
                            : theme.borderSubtle,
                        },
                      ]}
                    />

                    {/* Timeline Circle Badge */}
                    <View
                      style={[
                        styles.nodeCircle,
                        isDailyRevisionPassed
                          ? styles.nodeCompleted
                          : isPrevDayComplete
                          ? [
                              styles.nodeActive,
                              {
                                backgroundColor: '#7C3AED',
                                borderColor: '#A78BFA',
                              },
                            ]
                          : [
                              styles.nodeLocked,
                              {
                                backgroundColor: theme.surfaceSubtle,
                                borderColor: 'rgba(255, 255, 255, 0.08)',
                              },
                            ],
                      ]}
                    >
                      {isDailyRevisionPassed ? (
                        <Text style={styles.nodeTextCompleted}>A</Text>
                      ) : isPrevDayComplete ? (
                        <RotateCcw size={18} color="#FFFFFF" strokeWidth={2.5} />
                      ) : (
                        <Lock size={14} color={theme.textMuted} />
                      )}
                    </View>
                  </View>

                  {/* Right Card Component */}
                  <DojoDailyRevisionCard
                    unitId={lesson.unitId}
                    dayNumber={lesson.dayNumber}
                    isUnlocked={isPrevDayComplete}
                    isPassed={isDailyRevisionPassed}
                    onPress={() => onSelectDailyRevision(lesson.unitId, lesson.dayNumber)}
                  />
                </View>
              </View>
            )}

            <View style={styles.rowWrapper}>
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
                          backgroundColor: isFirstOfDay && lesson.dayNumber > 1
                            ? isDailyRevisionPassed
                              ? '#10B981'
                              : theme.borderSubtle
                            : isCompleted
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
                      ? styles.nodeActive
                      : [
                          styles.nodeLocked,
                          {
                            backgroundColor: theme.surfaceSubtle,
                            borderColor: 'rgba(255, 255, 255, 0.08)',
                          },
                        ],
                  ]}
                >
                  {isCompleted ? (
                    <Text style={styles.nodeTextCompleted}>A</Text>
                  ) : isActive ? (
                    <Text style={[styles.nodeTextMuted, { color: '#34D399', fontSize: 16 }]}>
                      ▶
                    </Text>
                  ) : isFirstOfDay ? (
                    <Text
                      style={[
                        styles.nodeTextDay,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {formatDay(lesson.dayNumber)}
                    </Text>
                  ) : (
                    <Lock size={14} color={theme.textMuted} />
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
        </React.Fragment>
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
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
    width: 4,
    borderRadius: 2,
    zIndex: 1,
  },
  verticalLineBottom: {
    position: 'absolute',
    top: '50%',
    bottom: 0,
    width: 4,
    borderRadius: 2,
    zIndex: 1,
  },
  nodeCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    borderWidth: 2,
    elevation: 3,
  },
  nodeCompleted: {
    backgroundColor: '#10B981',
    borderColor: '#059669',
  },
  nodeActive: {
    backgroundColor: '#064E3B',
    borderColor: '#10B981',
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
    fontSize: 12,
    fontWeight: '800',
  },
});
