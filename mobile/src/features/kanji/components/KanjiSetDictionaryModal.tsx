import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PenTool } from 'lucide-react-native';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { AudioButton } from '../../../core/audio/components/AudioButton';
import { CopyableJapaneseText } from '../../../core/components/CopyableJapaneseText';
import type { KanjiEntry } from '../models/kanji.model';
import { extractKana } from '../lib/kanjiGenerator';
import { KanaTraceView } from '../../kana/components/KanaTraceView';

interface KanjiSetDictionaryModalProps {
  visible: boolean;
  onClose: () => void;
  setName: string;
  kanjiList: KanjiEntry[];
}

export function KanjiSetDictionaryModal({
  visible,
  onClose,
  setName,
  kanjiList,
}: KanjiSetDictionaryModalProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const [tracingChar, setTracingChar] = useState<string | null>(null);

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
              {kanjiList.length} Characters • Tap 🔊 audio or ✍️ stroke trace
            </Text>
          </View>
          <Pressable
            onPress={onClose}
            style={[styles.closeButton, { backgroundColor: theme.surfaceSubtle }]}
          >
            <Text style={[styles.closeText, { color: theme.textPrimary }]}>✕</Text>
          </Pressable>
        </View>

        {/* Kanji Entries */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {kanjiList.map((item, index) => (
            <View
              key={item.id || item.kanjiChar + index}
              style={[
                styles.kanjiCard,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                },
              ]}
            >
              {/* Glyph Section with Quad Box */}
              <View style={styles.glyphSection}>
                <View
                  style={[
                    styles.quadBox,
                    {
                      backgroundColor: theme.surfaceSubtle,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.quadCrossH,
                      { backgroundColor: theme.border },
                    ]}
                  />
                  <View
                    style={[
                      styles.quadCrossV,
                      { backgroundColor: theme.border },
                    ]}
                  />
                  <CopyableJapaneseText text={item.kanjiChar}>
                    <Text style={[styles.kanjiGlyph, { color: theme.textPrimary }]}>
                      {item.kanjiChar}
                    </Text>
                  </CopyableJapaneseText>
                </View>
                <View style={styles.actionButtonsRow}>
                  <AudioButton
                    text={extractKana(item.onyomi[0] || item.kunyomi[0] || '') || item.kanjiChar}
                    size="sm"
                    variant="icon"
                  />
                  <Pressable
                    onPress={() => setTracingChar(item.kanjiChar)}
                    style={({ pressed }) => [
                      styles.traceBtn,
                      { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                      pressed && styles.traceBtnPressed,
                    ]}
                    accessibilityLabel={`Practice stroke order for ${item.kanjiChar}`}
                    hitSlop={6}
                  >
                    <PenTool size={14} color={theme.primary} />
                  </Pressable>
                </View>
              </View>

              {/* Details Section */}
              <View style={styles.detailsSection}>
                {/* On'yomi */}
                {item.onyomi && item.onyomi.length > 0 && (
                  <View style={styles.readingRow}>
                    <Text
                      style={[
                        styles.readingLabel,
                        { color: theme.primary },
                      ]}
                    >
                      音 (On):
                    </Text>
                    <Text
                      style={[
                        styles.readingValue,
                        { color: theme.textPrimary },
                      ]}
                    >
                      {item.onyomi.join(', ')}
                    </Text>
                  </View>
                )}

                {/* Kun'yomi */}
                {item.kunyomi && item.kunyomi.length > 0 && (
                  <View style={styles.readingRow}>
                    <Text
                      style={[
                        styles.readingLabel,
                        { color: theme.accent },
                      ]}
                    >
                      訓 (Kun):
                    </Text>
                    <Text
                      style={[
                        styles.readingValue,
                        { color: theme.textPrimary },
                      ]}
                    >
                      {item.kunyomi.join(', ')}
                    </Text>
                  </View>
                )}

                {/* Meanings */}
                <View style={styles.meaningsRow}>
                  <Text
                    style={[
                      styles.meaningsText,
                      { color: theme.textSecondary },
                    ]}
                  >
                    {item.meanings.join('; ')}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {tracingChar && (
          <Modal
            visible={!!tracingChar}
            animationType="slide"
            presentationStyle="fullScreen"
            onRequestClose={() => setTracingChar(null)}
          >
            <KanaTraceView
              initialChar={tracingChar}
              onClose={() => setTracingChar(null)}
            />
          </Modal>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  actionButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  traceBtn: {
    width: 32,
    height: 32,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  traceBtnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.94 }],
  },
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
  kanjiCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
    ...shadows.sm,
  },
  glyphSection: {
    alignItems: 'center',
    gap: spacing.xs,
    marginRight: spacing.md,
  },
  quadBox: {
    width: 72,
    height: 72,
    borderRadius: radii.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  quadCrossH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    opacity: 0.4,
  },
  quadCrossV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    opacity: 0.4,
  },
  kanjiGlyph: {
    fontSize: 38,
    fontWeight: '800',
  },
  detailsSection: {
    flex: 1,
    gap: 4,
  },
  readingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    flexWrap: 'wrap',
  },
  readingLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
  readingValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  meaningsRow: {
    marginTop: 2,
  },
  meaningsText: {
    fontSize: 13,
    fontWeight: '500',
  },
});
