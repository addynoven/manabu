import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { POPULAR_VERB_PRESETS, type VerbPreset } from '../data/verbData';

interface ConjugatorSearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSelectPreset: (preset: VerbPreset) => void;
  onSubmit: () => void;
}

export function ConjugatorSearchBar({
  value,
  onChangeText,
  onSelectPreset,
  onSubmit,
}: ConjugatorSearchBarProps) {
  const { colors: theme } = useAppTheme();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputRow,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
          },
        ]}
      >
        <TextInput
          style={[styles.input, { color: theme.textPrimary }]}
          value={value}
          onChangeText={onChangeText}
          placeholder="Search verb (e.g. 食べる or taberu)..."
          placeholderTextColor={theme.textMuted}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          onSubmitEditing={onSubmit}
        />
        {value.length > 0 && (
          <Pressable
            style={styles.clearButton}
            onPress={() => onChangeText('')}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text style={[styles.clearText, { color: theme.textMuted }]}>✕</Text>
          </Pressable>
        )}
      </View>

      {/* Popular verb presets */}
      <View style={styles.presetsWrapper}>
        <Text style={[styles.presetsLabel, { color: theme.textSecondary }]}>POPULAR VERBS:</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.presetsRow}
        >
          {POPULAR_VERB_PRESETS.map(p => {
            const isActive = value === p.verb;
            return (
              <Pressable
                key={p.verb}
                style={[
                  styles.presetChip,
                  {
                    backgroundColor: isActive ? theme.primary : theme.surfaceSubtle,
                    borderColor: isActive ? theme.primary : theme.border,
                  },
                ]}
                onPress={() => onSelectPreset(p)}
              >
                <Text
                  style={[
                    styles.presetChipText,
                    {
                      color: isActive ? theme.textOnPrimary : theme.textPrimary,
                    },
                  ]}
                >
                  {p.verb}
                </Text>
                <Text
                  style={[
                    styles.presetChipSub,
                    {
                      color: isActive ? theme.textOnPrimary : theme.textMuted,
                      opacity: isActive ? 0.85 : 1,
                    },
                  ]}
                >
                  {p.meaning}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radii.xl,
    borderWidth: 1,
    paddingHorizontal: spacing.base,
    ...shadows.sm,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  clearButton: {
    padding: spacing.xs,
  },
  clearText: {
    fontSize: 16,
    fontWeight: '700',
  },
  presetsWrapper: {
    marginTop: spacing.sm,
  },
  presetsLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: spacing.xs,
  },
  presetsRow: {
    gap: spacing.xs,
    paddingRight: spacing.base,
  },
  presetChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radii.full,
    paddingVertical: 6,
    paddingHorizontal: spacing.sm + 2,
    borderWidth: 1,
  },
  presetChipText: {
    fontSize: 14,
    fontWeight: '700',
  },
  presetChipSub: {
    fontSize: 11,
  },
});
