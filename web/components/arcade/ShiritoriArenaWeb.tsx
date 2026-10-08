'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as wanakana from 'wanakana';
import {
  BOT_PROFILES,
  ShiritoriBotProfile,
  ShiritoriDifficulty,
  ShiritoriTurn,
  validateShiritoriMove,
  getShiritoriLastKana,
  getBotShiritoriMove,
  getPlayerSuggestions,
} from '@/lib/arcade/shiritoriEngine';
import { speakJapanese } from '@/data/kana';
import { duelClient, DuelState } from '@/lib/duelClient';
import { useAuth } from '@/lib/AuthContext';
import {
  Timer,
  Volume2,
  Send,
  RotateCcw,
  Bot,
  Swords,
  Award,
  AlertTriangle,
  ArrowRight,
  Flame,
  Sparkles,
} from 'lucide-react';

interface ShiritoriArenaWebProps {
  isMultiplayer?: boolean;
  matchId?: string;
  onExit: () => void;
  onRematch?: () => void;
}

export function ShiritoriArenaWeb({
  isMultiplayer = false,
  matchId,
  onExit,
  onRematch,
}: ShiritoriArenaWebProps) {
  const { user, profile } = useAuth();

  // Solo mode state
  const [botDifficulty, setBotDifficulty] = useState<ShiritoriDifficulty>('medium');
  const botProfile = BOT_PROFILES[botDifficulty];

  const [turns, setTurns] = useState<ShiritoriTurn[]>([]);
  const [currentTurn, setCurrentTurn] = useState<'player' | 'opponent'>('player');
  const [timeLeft, setTimeLeft] = useState(15);
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<'player' | 'opponent' | null>(null);
  const [gameOverReason, setGameOverReason] = useState('');

  // Live Duel state
  const [duelState, setDuelState] = useState<DuelState | null>(null);
  const isMyTurnPvP = duelState ? (duelState.turn ? duelState.turn === 'me' : duelState.turnUid === user?.uid) : false;

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const turnsEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize solo game
  useEffect(() => {
    if (!isMultiplayer) {
      startNewSoloGame();
    }
  }, [isMultiplayer, botDifficulty]);

  // Handle window unload / exit forfeit
  useEffect(() => {
    if (!isMultiplayer || !matchId) return;

    const handleBeforeUnload = () => {
      duelClient.forfeitDuel(matchId).catch(() => {});
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isMultiplayer, matchId]);

  // Live Duel polling
  useEffect(() => {
    if (isMultiplayer && matchId) {
      const unsub = duelClient.pollDuel(matchId, state => {
        setDuelState(state);

        // Update turn timer from server deadline
        if (state.turnDeadlineMs) {
          const rem = Math.max(0, Math.round((state.turnDeadlineMs - Date.now()) / 1000));
          setTimeLeft(rem);
        }

        if (state.words && state.words.length > 0) {
          const mapped: ShiritoriTurn[] = state.words.map((w, i) => ({
            id: `turn_${i}_${w.timestamp}`,
            player: w.by === 'me' ? 'player' : 'opponent',
            word: w.word,
            kana: wanakana.toHiragana(w.word),
            romaji: wanakana.toRomaji(wanakana.toHiragana(w.word)),
            english: 'Japanese Word',
            timestamp: w.timestamp,
          }));
          setTurns(mapped);
        } else if (state.shiritoriHistory) {
          const mapped: ShiritoriTurn[] = state.shiritoriHistory.map((h, i) => ({
            id: `turn_${i}`,
            player: h.byUid === user?.uid ? 'player' : 'opponent',
            word: h.word,
            kana: h.kana,
            romaji: h.romaji,
            english: h.english,
            timestamp: h.timestamp,
          }));
          setTurns(mapped);
        }

        if (state.status === 'finished' || state.status === 'forfeit') {
          setGameOver(true);
          const isWinner = (state as any).result?.winner === 'me' || state.winnerUid === user?.uid;
          setWinner(isWinner ? 'player' : 'opponent');
          let reason = '';
          const serverReason = (state as any).result?.reason || state.winnerReason;
          const oppName = state.opponent?.displayName || 'Opponent';
          if (serverReason === 'timeout') {
            reason = isWinner ? `${oppName} ran out of time!` : 'You ran out of time!';
          } else if (serverReason === 'ended_with_n') {
            reason = isWinner ? `${oppName} played a word ending in「ん」!` : 'You played a word ending in「ん」!';
          } else if (serverReason === 'forfeit') {
            reason = isWinner ? `${oppName} disconnected or surrendered!` : 'You surrendered.';
          } else {
            reason = isWinner ? 'You won the match!' : `${oppName} won!`;
          }
          setGameOverReason(reason);
        }
      });
      return unsub;
    }
  }, [isMultiplayer, matchId, user?.uid]);

  // Scroll to bottom on new turn
  useEffect(() => {
    turnsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [turns]);

  const startNewSoloGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const starterWord: ShiritoriTurn = {
      id: 'start',
      player: 'opponent',
      word: 'りんご',
      kana: 'りんご',
      romaji: 'ringo',
      english: 'apple',
      timestamp: Date.now(),
    };
    setTurns([starterWord]);
    setCurrentTurn('player');
    setTimeLeft(15);
    setGameOver(false);
    setWinner(null);
    setGameOverReason('');
    setErrorMessage('');
    setInputText('');
    speakJapanese('りんご');
  };

  // Solo Timer Loop
  useEffect(() => {
    if (isMultiplayer || gameOver) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentTurn, gameOver, isMultiplayer]);

  const handleTimeout = () => {
    if (gameOver) return;
    setGameOver(true);
    if (currentTurn === 'player') {
      setWinner('opponent');
      setGameOverReason('⏱️ Turn timer expired (15 seconds)!');
    } else {
      setWinner('player');
      setGameOverReason('🎉 Opponent failed to answer within 15 seconds!');
    }
  };

  // Handle Input typing with auto-Hiragana conversion
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const hiragana = wanakana.toHiragana(raw);
    setInputText(hiragana);
    setErrorMessage('');
  };

  const playChosenWord = async (wordToPlay: string) => {
    if (gameOver) return;

    const word = wordToPlay.trim();
    if (!word) return;

    const lastTurn = turns[turns.length - 1];
    const requiredKana = lastTurn ? getShiritoriLastKana(lastTurn.kana) : '';
    const usedWords = new Set(turns.map(t => t.kana));
    const validation = validateShiritoriMove(word, requiredKana, usedWords);

    if (!validation.isValid) {
      setErrorMessage(validation.message || 'Invalid word according to Shiritori rules.');
      return;
    }

    const kana = validation.kana || word;

    // RULE: Ends in 'ん' = Instant Loss!
    if (kana.endsWith('ん') || kana.endsWith('ン')) {
      speakJapanese(word);
      if (isMultiplayer && matchId) {
        setInputText('');
        await duelClient.submitShiritoriMove(matchId, word);
        return;
      }
      setGameOver(true);
      setWinner('opponent');
      setGameOverReason('💀 Ended with 「ん」! Instant Shiritori Loss!');
      return;
    }

    if (isMultiplayer && matchId) {
      setInputText('');
      const res = await duelClient.submitShiritoriMove(matchId, word);
      if (!res.ok) {
        setErrorMessage(res.error?.message || 'Move failed');
      }
      return;
    }

    // Solo Player Move
    const newTurn: ShiritoriTurn = {
      id: `turn_${Date.now()}`,
      player: 'player',
      word,
      kana,
      romaji: wanakana.toRomaji(kana),
      english: validation.matchedWord?.english || 'Japanese noun',
      timestamp: Date.now(),
    };

    const nextTurns = [...turns, newTurn];
    setTurns(nextTurns);
    setInputText('');
    setErrorMessage('');
    setCurrentTurn('opponent');
    setTimeLeft(15);
    speakJapanese(word);

    // Trigger Bot Move after think delay
    setTimeout(() => {
      runBotMove(nextTurns);
    }, botProfile.thinkTimeMs);
  };

  const handlePlayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await playChosenWord(inputText);
  };

  const runBotMove = (history: ShiritoriTurn[]) => {
    if (gameOver) return;
    const lastWord = history[history.length - 1];
    const requiredKana = getShiritoriLastKana(lastWord.kana);
    const usedWords = new Set(history.map(t => t.kana));
    const botMoveRes = getBotShiritoriMove(requiredKana, usedWords, botDifficulty);

    if (!botMoveRes) {
      // Bot gave up / couldn't find word
      setGameOver(true);
      setWinner('player');
      setGameOverReason(`🎌 ${botProfile.name} ran out of words! You win!`);
      return;
    }

    const botTurn: ShiritoriTurn = {
      id: `turn_bot_${Date.now()}`,
      player: 'opponent',
      word: botMoveRes.word,
      kana: botMoveRes.kana,
      romaji: botMoveRes.romaji,
      english: botMoveRes.english,
      timestamp: Date.now(),
    };

    // Check if bot accidentally played 'ん'
    if (botTurn.kana.endsWith('ん')) {
      setTurns([...history, botTurn]);
      setGameOver(true);
      setWinner('player');
      setGameOverReason(`🎉 ${botProfile.name} played a word ending in 「ん」!`);
      speakJapanese(botTurn.word);
      return;
    }

    setTurns([...history, botTurn]);
    setCurrentTurn('player');
    setTimeLeft(15);
    speakJapanese(botTurn.word);
  };

  const lastWord = turns[turns.length - 1];
  const requiredChar = lastWord ? getShiritoriLastKana(lastWord.kana) : 'あ';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-red-500/15 border border-red-500/30 text-2xl flex items-center justify-center font-bold shadow-inner">
            {isMultiplayer ? duelState?.opponent?.avatarEmoji || '🥷' : 'し'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white">
                {isMultiplayer ? (duelState?.opponent?.displayName || 'Opponent') : 'しりとり • Shiritori Arena'}
              </h1>
              {isMultiplayer && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Duel
                </span>
              )}
            </div>
            <p className="text-[11px] text-neutral-400">
              {isMultiplayer
                ? `Rank: ${duelState?.opponent?.beltRank || 'White'} Belt • Level ${duelState?.opponent?.level || 1}`
                : `🤖 Solo vs ${botProfile.name} (${botDifficulty})`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isMultiplayer && (
            <select
              value={botDifficulty}
              onChange={e => setBotDifficulty(e.target.value as ShiritoriDifficulty)}
              disabled={turns.length > 1 && !gameOver}
              className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-1.5 text-xs text-neutral-300 font-bold focus:outline-none"
            >
              <option value="easy">🦝 Tanuki (Easy)</option>
              <option value="medium">🦊 Kitsune (Medium)</option>
              <option value="hard">👺 Tengu (Hard)</option>
            </select>
          )}

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition"
          >
            Exit Game
          </button>
        </div>
      </div>

      {/* Duel Turn Bar & Timer */}
      <div
        className={`border p-4 rounded-3xl flex items-center justify-between transition-colors ${
          (isMultiplayer ? isMyTurnPvP : currentTurn === 'player')
            ? 'bg-emerald-950/20 border-emerald-500/50 shadow-lg shadow-emerald-950/30'
            : 'bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-neutral-800'
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-3.5 h-3.5 rounded-full ${
              (isMultiplayer ? isMyTurnPvP : currentTurn === 'player')
                ? 'bg-emerald-500 animate-pulse'
                : 'bg-amber-500'
            }`}
          />
          <div>
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Turn Status</div>
            <div className="text-sm font-black text-white">
              {(isMultiplayer ? isMyTurnPvP : currentTurn === 'player') ? (
                <span className="text-emerald-400 font-black">🎯 YOUR TURN</span>
              ) : (
                <span className="text-amber-400">
                  ⏳ Waiting for {isMultiplayer ? (duelState?.opponent?.displayName || 'Opponent') : botProfile.name}...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Required Letter Display */}
        <div className="text-center">
          <div className="text-[10px] uppercase font-bold text-neutral-400">
            {(isMultiplayer ? isMyTurnPvP : currentTurn === 'player')
              ? 'Your Starting Kana'
              : 'Opponent Must Play'}
          </div>
          <div className="text-2xl font-black text-amber-400 font-serif">「{requiredChar}」</div>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2">
          <Timer size={18} className={timeLeft <= 5 ? 'text-red-500 animate-bounce' : 'text-neutral-400'} />
          <span
            className={`text-2xl font-mono font-black ${
              timeLeft <= 5 ? 'text-red-500' : 'text-white'
            }`}
          >
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Opponent Disconnect Banner if opponent stopped polling */}
      {isMultiplayer && duelState?.opponentGone && !gameOver && (
        <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-2xl flex items-center justify-between text-xs text-amber-300 font-bold animate-pulse">
          <span>⚠️ {duelState.opponent?.displayName || 'Opponent'} seems disconnected. Forfeiting in 15s if they don't return...</span>
        </div>
      )}

      {/* Scrollable Word Chain Board */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 min-h-[320px] max-h-[420px] overflow-y-auto space-y-3">
        {turns.map((turn, idx) => {
          const isPlayer = turn.player === 'player';
          const senderName = isPlayer
            ? 'YOU'
            : isMultiplayer
            ? (duelState?.opponent?.displayName || 'Opponent')
            : botProfile.name;
          const senderAvatar = isPlayer
            ? '🥋'
            : isMultiplayer
            ? (duelState?.opponent?.avatarEmoji || '🥷')
            : botProfile.avatarEmoji;

          return (
            <div
              key={turn.id}
              className={`flex items-start gap-3 ${isPlayer ? 'justify-end' : 'justify-start'}`}
            >
              {!isPlayer && (
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-base flex items-center justify-center shadow-inner mt-1">
                  {senderAvatar}
                </div>
              )}

              <div
                className={`max-w-[75%] p-4 rounded-2xl border ${
                  isPlayer
                    ? 'bg-red-600/20 border-red-500/40 text-right'
                    : 'bg-neutral-900 border-neutral-800 text-left'
                }`}
              >
                <div className="flex items-center gap-2 justify-between">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    #{idx + 1} {senderName}
                  </span>
                  <button
                    onClick={() => speakJapanese(turn.word)}
                    className="text-neutral-400 hover:text-white p-1"
                    title="Speak pronunciation"
                  >
                    <Volume2 size={13} />
                  </button>
                </div>

                <div className="text-xl font-black text-white font-serif tracking-wide mt-1">
                  {turn.word}
                </div>
                <div className="text-xs text-amber-400 font-mono">
                  {turn.kana} • {turn.romaji}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 italic">{turn.english}</div>
              </div>

              {isPlayer && (
                <div className="w-8 h-8 rounded-lg bg-red-600/30 text-white text-xs font-black flex items-center justify-center mt-1">
                  🥋
                </div>
              )}
            </div>
          );
        })}
        <div ref={turnsEndRef} />
      </div>

      {/* Game Over Screen */}
      {gameOver && (
        <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 text-center space-y-4 shadow-xl">
          <div className="text-4xl">{winner === 'player' ? '🏆' : '💀'}</div>
          <div>
            <h2 className="text-xl font-black text-white">
              {winner === 'player' ? 'Victory in Shiritori Arena!' : 'Defeated in Shiritori Arena'}
            </h2>
            <p className="text-xs text-neutral-400 mt-1">{gameOverReason}</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {!isMultiplayer ? (
              <button
                onClick={startNewSoloGame}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-black text-white transition flex items-center gap-2 shadow-lg shadow-red-950/40"
              >
                <RotateCcw size={15} /> Play Again
              </button>
            ) : (
              <>
                {onRematch && (
                  <button
                    onClick={onRematch}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-black text-white transition flex items-center gap-2 shadow-lg shadow-emerald-950/40"
                  >
                    <Swords size={15} /> Find Another Match
                  </button>
                )}
                <button
                  onClick={onExit}
                  className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-black text-neutral-300 transition"
                >
                  Exit to Arcade
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Input Bar & Lifeline Word Suggestions */}
      {!gameOver && (
        <form onSubmit={handlePlayerSubmit} className="space-y-3">
          {errorMessage && (
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-2">
              <AlertTriangle size={14} /> {errorMessage}
            </div>
          )}

          {/* Quick Lifeline Word Suggestions (1-Click Play) */}
          {(isMultiplayer ? isMyTurnPvP : currentTurn === 'player') && (
            <div className="bg-neutral-900/80 border border-neutral-800/80 rounded-2xl p-3 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-neutral-400">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Sparkles size={13} /> Lifeline Words Starting with 「{requiredChar}」:
                </span>
                <span className="text-[10px] text-neutral-500">Tap word to play instantly</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {getPlayerSuggestions(requiredChar, new Set(turns.map(t => t.kana)), 3).map(w => (
                  <button
                    key={w.word}
                    type="button"
                    onClick={() => playChosenWord(w.word)}
                    className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-95 border border-neutral-700/60 text-left transition flex items-center gap-2 shadow-sm group"
                  >
                    <span className="text-sm font-black text-white font-serif group-hover:text-amber-300">
                      {w.word}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">({w.kana})</span>
                    <span className="text-[10px] text-neutral-500 italic">• {w.english}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              disabled={isMultiplayer ? !isMyTurnPvP : currentTurn !== 'player'}
              placeholder={
                (isMultiplayer ? isMyTurnPvP : currentTurn === 'player')
                  ? `Enter Japanese noun starting with 「${requiredChar}」 (type romaji or kana)...`
                  : `Waiting for opponent's turn...`
              }
              className="flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 font-serif"
            />
            <button
              type="submit"
              disabled={(isMultiplayer ? !isMyTurnPvP : currentTurn !== 'player') || !inputText.trim()}
              className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-40 text-xs font-black text-white transition flex items-center gap-2 shadow-lg shadow-red-950/40"
            >
              <Send size={15} /> Play Word
            </button>
          </div>
          <p className="text-[11px] text-neutral-500 pl-2">
            💡 Type in Romaji or Kana (e.g. typing &quot;neko&quot; converts to &quot;ねこ&quot;). Words ending in 「ん」 lose immediately!
          </p>
        </form>
      )}
    </div>
  );
}
