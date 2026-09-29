import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { X, BookOpen, Check } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import type { DojoUnit } from '../models/dojo.model';

interface UnitSummaryModalProps {
  visible: boolean;
  unit: DojoUnit | null;
  onClose: () => void;
}

export function UnitSummaryModal({ visible, unit, onClose }: UnitSummaryModalProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();

  if (!unit) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View
          style={[
            styles.sheet,
            {
              backgroundColor: theme.surface,
              borderColor: theme.border,
              paddingBottom: insets.bottom + 20,
            },
          ]}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.headerTitleGroup}>
              <View style={[styles.iconPill, { backgroundColor: unit.themeColor + '20' }]}>
                <BookOpen size={18} color={unit.themeColor} />
              </View>
              <View>
                <Text style={[styles.unitNumber, { color: theme.textSecondary }]}>
                  UNIT {unit.unitNumber} SUMMARY
                </Text>
                <Text style={[styles.unitTitle, { color: theme.textPrimary }]}>
                  {unit.title}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => {
                Haptics.selectionAsync().catch(() => {});
                onClose();
              }}
              style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle }]}
              hitSlop={8}
            >
              <X size={18} color={theme.textPrimary} />
            </Pressable>
          </View>

          <ScrollView
            style={styles.scrollArea}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={[styles.sectionHeading, { color: theme.textSecondary }]}>
              KEY GRAMMAR & EXPRESSIONS (文法・重要表現)
            </Text>

            {(unit.summaryPoints || []).map((point, index) => (
              <View
                key={index}
                style={[styles.pointCard, { backgroundColor: theme.surfaceSubtle, borderColor: theme.borderSubtle }]}
              >
                <View style={[styles.checkCircle, { backgroundColor: theme.primary + '20' }]}>
                  <Check size={14} color={theme.primary} />
                </View>
                <Text style={[styles.pointText, { color: theme.textPrimary }]}>
                  {point}
                </Text>
              </View>
            ))}
          </ScrollView>

          <Pressable
            style={[styles.doneBtn, { backgroundColor: theme.primary }]}
            onPress={() => {
              Haptics.selectionAsync().catch(() => {});
              onClose();
            }}
          >
            <Text style={[styles.doneBtnText, { color: theme.textOnPrimary }]}>
              GOT IT • 了解
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
  },
  sheet: {
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    borderWidth: 1,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    maxHeight: '80%',
    ...shadows.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  headerTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  iconPill: {
    width: 36,
    height: 36,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitNumber: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  unitTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea: {
    marginVertical: spacing.sm,
  },
  scrollContent: {
    gap: spacing.sm,
    paddingBottom: spacing.md,
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  pointCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  pointText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    flex: 1,
  },
  doneBtn: {
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  doneBtnText: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
