'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check, UserPlus } from 'lucide-react';

interface ScholarCodeBannerProps {
  friendCode: string;
  isSubmitting: boolean;
  onAddFriend: (code: string) => void;
}

export function ScholarCodeBanner({
  friendCode,
  isSubmitting,
  onAddFriend,
}: ScholarCodeBannerProps) {
  const [copied, setCopied] = useState(false);
  const [inputCode, setInputCode] = useState('');

  const handleCopyCode = () => {
    if (!friendCode) return;
    navigator.clipboard.writeText(friendCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim()) {
      onAddFriend(inputCode.trim());
      setInputCode('');
    }
  };

  return (
    <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="w-10 h-10 rounded-lg bg-[#051b22] border border-[#17424f] flex items-center justify-center text-amber-400 shrink-0">
          <Sparkles size={18} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8fa2aa]">Your Scholar Code</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono font-semibold">Active</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl font-mono font-bold text-white tracking-widest">
              {friendCode.length === 8 ? `${friendCode.slice(0, 4)}-${friendCode.slice(4)}` : friendCode}
            </span>
            <button
              onClick={handleCopyCode}
              className="px-2.5 py-1 rounded bg-[#0f3947] hover:bg-[#17424f] border border-[#17424f] text-[11px] font-semibold text-white transition flex items-center gap-1.5"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-auto">
        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="Enter friend code (e.g. K7MQ-2XRD)"
          maxLength={10}
          className="bg-[#051b22] border border-[#17424f] rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-[#627780] uppercase focus:outline-none focus:border-[#c74a4a] w-full md:w-64"
        />
        <button
          type="submit"
          disabled={isSubmitting || !inputCode.trim()}
          className="px-4 py-2 rounded-lg bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-50 text-xs font-bold text-white transition flex items-center gap-1.5 shrink-0 shadow-sm"
        >
          <UserPlus size={13} />
          <span>{isSubmitting ? '...' : 'Connect'}</span>
        </button>
      </form>
    </div>
  );
}
