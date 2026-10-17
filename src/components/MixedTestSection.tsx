import React, { useState } from 'react';
import {
  Shuffle,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  BookOpen,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Award,
  Flame,
  HelpCircle
} from 'lucide-react';
import { Question } from '../types';
import { USER_MIXED_QUESTIONS, USER_QUESTIONS_STATS, shuffleQuestions } from '../data/userQuestions';
import { EDULAW_QIYIN_QUESTIONS } from '../data/edulawQiyinQuestions';
import { DARSLIK_11_UMUMIY_QIYIN_QUESTIONS } from '../data/darslik11UmumiyQiyinQuestions';
import { cleanQuestionText, cleanLegalBasis } from '../utils/questionFormatter';

interface MixedTestSectionProps {
  onStartCustomQuiz: (questions: Question[], title: string, timeLimitSeconds: number) => void;
}

export const MixedTestSection: React.FC<MixedTestSectionProps> = ({ onStartCustomQuiz }) => {
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  // Filtered preview questions
  const filteredQuestions = USER_MIXED_QUESTIONS.filter((q) => {
    const matchesTopic = selectedTopicFilter === 'all' || q.topicId === selectedTopicFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options.some((opt) => opt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTopic && matchesSearch;
  });

  // Start 30 random questions test (standard DTM)
  const handleStart30Random = () => {
    const shuffled = shuffleQuestions(USER_MIXED_QUESTIONS);
    const selected = shuffled.slice(0, 30);
    onStartCustomQuiz(selected, "Aralash Test: 30 ta Tasodifiy Savol (DTM)", 40 * 60);
  };

  // Start 50 random questions test
  const handleStart50Random = () => {
    const shuffled = shuffleQuestions(USER_MIXED_QUESTIONS);
    const selected = shuffled.slice(0, 50);
    onStartCustomQuiz(selected, "Aralash Test: 50 ta Tasodifiy Savol (Intensiv)", 65 * 60);
  };

  // Start full 131 questions marathon
  const handleStartFullMarathon = () => {
    const shuffled = shuffleQuestions(USER_MIXED_QUESTIONS);
    onStartCustomQuiz(shuffled, "Aralash Test: To‘liq Marafon (131 ta Savol)", 150 * 60);
  };

  // Start Easy questions test
  const handleStartEasyQuiz = () => {
    const easy = shuffleQuestions(USER_MIXED_QUESTIONS.filter((q) => q.difficulty === 'oson'));
    const selected = easy.slice(0, 30);
    onStartCustomQuiz(selected, "Aralash Test: 🟢 Oson Savollar (30 ta)", 35 * 60);
  };

  // Start Hard questions test (including EDULAW and 11-sinf Umumiy hard questions)
  const handleStartHardQuiz = () => {
    const hard = shuffleQuestions([
      ...USER_MIXED_QUESTIONS.filter((q) => q.difficulty === 'qiyin'),
      ...EDULAW_QIYIN_QUESTIONS,
      ...DARSLIK_11_UMUMIY_QIYIN_QUESTIONS
    ]);
    const selected = hard.slice(0, 30);
    onStartCustomQuiz(selected, "Aralash Test: 🔴 Qiyin Savollar (30 ta)", 45 * 60);
  };

  // Start 11-sinf Umumiy Hard test (all 30 questions)
  const handleStart11UmumiyQuiz = () => {
    const shuffled = shuffleQuestions([...DARSLIK_11_UMUMIY_QIYIN_QUESTIONS]);
    onStartCustomQuiz(shuffled, "11-Sinf Huquq: Qiyin Darajadagi Umumiy Sinov (30 ta)", 45 * 60);
  };

  // Start filtered topic in random order
  const handleStartTopicRandom = (topicId: string, topicLabel: string) => {
    const topicList = USER_MIXED_QUESTIONS.filter((q) => q.topicId === topicId);
    const shuffled = shuffleQuestions(topicList);
    onStartCustomQuiz(
      shuffled,
      `Aralash Test: ${topicLabel} (${shuffled.length} ta random savol)`,
      shuffled.length * 90
    );
  };

  return (
    <section id="aralash-testlar-section" className="mb-12 scroll-mt-20">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#FAF8F5] border border-[#E3DED6] shadow-sm p-6 sm:p-8 text-[#2B251E]">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#FAF5ED] rounded-xl border border-[#E6DCC8] text-[#5C5042]">
                <Shuffle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E1A16]">
                    Aralash Testlar Bo‘limi
                  </h2>
                  <span className="bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Maxsus Bank
                  </span>
                </div>
                <p className="text-sm text-[#736B60] mt-0.5">
                  Siz taqdim etgan 131 ta saralangan va moddalar bilan tasdiqlangan savollar to‘plami
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats of Resorted Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 my-6">
            <button
              onClick={() => handleStartTopicRandom('davlat_huquq', 'DHN — Davlat va huquq nazariyasi')}
              className="bg-white hover:bg-[#F4F1EA] border border-[#DDD7CD] hover:border-[#5C5042] p-3 rounded-xl text-left transition-all group shadow-2xs"
            >
              <span className="text-xs text-[#736B60] group-hover:text-[#5C5042]">DHN — Davlat nazariyasi</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-[#8C8479]">Random ⚡</span>
              </div>
            </button>

            <button
              onClick={() => handleStartTopicRandom('mehnat', 'MK — Mehnat huquqi')}
              className="bg-white hover:bg-[#F4F1EA] border border-[#DDD7CD] hover:border-[#5C5042] p-3 rounded-xl text-left transition-all group shadow-2xs"
            >
              <span className="text-xs text-[#736B60] group-hover:text-[#5C5042]">MK — Mehnat huquqi</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-[#8C8479]">Random ⚡</span>
              </div>
            </button>

            <button
              onClick={() => handleStartTopicRandom('jinoyat', 'JK — Jinoyat huquqi')}
              className="bg-white hover:bg-[#F4F1EA] border border-[#DDD7CD] hover:border-[#5C5042] p-3 rounded-xl text-left transition-all group shadow-2xs"
            >
              <span className="text-xs text-[#736B60] group-hover:text-[#5C5042]">JK — Jinoyat huquqi</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-[#8C8479]">Random ⚡</span>
              </div>
            </button>

            <button
              onClick={() => handleStartTopicRandom('fuqarolik', 'FQ — Fuqarolik huquqi')}
              className="bg-white hover:bg-[#F4F1EA] border border-[#DDD7CD] hover:border-[#5C5042] p-3 rounded-xl text-left transition-all group shadow-2xs"
            >
              <span className="text-xs text-[#736B60] group-hover:text-[#5C5042]">FQ — Fuqarolik huquqi</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-[#8C8479]">Random ⚡</span>
              </div>
            </button>

            <button
              onClick={() => handleStartTopicRandom('oila', 'OK — Oila huquqi')}
              className="bg-white hover:bg-[#F4F1EA] border border-[#DDD7CD] hover:border-[#5C5042] p-3 rounded-xl text-left transition-all group shadow-2xs"
            >
              <span className="text-xs text-[#736B60] group-hover:text-[#5C5042]">OK — Oila huquqi</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-[#8C8479]">Random ⚡</span>
              </div>
            </button>

            <button
              onClick={() => handleStartTopicRandom('mamuriy', 'MJtK — Ma’muriy huquq')}
              className="bg-white hover:bg-[#F4F1EA] border border-[#DDD7CD] hover:border-[#5C5042] p-3 rounded-xl text-left transition-all group shadow-2xs"
            >
              <span className="text-xs text-[#736B60] group-hover:text-[#5C5042]">MJtK — Ma’muriy</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-[#8C8479]">Random ⚡</span>
              </div>
            </button>
          </div>

          {/* Qiyinlik darajasi parametrlari */}
          <div className="bg-white/90 border border-[#DDD7CD] rounded-xl p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold text-[#736B60] uppercase tracking-wider">
                Qiyinlik parametri:
              </span>
              <span className="text-xs text-[#554D43] hidden sm:inline">
                Sinovni oson yoki qiyin darajada boshlang
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="btn-aralash-oson"
                onClick={handleStartEasyQuiz}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300 text-emerald-900 text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Aralash oson testlar sinovini boshlash"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>🟢 Oson testlar (30 ta)</span>
              </button>
              <button
                id="btn-aralash-qiyin"
                onClick={handleStartHardQuiz}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 hover:border-rose-300 text-rose-900 text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Aralash qiyin testlar sinovini boshlash"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>🔴 Qiyin testlar (30 ta)</span>
              </button>
              <button
                id="btn-aralash-11-sinf"
                onClick={handleStart11UmumiyQuiz}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAF5ED] hover:bg-[#F3EBDD] border border-[#E6DCC8] hover:border-[#8C6B38] text-[#5C5042] text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
                title="11-sinf Huquq umumiy qiyin testlar to'plami (30 ta)"
              >
                <Flame className="w-3.5 h-3.5 text-[#8C6B38]" />
                <span>⭐ 11-Sinf Qiyin (30 ta)</span>
              </button>
            </div>
          </div>

          {/* Primary Action Buttons (Random Quiz Launchers) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              id="start-30-random-btn"
              onClick={handleStart30Random}
              className="flex-1 flex items-center justify-center space-x-2.5 px-5 py-3.5 rounded-xl font-bold bg-[#5C5042] hover:bg-[#4B4033] text-white shadow-md active:scale-[0.98] transition-all"
            >
              <Shuffle className="w-5 h-5 text-[#FAF5ED]" />
              <span>Random Sinov</span>
              <span className="bg-[#4B4033] text-xs px-2 py-0.5 rounded-md text-[#FAF5ED] font-semibold">
                40 daqiqa
              </span>
            </button>

            <button
              id="start-50-random-btn"
              onClick={handleStart50Random}
              className="flex-1 flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-semibold bg-[#756755] hover:bg-[#635544] text-white shadow-xs active:scale-[0.98] transition-all"
            >
              <Flame className="w-5 h-5 text-[#FAF5ED]" />
              <span>Katta Random Sinov</span>
              <span className="bg-[#635544] text-xs px-2 py-0.5 rounded-md text-[#FAF5ED] font-medium">
                65 daqiqa
              </span>
            </button>

            <button
              id="start-all-marathon-btn"
              onClick={handleStartFullMarathon}
              className="flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-semibold bg-white hover:bg-[#F4F1EA] text-[#3D352B] border border-[#DDD7CD] active:scale-[0.98] transition-all shadow-2xs"
            >
              <Award className="w-5 h-5 text-[#8C6B38]" />
              <span>Marafon Sinov</span>
            </button>
          </div>

          {/* Toggle Question Bank Preview */}
          <div className="mt-6 pt-4 border-t border-[#EAE5DD] flex items-center justify-between">
            <button
              onClick={() => setIsPreviewOpen(!isPreviewOpen)}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#5C5042] hover:text-[#1E1A16] transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>
                {isPreviewOpen
                  ? "Savollar bankini yashirish"
                  : "Savollar va javoblar bankini ko‘rish / qidirish"}
              </span>
              {isPreviewOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <span className="text-xs text-[#736B60]">
              Har bir sinovda variantlar va savollar random aralashtiriladi
            </span>
          </div>
        </div>
      </div>

      {/* Collapsible Question Bank Preview & Search */}
      {isPreviewOpen && (
        <div className="mt-4 bg-white border border-[#E3DED6] rounded-2xl p-4 sm:p-6 shadow-sm">
          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#8C8479] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Savol yoki kalit so‘zni qidiring..."
                className="w-full pl-9 pr-4 py-2 bg-[#FAF8F5] border border-[#DDD7CD] rounded-xl text-sm text-[#1E1A16] placeholder-[#8C8479] focus:outline-none focus:border-[#5C5042]"
              />
            </div>

            {/* Topic tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1">
              {[
                { id: 'all', label: 'Barchasi' },
                { id: 'davlat_huquq', label: 'DHN' },
                { id: 'mehnat', label: 'MK (Mehnat)' },
                { id: 'jinoyat', label: 'JK (Jinoyat)' },
                { id: 'fuqarolik', label: 'FQ (Fuqarolik)' },
                { id: 'oila', label: 'OK (Oila)' },
                { id: 'mamuriy', label: 'MJtK (Ma’muriy)' }
              ].map((tab) => (
                <button
                  key={`mixed-tab-${tab.id}`}
                  onClick={() => setSelectedTopicFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedTopicFilter === tab.id
                      ? 'bg-[#5C5042] text-white font-semibold shadow-2xs'
                      : 'bg-[#FAF8F5] text-[#554D43] border border-[#DDD7CD] hover:bg-[#F4F1EA]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Questions list */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-8 text-[#736B60] text-sm">
                Qidiruvingiz bo‘yicha savol topilmadi.
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const isExpanded = expandedQuestionId === q.id;
                return (
                  <div
                    key={`mixed-q-${q.id}-${idx}`}
                    className="p-3.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl hover:border-[#B5A998] transition-colors text-[#2B251E]"
                  >
                    <div
                      onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                      className="flex items-start justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="w-6 h-6 rounded-full bg-[#EAE5DD] text-[#5C5042] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[#1E1A16]">{cleanQuestionText(q.question)}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-[11px] font-semibold text-[#8C6B38] bg-[#FAF5ED] border border-[#E6DCC8] px-2 py-0.5 rounded">
                              {q.topicId}
                            </span>
                            {cleanLegalBasis(q.legalBasis) && (
                              <span className="text-[11px] text-[#736B60]">
                                ⚖️ {cleanLegalBasis(q.legalBasis)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button className="text-[#736B60] hover:text-[#1E1A16] p-1 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-[#EAE5DD] pl-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {q.options.map((opt, oIdx) => {
                            const isCorrect = oIdx === q.correctIndex;
                            return (
                              <div
                                key={`mixed-opt-${q.id}-${oIdx}`}
                                className={`p-2.5 rounded-lg text-xs font-medium flex items-center space-x-2 border ${
                                  isCorrect
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                                    : 'bg-white border-[#DDD7CD] text-[#554D43]'
                                }`}
                              >
                                <span
                                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                    isCorrect ? 'bg-emerald-600 text-white' : 'bg-[#EAE5DD] text-[#554D43]'
                                  }`}
                                >
                                  {['A', 'B', 'C', 'D'][oIdx]}
                                </span>
                                <span className="flex-1">{opt}</span>
                                {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                              </div>
                            );
                          })}
                        </div>

                        {q.explanation && (
                          <div className="bg-white border border-[#DDD7CD] p-2.5 rounded-lg text-xs text-[#554D43]">
                            <span className="font-semibold text-[#5C5042]">Huquqiy izoh: </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </section>
  );
};
