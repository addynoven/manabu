import { z } from 'zod';

export type CardType = 'kanji' | 'vocab' | 'grammar';
export type CardLifecycleState = 'new' | 'learning' | 'review' | 'relearning';

/**
 * Locked FSRS-6 Card State Record
 */
export interface CardStateRecord {
  uid: string;
  cardId: string;
  cardType: CardType;
  state: CardLifecycleState;
  stability: number;   // S
  difficulty: number;  // D (1.0 to 10.0)
  reps: number;
  lapses: number;
  lastReview: string | null; // ISO string
  dueAt: string;            // ISO string
}

/**
 * Zod Schema for Review Submission Payload
 */
export const ReviewSubmissionPayloadSchema = z.object({
  cardId: z.string().min(1, 'Card ID is required'),
  cardType: z.enum(['kanji', 'vocab', 'grammar']),
  rating: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});

export type ReviewSubmissionPayload = z.infer<typeof ReviewSubmissionPayloadSchema>;
