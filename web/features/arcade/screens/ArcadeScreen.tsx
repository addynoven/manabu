'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { BattleLobbyModalWeb } from '../components/BattleLobbyModalWeb';
import { ShiritoriArenaWeb } from '../components/ShiritoriArenaWeb';
import { KarutaBattleWeb } from '../components/KarutaBattleWeb';
import { KanjiDuelWeb } from '../components/KanjiDuelWeb';
import { JapaneseWordleWeb } from '../components/JapaneseWordleWeb';
import { KanaSnakeWeb } from '../components/KanaSnakeWeb';
import { KanaCatchWeb } from '../components/KanaCatchWeb';
import { BushidoSurvivalWeb } from '../components/BushidoSurvivalWeb';
import { DailyGauntletWeb } from '../components/DailyGauntletWeb';
import { HIRAGANA_DATA, speakJapanese } from '@/features/content/models/kana';
import { DuelGameType } from '@/features/duels/repositories/duelClient';
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

  const [lobbyModalGame, setLobbyModalGame] = useState<DuelGameType | null>(null);
  const [liveMatchId, setLiveMatchId] = useState<string | null>(null);

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
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {activeGame === 'shiritori' && (
          <ShiritoriArenaWeb
            isMultiplayer={!!liveMatchId}
            matchId={liveMatchId || undefined}
            onExit={() => {
              setActiveGame(null);
              setLiveMatchId(null);
            }}
            onRematch={() => {
              setActiveGame(null);
              setLiveMatchId(null);
              handleOpenLobby('shiritori');
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
            <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌧️</span>
                <div>
                  <h1 className="text-sm font-bold text-white">文字の雨 • Kana Rain</h1>
                  <p className="text-[11px] text-[#8fa2aa]">Answer falling kana before your lives run out.</p>
                </div>
              </div>
              <button
                onClick={() => setActiveGame(null)}
                className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
              >
                Exit Game
              </button>
            </div>

            <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-[#8fa2aa]">
                  Score: <span className="text-2xl font-black text-amber-400 font-mono">{rainScore}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      size={18}
                      fill={i < rainLives ? '#ef4444' : 'none'}
                      className={i < rainLives ? 'text-red-500' : 'text-[#455a64]'}
                    />
                  ))}
                </div>
              </div>

              <div className="min-h-[260px] bg-[#051b22] border border-[#17424f] rounded-2xl flex flex-col items-center justify-center p-8">
                {rainPlaying && currentDrop ? (
                  <div className="text-center animate-bounce">
                    <div className="text-7xl font-serif font-black text-white py-2">
                      {currentDrop.kana}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={startKanaRain}
                    className="px-6 py-3 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-black text-white transition flex items-center gap-2"
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
                      className="p-4 rounded-xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-base font-bold text-white font-mono"
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
            <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h1 className="text-sm font-bold text-white">スピードマッチ • Speed Match</h1>
                  <p className="text-[11px] text-[#8fa2aa]">Flip and pair Japanese kana with romaji.</p>
                </div>
              </div>
              <button
                onClick={() => setActiveGame(null)}
                className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
              >
                Exit Game
              </button>
            </div>

            <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-[#8fa2aa]">
                  Score: <span className="text-2xl font-black text-amber-400 font-mono">{matchScore}</span>
                </div>
                {!matchPlaying && (
                  <button
                    onClick={startMatchGame}
                    className="px-4 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-bold text-white"
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
                        ? 'bg-[#0f3947] border-red-500 text-white scale-105'
                        : 'bg-[#051b22] border-[#17424f] text-[#c1d0d6] hover:border-[#17424f]'
                    }`}
                  >
                    {c.isMatched || selectedCards.includes(c.id) ? c.text : '🎴'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeGame === null && (
          <div className="space-y-6">
            <section className="w-full bg-surface-base border border-border-hairline rounded-xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute right-4 bottom-0 text-[120px] font-bold text-border-hairline/25 select-none leading-none pointer-events-none font-mono">
                闘
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">
                      sports_esports
                    </span>
                    <span className="font-mono text-[11px] text-text-secondary tracking-widest uppercase font-bold">
                      MANABU ARCADE • LINGUISTIC BATTLE STATIONS
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-accent-gold-subtle text-accent-gold border border-accent-gold/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-1.5 animate-ping" />
                      SEASON 04 LIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Reflex Drills Sync: Active</span>
                  </div>
                </div>

                <div className="max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight flex items-center gap-3">
                    <span>The Dojo Arcade & Linguistic Colosseum</span>
                  </h1>
                  <p className="text-sm text-text-secondary mt-1">
                    Transform high-intensity JLPT drills into deliberate reflex mastery. High scores feed directly into your SRS retention matrix.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 mt-2 border-t border-border-subtle">
                  <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
                    <div className="p-2 rounded bg-surface-muted text-info">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-text-muted uppercase font-semibold">Rain High</div>
                      <div className="text-sm font-bold text-text-primary font-mono">{rainHigh} pts</div>
                    </div>
                  </div>
                  <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
                    <div className="p-2 rounded bg-accent-gold-subtle text-accent-gold border border-accent-gold/20">
                      <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-text-muted uppercase font-semibold">Snake High</div>
                      <div className="text-sm font-bold text-accent-gold font-mono">{snakeHigh} pts</div>
                    </div>
                  </div>
                  <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
                    <div className="p-2 rounded bg-surface-muted text-primary-fixed-dim">
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-text-muted uppercase font-semibold">Catch High</div>
                      <div className="text-sm font-bold text-text-primary font-mono">{catchHigh} pts</div>
                    </div>
                  </div>
                  <div className="bg-background-deep border border-border-subtle rounded-lg px-3.5 py-2.5 flex items-center gap-3">
                    <div className="p-2 rounded bg-surface-muted text-secondary">
                      <span className="material-symbols-outlined text-[20px]">military_tech</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-text-muted uppercase font-semibold">Survival High</div>
                      <div className="text-sm font-bold text-secondary font-mono">{survivalHigh} pts</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex gap-2 border-b border-[#17424f] pb-3">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === 'all'
                    ? 'bg-[#c74a4a] text-white'
                    : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
                }`}
              >
                All Games (9)
              </button>
              <button
                onClick={() => setActiveTab('battles')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'battles'
                    ? 'bg-[#c74a4a] text-white'
                    : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
                }`}
              >
                <Swords size={13} /> ⚔️ Battles (3)
              </button>
              <button
                onClick={() => setActiveTab('survival')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'survival'
                    ? 'bg-[#c74a4a] text-white'
                    : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
                }`}
              >
                <Zap size={13} /> ⚡ Survival
              </button>
              <button
                onClick={() => setActiveTab('classics')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'classics'
                    ? 'bg-[#c74a4a] text-white'
                    : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
                }`}
              >
                <Gamepad2 size={13} /> 🎮 Classics (6)
              </button>
            </div>

            {(activeTab === 'all' || activeTab === 'battles') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#c1d0d6]">
                  <Swords size={14} className="text-[#ffb4ab]" /> 対戦バトル • Battle Arena (Solo vs AI & Live PvP)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between space-y-4 hover:border-[#17424f] transition">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-[#ffb4ab] text-[10px] font-bold">
                        🎌 SOLO & LIVE PVP
                      </div>
                      <h3 className="text-base font-bold text-white">しりとり • Shiritori Arena</h3>
                      <p className="text-xs text-[#8fa2aa]">
                        Authentic Japanese word-chain duel! 15s turn timer, dictionary verification, &apos;ん&apos; loss rule, and TTS recitation.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setLiveMatchId(null);
                          setActiveGame('shiritori');
                        }}
                        className="flex-1 py-2 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-white transition flex items-center justify-center gap-1"
                      >
                        <Bot size={13} /> Solo
                      </button>
                      <button
                        onClick={() => handleOpenLobby('shiritori')}
                        className="flex-1 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-red-950/40"
                      >
                        <Swords size={13} /> Live PvP
                      </button>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between space-y-4 hover:border-[#17424f] transition">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">
                        🎴 SOLO & LIVE PVP
                      </div>
                      <h3 className="text-base font-bold text-white">競技かるた • Competitive Karuta</h3>
                      <p className="text-xs text-[#8fa2aa]">
                        Tatami mat reaction slap battle! Yomite reader recites poems or vocabulary. Slap the matching card before your opponent.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setLiveMatchId(null);
                          setActiveGame('karuta');
                        }}
                        className="flex-1 py-2 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-white transition flex items-center justify-center gap-1"
                      >
                        <Bot size={13} /> Solo
                      </button>
                      <button
                        onClick={() => handleOpenLobby('karuta')}
                        className="flex-1 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-red-950/40"
                      >
                        <Swords size={13} /> Live PvP
                      </button>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between space-y-4 hover:border-[#17424f] transition">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold">
                        ⚡ SOLO & LIVE PVP
                      </div>
                      <h3 className="text-base font-bold text-white">漢字決闘 • Kanji Duel</h3>
                      <p className="text-xs text-[#8fa2aa]">
                        1000 HP speed strike combat across Onyomi, Kunyomi, and radicals! Correct answers strike your opponent.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setLiveMatchId(null);
                          setActiveGame('kanjiDuel');
                        }}
                        className="flex-1 py-2 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-white transition flex items-center justify-center gap-1"
                      >
                        <Bot size={13} /> Solo
                      </button>
                      <button
                        onClick={() => handleOpenLobby('kanjiDuel')}
                        className="flex-1 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-red-950/40"
                      >
                        <Swords size={13} /> Live PvP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <BattleLobbyModalWeb
          isOpen={!!lobbyModalGame}
          game={lobbyModalGame}
          onClose={() => setLobbyModalGame(null)}
          onStartSolo={handleStartSoloFromLobby}
          onStartLiveDuel={handleStartLiveDuelFromLobby}
        />
        </main>
      </div>
    </AuthGate>
  );
}

export function ArcadeScreen() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-white">Loading Arcade...</div>}>
      <ArcadeContent />
    </Suspense>
  );
}
