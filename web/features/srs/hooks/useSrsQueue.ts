'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchWithAuth } from '@/core/api/httpClient';
import { useAuth } from '@/features/auth/hooks/useAuth';
import rawVocab from '@/data/vocab_n5.json';
import curriculumData from '@/data/curriculum.json';

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

export function useSrsQueue() {
  const { user, loading: authLoading } = useAuth();

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

  // Build comprehensive dictionary map across vocab_n5.json and curriculum.json
  const dictionaryMap = useMemo(() => {
    const map = new Map<string, { kanji: string; kana: string; meaning: string }>();

    // 1. Populate from vocab_n5.json
    (rawVocab as any[]).forEach((item) => {
      map.set(String(item.jmdict_seq), {
        kanji: item.kanji || item.kana,
        kana: item.kana,
        meaning: item.waller_definition,
      });
    });

    // 2. Populate from curriculum.json exercises
    (curriculumData as any[]).forEach((unit) => {
      unit.lessons?.forEach((lesson: any) => {
        lesson.exercises?.forEach((ex: any) => {
          if (ex.id) {
            const primaryText = ex.character || ex.correctAnswer || ex.prompt || '';
            const subText = ex.subPrompt ? ex.subPrompt.split('•')[0].trim() : primaryText;
            const defText = ex.prompt !== primaryText ? ex.prompt : ex.correctAnswer || 'Lesson Drill';

            map.set(ex.id, {
              kanji: primaryText,
              kana: subText,
              meaning: defText,
            });
          }
        });
      });
    });

    return map;
  }, []);

  const fetchQueue = useCallback(async () => {
    if (authLoading) return;

    if (!user) {
      setDueQueue([]);
      setAllCards([]);
      setStageSummary({
        apprenticeCount: 0,
        guruCount: 0,
        masterCount: 0,
        enlightenedCount: 0,
        burnedCount: 0,
        totalCards: 0,
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

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
          const vocab = dictionaryMap.get(c.cardId) || {
            kanji: c.cardId,
            kana: c.cardId,
            meaning: 'Japanese Practice Item',
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
          const vocab = dictionaryMap.get(c.cardId) || {
            kanji: c.cardId,
            kana: c.cardId,
            meaning: 'Japanese Practice Item',
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
        setLoading(false);
        return;
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch review queue');
    }

    setDueQueue([]);
    setAllCards([]);
    setLoading(false);
  }, [authLoading, user, dictionaryMap]);

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
        await fetchQueue();
        return true;
      }
    } catch (err) {
      console.error('[useSrsQueue] Review submit error:', err);
    }
    return false;
  };

  useEffect(() => {
    if (!authLoading) {
      fetchQueue();
    }
  }, [authLoading, user?.uid, fetchQueue]);

  return {
    dueQueue,
    allCards,
    stageSummary,
    loading: authLoading || loading,
    error,
    refetch: fetchQueue,
    submitReview,
  };
}
