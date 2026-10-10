'use client';

import { useState } from 'react';
import type { ArcadeStats } from '../models/arcade.model';

export function useArcadeGame() {
  const [activeTab, setActiveTab] = useState<string>('wordle');
  const [highScore, setHighScore] = useState<number>(0);

  const saveScore = (game: string, score: number) => {
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return { activeTab, setActiveTab, highScore, saveScore };
}
