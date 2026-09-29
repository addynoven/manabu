import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useAppTheme } from '../../../core/theme';
import { radii, shadows, spacing } from '../../../core/theme';
import type { SetProgressResult } from '../../progress/lib/setProgress';
import type { KanjiEntry } from '../models/kanji.model';

interface KanjiSetCardProps {
  setIndex: number;
  kanjiList: KanjiEntry[];
  stats: SetProgressResult;
  onPractice: () => void;
  onOpenDictionary: () => void;
}

export function KanjiSetCard({
  setIndex,
  kanjiList,
  stats,
  onPractice,
  onOpenDictionary,
}: KanjiSetCardProps) {
  const { colors: theme } = useAppTheme();
  const setNumber = setIndex + 1;
  const startNum = setIndex * 10 + 1;
  const endNum = startNum + kanjiList.length - 1;

  // 3 stars indicator
  const starsArray = [0, 1, 2];

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.surface,
          borderColor: stats.isMaxed ? '#F59E0B' : theme.border,
        },
      ]}
    >
      {/* Top Header: Set Number & Stars */}
      <View style={styles.topRow}>
        <View style={styles.titleCol}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            Set {setNumber}
          </Text>
          <Text style={[styles.range, { color: theme.textSecondary }]}>
            {startNum}–{endNum} • {kanjiList.length} Kanji
          </Text>
        </View>

        {/* Stars */}
        <View style={styles.starsRow}>
          {starsArray.map(idx => (
            <Text
              key={idx}
              style={[
                styles.starIcon,
                { color: idx < stats.stars ? '#F59E0B' : theme.textSecondary + '40' },
              ]}
            >
              ★
            </Text>
          ))}
        </View>
      </View>

      {/* Preview Glyphs */}
      <View style={styles.previewRow}>
        {kanjiList.slice(0, 10).map((k, i) => (
          <View
            key={`${k.id || ''}_${k.kanjiChar}_${i}`}
            style={[
              styles.glyphBadge,
              { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.glyphText, { color: theme.textPrimary }]}>
              {k.kanjiChar}
            </Text>
          </View>
        ))}
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View
          style={[styles.progressBarTrack, { backgroundColor: theme.surfaceSubtle }]}
        >
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${Math.round(stats.progress * 100)}%`,
                backgroundColor: stats.isMaxed ? '#10B981' : theme.primary,
              },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color: theme.textSecondary }]}>
          {stats.isMaxed ? 'Mastered (3★)' : `${Math.round(stats.progress * 100)}%`}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <Pressable
          onPress={onOpenDictionary}
          style={[
            styles.secondaryButton,
            { borderColor: theme.border, backgroundColor: theme.surfaceSubtle },
          ]}
        >
          <Text style={[styles.secondaryButtonText, { color: theme.textPrimary }]}>
            📖 Dictionary
          </Text>
        </Pressable>

        <Pressable
          onPress={onPractice}
          style={[styles.primaryButton, { backgroundColor: theme.primary }]}
        >
          <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>🎯 Practice</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.xl,
    padding: spacing.md,
    borderWidth: 1.5,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  titleCol: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  range: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  starIcon: {
    fontSize: 22,
  },
  previewRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginVertical: spacing.xs,
  },
  glyphBadge: {
    width: 32,
    height: 32,
    borderRadius: radii.sm,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyphText: {
    fontSize: 17,
    fontWeight: '700',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  progressBarTrack: {
    flex: 1,
    height: 7,
    borderRadius: radii.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: radii.full,
  },
  progressText: {
    fontSize: 11,
    fontWeight: '600',
    minWidth: 40,
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
  primaryButton: {
    flex: 1.2,
    paddingVertical: 10,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
