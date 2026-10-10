'use client';

import React from 'react';
import * as wanakana from 'wanakana';
import { speakJapanese } from '../models/kana';
import { LessonExercise } from '../models/curriculum';
import { CheckCircle2, XCircle, Volume2, Sparkles, ArrowRight } from 'lucide-react';

export interface EvaluationCardSheetWebProps {
  evaluation: 'correct' | 'incorrect' | null;
  exercise: LessonExercise | null;
  userAnswerText: string;
  correctAnswerText: string;
  hintText?: string | null;
  onContinue: () => void;
}

function toCleanRomaji(text: string, fallbackRomaji?: string): string {
  if (fallbackRomaji && !/[一-龯]/.test(fallbackRomaji)) {
    return fallbackRomaji;
  }
  if (!text) return '';

  const kana = text
    .replace(/元気/g, 'げんき')
    .replace(/先生/g, 'せんせい')
    .replace(/私/g, 'わたし')
    .replace(/日本語/g, 'にほんご')
    .replace(/勉強/g, 'べんきょう')
    .replace(/友達/g, 'ともだち')
    .replace(/明日/g, 'あした')
    .replace(/学校/g, 'がっこう')
    .replace(/食べ/g, 'たべ')
    .replace(/飲/g, 'の')
    .replace(/行/g, 'い')
    .replace(/見/g, 'み')
    .replace(/来/g, 'き')
    .replace(/何/g, 'なに')
    .replace(/人/g, 'じん')
    .replace(/出身/g, 'しゅっしん')
    .replace(/名/g, 'な')
    .replace(/前/g, 'まえ');

  return wanakana.toRomaji(kana);
}

export function EvaluationCardSheetWeb({
  evaluation,
  exercise,
  userAnswerText,
  correctAnswerText,
  hintText,
  onContinue,
}: EvaluationCardSheetWebProps) {
  if (!evaluation || !exercise) return null;

  const isCorrect = evaluation === 'correct';

  const handleSpeak = (text?: string) => {
    if (!text) return;
    speakJapanese(text);
  };

  const primaryJapanese = exercise.character || exercise.prompt || '';
  const romajiText = toCleanRomaji(primaryJapanese, exercise.subPrompt?.split('•')[0]?.trim());
  const englishText = exercise.prompt !== primaryJapanese ? exercise.prompt : null;

  const explanation = hintText || exercise.explanation;

  return (
    <div
      className={`rounded-2xl p-5 md:p-6 border-t-4 space-y-4 shadow-2xl transition-all animate-in slide-in-from-bottom-3 ${
        isCorrect
          ? 'bg-[#063b28]/95 border-[#34d399] text-[#34d399]'
          : 'bg-[#93000a]/90 border-[#ffb4ab] text-[#ffb4ab]'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {isCorrect ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
          <span className="text-xl font-black tracking-wide uppercase">
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </span>
        </div>
        <span className="text-xs font-mono opacity-80 uppercase tracking-wider font-bold">
          Evaluation Result
        </span>
      </div>

      {!isCorrect && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="bg-[#051b22]/90 border border-red-500/40 rounded-xl p-3.5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-red-400 uppercase font-mono tracking-wider">
              <XCircle size={14} /> YOUR ANSWER
            </div>
            <p className="text-base font-bold text-red-300 font-serif line-through">
              {userAnswerText || '—'}
            </p>
            {userAnswerText && wanakana.isJapanese(userAnswerText) && (
              <p className="text-xs font-mono text-red-400/80">
                {toCleanRomaji(userAnswerText)}
              </p>
            )}
          </div>

          <div className="bg-[#051b22]/90 border border-emerald-500/40 rounded-xl p-3.5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 uppercase font-mono tracking-wider">
              <CheckCircle2 size={14} /> CORRECT ANSWER
            </div>
            <p className="text-base font-bold text-emerald-300 font-serif">
              {correctAnswerText}
            </p>
            {correctAnswerText && wanakana.isJapanese(correctAnswerText) && (
              <p className="text-xs font-mono text-emerald-400/80">
                {toCleanRomaji(correctAnswerText)}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="bg-[#051b22]/70 border border-current/20 rounded-xl p-4 space-y-2 text-white">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold font-serif">{primaryJapanese}</p>
          <button
            onClick={() => handleSpeak(primaryJapanese || correctAnswerText)}
            className="p-1.5 rounded-lg bg-surface-muted hover:bg-surface-elevated text-emerald-400 hover:text-white transition"
            title="Listen Audio"
          >
            <Volume2 size={18} />
          </button>
        </div>

        {romajiText && <p className="text-xs font-mono text-[#38bdf8]">{romajiText}</p>}
        {englishText && <p className="text-xs text-[#8fa2aa]">{englishText}</p>}
      </div>

      {explanation && (
        <div className="bg-[#2a2415] border border-[#fbbf24]/50 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-[#fbbf24]">
          <Sparkles size={16} className="shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold uppercase font-mono tracking-wider text-[10px] block">Grammar Explanation &amp; Context</span>
            <p className="text-[#f0f0f0] font-medium leading-relaxed">{explanation}</p>
          </div>
        </div>
      )}

      <button
        onClick={onContinue}
        className={`w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition flex items-center justify-center gap-2 ${
          isCorrect
            ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/60'
            : 'bg-red-600 hover:bg-red-500 shadow-red-950/60'
        }`}
      >
        <span>CONTINUE</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
