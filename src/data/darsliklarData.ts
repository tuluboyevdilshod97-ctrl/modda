import { FullSection } from './mehnatKodeksiFullText';

export interface Textbook {
  id: string;
  category: 'huquq' | 'nazariya';
  grade: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  number: string;
  data: FullSection[];
}

export const DARSLIKLAR_DATA: Textbook[] = [
  {
    id: 'huquq-8',
    category: 'huquq',
    grade: 8,
    title: '8-sinf Huquq darsligi',
    subtitle: 'Davlat va huquq asoslari',
    badge: '8-Sinf darsligi',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    description: 'Rasmiy 8-sinf Huquq darsligi PDF fayli. Ushbu bo‘lim orqali darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '7',
    data: []
  },
  {
    id: 'huquq-9',
    category: 'huquq',
    grade: 9,
    title: '9-sinf Huquq darsligi',
    subtitle: 'Konstitutsiyaviy huquq asoslari',
    badge: '9-Sinf darsligi',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    description: 'Rasmiy 9-sinf Huquq darsligi PDF fayli. Ushbu bo‘lim orqali darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '8',
    data: []
  },
  {
    id: 'huquq-10',
    category: 'huquq',
    grade: 10,
    title: '10-sinf Huquq darsligi',
    subtitle: 'Fuqarolik va oila huquqi',
    badge: '10-Sinf darsligi',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    description: 'Rasmiy 10-sinf Huquq darsligi PDF fayli. Ushbu bo‘lim orqali darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '9',
    data: []
  },
  {
    id: 'huquq-11',
    category: 'huquq',
    grade: 11,
    title: '11-sinf Huquq darsligi',
    subtitle: 'Mehnat va jinoyat huquqi asoslari',
    badge: '11-Sinf darsligi',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    description: 'Rasmiy 11-sinf Huquq darsligi PDF fayli. Ushbu bo‘lim orqali darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '10',
    data: []
  },
  {
    id: 'dhn-8',
    category: 'nazariya',
    grade: 8,
    title: '8-sinf Davlat va huquq nazariyasi',
    subtitle: 'Hokimiyatlar bo‘linishi va konstitutsiyaviy tuzum',
    badge: '8-Sinf darsligi',
    badgeColor: 'bg-teal-100 text-teal-800',
    description: 'Rasmiy 8-sinf Davlat va huquq nazariyasi darsligi PDF fayli. Darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '11',
    data: []
  },
  {
    id: 'dhn-9',
    category: 'nazariya',
    grade: 9,
    title: '9-sinf Davlat va huquq nazariyasi',
    subtitle: 'Huquqiy davlat va fuqarolik jamiyati',
    badge: '9-Sinf darsligi',
    badgeColor: 'bg-teal-100 text-teal-800',
    description: 'Rasmiy 9-sinf Davlat va huquq nazariyasi darsligi PDF fayli. Darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '12',
    data: []
  },
  {
    id: 'dhn-10',
    category: 'nazariya',
    grade: 10,
    title: '10-sinf Davlat va huquq nazariyasi',
    subtitle: 'Huquqiy normalar va sanksiyalar',
    badge: '10-Sinf darsligi',
    badgeColor: 'bg-teal-100 text-teal-800',
    description: 'Rasmiy 10-sinf Davlat va huquq nazariyasi darsligi PDF fayli. Darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '13',
    data: []
  },
  {
    id: 'dhn-11',
    category: 'nazariya',
    grade: 11,
    title: '11-sinf Davlat va huquq nazariyasi',
    subtitle: 'Huquqiy tizimlar va komparativistika',
    badge: '11-Sinf darsligi',
    badgeColor: 'bg-teal-100 text-teal-800',
    description: 'Rasmiy 11-sinf Davlat va huquq nazariyasi darsligi PDF fayli. Darslikni yuklab to‘liq o‘qishingiz mumkin.',
    number: '14',
    data: []
  }
];
