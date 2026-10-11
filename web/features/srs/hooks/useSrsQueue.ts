'use client';

import { useState, useEffect, useCallback } from 'react';
import { fetchWithAuth } from '@/core/api/httpClient';
import rawVocab from '@/data/vocab_n5.json';

export interface SrsItem {
  id: string;
  kanji: string;
  kana: string;
  meaning: string;
  stage: number;
  dueAt: number;
  stability?: number;
  difficulty?: number;
  reps?: number;
}

export interface StageSummary {
  apprenticeCount: number;
  guruCount: number;
  masterCount: number;
  enlightenedCount: number;
  burnedCount: number;
  totalCards: number;
}

const STORAGE_DECK_KEY = 'manabu_web_srs_deck';

export function useSrsQueue() {
  const [dueQueue, setDueQueue] = useState<SrsItem[]>([]);
  const [allCards, setAllCards] = useState<SrsItem[]>([]);
  const [stageSummary, setStageSummary] = useState<StageSummary>({
    apprenticeCount: 0,
    guruCount: 0,
    masterCount: 0,
    enlightenedCount: 0,
    burnedCount: 0,
    totalCards: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const calculateStage = (reps: number): number => {
    if (reps <= 4) return Math.max(1, reps);
    if (reps <= 6) return 5;
    if (reps === 7) return 7;
    if (reps === 8) return 8;
    return 9;
  };

  const fetchQueue = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Build vocab dictionary map
    const vocabMap = new Map<string, { kanji: string; kana: string; meaning: string }>();
    (rawVocab as any[]).forEach((item) => {
      vocabMap.set(String(item.jmdict_seq), {
        kanji: item.kanji || item.kana,
        kana: item.kana,
        meaning: item.waller_definition,
      });
    });

    try {
      const res = await fetchWithAuth<{
        queue: Array<{
          cardId: string;
          cardType: string;
          state: string;
          stability: number;
          difficulty: number;
          reps: number;
          lapses: number;
          dueAt: string;
        }>;
        allCards: Array<{
          cardId: string;
          cardType: string;
          state: string;
          stability: number;
          difficulty: number;
          reps: number;
          lapses: number;
          dueAt: string;
        }>;
        stageSummary: StageSummary;
      }>('/api/v1/srs/queue');

      if (res.ok && res.data) {
        const fetchedQueue = res.data.queue || [];
        const fetchedAll = res.data.allCards || [];

        const mappedQueue: SrsItem[] = fetchedQueue.map((c) => {
          const vocab = vocabMap.get(c.cardId) || {
            kanji: c.cardId.replace(/^(u\d+_l\d+_\d+)/, '$1'),
            kana: c.cardId,
            meaning: 'Lesson Vocabulary Item',
          };
          return {
            id: c.cardId,
            kanji: vocab.kanji,
            kana: vocab.kana,
            meaning: vocab.meaning,
            stage: calculateStage(c.reps),
            dueAt: new Date(c.dueAt).getTime(),
            stability: c.stability,
            difficulty: c.difficulty,
            reps: c.reps,
          };
        });

        const mappedAll: SrsItem[] = fetchedAll.map((c) => {
          const vocab = vocabMap.get(c.cardId) || {
            kanji: c.cardId,
            kana: c.cardId,
            meaning: 'Lesson Vocabulary Item',
          };
          return {
            id: c.cardId,
            kanji: vocab.kanji,
            kana: vocab.kana,
            meaning: vocab.meaning,
            stage: calculateStage(c.reps),
            dueAt: new Date(c.dueAt).getTime(),
            stability: c.stability,
            difficulty: c.difficulty,
            reps: c.reps,
          };
        });

        setDueQueue(mappedQueue);
        setAllCards(mappedAll);
        if (res.data.stageSummary) {
          setStageSummary(res.data.stageSummary);
        }

        // Cache local backup
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_DECK_KEY, JSON.stringify(mappedAll));
        }
        setLoading(false);
        return;
      }
    } catch {
      // Offline fallback
    }

    // Fallback to local storage or starter cards
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_DECK_KEY);
        if (saved) {
          const parsed: SrsItem[] = JSON.parse(saved);
          const due = parsed.filter((i) => i.dueAt <= Date.now() && i.stage < 9);
          setDueQueue(due);
          setAllCards(parsed);
          setStageSummary({
            apprenticeCount: parsed.filter((i) => i.stage >= 1 && i.stage <= 4).length,
            guruCount: parsed.filter((i) => i.stage >= 5 && i.stage <= 6).length,
            masterCount: parsed.filter((i) => i.stage === 7).length,
            enlightenedCount: parsed.filter((i) => i.stage === 8).length,
            burnedCount: parsed.filter((i) => i.stage === 9).length,
            totalCards: parsed.length,
          });
        }
      } catch {}
    }

    setLoading(false);
  }, []);

  const submitReview = async (cardId: string, cardType: string, rating: 1 | 2 | 3 | 4) => {
    try {
      const res = await fetchWithAuth('/api/v1/srs/review', {
        method: 'POST',
        body: JSON.stringify({
          cardId,
          cardType: cardType || 'vocab',
          rating,
        }),
      });

      if (res.ok) {
        fetchQueue();
        return true;
      }
    } catch (err) {
      console.error('[useSrsQueue] Review submit error:', err);
    }
    return false;
  };

  useEffect(() => {
    fetchQueue();
  }, [fetchQueue]);

  return {
    dueQueue,
    allCards,
    stageSummary,
    loading,
    error,
    refetch: fetchQueue,
    submitReview,
  };
}
