'use client';

import React, { useState, useEffect } from 'react';
import { speakJapanese } from '../models/kana';
import { CheckCircle2, RotateCcw, ArrowRight, RefreshCw } from 'lucide-react';

interface ScrambleExerciseViewWebProps {
  prompt: string;
  wordTiles: string[];
  correctSentence: string;
  onSuccess: () => void;
}

export function ScrambleExerciseViewWeb({
  prompt,
  wordTiles,
  correctSentence,
  onSuccess,
}: ScrambleExerciseViewWebProps) {
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset component state when moving to a new exercise
  useEffect(() => {
    setSelectedTiles([]);
    setIsChecked(false);
    setIsCorrect(false);
  }, [prompt, correctSentence]);

  const handleTileClick = (tile: string, index: number) => {
    if (isChecked) return;
    setSelectedTiles(prev => [...prev, tile]);
  };

  const handleRemoveTile = (index: number) => {
    if (isChecked) return;
    setSelectedTiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setIsChecked(false);
    setIsCorrect(false);
    setSelectedTiles([]);
  };

  const handleCheck = () => {
    const constructed = selectedTiles.join('');
    const matched = constructed === correctSentence;
    setIsCorrect(matched);
    setIsChecked(true);

    if (matched) {
      speakJapanese(correctSentence);
    }
  };

  return (
    <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-6 md:p-8 space-y-6 max-w-xl mx-auto shadow-2xl">
      <div className="space-y-1 text-center">
        <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block font-bold">
          Sentence Construction Drill
        </span>
        <h3 className="text-lg font-bold text-white">{prompt}</h3>
      </div>

      {/* Answer Construction Area */}
      <div className="bg-[#0a3240] border-2 border-dashed border-[#17424f] rounded-2xl p-5 min-h-[100px] flex flex-wrap items-center gap-2 justify-center shadow-inner">
        {selectedTiles.length === 0 ? (
          <span className="text-xs text-[#627780] font-mono">Tap word tiles below to construct sentence</span>
        ) : (
          selectedTiles.map((tile, idx) => (
            <button
              key={`${tile}_${idx}`}
              disabled={isChecked}
              onClick={() => handleRemoveTile(idx)}
              className="px-3.5 py-2 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-white font-serif font-bold text-base shadow-md transition animate-in zoom-in-95"
            >
              {tile}
            </button>
          ))
        )}
      </div>

      {/* Available Word Pool */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-[#8fa2aa]">
          <span>Word Tile Pool</span>
          <button
            onClick={handleReset}
            disabled={selectedTiles.length === 0}
            className="text-[11px] hover:text-white flex items-center gap-1 transition disabled:opacity-30"
          >
            <RotateCcw size={12} /> Reset Tiles
          </button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center p-4 bg-[#0a3240]/50 rounded-2xl border border-[#17424f]">
          {wordTiles.map((tile, idx) => (
            <button
              key={`pool_${tile}_${idx}`}
              disabled={isChecked}
              onClick={() => handleTileClick(tile, idx)}
              className="px-4 py-2.5 rounded-xl bg-[#00161e] hover:bg-[#0f3947] border border-[#17424f] text-white font-serif font-bold text-base transition shadow-sm"
            >
              {tile}
            </button>
          ))}
        </div>
      </div>

      {/* Action Footer Always Has Active CTA */}
      <div className="pt-3 border-t border-[#17424f] flex flex-col sm:flex-row items-center justify-between gap-3">
        {isChecked ? (
          <>
            <div className="text-sm font-semibold flex items-center gap-2">
              {isCorrect ? (
                <span className="text-[#34d399] flex items-center gap-1.5 font-bold">
                  <CheckCircle2 size={18} /> Excellent! Correct sentence.
                </span>
              ) : (
                <span className="text-[#ffb4ab] text-xs">
                  Target: <strong className="text-white font-serif">{correctSentence}</strong>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {!isCorrect && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-bold text-white transition flex items-center gap-1.5"
                >
                  <RotateCcw size={14} /> Try Again
                </button>
              )}
              <button
                onClick={onSuccess}
                className="px-6 py-2.5 bg-[#c74a4a] hover:bg-[#d95a5a] text-white rounded-xl text-xs font-bold shadow-md transition flex items-center gap-1.5 shadow-red-950/40 ml-auto"
              >
                <span>Continue</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-end w-full">
            <button
              disabled={selectedTiles.length === 0}
              onClick={handleCheck}
              className="px-6 py-2.5 bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-md transition"
            >
              Check Sentence
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
