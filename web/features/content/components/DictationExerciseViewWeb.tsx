'use client';

import React, { useState, useEffect } from 'react';
import { speakJapanese } from '../models/kana';
import { Headphones, Volume2, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';

interface DictationExerciseViewWebProps {
  prompt: string;
  audioPhrase: string;
  correctAnswer: string;
  onSuccess: () => void;
}

export function DictationExerciseViewWeb({
  prompt,
  audioPhrase,
  correctAnswer,
  onSuccess,
}: DictationExerciseViewWebProps) {
  const [typedInput, setTypedInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setTypedInput('');
    setIsChecked(false);
    setIsCorrect(false);
  }, [prompt, correctAnswer]);

  const handlePlayAudio = () => {
    speakJapanese(audioPhrase);
  };

  const handleCheck = () => {
    const cleanInput = typedInput.trim().toLowerCase();
    const cleanTarget = correctAnswer.trim().toLowerCase();
    const matched = cleanInput === cleanTarget || audioPhrase.includes(cleanInput);

    setIsCorrect(matched);
    setIsChecked(true);
  };

  const handleRetry = () => {
    setTypedInput('');
    setIsChecked(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-6 md:p-8 space-y-6 max-w-xl mx-auto shadow-2xl text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082f49] text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider">
        <Headphones size={14} /> Audio Dictation Drill
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white">{prompt}</h3>
        <p className="text-xs text-[#8fa2aa]">Listen to the audio and type what you hear in Kana or Romaji.</p>
      </div>

      <div className="py-2">
        <button
          onClick={handlePlayAudio}
          className="w-20 h-20 rounded-full mx-auto bg-[#c74a4a] hover:bg-[#d95a5a] text-white flex items-center justify-center shadow-xl shadow-red-950/50 hover:scale-105 active:scale-95 transition"
        >
          <Volume2 size={36} />
        </button>
        <span className="text-xs text-[#8fa2aa] mt-2 block font-medium">Tap to Listen</span>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={typedInput}
          disabled={isChecked}
          onChange={e => setTypedInput(e.target.value)}
          placeholder="Type Japanese text here..."
          className="w-full bg-[#0a3240] border border-[#17424f] rounded-xl px-4 py-3 text-center text-lg text-white font-serif placeholder-[#627780] focus:outline-none focus:border-[#c74a4a]"
        />

        {!isChecked ? (
          <button
            disabled={!typedInput.trim()}
            onClick={handleCheck}
            className="w-full py-3 bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-md transition"
          >
            Check Dictation
          </button>
        ) : (
          <div className="p-4 rounded-xl bg-[#0a3240] border border-[#17424f] space-y-3">
            {isCorrect ? (
              <span className="text-[#34d399] text-sm font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 size={18} /> Perfect Dictation!
              </span>
            ) : (
              <span className="text-[#ffb4ab] text-xs block">
                Target Dictation: <strong className="text-white font-serif">{correctAnswer}</strong>
              </span>
            )}

            <div className="flex items-center gap-2 justify-end pt-2 border-t border-[#17424f]">
              {!isCorrect && (
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 rounded-xl bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-bold text-white transition flex items-center gap-1.5"
                >
                  <RotateCcw size={14} /> Try Again
                </button>
              )}
              <button
                onClick={onSuccess}
                className="px-6 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-red-950/40"
              >
                <span>Continue</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
