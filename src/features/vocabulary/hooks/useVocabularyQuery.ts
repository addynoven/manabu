import { useQuery } from '@tanstack/react-query';
import { vocabKeys } from '../keys';
import { vocabularyRepository } from '../repositories/vocabulary.repository';
import type { VocabEntry, VocabLevel } from '../models/vocabulary.model';

export function useVocabByLevelQuery(level: VocabLevel) {
  return useQuery<VocabEntry[], Error>({
    queryKey: vocabKeys.byLevel(level),
    queryFn: async () => {
      const res = await vocabularyRepository.getVocabByLevel(level);
      if (!res.ok) {
        throw res.error;
      }
      return res.data;
    },
  });
}
