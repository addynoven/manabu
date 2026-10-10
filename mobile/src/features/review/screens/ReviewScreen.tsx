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
  Layers,
  ChevronDown,
  ChevronUp,
  Flame,
  ArrowRight,
} from 'lucide-react-native';
import { router } from 'expo-router';
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
import { getStageGroup } from '../services/srsEngine';
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

  // 5 WaniKani SRS stage counts strictly for learned words
  const srsCounts = useMemo(() => {
    let apprentice = 0;
    let guru = 0;
    let master = 0;
    let enlightened = 0;
    let burned = 0;

    allWords.forEach(w => {
      const record = mastery[w.japanese];
      const stage = record?.srsStage || 'apprentice-1';
      const group = getStageGroup(stage as any);
      if (group === 'burned') burned++;
      else if (group === 'enlightened') enlightened++;
      else if (group === 'master') master++;
      else if (group === 'guru') guru++;
      else apprentice++;
    });

    return { apprentice, guru, master, enlightened, burned };
  }, [allWords, mastery]);

  const [nowTimestamp] = useState(() => Date.now());

  // Words currently due for SRS review (timers expired or newly learned)
  const dueWords = useMemo(() => {
    return allWords.filter(w => {
      const record = mastery[w.japanese];
      if (!record || !record.nextReviewAt) return true; // Newly learned from lesson
      if (record.srsStage === 'burned') return false; // Retired from daily queue
      return new Date(record.nextReviewAt).getTime() <= nowTimestamp;
    });
  }, [allWords, mastery, nowTimestamp]);

  // Burned words for optional Anki-style retention check
  const burnedWords = useMemo(() => {
    return allWords.filter(w => {
      const record = mastery[w.japanese];
      return record?.srsStage === 'burned';
    });
  }, [allWords, mastery]);

  // Active mistakes / Needs practice words (excludes burned and mastered words)
  const weakWords = useMemo(() => {
    return allWords.filter(w => {
      // Burned words are permanently mastered and cannot be active mistakes
      if (w.srsStage === 'burned') return false;
      // If word reached Guru, Master, or Enlightened, the past mistake is resolved
      if (w.srsStage?.startsWith('guru') || w.srsStage === 'master' || w.srsStage === 'enlightened') {
        return false;
      }
      // If strong with good accuracy, mistake is resolved
      if (w.status === 'strong' && w.accuracy >= 80) return false;
      // Active mistake if explicitly weak or has sub-80% accuracy in Apprentice
      return w.status === 'weak' || (w.incorrectCount > 0 && w.accuracy < 80);
    });
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

  const handleStartPractice = (mode: 'due' | 'mistakes' | 'burned') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    if (mode === 'mistakes') {
      const queue = weakWords.length > 0 ? weakWords : allWords.slice(0, 10);
      setPracticeWords(queue);
      setPracticeTitle('Review Mistakes');
    } else if (mode === 'burned') {
      setPracticeWords(burnedWords);
      setPracticeTitle('Burned Retention Check');
    } else {
      const queue = dueWords.length > 0 ? dueWords : allWords.slice(0, 10);
      setPracticeWords(queue);
      setPracticeTitle(dueWords.length > 0 ? 'SRS Review Session' : 'Practice Learned Words');
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
      {/* WaniKani 5-Stage SRS Dashboard */}
      <View style={[styles.srsDashboard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <View style={styles.srsHeaderRow}>
          <Text style={[styles.srsHeaderTitle, { color: theme.textSecondary }]}>
            SRS RETENTION STAGES
          </Text>
          <Text style={[styles.srsHeaderTotal, { color: theme.textMuted }]}>
            {allWords.length} learned words
          </Text>
        </View>

        <View style={styles.srsStagesRow}>
          {/* Apprentice */}
          <View style={[styles.srsStageCol, { backgroundColor: '#EC489915', borderColor: '#EC489940' }]}>
            <Text style={[styles.srsCount, { color: '#EC4899' }]}>{srsCounts.apprentice}</Text>
            <Text style={[styles.srsLabel, { color: '#EC4899' }]} numberOfLines={1}>Apprentice</Text>
          </View>

          {/* Guru */}
          <View style={[styles.srsStageCol, { backgroundColor: '#8B5CF615', borderColor: '#8B5CF640' }]}>
            <Text style={[styles.srsCount, { color: '#8B5CF6' }]}>{srsCounts.guru}</Text>
            <Text style={[styles.srsLabel, { color: '#8B5CF6' }]} numberOfLines={1}>Guru</Text>
          </View>

          {/* Master */}
          <View style={[styles.srsStageCol, { backgroundColor: '#3B82F615', borderColor: '#3B82F640' }]}>
            <Text style={[styles.srsCount, { color: '#3B82F6' }]}>{srsCounts.master}</Text>
            <Text style={[styles.srsLabel, { color: '#3B82F6' }]} numberOfLines={1}>Master</Text>
          </View>

          {/* Enlightened */}
          <View style={[styles.srsStageCol, { backgroundColor: '#06B6D415', borderColor: '#06B6D440' }]}>
            <Text style={[styles.srsCount, { color: '#06B6D4' }]}>{srsCounts.enlightened}</Text>
            <Text style={[styles.srsLabel, { color: '#06B6D4' }]} numberOfLines={1}>Enlightened</Text>
          </View>

          {/* Burned */}
          <View style={[styles.srsStageCol, { backgroundColor: '#F59E0B15', borderColor: '#F59E0B40' }]}>
            <Text style={[styles.srsCount, { color: '#F59E0B' }]}>{srsCounts.burned}</Text>
            <Text style={[styles.srsLabel, { color: '#F59E0B' }]} numberOfLines={1}>Burned</Text>
          </View>
        </View>
      </View>

      {/* Top Action Smart Decks Banner */}
      {allWords.length === 0 ? (
        <View style={[styles.emptyDojoBanner, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Text style={{ fontSize: 32, marginBottom: 8 }}>⛩️</Text>
          <Text style={[styles.emptyDojoTitle, { color: theme.textPrimary }]}>No Words in Review Queue</Text>
          <Text style={[styles.emptyDojoSub, { color: theme.textSecondary }]}>
            Complete Lesson 1 in the Dojo to add your first batch of vocabulary to the SRS review queue!
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.goToDojoBtn,
              { backgroundColor: theme.primary, transform: [{ scale: pressed ? 0.96 : 1 }] },
            ]}
            android_ripple={{ color: 'rgba(255, 255, 255, 0.2)' }}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
              router.push('/(tabs)');
            }}
            accessibilityLabel="Go to Dojo"
          >
            <Text style={[styles.goToDojoBtnText, { color: theme.textOnPrimary }]}>
              Go to Dojo (Start Lesson 1)
            </Text>
            <ArrowRight size={16} color={theme.textOnPrimary} />
          </Pressable>
        </View>
      ) : (
        <View style={[styles.actionBanner, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.bannerRow}>
            <View style={[styles.bannerIconBox, { backgroundColor: dueWords.length > 0 ? theme.primaryLight : '#10B98115' }]}>
              {dueWords.length > 0 ? (
                <Zap size={22} color={theme.primary} />
              ) : (
                <CheckCircle2 size={22} color="#10B981" />
              )}
            </View>
            <View style={styles.bannerText}>
              <Text style={[styles.bannerTitle, { color: theme.textPrimary }]}>
                {dueWords.length > 0
                  ? `${dueWords.length} ${dueWords.length === 1 ? 'word' : 'words'} due for SRS review`
                  : 'All caught up! 🎉'}
              </Text>
              <Text style={[styles.bannerSub, { color: theme.textSecondary }]}>
                {dueWords.length > 0
                  ? 'Review on schedule to advance stages and cement long-term memory.'
                  : 'Come back when review timers expire, or drill your learned deck below.'}
              </Text>
            </View>
          </View>

          <View style={styles.actionButtonsContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.primaryBtn,
                {
                  backgroundColor: dueWords.length > 0 ? theme.primary : theme.surfaceSubtle,
                  transform: [{ scale: pressed ? 0.96 : 1 }],
                },
              ]}
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)' }}
              onPress={() => handleStartPractice('due')}
              accessibilityLabel="Start SRS Review"
            >
              <Zap size={16} color={dueWords.length > 0 ? theme.textOnPrimary : theme.textPrimary} />
              <Text
                style={[
                  styles.primaryBtnText,
                  { color: dueWords.length > 0 ? theme.textOnPrimary : theme.textPrimary },
                ]}
              >
                {dueWords.length > 0 ? `Start Review (${dueWords.length})` : 'Drill All Learned'}
              </Text>
            </Pressable>

            {(weakWords.length > 0 || burnedWords.length > 0) && (
              <View style={styles.secondaryButtonRow}>
                {weakWords.length > 0 && (
                  <Pressable
                    style={({ pressed }) => [
                      styles.secondaryBtn,
                      {
                        backgroundColor: theme.surfaceSubtle,
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        transform: [{ scale: pressed ? 0.96 : 1 }],
                      },
                    ]}
                    android_ripple={{ color: 'rgba(255, 255, 255, 0.08)' }}
                    onPress={() => handleStartPractice('mistakes')}
                    accessibilityLabel="Review mistakes"
                  >
                    <RotateCcw size={15} color={theme.textPrimary} />
                    <Text style={[styles.secondaryBtnText, { color: theme.textPrimary }]}>
                      Mistakes ({weakWords.length})
                    </Text>
                  </Pressable>
                )}

                {burnedWords.length > 0 && (
                  <Pressable
                    style={({ pressed }) => [
                      styles.secondaryBtn,
                      {
                        backgroundColor: '#F59E0B15',
                        borderColor: '#F59E0B40',
                        transform: [{ scale: pressed ? 0.96 : 1 }],
                      },
                    ]}
                    android_ripple={{ color: 'rgba(245, 158, 11, 0.2)' }}
                    onPress={() => handleStartPractice('burned')}
                    accessibilityLabel="Burned Retention Check"
                  >
                    <Flame size={15} color="#F59E0B" />
                    <Text style={[styles.secondaryBtnText, { color: '#F59E0B' }]}>
                      Burned Check ({burnedWords.length})
                    </Text>
                  </Pressable>
                )}
              </View>
            )}
          </View>
        </View>
      )}

      {allWords.length > 0 && (
        <>
          {/* Search Bar */}
          <View style={[styles.searchBox, { backgroundColor: theme.surface, borderColor: 'rgba(255, 255, 255, 0.08)' }]}>
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
                    style={({ pressed }) => [
                      styles.filterChip,
                      {
                        backgroundColor: isSelected ? theme.primary : theme.surface,
                        borderColor: isSelected ? theme.primary : 'rgba(255, 255, 255, 0.08)',
                        transform: [{ scale: pressed ? 0.95 : 1 }],
                      },
                    ]}
                    android_ripple={{ color: 'rgba(255, 255, 255, 0.1)' }}
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
                  ? `Search Results (${searchResults.length})`
                  : `Unit Decks (${visibleBundles.length})`}
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
        </>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View>
          <Text style={[styles.title, { color: theme.textPrimary }]}>復習 • SRS Review & Decks</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Spaced Repetition System • 5 Stages
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
            allWords.length === 0 ? null : (
              <View style={[styles.emptyBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <CheckCircle2 size={36} color={theme.success} />
                <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No decks match filter</Text>
                <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
                  All words in this filter are reviewed or mastered.
                </Text>
              </View>
            )
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
  srsDashboard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 14,
    ...shadows.sm,
  },
  srsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  srsHeaderTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  srsHeaderTotal: {
    fontSize: 11,
    fontWeight: '600',
  },
  srsStagesRow: {
    flexDirection: 'row',
    gap: 6,
  },
  srsStageCol: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  srsCount: {
    fontSize: 16,
    fontWeight: '900',
  },
  srsLabel: {
    fontSize: 8,
    fontWeight: '800',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: -0.2,
  },
  emptyDojoBanner: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  emptyDojoTitle: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 6,
  },
  emptyDojoSub: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 18,
    maxWidth: 280,
  },
  goToDojoBtn: {
    marginTop: 16,
    height: 44,
    paddingHorizontal: 20,
    borderRadius: radii.full,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  goToDojoBtnText: {
    fontSize: 13,
    fontWeight: '800',
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
  actionButtonsContainer: {
    gap: 8,
  },
  secondaryButtonRow: {
    flexDirection: 'row',
    gap: 8,
  },
  primaryBtn: {
    width: '100%',
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
    height: 42,
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
