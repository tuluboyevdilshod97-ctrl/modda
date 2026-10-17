import React, { useState } from 'react';
import {
  X,
  Settings,
  Award,
  History,
  Search,
  ExternalLink,
  RotateCcw,
  Volume2,
  VolumeX,
  Type,
  Clock,
  Timer,
  ListOrdered,
  Sliders,
  Minus,
  Plus,
  CheckCircle2,
  Shield,
  BookOpen,
  Calendar,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Filter,
  BarChart3,
  Play,
  FileQuestion,
  Layers,
  GraduationCap,
  ArrowLeft,
  Scale,
  Landmark,
  UploadCloud,
  Moon,
  Sun,
  Flame
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { AppSettings, ChronologyEvent } from '../types';
import { CHRONOLOGY_EVENTS } from '../data/legalChronology';
import { BookReaderModal } from './BookReaderModal';
import { pdfCache, savePdfToStorage, initPdfCacheFromStorage, subscribePdfCache, verifyPdfSource } from '../utils/pdfStorage';
import { MEHNAT_KODEKSI_FULL_TEXT } from '../data/mehnatKodeksiFullText';
import { KONSTITUTSIYA_FULL_TEXT } from '../data/konstitutsiyaFullText';
import { FUQAROLIK_KODEKSI_FULL_TEXT } from '../data/fuqarolikKodeksiFullText';
import { OILA_KODEKSI_FULL_TEXT } from '../data/oilaKodeksiFullText';
import { MAMURIY_KODEKSI_FULL_TEXT } from '../data/mamuriyKodeksiFullText';
import { JINOYAT_KODEKSI_FULL_TEXT } from '../data/jinoyatKodeksiFullText';
import { DARSLIKLAR_DATA, Textbook } from '../data/darsliklarData';

interface ToggleNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onClearHistory: () => void;
  onClearMistakes: () => void;
  historyCount: number;
  mistakesCount: number;
  initialTab?: 'sozlamalar' | 'manbalar' | 'darsliklar' | 'sertifikat' | 'xronologiya';
  onOpenStats?: () => void;
  onStartMilliyTest?: (count: number, timeMins: number, title: string) => void;
  onStartBmbaTest?: (mode?: 'quiz' | 'practice', variantId?: string) => void;
  onStartHuquqologiyaTest?: (mode?: 'quiz' | 'practice') => void;
  onOpenLugat?: () => void;
  onOpenAdmin?: () => void;
  onOpenIntroVideo?: () => void;
  onOpenSplashScreen?: () => void;
}

export const ToggleNavMenu: React.FC<ToggleNavMenuProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onClearHistory,
  onClearMistakes,
  historyCount,
  mistakesCount,
  initialTab = 'sozlamalar',
  onOpenStats,
  onStartMilliyTest,
  onStartBmbaTest,
  onStartHuquqologiyaTest,
  onOpenLugat,
  onOpenAdmin,
  onOpenIntroVideo,
  onOpenSplashScreen
}) => {
  const [activeCatalog, setActiveCatalog] = useState<'sozlamalar' | 'sertifikat' | 'manbalar' | 'xronologiya'>(
    initialTab === 'sertifikat' ? 'sertifikat' : initialTab === 'xronologiya' ? 'xronologiya' : (initialTab === 'manbalar' || initialTab === 'darsliklar') ? 'manbalar' : 'sozlamalar'
  );

  React.useEffect(() => {
    if (initialTab === 'sertifikat') {
      setActiveCatalog('sertifikat');
    } else if (initialTab === 'manbalar' || initialTab === 'darsliklar') {
      setActiveCatalog('manbalar');
    } else if (initialTab === 'xronologiya') {
      setActiveCatalog('xronologiya');
    } else if (initialTab === 'sozlamalar') {
      setActiveCatalog('sozlamalar');
    }
  }, [initialTab, isOpen]);
  const [manbaSubTab, setManbaSubTab] = useState<'kodekslar' | 'darsliklar'>(
    initialTab === 'darsliklar' ? 'darsliklar' : 'kodekslar'
  );
  const [activeTextbook, setActiveTextbook] = useState<Textbook | null>(null);
  const [drawerDarslikSubject, setDrawerDarslikSubject] = useState<'all' | 'huquq' | 'nazariya'>('all');

  const [isBookReaderOpen, setIsBookReaderOpen] = useState(false);
  const [isKonstitutsiyaOpen, setIsKonstitutsiyaOpen] = useState(false);
  const [isFuqarolikOpen, setIsFuqarolikOpen] = useState(false);
  const [isOilaOpen, setIsOilaOpen] = useState(false);
  const [isMamuriyOpen, setIsMamuriyOpen] = useState(false);
  const [isJinoyatOpen, setIsJinoyatOpen] = useState(false);
  const [chronologySearch, setChronologySearch] = useState('');
  const [chronologyFilter, setChronologyFilter] = useState<string>('all');
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const [confirmClearMistakes, setConfirmClearMistakes] = useState(false);
  const [, setNavPdfVersion] = useState(0);

  React.useEffect(() => {
    initPdfCacheFromStorage();
    const unsub = subscribePdfCache(() => {
      setNavPdfVersion((v) => v + 1);
    });
    return unsub;
  }, []);

  // Filter chronology
  const filteredChronology = CHRONOLOGY_EVENTS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(chronologySearch.toLowerCase()) ||
      item.year.includes(chronologySearch) ||
      item.description.toLowerCase().includes(chronologySearch.toLowerCase()) ||
      (item.dateExact && item.dateExact.toLowerCase().includes(chronologySearch.toLowerCase()));

    const matchesFilter = chronologyFilter === 'all' || item.category === chronologyFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <AnimatePresence>
        {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="relative w-full max-w-2xl bg-[#FBF9F4] border-l border-[#E5E0D8] shadow-2xl flex flex-col h-full z-10 text-[#1E1A16]"
          >
            {/* Drawer Header */}
            <div className="px-6 py-4 border-b border-[#E5E0D8] flex items-center justify-between bg-[#FAF8F5]/95 backdrop-blur">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] text-[#8C6B38] border border-[#8C6B38]/30 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-syne text-base font-bold text-[#1E1A16] tracking-tight">
                    {activeCatalog === 'xronologiya'
                      ? 'Yillar xronologiyasi'
                      : activeCatalog === 'manbalar'
                      ? 'Huquqiy Manbalar & Darsliklar'
                      : activeCatalog === 'sertifikat'
                      ? 'Milliy Sertifikat Sinovlari'
                      : 'Platforma Sozlamalari'}
                  </h2>
                  <p className="text-xs font-mono-code text-[#6E675F]">
                    {activeCatalog === 'xronologiya'
                      ? 'Huquqiy va tarixiy muhim sanalar katalogi'
                      : activeCatalog === 'manbalar'
                      ? 'Kodekslar va maktab darsliklari to‘plami'
                      : activeCatalog === 'sertifikat'
                      ? 'Maxsus standart test sinovlari'
                      : 'Shrift va test parametrlarini boshqarish'}
                  </p>
                </div>
              </div>

              <button
                id="close-toggle-menu-btn"
                onClick={onClose}
                className="p-2 rounded-lg bg-white hover:bg-[#F2ECE1] text-[#6E675F] hover:text-[#1E1A16] border border-[#E5E0D8] transition-colors cursor-pointer"
                title="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Catalog Switcher Navigation */}
            <div className="px-6 py-2.5 bg-[#FAF5ED] border-b border-[#E5E0D8] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              <button
                type="button"
                onClick={() => setActiveCatalog('sozlamalar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  activeCatalog === 'sozlamalar'
                    ? 'bg-[#8C6B38] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#5C5348] border border-[#DDD5C7]'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Sozlamalar</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveCatalog('sertifikat')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  activeCatalog === 'sertifikat'
                    ? 'bg-[#8C6B38] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#5C5348] border border-[#DDD5C7]'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>BMBA & Sertifikat</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveCatalog('manbalar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  activeCatalog === 'manbalar'
                    ? 'bg-[#8C6B38] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#5C5348] border border-[#DDD5C7]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Manbalar</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveCatalog('xronologiya')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  activeCatalog === 'xronologiya'
                    ? 'bg-[#8C6B38] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#5C5348] border border-[#DDD5C7]'
                }`}
              >
                <History className="w-3.5 h-3.5" />
                <span>Xronologiya</span>
              </button>
            </div>



            {/* Catalog Body Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* 1. SOZLAMALAR KATALOGI */}
              {activeCatalog === 'sozlamalar' && (
                <div className="space-y-6">
                  {/* Shrift o'lchami */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-3">
                    <div className="flex items-center space-x-2 text-[#1E1A16] font-semibold text-sm">
                      <Type className="w-4 h-4 text-[#8C6B38]" />
                      <span>Matn shrift o‘lchami</span>
                    </div>
                    <p className="text-xs text-[#6E675F]">
                      Barcha savollar, manbalar va matnlarni o‘qish qulayligi uchun shrift hajmini tanlang:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono-code">
                      {(
                        [
                          { id: 'small', label: 'Kichik (14px)' },
                          { id: 'normal', label: 'Standart (16px)' },
                          { id: 'large', label: 'Katta (18px)' },
                          { id: 'extralarge', label: 'Juda katta (21px)' },
                        ] as const
                      ).map((item) => (
                        <button
                          key={`font-size-${item.id}`}
                          onClick={() => onUpdateSettings({ fontSize: item.id })}
                          className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer text-center ${
                            settings.fontSize === item.id
                              ? 'bg-[#8C6B38] text-white border-[#8C6B38] shadow-xs'
                              : 'bg-white text-[#4A443D] border-[#E5E0D8] hover:border-[#8C6B38]/50 hover:bg-[#FAF5ED]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Live Preview Sample */}
                    <div className="p-3 bg-white rounded-lg border border-[#E5E0D8] space-y-1">
                      <span className="text-[10px] font-bold uppercase text-[#8C6B38] tracking-wider block">
                        Shrift ko‘rinishi namunasi:
                      </span>
                      <p className="text-sm font-medium text-[#1E1A16] leading-relaxed">
                        1-modda. O‘zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat.
                      </p>
                    </div>
                  </div>

                  {/* 1. Har bir bo'limda savollar soni */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[#1E1A16] font-semibold text-sm">
                        <ListOrdered className="w-4 h-4 text-[#8C6B38]" />
                        <span>Har bir bo‘limda test savollari soni</span>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-md bg-white border border-[#8C6B38]/30 text-[#8C6B38]">
                        {settings.questionsPerTopic && settings.questionsPerTopic > 0
                          ? `${settings.questionsPerTopic} ta savol`
                          : 'Barcha savollar'}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E675F]">
                      Mavzuli bo‘limlar testi tanlanganda har bir mavzudan nechtadan savol berilishini belgilang:
                    </p>

                    {/* Tezkor preset tugmalar */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 font-mono-code">
                      {[
                        { val: 5, label: '5 ta' },
                        { val: 10, label: '10 ta' },
                        { val: 15, label: '15 ta' },
                        { val: 20, label: '20 ta' },
                        { val: 25, label: '25 ta' },
                        { val: 0, label: 'Barchasi' }
                      ].map((item) => (
                        <button
                          key={`q-preset-${item.val}`}
                          onClick={() => onUpdateSettings({ questionsPerTopic: item.val })}
                          className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all text-center ${
                            settings.questionsPerTopic === item.val
                              ? 'bg-[#8C6B38] text-white border-[#8C6B38]'
                              : 'bg-white text-[#4A443D] border-[#E5E0D8] hover:border-[#8C6B38]/50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Ixtiyoriy son kiritish maydoni */}
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#E5E0D8]">
                      <span className="text-xs text-[#6E675F] font-mono-code">
                        Ixtiyoriy son kiritish:
                      </span>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => {
                            const current = settings.questionsPerTopic || 10;
                            const next = Math.max(1, current - 1);
                            onUpdateSettings({ questionsPerTopic: next });
                          }}
                          className="w-8 h-8 rounded-lg bg-white hover:bg-[#F2ECE1] border border-[#E5E0D8] flex items-center justify-center text-[#6E675F] hover:text-[#1E1A16]"
                          title="Kamaytirish"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          max="50"
                          value={settings.questionsPerTopic || ''}
                          placeholder="Barchasi"
                          onChange={(e) => {
                            const val = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
                            onUpdateSettings({ questionsPerTopic: isNaN(val) ? 0 : Math.max(0, Math.min(50, val)) });
                          }}
                          className="w-16 text-center py-1 px-2 rounded-md bg-white border border-[#E5E0D8] text-xs text-[#1E1A16] font-mono-code font-bold focus:outline-none focus:border-[#8C6B38]"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const current = settings.questionsPerTopic || 0;
                            const next = Math.min(50, current + 1);
                            onUpdateSettings({ questionsPerTopic: next });
                          }}
                          className="w-8 h-8 rounded-lg bg-white hover:bg-[#F2ECE1] border border-[#E5E0D8] flex items-center justify-center text-[#6E675F] hover:text-[#1E1A16]"
                          title="Oshirish"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 2. Asosiy test vaqti taymeri (Erkin o'zgartirish) */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[#1E1A16] font-semibold text-sm">
                        <Clock className="w-4 h-4 text-[#8C6B38]" />
                        <span>Asosiy test vaqti taymeri</span>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-md bg-white border border-[#8C6B38]/30 text-[#8C6B38]">
                        {settings.defaultTimerMinutes && settings.defaultTimerMinutes > 0
                          ? `${settings.defaultTimerMinutes} daqiqa (${settings.defaultTimerMinutes * 60} soniya)`
                          : 'Cheksiz (Vaqtsiz)'}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E675F]">
                      Asosiy sinov testini bajarish vaqtini o‘zingiz xohlagan daqiqaga erkin o‘zgartiring:
                    </p>

                    {/* Tezkor preset tugmalar */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 font-mono-code">
                      {[
                        { val: 0, label: 'Vaqtsiz' },
                        { val: 15, label: '15 daq' },
                        { val: 25, label: '25 daq' },
                        { val: 30, label: '30 daq' },
                        { val: 40, label: '40 daq (DTM)' },
                        { val: 60, label: '60 daq' }
                      ].map((item) => (
                        <button
                          key={`timer-preset-${item.val}`}
                          onClick={() => onUpdateSettings({ defaultTimerMinutes: item.val })}
                          className={`py-2 px-2 rounded-lg border text-xs font-semibold transition-all text-center ${
                            settings.defaultTimerMinutes === item.val
                              ? 'bg-[#8C6B38] text-white border-[#8C6B38]'
                              : 'bg-white text-[#4A443D] border-[#E5E0D8] hover:border-[#8C6B38]/50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Erkin daqiqa sozlagichi (Input + Slider + Tugmalar) */}
                    <div className="p-3.5 rounded-lg bg-white border border-[#E5E0D8] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#6E675F] font-mono-code">
                          Ixtiyoriy daqiqa kiritish:
                        </span>
                        <div className="flex items-center space-x-2 font-mono-code">
                          <button
                            type="button"
                            onClick={() => {
                              const current = settings.defaultTimerMinutes || 0;
                              const next = Math.max(0, current - 5);
                              onUpdateSettings({ defaultTimerMinutes: next });
                            }}
                            className="px-2 py-1 rounded-md bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#E5E0D8] text-xs text-[#6E675F] hover:text-[#1E1A16]"
                            title="5 daqiqa kamaytirish"
                          >
                            -5 daq
                          </button>
                          <input
                            type="number"
                            min="0"
                            max="180"
                            value={settings.defaultTimerMinutes ?? 40}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              onUpdateSettings({ defaultTimerMinutes: isNaN(val) ? 0 : Math.max(0, Math.min(180, val)) });
                            }}
                            className="w-16 text-center py-1 px-2 rounded-md bg-white border border-[#E5E0D8] text-xs text-[#1E1A16] font-bold focus:outline-none focus:border-[#8C6B38]"
                          />
                          <span className="text-xs text-[#6E675F]">daq</span>
                          <button
                            type="button"
                            onClick={() => {
                              const current = settings.defaultTimerMinutes || 0;
                              const next = Math.min(180, current + 5);
                              onUpdateSettings({ defaultTimerMinutes: next });
                            }}
                            className="px-2 py-1 rounded-md bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#E5E0D8] text-xs text-[#6E675F] hover:text-[#1E1A16]"
                            title="5 daqiqa qo‘shish"
                          >
                            +5 daq
                          </button>
                        </div>
                      </div>

                      {/* Slider */}
                      <div className="flex items-center space-x-3 pt-1 font-mono-code">
                        <span className="text-[11px] text-[#6E675F]">0 daq</span>
                        <input
                          type="range"
                          min="0"
                          max="120"
                          step="5"
                          value={settings.defaultTimerMinutes ?? 40}
                          onChange={(e) => {
                            onUpdateSettings({ defaultTimerMinutes: parseInt(e.target.value, 10) });
                          }}
                          className="flex-1 accent-[#8C6B38] h-1.5 bg-[#E5E0D8] rounded-lg cursor-pointer"
                        />
                        <span className="text-[11px] text-[#6E675F]">120 daq</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Mavzuli (bo'lim) testlari taymeri */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[#1E1A16] font-semibold text-sm">
                        <Timer className="w-4 h-4 text-[#8C6B38]" />
                        <span>Mavzuli (bo‘lim) testlari taymeri</span>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-md bg-white border border-[#8C6B38]/30 text-[#8C6B38]">
                        {settings.topicTimerMinutes && settings.topicTimerMinutes > 0
                          ? `${settings.topicTimerMinutes} daqiqa`
                          : 'Cheksiz (Vaqtsiz)'}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E675F]">
                      Har bir huquqiy bo‘lim sinovi uchun taymer vaqtini moslang:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono-code">
                      {[
                        { val: 0, label: 'Vaqtsiz' },
                        { val: 10, label: '10 daqiqa' },
                        { val: 15, label: '15 daqiqa' },
                        { val: 20, label: '20 daqiqa' },
                        { val: 30, label: '30 daqiqa' }
                      ].map((item) => (
                        <button
                          key={`topic-timer-${item.val}`}
                          onClick={() => onUpdateSettings({ topicTimerMinutes: item.val })}
                          className={`py-2 px-2 rounded-lg border text-xs font-semibold transition-all text-center ${
                            settings.topicTimerMinutes === item.val
                              ? 'bg-[#8C6B38] text-white border-[#8C6B38]'
                              : 'bg-white text-[#4A443D] border-[#E5E0D8] hover:border-[#8C6B38]/50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#E5E0D8]">
                      <span className="text-xs text-[#6E675F] font-mono-code">
                        Ixtiyoriy daqiqa kiritish:
                      </span>
                      <div className="flex items-center space-x-2 font-mono-code">
                        <button
                          type="button"
                          onClick={() => {
                            const current = settings.topicTimerMinutes || 0;
                            const next = Math.max(0, current - 1);
                            onUpdateSettings({ topicTimerMinutes: next });
                          }}
                          className="w-8 h-8 rounded-lg bg-white hover:bg-[#F2ECE1] border border-[#E5E0D8] flex items-center justify-center text-[#6E675F] hover:text-[#1E1A16]"
                          title="Kamaytirish"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          min="0"
                          max="90"
                          value={settings.topicTimerMinutes ?? 15}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            onUpdateSettings({ topicTimerMinutes: isNaN(val) ? 0 : Math.max(0, Math.min(90, val)) });
                          }}
                          className="w-16 text-center py-1 px-2 rounded-md bg-white border border-[#E5E0D8] text-xs text-[#1E1A16] font-bold focus:outline-none focus:border-[#8C6B38]"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const current = settings.topicTimerMinutes || 0;
                            const next = Math.min(90, current + 1);
                            onUpdateSettings({ topicTimerMinutes: next });
                          }}
                          className="w-8 h-8 rounded-lg bg-white hover:bg-[#F2ECE1] border border-[#E5E0D8] flex items-center justify-center text-[#6E675F] hover:text-[#1E1A16]"
                          title="Oshirish"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Avtomatik o'tish & Tovush */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-4">
                    <h3 className="text-sm font-semibold text-[#1E1A16]">
                      Test topshirish jarayoni parametrlari
                    </h3>

                    <div className="flex items-center justify-between py-2 border-b border-[#E5E0D8]">
                      <div>
                        <span className="text-xs sm:text-sm font-medium text-[#1E1A16] block">
                          Javob tanlanganda avtomatik keyingisiga o‘tish
                        </span>
                        <span className="text-[11px] text-[#6E675F]">
                          Variant tanlangach avtomatik keyingi savolga yo‘naltiriladi
                        </span>
                      </div>
                      <button
                        onClick={() => onUpdateSettings({ autoNextOnSelect: !settings.autoNextOnSelect })}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                          settings.autoNextOnSelect ? 'bg-[#8C6B38] justify-end' : 'bg-[#E5E0D8] border border-[#D8D0C5] justify-start'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full shadow-md ${settings.autoNextOnSelect ? 'bg-white' : 'bg-[#6E675F]'}`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div>
                        <span className="text-xs sm:text-sm font-medium text-[#1E1A16] block">
                          Ovozli effektlar va tebranish
                        </span>
                        <span className="text-[11px] text-[#6E675F]">
                          Test tugashida va tanlovlarda ovozli bildirishnomalar
                        </span>
                      </div>
                      <button
                        onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                          settings.soundEnabled ? 'bg-[#8C6B38] justify-end' : 'bg-[#E5E0D8] border border-[#D8D0C5] justify-start'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full shadow-md ${settings.soundEnabled ? 'bg-white' : 'bg-[#6E675F]'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Tungi rejim & Statistika davri */}
                  <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-4">
                    <h3 className="text-sm font-semibold text-[#1E1A16] flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#8C6B38]" />
                      <span>Tungi rejim va Statistika sozlamalari</span>
                    </h3>

                    {/* Tungi rejim toggle */}
                    <div className="flex items-center justify-between py-2 border-b border-[#E5E0D8]">
                      <div>
                        <span className="text-xs sm:text-sm font-medium text-[#1E1A16] block flex items-center gap-1.5">
                          {settings.darkMode ? <Moon className="w-4 h-4 text-[#8C6B38]" /> : <Sun className="w-4 h-4 text-[#8C6B38]" />}
                          Tungi rejim (Dark Mode)
                        </span>
                        <span className="text-[11px] text-[#6E675F]">
                          Ilovani qorong‘u fonda va ko‘zni toliqtirmaydigan rejimda ko‘rish
                        </span>
                      </div>
                      <button
                        onClick={() => onUpdateSettings({ darkMode: !settings.darkMode })}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                          settings.darkMode ? 'bg-[#8C6B38] justify-end' : 'bg-[#E5E0D8] border border-[#D8D0C5] justify-start'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full shadow-md ${settings.darkMode ? 'bg-white' : 'bg-[#6E675F]'}`} />
                      </button>
                    </div>

                    {/* Statistika davri */}
                    <div className="space-y-2 pt-1">
                      <div>
                        <span className="text-xs sm:text-sm font-medium text-[#1E1A16] block flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#8C6B38]" />
                          Statistika hisoblash davri (muddatini sozlash)
                        </span>
                        <span className="text-[11px] text-[#6E675F]">
                          Statistika va tahlil panellarida ma’lumotlar qaysi davr uchun ko‘rsatilishini tanlang:
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1 font-mono-code">
                        {(
                          [
                            { id: '7', label: '7 Kunlik' },
                            { id: '30', label: '30 Kunlik' },
                            { id: 'all', label: 'Barchasi' },
                          ] as const
                        ).map((item) => (
                          <button
                            key={`stats-dur-${item.id}`}
                            onClick={() => onUpdateSettings({ statsDurationDays: item.id })}
                            className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer text-center ${
                              settings.statsDurationDays === item.id
                                ? 'bg-[#8C6B38] text-white border-[#8C6B38] shadow-xs'
                                : 'bg-white text-[#4A443D] border-[#E5E0D8] hover:border-[#8C6B38]/50 hover:bg-[#FAF5ED]'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mening Natijalarim & Statistika */}
                  {onOpenStats && (
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between">
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-[#1E1A16] block">
                          Mening natijalarim va statistika
                        </span>
                        <span className="text-[11px] font-mono-code text-[#6E675F]">
                          Jami {historyCount} ta test topshirilgan
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenStats();
                        }}
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white text-xs font-mono-code font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Natijalarni ko‘rish</span>
                      </button>
                    </div>
                  )}

                  {/* Splash Screen (Ochilish Ekrani) */}
                  {onOpenSplashScreen && (
                    <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-300/90 flex items-center justify-between">
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-amber-950 block flex items-center gap-1.5">
                          <span>Splash Screen (Ochilish ekrani)</span>
                          <span className="text-[9px] font-mono-code font-bold uppercase bg-amber-200/80 text-amber-900 px-1.5 py-0.2 rounded">
                            Jonli
                          </span>
                        </span>
                        <span className="text-[11px] font-mono-code text-amber-700">
                          Sariq "m" aylanib kelishi, ortidan o'ng tomonga MODDA chiqishi
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenSplashScreen();
                        }}
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white text-xs font-mono-code font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Ochish</span>
                      </button>
                    </div>
                  )}

                  {/* 7-Sekundlik Sayt Intro Videosi */}
                  {onOpenIntroVideo && (
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between">
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-[#1E1A16] block flex items-center gap-1.5">
                          <span>7-Sekundlik Intro Video & Eksport</span>
                          <span className="text-[9px] font-mono-code font-bold uppercase bg-stone-200 text-stone-700 px-1.5 py-0.2 rounded">
                            HD Video
                          </span>
                        </span>
                        <span className="text-[11px] font-mono-code text-[#6E675F]">
                          1080p WebM video va HD JPEG logotipni yuklab olish
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenIntroVideo();
                        }}
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#DDD7CD] hover:border-[#8C6B38] text-[#1E1A16] hover:text-[#8C6B38] text-xs font-mono-code font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-[#1E1A16]" />
                        <span>Ko‘rish</span>
                      </button>
                    </div>
                  )}

                  {/* Admin Dashboard Simulation */}
                  {onOpenAdmin && (
                    <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between">
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-indigo-950 block">
                          Admin Analitika Paneli (Simulyatsiya)
                        </span>
                        <span className="text-[11px] font-mono-code text-indigo-700">
                          Foydalanuvchilar, ulashishlar va faollar tahlili
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenAdmin();
                        }}
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-mono-code font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>Admin Panel</span>
                      </button>
                    </div>
                  )}

                  {/* Xotira va natijalar boshqaruvi */}
                  <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200 space-y-3">
                    <div className="flex items-center space-x-2 text-rose-700 font-semibold text-sm">
                      <RotateCcw className="w-4 h-4 text-rose-700" />
                      <span>Xotirani tozalash</span>
                    </div>
                    <p className="text-xs text-rose-600/80">
                      Qurilmangizda saqlangan test natijalari yoki xatolar ro‘yxatini tozalash:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 pt-2 font-mono-code">
                      <button
                        onClick={() => {
                          if (!confirmClearHistory) {
                            setConfirmClearHistory(true);
                          } else {
                            onClearHistory();
                            setConfirmClearHistory(false);
                          }
                        }}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                          confirmClearHistory
                            ? 'bg-rose-600 text-white font-bold animate-pulse'
                            : 'bg-white hover:bg-rose-100/50 text-rose-700 border border-rose-300'
                        }`}
                      >
                        {confirmClearHistory ? 'Tasdiqlaysizmi? (Barcha tarix o‘chadi)' : `Natijalar tarixini tozalash (${historyCount})`}
                      </button>

                      <button
                        onClick={() => {
                          if (!confirmClearMistakes) {
                            setConfirmClearMistakes(true);
                          } else {
                            onClearMistakes();
                            setConfirmClearMistakes(false);
                          }
                        }}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                          confirmClearMistakes
                            ? 'bg-rose-600 text-white font-bold animate-pulse'
                            : 'bg-white hover:bg-rose-100/50 text-rose-700 border border-rose-300'
                        }`}
                      >
                        {confirmClearMistakes ? 'Tasdiqlaysizmi? (Xatolar o‘chadi)' : `Xatolarni tozalash (${mistakesCount})`}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. MILLIY SERTIFIKAT KATALOGI - O'QUVCHILAR UCHUN MAXSUS ARALASH TESTLAR */}
              {activeCatalog === 'sertifikat' && (
                <div className="py-2 space-y-6">
                  {/* Top Intro Card */}
                  <div className="rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] p-5 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-white text-[#8C6B38] border border-[#8C6B38]/30 flex items-center justify-center shrink-0">
                        <Award className="w-6 h-6 text-[#8C6B38]" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] uppercase font-mono-code font-bold tracking-wider bg-[#8C6B38]/10 text-[#8C6B38] border border-[#8C6B38]/30 px-2 py-0.5 rounded-md">
                            Maxsus bo‘lim
                          </span>
                        </div>
                        <h3 className="font-syne text-base font-bold text-[#1E1A16] mt-1">
                          Milliy Sertifikat Sinovlari
                        </h3>
                        <p className="text-xs font-mono-code text-[#6E675F]">
                          O‘quvchilar uchun maxsus aralash testlar majmuasi
                        </p>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed text-[#6E675F]">
                      Ushbu bo‘limda huquq fani bo‘yicha Milliy sertifikat olishni maqsad qilgan o‘quvchilar uchun maxsus aralash testlar joylashtiriladi. Ustoz tomonidan taqdim etiladigan yangi test savollari ham shu yerga yuklab boriladi.
                    </p>
                  </div>

                  {/* Test variants list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#6E675F]">
                      Aralash Test Sinovlari
                    </h4>

                    {/* 1-Variant: BMBA Rasmiy Testi (21.12.2025 @huquq_vodiysi) */}
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-2 border-[#8C6B38] hover:border-[#785B2F] transition-all space-y-3 shadow-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              1-Variant: BMBA test (21.12.2025)
                            </h5>
                            <span className="text-[11px] font-mono-code text-[#6E675F]">
                              @huquq_vodiysi • 30 ta test • 40 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md">
                          1-Variant (21.12)
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        Bilimni baholash agentligi (BMBA) andozasidagi 1-rasmiy 30 ta test to‘plami.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('quiz', '21dec');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Sinov (40 daq)</span>
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('practice', '21dec');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-white hover:bg-amber-50 border border-amber-300 text-amber-900 font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                          <span>O‘rganish (izohli)</span>
                        </button>
                      </div>
                    </div>

                    {/* 2-Variant: BMBA Rasmiy Testi (23.12.2025 @huquq_vodiysi) */}
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-2 border-amber-500/80 hover:border-amber-600 transition-all space-y-3 shadow-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              2-Variant: BMBA test (23.12.2025)
                            </h5>
                            <span className="text-[11px] font-mono-code text-[#6E675F]">
                              @huquq_vodiysi • 30 ta test • 40 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md">
                          2-Variant (23.12)
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        Bilimni baholash agentligi (BMBA) andozasidagi 2-rasmiy 30 ta test to‘plami.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('quiz', '23dec');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Sinov (40 daq)</span>
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('practice', '23dec');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-white hover:bg-amber-50 border border-amber-300 text-amber-900 font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                          <span>O‘rganish (izohli)</span>
                        </button>
                      </div>
                    </div>

                    {/* 3-Variant: Yangi Konstitutsiya II Bo'lim - 30 ta Qiyin Test (@huquqologiya) */}
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-2 border-rose-400 hover:border-rose-500 transition-all space-y-3 shadow-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs">
                            <Flame className="w-5 h-5 fill-white stroke-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              Yangi Konstitutsiya: 30 ta Qiyin Test
                            </h5>
                            <span className="text-[11px] font-mono-code text-[#6E675F]">
                              @huquqologiya • II Bo‘lim (Inson huquqlari) • 40 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-md">
                          Qiyin daraja
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        Yangi Konstitutsiya II bo‘limi (Inson va fuqaroning asosiy huquqlari, erkinliklari va burchlari) bo‘yicha 30 ta saralangan chuqurlashtirilgan qiyin test.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartHuquqologiyaTest) {
                              onStartHuquqologiyaTest('quiz');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Sinov (40 daq)</span>
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartHuquqologiyaTest) {
                              onStartHuquqologiyaTest('practice');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-white hover:bg-rose-50 border border-rose-300 text-rose-800 font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-rose-700" />
                          <span>O‘rganish (izohli)</span>
                        </button>
                      </div>
                    </div>

                    {/* 6-Variant: BMBA 2025 OTM Imtihoni Qiyin Savollar To'plami */}
                    {/* Yangi Yuklangan Variant */}
                    <div className="p-4 rounded-xl bg-emerald-50/50 border-2 border-emerald-500 hover:border-emerald-600 transition-all space-y-3 shadow-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs animate-pulse">
                            <Sparkles className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              8-Variant: BMBA (Yangi yuklangan)
                            </h5>
                            <span className="text-[11px] font-mono-code text-emerald-800 font-medium">
                              Yangi to‘plam • 30 ta test • 40 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-md animate-bounce">
                          YANGI
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        Siz yuklagan rasmiy rasm-savollar asosida tayyorlangan, BMBA andozasidagi mukammal test savollari to‘plami.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('quiz', 'newuploaded');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Sinov (40 daq)</span>
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('practice', 'newuploaded');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
                          <span>O‘rganish (izohli)</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-2 border-purple-500 hover:border-purple-600 transition-all space-y-3 shadow-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              6-Variant: 2025 OTM Imtihoni (30 ta Qiyin Test)
                            </h5>
                            <span className="text-[11px] font-mono-code text-[#6E675F]">
                              @sodikov_admin • 30 ta saralangan qiyin test • 40 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-purple-100 text-purple-900 border border-purple-300 px-2 py-0.5 rounded-md">
                          2025 OTM Qiyin
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        2025-yilgi OTM kirish imtihonlarida tushgan Mehnat, Byudjet, Oila, Fuqarolik va Jinoyat kodeksi bo‘yicha chuqur tahliliy testlar.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('quiz', 'otm2025');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Sinov (40 daq)</span>
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('practice', 'otm2025');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-white hover:bg-purple-50 border border-purple-300 text-purple-900 font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-purple-800" />
                          <span>O‘rganish (izohli)</span>
                        </button>
                      </div>
                    </div>

                    {/* 7-Variant: BMBA 2024 OTM Imtihoni Qiyin Savollar To'plami */}
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-2 border-rose-500 hover:border-rose-600 transition-all space-y-3 shadow-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              7-Variant: 2024 OTM Imtihoni (30 ta Qiyin Test)
                            </h5>
                            <span className="text-[11px] font-mono-code text-[#6E675F]">
                              @sodikov_admin • 30 ta saralangan qiyin test • 40 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-rose-100 text-rose-900 border border-rose-300 px-2 py-0.5 rounded-md">
                          2024 OTM Qiyin
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        2024-yilgi OTM kirish imtihonlarida tushgan Ma’muriy, Jinoyat, Fuqarolik, Mehnat va Davlat ramzlari qonunchiligi bo‘yicha chuqur tahliliy testlar.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('quiz', 'otm2024');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Sinov (40 daq)</span>
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            if (onStartBmbaTest) {
                              onStartBmbaTest('practice', 'otm2024');
                            }
                          }}
                          className="py-2.5 px-3 rounded-lg bg-white hover:bg-rose-50 border border-rose-300 text-rose-900 font-mono-code font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-rose-800" />
                          <span>O‘rganish (izohli)</span>
                        </button>
                      </div>
                    </div>

                    {/* Yagona Birlashtirilgan Variant */}
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-2 border-[#8C6B38] hover:border-[#8C6B38] transition-all space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center font-bold font-mono-code text-sm shadow-xs">
                            1
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#1E1A16]">
                              1-Variant: Milliy sertifikat (45 ta savol)
                            </h5>
                            <span className="text-[11px] font-mono-code text-[#6E675F]">
                              Yagona to‘liq to‘plam • 45 ta savol • 60 daqiqa
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-md">
                          1-Variant
                        </span>
                      </div>
                      <p className="text-xs text-[#6E675F] leading-relaxed">
                        Milliy sertifikat standarti: 1–30 testlar, 31–40 vaziyatli kazuslar, 41–45 ochiq test topshiriqlari.
                      </p>
                      <button
                        onClick={() => {
                          onClose();
                          if (onStartMilliyTest) {
                            onStartMilliyTest(45, 60, "Milliy Sertifikat: 1-Variant (45 ta savol)");
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-mono-code font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-xs cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Sinovni boshlash (45 ta savol)</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. MANBALAR & KODEKSLAR KATALOGI */}
              {activeCatalog === 'manbalar' && (
                <div className="py-2 space-y-6">
                  {/* Top Intro Card */}
                  <div className="rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] p-5 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#8C6B38]/30 text-[#8C6B38] flex items-center justify-center shrink-0">
                        {manbaSubTab === 'kodekslar' ? (
                          <BookOpen className="w-5 h-5 text-[#8C6B38]" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-[#8C6B38]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-mono-code font-bold tracking-wider bg-[#8C6B38]/10 text-[#8C6B38] border border-[#8C6B38]/30 px-2 py-0.5 rounded-md">
                            Asosiy manbalar
                          </span>
                        </div>
                        <h3 className="font-syne text-base font-bold text-[#1E1A16] mt-1">
                          {manbaSubTab === 'kodekslar' ? 'Huquqiy Kodekslar va Qonunlar' : 'Maktab Darsliklari (8–11 & 8–11)'}
                        </h3>
                        <p className="text-xs font-mono-code text-[#6E675F]">
                          {manbaSubTab === 'kodekslar'
                            ? 'O‘zbekiston Respublikasining asosiy kodekslari va qonun matnlari'
                            : '8–11 sinf Huquq va Davlat va huquq nazariyasi darsliklari'}
                        </p>
                      </div>
                    </div>

                    {/* Switcher Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono-code">
                      <button
                        id="drawer-tab-kodekslar"
                        onClick={() => setManbaSubTab('kodekslar')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 ${
                          manbaSubTab === 'kodekslar'
                            ? 'bg-[#8C6B38] text-white shadow-xs'
                            : 'bg-white text-[#6E675F] border border-[#E5E0D8] hover:border-[#8C6B38]/40'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Kodekslar (6)</span>
                      </button>
                      <button
                        id="drawer-tab-darsliklar"
                        onClick={() => setManbaSubTab('darsliklar')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 ${
                          manbaSubTab === 'darsliklar'
                            ? 'bg-[#8C6B38] text-white shadow-xs'
                            : 'bg-white text-[#6E675F] border border-[#E5E0D8] hover:border-[#8C6B38]/40'
                        }`}
                      >
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Darsliklar (8)</span>
                      </button>
                    </div>

                    <p className="text-xs leading-relaxed text-[#6E675F] font-sans">
                      {manbaSubTab === 'kodekslar'
                        ? 'Ushbu bo‘limda huquqiy testlarga asos bo‘luvchi rasmiy kodekslar, qonunlar va me’yoriy hujjatlarning to‘liq matnlari bilan tanishib chiqishingiz mumkin.'
                        : 'Ushbu bo‘limda 8–11-sinf Huquq hamda Davlat va huquq nazariyasi maktab darsliklari jamlangan. To‘liq kitob shaklida o‘qishingiz yoki PDF biriktirishingiz mumkin.'}
                    </p>
                  </div>

                  {manbaSubTab === 'kodekslar' ? (
                    <div className="space-y-3 font-mono-code">
                      {/* 1. Konstitutsiya */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#8C6B38]/30 text-[#8C6B38] flex items-center justify-center font-bold text-xs">
                              01
                            </div>
                            <div>
                              <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                O‘zbekiston Respublikasi Konstitutsiyasi
                              </h5>
                              <span className="text-[11px] text-[#6E675F]">
                                Yangi tahrir (2023 yil) • 155 ta modda
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-md">
                            Asosiy Qonun
                          </span>
                        </div>
                        <p className="text-xs text-[#6E675F] font-sans">
                          Davlatimizning asosiy qonuni, inson huquq va erkinliklari, jamiyat va davlat tuzilishi.
                        </p>
                        <button
                          onClick={() => setIsKonstitutsiyaOpen(true)}
                          className="w-full py-2.5 px-4 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Konstitutsiya matnini o‘qish</span>
                        </button>
                      </div>

                      {/* 2. Mehnat Kodeksi */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#8C6B38]/30 text-[#8C6B38] flex items-center justify-center font-bold text-xs">
                              02
                            </div>
                            <div>
                              <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                O‘zbekiston Respublikasining Mehnat Kodeksi
                              </h5>
                              <span className="text-[11px] text-[#6E675F]">
                                Yangi tahrir • Xodim va ish beruvchi munosabatlari
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 border border-blue-300 px-2 py-0.5 rounded-md">
                            Kodeks
                          </span>
                        </div>
                        <p className="text-xs text-[#6E675F] font-sans">
                          Mehnat shartnomasi, ish vaqti, dam olish vaqti, ish haqi va mehnat nizolari.
                        </p>
                        <button
                          onClick={() => setIsBookReaderOpen(true)}
                          className="w-full py-2.5 px-4 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Mehnat Kodeksini o‘qish</span>
                        </button>
                      </div>

                      {/* 3. Fuqarolik Kodeksi */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#8C6B38]/30 text-[#8C6B38] flex items-center justify-center font-bold text-xs">
                              03
                            </div>
                            <div>
                              <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                O‘zbekiston Respublikasining Fuqarolik Kodeksi
                              </h5>
                              <span className="text-[11px] text-[#6E675F]">
                                Mulkchilik, majburiyatlar va shartnomalar
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase bg-purple-100 text-purple-800 border border-purple-300 px-2 py-0.5 rounded-md">
                            Kodeks
                          </span>
                        </div>
                        <p className="text-xs text-[#6E675F] font-sans">
                          Fuqarolik huquqiy munosabatlar, mulk huquqi, shartnomaviy majburiyatlar va meros.
                        </p>
                        <button
                          onClick={() => setIsFuqarolikOpen(true)}
                          className="w-full py-2.5 px-4 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Fuqarolik Kodeksini o‘qish</span>
                        </button>
                      </div>

                      {/* 4. Oila Kodeksi */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#8C6B38]/30 text-[#8C6B38] flex items-center justify-center font-bold text-xs">
                              04
                            </div>
                            <div>
                              <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                O‘zbekiston Respublikasining Oila Kodeksi
                              </h5>
                              <span className="text-[11px] text-[#6E675F]">
                                Nikoh, oila a’zolarining huquq va majburiyatlari
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-md">
                            Kodeks
                          </span>
                        </div>
                        <p className="text-xs text-[#6E675F] font-sans">
                          Nikoh tuzish va bekor qilish, ota-onalar va bolalarning huquqlari, aliment majburiyatlari.
                        </p>
                        <button
                          onClick={() => setIsOilaOpen(true)}
                          className="w-full py-2.5 px-4 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Oila Kodeksini o‘qish</span>
                        </button>
                      </div>

                      {/* 5. Ma'muriy Javobgarlik Kodeksi */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-[#8C6B38]/30 text-[#8C6B38] flex items-center justify-center font-bold text-xs">
                              05
                            </div>
                            <div>
                              <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                Ma’muriy javobgarlik to‘g‘risidagi kodeks
                              </h5>
                              <span className="text-[11px] text-[#6E675F]">
                                665 ta modda • Ma’muriy huquqbuzarliklar va jazo choralari
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-md">
                            MJtK
                          </span>
                        </div>
                        <p className="text-xs text-[#6E675F] font-sans">
                          Ma’muriy huquqbuzarlik tushunchasi, jazo turlari, sudlar va vakolatli davlat organlari yuritishi hamda ma’muriy javobgarlikdan ozod qilish asoslari.
                        </p>
                        <button
                          id="open-mamuriy-modal-btn"
                          onClick={() => setIsMamuriyOpen(true)}
                          className="w-full py-2.5 px-4 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Ma’muriy Kodeksni to‘liq o‘qish (665 ta modda)</span>
                        </button>
                      </div>

                      {/* 6. Jinoyat Kodeksi */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-rose-400 transition-all space-y-3 group">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white border border-rose-300 text-rose-600 flex items-center justify-center font-bold text-xs">
                              06
                            </div>
                            <div>
                              <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-rose-600 transition-colors">
                                O‘zbekiston Respublikasining Jinoyat Kodeksi
                              </h5>
                              <span className="text-[11px] text-[#6E675F]">
                                459 ta modda & atama • Umumiy va Maxsus qismlar
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-md">
                            JK
                          </span>
                        </div>
                        <p className="text-xs text-[#6E675F] font-sans">
                          Jinoyat tushunchasi, jinoiy javobgarlik prinsiplari va asoslari, jazo turlari va tayinlash, shaxsga va davlatga qarshi jinoyatlar hamda atamalar ma’nosi.
                        </p>
                        <button
                          id="open-jinoyat-modal-btn"
                          onClick={() => setIsJinoyatOpen(true)}
                          className="w-full py-2.5 px-4 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Jinoyat Kodeksini to‘liq o‘qish (459 ta modda)</span>
                        </button>
                      </div>

                      {/* External Lex.uz Link */}
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h5 className="font-syne text-xs font-bold text-[#1E1A16]">
                            Rasmiy huquqiy axborot portali (Lex.uz)
                          </h5>
                          <p className="text-[11px] text-[#6E675F]">
                            Barcha qonun hujjatlarining eng so‘nggi tahriri
                          </p>
                        </div>
                        <a
                          href="https://lex.uz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg bg-white hover:bg-[#F2ECE1] text-[#8C6B38] border border-[#8C6B38]/30 text-xs font-bold uppercase tracking-wider flex items-center space-x-1 shrink-0 transition-all shadow-xs"
                        >
                          <span>Lex.uz</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Textbooks List in Drawer */
                    <div className="space-y-3 font-mono-code">
                      {drawerDarslikSubject === 'all' ? (
                        <>
                          <div className="p-3 bg-[#FAF8F5] border border-[#E5E0D8] rounded-lg flex items-center justify-between text-xs">
                            <span className="font-bold text-[#1E1A16]">Maktab darsliklari to‘plami</span>
                            <span className="text-[#8C6B38] font-bold">8 ta kitob</span>
                          </div>

                          {/* Block 1: Huquq darsliklari */}
                          <div
                            onClick={() => {
                              setDrawerDarslikSubject('huquq');
                            }}
                            className="cursor-pointer p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center space-x-2.5">
                                <div className="w-10 h-10 rounded-lg bg-white text-[#8C6B38] border border-[#8C6B38]/30 flex items-center justify-center font-bold text-xs">
                                  <Scale className="w-5 h-5" />
                                </div>
                                <div>
                                  <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                    Huquq darsliklari
                                  </h5>
                                  <span className="text-[11px] text-[#8C6B38]">
                                    8, 9, 10 va 11-sinflar
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-white text-[#8C6B38] border border-[#8C6B38]/30">
                                4 ta sinf
                              </span>
                            </div>
                            <p className="text-xs text-[#6E675F] font-sans leading-relaxed">
                              Maktab o‘quvchilari uchun «Davlat va huquq asoslari» fanining rasmiy darsliklari.
                            </p>
                            <div className="flex items-center justify-between pt-1">
                              <div className="flex gap-1.5">
                                {['8', '9', '10', '11'].map((g) => (
                                  <span key={g} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#6E675F] border border-[#E5E0D8]">
                                    {g}-sinf
                                  </span>
                                ))}
                              </div>
                              <span className="text-xs font-bold text-[#8C6B38] uppercase tracking-wider flex items-center">
                                Tanlash <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                              </span>
                            </div>
                          </div>

                          {/* Block 2: Davlat va huquq nazariyasi */}
                          <div
                            onClick={() => {
                              setDrawerDarslikSubject('nazariya');
                            }}
                            className="cursor-pointer p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center space-x-2.5">
                                <div className="w-10 h-10 rounded-lg bg-white text-[#8C6B38] border border-[#8C6B38]/30 flex items-center justify-center font-bold text-xs">
                                  <Landmark className="w-5 h-5" />
                                </div>
                                <div>
                                  <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                    Davlat va huquq nazariyasi
                                  </h5>
                                  <span className="text-[11px] text-[#8C6B38]">
                                    8-sinfdan 11-sinfgacha
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-white text-[#8C6B38] border border-[#8C6B38]/30">
                                4 ta sinf
                              </span>
                            </div>
                            <p className="text-xs text-[#6E675F] font-sans leading-relaxed">
                              Fundamental huquqiy tushunchalar, davlat tuzilishi va huquq normalari nazariyasi.
                            </p>
                            <div className="flex items-center justify-between pt-1">
                              <div className="flex flex-wrap gap-1.5">
                                {['8', '9', '10', '11'].map((g) => (
                                  <span key={g} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-[#6E675F] border border-[#E5E0D8]">
                                    {g}-sinf
                                  </span>
                                ))}
                              </div>
                              <span className="text-xs font-bold text-[#8C6B38] uppercase tracking-wider flex items-center">
                                Tanlash <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Inside selected subject in drawer */
                        <>
                          <div className="flex items-center justify-between gap-2">
                            <button
                              onClick={() => {
                                setDrawerDarslikSubject('all');
                              }}
                              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E0D8] hover:border-[#8C6B38]/40 text-[#1E1A16] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                              <span>Ortga qaytish</span>
                            </button>

                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => {
                                  setDrawerDarslikSubject('huquq');
                                }}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all ${
                                  drawerDarslikSubject === 'huquq'
                                    ? 'bg-[#8C6B38] text-white shadow-xs'
                                    : 'bg-white text-[#6E675F] border border-[#E5E0D8]'
                                }`}
                              >
                                Huquq
                              </button>
                              <button
                                onClick={() => {
                                  setDrawerDarslikSubject('nazariya');
                                }}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all ${
                                  drawerDarslikSubject === 'nazariya'
                                    ? 'bg-[#8C6B38] text-white shadow-xs'
                                    : 'bg-white text-[#6E675F] border border-[#E5E0D8]'
                                }`}
                              >
                                Nazariya
                              </button>
                            </div>
                          </div>

                          {/* Books list */}
                          {DARSLIKLAR_DATA.filter((b) => {
                            if (b.category !== drawerDarslikSubject) return false;
                            return true;
                          }).map((book) => (
                            <div
                              key={book.id}
                              className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-3 group"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h5 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                                    {book.title}
                                  </h5>
                                  <span className="text-[11px] text-[#6E675F]">
                                    {book.subtitle}
                                  </span>
                                </div>
                                <span
                                  className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-white text-[#8C6B38] border border-[#8C6B38]/30"
                                >
                                  {book.badge}
                                </span>
                              </div>
                              <p className="text-xs text-[#6E675F] font-sans leading-relaxed">
                                {book.description}
                              </p>

                              {!!pdfCache[book.id] && (
                                <div className="flex items-center space-x-1.5 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-0.5 w-fit font-medium">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                  <span>Doimiy saqlangan (Server & Oflayn)</span>
                                </div>
                              )}

                              <div className="pt-1 flex items-center gap-2">
                                <button
                                  onClick={() => setActiveTextbook(book)}
                                  className="flex-1 py-2.5 px-3 rounded-lg bg-[#8C6B38] hover:bg-[#785B2F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  <span>Ochib o‘qish</span>
                                </button>
                                <label className="cursor-pointer p-2.5 rounded-lg bg-white border border-[#E5E0D8] hover:border-[#8C6B38] text-[#8C6B38] flex items-center justify-center transition-all shadow-3xs" title="PDF fayl yuklash yoki almashtirish">
                                  <UploadCloud className="w-4 h-4" />
                                  <input
                                    type="file"
                                    accept="application/pdf,.pdf"
                                    onChange={async (e) => {
                                      if (e.target.files && e.target.files[0]) {
                                        const f = e.target.files[0];
                                        const valid = await verifyPdfSource(f);
                                        if (valid) {
                                          await savePdfToStorage(book.id, f);
                                          setNavPdfVersion((v) => v + 1);
                                        } else {
                                          alert('Tanlangan fayl haqiqiy PDF emas!');
                                        }
                                      }
                                    }}
                                    className="hidden"
                                  />
                                </label>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 3. YILLAR XRONOLOGIYASI KATALOGI */}
              {activeCatalog === 'xronologiya' && (
                <div className="space-y-4 font-mono-code">
                  {/* Search and Category Filters */}
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E675F]/60" />
                      <input
                        type="text"
                        value={chronologySearch}
                        onChange={(e) => setChronologySearch(e.target.value)}
                        placeholder="Yil yoki voqea bo‘yicha qidirish (1992, Konstitutsiya, Bayroq)..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E0D8] rounded-lg text-xs sm:text-sm text-[#1E1A16] placeholder-[#6E675F]/60 focus:outline-none focus:border-[#8C6B38]"
                      />
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
                      {[
                        { id: 'all', label: `Barchasi (${CHRONOLOGY_EVENTS.length})` },
                        { id: 'qonunlar', label: 'Qonunlar' },
                        { id: 'kodekslar', label: 'Kodekslar' },
                        { id: 'davlat', label: 'Davlat ramzlari va davlatchilik' },
                        { id: 'konstitutsiya', label: 'Konstitutsiya' },
                        { id: 'islohotlar', label: 'Islohotlar' }
                      ].map((item) => (
                        <button
                          key={`chrono-filter-${item.id}`}
                          onClick={() => setChronologyFilter(item.id)}
                          className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-colors ${
                            chronologyFilter === item.id
                              ? 'bg-[#8C6B38] text-white shadow-xs'
                              : 'bg-white border border-[#E5E0D8] text-[#6E675F] hover:border-[#8C6B38]/40'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chronology List */}
                  <div className="space-y-3 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-[#E5E0D8]">
                    {filteredChronology.length === 0 ? (
                      <div className="text-center py-12 text-[#6E675F] text-xs">
                        Hech qanday tarixiy sana topilmadi.
                      </div>
                    ) : (
                      filteredChronology.map((event, eventIdx) => (
                        <div
                          key={`chrono-${event.id}-${eventIdx}`}
                          className="relative pl-10 group"
                        >
                          {/* Year marker dot */}
                          <div className="absolute left-3.5 top-3 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8C6B38] group-hover:scale-125 transition-transform" />

                          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#8C6B38] transition-all space-y-2">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <div className="flex items-center space-x-2">
                                <span className="px-2.5 py-0.5 rounded-md bg-white text-[#8C6B38] text-xs font-bold font-mono-code border border-[#8C6B38]/30">
                                  {event.year}
                                </span>
                                {event.dateExact && (
                                  <span className="text-[11px] text-[#6E675F] font-medium flex items-center space-x-1">
                                    <Calendar className="w-3 h-3 text-[#8C6B38]" />
                                    <span>{event.dateExact}</span>
                                  </span>
                                )}
                              </div>

                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                                event.category === 'konstitutsiya'
                                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                                  : event.category === 'kodekslar'
                                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                                  : event.category === 'qonunlar'
                                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                  : event.category === 'davlat'
                                  ? 'bg-white text-[#8C6B38] border-[#8C6B38]/30'
                                  : 'bg-white text-[#6E675F] border-[#E5E0D8]'
                              }`}>
                                {event.category === 'konstitutsiya' && 'Konstitutsiya'}
                                {event.category === 'kodekslar' && 'Kodeks'}
                                {event.category === 'qonunlar' && 'Qonun'}
                                {event.category === 'davlat' && 'Davlat / Ramz'}
                                {event.category === 'islohotlar' && 'Islohot'}
                                {event.category === 'xalqaro' && 'Xalqaro'}
                              </span>
                            </div>

                            <h4 className="font-syne text-sm font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                              {event.title}
                            </h4>

                            <p className="text-xs text-[#6E675F] font-sans leading-relaxed">
                              {event.description}
                            </p>

                            {event.examTip && (
                              <div className="p-2.5 rounded-lg bg-[#F2ECE1]/70 border border-[#8C6B38]/30 text-[11px] text-[#8C6B38] flex items-start space-x-2">
                                <Sparkles className="w-3.5 h-3.5 text-[#8C6B38] shrink-0 mt-0.5" />
                                <div>
                                  <strong className="font-bold">DTM imtihonida eslab qoling: </strong>
                                  <span className="text-[#1E1A16] font-sans">{event.examTip}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer info */}
            <div className="px-6 py-3 border-t border-[#E5E0D8] bg-[#FAF8F5] text-center text-xs font-mono-code text-[#6E675F]">
              MODDA • Milliy sertifikat va huquq fani platformasi
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    {/* Book Reader Modals */}
    <BookReaderModal
      isOpen={activeTextbook !== null}
      onClose={() => setActiveTextbook(null)}
      title={activeTextbook?.title || ''}
      data={activeTextbook?.data || []}
      textbookId={activeTextbook?.id}
    />
    <BookReaderModal
      isOpen={isBookReaderOpen}
      onClose={() => setIsBookReaderOpen(false)}
      title="O‘zbekiston Respublikasining Mehnat Kodeksi"
      data={MEHNAT_KODEKSI_FULL_TEXT}
    />
    <BookReaderModal
      isOpen={isKonstitutsiyaOpen}
      onClose={() => setIsKonstitutsiyaOpen(false)}
      title="O‘zbekiston Respublikasi Konstitutsiyasi"
      data={KONSTITUTSIYA_FULL_TEXT}
    />
    <BookReaderModal
      isOpen={isFuqarolikOpen}
      onClose={() => setIsFuqarolikOpen(false)}
      title="O‘zbekiston Respublikasining Fuqarolik Kodeksi"
      data={FUQAROLIK_KODEKSI_FULL_TEXT}
    />
    <BookReaderModal
      isOpen={isOilaOpen}
      onClose={() => setIsOilaOpen(false)}
      title="O‘zbekiston Respublikasining Oila Kodeksi"
      data={OILA_KODEKSI_FULL_TEXT}
    />
    <BookReaderModal
      isOpen={isMamuriyOpen}
      onClose={() => setIsMamuriyOpen(false)}
      title="Ma’muriy javobgarlik to‘g‘risidagi kodeks"
      data={MAMURIY_KODEKSI_FULL_TEXT}
    />
    <BookReaderModal
      isOpen={isJinoyatOpen}
      onClose={() => setIsJinoyatOpen(false)}
      title="O‘zbekiston Respublikasining Jinoyat Kodeksi"
      data={JINOYAT_KODEKSI_FULL_TEXT}
    />
  </>
);
};
