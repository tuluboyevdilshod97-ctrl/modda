import React, { useState, useEffect } from 'react';
import {
  Clock,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flag,
  ArrowLeft,
  Send,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { Question, QuizSession } from '../types';
import { cleanQuestionText, cleanLegalBasis, isQuestionCorrect } from '../utils/questionFormatter';
import { FormattedQuestionText } from './FormattedQuestionText';

interface QuizViewProps {
  session: QuizSession;
  onSelectOption: (questionId: string, optionIndex: number | string) => void;
  onToggleFlag: (questionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onJumpTo: (index: number) => void;
  onFinishQuiz: () => void;
  onExitQuiz: () => void;
  fontSize?: 'small' | 'normal' | 'large' | 'extralarge';
  onChangeFontSize?: (size: 'small' | 'normal' | 'large' | 'extralarge') => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizView: React.FC<QuizViewProps> = ({
  session,
  onSelectOption,
  onToggleFlag,
  onNext,
  onPrev,
  onJumpTo,
  onFinishQuiz,
  onExitQuiz,
  fontSize = 'normal',
  onChangeFontSize
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // States for custom question types (ochiq and muvofiqlik)
  const [typedAnswer, setTypedAnswer] = useState('');
  const [matches, setMatches] = useState<Record<string, string>>({});

  const currentQ: Question | undefined = session.questions[session.currentIndex];
  const selectedOption = currentQ ? session.userAnswers[currentQ.id] : undefined;
  const isFlagged = currentQ ? session.markedQuestions.includes(currentQ.id) : false;

  // Reset states and sync when question changes
  useEffect(() => {
    setShowExplanation(false);
    window.scrollTo(0, 0);

    if (currentQ) {
      const saved = session.userAnswers[currentQ.id];
      if (typeof saved === 'string') {
        if (currentQ.questionType === 'ochiq') {
          setTypedAnswer(saved);
        } else if (currentQ.questionType === 'muvofiqlik') {
          const newMatches: Record<string, string> = {};
          saved.split(',').forEach(pair => {
            const [leftKey, rightKey] = pair.trim().split('-');
            if (leftKey && rightKey) {
              newMatches[leftKey] = rightKey;
            }
          });
          setMatches(newMatches);
        }
      } else {
        setTypedAnswer('');
        setMatches({});
      }
    }
  }, [session.currentIndex, currentQ]);

  const FONT_SIZES = ['small', 'normal', 'large', 'extralarge'] as const;

  const handleDecreaseFontSize = () => {
    if (!onChangeFontSize) return;
    const curIdx = FONT_SIZES.findIndex((s) => s === fontSize);
    if (curIdx > 0) {
      onChangeFontSize(FONT_SIZES[curIdx - 1]);
    }
  };

  const handleIncreaseFontSize = () => {
    if (!onChangeFontSize) return;
    const curIdx = FONT_SIZES.findIndex((s) => s === fontSize);
    if (curIdx >= 0 && curIdx < FONT_SIZES.length - 1) {
      onChangeFontSize(FONT_SIZES[curIdx + 1]);
    }
  };

  if (!currentQ) {
    return (
      <div className="text-center py-20 text-white">
        <p>Savollar topilmadi.</p>
        <button
          onClick={onExitQuiz}
          className="mt-4 px-4 py-2 bg-emerald-600 rounded-lg text-sm"
        >
          Ortga qaytish
        </button>
      </div>
    );
  }

  // Format timer
  const minutes = Math.floor(session.timeRemainingSeconds / 60);
  const seconds = session.timeRemainingSeconds % 60;
  const isTimerLow = session.timeLimitSeconds > 0 && session.timeRemainingSeconds <= 300; // < 5 mins

  const totalAnswered = Object.keys(session.userAnswers).length;
  const totalQuestions = session.questions.length;
  const unansweredCount = totalQuestions - totalAnswered;

  const isPracticeMode = session.mode === 'topic_practice' || session.mode === 'mistakes_review';
  const hasAnsweredCurrent = selectedOption !== undefined;

  return (
    <div className="w-full min-h-screen bg-[#F7F5F0] max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 py-6 text-[#1E1A16] relative z-10">
      {/* Top Bar */}
      <div className="bg-white border border-[#DDD7CD] rounded-2xl p-4 sm:p-5 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        {/* Left: Back & Title */}
        <div className="flex items-center space-x-3">
          <button
            id="exit-quiz-btn"
            onClick={() => setShowExitConfirm(true)}
            className="p-2 rounded-xl bg-[#FAF5ED] hover:bg-[#F2EDE4] text-[#1E1A16] border border-[#DDD7CD] transition-colors"
            title="Chiqish"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6B38]">
                {session.mode === 'dtm_exam'
                  ? 'Imtihon Sinovi'
                  : session.mode === 'aralash_test'
                  ? 'Aralash Test'
                  : session.mode === 'mistakes_review'
                  ? 'Xatolar ustida ishlash'
                  : 'Mavzuli mashq'}
              </span>
              {session.topicTitle && (
                <span className="text-xs text-[#736B60] hidden sm:inline">
                  • {session.topicTitle.replace(/DTM/g, 'Imtihon')}
                </span>
              )}
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[#1E1A16]">
              Savol {session.currentIndex + 1} / {totalQuestions}
            </h2>
          </div>
        </div>

        {/* Right: Font Zoom, Timer & Flag */}
        <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
          {/* Quick Font Size Adjuster */}
          {onChangeFontSize && (
            <div
              id="quiz-font-size-control"
              className="flex items-center bg-[#FAF5ED] p-0.5 rounded-xl border border-[#E6DCC8]"
              title="Shrift o‘lchamini o‘zgartirish"
            >
              <button
                type="button"
                id="quiz-font-decrease-btn"
                onClick={handleDecreaseFontSize}
                disabled={fontSize === 'small'}
                className="px-2 py-1 rounded-lg text-xs font-bold text-[#595248] hover:text-[#1E1A16] hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                title="Shriftni kichraytirish (A-)"
              >
                A-
              </button>
              <button
                type="button"
                id="quiz-font-reset-btn"
                onClick={() => onChangeFontSize('normal')}
                className="px-1.5 py-1 text-[11px] font-bold text-[#8C6B38] hover:bg-white rounded-lg transition-colors cursor-pointer hidden xs:inline"
                title="Standart o‘lchamga qaytarish"
              >
                {fontSize === 'small'
                  ? '85%'
                  : fontSize === 'large'
                  ? '115%'
                  : fontSize === 'extralarge'
                  ? '130%'
                  : '100%'}
              </button>
              <button
                type="button"
                id="quiz-font-increase-btn"
                onClick={handleIncreaseFontSize}
                disabled={fontSize === 'extralarge'}
                className="px-2 py-1 rounded-lg text-xs font-bold text-[#595248] hover:text-[#1E1A16] hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                title="Shriftni kattalashtirish (A+)"
              >
                A+
              </button>
            </div>
          )}

          {/* Timer if applicable */}
          {session.timeLimitSeconds > 0 && (() => {
            const pct = Math.max(0, Math.min(100, (session.timeRemainingSeconds / session.timeLimitSeconds) * 100));
            const circumference = 2 * Math.PI * 7.5;
            const strokeDashoffset = circumference - (circumference * pct) / 100;
            return (
              <div
                id="quiz-timer-badge"
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                  isTimerLow
                    ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                    : 'bg-[#FAF5ED] text-[#8C6B38] border-[#E6DCC8]'
                }`}
                title={`Qolgan vaqt: ${pct.toFixed(0)}%`}
              >
                <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 20 20">
                    <circle
                      cx="10"
                      cy="10"
                      r="7.5"
                      className={`${isTimerLow ? 'stroke-rose-100' : 'stroke-stone-200/60'} fill-transparent`}
                      strokeWidth="2"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="7.5"
                      className={`fill-transparent transition-all duration-300 ${
                        isTimerLow ? 'stroke-rose-500' : 'stroke-[#8C6B38]'
                      }`}
                      strokeWidth="2"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <Clock className={`w-3 h-3 relative z-10 ${isTimerLow ? 'text-rose-600' : 'text-[#8C6B38]'}`} />
                </div>
                <span>
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </span>
              </div>
            );
          })()}

          {/* Flag button */}
          <button
            id="flag-question-btn"
            onClick={() => onToggleFlag(currentQ.id)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
              isFlagged
                ? 'bg-[#FAF5ED] text-[#8C6B38] border-[#8C6B38]'
                : 'bg-white text-[#595248] border-[#DDD7CD] hover:text-[#8C6B38] hover:border-[#8C6B38]'
            }`}
            title="Qayta ko'rib chiqish uchun belgilash"
          >
            <Flag className={`w-4 h-4 ${isFlagged ? 'fill-[#8C6B38] text-[#8C6B38]' : ''}`} />
            <span className="hidden sm:inline">
              {isFlagged ? 'Belgilangan' : 'Belgilash'}
            </span>
          </button>
        </div>
      </div>

      <div>
        {/* Main Question Box */}
        <div className="space-y-6">
          <div className="bg-white border border-[#DDD7CD] rounded-2xl p-6 sm:p-8 shadow-2xs">
            {/* Question text */}
            <div className="mb-6">
              <FormattedQuestionText question={currentQ.question} />
            </div>

            {/* Options List / Custom Question UI depending on Type */}
            <div className="space-y-4">
              {currentQ.questionType === 'ochiq' ? (
                // 1. OCHIQ TEST (SHORT ANSWER) LAYOUT
                <div className="space-y-4 p-1">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#736B60]">
                    Javobingizni quyidagi maydonga yozing (Masalan: 40, 3, Sanksiya, 1, 26):
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      disabled={isPracticeMode && selectedOption !== undefined && selectedOption !== ''}
                      value={typedAnswer}
                      onChange={(e) => setTypedAnswer(e.target.value)}
                      placeholder="Aniq javobingizni kiriting..."
                      className="flex-1 p-4 rounded-xl border border-[#DDD7CD] focus:border-[#8C6B38] focus:ring-1 focus:ring-[#8C6B38] bg-white text-[#1E1A16] font-medium text-base sm:text-lg transition-all shadow-3xs"
                    />
                    {(!selectedOption || selectedOption === '') && (
                      <button
                        onClick={() => {
                          if (typedAnswer.trim()) {
                            onSelectOption(currentQ.id, typedAnswer.trim());
                          }
                        }}
                        className="px-6 py-4 rounded-xl bg-[#8C6B38] text-white hover:bg-[#785B2F] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Tasdiqlash</span>
                      </button>
                    )}
                  </div>
                  
                  {isPracticeMode && selectedOption !== undefined && selectedOption !== '' && (
                    <div className="mt-4 animate-fadeIn">
                      {isQuestionCorrect(currentQ, String(selectedOption)) ? (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>To'g'ri javob kiritildi!</span>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 space-y-2 font-medium">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                            <span>Kiritilgan javob noto'g'ri.</span>
                          </div>
                          <p className="text-sm font-semibold text-rose-800 ml-7">
                            To'g'ri javob: <span className="underline font-bold text-rose-900">{currentQ.correctAnswerText}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : currentQ.questionType === 'muvofiqlik' ? (
                // 2. MUVOFIQLIKNI ANIQLASH (MATCHING) LAYOUT
                <div className="space-y-6">
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#DDD7CD] space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8C6B38]">
                      Taqdim etilgan moslashtirish ro'yxati:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#736B60] block">Chap tomondagilar (Tushunchalar):</span>
                        {(currentQ.matchingPairsLeft || []).map((item, i) => (
                          <div key={`left-${i}`} className="p-2.5 rounded-lg bg-white border border-[#E5E0D8] text-xs sm:text-sm font-medium">
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#736B60] block">O'ng tomondagilar (Yuridik ta'riflar):</span>
                        {(currentQ.matchingPairsRight || []).map((item, i) => (
                          <div key={`right-${i}`} className="p-2.5 rounded-lg bg-white border border-[#E5E0D8] text-xs sm:text-sm text-[#443E38]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#736B60]">
                      Har bir raqam uchun tegishli harfni tanlab moslashtiring:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(currentQ.matchingPairsLeft || []).map((item, i) => {
                        const num = String(i + 1);
                        const currentSelected = matches[num] || '';
                        const isMatchDisabled = isPracticeMode && selectedOption !== undefined && selectedOption !== '';
                        
                        const handleSelectMatch = (val: string) => {
                          if (isMatchDisabled) return;
                          const nextMatches = { ...matches, [num]: val };
                          setMatches(nextMatches);
                          
                          // Build string like "1-b, 2-a, 3-d, 4-c"
                          const combined = (currentQ.matchingPairsLeft || []).map((_, idx) => {
                            const n = String(idx + 1);
                            const chosen = n === num ? val : (matches[n] || '');
                            return `${n}-${chosen}`;
                          }).join(', ');
                          
                          onSelectOption(currentQ.id, combined);
                        };

                        return (
                          <div key={`match-row-${i}`} className="flex items-center space-x-3 p-3 rounded-xl bg-white border border-[#DDD7CD] shadow-3xs">
                            <span className="w-8 h-8 rounded-lg bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center font-bold text-xs sm:text-sm text-[#8C6B38] shrink-0">
                              {num}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-[#1E1A16] flex-1 truncate" title={item}>
                              {item.replace(/^[0-9]+\)\s*/, '')}
                            </span>
                            <select
                              disabled={isMatchDisabled}
                              value={currentSelected}
                              onChange={(e) => handleSelectMatch(e.target.value)}
                              className="p-2 rounded-lg border border-[#DDD7CD] focus:border-[#8C6B38] text-xs sm:text-sm font-bold bg-white text-[#1E1A16] cursor-pointer outline-none transition-colors"
                            >
                              <option value="">— Tanlang —</option>
                              {['a', 'b', 'c', 'd'].map(letter => (
                                <option key={letter} value={letter}>{letter.toUpperCase()}</option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {isPracticeMode && selectedOption !== undefined && selectedOption !== '' && (
                    <div className="animate-fadeIn">
                      {isQuestionCorrect(currentQ, String(selectedOption)) ? (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>To'g'ri moslashtirildi!</span>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 space-y-2 font-medium">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                            <span>Moslashtirishda xatolar bor.</span>
                          </div>
                          <p className="text-sm font-semibold text-rose-800 ml-7">
                            To'g'ri moslashtirish: <span className="underline uppercase font-bold text-rose-900">{currentQ.correctAnswerText}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // 3. CLASSIC MULTIPLE CHOICE (YOPIQ / KAZUS) LAYOUT
                <div className="space-y-3">
                  {currentQ.options.map((optText, index) => {
                    const isSelected = selectedOption === index;
                    const isCorrect = currentQ.correctIndex === index;

                    let btnStyles =
                      'bg-white hover:bg-[#FAF8F5] border-[#DDD7CD] text-[#1E1A16] hover:border-[#8C6B38]';
                    let letterBadgeStyles =
                      'bg-[#FAF8F5] text-[#595248] border-[#DDD7CD]';

                    if (isSelected) {
                      btnStyles =
                        'bg-[#FAF5ED] border-[#8C6B38] text-[#1E1A16] ring-1 ring-[#8C6B38] shadow-2xs';
                      letterBadgeStyles =
                        'bg-[#8C6B38] text-white border-[#8C6B38] font-bold';
                    }

                    // In practice mode, if student answered and wants to see correctness
                    if (isPracticeMode && selectedOption !== undefined && (showExplanation || isSelected)) {
                      if (isCorrect) {
                        btnStyles =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-2xs';
                        letterBadgeStyles =
                          'bg-emerald-600 text-white border-emerald-600 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnStyles =
                          'bg-rose-50 border-rose-500 text-rose-950 shadow-2xs';
                        letterBadgeStyles =
                          'bg-rose-600 text-white border-rose-600 font-bold';
                      }
                    }

                    return (
                      <button
                        key={`option-${currentQ.id}-${index}`}
                        id={`option-btn-${index}`}
                        onClick={() => onSelectOption(currentQ.id, index)}
                        className={`w-full p-4 sm:p-4.5 rounded-xl border text-left flex items-start space-x-3.5 transition-all duration-150 cursor-pointer ${btnStyles}`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5 transition-colors ${letterBadgeStyles}`}
                        >
                          {OPTION_LETTERS[index]}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed flex-1">
                          {optText}
                        </span>
                        {isPracticeMode && selectedOption !== undefined && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        )}
                        {isPracticeMode && selectedOption !== undefined && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Practice Mode: Explanation Box */}
            {isPracticeMode && (
              <div className="mt-6 pt-4 border-t border-[#EAE5DD]">
                {!showExplanation ? (
                  <button
                    id="show-explanation-btn"
                    onClick={() => setShowExplanation(true)}
                    className="flex items-center space-x-2 text-xs font-bold text-[#8C6B38] hover:text-[#78592c] py-1.5 transition-colors uppercase tracking-wider"
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>Huquqiy asos va to‘g‘ri javob izohini ko‘rish</span>
                  </button>
                ) : (
                  <div
                    id="explanation-box"
                    className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 text-emerald-950 animate-fadeIn space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>
                          To‘g‘ri javob: Variant {OPTION_LETTERS[currentQ.correctIndex]}
                        </span>
                      </span>
                      {cleanLegalBasis(currentQ.legalBasis) && (
                        <span className="text-[11px] bg-white text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-300 font-medium">
                          {cleanLegalBasis(currentQ.legalBasis)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#2D241E]">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Nav: Prev / Next */}
          <div className="flex items-center justify-between gap-4">
            <button
              id="prev-question-btn"
              onClick={onPrev}
              disabled={session.currentIndex === 0}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors ${
                session.currentIndex === 0
                  ? 'bg-neutral-100 border-[#DDD7CD] text-[#736B60]/50 cursor-not-allowed'
                  : 'bg-white border-[#DDD7CD] text-[#1E1A16] hover:border-[#8C6B38] hover:text-[#8C6B38]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Oldingi</span>
            </button>

            <span className="text-xs text-[#736B60] font-medium">
              Javob berildi: {totalAnswered} / {totalQuestions}
            </span>

            {session.currentIndex === totalQuestions - 1 ? (
              <button
                id="finish-quiz-bottom-btn"
                onClick={() => setShowConfirmFinish(true)}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs transition-all active:scale-95"
              >
                <span>Imtihonni yakunlash</span>
                <Send className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="next-question-btn"
                onClick={onNext}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs transition-all active:scale-95"
              >
                <span>Keyingi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Finish Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-[#DDD7CD] rounded-2xl p-6 max-w-md w-full text-[#1E1A16] shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38] mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1A16] mb-2">
              Testni yakunlashni tasdiqlaysizmi?
            </h3>
            <p className="text-xs sm:text-sm text-[#595248] mb-4 leading-relaxed">
              Jami savollar: <strong className="text-[#1E1A16]">{totalQuestions} ta</strong>
              <br />
              Belgilangan: <strong className="text-emerald-700">{totalAnswered} ta</strong>
              <br />
              Belgilanmagan:{' '}
              <strong className={unansweredCount > 0 ? 'text-rose-600' : 'text-[#736B60]'}>
                {unansweredCount} ta
              </strong>
            </p>
            {unansweredCount > 0 && (
              <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 p-2.5 rounded-lg mb-6">
                Eslatma: Belgilanmagan savollar noto‘g‘ri javob deb hisoblanadi.
              </p>
            )}
            <div className="flex items-center justify-end space-x-3">
              <button
                id="cancel-finish-modal-btn"
                onClick={() => setShowConfirmFinish(false)}
                className="px-4 py-2 rounded-xl bg-[#FAF5ED] hover:bg-[#F2EDE4] text-xs font-semibold uppercase tracking-wider text-[#1E1A16] border border-[#DDD7CD]"
              >
                Davom etish
              </button>
              <button
                id="confirm-finish-modal-btn"
                onClick={() => {
                  setShowConfirmFinish(false);
                  onFinishQuiz();
                }}
                className="px-4 py-2 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-xs font-bold uppercase tracking-wider text-white shadow-2xs"
              >
                Ha, natijani ko‘rish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-[#DDD7CD] rounded-2xl p-6 max-w-md w-full text-[#1E1A16] shadow-2xl">
            <h3 className="text-lg font-bold text-[#1E1A16] mb-2">Testdan chiqish</h3>
            <p className="text-xs sm:text-sm text-[#595248] mb-6 leading-relaxed">
              Hozir chiqib ketsangiz, joriy javoblaringiz saqlanmasligi mumkin. Haqiqatan ham
              bosh sahifaga qaytmoqchimisiz?
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                id="cancel-exit-modal-btn"
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 rounded-xl bg-[#FAF5ED] hover:bg-[#F2EDE4] text-xs font-semibold uppercase tracking-wider text-[#1E1A16] border border-[#DDD7CD]"
              >
                Bekor qilish
              </button>
              <button
                id="confirm-exit-modal-btn"
                onClick={() => {
                  setShowExitConfirm(false);
                  onExitQuiz();
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-bold uppercase tracking-wider text-white shadow-2xs"
              >
                Ha, chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
