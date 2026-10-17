import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  BookOpen,
  Play,
  Flame,
  Cloud
} from 'lucide-react';
import { Question } from '../types';
import { DARSLIK_8_QUESTIONS } from '../data/darslik8Questions';
import { DARSLIK_9_QUESTIONS } from '../data/darslik9Questions';
import { DARSLIK_10_QUESTIONS } from '../data/darslik10Questions';
import { DARSLIK_11_QUESTIONS } from '../data/darslik11Questions';
import { DARSLIK_11_UMUMIY_QIYIN_QUESTIONS } from '../data/darslik11UmumiyQiyinQuestions';

interface Darslik10QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  grade?: number; // Optional grade, defaults to 10
  onStartQuiz: (questions: Question[], title: string, timeLimitSeconds: number) => void;
}

export const Darslik10QuizModal: React.FC<Darslik10QuizModalProps> = ({
  isOpen,
  onClose,
  grade = 10,
  onStartQuiz
}) => {
  const [activeMode, setActiveMode] = useState<'sinov' | 'organish'>('sinov');

  // Load questions for selected grade
  let allQuestions: Question[] = [];
  let gradeTitle = '';
  let badgeText = '';

  if (grade === 8) {
    allQuestions = DARSLIK_8_QUESTIONS;
    gradeTitle = 'Davlat va huquq nazariyasi';
    badgeText = '8-sinf darsligi';
  } else if (grade === 9) {
    allQuestions = DARSLIK_9_QUESTIONS;
    gradeTitle = 'Konstitutsiyaviy huquq';
    badgeText = '9-sinf darsligi';
  } else if (grade === 11) {
    allQuestions = DARSLIK_11_QUESTIONS;
    gradeTitle = 'Davlat va huquq asoslari';
    badgeText = '11-sinf darsligi';
  } else {
    allQuestions = DARSLIK_10_QUESTIONS;
    gradeTitle = 'Davlat va huquq asoslari';
    badgeText = '10-sinf darsligi';
  }

  // Filter or partition into Oson and Qiyin
  let osonQuestions: Question[] = [];
  let qiyinQuestions: Question[] = [];

  if (grade === 8) {
    osonQuestions = allQuestions.slice(0, 170).map(q => ({ ...q, difficulty: 'oson' as const }));
    qiyinQuestions = allQuestions.slice(170).map(q => ({ ...q, difficulty: 'qiyin' as const }));
  } else if (grade === 9) {
    osonQuestions = allQuestions.slice(0, 150).map(q => ({ ...q, difficulty: 'oson' as const }));
    qiyinQuestions = allQuestions.slice(150).map(q => ({ ...q, difficulty: 'qiyin' as const }));
  } else if (grade === 11) {
    osonQuestions = DARSLIK_11_QUESTIONS.map(q => ({ ...q, difficulty: 'oson' as const }));
    qiyinQuestions = DARSLIK_11_UMUMIY_QIYIN_QUESTIONS.map(q => ({ ...q, difficulty: 'qiyin' as const }));
  } else {
    const originalOson = allQuestions.filter(q => q.difficulty === 'oson' || !q.difficulty);
    const originalQiyin = allQuestions.filter(q => q.difficulty === 'qiyin');
    osonQuestions = originalOson.slice(0, 100).map(q => ({ ...q, difficulty: 'oson' as const }));
    qiyinQuestions = [
      ...originalOson.slice(100).map(q => ({ ...q, difficulty: 'qiyin' as const })),
      ...originalQiyin
    ];
  }

  // Savollar soni sozlamalardan olinadi (questionsPerTopic)
  let questionsLimit = 10; // default
  try {
    const saved = localStorage.getItem('huquq_app_settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed.questionsPerTopic === 'number' && parsed.questionsPerTopic > 0) {
        questionsLimit = parsed.questionsPerTopic;
      }
    }
  } catch (e) {
    console.error(e);
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-[#FAF9F5] w-full max-w-md p-6 sm:p-7 rounded-3xl shadow-2xl border border-[#EBE5DB] flex flex-col space-y-5 relative"
        >
          {/* Top Row with Badge and Close Icon */}
          <div className="flex items-center justify-between">
            <span className="inline-block bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] rounded-full px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider uppercase">
              {badgeText}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title and Subtitle */}
          <div className="space-y-0.5">
            <h2 className="text-[25px] font-extrabold text-stone-900 tracking-tight leading-none">
              {gradeTitle} ({grade}-sinf)
            </h2>
            <p className="text-[14.5px] text-stone-500">
              Test qiyinlik darajasini va ishlash rejimini tanlang
            </p>
          </div>

          {/* Two-Segment Control (Tabs) */}
          <div className="bg-[#FAF6F0] p-1 rounded-xl border border-[#EBE5DB] flex w-full h-12 items-center shrink-0">
            <button
              onClick={() => setActiveMode('sinov')}
              className={`flex-1 h-full rounded-lg font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                activeMode === 'sinov'
                  ? 'bg-[#8C6B38] text-white shadow-xs'
                  : 'text-[#595248] hover:text-[#1E1A16]'
              }`}
            >
              <Play className={`w-3 h-3 ${activeMode === 'sinov' ? 'fill-current' : ''}`} />
              <span className="text-[13px]">Sinov (Vaqtli)</span>
            </button>
            <button
              onClick={() => setActiveMode('organish')}
              className={`flex-1 h-full rounded-lg font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                activeMode === 'organish'
                  ? 'bg-[#8C6B38] text-white shadow-xs'
                  : 'text-[#595248] hover:text-[#1E1A16]'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span className="text-[13px]">O‘rganish (Izohli)</span>
            </button>
          </div>

          {/* Section Title */}
          <div className="space-y-2 pt-0.5">
            <span className="text-[9px] font-bold text-stone-400 tracking-wider uppercase block">
              QIYINLIK DARAJASINI TANLANG:
            </span>

            <div className="space-y-2.5">
              
              {/* Qiyin Test Card */}
              <button
                onClick={() => {
                  onClose();
                  onStartQuiz(
                    qiyinQuestions.slice(0, questionsLimit),
                    `${gradeTitle} (Qiyin • ${activeMode === 'sinov' ? 'Sinov' : 'O‘rganish'})`,
                    activeMode === 'sinov' ? 40 * 60 : 0
                  );
                }}
                className="w-full text-left p-3 rounded-xl border border-rose-100 hover:border-rose-400 bg-white transition-all shadow-2xs hover:shadow-xs flex items-center space-x-3 cursor-pointer group"
              >
                <div className="w-[43.5px] h-[43.5px] rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Flame className="w-[18px] h-[18px] fill-rose-100" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[15px] font-bold text-stone-900 group-hover:text-rose-700 transition-colors">
                      Qiyin test
                    </span>
                    <span className="text-[11px] font-extrabold text-white bg-rose-600 px-1.5 py-0.5 rounded-sm tracking-wide shrink-0">
                      {Math.min(qiyinQuestions.length, questionsLimit)} ta savol
                    </span>
                  </div>
                  <p className="text-[14.5px] text-stone-400 mt-0.5 leading-tight truncate">
                    Murakkab tahliliy savollar va qonun moddalari
                  </p>
                </div>
              </button>

              {/* Oson Test Card */}
              <button
                onClick={() => {
                  onClose();
                  onStartQuiz(
                    osonQuestions.slice(0, questionsLimit),
                    `${gradeTitle} (Oson • ${activeMode === 'sinov' ? 'Sinov' : 'O‘rganish'})`,
                    activeMode === 'sinov' ? 40 * 60 : 0
                  );
                }}
                className="w-full text-left p-3 rounded-xl border border-sky-100 hover:border-sky-400 bg-white transition-all shadow-2xs hover:shadow-xs flex items-center space-x-3 cursor-pointer group"
              >
                <div className="w-[43.5px] h-[43.5px] rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <span className="text-[22px] leading-none select-none">☁️</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[15px] font-bold text-stone-900 group-hover:text-sky-700 transition-colors">
                      Oson test
                    </span>
                    <span className="text-[11px] font-extrabold text-white bg-sky-600 px-1.5 py-0.5 rounded-sm tracking-wide shrink-0">
                      {Math.min(osonQuestions.length, questionsLimit)} ta savol
                    </span>
                  </div>
                  <p className="text-[14.5px] text-stone-400 mt-0.5 leading-tight truncate">
                    Boshlang‘ich va asosiy tushunchalar
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* Bottom Caption */}
          <div className="text-center pt-1">
            <span className="text-[10px] text-stone-400 leading-none block">
              Qaysi qiyinlikni tanlasangiz, darhol test yechish boshlanadi
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
