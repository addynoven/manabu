import React, { useMemo, useState } from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAppTheme } from '../../../core/theme';
import { radii, shadows, spacing } from '../../../core/theme';
import { LEARNING_RESOURCES, type LearningResource } from '../data/resources';

const CATEGORIES = [
  'All',
  'Apps',
  'Textbooks',
  'YouTube',
  'Podcasts',
  'Immersion',
  'Grammar',
] as const;

export function ResourcesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'freemium' | 'paid'>('all');

  const filteredResources = useMemo(() => {
    return LEARNING_RESOURCES.filter(res => {
      // Category match
      if (
        selectedCategory !== 'All' &&
        res.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // Price filter
      if (priceFilter !== 'all' && res.priceType !== priceFilter) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = res.name.toLowerCase().includes(q);
        const matchesDesc = res.description.toLowerCase().includes(q);
        const matchesTags = res.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, priceFilter, searchQuery]);

  const handleOpenLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch {
      // Ignore linking errors
    }
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
            Resource Vault (推薦集)
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Curated High-Impact Japanese Study Tools
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View
          style={[
            styles.searchContainer,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search resources, tags, or topics..."
            placeholderTextColor={theme.textMuted}
            style={[styles.searchInput, { color: theme.textPrimary }]}
            clearButtonMode="while-editing"
          />
        </View>

        {/* Category Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <Pressable
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={[
                  styles.filterPill,
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
                    styles.filterPillText,
                    { color: isSelected ? theme.textOnPrimary : theme.textSecondary },
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Price Filter Chips */}
        <View style={styles.priceRow}>
          {(['all', 'free', 'freemium', 'paid'] as const).map(p => {
            const isSelected = priceFilter === p;
            return (
              <Pressable
                key={p}
                onPress={() => setPriceFilter(p)}
                style={[
                  styles.priceChip,
                  {
                    backgroundColor: isSelected
                      ? theme.surface
                      : theme.surfaceSubtle,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.priceChipText,
                    {
                      color: isSelected ? theme.primary : theme.textSecondary,
                      fontWeight: isSelected ? '700' : '500',
                    },
                  ]}
                >
                  {p === 'all'
                    ? 'All Prices'
                    : p.charAt(0).toUpperCase() + p.slice(1)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Results Counter */}
        <Text style={[styles.resultsCount, { color: theme.textSecondary }]}>
          Showing {filteredResources.length} curated resources
        </Text>

        {/* Resource Cards */}
        <View style={styles.cardList}>
          {filteredResources.map(item => {
            const priceBadgeColor =
              item.priceType === 'free'
                ? '#10B981'
                : item.priceType === 'freemium'
                  ? '#8B5CF6'
                  : '#F59E0B';

            return (
              <View
                key={item.id}
                style={[
                  styles.resourceCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: item.featured ? theme.primary : theme.border,
                  },
                ]}
              >
                {/* Top Row: Name, Japanese Name, and Price Badge */}
                <View style={styles.cardTopRow}>
                  <View style={styles.cardTitleCol}>
                    <Text
                      style={[styles.resourceName, { color: theme.textPrimary }]}
                    >
                      {item.name}
                    </Text>
                    {item.nameJa && (
                      <Text
                        style={[
                          styles.resourceNameJa,
                          { color: theme.textSecondary },
                        ]}
                      >
                        {item.nameJa}
                      </Text>
                    )}
                  </View>

                  <View
                    style={[
                      styles.priceBadge,
                      { backgroundColor: priceBadgeColor + '20' },
                    ]}
                  >
                    <Text
                      style={[styles.priceBadgeText, { color: priceBadgeColor }]}
                    >
                      {item.priceType.toUpperCase()}
                    </Text>
                  </View>
                </View>

                {/* Rating & Category Meta */}
                <View style={styles.metaBadgeRow}>
                  <View
                    style={[
                      styles.ratingBadge,
                      { backgroundColor: theme.surfaceSubtle },
                    ]}
                  >
                    <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                  </View>
                  <View
                    style={[
                      styles.categoryTag,
                      { backgroundColor: theme.surfaceSubtle },
                    ]}
                  >
                    <Text
                      style={[
                        styles.categoryTagText,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {item.category.toUpperCase()} • {item.difficulty}
                    </Text>
                  </View>
                </View>

                {/* Description */}
                <Text
                  style={[
                    styles.descriptionText,
                    { color: theme.textSecondary },
                  ]}
                >
                  {item.description}
                </Text>

                {/* Tags Row */}
                <View style={styles.tagList}>
                  {item.tags.map((tag, tIdx) => (
                    <View
                      key={tIdx}
                      style={[
                        styles.tagPill,
                        {
                          backgroundColor: theme.surfaceSubtle,
                          borderColor: theme.border,
                        },
                      ]}
                    >
                      <Text
                        style={[styles.tagPillText, { color: theme.textMuted }]}
                      >
                        #{tag}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* Action Link Button */}
                <Pressable
                  onPress={() => handleOpenLink(item.url)}
                  style={[
                    styles.openButton,
                    {
                      backgroundColor: theme.surfaceSubtle,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Text
                    style={[styles.openButtonText, { color: theme.primary }]}
                  >
                    Explore Resource ↗
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
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
    gap: spacing.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    borderRadius: radii.xl,
    borderWidth: 1,
    height: 46,
    ...shadows.sm,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  filterRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  filterPillText: {
    fontSize: 13,
    fontWeight: '700',
  },
  priceRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  priceChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.sm,
    borderWidth: 1,
  },
  priceChipText: {
    fontSize: 12,
  },
  resultsCount: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: spacing.xs,
  },
  cardList: {
    gap: spacing.md,
  },
  resourceCard: {
    padding: spacing.lg,
    borderRadius: radii.xl,
    borderWidth: 1.5,
    gap: spacing.sm,
    ...shadows.sm,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitleCol: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  resourceName: {
    fontSize: 17,
    fontWeight: '800',
  },
  resourceNameJa: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: '600',
  },
  priceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
  },
  priceBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  metaBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  ratingBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '700',
  },
  categoryTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  categoryTagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 18,
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  tagPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.sm,
    borderWidth: 1,
  },
  tagPillText: {
    fontSize: 10,
    fontWeight: '600',
  },
  openButton: {
    paddingVertical: 8,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xs,
  },
  openButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
});
