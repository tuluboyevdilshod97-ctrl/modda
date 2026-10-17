import React, { useState, useEffect, useRef } from 'react';
import { X, Play, BookOpen, Flame, GraduationCap, Sparkles, CheckCircle2, Award, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Topic } from '../types';

interface DifficultyModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: Topic | null;
  initialMode?: 'quiz' | 'practice';
  osonCount: number;
  qiyinCount: number;
  totalCount: number;
  onStartQuiz: (
    difficulty: 'oson' | 'qiyin' | 'barchasi',
    mode: 'quiz' | 'practice',
    customCount?: number,
    variantId?: string
  ) => void;
}

export const DifficultyModal: React.FC<DifficultyModalProps> = ({
  isOpen,
  onClose,
  topic,
  initialMode = 'quiz',
  osonCount,
  qiyinCount,
  totalCount,
  onStartQuiz
}) => {
  const [selectedMode, setSelectedMode] = useState<'quiz' | 'practice'>(initialMode);
  const isBmba = topic?.id === 'bmba';

  // Mobile swipe gestures
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchCurrentX = useRef(0);
  const touchCurrentY = useRef(0);

  // Sync mode when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedMode(initialMode);
    }
  }, [isOpen, initialMode]);

  // Lock body scroll, handle ESC key & browser back button
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      // Browser history popstate
      window.history.pushState({ panelOpen: true, topicId: topic?.id }, '');
      const handlePopState = () => {
        onClose();
      };
      window.addEventListener('popstate', handlePopState);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isOpen, onClose, topic?.id]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchCurrentX.current = e.touches[0].clientX;
    touchCurrentY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
    touchCurrentY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchCurrentX.current - touchStartX.current;
    const deltaY = touchCurrentY.current - touchStartY.current;
    if (deltaX > 90 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      onClose();
    }
  };

  const bmbaVariants = [
    {
      id: 'newuploaded',
      num: '8',
      title: '8-Variant: BMBA (Yangi yuklangan)',
      subtitle: '30 ta savol • 40 daqiqa',
      desc: 'Siz yuklagan rasmiy rasm-savollar asosida tayyorlangan yangi testlar to‘plami',
      badge: 'YANGI',
      badgeColor: 'bg-emerald-600 text-white animate-pulse'
    },
    {
      id: 'otm2025',
      num: '6',
      title: '6-Variant: 2025 OTM Imtihoni',
      subtitle: '30 ta qiyin test • 40 daqiqa',
      desc: 'Mehnat, Byudjet, Oila va Jinoyat kodeksi bo‘yicha chuqur tahliliy testlar',
      badge: '2025 OTM Qiyin',
      badgeColor: 'bg-purple-600 text-white'
    },
    {
      id: 'otm2024',
      num: '7',
      title: '7-Variant: 2024 OTM Imtihoni',
      subtitle: '30 ta qiyin test • 40 daqiqa',
      desc: 'Ma’muriy, Jinoyat va Fuqarolik kodeksi jazo hamda muddatlari',
      badge: '2024 OTM Qiyin',
      badgeColor: 'bg-rose-600 text-white'
    },
    {
      id: 'legaldoctor',
      num: '5',
      title: '5-Variant: BMBA 2026',
      subtitle: '30 ta savol • 40 daqiqa',
      desc: 'BMBA andozasidagi namunaviy test to‘plami',
      badge: 'BMBA 2026',
      badgeColor: 'bg-cyan-700 text-white'
    },
    {
      id: 'legalzone2026',
      num: '4',
      title: '4-Variant: BMBA 2026 (Yaxlit to‘plam)',
      subtitle: '30 ta savol • 40 daqiqa',
      desc: 'BMBA andozasidagi namunaviy test to‘plami',
      badge: null,
      badgeColor: ''
    },
    {
      id: 'otajonov8',
      num: '3',
      title: '3-Variant: BMBA',
      subtitle: '30 ta savol • 40 daqiqa',
      desc: 'BMBA andozasidagi namunaviy test to‘plami',
      badge: null,
      badgeColor: ''
    },
    {
      id: '23dec',
      num: '2',
      title: '2-Variant: BMBA (23.12.2025)',
      subtitle: '30 ta savol • 40 daqiqa',
      desc: 'Rasmiy BMBA testi',
      badge: null,
      badgeColor: ''
    },
    {
      id: '21dec',
      num: '1',
      title: '1-Variant: BMBA (21.12.2025)',
      subtitle: '30 ta savol • 40 daqiqa',
      desc: 'Rasmiy BMBA testi',
      badge: null,
      badgeColor: ''
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 cursor-pointer"
          />

          {/* Centered Modal Window */}
          <motion.div
            id="difficulty-selection-modal"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white rounded-2xl border border-[#DDD7CD] shadow-2xl overflow-hidden z-10 text-[#1E1A16] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Banner */}
            <div className="relative bg-[#FAF8F5] border-b border-[#EAE5DD] p-6 text-[#1E1A16] flex items-start justify-between shrink-0">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38]">
                  {isBmba ? (
                    <GraduationCap className="w-6 h-6 text-[#8C6B38]" />
                  ) : (
                    <Award className="w-6 h-6 text-[#8C6B38]" />
                  )}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] px-2 py-0.5 rounded-md">
                    {topic ? topic.badge : 'Umumiy Test'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1A16] mt-1">
                    {topic ? topic.title : 'Huquqshunoslik Testi'}
                  </h2>
                </div>
              </div>

              <button
                id="close-difficulty-modal-btn"
                onClick={onClose}
                className="p-2 rounded-lg bg-white hover:bg-[#FAF5ED] text-[#736B60] hover:text-[#1E1A16] border border-[#DDD7CD] transition-colors cursor-pointer"
                title="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-7 space-y-5 max-h-[65vh] overflow-y-auto flex-1">
              {/* Info Message Box */}
              <div className="rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] p-4 flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-white text-[#8C6B38] border border-[#E6DCC8] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#8C6B38]" />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed text-[#2D241E]">
                  <strong className="text-[#8C6B38] block mb-0.5 uppercase font-bold">
                    {isBmba ? 'BMBA STANDARTI (30 TA SAVOL • 40 DAQIQA)' : 'TEST STANDARTI'}
                  </strong>
                  {isBmba
                    ? 'Variantlardan birini tanlang, test darhol boshlanadi.'
                    : 'Qiyinlik darajasini tanlang, test darhol boshlanadi.'}
                </div>
              </div>

              {/* Selection Section */}
              {isBmba ? (
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-[#736B60] uppercase tracking-wider block">
                    Test variantini tanlang:
                  </span>
                  <div className="space-y-2">
                    {bmbaVariants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => {
                          onStartQuiz('barchasi', selectedMode, 30, v.id);
                          onClose();
                        }}
                        className="w-full p-4 rounded-xl border border-[#DDD7CD] bg-white hover:bg-[#FAF5ED] hover:border-[#8C6B38] text-left transition-all flex items-center justify-between cursor-pointer group shadow-2xs hover:shadow-xs"
                      >
                        <div className="flex items-center space-x-3.5">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white ${
                              v.id === 'otm2025'
                                ? 'bg-purple-600'
                                : v.id === 'otm2024'
                                ? 'bg-rose-600'
                                : v.id === 'legaldoctor'
                                ? 'bg-cyan-700'
                                : v.id === 'newuploaded'
                                ? 'bg-emerald-600 font-extrabold'
                                : 'bg-[#8C6B38]'
                            }`}
                          >
                            {v.num}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] flex items-center gap-2">
                              <span>{v.title}</span>
                              {v.badge && (
                                <span
                                  className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${v.badgeColor}`}
                                >
                                  {v.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-[#736B60] block">{v.subtitle}</span>
                            <span className="text-[11px] text-[#8C8479] block mt-0.5">{v.desc}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5 text-[#8C6B38] font-bold text-xs group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                          <Play className="w-4 h-4 fill-[#8C6B38]" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-[#736B60] uppercase tracking-wider block">
                    Qiyinlik darajasini tanlang:
                  </span>
                  <div className="space-y-2.5">
                    {/* Qiyin */}
                    <button
                      type="button"
                      onClick={() => {
                        onStartQuiz('qiyin', selectedMode);
                        onClose();
                      }}
                      className="w-full p-4 rounded-xl border border-[#DDD7CD] bg-white hover:bg-rose-50/50 hover:border-rose-400 text-left transition-all flex items-center justify-between cursor-pointer group shadow-2xs hover:shadow-xs"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm border border-rose-200">
                          <Flame className="w-5 h-5 fill-rose-600 stroke-rose-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1E1A16] group-hover:text-rose-700 flex items-center gap-2">
                            <span>Qiyin test</span>
                            <span className="text-[10px] bg-rose-600 text-white font-extrabold px-1.5 py-0.5 rounded">
                              {qiyinCount} ta savol
                            </span>
                          </div>
                          <span className="text-xs text-[#736B60]">
                            {topic?.id === 'konstitutsiya'
                              ? '@huquqologiya II bo‘lim va murakkab tahliliy moddalar'
                              : 'Murakkab tahliliy savollar va qonun moddalari'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 text-rose-600 font-bold text-xs group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                        <Play className="w-4 h-4 fill-rose-600" />
                      </div>
                    </button>

                    {/* Oson */}
                    <button
                      type="button"
                      onClick={() => {
                        onStartQuiz('oson', selectedMode);
                        onClose();
                      }}
                      className="w-full p-4 rounded-xl border border-[#DDD7CD] bg-white hover:bg-sky-50/50 hover:border-sky-400 text-left transition-all flex items-center justify-between cursor-pointer group shadow-2xs hover:shadow-xs"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm border border-sky-200">
                          ☁️
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1E1A16] group-hover:text-sky-700 flex items-center gap-2">
                            <span>Oson test</span>
                            <span className="text-[10px] bg-sky-600 text-white font-extrabold px-1.5 py-0.5 rounded">
                              {osonCount} ta savol
                            </span>
                          </div>
                          <span className="text-xs text-[#736B60]">
                            Boshlang‘ich va asosiy tushunchalar
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 text-sky-600 font-bold text-xs group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                        <Play className="w-4 h-4 fill-sky-600" />
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EAE5DD] flex items-center justify-between text-xs text-[#736B60] shrink-0">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B38]" />
                <span>
                  {isBmba
                    ? 'Har bir variant 30 ta test • 40 daqiqa'
                    : 'Qiyinlik darajasini tanlang va testni boshlang'}
                </span>
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white border border-[#DDD7CD] text-[#1E1A16] font-bold uppercase tracking-wider hover:bg-[#FAF5ED] shadow-2xs transition-colors cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
