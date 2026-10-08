'use client';

import React, { useState, useEffect, useRef } from 'react';
import { duelClient, DuelGameType } from '@/lib/duelClient';
import { Zap, Layers, MessageSquare, Swords, Bot, UserPlus, RefreshCw, X, Shield, ArrowRight } from 'lucide-react';

interface BattleLobbyModalProps {
  isOpen: boolean;
  game: DuelGameType | null;
  onClose: () => void;
  onStartSolo: (game: DuelGameType) => void;
  onStartLiveDuel: (game: DuelGameType, matchId: string) => void;
}

export function BattleLobbyModalWeb({
  isOpen,
  game,
  onClose,
  onStartSolo,
  onStartLiveDuel,
}: BattleLobbyModalProps) {
  const [tab, setTab] = useState<'pvp' | 'solo'>('pvp');
  const [isSearching, setIsSearching] = useState(false);
  const [searchElapsed, setSearchElapsed] = useState(0);
  const [directCode, setDirectCode] = useState('');
  const [isSubmittingCode, setIsSubmittingCode] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isSearchingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTab('pvp');
      setIsSearching(false);
      setSearchElapsed(0);
      setDirectCode('');
      setErrorMsg('');
      isSearchingRef.current = false;
    } else {
      stopMatchmaking();
    }
  }, [isOpen]);

  const stopMatchmaking = () => {
    isSearchingRef.current = false;
    setIsSearching(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (pollRef.current) clearTimeout(pollRef.current);
    if (game) {
      duelClient.cancelQuickMatch(game).catch(() => {});
    }
    setSearchElapsed(0);
  };

  const handleStartQuickMatch = async () => {
    if (!game || isSearchingRef.current) return;
    setErrorMsg('');
    isSearchingRef.current = true;
    setIsSearching(true);
    setSearchElapsed(0);

    // Initial match attempt
    const res = await duelClient.quickMatch(game);
    if (res.ok && res.data?.matched && res.data.id) {
      stopMatchmaking();
      onStartLiveDuel(game, res.data.id);
      return;
    }

    // Elapsed timer
    timerRef.current = setInterval(() => {
      setSearchElapsed(prev => prev + 1);
    }, 1000);

    // Polling loop
    const poll = async () => {
      if (!isSearchingRef.current) return;
      const pollRes = await duelClient.quickMatch(game);
      if (pollRes.ok && pollRes.data?.matched && pollRes.data.id) {
        stopMatchmaking();
        onStartLiveDuel(game, pollRes.data.id);
        return;
      }
      if (isSearchingRef.current) {
        pollRef.current = setTimeout(poll, 1500);
      }
    };

    pollRef.current = setTimeout(poll, 1500);
  };

  const handleChallengeByCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!game || isSubmittingCode) return;
    const clean = directCode.trim().replace(/[\s-]/g, '').toUpperCase();
    if (clean.length !== 8) {
      setErrorMsg('Friend code must be 8 characters (e.g. K7MQ-2XRD)');
      return;
    }

    setIsSubmittingCode(true);
    setErrorMsg('');

    const res = await duelClient.createDuel(clean, game);
    setIsSubmittingCode(false);

    if (res.ok && res.data?.id) {
      onStartLiveDuel(game, res.data.id);
    } else {
      setErrorMsg(res.error?.message || 'Failed to challenge friend. Check code.');
    }
  };

  if (!isOpen || !game) return null;

  const gameTitles: Record<DuelGameType, { title: string; subtitle: string; icon: any; color: string }> = {
    shiritori: {
      title: 'しりとり • Shiritori Arena',
      subtitle: 'Authentic Japanese Word-Chain Duel',
      icon: MessageSquare,
      color: 'text-[#ffb4ab]',
    },
    karuta: {
      title: '競技かるた • Competitive Karuta',
      subtitle: 'Tatami Mat Reaction Slap Battle',
      icon: Layers,
      color: 'text-amber-400',
    },
    kanjiDuel: {
      title: '漢字決闘 • Kanji Duel',
      subtitle: '1000 HP Speed Strike Combat',
      icon: Zap,
      color: 'text-purple-400',
    },
  };

  const currentInfo = gameTitles[game];
  const IconComp = currentInfo.icon;

  return (
    <div className="fixed inset-0 bg-[#051b22]/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#0a3240] border border-[#17424f] rounded-xl max-w-lg w-full p-6 md:p-8 space-y-6 relative overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8fa2aa] hover:text-white p-2 rounded-xl bg-[#0f3947]/60 transition"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0f3947] flex items-center justify-center text-2xl shadow-inner">
            <IconComp size={24} className={currentInfo.color} />
          </div>
          <div>
            <h2 className="text-lg font-black text-white">{currentInfo.title}</h2>
            <p className="text-xs text-[#8fa2aa]">{currentInfo.subtitle}</p>
          </div>
        </div>

        {/* Tab Selector: Live PvP vs Solo */}
        <div className="flex bg-[#051b22] p-1.5 rounded-2xl border border-[#17424f]">
          <button
            onClick={() => setTab('pvp')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              tab === 'pvp'
                ? 'bg-[#c74a4a] text-white shadow-md shadow-red-950/40'
                : 'text-[#8fa2aa] hover:text-white'
            }`}
          >
            <Swords size={14} /> ⚔️ Live PvP Duel
          </button>
          <button
            onClick={() => setTab('solo')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              tab === 'solo'
                ? 'bg-[#c74a4a] text-white shadow-md shadow-red-950/40'
                : 'text-[#8fa2aa] hover:text-white'
            }`}
          >
            <Bot size={14} /> 🤖 Solo vs AI Bot
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-[#ffb4ab] text-xs font-bold">
            {errorMsg}
          </div>
        )}

        {/* TAB 1: LIVE PVP */}
        {tab === 'pvp' ? (
          <div className="space-y-4">
            {/* Quick Matchmaking Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-neutral-950 to-neutral-900 border border-[#17424f] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap size={14} /> Instant Online Matchmaking
                </span>
                {isSearching && (
                  <span className="text-xs font-mono text-[#8fa2aa]">{searchElapsed}s elapsed</span>
                )}
              </div>
              <p className="text-xs text-[#8fa2aa]">
                Puts you in the global Valkey queue to immediately battle an online learner in a live lockstep match.
              </p>

              {isSearching ? (
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 py-3 px-4 rounded-xl bg-[#0a3240] border border-[#17424f] flex items-center justify-center gap-3 text-xs font-bold text-[#c1d0d6]">
                    <RefreshCw size={14} className="animate-spin text-amber-400" />
                    Searching for opponent...
                  </div>
                  <button
                    onClick={stopMatchmaking}
                    className="py-3 px-5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleStartQuickMatch}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-xs font-black text-black transition shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2"
                >
                  <Swords size={16} /> Find Match
                </button>
              )}
            </div>

            {/* Direct Friend Code Duel */}
            <div className="p-5 rounded-2xl bg-[#051b22] border border-[#17424f] space-y-3">
              <span className="text-xs font-bold text-[#8fa2aa] uppercase tracking-wider flex items-center gap-1.5">
                <UserPlus size={14} /> Challenge by Friend Code
              </span>
              <p className="text-xs text-[#8fa2aa]">
                Duel anyone on Android, iOS, or Web by entering their 8-character code.
              </p>

              <form onSubmit={handleChallengeByCode} className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={directCode}
                  onChange={e => setDirectCode(e.target.value)}
                  placeholder="e.g. K7MQ-2XRD"
                  maxLength={10}
                  className="flex-1 bg-[#0a3240] border border-[#17424f] rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-neutral-600 uppercase focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  disabled={isSubmittingCode || !directCode.trim()}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-xs font-bold text-white transition flex items-center gap-1.5"
                >
                  {isSubmittingCode ? 'Connecting...' : 'Send Duel'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* TAB 2: SOLO VS AI BOT */
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#051b22] border border-[#17424f] space-y-3">
              <span className="text-xs font-bold text-[#c1d0d6] uppercase tracking-wider flex items-center gap-1.5">
                <Bot size={14} className="text-emerald-400" /> Offline Practice Arena
              </span>
              <p className="text-xs text-[#8fa2aa]">
                Practice against authentic AI bots with adaptive reaction delays, custom mistake chances, and full TTS recitation.
              </p>

              <button
                onClick={() => onStartSolo(game)}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-black text-white transition shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
              >
                <Bot size={16} /> Start Solo Game vs Bot
              </button>
            </div>
          </div>
        )}

        <div className="text-[11px] text-[#627780] text-center flex items-center justify-center gap-1.5">
          <Shield size={12} /> Live lockstep state synchronized with Redis & PostgreSQL
        </div>
      </div>
    </div>
  );
}
