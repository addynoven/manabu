import React, { useMemo, useState, useCallback } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Zap,
  RotateCcw,
  Search,
  CheckCircle2,
  BookOpen,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { speakJapanese } from '../../../core/audio/tts';
import {
  getLearnedVocabWords,
  groupWordsByUnit,
  type VocabWord,
  type UnitVocabBundle,
} from '../services/vocabBank.service';
import { VocabPracticeModal } from '../components/VocabPracticeModal';
import { UnitVocabBundleCard } from '../components/UnitVocabBundleCard';
import { CompactWordCard } from '../components/CompactWordCard';

export function ReviewScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const completedLessons = useDojoStore(state => state.completedLessons);
  const mastery = useProgressStore(state => state.mastery);

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnits, setExpandedUnits] = useState<Set<number>>(new Set([1]));

  // Practice Modal State
  const [practiceModalVisible, setPracticeModalVisible] = useState(false);
  const [practiceWords, setPracticeWords] = useState<VocabWord[]>([]);
  const [practiceTitle, setPracticeTitle] = useState('Vocabulary Practice');

  // Compute all learned words
  const completedLessonIds = useMemo(() => {
    return new Set(Object.keys(completedLessons));
  }, [completedLessons]);

  const allWords = useMemo(() => {
    return getLearnedVocabWords(completedLessonIds, mastery, { maxUnits: 30 });
  }, [completedLessonIds, mastery]);

  // Weak / Needs practice words
  const weakWords = useMemo(() => {
    return allWords.filter(w => w.status === 'weak' || w.status === 'review');
  }, [allWords]);

  // Extract available unit numbers dynamically
  const availableUnits = useMemo(() => {
    const set = new Set<number>();
    allWords.forEach(w => set.add(w.unitNumber));
    return Array.from(set).sort((a, b) => a - b);
  }, [allWords]);

  // Grouped Unit Bundles
  const allBundles = useMemo(() => {
    return groupWordsByUnit(allWords);
  }, [allWords]);

  // Filtered bundles
  const visibleBundles = useMemo(() => {
    if (activeFilter === 'needs-practice') {
      return allBundles.filter(b => b.weakCount > 0);
    }
    if (activeFilter.startsWith('unit_')) {
      const uNum = parseInt(activeFilter.replace('unit_', ''), 10);
      return allBundles.filter(b => b.unitNumber === uNum);
    }
    return allBundles;
  }, [allBundles, activeFilter]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allWords.filter(
      w =>
        w.japanese.toLowerCase().includes(q) ||
        w.reading.toLowerCase().includes(q) ||
        w.english.toLowerCase().includes(q) ||
        w.romaji.toLowerCase().includes(q),
    );
  }, [allWords, searchQuery]);

  const isSearchActive = searchQuery.trim().length > 0;

  const handlePlayAudio = useCallback(async (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(text, { rate: 0.85 });
  }, []);

  const handleStartPractice = (mode: 'due' | 'mistakes') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    if (mode === 'mistakes') {
      const mistakes = allWords.filter(w => w.incorrectCount > 0);
      const queue = mistakes.length > 0 ? mistakes : weakWords.slice(0, 10);
      setPracticeWords(queue.length > 0 ? queue : allWords.slice(0, 10));
      setPracticeTitle('Review Mistakes');
    } else {
      const due = weakWords.length > 0 ? weakWords.slice(0, 10) : allWords.slice(0, 10);
      setPracticeWords(due);
      setPracticeTitle('Practice Due Words');
    }
    setPracticeModalVisible(true);
  };

  const handlePracticeDeck = useCallback((bundle: UnitVocabBundle) => {
    setPracticeWords(bundle.words);
    setPracticeTitle(`Unit ${bundle.unitNumber}: ${bundle.unitTitle}`);
    setPracticeModalVisible(true);
  }, []);

  const handlePracticeSingleWord = useCallback((word: VocabWord) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setPracticeWords([word]);
    setPracticeTitle(`Practice: ${word.japanese}`);
    setPracticeModalVisible(true);
  }, []);

  const handleToggleUnitExpand = useCallback((unitNumber: number) => {
    setExpandedUnits(prev => {
      const next = new Set(prev);
      if (next.has(unitNumber)) {
        next.delete(unitNumber);
      } else {
        next.add(unitNumber);
      }
      return next;
    });
  }, []);

  const handleToggleAllUnits = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    if (expandedUnits.size === visibleBundles.length) {
      setExpandedUnits(new Set());
    } else {
      setExpandedUnits(new Set(visibleBundles.map(b => b.unitNumber)));
    }
  };

  const renderHeader = () => (
    <View style={styles.headerContent}>
      {/* Top Action Smart Decks Banner */}
      <View style={[styles.actionBanner, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <View style={styles.bannerRow}>
          <View style={[styles.bannerIconBox, { backgroundColor: theme.primaryLight }]}>
            <BookOpen size={24} color={theme.primary} />
          </View>
          <View style={styles.bannerText}>
            <Text style={[styles.bannerTitle, { color: theme.textPrimary }]}>
              {weakWords.length > 0
                ? `${weakWords.length} words need revision`
                : 'All learned words are strong!'}
            </Text>
            <Text style={[styles.bannerSub, { color: theme.textSecondary }]}>
              Reinforce pronunciation and translations through active recall.
            </Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.primaryBtn, { backgroundColor: theme.primary }]}
            onPress={() => handleStartPractice('due')}
            accessibilityLabel="Practice due words"
          >
            <Zap size={16} color={theme.textOnPrimary} />
            <Text style={[styles.primaryBtnText, { color: theme.textOnPrimary }]}>
              Practice Due ({weakWords.length})
            </Text>
          </Pressable>

          <Pressable
            style={[styles.secondaryBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            onPress={() => handleStartPractice('mistakes')}
            accessibilityLabel="Review mistakes"
          >
            <RotateCcw size={16} color={theme.textPrimary} />
            <Text style={[styles.secondaryBtnText, { color: theme.textPrimary }]}>
              Review Mistakes
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Search size={18} color={theme.textMuted} />
        <TextInput
          style={[styles.searchInput, { color: theme.textPrimary }]}
          placeholder="Search words, readings, or English meanings..."
          placeholderTextColor={theme.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <Pressable onPress={() => setSearchQuery('')} hitSlop={8}>
            <Text style={[styles.clearSearch, { color: theme.textMuted }]}>Clear</Text>
          </Pressable>
        )}
      </View>

      {/* Filter Chips Scroll */}
      {!isSearchActive && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScroll}
        >
          {[
            { id: 'all', label: `All Decks (${allBundles.length})` },
            { id: 'needs-practice', label: `Needs Review (${visibleBundles.filter(b => b.weakCount > 0).length})` },
            ...availableUnits.map(u => ({ id: `unit_${u}`, label: `Unit ${u}` })),
          ].map(f => {
            const isSelected = activeFilter === f.id;
            return (
              <Pressable
                key={f.id}
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: isSelected ? theme.primary : theme.surface,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
                onPress={() => {
                  setActiveFilter(f.id);
                  if (f.id.startsWith('unit_')) {
                    const uNum = parseInt(f.id.replace('unit_', ''), 10);
                    setExpandedUnits(new Set([uNum]));
                  }
                }}
                accessibilityLabel={f.label}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    {
                      color: isSelected ? theme.textOnPrimary : theme.textSecondary,
                      fontWeight: isSelected ? '700' : '500',
                    },
                  ]}
                >
                  {f.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}

      {/* Section Title & Collapse/Expand All Toggle */}
      <View style={styles.listHeaderRow}>
        <View style={styles.headerLeftTitle}>
          <Layers size={14} color={theme.textSecondary} />
          <Text style={[styles.listHeaderTitle, { color: theme.textSecondary }]}>
            {isSearchActive
              ? `SEARCH RESULTS (${searchResults.length})`
              : `UNIT DECKS & BUNDLES (${visibleBundles.length})`}
          </Text>
        </View>

        {!isSearchActive && visibleBundles.length > 1 && (
          <Pressable
            style={styles.expandAllBtn}
            onPress={handleToggleAllUnits}
            hitSlop={8}
            accessibilityLabel={
              expandedUnits.size === visibleBundles.length
                ? 'Collapse all unit decks'
                : 'Expand all unit decks'
            }
          >
            {expandedUnits.size === visibleBundles.length ? (
              <>
                <ChevronUp size={14} color={theme.primary} />
                <Text style={[styles.expandAllText, { color: theme.primary }]}>Collapse All</Text>
              </>
            ) : (
              <>
                <ChevronDown size={14} color={theme.primary} />
                <Text style={[styles.expandAllText, { color: theme.primary }]}>Expand All</Text>
              </>
            )}
          </Pressable>
        )}
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View>
          <Text style={[styles.title, { color: theme.textPrimary }]}>復習 • Vocabulary Decks</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Master words by unit bundles & SRS practice
          </Text>
        </View>

        <View style={styles.headerBadges}>
          <View style={[styles.countPill, { backgroundColor: theme.primaryLight }]}>
            <Text style={[styles.countPillText, { color: theme.primary }]}>
              {allWords.length} Words
            </Text>
          </View>
        </View>
      </View>

      {/* Main Content: Decks / Bundles or Search Results */}
      {isSearchActive ? (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CompactWordCard
              word={item}
              onPress={() => handlePracticeSingleWord(item)}
              onPlayAudio={handlePlayAudio}
            />
          )}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={
            <View style={[styles.emptyBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <CheckCircle2 size={36} color={theme.textMuted} />
              <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No words match search</Text>
              <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
                Check your spelling or try another keyword.
              </Text>
            </View>
          }
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 32 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <FlatList
          data={visibleBundles}
          keyExtractor={item => item.unitId}
          renderItem={({ item }) => (
            <UnitVocabBundleCard
              bundle={item}
              isExpanded={expandedUnits.has(item.unitNumber)}
              onToggleExpand={() => handleToggleUnitExpand(item.unitNumber)}
              onPracticeDeck={handlePracticeDeck}
              onPracticeWord={handlePracticeSingleWord}
              onPlayAudio={handlePlayAudio}
            />
          )}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={
            <View style={[styles.emptyBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <CheckCircle2 size={36} color={theme.success} />
              <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No decks match filter</Text>
              <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
                All words in this filter are reviewed or mastered.
              </Text>
            </View>
          }
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 32 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      )}

      {/* Vocabulary Practice Modal */}
      <VocabPracticeModal
        visible={practiceModalVisible}
        onClose={() => setPracticeModalVisible(false)}
        words={practiceWords}
        title={practiceTitle}
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
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  headerBadges: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.full,
  },
  countPillText: {
    fontSize: 12,
    fontWeight: '800',
  },
  content: {
    padding: 18,
  },
  headerContent: {
    gap: 14,
    marginBottom: 10,
  },
  actionBanner: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 18,
    ...shadows.sm,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  bannerIconBox: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  bannerSub: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    lineHeight: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryBtn: {
    flex: 1,
    height: 44,
    borderRadius: radii.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  primaryBtnText: {
    fontSize: 13,
    fontWeight: '800',
  },
  secondaryBtn: {
    flex: 1,
    height: 44,
    borderRadius: radii.lg,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: radii.lg,
    borderWidth: 1,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    padding: 0,
  },
  clearSearch: {
    fontSize: 12,
    fontWeight: '600',
  },
  filtersScroll: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 2,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.full,
    borderWidth: 1,
  },
  filterChipText: {
    fontSize: 12,
  },
  listHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 4,
  },
  headerLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  listHeaderTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  expandAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  expandAllText: {
    fontSize: 11,
    fontWeight: '700',
  },
  emptyBox: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
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
  },
});
