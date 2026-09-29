import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  RotateCcw,
  AlertTriangle,
  Zap,
  Volume2,
  CheckCircle2,
  Flame,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { speakJapanese } from '../../../core/audio/tts';
import { router } from 'expo-router';

export function ReviewScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const mastery = useProgressStore(state => state.mastery);
  const getWeakestCharacters = useProgressStore(state => state.getWeakestCharacters);
  const getMasteryDistribution = useProgressStore(state => state.getMasteryDistribution);

  const [activeTab, setActiveTab] = useState<'all' | 'kana' | 'kanji' | 'vocab'>('all');

  const selectedCategory = activeTab === 'all' ? undefined : activeTab;

  const weakItems = useMemo(() => {
    if (!mastery) return [];
    return getWeakestCharacters(selectedCategory, 12);
  }, [mastery, selectedCategory, getWeakestCharacters]);

  const distribution = useMemo(() => {
    if (!mastery) return { mastered: 0, learning: 0, needsPractice: 0, total: 0 };
    return getMasteryDistribution(selectedCategory);
  }, [mastery, selectedCategory, getMasteryDistribution]);

  const dueCount = useMemo(() => {
    // Items needing practice or in learning phase
    return distribution.needsPractice + Math.min(10, distribution.learning);
  }, [distribution]);

  const handlePlaySound = async (char: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(char, { rate: 0.85 });
  };

  const handleStartReview = (_type: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    // Direct user to appropriate practice or kana dojo
    router.push('/(tabs)');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View>
          <Text style={[styles.title, { color: theme.textPrimary }]}>復習 • Review Hub</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Targeted SRS recall & weakness mastery
          </Text>
        </View>
        <View style={[styles.dueBadge, { backgroundColor: dueCount > 0 ? theme.primary : theme.surfaceSubtle }]}>
          <Text style={[styles.dueBadgeText, { color: dueCount > 0 ? theme.textOnPrimary : theme.textMuted }]}>
            {dueCount} Due
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 32 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Queue Hero Card */}
        <View style={[styles.heroCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.heroTop}>
            <View style={[styles.heroIconBox, { backgroundColor: theme.primary + '20' }]}>
              <RotateCcw size={24} color={theme.primary} />
            </View>
            <View style={styles.heroText}>
              <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>Daily SRS Queue</Text>
              <Text style={[styles.heroSub, { color: theme.textSecondary }]}>
                {dueCount > 0
                  ? `${dueCount} items due for memory reinforcement today`
                  : 'All caught up! Excellent retention streak'}
              </Text>
            </View>
          </View>

          <Pressable
            style={[styles.primaryButton, { backgroundColor: theme.primary }]}
            onPress={() => handleStartReview('daily')}
          >
            <Zap size={18} color={theme.textOnPrimary} />
            <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
              {dueCount > 0 ? `Start Daily Review (${dueCount})` : 'Start Bonus Speed Run'}
            </Text>
          </Pressable>
        </View>

        {/* Category Filters */}
        <View style={styles.filterRow}>
          {(['all', 'kana', 'kanji', 'vocab'] as const).map(tab => (
            <Pressable
              key={tab}
              style={[
                styles.filterPill,
                { borderColor: theme.border, backgroundColor: theme.surface },
                activeTab === tab && { backgroundColor: theme.primary, borderColor: theme.primary },
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.filterPillText,
                  { color: theme.textSecondary },
                  activeTab === tab && { color: theme.textOnPrimary, fontWeight: '700' },
                ]}
              >
                {tab === 'all' ? 'All Items' : tab.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Quick Launch Cards */}
        <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>Practice Modes</Text>
        <View style={styles.quickGrid}>
          <Pressable
            style={[styles.quickCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={() => handleStartReview('weakness')}
          >
            <View style={[styles.quickIconCircle, { backgroundColor: '#EF4444' + '20' }]}>
              <AlertTriangle size={20} color="#EF4444" />
            </View>
            <Text style={[styles.quickCardTitle, { color: theme.textPrimary }]}>Weakness Sprint</Text>
            <Text style={[styles.quickCardSub, { color: theme.textSecondary }]}>
              Target {weakItems.length} items with low accuracy
            </Text>
          </Pressable>

          <Pressable
            style={[styles.quickCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={() => handleStartReview('speed')}
          >
            <View style={[styles.quickIconCircle, { backgroundColor: '#F59E0B' + '20' }]}>
              <Flame size={20} color="#F59E0B" />
            </View>
            <Text style={[styles.quickCardTitle, { color: theme.textPrimary }]}>Speed Drill</Text>
            <Text style={[styles.quickCardSub, { color: theme.textSecondary }]}>
              60s rapid-fire active recall test
            </Text>
          </Pressable>
        </View>

        {/* Weakness Vault List */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>
            Priority Focus Items ({weakItems.length})
          </Text>
        </View>

        {weakItems.length === 0 ? (
          <View style={[styles.emptyCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <CheckCircle2 size={36} color={theme.success} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No critical weaknesses!</Text>
            <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
              Complete drills in Dojo to identify items that need reinforcement.
            </Text>
          </View>
        ) : (
          <View style={styles.itemsList}>
            {weakItems.map(item => (
              <View
                key={item.character}
                style={[styles.itemCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
              >
                <View style={styles.itemLeft}>
                  <Text style={[styles.itemChar, { color: theme.textPrimary }]}>{item.character}</Text>
                  <View style={styles.itemMeta}>
                    <Text style={[styles.itemType, { color: theme.textMuted }]}>
                      {item.category.toUpperCase()} • STATUS: {item.masteryLevel.toUpperCase()}
                    </Text>
                    <Text style={[styles.itemAccuracy, { color: item.accuracy < 60 ? theme.error : theme.accent }]}>
                      {item.accuracy}% accuracy ({item.incorrect} misses)
                    </Text>
                  </View>
                </View>

                <Pressable
                  style={[styles.audioButton, { backgroundColor: theme.surfaceSubtle }]}
                  onPress={() => handlePlaySound(item.character)}
                  accessibilityLabel={`Pronounce ${item.character}`}
                  hitSlop={8}
                >
                  <Volume2 size={18} color={theme.textPrimary} />
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  dueBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.full,
  },
  dueBadgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: spacing.base,
    gap: spacing.md,
  },
  heroCard: {
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    gap: spacing.md,
    ...shadows.sm,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  heroIconBox: {
    width: 48,
    height: 48,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  heroSub: {
    fontSize: 13,
    marginTop: 2,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm + 2,
    borderRadius: radii.lg,
    gap: spacing.xs,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '700',
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  filterPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },
  quickGrid: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  quickCard: {
    flex: 1,
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    gap: spacing.xs,
    ...shadows.sm,
  },
  quickIconCircle: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  quickCardTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  quickCardSub: {
    fontSize: 12,
    lineHeight: 16,
  },
  emptyCard: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    gap: spacing.xs,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  emptySub: {
    fontSize: 13,
    textAlign: 'center',
  },
  itemsList: {
    gap: spacing.xs,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  itemChar: {
    fontSize: 24,
    fontWeight: '800',
    width: 36,
    textAlign: 'center',
  },
  itemMeta: {
    flex: 1,
  },
  itemType: {
    fontSize: 10,
    fontWeight: '700',
  },
  itemAccuracy: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  audioButton: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
