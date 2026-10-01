import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { ChevronDown, ChevronUp, Zap, CheckCircle2, AlertCircle } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, useAppTheme } from '../../../core/theme';
import type { UnitVocabBundle, VocabWord } from '../services/vocabBank.service';
import { CompactWordCard } from './CompactWordCard';

interface UnitVocabBundleCardProps {
  bundle: UnitVocabBundle;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onPracticeDeck: (bundle: UnitVocabBundle) => void;
  onPracticeWord: (word: VocabWord) => void;
  onPlayAudio: (text: string) => void;
}

export const UnitVocabBundleCard = React.memo(function UnitVocabBundleCard({
  bundle,
  isExpanded,
  onToggleExpand,
  onPracticeDeck,
  onPracticeWord,
  onPlayAudio,
}: UnitVocabBundleCardProps) {
  const { colors: theme } = useAppTheme();

  const handlePractice = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onPracticeDeck(bundle);
  };

  const handleToggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onToggleExpand();
  };

  return (
    <View
      style={[
        styles.bundleContainer,
        { backgroundColor: theme.surface, borderColor: theme.border },
      ]}
    >
      {/* Bundle Header / Deck Overview */}
      <Pressable
        style={styles.bundleHeader}
        onPress={handleToggle}
        accessibilityLabel={`Unit ${bundle.unitNumber}: ${bundle.unitTitle}. ${isExpanded ? 'Collapse' : 'Expand'} words.`}
      >
        <View style={styles.headerTop}>
          <View style={styles.badgeRow}>
            <View style={[styles.unitBadge, { backgroundColor: theme.primaryLight }]}>
              <Text style={[styles.unitBadgeText, { color: theme.primary }]}>
                Unit {bundle.unitNumber} Deck
              </Text>
            </View>

            <View style={styles.statsRow}>
              {bundle.weakCount > 0 ? (
                <View style={[styles.statPill, { backgroundColor: '#EF444415' }]}>
                  <AlertCircle size={11} color="#EF4444" />
                  <Text style={[styles.statPillText, { color: '#EF4444' }]}>
                    {bundle.weakCount} need practice
                  </Text>
                </View>
              ) : (
                <View style={[styles.statPill, { backgroundColor: '#10B98115' }]}>
                  <CheckCircle2 size={11} color="#10B981" />
                  <Text style={[styles.statPillText, { color: '#10B981' }]}>
                    All strong
                  </Text>
                </View>
              )}
              <Text style={[styles.totalCountText, { color: theme.textSecondary }]}>
                {bundle.totalCount} words
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.titleRow}>
          <Text style={[styles.unitTitle, { color: theme.textPrimary }]} numberOfLines={1}>
            {bundle.unitTitle}
          </Text>
          <View style={[styles.chevronBox, { backgroundColor: theme.surfaceSubtle }]}>
            {isExpanded ? (
              <ChevronUp size={16} color={theme.textPrimary} />
            ) : (
              <ChevronDown size={16} color={theme.textPrimary} />
            )}
          </View>
        </View>

        {/* Mastery Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBarBg, { backgroundColor: theme.surfaceSubtle }]}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${Math.max(5, bundle.masteryRate)}%`,
                  backgroundColor: bundle.masteryRate >= 80 ? '#10B981' : theme.primary,
                },
              ]}
            />
          </View>
          <Text style={[styles.progressLabel, { color: theme.textMuted }]}>
            {bundle.masteryRate}% Mastered ({bundle.strongCount}/{bundle.totalCount})
          </Text>
        </View>
      </Pressable>

      {/* Action Buttons Row */}
      <View style={[styles.actionRow, { borderTopColor: 'rgba(255, 255, 255, 0.06)' }]}>
        <Pressable
          style={({ pressed }) => [
            styles.practiceBtn,
            { backgroundColor: theme.primary, transform: [{ scale: pressed ? 0.97 : 1 }] },
          ]}
          android_ripple={{ color: 'rgba(255, 255, 255, 0.15)' }}
          onPress={handlePractice}
          accessibilityLabel={`Practice Unit ${bundle.unitNumber} Deck`}
        >
          <Zap size={14} color={theme.textOnPrimary} />
          <Text style={[styles.practiceBtnText, { color: theme.textOnPrimary }]}>
            Practice Deck ({bundle.totalCount})
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.toggleBtn,
            { backgroundColor: theme.surfaceSubtle, transform: [{ scale: pressed ? 0.97 : 1 }] },
          ]}
          android_ripple={{ color: 'rgba(255, 255, 255, 0.08)' }}
          onPress={handleToggle}
          accessibilityLabel={isExpanded ? 'Hide Words' : 'Show Words'}
        >
          <Text style={[styles.toggleBtnText, { color: theme.textPrimary }]}>
            {isExpanded ? 'Hide Words' : `Show ${bundle.totalCount} Words`}
          </Text>
        </Pressable>
      </View>

      {/* Expanded Word List */}
      {isExpanded && (
        <View style={[styles.wordsList, { borderTopColor: theme.border }]}>
          {bundle.words.map(word => (
            <CompactWordCard
              key={word.id}
              word={word}
              onPress={() => onPracticeWord(word)}
              onPlayAudio={onPlayAudio}
            />
          ))}
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  bundleContainer: {
    borderRadius: radii.xl,
    borderWidth: 1,
    marginBottom: 14,
    overflow: 'hidden',
    ...shadows.sm,
  },
  bundleHeader: {
    padding: 16,
  },
  headerTop: {
    marginBottom: 6,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unitBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
  },
  unitBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.full,
  },
  statPillText: {
    fontSize: 10,
    fontWeight: '700',
  },
  totalCountText: {
    fontSize: 11,
    fontWeight: '600',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  unitTitle: {
    fontSize: 16,
    fontWeight: '800',
    flex: 1,
    marginRight: 8,
  },
  chevronBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBarBg: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  practiceBtn: {
    flex: 1,
    height: 38,
    borderRadius: radii.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  practiceBtnText: {
    fontSize: 12,
    fontWeight: '800',
  },
  toggleBtn: {
    paddingHorizontal: 14,
    height: 38,
    borderRadius: radii.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },
  wordsList: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 4,
    borderTopWidth: 1,
  },
});
