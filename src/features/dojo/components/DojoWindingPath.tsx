import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Flag, CheckCircle2, Lock } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { CURATED_DOJO_UNITS } from '../data/curatedUnits';
import type { DojoLesson, DojoUnit } from '../models/dojo.model';
import { DojoPathNode } from './DojoPathNode';
import { useDojoStore } from '../store/useDojoStore';

interface DojoWindingPathProps {
  onSelectLesson: (lesson: DojoLesson) => void;
  onSelectRevisionGate: (unit: DojoUnit) => void;
}

export function DojoWindingPath({
  onSelectLesson,
  onSelectRevisionGate,
}: DojoWindingPathProps) {
  const { colors: theme } = useAppTheme();
  const passedRevisionGates = useDojoStore(state => state.passedRevisionGates);
  const completedLessons = useDojoStore(state => state.completedLessons);

  const POSITIONS: ('center' | 'left' | 'right')[] = [
    'center',
    'left',
    'center',
    'right',
  ];

  return (
    <View style={styles.container}>
      {CURATED_DOJO_UNITS.map((unit, unitIdx) => {
        const isGatePassed = !!passedRevisionGates[unit.id];
        // All lessons in unit completed?
        const allLessonsCompleted = unit.lessons.every(l => !!completedLessons[l.id]);

        return (
          <View key={unit.id} style={styles.unitSection}>
            {/* Unit Banner */}
            <View
              style={[
                styles.unitBanner,
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <View style={[styles.unitIconCircle, { backgroundColor: unit.themeColor + '25' }]}>
                <Text style={styles.unitIconText}>{unit.icon}</Text>
              </View>
              <View style={styles.unitBannerText}>
                <Text style={[styles.unitNumber, { color: unit.themeColor }]}>
                  UNIT {unit.unitNumber}
                </Text>
                <Text style={[styles.unitTitle, { color: theme.textPrimary }]}>
                  {unit.title}
                </Text>
                <Text style={[styles.unitSub, { color: theme.textSecondary }]}>
                  {unit.titleJp} • {unit.description}
                </Text>
              </View>
            </View>

            {/* Path Nodes */}
            <View style={styles.nodesContainer}>
              {unit.lessons.map((lesson, lessonIdx) => {
                const pos = POSITIONS[lessonIdx % POSITIONS.length];
                return (
                  <View key={lesson.id} style={styles.nodeWithConnector}>
                    {/* Dashed connector line */}
                    {lessonIdx > 0 && (
                      <View style={[styles.dashedConnector, { borderColor: theme.border }]} />
                    )}
                    <DojoPathNode
                      lesson={lesson}
                      position={pos}
                      onPress={onSelectLesson}
                    />
                  </View>
                );
              })}

              {/* Revision Checkpoint Gate Node at Unit End */}
              <View style={styles.gateWrapper}>
                <View style={[styles.dashedConnector, { borderColor: theme.border }]} />
                <Pressable
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
                    onSelectRevisionGate(unit);
                  }}
                  style={[
                    styles.gateNode,
                    isGatePassed && [styles.gatePassed, { backgroundColor: '#10B981', borderColor: '#A7F3D0' }],
                    !isGatePassed && allLessonsCompleted && [styles.gateReady, { backgroundColor: '#F59E0B', borderColor: '#FDE68A' }],
                    !isGatePassed && !allLessonsCompleted && [styles.gateLocked, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }],
                  ]}
                  accessibilityLabel={`${unit.title} Revision Checkpoint`}
                >
                  {isGatePassed ? (
                    <CheckCircle2 size={30} color="#FFFFFF" strokeWidth={2.5} />
                  ) : allLessonsCompleted ? (
                    <Flag size={28} color="#FFFFFF" />
                  ) : (
                    <Lock size={26} color={theme.textMuted} />
                  )}
                </Pressable>

                <View style={styles.gateTextContainer}>
                  <Text style={[styles.gateTitle, { color: theme.textPrimary }]}>
                    {unit.revisionGate.title}
                  </Text>
                  <Text style={[styles.gateSub, { color: theme.textSecondary }]}>
                    {isGatePassed
                      ? '✓ Gate Cleared (Next Unit Unlocked)'
                      : allLessonsCompleted
                      ? '⚡ Ready: Pass test to advance'
                      : 'Complete all lessons to unlock test'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xxl,
  },
  unitSection: {
    marginBottom: spacing.xl,
  },
  unitBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radii.xl,
    marginHorizontal: spacing.base,
    marginBottom: spacing.md,
    borderWidth: 1,
    gap: spacing.md,
    ...shadows.sm,
  },
  unitIconCircle: {
    width: 46,
    height: 46,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitIconText: {
    fontSize: 24,
  },
  unitBannerText: {
    flex: 1,
  },
  unitNumber: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  unitTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  unitSub: {
    fontSize: 12,
    marginTop: 2,
  },
  nodesContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  nodeWithConnector: {
    alignItems: 'center',
    width: '100%',
  },
  dashedConnector: {
    width: 2,
    height: 24,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    marginVertical: -6,
    zIndex: -1,
  },
  gateWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  gateNode: {
    width: 72,
    height: 72,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    ...shadows.md,
  },
  gatePassed: {},
  gateReady: {},
  gateLocked: {
    borderWidth: 2,
  },
  gateTextContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  gateTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  gateSub: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
});
