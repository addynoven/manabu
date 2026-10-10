'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { StitchHeader } from '@/core/components/StitchHeader';
import {
  CharacterStrokeData,
  StrokeCategory,
  getAllStrokeCharacters,
} from '../../models/strokeData';
import { speakJapanese } from '../../models/kana';
import {
  StrokeHeaderControls,
  StrokeRosterGrid,
  StrokeCanvasPanel,
} from './components';

export function StrokeScreen() {
  const [category, setCategory] = useState<StrokeCategory>('hiragana');
  const [characterList, setCharacterList] = useState<CharacterStrokeData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<'guide' | 'test' | 'demo'>('guide');

  const [activeStrokeIndex, setActiveStrokeIndex] = useState(0);
  const [demoStep, setDemoStep] = useState(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const currentPathRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const list = getAllStrokeCharacters(category);
    setCharacterList(list);
    setCurrentIndex(0);
    setActiveStrokeIndex(0);
  }, [category]);

  const currentChar: CharacterStrokeData | undefined = characterList[currentIndex];

  useEffect(() => {
    setActiveStrokeIndex(0);
    clearCanvas();
    if (currentChar) {
      speakJapanese(currentChar.char);
    }
  }, [currentChar]);

  useEffect(() => {
    if (!isDemoPlaying || !currentChar) return;

    if (demoStep < currentChar.strokes.length) {
      const timer = setTimeout(() => {
        setDemoStep((s) => s + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setIsDemoPlaying(false);
        setDemoStep(0);
      }, 1500);
      return () => clearTimeout(resetTimer);
    }
  }, [isDemoPlaying, demoStep, currentChar]);

  const handleStartDemo = () => {
    setMode('demo');
    setDemoStep(0);
    setIsDemoPlaying(true);
    clearCanvas();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (mode === 'demo') return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentPathRef.current = [{ x, y }];

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentPathRef.current.push({ x, y });

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (currentChar && activeStrokeIndex < currentChar.strokes.length) {
      setActiveStrokeIndex((prev) => Math.min(currentChar.strokes.length - 1, prev + 1));
    }
  };

  return (
    <AuthGate>
      <div className="bg-[#082630] text-[#f0f0f0] min-h-screen flex flex-col font-sans antialiased selection:bg-[#c74a4a] selection:text-[#f0f0f0]">
        <StitchHeader />

        <StrokeHeaderControls
          category={category}
          totalGlyphs={characterList.length}
          onSelectCategory={setCategory}
        />

        <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <StrokeRosterGrid
              category={category}
              characterList={characterList}
              currentIndex={currentIndex}
              mode={mode}
              onSelectIndex={setCurrentIndex}
              onPrevChar={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              onNextChar={() => setCurrentIndex((i) => Math.min(characterList.length - 1, i + 1))}
              onSetMode={setMode}
              onStartDemo={handleStartDemo}
              onClearCanvas={clearCanvas}
            />

            {currentChar && (
              <StrokeCanvasPanel
                currentChar={currentChar}
                mode={mode}
                activeStrokeIndex={activeStrokeIndex}
                demoStep={demoStep}
                canvasRef={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onClearCanvas={clearCanvas}
                onStartDemo={handleStartDemo}
              />
            )}
          </div>
        </main>
      </div>
    </AuthGate>
  );
}
