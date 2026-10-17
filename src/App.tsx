import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale,
  Clock,
  BookOpen,
  Award,
  Sparkles,
  AlertCircle,
  HelpCircle,
  CheckCircle,
  Flame,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Bookmark,
  History,
  BookMarked,
  Settings,
  Play,
  Quote
} from 'lucide-react';
import { TOPICS } from './data/topics';
import { QUESTIONS } from './data/questions';
import {
  USER_MIXED_QUESTIONS,
  BMBA_USER_QUESTIONS,
  BMBA_21_DEC_QUESTIONS,
  BMBA_23_DEC_QUESTIONS_LIST,
  BMBA_OTAJONOV_8_QUESTIONS,
  BMBA_LEGALZONE_QUESTIONS,
  BMBA_LEGALDOCTOR_5_QUESTIONS,
  BMBA_OTM_2025_QUESTIONS,
  BMBA_OTM_2024_QUESTIONS,
  BMBA_NEW_UPLOADED_QUESTIONS_LIST,
  shuffleQuestions
} from './data/userQuestions';
import { Topic, Question, QuizSession, QuizMode, QuizResultHistory, AppSettings } from './types';
import { isQuestionCorrect } from './utils/questionFormatter';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { StatsModal } from './components/StatsModal';
import { TipsModal } from './components/TipsModal';
import { ToggleNavMenu } from './components/ToggleNavMenu';
import { TodayStatsPie } from './components/TodayStatsPie';
import { MilliySertifikatModal } from './components/MilliySertifikatModal';
import { ManbalarPageView } from './components/ManbalarPageView';
import { XronologiyaPageView } from './components/XronologiyaPageView';
import { YuridikLugatView } from './components/YuridikLugatView';
import { TahlilMarkaziPanel } from './components/TahlilMarkaziPanel';
import { Darslik10QuizModal } from './components/Darslik10QuizModal';
import { DifficultyModal } from './components/DifficultyModal';
import { SiteIntroVideoModal } from './components/SiteIntroVideoModal';
import { SplashScreen } from './components/SplashScreen';
import { EDULAW_QIYIN_QUESTIONS } from './data/edulawQiyinQuestions';
import { HUQUQOLOGIYA_QIYIN_QUESTIONS } from './data/huquqologiyaQiyinQuestions';
import { PWAInstallButton } from './components/PWAInstallButton';
import { AdminDashboard } from './components/AdminDashboard';
import { useAuth } from './components/FirebaseProvider';
import { LoginScreen } from './components/LoginScreen';
import { db, auth } from './firebase';
import { doc, setDoc, serverTimestamp, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './utils/firebaseError';

const COURTROOM_HERO_IMAGE = '/assets/images/uzbekistan_courtroom.jpg';
const COURTROOM_HERO_FALLBACK = '/assets/images/uzbekistan_courtroom_exact_1789564960566.jpg';

const CONSTITUTION_QUOTES = [
  {
    text: "Qonun ustuvorligi — adolat mezoni. Biz uchun qonun va adolat ustuvorligi, inson huquq va erkinliklarini ta’minlash eng oliy maqsad bo‘lib qoladi.",
    source: "Shavkat Mirziyoyev"
  },
  {
    text: "Sud idorasi ostonasiga qadam qo‘ygan har bir inson O‘zbekistonda adolat borligiga to‘la ishonishi kerak.",
    source: "Shavkat Mirziyoyev"
  },
  {
    text: "Inson huquq va manfaatlarini ta'minlash, uning qadr-qimmatini ulug'lash davlatimiz faoliyatining bosh mezoni hisoblanadi.",
    source: "Shavkat Mirziyoyev"
  },
  {
    text: "Sudlarning mustaqilligini ta'minlash va ularning faoliyatini faqat qonun talablariga bo'ysundirish — huquqiy davlat qurishning eng asosiy shartidir.",
    source: "Shavkat Mirziyoyev"
  },
  {
    text: "O‘zbekiston Respublikasida inson, uning hayoti, erkinligi, sha’ni, qadr-qimmati va boshqa daxlsiz huquqlari oliy qadriyatdir. Demokratik huquq va erkinliklar Konstitutsiya va qonunlar bilan muhofaza qilinadi.",
    source: "O‘zbekiston Respublikasi Konstitutsiyasi, 13-modda"
  },
  {
    text: "Qonun ustuvorligini ta’minlash — erkin va farovon hayot garovidir. Qonun barcha uchun teng va majburiy bo'lishi shart.",
    source: "Shavkat Mirziyoyev"
  },
  {
    text: "Barcha fuqarolar bir xil huquq va erkinliklarga ega bo‘lib, jinsi, irqi, millati, tili, dini, e’tiqodi, ijtimoiy kelib chiqishi, ijtimoiy mavqeyidan qat’i nazar, qonun oldida tengdirlar.",
    source: "O‘zbekiston Respublikasi Konstitutsiyasi, 19-modda"
  },
  {
    text: "O‘zbekiston Respublikasining Konstitutsiyasi va qonunlarining ustunligi so‘zsiz tan olinadi. Davlat, uning organlari, mansabdor shaxslar, jamoat birlashmalari, fuqarolar Konstitutsiya va qonunlarga muvofiq huquq doirasida ish ko‘radilar.",
    source: "O‘zbekiston Respublikasi Konstitutsiyasi, 15-modda"
  },
  {
    text: "Har kim o‘z shaxsini erkin kamol toptirish huquqiga ega. Qonun hujjatlarida belgilanganidan tashqari hollarda biron-bir shaxsning zimmasiga uning roziligisiz qo‘shimcha majburiyatlar yuklatilishi mumkin emas.",
    source: "O‘zbekiston Respublikasi Konstitutsiyasi, 20-modda"
  },
  {
    text: "Konstitutsiyamiz — barcha islohotlarimizning mustahkam huquqiy poydevoridir.",
    source: "Shavkat Mirziyoyev"
  }
];

const getDailyQuote = () => {
  const dayOfYear = new Date().getDate(); // uses current day of month (1-31)
  const idx = dayOfYear % CONSTITUTION_QUOTES.length;
  return CONSTITUTION_QUOTES[idx];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 95,
      damping: 14,
    },
  },
};
import {
  getSavedResults,
  saveResult,
  removeResult,
  getSavedMistakes,
  removeMistake,
  clearAllHistory,
  clearMistakesOnly,
  clearResultsOnly
} from './utils/storage';
import { initPdfCacheFromStorage } from './utils/pdfStorage';

export default function App() {
  const { user, loading } = useAuth();
  const [activeView, setActiveView] = useState<'home' | 'quiz' | 'result' | 'manbalar' | 'xronologiya' | 'lugat' | 'admin' | 'shpargalka'>('home');
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  const [history, setHistory] = useState<QuizResultHistory[]>([]);
  const [mistakesIds, setMistakesIds] = useState<string[]>([]);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isMilliySertifikatOpen, setIsMilliySertifikatOpen] = useState(false);
  const [milliySertifikatInitialMode, setMilliySertifikatInitialMode] = useState<'quiz' | 'practice'>('quiz');
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(false);
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
  const [isDarslik10QuizOpen, setIsDarslik10QuizOpen] = useState(false);
  const [darslikQuizGrade, setDarslikQuizGrade] = useState<number>(10);
  const [quizReturnView, setQuizReturnView] = useState<'home' | 'manbalar' | 'xronologiya' | 'lugat' | 'admin' | 'shpargalka'>('home');
  const [difficultyModalState, setDifficultyModalState] = useState<{
    isOpen: boolean;
    topic: Topic | null;
    mode: 'quiz' | 'practice';
  }>({
    isOpen: false,
    topic: null,
    mode: 'quiz'
  });
  const [show3DStage, setShow3DStage] = useState(false);
  const [navMenuInitialTab, setNavMenuInitialTab] = useState<'sozlamalar' | 'manbalar' | 'sertifikat' | 'xronologiya'>('sozlamalar');
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem('huquq_app_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          fontSize: parsed.fontSize || 'normal',
          soundEnabled: parsed.soundEnabled ?? true,
          autoNextOnSelect: parsed.autoNextOnSelect ?? false,
          defaultTimerMinutes: parsed.defaultTimerMinutes !== undefined ? parsed.defaultTimerMinutes : 40,
          questionsPerTopic: parsed.questionsPerTopic !== undefined ? parsed.questionsPerTopic : 10,
          dtmQuestionsCount: parsed.dtmQuestionsCount !== undefined ? parsed.dtmQuestionsCount : 30,
          topicTimerMinutes: parsed.topicTimerMinutes !== undefined ? parsed.topicTimerMinutes : 15,
          darkMode: parsed.darkMode ?? false,
          statsDurationDays: parsed.statsDurationDays || 'all'
        };
      }
    } catch (e) {
      // ignore
    }
    return {
      fontSize: 'normal',
      soundEnabled: true,
      autoNextOnSelect: false,
      defaultTimerMinutes: 40,
      questionsPerTopic: 10,
      dtmQuestionsCount: 30,
      topicTimerMinutes: 15,
      darkMode: false,
      statsDurationDays: 'all'
    };
  });

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const handleUpdateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem('huquq_app_settings', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  // Synchronize root font size across entire application dynamically
  useEffect(() => {
    const sizeMap: Record<string, string> = {
      small: '14px',
      normal: '16px',
      large: '18px',
      extralarge: '20.5px'
    };
    const targetSize = sizeMap[settings.fontSize] || '16px';
    if (typeof document !== 'undefined') {
      document.documentElement.style.fontSize = targetSize;
    }
  }, [settings.fontSize]);
  
  // History state synchronizer for browser back button and escape key close triggers
  useEffect(() => {
    // Initial state setup to handle backward navigation
    if (!window.history.state) {
      window.history.replaceState({ view: 'home' }, '', '#home');
    }

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setActiveView(event.state.view);
      } else {
        setActiveView('home');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // If any modal, popup or book reader is open, DO NOT close the whole view to home!
        if (
          isNavMenuOpen ||
          isStatsOpen ||
          isTipsOpen ||
          isMilliySertifikatOpen ||
          isIntroVideoOpen ||
          isDarslik10QuizOpen ||
          difficultyModalState.isOpen ||
          document.querySelector('[role="dialog"], #reader-modal, #tips-modal, .reader-container')
        ) {
          return;
        }
        if (activeViewRef.current !== 'home') {
          handleGoBack();
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeView, isNavMenuOpen, isStatsOpen, isTipsOpen, isMilliySertifikatOpen, isIntroVideoOpen, isDarslik10QuizOpen, difficultyModalState.isOpen]);

  // Ref to track current activeView inside event listeners without recreation
  const activeViewRef = useRef(activeView);
  activeViewRef.current = activeView;

  // Track the user's scroll position on the HOME page so closing a view never snaps to top
  const homeScrollYRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (activeViewRef.current === 'home') {
        homeScrollYRef.current = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track the most recent user interaction position on the HOME page
  // so that the full screen view expands and collapses from/to the exact clicked spot
  const [transitionOrigin, setTransitionOrigin] = useState<{ x: number; y: number }>({
    x: typeof window !== 'undefined' ? Math.round(window.innerWidth / 2) : 500,
    y: typeof window !== 'undefined' ? Math.round(window.innerHeight / 2) : 300,
  });

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // CRITICAL: Only record origin when user is on the HOME page!
      // This prevents the 'Orqaga' (Back) button at the top-left logo area from overwriting the origin
      // when closing the view, ensuring the window always collapses back into its original button!
      if (activeViewRef.current !== 'home') {
        return;
      }

      const target = e.target as HTMLElement | null;
      const buttonOrCard = target?.closest('button, [role="button"], a, .cursor-pointer, [data-origin-target]');
      if (buttonOrCard) {
        const rect = buttonOrCard.getBoundingClientRect();
        setTransitionOrigin({
          x: Math.round(rect.left + rect.width / 2),
          y: Math.round(rect.top + rect.height / 2),
        });
      } else if (e.clientX && e.clientY) {
        setTransitionOrigin({
          x: Math.round(e.clientX),
          y: Math.round(e.clientY),
        });
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  const handleSetActiveView = (
    view: 'home' | 'quiz' | 'result' | 'manbalar' | 'xronologiya' | 'lugat' | 'admin' | 'shpargalka',
    e?: React.MouseEvent | React.TouchEvent | any
  ) => {
    if (activeView === 'home') {
      homeScrollYRef.current = window.scrollY;
      if (e && 'currentTarget' in e && e.currentTarget) {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setTransitionOrigin({
          x: Math.round(rect.left + rect.width / 2),
          y: Math.round(rect.top + rect.height / 2),
        });
      }
    }
    if ((view === 'quiz' || view === 'result') && activeView !== 'quiz' && activeView !== 'result') {
      setQuizReturnView(activeView as any);
    }
    setActiveView(view);
    window.history.pushState({ view }, '', `#${view}`);
  };

  const handleGoBack = () => {
    if (activeView === 'quiz' || activeView === 'result') {
      if (quizReturnView && quizReturnView !== 'home') {
        setActiveView(quizReturnView);
        window.history.pushState({ view: quizReturnView }, '', `#${quizReturnView}`);
        return;
      }
    }
    setActiveView('home');
    window.history.pushState({ view: 'home' }, '', '#home');
  };

  // Scroll management: restore home position when returning to home, start subviews at top
  useEffect(() => {
    if (activeView === 'home') {
      const savedY = homeScrollYRef.current;
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedY, behavior: 'instant' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeView]);

  const handleOpenNavMenu = (tab: 'sozlamalar' | 'manbalar' | 'sertifikat' | 'xronologiya' = 'sozlamalar') => {
    if (tab === 'manbalar') {
      setActiveView('manbalar');
      return;
    }
    if (tab === 'xronologiya') {
      setActiveView('xronologiya');
      return;
    }
    setNavMenuInitialTab(tab);
    setIsNavMenuOpen(true);
  };

  const handleClearHistoryOnly = () => {
    clearResultsOnly();
    setHistory([]);
  };

  const handleClearMistakesOnly = () => {
    clearMistakesOnly();
    setMistakesIds([]);
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load history, mistakes and persistent PDF cache on mount
  useEffect(() => {
    let results = getSavedResults();
    
    // Auto-inject a mock MJtK result if it doesn't exist in history
    if (!results.some(r => r.topicTitle.includes('MJtK') || r.topicTitle.includes('Ma\'muriy') || r.topicTitle.includes('Mamuriy'))) {
      const mockMJtK = {
        id: 'mock_mjtk_' + Date.now(),
        date: new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        mode: 'topic_practice' as const,
        topicTitle: "MJtK — Ma'muriy huquq",
        correctAnswers: 28,
        wrongAnswers: 2,
        unanswered: 0,
        totalQuestions: 30,
        scorePercentage: 93,
        scoreBall: 86.8,
        timeSpentSeconds: 12 * 60 + 35,
        incorrectQuestionIds: []
      };
      saveResult(mockMJtK);
      results = getSavedResults();
    }

    setHistory(results);
    setMistakesIds(getSavedMistakes());
    initPdfCacheFromStorage();
  }, []);

  // Synchronize history with Firestore on user login
  useEffect(() => {
    // Only synchronize if user is logged into Firebase Auth
    if (!user || !auth.currentUser) return;

    const syncHistoryWithFirestore = async () => {
      try {
        const resultsCol = collection(db, 'results');
        const q = query(resultsCol, where('userId', '==', auth.currentUser!.uid));
        const querySnapshot = await getDocs(q);
        
        const firestoreResults: QuizResultHistory[] = [];
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          firestoreResults.push({
            id: String(data.id || docSnap.id),
            date: String(data.date || ''),
            mode: data.mode || 'topic_practice',
            topicTitle: String(data.topicTitle || ''),
            totalQuestions: Number(data.totalQuestions || 0),
            correctAnswers: Number(data.correctAnswers || 0),
            wrongAnswers: Number(data.wrongAnswers || 0),
            unanswered: Number(data.unanswered || 0),
            scorePercentage: Number(data.scorePercentage || 0),
            scoreBall: Number(data.scoreBall || 0),
            timeSpentSeconds: Number(data.timeSpentSeconds || 0),
            incorrectQuestionIds: Array.isArray(data.incorrectQuestionIds) ? data.incorrectQuestionIds : []
          });
        });

        const localResults = getSavedResults();
        
        // 1. Upload local results that are NOT in Firestore
        for (const localRes of localResults) {
          if (!firestoreResults.some(fr => fr.id === localRes.id)) {
            const docRef = doc(db, 'results', localRes.id);
            const payload = {
              id: String(localRes.id),
              userId: auth.currentUser!.uid,
              date: String(localRes.date || ''),
              mode: String(localRes.mode || 'topic_practice'),
              topicTitle: String(localRes.topicTitle || ''),
              totalQuestions: Number(localRes.totalQuestions || 0),
              correctAnswers: Number(localRes.correctAnswers || 0),
              wrongAnswers: Number(localRes.wrongAnswers || 0),
              unanswered: Number(localRes.unanswered || 0),
              scorePercentage: Number(localRes.scorePercentage || 0),
              scoreBall: Number(localRes.scoreBall || 0),
              timeSpentSeconds: Number(localRes.timeSpentSeconds || 0),
              incorrectQuestionIds: Array.isArray(localRes.incorrectQuestionIds) ? localRes.incorrectQuestionIds : [],
              createdAt: serverTimestamp()
            };
            await setDoc(docRef, payload);
          }
        }

        // 2. Add Firestore results that are NOT in local storage to local storage
        let updatedLocal = [...localResults];
        let hasNew = false;
        for (const fr of firestoreResults) {
          if (!localResults.some(lr => lr.id === fr.id)) {
            updatedLocal.push(fr);
            hasNew = true;
          }
        }

        if (hasNew) {
          // Sort by id descending
          updatedLocal.sort((a, b) => b.id.localeCompare(a.id));
          localStorage.setItem('huquq_quiz_results', JSON.stringify(updatedLocal.slice(0, 50)));
        }

        // Update React state
        setHistory(getSavedResults());
        setMistakesIds(getSavedMistakes());
      } catch (err) {
        if (auth.currentUser) {
          handleFirestoreError(err, OperationType.LIST, 'results');
        }
      }
    };

    syncHistoryWithFirestore();
  }, [user]);

  // Timer effect for quiz
  useEffect(() => {
    if (activeView === 'quiz' && currentSession && !currentSession.isFinished && currentSession.timeLimitSeconds > 0) {
      timerRef.current = setInterval(() => {
        setCurrentSession((prev) => {
          if (!prev) return null;
          if (prev.timeRemainingSeconds <= 1) {
            // Auto finish quiz when time expires
            handleFinishQuiz();
            return { ...prev, timeRemainingSeconds: 0 };
          }
          return {
            ...prev,
            timeRemainingSeconds: prev.timeRemainingSeconds - 1
          };
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeView, currentSession?.isFinished, currentSession?.timeLimitSeconds]);

  // Helper to shuffle questions
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Start Full Imtihon Exam (opens difficulty selection modal)
  const handleStartDtmExam = () => {
    handleOpenDifficultyModal(null, 'quiz');
  };

  const handleStartDtmExamWithDifficulty = (
    difficulty: 'oson' | 'qiyin' | 'barchasi',
    mode: 'quiz' | 'practice' = 'quiz'
  ) => {
    let pool = [...QUESTIONS];
    if (difficulty === 'oson') {
      const osonList = pool.filter((q) => q.difficulty === 'oson');
      if (osonList.length > 0) pool = osonList;
    } else if (difficulty === 'qiyin') {
      const edulawHard = EDULAW_QIYIN_QUESTIONS;
      const otherHard = pool.filter((q) => q.difficulty === 'qiyin' && !q.id.startsWith('edulaw-'));
      pool = [...edulawHard, ...shuffleArray(otherHard)];
    }

    const count = settings.dtmQuestionsCount && settings.dtmQuestionsCount > 0
      ? settings.dtmQuestionsCount
      : 30;

    const selected = shuffleArray(pool).slice(0, Math.min(count, pool.length));

    // User-configured timer: 0 means unlimited / no timer
    const timerMins = mode === 'practice'
      ? 0
      : (settings.defaultTimerMinutes !== undefined ? settings.defaultTimerMinutes : 40);
    const timerSec = timerMins > 0 ? timerMins * 60 : 0;

    const diffSuffix = difficulty === 'qiyin' ? 'Qiyin' : 'Oson';
    const modeSuffix = mode === 'practice' ? 'O‘rganish (izohli)' : (timerMins > 0 ? `${timerMins} daqiqa` : 'vaqtsiz');

    const session: QuizSession = {
      mode: mode === 'practice' ? 'topic_practice' : 'dtm_exam',
      topicTitle: `Huquq Testi — ${diffSuffix} (${modeSuffix})`,
      questions: selected,
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeLimitSeconds: timerSec,
      timeRemainingSeconds: timerSec,
      isFinished: false,
      startedAt: Date.now()
    };

    if (activeView !== 'quiz' && activeView !== 'result') {
      setQuizReturnView(activeView as any);
    }
    setCurrentSession(session);
    setActiveView('quiz');
  };

  // Start Custom Mixed Random Quiz (User's special test bank)
  const handleStartMixedQuiz = (
    questions: Question[],
    title: string,
    timeLimitSeconds: number,
    mode: 'aralash_test' | 'topic_practice' = 'aralash_test'
  ) => {
    if (activeView !== 'quiz' && activeView !== 'result') {
      setQuizReturnView(activeView as any);
    }
    const session: QuizSession = {
      mode: timeLimitSeconds === 0 ? 'topic_practice' : mode,
      topicTitle: title,
      questions,
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeLimitSeconds,
      timeRemainingSeconds: timeLimitSeconds,
      isFinished: false,
      startedAt: Date.now()
    };

    setCurrentSession(session);
    setActiveView('quiz');
  };

  // Handle click on Aralash Test from Header or Hero
  const handleStartAralashDefault = () => {
    const shuffled = shuffleQuestions(USER_MIXED_QUESTIONS);
    handleStartMixedQuiz(
      shuffled.slice(0, 30),
      "Aralash Test",
      40 * 60
    );
  };

  // Start User's specific 30 hard questions test (in order or practice mode)
  const handleStartUserEdulawQuiz = (mode: 'quiz' | 'practice' = 'quiz') => {
    const timeLimit = mode === 'quiz' ? 40 * 60 : 0;
    const session: QuizSession = {
      mode: mode === 'practice' ? 'topic_practice' : 'aralash_test',
      topicTitle: `Siz Ulashgan 30 ta Qiyin Test (${mode === 'quiz' ? 'Sinov' : 'O‘rganish'})`,
      questions: [...EDULAW_QIYIN_QUESTIONS], // All 30 user questions in exact 1-30 sequence
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeLimitSeconds: timeLimit,
      timeRemainingSeconds: timeLimit,
      isFinished: false,
      startedAt: Date.now()
    };

    setCurrentSession(session);
    setActiveView('quiz');
  };

  // Start Huquqologiya 30 ta qiyin Konstitutsiya test
  const handleStartHuquqologiyaQuiz = (mode: 'quiz' | 'practice' = 'quiz') => {
    const timeLimit = mode === 'quiz' ? 40 * 60 : 0;
    const session: QuizSession = {
      mode: mode === 'practice' ? 'topic_practice' : 'aralash_test',
      topicTitle: `Yangi Konstitutsiya II Bo‘lim: 30 ta Qiyin Test (@huquqologiya)`,
      questions: [...HUQUQOLOGIYA_QIYIN_QUESTIONS],
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeLimitSeconds: timeLimit,
      timeRemainingSeconds: timeLimit,
      isFinished: false,
      startedAt: Date.now()
    };

    setCurrentSession(session);
    setActiveView('quiz');
  };

  // Start Milliy Sertifikat mixed test
  const handleStartMilliyTest = (
    count: number,
    timeMins: number,
    title: string,
    mode: 'quiz' | 'practice' = 'quiz',
    customQuestions?: Question[]
  ) => {
    const sourceList = customQuestions && customQuestions.length > 0 ? customQuestions : USER_MIXED_QUESTIONS;
    const questions = count >= sourceList.length || count === 0
      ? shuffleQuestions(sourceList)
      : shuffleQuestions(sourceList).slice(0, count);
    handleStartMixedQuiz(
      questions,
      title,
      timeMins > 0 ? timeMins * 60 : 0,
      mode === 'practice' ? 'topic_practice' : 'aralash_test'
    );
  };

  // Start Topic or General Quiz / Practice with difficulty filter
  const handleOpenDifficultyModal = (topic: Topic | null, mode: 'quiz' | 'practice' = 'quiz') => {
    if (topic?.id === 'milliy_sertifikat') {
      setMilliySertifikatInitialMode(mode);
      setIsMilliySertifikatOpen(true);
      return;
    }
    setDifficultyModalState({
      isOpen: true,
      topic,
      mode
    });
  };

  const handleStartTopicWithDifficulty = (
    difficulty: 'oson' | 'qiyin' | 'barchasi',
    mode: 'quiz' | 'practice',
    customCount?: number,
    variantId?: string
  ) => {
    if (difficultyModalState.topic) {
      handleSelectTopic(difficultyModalState.topic, mode, difficulty, customCount, variantId);
    } else {
      handleStartDtmExamWithDifficulty(difficulty, mode);
    }
  };

  const handleSelectTopic = (
    topic: Topic,
    mode: 'practice' | 'quiz',
    difficulty: 'barchasi' | 'oson' | 'qiyin' = 'barchasi',
    customCount?: number,
    variantId?: string
  ) => {
    let topicQuestions: Question[];

    if (topic.id === 'bmba') {
      // BMBA bo'limida 21.12.2025 yoki 23.12.2025 yoki barchasi tanlanadi
      if (variantId === '21dec') {
        topicQuestions = [...BMBA_21_DEC_QUESTIONS];
      } else if (variantId === '23dec') {
        topicQuestions = [...BMBA_23_DEC_QUESTIONS_LIST];
      } else if (variantId === 'otajonov8') {
        topicQuestions = [...BMBA_OTAJONOV_8_QUESTIONS];
      } else if (variantId === 'legalzone2026') {
        topicQuestions = [...BMBA_LEGALZONE_QUESTIONS];
      } else if (variantId === 'legaldoctor') {
        topicQuestions = [...BMBA_LEGALDOCTOR_5_QUESTIONS];
      } else if (variantId === 'otm2025') {
        topicQuestions = [...BMBA_OTM_2025_QUESTIONS];
      } else if (variantId === 'otm2024') {
        topicQuestions = [...BMBA_OTM_2024_QUESTIONS];
      } else if (variantId === 'newuploaded') {
        topicQuestions = [...BMBA_NEW_UPLOADED_QUESTIONS_LIST];
      } else {
        topicQuestions = [...BMBA_USER_QUESTIONS];
      }
    } else {
      topicQuestions = QUESTIONS.filter((q) => q.topicId === topic.id);

      if (difficulty === 'oson') {
        const osonList = topicQuestions.filter((q) => q.difficulty === 'oson');
        if (osonList.length > 0) {
          topicQuestions = osonList;
        }
      } else if (difficulty === 'qiyin') {
        // Prioritize user-provided HUQUQOLOGIYA questions for konstitutsiya, and EDULAW hard questions
        const topicHuquqologiya = topic.id === 'konstitutsiya' ? HUQUQOLOGIYA_QIYIN_QUESTIONS : [];
        const topicEdulaw = EDULAW_QIYIN_QUESTIONS.filter((q) => q.topicId === topic.id);
        const otherQiyin = topicQuestions.filter(
          (q) => q.difficulty === 'qiyin' && !q.id.startsWith('edulaw-') && !q.id.startsWith('hq-')
        );
        if (topicHuquqologiya.length > 0 || topicEdulaw.length > 0 || otherQiyin.length > 0) {
          topicQuestions = [...topicHuquqologiya, ...topicEdulaw, ...shuffleArray(otherQiyin)];
        }
      }
    }

    let questionsList = shuffleArray(topicQuestions);

    // Apply customCount or settings
    if (customCount && customCount > 0) {
      questionsList = questionsList.slice(0, customCount);
    } else if (topic.id === 'bmba' && mode === 'quiz') {
      // Standart BMBA imtihoni uchun 30 ta savol
      questionsList = questionsList.slice(0, Math.min(30, questionsList.length));
    } else if (settings.questionsPerTopic && settings.questionsPerTopic > 0) {
      questionsList = questionsList.slice(0, settings.questionsPerTopic);
    }

    // Determine timer duration: 0 means unlimited / no timer
    let timeLimit = 0;
    if (mode === 'quiz') {
      if (topic.id === 'bmba') {
        timeLimit = questionsList.length <= 30 ? 40 * 60 : Math.round(questionsList.length * 1.5 * 60);
      } else {
        const topicMins = settings.topicTimerMinutes !== undefined ? settings.topicTimerMinutes : 15;
        timeLimit = topicMins > 0 ? topicMins * 60 : 0;
      }
    }

    const diffSuffix =
      topic.id === 'bmba'
        ? variantId === '21dec'
          ? '1-Variant (21.12.2025 @huquq_vodiysi)'
          : variantId === '23dec'
          ? '2-Variant (23.12.2025 @huquq_vodiysi)'
          : variantId === 'otajonov8'
          ? '3-Variant (8-test)'
          : variantId === 'legalzone2026'
          ? '4-Variant (BMBA 2026 Yaxlit 30 ta test)'
          : variantId === 'legaldoctor'
          ? '5-Variant: BMBA 2026'
          : variantId === 'otm2025'
          ? '6-Variant: BMBA 2025 OTM Imtihoni (30 ta Qiyin Test)'
          : variantId === 'otm2024'
          ? '7-Variant: BMBA 2024 OTM Imtihoni (30 ta Qiyin Test)'
          : variantId === 'newuploaded'
          ? '8-Variant: BMBA Yangi Yuklangan Imtihon Savollari'
          : 'BMBA To‘liq To‘plam'
        : difficulty === 'oson'
        ? 'Oson testlar'
        : difficulty === 'qiyin'
        ? 'Qiyin testlar'
        : '';
    const timeSuffix = mode === 'quiz' && timeLimit > 0 ? `${Math.round(timeLimit / 60)} daqiqa` : '';
    const detailsSuffix = [diffSuffix, timeSuffix].filter(Boolean).join(' • ');

    const session: QuizSession = {
      mode: mode === 'practice' ? 'topic_practice' : 'dtm_exam',
      topicId: topic.id,
      topicTitle: `${topic.title}${detailsSuffix ? ` (${detailsSuffix})` : ''}`,
      questions: questionsList,
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeLimitSeconds: timeLimit,
      timeRemainingSeconds: timeLimit,
      isFinished: false,
      startedAt: Date.now()
    };

    if (activeView !== 'quiz' && activeView !== 'result') {
      setQuizReturnView(activeView as any);
    }
    setCurrentSession(session);
    setActiveView('quiz');
  };

  // Start Mistakes Practice
  const handleStartMistakesPractice = () => {
    const missed = QUESTIONS.filter((q) => mistakesIds.includes(q.id));
    if (missed.length === 0) return;

    const session: QuizSession = {
      mode: 'mistakes_review',
      topicTitle: `Xatolar ustida ishlash (${missed.length} ta savol)`,
      questions: shuffleArray(missed),
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeLimitSeconds: 0, // unlimited in practice
      timeRemainingSeconds: 0,
      isFinished: false,
      startedAt: Date.now()
    };

    if (activeView !== 'quiz' && activeView !== 'result') {
      setQuizReturnView(activeView as any);
    }
    setCurrentSession(session);
    setActiveView('quiz');
  };

  // Option selection
  const handleSelectOption = (questionId: string, optionIndex: number | string) => {
    if (!currentSession || currentSession.isFinished) return;

    const updatedAnswers = {
      ...currentSession.userAnswers,
      [questionId]: optionIndex
    };

    // If in mistakes review and answered correctly, remove from mistakes
    const currentQ = currentSession.questions.find((q) => q.id === questionId);
    if (currentSession.mode === 'mistakes_review' && currentQ && isQuestionCorrect(currentQ, optionIndex)) {
      removeMistake(questionId);
      setMistakesIds(getSavedMistakes());
    }

    setCurrentSession({
      ...currentSession,
      userAnswers: updatedAnswers
    });
  };

  // Toggle mark/flag question
  const handleToggleFlag = (questionId: string) => {
    if (!currentSession) return;
    const isMarked = currentSession.markedQuestions.includes(questionId);
    const updated = isMarked
      ? currentSession.markedQuestions.filter((id) => id !== questionId)
      : [...currentSession.markedQuestions, questionId];

    setCurrentSession({
      ...currentSession,
      markedQuestions: updated
    });
  };

  // Navigation within quiz
  const handleNext = () => {
    if (!currentSession) return;
    if (currentSession.currentIndex < currentSession.questions.length - 1) {
      setCurrentSession({
        ...currentSession,
        currentIndex: currentSession.currentIndex + 1
      });
    }
  };

  const handlePrev = () => {
    if (!currentSession) return;
    if (currentSession.currentIndex > 0) {
      setCurrentSession({
        ...currentSession,
        currentIndex: currentSession.currentIndex - 1
      });
    }
  };

  const handleJumpTo = (index: number) => {
    if (!currentSession) return;
    setCurrentSession({
      ...currentSession,
      currentIndex: index
    });
  };

  // Finish quiz and save result
  const handleFinishQuiz = () => {
    if (!currentSession) return;

    const completedAt = Date.now();
    const timeSpent = Math.max(1, Math.round((completedAt - currentSession.startedAt) / 1000));

    let correctCount = 0;
    let wrongCount = 0;
    let unanswered = 0;
    const incorrectIds: string[] = [];

    currentSession.questions.forEach((q) => {
      const userChoice = currentSession.userAnswers[q.id];
      if (userChoice === undefined || userChoice === '') {
        unanswered++;
        incorrectIds.push(q.id);
      } else if (isQuestionCorrect(q, userChoice)) {
        correctCount++;
      } else {
        wrongCount++;
        incorrectIds.push(q.id);
      }
    });

    const total = currentSession.questions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const scoreBall = parseFloat((correctCount * 3.1).toFixed(1));

    const resultRecord: QuizResultHistory = {
      id: 'res_' + Date.now(),
      date: new Date().toLocaleDateString('uz-UZ', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      mode: currentSession.mode,
      topicTitle: currentSession.topicTitle || 'Huquq testi',
      totalQuestions: total,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unanswered,
      scorePercentage: percentage,
      scoreBall,
      timeSpentSeconds: timeSpent,
      incorrectQuestionIds: incorrectIds
    };

    saveResult(resultRecord);

    // Save to Firestore if user is authenticated with Firebase Auth
    if (user && auth.currentUser) {
      const resultDocRef = doc(db, 'results', resultRecord.id);
      const payload = {
        id: String(resultRecord.id),
        userId: auth.currentUser.uid,
        date: String(resultRecord.date || ''),
        mode: String(resultRecord.mode || 'topic_practice'),
        topicTitle: String(resultRecord.topicTitle || ''),
        totalQuestions: Number(resultRecord.totalQuestions || 0),
        correctAnswers: Number(resultRecord.correctAnswers || 0),
        wrongAnswers: Number(resultRecord.wrongAnswers || 0),
        unanswered: Number(resultRecord.unanswered || 0),
        scorePercentage: Number(resultRecord.scorePercentage || 0),
        scoreBall: Number(resultRecord.scoreBall || 0),
        timeSpentSeconds: Number(resultRecord.timeSpentSeconds || 0),
        incorrectQuestionIds: Array.isArray(resultRecord.incorrectQuestionIds) ? resultRecord.incorrectQuestionIds : [],
        createdAt: serverTimestamp()
      };
      setDoc(resultDocRef, payload).catch((err) => {
        handleFirestoreError(err, OperationType.WRITE, `results/${resultRecord.id}`);
      });
    }

    setHistory(getSavedResults());
    setMistakesIds(getSavedMistakes());

    setCurrentSession({
      ...currentSession,
      isFinished: true,
      completedAt
    });

    setActiveView('result');
  };

  const handleRestartQuiz = () => {
    if (!currentSession) return;
    const resetSession: QuizSession = {
      ...currentSession,
      currentIndex: 0,
      userAnswers: {},
      markedQuestions: [],
      timeRemainingSeconds: currentSession.timeLimitSeconds,
      isFinished: false,
      startedAt: Date.now()
    };
    setCurrentSession(resetSession);
    setActiveView('quiz');
  };

  const handleGoHome = () => {
    setActiveView('home');
  };

  const handleExitQuiz = () => {
    setActiveView(quizReturnView);
  };

  const handleClearHistory = () => {
    clearAllHistory();
    setHistory([]);
    setMistakesIds([]);
  };

  const fontSizeClass =
    settings.fontSize === 'large'
      ? 'text-[16.5px]'
      : settings.fontSize === 'extralarge'
      ? 'text-[18px]'
      : 'text-[15px]';

  const getFilteredHistory = () => {
    if (settings.statsDurationDays === 'all') return history;
    
    const limitDays = parseInt(settings.statsDurationDays, 10);
    if (isNaN(limitDays)) return history;

    const now = new Date();
    const cutoffDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - limitDays);

    return history.filter((item) => {
      try {
        const parts = item.date.split('.');
        if (parts.length === 3) {
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          const itemDate = new Date(year, month, day);
          return itemDate >= cutoffDate;
        }
      } catch (e) {
        // ignore
      }
      return true;
    });
  };

  const filteredHistory = getFilteredHistory();

  const hasHistory = filteredHistory.length > 0;
  const totalCorrectHistory = filteredHistory.reduce((acc, h) => acc + h.correctAnswers, 0);
  const totalQuestionsHistory = filteredHistory.reduce((acc, h) => acc + h.totalQuestions, 0);
  const totalWrongHistory = totalQuestionsHistory - totalCorrectHistory;
  const accuracyPct = totalQuestionsHistory > 0 ? Math.round((totalCorrectHistory / totalQuestionsHistory) * 100) : 80;

  const statsDisplay = {
    pct: hasHistory ? accuracyPct : 80,
    correct: hasHistory ? totalCorrectHistory : 80,
    wrong: hasHistory ? totalWrongHistory : 15,
    ball: hasHistory ? (filteredHistory.reduce((a, b) => a + b.scoreBall, 0) / filteredHistory.length).toFixed(1) : '152.4'
  };

  const chartBars = [
    { height: 40, title: 'Modul 1: 40%' },
    { height: 70, title: 'Modul 2: 70%' },
    { height: 30, title: 'Modul 3: 30%' },
    { height: 90, title: 'Modul 4: 90%' },
    { height: 60, title: 'Modul 5: 60%' },
    { height: 85, title: 'Modul 6: 85%' },
    { height: 100, active: true, title: 'Konstitutsiya: 100%' },
    { height: 75, title: 'O‘rtacha: 75%' },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F5] text-[#1E1A16]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#8C6B38]/10 border border-[#8C6B38] flex items-center justify-center text-[#8C6B38]">
            <Scale className="w-6 h-6 animate-spin" />
          </div>
          <p className="text-xs font-bold tracking-wider uppercase text-[#8C6B38] animate-pulse">Tizim yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className={`min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col font-sans transition-colors duration-300 selection:bg-[#8C6B38] selection:text-white ${fontSizeClass}`}>
      {/* Global Header */}
      <Header
        onStartDtmExam={handleStartDtmExam}
        onStartAralashTest={handleStartAralashDefault}
        onOpenStats={() => setIsStatsOpen(true)}
        onStartMistakesPractice={handleStartMistakesPractice}
        mistakesCount={mistakesIds.length}
        onGoHome={handleGoHome}
        activeView={activeView}
        onOpenNavMenu={handleOpenNavMenu}
        onOpenMilliySertifikat={() => setIsMilliySertifikatOpen(true)}
        onOpenIntroVideo={() => setIsIntroVideoOpen(true)}
        onOpenSplashScreen={() => setShowSplashScreen(true)}
        currentSession={currentSession}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full relative overflow-x-hidden bg-[#FBF9F4]">
        {activeView === 'home' && (
          <div className="w-full flex-1 flex flex-col bg-[#FBF9F4] pb-6 px-2 sm:px-4 py-4 space-y-4 relative">
                {/* [01] Kirish Hero */}
            <div
              className="w-full max-w-full relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-[#8C6B38]/30 shadow-xl transition-all duration-300 flex flex-col justify-center bg-[#1a140e] px-4 sm:px-7 md:px-9 lg:px-12 xl:px-14 py-7 sm:py-8 md:py-10 lg:py-12 xl:py-[95px] min-h-[380px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[580px] xl:h-[660px] xl:mb-[52px]"
            >
              {/* Background Courtroom Image & Overlay */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                <picture className="w-full h-full block">
                  <source srcSet="/assets/images/uzbekistan_courtroom.avif" type="image/avif" />
                  <source srcSet="/assets/images/uzbekistan_courtroom.webp" type="image/webp" />
                  <img
                    src={COURTROOM_HERO_IMAGE}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('uzbekistan_courtroom_exact')) {
                        target.src = COURTROOM_HERO_FALLBACK;
                      }
                    }}
                    alt="Sud zali va O'zbekiston bayrog'i"
                    className="w-full h-full object-cover object-[70%_center] sm:object-[center_30%] lg:object-[center_35%] animate-kenburns opacity-100 brightness-[1.12] contrast-[1.05] saturate-[1.25]"
                    referrerPolicy="no-referrer"
                    decoding="async"
                    fetchPriority="high"
                    loading="eager"
                  />
                </picture>
                {/* Softer, transparent overlays letting the bright image and colors shine through */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#15100B]/85 via-[#15100B]/55 to-transparent sm:w-3/4" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15100B]/60 via-transparent to-transparent" />
              </div>

              {/* Content over image */}
              <div className="relative z-10 space-y-2.5 sm:space-y-3.5 md:space-y-4 xl:space-y-5 max-w-[1045px] w-full">
                <h1 className="font-syne text-[22px] sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[78px] font-extrabold tracking-tight text-white leading-tight md:leading-[1.18] xl:leading-[88px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] break-words">
                  HUQUQ FANIDAN<br />
                  <span className="text-[#F3E5AB] bg-gradient-to-r from-[#FFF0C2] via-[#E6C687] to-[#DFB04B] bg-clip-text text-transparent drop-shadow-sm text-[22px] sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[78px] h-auto inline-block">
                    TAYYORGARLIK.
                  </span>
                </h1>
                <p className="text-[#F5EFE6] text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-2xl leading-relaxed">
                  Yangi tahrirdagi Konstitutsiya (2023), yangi Mehnat kodeksi, Fuqarolik, Oila va Jinoyat qonunchiligi bo‘yicha tuzilgan eng so‘nggi test savollari.
                </p>
              </div>
            </div>

            {/* Action Bar - full width 4 buttons with responsive layout for mobile, tablet, and PC */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 xl:gap-4 pt-1 w-full">
              <button
                id="hero-start-dtm-btn"
                onClick={handleStartDtmExam}
                className="px-3 sm:px-4 md:px-2.5 lg:px-4 xl:px-6 py-3 sm:py-3.5 md:py-4 xl:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#8C6B38] to-[#A37E45] hover:from-[#9E7A42] hover:to-[#B58E50] text-white font-bold text-xs md:text-[11.5px] lg:text-xs xl:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 md:space-x-2 active:scale-95 shadow-md hover:shadow-lg border border-[#8C6B38]/30 cursor-pointer w-full text-center whitespace-nowrap"
              >
                <Clock
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] shrink-0"
                  style={{
                    marginLeft: '-6px',
                    marginTop: '4px',
                    paddingTop: '0px',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    paddingBottom: '-2px',
                    marginRight: '9.75px',
                    marginBottom: '3px'
                  }}
                />
                <span className="-ml-[8px]">TESTNI BOSHLASH</span>
              </button>

              <motion.button
                id="hero-manbalar-btn"
                whileTap={{ scale: 0.97 }}
                onClick={(e) => handleSetActiveView('manbalar', e)}
                className="px-2.5 sm:px-4 md:px-2 lg:px-3.5 xl:px-5 py-3 sm:py-3.5 md:py-4 xl:py-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F5F0E6] border border-[#D8CEBE] hover:border-[#8C6B38] text-[#1E1A16] font-bold text-xs md:text-[11.5px] lg:text-xs xl:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 md:space-x-2 shadow-xs hover:shadow-md cursor-pointer w-full text-center whitespace-nowrap"
              >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C6B38] shrink-0" />
                <span>MANBALAR</span>
              </motion.button>

              <motion.button
                id="hero-xronologiya-btn"
                whileTap={{ scale: 0.97 }}
                onClick={(e) => handleSetActiveView('xronologiya', e)}
                className="px-2.5 sm:px-4 md:px-2 lg:px-3.5 xl:px-5 py-3 sm:py-3.5 md:py-4 xl:py-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F5F0E6] border border-[#D8CEBE] hover:border-[#8C6B38] text-[#1E1A16] font-bold text-xs md:text-[11.5px] lg:text-xs xl:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 md:space-x-2 shadow-xs hover:shadow-md cursor-pointer w-full text-center whitespace-nowrap"
              >
                <History className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C6B38] shrink-0" />
                <span className="xl:-ml-[8px] xl:text-[14.75px]">XRONOLOGIYA</span>
              </motion.button>

              <motion.button
                id="hero-lugat-btn"
                whileTap={{ scale: 0.97 }}
                onClick={(e) => handleSetActiveView('lugat', e)}
                className="px-2.5 sm:px-4 md:px-2 lg:px-3.5 xl:px-5 py-3 sm:py-3.5 md:py-4 xl:py-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F5F0E6] border border-[#D8CEBE] hover:border-[#8C6B38] text-[#1E1A16] font-bold text-xs md:text-[11.5px] lg:text-xs xl:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 md:space-x-2 shadow-xs hover:shadow-md cursor-pointer w-full text-center whitespace-nowrap"
              >
                <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C6B38] shrink-0" />
                <span className="xl:inline-block xl:ml-[2px] xl:-mt-[5px] xl:mr-[14px]">YURIDIK LUG‘AT</span>
              </motion.button>
            </div>

            {/* PWA Install Button Banner */}
            <div className="w-full pt-2">
              <PWAInstallButton />
            </div>

            {/* [KUN HIKMATI] Daily Constitutional Quote */}
              {(() => {
                const dailyQuote = getDailyQuote();
                return (
                  <div className="w-full bg-[#FAF6EE] border border-[#E5D5C0] rounded-2xl p-7 sm:p-10 transition-all duration-300 shadow-2xs hover:shadow-sm min-h-[160px] flex flex-col justify-center">
                    <div className="flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#8C6B38]/10 text-[#8C6B38] text-xs font-extrabold uppercase tracking-widest w-fit mb-3">
                      <Sparkles className="w-4 h-4" />
                      <span>KUN HIKMATI</span>
                    </div>
                    <div className="relative pl-9">
                      <Quote className="absolute left-0 top-0.5 w-6 h-6 text-[#8C6B38]/25 shrink-0 transform -scale-x-100" />
                      <p className="font-serif italic text-[#3E3830] text-base sm:text-xl leading-relaxed">
                        {dailyQuote.text}
                      </p>
                    </div>
                    <div className="mt-4 text-right">
                      <span className="text-xs sm:text-sm font-extrabold text-[#8C6B38] tracking-wide uppercase">
                        — {dailyQuote.source}
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* [02] Mavzulashtirilgan Bloklar */}
              <div className="space-y-5 pt-2 w-full">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-sm uppercase tracking-widest text-[#736B60] font-bold">
                    [02] Mavzulashtirilgan Bloklar
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-6 transition-all duration-300 w-full"
                >
                  {TOPICS.map((topic, idx) => {
                    const isBmba = topic.id === 'bmba';
                    const isSertifikat = topic.id === 'milliy_sertifikat';
                    const topicQuestions = isBmba 
                      ? BMBA_USER_QUESTIONS 
                      : isSertifikat
                      ? USER_MIXED_QUESTIONS
                      : QUESTIONS.filter((q) => q.topicId === topic.id);
                    const qCount = topicQuestions.length;
                    const osonCount = (isBmba || isSertifikat) ? 0 : topicQuestions.filter((q) => q.difficulty === 'oson').length;
                    const qiyinCount = (isBmba || isSertifikat) ? 0 : topicQuestions.filter((q) => q.difficulty === 'qiyin').length;
                    
                    const topicResults = history.filter(
                      (h) => h.topicId === topic.id || h.topicTitle.toLowerCase().includes(topic.title.toLowerCase())
                    );
                    const bestScore = topicResults.length > 0 
                      ? Math.max(...topicResults.map((h) => h.scorePercentage)) 
                      : 0;

                    return (
                      <motion.div
                        key={`topic-${topic.id}-${idx}`}
                        variants={itemVariants}
                      >
                        <TopicCard
                          topic={topic}
                          questionCount={qCount}
                          osonCount={osonCount}
                          qiyinCount={qiyinCount}
                          completionPercentage={bestScore}
                          onOpenDifficultyModal={handleOpenDifficultyModal}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Quick Resource Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Yuridik Lug'at Card */}
                <motion.div
                  id="home-manbalar-block"
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => handleSetActiveView('lugat', e)}
                  className="group bg-white border border-[#E5E0D8] hover:border-[#8C6B38] rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] uppercase tracking-widest text-[#8C6B38] font-bold">
                        150+ Atamalar (A–Z)
                      </span>
                      <span className="text-[11px] font-semibold text-[#8C6B38] bg-[#8C6B38]/10 px-2 py-0.5 rounded-full">
                        8–11-sinf darsliklari
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors mb-1">
                      Yuridik Lug‘at & Tushunchalar
                    </h3>
                    <p className="text-xs text-[#595248] leading-relaxed">
                      Maktab darsliklari, Konstitutsiya va kodekslardagi huquqiy atamalarning rasmiy ta’riflari, etimologiyasi va amaliy misollari.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EAE5DD]">
                    <span className="text-xs text-[#8C6B38] font-bold uppercase tracking-wider flex items-center space-x-1">
                      <span>Lug'atni ochish</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </motion.div>

                {/* Shpargalka Card */}
                <div
                  id="dtm-tips-block"
                  onClick={(e) => handleSetActiveView('shpargalka', e)}
                  className="group bg-white border border-[#E5E0D8] hover:border-[#8C6B38] rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] uppercase tracking-widest text-[#8C6B38] font-semibold">
                        Shpargalka
                      </span>
                      <span className="text-xs text-[#736B60]">
                        Imtihon mezonlari
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors mb-1">
                      Huquqiy Shpargalka & Tavsiyalar
                    </h3>
                    <p className="text-xs text-[#595248] leading-relaxed">
                      Yosh mezonlari, da'vo va protsessual muddatlar, sud normalari va vaqtni boshqarish taktikasi.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EAE5DD]">
                    <span className="text-xs text-[#8C6B38] font-bold uppercase tracking-wider flex items-center space-x-1">
                      <span>Tavsiyalarni ochish</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* [03] Tahlil Markazi Section */}
              <TahlilMarkaziPanel
                statsDisplay={statsDisplay}
                history={filteredHistory}
                onClearHistory={handleClearHistory}
              />
          </div>
        )}

        <AnimatePresence>
          {/* Quiz View */}
          {activeView === 'quiz' && currentSession && (
            <motion.div
              key="quiz"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <QuizView
                session={currentSession}
                onSelectOption={handleSelectOption}
                onToggleFlag={handleToggleFlag}
                onNext={handleNext}
                onPrev={handlePrev}
                onJumpTo={handleJumpTo}
                onFinishQuiz={handleFinishQuiz}
                onExitQuiz={handleGoBack}
                fontSize={settings.fontSize}
                onChangeFontSize={(size) => handleUpdateSettings({ fontSize: size })}
              />
            </motion.div>
          )}

          {/* Result View */}
          {activeView === 'result' && currentSession && (
            <motion.div
              key="result"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <ResultView
                session={currentSession}
                onRestart={handleRestartQuiz}
                onGoHome={handleGoBack}
                onStartMistakesPractice={handleStartMistakesPractice}
              />
            </motion.div>
          )}

          {/* Manbalar Full Screen View */}
          {activeView === 'manbalar' && (
            <motion.div
              key="manbalar"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <ManbalarPageView
                onBack={handleGoBack}
                onStartQuiz={(questions, title, timeLimitSeconds) => {
                  handleStartMixedQuiz(questions, title, timeLimitSeconds);
                }}
                onOpenGradeQuiz={(grade) => {
                  setDarslikQuizGrade(grade);
                  setIsDarslik10QuizOpen(true);
                }}
              />
            </motion.div>
          )}

          {/* Xronologiya Full Screen View */}
          {activeView === 'xronologiya' && (
            <motion.div
              key="xronologiya"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <XronologiyaPageView onBack={handleGoBack} />
            </motion.div>
          )}

          {/* Yuridik Lug'at View */}
          {activeView === 'lugat' && (
            <motion.div
              key="lugat"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <YuridikLugatView onBack={handleGoBack} />
            </motion.div>
          )}

          {/* Admin Dashboard Simulation View */}
          {activeView === 'admin' && (
            <motion.div
              key="admin"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <AdminDashboard onBack={handleGoBack} />
            </motion.div>
          )}

          {/* Shpargalka (Tips) View */}
          {activeView === 'shpargalka' && (
            <motion.div
              key="shpargalka"
              style={{
                transformOrigin: `${transitionOrigin.x}px ${transitionOrigin.y}px`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                transition: { duration: 0.26, ease: [0.32, 0, 0.67, 0], delay: 0.05 }
              }}
              onAnimationComplete={(definition) => {
                if (definition === 'exit') {
                  // Ghost rendering prevention: reset styles
                }
              }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-[#FBF9F4] w-screen h-[100dvh] overflow-y-auto flex flex-col transition-container touch-pan-y"
            >
              <TipsModal onBack={handleGoBack} onStartExam={handleStartDtmExam} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modals */}
      <Darslik10QuizModal
        isOpen={isDarslik10QuizOpen}
        onClose={() => setIsDarslik10QuizOpen(false)}
        grade={darslikQuizGrade}
        onStartQuiz={(questions, title, timeLimitSeconds) => {
          handleStartMixedQuiz(questions, title, timeLimitSeconds);
        }}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        history={filteredHistory}
        onClearHistory={handleClearHistory}
      />

      {/* Toggle Navigation Drawer */}
      <ToggleNavMenu
        isOpen={isNavMenuOpen}
        onClose={() => setIsNavMenuOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onClearHistory={handleClearHistoryOnly}
        onClearMistakes={handleClearMistakesOnly}
        historyCount={filteredHistory.length}
        mistakesCount={mistakesIds.length}
        initialTab={navMenuInitialTab}
        onStartMilliyTest={handleStartMilliyTest}
        onStartBmbaTest={(mode: 'quiz' | 'practice' = 'quiz', variantId: string = '21dec') => {
          setIsNavMenuOpen(false);
          const topic = TOPICS.find((t) => t.id === 'bmba');
          if (topic) {
            handleSelectTopic(topic, mode, 'barchasi', 30, variantId);
          }
        }}
        onStartHuquqologiyaTest={(mode: 'quiz' | 'practice' = 'quiz') => {
          setIsNavMenuOpen(false);
          handleStartHuquqologiyaQuiz(mode);
        }}
        onOpenLugat={() => {
          setIsNavMenuOpen(false);
          setActiveView('lugat');
        }}
        onOpenStats={() => {
          setIsNavMenuOpen(false);
          setActiveView('home');
          setTimeout(() => {
            const section = document.getElementById('tahlil-markazi-section');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }}
        onOpenAdmin={() => {
          setIsNavMenuOpen(false);
          setActiveView('admin');
        }}
        onOpenIntroVideo={() => {
          setIsNavMenuOpen(false);
          setIsIntroVideoOpen(true);
        }}
        onOpenSplashScreen={() => {
          setIsNavMenuOpen(false);
          setShowSplashScreen(true);
        }}
      />

      {/* Milliy Sertifikat Modal */}
      <MilliySertifikatModal
        isOpen={isMilliySertifikatOpen}
        initialMode={milliySertifikatInitialMode}
        onClose={() => setIsMilliySertifikatOpen(false)}
        onStartTest={handleStartMilliyTest}
      />

      {/* Mavzuli Test Qiyinlik Darajasini Tanlash Modali */}
      <DifficultyModal
        isOpen={difficultyModalState.isOpen}
        onClose={() => setDifficultyModalState((prev) => ({ ...prev, isOpen: false }))}
        topic={difficultyModalState.topic}
        initialMode={difficultyModalState.mode}
        osonCount={
          difficultyModalState.topic?.id === 'bmba'
            ? 0
            : difficultyModalState.topic
            ? QUESTIONS.filter((q) => q.topicId === difficultyModalState.topic!.id && q.difficulty === 'oson').length
            : QUESTIONS.filter((q) => q.difficulty === 'oson').length
        }
        qiyinCount={
          difficultyModalState.topic?.id === 'bmba'
            ? 0
            : difficultyModalState.topic
            ? QUESTIONS.filter((q) => q.topicId === difficultyModalState.topic!.id && q.difficulty === 'qiyin').length
            : QUESTIONS.filter((q) => q.difficulty === 'qiyin').length
        }
        totalCount={
          difficultyModalState.topic?.id === 'bmba'
            ? BMBA_USER_QUESTIONS.length
            : difficultyModalState.topic?.id === 'milliy_sertifikat'
            ? USER_MIXED_QUESTIONS.length
            : difficultyModalState.topic
            ? QUESTIONS.filter((q) => q.topicId === difficultyModalState.topic!.id).length
            : QUESTIONS.length
        }
        onStartQuiz={handleStartTopicWithDifficulty}
      />

      {/* 7-Sekundlik Sayt Intro Video Modali */}
      <SiteIntroVideoModal
        isOpen={isIntroVideoOpen}
        onClose={() => setIsIntroVideoOpen(false)}
        onOpenSplash={() => {
          setIsIntroVideoOpen(false);
          setShowSplashScreen(true);
        }}
      />

      {/* Jonli Splash Screen (Ochilish ekrani) */}
      {showSplashScreen && (
        <SplashScreen
          onComplete={() => setShowSplashScreen(false)}
        />
      )}

      {/* Footer */}
    </div>
  );
}
