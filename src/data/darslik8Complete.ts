export interface TextbookLesson {
  id: string;
  lessonNumber: string;
  title: string;
  pages: string;
  startPage: number;
  endPage: number;
  epigraph?: { text: string; author: string; work?: string };
  warmupQuestions?: string[];
  coreText: string[];
  memorizeCallouts?: { term: string; definition: string }[];
  lawQuotes?: { title: string; lawName: string; articleNumber?: string; text: string }[];
  diagrams?: {
    title: string;
    description?: string;
    type: 'pillars' | 'pyramid' | 'tree' | 'compare' | 'cards' | 'flow' | 'table';
    items: { label: string; desc?: string; subItems?: string[]; color?: string }[];
  }[];
  caseStudies?: { title: string; text: string; questions?: string[] }[];
  conclusions?: { title: string; source?: string; story: string }[];
  historyNotes?: { title: string; text: string }[];
  creativeTasks?: {
    title: string;
    instructions: string;
    headers?: [string, string];
    rows?: [string, string][];
  }[];
}

export interface TextbookChapter {
  chapterNumber: number;
  title: string;
  bannerImage: string;
  startPage: number;
  endPage: number;
  description: string;
  lessons: TextbookLesson[];
}

export interface FullDarslik8 {
  title: string;
  subtitle: string;
  grade: number;
  year: number;
  publisher: string;
  coverImage: string;
  totalPages: number;
  foreword: {
    title: string;
    text: string[];
    author: string;
  };
  introduction: {
    title: string;
    epigraph: { text: string; author: string };
    text: string[];
    outcomes: string[];
  };
  chapters: TextbookChapter[];
  glossary: { term: string; definition: string; origin?: string }[];
}

export const DARSLIK_8_FULL: FullDarslik8 = {
  title: 'Davlat va huquq asoslari',
  subtitle: 'Umumiy o‘rta ta’lim maktablarining 8-sinfi uchun darslik',
  grade: 8,
  year: 2024,
  publisher: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
  coverImage: '/assets/images/textbook_cover_8_1789449446790.jpg',
  totalPages: 1,
  foreword: {
    title: 'Darslik yuklanmagan',
    text: ['Ushbu darslik uchun PDF fayli hali yuklanmagan. Iltimos, darslikning rasmiy PDF faylini yuklang.'],
    author: 'Tizim'
  },
  introduction: {
    title: '',
    epigraph: { text: '', author: '' },
    text: [],
    outcomes: []
  },
  chapters: [],
  glossary: []
};
