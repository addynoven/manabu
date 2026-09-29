import React, { useState, useEffect } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { X, RotateCcw, Trophy, Sparkles, Volume2 } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../../../core/theme';
import { generateMemoryDeck } from '../lib/memoryEngine';
import type { MemoryCard, MemoryDeckMode } from '../models/arcade.model';
import { useArcadeStore } from '../store/useArcadeStore';
import { speakJapanese } from '../../../core/audio/tts';
import { useSettingsStore } from '../../settings/store/useSettingsStore';

interface MemoryMatchViewProps {
  onClose: () => void;
}

export function MemoryMatchView({ onClose }: MemoryMatchViewProps) {
  const { colors: theme } = useAppTheme();
  const ttsEnabled = useSettingsStore(s => s.ttsEnabled);
  const ttsRate = useSettingsStore(s => s.ttsRate);
  const { memoryBestMoves, recordMemoryScore } = useArcadeStore();

  const [activeDeckMode, setActiveDeckMode] = useState<MemoryDeckMode>('kana-romaji');
  const [cards, setCards] = useState<MemoryCard[]>(() => generateMemoryDeck('kana-romaji'));
  const [selectedCards, setSelectedCards] = useState<MemoryCard[]>([]);
  const [moves, setMoves] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const startNewGame = (mode: MemoryDeckMode = activeDeckMode) => {
    setActiveDeckMode(mode);
    setCards(generateMemoryDeck(mode));
    setSelectedCards([]);
    setMoves(0);
    setIsProcessing(false);
    setGameWon(false);
  };

  const handleCardPress = (card: MemoryCard) => {
    if (isProcessing || card.isFlipped || card.isMatched) return;

    Haptics.selectionAsync().catch(() => {});

    // Flip the tapped card
    const updatedCards = cards.map(c =>
      c.id === card.id ? { ...c, isFlipped: true } : c,
    );
    setCards(updatedCards);

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setIsProcessing(true);
      const newMoveCount = moves + 1;
      setMoves(newMoveCount);

      const [first, second] = newSelected;
      const isMatch = first.pairId === second.pairId;

      if (isMatch) {
        // Matched!
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        if (ttsEnabled) {
          // Speak side if Japanese
          const kanaSide = first.subContent === 'Hiragana' || first.subContent === 'Katakana' ? first : second;
          speakJapanese(kanaSide.content, { rate: ttsRate }).catch(() => {});
        }

        setTimeout(() => {
          setCards(prev =>
            prev.map(c =>
              c.pairId === first.pairId ? { ...c, isMatched: true } : c,
            ),
          );
          setSelectedCards([]);
          setIsProcessing(false);

          // Check if all pairs are matched
          const remainingUnmatched = updatedCards.filter(
            c => !c.isMatched && c.pairId !== first.pairId,
          );
          if (remainingUnmatched.length === 0) {
            setGameWon(true);
            recordMemoryScore(activeDeckMode, newMoveCount);
          }
        }, 400);
      } else {
        // Mismatch — flip both back
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
        setTimeout(() => {
          setCards(prev =>
            prev.map(c =>
              c.id === first.id || c.id === second.id
                ? { ...c, isFlipped: false }
                : c,
            ),
          );
          setSelectedCards([]);
          setIsProcessing(false);
        }, 900);
      }
    }
  };

  const matchedPairsCount = cards.filter(c => c.isMatched).length / 2;
  const bestMoves = memoryBestMoves[activeDeckMode];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={onClose}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Close Memory Match"
        >
          <X size={20} color={theme.textSecondary} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>神経衰弱 • Memory Tiles</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Moves: {moves} • Best: {bestMoves > 0 ? `${bestMoves} moves` : '—'}
          </Text>
        </View>

        <Pressable
          onPress={() => startNewGame(activeDeckMode)}
          style={[styles.iconButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          accessibilityLabel="Reset Memory Game"
        >
          <RotateCcw size={18} color={theme.textSecondary} />
        </Pressable>
      </View>

      {/* Deck Selector Tabs */}
      <View style={[styles.deckTabs, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Pressable
          onPress={() => startNewGame('kana-romaji')}
          style={[
            styles.deckTab,
            activeDeckMode === 'kana-romaji' && { backgroundColor: theme.primary },
          ]}
        >
          <Text
            style={[
              styles.deckTabText,
              { color: activeDeckMode === 'kana-romaji' ? '#FFFFFF' : theme.textSecondary },
            ]}
          >
            Kana & Sound
          </Text>
        </Pressable>

        <Pressable
          onPress={() => startNewGame('hira-kata')}
          style={[
            styles.deckTab,
            activeDeckMode === 'hira-kata' && { backgroundColor: theme.primary },
          ]}
        >
          <Text
            style={[
              styles.deckTabText,
              { color: activeDeckMode === 'hira-kata' ? '#FFFFFF' : theme.textSecondary },
            ]}
          >
            Hira & Kata
          </Text>
        </Pressable>

        <Pressable
          onPress={() => startNewGame('kanji-meaning')}
          style={[
            styles.deckTab,
            activeDeckMode === 'kanji-meaning' && { backgroundColor: theme.primary },
          ]}
        >
          <Text
            style={[
              styles.deckTabText,
              { color: activeDeckMode === 'kanji-meaning' ? '#FFFFFF' : theme.textSecondary },
            ]}
          >
            Kanji & Meaning
          </Text>
        </Pressable>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={[styles.progressText, { color: theme.textSecondary }]}>
          Matched: {matchedPairsCount} / 6 pairs
        </Text>
      </View>

      {/* Card Grid (4 Rows x 3 Columns) */}
      <View style={styles.grid}>
        {cards.map(card => {
          const isShown = card.isFlipped || card.isMatched;

          return (
            <Pressable
              key={card.id}
              activeOpacity={0.8}
              onPress={() => handleCardPress(card)}
              style={[
                styles.card,
                {
                  backgroundColor: card.isMatched
                    ? '#22C55E'
                    : isShown
                    ? theme.surface
                    : theme.card,
                  borderColor: card.isMatched
                    ? '#16A34A'
                    : isShown
                    ? theme.primary
                    : theme.border,
                  opacity: card.isMatched ? 0.75 : 1,
                },
              ]}
            >
              {isShown ? (
                <View style={styles.cardContent}>
                  <Text
                    style={[
                      styles.cardGlyph,
                      {
                        color: card.isMatched ? '#FFFFFF' : theme.textPrimary,
                        fontSize: card.content.length > 4 ? 14 : 26,
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {card.content}
                  </Text>
                  {card.subContent && (
                    <Text
                      style={[
                        styles.cardSubText,
                        { color: card.isMatched ? '#DCFCE7' : theme.textSecondary },
                      ]}
                      numberOfLines={1}
                    >
                      {card.subContent}
                    </Text>
                  )}
                </View>
              ) : (
                <View style={styles.cardBack}>
                  <Sparkles size={18} color={theme.accent} />
                  <Text style={[styles.cardBackLogo, { color: theme.accent }]}>学</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      {/* Victory Modal */}
      <Modal
        visible={gameWon}
        transparent
        animationType="fade"
        onRequestClose={() => setGameWon(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalCard,
              { backgroundColor: theme.surface, borderColor: theme.border },
            ]}
          >
            <Trophy size={54} color="#F59E0B" style={styles.modalIcon} />
            <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>
              見事！ Memory Master!
            </Text>
            <Text style={[styles.modalSubtitle, { color: theme.textSecondary }]}>
              Completed in {moves} moves
            </Text>

            <View style={styles.starRow}>
              <Text style={styles.starGlyph}>⭐</Text>
              <Text style={styles.starGlyph}>{moves <= 12 ? '⭐' : '☆'}</Text>
              <Text style={styles.starGlyph}>{moves <= 8 ? '⭐' : '☆'}</Text>
            </View>

            <Pressable
              onPress={() => startNewGame()}
              style={[styles.playAgainButton, { backgroundColor: theme.primary }]}
            >
              <Text style={styles.playAgainText}>Play Again</Text>
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
    paddingBottom: 24,
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
  deckTabs: {
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 1,
    padding: 4,
    marginVertical: 10,
  },
  deckTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  deckTabText: {
    fontSize: 11,
    fontWeight: '700',
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 13,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginVertical: 'auto',
  },
  card: {
    width: '30%',
    height: 94,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardGlyph: {
    fontWeight: '800',
    textAlign: 'center',
  },
  cardSubText: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  cardBack: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  cardBackLogo: {
    fontSize: 22,
    fontWeight: '800',
    opacity: 0.8,
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
    maxWidth: 320,
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
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 6,
  },
  starRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 18,
  },
  starGlyph: {
    fontSize: 32,
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
