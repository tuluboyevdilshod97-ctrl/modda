import React, { useState, useEffect, Component } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, UploadCloud, FileText, CheckCircle2 } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { pdfCache, setCachedPdf, savePdfToStorage, getPdfFromStorage, isValidPdfData, verifyPdfSource } from '../utils/pdfStorage';
import { DARSLIK_8_FULL } from '../data/darslik8Complete';
import { DARSLIKLAR_DATA } from '../data/darsliklarData';

import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// Configure PDF.js worker safely for Vite
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker || `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export { pdfCache, setCachedPdf };

interface PdfErrorBoundaryProps {
  fallback: React.ReactNode;
  onError?: () => void;
  children: React.ReactNode;
}

interface PdfErrorBoundaryState {
  hasError: boolean;
}

class PdfErrorBoundary extends (React.Component as any) {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('PdfErrorBoundary caught error:', error);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export interface Darslik8ReaderProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  viewMode?: 'spread' | 'single';
  zoomLevel: number;
  theme: 'light' | 'sepia' | 'dark';
  bookmarks?: number[];
  onToggleBookmark?: (page: number) => void;
  isSpeaking?: boolean;
  onToggleSpeech?: (text: string) => void;
  textbookId?: string;
  title?: string;
}

export const Darslik8Reader: React.FC<Darslik8ReaderProps> = ({
  currentPage,
  onPageChange,
  viewMode = 'spread',
  zoomLevel,
  theme,
  textbookId = 'huquq-8',
  title = 'Darslik',
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfSource, setPdfSource] = useState<any>(() => pdfCache[textbookId] || null);
  const [documentFile, setDocumentFile] = useState<any>(null);
  const [pdfError, setPdfError] = useState<boolean>(false);
  const [isCheckingPdf, setIsCheckingPdf] = useState<boolean>(!pdfCache[textbookId]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') return window.innerWidth;
    return 1200;
  });

  const [containerWidth, setContainerWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const padding = window.innerWidth < 640 ? 16 : 48;
      return Math.max(280, window.innerWidth - padding);
    }
    return 1200;
  });

  const isWide = windowWidth >= 1024;
  const isSpread = viewMode === 'spread' && isWide;

  // Single page width vs 2-page spread width
  const pageWidth = React.useMemo(() => {
    if (isSpread) {
      // In 2-page spread on PC, split container width across two pages with center spine gap
      const available = Math.min(1920, containerWidth);
      return Math.max(340, Math.min(920, Math.floor((available - 32) / 2)));
    }
    // Mobile or single-page mode (PC changes do not impact mobile)
    return Math.max(280, Math.min(920, containerWidth));
  }, [isSpread, containerWidth]);

  // Touch swipe handling (strictly prioritizes vertical scrolling)
  const touchStartXRef = React.useRef<number>(0);
  const touchStartYRef = React.useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartXRef.current - touchEndX;
    const deltaY = touchStartYRef.current - touchEndY;
    // Only trigger horizontal page flip if horizontal swipe is clearly dominant
    if (Math.abs(deltaX) > 75 && Math.abs(deltaX) > Math.abs(deltaY) * 2) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current) {
        const w = containerRef.current.getBoundingClientRect().width;
        if (w > 0) {
          const padding = window.innerWidth < 640 ? 8 : 24;
          setContainerWidth(Math.max(280, Math.floor(w - padding)));
          return;
        }
      }
      const padding = window.innerWidth < 640 ? 16 : 48;
      setContainerWidth(Math.max(280, Math.floor(window.innerWidth - padding)));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Convert pdfSource into a react-pdf safe file prop (Object URL, string, or { data: Uint8Array })
  useEffect(() => {
    if (!pdfSource) {
      setDocumentFile(null);
      return;
    }

    let createdUrl: string | null = null;
    let isCancelled = false;

    if (pdfSource instanceof ArrayBuffer) {
      if (isValidPdfData(pdfSource)) {
        setDocumentFile({ data: new Uint8Array(pdfSource) });
      } else {
        setPdfError(true);
      }
    } else if (pdfSource instanceof Uint8Array) {
      if (isValidPdfData(pdfSource)) {
        setDocumentFile({ data: pdfSource });
      } else {
        setPdfError(true);
      }
    } else if (pdfSource instanceof Blob || pdfSource instanceof File) {
      pdfSource.arrayBuffer().then((buf) => {
        if (isCancelled) return;
        if (isValidPdfData(buf)) {
          createdUrl = URL.createObjectURL(pdfSource);
          setDocumentFile(createdUrl);
        } else {
          setPdfError(true);
        }
      }).catch(() => {
        if (!isCancelled) setPdfError(true);
      });
    } else if (typeof pdfSource === 'string') {
      verifyPdfSource(pdfSource).then((buf) => {
        if (isCancelled) return;
        if (buf) {
          setDocumentFile({ data: new Uint8Array(buf) });
        } else {
          setPdfError(true);
        }
      }).catch(() => {
        if (!isCancelled) setPdfError(true);
      });
    } else {
      setPdfError(true);
    }

    return () => {
      isCancelled = true;
      if (createdUrl) {
        URL.revokeObjectURL(createdUrl);
      }
    };
  }, [pdfSource]);

  // Check if saved PDF or default PDF for this textbook exists
  useEffect(() => {
    let isMounted = true;

    async function resolvePdfSource() {
      setIsCheckingPdf(true);
      setPdfError(false);

      // 1. Check in-memory cache
      if (pdfCache[textbookId]) {
        const validated = await verifyPdfSource(pdfCache[textbookId]);
        if (validated && isMounted) {
          pdfCache[textbookId] = validated;
          setPdfSource(validated);
          setIsCheckingPdf(false);
          setPdfError(false);
          return;
        } else {
          delete pdfCache[textbookId];
        }
      }

      // 2. Check persistent IndexedDB storage
      try {
        const storedPdf = await getPdfFromStorage(textbookId);
        if (storedPdf && isMounted) {
          const validated = await verifyPdfSource(storedPdf);
          if (validated && isMounted) {
            pdfCache[textbookId] = validated;
            setPdfSource(validated);
            setIsCheckingPdf(false);
            setPdfError(false);
            return;
          }
        }
      } catch {
        // Continue to server candidate check
      }

      // 3. Extract grade number if present (e.g. huquq-8 -> 8, dhn-11 -> 11)
      const altId = textbookId.startsWith('huquq-')
        ? textbookId.replace('huquq-', 'dhn-')
        : textbookId.startsWith('dhn-')
        ? textbookId.replace('dhn-', 'huquq-')
        : textbookId;

      const candidatePaths = [
        `/api/books/${encodeURIComponent(textbookId)}`,
        `/api/books/${encodeURIComponent(altId)}`,
        `/books/${encodeURIComponent(textbookId)}.pdf`,
        `/books/${encodeURIComponent(altId)}.pdf`,
      ];

      for (const path of candidatePaths) {
        try {
          const validated = await verifyPdfSource(path);
          if (validated && isMounted) {
            pdfCache[textbookId] = validated;
            setPdfSource(validated);
            setIsCheckingPdf(false);
            return;
          }
        } catch {
          // Continue to next path
        }
      }

      if (isMounted) {
        setPdfSource(null);
        setIsCheckingPdf(false);
      }
    }

    resolvePdfSource();
    return () => {
      isMounted = false;
    };
  }, [textbookId, title]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const validated = await verifyPdfSource(file);
        if (!validated) {
          alert('Tanlangan fayl haqiqiy PDF formatida emas! Iltimos, haqiqiy PDF fayl tanlang.');
          return;
        }
        await savePdfToStorage(textbookId, file);
        pdfCache[textbookId] = validated;
        setPdfSource(validated);
        setPdfError(false);
      } catch (err) {
        console.error('Faylni yuklashda xatolik:', err);
      }
    }
  };

  // Theme styles for the container behind the PDF
  const pageBg =
    theme === 'sepia'
      ? 'bg-[#FCF7E8] text-[#2D241E] border-[#E6DCC8]'
      : theme === 'dark'
      ? 'bg-[#141B2D] text-[#ECE6D9] border-[#242F4B]'
      : 'bg-white text-[#1E1A16] border-[#E3DED6]';

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPdfError(false);
  };

  const onDocumentLoadError = (err: any) => {
    console.warn('PDF load error caught:', err);
    setPdfError(true);
  };

  // Catch unhandled InvalidPDFException rejections & errors gracefully
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      if (
        reason &&
        (reason.name === 'InvalidPDFException' ||
          (reason.message && reason.message.includes('Invalid PDF')) ||
          (typeof reason === 'string' && reason.includes('Invalid PDF')))
      ) {
        event.preventDefault();
        setPdfError(true);
      }
    };

    const handleError = (event: ErrorEvent) => {
      if (
        (event.error &&
          (event.error.name === 'InvalidPDFException' ||
            (event.error.message && event.error.message.includes('Invalid PDF')))) ||
        (typeof event.message === 'string' && event.message.includes('Invalid PDF'))
      ) {
        event.preventDefault();
        setPdfError(true);
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  // Define fallback textbook constants unconditionally to follow Rules of Hooks
  const textbookData = DARSLIKLAR_DATA.find((tb) => tb.id === textbookId);
  const fallbackTotalPages = React.useMemo(() => {
    if (textbookId === 'huquq-8' || textbookId === 'dhn-8') return 126;
    const flatArticlesCount = textbookData?.data.flatMap((sec) =>
      sec.chapters.flatMap((ch) => ch.articles)
    ).length || 0;
    return Math.max(1, flatArticlesCount);
  }, [textbookId, textbookData]);

  const totalBookPages = numPages || fallbackTotalPages || 126;
  const leftPage = isSpread ? (currentPage % 2 === 1 ? currentPage : Math.max(1, currentPage - 1)) : currentPage;
  const rightPage = isSpread ? (leftPage + 1 <= totalBookPages ? leftPage + 1 : null) : null;

  const goToPrev = () => {
    if (isSpread) {
      onPageChange(Math.max(1, leftPage - 2));
    } else {
      onPageChange(Math.max(1, currentPage - 1));
    }
  };

  const goToNext = () => {
    if (isSpread) {
      onPageChange(Math.min(totalBookPages, leftPage + 2));
    } else {
      onPageChange(Math.min(totalBookPages, currentPage + 1));
    }
  };

  const getContentForPage = React.useCallback((pageNum: number) => {
    if (textbookId === 'huquq-8' || textbookId === 'dhn-8') {
      if (pageNum === 1) {
        return { type: 'foreword', data: DARSLIK_8_FULL.foreword };
      }
      if (pageNum === 2) {
        return { type: 'introduction', data: DARSLIK_8_FULL.introduction };
      }
      if (pageNum >= 121) {
        return { type: 'glossary', data: DARSLIK_8_FULL.glossary };
      }
      for (const ch of DARSLIK_8_FULL.chapters) {
        for (const l of ch.lessons) {
          if (pageNum >= l.startPage && pageNum <= l.endPage) {
            return { type: 'lesson', chapter: ch, lesson: l };
          }
        }
      }
      return { type: 'foreword', data: DARSLIK_8_FULL.foreword };
    } else {
      const flatArticles = textbookData?.data.flatMap((sec) =>
        sec.chapters.flatMap((ch) =>
          ch.articles.map((art) => ({
            section: sec,
            chapter: ch,
            article: art
          }))
        )
      ) || [];
      const currentArtItem = flatArticles[pageNum - 1];
      if (currentArtItem) {
        return { type: 'article', data: currentArtItem };
      }
      return null;
    }
  }, [textbookId, textbookData]);

  const renderFallbackPageCard = (content: any, pageNum: number, position: 'left' | 'right' | 'single') => {
    const isLeft = position === 'left';
    const isRight = position === 'right';
    const isSingle = position === 'single';

    const cardClasses = isLeft
      ? `rounded-l-2xl border-t border-b border-l border-r border-[#D9CEBA] shadow-2xl ${pageBg} p-5 sm:p-8 lg:p-10 space-y-6 leading-relaxed relative flex flex-col justify-between h-full`
      : isRight
      ? `rounded-r-2xl border-t border-b border-r border-l border-[#D9CEBA] shadow-2xl ${pageBg} p-5 sm:p-8 lg:p-10 space-y-6 leading-relaxed relative flex flex-col justify-between h-full`
      : `rounded-2xl border shadow-xl ${pageBg} p-6 sm:p-10 space-y-8 leading-relaxed relative flex flex-col justify-between h-full`;

    return (
      <div className={cardClasses}>
        {/* Subtle center spine shadow for authentic book feeling */}
        {isLeft && (
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/8 to-transparent" />
        )}
        {isRight && (
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/8 to-transparent" />
        )}

        <div className="space-y-6 flex-1">
          {/* Page info banner at top */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#EAE5DD] text-xs">
            <span className="text-[#8C6B38] font-bold uppercase tracking-wider truncate max-w-[240px]">
              {title}
            </span>
            <span className="bg-[#FAF5ED] px-2.5 py-0.5 rounded border border-[#E6DCC8] font-bold text-[#8C6B38] text-[11px]">
              {pageNum}-bet / {fallbackTotalPages}
            </span>
          </div>

          {/* Content Rendering */}
          {content?.type === 'foreword' && (
            <div className="space-y-5">
              <div className="text-center space-y-2 pb-3.5 border-b border-[#EAE5DD]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6B38] bg-[#FAF5ED] px-3 py-1 rounded-full border border-[#E6DCC8] inline-block">
                  Kirish so‘zi
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#1E1A16]">
                  {DARSLIK_8_FULL.foreword.title}
                </h1>
              </div>
              <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-justify indent-5 text-[#2D241E]">
                {DARSLIK_8_FULL.foreword.text.map((p, idx) => (
                  <p key={`fw-${idx}`}>{p}</p>
                ))}
              </div>
              <p className="text-right font-bold text-xs pt-2 text-[#8C6B38]">
                — {DARSLIK_8_FULL.foreword.author}
              </p>
            </div>
          )}

          {content?.type === 'introduction' && (
            <div className="space-y-5">
              <div className="text-center space-y-2 pb-3.5 border-b border-[#EAE5DD]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6B38] bg-[#FAF5ED] px-3 py-1 rounded-full border border-[#E6DCC8] inline-block">
                  Darslik haqida
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#1E1A16]">
                  {DARSLIK_8_FULL.introduction.title}
                </h1>
              </div>
              <blockquote className="p-3.5 bg-[#FAF5ED] border-l-4 border-[#8C6B38] text-xs sm:text-sm italic text-[#595248] rounded-r-lg">
                "{DARSLIK_8_FULL.introduction.epigraph.text}"
                <span className="block font-bold text-right mt-1 not-italic text-[#8C6B38]">
                  — {DARSLIK_8_FULL.introduction.epigraph.author}
                </span>
              </blockquote>
              <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-justify indent-5 text-[#2D241E]">
                {DARSLIK_8_FULL.introduction.text.map((p, idx) => (
                  <p key={`intro-${idx}`}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {content?.type === 'lesson' && content.lesson && (
            <div className="space-y-5">
              <div className="border-b border-[#EAE5DD] pb-3.5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6B38] block">
                  {content.chapter.chapterNumber}-bob: {content.chapter.title}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#1E1A16]">
                  {content.lesson.lessonNumber}. {content.lesson.title}
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-justify indent-5 text-[#2D241E]">
                {content.lesson.coreText.map((p: string, idx: number) => (
                  <p key={`core-${idx}`}>{p}</p>
                ))}
              </div>

              {content.lesson.memorizeCallouts && content.lesson.memorizeCallouts.length > 0 && (
                <div className="my-4 p-3.5 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6B38] block">
                    Yodda tuting:
                  </span>
                  {content.lesson.memorizeCallouts.map((m: any, idx: number) => (
                    <div key={`memo-${idx}`} className="text-xs">
                      <strong className="text-[#1E1A16]">{m.term}:</strong> {m.definition}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {content?.type === 'article' && content.data && (
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-[#8C6B38] border-b pb-3 border-[#EAE5DD] gap-2 font-medium">
                <span>{content.data.section.sectionNumber}</span>
                <span className="text-[#736B60]">{content.data.chapter.title}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1E1A16]">
                {content.data.article.title}
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm text-[#2D241E] text-justify indent-5 leading-relaxed font-sans">
                {content.data.article.content.map((p: string, pIdx: number) => (
                  <p key={`p-${pIdx}`}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {content?.type === 'glossary' && (
            <div className="space-y-5">
              <div className="text-center space-y-2 pb-3.5 border-b border-[#EAE5DD]">
                <h1 className="text-xl sm:text-2xl font-bold text-[#1E1A16]">
                  Izohli Lug‘at
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {DARSLIK_8_FULL.glossary.map((g, idx) => (
                  <div key={`gl-${idx}`} className="p-3 bg-[#FAF5ED] border border-[#E6DCC8] rounded-xl space-y-1">
                    <strong className="font-bold text-[#8C6B38] block">{g.term}</strong>
                    <p className="text-[#595248]">{g.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Page Indicator */}
        <div className="pt-4 border-t border-[#EAE5DD] flex items-center justify-between text-xs text-[#736B60]">
          <span className="truncate max-w-[200px]">{title}</span>
          <span className="font-bold text-[#8C6B38] bg-[#FAF5ED] px-2.5 py-0.5 rounded border border-[#E6DCC8]">
            {pageNum}-bet
          </span>
        </div>
      </div>
    );
  };

  if (isCheckingPdf) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] w-full text-[#736B60]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-4" />
        <span className="text-xs uppercase tracking-wider font-medium">Darslik PDF fayli tekshirilmoqda...</span>
      </div>
    );
  }

  if (pdfError || !pdfSource) {
    return (
      <div className="w-full max-w-xl mx-auto py-12 px-4 flex flex-col items-center justify-center text-center animate-fadeIn">
        <div className="bg-white border border-[#DDD7CD] rounded-3xl p-6 sm:p-10 shadow-lg w-full space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF5ED] border border-[#E6DCC8] mx-auto flex items-center justify-center text-[#8C6B38]">
            <UploadCloud className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6B38] bg-[#FAF5ED] px-3 py-1 rounded-md border border-[#E6DCC8]">
              Darslik PDF fayli talab qilinadi
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1A16]">{title}</h2>
            <p className="text-xs sm:text-sm text-[#736B60] leading-relaxed max-w-md mx-auto">
              Ushbu darslik uchun PDF fayli hali yuklanmagan. To‘liq darslikni kitob ko‘rinishida o‘qish uchun rasmiy PDF faylini yuklang.
            </p>
          </div>

          <label className="border-2 border-dashed border-[#8C6B38]/50 hover:border-[#8C6B38] bg-[#FAF8F5] hover:bg-[#FAF5ED] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer transition-all group">
            <UploadCloud className="w-10 h-10 text-[#8C6B38] mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-sm text-[#1E1A16]">PDF darslik faylini yuklash</span>
            <span className="text-[11px] text-[#736B60] mt-1">Faqat .pdf formatidagi faylni tanlang</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <div className="pt-2 border-t border-[#EAE5DD] text-left">
            <div className="bg-[#FAF8F5] border border-[#DDD7CD] rounded-xl p-3 text-xs text-[#736B60] flex items-center gap-2">
              <span className="text-sm">💡</span>
              <span>Yuklangan darslik brauzeringiz va tizimda doimiy saqlanib, keyinchalik ham oflayn ochiladi.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!documentFile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] w-full text-[#736B60]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-4" />
        <span className="text-xs uppercase tracking-wider font-medium">Sahifa tayyorlanmoqda...</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
      className="w-full relative flex flex-col items-center max-w-full overflow-x-hidden touch-pan-y"
    >
      {/* Floating Side Flip Triggers */}
      <button
        onClick={goToPrev}
        disabled={isSpread ? leftPage <= 1 : currentPage <= 1}
        className="fixed left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 sm:w-12 h-9 sm:h-12 rounded-xl bg-white/90 sm:bg-white hover:bg-[#FAF5ED] text-[#1E1A16] hover:text-[#8C6B38] shadow-md sm:shadow-lg border border-[#DDD7CD] hover:border-[#8C6B38] flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-all active:scale-95 group backdrop-blur-xs"
        title="Oldingi sahifa"
      >
        <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        disabled={isSpread ? (rightPage ? rightPage >= totalBookPages : leftPage >= totalBookPages) : (numPages ? currentPage >= numPages : false)}
        className="fixed right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 sm:w-12 h-9 sm:h-12 rounded-xl bg-white/90 sm:bg-white hover:bg-[#FAF5ED] text-[#1E1A16] hover:text-[#8C6B38] shadow-md sm:shadow-lg border border-[#DDD7CD] hover:border-[#8C6B38] flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-all active:scale-95 group backdrop-blur-xs"
        title="Keyingi sahifa"
      >
        <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* PDF Document Container */}
      <div
        style={{
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: 'top center'
        }}
        className="w-full transition-transform duration-150 flex justify-center max-w-full overflow-x-auto"
      >
        <PdfErrorBoundary
          fallback={
            <div
              style={{ width: isSpread ? pageWidth * 2 + 16 : pageWidth, height: Math.round(pageWidth * 1.3) }}
              className="flex flex-col items-center justify-center text-[#736B60] max-w-full p-6 text-center"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-4" />
              <span className="text-xs uppercase tracking-wider">Darslik matnli ko‘rinishga o‘tkazilmoqda...</span>
            </div>
          }
          onError={() => setPdfError(true)}
        >
          <Document
            file={documentFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div
                style={{ width: isSpread ? pageWidth * 2 + 16 : pageWidth, height: Math.round(pageWidth * 1.3) }}
                className="flex flex-col items-center justify-center text-[#736B60] max-w-full"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-4" />
                <span className="text-xs uppercase tracking-wider">Darslik sahifalari yuklanmoqda...</span>
              </div>
            }
          >
            {isSpread ? (
              /* 2-Page Side-by-Side Spread Layout for PC */
              <div
                className="flex flex-row items-stretch justify-center w-full max-w-[1920px] shadow-2xl rounded-2xl"
                style={theme === 'dark' ? { filter: 'invert(0.9) hue-rotate(180deg) sepia(0.15) contrast(1.1) brightness(0.95)' } : undefined}
              >
                {/* Left Page (Chap bet) */}
                <div className={`relative rounded-l-2xl border-t border-b border-l border-[#D9CEBA] ${pageBg} overflow-hidden flex flex-col items-center flex-1 max-w-[960px]`}>
                  <div className="w-full flex items-center justify-between px-4 sm:px-6 py-2 border-b border-[#EAE5DD]/70 text-[11px] font-semibold text-[#8C6B38] bg-black/[0.02]">
                    <span className="truncate max-w-[220px]">{title}</span>
                    <span className="bg-[#FAF5ED] px-2 py-0.5 rounded border border-[#E6DCC8] text-[10px] font-bold">{leftPage}-bet</span>
                  </div>
                  <div className="relative p-2 sm:p-4 flex-1 flex justify-center w-full">
                    <Page
                      pageNumber={leftPage}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      width={pageWidth}
                      loading={
                        <div style={{ width: pageWidth, height: Math.round(pageWidth * 1.35) }} className="flex flex-col items-center justify-center text-[#736B60]">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-3" />
                          <span className="text-xs uppercase tracking-wider">{leftPage}-bet yuklanmoqda...</span>
                        </div>
                      }
                    />
                    {/* Spine Shadow on Right Edge of Left Page */}
                    <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/8 to-transparent" />
                  </div>
                  <div className="w-full text-center py-2 text-[11px] font-bold text-[#736B60] border-t border-[#EAE5DD]/60">
                    {leftPage}
                  </div>
                </div>

                {/* Center Spine Crease */}
                <div className="w-1.5 sm:w-2.5 bg-gradient-to-r from-[#D5C9B5] via-[#B8A78F] to-[#D5C9B5] shadow-inner shrink-0" />

                {/* Right Page (O'ng bet) */}
                {rightPage ? (
                  <div className={`relative rounded-r-2xl border-t border-b border-r border-[#D9CEBA] ${pageBg} overflow-hidden flex flex-col items-center flex-1 max-w-[960px]`}>
                    <div className="w-full flex items-center justify-between px-4 sm:px-6 py-2 border-b border-[#EAE5DD]/70 text-[11px] font-semibold text-[#8C6B38] bg-black/[0.02]">
                      <span className="bg-[#FAF5ED] px-2 py-0.5 rounded border border-[#E6DCC8] text-[10px] font-bold">{rightPage}-bet</span>
                      <span className="truncate max-w-[220px] text-right">{title}</span>
                    </div>
                    <div className="relative p-2 sm:p-4 flex-1 flex justify-center w-full">
                      <Page
                        pageNumber={rightPage}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        width={pageWidth}
                        loading={
                          <div style={{ width: pageWidth, height: Math.round(pageWidth * 1.35) }} className="flex flex-col items-center justify-center text-[#736B60]">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-3" />
                            <span className="text-xs uppercase tracking-wider">{rightPage}-bet yuklanmoqda...</span>
                          </div>
                        }
                      />
                      {/* Spine Shadow on Left Edge of Right Page */}
                      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/8 to-transparent" />
                    </div>
                    <div className="w-full text-center py-2 text-[11px] font-bold text-[#736B60] border-t border-[#EAE5DD]/60">
                      {rightPage}
                    </div>
                  </div>
                ) : (
                  <div className={`relative rounded-r-2xl border-t border-b border-r border-[#D9CEBA] ${pageBg} overflow-hidden flex flex-col items-center justify-center p-8 text-center opacity-40 flex-1 max-w-[960px] min-h-[400px]`}>
                    <span className="text-xs text-[#736B60] italic">Darslik yakuni</span>
                  </div>
                )}
              </div>
            ) : (
              /* Single Page Layout (Mobile & Single-page view) */
              <div className={`shadow-xl overflow-hidden rounded-xl border max-w-full ${pageBg}`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`page-${currentPage}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="max-w-full"
                    style={theme === 'dark' ? { filter: 'invert(0.9) hue-rotate(180deg) sepia(0.15) contrast(1.1) brightness(0.95)' } : undefined}
                  >
                    {numPages && currentPage <= numPages ? (
                      <Page
                        pageNumber={currentPage}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        width={pageWidth}
                        loading={
                          <div
                            style={{ width: pageWidth, height: Math.round(pageWidth * 1.3) }}
                            className="flex flex-col items-center justify-center text-[#736B60] max-w-full"
                          >
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-4" />
                            <span className="text-xs uppercase tracking-wider">Yuklanmoqda...</span>
                          </div>
                        }
                      />
                    ) : (
                      <div
                        style={{ width: pageWidth, height: Math.round(pageWidth * 1.3) }}
                        className="flex flex-col items-center justify-center text-[#736B60] max-w-full"
                      >
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8C6B38] mb-4" />
                        <span className="text-xs uppercase tracking-wider">Sahifa tayyorlanmoqda...</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </Document>
        </PdfErrorBoundary>
      </div>
    </div>
  );
};

