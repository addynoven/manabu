import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../../../core/theme';
import { radii, shadows, spacing } from '../../../core/theme';
import { AudioButton } from '../../../core/audio/components/AudioButton';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import type { VocabEntry } from '../models/vocabulary.model';

interface VocabSetDictionaryModalProps {
  visible: boolean;
  onClose: () => void;
  setName: string;
  vocabList: VocabEntry[];
}

export function VocabSetDictionaryModal({
  visible,
  onClose,
  setName,
  vocabList,
}: VocabSetDictionaryModalProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <View>
            <Text style={[styles.title, { color: theme.textPrimary }]}>
              {setName} Dictionary
            </Text>
            <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
              {vocabList.length} Words • Tap 🔊 for pronunciation
            </Text>
          </View>
          <Pressable
            onPress={onClose}
            style={[styles.closeButton, { backgroundColor: theme.surfaceSubtle }]}
          >
            <Text style={[styles.closeText, { color: theme.textPrimary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Vocab Entries */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {vocabList.map((item, index) => {
            const displayWord = item.kanji || item.kana;
            const subReading = item.kanji ? item.kana : null;

            return (
              <View
                key={`${item.jmdict_seq || ''}_${item.kanji || ''}_${item.kana}_${index}`}
                style={[
                  styles.vocabCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View style={styles.leftCol}>
                  <CopyableJapaneseText text={displayWord}>
                    <Text style={[styles.wordText, { color: theme.textPrimary }]}>
                      {displayWord}
                    </Text>
                  </CopyableJapaneseText>
                  {subReading && (
                    <Text
                      style={[styles.readingText, { color: theme.primary }]}
                    >
                      {subReading}
                    </Text>
                  )}
                  <Text
                    style={[styles.definitionText, { color: theme.textSecondary }]}
                  >
                    {item.waller_definition}
                  </Text>
                </View>

                <AudioButton text={displayWord} size="sm" variant="icon" />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: spacing.md,
    gap: spacing.md,
  },
  vocabCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
    ...shadows.sm,
  },
  leftCol: {
    flex: 1,
    paddingRight: spacing.md,
  },
  wordText: {
    fontSize: 22,
    fontWeight: '800',
  },
  readingText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  definitionText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
    lineHeight: 18,
  },
});
