import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { AudioButton } from '../../../core/audio/components/AudioButton';
import { CATEGORY_LABELS } from '../data/conjugationForms';
import type { ConjugationCategory, ConjugationForm } from '../types';

interface ConjugationTableProps {
  forms: ConjugationForm[];
}

export function ConjugationTable({ forms }: ConjugationTableProps) {
  const { colors: theme } = useAppTheme();

  // Group forms by category
  const categories: ConjugationCategory[] = [
    'basic',
    'polite',
    'negative',
    'past',
    'volitional',
    'potential',
    'passive',
    'causative',
    'causative-passive',
    'imperative',
    'conditional',
  ];

  // Collapsible category state (all open by default)
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (cat: string) => {
    setCollapsedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <View style={styles.container}>
      {categories.map(cat => {
        const catForms = forms.filter(f => f.category === cat);
        if (catForms.length === 0) return null;

        const label = CATEGORY_LABELS[cat] || { en: cat, ja: cat };
        const isCollapsed = !!collapsedCategories[cat];

        return (
          <View
            key={cat}
            style={[
              styles.categoryCard,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <Pressable
              style={[
                styles.categoryHeader,
                {
                  backgroundColor: theme.surfaceSubtle,
                  borderBottomColor: theme.border,
                },
              ]}
              onPress={() => toggleCategory(cat)}
              activeOpacity={0.7}
            >
              <View style={styles.titleGroup}>
                <Text style={[styles.categoryTitleEn, { color: theme.textPrimary }]}>
                  {label.en}
                </Text>
                <Text style={[styles.categoryTitleJa, { color: theme.textSecondary }]}>
                  {label.ja}
                </Text>
              </View>
              <Text style={[styles.toggleIcon, { color: theme.textMuted }]}>
                {isCollapsed ? '▼' : '▲'}
              </Text>
            </Pressable>

            {!isCollapsed && (
              <View style={styles.formsList}>
                {catForms.map(form => (
                  <View
                    key={form.id}
                    style={[
                      styles.formRow,
                      { borderBottomColor: theme.border },
                    ]}
                  >
                    <View style={styles.formMeta}>
                      <Text style={[styles.formName, { color: theme.textPrimary }]}>
                        {form.name}
                      </Text>
                      <View style={styles.nameSubRow}>
                        <Text style={[styles.formNameJa, { color: theme.textSecondary }]}>
                          {form.nameJapanese}
                        </Text>
                        <View
                          style={[
                            styles.formalityBadge,
                            form.formality === 'polite'
                              ? styles.badgePolite
                              : styles.badgePlain,
                          ]}
                        >
                          <Text
                            style={[
                              styles.formalityText,
                              form.formality === 'polite'
                                ? styles.textPolite
                                : styles.textPlain,
                            ]}
                          >
                            {form.formality}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.formJapanese}>
                      <View style={styles.formValueRow}>
                        <Text style={[styles.formValue, { color: theme.primary }]}>
                          {form.hiragana}
                        </Text>
                        <AudioButton text={form.hiragana} size="sm" />
                      </View>
                      <Text style={[styles.formRomaji, { color: theme.textSecondary }]}>
                        {form.romaji}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
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
    gap: spacing.md,
  },
  categoryCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    overflow: 'hidden',
    ...shadows.sm,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.base,
    borderBottomWidth: 1,
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  categoryTitleEn: {
    fontSize: 15,
    fontWeight: '700',
  },
  categoryTitleJa: {
    fontSize: 13,
    fontWeight: '600',
  },
  toggleIcon: {
    fontSize: 12,
  },
  formsList: {
    paddingVertical: spacing.xs,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.base,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  formMeta: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  formName: {
    fontSize: 13,
    fontWeight: '700',
  },
  nameSubRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  formNameJa: {
    fontSize: 11,
  },
  formalityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: radii.xs,
  },
  badgePolite: {
    backgroundColor: '#EFF6FF',
  },
  badgePlain: {
    backgroundColor: '#F3F4F6',
  },
  formalityText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  textPolite: {
    color: '#1D4ED8',
  },
  textPlain: {
    color: '#4B5563',
  },
  formJapanese: {
    alignItems: 'flex-end',
  },
  formValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  formValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  formRomaji: {
    fontSize: 12,
    marginTop: 1,
  },
});
