import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAppTheme } from '../../../core/theme';
import { radii, shadows, spacing } from '../../../core/theme';
import { ACADEMY_GUIDES, type LearningGuide } from '../data/guides';
import { GuideReaderModal } from '../components/GuideReaderModal';

const CATEGORIES = ['All', 'Writing Systems', 'Grammar', 'Kanji'] as const;

export function AcademyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeGuide, setActiveGuide] = useState<LearningGuide | null>(null);

  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'All') return ACADEMY_GUIDES;
    return ACADEMY_GUIDES.filter(g => g.category === selectedCategory);
  }, [selectedCategory]);

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
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { backgroundColor: theme.surfaceSubtle }]}
        >
          <Text style={[styles.backButtonText, { color: theme.textPrimary }]}>
            ← Back
          </Text>
        </Pressable>
        <View style={styles.titleCol}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            Kana Academy (学堂)
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Structured Japanese Learning Guides & Blueprints
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Category Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryPills}
        >
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <Pressable
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[
                  styles.categoryPill,
                  {
                    backgroundColor: isSelected
                      ? theme.primary
                      : theme.surfaceSubtle,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    { color: isSelected ? theme.textOnPrimary : theme.textSecondary },
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Featured Guide (First guide in list) */}
        {selectedCategory === 'All' && ACADEMY_GUIDES.length > 0 && (
          <Pressable
            onPress={() => setActiveGuide(ACADEMY_GUIDES[0])}
            style={[
              styles.featuredCard,
              {
                backgroundColor: theme.surface,
                borderColor: theme.primary,
              },
            ]}
          >
            <View style={styles.featuredBadgeRow}>
              <View
                style={[
                  styles.featuredTag,
                  { backgroundColor: theme.primaryLight + '30' },
                ]}
              >
                <Text
                  style={[styles.featuredTagText, { color: theme.primary }]}
                >
                  FEATURED GUIDE
                </Text>
              </View>
              <Text
                style={[styles.readTimeText, { color: theme.textSecondary }]}
              >
                ⏱ {ACADEMY_GUIDES[0].readTime}
              </Text>
            </View>

            <View style={styles.featuredContentRow}>
              <View
                style={[
                  styles.featuredIconBox,
                  {
                    backgroundColor: theme.surfaceSubtle,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  style={[styles.featuredIconText, { color: theme.primary }]}
                >
                  {ACADEMY_GUIDES[0].icon}
                </Text>
              </View>
              <View style={styles.featuredTextCol}>
                <Text
                  style={[
                    styles.featuredJapanese,
                    { color: theme.textSecondary },
                  ]}
                >
                  {ACADEMY_GUIDES[0].japaneseTitle}
                </Text>
                <Text
                  style={[styles.featuredTitle, { color: theme.textPrimary }]}
                >
                  {ACADEMY_GUIDES[0].title}
                </Text>
              </View>
            </View>

            <Text
              style={[styles.featuredSummary, { color: theme.textSecondary }]}
              numberOfLines={2}
            >
              {ACADEMY_GUIDES[0].summary}
            </Text>
          </Pressable>
        )}

        {/* Guide List */}
        <View style={styles.guideList}>
          {filteredGuides.map(guide => (
            <Pressable
              key={guide.id}
              onPress={() => setActiveGuide(guide)}
              style={[
                styles.guideCard,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                },
              ]}
            >
              <View
                style={[
                  styles.guideIconBox,
                  {
                    backgroundColor: theme.surfaceSubtle,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text style={[styles.guideIconText, { color: theme.textPrimary }]}>
                  {guide.icon}
                </Text>
              </View>

              <View style={styles.guideInfoCol}>
                <View style={styles.metaRow}>
                  <Text style={[styles.metaCategory, { color: theme.primary }]}>
                    {guide.category.toUpperCase()}
                  </Text>
                  <Text
                    style={[styles.metaReadTime, { color: theme.textSecondary }]}
                  >
                    ⏱ {guide.readTime}
                  </Text>
                </View>

                <Text
                  style={[styles.guideJapanese, { color: theme.textSecondary }]}
                >
                  {guide.japaneseTitle}
                </Text>
                <Text style={[styles.guideTitle, { color: theme.textPrimary }]}>
                  {guide.title}
                </Text>
                <Text
                  style={[styles.guideSummary, { color: theme.textSecondary }]}
                  numberOfLines={2}
                >
                  {guide.summary}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Guide Reader Modal */}
      <GuideReaderModal
        guide={activeGuide}
        visible={!!activeGuide}
        onClose={() => setActiveGuide(null)}
      />
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.md,
  },
  backButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
  titleCol: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
  },
  scrollContent: {
    padding: spacing.base,
    gap: spacing.lg,
  },
  categoryPills: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  categoryPillText: {
    fontSize: 13,
    fontWeight: '700',
  },
  featuredCard: {
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1.5,
    gap: spacing.sm,
    ...shadows.sm,
  },
  featuredBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
  },
  featuredTagText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  readTimeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  featuredContentRow: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  featuredIconBox: {
    width: 48,
    height: 48,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredIconText: {
    fontSize: 24,
    fontWeight: '900',
  },
  featuredTextCol: {
    flex: 1,
  },
  featuredJapanese: {
    fontSize: 12,
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 2,
  },
  featuredSummary: {
    fontSize: 13,
    lineHeight: 18,
  },
  guideList: {
    gap: spacing.md,
  },
  guideCard: {
    flexDirection: 'row',
    padding: spacing.md,
    borderRadius: radii.xl,
    borderWidth: 1,
    gap: spacing.md,
    alignItems: 'center',
    ...shadows.sm,
  },
  guideIconBox: {
    width: 48,
    height: 48,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideIconText: {
    fontSize: 24,
    fontWeight: '900',
  },
  guideInfoCol: {
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaCategory: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  metaReadTime: {
    fontSize: 11,
    fontWeight: '500',
  },
  guideJapanese: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  guideTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 1,
  },
  guideSummary: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
});
