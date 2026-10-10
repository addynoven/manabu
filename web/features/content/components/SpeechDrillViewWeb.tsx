'use client';

import React, { useState, useEffect, useRef } from 'react';
import { speakJapanese } from '../models/kana';
import { Mic, Volume2, CheckCircle2, XCircle, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';

interface SpeechDrillViewWebProps {
  prompt: string;
  targetPhrase: string;
  romaji?: string;
  englishMeaning?: string;
  onSuccess: () => void;
}

function extractCleanTarget(text: string): string {
  if (!text) return 'こんにちは';
  const quoteMatch = text.match(/「([^」]+)」/);
  if (quoteMatch && quoteMatch[1]) {
    return quoteMatch[1].trim();
  }
  const doubleQuoteMatch = text.match(/"([^"]+)"/);
  if (doubleQuoteMatch && doubleQuoteMatch[1] && /[\u3040-\u30ff\u4e00-\u9faf]/.test(doubleQuoteMatch[1])) {
    return doubleQuoteMatch[1].trim();
  }
  return text.trim();
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
  for (let i = 0; i <= cleanA.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= cleanB.length; j++) {
    matrix[0][j] = j;
  }

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

export function SpeechDrillViewWeb({
  prompt,
  targetPhrase,
  romaji,
  englishMeaning,
  onSuccess,
}: SpeechDrillViewWebProps) {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [passed, setPassed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);

  const cleanTarget = extractCleanTarget(targetPhrase);

  // Reset internal state whenever prompt or targetPhrase changes for a new question
  useEffect(() => {
    setIsListening(false);
    setRecognizedText('');
    setMatchScore(null);
    setPassed(false);
    setErrorMessage(null);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
  }, [prompt, targetPhrase]);

  const handleListenPronunciation = () => {
    speakJapanese(cleanTarget);
  };

  const handleStartSpeechToText = () => {
    setErrorMessage(null);

    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
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

      if (score >= 70) {
        setPassed(true);
      } else {
        setPassed(false);
      }
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        setErrorMessage('Microphone access blocked. Please enable microphone permissions in your browser address bar.');
      } else if (event.error === 'no-speech') {
        setErrorMessage('No speech detected. Please speak closer to your microphone and try again.');
      } else {
        setErrorMessage(`Speech recognition error: ${event.error || 'Speech not detected'}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (err: any) {
      setIsListening(false);
      setErrorMessage('Failed to start speech recognition. Please try again.');
    }
  };

  const handleContinueNext = () => {
    onSuccess();
  };

  const targetChars = cleanTarget.split('');
  const recognizedChars = recognizedText.replace(/Listening.*/, '').split('');

  return (
    <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-6 md:p-8 space-y-6 text-center max-w-xl mx-auto shadow-2xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082f49] text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider">
        <Mic size={14} /> Speech Recognition &amp; Pronunciation Verification
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white">{prompt}</h3>
        {englishMeaning && <p className="text-xs text-[#8fa2aa]">{englishMeaning}</p>}
      </div>

      {/* Target Japanese Phrase Box */}
      <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl p-6 space-y-3 shadow-inner">
        <span className="text-[10px] font-mono text-[#8fa2aa] uppercase tracking-wider block font-bold">
          Target Japanese Phrase To Speak
        </span>
        <div className="text-3xl md:text-4xl font-black font-serif text-white tracking-wider leading-relaxed">
          {cleanTarget}
        </div>
        {romaji && <div className="text-sm font-mono text-[#38bdf8]">{romaji}</div>}

        <button
          onClick={handleListenPronunciation}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f3947] hover:bg-[#17424f] text-xs font-semibold text-[#c1d0d6] transition"
        >
          <Volume2 size={15} /> Listen Audio Guide
        </button>
      </div>

      {/* Side-by-Side Comparison & Phonetic Verification Card */}
      {recognizedText && matchScore !== null && (
        <div
          className={`p-5 rounded-2xl border space-y-4 text-left transition-all ${
            passed
              ? 'bg-[#063b28]/90 border-[#34d399] text-[#34d399]'
              : 'bg-[#93000a]/30 border-[#ffb4ab] text-[#ffb4ab]'
          }`}
        >
          <div className="flex items-center justify-between border-b border-current/20 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              {passed ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              <span>Verification Result: {passed ? 'PASSED (≥70%)' : 'TRY AGAIN (<70%)'}</span>
            </span>
            <span className="font-mono text-base font-black">{matchScore}% Match</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            {/* Expected Target */}
            <div className="bg-[#051b22]/80 p-3 rounded-xl border border-current/30 space-y-1 overflow-hidden">
              <span className="text-[10px] uppercase opacity-75 block font-bold">Expected Target</span>
              <p className="text-base font-bold text-white font-serif tracking-wider truncate">{cleanTarget}</p>
            </div>

            {/* What Was Heard */}
            <div className="bg-[#051b22]/80 p-3 rounded-xl border border-current/30 space-y-1 overflow-hidden">
              <span className="text-[10px] uppercase opacity-75 block font-bold">What Was Heard</span>
              <p className="text-base font-bold text-white font-serif tracking-wider truncate">{recognizedText}</p>
            </div>
          </div>

          {/* Character Breakdown Visualizer */}
          <div className="bg-[#051b22]/60 p-3 rounded-xl border border-current/20 space-y-1 text-center overflow-hidden">
            <span className="text-[10px] uppercase font-mono opacity-75 block">Phonetic Character Comparison</span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1 text-lg font-serif font-bold max-w-full overflow-x-auto">
              {targetChars.map((char, idx) => {
                const matchChar = recognizedChars[idx];
                const isCharMatch = matchChar === char;
                return (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded border font-mono ${
                      isCharMatch
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                        : 'bg-red-500/20 text-red-300 border-red-500/50'
                    }`}
                    title={`Target: ${char} | Heard: ${matchChar || '—'}`}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Error / Permission Alert */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center justify-center gap-2">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Microphone Action Control & Continue Button */}
      <div className="space-y-4 pt-2 border-t border-[#17424f]">
        {!passed ? (
          <div>
            <button
              onClick={handleStartSpeechToText}
              className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center transition-all shadow-xl ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse shadow-red-950/80 scale-110'
                  : 'bg-[#38bdf8] hover:bg-[#0284c7] text-[#051b22] shadow-sky-950/60'
              }`}
            >
              {isListening ? <Mic size={36} className="animate-bounce" /> : <Mic size={36} />}
            </button>
            <span className="text-xs text-[#8fa2aa] block font-medium mt-2">
              {isListening ? 'Listening... Speak Japanese now!' : 'Tap Microphone & Speak Japanese'}
            </span>
          </div>
        ) : (
          <button
            onClick={handleContinueNext}
            className="w-full py-3.5 bg-[#c74a4a] hover:bg-[#d95a5a] text-white rounded-xl text-sm font-bold shadow-lg transition flex items-center justify-center gap-2 shadow-red-950/50 animate-bounce"
          >
            <span>Continue to Next Question</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
