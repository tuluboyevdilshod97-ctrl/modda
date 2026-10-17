import React from 'react';
import { X, Award, CheckCircle2, XCircle, Clock, Trash2, TrendingUp, Calendar } from 'lucide-react';
import { QuizResultHistory } from '../types';
import { formatShortTopicTitle } from './TahlilMarkaziPanel';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: QuizResultHistory[];
  onClearHistory: () => void;
  onDeleteHistoryItem?: (id: string) => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  history,
  onClearHistory,
  onDeleteHistoryItem
}) => {
  if (!isOpen) return null;

  const totalQuizzes = history.length;
  const totalCorrect = history.reduce((acc, h) => acc + h.correctAnswers, 0);
  const totalQuestions = history.reduce((acc, h) => acc + h.totalQuestions, 0);
  const avgPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const avgScore = totalQuizzes > 0
    ? (history.reduce((acc, h) => acc + h.scoreBall, 0) / totalQuizzes).toFixed(1)
    : '0.0';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn text-[#1E1A16]">
      <div
        id="stats-modal"
        className="relative w-full max-w-2xl bg-white border border-[#DDD7CD] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-[#1E1A16]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE5DD]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#1E1A16]">Mening Natijalarim & Statistika</h2>
              <p className="text-xs text-[#736B60]">Topshirilgan testlar va o‘zlashtirish ko‘rsatkichlari</p>
            </div>
          </div>
          <button
            id="close-stats-btn"
            onClick={onClose}
            className="p-2 text-[#736B60] hover:text-[#1E1A16] rounded-lg hover:bg-[#FAF5ED] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] text-center">
              <span className="text-xs text-[#736B60] block mb-1 uppercase tracking-wider font-semibold">Sinovlar soni</span>
              <span className="text-2xl font-bold text-[#1E1A16]">{totalQuizzes}</span>
              <span className="text-[10px] text-[#736B60] block mt-1">marta ishlangan</span>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] text-center">
              <span className="text-xs text-[#736B60] block mb-1 uppercase tracking-wider font-semibold">O‘rtacha aniqlik</span>
              <span className={`text-2xl font-bold ${avgPercentage >= 70 ? 'text-emerald-700' : 'text-[#8C6B38]'}`}>
                {avgPercentage}%
              </span>
              <span className="text-[10px] text-[#736B60] block mt-1">to‘g‘ri javoblar</span>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] text-center">
              <span className="text-xs text-[#736B60] block mb-1 uppercase tracking-wider font-semibold">O‘rtacha ball</span>
              <span className="text-2xl font-bold text-[#8C6B38]">{avgScore}</span>
              <span className="text-[10px] text-[#736B60] block mt-1">maks. 93.0 ball</span>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] text-center">
              <span className="text-xs text-[#736B60] block mb-1 uppercase tracking-wider font-semibold">Jami savollar</span>
              <span className="text-2xl font-bold text-[#1E1A16]">{totalQuestions}</span>
              <span className="text-[10px] text-emerald-700 font-semibold block mt-1">{totalCorrect} to‘g‘ri</span>
            </div>
          </div>

          {/* History list */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#1E1A16] uppercase tracking-wider">Oxirgi sinovlar tarixi</h3>
              {history.length > 0 && (
                <button
                  id="clear-stats-btn"
                  onClick={onClearHistory}
                  className="flex items-center space-x-1 text-xs text-rose-600 hover:text-rose-700 font-medium transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Tarixni tozalash</span>
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <div className="text-center py-10 rounded-xl bg-[#FAF8F5] border border-dashed border-[#DDD7CD] text-[#736B60]">
                <Award className="w-8 h-8 mx-auto mb-2 text-[#8C6B38]" />
                <p className="text-sm font-medium">Hali hech qanday test topshirilmagan.</p>
                <p className="text-xs text-[#736B60] mt-1">
                  Imtihon sinovini yoki mavzulashtirilgan mashqlarni boshlang!
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {history.map((h, idx) => {
                  const minutes = Math.floor(h.timeSpentSeconds / 60);
                  const seconds = h.timeSpentSeconds % 60;
                  const formattedTitle = formatShortTopicTitle(h.topicTitle);
                  const isExam = h.mode === 'dtm_exam';

                  return (
                    <div
                      key={`hist-${h.id}-${idx}`}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] hover:border-[#8C6B38] transition-colors flex items-center justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2 mb-0.5">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase ${
                              isExam
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-[#FAF5ED] text-[#8C6B38] border-[#E6DCC8]'
                            }`}
                          >
                            {isExam ? 'Imtihon' : 'Mashq'}
                          </span>
                          <span className="text-xs font-semibold text-[#1E1A16] truncate" title={h.topicTitle}>
                            {formattedTitle}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-[11px] text-[#736B60]">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-[#736B60]" />
                            <span>{h.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-[#736B60]" />
                            <span>
                              {minutes > 0 ? `${minutes} daq ` : ''}
                              {seconds} son
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="flex items-center space-x-2 justify-end">
                          <span className="flex items-center space-x-0.5 text-xs text-emerald-700 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{h.correctAnswers}</span>
                          </span>
                          <span className="flex items-center space-x-0.5 text-xs text-rose-600 font-semibold">
                            <XCircle className="w-3.5 h-3.5" />
                            <span>{h.wrongAnswers}</span>
                          </span>
                        </div>
                        <div className="text-xs font-bold text-[#8C6B38] mt-0.5">
                          {h.scoreBall > 0 ? `${h.scoreBall} ball` : `${h.scorePercentage}%`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#EAE5DD] flex justify-end">
          <button
            id="stats-close-footer-btn"
            onClick={onClose}
            className="px-4 py-2 bg-[#FAF5ED] hover:bg-[#F2EDE4] text-[#1E1A16] border border-[#DDD7CD] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
