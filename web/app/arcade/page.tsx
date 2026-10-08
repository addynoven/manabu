'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppShell } from '@/components/AppShell';
import { BattleLobbyModalWeb } from '@/components/arcade/BattleLobbyModalWeb';
import { ShiritoriArenaWeb } from '@/components/arcade/ShiritoriArenaWeb';
import { KarutaBattleWeb } from '@/components/arcade/KarutaBattleWeb';
import { KanjiDuelWeb } from '@/components/arcade/KanjiDuelWeb';
import { JapaneseWordleWeb } from '@/components/arcade/JapaneseWordleWeb';
import { KanaSnakeWeb } from '@/components/arcade/KanaSnakeWeb';
import { KanaCatchWeb } from '@/components/arcade/KanaCatchWeb';
import { BushidoSurvivalWeb } from '@/components/arcade/BushidoSurvivalWeb';
import { DailyGauntletWeb } from '@/components/arcade/DailyGauntletWeb';
import { HIRAGANA_DATA, speakJapanese } from '@/data/kana';
import { DuelGameType } from '@/lib/duelClient';
import {
  Gamepad2,
  Trophy,
  Flame,
  Zap,
  Play,
  RotateCcw,
  Sparkles,
  Heart,
  Timer,
  Swords,
  Bot,
  Layers,
  MessageSquare,
  Compass,
  ArrowRight,
} from 'lucide-react';

type ActiveGame =
  | null
  | 'shiritori'
  | 'karuta'
  | 'kanjiDuel'
  | 'wordle'
  | 'rain'
  | 'snake'
  | 'catch'
  | 'survival'
  | 'match'
  | 'daily';

function ArcadeContent() {
  const searchParams = useSearchParams();

  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'battles' | 'survival' | 'classics'>('all');

  // Lobby modal state
  const [lobbyModalGame, setLobbyModalGame] = useState<DuelGameType | null>(null);
  const [liveMatchId, setLiveMatchId] = useState<string | null>(null);

  // High Scores
  const [rainHigh, setRainHigh] = useState(0);
  const [snakeHigh, setSnakeHigh] = useState(0);
  const [catchHigh, setCatchHigh] = useState(0);
  const [survivalHigh, setSurvivalHigh] = useState(0);

  useEffect(() => {
    try {
      setRainHigh(Number(localStorage.getItem('manabu_arcade_rain_high') || 0));
      setSnakeHigh(Number(localStorage.getItem('manabu_arcade_snake_high') || 0));
      setCatchHigh(Number(localStorage.getItem('manabu_arcade_catch_high') || 0));
      setSurvivalHigh(Number(localStorage.getItem('manabu_arcade_survival_high') || 0));
    } catch {}

    // Check URL params for direct duel launch
    const duelId = searchParams.get('duelId');
    const gameParam = searchParams.get('game') as DuelGameType;
    if (duelId && gameParam) {
      setLiveMatchId(duelId);
      setActiveGame(gameParam);
    }
  }, [searchParams]);

  const handleOpenLobby = (game: DuelGameType) => {
    setLobbyModalGame(game);
  };

  const handleStartSoloFromLobby = (game: DuelGameType) => {
    setLobbyModalGame(null);
    setLiveMatchId(null);
    setActiveGame(game);
  };

  const handleStartLiveDuelFromLobby = (game: DuelGameType, matchId: string) => {
    setLobbyModalGame(null);
    setLiveMatchId(matchId);
    setActiveGame(game);
  };

  // ----------------------------------------------------
  // EMBEDDED GAME: KANA RAIN
  // ----------------------------------------------------
  const [rainPlaying, setRainPlaying] = useState(false);
  const [rainScore, setRainScore] = useState(0);
  const [rainLives, setRainLives] = useState(3);
  const [currentDrop, setCurrentDrop] = useState<{ kana: string; romaji: string } | null>(null);
  const [rainOptions, setRainOptions] = useState<string[]>([]);

  const startKanaRain = () => {
    setRainPlaying(true);
    setRainScore(0);
    setRainLives(3);
    spawnDrop();
  };

  const spawnDrop = () => {
    const item = HIRAGANA_DATA[Math.floor(Math.random() * HIRAGANA_DATA.length)];
    speakJapanese(item.kana);
    const wrong = HIRAGANA_DATA.filter(k => k.romaji !== item.romaji)
      .map(k => k.romaji)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const opts = [item.romaji, ...wrong].sort(() => 0.5 - Math.random());
    setCurrentDrop({ kana: item.kana, romaji: item.romaji });
    setRainOptions(opts);
  };

  const answerRain = (romaji: string) => {
    if (!currentDrop || !rainPlaying) return;

    if (romaji === currentDrop.romaji) {
      const newScore = rainScore + 10;
      setRainScore(newScore);
      if (newScore > rainHigh) {
        setRainHigh(newScore);
        try {
          localStorage.setItem('manabu_arcade_rain_high', String(newScore));
        } catch {}
      }
      spawnDrop();
    } else {
      if (rainLives > 1) {
        setRainLives(l => l - 1);
        spawnDrop();
      } else {
        setRainPlaying(false);
        setCurrentDrop(null);
      }
    }
  };

  // ----------------------------------------------------
  // EMBEDDED GAME: SPEED MATCH
  // ----------------------------------------------------
  interface MatchCard {
    id: number;
    text: string;
    pairId: number;
    isMatched: boolean;
  }
  const [matchPlaying, setMatchPlaying] = useState(false);
  const [matchCards, setMatchCards] = useState<MatchCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchScore, setMatchScore] = useState(0);

  const startMatchGame = () => {
    setMatchPlaying(true);
    setMatchScore(0);
    setSelectedCards([]);
    const chosen = HIRAGANA_DATA.slice(0, 30).sort(() => 0.5 - Math.random()).slice(0, 6);
    const deck: MatchCard[] = [];
    chosen.forEach((k, idx) => {
      deck.push({ id: idx * 2, text: k.kana, pairId: idx, isMatched: false });
      deck.push({ id: idx * 2 + 1, text: k.romaji, pairId: idx, isMatched: false });
    });
    setMatchCards(deck.sort(() => 0.5 - Math.random()));
  };

  const clickMatchCard = (card: MatchCard) => {
    if (!matchPlaying || card.isMatched || selectedCards.length === 2 || selectedCards.includes(card.id)) return;
    const newSelected = [...selectedCards, card.id];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const first = matchCards.find(c => c.id === newSelected[0])!;
      const second = card;
      if (first.pairId === second.pairId) {
        setTimeout(() => {
          setMatchCards(prev =>
            prev.map(c => (c.pairId === first.pairId ? { ...c, isMatched: true } : c))
          );
          setSelectedCards([]);
          setMatchScore(s => s + 50);
        }, 300);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 700);
      }
    }
  };

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-8 pb-12">
        {/* Render Active Game View */}
        {activeGame === 'shiritori' && (
          <ShiritoriArenaWeb
            isMultiplayer={!!liveMatchId}
            matchId={liveMatchId || undefined}
            onExit={() => {
              setActiveGame(null);
              setLiveMatchId(null);
            }}
          />
        )}

        {activeGame === 'karuta' && (
          <KarutaBattleWeb
            onExit={() => {
              setActiveGame(null);
              setLiveMatchId(null);
            }}
          />
        )}

        {activeGame === 'kanjiDuel' && (
          <KanjiDuelWeb
            onExit={() => {
              setActiveGame(null);
              setLiveMatchId(null);
            }}
          />
        )}

        {activeGame === 'wordle' && (
          <JapaneseWordleWeb onExit={() => setActiveGame(null)} />
        )}

        {activeGame === 'snake' && (
          <KanaSnakeWeb onExit={() => setActiveGame(null)} />
        )}

        {activeGame === 'catch' && (
          <KanaCatchWeb onExit={() => setActiveGame(null)} />
        )}

        {activeGame === 'survival' && (
          <BushidoSurvivalWeb onExit={() => setActiveGame(null)} />
        )}

        {activeGame === 'daily' && (
          <DailyGauntletWeb onExit={() => setActiveGame(null)} />
        )}

        {activeGame === 'rain' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌧️</span>
                <div>
                  <h1 className="text-sm font-bold text-white">文字の雨 • Kana Rain</h1>
                  <p className="text-[11px] text-neutral-400">Answer falling kana before your lives run out.</p>
                </div>
              </div>
              <button
                onClick={() => setActiveGame(null)}
                className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition"
              >
                Exit Game
              </button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-neutral-400">
                  Score: <span className="text-2xl font-black text-amber-400 font-mono">{rainScore}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      size={18}
                      fill={i < rainLives ? '#ef4444' : 'none'}
                      className={i < rainLives ? 'text-red-500' : 'text-neutral-700'}
                    />
                  ))}
                </div>
              </div>

              <div className="min-h-[260px] bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col items-center justify-center p-8">
                {rainPlaying && currentDrop ? (
                  <div className="text-center animate-bounce">
                    <div className="text-7xl font-serif font-black text-white py-2">
                      {currentDrop.kana}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={startKanaRain}
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-black text-white transition flex items-center gap-2"
                  >
                    <Play size={16} /> Start Kana Rain
                  </button>
                )}
              </div>

              {rainPlaying && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {rainOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => answerRain(opt)}
                      className="p-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-base font-bold text-white font-mono"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeGame === 'match' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h1 className="text-sm font-bold text-white">スピードマッチ • Speed Match</h1>
                  <p className="text-[11px] text-neutral-400">Flip and pair Japanese kana with romaji.</p>
                </div>
              </div>
              <button
                onClick={() => setActiveGame(null)}
                className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition"
              >
                Exit Game
              </button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-neutral-400">
                  Score: <span className="text-2xl font-black text-amber-400 font-mono">{matchScore}</span>
                </div>
                {!matchPlaying && (
                  <button
                    onClick={startMatchGame}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white"
                  >
                    Start Game
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {matchCards.map(c => (
                  <button
                    key={c.id}
                    onClick={() => clickMatchCard(c)}
                    disabled={c.isMatched}
                    className={`h-24 rounded-2xl border-2 text-xl font-serif font-black transition flex items-center justify-center ${
                      c.isMatched
                        ? 'bg-emerald-950/40 border-emerald-500 text-emerald-400 opacity-60'
                        : selectedCards.includes(c.id)
                        ? 'bg-neutral-800 border-red-500 text-white scale-105'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {c.isMatched || selectedCards.includes(c.id) ? c.text : '🎴'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- MAIN ARCADE HUB ---------------- */}
        {activeGame === null && (
          <div className="space-y-8">
            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Gamepad2 size={14} /> Japanese Arcade Dojo
                </div>
                <h1 className="text-2xl md:text-3xl font-black text-white">
                  Arcade Arena • <span className="font-serif text-red-500 font-normal">遊技場</span>
                </h1>
                <p className="text-xs text-neutral-400 mt-1">
                  1:1 Parity with Mobile: Solo vs AI Bots, Cross-Platform Live PvP, and Flash Gauntlets.
                </p>
              </div>

              {/* Records Pill Box */}
              <div className="flex flex-wrap gap-2 text-xs">
                <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                  <Trophy size={14} className="text-amber-400" />
                  <span className="text-neutral-400">Rain:</span>
                  <span className="font-bold text-white">{rainHigh}</span>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                  <Trophy size={14} className="text-amber-400" />
                  <span className="text-neutral-400">Snake:</span>
                  <span className="font-bold text-white">{snakeHigh}</span>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                  <Trophy size={14} className="text-amber-400" />
                  <span className="text-neutral-400">Catch:</span>
                  <span className="font-bold text-white">{catchHigh}</span>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                  <Trophy size={14} className="text-amber-400" />
                  <span className="text-neutral-400">Survival:</span>
                  <span className="font-bold text-white">{survivalHigh}</span>
                </div>
              </div>
            </div>

            {/* Daily Challenge Hero Banner */}
            <div className="bg-gradient-to-r from-amber-950/60 via-neutral-900 to-neutral-900 border border-amber-500/40 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Sparkles size={14} /> Ranked Gauntlet
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white">
                  Today&apos;s Daily Challenge • <span className="font-serif text-amber-400 font-normal">日替わり試練</span>
                </h2>
                <p className="text-xs text-neutral-400 max-w-xl">
                  Test your daily Japanese speed across 10 curated questions. Your score automatically syncs to the Clan Leaderboard!
                </p>
              </div>

              <button
                onClick={() => setActiveGame('daily')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-black transition flex items-center justify-center gap-2 shadow-lg shadow-amber-950/50 whitespace-nowrap"
              >
                <Flame size={16} /> Start Daily Challenge
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 border-b border-neutral-800 pb-3">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === 'all'
                    ? 'bg-red-600 text-white'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                All Games (9)
              </button>
              <button
                onClick={() => setActiveTab('battles')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'battles'
                    ? 'bg-red-600 text-white'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                <Swords size={13} /> ⚔️ Battles (3)
              </button>
              <button
                onClick={() => setActiveTab('survival')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'survival'
                    ? 'bg-red-600 text-white'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                <Zap size={13} /> ⚡ Survival
              </button>
              <button
                onClick={() => setActiveTab('classics')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'classics'
                    ? 'bg-red-600 text-white'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                <Gamepad2 size={13} /> 🎮 Classics (6)
              </button>
            </div>

            {/* SECTION 1: BATTLE ARENA (3 GAMES) */}
            {(activeTab === 'all' || activeTab === 'battles') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-300">
                  <Swords size={14} className="text-red-400" /> 対戦バトル • Battle Arena (Solo vs AI & Live PvP)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Card 1: Shiritori */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] font-bold">
                        🎌 SOLO & LIVE PVP
                      </div>
                      <h3 className="text-base font-bold text-white">しりとり • Shiritori Arena</h3>
                      <p className="text-xs text-neutral-400">
                        Authentic Japanese word-chain duel! 15s turn timer, dictionary verification, &apos;ん&apos; loss rule, and TTS recitation.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setLiveMatchId(null);
                          setActiveGame('shiritori');
                        }}
                        className="flex-1 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition flex items-center justify-center gap-1"
                      >
                        <Bot size={13} /> Solo
                      </button>
                      <button
                        onClick={() => handleOpenLobby('shiritori')}
                        className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-red-950/40"
                      >
                        <Swords size={13} /> Live PvP
                      </button>
                    </div>
                  </div>

                  {/* Card 2: Karuta */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">
                        🎴 SOLO & LIVE PVP
                      </div>
                      <h3 className="text-base font-bold text-white">競技かるた • Competitive Karuta</h3>
                      <p className="text-xs text-neutral-400">
                        Tatami mat reaction slap battle! Yomite reader recites poems or vocabulary. Slap the matching card before your opponent.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setLiveMatchId(null);
                          setActiveGame('karuta');
                        }}
                        className="flex-1 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition flex items-center justify-center gap-1"
                      >
                        <Bot size={13} /> Solo
                      </button>
                      <button
                        onClick={() => handleOpenLobby('karuta')}
                        className="flex-1 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-amber-950/40"
                      >
                        <Swords size={13} /> Live PvP
                      </button>
                    </div>
                  </div>

                  {/* Card 3: Kanji Duel */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold">
                        ⚡ SOLO & LIVE PVP
                      </div>
                      <h3 className="text-base font-bold text-white">漢字決闘 • Kanji Duel</h3>
                      <p className="text-xs text-neutral-400">
                        1000 HP Speed Strike Combat! Rapid-fire kanji stroke count & readings battle. Fast answers deal critical damage.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setLiveMatchId(null);
                          setActiveGame('kanjiDuel');
                        }}
                        className="flex-1 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition flex items-center justify-center gap-1"
                      >
                        <Bot size={13} /> Solo
                      </button>
                      <button
                        onClick={() => handleOpenLobby('kanjiDuel')}
                        className="flex-1 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-purple-950/40"
                      >
                        <Swords size={13} /> Live PvP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 2: CLASSICS & SURVIVAL (6 GAMES) */}
            {(activeTab === 'all' || activeTab === 'classics' || activeTab === 'survival') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-300">
                  <Gamepad2 size={14} className="text-emerald-400" /> クラシック・道場 • Solo Classic Arcades
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Japanese Wordle */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="text-2xl">🟩</div>
                      <h3 className="text-base font-bold text-white">言葉のパズル • Japanese Wordle</h3>
                      <p className="text-xs text-neutral-400">
                        Guess the daily 5-kana Japanese word in 6 attempts with full Kana on-screen keyboard.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveGame('wordle')}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition"
                    >
                      Play Wordle
                    </button>
                  </div>

                  {/* Bushido Survival */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="text-2xl">⚡</div>
                      <h3 className="text-base font-bold text-white">武士道サバイバル • Bushido Survival</h3>
                      <p className="text-xs text-neutral-400">
                        Time-attack endurance gauntlet! 3-second flash timer, combo multipliers, and Hell mode.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveGame('survival')}
                      className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white transition"
                    >
                      Play Survival
                    </button>
                  </div>

                  {/* Kana Snake */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="text-2xl">🐍</div>
                      <h3 className="text-base font-bold text-white">蛇行道 • Kana Snake</h3>
                      <p className="text-xs text-neutral-400">
                        Classic retro snake on a Japanese grid. Steer the snake to eat the prompt character.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveGame('snake')}
                      className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-xs font-bold text-white transition"
                    >
                      Play Snake
                    </button>
                  </div>

                  {/* Kana Catch */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="text-2xl">🧺</div>
                      <h3 className="text-base font-bold text-white">収穫籠 • Kana Catch</h3>
                      <p className="text-xs text-neutral-400">
                        Catch the falling target kana in your sliding basket before it touches the ground!
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveGame('catch')}
                      className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-xs font-bold text-white transition"
                    >
                      Play Catch
                    </button>
                  </div>

                  {/* Kana Rain */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="text-2xl">🌧️</div>
                      <h3 className="text-base font-bold text-white">文字の雨 • Kana Rain</h3>
                      <p className="text-xs text-neutral-400">
                        Defend the dojo by shooting down falling kana with rapid multiple-choice answers.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveGame('rain')}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition"
                    >
                      Play Rain
                    </button>
                  </div>

                  {/* Speed Match */}
                  <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition">
                    <div className="space-y-2">
                      <div className="text-2xl">🎴</div>
                      <h3 className="text-base font-bold text-white">スピードマッチ • Speed Match</h3>
                      <p className="text-xs text-neutral-400">
                        Card memory pairing game. Flip and match Japanese kana with their romaji reading.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveGame('match')}
                      className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition"
                    >
                      Play Match
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Battle Lobby Modal */}
        <BattleLobbyModalWeb
          isOpen={!!lobbyModalGame}
          game={lobbyModalGame}
          onClose={() => setLobbyModalGame(null)}
          onStartSolo={handleStartSoloFromLobby}
          onStartLiveDuel={handleStartLiveDuelFromLobby}
        />
      </div>
    </AppShell>
  );
}

export default function ArcadePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-neutral-500 text-sm">
          Loading Manabu Arcade...
        </div>
      }
    >
      <ArcadeContent />
    </Suspense>
  );
}
