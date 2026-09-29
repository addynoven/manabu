import React, { useState, useEffect } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, Delete, Check, RotateCcw, Volume2, Trophy, Award } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import {
  evaluateWordleGuess,
  getRandomWordleWord,
  KANA_KEYBOARD_ROWS,
  updateKeyboardStatus,
} from '../lib/wordleEngine';
import type { WordleGuessFeedback, WordleLetterStatus, WordleWord } from '../models/arcade.model';
import { useArcadeStore } from '../store/useArcadeStore';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

const MAX_GUESSES = 5;
const WORD_LENGTH = 3;

interface KanaWordleViewProps {
  onClose: () => void;
}

export function KanaWordleView({ onClose }: KanaWordleViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);

  const {
    wordleCurrentStreak,
    wordleWins,
    wordlePlayed,
    recordWordleResult,
  } = useArcadeStore();

  const [targetWord, setTargetWord] = useState<WordleWord>(() => getRandomWordleWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [feedbackHistory, setFeedbackHistory] = useState<WordleGuessFeedback[][]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [keyboardStatus, setKeyboardStatus] = useState<Record<string, WordleLetterStatus>>({});
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [showResultModal, setShowResultModal] = useState(false);

  const startNewGame = () => {
    const nextWord = getRandomWordleWord();
    setTargetWord(nextWord);
    setGuesses([]);
    setFeedbackHistory([]);
    setCurrentInput('');
    setKeyboardStatus({});
    setGameStatus('playing');
    setShowResultModal(false);
  };

  const handleKeyPress = (kana: string) => {
    if (gameStatus !== 'playing') return;
    if (currentInput.length >= WORD_LENGTH) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }
    Haptics.selectionAsync().catch(() => {});
    setCurrentInput(prev => prev + kana);
  };

  const handleDelete = () => {
    if (gameStatus !== 'playing') return;
    if (currentInput.length === 0) return;
    Haptics.selectionAsync().catch(() => {});
    setCurrentInput(prev => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (gameStatus !== 'playing') return;
    if (currentInput.length < WORD_LENGTH) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
      return;
    }

    const feedback = evaluateWordleGuess(targetWord.word, currentInput);
    const newGuesses = [...guesses, currentInput];
    const newHistory = [...feedbackHistory, feedback];

    setGuesses(newGuesses);
    setFeedbackHistory(newHistory);
    setKeyboardStatus(prev => updateKeyboardStatus(prev, feedback));
    setCurrentInput('');

    const isWin = currentInput === targetWord.word;
    if (isWin) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setGameStatus('won');
      recordWordleResult(true);
      setShowResultModal(true);
      if (ttsEnabled) {
        speakJapanese(targetWord.word, { rate: ttsRate }).catch(() => {});
      }
    } else if (newGuesses.length >= MAX_GUESSES) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setGameStatus('lost');
      recordWordleResult(false);
      setShowResultModal(true);
      if (ttsEnabled) {
        speakJapanese(targetWord.word, { rate: ttsRate }).catch(() => {});
      }
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    }
  };

  const getTileBackgroundColor = (status?: WordleLetterStatus) => {
    switch (status) {
      case 'correct':
        return '#22C55E'; // Emerald green
      case 'present':
        return '#F59E0B'; // Amber yellow
      case 'absent':
        return '#475569'; // Slate
      default:
        return theme.surface;
    }
  };

  const getKeyBackgroundColor = (char: string) => {
    const status = keyboardStatus[char];
    switch (status) {
      case 'correct':
        return '#22C55E';
      case 'present':
        return '#F59E0B';
      case 'absent':
        return '#334155';
      default:
        return theme.surface;
    }
  };

  const getKeyTextColor = (char: string) => {
    const status = keyboardStatus[char];
    if (status === 'correct' || status === 'present' || status === 'absent') {
      return '#FFFFFF';
    }
    return theme.textPrimary;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Top Header */}
      <View style={styles.header}>
        <Pressable
          onPress={onClose}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Close Wordle"
        >
          <X size={20} color={theme.textSecondary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>言葉パズル • Kana Wordle</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            🔥 Streak: {wordleCurrentStreak} • Won: {wordleWins}/{wordlePlayed}
          </Text>
        </View>

        <Pressable
          onPress={startNewGame}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="New Word"
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* Wordle Grid (5 Rows x 3 Columns) */}
      <View style={styles.gridContainer}>
        {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
          const isCurrentRow = rowIndex === guesses.length;
          const isPastRow = rowIndex < guesses.length;
          const guessChars = isPastRow
            ? Array.from(guesses[rowIndex])
            : isCurrentRow
            ? Array.from(currentInput)
            : [];
          const rowFeedback = feedbackHistory[rowIndex];

          return (
            <View key={`row-${rowIndex}`} style={styles.gridRow}>
              {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
                const char = guessChars[colIndex] || '';
                const feedback = rowFeedback ? rowFeedback[colIndex] : undefined;
                const status = feedback?.status;
                const isTileFilled = Boolean(char);

                return (
                  <View
                    key={`tile-${rowIndex}-${colIndex}`}
                    style={[
                      styles.tile,
                      {
                        backgroundColor: getTileBackgroundColor(status),
                        borderColor:
                          status && status !== 'empty'
                            ? 'transparent'
                            : isTileFilled
                            ? theme.primary
                            : theme.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.tileText,
                        {
                          color:
                            status && status !== 'empty'
                              ? '#FFFFFF'
                              : theme.textPrimary,
                        },
                      ]}
                    >
                      {char}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>

      {/* Action Prompt */}
      <View style={styles.promptBar}>
        <Text style={[styles.promptText, { color: theme.textSecondary }]}>
          Guess the 3-kana word ({guesses.length}/{MAX_GUESSES} attempts)
        </Text>
      </View>

      {/* Compact Kana On-Screen Keyboard */}
      <View style={[styles.keyboardContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.keyboardScroll}
        >
          {KANA_KEYBOARD_ROWS.map((row, rIdx) => (
            <View key={`kb-row-${rIdx}`} style={styles.keyboardRow}>
              {row.map(char => (
                <Pressable
                  key={`key-${char}`}
                  onPress={() => handleKeyPress(char)}
                  style={[
                    styles.keyButton,
                    {
                      backgroundColor: getKeyBackgroundColor(char),
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Text style={[styles.keyText, { color: getKeyTextColor(char) }]}>
                    {char}
                  </Text>
                </Pressable>
              ))}
            </View>
          ))}
        </ScrollView>

        {/* Enter and Backspace Bottom Bar */}
        <View style={styles.keyboardBottomControls}>
          <Pressable
            onPress={handleDelete}
            style={[styles.controlKey, { backgroundColor: theme.background, borderColor: theme.border }]}
          >
            <Delete size={20} color={theme.textPrimary} />
            <Text style={[styles.controlKeyText, { color: theme.textPrimary }]}>Delete</Text>
          </Pressable>

          <Pressable
            onPress={handleSubmit}
            style={[
              styles.controlKey,
              styles.submitKey,
              { backgroundColor: theme.primary, opacity: currentInput.length === WORD_LENGTH ? 1 : 0.6 },
            ]}
          >
            <Check size={20} color="#FFFFFF" />
            <Text style={[styles.controlKeyText, { color: '#FFFFFF' }]}>Submit Guess</Text>
          </Pressable>
        </View>
      </View>

      {/* Result Modal */}
      <Modal
        visible={showResultModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowResultModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalCard,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            {gameStatus === 'won' ? (
              <Trophy size={48} color="#22C55E" style={styles.modalIcon} />
            ) : (
              <Award size={48} color="#F59E0B" style={styles.modalIcon} />
            )}

            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>
              {gameStatus === 'won' ? '正解！ Splendid!' : 'Next Time! ざんねん'}
            </Text>

            <View style={styles.wordRevealBox}>
              <Text style={[styles.revealKana, { color: theme.primary }]}>
                {targetWord.word}
              </Text>
              {targetWord.kanji && (
                <Text style={[styles.revealKanji, { color: theme.textPrimary }]}>
                  {targetWord.kanji}
                </Text>
              )}
              <Text style={[styles.revealReading, { color: theme.textSecondary }]}>
                {targetWord.reading} • {targetWord.meaning}
              </Text>
            </View>

            {ttsEnabled && (
              <Pressable
                onPress={() => speakJapanese(targetWord.word, { rate: ttsRate })}
                style={[styles.audioModalButton, { backgroundColor: theme.background, borderColor: theme.border }]}
              >
                <Volume2 size={20} color={theme.accent} />
                <Text style={[styles.audioModalButtonText, { color: theme.textPrimary }]}>
                  Listen to Word
                </Text>
              </Pressable>
            )}

            <Pressable
              onPress={startNewGame}
              style={[styles.playAgainButton, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.playAgainText}>Play Another Word</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    gap: 8,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 10,
  },
  tile: {
    width: 58,
    height: 58,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: {
    fontSize: 28,
    fontWeight: '800',
  },
  promptBar: {
    alignItems: 'center',
    marginBottom: 6,
  },
  promptText: {
    fontSize: 13,
    fontWeight: '600',
  },
  keyboardContainer: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 10,
    gap: 8,
  },
  keyboardScroll: {
    gap: 6,
    paddingHorizontal: 4,
  },
  keyboardRow: {
    gap: 6,
  },
  keyButton: {
    width: 44,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 17,
    fontWeight: '700',
  },
  keyboardBottomControls: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  controlKey: {
    flex: 1,
    flexDirection: 'row',
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  submitKey: {
    flex: 1.5,
    borderWidth: 0,
  },
  controlKeyText: {
    fontSize: 14,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  modalCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  modalIcon: {
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
  },
  wordRevealBox: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    width: '100%',
    marginBottom: 16,
  },
  revealKana: {
    fontSize: 42,
    fontWeight: '800',
  },
  revealKanji: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 2,
  },
  revealReading: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
  },
  audioModalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  audioModalButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  playAgainButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playAgainText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
