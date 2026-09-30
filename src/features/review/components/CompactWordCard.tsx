import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Volume2 } from 'lucide-react-native';
import { radii, useAppTheme } from '../../../core/theme';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import type { VocabWord } from '../services/vocabBank.service';

interface CompactWordCardProps {
  word: VocabWord;
  onPress: () => void;
  onPlayAudio: (text: string) => void;
}

export const CompactWordCard = React.memo(function CompactWordCard({
  word,
  onPress,
  onPlayAudio,
}: CompactWordCardProps) {
  const { colors: theme } = useAppTheme();

  const statusColor =
    word.status === 'weak'
      ? '#EF4444'
      : word.status === 'strong'
      ? '#10B981'
      : '#F59E0B';

  return (
    <Pressable
      style={[
        styles.card,
        { backgroundColor: theme.surface, borderColor: theme.border },
      ]}
      onPress={onPress}
      accessibilityLabel={`Practice ${word.japanese}: ${word.english}`}
    >
      {/* Left Status Accent Indicator */}
      <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <CopyableJapaneseText text={word.japanese}>
            <Text style={[styles.japanese, { color: theme.textPrimary }]}>
              {word.japanese}
            </Text>
          </CopyableJapaneseText>

          {word.reading && word.reading !== word.japanese && (
            <View style={[styles.readingBadge, { backgroundColor: theme.surfaceSubtle }]}>
              <Text style={[styles.readingText, { color: theme.textSecondary }]} numberOfLines={1}>
                {word.reading}
              </Text>
            </View>
          )}
        </View>

        <Text style={[styles.english, { color: theme.textSecondary }]} numberOfLines={1}>
          {word.english}
        </Text>
      </View>

      {/* Audio Button */}
      <Pressable
        style={[styles.audioBtn, { backgroundColor: theme.surfaceSubtle }]}
        onPress={() => onPlayAudio(word.audioText)}
        accessibilityLabel={`Pronounce ${word.japanese}`}
        hitSlop={8}
      >
        <Volume2 size={16} color={theme.primary} />
      </Pressable>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radii.lg,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  statusIndicator: {
    width: 4,
    height: 28,
    borderRadius: 2,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 2,
  },
  japanese: {
    fontSize: 16,
    fontWeight: '800',
  },
  readingBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  readingText: {
    fontSize: 11,
    fontWeight: '600',
  },
  english: {
    fontSize: 13,
    fontWeight: '500',
  },
  audioBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});
