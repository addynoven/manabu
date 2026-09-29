import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  Pressable,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Palette, Volume2, Sparkles } from 'lucide-react-native';
import { radii, shadows, spacing } from '../../../core/theme';
import { useAppTheme } from '../../../core/theme/useThemeStore';
import { config } from '../../../core/config';
import { useSettingsStore } from '../store/useSettingsStore';
import { BackupRestoreCard } from '../components/BackupRestoreCard';
import { ThemeSelectorModal } from '../components/ThemeSelectorModal';
import { speakJapanese } from '../../../core/audio/tts';

export function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors, theme } = useAppTheme();
  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const [isTestingSpeech, setIsTestingSpeech] = useState(false);

  const {
    hapticsEnabled,
    soundEffectsEnabled,
    showRomajiInCharts,
    showFuriganaInDrills,
    ttsEnabled,
    ttsRate,
    ttsAutoPlay,
    crazyMode,
    setHapticsEnabled,
    setSoundEffectsEnabled,
    setShowRomajiInCharts,
    setShowFuriganaInDrills,
    setTtsEnabled,
    setTtsRate,
    setTtsAutoPlay,
    setCrazyMode,
  } = useSettingsStore();

  const handleTestPronunciation = async () => {
    if (!ttsEnabled || isTestingSpeech) return;
    setIsTestingSpeech(true);
    await speakJapanese('こんにちは！日本語を勉強しましょう', {
      rate: ttsRate,
      onDone: () => setIsTestingSpeech(false),
      onError: () => setIsTestingSpeech(false),
    });
  };

  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
          backgroundColor: colors.background,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Settings & Preferences
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Appearance & Themes */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Appearance & Style
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Pressable
            style={styles.row}
            onPress={() => setThemeModalVisible(true)}
          >
            <View style={styles.themeInfoLeft}>
              <View
                style={[
                  styles.themeIconBox,
                  { backgroundColor: colors.surfaceSubtle },
                ]}
              >
                <Palette size={20} color={colors.primary} />
              </View>
              <View style={styles.rowText}>
                <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                  Theme Palette
                </Text>
                <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                  {theme.japaneseName} • {theme.name}
                </Text>
              </View>
            </View>

            <View style={styles.themePill}>
              <View
                style={[styles.colorDot, { backgroundColor: colors.primary }]}
              />
              <Text style={[styles.themePillText, { color: colors.primary }]}>
                Change
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Audio & Pronunciation */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Audio & Pronunciation
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Japanese Voice (TTS)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Hear native pronunciation on tap
              </Text>
            </View>
            <Switch
              value={ttsEnabled}
              onValueChange={setTtsEnabled}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>

          {ttsEnabled && (
            <>
              <View
                style={[
                  styles.separator,
                  { backgroundColor: colors.borderSubtle },
                ]}
              />

              <View style={styles.speedRow}>
                <View style={styles.rowText}>
                  <Text
                    style={[styles.rowLabel, { color: colors.textPrimary }]}
                  >
                    Speech Speed
                  </Text>
                  <Text
                    style={[styles.rowSub, { color: colors.textSecondary }]}
                  >
                    Pronunciation playback rate
                  </Text>
                </View>

                <View style={styles.pillGroup}>
                  {[
                    { label: '0.8x', value: 0.8 },
                    { label: '1.0x', value: 1.0 },
                    { label: '1.2x', value: 1.2 },
                  ].map((rate) => {
                    const isSelected = Math.abs(ttsRate - rate.value) < 0.05;
                    return (
                      <Pressable
                        key={rate.label}
                        onPress={() => setTtsRate(rate.value)}
                        style={[
                          styles.ratePill,
                          {
                            backgroundColor: isSelected
                              ? colors.primary
                              : colors.surfaceSubtle,
                            borderColor: isSelected
                              ? colors.primary
                              : colors.border,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.ratePillText,
                            {
                              color: isSelected
                                ? colors.textOnPrimary
                                : colors.textSecondary,
                            },
                          ]}
                        >
                          {rate.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>

              <View
                style={[
                  styles.separator,
                  { backgroundColor: colors.borderSubtle },
                ]}
              />

              <View style={styles.row}>
                <View style={styles.rowText}>
                  <Text
                    style={[styles.rowLabel, { color: colors.textPrimary }]}
                  >
                    Auto-Play on Reveal
                  </Text>
                  <Text
                    style={[styles.rowSub, { color: colors.textSecondary }]}
                  >
                    Pronounce character when question appears
                  </Text>
                </View>
                <Switch
                  value={ttsAutoPlay}
                  onValueChange={setTtsAutoPlay}
                  trackColor={{ true: colors.primary, false: colors.border }}
                />
              </View>

              <View
                style={[
                  styles.separator,
                  { backgroundColor: colors.borderSubtle },
                ]}
              />

              <Pressable
                style={styles.testVoiceRow}
                onPress={handleTestPronunciation}
              >
                <Volume2
                  size={18}
                  color={isTestingSpeech ? colors.primary : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.testVoiceText,
                    {
                      color: isTestingSpeech
                        ? colors.primary
                        : colors.textPrimary,
                    },
                  ]}
                >
                  {isTestingSpeech
                    ? 'Playing sample...'
                    : '🔊 Test Pronunciation (こんにちは)'}
                </Text>
              </Pressable>
            </>
          )}
        </View>

        {/* Feedback & Sound */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Haptics & Tones
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Haptic Feedback
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Vibrate on answer tap
              </Text>
            </View>
            <Switch
              value={hapticsEnabled}
              onValueChange={setHapticsEnabled}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>

          <View
            style={[
              styles.separator,
              { backgroundColor: colors.borderSubtle },
            ]}
          />

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Sound Effects
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Play clicks and success tones
              </Text>
            </View>
            <Switch
              value={soundEffectsEnabled}
              onValueChange={setSoundEffectsEnabled}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>
        </View>

        {/* Study Options */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Study & Reading Options
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Romaji Hints
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Show Latin characters under kana
              </Text>
            </View>
            <Switch
              value={showRomajiInCharts}
              onValueChange={setShowRomajiInCharts}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>

          <View
            style={[
              styles.separator,
              { backgroundColor: colors.borderSubtle },
            ]}
          />

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Furigana Readings
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Display kana above kanji in drills
              </Text>
            </View>
            <Switch
              value={showFuriganaInDrills}
              onValueChange={setShowFuriganaInDrills}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>

          <View
            style={[
              styles.separator,
              { backgroundColor: colors.borderSubtle },
            ]}
          />

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                🎭 Crazy Mode (狂気)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Randomize themes & typography on every question
              </Text>
            </View>
            <Switch
              value={crazyMode}
              onValueChange={setCrazyMode}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>
        </View>

        {/* Tools & Reference */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Tools & Reference
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Pressable
            style={styles.row}
            onPress={() => router.push('/academy')}
          >
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                📚 Kana Academy & Guides (学堂)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                5 comprehensive guides: Hiragana, Katakana, Kanji & Particles
              </Text>
            </View>
            <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
          </Pressable>

          <View style={[styles.separator, { backgroundColor: colors.border }]} />

          <Pressable
            style={styles.row}
            onPress={() => router.push('/resources')}
          >
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                🌐 Resource Vault (推薦集)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                25+ verified apps, textbooks, podcasts & immersion tools
              </Text>
            </View>
            <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
          </Pressable>

          <View style={[styles.separator, { backgroundColor: colors.border }]} />

          <Pressable
            style={styles.row}
            onPress={() => router.push('/cloze')}
          >
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                穴 Cloze Grammar Drills (穴埋め)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Contextual sentence completion & particle practice
              </Text>
            </View>
            <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
          </Pressable>

          <View style={[styles.separator, { backgroundColor: colors.border }]} />

          <Pressable
            style={styles.row}
            onPress={() => router.push('/conjugator')}
          >
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                🎌 Verb Conjugator (活用形)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Search & drill 30+ Japanese verb forms
              </Text>
            </View>
            <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
          </Pressable>

          <View style={[styles.separator, { backgroundColor: colors.border }]} />

          <Pressable
            style={styles.row}
            onPress={() => router.push('/arcade')}
          >
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                🎮 Arcade & Zen Pavilion (遊楽道場)
              </Text>
              <Text style={[styles.rowSub, { color: colors.textSecondary }]}>
                Zen Breathing, Kana Wordle, Memory Tiles & Kana Rain
              </Text>
            </View>
            <Text style={[styles.chevron, { color: colors.textMuted }]}>›</Text>
          </Pressable>
        </View>

        {/* Data Management */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          Data Management
        </Text>
        <BackupRestoreCard />

        {/* About Manabu */}
        <Text style={[styles.sectionHeader, { color: colors.textSecondary }]}>
          About Manabu
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.textPrimary }]}>
              Version
            </Text>
            <Text
              style={[styles.infoValue, { color: colors.textSecondary }]}
            >
              {config.appVersion}
            </Text>
          </View>
          <View
            style={[
              styles.separator,
              { backgroundColor: colors.borderSubtle },
            ]}
          />
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.textPrimary }]}>
              Theme Engine
            </Text>
            <Text
              style={[styles.infoValue, { color: colors.textSecondary }]}
            >
              12 Handcrafted Palettes
            </Text>
          </View>
          <View
            style={[
              styles.separator,
              { backgroundColor: colors.borderSubtle },
            ]}
          />
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.textPrimary }]}>
              Audio Engine
            </Text>
            <Text
              style={[styles.infoValue, { color: colors.textSecondary }]}
            >
              Offline Japanese TTS (ja-JP)
            </Text>
          </View>
        </View>
      </ScrollView>

      <ThemeSelectorModal
        visible={themeModalVisible}
        onClose={() => setThemeModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.xxl,
    gap: spacing.md,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginTop: spacing.sm,
  },
  card: {
    borderRadius: radii.xl,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    ...shadows.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  themeInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: spacing.sm,
  },
  themeIconBox: {
    width: 36,
    height: 36,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radii.full,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: radii.full,
  },
  themePillText: {
    fontSize: 13,
    fontWeight: '700',
  },
  speedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  pillGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  ratePill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  ratePillText: {
    fontSize: 12,
    fontWeight: '700',
  },
  testVoiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    justifyContent: 'center',
  },
  testVoiceText: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowText: {
    flex: 1,
    paddingRight: spacing.md,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  rowSub: {
    fontSize: 13,
    marginTop: 2,
  },
  separator: {
    height: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  infoLabel: {
    fontSize: 15,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  chevron: {
    fontSize: 22,
    fontWeight: '300',
    marginLeft: spacing.sm,
  },
});
