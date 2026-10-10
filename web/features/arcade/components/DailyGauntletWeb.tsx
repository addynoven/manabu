'use client';

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { HIRAGANA_DATA, speakJapanese } from '@/features/content/models/kana';
import kanjiN5 from '@/data/kanji_n5.json';
import vocabN5 from '@/data/vocab_n5.json';
import { fetchWithAuth } from '@/core/api/httpClient';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Trophy, Timer, CheckCircle, XCircle, RotateCcw, Sparkles, Flame, ArrowRight } from 'lucide-react';

interface DailyGauntletWebProps {
  onExit: () => void;
}

interface Question {
  prompt: string;
  sub: string;
  options: string[];
  correct: string;
  audio?: string;
}

export function DailyGauntletWeb({ onExit }: DailyGauntletWebProps) {
  const { user, profile, refreshProfile } = useAuth();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const generated: Question[] = [];

    const kanaShuffle = [...HIRAGANA_DATA].sort(() => 0.5 - Math.random()).slice(0, 4);
    kanaShuffle.forEach(k => {
      const distractors = HIRAGANA_DATA.filter(x => x.romaji !== k.romaji)
        .map(x => x.romaji)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      generated.push({
        prompt: k.kana,
        sub: 'What is the reading of this kana?',
        options: [k.romaji, ...distractors].sort(() => 0.5 - Math.random()),
        correct: k.romaji,
        audio: k.kana,
      });
    });

    const kanjiShuffle = [...(kanjiN5 as any[])].sort(() => 0.5 - Math.random()).slice(0, 3);
    kanjiShuffle.forEach(kj => {
      const meaning = kj.meanings[0] || 'meaning';
      const distractors = (kanjiN5 as any[])
        .filter(x => x.kanjiChar !== kj.kanjiChar)
        .map(x => x.meanings[0] || 'other')
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      generated.push({
        prompt: kj.kanjiChar,
        sub: 'Select the English meaning of this kanji:',
        options: [meaning, ...distractors].sort(() => 0.5 - Math.random()),
        correct: meaning,
        audio: kj.onyomi?.[0] || kj.kunyomi?.[0] || kj.kanjiChar,
      });
    });

    const vocabShuffle = [...(vocabN5 as any[])].sort(() => 0.5 - Math.random()).slice(0, 3);
    vocabShuffle.forEach(v => {
      const def = v.waller_definition?.split(';')?.[0] || 'word';
      const distractors = (vocabN5 as any[])
        .filter(x => x.jmdict_seq !== v.jmdict_seq)
        .map(x => x.waller_definition?.split(';')?.[0] || 'other')
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      generated.push({
        prompt: v.kanji || v.kana,
        sub: `Reading: ${v.kana} • What does this mean?`,
        options: [def, ...distractors].sort(() => 0.5 - Math.random()),
        correct: def,
        audio: v.kana,
      });
    });

    const finalDeck = generated.sort(() => 0.5 - Math.random());
    setQuestions(finalDeck);
    setCurrentIndex(0);
    setCorrectCount(0);
    setTimeSeconds(0);
    setIsCompleted(false);

    if (finalDeck[0]?.audio) {
      speakJapanese(finalDeck[0].audio);
    }

    timerRef.current = setInterval(() => {
      setTimeSeconds(s => s + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectOption = (opt: string) => {
    if (selectedOption || isCompleted) return;
    setSelectedOption(opt);

    const isCorrect = opt === questions[currentIndex].correct;
    if (isCorrect) setCorrectCount(c => c + 1);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        const next = currentIndex + 1;
        setCurrentIndex(next);
        setSelectedOption(null);
        if (questions[next]?.audio) {
          speakJapanese(questions[next].audio);
        }
      } else {
        finishGauntlet(correctCount + (isCorrect ? 1 : 0));
      }
    }, 600);
  };

  const finishGauntlet = async (finalCorrect: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCompleted(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    const accuracy = Math.round((finalCorrect / questions.length) * 100);
    const speedBonus = Math.max(0, 180 - timeSeconds) * 2;
    const finalScore = finalCorrect * 50 + speedBonus;

    if (profile) {
      setIsSubmitting(true);
      const todayDate = new Date().toISOString().split('T')[0];
      await fetchWithAuth('/api/v1/profile', {
        method: 'PUT',
        body: JSON.stringify({
          displayName: profile.displayName,
          avatarEmoji: profile.avatarEmoji,
          beltRank: profile.beltRank,
          level: profile.level,
          totalXp: profile.totalXp + finalScore,
          weeklyXp: profile.weeklyXp + finalScore,
          weekId: profile.weekId,
          currentStreak: profile.currentStreak + 1,
          lastActiveDate: new Date().toISOString(),
          daily: {
            date: todayDate,
            score: finalScore,
            timeSeconds,
            accuracy,
          },
        }),
      });
      setIsSubmitting(false);
      refreshProfile?.();
    }
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
            🏆
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">今日の挑戦 • Daily Challenge Gauntlet</h1>
            <p className="text-[11px] text-[#8fa2aa]">10 Daily Curated Questions across Kana, Kanji & Vocab.</p>
          </div>
        </div>

        <button
          onClick={onExit}
          className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
        >
          Exit Gauntlet
        </button>
      </div>

      {/* Progress & Timer Bar */}
      <div className="bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl flex items-center justify-between">
        <div className="text-xs font-bold text-[#8fa2aa]">
          Question <span className="text-white font-mono">{currentIndex + 1}</span> of {questions.length}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
          <Timer size={14} /> {timeSeconds}s
        </div>
      </div>

      {/* Arena Card */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#17424f] rounded-xl p-6 md:p-10 space-y-6 min-h-[380px] flex flex-col justify-center">
        {isCompleted ? (
          <div className="text-center space-y-4">
            <Trophy size={48} className="mx-auto text-amber-400" />
            <h2 className="text-2xl font-black text-white">Daily Gauntlet Completed!</h2>
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto bg-[#051b22] p-4 rounded-2xl border border-[#17424f]">
              <div>
                <div className="text-[10px] text-[#627780] uppercase font-bold">Accuracy</div>
                <div className="text-xl font-black text-emerald-400 font-mono">
                  {Math.round((correctCount / questions.length) * 100)}%
                </div>
              </div>
              <div>
                <div className="text-[10px] text-[#627780] uppercase font-bold">Time</div>
                <div className="text-xl font-black text-white font-mono">{timeSeconds}s</div>
              </div>
              <div>
                <div className="text-[10px] text-[#627780] uppercase font-bold">Score</div>
                <div className="text-xl font-black text-amber-400 font-mono">{correctCount * 50}</div>
              </div>
            </div>

            <p className="text-xs text-[#8fa2aa]">
              {isSubmitting ? 'Syncing score to Cloud...' : 'Your score has been synchronized to the cloud!'}
            </p>

            <button
              onClick={onExit}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black transition mx-auto"
            >
              Return to Arcade
            </button>
          </div>
        ) : (
          currentQ && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#8fa2aa]">{currentQ.sub}</span>
                <div className="text-6xl md:text-7xl font-serif font-black text-white py-2 tracking-tight">
                  {currentQ.prompt}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === opt;
                  const isCorrect = opt === currentQ.correct;

                  let style = 'bg-[#0a3240] hover:bg-[#0f3947] border-[#17424f] text-white';
                  if (selectedOption) {
                    if (isCorrect) style = 'bg-emerald-600 border-emerald-500 text-white';
                    else if (isSelected) style = 'bg-[#c74a4a] border-red-500 text-white';
                    else style = 'bg-[#051b22] border-[#17424f] text-[#455a64]';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      disabled={!!selectedOption}
                      className={`p-4 rounded-2xl border text-sm font-bold text-left transition ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
