'use client';

import { useState, useEffect, useCallback } from 'react';
import type { CardStateRecord } from '../models/srs.types';

export function useSrsQueue(uid: string) {
  const [queue, setQueue] = useState<CardStateRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQueue = useCallback(async () => {
    if (!uid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/v1/srs/queue?uid=${encodeURIComponent(uid)}`);
      const data = await res.json();
      if (res.ok && data.cards) {
        setQueue(data.cards);
      } else {
        setError(data.error || 'Failed to fetch queue');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  }, [uid]);

  useEffect(() => {
    fetchQueue();
  }, [fetchQueue]);

  return { queue, loading, error, refetch: fetchQueue };
}
