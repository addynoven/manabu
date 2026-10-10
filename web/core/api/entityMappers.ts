import type { UserDomainEntity, SRSCardEntity } from '../../types';

/**
 * Pure functions mapping raw DB/API payloads to typed domain entities
 */

export function mapRawUserToEntity(raw: Record<string, unknown>): UserDomainEntity {
  return {
    uid: String(raw.uid || raw.id || ''),
    email: raw.email ? String(raw.email) : null,
    displayName: raw.display_name || raw.displayName ? String(raw.display_name || raw.displayName) : null,
    photoURL: raw.photo_url || raw.photoURL ? String(raw.photo_url || raw.photoURL) : null,
    xp: typeof raw.xp === 'number' ? raw.xp : 0,
    streak: typeof raw.streak === 'number' ? raw.streak : 0,
    desiredRetention: typeof raw.desired_retention === 'number' ? raw.desired_retention : 0.9,
    createdAt: raw.created_at ? new Date(String(raw.created_at)).toISOString() : new Date().toISOString(),
  };
}

export function mapRawCardStateToEntity(raw: Record<string, unknown>): SRSCardEntity {
  return {
    cardId: String(raw.card_id || raw.cardId || raw.id || ''),
    uid: String(raw.uid || ''),
    itemType: (raw.item_type || raw.itemType || 'VOCAB') as SRSCardEntity['itemType'],
    itemId: String(raw.item_id || raw.itemId || ''),
    state: (raw.state || 'NEW') as SRSCardEntity['state'],
    step: typeof raw.step === 'number' ? raw.step : 0,
    stability: typeof raw.stability === 'number' ? raw.stability : 0.4,
    difficulty: typeof raw.difficulty === 'number' ? raw.difficulty : 5.0,
    repetitionCount: typeof raw.repetition_count === 'number' ? raw.repetition_count : 0,
    lapses: typeof raw.lapses === 'number' ? raw.lapses : 0,
    lastReviewedAt: raw.last_reviewed_at ? new Date(String(raw.last_reviewed_at)).toISOString() : null,
    dueAt: raw.due_at ? new Date(String(raw.due_at)).toISOString() : new Date().toISOString(),
  };
}
