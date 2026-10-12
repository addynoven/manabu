'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { conjugate } from '../../../engine/conjugate';
import { CONJUGATION_FORMS } from '../../../engine/conjugationForms';

const DRILL_VERBS = [
  { kanji: '食べる', kana: 'たべる', meaning: 'to eat' },
  { kanji: '行く', kana: 'いく', meaning: 'to go' },
  { kanji: '話す', kana: 'はなす', meaning: 'to speak' },
  { kanji: 'くる', kana: 'くる', meaning: 'to come' },
  { kanji: 'する', kana: 'する', meaning: 'to do' },
  { kanji: '飲む', kana: 'のむ', meaning: 'to drink' },
  { kanji: '泳ぐ', kana: 'およぐ', meaning: 'to swim' },
  { kanji: '待つ', kana: 'まつ', meaning: 'to wait' },
  { kanji: '買お', kana: 'かう', meaning: 'to buy' },
  { kanji: '呼ぶ', kana: 'よぶ', meaning: 'to call' },
];

interface SpeedDrillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
}

interface Question {
  verb: { kanji: string; kana: string; meaning: string };
  formDef: (typeof CONJUGATION_FORMS)[0];
  correctAnswer: string;
  options: string[];
}

export function SpeedDrillModal({ isOpen, onClose, onSpeak }: SpeedDrillModalProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Generate a random question
  const generateQuestion = useCallback((): Question => {
    const verbObj = DRILL_VERBS[Math.floor(Math.random() * DRILL_VERBS.length)];
    // Select a form from common forms
    const commonForms = CONJUGATION_FORMS.filter((f) =>
      ['te', 'masu', 'nai', 'ta', 'masen', 'volitional-plain', 'potential-plain'].includes(f.id)
    );
    const formDef = commonForms[Math.floor(Math.random() * commonForms.length)];

    const res = conjugate(verbObj.kanji);
    let correctAnswer = verbObj.kanji;
    if (res.success) {
      const match = res.result.forms.find((f) => f.id === formDef.id);
      if (match) {
        correctAnswer = match.kanji;
      }
    }

    // Distractor options
    const optionsSet = new Set<string>();
    optionsSet.add(correctAnswer);

    // Get other forms of the same verb or other verbs as distractors
    if (res.success) {
      res.result.forms.forEach((f) => {
        if (f.kanji && f.kanji !== correctAnswer && optionsSet.size < 4) {
          optionsSet.add(f.kanji);
        }
      });
    }

    while (optionsSet.size < 4) {
      optionsSet.add(verbObj.kanji + '〜');
    }

    const options = Array.from(optionsSet).sort(() => Math.random() - 0.5);

    return {
      verb: verbObj,
      formDef,
      correctAnswer,
      options,
    };
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  // Start drill on open
  useEffect(() => {
    if (isOpen) {
      setTimeLeft(60);
      setScore(0);
      setStreak(0);
      setIsFinished(false);
      setSelectedOption(null);
      setIsCorrect(null);
      setCurrentQuestion(generateQuestion());
    }
  }, [isOpen, generateQuestion]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isFinished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, isFinished]);

  if (!isOpen) return null;

  const handleSelect = (option: string) => {
    if (selectedOption !== null || !currentQuestion) return;
    setSelectedOption(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 100 + streak * 10);
      setStreak((st) => st + 1);
      onSpeak(option);
    } else {
      setStreak(0);
    }

    // Advance after 800ms
    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      setCurrentQuestion(generateQuestion());
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-base border border-border-hairline rounded-2xl max-w-lg w-full p-6 shadow-2xl relative overflow-hidden flex flex-col space-y-6">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-border-hairline pb-4">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-accent-gold text-2xl">bolt</span>
            <div>
              <h2 className="text-lg font-bold text-white">Conjugation Speed Drill</h2>
              <p className="text-xs text-text-muted">Test your inflection speed under time pressure</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-muted hover:bg-surface-elevated text-text-muted hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {!isFinished && currentQuestion && (
          <>
            {/* Stats Header */}
            <div className="flex items-center justify-between bg-surface-container border border-border-hairline rounded-xl p-3 text-xs font-mono">
              <div className="flex items-center space-x-1 text-accent-gold">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                <span className="font-bold text-sm">{timeLeft}s</span>
              </div>
              <div className="flex items-center space-x-1 text-primary-container">
                <span className="material-symbols-outlined text-[16px]">score</span>
                <span className="font-bold text-sm">{score} XP</span>
              </div>
              <div className="flex items-center space-x-1 text-success">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span className="font-bold text-sm">{streak} Streak</span>
              </div>
            </div>

            {/* Prompt Area */}
            <div className="p-5 rounded-xl bg-background-deep border border-border-hairline text-center space-y-2">
              <div className="text-xs text-text-muted uppercase tracking-wider font-mono">
                Target Form: <span className="text-accent-gold font-bold">{currentQuestion.formDef.nameJa} ({currentQuestion.formDef.name})</span>
              </div>
              <div className="text-4xl font-extrabold text-white font-serif tracking-tight">
                {currentQuestion.verb.kanji}
              </div>
              <div className="text-xs text-text-secondary">
                {currentQuestion.verb.kana} • {currentQuestion.verb.meaning}
              </div>
            </div>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((option, idx) => {
                let btnStyle =
                  'bg-surface-container hover:bg-surface-muted border-border-hairline text-text-primary';
                if (selectedOption !== null) {
                  if (option === currentQuestion.correctAnswer) {
                    btnStyle = 'bg-success-subtle border-success text-success font-bold shadow-md';
                  } else if (option === selectedOption) {
                    btnStyle = 'bg-primary-subtle border-primary-container text-primary font-bold';
                  } else {
                    btnStyle = 'bg-surface-container/40 border-transparent text-text-muted opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleSelect(option)}
                    className={`p-3.5 rounded-xl border text-center transition-all font-serif font-bold text-lg ${btnStyle}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {isFinished && (
          <div className="p-6 text-center space-y-4">
            <span className="material-symbols-outlined text-5xl text-accent-gold animate-bounce">
              emoji_events
            </span>
            <h3 className="text-2xl font-extrabold text-white">Drill Complete!</h3>
            <div className="p-4 rounded-xl bg-surface-container border border-border-hairline space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-text-muted">Final Score:</span>
                <span className="text-accent-gold font-bold">{score} XP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Best Streak:</span>
                <span className="text-success font-bold">{streak}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => {
                  setTimeLeft(60);
                  setScore(0);
                  setStreak(0);
                  setIsFinished(false);
                  setSelectedOption(null);
                  setIsCorrect(null);
                  setCurrentQuestion(generateQuestion());
                }}
                className="flex-1 bg-primary-container hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl transition-all shadow-md"
              >
                Play Again
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-surface-muted hover:bg-surface-elevated text-text-primary font-bold py-2.5 rounded-xl transition-all border border-border-hairline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
