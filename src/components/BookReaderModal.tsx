import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  BookOpen,
  ListOrdered,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Columns,
  Square,
  Scale,
  FileText,
  HelpCircle,
  Compass
} from 'lucide-react';
import { FullArticle, FullSection } from '../data/mehnatKodeksiFullText';
import { Darslik8Reader } from './Darslik8Reader';
import { DARSLIK_8_FULL } from '../data/darslik8Complete';
import { pdfCache } from '../utils/pdfStorage';

const SUP_TO_NUM: Record<string, string> = {
  '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5',
  '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁰': '0'
};

export const renderWithSuperscript = (text: string): React.ReactNode => {
  if (!text) return '';
  if (!/[¹²³⁴⁵⁶⁷⁸⁹⁰]/.test(text)) {
    return text;
  }
  const parts = text.split(/([¹²³⁴⁵⁶⁷⁸⁹⁰]+)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/^[¹²³⁴⁵⁶⁷⁸⁹⁰]+$/.test(part)) {
          const num = part.split('').map((ch) => SUP_TO_NUM[ch] || ch).join('');
          return (
            <sup key={i} className="text-[0.68em] font-extrabold leading-none align-super px-[1px]">
              {num}
            </sup>
          );
        }
        return part;
      })}
    </>
  );
};

const normalizeForSearch = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, (m) => SUP_TO_NUM[m] || m)
    .replace(/[\-–—\s\.]+/g, '');
};

interface BookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: FullSection[];
  textbookId?: string;
}

type ReaderTheme = 'sepia' | 'light' | 'dark';
type ViewMode = 'spread' | 'single';

export const BookReaderModal: React.FC<BookReaderModalProps> = ({
  isOpen,
  onClose,
  title,
  data,
  textbookId
}) => {
  const isDarslik8 =
    textbookId === 'huquq-8' ||
    textbookId === 'huquq-9' ||
    textbookId === 'huquq-10' ||
    textbookId === 'huquq-11' ||
    (!!textbookId && textbookId.startsWith('nazariya-')) ||
    title.includes('8-sinf') ||
    title.includes('9-sinf') ||
    title.includes('10-sinf') ||
    title.includes('11-sinf') ||
    title.toLowerCase().includes('davlat va huquq') ||
    title.toLowerCase().includes('darslig');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  // Default to 2-page spread on PC/Desktop (>= 1024px) as requested, single on mobile
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      return 'spread';
    }
    return 'single';
  });
  const [theme, setTheme] = useState<ReaderTheme>('sepia');
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [activeArticleKey, setActiveArticleKey] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(`bookmarks_${textbookId || 'general'}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<{ atBottom: boolean; hasScroll: boolean }>({
    atBottom: false,
    hasScroll: false
  });

  // Track scroll position to provide easy mobile scroll down / top action
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const checkScroll = () => {
      const hasScroll = el.scrollHeight > el.clientHeight + 40;
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
      setScrollProgress({ atBottom, hasScroll });
    };
    el.addEventListener('scroll', checkScroll, { passive: true });
    // Check initial layout and on page switch
    const t = setTimeout(checkScroll, 250);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      clearTimeout(t);
    };
  }, [currentPage, isDarslik8]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Total pages calculation
  const totalPages = useMemo(() => {
    if (isDarslik8) return DARSLIK_8_FULL.totalPages || 126;
    let count = 0;
    data.forEach((s) => {
      s.chapters.forEach((c) => {
        count += c.articles.length;
      });
    });
    return Math.max(1, count);
  }, [isDarslik8, data]);

  const isSpreadMode = viewMode === 'spread' && isWideScreen;
  const leftPage = isSpreadMode ? (currentPage % 2 === 1 ? currentPage : Math.max(1, currentPage - 1)) : currentPage;
  const rightPage = isSpreadMode ? (leftPage + 1 <= totalPages ? leftPage + 1 : null) : null;

  // Keyboard navigation & Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'Escape') {
        if (isTocOpen) {
          setIsTocOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isTocOpen, currentPage, totalPages, viewMode, isSpreadMode, leftPage]);

  // Reset page when opening new book
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
      setSearchTerm('');
      setIsTocOpen(false);
      // On PC / Desktop (>= 1024px), books open in 2-page spread mode so left and right sides don't stay empty
      // On mobile (< 768px), keep single page mode so mobile layout is not compromised
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        setViewMode('spread');
      } else {
        setViewMode('single');
      }
    }
  }, [isOpen, textbookId]);

  const toggleBookmark = (page: number) => {
    setBookmarks((prev) => {
      const exists = prev.includes(page);
      const next = exists ? prev.filter((p) => p !== page) : [...prev, page].sort((a, b) => a - b);
      try {
        localStorage.setItem(`bookmarks_${textbookId || 'general'}`, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const goToPage = (page: number) => {
    const target = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(target);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    if (isSpreadMode) {
      goToPage(Math.max(1, leftPage - 2));
    } else {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (isSpreadMode) {
      goToPage(Math.min(totalPages, leftPage + 2));
    } else {
      goToPage(currentPage + 1);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((z) => Math.min(160, z + 10));
  };

  const handleZoomOut = () => {
    setZoomLevel((z) => Math.max(60, z - 10));
  };

  const handleFitHeight = () => {
    setZoomLevel(100);
  };

  // Text-to-speech audio reader
  const handleToggleSpeech = (customText?: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const textToSpeak =
      customText ||
      (isDarslik8
        ? `8-sinf Davlat va huquq asoslari darsligi. ${currentPage}-sahifa.`
        : `${title}.`);
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'uz-UZ';
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Search Results for Jump List (Mundarija / Search Filter)
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase().trim();
    const normQuery = normalizeForSearch(query);

    if (isDarslik8) {
      const results: { page: number; title: string; subtitle: string; type: string }[] = [];

      // Search chapters
      DARSLIK_8_FULL.chapters.forEach((ch) => {
        if (ch.title.toLowerCase().includes(query) || ch.chapterNumber.toString() === query) {
          results.push({
            page: ch.startPage,
            title: `${ch.chapterNumber}-bob: ${ch.title}`,
            subtitle: `${ch.startPage}–${ch.endPage}-sahifalar`,
            type: 'bob'
          });
        }
        // Search lessons
        ch.lessons.forEach((l) => {
          if (
            l.title.toLowerCase().includes(query) ||
            l.lessonNumber.toLowerCase().includes(query) ||
            l.coreText.some((p) => p.toLowerCase().includes(query))
          ) {
            results.push({
              page: l.startPage,
              title: `${l.lessonNumber}. ${l.title}`,
              subtitle: `${ch.chapterNumber}-bob • ${l.startPage}-sahifa`,
              type: 'dars'
            });
          }
        });
      });

      // Search glossary
      DARSLIK_8_FULL.glossary.forEach((g, idx) => {
        if (g.term.toLowerCase().includes(query) || g.definition.toLowerCase().includes(query)) {
          const page = 121 + Math.floor(idx / 8);
          results.push({
            page,
            title: `Lug‘at: ${g.term}`,
            subtitle: g.definition.slice(0, 80) + '...',
            type: 'lugat'
          });
        }
      });

      return results;
    }

    // Code Search
    const results: { page: number; title: string; subtitle: string; type: string; artKey?: string }[] = [];
    let artCounter = 0;
    data.forEach((sec) => {
      sec.chapters.forEach((ch) => {
        ch.articles.forEach((art) => {
          artCounter++;
          const matches =
            art.number.toString().includes(query) ||
            art.title.toLowerCase().includes(query) ||
            normalizeForSearch(art.title).includes(normQuery) ||
            art.content.some((p) => p.toLowerCase().includes(query));

          if (matches) {
            results.push({
              page: artCounter,
              title: art.title.includes('modda') ? art.title : `${art.number}-modda. ${art.title}`,
              subtitle: `${sec.sectionNumber} • ${ch.title}`,
              type: 'modda',
              artKey: art.title.split('.')[0].trim().replace(/\s+/g, '')
            });
          }
        });
      });
    });

    return results;
  }, [searchTerm, isDarslik8, data]);

  if (!isOpen) return null;

  // Theme-dependent dynamic style sets
  const modalBg =
    theme === 'light'
      ? 'bg-[#FBF9F4] text-[#1E1A16]'
      : theme === 'sepia'
      ? 'bg-[#F5EFE1] text-[#2A1E17]'
      : 'bg-[#0B0E17] text-[#E5DCD3]';

  const headerBg =
    theme === 'light'
      ? 'bg-[#FAF8F5] border-[#EAE5DD] text-[#1E1A16]'
      : theme === 'sepia'
      ? 'bg-[#F3EAD7] border-[#E1D5C1] text-[#2A1E17]'
      : 'bg-[#101524] border-[#1D263B] text-[#ECE6D9]';

  const drawerBg =
    theme === 'light'
      ? 'bg-[#FAF8F5] border-[#EAE5DD] text-[#1E1A16]'
      : theme === 'sepia'
      ? 'bg-[#F3EAD7] border-[#E1D5C1] text-[#2A1E17]'
      : 'bg-[#101524] border-[#1D263B] text-[#ECE6D9]';

  const pageBg =
    theme === 'light'
      ? 'bg-white text-[#1E1A16] border-[#E3DED6]'
      : theme === 'sepia'
      ? 'bg-[#FAF4E8] text-[#2A1E17] border-[#E3D4BE]'
      : 'bg-[#141B2D] text-[#ECE6D9] border-[#242F4B]';

  // Flat list of articles for legal codes
  const allArticlesList = data.flatMap((sec) =>
    sec.chapters.flatMap((ch) =>
      ch.articles.map((art) => ({
        section: sec,
        chapter: ch,
        article: art
      }))
    )
  );

  const renderLegalArticleCard = (
    item: { section: FullSection; chapter: { title: string }; article: FullArticle } | undefined,
    pageNum: number,
    position: 'left' | 'right' | 'single'
  ) => {
    if (!item) return null;
    const isLeft = position === 'left';
    const isRight = position === 'right';

    const cardClasses = isLeft
      ? `rounded-l-2xl border-t border-b border-l border-r border-[#D9CEBA] shadow-2xl ${pageBg} p-5 sm:p-8 lg:p-10 space-y-6 leading-relaxed relative flex flex-col justify-between h-full`
      : isRight
      ? `rounded-r-2xl border-t border-b border-r border-l border-[#D9CEBA] shadow-2xl ${pageBg} p-5 sm:p-8 lg:p-10 space-y-6 leading-relaxed relative flex flex-col justify-between h-full`
      : `rounded-2xl border shadow-xl ${pageBg} p-4 sm:p-12 space-y-8 leading-relaxed relative flex flex-col justify-between h-full`;

    return (
      <div className={cardClasses}>
        {isLeft && (
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/8 to-transparent" />
        )}
        {isRight && (
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/8 to-transparent" />
        )}

        <div className="space-y-6 flex-1">
          {/* Header Banner */}
          <div className="text-center space-y-2 pb-5 border-b border-[#EAE5DD]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6B38] bg-[#FAF5ED] px-3.5 py-1.5 rounded-full border border-[#E6DCC8] inline-block">
              O‘zbekiston Respublikasi
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E1A16] tracking-tight">
              {title}
            </h1>
          </div>

          {/* Current Article Content */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between text-xs text-[#8C6B38] border-b pb-3 border-[#EAE5DD] gap-2 font-medium">
              <span>{item.section.sectionNumber}</span>
              <span className="text-[#736B60]">{item.chapter.title}</span>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-[#1E1A16]">
              {renderWithSuperscript(item.article.title)}
            </h3>

            <div className="space-y-4 text-xs sm:text-base text-[#2D241E] text-justify indent-6 leading-relaxed font-sans">
              {item.article.content.map((p, pIdx) => (
                <p key={`p-${pIdx}`}>{renderWithSuperscript(p)}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Page Indicator */}
        <div className="pt-6 border-t border-[#EAE5DD] flex items-center justify-between text-xs text-[#736B60]">
          <span className="truncate mr-2 font-medium">{title}</span>
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-[11px]">Modda:</span>
            <span className="w-8 h-8 rounded-lg bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] flex items-center justify-center font-bold">
              {pageNum}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 w-screen h-[100dvh] flex flex-col overflow-hidden ${modalBg} font-sans select-text`}
        >
          {/* 1. UNIFIED CONTROL BAR (Single Top Panel) */}
          <header className={`px-3 sm:px-6 py-2.5 border-b flex items-center justify-between gap-2 shadow-xs shrink-0 ${headerBg}`}>
            {/* Left: Back button, Title and Mundarija toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <button
                onClick={onClose}
                className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white hover:bg-[#FAF5ED] text-[#1E1A16] hover:text-[#8C6B38] border border-[#DDD7CD] hover:border-[#8C6B38] font-semibold text-xs uppercase tracking-wider shadow-2xs transition-all active:scale-95 shrink-0"
                title="Yopish va orqaga qaytish"
              >
                <X className="w-3.5 h-3.5" />
                <span>Orqaga</span>
              </button>

              <div className="h-5 w-[1px] bg-[#DDD7CD] hidden sm:block" />

              <div className="flex items-center space-x-2 min-w-0">
                <BookOpen className="w-4 h-4 text-[#8C6B38] shrink-0" />
                <h2 className="text-xs sm:text-sm font-bold tracking-tight uppercase truncate max-w-[140px] sm:max-w-[240px] md:max-w-[340px] text-[#1E1A16]">
                  {title}
                </h2>
              </div>

              {/* Single Table of Contents (Mundarija) Toggle */}
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all shadow-2xs ${
                  isTocOpen
                    ? 'bg-[#8C6B38] text-white border-[#8C6B38]'
                    : 'bg-white border-[#DDD7CD] hover:border-[#8C6B38] text-[#1E1A16] hover:text-[#8C6B38]'
                }`}
                title="Mundarijani ochish / yopish"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Mundarija</span>
              </button>
            </div>

            {/* Center: Search Panel (Qidiruv Paneli) */}
            <div className="flex-1 max-w-xl mx-2 sm:mx-4 relative" ref={searchDropdownRef}>
              <div className="relative flex items-center">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#736B60] pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => {
                    if (searchTerm.trim()) setIsSearchOpen(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const pageNum = parseInt(searchTerm.trim(), 10);
                      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
                        goToPage(pageNum);
                        setIsSearchOpen(false);
                      } else if (searchResults.length > 0) {
                        goToPage(searchResults[0].page);
                        setIsSearchOpen(false);
                      }
                    }
                  }}
                  placeholder={
                    isDarslik8
                      ? '§ raqami, bob nomi yoki mavzudan qidirish...'
                      : 'Modda raqami yoki matndan qidirish...'
                  }
                  className={`w-full pl-9 pr-24 py-1.5 sm:py-2 rounded-lg text-xs border shadow-2xs focus:outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#182032] border-[#2A344D] text-[#ECE6D9] placeholder-[#7F8F9F] focus:border-indigo-500'
                      : theme === 'sepia'
                      ? 'bg-[#FCF7E8] border-[#E3D4BE] text-[#2A1E17] placeholder-[#807261] focus:border-amber-700'
                      : 'bg-white border-[#DDD7CD] text-[#1E1A16] placeholder-[#736B60] focus:border-[#8C6B38]'
                  }`}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1.5">
                  {searchTerm ? (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setIsSearchOpen(false);
                      }}
                      className="p-1 rounded hover:bg-[#FAF5ED] text-[#736B60] hover:text-[#1E1A16] transition-colors"
                      title="Qidiruvni tozalash"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  ) : null}
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] whitespace-nowrap">
                    {isSpreadMode && rightPage
                      ? `${leftPage}–${rightPage} / ${totalPages}-b.`
                      : `${currentPage} / ${totalPages}-b.`}
                  </span>
                </div>
              </div>

              {/* Instant Search Results Dropdown */}
              <AnimatePresence>
                {isSearchOpen && searchTerm.trim() && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 right-0 mt-1.5 max-h-[380px] overflow-y-auto bg-white rounded-xl border border-[#DDD7CD] shadow-2xl z-50 p-2 space-y-1 text-xs"
                  >
                    <div className="flex items-center justify-between px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8C6B38] border-b border-[#EAE5DD]">
                      <span>Natijalar ({searchResults.length})</span>
                      <span className="text-[#736B60] font-normal">Sahifaga o‘tish uchun bosing</span>
                    </div>
                    {searchResults.length === 0 ? (
                      <div className="text-center py-6 text-[#736B60] text-xs">
                        “{searchTerm}” bo‘yicha hech qanday ma’lumot topilmadi
                      </div>
                    ) : (
                      searchResults.map((res, idx) => (
                        <button
                          key={`hdr-search-${idx}`}
                          onClick={() => {
                            goToPage(res.page);
                            setIsSearchOpen(false);
                          }}
                          className="w-full text-left p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#FAF5ED] border border-[#EAE5DD] hover:border-[#8C6B38] transition-all block group shadow-2xs"
                        >
                          <div className="flex items-center justify-between font-bold text-[#1E1A16] mb-0.5">
                            <span className="truncate group-hover:text-[#8C6B38] transition-colors">
                              {res.title}
                            </span>
                            <span className="text-[#8C6B38] font-bold text-[10px] shrink-0 ml-2 px-1.5 py-0.5 bg-white border border-[#E6DCC8] rounded">
                              {res.page}-bet
                            </span>
                          </div>
                          <p className="text-[11px] text-[#595248] line-clamp-1 font-sans">
                            {res.subtitle}
                          </p>
                        </button>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: ViewMode, Theme & Zoom Controls */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              {/* View Mode Toggle: 2 bet (Kitob) / 1 bet (Hidden on mobile to keep mobile clean and unaffected, active on PC) */}
              <div className={`hidden md:flex items-center space-x-0.5 sm:space-x-1 p-0.5 rounded-lg border ${theme === 'dark' ? 'bg-[#141A28] border-[#242F4B]' : 'bg-[#FAF5ED] border-[#DDD7CD]'}`}>
                <button
                  type="button"
                  onClick={() => setViewMode('spread')}
                  className={`p-1 sm:p-1.5 rounded-md text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewMode === 'spread'
                      ? 'bg-white text-[#8C6B38] shadow-3xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                  title="2 betli kitob ko‘rinishi (yonma-yon)"
                >
                  <Columns className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden lg:inline">2 bet</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('single')}
                  className={`p-1 sm:p-1.5 rounded-md text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewMode === 'single'
                      ? 'bg-white text-[#8C6B38] shadow-3xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                  title="1 betli ko‘rinish"
                >
                  <Square className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden lg:inline">1 bet</span>
                </button>
              </div>

              {/* Theme Toggler */}
              <div className={`flex items-center space-x-0.5 sm:space-x-1 p-0.5 rounded-lg border ${theme === 'dark' ? 'bg-[#141A28] border-[#242F4B]' : 'bg-[#FAF5ED] border-[#DDD7CD]'}`}>
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`p-1 sm:p-1.5 rounded-md text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    theme === 'light'
                      ? 'bg-white text-amber-600 shadow-3xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                  title="Yorug' sahifa"
                >
                  <Sun className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden sm:inline">Yorug'</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('sepia')}
                  className={`p-1 sm:p-1.5 rounded-md text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    theme === 'sepia'
                      ? 'bg-white text-amber-900 shadow-3xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                  title="Sepiya sahifa"
                >
                  <Compass className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden sm:inline">Sepiya</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`p-1 sm:p-1.5 rounded-md text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-[#1D263B] text-indigo-300 shadow-3xs'
                      : 'text-[#736B60] hover:text-[#1E1A16]'
                  }`}
                  title="Tungi o'qish (ko'zga qulay)"
                >
                  <Moon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden sm:inline">Tungi</span>
                </button>
              </div>

              {/* Zoom Controls */}
              <div className={`flex items-center space-x-0.5 sm:space-x-1 p-0.5 rounded-lg border ${theme === 'dark' ? 'bg-[#141A28] border-[#242F4B]' : 'bg-[#FAF5ED] border-[#DDD7CD]'}`}>
                <button
                  type="button"
                  id="book-zoom-out-btn"
                  onClick={handleZoomOut}
                  className={`p-1 rounded cursor-pointer ${theme === 'dark' ? 'text-[#ECE6D9] hover:bg-[#1D263B]' : 'text-[#554D43] hover:text-[#1E1A16] hover:bg-white'}`}
                  title="Shriftni kichraytirish"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  id="book-zoom-reset-btn"
                  onClick={handleFitHeight}
                  className={`px-1.5 py-0.5 text-[10px] sm:text-xs font-bold rounded cursor-pointer ${theme === 'dark' ? 'text-indigo-300 hover:bg-[#1D263B]' : 'text-[#8C6B38] hover:bg-white'}`}
                  title="100% asl o‘lcham"
                >
                  {zoomLevel}%
                </button>
                <button
                  type="button"
                  id="book-zoom-in-btn"
                  onClick={handleZoomIn}
                  className={`p-1 rounded cursor-pointer ${theme === 'dark' ? 'text-[#ECE6D9] hover:bg-[#1D263B]' : 'text-[#554D43] hover:text-[#1E1A16] hover:bg-white'}`}
                  title="Shriftni kattalashtirish"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </header>

          {/* 3. MAIN FLEX CONTAINER (Takes Remaining Height - No Header Overlay / Clipping) */}
          <div className="flex-1 min-h-0 flex overflow-hidden relative">
            {/* 4. TABLE OF CONTENTS (Mundarija & § / Bob Search Drawer) */}
            <AnimatePresence>
              {isTocOpen && (
                <motion.aside
                  initial={{ x: -340, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -340, opacity: 0 }}
                  transition={{ type: 'spring', damping: 26, stiffness: 260 }}
                  className={`absolute left-0 top-0 bottom-0 z-30 w-80 sm:w-96 max-w-[85vw] border-r shadow-2xl flex flex-col ${drawerBg}`}
                >
                  <div className="p-3.5 border-b border-[#EAE5DD] flex items-center justify-between shrink-0">
                    <div className="flex items-center space-x-2">
                      <ListOrdered className="w-4 h-4 text-[#8C6B38]" />
                      <h3 className="font-bold text-xs uppercase tracking-wider text-[#1E1A16]">
                        Mundarija & Qidiruv
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsTocOpen(false)}
                      className="p-1 rounded hover:bg-[#EAE5DD] text-[#736B60] hover:text-[#1E1A16]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Search Input inside TOC (Placeholder: § raqami yoki bob nomi) */}
                  <div className="p-3 border-b border-[#EAE5DD] shrink-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#736B60]" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={isDarslik8 ? '§ raqami yoki bob nomi...' : 'Modda raqami yoki bob nomi...'}
                        className="w-full pl-8 pr-7 py-2 rounded-lg text-xs bg-white border border-[#DDD7CD] focus:outline-none focus:border-[#8C6B38] text-[#1E1A16] placeholder-[#736B60]"
                      />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#736B60] hover:text-[#1E1A16]"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* TOC List or Search Jump Results */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
                    {searchTerm.trim() ? (
                      /* Search Jump List */
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6B38] block px-1">
                          Qidiruv natijalari ({searchResults.length}):
                        </span>
                        {searchResults.length === 0 ? (
                          <div className="text-center py-10 text-[#736B60]">
                            Hech qanday bob yoki mavzu topilmadi.
                          </div>
                        ) : (
                          searchResults.map((res, idx) => (
                            <button
                              key={`jump-${idx}`}
                              onClick={() => {
                                goToPage(res.page);
                                setIsTocOpen(false);
                              }}
                              className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-[#FAF5ED] border border-[#DDD7CD] hover:border-[#8C6B38] transition-all block shadow-2xs group"
                            >
                              <div className="flex items-center justify-between font-bold text-[#1E1A16] mb-0.5">
                                <span className="truncate group-hover:text-[#8C6B38] transition-colors">{res.title}</span>
                                <span className="text-[#8C6B38] font-bold text-[10px] shrink-0 ml-1.5 px-1.5 py-0.5 bg-[#FAF5ED] border border-[#E6DCC8] rounded">{res.page}-bet</span>
                              </div>
                              <p className="text-[11px] text-[#595248] line-clamp-1 font-sans">
                                {res.subtitle}
                              </p>
                            </button>
                          ))
                        )}
                      </div>
                    ) : isDarslik8 ? (
                      /* 8-sinf Chapters & Lessons */
                      <div className="space-y-4">
                        {/* Quick Jump Landmark Links */}
                        <div className="grid grid-cols-2 gap-1.5 pb-2 border-b border-[#EAE5DD]">
                          <button
                            onClick={() => {
                              goToPage(1);
                              setIsTocOpen(false);
                            }}
                            className="p-2 rounded-lg text-left bg-white border border-[#DDD7CD] text-xs font-bold hover:border-[#8C6B38] transition-all shadow-2xs"
                          >
                            <span className="block font-bold text-xs text-[#8C6B38]">Muqova & Kirish</span>
                            <span className="text-[10px] text-[#736B60]">1–3-betlar</span>
                          </button>
                          <button
                            onClick={() => {
                              goToPage(121);
                              setIsTocOpen(false);
                            }}
                            className="p-2 rounded-lg text-left bg-white border border-[#DDD7CD] text-xs font-bold hover:border-[#8C6B38] transition-all shadow-2xs"
                          >
                            <span className="block font-bold text-xs text-[#8C6B38]">Izohli Lug‘at</span>
                            <span className="text-[10px] text-[#736B60]">121–126-betlar</span>
                          </button>
                        </div>

                        {DARSLIK_8_FULL.chapters.map((ch) => (
                          <div key={`toc-ch-${ch.chapterNumber}`} className="space-y-1.5">
                            <button
                              onClick={() => {
                                goToPage(ch.startPage);
                                setIsTocOpen(false);
                              }}
                              className="w-full text-left font-bold text-xs text-[#8C6B38] uppercase tracking-wider p-2 rounded-lg hover:bg-white border border-transparent hover:border-[#E6DCC8] flex items-center justify-between transition-all"
                            >
                              <span className="truncate">{ch.chapterNumber}-bob: {ch.title}</span>
                              <span className="text-[10px] opacity-75 shrink-0 ml-1">{ch.startPage}–{ch.endPage}</span>
                            </button>

                            <div className="pl-2 space-y-1 border-l border-[#EAE5DD]">
                              {ch.lessons.map((l) => (
                                <button
                                  key={`toc-lesson-${l.id}`}
                                  onClick={() => {
                                    goToPage(l.startPage);
                                    setIsTocOpen(false);
                                  }}
                                  className={`w-full text-left py-1.5 px-2 rounded-lg text-xs truncate transition-all flex items-center justify-between border ${
                                    currentPage >= l.startPage && currentPage <= l.endPage
                                      ? 'bg-[#8C6B38] text-white border-[#8C6B38] font-bold shadow-2xs'
                                      : 'text-[#554D43] border-transparent hover:bg-white hover:text-[#1E1A16]'
                                  }`}
                                >
                                  <span className="truncate mr-1 font-medium">{l.lessonNumber}. {l.title}</span>
                                  <span className="text-[10px] opacity-80 shrink-0">{l.startPage}-b.</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Legal Code Chapters & Articles */
                      <div className="space-y-3">
                        {data.map((sec, sIdx) => (
                          <div key={`sec-${sIdx}`} className="space-y-1.5">
                            <span className="font-bold text-[11px] uppercase tracking-wider text-[#8C6B38] block px-1">
                              {sec.sectionNumber}. {sec.title}
                            </span>
                            {sec.chapters.map((ch, cIdx) => (
                              <div key={`ch-${cIdx}`} className="pl-2 space-y-1">
                                <span className="font-bold text-[11px] text-[#1E1A16] block">
                                  {ch.title}
                                </span>
                                <div className="pl-2 space-y-0.5 border-l border-[#EAE5DD]">
                                  {ch.articles.map((art, aIdx) => (
                                    <button
                                      key={`art-${aIdx}`}
                                      onClick={() => {
                                        const foundIndex = allArticlesList.findIndex((item) => item.article === art);
                                        if (foundIndex >= 0) {
                                          goToPage(foundIndex + 1);
                                        }
                                        setIsTocOpen(false);
                                      }}
                                      className="w-full text-left py-1 px-1.5 rounded text-[11px] truncate hover:bg-white hover:text-[#8C6B38] text-[#554D43] block transition-colors"
                                    >
                                      {art.title.includes('modda') ? art.title : `${art.number}-modda. ${art.title}`}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            {/* 5. READING STAGE */}
            <div
              id="book-reader-scroll"
              ref={scrollContainerRef}
              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
              className="flex-1 overflow-y-auto p-1 sm:p-3 md:p-4 flex items-start justify-center relative scroll-smooth max-w-full overflow-x-hidden touch-pan-y overscroll-y-contain"
            >
              {isDarslik8 ? (
                <Darslik8Reader
                  textbookId={textbookId || 'huquq-8'}
                  title={title}
                  currentPage={currentPage}
                  onPageChange={goToPage}
                  viewMode={viewMode}
                  zoomLevel={zoomLevel}
                  theme={theme}
                  bookmarks={bookmarks}
                  onToggleBookmark={toggleBookmark}
                  isSpeaking={isSpeaking}
                  onToggleSpeech={handleToggleSpeech}
                />
              ) : (
                /* Legal Code Rich Book View */
                <>
                  {/* Floating Page Navigation Buttons for Legal Code View */}
                  <button
                    onClick={goToPrev}
                    disabled={isSpreadMode ? leftPage <= 1 : currentPage <= 1}
                    className="fixed left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 sm:w-12 h-9 sm:h-12 rounded-xl bg-white/90 sm:bg-white hover:bg-[#FAF5ED] text-[#1E1A16] hover:text-[#8C6B38] shadow-md sm:shadow-lg border border-[#DDD7CD] hover:border-[#8C6B38] flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-all active:scale-95 group backdrop-blur-xs"
                    title="Oldingi modda"
                  >
                    <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={goToNext}
                    disabled={isSpreadMode ? (rightPage ? rightPage >= totalPages : leftPage >= totalPages) : currentPage >= totalPages}
                    className="fixed right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 sm:w-12 h-9 sm:h-12 rounded-xl bg-white/90 sm:bg-white hover:bg-[#FAF5ED] text-[#1E1A16] hover:text-[#8C6B38] shadow-md sm:shadow-lg border border-[#DDD7CD] hover:border-[#8C6B38] flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-all active:scale-95 group backdrop-blur-xs"
                    title="Keyingi modda"
                  >
                    <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div
                    style={{
                      transform: `scale(${zoomLevel / 100})`,
                      transformOrigin: 'top center'
                    }}
                    className={`w-full ${isSpreadMode ? 'max-w-[1920px]' : 'max-w-[1100px]'} transition-transform duration-150 p-1 sm:p-2`}
                  >
                    {isSpreadMode ? (
                      /* 2-Page Spread for Legal Codes */
                      <div className="flex flex-row items-stretch justify-center w-full">
                        {/* Left Page (Chap bet) */}
                        <div className="flex-1 min-w-0">
                          {renderLegalArticleCard(allArticlesList[leftPage - 1], leftPage, 'left')}
                        </div>

                        {/* Center Spine Crease */}
                        <div className="w-1.5 sm:w-2.5 bg-gradient-to-r from-[#D5C9B5] via-[#B8A78F] to-[#D5C9B5] shadow-inner shrink-0" />

                        {/* Right Page (O'ng bet) */}
                        <div className="flex-1 min-w-0">
                          {rightPage && allArticlesList[rightPage - 1] ? (
                            renderLegalArticleCard(allArticlesList[rightPage - 1], rightPage, 'right')
                          ) : (
                            <div className={`h-full min-h-[460px] rounded-r-2xl border-t border-b border-r border-[#D9CEBA] ${pageBg} flex items-center justify-center p-8 opacity-40 text-center`}>
                              <span className="text-xs text-[#736B60] italic">Kodeks yakuni</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Single Article View (Mobile & Single-page view) */
                      renderLegalArticleCard(allArticlesList[currentPage - 1], currentPage, 'single')
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Quick Scroll Helper: Pastga tushish / Tepaga chiqish */}
            <div className="fixed bottom-4 right-4 z-40 sm:hidden">
              <button
                type="button"
                onClick={() => {
                  if (scrollContainerRef.current) {
                    if (scrollProgress.atBottom) {
                      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      scrollContainerRef.current.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
                    }
                  }
                }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
