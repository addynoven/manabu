import React, { useState, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import {
  Volume2,
  Snail,
  Play,
  Eye,
  EyeOff,
  Keyboard,
  Delete,
  Rocket,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';
import { getKanaRomaji, breakIntoKanaTokens } from '../lib/kanaRomajiMap';

export interface TileItem {
  id: string; // unique id per tile in bank e.g. "こ_0"
  char: string;
  romaji: string;
}

interface SpellingExerciseViewProps {
  item: LessonItem;
  assembledTiles: TileItem[];
  onAddTile: (tile: TileItem) => void;
  onRemoveTile: (index: number) => void;
  onClearLast: () => void;
  onDirectInputChange?: (text: string) => void;
  directInputText?: string;
  onPlayAudio?: (rate?: number) => void;
}

const SPEAKER_IMAGE_URL =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80';

export function SpellingExerciseView({
  item,
  assembledTiles,
  onAddTile,
  onRemoveTile,
  onClearLast,
  onDirectInputChange,
  directInputText = '',
  onPlayAudio,
}: SpellingExerciseViewProps) {
  const { colors: theme } = useAppTheme();
  const [showRomaji, setShowRomaji] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);

  // Generate Bank Tiles from item.tileBank or fallback from prompt
  const initialBankTiles: TileItem[] = useMemo(() => {
    const rawList =
      item.tileBank && item.tileBank.length > 0
        ? item.tileBank
        : Array.from(item.correctAnswer);

    return rawList.map((char, index) => ({
      id: `${char}_${index}`,
      char,
      romaji: getKanaRomaji(char),
    }));
  }, [item.tileBank, item.correctAnswer]);

  // Set of tile IDs that have been placed into assembledTiles
  const placedTileIds = useMemo(() => {
    return new Set(assembledTiles.map(t => t.id));
  }, [assembledTiles]);

  // Clean English translation prompt (e.g. 'Build "Hello"' -> 'Hello')
  const cleanEnglish = useMemo(() => {
    const match = item.english.match(/["'](.*?)["']/);
    return match ? match[1] : item.english;
  }, [item.english]);

  // Target word broken down into slots
  const targetTokens = useMemo(() => {
    return breakIntoKanaTokens(item.correctAnswer);
  }, [item.correctAnswer]);

  // Handle tile press in the keyboard grid
  const handleTilePress = useCallback(
    (tile: TileItem) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      // SPEECH REQUIREMENT: Immediately speak the character by TTS
      speakJapanese(tile.char, { rate: 1.0 }).catch(() => {});
      onAddTile(tile);
    },
    [onAddTile]
  );

  // Handle removing a placed tile from sentence slot
  const handleSlotTilePress = useCallback(
    (tile: TileItem, index: number) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      // SPEECH REQUIREMENT: Immediately speak the character by TTS
      speakJapanese(tile.char, { rate: 1.0 }).catch(() => {});
      onRemoveTile(index);
    },
    [onRemoveTile]
  );

  // Handle backspace button
  const handleBackspace = useCallback(() => {
    if (assembledTiles.length === 0) return;
    const lastTile = assembledTiles[assembledTiles.length - 1];
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    if (lastTile) {
      speakJapanese(lastTile.char, { rate: 1.0 }).catch(() => {});
    }
    onClearLast();
  }, [assembledTiles, onClearLast]);

  // Handle replaying audio
  const handleAudio = useCallback(
    (rate = 0.9) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      if (onPlayAudio) {
        onPlayAudio(rate);
      } else {
        speakJapanese(item.audioText || item.correctAnswer, { rate }).catch(() => {});
      }
    },
    [item.audioText, item.correctAnswer, onPlayAudio]
  );

  return (
    <View style={styles.container}>
      {/* 1. Top Section Header: Instruction Title & Speed Audio Controls */}
      <View style={styles.headerRow}>
        <View style={styles.titleColumn}>
          <View style={styles.tagBadge}>
            <Rocket size={14} color="#F59E0B" />
            <Text style={styles.tagText}>Hard exercise</Text>
          </View>
          <Text style={[styles.instructionTitle, { color: theme.textPrimary }]}>
            {item.contextSentence ? 'Type the sentence' : 'Type the word'}
          </Text>
        </View>

        {/* Turtle & Speaker Audio Controls */}
        <View style={styles.audioButtonGroup}>
          <Pressable
            onPress={() => handleAudio(0.6)}
            style={[styles.audioPill, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            accessibilityLabel="Slow audio speed"
            hitSlop={6}
          >
            <Snail size={20} color="#10B981" />
          </Pressable>

          <Pressable
            onPress={() => handleAudio(0.9)}
            style={[styles.audioPill, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            accessibilityLabel="Normal audio speed"
            hitSlop={6}
          >
            <Volume2 size={20} color="#F59E0B" />
          </Pressable>
        </View>
      </View>

      {/* 2. Native Japanese Speaker Media Video Card */}
      <View style={[styles.speakerCard, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
        <Image
          source={{ uri: SPEAKER_IMAGE_URL }}
          style={styles.speakerImage}
          resizeMode="cover"
        />
        {/* Dark gradient overlay & audio control buttons at bottom of image */}
        <View style={styles.speakerOverlay}>
          <Pressable
            onPress={() => handleAudio(0.6)}
            style={styles.overlayCircleBtn}
            accessibilityLabel="Turtle speed video audio"
          >
            <Snail size={18} color="#FFFFFF" />
          </Pressable>

          <Pressable
            onPress={() => handleAudio(0.9)}
            style={styles.overlayCircleBtn}
            accessibilityLabel="Play video audio"
          >
            <Play size={18} color="#FFFFFF" fill="#FFFFFF" />
          </Pressable>
        </View>
      </View>

      {/* 3. Sentence Slot & Underline Dashes Display */}
      <View style={styles.sentenceSlotArea}>
        {/* Slot box containing assembled tiles */}
        <View style={[styles.targetSlotBox, { backgroundColor: '#1A2130', borderColor: '#2D3748' }]}>
          {assembledTiles.length === 0 ? (
            /* Empty dashes placeholder e.g. _ _ _ _ _ matching deerlino_11 */
            <View style={styles.dashesRow}>
              {targetTokens.map((token, idx) => (
                <View key={idx} style={styles.dashItem}>
                  {showRomaji && (
                    <Text style={styles.dashRomajiHint}>{token.romaji}</Text>
                  )}
                  <View style={styles.dashUnderline} />
                </View>
              ))}
            </View>
          ) : (
            /* Placed Tiles with romaji above and underline dash below */
            <View style={styles.assembledTokensRow}>
              {assembledTiles.map((tile, idx) => (
                <Pressable
                  key={`${tile.id}-${idx}`}
                  onPress={() => handleSlotTilePress(tile, idx)}
                  style={styles.assembledTokenSlot}
                  accessibilityLabel={`Remove ${tile.char}`}
                >
                  {showRomaji && (
                    <Text style={styles.tokenRomaji}>{tile.romaji}</Text>
                  )}
                  <Text style={styles.tokenChar}>{tile.char}</Text>
                  <View style={styles.tokenUnderline} />
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* English Meaning under the slot */}
        <Text style={[styles.englishSubtitle, { color: theme.textSecondary }]}>
          {cleanEnglish}
        </Text>

        {/* Peek Hint if user clicks the Eye button */}
        {showHint && (
          <View style={[styles.hintCard, { backgroundColor: theme.primaryLight }]}>
            <Text style={[styles.hintText, { color: theme.primary }]}>
              Hint: {item.correctAnswer} ({item.romaji})
            </Text>
          </View>
        )}
      </View>

      {/* 4. Tile Bank Pad Grid or Native Keyboard Input */}
      {isKeyboardMode ? (
        <View style={[styles.directInputContainer, { backgroundColor: '#161B26', borderColor: '#2A3346' }]}>
          <TextInput
            style={[styles.directTextInput, { color: theme.textPrimary }]}
            value={directInputText}
            onChangeText={onDirectInputChange}
            placeholder="Type in Japanese..."
            placeholderTextColor={theme.textMuted}
            autoFocus
            autoCapitalize="none"
          />
        </View>
      ) : (
        <View style={[styles.tilePadCard, { backgroundColor: '#161B26', borderColor: '#242C3D' }]}>
          {/* Grid of Fixed Slots (2 rows x 4 columns) */}
          <View style={styles.tileGrid}>
            {initialBankTiles.map(tile => {
              const isUsed = placedTileIds.has(tile.id);

              return isUsed ? (
                /* Recessed Empty Slot Placeholder (matching deerlino_11) */
                <View
                  key={tile.id}
                  style={[styles.tileSlotWrapper, styles.emptyRecessedSlot]}
                />
              ) : (
                /* Available Key Tile */
                <Pressable
                  key={tile.id}
                  onPress={() => handleTilePress(tile)}
                  style={[styles.tileSlotWrapper, styles.availableTile]}
                  accessibilityLabel={`Character ${tile.char}, ${tile.romaji}`}
                >
                  {showRomaji && (
                    <Text style={styles.bankTileRomaji}>{tile.romaji}</Text>
                  )}
                  <Text style={styles.bankTileKana}>{tile.char}</Text>
                </Pressable>
              );
            })}
          </View>

          {/* 5. Utility Toolbar (Keyboard, Romaji Toggle, Audio, Hint, Backspace) */}
          <View style={styles.utilityToolbar}>
            <Pressable
              onPress={() => setIsKeyboardMode(prev => !prev)}
              style={styles.utilBtn}
              hitSlop={6}
              accessibilityLabel="Toggle keyboard input mode"
            >
              <Keyboard size={20} color={isKeyboardMode ? theme.primary : '#94A3B8'} />
            </Pressable>

            <Pressable
              onPress={() => setShowRomaji(prev => !prev)}
              style={[styles.utilBtn, showRomaji && styles.utilBtnActive]}
              hitSlop={6}
              accessibilityLabel="Toggle romaji readings"
            >
              <Text
                style={[
                  styles.romajiToggleText,
                  { color: showRomaji ? '#FFFFFF' : '#94A3B8' },
                ]}
              >
                a
              </Text>
            </Pressable>

            <Pressable
              onPress={() => handleAudio(0.9)}
              style={styles.utilBtn}
              hitSlop={6}
              accessibilityLabel="Replay audio"
            >
              <Volume2 size={20} color="#94A3B8" />
            </Pressable>

            <Pressable
              onPress={() => setShowHint(prev => !prev)}
              style={styles.utilBtn}
              hitSlop={6}
              accessibilityLabel="Show answer hint"
            >
              {showHint ? (
                <EyeOff size={20} color="#F59E0B" />
              ) : (
                <Eye size={20} color="#94A3B8" />
              )}
            </Pressable>

            <Pressable
              onPress={handleBackspace}
              disabled={assembledTiles.length === 0}
              style={[
                styles.utilBtn,
                assembledTiles.length === 0 && styles.utilBtnDisabled,
              ]}
              hitSlop={6}
              accessibilityLabel="Delete last character"
            >
              <Delete size={20} color={assembledTiles.length > 0 ? '#EF4444' : '#64748B'} />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xs,
  },
  titleColumn: {
    gap: 4,
  },
  tagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#F59E0B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  instructionTitle: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.3,
  },
  audioButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  audioPill: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  speakerCard: {
    width: '100%',
    height: 180,
    borderRadius: radii.xl,
    overflow: 'hidden',
    borderWidth: 1,
    position: 'relative',
    ...shadows.md,
  },
  speakerImage: {
    width: '100%',
    height: '100%',
  },
  speakerOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 14,
    right: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overlayCircleBtn: {
    width: 36,
    height: 36,
    borderRadius: radii.full,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sentenceSlotArea: {
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.xs,
  },
  targetSlotBox: {
    minHeight: 68,
    minWidth: 160,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radii.xl,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashesRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    paddingVertical: 6,
  },
  dashItem: {
    alignItems: 'center',
    gap: 4,
  },
  dashRomajiHint: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
  },
  dashUnderline: {
    width: 22,
    height: 3,
    backgroundColor: '#475569',
    borderRadius: 2,
  },
  assembledTokensRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  assembledTokenSlot: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  tokenRomaji: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    marginBottom: 2,
  },
  tokenChar: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  tokenUnderline: {
    width: '100%',
    minWidth: 20,
    height: 3,
    backgroundColor: '#38BDF8',
    borderRadius: 2,
    marginTop: 3,
  },
  englishSubtitle: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  hintCard: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radii.md,
    marginTop: 4,
  },
  hintText: {
    fontSize: 13,
    fontWeight: '700',
  },
  tilePadCard: {
    borderRadius: radii.xl,
    padding: spacing.md,
    borderWidth: 1,
    gap: spacing.md,
    ...shadows.md,
  },
  tileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  tileSlotWrapper: {
    width: '22%',
    height: 64,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyRecessedSlot: {
    backgroundColor: '#1E2536',
    borderWidth: 1,
    borderColor: '#263044',
  },
  availableTile: {
    backgroundColor: '#263147',
    borderWidth: 1,
    borderColor: '#384663',
    ...shadows.sm,
  },
  bankTileRomaji: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    marginBottom: 2,
  },
  bankTileKana: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  utilityToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderTopWidth: 1,
    borderColor: '#242C3D',
  },
  utilBtn: {
    width: 36,
    height: 36,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  utilBtnActive: {
    backgroundColor: '#334155',
  },
  utilBtnDisabled: {
    opacity: 0.4,
  },
  romajiToggleText: {
    fontSize: 18,
    fontWeight: '800',
  },
  directInputContainer: {
    borderRadius: radii.xl,
    padding: spacing.md,
    borderWidth: 1,
    minHeight: 80,
    justifyContent: 'center',
  },
  directTextInput: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
