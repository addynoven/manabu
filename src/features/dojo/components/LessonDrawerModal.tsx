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
  Zap,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme, withOpacity } from '../../../core/theme';
import type { DojoLesson } from '../models/dojo.model';
import { useDojoStore } from '../store/useDojoStore';
import { useCooldownTimer } from '../hooks/useCooldownTimer';

interface LessonDrawerModalProps {
  visible: boolean;
  lesson: DojoLesson | null;
  onClose: () => void;
  onLaunchMode: (lesson: DojoLesson, mode: 'comprehensive' | 'listen' | 'speak' | 'spell') => void;
  onLaunchEarlyUnlock: (lesson: DojoLesson) => void;
}

export function LessonDrawerModal({
  visible,
  lesson,
  onClose,
  onLaunchMode,
  onLaunchEarlyUnlock,
}: LessonDrawerModalProps) {
  const { colors: theme } = useAppTheme();
  const isLessonLocked = useDojoStore(state => state.isLessonLocked);
  const completedLessons = useDojoStore(state => state.completedLessons);
  const clearCooldown = useDojoStore(state => state.clearCooldown);
  const { isCoolingDown, formattedClock, formattedCompact } = useCooldownTimer();

  if (!lesson) return null;

  const lockStatus = isLessonLocked(lesson.id);
  const isCompleted = !!completedLessons[lesson.id];
  const isLocked = lockStatus.locked;
  const isCooldown = isLocked && (lockStatus.reason === 'cooldown' || isCoolingDown);

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
          {/* Header Row */}
          <View style={styles.sheetHeader}>
            <View style={[styles.handleBar, { backgroundColor: theme.border }]} />
            <Pressable
              onPress={onClose}
              style={[styles.closeButton, { backgroundColor: theme.surfaceSubtle }]}
              hitSlop={8}
              accessibilityLabel="Close lesson drawer"
            >
              <X size={18} color={theme.textPrimary} />
            </Pressable>
          </View>

          {/* Lesson Header Card matching deerleno_5 */}
          <View style={[styles.lessonCard, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
            <View style={styles.cardTopRow}>
              <View style={[styles.iconsBadge, { backgroundColor: theme.primaryLight }]}>
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
            <View style={[styles.cooldownBanner, { backgroundColor: withOpacity('#F59E0B', 0.15), borderColor: '#F59E0B' }]}>
              <Clock size={20} color="#F59E0B" />
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={[styles.cooldownTitle, { color: '#F59E0B' }]}>
                    Teuida Pacing Cooldown
                  </Text>
                  <Text style={{ fontSize: 13, fontWeight: '800', color: '#D97706', fontVariant: ['tabular-nums'] }}>
                    {formattedClock}
                  </Text>
                </View>
                <Text style={[styles.cooldownSub, { color: theme.textSecondary, marginTop: 2 }]}>
                  Wait {formattedCompact} or bypass now by scoring 80%+ on a quick 3-question revision re-test!
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

          {/* Primary Action Button: START / REDO / EARLY UNLOCK */}
          {isCooldown ? (
            <View style={{ gap: 8 }}>
              <Pressable
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
                  onClose();
                  onLaunchEarlyUnlock(lesson);
                }}
                style={[
                  styles.primaryStartBtn,
                  { backgroundColor: '#F59E0B' },
                ]}
              >
                <Zap size={22} color="#FFFFFF" />
                <Text style={[styles.primaryStartText, { color: '#FFFFFF' }]}>
                  ⚡ UNLOCK EARLY (RE-TEST)
                </Text>
                <ChevronRight size={22} color="#FFFFFF" />
              </Pressable>

              <Pressable
                onPress={() => {
                  clearCooldown();
                  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
                }}
                style={{ alignSelf: 'center', paddingVertical: 4 }}
              >
                <Text style={{ fontSize: 12, color: theme.textMuted, textDecorationLine: 'underline' }}>
                  Instant Bypass (Skip Wait)
                </Text>
              </Pressable>
            </View>
          ) : (
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
          )}

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
                <View style={[styles.modeIconCircle, { backgroundColor: withOpacity('#8B5CF6', 0.15) }]}>
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
                <View style={[styles.modeIconCircle, { backgroundColor: withOpacity('#3B82F6', 0.15) }]}>
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
                <View style={[styles.modeIconCircle, { backgroundColor: withOpacity('#10B981', 0.15) }]}>
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
                <View style={[styles.modeIconCircle, { backgroundColor: withOpacity('#EC4899', 0.15) }]}>
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
  sheetHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 32,
  },
  handleBar: {
    width: 44,
    height: 5,
    borderRadius: 3,
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
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
