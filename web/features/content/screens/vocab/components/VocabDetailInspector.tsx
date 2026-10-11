'use client';

import React, { useState, useRef, useEffect } from 'react';
import { VocabItem } from './VocabMasterTable';
import { speakJapanese } from '../../../models/kana';
import { Mic, Volume2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface PitchPattern {
  type: string;
  downstep: string;
  pattern: string;
  moras: Array<{ mora: string; high: boolean; isDrop?: boolean }>;
  rule: string;
}

interface VocabDetailInspectorProps {
  selectedWord: VocabItem;
  currentPitch: PitchPattern;
  hideFurigana: boolean;
  speechSpeed: number;
  onToggleFurigana: () => void;
  onSetSpeechSpeed: (speed: number) => void;
  onAddToCram: (word: string) => void;
}

function calculateJapaneseSimilarity(a: string, b: string): number {
  const cleanA = a.trim().replace(/[\s、。！？!?,.「」"']/g, '');
  const cleanB = b.trim().replace(/[\s、。！？!?,.「」"']/g, '');

  if (!cleanA || !cleanB) return 0;
  if (cleanA === cleanB) return 100;

  if (cleanA.includes(cleanB) || cleanB.includes(cleanA)) {
    const minLen = Math.min(cleanA.length, cleanB.length);
    const maxLen = Math.max(cleanA.length, cleanB.length);
    return Math.round((minLen / maxLen) * 100);
  }

  const matrix: number[][] = [];
  for (let i = 0; i <= cleanA.length; i++) matrix[i] = [i];
  for (let j = 0; j <= cleanB.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= cleanA.length; i++) {
    for (let j = 1; j <= cleanB.length; j++) {
      if (cleanA[i - 1] === cleanB[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  const distance = matrix[cleanA.length][cleanB.length];
  const maxLen = Math.max(cleanA.length, cleanB.length);
  return Math.max(0, Math.round(((maxLen - distance) / maxLen) * 100));
}

export function VocabDetailInspector({
  selectedWord,
  currentPitch,
  hideFurigana,
  speechSpeed,
  onToggleFurigana,
  onSetSpeechSpeed,
  onAddToCram,
}: VocabDetailInspectorProps) {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const cleanTarget = selectedWord.kana || selectedWord.kanji || '';

  useEffect(() => {
    setIsListening(false);
    setRecognizedText('');
    setMatchScore(null);
    setErrorMessage(null);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
  }, [selectedWord]);

  const handleStartSpeechToText = () => {
    setErrorMessage(null);
    if (isListening && recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
      setIsListening(false);
      return;
    }

    if (typeof window === 'undefined' || !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setErrorMessage('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognitionClass();
    recognition.lang = 'ja-JP';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;
    setIsListening(true);
    setRecognizedText('Listening to your Japanese speech...');

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript || '';
      setRecognizedText(transcript);
      setIsListening(false);

      const score = calculateJapaneseSimilarity(transcript, cleanTarget);
      setMatchScore(score);
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'not-allowed') {
        setErrorMessage('Microphone blocked. Please enable mic permissions in browser bar.');
      } else {
        setErrorMessage('Speech not detected. Speak closer to mic.');
      }
    };

    recognition.onend = () => setIsListening(false);

    try { recognition.start(); } catch { setIsListening(false); }
  };

  const targetChars = cleanTarget.split('');
  const recognizedChars = recognizedText.replace(/Listening.*/, '').split('');

  return (
    <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
      <div className="bg-surface-base border border-border-hairline rounded-xl p-5 shadow-2xl space-y-5">
        <div className="pb-4 border-b border-border-hairline space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-primary-subtle text-primary border border-border-hairline uppercase">
                  JLPT {(selectedWord as any).level || 'N5'}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-surface-muted text-secondary border border-border-hairline">
                  SEQ #{selectedWord.jmdict_seq}
                </span>
              </div>
              <div className="text-5xl font-serif font-bold text-text-primary tracking-wide leading-tight">
                {selectedWord.kanji || selectedWord.kana}
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="font-mono text-sm text-secondary font-medium">{selectedWord.kana}</span>
                <span className="text-text-muted">•</span>
                <button
                  onClick={onToggleFurigana}
                  className="text-xs text-info hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">subtitles</span>
                  <span>{hideFurigana ? 'Show Furigana' : 'Hide Furigana'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => speakJapanese(selectedWord.kanji || selectedWord.kana)}
                className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center shadow-[0_4px_16px_rgba(199,74,74,0.4)] hover:bg-primary-hover active:bg-primary-active transition-all group"
                title="Listen Native Pronunciation"
              >
                <Volume2 size={28} />
              </button>
              <span className="text-[10px] font-mono text-text-muted font-bold">AUDIO HD</span>
            </div>
          </div>

          <div className="bg-background-deep p-2.5 rounded-lg border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-muted text-[17px]">record_voice_over</span>
              <span className="text-xs text-text-primary font-medium">Tokyo Native Audio Stream</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono text-text-muted mr-1">SPEED</span>
              {[0.8, 1.0, 1.2].map((spd) => (
                <button
                  key={spd}
                  onClick={() => onSetSpeechSpeed(spd)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                    speechSpeed === spd
                      ? 'font-bold text-white bg-primary-container shadow-[0_0_8px_rgba(199,74,74,0.4)]'
                      : 'text-text-secondary hover:text-white bg-surface-muted border border-border-hairline'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 🎙️ Web Speech API Microphone Pronunciation Verification Section */}
        <div className="space-y-3 p-4 bg-background-deep border border-border-hairline rounded-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <Mic size={15} className="text-[#38bdf8]" />
              Voice Pronunciation Verification
            </span>
            <span className="text-[10px] font-mono text-text-muted">ja-JP Web Speech</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleStartSpeechToText}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-[#0f3947] hover:bg-[#17424f] text-[#38bdf8] border border-[#17424f]'
              }`}
            >
              <Mic size={16} />
              <span>{isListening ? 'Listening...' : 'Test Speech Pronunciation'}</span>
            </button>

            <button
              onClick={() => speakJapanese(cleanTarget)}
              className="py-2.5 px-3 rounded-xl bg-surface-muted hover:bg-surface-elevated text-xs font-bold text-text-secondary border border-border-hairline transition flex items-center gap-1"
              title="Listen Guide"
            >
              <Volume2 size={16} />
            </button>
          </div>

          {recognizedText && matchScore !== null && (
            <div
              className={`p-3 rounded-xl border text-xs space-y-2 font-mono transition-all ${
                matchScore >= 70
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                  : 'bg-red-950/40 border-red-500/40 text-red-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold flex items-center gap-1">
                  {matchScore >= 70 ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  <span>{matchScore >= 70 ? 'PASSED (≥70%)' : 'TRY AGAIN (<70%)'}</span>
                </span>
                <span className="font-black text-sm">{matchScore}% Match</span>
              </div>

              <div className="text-[11px] space-y-1">
                <div><span className="opacity-70">Target:</span> <span className="font-bold text-white font-serif">{cleanTarget}</span></div>
                <div><span className="opacity-70">Heard:</span> <span className="font-bold text-white font-serif">{recognizedText}</span></div>
              </div>

              <div className="flex flex-wrap gap-1 pt-1 justify-center">
                {targetChars.map((char, idx) => {
                  const matchChar = recognizedChars[idx];
                  const isMatch = matchChar === char;
                  return (
                    <span
                      key={idx}
                      className={`px-1.5 py-0.2 rounded text-xs font-bold font-serif border ${
                        isMatch
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : 'bg-red-500/20 text-red-300 border-red-500/40'
                      }`}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-red-950/50 border border-red-800/80 text-red-300 text-[11px] flex items-center gap-1.5">
              <AlertCircle size={14} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
              PITCH ACCENT PROFILE
            </span>
            <span className="text-xs font-mono text-accent-gold font-bold">{currentPitch.type}</span>
          </div>
          <div className="bg-tatami-canvas border border-tatami-grid rounded-xl p-3.5 relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-around py-2">
              {currentPitch.moras.map((m, mIdx) => (
                <React.Fragment key={mIdx}>
                  <div className="flex flex-col items-center gap-1.5 relative">
                    <span className="text-[10px] font-mono text-text-muted">Mora {mIdx + 1}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                        m.high
                          ? 'bg-primary-container border-white shadow-[0_0_12px_#c74a4a]'
                          : 'bg-surface-muted border-text-muted'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${m.high ? 'bg-white' : 'bg-text-muted'}`} />
                    </div>
                    <span className={`text-lg font-bold ${m.high ? 'text-white' : 'text-text-secondary'}`}>
                      {m.mora}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase ${
                        m.high ? 'text-primary font-bold' : 'text-text-muted'
                      }`}
                    >
                      {m.high ? 'High ▾' : 'Low'}
                    </span>
                  </div>
                  {mIdx < currentPitch.moras.length - 1 && (
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-text-muted to-primary-container mx-1 -mt-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-border-subtle text-[11px] text-text-secondary flex items-center justify-between">
              <span>Rule: {currentPitch.rule}</span>
              <span className="font-mono text-text-muted">Downstep: {currentPitch.downstep}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
            DICTIONARY SENSES &amp; ETYMOLOGY
          </span>
          <div className="space-y-2 bg-background-deep p-3.5 rounded-xl border border-border-hairline">
            <div className="text-xs text-text-primary leading-relaxed font-medium">
              {selectedWord.waller_definition}
            </div>
          </div>
        </div>

        <div className="space-y-2.5 pt-3 border-t border-border-hairline">
          <button
            onClick={() => onAddToCram(selectedWord.kanji || selectedWord.kana)}
            className="w-full py-3 px-4 rounded-xl bg-primary-container text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(199,74,74,0.4)] hover:bg-primary-hover active:bg-primary-active transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Add to Live PostgreSQL SRS Review Deck →</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
