import React, { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { conjugate } from '../lib/conjugate';
import { POPULAR_VERB_PRESETS, type VerbPreset } from '../data/verbData';
import { ConjugatorSearchBar } from '../components/ConjugatorSearchBar';
import { VerbInfoCard } from '../components/VerbInfoCard';
import { ConjugationTable } from '../components/ConjugationTable';

export function ConjugatorScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const [searchText, setSearchText] = useState('食べる');
  const [activePreset, setActivePreset] = useState<VerbPreset | null>(
    POPULAR_VERB_PRESETS[0],
  );

  const conjugationResult = useMemo(() => {
    if (!searchText.trim()) return null;
    return conjugate(searchText);
  }, [searchText]);

  const handleSelectPreset = (preset: VerbPreset) => {
    setActivePreset(preset);
    setSearchText(preset.verb);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    const matched = POPULAR_VERB_PRESETS.find(p => p.verb === text);
    setActivePreset(matched || null);
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, backgroundColor: theme.background },
      ]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Top Header */}
        <View
          style={[
            styles.header,
            {
              backgroundColor: theme.surface,
              borderBottomColor: theme.border,
            },
          ]}
        >
          <Pressable
            style={[styles.backButton, { backgroundColor: theme.surfaceSubtle }]}
            onPress={() => router.back()}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Text style={[styles.backIcon, { color: theme.textPrimary }]}>←</Text>
          </Pressable>
          <View style={styles.headerTitleGroup}>
            <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
              Verb Conjugator
            </Text>
            <Text style={[styles.headerSub, { color: theme.textSecondary }]}>
              日本語活用形 • 30+ Forms
            </Text>
          </View>
          <View style={{ width: 36 }} />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Search Bar & Preset Chips */}
          <ConjugatorSearchBar
            value={searchText}
            onChangeText={handleSearchChange}
            onSelectPreset={handleSelectPreset}
            onSubmit={() => {}}
          />

          {/* Results Area */}
          {conjugationResult?.success ? (
            <>
              <VerbInfoCard
                verb={conjugationResult.result.verb}
                meaning={activePreset?.meaning}
              />
              <ConjugationTable forms={conjugationResult.result.forms} />
            </>
          ) : conjugationResult?.error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorIcon}>⚠️</Text>
              <Text style={styles.errorTitle}>Could Not Conjugate</Text>
              <Text style={styles.errorDesc}>
                {conjugationResult.error.message}
              </Text>
              <Text style={[styles.errorHint, { color: theme.textSecondary }]}>
                Try typing a verb in dictionary form (e.g. 飲む, 行く, 食べる) or in Romaji (nomu, iku, taberu).
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.emptyBox,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text style={styles.emptyIcon}>🎌</Text>
              <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
                Search Any Japanese Verb
              </Text>
              <Text style={[styles.emptyDesc, { color: theme.textSecondary }]}>
                Type in Kanji, Hiragana, or English Romaji to explore all grammatical transformations.
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    fontWeight: '700',
  },
  headerTitleGroup: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '800',
  },
  headerSub: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  errorBox: {
    margin: spacing.base,
    padding: spacing.xl,
    backgroundColor: '#FEF2F2',
    borderRadius: radii.xl,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    alignItems: 'center',
  },
  errorIcon: {
    fontSize: 36,
    marginBottom: spacing.xs,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#991B1B',
  },
  errorDesc: {
    fontSize: 13,
    color: '#B91C1C',
    textAlign: 'center',
    marginTop: 4,
  },
  errorHint: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  emptyBox: {
    margin: spacing.xl,
    padding: spacing.xxl,
    alignItems: 'center',
    borderRadius: radii.xl,
    borderWidth: 1,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  emptyDesc: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: spacing.xs,
    lineHeight: 20,
  },
});
