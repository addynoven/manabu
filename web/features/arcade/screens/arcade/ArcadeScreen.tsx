'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { BattleLobbyModalWeb } from '../../components/BattleLobbyModalWeb';
import { ShiritoriArenaWeb } from '../../components/ShiritoriArenaWeb';
import { KarutaBattleWeb } from '../../components/KarutaBattleWeb';
import { KanjiDuelWeb } from '../../components/KanjiDuelWeb';
import { JapaneseWordleWeb } from '../../components/JapaneseWordleWeb';
import { KanaSnakeWeb } from '../../components/KanaSnakeWeb';
import { KanaCatchWeb } from '../../components/KanaCatchWeb';
import { BushidoSurvivalWeb } from '../../components/BushidoSurvivalWeb';
import { DailyGauntletWeb } from '../../components/DailyGauntletWeb';
import { DuelGameType } from '@/features/duels/repositories/duelClient';
import { ArcadeHeaderRibbon, ArcadeGameCatalog } from './components';

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

          {activeGame === 'wordle' && <JapaneseWordleWeb onExit={() => setActiveGame(null)} />}
          {activeGame === 'snake' && <KanaSnakeWeb onExit={() => setActiveGame(null)} />}
          {activeGame === 'catch' && <KanaCatchWeb onExit={() => setActiveGame(null)} />}
          {activeGame === 'survival' && <BushidoSurvivalWeb onExit={() => setActiveGame(null)} />}
          {activeGame === 'daily' && <DailyGauntletWeb onExit={() => setActiveGame(null)} />}

          {activeGame === null && (
            <div className="space-y-6">
              <ArcadeHeaderRibbon
                rainHigh={rainHigh}
                snakeHigh={snakeHigh}
                catchHigh={catchHigh}
                survivalHigh={survivalHigh}
              />

              <ArcadeGameCatalog
                activeTab={activeTab}
                onSelectTab={setActiveTab}
                onOpenSolo={(game) => {
                  setLiveMatchId(null);
                  setActiveGame(game);
                }}
                onOpenLobby={handleOpenLobby}
              />
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
