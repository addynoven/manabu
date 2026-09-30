import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Volume2,
  Zap,
  RotateCcw,
  Search,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useDojoStore } from '../../dojo/store/useDojoStore';
import { speakJapanese } from '../../../core/audio/tts';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import {
  getLearnedVocabWords,
  type VocabWord,
} from '../services/vocabBank.service';
import { VocabPracticeModal } from '../components/VocabPracticeModal';

export function ReviewScreen() {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  const completedLessons = useDojoStore(state => state.completedLessons);
  const mastery = useProgressStore(state => state.mastery);

  const [activeFilter, setActiveFilter] = useState<'all' | 'needs-practice' | 'unit_1' | 'unit_2'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Practice Modal State
  const [practiceModalVisible, setPracticeModalVisible] = useState(false);
  const [practiceWords, setPracticeWords] = useState<VocabWord[]>([]);
  const [practiceTitle, setPracticeTitle] = useState('Vocabulary Practice');

  // Compute all learned words
  const completedLessonIds = useMemo(() => {
    return new Set(Object.keys(completedLessons));
  }, [completedLessons]);

  const allWords = useMemo(() => {
    return getLearnedVocabWords(completedLessonIds, mastery);
  }, [completedLessonIds, mastery]);

  // Weak / Needs practice words
  const weakWords = useMemo(() => {
    return allWords.filter(w => w.status === 'weak' || w.status === 'review');
  }, [allWords]);

  // Filtered words
  const filteredWords = useMemo(() => {
    let list = allWords;

    if (activeFilter === 'needs-practice') {
      list = list.filter(w => w.status === 'weak' || w.status === 'review');
    } else if (activeFilter === 'unit_1') {
      list = list.filter(w => w.unitNumber === 1);
    } else if (activeFilter === 'unit_2') {
      list = list.filter(w => w.unitNumber === 2);
    }

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        w =>
          w.japanese.toLowerCase().includes(q) ||
          w.reading.toLowerCase().includes(q) ||
          w.english.toLowerCase().includes(q) ||
          w.romaji.toLowerCase().includes(q),
      );
    }

    return list;
  }, [allWords, activeFilter, searchQuery]);

  const handlePlayAudio = async (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    await speakJapanese(text, { rate: 0.85 });
  };

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

  const handlePracticeSingleWord = (word: VocabWord) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setPracticeWords([word]);
    setPracticeTitle(`Practice: ${word.japanese}`);
    setPracticeModalVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View>
          <Text style={[styles.title, { color: theme.textPrimary }]}>復習 • Vocabulary & Phrases</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Review your unlocked words & master expressions
          </Text>
        </View>

        <View style={styles.headerBadges}>
          <View style={[styles.countPill, { backgroundColor: theme.primary + '20' }]}>
            <Text style={[styles.countPillText, { color: theme.primary }]}>
              {allWords.length} Words
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 32 }]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Top Action Banner */}
        <View style={[styles.actionBanner, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <View style={styles.bannerRow}>
            <View style={[styles.bannerIconBox, { backgroundColor: theme.primary + '20' }]}>
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
                Practice Due Words
              </Text>
            </Pressable>

            <Pressable
              style={[styles.secondaryBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
              onPress={() => handleStartPractice('mistakes')}
              accessibilityLabel="Practice mistakes"
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

        {/* Filter Pills */}
        <View style={styles.filtersRow}>
          {[
            { id: 'all', label: `All Words (${allWords.length})` },
            { id: 'needs-practice', label: `Needs Review (${weakWords.length})` },
            { id: 'unit_1', label: 'Unit 1' },
            { id: 'unit_2', label: 'Unit 2' },
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
                onPress={() => setActiveFilter(f.id as any)}
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
        </View>

        {/* Words Bank List Header */}
        <View style={styles.listHeaderRow}>
          <Text style={[styles.listHeaderTitle, { color: theme.textSecondary }]}>
            WORDS & PHRASES ({filteredWords.length})
          </Text>
          <Text style={[styles.listHeaderHint, { color: theme.textMuted }]}>
            Tap card to practice
          </Text>
        </View>

        {/* Words Bank Cards */}
        {filteredWords.length === 0 ? (
          <View style={[styles.emptyBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <CheckCircle2 size={36} color={theme.success} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>No words match filter</Text>
            <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
              Try clearing your search query or switching filters.
            </Text>
          </View>
        ) : (
          <View style={styles.wordsList}>
            {filteredWords.map(word => (
              <Pressable
                key={word.id}
                style={[styles.wordRowCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
                onPress={() => handlePracticeSingleWord(word)}
                accessibilityLabel={`Practice ${word.japanese}`}
              >
                <View style={styles.wordMain}>
                  <View style={styles.wordTitleRow}>
                    <CopyableJapaneseText text={word.japanese}>
                      <Text style={[styles.wordJp, { color: theme.textPrimary }]}>
                        {word.japanese}
                      </Text>
                    </CopyableJapaneseText>
                    {word.reading && word.reading !== word.japanese && (
                      <View style={[styles.readingTag, { backgroundColor: theme.surfaceSubtle }]}>
                        <Text style={[styles.wordReading, { color: theme.textSecondary }]} numberOfLines={1}>
                          {word.reading}
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text style={[styles.wordEnglish, { color: theme.textPrimary }]}>
                    {word.english}
                  </Text>

                  <View style={styles.wordMetaRow}>
                    <Text style={[styles.wordUnitTag, { color: theme.textMuted }]}>
                      Unit {word.unitNumber}
                    </Text>

                    {word.status === 'weak' ? (
                      <View style={[styles.strengthBadge, { backgroundColor: '#EF444420' }]}>
                        <AlertCircle size={12} color="#EF4444" />
                        <Text style={[styles.strengthText, { color: '#EF4444' }]}>
                          Needs Practice ({word.incorrectCount} miss)
                        </Text>
                      </View>
                    ) : word.status === 'strong' ? (
                      <View style={[styles.strengthBadge, { backgroundColor: '#10B98120' }]}>
                        <CheckCircle2 size={12} color="#10B981" />
                        <Text style={[styles.strengthText, { color: '#10B981' }]}>
                          Strong
                        </Text>
                      </View>
                    ) : (
                      <View style={[styles.strengthBadge, { backgroundColor: '#F59E0B20' }]}>
                        <Text style={[styles.strengthText, { color: '#F59E0B' }]}>
                          Review Soon
                        </Text>
                      </View>
                    )}
                  </View>
                </View>

                {/* Speaker Button */}
                <Pressable
                  style={[styles.speakerBtn, { backgroundColor: theme.surfaceSubtle }]}
                  onPress={() => handlePlayAudio(word.audioText)}
                  accessibilityLabel={`Pronounce ${word.japanese}`}
                  hitSlop={8}
                >
                  <Volume2 size={20} color={theme.primary} />
                </Pressable>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>

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
  actionBanner: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 18,
    marginBottom: 16,
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
    marginBottom: 14,
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
  filtersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
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
    marginBottom: 10,
  },
  listHeaderTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  listHeaderHint: {
    fontSize: 11,
    fontWeight: '600',
  },
  wordsList: {
    gap: 10,
  },
  wordRowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 16,
    ...shadows.sm,
  },
  wordMain: {
    flex: 1,
    marginRight: 12,
  },
  wordTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 6,
  },
  wordJp: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.2,
  },
  readingTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  wordReading: {
    fontSize: 13,
    fontWeight: '600',
  },
  wordEnglish: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  wordMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  wordUnitTag: {
    fontSize: 11,
    fontWeight: '700',
  },
  strengthBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
  },
  strengthText: {
    fontSize: 10,
    fontWeight: '700',
  },
  speakerBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyBox: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: 28,
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
  },
});
