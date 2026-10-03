import { z } from 'zod';
import { ok, err, type Result } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';
import { mapEntity } from '../../../core/api/entityMappers';
import {
  VocabEntrySchema,
  type VocabEntry,
  type VocabLevel,
} from '../models/vocabulary.model';

import { contentSyncService } from '../../../core/content/contentSync.service';
import N5_VOCAB from '../data/n5.json';
import N4_VOCAB from '../data/n4.json';
import N3_VOCAB from '../data/n3.json';
import N2_VOCAB from '../data/n2.json';
import N1_VOCAB from '../data/n1.json';

const LEVEL_MAP: Record<VocabLevel, unknown[]> = {
  n5: N5_VOCAB as unknown[],
  n4: N4_VOCAB as unknown[],
  n3: N3_VOCAB as unknown[],
  n2: N2_VOCAB as unknown[],
  n1: N1_VOCAB as unknown[],
};

export interface IVocabularyRepository {
  getVocabByLevel(level: VocabLevel): Promise<Result<VocabEntry[], AppError>>;
}

export class VocabularyRepository implements IVocabularyRepository {
  private cache = new Map<VocabLevel, VocabEntry[]>();

  async getVocabByLevel(
    level: VocabLevel,
  ): Promise<Result<VocabEntry[], AppError>> {
    const cached = this.cache.get(level);
    if (cached) {
      return ok(cached);
    }

    const fallback = LEVEL_MAP[level];
    if (!fallback) {
      return err(
        new AppError(`Vocab data for level ${level} not found`, 'NOT_FOUND'),
      );
    }

    const bundleKey = `vocab-${level.toLowerCase()}`;
    const raw = contentSyncService.getContentBundle(bundleKey, fallback);

    const validation = mapEntity(z.array(VocabEntrySchema), raw);
    if (!validation.ok) {
      return validation;
    }

    const entries = validation.data.map(item => ({
      ...item,
      level,
    }));

    this.cache.set(level, entries);
    return ok(entries);
  }
}

export const vocabularyRepository = new VocabularyRepository();
