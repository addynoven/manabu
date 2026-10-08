import { getValkey } from './valkey';
import { query } from './db';
import crypto from 'crypto';

export type DuelGameType = 'kanjiDuel' | 'karuta' | 'shiritori';
export type DuelStatus = 'waiting' | 'live' | 'finished' | 'declined' | 'expired' | 'forfeit';

export interface DuelSubmission {
  correct: boolean;
  reactionMs: number | null;
  time?: number;
}

export interface DuelRoundHistory {
  round: number;
  mine: { correct: boolean; reactionMs: number | null };
  theirs: { correct: boolean; reactionMs: number | null };
  winner: 'me' | 'them' | 'none';
}

export interface DuelState {
  id: string;
  game: DuelGameType;
  status: DuelStatus;
  opponent: {
    uid: string;
    displayName: string;
    avatarEmoji: string;
    beltRank: string;
    level: number;
  };
  deck?: unknown;
  round: number;
  totalRounds: number;
  roundDeadlineMs: number | null;
  mySubmitted: boolean;
  opponentSubmitted: boolean;
  history: DuelRoundHistory[];
  winsMe: number;
  winsThem: number;
  opponentGone: boolean;
  result?: {
    winner: 'me' | 'them' | 'draw';
    reason: 'rounds' | 'forfeit' | 'timeout' | 'ended_with_n';
  };
  turn?: 'me' | 'them';
  turnDeadlineMs?: number | null;
  words?: Array<{ word: string; by: 'me' | 'them'; timestamp: number }>;
  serverTime: number;
}

const ROUND_TIME_MS = 10000;
const ROUND_GRACE_MS = 2000;

export async function createMatch(
  game: DuelGameType,
  creatorUid: string,
  targetUid: string,
  deck: unknown
): Promise<{ id: string }> {
  if (creatorUid === targetUid) {
    throw new Error('Self-play forbidden: Creator and target must be distinct users');
  }

  const valkey = getValkey();
  const id = crypto.randomUUID();

  const deckJson = JSON.stringify(deck);
  if (deckJson.length > 20480) {
    throw new Error('Deck size exceeds 20KB limit');
  }

  const totalRounds = Array.isArray(deck) ? deck.length : 10;
  const now = Date.now();

  const matchKey = `manabu:match:${id}`;
  const matchPayload: Record<string, any> = {
    id,
    game,
    status: 'waiting',
    a: creatorUid,
    b: targetUid,
    deck: deckJson,
    total: totalRounds,
    round: 0,
    roundDeadlineMs: 0,
    winsA: 0,
    winsB: 0,
    createdAt: now,
    startedAt: 0,
  };

  if (game === 'shiritori') {
    const initialWords = Array.isArray(deck) && deck.length > 0
      ? deck
      : [{ word: 'りんご', by: 'seed', timestamp: now }];
    matchPayload.words = JSON.stringify(initialWords);
    matchPayload.turn = creatorUid;
    matchPayload.turnDeadlineMs = 0;
  }

  await valkey.hset(matchKey, matchPayload);

  // Expire waiting matches after 10 minutes
  await valkey.expire(matchKey, 600);

  // Add to target's inbox
  await valkey.sadd(`manabu:inbox:${targetUid}`, id);
  await valkey.expire(`manabu:inbox:${targetUid}`, 600);

  // Track active duel for pair
  const pairKey = [creatorUid, targetUid].sort().join(':');
  await valkey.set(`manabu:pair:${pairKey}:${game}`, id, 'EX', 600);

  return { id };
}

export async function getInboxMatches(uid: string): Promise<any[]> {
  const valkey = getValkey();
  const inboxIds = await valkey.smembers(`manabu:inbox:${uid}`);
  if (!inboxIds || inboxIds.length === 0) return [];

  const results: any[] = [];
  for (const id of inboxIds) {
    const raw = await valkey.hgetall(`manabu:match:${id}`);
    if (!raw || !raw.id || raw.status !== 'waiting') {
      await valkey.srem(`manabu:inbox:${uid}`, id);
      continue;
    }

    // Get challenger profile
    const profileRes = await query(
      `SELECT uid, display_name, avatar_emoji, belt_rank, level FROM manabu.profiles WHERE uid = $1`,
      [raw.a]
    );

    const sender = profileRes.rows[0] || {
      uid: raw.a,
      display_name: 'Challenger',
      avatar_emoji: '🥋',
      belt_rank: 'white',
      level: 1,
    };

    results.push({
      id: raw.id,
      game: raw.game,
      status: raw.status,
      createdAt: Number(raw.createdAt),
      sender: {
        uid: sender.uid,
        displayName: sender.display_name,
        avatarEmoji: sender.avatar_emoji,
        beltRank: sender.belt_rank,
        level: sender.level,
      },
    });
  }

  return results;
}

export async function acceptMatch(id: string, uid: string): Promise<DuelState> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);

  if (!raw || !raw.id) {
    throw new Error('Match not found or expired');
  }

  if (raw.b !== uid) {
    throw new Error('Only the invited player can accept');
  }

  if (raw.status !== 'waiting') {
    throw new Error(`Cannot accept match with status: ${raw.status}`);
  }

  const now = Date.now();
  if (raw.game === 'shiritori') {
    const turnDeadline = now + 30000;
    await valkey.hset(matchKey, {
      status: 'live',
      startedAt: now,
      turn: raw.a,
      turnDeadlineMs: turnDeadline,
    });
  } else {
    const deadline = now + ROUND_TIME_MS;
    await valkey.hset(matchKey, {
      status: 'live',
      startedAt: now,
      round: 0,
      roundDeadlineMs: deadline,
    });
  }

  // Extend TTL while live
  await valkey.expire(matchKey, 900);
  await valkey.srem(`manabu:inbox:${uid}`, id);

  return getDuelState(id, uid, true);
}

export async function declineMatch(id: string, uid: string): Promise<void> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);

  if (raw && raw.b === uid) {
    await valkey.hset(matchKey, 'status', 'declined');
    await valkey.expire(matchKey, 120);
    await valkey.srem(`manabu:inbox:${uid}`, id);
  }
}

export async function submitAnswer(
  id: string,
  uid: string,
  round: number,
  correct: boolean,
  reactionMs: number | null
): Promise<DuelState> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);

  if (!raw || !raw.id) {
    throw new Error('Match not found');
  }

  if (raw.a !== uid && raw.b !== uid) {
    throw new Error('Unauthorized for this match');
  }

  if (raw.status !== 'live') {
    return getDuelState(id, uid, false);
  }

  const currentRound = Number(raw.round);
  if (round === currentRound) {
    const subKey = `manabu:match:${id}:sub:${round}`;
    const payload: DuelSubmission = {
      correct,
      reactionMs: reactionMs !== null ? Math.min(60000, Math.max(0, reactionMs)) : null,
      time: Date.now(),
    };
    await valkey.hsetnx(subKey, uid, JSON.stringify(payload));
    await valkey.expire(subKey, 600);
  }

  // Lazy advance
  await checkAndAdvanceMatch(id);

  return getDuelState(id, uid, false);
}

export async function submitShiritoriMove(
  id: string,
  uid: string,
  word: string
): Promise<DuelState> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);

  if (!raw || !raw.id) {
    throw new Error('Match not found');
  }

  if (raw.a !== uid && raw.b !== uid) {
    throw new Error('Unauthorized for this match');
  }

  if (raw.status !== 'live') {
    return getDuelState(id, uid, false);
  }

  if (raw.turn !== uid) {
    throw new Error('Not your turn');
  }

  const cleanWord = word.trim();
  if (!cleanWord) {
    throw new Error('Empty word submitted');
  }

  const opponentUid = uid === raw.a ? raw.b : raw.a;
  const words: Array<{ word: string; by: string; timestamp: number }> = raw.words
    ? JSON.parse(raw.words)
    : [];

  // Check exact duplicate
  if (words.some(w => w.word === cleanWord)) {
    throw new Error(`Word "${cleanWord}" has already been used in this match`);
  }

  const now = Date.now();
  words.push({ word: cleanWord, by: uid, timestamp: now });

  // Check ending in ん / ン
  if (cleanWord.endsWith('ん') || cleanWord.endsWith('ン')) {
    await valkey.hset(matchKey, {
      words: JSON.stringify(words),
    });
    await finishMatch(id, opponentUid, 'ended_with_n');
    return getDuelState(id, uid, false);
  }

  // Advance turn to opponent
  const nextDeadline = now + 30000;
  await valkey.hset(matchKey, {
    words: JSON.stringify(words),
    turn: opponentUid,
    turnDeadlineMs: nextDeadline,
  });

  return getDuelState(id, uid, false);
}

export async function forfeitMatch(id: string, uid: string): Promise<DuelState> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);

  if (!raw || !raw.id) {
    throw new Error('Match not found');
  }

  if (raw.a !== uid && raw.b !== uid) {
    throw new Error('Unauthorized');
  }

  if (raw.status === 'live' || raw.status === 'waiting') {
    const winnerUid = uid === raw.a ? raw.b : raw.a;
    await finishMatch(id, winnerUid, 'forfeit');
  }

  return getDuelState(id, uid, false);
}

export async function checkAndAdvanceMatch(id: string): Promise<void> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);

  if (!raw || raw.status !== 'live') return;

  if (raw.game === 'shiritori') {
    const turnDeadline = Number(raw.turnDeadlineMs || 0);
    const now = Date.now();
    if (turnDeadline > 0 && now >= turnDeadline + ROUND_GRACE_MS) {
      const lockKey = `manabu:lock:adv:${id}:shiritori`;
      const acquired = await valkey.set(lockKey, '1', 'EX', 5, 'NX');
      if (!acquired) return;

      const loserUid = raw.turn;
      const winnerUid = loserUid === raw.a ? raw.b : raw.a;
      await finishMatch(id, winnerUid, 'timeout');
    }
    return;
  }

  const currentRound = Number(raw.round);
  const totalRounds = Number(raw.total);
  const deadline = Number(raw.roundDeadlineMs);
  const now = Date.now();

  const subKey = `manabu:match:${id}:sub:${currentRound}`;
  const subs = await valkey.hgetall(subKey);

  const subA = subs[raw.a] ? (JSON.parse(subs[raw.a]) as DuelSubmission) : null;
  const subB = subs[raw.b] ? (JSON.parse(subs[raw.b]) as DuelSubmission) : null;

  const bothSubmitted = subA !== null && subB !== null;
  const timedOut = now >= deadline + ROUND_GRACE_MS;

  if (bothSubmitted || timedOut) {
    // Acquire lock to avoid race conditions
    const lockKey = `manabu:lock:adv:${id}:${currentRound}`;
    const acquired = await valkey.set(lockKey, '1', 'EX', 5, 'NX');
    if (!acquired) return;

    // Evaluate round winner
    let roundWinner: 'a' | 'b' | 'none' = 'none';

    const aValid = subA && subA.correct;
    const bValid = subB && subB.correct;

    if (aValid && !bValid) {
      roundWinner = 'a';
    } else if (bValid && !aValid) {
      roundWinner = 'b';
    } else if (aValid && bValid) {
      const timeA = subA.reactionMs ?? 999999;
      const timeB = subB.reactionMs ?? 999999;
      if (timeA < timeB) roundWinner = 'a';
      else if (timeB < timeA) roundWinner = 'b';
      else roundWinner = 'none';
    }

    let winsA = Number(raw.winsA);
    let winsB = Number(raw.winsB);

    if (roundWinner === 'a') winsA += 1;
    if (roundWinner === 'b') winsB += 1;

    // Check if match finished
    if (currentRound + 1 >= totalRounds) {
      let finalWinner: string | null = null;
      if (winsA > winsB) finalWinner = raw.a;
      else if (winsB > winsA) finalWinner = raw.b;
      // null means draw

      await finishMatch(id, finalWinner, 'rounds', winsA, winsB, currentRound + 1);
    } else {
      // Advance to next round
      const nextDeadline = Date.now() + ROUND_TIME_MS;
      await valkey.hset(matchKey, {
        round: currentRound + 1,
        roundDeadlineMs: nextDeadline,
        winsA,
        winsB,
      });
    }
  }
}

async function finishMatch(
  id: string,
  winnerUid: string | null,
  reason: 'rounds' | 'forfeit' | 'timeout' | 'ended_with_n',
  winsA?: number,
  winsB?: number,
  roundsCount?: number
) {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;
  const raw = await valkey.hgetall(matchKey);
  if (!raw || !raw.id || raw.status === 'finished') return;

  const wA = winsA !== undefined ? winsA : Number(raw.winsA || 0);
  const wB = winsB !== undefined ? winsB : Number(raw.winsB || 0);
  const totalRounds = roundsCount !== undefined ? roundsCount : Number(raw.total || 10);

  await valkey.hset(matchKey, {
    status: 'finished',
    winner: winnerUid || 'draw',
    reason,
    winsA: wA,
    winsB: wB,
  });

  // 2-minute TTL on match state after finish
  await valkey.expire(matchKey, 120);
  await valkey.srem(`manabu:inbox:${raw.b}`, id);
  if (raw.a) await valkey.srem(`manabu:inbox:${raw.a}`, id);

  // Archive to PostgreSQL match_results
  try {
    const started = raw.startedAt && raw.startedAt !== '0' ? new Date(Number(raw.startedAt)) : new Date();
    await query(
      `
      INSERT INTO manabu.match_results (
        id, game, player_a, player_b, wins_a, wins_b, winner, reason, rounds, started_at, ended_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, now())
      ON CONFLICT (id) DO NOTHING;
      `,
      [id, raw.game || 'kanjiDuel', raw.a, raw.b, wA, wB, winnerUid, reason, totalRounds, started]
    );
  } catch (err) {
    console.error('[Duels] Error archiving match result to DB:', err);
  }
}

export async function getDuelState(
  id: string,
  uid: string,
  includeDeck = false
): Promise<DuelState> {
  const valkey = getValkey();
  const matchKey = `manabu:match:${id}`;

  // Heartbeat for caller
  await valkey.set(`manabu:seen:${uid}`, '1', 'EX', 60);

  const raw = await valkey.hgetall(matchKey);
  if (!raw || !raw.id) {
    throw new Error('Match not found');
  }

  const isPlayerA = raw.a === uid;
  const isPlayerB = raw.b === uid;

  if (!isPlayerA && !isPlayerB) {
    throw new Error('Unauthorized');
  }

  // Lazy advance if live
  if (raw.status === 'live') {
    await checkAndAdvanceMatch(id);
  }

  // Reload after advance
  const updated = (await valkey.hgetall(matchKey)) || raw;
  const opponentUid = isPlayerA ? updated.b : updated.a;

  // Heartbeat check for opponent (caller sets 15s TTL seen key)
  const opponentSeen = await valkey.exists(`manabu:seen:${opponentUid}`);
  let opponentGone = updated.status === 'live' && opponentSeen === 0;

  // If opponent has stopped polling, check disconnect grace (15s)
  if (opponentGone && updated.status === 'live') {
    const disconnectKey = `manabu:match:${id}:disconnect:${opponentUid}`;
    const disconnectStartStr = await valkey.get(disconnectKey);
    const now = Date.now();
    if (!disconnectStartStr) {
      await valkey.set(disconnectKey, String(now), 'EX', 60);
    } else {
      const elapsed = now - Number(disconnectStartStr);
      if (elapsed >= 15000) {
        // 15 seconds elapsed without heartbeat - forfeit match in favor of current user
        await finishMatch(id, uid, 'forfeit');
        const finishedRaw = await valkey.hgetall(matchKey);
        if (finishedRaw) {
          Object.assign(updated, finishedRaw);
        }
      }
    }
  } else if (!opponentGone) {
    // Clear disconnect timer if opponent resumed heartbeat
    await valkey.del(`manabu:match:${id}:disconnect:${opponentUid}`);
  }

  // Load opponent profile
  const oppProfileRes = await query(
    `SELECT uid, display_name, avatar_emoji, belt_rank, level FROM manabu.profiles WHERE uid = $1`,
    [opponentUid]
  );
  const oppProfile = oppProfileRes.rows[0] || {
    uid: opponentUid,
    display_name: 'Opponent',
    avatar_emoji: '🥷',
    belt_rank: 'white',
    level: 1,
  };

  const currentRound = Number(updated.round || 0);
  const totalRounds = Number(updated.total || 10);
  const status = updated.status as DuelStatus;

  // Reconstruct round history
  const history: DuelRoundHistory[] = [];
  for (let r = 0; r <= currentRound; r++) {
    const subKey = `manabu:match:${id}:sub:${r}`;
    const subs = await valkey.hgetall(subKey);

    const mySub = subs[uid] ? (JSON.parse(subs[uid]) as DuelSubmission) : null;
    const oppSub = subs[opponentUid] ? (JSON.parse(subs[opponentUid]) as DuelSubmission) : null;

    if (r < currentRound || status === 'finished') {
      let winner: 'me' | 'them' | 'none' = 'none';
      const myOk = mySub && mySub.correct;
      const oppOk = oppSub && oppSub.correct;

      if (myOk && !oppOk) winner = 'me';
      else if (oppOk && !myOk) winner = 'them';
      else if (myOk && oppOk) {
        const myTime = mySub.reactionMs ?? 999999;
        const oppTime = oppSub.reactionMs ?? 999999;
        if (myTime < oppTime) winner = 'me';
        else if (oppTime < myTime) winner = 'them';
      }

      history.push({
        round: r,
        mine: { correct: !!myOk, reactionMs: mySub?.reactionMs ?? null },
        theirs: { correct: !!oppOk, reactionMs: oppSub?.reactionMs ?? null },
        winner,
      });
    }
  }

  // Current round submission status
  const currentSubKey = `manabu:match:${id}:sub:${currentRound}`;
  const currentSubs = await valkey.hgetall(currentSubKey);
  const mySubmitted = Boolean(currentSubs[uid]);
  const opponentSubmitted = Boolean(currentSubs[opponentUid]);

  const winsMe = isPlayerA ? Number(updated.winsA || 0) : Number(updated.winsB || 0);
  const winsThem = isPlayerA ? Number(updated.winsB || 0) : Number(updated.winsA || 0);

  let result: DuelState['result'] = undefined;
  if (status === 'finished' || status === 'forfeit') {
    const rawWinner = updated.winner;
    let winner: 'me' | 'them' | 'draw' = 'draw';
    if (rawWinner === uid) winner = 'me';
    else if (rawWinner === opponentUid) winner = 'them';

    result = {
      winner,
      reason: (updated.reason as any) || 'rounds',
    };
  }

  let formattedWords: Array<{ word: string; by: 'me' | 'them'; timestamp: number }> | undefined = undefined;
  if (updated.game === 'shiritori' && updated.words) {
    try {
      const rawWords = JSON.parse(updated.words) as Array<{ word: string; by: string; timestamp: number }>;
      formattedWords = rawWords.map(w => ({
        word: w.word,
        by: w.by === uid ? 'me' : 'them',
        timestamp: w.timestamp,
      }));
    } catch {}
  }

  return {
    id: updated.id,
    game: updated.game as DuelGameType,
    status,
    opponent: {
      uid: oppProfile.uid,
      displayName: oppProfile.display_name,
      avatarEmoji: oppProfile.avatar_emoji,
      beltRank: oppProfile.belt_rank,
      level: oppProfile.level,
    },
    deck: includeDeck && updated.deck ? JSON.parse(updated.deck) : undefined,
    round: currentRound,
    totalRounds,
    roundDeadlineMs: updated.roundDeadlineMs ? Number(updated.roundDeadlineMs) : null,
    mySubmitted,
    opponentSubmitted,
    history,
    winsMe,
    winsThem,
    opponentGone,
    result,
    turn: updated.turn ? (updated.turn === uid ? 'me' : 'them') : undefined,
    turnDeadlineMs: updated.turnDeadlineMs ? Number(updated.turnDeadlineMs) : null,
    words: formattedWords,
    serverTime: Date.now(),
  };
}

export async function matchOrQueue(
  game: DuelGameType,
  playerUid: string,
  deck: unknown
): Promise<{ id: string; matched: boolean }> {
  const valkey = getValkey();
  const queueKey = `manabu:matchmaking:${game}`;

  // Check if player was already matched while polling
  const alreadyMatched = await valkey.get(`manabu:matchmaking_result:${playerUid}`);
  if (alreadyMatched) {
    await valkey.del(`manabu:matchmaking_result:${playerUid}`);
    // Verify match is not self-match
    const raw = await valkey.hgetall(`manabu:match:${alreadyMatched}`);
    if (raw && raw.a && raw.b && raw.a !== raw.b) {
      return { id: alreadyMatched, matched: true };
    }
  }

  // Look for waiting opponent in queue, discarding expired or self entries
  while (true) {
    const waiterData = await valkey.lpop(queueKey);
    if (!waiterData) break;

    try {
      const waiter = JSON.parse(waiterData);
      // Skip and drop if waiter is same user (never allow self-match)
      if (waiter.uid === playerUid) {
        continue;
      }

      // Valid opponent found
      if (waiter.uid && Date.now() - (waiter.time || 0) < 60000) {
        // Create match between waiter (Player A) and current user (Player B)
        const matchRes = await createMatch(game, waiter.uid, playerUid, waiter.deck || deck);
        // Player B immediately accepts so match becomes live
        await acceptMatch(matchRes.id, playerUid);
        // Store matchId for waiter so their next check picks it up
        await valkey.set(`manabu:matchmaking_result:${waiter.uid}`, matchRes.id, 'EX', 60);
        return { id: matchRes.id, matched: true };
      }
    } catch {}
  }

  // If no opponent found, ensure no duplicate self entry exists before enqueuing
  const queueItems = await valkey.lrange(queueKey, 0, -1);
  for (const item of queueItems) {
    try {
      const parsed = JSON.parse(item);
      if (parsed.uid === playerUid) {
        await valkey.lrem(queueKey, 0, item);
      }
    } catch {}
  }

  // Add self to queue
  const queuePayload = JSON.stringify({
    uid: playerUid,
    deck,
    time: Date.now(),
  });
  await valkey.rpush(queueKey, queuePayload);
  await valkey.expire(queueKey, 120);

  return { id: '', matched: false };
}

export async function cancelMatchmaking(
  game: DuelGameType,
  playerUid: string
): Promise<void> {
  const valkey = getValkey();
  const queueKey = `manabu:matchmaking:${game}`;
  const items = await valkey.lrange(queueKey, 0, -1);
  for (const item of items) {
    try {
      const parsed = JSON.parse(item);
      if (parsed.uid === playerUid) {
        await valkey.lrem(queueKey, 0, item);
      }
    } catch {}
  }
  await valkey.del(`manabu:matchmaking_result:${playerUid}`);
}

