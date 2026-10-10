import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { AudioButton } from '../../../core/audio/components/AudioButton';
import type { VerbInfo } from '../types';

interface VerbInfoCardProps {
  verb: VerbInfo;
  meaning?: string;
}

export function VerbInfoCard({ verb, meaning }: VerbInfoCardProps) {
  const { colors: theme } = useAppTheme();

  const typeDisplay: Record<string, { label: string; bg: string; text: string }> = {
    godan: { label: 'Godan • 五段動詞 (u-verb)', bg: '#EFF6FF', text: '#1D4ED8' },
    ichidan: { label: 'Ichidan • 一段動詞 (ru-verb)', bg: '#ECFDF5', text: '#047857' },
    irregular: { label: 'Irregular • 不規則動詞', bg: '#FEF3C7', text: '#B45309' },
  };

  const badge = typeDisplay[verb.type] || {
    label: verb.type,
    bg: theme.surfaceSubtle,
    text: theme.textSecondary,
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.mainGroup}>
          <View style={styles.dictionaryRow}>
            <Text style={[styles.dictionaryForm, { color: theme.textPrimary }]}>
              {verb.dictionaryForm}
            </Text>
            <AudioButton
              text={verb.dictionaryForm}
              size="sm"
              variant="solid"
            />
          </View>
          <Text style={[styles.romajiText, { color: theme.textSecondary }]}>
            {verb.romaji}
          </Text>
        </View>

        <View style={[styles.typeBadge, { backgroundColor: badge.bg }]}>
          <Text style={[styles.typeBadgeText, { color: badge.text }]}>
            {badge.label}
          </Text>
        </View>
      </View>

      {meaning ? (
        <View style={[styles.meaningRow, { borderTopColor: theme.border }]}>
          <Text style={[styles.meaningLabel, { color: theme.textSecondary }]}>Meaning:</Text>
          <Text style={[styles.meaningText, { color: theme.primary }]}>{meaning}</Text>
        </View>
      ) : null}

      <View style={[styles.metaRow, { borderTopColor: theme.border }]}>
        <View style={styles.metaItem}>
          <Text style={[styles.metaLabel, { color: theme.textMuted }]}>Stem:</Text>
          <Text style={[styles.metaValue, { color: theme.textPrimary }]}>
            {verb.stem || '(none)'}
          </Text>
        </View>
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <View style={styles.metaItem}>
          <Text style={[styles.metaLabel, { color: theme.textMuted }]}>Ending:</Text>
          <Text style={[styles.metaValue, { color: theme.textPrimary }]}>
            {verb.ending || '(none)'}
          </Text>
        </View>
        {verb.compoundPrefix ? (
          <>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
            <View style={styles.metaItem}>
              <Text style={[styles.metaLabel, { color: theme.textMuted }]}>Prefix:</Text>
              <Text style={[styles.metaValue, { color: theme.textPrimary }]}>
                {verb.compoundPrefix}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    marginHorizontal: spacing.base,
    marginBottom: spacing.md,
    ...shadows.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  mainGroup: {
    flex: 1,
  },
  dictionaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dictionaryForm: {
    fontSize: 32,
    fontWeight: '800',
  },
  romajiText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  typeBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: radii.md,
    alignSelf: 'flex-start',
  },
  typeBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  meaningRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
  },
  meaningLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  meaningText: {
    fontSize: 14,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
  },
  metaItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  metaValue: {
    fontSize: 13,
    fontWeight: '700',
  },
  divider: {
    width: 1,
    height: 16,
    marginHorizontal: spacing.xs,
  },
});
