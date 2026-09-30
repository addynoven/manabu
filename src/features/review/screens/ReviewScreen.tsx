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
  Layers,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { speakJapanese } from '../../../core/audio/tts';
import { ReviewSessionModal, type ReviewMode } from '../components/ReviewSessionModal';
import { ItemMasteryModal } from '../components/ItemMasteryModal';
import { getStageColor } from '../services/srsEngine';
import type { CharacterMastery } from '../../progress/models/progress.model';

export function ReviewScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const mastery = useProgressStore(state => state.mastery);
  const getWeakestCharacters = useProgressStore(state => state.getWeakestCharacters);
  const getDueReviewItems = useProgressStore(state => state.getDueReviewItems);
  const getSrsDistribution = useProgressStore(state => state.getSrsDistribution);

  const [activeTab, setActiveTab] = useState<'all' | 'kana' | 'kanji' | 'vocab'>('all');
  const selectedCategory = activeTab === 'all' ? undefined : activeTab;

  // Active Review Session Modal state
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [reviewMode, setReviewMode] = useState<ReviewMode>('daily');
  const [sessionKey, setSessionKey] = useState(0);

  // Item Inspection Modal state
  const [selectedMasteryItem, setSelectedMasteryItem] = useState<CharacterMastery | null>(null);
  const [itemModalVisible, setItemModalVisible] = useState(false);

  // Due items query
  const dueItems = useMemo(() => {
    if (!mastery) return [];
    return getDueReviewItems(selectedCategory);
  }, [mastery, selectedCategory, getDueReviewItems]);

  const dueCount = dueItems.length;

  // Weak items query
  const weakItems = useMemo(() => {
    if (!mastery) return [];
    return getWeakestCharacters(selectedCategory, 12);
  }, [mastery, selectedCategory, getWeakestCharacters]);

  // SRS Stage Distribution
  const srsDistribution = useMemo(() => {
    if (!mastery) {
      return { apprentice: 0, guru: 0, master: 0, enlightened: 0, burned: 0, total: 0 };
    }
    return getSrsDistribution(selectedCategory);
  }, [mastery, selectedCategory, getSrsDistribution]);

  const handlePlaySound = async (char: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(char, { rate: 0.85 });
  };

  const handleStartReview = (type: ReviewMode) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    setReviewMode(type);
    setSessionKey(k => k + 1);
    setReviewModalVisible(true);
  };

  const handleInspectItem = (item: CharacterMastery) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setSelectedMasteryItem(item);
    setItemModalVisible(true);
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
                  ? `${dueCount} items due for spaced repetition today`
                  : 'All caught up! Start a bonus reinforcement round'}
              </Text>
            </View>
          </View>

          <Pressable
            style={[styles.primaryButton, { backgroundColor: theme.primary }]}
            onPress={() => handleStartReview('daily')}
            accessibilityLabel="Start Daily Review"
          >
            <Zap size={18} color={theme.textOnPrimary} />
            <Text style={[styles.primaryButtonText, { color: theme.textOnPrimary }]}>
              {dueCount > 0 ? `Start Daily Review (${dueCount})` : 'Start Bonus Practice Run'}
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
              accessibilityLabel={`Filter by ${tab}`}
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

        {/* SRS Memory Vault Stages Bar */}
        <View style={[styles.srsCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.srsHeader}>
            <View style={styles.srsTitleRow}>
              <Layers size={16} color={theme.primary} />
              <Text style={[styles.srsTitle, { color: theme.textPrimary }]}>
                SRS Memory Vault ({srsDistribution.total})
              </Text>
            </View>
            <Text style={[styles.srsSubtitle, { color: theme.textMuted }]}>
              Spaced Repetition Tiers
            </Text>
          </View>

          <View style={styles.srsSegments}>
            <View style={[styles.srsPill, { backgroundColor: getStageColor('apprentice') + '20' }]}>
              <Text style={[styles.srsPillLabel, { color: getStageColor('apprentice') }]}>
                🌱 Apprentice
              </Text>
              <Text style={[styles.srsPillCount, { color: getStageColor('apprentice') }]}>
                {srsDistribution.apprentice}
              </Text>
            </View>

            <View style={[styles.srsPill, { backgroundColor: getStageColor('guru') + '20' }]}>
              <Text style={[styles.srsPillLabel, { color: getStageColor('guru') }]}>
                🌿 Guru
              </Text>
              <Text style={[styles.srsPillCount, { color: getStageColor('guru') }]}>
                {srsDistribution.guru}
              </Text>
            </View>

            <View style={[styles.srsPill, { backgroundColor: getStageColor('master') + '20' }]}>
              <Text style={[styles.srsPillLabel, { color: getStageColor('master') }]}>
                🥋 Master
              </Text>
              <Text style={[styles.srsPillCount, { color: getStageColor('master') }]}>
                {srsDistribution.master}
              </Text>
            </View>

            <View style={[styles.srsPill, { backgroundColor: getStageColor('enlightened') + '20' }]}>
              <Text style={[styles.srsPillLabel, { color: getStageColor('enlightened') }]}>
                ✨ Enlightened
              </Text>
              <Text style={[styles.srsPillCount, { color: getStageColor('enlightened') }]}>
                {srsDistribution.enlightened}
              </Text>
            </View>

            <View style={[styles.srsPill, { backgroundColor: getStageColor('burned') + '20' }]}>
              <Text style={[styles.srsPillLabel, { color: getStageColor('burned') }]}>
                🔥 Burned
              </Text>
              <Text style={[styles.srsPillCount, { color: getStageColor('burned') }]}>
                {srsDistribution.burned}
              </Text>
            </View>
          </View>
        </View>

        {/* Quick Launch Cards */}
        <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>Practice Modes</Text>
        <View style={styles.quickGrid}>
          <Pressable
            style={[styles.quickCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={() => handleStartReview('weakness')}
            accessibilityLabel="Start Weakness Sprint"
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
            accessibilityLabel="Start Speed Drill"
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
          <Text style={[styles.sectionHint, { color: theme.textMuted }]}>
            Tap item to inspect
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
              <Pressable
                key={item.character}
                style={[styles.itemCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
                onPress={() => handleInspectItem(item)}
                accessibilityLabel={`Inspect item ${item.character}`}
              >
                <View style={styles.itemLeft}>
                  <Text style={[styles.itemChar, { color: theme.textPrimary }]}>{item.character}</Text>
                  <View style={styles.itemMeta}>
                    <Text style={[styles.itemType, { color: theme.textMuted }]}>
                      {item.category.toUpperCase()} • STATUS: {(item.masteryLevel || 'learning').toUpperCase()}
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
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Real Review Session Modal */}
      <ReviewSessionModal
        visible={reviewModalVisible}
        onClose={() => setReviewModalVisible(false)}
        mode={reviewMode}
        category={selectedCategory}
        sessionKey={sessionKey}
      />

      {/* Individual Item Inspection Drawer Modal */}
      <ItemMasteryModal
        visible={itemModalVisible}
        onClose={() => setItemModalVisible(false)}
        masteryItem={selectedMasteryItem}
        onDrillItem={() => {
          setReviewMode('weakness');
          setSessionKey(k => k + 1);
          setReviewModalVisible(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  dueBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.full,
  },
  dueBadgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
  content: {
    padding: 20,
  },
  heroCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 20,
    marginBottom: 16,
    ...shadows.sm,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroIconBox: {
    width: 48,
    height: 48,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 17,
    fontWeight: '800',
  },
  heroSub: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    lineHeight: 16,
  },
  primaryButton: {
    height: 48,
    borderRadius: radii.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterPill: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
  },
  filterPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  srsCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
    ...shadows.sm,
  },
  srsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  srsTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  srsTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  srsSubtitle: {
    fontSize: 11,
    fontWeight: '600',
  },
  srsSegments: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  srsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.sm,
    flex: 1,
    minWidth: '45%',
  },
  srsPillLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  srsPillCount: {
    fontSize: 12,
    fontWeight: '800',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 10,
  },
  sectionHint: {
    fontSize: 11,
    fontWeight: '600',
  },
  quickGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  quickCard: {
    flex: 1,
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 14,
    ...shadows.sm,
  },
  quickIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  quickCardTitle: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 2,
  },
  quickCardSub: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 14,
  },
  emptyCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 10,
  },
  emptySub: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 16,
  },
  itemsList: {
    gap: 8,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: radii.lg,
    borderWidth: 1,
    padding: 12,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  itemChar: {
    fontSize: 24,
    fontWeight: '900',
    width: 38,
    textAlign: 'center',
  },
  itemMeta: {
    flex: 1,
  },
  itemType: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  itemAccuracy: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  audioButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
