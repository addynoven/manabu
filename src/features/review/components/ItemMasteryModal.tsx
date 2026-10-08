import React, { useMemo, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  X,
  Volume2,
  Clock,
  Sparkles,
  Zap,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import type { CharacterMastery } from '../../progress/models/progress.model';
import { getStageColor, SRS_CONFIG } from '../services/srsEngine';
import { calculateRetrievability } from '../services/fsrsEngine';
import { resolveReviewItem } from '../services/reviewResolver.service';

interface ItemMasteryModalProps {
  visible: boolean;
  onClose: () => void;
  masteryItem: CharacterMastery | null;
  onDrillItem?: (item: CharacterMastery) => void;
}

function ItemMasteryContent({
  onClose,
  masteryItem,
  onDrillItem,
}: {
  onClose: () => void;
  masteryItem: CharacterMastery;
  onDrillItem?: (item: CharacterMastery) => void;
}) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const resolved = resolveReviewItem(masteryItem);
  const srsConfig = SRS_CONFIG[masteryItem.srsStage || 'apprentice-1'];
  const stageColor = getStageColor(masteryItem.srsStage || 'apprentice-1');

  const handlePlayAudio = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(resolved.audioText, { rate: 0.85 });
  };

  const [mountTime] = useState(() => Date.now());

  // FSRS-5 Retrievability Calculation
  const stabilityDays = srsConfig.intervalDays || 1.0;
  const elapsedDays = useMemo(() => {
    if (!masteryItem.lastPracticedAt) return 0.5;
    const diffMs = mountTime - new Date(masteryItem.lastPracticedAt).getTime();
    return Math.max(0, diffMs / (1000 * 3600 * 24));
  }, [masteryItem.lastPracticedAt, mountTime]);

  const retrievabilityPercent = useMemo(() => {
    const r = calculateRetrievability(elapsedDays, stabilityDays);
    return Math.round(r * 100);
  }, [elapsedDays, stabilityDays]);

  const dueText = useMemo(() => {
    if (!masteryItem.nextReviewAt) return 'Ready for initial review';
    const dueTime = new Date(masteryItem.nextReviewAt).getTime();
    const diffHours = Math.round((dueTime - mountTime) / (1000 * 3600));

    if (diffHours <= 0) {
      return 'Due right now!';
    } else if (diffHours < 24) {
      return `Due in ${diffHours} hour${diffHours > 1 ? 's' : ''}`;
    } else {
      const days = Math.round(diffHours / 24);
      return `Due in ${days} day${days > 1 ? 's' : ''}`;
    }
  }, [masteryItem.nextReviewAt, mountTime]);

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View
        style={[
          styles.sheet,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            paddingBottom: Math.max(insets.bottom, 24),
          },
        ]}
      >
        <View style={styles.sheetHandleContainer}>
          <View style={[styles.dragPill, { backgroundColor: theme.borderSubtle }]} />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={[styles.hankoSeal, { borderColor: theme.primary }]}>
              <Text style={[styles.hankoText, { color: theme.primary }]}>
                {(masteryItem.category as string) === 'kanji' ? '漢' : (masteryItem.category as string) === 'grammar' ? '文' : '語'}
              </Text>
            </View>
            <View
              style={[
                styles.categoryBadge,
                { backgroundColor: theme.primary + '20' },
              ]}
            >
              <Text style={[styles.categoryBadgeText, { color: theme.primary }]}>
                {masteryItem.category.toUpperCase()}
              </Text>
            </View>
          </View>

          <Pressable
            style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
            onPress={onClose}
            hitSlop={8}
            accessibilityLabel="Close item details"
          >
            <X size={18} color={theme.textPrimary} />
          </Pressable>
        </View>

        {/* Character & Reading */}
        <View style={styles.heroSection}>
          <Text style={[styles.characterText, { color: theme.textPrimary }]}>
            {resolved.japanese}
          </Text>
          <Text style={[styles.readingText, { color: theme.textSecondary }]}>
            {resolved.reading}
          </Text>
          <Text style={[styles.meaningText, { color: theme.textPrimary }]}>
            {resolved.english}
          </Text>

          <Pressable
            style={[styles.audioPill, { backgroundColor: theme.surfaceSubtle }]}
            onPress={handlePlayAudio}
            accessibilityLabel="Listen to pronunciation"
          >
            <Volume2 size={18} color={theme.primary} />
            <Text style={[styles.audioPillText, { color: theme.textPrimary }]}>
              Play Audio
            </Text>
          </Pressable>
        </View>

        {/* SRS Stage Bar */}
        <View
          style={[
            styles.srsBox,
            { backgroundColor: stageColor + '15', borderColor: stageColor + '40' },
          ]}
        >
          <View style={styles.srsBoxTop}>
            <View style={styles.srsBoxLeft}>
              <Sparkles size={18} color={stageColor} />
              <Text style={[styles.srsStageName, { color: stageColor }]}>
                {srsConfig.name}
              </Text>
            </View>
            <Text style={[styles.srsInterval, { color: theme.textSecondary }]}>
              {srsConfig.intervalHours >= 24
                ? `${srsConfig.intervalDays}d interval`
                : `${srsConfig.intervalHours}h interval`}
            </Text>
          </View>

          <View style={styles.dueRow}>
            <Clock size={14} color={theme.textMuted} />
            <Text style={[styles.dueText, { color: theme.textSecondary }]}>
              {dueText}
            </Text>
          </View>
        </View>

        {/* FSRS-5 Retrievability & Memory Intelligence (Stitch Screen #23) */}
        <View
          style={[
            styles.fsrsTelemetryCard,
            { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
          ]}
        >
          <View style={styles.fsrsTelemetryHeader}>
            <Text style={[styles.fsrsTelemetryTitle, { color: theme.textPrimary }]}>
              FSRS Memory Retention
            </Text>
            <Text
              style={[
                styles.retrievabilityValue,
                {
                  color:
                    retrievabilityPercent >= 90
                      ? theme.success
                      : retrievabilityPercent >= 70
                      ? theme.primary
                      : theme.error,
                },
              ]}
            >
              {retrievabilityPercent}% Recall
            </Text>
          </View>

          {/* Progress bar */}
          <View style={[styles.retrievabilityTrack, { backgroundColor: theme.border }]}>
            <View
              style={[
                styles.retrievabilityFill,
                {
                  width: `${Math.max(5, Math.min(100, retrievabilityPercent))}%`,
                  backgroundColor:
                    retrievabilityPercent >= 90
                      ? theme.success
                      : retrievabilityPercent >= 70
                      ? theme.primary
                      : theme.error,
                },
              ]}
            />
          </View>

          <View style={styles.fsrsTelemetryRow}>
            <Text style={[styles.fsrsTelemetryMuted, { color: theme.textMuted }]}>
              Stability: {stabilityDays.toFixed(1)}d
            </Text>
            <Text style={[styles.fsrsTelemetryMuted, { color: theme.textMuted }]}>
              Optimal Threshold: 90%
            </Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statBox, { backgroundColor: theme.surfaceSubtle }]}>
            <Text style={[styles.statValue, { color: theme.textPrimary }]}>
              {masteryItem.accuracy}%
            </Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>
              Accuracy
            </Text>
          </View>

          <View style={[styles.statBox, { backgroundColor: theme.surfaceSubtle }]}>
            <Text style={[styles.statValue, { color: theme.success }]}>
              {masteryItem.correct}
            </Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>
              Correct
            </Text>
          </View>

          <View style={[styles.statBox, { backgroundColor: theme.surfaceSubtle }]}>
            <Text style={[styles.statValue, { color: theme.error }]}>
              {masteryItem.incorrect}
            </Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>
              Misses
            </Text>
          </View>
        </View>

        {/* Drill Button */}
        {onDrillItem && (
          <Pressable
            style={[styles.drillBtn, { backgroundColor: theme.primary }]}
            onPress={() => {
              onClose();
              onDrillItem(masteryItem);
            }}
            accessibilityLabel="Quick drill this item"
          >
            <Zap size={18} color={theme.textOnPrimary} />
            <Text style={[styles.drillBtnText, { color: theme.textOnPrimary }]}>
              PRACTICE THIS ITEM
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export function ItemMasteryModal({
  visible,
  onClose,
  masteryItem,
  onDrillItem,
}: ItemMasteryModalProps) {
  return (
    <Modal visible={visible && !!masteryItem} animationType="fade" transparent onRequestClose={onClose}>
      {visible && masteryItem ? (
        <ItemMasteryContent
          onClose={onClose}
          masteryItem={masteryItem}
          onDrillItem={onDrillItem}
        />
      ) : null}
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
    ...StyleSheet.absoluteFill,
  },
  sheet: {
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    borderTopWidth: 1,
    padding: 24,
    ...shadows.md,
  },
  sheetHandleContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  dragPill: {
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  hankoSeal: {
    width: 26,
    height: 26,
    borderWidth: 1.5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hankoText: {
    fontSize: 13,
    fontWeight: '900',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.sm,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  characterText: {
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 1,
  },
  readingText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  meaningText: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 4,
    textAlign: 'center',
  },
  audioPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
  },
  audioPillText: {
    fontSize: 13,
    fontWeight: '700',
  },
  srsBox: {
    borderWidth: 1,
    borderRadius: radii.lg,
    padding: 14,
    marginBottom: 16,
  },
  srsBoxTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  srsBoxLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  srsStageName: {
    fontSize: 15,
    fontWeight: '800',
  },
  srsInterval: {
    fontSize: 12,
    fontWeight: '600',
  },
  dueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  dueText: {
    fontSize: 12,
    fontWeight: '600',
  },
  fsrsTelemetryCard: {
    borderWidth: 1,
    borderRadius: radii.lg,
    padding: 12,
    marginBottom: 16,
  },
  fsrsTelemetryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fsrsTelemetryTitle: {
    fontSize: 12,
    fontWeight: '700',
  },
  retrievabilityValue: {
    fontSize: 13,
    fontWeight: '800',
  },
  retrievabilityTrack: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  retrievabilityFill: {
    height: '100%',
    borderRadius: 3,
  },
  fsrsTelemetryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fsrsTelemetryMuted: {
    fontSize: 11,
    fontWeight: '500',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: radii.md,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  drillBtn: {
    height: 50,
    borderRadius: radii.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  drillBtnText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
