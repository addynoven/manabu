import { useQuery } from '@tanstack/react-query';
import { kanaKeys } from '../keys';
import { kanaRepository } from '../repositories/kana.repository';
import type { KanaGroup } from '../models/kana.model';

export function useKanaGroupsQuery() {
  return useQuery<KanaGroup[], Error>({
    queryKey: kanaKeys.groups(),
    queryFn: async () => {
      const res = await kanaRepository.getAllGroups();
      if (!res.ok) {
        throw res.error;
      }
      return res.data;
    },
  });
}
