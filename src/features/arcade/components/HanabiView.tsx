import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Sparkles } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface HanabiViewProps {
  onClose: () => void;
}

const FIREWORK_KANA = ['あ', 'い', 'う', 'え', 'お', '花', '火', '夏', '夜', '星'];

type Particle = {
  id: string;
  x: number;
  y: number;
  kana: string;
  color: string;
};

export function HanabiView({ onClose }: HanabiViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);

  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerHanabi = (evt: any) => {
    const { locationX, locationY } = evt.nativeEvent;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});

    const randomKana = FIREWORK_KANA[Math.floor(Math.random() * FIREWORK_KANA.length)];
    if (ttsEnabled) {
      speakJapanese(randomKana).catch(() => {});
    }

    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const dist = 60 + Math.random() * 40;
      newParticles.push({
        id: `${Date.now()}_${i}`,
        x: locationX + Math.cos(angle) * dist,
        y: locationY + Math.sin(angle) * dist,
        kana: randomKana,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles(prev => [...prev.slice(-24), ...newParticles]);
  };

  const handleClear = () => {
    setParticles([]);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#0F172A' }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={onClose} style={styles.iconBtn}>
          <X size={20} color="#F8FAFC" />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.title}>花火 • Kana Hanabi</Text>
          <Text style={styles.subtitle}>Tap night sky to launch Kana fireworks</Text>
        </View>

        <Pressable onPress={handleClear} style={styles.iconBtn}>
          <RotateCcw size={18} color="#94A3B8" />
        </Pressable>
      </View>

      {/* Night Sky Tap Area */}
      <Pressable style={styles.skyArea} onPress={triggerHanabi}>
        <Text style={styles.skyPrompt}>🎆 Tap anywhere in the night sky</Text>

        {particles.map(p => (
          <View
            key={p.id}
            style={[
              styles.particlePill,
              { left: p.x - 20, top: p.y - 20, backgroundColor: p.color },
            ]}
          >
            <Text style={styles.particleText}>{p.kana}</Text>
          </View>
        ))}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 20,
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skyArea: {
    flex: 1,
    marginTop: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#334155',
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skyPrompt: {
    color: '#64748B',
    fontSize: 15,
    fontWeight: '600',
  },
  particlePill: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  particleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
});
