import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Palette, CheckCircle2 } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface KanaTraceViewProps {
  visible: boolean;
  onClose: () => void;
  kana?: string;
  romaji?: string;
}

export function KanaTraceView({
  visible,
  onClose,
  kana = 'あ',
  romaji = 'a',
}: KanaTraceViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);
  const [cleared, setCleared] = useState(false);

  const handleClear = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setCleared(true);
    setTimeout(() => setCleared(false), 200);
  };

  const handleSpeak = () => {
    if (ttsEnabled) {
      speakJapanese(kana).catch(() => {});
    }
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <Pressable onPress={onClose} style={styles.closeBtn}>
            <X size={20} color={theme.textPrimary} />
          </Pressable>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            書き順 • Stroke Order Tracing
          </Text>
          <Pressable onPress={handleClear} style={styles.closeBtn}>
            <RotateCcw size={18} color={theme.textSecondary} />
          </Pressable>
        </View>

        {/* Tracing Canvas Area */}
        <View style={styles.content}>
          <View style={[styles.canvasCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            {/* Background Grid Guide Lines */}
            <View style={styles.gridGuideHorizontal} />
            <View style={styles.gridGuideVertical} />

            {/* Faint Guide Character */}
            <Text style={[styles.guideKana, { color: theme.textMuted }]}>
              {kana}
            </Text>

            <Pressable onPress={handleSpeak} style={styles.speakBadge}>
              <Text style={[styles.romajiText, { color: theme.primary }]}>
                {romaji} • Tap to Listen 🔊
              </Text>
            </Pressable>
          </View>

          {/* Stroke Tip Box */}
          <View style={[styles.tipCard, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
            <CheckCircle2 size={20} color={theme.success} />
            <View style={styles.tipTextGroup}>
              <Text style={[styles.tipTitle, { color: theme.textPrimary }]}>
                Stroke Tip
              </Text>
              <Text style={[styles.tipDesc, { color: theme.textSecondary }]}>
                Follow strokes top-to-bottom and left-to-right. Practice smooth continuous strokes.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  closeBtn: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  canvasCard: {
    width: '100%',
    aspectRatio: 1,
    maxHeight: 320,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  gridGuideHorizontal: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  gridGuideVertical: {
    position: 'absolute',
    height: '100%',
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  guideKana: {
    fontSize: 160,
    fontWeight: '400',
    opacity: 0.25,
  },
  speakBadge: {
    position: 'absolute',
    bottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(99,102,241,0.1)',
  },
  romajiText: {
    fontSize: 13,
    fontWeight: '700',
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    width: '100%',
  },
  tipTextGroup: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  tipDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
});
