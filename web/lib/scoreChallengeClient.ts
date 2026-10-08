import { fetchWithAuth } from './api';

export type ChallengeGameType = 'rain' | 'snake' | 'catch' | 'survival';
export type ChallengeStatus = 'pending' | 'accepted' | 'declined' | 'completed' | 'expired';

export interface ScoreChallenge {
  id: string;
  game: ChallengeGameType;
  challengerUid: string;
  challengerName: string;
  challengerEmoji: string;
  targetScore: number;
  opponentUid: string;
  opponentName: string;
  opponentScore: number | null;
  status: ChallengeStatus;
  winnerUid: string | null;
  createdAt: number;
  expiresAt: number;
}

export class ScoreChallengeClient {
  async getChallenges() {
    return fetchWithAuth<{ challenges: ScoreChallenge[] }>('/api/v1/challenges');
  }

  async createChallenge(targetUid: string, game: ChallengeGameType, score: number) {
    return fetchWithAuth<{ challenge: ScoreChallenge }>('/api/v1/challenges', {
      method: 'POST',
      body: JSON.stringify({ targetUid, game, score }),
    });
  }

  async respondChallenge(challengeId: string, action: 'accept' | 'decline' | 'complete', score?: number) {
    return fetchWithAuth<{ challenge: ScoreChallenge }>(`/api/v1/challenges/${challengeId}/respond`, {
      method: 'POST',
      body: JSON.stringify({ action, score }),
    });
  }
}

export const scoreChallengeClient = new ScoreChallengeClient();
