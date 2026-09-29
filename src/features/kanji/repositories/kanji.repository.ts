import { z } from 'zod';
import { ok, err, type Result } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';
import { mapEntity } from '../../../core/api/entityMappers';
import {
  KanjiEntrySchema,
  type KanjiEntry,
  type KanjiLevel,
} from '../models/kanji.model';

import N5_DATA from '../data/N5.json';
import N4_DATA from '../data/N4.json';
import N3_DATA from '../data/N3.json';
import N2_DATA from '../data/N2.json';
import N1_DATA from '../data/N1.json';

const LEVEL_MAP: Record<KanjiLevel, unknown[]> = {
  N5: N5_DATA as unknown[],
  N4: N4_DATA as unknown[],
  N3: N3_DATA as unknown[],
  N2: N2_DATA as unknown[],
  N1: N1_DATA as unknown[],
};

export interface IKanjiRepository {
  getKanjiByLevel(level: KanjiLevel): Promise<Result<KanjiEntry[], AppError>>;
}

export class KanjiRepository implements IKanjiRepository {
  private cache = new Map<KanjiLevel, KanjiEntry[]>();

  async getKanjiByLevel(level: KanjiLevel): Promise<Result<KanjiEntry[], AppError>> {
    const cached = this.cache.get(level);
    if (cached) {
      return ok(cached);
    }

    const raw = LEVEL_MAP[level];
    if (!raw) {
      return err(
        new AppError(`Kanji data for level ${level} not found`, 'NOT_FOUND'),
      );
    }

    const validation = mapEntity(z.array(KanjiEntrySchema), raw);
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

export const kanjiRepository = new KanjiRepository();
