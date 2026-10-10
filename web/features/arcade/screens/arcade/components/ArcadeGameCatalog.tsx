'use client';

import React from 'react';
import { DuelGameType } from '@/features/duels/repositories/duelClient';
import { Swords, Bot, Zap, Gamepad2 } from 'lucide-react';

interface ArcadeGameCatalogProps {
  activeTab: 'all' | 'battles' | 'survival' | 'classics';
  onSelectTab: (tab: 'all' | 'battles' | 'survival' | 'classics') => void;
  onOpenSolo: (game: DuelGameType) => void;
  onOpenLobby: (game: DuelGameType) => void;
}

export function ArcadeGameCatalog({
  activeTab,
  onSelectTab,
  onOpenSolo,
  onOpenLobby,
}: ArcadeGameCatalogProps) {
  return (
    <div className="space-y-6">
      <div className="flex gap-2 border-b border-[#17424f] pb-3">
        <button
          onClick={() => onSelectTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === 'all'
              ? 'bg-[#c74a4a] text-white'
              : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
          }`}
        >
          All Games (9)
        </button>
        <button
          onClick={() => onSelectTab('battles')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            activeTab === 'battles'
              ? 'bg-[#c74a4a] text-white'
              : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
          }`}
        >
          <Swords size={13} /> ⚔️ Battles (3)
        </button>
        <button
          onClick={() => onSelectTab('survival')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            activeTab === 'survival'
              ? 'bg-[#c74a4a] text-white'
              : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
          }`}
        >
          <Zap size={13} /> ⚡ Survival
        </button>
        <button
          onClick={() => onSelectTab('classics')}
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
            <Swords size={14} className="text-[#ffb4ab]" /> 対戦バトル • Battle Arena (Solo vs AI &amp; Live PvP)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between space-y-4 hover:border-[#17424f] transition">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-[#ffb4ab] text-[10px] font-bold">
                  🎌 SOLO &amp; LIVE PVP
                </div>
                <h3 className="text-base font-bold text-white">しりとり • Shiritori Arena</h3>
                <p className="text-xs text-[#8fa2aa]">
                  Authentic Japanese word-chain duel! 15s turn timer, dictionary verification, &apos;ん&apos; loss rule, and TTS recitation.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => onOpenSolo('shiritori')}
                  className="flex-1 py-2 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-white transition flex items-center justify-center gap-1"
                >
                  <Bot size={13} /> Solo
                </button>
                <button
                  onClick={() => onOpenLobby('shiritori')}
                  className="flex-1 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-red-950/40"
                >
                  <Swords size={13} /> Live PvP
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between space-y-4 hover:border-[#17424f] transition">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">
                  🎴 SOLO &amp; LIVE PVP
                </div>
                <h3 className="text-base font-bold text-white">競技かるた • Competitive Karuta</h3>
                <p className="text-xs text-[#8fa2aa]">
                  Tatami mat reaction slap battle! Yomite reader recites poems or vocabulary. Slap the matching card before your opponent.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => onOpenSolo('karuta')}
                  className="flex-1 py-2 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-white transition flex items-center justify-center gap-1"
                >
                  <Bot size={13} /> Solo
                </button>
                <button
                  onClick={() => onOpenLobby('karuta')}
                  className="flex-1 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-md shadow-red-950/40"
                >
                  <Swords size={13} /> Live PvP
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between space-y-4 hover:border-[#17424f] transition">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold">
                  ⚡ SOLO &amp; LIVE PVP
                </div>
                <h3 className="text-base font-bold text-white">漢字決闘 • Kanji Duel</h3>
                <p className="text-xs text-[#8fa2aa]">
                  1000 HP speed strike combat across Onyomi, Kunyomi, and radicals! Correct answers strike your opponent.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => onOpenSolo('kanjiDuel')}
                  className="flex-1 py-2 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-white transition flex items-center justify-center gap-1"
                >
                  <Bot size={13} /> Solo
                </button>
                <button
                  onClick={() => onOpenLobby('kanjiDuel')}
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
  );
}
