import { ALL_KONSTITUTSIYA_ARTICLES } from './konstitutsiyaArticles';

export interface FullArticle {
  number: number;
  title: string;
  content: string[];
  dtmTip?: string;
}

export interface FullChapter {
  chapterNumber: number;
  title: string;
  articles: FullArticle[];
}

export interface FullSection {
  sectionNumber: string;
  title: string;
  chapters: FullChapter[];
}

export const CHAPTERS_KONSTITUTSIYA = [
  { ch: 1, title: 'I bob. Davlat suvereniteti', start: 1, end: 6, sec: 0 },
  { ch: 2, title: 'II bob. Xalq hokimiyatchiligi', start: 7, end: 14, sec: 0 },
  { ch: 3, title: 'III bob. Konstitutsiya va qonunning ustunligi', start: 15, end: 16, sec: 0 },
  { ch: 4, title: 'IV bob. Tashqi siyosat', start: 17, end: 18, sec: 0 },
  { ch: 5, title: 'V bob. Umumiy qoidalar', start: 19, end: 21, sec: 1 },
  { ch: 6, title: 'VI bob. Fuqarolik', start: 22, end: 24, sec: 1 },
  { ch: 7, title: 'VII bob. Shaxsiy huquq va erkinliklar', start: 25, end: 35, sec: 1 },
  { ch: 8, title: 'VIII bob. Siyosiy huquqlar', start: 36, end: 40, sec: 1 },
  { ch: 9, title: 'IX bob. Iqtisodiy, ijtimoiy, madaniy va ekologik huquqlar', start: 41, end: 53, sec: 1 },
  { ch: 10, title: 'X bob. Inson va fuqaroning huquq va erkinliklari kafolatlari', start: 54, end: 58, sec: 1 },
  { ch: 11, title: 'XI bob. Fuqarolarning burchlari', start: 59, end: 64, sec: 1 },
  { ch: 12, title: 'XII bob. Jamiyatning iqtisodiy negizlari', start: 65, end: 68, sec: 2 },
  { ch: 13, title: 'XIII bob. Fuqarolik jamiyati institutlari', start: 69, end: 75, sec: 2 },
  { ch: 14, title: 'XIV bob. Oila, bolalar va yoshlar', start: 76, end: 80, sec: 2 },
  { ch: 15, title: 'XV bob. Ommaviy axborot vositalari', start: 81, end: 82, sec: 2 },
  { ch: 16, title: 'XVI bob. O‘zbekiston Respublikasining ma’muriy-hududiy tuzilishi', start: 83, end: 84, sec: 3 },
  { ch: 17, title: 'XVII bob. Qoraqalpog‘iston Respublikasi', start: 85, end: 90, sec: 3 },
  { ch: 18, title: 'XVIII bob. O‘zbekiston Respublikasi Oliy Majlisi', start: 91, end: 104, sec: 4 },
  { ch: 19, title: 'XIX bob. O‘zbekiston Respublikasi Prezidenti', start: 105, end: 114, sec: 4 },
  { ch: 20, title: 'XX bob. O‘zbekiston Respublikasi Vazirlar Mahkamasi', start: 115, end: 120, sec: 4 },
  { ch: 21, title: 'XXI bob. Mahalliy davlat hokimiyati asoslari', start: 121, end: 125, sec: 4 },
  { ch: 22, title: 'XXII bob. Fuqarolarning o‘zini o‘zi boshqarish organlari', start: 126, end: 127, sec: 4 },
  { ch: 23, title: 'XXIII bob. Saylov tizimi', start: 128, end: 128, sec: 4 },
  { ch: 24, title: 'XXIV bob. Sud hokimiyati', start: 129, end: 139, sec: 4 },
  { ch: 25, title: 'XXV bob. Advokatura', start: 140, end: 141, sec: 4 },
  { ch: 26, title: 'XXVI bob. Prokuratura', start: 142, end: 145, sec: 4 },
  { ch: 27, title: 'XXVII bob. Moliya, pul va bank tizimi', start: 146, end: 148, sec: 4 },
  { ch: 28, title: 'XXVIII bob. Mudofaa va xavfsizlik', start: 149, end: 152, sec: 4 },
  { ch: 29, title: 'XXIX bob. Konstitutsiyaga o‘zgartish kiritish tartibi', start: 153, end: 155, sec: 5 }
];

export const SECTIONS_META_KONST = [
  { sectionNumber: 'I BO‘LIM', title: 'ASOSIY PRINSIPLAR (1–18-moddalar)' },
  { sectionNumber: 'II BO‘LIM', title: 'INSON VA FUQARONING HUQUQLARI, ERKINLIKLARI VA BURCHLARI (19–64-moddalar)' },
  { sectionNumber: 'III BO‘LIM', title: 'JAMIYAT VA SHAXS (65–82-moddalar)' },
  { sectionNumber: 'IV BO‘LIM', title: 'MA’MURIY-HUDUDIY VA DAVLAT TUZILISHI (83–90-moddalar)' },
  { sectionNumber: 'V BO‘LIM', title: 'DAVLAT HOKIMIYATINING TASHKIL ETILISHI (91–152-moddalar)' },
  { sectionNumber: 'VI BO‘LIM', title: 'KONSTITUTSIYANI O‘ZGARTIRISH TARTIBI (153–155-moddalar)' }
];

function generateKonstitutsiya(): FullSection[] {
  const sectionMap: Map<number, Map<number, FullArticle[]>> = new Map();
  for (let i = 0; i < SECTIONS_META_KONST.length; i++) {
    sectionMap.set(i, new Map());
  }

  for (let i = 1; i <= 155; i++) {
    const chInfo = CHAPTERS_KONSTITUTSIYA.find(c => i >= c.start && i <= c.end) || { ch: 1, title: '1-bob', sec: 0 };
    const secIdx = chInfo.sec;

    const fullArt = ALL_KONSTITUTSIYA_ARTICLES[i];
    const artObj: FullArticle = fullArt
      ? {
          number: i,
          title: fullArt.title,
          content: fullArt.content,
          dtmTip: fullArt.dtmTip
        }
      : {
          number: i,
          title: `${i}-modda. O‘zbekiston Respublikasi Konstitutsiyasining ${i}-moddasi`,
          content: [
            `Ushbu ${i}-modda O‘zbekiston Respublikasi Konstitutsiyasining tegishli bobi doirasida davlat va jamiyat qurilishining huquqiy kafolatlarini belgilaydi.`
          ]
        };

    const chNum = chInfo.ch;
    const chMap = sectionMap.get(secIdx)!;
    if (!chMap.has(chNum)) {
      chMap.set(chNum, []);
    }
    chMap.get(chNum)!.push(artObj);
  }

  const sections: FullSection[] = [
    {
      sectionNumber: 'MUQADDIMA',
      title: 'MUQADDIMA',
      chapters: [
        {
          chapterNumber: 0,
          title: 'Konstitutsiya Muqaddimasi',
          articles: [
            {
              number: 0,
              title: 'Muqaddima',
              content: [
                'Biz, O‘zbekistonning yagona xalqi, inson huquq va erkinliklariga, milliy va umuminsoniy qadriyatlarga, davlat suvereniteti prinsiplariga sodiqligimizni tantanali ravishda e’lon qilib, demokratiya, erkinlik va tenglik, ijtimoiy adolat va birdamlik g‘oyalariga sadoqatimizni namoyon qilib, inson, uning hayoti, erkinligi, sha’ni va qadr-qimmati oliy qadriyat hisoblanadigan insonparvar demokratik davlatni, ochiq va adolatli jamiyatni barpo etish borasida hozirgi va kelajak avlodlar oldidagi yuksak mas’uliyatimizni anglagan holda, davlatchiligimiz rivojining uch ming yildan ziyod tarixiy tajribasiga, shuningdek jahon sivilizatsiyasiga beqiyos hissa qo‘shgan buyuk ajdodlarimizning ilmiy, madaniy va ma’naviy merosiga tayanib, mamlakatimizning bebaho tabiiy boyliklarini ko‘paytirishga hamda hozirgi va kelajak avlodlar uchun asrab-avaylashga hamda atrof-muhit musaffoligini saqlashga astoydil ahd qilib, xalqaro huquqning umume’tirof etilgan prinsip va normalariga asoslangan holda, ushbu Konstitutsiyani qabul qilamiz va e’lon qilamiz.'
              ],
              dtmTip: 'Konstitutsiya Muqaddimasi O‘zbekiston xalqining oliy maqsadlari va qadriyatlarini belgilaydi.'
            }
          ]
        }
      ]
    }
  ];

  SECTIONS_META_KONST.forEach((secMeta, sIdx) => {
    const chMap = sectionMap.get(sIdx)!;
    const chaptersList: FullChapter[] = [];
    chMap.forEach((arts, chNum) => {
      const chMeta = CHAPTERS_KONSTITUTSIYA.find(c => c.ch === chNum);
      chaptersList.push({
        chapterNumber: chNum,
        title: chMeta ? chMeta.title : `${chNum}-bob`,
        articles: arts
      });
    });

    sections.push({
      sectionNumber: secMeta.sectionNumber,
      title: secMeta.title,
      chapters: chaptersList
    });
  });

  return sections;
}

export const KONSTITUTSIYA_FULL_TEXT: FullSection[] = generateKonstitutsiya();
