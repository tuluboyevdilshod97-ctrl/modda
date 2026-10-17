export type QuestionDifficulty = 'oson' | 'qiyin';

export interface Question {
  id: string;
  topicId: string;
  question: string;
  options: [string, string, string, string]; // A, B, C, D
  correctIndex: number; // 0, 1, 2, 3
  explanation: string; // Tushuntirish va huquqiy asos (modda)
  legalBasis?: string; // e.g., "O'zR Konstitutsiyasi, 105-modda"
  difficulty: QuestionDifficulty;
  yearOrSource?: string; // e.g., "DTM 2024", "DTM 2023", "Attestatsiya"
  
  // Milliy Sertifikat Custom Types
  questionType?: 'yopiq' | 'muvofiqlik' | 'ochiq' | 'kazus';
  correctAnswerText?: string; // e.g., "36 soat" or "1-a, 2-b, 3-c, 4-d"
  matchingPairsLeft?: string[]; // for matching / muvofiqlik
  matchingPairsRight?: string[]; // for matching / muvofiqlik
  userTypedAnswer?: string; // temporary placeholder for student input
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  badge: string;
  description: string;
}

export type QuizMode = 'dtm_exam' | 'topic_practice' | 'mistakes_review' | 'aralash_test';

export interface QuizSession {
  mode: QuizMode;
  topicId?: string; // if topic_practice
  topicTitle?: string;
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<string, number | string>; // questionId -> selectedIndex or typed string answer
  markedQuestions: string[]; // questionId[] flagged by student
  timeLimitSeconds: number; // 0 for unlimited in practice mode
  timeRemainingSeconds: number;
  isFinished: boolean;
  startedAt: number;
  completedAt?: number;
}

export interface QuizResultHistory {
  id: string;
  date: string;
  mode: QuizMode;
  topicTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  scorePercentage: number;
  scoreBall: number; // DTM ball hisob-kitobi (masalan 3.1 ballik tizim)
  timeSpentSeconds: number;
  incorrectQuestionIds: string[];
}

export interface LegalCheatItem {
  id: string;
  category: 'yosh' | 'muddat' | 'sud' | 'davlat' | 'saylov';
  title: string;
  value: string;
  details: string;
  article: string;
}

export interface AppSettings {
  fontSize: 'small' | 'normal' | 'large' | 'extralarge';
  soundEnabled: boolean;
  autoNextOnSelect: boolean;
  defaultTimerMinutes: number;
  questionsPerTopic: number;
  dtmQuestionsCount: number;
  topicTimerMinutes: number;
  darkMode: boolean;
  statsDurationDays: '7' | '30' | 'all';
}

export interface ChronologyEvent {
  id: string;
  year: string;
  dateExact?: string;
  category: 'konstitutsiya' | 'davlat' | 'kodekslar' | 'qonunlar' | 'islohotlar' | 'xalqaro';
  title: string;
  description: string;
  significance: string;
  examTip?: string;
}

export interface LegalSourceItem {
  id: string;
  title: string;
  category: 'asosiy_qonun' | 'kodeks' | 'portal' | 'adabiyot';
  badge: string;
  description: string;
  details: string[];
  externalUrl?: string;
}

