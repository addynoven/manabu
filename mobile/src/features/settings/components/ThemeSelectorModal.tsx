import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, X } from 'lucide-react-native';
import { THEME_PALETTES, ThemePalette } from '../../../core/theme/palettes';
import { useAppTheme } from '../../../core/theme/useThemeStore';
import { useSettingsStore } from '../store/useSettingsStore';
import { radii, shadows, spacing } from '../../../core/theme';
import * as Haptics from 'expo-haptics';

interface ThemeSelectorModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ThemeSelectorModal({ visible, onClose }: ThemeSelectorModalProps) {
  const { colors, activeThemeId, setThemeId } = useAppTheme();
  const { hapticsEnabled } = useSettingsStore();

  const handleSelectTheme = (id: string) => {
    if (hapticsEnabled) {
      Haptics.selectionAsync().catch(() => {});
    }
    setThemeId(id);
    useSettingsStore.getState().setThemeId(id);
  };

  const palettes = Object.values(THEME_PALETTES);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View style={[styles.header, { borderBottomColor: colors.borderSubtle }]}>
          <View>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Visual Themes
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Choose from 12 handcrafted Japanese palettes
            </Text>
          </View>
          <Pressable
            onPress={onClose}
            style={[styles.closeButton, { backgroundColor: colors.surfaceSubtle }]}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <X size={20} color={colors.textPrimary} />
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {palettes.map((palette: ThemePalette) => {
            const isSelected = palette.id === activeThemeId;
            return (
              <Pressable
                key={palette.id}
                onPress={() => handleSelectTheme(palette.id)}
                style={[
                  styles.themeCard,
                  {
                    backgroundColor: palette.colors.surface,
                    borderColor: isSelected
                      ? palette.colors.primary
                      : palette.colors.border,
                    borderWidth: isSelected ? 2 : 1,
                  },
                ]}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.titleRow}>
                    <Text
                      style={[
                        styles.themeJapaneseName,
                        { color: palette.colors.primary },
                      ]}
                    >
                      {palette.japaneseName}
                    </Text>
                    <Text
                      style={[
                        styles.themeName,
                        { color: palette.colors.textPrimary },
                      ]}
                    >
                      {palette.name}
                    </Text>
                  </View>

                  {isSelected && (
                    <View
                      style={[
                        styles.checkBadge,
                        { backgroundColor: palette.colors.primary },
                      ]}
                    >
                      <Check size={14} color={palette.colors.textOnPrimary} strokeWidth={3} />
                    </View>
                  )}
                </View>

                <Text
                  style={[
                    styles.themeDescription,
                    { color: palette.colors.textSecondary },
                  ]}
                >
                  {palette.description}
                </Text>

                <View style={styles.swatchRow}>
                  <View
                    style={[
                      styles.swatchItem,
                      { backgroundColor: palette.colors.background },
                    ]}
                  />
                  <View
                    style={[
                      styles.swatchItem,
                      { backgroundColor: palette.colors.surfaceSubtle },
                    ]}
                  />
                  <View
                    style={[
                      styles.swatchItem,
                      { backgroundColor: palette.colors.primary },
                    ]}
                  />
                  <View
                    style={[
                      styles.swatchItem,
                      { backgroundColor: palette.colors.accent },
                    ]}
                  />
                  <View
                    style={[
                      styles.swatchItem,
                      { backgroundColor: palette.colors.success },
                    ]}
                  />
                  <Text
                    style={[
                      styles.modeBadge,
                      {
                        color: palette.isDark ? '#E2E8F0' : '#475569',
                        backgroundColor: palette.isDark
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.06)',
                      },
                    ]}
                  >
                    {palette.isDark ? 'DARK' : 'LIGHT'}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
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
    paddingHorizontal: spacing.base,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
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
  listContent: {
    padding: spacing.base,
    gap: spacing.md,
    paddingBottom: spacing.xxl,
  },
  themeCard: {
    borderRadius: radii.xl,
    padding: spacing.base,
    ...shadows.sm,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  themeJapaneseName: {
    fontSize: 18,
    fontWeight: '800',
  },
  themeName: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 6,
  },
  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeDescription: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: spacing.md,
  },
  swatchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  swatchItem: {
    width: 24,
    height: 24,
    borderRadius: radii.full,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  modeBadge: {
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
    marginLeft: 'auto',
    letterSpacing: 0.5,
  },
});
