import { z } from 'zod';
import { ok, type Result } from '../../../core/errors/result';
import type { AppError } from '../../../core/errors/error-handler';
import { mapEntity } from '../../../core/api/entityMappers';
import { KanaGroupSchema, type KanaGroup } from '../models/kana.model';
import { KANA_GROUPS } from '../data/kana.data';

export interface IKanaRepository {
  getAllGroups(): Promise<Result<KanaGroup[], AppError>>;
  getGroupsByScript(
    script: 'hiragana' | 'katakana',
  ): Promise<Result<KanaGroup[], AppError>>;
}

export class KanaRepository implements IKanaRepository {
  async getAllGroups(): Promise<Result<KanaGroup[], AppError>> {
    // Validate schema
    const validation = mapEntity(z.array(KanaGroupSchema), KANA_GROUPS);
    if (!validation.ok) {
      return validation;
    }
    return ok(validation.data);
  }

  async getGroupsByScript(
    script: 'hiragana' | 'katakana',
  ): Promise<Result<KanaGroup[], AppError>> {
    const all = await this.getAllGroups();
    if (!all.ok) return all;
    return ok(all.data.filter(g => g.script === script));
  }
}

export const kanaRepository = new KanaRepository();
