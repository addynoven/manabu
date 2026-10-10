'use client';

import React, { useState } from 'react';
import { speakJapanese } from '../models/kana';
import { MessageSquare, Volume2, CheckCircle2, User, Bot, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'partner' | 'user';
  japanese: string;
  kana?: string;
  english?: string;
}

interface DialogueChatViewWebProps {
  scenarioTitle: string;
  partnerName?: string;
  messages: ChatMessage[];
  options: string[];
  correctAnswer: string;
  onSuccess: () => void;
}

export function DialogueChatViewWeb({
  scenarioTitle,
  partnerName = 'Kenji (店員)',
  messages,
  options,
  correctAnswer,
  onSuccess,
}: DialogueChatViewWebProps) {
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userMessages, setUserMessages] = useState<ChatMessage[]>(messages);

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOpt(opt);
    setIsAnswered(true);

    // Add user response message to conversation stream
    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      japanese: opt,
    };

    setUserMessages(prev => [...prev, userMsg]);
    speakJapanese(opt);

    if (opt === correctAnswer) {
      onSuccess();
    }
  };

  return (
    <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-6 md:p-8 space-y-6 max-w-xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#17424f] pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare size={16} className="text-[#38bdf8]" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">{scenarioTitle}</h3>
        </div>
        <span className="text-xs text-[#8fa2aa] font-mono">{partnerName}</span>
      </div>

      {/* Chat Stream */}
      <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2 custom-scroll">
        {userMessages.map(msg => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
                msg.sender === 'partner'
                  ? 'bg-[#0f3947] text-[#38bdf8] border border-[#17424f]'
                  : 'bg-[#c74a4a] text-white shadow-md'
              }`}
            >
              {msg.sender === 'partner' ? <Bot size={18} /> : <User size={18} />}
            </div>

            <div
              className={`p-4 rounded-2xl max-w-[80%] space-y-1 ${
                msg.sender === 'partner'
                  ? 'bg-[#0a3240] border border-[#17424f] text-white rounded-tl-none'
                  : 'bg-[#c74a4a] text-white rounded-tr-none shadow-md'
              }`}
            >
              <p className="text-base font-bold font-serif">{msg.japanese}</p>
              {msg.kana && <p className="text-xs font-mono opacity-80">{msg.kana}</p>}
              {msg.english && <p className="text-xs opacity-75">{msg.english}</p>}

              <button
                onClick={() => speakJapanese(msg.japanese)}
                className="pt-1 text-[10px] font-mono opacity-80 hover:opacity-100 flex items-center gap-1"
              >
                <Volume2 size={11} /> Listen
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Options */}
      <div className="space-y-2 pt-2 border-t border-[#17424f]">
        <span className="text-[10px] font-mono text-[#8fa2aa] uppercase tracking-wider block">
          Select Conversation Response
        </span>

        <div className="grid grid-cols-1 gap-2">
          {options.map(opt => {
            const isSelected = selectedOpt === opt;
            const isCorrect = opt === correctAnswer;

            let btnStyle = 'bg-[#00161e] border-[#17424f] text-[#f0f0f0] hover:bg-[#134454]';
            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-[#063b28] border-[#34d399] text-[#34d399] font-bold';
              } else if (isSelected) {
                btnStyle = 'bg-[#93000a]/50 border-[#ffb4ab] text-[#ffb4ab] font-bold';
              }
            }

            return (
              <button
                key={opt}
                disabled={isAnswered}
                onClick={() => handleSelectOption(opt)}
                className={`p-3.5 rounded-xl border text-left text-sm font-bold transition flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 size={16} className="text-[#34d399]" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
