'use client';

import React, { useState } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { speakJapanese } from '@/features/content/models/kana';
import rawVocab from '@/data/vocab_n5.json';
import { Zap, RefreshCw } from 'lucide-react';
import { FsrsRetentionGraph } from '../../components/FsrsRetentionGraph';
import { useSrsQueue } from '../../hooks/useSrsQueue';
import {
  ReviewHeader,
  SrsProgressionPyramid,
  ReviewSessionModal,
} from './components';

const STAGE_NAMES = [
  'Locked',
  'Apprentice I',
  'Apprentice II',
  'Apprentice III',
  'Apprentice IV',
  'Guru I',
  'Guru II',
  'Master',
  'Enlightened',
  'Burned 🏆',
];

const STAGE_COLORS = [
  'text-[#627780] bg-[#0a3240] border-[#17424f]',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-pink-400 bg-pink-500/10 border-pink-500/30',
  'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'text-blue-400 bg-blue-500/10 border-blue-500/30',
  'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'text-amber-400 bg-amber-500/10 border-amber-500/30',
];

export function ReviewScreen() {
  const { dueQueue, allCards, stageSummary, loading: queueLoading, submitReview, refetch } = useSrsQueue();

  const [isReviewing, setIsReviewing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0,
  });

  const startSession = () => {
    if (dueQueue.length === 0) return;
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionResults({ correct: 0, incorrect: 0 });
    setIsReviewing(true);
    speakJapanese(dueQueue[0].kanji || dueQueue[0].kana);
  };

  const currentItem = dueQueue[currentIndex];

  const handleRate = async (promoted: boolean) => {
    if (!currentItem) return;

    const rating = promoted ? 3 : 1;
    await submitReview(currentItem.id, 'vocab', rating);

    if (promoted) {
      setSessionResults((r) => ({ ...r, correct: r.correct + 1 }));
    } else {
      setSessionResults((r) => ({ ...r, incorrect: r.incorrect + 1 }));
    }

    if (currentIndex + 1 < dueQueue.length) {
      setCurrentIndex((i) => i + 1);
      setShowAnswer(false);
      speakJapanese(dueQueue[currentIndex + 1].kanji || dueQueue[currentIndex + 1].kana);
    } else {
      setShowAnswer(false);
      setCurrentIndex(dueQueue.length);
      refetch();
    }
  };

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
          <ReviewHeader
            dueCount={dueQueue.length}
            loading={queueLoading}
            onAddMoreVocab={() => {}}
            onStartSession={startSession}
          />

          <SrsProgressionPyramid
            apprenticeCount={stageSummary.apprenticeCount}
            guruCount={stageSummary.guruCount}
            masterCount={stageSummary.masterCount}
            enlightenedCount={stageSummary.enlightenedCount}
            burnedCount={stageSummary.burnedCount}
          />

          <FsrsRetentionGraph
            cards={allCards}
            stability={
              allCards.length > 0
                ? Number(
                    (
                      allCards.reduce((sum, item) => sum + (item.stability || item.stage * 1.8), 0) /
                      allCards.length
                    ).toFixed(1)
                  )
                : 14.8
            }
            difficulty={
              allCards.length > 0
                ? Number(
                    (
                      allCards.reduce((sum, item) => sum + (item.difficulty || 4.2), 0) /
                      allCards.length
                    ).toFixed(1)
                  )
                : 4.2
            }
            efficiencyAdvantage={14.2}
          />

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-[#17424f] p-6 md:p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    PostgreSQL FSRS-6 Review Queue
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white">
                  {queueLoading ? (
                    <span className="text-[#8fa2aa] flex items-center gap-2">
                      <RefreshCw size={20} className="animate-spin text-emerald-400" />
                      Synchronizing active SRS queue...
                    </span>
                  ) : dueQueue.length > 0 ? (
                    <>
                      You have <span className="text-red-500">{dueQueue.length} items</span> due for review right now.
                    </>
                  ) : (
                    <>All caught up! Excellent discipline, warrior.</>
                  )}
                </h2>
                <p className="text-xs text-[#8fa2aa] mt-1 max-w-lg">
                  Completing your daily reviews prevents forgetting curves and advances your items from Apprentice toward Burned status.
                </p>
              </div>

              <button
                onClick={startSession}
                disabled={queueLoading || dueQueue.length === 0}
                className="px-6 py-4 rounded-2xl bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-40 disabled:hover:bg-[#c74a4a] text-white font-bold text-sm transition shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 shrink-0"
              >
                <Zap size={16} fill="white" />
                <span>{queueLoading ? 'Syncing...' : 'Launch Review Session'}</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#c1d0d6] uppercase tracking-wider">
                Active Items in PostgreSQL SRS Dojo ({queueLoading ? '...' : allCards.length})
              </h3>
              <span className="text-xs text-[#627780]">Live Database Feed</span>
            </div>

            {queueLoading ? (
              <div className="p-8 text-center text-xs text-[#627780] bg-[#0a3240]/40 border border-[#17424f] rounded-2xl flex items-center justify-center gap-2 font-mono">
                <RefreshCw size={14} className="animate-spin text-emerald-400" />
                <span>Loading PostgreSQL SRS Dojo items...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {allCards.slice(0, 30).map((item) => {
                  const isDue = item.dueAt <= Date.now() && item.stage < 9;
                  return (
                    <div
                      key={item.id}
                      className="bg-[#0a3240]/60 border border-[#17424f] p-4 rounded-2xl flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-[#8fa2aa]">{item.kana}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${STAGE_COLORS[item.stage]}`}>
                            {STAGE_NAMES[item.stage]}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white font-serif">{item.kanji || item.kana}</h4>
                        <p className="text-xs text-[#8fa2aa] truncate max-w-[180px]">{item.meaning}</p>
                      </div>

                      <div className="text-right">
                        {isDue ? (
                          <span className="text-[10px] font-bold text-[#ffb4ab] bg-red-500/10 border border-red-500/30 px-2 py-1 rounded-lg">
                            Ready
                          </span>
                        ) : (
                          <span className="text-[10px] text-[#627780]">
                            {item.stage === 9 ? 'Mastered' : 'Scheduled'}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <ReviewSessionModal
            isReviewing={isReviewing}
            dueItems={dueQueue}
            currentIndex={currentIndex}
            showAnswer={showAnswer}
            sessionResults={sessionResults}
            onClose={() => {
              setIsReviewing(false);
              refetch();
            }}
            onShowAnswer={() => setShowAnswer(true)}
            onRate={handleRate}
          />
        </main>
      </div>
    </AuthGate>
  );
}
