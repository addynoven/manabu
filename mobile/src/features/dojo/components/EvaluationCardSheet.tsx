import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {
  CheckCircle2,
  XCircle,
  Volume2,
  Sparkles,
  ArrowRight,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import * as wanakana from 'wanakana';
import { radii, shadows, spacing } from '../../../core/theme';
import type { LessonItem } from '../models/dojo.model';
import { speakJapanese } from '../../../core/audio/tts';

export interface EvaluationCardSheetProps {
  evaluation: 'correct' | 'incorrect' | null;
  currentItem: LessonItem | null;
  userAnswerText: string;
  correctAnswerText: string;
  hintText?: string | null;
  insetsBottom?: number;
  isInline?: boolean;
  onContinue: () => void;
}

/**
 * Converts Japanese text (Kanji + Kana) into clean phonetic Romaji
 */
function toCleanRomaji(text: string, fallbackRomaji?: string): string {
  if (fallbackRomaji && !/[一-龯]/.test(fallbackRomaji)) {
    return fallbackRomaji;
  }
  if (!text) return '';

  const kana = text
    .replace(/元気/g, 'げんき')
    .replace(/先生/g, 'せんせい')
    .replace(/私/g, 'わたし')
    .replace(/日本語/g, 'にほんご')
    .replace(/勉強/g, 'べんきょう')
    .replace(/友達/g, 'ともだち')
    .replace(/明日/g, 'あした')
    .replace(/学校/g, 'がっこう')
    .replace(/食べ/g, 'たべ')
    .replace(/飲/g, 'の')
    .replace(/行/g, 'い')
    .replace(/見/g, 'み')
    .replace(/来/g, 'き')
    .replace(/何/g, 'なに')
    .replace(/人/g, 'じん')
    .replace(/出身/g, 'しゅっしん')
    .replace(/名/g, 'な')
    .replace(/前/g, 'まえ');

  return wanakana.toRomaji(kana);
}

/**
 * Unified, Data-Driven Single Evaluation Card Component
 * Dynamically adapts visual layout based on available item fields.
 */
export function EvaluationCardSheet({
  evaluation,
  currentItem,
  userAnswerText,
  correctAnswerText,
  hintText,
  insetsBottom = 0,
  isInline = false,
  onContinue,
}: EvaluationCardSheetProps) {
  if (!evaluation || !currentItem) return null;

  const isCorrect = evaluation === 'correct';

  const handleSpeak = (text?: string) => {
    if (!text) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    speakJapanese(text, { rate: 0.9 }).catch(() => {});
  };

  // Data Normalization: Unified Field Extraction
  const speakerLabel = currentItem.dialogueSpeaker || null;
  const primaryText = currentItem.dialoguePrompt || currentItem.prompt || '';
  const audioText = currentItem.audioText || primaryText;
  const romajiText = toCleanRomaji(primaryText, currentItem.romaji);
  const englishText = currentItem.english || null;

  // Cloze blank detection
  const rawCloze = currentItem.clozeSentence || currentItem.contextSentence || '';
  const isCloze = (currentItem.type === 'cloze' || currentItem.type === 'cloze_context') && (rawCloze.includes('{{BLANK}}') || rawCloze.includes('____'));
  const clozeParts = isCloze
    ? rawCloze.includes('{{BLANK}}')
      ? rawCloze.split('{{BLANK}}')
      : rawCloze.split('____')
    : [];

  // Secondary Reply Block (Dialogue or Target Reply)
  const replyTargetText = currentItem.type === 'dialogue' ? correctAnswerText : null;
  const replyRomajiText = replyTargetText ? toCleanRomaji(replyTargetText) : null;
  const replyLabel = currentItem.type === 'dialogue'
    ? (isCorrect ? 'Your reply:' : 'Correct reply:')
    : null;

  return (
    <View
      style={[
        styles.evaluationSheet,
        isInline ? styles.evaluationSheetInline : styles.evaluationSheetModal,
        {
          backgroundColor: isCorrect ? '#DEF7EC' : '#FDE8E8',
          borderTopColor: isCorrect ? '#31C48D' : '#F98080',
          paddingBottom: isInline ? spacing.md : insetsBottom + 16,
        },
      ]}
    >
      {/* 1. Header Status Banner */}
      <View style={styles.evalTopRow}>
        {isCorrect ? (
          <CheckCircle2 size={26} color="#0E9F6E" />
        ) : (
          <XCircle size={26} color="#E02424" />
        )}
        <Text
          style={[
            styles.evalStatusTitle,
            { color: isCorrect ? '#03543F' : '#9B1C1C' },
          ]}
        >
          {isCorrect ? 'Correct!' : 'Incorrect'}
        </Text>
      </View>

      {/* 2. Side-by-Side Answer Diff Comparison (When Incorrect) */}
      {!isCorrect && (
        <View style={styles.diffContainer}>
          <View style={styles.diffPillUser}>
            <View style={styles.diffPillHeader}>
              <XCircle size={14} color="#DC2626" />
              <Text style={styles.diffPillLabelUser}>YOUR ANSWER</Text>
            </View>
            <Text style={styles.diffPillValueUser} numberOfLines={1}>
              {userAnswerText}
            </Text>
            {userAnswerText && wanakana.isJapanese(userAnswerText) ? (
              <Text style={styles.diffPillRomajiUser} numberOfLines={1}>
                {toCleanRomaji(userAnswerText)}
              </Text>
            ) : null}
          </View>

          <View style={styles.diffPillCorrect}>
            <View style={styles.diffPillHeader}>
              <CheckCircle2 size={14} color="#059669" />
              <Text style={styles.diffPillLabelCorrect}>CORRECT ANSWER</Text>
            </View>
            <Text style={styles.diffPillValueCorrect} numberOfLines={1}>
              {correctAnswerText}
            </Text>
            {correctAnswerText && wanakana.isJapanese(correctAnswerText) ? (
              <Text style={styles.diffPillRomajiCorrect} numberOfLines={1}>
                {toCleanRomaji(correctAnswerText)}
              </Text>
            ) : null}
          </View>
        </View>
      )}

      {/* 3. Unified Trilingual Breakdown Card */}
      <View style={styles.evalBreakdown}>
        <View style={{ gap: 4 }}>
          {/* Speaker Header (if Dialogue) */}
          {speakerLabel ? (
            <View style={styles.speakerRow}>
              <Text style={[styles.evalEnglish, { fontWeight: '700' }]}>
                {speakerLabel}:
              </Text>
              <Pressable onPress={() => handleSpeak(audioText)} hitSlop={8}>
                <Volume2 size={16} color="#059669" />
              </Pressable>
            </View>
          ) : null}

          {/* Primary Japanese Text (With Cloze Blank Highlight if Cloze) */}
          <View style={!speakerLabel ? styles.speakerRow : undefined}>
            {isCloze ? (
              <Text style={styles.evalPrompt}>
                {clozeParts[0]}
                <Text style={styles.highlightGreen}>{correctAnswerText}</Text>
                {clozeParts[1]}
              </Text>
            ) : (
              <Text style={styles.evalPrompt}>{primaryText}</Text>
            )}

            {!speakerLabel && (
              <Pressable onPress={() => handleSpeak(audioText)} hitSlop={8}>
                <Volume2 size={16} color="#059669" />
              </Pressable>
            )}
          </View>

          {/* Romaji Phonetic Reading */}
          {romajiText ? (
            <Text style={styles.evalRomaji}>{romajiText}</Text>
          ) : null}

          {/* English Translation */}
          {englishText ? (
            <Text style={styles.evalEnglish}>{englishText}</Text>
          ) : null}

          {/* Secondary Dialogue Reply Block */}
          {replyLabel && replyTargetText ? (
            <View style={styles.dividerRow}>
              <View style={styles.speakerRow}>
                <Text style={[styles.evalEnglish, { fontWeight: '700' }]}>
                  {replyLabel}
                </Text>
                <Pressable onPress={() => handleSpeak(replyTargetText)} hitSlop={8}>
                  <Volume2 size={16} color="#059669" />
                </Pressable>
              </View>

              <Text style={[styles.evalPrompt, styles.highlightGreen]}>
                {replyTargetText}
              </Text>

              {replyRomajiText ? (
                <Text style={styles.evalRomaji}>{replyRomajiText}</Text>
              ) : null}
            </View>
          ) : null}
        </View>
      </View>

      {/* 4. Pedagogical Hint / Grammar Tip Box */}
      {hintText ? (
        <View style={styles.tipBox}>
          <Sparkles size={16} color="#D97706" style={{ marginTop: 1 }} />
          <Text style={styles.tipText}>{hintText}</Text>
        </View>
      ) : null}

      {/* 5. Action Button */}
      <Pressable
        onPress={onContinue}
        style={[
          styles.evalContinueBtn,
          { backgroundColor: isCorrect ? '#0E9F6E' : '#E02424' },
        ]}
      >
        <Text style={styles.evalContinueText}>CONTINUE</Text>
        <ArrowRight size={20} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  evaluationSheet: {
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    borderTopWidth: 3,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.md,
    gap: spacing.sm,
    ...shadows.md,
  },
  evaluationSheetModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  evaluationSheetInline: {
    position: 'relative',
    borderBottomLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  evalTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  evalStatusTitle: {
    fontSize: 20,
    fontWeight: '900',
  },
  diffContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 2,
    marginBottom: 2,
  },
  diffPillUser: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: radii.md,
    borderWidth: 1.5,
    borderColor: '#F87171',
  },
  diffPillCorrect: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: radii.md,
    borderWidth: 1.5,
    borderColor: '#34D399',
  },
  diffPillHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  diffPillLabelUser: {
    fontSize: 10,
    fontWeight: '800',
    color: '#DC2626',
    letterSpacing: 0.5,
  },
  diffPillLabelCorrect: {
    fontSize: 10,
    fontWeight: '800',
    color: '#059669',
    letterSpacing: 0.5,
  },
  diffPillValueUser: {
    fontSize: 16,
    fontWeight: '800',
    color: '#991B1B',
    textDecorationLine: 'line-through',
  },
  diffPillRomajiUser: {
    fontSize: 11,
    fontWeight: '600',
    color: '#B91C1C',
    marginTop: 1,
  },
  diffPillValueCorrect: {
    fontSize: 16,
    fontWeight: '800',
    color: '#065F46',
  },
  diffPillRomajiCorrect: {
    fontSize: 11,
    fontWeight: '600',
    color: '#047857',
    marginTop: 1,
  },
  evalBreakdown: {
    gap: 3,
    backgroundColor: '#FFFFFF80',
    padding: 12,
    borderRadius: radii.md,
  },
  speakerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dividerRow: {
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.08)',
    paddingTop: 6,
    gap: 2,
  },
  evalPrompt: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
  },
  highlightGreen: {
    color: '#059669',
    fontWeight: '900',
  },
  evalRomaji: {
    fontSize: 13,
    color: '#4B5563',
  },
  evalEnglish: {
    fontSize: 13,
    color: '#374151',
  },
  tipBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  tipText: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '600',
    flex: 1,
  },
  evalContinueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: radii.xl,
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  evalContinueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
