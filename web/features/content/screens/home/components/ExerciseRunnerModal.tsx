'use client';

import React from 'react';
import { UnitLesson, LessonExercise } from '../../../models/curriculum';
import { speakJapanese } from '../../../models/kana';
import {
  SpeechDrillViewWeb,
  DialogueChatViewWeb,
  ScrambleExerciseViewWeb,
  MatchingPairsViewWeb,
  DictationExerciseViewWeb,
  EvaluationCardSheetWeb,
} from '../../../components';
import { X, Volume2, CheckCircle2 } from 'lucide-react';

interface ExerciseRunnerModalProps {
  activeLesson: UnitLesson | null;
  studyMode: 'comprehensive' | 'listen' | 'speak' | 'spell';
  exerciseIndex: number;
  selectedOption: string | null;
  isAnswerChecked: boolean;
  isCorrect: boolean;
  lessonCompleted: boolean;
  onClose: () => void;
  onSelectOption: (option: string) => void;
  onCheckAnswer: () => void;
  onNextExercise: () => void;
}

export function ExerciseRunnerModal({
  activeLesson,
  studyMode,
  exerciseIndex,
  selectedOption,
  isAnswerChecked,
  isCorrect,
  lessonCompleted,
  onClose,
  onSelectOption,
  onCheckAnswer,
  onNextExercise,
}: ExerciseRunnerModalProps) {
  if (!activeLesson) return null;

  const currentExercise: LessonExercise | undefined = activeLesson.exercises[exerciseIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#001017]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8fa2aa] hover:text-[#f0f0f0] bg-[#0f3947] border border-[#17424f] rounded-lg transition"
        >
          <X size={18} />
        </button>

        {!lessonCompleted ? (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#8fa2aa]">
                <span>
                  Question {exerciseIndex + 1} of {activeLesson.exercises.length}
                </span>
                <span className="capitalize text-[#ffb3af] font-semibold">{studyMode} Mode</span>
              </div>
              <div className="w-full bg-[#051b22] border border-[#17424f] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#c74a4a] h-full transition-all duration-300"
                  style={{
                    width: `${((exerciseIndex + 1) / activeLesson.exercises.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Render Mode-Specific Interactive View */}
            {studyMode === 'speak' || currentExercise?.type === 'speak' ? (
              <SpeechDrillViewWeb
                prompt={`Speak in Japanese: "${currentExercise?.prompt || 'Hello'}"`}
                targetPhrase={
                  currentExercise?.character ||
                  (currentExercise?.correctAnswer && /[\u3040-\u30ff\u4e00-\u9faf]/.test(currentExercise.correctAnswer) ? currentExercise.correctAnswer : null) ||
                  'こんにちは'
                }
                englishMeaning={currentExercise?.prompt}
                onSuccess={onNextExercise}
              />
            ) : currentExercise?.type === 'match' ? (
              <MatchingPairsViewWeb
                prompt={currentExercise.prompt || 'Match each Japanese word to its English meaning'}
                pairs={
                  currentExercise.matchPairs?.map((p, pIdx) => ({
                    id: pIdx,
                    kana: p.left,
                    romaji: p.right,
                  })) || [
                    { id: 0, kana: 'こんにちは', romaji: 'Hello' },
                    { id: 1, kana: 'おはよう', romaji: 'Good morning' },
                    { id: 2, kana: 'こんばんは', romaji: 'Good evening' },
                    { id: 3, kana: 'さようなら', romaji: 'Goodbye' },
                  ]
                }
                onSuccess={onNextExercise}
              />
            ) : currentExercise?.type === 'scramble' ? (
              <ScrambleExerciseViewWeb
                prompt={currentExercise.prompt}
                wordTiles={currentExercise.wordTiles || ['ここ', 'で', '写真', 'を', '撮る']}
                correctSentence={currentExercise.correctAnswer}
                onSuccess={onNextExercise}
              />
            ) : currentExercise?.type === 'dialogue' ? (
              <DialogueChatViewWeb
                scenarioTitle={currentExercise.prompt}
                messages={[
                  { id: '1', sender: 'partner', japanese: 'いらっしゃいませ！何にしますか？', english: 'Welcome! What will you have?' }
                ]}
                options={currentExercise.options}
                correctAnswer={currentExercise.correctAnswer}
                onSuccess={onNextExercise}
              />
            ) : currentExercise?.type === 'dictation' ? (
              <DictationExerciseViewWeb
                prompt={currentExercise.prompt}
                audioPhrase={currentExercise.correctAnswer}
                correctAnswer={currentExercise.correctAnswer}
                onSuccess={onNextExercise}
              />
            ) : currentExercise && (
              <div className="space-y-6 py-4">
                {(() => {
                  const areOptionsJapanese = currentExercise.options?.some((opt) =>
                    /[\u3040-\u30ff\u4e00-\u9faf]/.test(opt)
                  );

                  const topBadge = areOptionsJapanese
                    ? 'Translate to Japanese'
                    : 'Select the correct meaning';

                  const cleanPrompt = (currentExercise.prompt || '')
                    .replace(/^(pronounce|choose|select|type|write|translate):\s*/i, '')
                    .trim();

                  const mainText = areOptionsJapanese
                    ? cleanPrompt
                    : (currentExercise.character || cleanPrompt);

                  const isJapaneseMainText = /[\u3040-\u30ff\u4e00-\u9faf]/.test(mainText);

                  const romajiSubtitle = !areOptionsJapanese && currentExercise.subPrompt
                    ? currentExercise.subPrompt.split('•')[0].trim()
                    : '';

                  return (
                    <div className="text-center space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082f49] text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-bold uppercase tracking-wider mb-2">
                        {topBadge}
                      </div>

                      <div className={`text-3xl md:text-5xl font-black text-[#f0f0f0] tracking-wide my-2 ${isJapaneseMainText ? 'font-serif' : ''}`}>
                        {mainText}
                      </div>

                      {romajiSubtitle && (
                        <p className="text-sm font-mono text-[#38bdf8]">{romajiSubtitle}</p>
                      )}

                      <button
                        onClick={() => speakJapanese(currentExercise.character || currentExercise.correctAnswer)}
                        className="inline-flex items-center gap-1.5 text-xs text-[#ffb3af] hover:text-white font-semibold px-3.5 py-1.5 bg-[#2d1b22] rounded-lg border border-[#c74a4a]/40 mt-2 transition shadow-sm"
                      >
                        <Volume2 size={14} /> Listen Pronunciation
                      </button>
                    </div>
                  );
                })()}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentExercise.options.map((opt) => {
                    const isSelected = selectedOption === opt;
                    let btnStyle = 'bg-[#00161e] border-[#17424f] text-[#f0f0f0] hover:bg-[#134454]';
                    if (isAnswerChecked) {
                      if (opt === currentExercise.correctAnswer) {
                        btnStyle = 'bg-[#063b28] border-[#34d399] text-[#34d399] font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-[#93000a]/50 border-[#ffb4ab] text-[#ffb4ab] font-bold';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-[#2d1b22] border-[#c74a4a] text-white font-bold shadow-sm';
                    }

                    return (
                      <button
                        key={opt}
                        disabled={isAnswerChecked}
                        onClick={() => onSelectOption(opt)}
                        className={`p-4 rounded-xl border text-center text-base font-semibold transition ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {!isAnswerChecked && (
                  <div className="pt-4 border-t border-[#17424f] flex items-center justify-end">
                    <button
                      disabled={!selectedOption}
                      onClick={onCheckAnswer}
                      className="px-6 py-2.5 bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-md transition"
                    >
                      Check Answer
                    </button>
                  </div>
                )}

                {isAnswerChecked && (
                  <EvaluationCardSheetWeb
                    evaluation={isCorrect ? 'correct' : 'incorrect'}
                    exercise={currentExercise}
                    userAnswerText={selectedOption || ''}
                    correctAnswerText={currentExercise.correctAnswer}
                    hintText={currentExercise.explanation}
                    onContinue={onNextExercise}
                  />
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 space-y-6 relative">
            <button
              onClick={onClose}
              className="absolute -top-3 -right-2 p-2 text-[#8fa2aa] hover:text-[#f0f0f0] bg-[#0f3947] border border-[#17424f] rounded-lg transition"
              title="Exit Session"
            >
              <X size={18} />
            </button>

            <div className="w-20 h-20 rounded-2xl bg-[#063b28] border-2 border-[#34d399] text-[#34d399] mx-auto flex items-center justify-center shadow-xl shadow-emerald-950/50">
              <CheckCircle2 size={44} />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#2a2415] border border-[#fbbf24]/50 text-[#fbbf24] text-xs font-mono font-bold uppercase tracking-wider">
                +20 XP CREDITED
              </span>
              <h3 className="text-3xl font-black text-white font-serif">{activeLesson.title} Complete!</h3>
              <p className="text-xs text-[#8fa2aa] max-w-sm mx-auto">
                All {activeLesson.exercises.length} drills cleared! Your progress has been synced to your Dojo Belt and SRS Review Queue.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#c74a4a] hover:bg-[#d95a5a] text-white rounded-xl text-xs font-bold shadow-lg shadow-red-950/50 transition flex items-center justify-center gap-2"
              >
                <X size={16} />
                <span>Exit &amp; Return to Roadmap</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
