'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  WordleWord,
  WORDLE_WORD_BANK,
  getRandomWordleWord,
  evaluateWordleGuess,
} from '../engine/wordleEngine';
import { speakJapanese } from '@/data/kana';
import { RotateCcw, Sparkles, Trophy, Volume2, Delete, Check } from 'lucide-react';

interface JapaneseWordleWebProps {
  onExit: () => void;
}

const KANA_KEYBOARD_ROWS = [
  ['あ', 'い', 'う', 'え', 'お'],
  ['か', 'き', 'く', 'け', 'こ'],
  ['さ', 'し', 'す', 'せ', 'そ'],
  ['た', 'ち', 'つ', 'て', 'と'],
  ['な', 'に', 'ぬ', 'ね', 'の'],
  ['は', 'ひ', 'ふ', 'へ', 'ほ'],
  ['ま', 'み', 'む', 'め', 'も'],
  ['や', 'ゆ', 'よ', 'ら', 'り'],
  ['る', 'れ', 'ろ', 'わ', 'ん'],
];

export function JapaneseWordleWeb({ onExit }: JapaneseWordleWebProps) {
  const [targetWord, setTargetWord] = useState<WordleWord>(() => getRandomWordleWord());
  const wordLength = Array.from(targetWord.word).length;

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const MAX_GUESSES = 6;

  const startNewGame = () => {
    const nextWord = getRandomWordleWord();
    setTargetWord(nextWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setHasWon(false);
    setErrorMessage('');
  };

  const handleKeyPress = (char: string) => {
    if (gameOver) return;
    if (Array.from(currentGuess).length < wordLength) {
      setCurrentGuess(prev => prev + char);
      setErrorMessage('');
    }
  };

  const handleBackspace = () => {
    if (gameOver) return;
    const chars = Array.from(currentGuess);
    chars.pop();
    setCurrentGuess(chars.join(''));
    setErrorMessage('');
  };

  const handleSubmit = () => {
    if (gameOver) return;
    const currentChars = Array.from(currentGuess);
    if (currentChars.length !== wordLength) {
      setErrorMessage(`Word must be exactly ${wordLength} kana characters.`);
      return;
    }

    const nextGuesses = [...guesses, currentGuess];
    setGuesses(nextGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord.word) {
      setGameOver(true);
      setHasWon(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      speakJapanese(targetWord.word);
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      setHasWon(false);
      speakJapanese(targetWord.word);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
            語
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">言葉のパズル • Japanese Wordle</h1>
            <p className="text-[11px] text-[#8fa2aa]">Guess the secret {wordLength}-kana Japanese word in 6 tries.</p>
          </div>
        </div>

        <button
          onClick={onExit}
          className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
        >
          Exit Game
        </button>
      </div>

      {/* Grid Display */}
      <div className="bg-[#0a3240]/60 border border-[#17424f] rounded-xl p-6 flex flex-col items-center gap-2">
        {errorMessage && (
          <div className="p-2 px-4 rounded-xl bg-red-500/10 border border-red-500/30 text-[#ffb4ab] text-xs font-bold mb-2">
            {errorMessage}
          </div>
        )}

        {[...Array(MAX_GUESSES)].map((_, rowIdx) => {
          const guess = guesses[rowIdx];
          const isCurrentRow = rowIdx === guesses.length;
          const evaluation = guess ? evaluateWordleGuess(targetWord.word, guess) : null;

          return (
            <div key={rowIdx} className="flex gap-2">
              {[...Array(wordLength)].map((_, colIdx) => {
                let char = '';
                let tileStyle = 'bg-[#051b22] border-[#17424f] text-white';

                if (guess) {
                  char = Array.from(guess)[colIdx] || '';
                  const status = evaluation?.[colIdx]?.status;
                  if (status === 'correct') {
                    tileStyle = 'bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-950/40';
                  } else if (status === 'present') {
                    tileStyle = 'bg-amber-600 border-amber-500 text-white shadow-md shadow-amber-950/40';
                  } else {
                    tileStyle = 'bg-[#0f3947] border-[#17424f] text-[#8fa2aa]';
                  }
                } else if (isCurrentRow) {
                  char = Array.from(currentGuess)[colIdx] || '';
                  if (char) {
                    tileStyle = 'bg-[#0a3240] border-[#17424f] text-white scale-105';
                  }
                }

                return (
                  <div
                    key={colIdx}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 flex items-center justify-center text-2xl font-serif font-black transition-all ${tileStyle}`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Game Over Banner */}
      {gameOver && (
        <div className="p-6 rounded-xl bg-[#0a3240] border border-[#17424f] text-center space-y-4 shadow-xl">
          <div className="text-3xl">{hasWon ? '🎉' : '📖'}</div>
          <div>
            <h2 className="text-xl font-black text-white">
              {hasWon ? 'Splendid! You guessed the word!' : 'Good Effort! The word was:'}
            </h2>
            <div className="text-2xl font-black text-amber-400 font-serif mt-2 flex items-center justify-center gap-3">
              <span>{targetWord.word}</span>
              {targetWord.kanji && <span className="text-[#c1d0d6]">({targetWord.kanji})</span>}
              <button
                onClick={() => speakJapanese(targetWord.word)}
                className="p-1.5 rounded-lg bg-[#0f3947] text-white hover:text-amber-400"
              >
                <Volume2 size={16} />
              </button>
            </div>
            <div className="text-xs text-[#8fa2aa] mt-1 italic">
              {targetWord.reading} • &quot;{targetWord.meaning}&quot;
            </div>
          </div>

          <button
            onClick={startNewGame}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-black text-white transition flex items-center gap-2 mx-auto shadow-lg shadow-emerald-950/40"
          >
            <RotateCcw size={15} /> Play Another Word
          </button>
        </div>
      )}

      {/* On-Screen Kana Keyboard */}
      {!gameOver && (
        <div className="bg-[#051b22] border border-[#17424f] rounded-xl p-4 space-y-2">
          {KANA_KEYBOARD_ROWS.map((row, rIdx) => (
            <div key={rIdx} className="flex justify-center gap-1.5">
              {row.map(char => (
                <button
                  key={char}
                  onClick={() => handleKeyPress(char)}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#0a3240] hover:bg-[#0f3947] active:scale-95 border border-[#17424f] text-sm font-serif font-bold text-[#dbe6eb] transition"
                >
                  {char}
                </button>
              ))}
            </div>
          ))}

          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={handleSubmit}
              disabled={Array.from(currentGuess).length !== wordLength}
              className="py-2.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-xs font-black text-white transition flex items-center gap-1.5"
            >
              <Check size={14} /> Enter
            </button>
            <button
              onClick={handleBackspace}
              className="py-2.5 px-5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-black text-[#c1d0d6] transition flex items-center gap-1.5"
            >
              <Delete size={14} /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
