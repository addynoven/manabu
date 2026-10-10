import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Flag, CheckCircle2, X } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import type { DojoUnit } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';

interface RevisionGateModalProps {
  visible: boolean;
  unit: DojoUnit | null;
  onClose: () => void;
  onLaunchGateTest: (unit: DojoUnit) => void;
}

export function RevisionGateModal({
  visible,
  unit,
  onClose,
  onLaunchGateTest,
}: RevisionGateModalProps) {
  const { colors: theme } = useAppTheme();
  const passedRevisionGates = useDojoStore(state => state.passedRevisionGates);
  const completedLessons = useDojoStore(state => state.completedLessons);

  if (!unit) return null;

  const isGatePassed = !!passedRevisionGates[unit.id];
  const allLessonsCompleted = unit.lessons.every(l => !!completedLessons[l.id]);

  const handleStartGate = () => {
    if (!allLessonsCompleted) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onClose();
    onLaunchGateTest(unit);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          {/* Stitch Top Drag Pill */}
          <View style={[styles.dragPill, { backgroundColor: theme.borderSubtle }]} />

          {/* Top Row: Hanko Seal & Close Button */}
          <View style={styles.topBar}>
            <View style={[styles.hankoSeal, { borderColor: unit.themeColor || '#EF4444' }]}>
              <Text style={[styles.hankoText, { color: unit.themeColor || '#EF4444' }]}>試</Text>
            </View>
            <Pressable
              onPress={onClose}
              style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
              hitSlop={8}
            >
              <X size={18} color={theme.textPrimary} />
            </Pressable>
          </View>

          <View style={[styles.flagCircle, { backgroundColor: (unit.themeColor || '#EF4444') + '20' }]}>
            <Flag size={36} color={unit.themeColor || '#EF4444'} />
          </View>

          <Text style={[styles.title, { color: theme.textPrimary }]}>
            {unit.revisionGate.title}
          </Text>
          <Text style={[styles.titleJp, { color: theme.textSecondary }]}>
            {unit.revisionGate.titleJp}
          </Text>

          <Text style={[styles.description, { color: theme.textMuted }]}>
            Cumulative revision check. Pass with at least 80% accuracy to clear the checkpoint and unlock the next unit.
          </Text>

          <View style={[styles.statusBox, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border, borderWidth: 1 }]}>
            <Text style={[styles.statusLabel, { color: theme.textSecondary }]}>
              Prerequisite Lessons:
            </Text>
            <Text style={[styles.statusValue, { color: allLessonsCompleted ? '#10B981' : '#EF4444' }]}>
              {unit.lessons.filter(l => !!completedLessons[l.id]).length}/{unit.lessons.length} Completed
            </Text>
          </View>

          {isGatePassed ? (
            <View style={[styles.clearedBanner, { backgroundColor: '#DEF7EC', borderColor: '#0E9F6E', borderWidth: 1 }]}>
              <CheckCircle2 size={20} color="#0E9F6E" />
              <Text style={styles.clearedText}>Checkpoint Cleared! Next unit is unlocked.</Text>
            </View>
          ) : (
            <Pressable
              onPress={handleStartGate}
              disabled={!allLessonsCompleted}
              style={[
                styles.actionBtn,
                { backgroundColor: allLessonsCompleted ? (unit.themeColor || '#EF4444') : theme.border },
              ]}
            >
              <Text
                style={[
                  styles.actionBtnText,
                  { color: allLessonsCompleted ? '#FFFFFF' : theme.textMuted },
                ]}
              >
                {allLessonsCompleted ? 'START CHECKPOINT TEST' : 'COMPLETE LESSONS FIRST'}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.base,
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    borderRadius: radii.xl,
    padding: spacing.xl,
    borderWidth: 1,
    alignItems: 'center',
    gap: spacing.sm,
    ...shadows.md,
  },
  dragPill: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: spacing.xs,
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  hankoSeal: {
    width: 28,
    height: 28,
    borderWidth: 1.5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hankoText: {
    fontSize: 14,
    fontWeight: '900',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagCircle: {
    width: 72,
    height: 72,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  titleJp: {
    fontSize: 13,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginVertical: spacing.xs,
  },
  statusBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderRadius: radii.lg,
    marginVertical: spacing.xs,
  },
  statusLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  statusValue: {
    fontSize: 13,
    fontWeight: '700',
  },
  clearedBanner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    borderRadius: radii.xl,
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  clearedText: {
    color: '#03543F',
    fontSize: 13,
    fontWeight: '700',
  },
  actionBtn: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
    ...shadows.sm,
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
