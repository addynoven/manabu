import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {
  RotateCcw,
  Headphones,
  Mic,
  PenTool,
  Rocket,
  ChevronRight,
  Clock,
  Lock,
  X,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import type { DojoLesson } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';

interface LessonDrawerModalProps {
  visible: boolean;
  lesson: DojoLesson | null;
  onClose: () => void;
  onLaunchMode: (lesson: DojoLesson, mode: 'comprehensive' | 'listen' | 'speak' | 'spell') => void;
}

export function LessonDrawerModal({
  visible,
  lesson,
  onClose,
  onLaunchMode,
}: LessonDrawerModalProps) {
  const { colors: theme } = useAppTheme();
  const isLessonLocked = useDojoStore(state => state.isLessonLocked);
  const completedLessons = useDojoStore(state => state.completedLessons);

  if (!lesson) return null;

  const lockStatus = isLessonLocked(lesson.id);
  const isCompleted = !!completedLessons[lesson.id];
  const isLocked = lockStatus.locked;
  const isCooldown = isLocked && lockStatus.reason === 'cooldown';

  const formatRemaining = (seconds?: number) => {
    if (!seconds) return 'Locked';
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m`;
    return `${mins}m`;
  };

  const handleStartPrimary = () => {
    if (isLocked) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onClose();
    onLaunchMode(lesson, 'comprehensive');
  };

  const handleStartSubMode = (mode: 'listen' | 'speak' | 'spell' | 'comprehensive') => {
    if (isLocked) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onClose();
    onLaunchMode(lesson, mode);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={[styles.sheet, { backgroundColor: theme.surface }]}>
          {/* Handle bar */}
          <View style={[styles.handleBar, { backgroundColor: theme.border }]} />

          {/* Close button */}
          <Pressable
            onPress={onClose}
            style={[styles.closeButton, { backgroundColor: theme.surfaceSubtle }]}
            hitSlop={8}
            accessibilityLabel="Close lesson drawer"
          >
            <X size={18} color={theme.textPrimary} />
          </Pressable>

          {/* Lesson Header Card matching deerleno_5 */}
          <View style={[styles.lessonCard, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
            <View style={styles.cardTopRow}>
              <View style={[styles.iconsBadge, { backgroundColor: theme.primary + '20' }]}>
                <Headphones size={13} color={theme.primary} />
                <Mic size={13} color={theme.primary} />
                <PenTool size={13} color={theme.primary} />
                <Rocket size={13} color={theme.primary} />
              </View>

              <View style={styles.lessonMeta}>
                <Text style={[styles.lessonNumberText, { color: theme.textSecondary }]}>
                  Lesson {lesson.lessonNumber}
                </Text>
                <Text style={[styles.lessonMainTitle, { color: theme.textPrimary }]}>
                  {lesson.title}
                </Text>
                <Text style={[styles.lessonKeywords, { color: theme.textMuted }]}>
                  {lesson.vocabKeywords.join(' • ')}
                </Text>
              </View>

              <RotateCcw size={20} color={isCompleted ? theme.primary : theme.textMuted} />
            </View>
          </View>

          {/* Cooldown Alert Banner */}
          {isCooldown && (
            <View style={[styles.cooldownBanner, { backgroundColor: '#F59E0B' + '20', borderColor: '#F59E0B' }]}>
              <Clock size={18} color="#F59E0B" />
              <View style={{ flex: 1 }}>
                <Text style={[styles.cooldownTitle, { color: '#F59E0B' }]}>
                  Lesson Cooling Down (Teuida Pacing)
                </Text>
                <Text style={[styles.cooldownSub, { color: theme.textSecondary }]}>
                  Wait {formatRemaining(lockStatus.remainingSeconds)} or practice previous lessons in Review.
                </Text>
              </View>
            </View>
          )}

          {/* Prerequisite Alert Banner */}
          {isLocked && !isCooldown && (
            <View style={[styles.cooldownBanner, { backgroundColor: theme.borderSubtle, borderColor: theme.border }]}>
              <Lock size={18} color={theme.textMuted} />
              <Text style={[styles.cooldownSub, { color: theme.textSecondary, flex: 1 }]}>
                {lockStatus.reason === 'revision_gate'
                  ? 'Pass the previous Unit Revision Gate to unlock this lesson.'
                  : 'Complete the previous lesson first to unlock.'}
              </Text>
            </View>
          )}

          {/* Primary Action Button matching deerleno_5: START / REDO */}
          <Pressable
            onPress={handleStartPrimary}
            disabled={isLocked}
            style={[
              styles.primaryStartBtn,
              { backgroundColor: isLocked ? theme.border : '#F59E0B' },
            ]}
          >
            <RotateCcw size={24} color={isLocked ? theme.textMuted : '#FFFFFF'} />
            <Text style={[styles.primaryStartText, { color: isLocked ? theme.textMuted : '#FFFFFF' }]}>
              {isCompleted ? 'REDO LESSON' : 'START LESSON'}
            </Text>
            <ChevronRight size={24} color={isLocked ? theme.textMuted : '#FFFFFF'} />
          </Pressable>

          {/* REVIEW Section */}
          <Text style={[styles.reviewSectionTitle, { color: theme.textSecondary }]}>
            REVIEW MODES
          </Text>

          <View style={styles.modesList}>
            {/* Listening */}
            <Pressable
              onPress={() => handleStartSubMode('listen')}
              disabled={isLocked}
              style={[styles.modeRow, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <View style={styles.modeRowLeft}>
                <View style={[styles.modeIconCircle, { backgroundColor: '#8B5CF6' + '20' }]}>
                  <Headphones size={18} color="#8B5CF6" />
                </View>
                <Text style={[styles.modeLabel, { color: isLocked ? theme.textMuted : theme.textPrimary }]}>
                  Practice - Listening
                </Text>
              </View>
              <ChevronRight size={18} color={isLocked ? theme.textMuted : theme.accent} />
            </Pressable>

            {/* Speaking */}
            <Pressable
              onPress={() => handleStartSubMode('speak')}
              disabled={isLocked}
              style={[styles.modeRow, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <View style={styles.modeRowLeft}>
                <View style={[styles.modeIconCircle, { backgroundColor: '#3B82F6' + '20' }]}>
                  <Mic size={18} color="#3B82F6" />
                </View>
                <Text style={[styles.modeLabel, { color: isLocked ? theme.textMuted : theme.textPrimary }]}>
                  Practice - Speaking
                </Text>
              </View>
              <ChevronRight size={18} color={isLocked ? theme.textMuted : theme.accent} />
            </Pressable>

            {/* Spelling */}
            <Pressable
              onPress={() => handleStartSubMode('spell')}
              disabled={isLocked}
              style={[styles.modeRow, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <View style={styles.modeRowLeft}>
                <View style={[styles.modeIconCircle, { backgroundColor: '#10B981' + '20' }]}>
                  <PenTool size={18} color="#10B981" />
                </View>
                <Text style={[styles.modeLabel, { color: isLocked ? theme.textMuted : theme.textPrimary }]}>
                  Practice - Spelling
                </Text>
              </View>
              <ChevronRight size={18} color={isLocked ? theme.textMuted : theme.accent} />
            </Pressable>

            {/* Comprehensive */}
            <Pressable
              onPress={() => handleStartSubMode('comprehensive')}
              disabled={isLocked}
              style={[styles.modeRow, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            >
              <View style={styles.modeRowLeft}>
                <View style={[styles.modeIconCircle, { backgroundColor: '#EC4899' + '20' }]}>
                  <Rocket size={18} color="#EC4899" />
                </View>
                <Text style={[styles.modeLabel, { color: isLocked ? theme.textMuted : theme.textPrimary }]}>
                  Practice - Comprehensive
                </Text>
              </View>
              <ChevronRight size={18} color={isLocked ? theme.textMuted : theme.accent} />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  backdrop: {
    flex: 1,
  },
  sheet: {
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
    gap: spacing.md,
    ...shadows.md,
  },
  handleBar: {
    width: 44,
    height: 5,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: spacing.xs,
  },
  closeButton: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.base,
    width: 32,
    height: 32,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonCard: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconsBadge: {
    width: 46,
    height: 46,
    borderRadius: radii.lg,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lessonMeta: {
    flex: 1,
  },
  lessonNumberText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  lessonMainTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginTop: 2,
  },
  lessonKeywords: {
    fontSize: 12,
    marginTop: 2,
  },
  cooldownBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
    gap: spacing.sm,
  },
  cooldownTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  cooldownSub: {
    fontSize: 12,
    marginTop: 1,
  },
  primaryStartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.base,
    borderRadius: radii.xl,
    ...shadows.md,
  },
  primaryStartText: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  reviewSectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginTop: spacing.xs,
  },
  modesList: {
    gap: spacing.xs + 2,
  },
  modeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.base,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  modeRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  modeIconCircle: {
    width: 34,
    height: 34,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
});
