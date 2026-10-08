import { fetchWithAuth } from './api';

export type DuelGameType = 'kanjiDuel' | 'karuta' | 'shiritori';
export type DuelStatus = 'waiting' | 'live' | 'finished' | 'declined' | 'expired' | 'forfeit';

export interface DuelPlayer {
  uid: string;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  hp: number;
  score: number;
}

export interface DuelSubmission {
  playerUid: string;
  round: number;
  correct: boolean;
  reactionMs: number | null;
  timestamp: number;
}

export interface DuelRoundHistory {
  round: number;
  winnerUid: string | null;
  playerAAnswer: boolean;
  playerBAnswer: boolean;
  playerAReactionMs: number | null;
  playerBReactionMs: number | null;
}

export interface DuelState {
  id: string;
  game: DuelGameType;
  playerA: DuelPlayer;
  playerB: DuelPlayer;
  status: DuelStatus;
  currentRound: number;
  totalRounds: number;
  turnUid?: string;
  lastTurnTime?: number;
  submissions: DuelSubmission[];
  roundHistory: DuelRoundHistory[];
  shiritoriHistory?: {
    word: string;
    kana: string;
    romaji: string;
    english: string;
    byUid: string;
    timestamp: number;
  }[];
  winnerUid: string | null;
  winnerReason: string | null;
  deck?: any;
  createdAt: number;
  updatedAt: number;
}

export class DuelClient {
  async quickMatch(game: DuelGameType, deck?: any) {
    return fetchWithAuth<{ id: string; matched: boolean }>('/api/v1/duels/matchmaking', {
      method: 'POST',
      body: JSON.stringify({ game, deck }),
    });
  }

  async cancelQuickMatch(game: DuelGameType) {
    return fetchWithAuth<{ ok: boolean }>(`/api/v1/duels/matchmaking?game=${game}`, {
      method: 'DELETE',
    });
  }

  async createDuel(target: string, game: DuelGameType, deck?: any) {
    return fetchWithAuth<{ id: string; state: DuelState }>('/api/v1/duels', {
      method: 'POST',
      body: JSON.stringify({ target, game, deck }),
    });
  }

  async getDuel(id: string, includeDeck = false) {
    const query = includeDeck ? '?deck=1' : '';
    return fetchWithAuth<{ state: DuelState }>(`/api/v1/duels/${id}${query}`);
  }

  async acceptDuel(id: string) {
    return fetchWithAuth<{ state: DuelState }>(`/api/v1/duels/${id}/accept`, {
      method: 'POST',
    });
  }

  async declineDuel(id: string) {
    return fetchWithAuth<{ ok: boolean }>(`/api/v1/duels/${id}/decline`, {
      method: 'POST',
    });
  }

  async submitAnswer(id: string, round: number, correct: boolean, reactionMs: number | null) {
    return fetchWithAuth<{ state: DuelState }>(`/api/v1/duels/${id}/answer`, {
      method: 'POST',
      body: JSON.stringify({ round, correct, reactionMs }),
    });
  }

  async submitShiritoriMove(id: string, word: string) {
    return fetchWithAuth<{ state: DuelState }>(`/api/v1/duels/${id}/move`, {
      method: 'POST',
      body: JSON.stringify({ word }),
    });
  }

  async forfeitDuel(id: string) {
    return fetchWithAuth<{ state: DuelState }>(`/api/v1/duels/${id}/forfeit`, {
      method: 'POST',
    });
  }

  pollDuel(
    id: string,
    onUpdate: (state: DuelState) => void,
    intervalMs = 700
  ): () => void {
    let cancelled = false;
    let timer: NodeJS.Timeout | null = null;

    const poll = async () => {
      if (cancelled) return;
      const res = await this.getDuel(id);
      if (cancelled) return;

      if (res.ok && res.data?.state) {
        onUpdate(res.data.state);
        if (res.data.state.status === 'finished' || res.data.state.status === 'forfeit') {
          return;
        }
      }

      if (!cancelled) {
        timer = setTimeout(poll, intervalMs);
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }
}

export const duelClient = new DuelClient();
