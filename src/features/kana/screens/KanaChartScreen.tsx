import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { radii, spacing, typography, useAppTheme } from '../../../core/theme';
import { useKanaGroupsQuery } from '../hooks/useKanaQuery';
import { KanaCard } from '../components/KanaCard';
import type { KanaCharacter } from '../models/kana.model';
import { useProgressStore } from '../../progress/store/useProgressStore';

export function KanaChartScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { data: groups } = useKanaGroupsQuery();
  const [activeScript, setActiveScript] = useState<'hiragana' | 'katakana'>('hiragana');
  const [selectedChar, setSelectedChar] = useState<KanaCharacter | null>(null);
  const masteryMap = useProgressStore(state => state.mastery);

  const filteredGroups = (groups ?? []).filter(g => g.script === activeScript);

  const handleCardPress = (char: KanaCharacter) => {
    Haptics.selectionAsync().catch(() => {});
    setSelectedChar(char);
  };

  return (
    <View
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.textPrimary }]}>Kana Charts</Text>
        <View style={[styles.toggleRow, { backgroundColor: theme.surfaceSubtle }]}>
          <Pressable
            onPress={() => setActiveScript('hiragana')}
            style={[
              styles.toggleTab,
              activeScript === 'hiragana' && [styles.toggleTabActive, { backgroundColor: theme.surface }],
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                { color: theme.textSecondary },
                activeScript === 'hiragana' && { color: theme.primary, fontWeight: '700' },
              ]}
            >
              Hiragana
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveScript('katakana')}
            style={[
              styles.toggleTab,
              activeScript === 'katakana' && [styles.toggleTabActive, { backgroundColor: theme.surface }],
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                { color: theme.textSecondary },
                activeScript === 'katakana' && { color: theme.primary, fontWeight: '700' },
              ]}
            >
              Katakana
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Selected Inspector Detail */}
      {selectedChar && (
        <View
          style={[
            styles.inspector,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.inspectorKana, { color: theme.primary }]}>{selectedChar.kana}</Text>
          <View style={styles.inspectorInfo}>
            <Text style={[styles.inspectorRomaji, { color: theme.textPrimary }]}>
              Romaji: <Text style={{ fontWeight: '700' }}>{selectedChar.romaji}</Text>
            </Text>
            {selectedChar.altRomaji.length > 0 && (
              <Text style={[styles.inspectorAlt, { color: theme.textSecondary }]}>
                Alt: {selectedChar.altRomaji.join(', ')}
              </Text>
            )}
            <Text style={[styles.inspectorGroup, { color: theme.textMuted }]}>{selectedChar.group}</Text>
          </View>
          <Pressable
            onPress={() => setSelectedChar(null)}
            hitSlop={10}
            style={styles.closeBtn}
          >
            <Text style={[styles.closeBtnText, { color: theme.textSecondary }]}>✕</Text>
          </Pressable>
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {['main', 'dakuten', 'combos'].map(cat => {
          const categoryGroups = filteredGroups.filter(g => g.category === cat);
          if (categoryGroups.length === 0) return null;

          return (
            <View key={cat} style={styles.section}>
              <Text style={[styles.sectionTitle, { color: theme.textMuted }]}>
                {cat === 'main'
                  ? 'Main Characters (Seion)'
                  : cat === 'dakuten'
                    ? 'Dakuten & Handakuten'
                    : 'Combinations (Yōon)'}
              </Text>
              <View style={styles.grid}>
                {categoryGroups.flatMap(group =>
                  group.kana.map((char, idx) => {
                    const characterObj: KanaCharacter = {
                      kana: char,
                      romaji: group.romaji[idx],
                      altRomaji: group.altRomaji?.[idx] ?? [],
                      group: group.groupName,
                      isKatakana: group.script === 'katakana',
                    };
                    const mastery = masteryMap[char]?.masteryLevel ?? null;
                    return (
                      <KanaCard
                        key={`${char}_${idx}`}
                        character={characterObj}
                        masteryLevel={mastery}
                        onPress={() => handleCardPress(characterObj)}
                      />
                    );
                  }),
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
    gap: spacing.sm,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  toggleRow: {
    flexDirection: 'row',
    borderRadius: radii.md,
    padding: 2,
  },
  toggleTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: radii.sm,
  },
  toggleTabActive: {},
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  inspector: {
    marginHorizontal: spacing.base,
    marginBottom: spacing.sm,
    padding: spacing.md,
    borderRadius: radii.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  inspectorKana: {
    fontSize: 40,
    fontWeight: '700',
    marginRight: spacing.md,
  },
  inspectorInfo: {
    flex: 1,
    gap: 2,
  },
  inspectorRomaji: {
    fontSize: 15,
  },
  inspectorAlt: {
    fontSize: 12,
  },
  inspectorGroup: {
    fontSize: 11,
  },
  closeBtn: {
    padding: spacing.xs,
  },
  closeBtnText: {
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.xxl,
    gap: spacing.lg,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
});
