import { useQuery } from '@tanstack/react-query';
import { kanjiKeys } from '../keys';
import { kanjiRepository } from '../repositories/kanji.repository';
import type { KanjiEntry, KanjiLevel } from '../models/kanji.model';

export function useKanjiByLevelQuery(level: KanjiLevel) {
  return useQuery<KanjiEntry[], Error>({
    queryKey: kanjiKeys.byLevel(level),
    queryFn: async () => {
      const res = await kanjiRepository.getKanjiByLevel(level);
      if (!res.ok) {
        throw res.error;
      }
      return res.data;
    },
  });
}
