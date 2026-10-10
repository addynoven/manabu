import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { Check } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import type { LessonItem, MatchPairItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';

interface MatchingPairsViewProps {
  item: LessonItem;
  onAllMatched: () => void;
}

function deterministicShuffle<T>(arr: T[], offset: number): T[] {
  return [...arr].sort((a, b) => {
    const hashA = (JSON.stringify(a) + offset).split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hashB = (JSON.stringify(b) + offset).split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return (hashA % 19) - (hashB % 19);
  });
}

export function MatchingPairsView({
  item,
  onAllMatched,
}: MatchingPairsViewProps) {
  const { colors: theme } = useAppTheme();

  const pairs: MatchPairItem[] = useMemo(() => {
    if (item.matchPairs && item.matchPairs.length > 0) {
      return item.matchPairs.slice(0, 4);
    }
    return [
      { id: '1', left: item.prompt, right: item.english },
    ];
  }, [item]);

  // Shuffled left and right items deterministically
  const leftItems = useMemo(() => deterministicShuffle(pairs, 3), [pairs]);
  const rightItems = useMemo(() => deterministicShuffle(pairs, 7), [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [mismatchedPair, setMismatchedPair] = useState<{ left: string; right: string } | null>(null);

  const checkPair = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      // Match!
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      const nextMatched = new Set(matchedIds);
      nextMatched.add(leftId);
      setMatchedIds(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      if (nextMatched.size === pairs.length) {
        setTimeout(() => onAllMatched(), 300);
      }
    } else {
      // Mismatch
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setMismatchedPair({ left: leftId, right: rightId });
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setMismatchedPair(null);
      }, 600);
    }
  };

  const handleLeftPress = (p: MatchPairItem) => {
    if (matchedIds.has(p.id) || mismatchedPair) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    speakJapanese(p.left, { rate: 1.0 }).catch(() => {});

    if (selectedRight) {
      checkPair(p.id, selectedRight);
    } else {
      setSelectedLeft(p.id);
    }
  };

  const handleRightPress = (p: MatchPairItem) => {
    if (matchedIds.has(p.id) || mismatchedPair) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});

    if (selectedLeft) {
      checkPair(selectedLeft, p.id);
    } else {
      setSelectedRight(p.id);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Badge */}
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: '#8B5CF620' }]}>
          <Text style={[styles.badgeText, { color: '#8B5CF6' }]}>MATCHING PAIRS</Text>
        </View>
        <Text style={[styles.instruction, { color: theme.textSecondary }]}>
          Tap a Japanese word, then tap its English meaning
        </Text>
      </View>

      {/* Row-based Matching Grid */}
      <View style={styles.rowsContainer}>
        {leftItems.map((leftPair, rowIndex) => {
          const rightPair = rightItems[rowIndex];
          if (!rightPair) return null;

          const leftMatched = matchedIds.has(leftPair.id);
          const leftSelected = selectedLeft === leftPair.id;
          const leftMismatch = mismatchedPair?.left === leftPair.id;

          const rightMatched = matchedIds.has(rightPair.id);
          const rightSelected = selectedRight === rightPair.id;
          const rightMismatch = mismatchedPair?.right === rightPair.id;

          return (
            <View key={`row-${rowIndex}`} style={styles.pairRow}>
              {/* Left card (Japanese) */}
              <Pressable
                disabled={leftMatched}
                onPress={() => handleLeftPress(leftPair)}
                style={[
                  styles.card,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                  leftSelected && { borderColor: theme.primary, backgroundColor: theme.primaryLight },
                  leftMatched && { borderColor: '#10B981', backgroundColor: '#10B98115', opacity: 0.6 },
                  leftMismatch && { borderColor: '#EF4444', backgroundColor: '#EF444415' },
                ]}
                accessibilityLabel={`Japanese: ${leftPair.left}`}
              >
                <Text
                  style={[
                    styles.cardTextJp,
                    { color: theme.textPrimary },
                    leftSelected && { color: theme.primary, fontWeight: '800' },
                    leftMatched && { color: '#10B981' },
                    leftMismatch && { color: '#EF4444' },
                  ]}
                  numberOfLines={2}
                >
                  {leftPair.left}
                </Text>
                {leftMatched && <Check size={16} color="#10B981" style={styles.checkIcon} />}
              </Pressable>

              {/* Right card (English) */}
              <Pressable
                disabled={rightMatched}
                onPress={() => handleRightPress(rightPair)}
                style={[
                  styles.card,
                  { backgroundColor: theme.surface, borderColor: theme.border },
                  rightSelected && { borderColor: theme.primary, backgroundColor: theme.primaryLight },
                  rightMatched && { borderColor: '#10B981', backgroundColor: '#10B98115', opacity: 0.6 },
                  rightMismatch && { borderColor: '#EF4444', backgroundColor: '#EF444415' },
                ]}
                accessibilityLabel={`English: ${rightPair.right}`}
              >
                <Text
                  style={[
                    styles.cardTextEng,
                    { color: theme.textPrimary },
                    rightSelected && { color: theme.primary, fontWeight: '800' },
                    rightMatched && { color: '#10B981' },
                    rightMismatch && { color: '#EF4444' },
                  ]}
                  numberOfLines={2}
                >
                  {rightPair.right}
                </Text>
                {rightMatched && <Check size={16} color="#10B981" style={styles.checkIcon} />}
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRow: {
    width: '100%',
    marginBottom: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '600',
  },
  rowsContainer: {
    width: '100%',
    gap: 14,
  },
  pairRow: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    minHeight: 74,
    padding: 12,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardTextJp: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  cardTextEng: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18,
  },
  checkIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});
