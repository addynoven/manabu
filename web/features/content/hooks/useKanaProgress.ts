'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  KanaItemProgress,
  getKanaProgressRecord,
  recordKanaPractice,
  calculateSubgroupStats,
  KanaSubgroupStats,
} from '../repositories/kanaProgressStore';

export function useKanaProgress() {
  const [progressMap, setProgressMap] = useState<Record<string, KanaItemProgress>>({});

  useEffect(() => {
    setProgressMap(getKanaProgressRecord());
  }, []);

  const markPracticed = useCallback((kana: string, script: 'hiragana' | 'katakana') => {
    const updated = recordKanaPractice(kana, script);
    setProgressMap((prev) => ({
      ...prev,
      [kana]: updated,
    }));
  }, []);

  const getStats = useCallback(
    (kanaList: { kana: string }[]): KanaSubgroupStats => {
      return calculateSubgroupStats(kanaList, progressMap);
    },
    [progressMap]
  );

  return {
    progressMap,
    markPracticed,
    getStats,
  };
}
