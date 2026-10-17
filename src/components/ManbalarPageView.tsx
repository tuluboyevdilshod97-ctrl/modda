import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Search,
  Shield,
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
  GraduationCap,
  Scale,
  Landmark,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookMarked,
  UploadCloud
} from 'lucide-react';
import { BookReaderModal } from './BookReaderModal';
import { pdfCache, savePdfToStorage, initPdfCacheFromStorage, subscribePdfCache, verifyPdfSource } from '../utils/pdfStorage';
import { MEHNAT_KODEKSI_FULL_TEXT } from '../data/mehnatKodeksiFullText';
import { KONSTITUTSIYA_FULL_TEXT } from '../data/konstitutsiyaFullText';
import { FUQAROLIK_KODEKSI_FULL_TEXT } from '../data/fuqarolikKodeksiFullText';
import { OILA_KODEKSI_FULL_TEXT } from '../data/oilaKodeksiFullText';
import { MAMURIY_KODEKSI_FULL_TEXT } from '../data/mamuriyKodeksiFullText';
import { JINOYAT_KODEKSI_FULL_TEXT } from '../data/jinoyatKodeksiFullText';
import { DARSLIKLAR_DATA, Textbook } from '../data/darsliklarData';
import { Question } from '../types';
import { Darslik10QuizModal } from './Darslik10QuizModal';

const LAW_PENCIL_SKETCH_SRC = '/assets/images/law_pencil_sketch.jpg';
const LAW_PENCIL_SKETCH_FALLBACK = '/assets/images/law_pencil_sketch_1789969668190.jpg';

interface ManbalarPageViewProps {
  onBack: () => void;
  onStartQuiz?: (questions: Question[], title: string, timeLimitSeconds: number) => void;
  onOpenGradeQuiz?: (grade: number) => void;
}

export const ManbalarPageView: React.FC<ManbalarPageViewProps> = ({ onBack, onStartQuiz, onOpenGradeQuiz }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'kodekslar' | 'darsliklar'>('kodekslar');
  const [activeTextbook, setActiveTextbook] = useState<Textbook | null>(null);
  const [darslikSubject, setDarslikSubject] = useState<'all' | 'nazariya' | 'huquq'>('huquq');
  const [pdfUploadState, setPdfUploadState] = useState<number>(0);
  const [saveToast, setSaveToast] = useState<string | null>(null);
  const [isUploadingId, setIsUploadingId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 150ms corresponds to the middle of Framer Motion's scale animation. Deferring the heavy list render makes the scale-up completely fluid.
    const timerReady = setTimeout(() => {
      setIsReady(true);
    }, 150);

    // Defer non-critical IndexedDB & server cache initialization until after the opening transition finishes
    const timer = setTimeout(() => {
      initPdfCacheFromStorage();
    }, 350);
    const unsub = subscribePdfCache(() => {
      setPdfUploadState((prev) => prev + 1);
    });
    return () => {
      clearTimeout(timerReady);
      clearTimeout(timer);
      unsub();
    };
  }, []);

  const handlePdfUploadForTextbook = async (tb: Textbook, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIsUploadingId(tb.id);
      try {
        const validated = await verifyPdfSource(file);
        if (!validated) {
          alert('Tanlangan fayl haqiqiy PDF formatida emas! Iltimos, haqiqiy PDF fayl yuklang.');
          setIsUploadingId(null);
          return;
        }
        await savePdfToStorage(tb.id, file);
        setPdfUploadState((prev) => prev + 1);
        setSaveToast(`«${tb.title}» darsligi doimiy saqlandi va saytda faollashtirildi!`);
        setTimeout(() => setSaveToast(null), 4000);
      } catch (err) {
        console.error('Kitobni saqlashda xatolik:', err);
      } finally {
        setIsUploadingId(null);
      }
    }
  };

  const [isBookReaderOpen, setIsBookReaderOpen] = useState(false);
  const [isKonstitutsiyaOpen, setIsKonstitutsiyaOpen] = useState(false);
  const [isFuqarolikOpen, setIsFuqarolikOpen] = useState(false);
  const [isOilaOpen, setIsOilaOpen] = useState(false);
  const [isMamuriyOpen, setIsMamuriyOpen] = useState(false);
  const [isJinoyatOpen, setIsJinoyatOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState<{ atBottom: boolean; isScrolled: boolean }>({
    atBottom: false,
    isScrolled: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.transition-container') as HTMLElement;
      if (container) {
        const isScrolled = container.scrollTop > 180;
        const atBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 120;
        setScrollProgress({ atBottom, isScrolled });
      } else {
        const isScrolled = window.scrollY > 180;
        const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;
        setScrollProgress({ atBottom, isScrolled });
      }
    };

    const container = document.querySelector('.transition-container') as HTMLElement;
    const target: HTMLElement | Window = container || window;
    target.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 300);
    return () => {
      target.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [activeTab, darslikSubject, isReady]);

  const handleScrollAction = () => {
    const container = document.querySelector('.transition-container') as HTMLElement;
    if (container) {
      if (scrollProgress.atBottom) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
      }
    } else {
      if (scrollProgress.atBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
      }
    }
  };

  const codes = [
    {
      id: 'konstitutsiya',
      title: 'O‘zbekiston Respublikasi Konstitutsiyasi',
      subtitle: 'Yangi tahrir (2023 yil) • 155 ta modda',
      badge: 'Asosiy Qonun',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      description: 'Davlatimizning asosiy qonuni, inson huquq va erkinliklari, jamiyat va davlat tuzilishi.',
      onRead: () => setIsKonstitutsiyaOpen(true),
      number: '1'
    },
    {
      id: 'mehnat',
      title: 'O‘zbekiston Respublikasining Mehnat Kodeksi',
      subtitle: 'Yangi tahrir • Xodim va ish beruvchi munosabatlari',
      badge: 'Kodeks',
      badgeColor: 'bg-blue-100 text-blue-800',
      description: 'Mehnat shartnomasi, ish vaqti, dam olish vaqti, ish haqi va mehnat nizolari.',
      onRead: () => setIsBookReaderOpen(true),
      number: '2'
    },
    {
      id: 'fuqarolik',
      title: 'O‘zbekiston Respublikasining Fuqarolik Kodeksi',
      subtitle: 'Mulkchilik, majburiyatlar va shartnomalar',
      badge: 'Kodeks',
      badgeColor: 'bg-purple-100 text-purple-800',
      description: 'Fuqarolik huquqiy munosabatlar, mulk huquqi, shartnomaviy majburiyatlar va meros.',
      onRead: () => setIsFuqarolikOpen(true),
      number: '3'
    },
    {
      id: 'oila',
      title: 'O‘zbekiston Respublikasining Oila Kodeksi',
      subtitle: 'Nikoh, oila a’zolarining huquq va majburiyatlari',
      badge: 'Kodeks',
      badgeColor: 'bg-rose-100 text-rose-800',
      description: 'Nikoh tuzish va bekor qilish, ota-ona va bolalarning huquqlari, aliment majburiyatlari.',
      onRead: () => setIsOilaOpen(true),
      number: '4'
    },
    {
      id: 'mamuriy',
      title: 'Ma’muriy javobgarlik to‘g‘risidagi kodeks (MJTK)',
      subtitle: 'Ma’muriy huquqbuzarliklar va javobgarlik choralari',
      badge: 'Kodeks',
      badgeColor: 'bg-amber-100 text-amber-800',
      description: 'Ma’muriy huquqbuzarlik turlari, jarimalar va ma’muriy jazo choralari.',
      onRead: () => setIsMamuriyOpen(true),
      number: '5'
    },
    {
      id: 'jinoyat',
      title: 'O‘zbekiston Respublikasining Jinoyat Kodeksi',
      subtitle: 'Jinoyat va jazo turlari',
      badge: 'Kodeks',
      badgeColor: 'bg-red-100 text-red-800',
      description: 'Jinoyat tushunchasi, javobgarlik asoslari va jazo turlari tizimi.',
      onRead: () => setIsJinoyatOpen(true),
      number: '6'
    }
  ];

  const filteredCodes = codes.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTextbooks = DARSLIKLAR_DATA.filter((tb) => {
    if (darslikSubject !== 'all' && tb.category !== darslikSubject) return false;

    const matchesSearch =
      tb.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tb.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tb.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-full w-full bg-[#FBF9F4] text-[#1E1A16] flex flex-col font-sans touch-pan-y">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DD] px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#1E1A16] border border-[#DDD7CD] text-xs font-bold uppercase tracking-wider shadow-2xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Bosh sahifaga</span>
          </button>
          <div className="h-6 w-[1px] bg-[#DDD7CD] hidden sm:block" />
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38]">
              <BookOpen className="w-5 h-5 text-[#8C6B38]" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#1E1A16] tracking-tight">
                Huquqiy Manbalar va Darsliklar Kutubxonasi
              </h1>
              <p className="text-xs text-[#736B60] hidden sm:block">
                O‘zbekiston Respublikasi kodekslari va maktab darsliklarining to‘liq matnlari
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 space-y-8">
        {/* Intro Banner */}
        <div className="relative rounded-2xl bg-[#FAF7F0] border border-[#DDD7CD] p-6 sm:p-8 space-y-4 shadow-2xs overflow-hidden">
          {/* Law Pencil Sketch Background (Scales of Justice & Gavel) */}
          <div 
            className="absolute top-0 right-0 bottom-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-[45%] z-0 select-none pointer-events-none overflow-hidden hidden md:flex items-end justify-end"
            style={{ contain: 'paint layout' }}
          >
            <picture className="block h-full w-auto">
              <source srcSet="/assets/images/law_pencil_sketch.avif" type="image/avif" />
              <source srcSet="/assets/images/law_pencil_sketch.webp" type="image/webp" />
              <img
                src={LAW_PENCIL_SKETCH_SRC}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('1789969668190')) {
                    target.src = LAW_PENCIL_SKETCH_FALLBACK;
                  }
                }}
                alt="Adolat tarozisi va sudya bolg'asi qalam tasviri"
                className="block m-0 p-0 h-full w-auto object-contain object-right-bottom opacity-80 sm:opacity-85 contrast-125 transition-opacity mix-blend-multiply"
                style={{ 
                  mixBlendMode: 'multiply',
                  maskImage: 'linear-gradient(to right, transparent, black 65%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 65%)',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
                referrerPolicy="no-referrer"
                decoding="async"
                fetchPriority="high"
                loading="eager"
              />
            </picture>
          </div>

          <div className="relative z-10 max-w-full md:max-w-[50%] lg:max-w-[55%] space-y-3">
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] px-3 py-1 rounded-md">
              To‘liq Baza
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1A16] tracking-tight">
              Rasmiy Qonunchilik va O‘quv Darsliklari
            </h2>
            <p className="text-sm text-[#595248] leading-relaxed">
              Ushbu bo‘limda barcha asosiy huquqiy kodekslar, Konstitutsiya hamda maktab darsliklari to‘plangan. Har bir manbani kitob shaklida to‘liq ochib o‘qishingiz va imtihonlarga puxta tayyorgarlik ko‘rishingiz mumkin.
            </p>
          </div>

          <div className="relative z-10 md:hidden pt-2">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736B60]" />
              <input
                type="text"
                placeholder="Manba yoki darslik qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#DDD7CD] rounded-xl text-xs text-[#1E1A16] placeholder-[#736B60] focus:outline-none focus:border-[#8C6B38]"
              />
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#EAE5DD] gap-6">
          <button
            onClick={() => setActiveTab('kodekslar')}
            className={`pb-3 text-xs sm:text-sm uppercase font-bold tracking-wider transition-all relative ${
              activeTab === 'kodekslar'
                ? 'text-[#8C6B38]'
                : 'text-[#736B60] hover:text-[#1E1A16]'
            }`}
          >
            <span>Kodekslar va Qonunlar</span>
            {activeTab === 'kodekslar' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C6B38]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('darsliklar')}
            className={`pb-3 text-xs sm:text-sm uppercase font-bold tracking-wider transition-all relative flex items-center space-x-2 ${
              activeTab === 'darsliklar'
                ? 'text-[#8C6B38]'
                : 'text-[#736B60] hover:text-[#1E1A16]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#8C6B38]" />
            <span>Maktab Darsliklari</span>
            {activeTab === 'darsliklar' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C6B38]" />
            )}
          </button>
        </div>

        {!isReady ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#EAE5DD] h-48 animate-pulse flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded-md w-2/3"></div>
                    <div className="h-4 bg-gray-100 rounded-md w-1/3"></div>
                    <div className="h-3 bg-gray-100 rounded-md w-full"></div>
                  </div>
                  <div className="h-8 bg-gray-100 rounded-md w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === 'kodekslar' ? (
          <>
            {/* Codes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCodes.map((code) => (
                <div
                  key={code.id}
                  className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#DDD7CD] hover:border-[#8C6B38] shadow-2xs transition-all flex flex-col justify-between space-y-5 group"
                  style={{ borderRadius: '22px' }}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] flex items-center justify-center font-bold text-sm">
                          {code.number}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#1E1A16] leading-snug group-hover:text-[#8C6B38] transition-colors">
                            {code.title}
                          </h3>
                          <span className="text-xs text-[#736B60]">
                            {code.subtitle}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] shrink-0">
                        {code.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                      {code.description}
                    </p>
                  </div>

                  <button
                    onClick={code.onRead}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xs transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Kitobni ochib o‘qish</span>
                  </button>
                </div>
              ))}
            </div>

            {filteredCodes.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#DDD7CD]">
                <p className="text-sm text-[#736B60]">Qidiruv bo‘yicha hech qanday kodeks topilmadi.</p>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-6">
            {/* Header info & Category Switcher */}
            <div
              className="bg-white border border-[#DDD7CD] rounded-[22px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs"
              style={{ borderRadius: '22px' }}
            >
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6B38] bg-[#FAF5ED] border border-[#E6DCC8] px-2.5 py-1 rounded-md">
                    Darsliklar bo‘limi
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    PDF yuklash faol
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E1A16]">
                  Maktab darsliklari to‘plami (8–11-sinflar)
                </h2>
                <p className="text-xs sm:text-sm text-[#595248] max-w-2xl">
                  Har bir sinf uchun rasmiy PDF darslikni to‘g‘ridan-to‘g‘ri yuklang. Yuklangan kitoblar brauzeringiz va tizimda doimiy saqlanadi hamda oflayn rejimda ham ochiladi.
                </p>
              </div>

              {/* Subject Tabs */}
              <div className="flex items-center bg-[#FAF8F5] p-1.5 rounded-xl border border-[#DDD7CD] space-x-1 shrink-0">
                <button
                  onClick={() => setDarslikSubject('huquq')}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    darslikSubject === 'huquq'
                      ? 'bg-[#8C6B38] text-white shadow-2xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                >
                  Huquq darsliklari
                </button>
                <button
                  onClick={() => setDarslikSubject('nazariya')}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    darslikSubject === 'nazariya'
                      ? 'bg-[#8C6B38] text-white shadow-2xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                >
                  Nazariya darsliklari
                </button>
              </div>
            </div>

            {/* Informational Callout */}
            <div className="bg-[#FAF5ED] border border-[#E6DCC8] rounded-2xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-[#595248]">
              <div className="w-8 h-8 rounded-xl bg-white border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38] shrink-0 font-bold">
                💡
              </div>
              <div>
                <strong className="text-[#1E1A16] block font-bold mb-0.5">Darslik yuklash bo‘yicha qo‘llanma:</strong>
                <span>
                  Har bir sinf kartochkasidagi <strong className="text-[#8C6B38]">«Kitob yuklash (PDF fayli)»</strong> tugmasini bosib, tegishli sinfning rasmiy PDF kitobini yuklang. Kitob yuklangach, <strong className="text-[#1E1A16]">«Ochib o‘qish»</strong> tugmasi orqali to‘liq varaqlab o‘qishingiz mumkin.
                </span>
              </div>
            </div>

            {/* Textbooks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTextbooks.map((tb) => {
                const isPdfUploaded = !!pdfCache[tb.id];
                const isUploading = isUploadingId === tb.id;

                return (
                  <div
                    key={tb.id}
                    className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#DDD7CD] hover:border-[#8C6B38] shadow-2xs transition-all flex flex-col justify-between space-y-5 group"
                    style={{ borderRadius: '22px' }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] flex items-center justify-center font-bold text-sm">
                            {tb.grade}
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#1E1A16] leading-snug group-hover:text-[#8C6B38] transition-colors">
                              {tb.title}
                            </h3>
                            <span className="text-xs text-[#736B60]">
                              {tb.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] shrink-0">
                          {tb.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                        {tb.description}
                      </p>

                      {/* PDF Status Badge */}
                      <div className="pt-1">
                        {isPdfUploaded ? (
                          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>Darslik PDF yuklangan (O‘qishga tayyor)</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                            <UploadCloud className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>Darslik yuklanmagan (PDF kiritish kerak)</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2.5">
                      {/* Prominent Upload Button */}
                      <label
                        className={`w-full py-3 px-4 rounded-xl border flex items-center justify-center space-x-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-2xs ${
                          isUploading
                            ? 'bg-[#FAF8F5] border-[#DDD7CD] text-[#736B60] cursor-wait'
                            : isPdfUploaded
                            ? 'bg-[#FAF5ED] hover:bg-[#F3EBDC] text-[#8C6B38] border-[#E6DCC8]'
                            : 'bg-[#8C6B38] hover:bg-[#78592c] text-white border-[#8C6B38]'
                        }`}
                      >
                        {isUploading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#8C6B38] border-t-transparent rounded-full animate-spin" />
                            <span>Yuklanmoqda...</span>
                          </>
                        ) : (
                          <>
                            <UploadCloud className="w-4 h-4 shrink-0" />
                            <span>{isPdfUploaded ? 'Boshqa PDF yuklash (Yangilash)' : 'Kitob yuklash (PDF fayli)'}</span>
                          </>
                        )}
                        <input
                          type="file"
                          accept="application/pdf"
                          disabled={isUploading}
                          onChange={(e) => handlePdfUploadForTextbook(tb, e)}
                          className="hidden"
                        />
                      </label>

                      {/* Read & Quiz Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={() => setActiveTextbook(tb)}
                          className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-2xs transition-all cursor-pointer ${
                            isPdfUploaded
                              ? 'bg-[#1E1A16] hover:bg-[#332c25] text-white'
                              : 'bg-[#FAF8F5] hover:bg-[#FAF5ED] text-[#1E1A16] border border-[#DDD7CD]'
                          }`}
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Ochib o‘qish</span>
                        </button>

                        {onOpenGradeQuiz && (
                          <button
                            onClick={() => onOpenGradeQuiz(tb.grade)}
                            className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#8C6B38] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-2xs transition-all border border-[#DDD7CD] hover:border-[#8C6B38] cursor-pointer"
                          >
                            <GraduationCap className="w-4 h-4 text-[#8C6B38]" />
                            <span>{tb.grade === 8 ? '340' : tb.grade === 9 ? '300' : '200'} ta test</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredTextbooks.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#DDD7CD]">
                <p className="text-sm text-[#736B60]">
                  Ushbu qidiruv bo‘yicha hech qanday darslik topilmadi.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#EAE5DD] bg-[#FAF8F5] py-6 text-center text-xs text-[#736B60] mt-auto">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16">
          <span>MODDA • Huquqiy manbalar va kodekslar kutubxonasi</span>
        </div>
      </footer>

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

      {/* Floating Save Toast */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E1A16] text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center space-x-3 border border-[#3E3830]">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{saveToast}</span>
        </div>
      )}

      {/* Mobile Quick Scroll Helper: Pastga tushish / Tepaga chiqish */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          type="button"
          onClick={handleScrollAction}
          className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-full bg-[#1E1A16]/95 text-white shadow-2xl backdrop-blur-md border border-[#8C6B38] text-xs font-bold active:scale-95 transition-all cursor-pointer"
          title={scrollProgress.atBottom ? "Tepaga chiqish" : "Pastga tushish"}
        >
          {scrollProgress.atBottom ? (
            <>
              <ChevronUp className="w-4 h-4 text-[#E6C687]" />
              <span>Tepaga</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 text-[#E6C687]" />
              <span>Pastga tushish</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
