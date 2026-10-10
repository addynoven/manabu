'use client';

import React from 'react';
import { Users, Flame } from 'lucide-react';

export interface FriendUser {
  uid: string;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  level: number;
  currentStreak: number;
  weeklyXp: number;
  lastActiveDate: string | null;
}

interface SapphireLeagueBoardProps {
  loading: boolean;
  weeklyBoard: FriendUser[];
  currentWeekId: string;
  profileUid?: string;
}

export function SapphireLeagueBoard({
  loading,
  weeklyBoard,
  currentWeekId,
  profileUid,
}: SapphireLeagueBoardProps) {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-neutral-900 border border-blue-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-black text-xl">
              💎
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  Tier V • Sapphire League
                </span>
                <span className="text-xs font-mono text-[#8fa2aa]">Cohort #42</span>
              </div>
              <h3 className="text-lg font-black text-white mt-1">Study Circle Weekly Standings</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="bg-[#0a3240]/80 px-3 py-1.5 rounded-xl border border-[#17424f] text-[#c1d0d6] flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">Top 3:</span>
              <span>Promote to Diamond 👑</span>
            </div>
            <div className="bg-[#0a3240]/80 px-3 py-1.5 rounded-xl border border-[#17424f] text-[#8fa2aa] flex items-center gap-1.5">
              <span className="text-rose-400 font-bold">Bottom 3:</span>
              <span>Relegate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#8fa2aa] px-2">
        <span>Weekly Standings • Resets Sunday 23:59 UTC</span>
        <span className="font-mono text-[#627780]">{currentWeekId}</span>
      </div>

      {loading ? (
        <div className="p-12 text-center text-xs text-[#627780]">Loading cohort standings...</div>
      ) : weeklyBoard.length === 0 ? (
        <div className="p-12 text-center bg-[#0a3240]/40 border border-[#17424f] rounded-xl space-y-2">
          <Users size={28} className="mx-auto text-[#455a64]" />
          <p className="text-xs text-[#8fa2aa] font-bold">No cohort activity yet this week.</p>
          <p className="text-xs text-[#627780]">Practice vocabulary or duels to earn XP for your study circle!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {weeklyBoard.map((item, idx) => {
            const isMe = item.uid === profileUid;
            const isPromotion = idx < 3;
            const isRelegation = weeklyBoard.length >= 6 && idx >= weeklyBoard.length - 3;

            return (
              <div
                key={item.uid}
                className={`flex items-center justify-between p-4 rounded-2xl border transition ${
                  isMe
                    ? 'bg-gradient-to-r from-blue-950/40 to-neutral-900 border-blue-500/50 shadow-md shadow-blue-950/30 ring-1 ring-blue-500/30'
                    : isPromotion
                    ? 'bg-emerald-950/15 border-emerald-500/30 hover:border-emerald-500/50'
                    : isRelegation
                    ? 'bg-rose-950/10 border-rose-500/20 hover:border-rose-500/40'
                    : 'bg-[#0a3240]/60 border-[#17424f] hover:border-[#17424f]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-7 text-center font-black text-sm font-mono ${
                      idx === 0
                        ? 'text-amber-400'
                        : idx === 1
                        ? 'text-[#c1d0d6]'
                        : idx === 2
                        ? 'text-amber-600'
                        : 'text-[#627780]'
                    }`}
                  >
                    #{idx + 1}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-[#0f3947] flex items-center justify-center text-xl shadow-inner">
                    {item.avatarEmoji || '🥋'}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{item.displayName}</span>
                      {isMe && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold">
                          YOU
                        </span>
                      )}
                      {isPromotion && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase border border-emerald-500/20">
                          Promotion Zone
                        </span>
                      )}
                      {isRelegation && (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[9px] font-extrabold uppercase border border-rose-500/20">
                          Relegation Zone
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-[#8fa2aa] mt-0.5">
                      <span className="capitalize">{item.beltRank} Belt</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-orange-400">
                        <Flame size={11} /> {item.currentStreak}d streak
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base font-black text-amber-400 font-mono">
                    {item.weeklyXp.toLocaleString()} XP
                  </div>
                  <div className="text-[10px] text-[#627780] uppercase tracking-widest font-semibold">
                    Weekly Effort
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
