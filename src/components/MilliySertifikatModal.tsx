import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  Sparkles,
  Clock,
  Play,
  FileQuestion,
  X,
  Layers,
  BookOpen,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MILLIY_SERTIFIKAT_1_QUESTIONS,
  MILLIY_SERTIFIKAT_2_QUESTIONS,
  USER_MIXED_QUESTIONS
} from '../data/userQuestions';
import { Question } from '../types';

interface MilliySertifikatModalProps {
  isOpen: boolean;
  initialMode?: 'quiz' | 'practice';
  onClose: () => void;
  onStartTest: (count: number, timeMins: number, title: string, mode?: 'quiz' | 'practice', customQuestions?: Question[]) => void;
}

export const MilliySertifikatModal: React.FC<MilliySertifikatModalProps> = ({
  isOpen,
  initialMode = 'quiz',
  onClose,
  onStartTest
}) => {
  const [selectedVariant, setSelectedVariant] = useState<'v2' | 'v1' | 'all'>('v2');
  const [selectedMode, setSelectedMode] = useState<'quiz' | 'practice'>(initialMode);

  // Mobile swipe gestures
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchCurrentX = useRef(0);
  const touchCurrentY = useRef(0);

  // Lock body scroll, handle ESC key & browser back button
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      // Browser history popstate
      window.history.pushState({ panelOpen: true, modalType: 'milliy_sertifikat' }, '');
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
  }, [isOpen, onClose]);

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

  if (!isOpen) return null;

  const currentQuestions =
    selectedVariant === 'v2'
      ? MILLIY_SERTIFIKAT_2_QUESTIONS
      : selectedVariant === 'v1'
      ? MILLIY_SERTIFIKAT_1_QUESTIONS
      : USER_MIXED_QUESTIONS;

  const totalQuestions = currentQuestions.length;
  const timeMinutes = selectedVariant === 'all' ? 120 : 60;

  const handleStart = () => {
    onClose();
    const title =
      selectedVariant === 'v2'
        ? `Milliy Sertifikat: 2-Variant (Yangi to‘plam - 45 ta test)`
        : selectedVariant === 'v1'
        ? `Milliy Sertifikat: 1-Variant (Namunaviy to‘plam - 45 ta test)`
        : `Milliy Sertifikat: To‘liq to‘plam (${totalQuestions} ta test)`;

    onStartTest(
      totalQuestions,
      selectedMode === 'practice' ? 0 : timeMinutes,
      title,
      selectedMode,
      currentQuestions
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 cursor-pointer"
        />

        {/* Centered Modal Window */}
        <motion.div
          id="milliy-sertifikat-selection-modal"
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
                <Award className="w-6 h-6 text-[#8C6B38]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] px-2 py-0.5 rounded-md">
                  Milliy Sertifikat
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1A16] mt-1">
                  Huquqshunoslik — Milliy Sertifikat
                </h2>
              </div>
            </div>

            <button
              id="close-milliy-sertifikat-modal-btn"
              onClick={onClose}
              className="p-2 rounded-lg bg-white hover:bg-[#FAF5ED] text-[#736B60] hover:text-[#1E1A16] border border-[#DDD7CD] transition-colors cursor-pointer"
              title="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-7 space-y-5 max-h-[65vh] overflow-y-auto flex-1">
            {/* Mobile swipe hint */}
            <div className="md:hidden flex items-center justify-center space-x-1.5 p-2 rounded-lg bg-[#FAF5ED] border border-dashed border-[#8C6B38]/40 text-[11px] font-semibold text-[#8C6B38]">
              <span>Yopish uchun o‘ng tomonga suring (&gt;90px swipe)</span>
            </div>
            {/* Info Message Box */}
            <div className="rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] p-4 flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-white text-[#8C6B38] border border-[#E6DCC8] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-[#8C6B38]" />
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-[#2D241E]">
                <strong className="text-[#8C6B38] block mb-0.5 uppercase font-bold">
                  Milliy Sertifikat Standarti (45 ta savol)
                </strong>
                1–35: Yopiq va muvofiqlashtirish testlari • 36–45: Ochiq / yozma tahliliy topshiriqlar.
              </div>
            </div>

            {/* Variant Selector */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#736B60] uppercase tracking-wider block">
                Test variantini tanlang:
              </span>
              <div className="space-y-2">
                {/* 2-Variant (Yangi) */}
                <button
                  type="button"
                  onClick={() => setSelectedVariant('v2')}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    selectedVariant === 'v2'
                      ? 'bg-[#FAF5ED] border-[#8C6B38] ring-1 ring-[#8C6B38]'
                      : 'bg-white border-[#DDD7CD] hover:border-[#8C6B38]/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1E1A16] flex items-center gap-2">
                        <span>2-Variant: Yangi rasmiy to‘plam</span>
                        <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-1.5 py-0.5 rounded">
                          Yangi
                        </span>
                      </div>
                      <span className="text-xs text-[#736B60]">45 ta savol • 60 daqiqa</span>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedVariant === 'v2' ? 'border-[#8C6B38] bg-[#8C6B38]' : 'border-stone-300'
                  }`}>
                    {selectedVariant === 'v2' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>

                {/* 1-Variant */}
                <button
                  type="button"
                  onClick={() => setSelectedVariant('v1')}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    selectedVariant === 'v1'
                      ? 'bg-[#FAF5ED] border-[#8C6B38] ring-1 ring-[#8C6B38]'
                      : 'bg-white border-[#DDD7CD] hover:border-[#8C6B38]/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1E1A16]">
                        1-Variant: Namunaviy to‘plam
                      </div>
                      <span className="text-xs text-[#736B60]">45 ta savol • 60 daqiqa</span>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedVariant === 'v1' ? 'border-[#8C6B38] bg-[#8C6B38]' : 'border-stone-300'
                  }`}>
                    {selectedVariant === 'v1' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>

                {/* All variants */}
                <button
                  type="button"
                  onClick={() => setSelectedVariant('all')}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    selectedVariant === 'all'
                      ? 'bg-[#FAF5ED] border-[#8C6B38] ring-1 ring-[#8C6B38]'
                      : 'bg-white border-[#DDD7CD] hover:border-[#8C6B38]/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold text-xs">
                      ALL
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1E1A16]">
                        Barcha variantlar (1- va 2-Variant)
                      </div>
                      <span className="text-xs text-[#736B60]">90 ta savol • 120 daqiqa</span>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedVariant === 'all' ? 'border-[#8C6B38] bg-[#8C6B38]' : 'border-stone-300'
                  }`}>
                    {selectedVariant === 'all' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Mode Selection */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#736B60] uppercase tracking-wider block mb-2.5">
                Ishlash rejimini tanlang:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedMode('quiz')}
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedMode === 'quiz'
                      ? 'bg-white border-[#8C6B38] shadow-xs ring-1 ring-[#8C6B38]'
                      : 'bg-white/60 border-[#DDD7CD] hover:border-[#8C6B38]/50'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedMode === 'quiz' ? 'border-[#8C6B38] bg-[#8C6B38]' : 'border-stone-400'
                  }`}>
                    {selectedMode === 'quiz' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E1A16] flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#8C6B38]" />
                      <span>Sinov rejimi</span>
                    </div>
                    <span className="text-[11px] text-[#736B60] block">Vaqt bilan, yakuniy baholash</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMode('practice')}
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedMode === 'practice'
                      ? 'bg-white border-[#8C6B38] shadow-xs ring-1 ring-[#8C6B38]'
                      : 'bg-white/60 border-[#DDD7CD] hover:border-[#8C6B38]/50'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedMode === 'practice' ? 'border-[#8C6B38] bg-[#8C6B38]' : 'border-stone-400'
                  }`}>
                    {selectedMode === 'practice' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E1A16] flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-[#8C6B38]" />
                      <span>O‘rganish rejimi</span>
                    </div>
                    <span className="text-[11px] text-[#736B60] block">Har bir javobdan so‘ng tahlil</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Start Test Button */}
            <div className="pt-2">
              <button
                id="start-milliy-unified-btn"
                onClick={handleStart}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Testni boshlash ({totalQuestions} ta savol)</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EAE5DD] flex items-center justify-between text-xs text-[#736B60]">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8C6B38]" />
              <span>Tanlangan: {totalQuestions} ta test • {selectedMode === 'practice' ? 'Vaqtsiz' : `${timeMinutes} daqiqa`}</span>
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
    </AnimatePresence>
  );
};
