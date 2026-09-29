import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { radii, spacing, useAppTheme } from '../../../core/theme';
import type { KanaGroup } from '../models/kana.model';

interface KanaGroupSelectorProps {
  groups: KanaGroup[];
  selectedIds: number[];
  weakCount?: number;
  onToggle: (id: number) => void;
  onSelectAll: () => void;
  onPracticeWeaknesses?: () => void;
}

export function KanaGroupSelector({
  groups,
  selectedIds,
  weakCount = 0,
  onToggle,
  onSelectAll,
  onPracticeWeaknesses,
}: KanaGroupSelectorProps) {
  const { colors: theme } = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.textSecondary }]}>Practice Rows</Text>
        <View style={styles.headerRight}>
          {weakCount > 0 && onPracticeWeaknesses && (
            <Pressable
              onPress={onPracticeWeaknesses}
              hitSlop={8}
              style={[styles.weakButton, { backgroundColor: theme.primaryLight }]}
            >
              <Text style={[styles.weakButtonText, { color: theme.primary }]}>🎯 Weak ({weakCount})</Text>
            </Pressable>
          )}
          <Pressable onPress={onSelectAll} hitSlop={8}>
            <Text style={[styles.selectAllText, { color: theme.primary }]}>Select All</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {groups.map(group => {
          const isSelected = selectedIds.includes(group.id);
          return (
            <Pressable
              key={group.id}
              onPress={() => onToggle(group.id)}
              activeOpacity={0.7}
              style={[
                styles.chip,
                isSelected
                  ? { backgroundColor: theme.primaryLight, borderColor: theme.primary }
                  : { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  { color: isSelected ? theme.primary : theme.textSecondary },
                ]}
              >
                {group.kana.slice(0, 3).join('')} ({group.romaji[0]?.toUpperCase()}...)
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    marginBottom: spacing.xs,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  weakButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  weakButtonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  selectAllText: {
    fontSize: 13,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: spacing.base,
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
