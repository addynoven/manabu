import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { PenTool, Volume2, X } from 'lucide-react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useKanaGroupsQuery } from '../hooks/useKanaQuery';
import { KanaCard } from '../components/KanaCard';
import { KanaTraceView } from '../components/KanaTraceView';
import type { KanaCharacter } from '../models/kana.model';
import { useProgressStore } from '../../progress/store/useProgressStore';

interface KanaChartScreenProps {
  onClose?: () => void;
}

export function KanaChartScreen({ onClose }: KanaChartScreenProps = {}) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { data: groups } = useKanaGroupsQuery();
  const [activeScript, setActiveScript] = useState<'hiragana' | 'katakana'>('hiragana');
  const [selectedChar, setSelectedChar] = useState<KanaCharacter | null>(null);
  const [traceChar, setTraceChar] = useState<string | null>(null);
  const masteryMap = useProgressStore(state => state.mastery);

  const filteredGroups = (groups ?? []).filter(g => g.script === activeScript);

  const handleCardPress = (char: KanaCharacter) => {
    Haptics.selectionAsync().catch(() => {});
    setSelectedChar(char);
  };

  const handleOpenTrace = (char: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setTraceChar(char);
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
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Kana Charts</Text>
          {onClose && (
            <Pressable
              onPress={onClose}
              style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
              accessibilityLabel="Close Kana Charts"
              hitSlop={8}
            >
              <X size={20} color={theme.textPrimary} />
            </Pressable>
          )}
        </View>

        {/* Two Tabs: Left = Hiragana, Right = Katakana */}
        <View style={[styles.toggleRow, { backgroundColor: theme.surfaceSubtle }]}>
          <Pressable
            onPress={() => {
              setActiveScript('hiragana');
              setSelectedChar(null);
            }}
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
            onPress={() => {
              setActiveScript('katakana');
              setSelectedChar(null);
            }}
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

      {/* Selected Inspector Detail with Stroke Tracing & Audio */}
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
          {/* Large Glyph */}
          <Text style={[styles.inspectorKana, { color: theme.primary }]}>
            {selectedChar.kana}
          </Text>

          {/* Details */}
          <View style={styles.inspectorInfo}>
            <Text style={[styles.inspectorRomaji, { color: theme.textPrimary }]}>
              Romaji: <Text style={{ fontWeight: '800' }}>{selectedChar.romaji}</Text>
            </Text>
            {selectedChar.altRomaji.length > 0 && (
              <Text style={[styles.inspectorAlt, { color: theme.textSecondary }]}>
                Alt: {selectedChar.altRomaji.join(', ')}
              </Text>
            )}
            <Text style={[styles.inspectorGroup, { color: theme.textMuted }]} numberOfLines={1}>
              {selectedChar.group}
            </Text>
          </View>

          {/* Action Buttons: Listen & Stroke Trace */}
          <View style={styles.inspectorActions}>
            <Pressable
              onPress={() => speakJapanese(selectedChar.kana)}
              style={[styles.audioActionBtn, { backgroundColor: theme.surfaceSubtle }]}
              accessibilityLabel="Listen pronunciation"
            >
              <Volume2 size={16} color={theme.primary} />
            </Pressable>

            <Pressable
              onPress={() => handleOpenTrace(selectedChar.kana)}
              style={[styles.traceActionBtn, { backgroundColor: theme.primary }]}
              accessibilityLabel={`Trace stroke order for ${selectedChar.kana}`}
            >
              <PenTool size={14} color="#FFFFFF" />
              <Text style={styles.traceActionText}>Trace</Text>
            </Pressable>
          </View>

          {/* Close Inspector */}
          <Pressable
            onPress={() => setSelectedChar(null)}
            hitSlop={10}
            style={styles.closeInspectorBtn}
            accessibilityLabel="Close selection inspector"
          >
            <X size={16} color={theme.textMuted} />
          </Pressable>
        </View>
      )}

      {/* Kana Grid for Active Script */}
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
                        onTrace={() => handleOpenTrace(char)}
                      />
                    );
                  }),
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Full-Screen Stroke Tracing Modal */}
      <Modal
        visible={!!traceChar}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setTraceChar(null)}
      >
        {traceChar && (
          <KanaTraceView
            initialChar={traceChar}
            onClose={() => setTraceChar(null)}
          />
        )}
      </Modal>
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
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    borderRadius: radii.xl,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    position: 'relative',
    ...shadows.sm,
  },
  inspectorKana: {
    fontSize: 38,
    fontWeight: '800',
    marginRight: spacing.md,
    lineHeight: 44,
  },
  inspectorInfo: {
    flex: 1,
    gap: 2,
    justifyContent: 'center',
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
  inspectorActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginRight: spacing.sm,
  },
  audioActionBtn: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  traceActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radii.md,
    ...shadows.sm,
  },
  traceActionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  closeInspectorBtn: {
    padding: spacing.xs,
  },
  closeBtn: {
    padding: spacing.xs,
    borderRadius: radii.full,
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
