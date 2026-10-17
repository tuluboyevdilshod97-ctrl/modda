import React, { useState } from 'react';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  ArrowLeft,
  Filter,
  Lightbulb,
  AlertCircle,
  Share2,
  BookOpen
} from 'lucide-react';
import { Question, QuizSession } from '../types';
import { cleanQuestionText, cleanSourceBadge, cleanLegalBasis, isQuestionCorrect } from '../utils/questionFormatter';
import { FormattedQuestionText } from './FormattedQuestionText';

interface ResultViewProps {
  session: QuizSession;
  onRestart: () => void;
  onGoHome: () => void;
  onStartMistakesPractice: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const ResultView: React.FC<ResultViewProps> = ({
  session,
  onRestart,
  onGoHome,
  onStartMistakesPractice
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct'>('all');

  const total = session.questions.length;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  session.questions.forEach((q) => {
    const userChoice = session.userAnswers[q.id];
    if (userChoice === undefined || userChoice === '') {
      unansweredCount++;
    } else if (isQuestionCorrect(q, userChoice)) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  // DTM standard: each question carries 3.1 points (out of ~93 for 30 questions)
  const dtmScore = (correctCount * 3.1).toFixed(1);
  const maxDtmScore = (total * 3.1).toFixed(1);

  // Status message
  let statusBadge = {
    title: "Ko‘proq tayyorlanish kerak",
    color: 'text-rose-800 bg-rose-50 border-rose-300',
    desc: 'Savollar ustida yana bir bor ishlab, qonun moddalarini qayta takrorlang.'
  };

  if (percentage >= 85) {
    statusBadge = {
      title: "A’lo daraja — Davlat Granti ehtimoli yuqori!",
      color: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      desc: 'Huquqshunoslik fanidan bilimingiz mustahkam. Shu sur’atda davom eting!'
    };
  } else if (percentage >= 65) {
    statusBadge = {
      title: "Yaxshi natija — To‘lov-shartnoma ehtimoli",
      color: 'text-sky-800 bg-sky-50 border-sky-300',
      desc: 'Yaxshi natija, ammo grant uchun bir nechta xatolar ustida ishlash tavsiya etiladi.'
    };
  } else if (percentage >= 45) {
    statusBadge = {
      title: "Qoniqarli — Takrorlash tavsiya etiladi",
      color: 'text-amber-800 bg-amber-50 border-amber-300',
      desc: 'Ayniqsa yoshlar va muddatlar bilan bog‘liq mezonlarni diqqat bilan o‘rganing.'
    };
  }

  // Filtered questions
  const filteredQuestions = session.questions.filter((q) => {
    const userChoice = session.userAnswers[q.id];
    const isCorrect = isQuestionCorrect(q, userChoice);
    if (filterMode === 'correct') return isCorrect;
    if (filterMode === 'wrong') return !isCorrect;
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-[#F7F5F0] max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 py-8 space-y-8 animate-fadeIn text-[#1E1A16] relative z-10">
      {/* Top Banner Card */}
      <div className="bg-white border border-[#DDD7CD] rounded-2xl p-6 sm:p-8 shadow-2xs relative overflow-hidden text-center">
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38] shadow-2xs">
            <Trophy className="w-8 h-8" />
          </div>

          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 bg-[#FAF5ED] text-[#8C6B38] border-[#E6DCC8]"
          >
            {statusBadge.title}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E1A16] mb-2 tracking-tight">
            {correctCount} <span className="text-xl text-[#736B60] font-normal">/ {total} to‘g‘ri javob</span>
          </h1>

          <p className="text-sm text-[#595248] max-w-lg mx-auto mb-6 leading-relaxed">
            {statusBadge.desc}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-8">
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD]">
              <span className="text-xs text-[#736B60] block mb-0.5 uppercase tracking-wider font-semibold">Aniqlik</span>
              <span className="text-xl font-bold text-[#8C6B38]">{percentage}%</span>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs text-emerald-800 block mb-0.5 uppercase tracking-wider font-semibold">To‘g‘ri</span>
              <span className="text-xl font-bold text-emerald-800">{correctCount} ta</span>
            </div>
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
              <span className="text-xs text-rose-800 block mb-0.5 uppercase tracking-wider font-semibold">Xato</span>
              <span className="text-xl font-bold text-rose-800">{wrongCount} ta</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD]">
              <span className="text-xs text-[#736B60] block mb-0.5 uppercase tracking-wider font-semibold">Belgilanmagan</span>
              <span className="text-xl font-bold text-[#1E1A16]">{unansweredCount} ta</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="result-restart-btn"
              onClick={onRestart}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-white font-bold text-xs uppercase tracking-wider shadow-2xs transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" />
              <span>Qaytadan topshirish</span>
            </button>

            {wrongCount + unansweredCount > 0 && (
              <button
                id="result-mistakes-btn"
                onClick={onStartMistakesPractice}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white hover:bg-rose-50 text-rose-700 border border-rose-300 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
              >
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Xatolar ustida ishlash ({wrongCount + unansweredCount})</span>
              </button>
            )}

            <button
              id="result-gohome-btn"
              onClick={onGoHome}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#1E1A16] font-bold text-xs uppercase tracking-wider border border-[#DDD7CD] transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Bosh sahifa</span>
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#1E1A16]">Savollarning batafsil tahlili</h2>
            <p className="text-xs text-[#736B60]">
              Qonun moddalari va to‘g‘ri javoblar izohini o‘rganing
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-1.5 bg-[#FAF5ED] border border-[#DDD7CD] p-1 rounded-xl">
            <button
              id="filter-all-btn"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                filterMode === 'all'
                  ? 'bg-[#8C6B38] text-white shadow-2xs'
                  : 'text-[#595248] hover:text-[#1E1A16]'
              }`}
            >
              Barchasi ({total})
            </button>
            <button
              id="filter-wrong-btn"
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                filterMode === 'wrong'
                  ? 'bg-rose-600 text-white shadow-2xs'
                  : 'text-[#595248] hover:text-rose-600'
              }`}
            >
              Xatolar ({wrongCount + unansweredCount})
            </button>
            <button
              id="filter-correct-btn"
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'text-[#595248] hover:text-emerald-700'
              }`}
            >
              To‘g‘ri ({correctCount})
            </button>
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userChoice = session.userAnswers[q.id];
            const isCorrect = isQuestionCorrect(q, userChoice);
            const isUnanswered = userChoice === undefined || userChoice === '';

            return (
              <div
                key={`rev-${q.id}-${idx}`}
                id={`review-item-${q.id}`}
                className={`p-5 rounded-2xl border transition-all ${
                  isCorrect
                    ? 'bg-white border-emerald-300 shadow-2xs'
                    : 'bg-white border-rose-300 shadow-2xs'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-[#EAE5DD]">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`flex items-center space-x-1 text-xs font-bold px-2.5 py-0.5 rounded-full border uppercase ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>To‘g‘ri</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" />
                          <span>{isUnanswered ? 'Belgilanmagan' : 'Xato'}</span>
                        </>
                      )}
                    </span>
                  </div>
                  {cleanLegalBasis(q.legalBasis) && (
                    <span className="text-[11px] font-semibold text-[#8C6B38] bg-[#FAF5ED] px-2.5 py-0.5 rounded-md border border-[#E6DCC8]">
                      {cleanLegalBasis(q.legalBasis)}
                    </span>
                  )}
                </div>

                {/* Question text */}
                <div className="mb-4">
                  <FormattedQuestionText question={q.question} className="text-sm sm:text-base font-semibold" />
                </div>

                {/* Options Review / Custom Answers review depending on type */}
                <div className="space-y-2 mb-4">
                  {q.questionType === 'ochiq' ? (
                    <div className="space-y-2">
                      <div className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between ${
                        isCorrect 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium' 
                          : 'bg-rose-50 border-rose-300 text-rose-950 font-medium'
                      }`}>
                        <span>Sizning javobingiz: <strong className="underline ml-1">{String(userChoice || "Kiritilmagan")}</strong></span>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                          isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'
                        }`}>
                          {isCorrect ? 'To‘g‘ri' : 'Noto‘g‘ri'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 text-xs sm:text-sm font-semibold">
                          To‘g‘ri javob: <span className="underline font-bold text-emerald-800 ml-1">{q.correctAnswerText}</span>
                        </div>
                      )}
                    </div>
                  ) : q.questionType === 'muvofiqlik' ? (
                    <div className="space-y-2">
                      <div className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between ${
                        isCorrect 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium' 
                          : 'bg-rose-50 border-rose-300 text-rose-950 font-medium'
                      }`}>
                        <span>Sizning moslashtirishingiz: <strong className="underline uppercase ml-1">{String(userChoice || "Kiritilmagan")}</strong></span>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                          isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'
                        }`}>
                          {isCorrect ? 'To‘g‘ri' : 'Noto‘g‘ri'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 text-xs sm:text-sm font-semibold">
                          To‘g‘ri moslashtirish: <span className="underline uppercase font-bold text-emerald-800 ml-1">{q.correctAnswerText}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    q.options.map((opt, optIdx) => {
                      const isUserPick = userChoice === optIdx;
                      const isTheCorrectOne = q.correctIndex === optIdx;

                      let rowStyle = 'bg-[#FAF8F5] border-[#EAE5DD] text-[#595248]';
                      let letterStyle = 'bg-white text-[#736B60] border border-[#DDD7CD]';

                      if (isTheCorrectOne) {
                        rowStyle =
                          'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium';
                        letterStyle = 'bg-emerald-600 text-white font-bold';
                      } else if (isUserPick && !isCorrect) {
                        rowStyle =
                          'bg-rose-50 border-rose-300 text-rose-950 font-medium';
                        letterStyle = 'bg-rose-600 text-white font-bold';
                      }

                      return (
                        <div
                          key={`rev-opt-${q.id}-${optIdx}`}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start space-x-3 ${rowStyle}`}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 mt-0.5 ${letterStyle}`}
                          >
                            {OPTION_LETTERS[optIdx]}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isTheCorrectOne && (
                            <span className="text-xs font-bold text-emerald-700 shrink-0">
                              To‘g‘ri javob
                            </span>
                          )}
                          {isUserPick && !isTheCorrectOne && (
                            <span className="text-xs font-bold text-rose-700 shrink-0">
                              Sizning javobingiz
                            </span>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Legal Explanation - faqat xato yoki javobsiz qoldirilgan savollar uchun ko'rsatiladi */}
                {!isCorrect && (
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-start space-x-3 text-xs sm:text-sm text-[#2D241E]">
                    <Lightbulb className="w-4 h-4 text-[#8C6B38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#8C6B38] font-bold uppercase block mb-0.5">Sharh va huquqiy asos:</strong>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
