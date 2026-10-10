'use client';

import React from 'react';
import { FriendUser } from './SapphireLeagueBoard';
import { Users, Trash2, Flame, Swords, Trophy } from 'lucide-react';

interface ClanFriendsGridProps {
  loading: boolean;
  friends: FriendUser[];
  onRemoveFriend: (uid: string) => void;
  onOpenChallengeModal: (friend: FriendUser, mode: 'score' | 'duel') => void;
}

export function ClanFriendsGrid({
  loading,
  friends,
  onRemoveFriend,
  onOpenChallengeModal,
}: ClanFriendsGridProps) {
  if (loading) {
    return <div className="p-12 text-center text-xs text-[#627780]">Loading friends...</div>;
  }

  if (friends.length === 0) {
    return (
      <div className="p-12 text-center bg-[#0a3240]/40 border border-[#17424f] rounded-xl space-y-2">
        <Users size={28} className="mx-auto text-[#455a64]" />
        <p className="text-xs text-[#8fa2aa] font-bold">No clan friends added yet.</p>
        <p className="text-xs text-[#627780]">Enter a friend code above to challenge your classmates!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {friends.map((friend) => (
        <div
          key={friend.uid}
          className="p-5 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between gap-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0f3947] flex items-center justify-center text-2xl">
                {friend.avatarEmoji || '🥋'}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{friend.displayName}</div>
                <div className="text-xs text-[#8fa2aa] capitalize">
                  {friend.beltRank} Belt • LV {friend.level}
                </div>
              </div>
            </div>

            <button
              onClick={() => onRemoveFriend(friend.uid)}
              title="Remove friend"
              className="text-[#627780] hover:text-[#ffb4ab] transition p-2"
            >
              <Trash2 size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-[#051b22]/60 p-3 rounded-2xl border border-[#17424f]/80 text-xs">
            <div>
              <div className="text-[#627780] text-[10px] uppercase font-bold">Weekly XP</div>
              <div className="font-mono font-bold text-amber-400">{friend.weeklyXp} XP</div>
            </div>
            <div>
              <div className="text-[#627780] text-[10px] uppercase font-bold">Streak</div>
              <div className="font-mono font-bold text-orange-400 flex items-center gap-1">
                <Flame size={12} /> {friend.currentStreak} Days
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onOpenChallengeModal(friend, 'duel')}
              className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition flex items-center justify-center gap-1.5 shadow-md shadow-purple-950/40"
            >
              <Swords size={13} /> Live Duel
            </button>
            <button
              onClick={() => onOpenChallengeModal(friend, 'score')}
              className="flex-1 py-2 px-3 rounded-xl bg-[#0f3947] hover:bg-[#17424f] border border-[#17424f] text-xs font-bold text-neutral-200 transition flex items-center justify-center gap-1.5"
            >
              <Trophy size={13} className="text-amber-400" /> Challenge
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
