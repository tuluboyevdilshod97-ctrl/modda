import React from 'react';
import {
  BarChart3,
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  Trash2,
  Calendar,
} from 'lucide-react';
import { QuizResultHistory } from '../types';
import { KnowledgeGrowthChart } from './KnowledgeGrowthChart';

export function formatShortTopicTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/O‘zbekiston Respublikasi Konstitutsiyasi/gi, 'Konstitutsiya (2023)')
    .replace(/O'zbekiston Respublikasi Konstitutsiyasi/gi, 'Konstitutsiya (2023)')
    .replace(/O‘zbekiston Respublikasi Fuqarolik kodeksi/gi, 'Fuqarolik huquqi')
    .replace(/Fuqarolik huquqi va bitimlar/gi, 'Fuqarolik huquqi')
    .replace(/Fuqarolik kodeksi/gi, 'Fuqarolik huquqi')
    .replace(/FQ — Fuqarolik huquqi/gi, 'Fuqarolik huquqi')
    .replace(/FQ \(Fuqarolik\)/gi, 'Fuqarolik huquqi')
    .replace(/Yangi Mehnat kodeksi/gi, 'Mehnat huquqi')
    .replace(/Mehnat kodeksi/gi, 'Mehnat huquqi')
    .replace(/MK — Mehnat huquqi/gi, 'Mehnat huquqi')
    .replace(/MK \(Mehnat\)/gi, 'Mehnat huquqi')
    .replace(/Jinoyat huquqi va javobgarlik/gi, 'Jinoyat huquqi')
    .replace(/Jinoyat kodeksi/gi, 'Jinoyat huquqi')
    .replace(/JK — Jinoyat huquqi/gi, 'Jinoyat huquqi')
    .replace(/JK \(Jinoyat\)/gi, 'Jinoyat huquqi')
    .replace(/Oila va Ma'muriy huquq/gi, 'Oila huquqi')
    .replace(/OK \/ MJtK/gi, 'Oila huquqi')
    .replace(/OK — Oila huquqi/gi, 'Oila huquqi')
    .replace(/OK \(Oila\)/gi, 'Oila huquqi')
    .replace(/Oila kodeksi/gi, 'Oila huquqi')
    .replace(/MJtK — Ma'muriy huquq/gi, "Ma'muriy (MJtK)")
    .replace(/Ma'muriy javobgarlik to‘g‘risidagi kodeks/gi, "Ma'muriy (MJtK)")
    .replace(/Ma'muriy javobgarlik/gi, "Ma'muriy (MJtK)")
    .replace(/MJtK \(Ma’muriy\)/gi, "Ma'muriy (MJtK)")
    .replace(/DHN — Davlat va huquq nazariyasi/gi, 'Davlat va huquq nazariyasi')
    .replace(/DHN \(Nazariya\)/gi, 'Davlat va huquq nazariyasi');
}

interface TahlilMarkaziPanelProps {
  statsDisplay: {
    pct: number;
    correct: number;
    wrong: number;
    ball: string;
  };
  history: QuizResultHistory[];
  onClearHistory?: () => void;
}

export const TahlilMarkaziPanel: React.FC<TahlilMarkaziPanelProps> = ({
  statsDisplay,
  history,
  onClearHistory,
}) => {
  // Calculated user statistics from history
  const totalQuizzes = history.length;
  const totalCorrect = history.reduce((acc, h) => acc + h.correctAnswers, 0);
  const totalQuestions = history.reduce((acc, h) => acc + h.totalQuestions, 0);
  const avgPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : statsDisplay.pct;
  const avgScore = totalQuizzes > 0
    ? (history.reduce((acc, h) => acc + h.scoreBall, 0) / totalQuizzes).toFixed(1)
    : statsDisplay.ball;

  return (
    <section
      id="tahlil-markazi-section"
      className="w-full max-w-full bg-[#FAF8F5] border border-[#EAE5DD] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 scroll-mt-24 transition-all duration-300"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#EAE5DD] pb-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#8C6B38]/10 text-[#8C6B38] flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-[#736B60] font-bold">
              [03] TAHLIL MARKAZI
            </h2>
            <p className="text-[10px] sm:text-[11px] text-[#A39A8E] font-medium">
              Sizning umumiy o'zlashtirish ko'rsatkichlaringiz va o'sish dinamikangiz tahlili
            </p>
          </div>
        </div>

        {history.length > 0 && onClearHistory && (
          <button
            id="clear-stats-btn-bottom"
            onClick={onClearHistory}
            className="self-start sm:self-auto flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-rose-200 hover:border-rose-300 text-xs text-rose-600 hover:text-rose-700 bg-rose-50/50 hover:bg-rose-50 font-bold transition-all cursor-pointer active:scale-95"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Tarixni tozalash</span>
          </button>
        )}
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
        {/* Overall Percentage Card */}
        <div className="lg:col-span-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FAF5ED] to-[#F5ECE0] border border-[#E6DCC8] flex flex-col justify-center min-h-[120px] sm:min-h-[140px] shadow-2xs">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#736B60] font-bold mb-1">
            UMUMIY O'ZLASHTIRISH DARAJASI
          </span>
          <div className="font-syne text-4xl sm:text-5xl font-extrabold text-[#8C6B38] leading-none flex items-baseline gap-1">
            <span>{avgPercentage}%</span>
            <span className="text-[#736B60] font-medium font-sans inline-block w-[53.72px] h-[20px] text-[12.5px] leading-[18px]">o'rtacha</span>
          </div>
          <div className="w-full bg-[#E6DCC8] h-1.5 rounded-full mt-3 sm:mt-4 overflow-hidden">
            <div
              className="bg-[#8C6B38] h-full rounded-full transition-all duration-500"
              style={{ width: `${avgPercentage}%` }}
            />
          </div>
        </div>

        {/* 4 Supporting Metrics Cards inside a Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#EAE5DD] flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[9px] sm:text-[10px] text-[#736B60] block mb-0.5 sm:mb-1 uppercase tracking-wider font-bold">SINOVLAR SONI</span>
              <span className="text-xl sm:text-2xl font-black text-[#1E1A16]">{totalQuizzes}</span>
            </div>
            <span className="text-[#A39A8E] text-xs block mt-1 sm:mt-2">
              marta ishlangan
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#EAE5DD] flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[9px] sm:text-[10px] text-[#736B60] block mb-0.5 sm:mb-1 uppercase tracking-wider font-bold">TO'G'RI JAVOBLAR</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700">{totalCorrect}</span>
            </div>
            <span className="text-emerald-700/80 text-xs font-semibold block mt-1 sm:mt-2">
              jami yechilgan
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#EAE5DD] flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[9px] sm:text-[10px] text-[#736B60] block mb-0.5 sm:mb-1 uppercase tracking-wider font-bold">O'RTACHA BALL</span>
              <span className="text-xl sm:text-2xl font-black text-[#8C6B38]">{avgScore}</span>
            </div>
            <span className="text-[#A39A8E] text-xs block mt-1 sm:mt-2">
              maksimal 93.0 b.
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#EAE5DD] flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[9px] sm:text-[10px] text-[#736B60] block mb-0.5 sm:mb-1 uppercase tracking-wider font-bold">SINOV SAVOLLARI</span>
              <span className="text-xl sm:text-2xl font-black text-[#1E1A16]">{totalQuestions}</span>
            </div>
            <span className="text-[#A39A8E] text-xs block mt-1 sm:mt-2">
              jami taqdim etilgan
            </span>
          </div>
        </div>
      </div>

      {/* Visual Analytics and Recent History Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 pt-1">
        {/* Left Side: Growth Comparison Chart */}
        <div className="lg:col-span-7 flex flex-col min-w-0">
          <KnowledgeGrowthChart history={history} />
        </div>

        {/* Right Side: Scrollable Recent History List */}
        <div className="lg:col-span-5 flex flex-col h-full min-w-0">
          <div className="p-4 rounded-xl bg-white border border-[#EAE5DD] shadow-2xs flex flex-col h-full min-h-[245px]">
            <h4 className="text-xs font-bold text-[#1E1A16] uppercase tracking-wider mb-3">
              Oxirgi sinovlar tarixi
            </h4>

            {history.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#DDD7CD] rounded-xl bg-[#FAF8F5]">
                <Award className="w-8 h-8 text-[#8C6B38] mb-1.5 opacity-60" />
                <p className="text-[11px] font-bold text-[#1E1A16]">Hali hech qanday test topshirilmagan</p>
                <p className="text-[10px] text-[#736B60] max-w-[200px] mt-0.5">
                  Tepada mavjud bo'lgan testlarni yechishni boshlang va o'zlashtirish ko'rsatkichlaringizni kuzating!
                </p>
              </div>
            ) : (
              <div className="flex-1 space-y-2.5 overflow-y-auto pr-1 max-h-[175px] md:max-h-[185px]">
                {history.map((h, idx) => {
                  const minutes = Math.floor(h.timeSpentSeconds / 60);
                  const seconds = h.timeSpentSeconds % 60;
                  const formattedTitle = formatShortTopicTitle(h.topicTitle);
                  const isExam = h.mode === 'dtm_exam';

                  return (
                    <div
                      key={`bottom-hist-${h.id}-${idx}`}
                      className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] hover:border-[#8C6B38] transition-colors flex items-center justify-between gap-3 shadow-3xs"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-1.5 mb-1">
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase shrink-0 ${
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
                        <div className="flex items-center space-x-2 text-[10px] text-[#736B60]">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-[#736B60]" />
                            <span>{h.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-[#736B60]" />
                            <span>
                              {minutes > 0 ? `${minutes}d ` : ''}
                              {seconds}s
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="flex items-center space-x-1.5 justify-end">
                          <span className="flex items-center space-x-0.5 text-[11px] text-emerald-700 font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{h.correctAnswers}</span>
                          </span>
                          <span className="flex items-center space-x-0.5 text-[11px] text-rose-600 font-semibold">
                            <XCircle className="w-3 h-3" />
                            <span>{h.wrongAnswers}</span>
                          </span>
                        </div>
                        <div className="text-xs font-bold text-[#8C6B38] mt-0.5">
                          {h.scoreBall > 0 ? `${h.scoreBall} b.` : `${h.scorePercentage}%`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
