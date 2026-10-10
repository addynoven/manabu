export interface DuelRoom {
  id: string;
  hostUid: string;
  guestUid: string | null;
  status: 'WAITING' | 'IN_PROGRESS' | 'FINISHED';
  currentRound: number;
  maxRounds: number;
  scores: Record<string, number>;
  createdAt: string;
}
