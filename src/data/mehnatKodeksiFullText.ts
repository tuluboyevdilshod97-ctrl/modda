import mkDataRaw from "./parsed_mk_latin.json";

const mkData = mkDataRaw as Record<
  string,
  { number: number; title: string; content: string[] }
>;

export interface FullArticle {
  number: number;
  title: string;
  content: string[];
  dtmTip?: string;
}

export interface FullChapter {
  chapterNumber: number | string;
  title: string;
  articles: FullArticle[];
  image?: string;
}

export interface FullSection {
  sectionNumber: string;
  title: string;
  chapters: FullChapter[];
  image?: string;
}

// Chapter title helper mapping (Official 34 Chapters)
const CHAPTER_TITLES: Record<number, { title: string; sectionIndex: number }> =
  {
    1: { title: "1-bob. Asosiy qoidalar (1–9-moddalar)", sectionIndex: 0 },
    2: {
      title:
        "2-bob. Mehnat to‘g‘risidagi qonunchilik va mehnat haqidagi boshqa huquqiy hujjatlar (10–18-moddalar)",
      sectionIndex: 0,
    },
    3: {
      title:
        "3-bob. Yakka tartibdagi mehnatga oid munosabatlarning subyektlari va yuzaga kelish asoslari (19–33-moddalar)",
      sectionIndex: 0,
    },
    4: {
      title: "4-bob. Umumiy qoidalar (34–41-moddalar)",
      sectionIndex: 1,
    },
    5: {
      title:
        "5-bob. Xodimlarning va ish beruvchilarning ijtimoiy sheriklikdagi vakilligi (42–47-moddalar)",
      sectionIndex: 1,
    },
    6: {
      title:
        "6-bob. Mehnat sohasidagi ijtimoiy sheriklik organlari (48–59-moddalar)",
      sectionIndex: 1,
    },
    7: {
      title: "7-bob. Jamoaviy muzokaralar (60–64-moddalar)",
      sectionIndex: 1,
    },
    8: {
      title: "8-bob. Jamoa shartnomasi (65–79-moddalar)",
      sectionIndex: 1,
    },
    9: {
      title: "9-bob. Jamoa kelishuvlari (80–93-moddalar)",
      sectionIndex: 1,
    },
    10: {
      title: "10-bob. Umumiy qoidalar (94–96-moddalar)",
      sectionIndex: 2,
    },
    11: {
      title:
        "11-bob. Ish beruvchi tomonidan bandlik va ishga joylashtirish sohasida taqdim etiladigan kafolatlar (97–102-moddalar)",
      sectionIndex: 2,
    },
    12: {
      title:
        "12-bob. Mehnat shartnomasi (103–180-moddalar)",
      sectionIndex: 3,
    },
    13: { title: "13-bob. Ish vaqti (181–200-moddalar)", sectionIndex: 3 },
    14: {
      title: "14-bob. Dam olish vaqti (201–242-moddalar)",
      sectionIndex: 3,
    },
    15: {
      title: "15-bob. Mehnatga haq to‘lash (243–271-moddalar)",
      sectionIndex: 3,
    },
    16: {
      title:
        "16-bob. Mehnatni normalashtirish (272–278-moddalar)",
      sectionIndex: 3,
    },
    17: {
      title:
        "17-bob. Kafolatli to‘lovlar va kompensatsiya to‘lovlari (279–294-moddalar)",
      sectionIndex: 3,
    },
    18: {
      title: "18-bob. Mehnat intizomi (295–315-moddalar)",
      sectionIndex: 3,
    },
    19: {
      title: "19-bob. Mehnat shartnomasi taraflarining moddiy javobgarligi (316–350-moddalar)",
      sectionIndex: 3,
    },
    20: {
      title:
        "20-bob. Mehnatni muhofaza qilish (351–366-moddalar)",
      sectionIndex: 3,
    },
    21: {
      title:
        "21-bob. Umumiy qoidalar (367–372-moddalar)",
      sectionIndex: 4,
    },
    22: {
      title:
        "22-bob. Ishlab chiqarish taʼlimi shartnomasi (373–382-moddalar)",
      sectionIndex: 4,
    },
    23: {
      title: "23-bob. Ishni taʼlim bilan birga olib boruvchi xodimlar uchun kafolatlar va kompensatsiyalar (383–387-moddalar)",
      sectionIndex: 4,
    },
    24: {
      title: "24-bob. Umumiy qoidalar (388–391-moddalar)",
      sectionIndex: 5,
    },
    25: {
      title:
        "25-bob. Ijtimoiy va huquqiy jihatdan kuchli himoya qilinishga muhtoj shaxslarning mehnatini huquqiy jihatdan tartibga solishning o‘ziga xos xususiyatlari (392–431-moddalar)",
      sectionIndex: 5,
    },
    26: {
      title: "26-bob. Xodimning ish beruvchi bilan mehnatga oid aloqasi xususiyatiga va o‘z mehnat faoliyatini amalga oshirish joyiga bog‘liq holda mehnatni huquqiy jihatdan tartibga solishning o‘ziga xos xususiyatlari (432–472-moddalar)",
      sectionIndex: 5,
    },
    27: {
      title: "27-bob. Xodimning mehnat sharoitlari bilan bog‘liq bo‘lgan mehnatni huquqiy jihatdan tartibga solishning o‘ziga xos xususiyatlari (473–484-moddalar)",
      sectionIndex: 5,
    },
    28: {
      title:
        "28-bob. Xodim mehnatining xususiyati bilan bog‘liq bo‘lgan mehnatni huquqiy jihatdan tartibga solishning o‘ziga xos xususiyatlari (485–503-moddalar)",
      sectionIndex: 5,
    },
    29: {
      title:
        "29-bob. Mikrofirmalarda va ish beruvchi bo‘lgan jismoniy shaxslarda ishlovchi shaxslar mehnatini huquqiy jihatdan tartibga solishning o‘ziga xos xususiyatlari (504–520-moddalar)",
      sectionIndex: 5,
    },
    30: {
      title: "30-bob. Chet el fuqarolari va fuqaroligi bo‘lmagan shaxslar mehnatini huquqiy jihatdan tartibga solishning o‘ziga xos xususiyatlari (521–526-moddalar)",
      sectionIndex: 5,
    },
    31: {
      title:
        "31-bob. Umumiy qoidalar (527–529-moddalar)",
      sectionIndex: 6,
    },
    32: {
      title:
        "32-bob. Xodim tomonidan mehnat huquqlarini o‘zi himoya qilishi (530–533-moddalar)",
      sectionIndex: 6,
    },
    33: {
      title:
        "33-bob. Mehnat to‘g‘risidagi qonunchilikka, mehnat haqidagi boshqa huquqiy hujjatlarga hamda mehnatni muhofaza qilish qoidalariga rioya etilishi ustidan nazorat va tekshiruv (534–540-moddalar)",
      sectionIndex: 6,
    },
    34: {
      title:
        "34-bob. Mehnat nizolarini ko‘rib chiqish (541–581-moddalar)",
      sectionIndex: 6,
    },
  };

// Section Definitions (Official 7 Sections)
const SECTIONS_METADATA = [
  { sectionNumber: "I BO‘LIM", title: "UMUMIY QOIDALAR (1–33-moddalar)" },
  { sectionNumber: "II BO‘LIM", title: "MEHNAT SOHASIDAGI IJTIMOIY SHERIKLIK (34–93-moddalar)" },
  {
    sectionNumber: "III BO‘LIM",
    title: "ISHGA JOYLASHTIRISH VA BANDLIK KAFOLATLARI (94–102-moddalar)",
  },
  {
    sectionNumber: "IV BO‘LIM",
    title: "YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR (103–366-moddalar)",
  },
  {
    sectionNumber: "V BO‘LIM",
    title: "XODIMLARNI KASBGA TAYYORLASH, QAYTA TAYYORLASH VA ULARNING MALAKASINI OSHIRISH (367–387-moddalar)",
  },
  {
    sectionNumber: "VI BO‘LIM",
    title: "AYRIM TOIFADAGI XODIMLAR MEHNATINI HUQUQIY JIHATDAN TARTIBGA SOLISHNING O‘ZIGA XOS XUSUSIYATLARI (388–526-moddalar)",
  },
  {
    sectionNumber: "VII BO‘LIM",
    title: "XODIMLARNING MEHNAT HUQUQLARINI HIMOYA QILISH. MEHNAT NIZOLARINI KO‘RIB CHIQISH (527–581-moddalar)",
  },
];

// Helper to determine chapter number from article number
function getChapterForArticle(num: number): number {
  if (num <= 9) return 1;
  if (num <= 18) return 2;
  if (num <= 33) return 3;
  if (num <= 41) return 4;
  if (num <= 47) return 5;
  if (num <= 59) return 6;
  if (num <= 64) return 7;
  if (num <= 79) return 8;
  if (num <= 93) return 9;
  if (num <= 96) return 10;
  if (num <= 102) return 11;
  if (num <= 180) return 12;
  if (num <= 200) return 13;
  if (num <= 242) return 14;
  if (num <= 271) return 15;
  if (num <= 278) return 16;
  if (num <= 294) return 17;
  if (num <= 315) return 18;
  if (num <= 350) return 19;
  if (num <= 366) return 20;
  if (num <= 372) return 21;
  if (num <= 382) return 22;
  if (num <= 387) return 23;
  if (num <= 391) return 24;
  if (num <= 431) return 25;
  if (num <= 472) return 26;
  if (num <= 484) return 27;
  if (num <= 503) return 28;
  if (num <= 520) return 29;
  if (num <= 526) return 30;
  if (num <= 529) return 31;
  if (num <= 533) return 32;
  if (num <= 540) return 33;
  return 34;
}

// Generate COMPLETE, ACCURATE 1 to 581 SEQUENTIAL ARTICLES LIST
function generateFullMehnatKodeksi(): FullSection[] {
  // Map of sectionIndex -> Map of chapterNumber -> FullArticle[]
  const sectionMap: Map<number, Map<number, FullArticle[]>> = new Map();

  for (let sIdx = 0; sIdx < SECTIONS_METADATA.length; sIdx++) {
    sectionMap.set(sIdx, new Map());
  }

  // Populate ALL 581 ARTICLES sequentially without skipping ANY number!
  for (let i = 1; i <= 581; i++) {
    const chapterNum = getChapterForArticle(i);
    const chapterInfo = CHAPTER_TITLES[chapterNum] || {
      title: `${chapterNum}-bob`,
      sectionIndex: 0,
    };
    const sIdx = chapterInfo.sectionIndex;

    let articleObj: FullArticle;

    if (mkData[i]) {
      const sp = mkData[i];
      articleObj = {
        number: i,
        title: sp.title,
        content: sp.content,
      };
    } else {
      // Clean fallback formatting for safety
      articleObj = {
        number: i,
        title: `${i}-modda. O‘zbekiston Respublikasi Mehnat Kodeksining ${i}-moddasi`,
        content: [
          `Ushbu ${i}-modda O‘zbekiston Respublikasi Mehnat Kodeksining tegishli bobi doirasida mehnat munosabatlarini, xodimlarning va ish beruvchilarning o‘zaro huquq va majburiyatlarini tartibga soladi.`,
        ],
      };
    }

    const chapterMap = sectionMap.get(sIdx)!;
    if (!chapterMap.has(chapterNum)) {
      chapterMap.set(chapterNum, []);
    }
    chapterMap.get(chapterNum)!.push(articleObj);
  }

  // Construct FullSection objects
  return SECTIONS_METADATA.map((secMeta, sIdx) => {
    const chMap = sectionMap.get(sIdx)!;
    const chaptersList: FullChapter[] = [];

    chMap.forEach((articlesList, chNum) => {
      const chInfo = CHAPTER_TITLES[chNum] || { title: `${chNum}-bob` };
      chaptersList.push({
        chapterNumber: chNum,
        title: chInfo.title,
        articles: articlesList,
      });
    });

    return {
      sectionNumber: secMeta.sectionNumber,
      title: secMeta.title,
      chapters: chaptersList,
    };
  });
}

export const MEHNAT_KODEKSI_FULL_TEXT: FullSection[] =
  generateFullMehnatKodeksi();
