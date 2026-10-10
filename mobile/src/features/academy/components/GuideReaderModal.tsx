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
import type { LearningGuide } from '../data/guides';

interface GuideReaderModalProps {
  guide: LearningGuide | null;
  visible: boolean;
  onClose: () => void;
}

export function GuideReaderModal({
  guide,
  visible,
  onClose,
}: GuideReaderModalProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  if (!guide) return null;

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
        {/* Navigation Bar */}
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <Pressable
            onPress={onClose}
            style={[styles.backButton, { backgroundColor: theme.surfaceSubtle }]}
          >
            <Text style={[styles.backText, { color: theme.textPrimary }]}>
              ← Back
            </Text>
          </Pressable>
          <View style={styles.headerTitleContainer}>
            <Text
              style={[styles.headerCategory, { color: theme.primary }]}
              numberOfLines={1}
            >
              {guide.category.toUpperCase()} • {guide.readTime}
            </Text>
          </View>
          <View style={{ width: 60 }} />
        </View>

        {/* Article Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Banner */}
          <View
            style={[
              styles.heroBanner,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <View
              style={[
                styles.iconBadge,
                { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
              ]}
            >
              <Text style={[styles.iconText, { color: theme.primary }]}>
                {guide.icon}
              </Text>
            </View>
            <Text style={[styles.japaneseTitle, { color: theme.textSecondary }]}>
              {guide.japaneseTitle}
            </Text>
            <Text style={[styles.mainTitle, { color: theme.textPrimary }]}>
              {guide.title}
            </Text>
            <Text style={[styles.summaryText, { color: theme.textSecondary }]}>
              {guide.summary}
            </Text>
          </View>

          {/* Sections */}
          {guide.sections.map((section, sIdx) => (
            <View key={sIdx} style={styles.sectionBlock}>
              <Text style={[styles.sectionHeading, { color: theme.textPrimary }]}>
                {section.title}
              </Text>

              {section.content.map((paragraph, pIdx) => (
                <Text
                  key={pIdx}
                  style={[styles.paragraphText, { color: theme.textPrimary }]}
                >
                  {paragraph}
                </Text>
              ))}

              {/* Callout Box */}
              {section.callout && (
                <View
                  style={[
                    styles.calloutCard,
                    {
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Text
                    style={[styles.calloutTitle, { color: theme.textPrimary }]}
                  >
                    📌 {section.callout.title}
                  </Text>
                  <View style={styles.calloutList}>
                    {section.callout.items.map((item, iIdx) => (
                      <View
                        key={iIdx}
                        style={[
                          styles.calloutItem,
                          {
                            backgroundColor: theme.surfaceSubtle,
                            borderColor: theme.border,
                          },
                        ]}
                      >
                        <View style={styles.calloutItemLeft}>
                          <Text
                            style={[
                              styles.calloutItemJapanese,
                              { color: theme.textPrimary },
                            ]}
                          >
                            {item.japanese}
                          </Text>
                          {item.romaji && (
                            <Text
                              style={[
                                styles.calloutItemRomaji,
                                { color: theme.primary },
                              ]}
                            >
                              {item.romaji}
                            </Text>
                          )}
                          {item.meaning && (
                            <Text
                              style={[
                                styles.calloutItemMeaning,
                                { color: theme.textSecondary },
                              ]}
                            >
                              {item.meaning}
                            </Text>
                          )}
                          {item.note && (
                            <Text
                              style={[
                                styles.calloutItemNote,
                                { color: theme.textSecondary },
                              ]}
                            >
                              💡 {item.note}
                            </Text>
                          )}
                        </View>
                        <AudioButton
                          text={item.japanese}
                          size="sm"
                          variant="icon"
                        />
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* ProTip Box */}
              {section.proTip && (
                <View
                  style={[
                    styles.proTipCard,
                    {
                      backgroundColor: theme.primaryLight + '20',
                      borderLeftColor: theme.primary,
                    },
                  ]}
                >
                  <Text style={[styles.proTipTitle, { color: theme.primary }]}>
                    ⚡ DOJO PRO TIP
                  </Text>
                  <Text
                    style={[styles.proTipContent, { color: theme.textPrimary }]}
                  >
                    {section.proTip}
                  </Text>
                </View>
              )}
            </View>
          ))}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.md,
  },
  backText: {
    fontSize: 14,
    fontWeight: '700',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerCategory: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  scrollContent: {
    padding: spacing.base,
    gap: spacing.xl,
  },
  heroBanner: {
    borderRadius: radii.xl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    ...shadows.sm,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: radii.xl,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  iconText: {
    fontSize: 32,
    fontWeight: '900',
  },
  japaneseTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  summaryText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  sectionBlock: {
    gap: spacing.sm,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  paragraphText: {
    fontSize: 15,
    lineHeight: 22,
  },
  calloutCard: {
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    marginTop: spacing.xs,
  },
  calloutTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  calloutList: {
    gap: spacing.sm,
  },
  calloutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.sm,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  calloutItemLeft: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  calloutItemJapanese: {
    fontSize: 18,
    fontWeight: '800',
  },
  calloutItemRomaji: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  calloutItemMeaning: {
    fontSize: 13,
    marginTop: 2,
  },
  calloutItemNote: {
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
  proTipCard: {
    padding: spacing.md,
    borderRadius: radii.md,
    borderLeftWidth: 4,
    marginTop: spacing.xs,
  },
  proTipTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  proTipContent: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
});
