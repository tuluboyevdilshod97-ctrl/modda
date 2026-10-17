import { LegalSourceItem } from '../types';

export interface MehnatKodeksiModda {
  number: number;
  title: string;
  summary: string;
  dtmTip?: string;
}

export interface MehnatKodeksiChapter {
  id: string;
  chapterNumber: number;
  sectionTitle: string;
  chapterTitle: string;
  moddaRange: string;
  badge: string;
  description: string;
  details: string[];
  keyArticles: MehnatKodeksiModda[];
}

export const MEHNAT_KODEKSI_CHAPTERS: MehnatKodeksiChapter[] = [
  {
    id: 'mk-bob-1',
    chapterNumber: 1,
    sectionTitle: 'I BO‘LIM. UMUMIY QOIDALAR',
    chapterTitle: '1-bob. Asosiy qoidalar',
    moddaRange: '1–9-moddalar',
    badge: '1–9-moddalar',
    description: 'Mehnat kodeksining tartibga solish sohasi, asosiy vazifalari, printsiplari (mehnat erkinligi, kamsitishni va majburiy mehnatni taqiqlash) va muddatlarni hisoblash tartibi.',
    details: [
      '1-modda: Yakka tartibdagi va u bilan bog‘liq ijtimoiy munosabatlarni tartibga soladi.',
      '4-modda: Mehnat va mashg‘ulotlar sohasida kamsitish taqiqlanadi.',
      '5-modda: Majburiy mehnat taqiqlanadi (Harbiy xizmat, favqulodda holat va sud hukmi bundan mustasno).',
      '9-modda: Muddatlar kalendar sana, yillar, oylar, haftalar yoki kunlar bilan hisoblanadi. Oxirgi kun dam olish kuniga to‘g‘ri kelsa, keyingi ish kuni hisoblanadi.'
    ],
    keyArticles: [
      { number: 1, title: 'Ushbu Kodeks bilan tartibga solinadigan munosabatlar', summary: 'Xodim, ish beruvchi va davlat manfaatlarining muvozanatini ta’minlaydi.' },
      { number: 4, title: 'Kamsitishni taqiqlash prinsipi', summary: 'Jinsi, yoshi, irqi, millati, dini, e’tiqodiga qarab cheklovlar qo‘yish kamsitishdir.', dtmTip: 'Ayollarga yoki nogironlarga beriladigan imtiyozlar kamsitish hisoblanmaydi.' },
      { number: 5, title: 'Majburiy mehnatni taqiqlash', summary: 'Jazoni qo‘llash tahdidi ostida majburlash taqiqlanadi.', dtmTip: 'Harbiy xizmat, favqulodda holat va sud hukmi bo‘yicha ishlar majburiy mehnatga kirmaydi.' },
      { number: 9, title: 'Muddatlarni hisoblash', summary: 'Muddat belgilangan kalendar sanadan keyingi kundan e’tiboran boshlanadi.' }
    ]
  },
  {
    id: 'mk-bob-2',
    chapterNumber: 2,
    sectionTitle: 'I BO‘LIM. UMUMIY QOIDALAR',
    chapterTitle: '2-bob. Mehnat to‘g‘risidagi qonunchilik va mehnat haqidagi boshqa huquqiy hujjatlar',
    moddaRange: '10–18-moddalar',
    badge: '10–18-moddalar',
    description: 'Mehnat qonunchiligi xalqaro shartnomalar, jamoa shartnomalari, jamoa kelishuvlari va ichki lokal hujjatlar bilan o‘zaro nisbatini belgilaydi.',
    details: [
      '10-modda: Xalqaro shartnoma qoidalari milliy qonunchilikdan imtiyozliroq bo‘lsa, xalqaro shartnoma qo‘llaniladi.',
      '13-modda: Ichki hujjatlar va mehnat shartnomalari xodimning holatini yomonlashtirishi mumkin emas.',
      '17-modda: Xodim holatini yomonlashtiruvchi shartlar o‘z-o‘zidan haqiqiy emasdir.'
    ],
    keyArticles: [
      { number: 10, title: 'Mehnat to‘g‘risidagi qonunchilik', summary: 'Xalqaro shartnomalar va milliy mehnat qonunchiligi nisbati.' },
      { number: 13, title: 'Huquqiy hujjatlarning o‘zaro nisbati', summary: 'Xodim holatini qonunga nisbatan yomonlashtiruvchi hujjatlar haqiqiy emas.' },
      { number: 18, title: 'Ish beruvchining yakka tartibdagi huquqiy hujjatlari', summary: 'Buyruqlar, farmoyishlar va qarorlar e’lon qilinadi.' }
    ]
  },
  {
    id: 'mk-bob-3',
    chapterNumber: 3,
    sectionTitle: 'I BO‘LIM. UMUMIY QOIDALAR',
    chapterTitle: '3-bob. Yakka tartibdagi mehnatga oid munosabatlarning subyektlari va yuzaga kelish asoslari',
    moddaRange: '19–33-moddalar',
    badge: '19–33-moddalar',
    description: 'Xodim va ish beruvchining huquqiy layoqati hamda mehnat munosabatlarining yuzaga kelish asoslari.',
    details: [
      '20-modda: Xodimning mehnat huquq va muomala layoqati 16 yoshga to‘lgan paytidan vujudga keladi.',
      '21-modda: Xodimning asosiy huquqlari (ish haqi, dam olish, xavfsiz mehnat sharoitlari).',
      '22-modda: Xodimning majburiyatlari (vijdonan bajarish, intizomga rioya qilish, mol-mulkni ehtiyot qilish).',
      '26-modda: Munosabatlar mehnat shartnomasi, tanlov, tayinlash yoki sud qarori asosida yuzaga keladi.'
    ],
    keyArticles: [
      { number: 20, title: 'Xodimning mehnatga oid huquq va muomala layoqati', summary: 'Umumiy qoida bo‘yicha 16 yoshga to‘lganda bir vaqtning o‘zida vujudga keladi.', dtmTip: 'DTM imtihonida xodimning muomala layoqati yoshi 16 yosh deb so‘raladi.' },
      { number: 21, title: 'Xodimning huquqlari', summary: 'Adolatli ish haqi olish, ta’til, xavfsiz sharoit va kasaba uyushmasiga birlashish.' },
      { number: 25, title: 'Ish beruvchining majburiyatlari', summary: 'Xodimni ish bilan va asbob-uskunalar bilan ta’minlash, ish haqini o‘z vaqtida to‘lash.' }
    ]
  },
  {
    id: 'mk-bob-4',
    chapterNumber: 4,
    sectionTitle: 'II BO‘LIM. MEHNAT SOHASIDAGI IJTIMOIY SHERIKLIK',
    chapterTitle: '4–9-boblar. Ijtimoiy sheriklik, Jamoa shartnomasi va kelishuvlari',
    moddaRange: '34–93-moddalar',
    badge: '34–93-moddalar',
    description: 'Xodimlar, ish beruvchilar va davlat organlari o‘rtasidagi hamkorlik, jamoa shartnomasi va jamoa kelishuvlarini tuzish va ijro etish tartibi.',
    details: [
      '35-modda: Ijtimoiy sheriklik 4 darajada amalga oshiriladi: boshlang‘ich, hududiy, tarmoq va respublika.',
      '65-modda: Jamoa shartnomasi — tashkilotda mehnat munosabatlarini tartibga soluvchi huquqiy hujjat.',
      '71-modda: Jamoa shartnomasi imzolangan kundan kuchga kiradi va ko‘pi bilan 3 yil amal qiladi.',
      '80-modda: Jamoa kelishuvlari hududiy, tarmoq va Bosh jamoa kelishuvlariga bo‘linadi.'
    ],
    keyArticles: [
      { number: 35, title: 'Ijtimoiy sheriklik darajalari', summary: 'Boshlang‘ich, hududiy, tarmoq va respublika darajalari.' },
      { number: 65, title: 'Jamoa shartnomasi tushunchasi', summary: 'Tashkilot va yakka tadbirkorda xodimlar va ish beruvchi o‘rtasida tuziladi.' },
      { number: 71, title: 'Jamoa shartnomasining muddati', summary: 'Ko‘pi bilan 3 yil muddatga tuziladi.', dtmTip: 'Jamoa shartnomasi amal qilish muddati: ko‘pi bilan 3 yil.' }
    ]
  },
  {
    id: 'mk-bob-10',
    chapterNumber: 10,
    sectionTitle: 'III BO‘LIM. ISHGA JOYLASHTIRISH',
    chapterTitle: '10–11-boblar. Ishga joylashtirish va bandlik kafolatlari',
    moddaRange: '94–102-moddalar',
    badge: '94–102-moddalar',
    description: 'Ishga joylashish huquqi, ijtimoiy ehtiyojmand toifalarga qo‘shimcha kafolatlar va ommaviy ishdan bo‘shatish mezonlari.',
    details: [
      '96-modda: Ijtimoiy ehtiyojmand toifalar (14 yoshgacha bolasi bor yolg‘iz ota-onalar, voyaga etmaganlar, nogironlar, pensiyaoldi yoshidagilar va h.k.).',
      '98-modda: Ommaviy ishdan bo‘shatish mezonlari (30 kunda 50+ nafar, 60 kunda 200+ nafar, 90 kunda 500+ nafar qisqarishi).',
      '100-modda: Ishsizlik davrida 2 oy davomida o‘rtacha oylik ish haqi saqlanadi (Mehnat organida 30 kunda ro‘yxatdan o‘tsa 3-oy ham).'
    ],
    keyArticles: [
      { number: 96, title: 'Aholining ijtimoiy ehtiyojmand toifalari', summary: 'Zaxiraga qo‘yilgan ish o‘rinlari hisobiga ishga joylashtirish kafolatlanadi.' },
      { number: 98, title: 'Ommaviy ishdan bo‘shatish mezonlari', summary: 'Qisqarish miqdoriga qarab mahalliy hokimliklar 6 oygacha to‘xtatib turishi mumkin.' },
      { number: 100, title: 'O‘rtacha oylik ish haqini saqlab qolish', summary: 'Shtat qisqarganda yoki tashkilot tugatilganda 2 oygacha o‘rtacha ish haqi saqlanadi.', dtmTip: '30 kun ichida bandlik organida ro‘yxatdan o‘tsa, 3-oy uchun ham to‘lanadi.' }
    ]
  },
  {
    id: 'mk-bob-12-1',
    chapterNumber: 12,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '12-bob. 1–2-§. Mehnat shartnomasining mazmuni va tuzilishi',
    moddaRange: '103–132-moddalar',
    badge: '103–132-moddalar',
    description: 'Mehnat shartnomasi tushunchasi, majburiy rekvizitlari, shartnomaviy muddatlar va dastlabki sinov muddati.',
    details: [
      '104-modda: Majburiy shartlar (ish joyi, mehnat vazifasi, ish boshlanish sanasi, ish haqi shartlari).',
      '110-modda: Shartnoma nomuayyan muddatga yoki 3 yildan ko‘p bo‘lmagan muayyan muddatga (muddatli) tuziladi.',
      '118-modda: Ishga qabul qilish yoshi — 16 yosh. Ota-ona roziligi bilan o‘quvchilarga yengil ish uchun 15 yosh.',
      '124-modda: Ishga kirishda talab etiladigan hujjatlar (Pasport/ID, mehnat daftarchasi, diplom, STIR, INPS, harbiy bilet).',
      '129–130-modda: Dastlabki sinov muddati oddiy xodimga 3 oygacha, rahbarlar va bosh buxgalterlarga 6 oygacha.'
    ],
    keyArticles: [
      { number: 110, title: 'Mehnat shartnomasining muddati', summary: 'Nomuayyan muddatga yoki ko‘pi bilan 3 yilgacha muddatli tuziladi.', dtmTip: 'Muddatli shartnoma eng ko‘pi bilan 3 yilga tuzilishi mumkin.' },
      { number: 118, title: 'Ishga qabul qilish yoshi', summary: 'Umumiy yosh — 16 yosh. Yengil ishlar uchun — 15 yosh.', dtmTip: '15 yoshdan faqat ota-ona roziligi va o‘qishdan bo‘sh vaqtda yengil ishga ruxsat etiladi.' },
      { number: 124, title: 'Talab qilinadigan hujjatlar', summary: 'Qonunda nazarda tutilmagan ortiqcha hujjatlarni talab qilish taqiqlanadi.' },
      { number: 130, title: 'Dastlabki sinov muddati', summary: 'Oddiy xodimlarga 3 oy, rahbar va bosh buxgalterlarga 6 oygacha.', dtmTip: 'Homiladorlar, 3 yoshgacha bolali ayollar, 18 yoshgacha va OOT bitiruvchilariga sinov belgilanmaydi.' }
    ]
  },
  {
    id: 'mk-bob-12-2',
    chapterNumber: 12,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '12-bob. 3–5-§. Mehnat shartnomasini o‘zgartirish, chetlashtirish va bekor qilish',
    moddaRange: '133–174-moddalar',
    badge: '133–174-moddalar',
    description: 'Boshqa ishga o‘tkazish, ishdan chetlashtirish, shartnomani xodim va ish beruvchi tashabbusi bilan bekor qilish va ishdan bo‘shatish nafaqasi.',
    details: [
      '151-modda: Ishdan chetlashtirish (mastlik, tibbiy ko‘rikdan o‘tmaslik, majburiy himoya vositalaridan foydalanmaslik).',
      '160-modda: Xodim o‘z tashabbusi bilan shartnomani bekor qilishda 14 kalendar kun oldin yozma ogohlantiradi.',
      '165-modda: Ish beruvchi tashabbusi bilan bekor qilishda ogohlantirish muddatlari: Texnologiya/Shtat qisqarganda — 2 oy; Malaka yetishmaganda — 2 hafta; Aybli harakatda — 3 kun.',
      '173-modda: Ishdan bo‘shatish nafaqasi stajga qarab: 3 yilgacha — 50%; 3–5 yil — 75%; 5–10 yil — 100%; 10–15 yil — 150%; 15 yildan ortiq — 200% o‘rtacha ish haqi.'
    ],
    keyArticles: [
      { number: 160, title: 'Xodim tashabbusi bilan bekor qilish', summary: 'Xodim 14 kalendar kun oldin ariza beradi. Ogohlantirish davrida arizasini qaytarib olishi mumkin.', dtmTip: 'Ogohlantirish muddati: 14 kalendar kun.' },
      { number: 165, title: 'Ish beruvchi ogohlantirish muddatlari', summary: 'Shtat qisqarganda kamida 2 oy, malaka yetmaganda 2 hafta, xodim aybi bilan 3 kun oldin ogohlantiriladi.' },
      { number: 173, title: 'Ishdan bo‘shatish nafaqasi miqdorlari', summary: 'Ish stajiga mutanosib ravishda 50% dan 200% gacha to‘lanadi.', dtmTip: '15 yildan ortiq stajga ega xodimga 200% (2 baravar) nafaqa to‘lanadi.' }
    ]
  },
  {
    id: 'mk-bob-13',
    chapterNumber: 13,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '13-bob. Ish vaqti',
    moddaRange: '181–200-moddalar',
    badge: '181–200-moddalar',
    description: 'Ish vaqtining normal va qisqartirilgan davomiyligi, tungi vaqt va ish vaqtidan tashqari ishlar mezonlari.',
    details: [
      '182-modda: Ish vaqtining normal davomiyligi — haftasiga 40 soatdan oshmasligi kerak.',
      '183-modda: Qisqartirilgan ish vaqti: 16–18 yoshdagilarga haftasiga 36 soat; 15–16 yoshdagilarga 24 soat; I va II guruh nogironlariga 36 soat.',
      '188-modda: Tungi vaqt — soat 22:00 dan soat 06:00 gacha bo‘lgan vaqt.',
      '190-modda: Ish vaqtidan tashqari ish surunkasiga 2 kun davomida 4 soatdan (noqulay ishda 2 soatdan) va yiliga 120 soatdan oshmasligi kerak.'
    ],
    keyArticles: [
      { number: 182, title: 'Normal ish vaqti', summary: 'Besh yoki olti kunlik ish haftasida haftasiga 40 soatdan oshmasligi kerak.', dtmTip: 'Maksimal normal ish vaqti: 40 soat/hafta.' },
      { number: 183, title: 'Qisqartirilgan ish vaqti', summary: '16–18 yosh va I-II guruh nogironlariga 36 soat, 15–16 yoshdagilarga 24 soat.', dtmTip: 'DTM savollarida 16-18 yoshgacha xodimlar ish vaqti 36 soat deb tushadi.' },
      { number: 188, title: 'Tungi vaqt', summary: 'Soat 22:00 dan 06:00 gacha bo‘lgan vaqt tungi vaqt hisoblanadi.' },
      { number: 190, title: 'Ish vaqtidan tashqari ish chegarasi', summary: 'Yiliga ko‘pi bilan 120 soat, surunkasiga 2 kunda 4 soatdan oshmasligi kerak.' }
    ]
  },
  {
    id: 'mk-bob-14',
    chapterNumber: 14,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '14-bob. Dam olish vaqti va ta’tillar',
    moddaRange: '201–242-moddalar',
    badge: '201–242-moddalar',
    description: 'Dam olish va ovqatlanish tanaffusi, bayram kunlari, har yilgi asosiy hamda ijtimoiy ta’tillar tartibi.',
    details: [
      '204-modda: Dam olish va ovqatlanish tanaffusi — 30 minutdan 2 soatgacha (ish vaqtiga kirmaydi).',
      '208-modda: O‘zbekiston Respublikasida 9 ta ishlanmaydigan bayram kuni belgilangan.',
      '217-modda: Har yilgi asosiy eng kam mehnat ta’tili — 21 kalendar kun.',
      '218-modda: Asosiy uzaytirilgan ta’til: 18 yoshga to‘lmaganlarga va I-II guruh nogironlariga 30 kalendar kun.',
      '220-modda: Ko‘p yillik staj uchun qo‘shimcha ta’til: bitta tashkilotda har 5 yil uchun 2 kun (maksimum 8 kun).',
      '241-modda: Ish haqi saqlanmaydigan ta’til — xodim arizasiga ko‘ra yiliga uzluksiz yoki jamlangan holda ko‘pi bilan 3 oy.'
    ],
    keyArticles: [
      { number: 217, title: 'Asosiy eng kam ta’til', summary: 'Har yilgi asosiy eng kam mehnat ta’tili davomiyligi 21 kalendar kunni tashkil etadi.', dtmTip: 'Yangi Mehnat kodeksi bo‘yicha eng kam ta’til 21 kalendar kun!' },
      { number: 218, title: 'Asosiy uzaytirilgan ta’til', summary: '18 yoshgacha va I-II guruh nogironlariga 30 kalendar kun ta’til beriladi.' },
      { number: 220, title: 'Ko‘p yillik staj uchun ta’til', summary: 'Har 5 yil staj uchun 2 kun qo‘shimcha ta’til (ko‘pi bilan 8 kun).' },
      { number: 241, title: 'Ish haqi saqlanmaydigan ta’til', summary: 'Bir yil davomida jamlangan holda ko‘pi bilan 3 oy berilishi mumkin.' }
    ]
  },
  {
    id: 'mk-bob-15',
    chapterNumber: 15,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '15-bob. Mehnatga haq to‘lash',
    moddaRange: '243–271-moddalar',
    badge: '243–271-moddalar',
    description: 'Ish haqi tizimlari, eng kam miqdor (MHEKM), tungi vaqt, bayram va ish vaqtidan tashqari ish uchun to‘lovlar ile ushlab qolish cheklovlari.',
    details: [
      '245-modda: Mehnatga haq to‘lashning eng kam miqdori (MHEKM) butun respublika bo‘yicha majburiydir.',
      '253-modda: Ish haqi har yarim oyda bir martadan kam bo‘lmagan muddatda (xatlov/avans va qolgan qismi) to‘lanadi.',
      '262–263-modda: Ish vaqtidan tashqari va bayram kunlaridagi ish uchun kamida 2 hissa (2 baravar) haq to‘lanadi.',
      '264-modda: Tungi vaqtdagi ish uchun kamida 1.5 baravar miqdorida haq to‘lanadi.',
      '269–270-modda: Ish haqidan ushlab qolish umumiy qoida bo‘yicha 50% dan oshmasligi kerak (aliment va axloq tuzatishda 70% gacha).'
    ],
    keyArticles: [
      { number: 253, title: 'Ish haqini to‘lash muddatlari', summary: 'Ish haqi har yarim oyda bir martadan kam bo‘lmagan muddatda to‘lanadi.' },
      { number: 262, title: 'Ish vaqtidan tashqari ish haqi', summary: 'Kamida ikki hissa (2 baravar) miqdorida haq to‘lanadi yoki oshirilgan dam olish vaqti beriladi.' },
      { number: 264, title: 'Tungi vaqtdagi ish haqi', summary: 'Tungi vaqtda (22:00-06:00) ishlangan har bir soat uchun kamida 1.5 baravar haq to‘lanadi.' },
      { number: 270, title: 'Ish haqidan ushlab qolish cheklovi', summary: 'Har bir to‘lovda ko‘pi bilan 50% ushlab qolinadi. Aliment va axloq tuzatishda 70% gacha.', dtmTip: 'Umumiy ushlab qolish maksimal 50%, alimentda esa 70%.' }
    ]
  },
  {
    id: 'mk-bob-18',
    chapterNumber: 18,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '18-bob. Mehnat intizomi va xizmat tekshiruvi',
    moddaRange: '295–315-moddalar',
    badge: '295–315-moddalar',
    description: 'Mehnat intizomi, xizmat tekshiruvi o‘tkazish tartibi, intizomiy jazolar turlari va ularning amal qilish muddati.',
    details: [
      '308-modda: Xizmat tekshiruvi muddati — 15 ish kunidan oshmasligi kerak (asosli hollarda yana 15 ish kuniga uzaytiriladi).',
      '312-modda: Intizomiy jazo turlari: 1) Hayfsan; 2) Jarima (o‘rtacha oylikning 30% igacha, ichki tartibda 50% gacha); 3) Mehnat shartnomasini bekor qilish.',
      '314-modda: Intizomiy jazo qilmish aniqlangandan keyin 1 oy ichida, sodir etilganidan keyin 6 oy ichida qo‘llaniladi.',
      '315-modda: Intizomiy jazoning amal qilish muddati — 1 yil. 1 yil ichida yangi jazo berilmasa, avtomatik ravishda olib tashlanadi.'
    ],
    keyArticles: [
      { number: 308, title: 'Xizmat tekshiruvi muddati', summary: 'Xizmat tekshiruvi 15 ish kunidan oshmasligi kerak (ko‘pi bilan yana 15 ish kuniga uzaytiriladi).' },
      { number: 312, title: 'Intizomiy jazo turlari', summary: 'Hayfsan, Jarima (30-50%), Mehnat shartnomasini bekor qilish.', dtmTip: 'Qonunda nazarda tutilmagan boshqa intizomiy jazolarni qo‘llash qat’iyan taqiqlanadi.' },
      { number: 314, title: 'Jazo qo‘llash muddatlari', summary: 'Aniqlangandan keyin 1 oy, sodir etilganidan keyin 6 oy ichida qo‘llaniladi.' },
      { number: 315, title: 'Intizomiy jazoning muddati', summary: 'Jazo 1 yil amal qiladi va 1 yildan so‘ng avtomatik tugallanadi.' }
    ]
  },
  {
    id: 'mk-bob-19',
    chapterNumber: 19,
    sectionTitle: 'IV BO‘LIM. YAKKA TARTIBDAGI MEHNATGA OID MUNOSABATLAR',
    chapterTitle: '19–20-boblar. Moddiy javobgarlik va mehnatni muhofaza qilish',
    moddaRange: '316–366-moddalar',
    badge: '316–366-moddalar',
    description: 'Ish beruvchi va xodimning moddiy javobgarligi, to‘liq moddiy javobgarlik shartnomalari hamda mehnat muhofazasi.',
    details: [
      '340-modda: Xodim cheklangan moddiy javobgarlik bo‘yicha o‘zining o‘rtacha oylik ish haqi doirasida javobgar bo‘ladi.',
      '341-modda: To‘liq moddiy javobgarlik shartnomasi faqat 18 yoshga to‘lgan xodimlar bilan tuzilishi mumkin.',
      '360-modda: Majburiy tibbiy ko‘riklar (18 yoshgacha, pensiya yoshidagilar, nogironlar, noqulay ishdagilar, pedagoglar va tibbiyot xodimlari).'
    ],
    keyArticles: [
      { number: 340, title: 'Xodimning moddiy javobgarligi doirasi', summary: 'Umumiy qoidaga ko‘ra xodim o‘rtacha oylik ish haqi miqdorida javobgar bo‘ladi.' },
      { number: 341, title: 'To‘liq moddiy javobgarlik', summary: 'To‘liq javobgarlik shartnomasi faqat 18 yoshga to‘lgan xodimlar bilan tuziladi.', dtmTip: '18 yoshga to‘lmaganlar faqat qasddan yoki mastlikda yetkazilgan zarar uchun to‘liq javobgar bo‘ladi.' },
      { number: 360, title: 'Majburiy tibbiy ko‘riklar', summary: 'Ish beruvchi hisobidan dastlabki va davriy tibbiy ko‘riklar tashkil etiladi.' }
    ]
  },
  {
    id: 'mk-bob-25-1',
    chapterNumber: 25,
    sectionTitle: 'VI BO‘LIM. AYRIM TOIFADAGI XODIMLAR MEHNATINI TARTIBGA SOLISH',
    chapterTitle: '25-bob. 1-§. Ayollarning va oilaviy vazifalarni bajaruvchi shaxslarning mehnati',
    moddaRange: '392–410-moddalar',
    badge: '392–410-moddalar',
    description: 'Homilador ayollar va oilaviy vazifalar bilan band bo‘lgan shaxslarga beriladigan mehnat imtiyozlari va kafolatlari.',
    details: [
      '396-modda: Homiladorlar va 14 yoshgacha bolali xodimlarni tungi ishga, ish vaqtidan tashqari ishga va xizmat safariga jalb etish faqat ularning Yozma Roziligi bilan amalga oshiriladi.',
      '397-modda: 3 yoshgacha bolasi bor byudjet tashkiloti xodimlariga haftasiga 35 soatlik qisqartirilgan ish vaqti belgilanadi (to‘liq ish haqi saqlangan holda).',
      '401-modda: 12 yoshgacha 2+ bolali yoki 16 yoshgacha nogiron bolali ota-onadan biriga har yili kamida 4 kalendar kun haq to‘lanadigan ta’til beriladi.',
      '404-modda: Homiladorlik va tug‘ish ta’tili — tug‘ruqqacha 70 kun va tug‘ruqdan keyin 56 kun (jami 126 kalendar kun).',
      '405-modda: Bola parvarishlash ta’tili — bola 2 yoshga to‘lguniga qadar nafaqa to‘lanadigan va 3 yoshgacha ish haqi saqlanmaydigan ta’til.'
    ],
    keyArticles: [
      { number: 396, title: 'Tungi va qo‘shimcha ishlarga jalb etish', summary: 'Homiladorlar va 14 yoshgacha bolalilar faqat yozma roziligi bilan jalb etiladi.' },
      { number: 397, title: '3 yoshgacha bolali xodimlar ish vaqti', summary: 'Byudjet tashkilotlarida ishlovchilarga haftasiga 35 soat qisqartirilgan ish vaqti belgilanadi.', dtmTip: 'Ish vaqti 35 soatga qisqartirilsa ham, to‘liq oylik maosh to‘lanadi.' },
      { number: 404, title: 'Homiladorlik va tug‘ish ta’tili', summary: 'Jami 126 kalendar kun (tug‘ruq og‘ir bo‘lsa 140 kun) ta’til va nafaqa beriladi.', dtmTip: 'Tug‘ruqqacha 70 kun + tug‘ruqdan keyin 56 kun = 126 kun.' },
      { number: 408, title: 'Homilador ayollarni ishdan bo‘shatish taqiqi', summary: 'Homilador ayol bilan mehnat shartnomasini ish beruvchi tashabbusi bilan bekor qilish taqiqlanadi (tashkilot tugatilgan hollar mustasno).' }
    ]
  },
  {
    id: 'mk-bob-25-2',
    chapterNumber: 25,
    sectionTitle: 'VI BO‘LIM. AYRIM TOIFADAGI XODIMLAR MEHNATINI TARTIBGA SOLISH',
    chapterTitle: '25-bob. 2-§. Voyaga etmaganlar (18 yoshgacha) mehnati',
    moddaRange: '411–422-moddalar',
    badge: '411–422-moddalar',
    description: '18 yoshga to‘lmagan xodimlar mehnati bo‘yicha qat’iy imtiyozlar, taqiqlar va maxsus muhofaza choralari.',
    details: [
      '412-modda: 18 yoshgacha bo‘lganlarni zararli, er osti, tungi klub/kafe va spirtli/tamaki mahsulotlari bilan bog‘liq ishlarga jalb qilish taqiqlanadi.',
      '414-modda: 18 yoshgacha bo‘lgan shaxslar har yili majburiy tibbiy ko‘rikdan o‘tishlari shart (ish beruvchi hisobidan).',
      '415-modda: Ish vaqti: 16–18 yoshdagilarga haftasiga 36 soat; 15–16 yoshdagilarga haftasiga 24 soat.',
      '417-modda: 18 yoshgacha xodimlarni tungi ishlarga, ish vaqtidan tashqari ishlarga, dam olish va bayram kunlaridagi ishlarga va xizmat safariga yuborish taqiqlanadi.',
      '418-modda: Yillik mehnat ta’tili — kamida 30 kalendar kun (yilning istalgan qulay vaqtida foydalanishi mumkin).',
      '421-modda: 18 yoshgacha xodimlarni ish beruvchi tashabbusi bilan bo‘shatishda Mahalliy Mehnat Organi roziligi shart.'
    ],
    keyArticles: [
      { number: 412, title: 'Taqiqlangan ishlar va yuk ko‘tarish', summary: 'Zararli, er osti va ma’naviyatiga ziyon yetkazuvchi ishlarga jalb etish taqiqlanadi.' },
      { number: 415, title: 'Qisqartirilgan ish vaqti', summary: '16–18 yoshdagilarga max 36 soat/hafta, 15–16 yoshdagilarga 24 soat/hafta.', dtmTip: 'Ish vaqti qisqartirilsa ham, katta yoshdagilar kabi to‘liq haq to‘lanadi (420-modda).' },
      { number: 418, title: 'Voyaga etmaganlar ta’tili', summary: 'Kamida 30 kalendar kun yillik ta’til beriladi va ta’tildan chaqirib olish taqiqlanadi.' },
      { number: 421, title: 'Ishdan bo‘shatishdagi qo‘shimcha kafolat', summary: 'Ish beruvchi tashabbusi bilan bo‘shatish uchun Mahalliy mehnat organining (Bandlik bo‘limi) roziligi olinishi shart.' }
    ]
  },
  {
    id: 'mk-bob-25-3',
    chapterNumber: 25,
    sectionTitle: 'VI BO‘LIM. AYRIM TOIFADAGI XODIMLAR MEHNATINI TARTIBGA SOLISH',
    chapterTitle: '25-bob. 3-§. Nogironligi bo‘lgan shaxslar mehnati',
    moddaRange: '423–433-moddalar',
    badge: '423–433-moddalar',
    description: 'Nogironligi bor shaxslarni ishga joylashtirish, qisqartirilgan ish vaqti va ta’til kafolatlari.',
    details: [
      '424-modda: Sog‘lig‘i holatiga ko‘ra qarshi ko‘rsatma bo‘lgan ishlarda foydalanish taqiqlanadi.',
      '427-modda: I va II guruh nogironligi bo‘lgan xodimlarga haftasiga 36 soatdan oshmaydigan qisqartirilgan ish vaqti belgilanadi (to‘liq haq saqlanadi).',
      '428-modda: I va II guruh nogironligi bo‘lgan xodimlarga har yilgi asosiy uzaytirilgan ta’til — kamida 30 kalendar kun.'
    ],
    keyArticles: [
      { number: 427, title: 'Nogironlar uchun ish vaqti', summary: 'I va II guruh nogironlariga haftasiga ko‘pi bilan 36 soatlik ish vaqti belgilanadi.', dtmTip: 'I va II guruh nogiron xodimlarining oylik maoshi kamaytirilmaydi.' },
      { number: 428, title: 'Nogironlar uchun mehnat ta’tili', summary: 'I va II guruh nogiron xodimlariga kamida 30 kalendar kunlik mehnat ta’tili beriladi.' }
    ]
  },
  {
    id: 'mk-bob-26-34',
    chapterNumber: 26,
    sectionTitle: 'VI BO‘LIM. AYRIM TOIFADAGI XODIMLAR MEHNATINI TARTIBGA SOLISH',
    chapterTitle: '26–34-boblar. Maxsus mehnat rejimlariga ega xodimlar mehnati',
    moddaRange: '434–526-moddalar',
    badge: '434–526-moddalar',
    description: 'O‘rindoshlar, kasanachilar, masofadan turib ishlovchilar, vaxta usuli, pedagoglar va tibbiyot xodimlari mehnati.',
    details: [
      '437-modda: O‘rindoshlik bo‘yicha ish vaqti norma yarmidan (0.5 stavkadan) oshmasligi kerak.',
      '452-modda: Masofadan turib ishlash — Internet va axborot texnologiyalari orqali xodimning o‘z joyidan tashqarida ishlashi.',
      '467-modda: Vaxtaning davomiyligi — bir oydan oshmasligi kerak (alohida hollarda 3 oyga uzaytiriladi).',
      '501-modda: Pedagog xodimlarga haftasiga 36 soatgacha qisqartirilgan ish vaqti va yillik uzaytirilgan mehnat ta’tili beriladi.'
    ],
    keyArticles: [
      { number: 437, title: 'O‘rindoshlik bo‘yicha ish vaqti', summary: 'O‘rindoshlik davomiyligi belgilangan ish vaqti normasining yarmidan (0.5 stavka) oshmasligi kerak.' },
      { number: 467, title: 'Vaxtaning davomiyligi', summary: 'Vaxta muddati ko‘pi bilan 1 oyni (istisno hollarda 3 oyni) tashkil etadi.' },
      { number: 501, title: 'Pedagog xodimlar mehnati', summary: 'Pedagoglarga qisqartirilgan ish vaqti (36 soat) va uzaytirilgan ta’til beriladi.' }
    ]
  },
  {
    id: 'mk-bob-31-34',
    chapterNumber: 31,
    sectionTitle: 'VII BO‘LIM. XODIMLARNING MEHNAT HUQUQLARINI HIMOYA QILISH VA NIZOLAR',
    chapterTitle: '31–34-boblar. Mehnat huquqlarini himoya qilish va mehnat nizolari',
    moddaRange: '527–581-moddalar',
    badge: '527–581-moddalar',
    description: 'Mehnat huquqlarini o‘zi himoya qilish, Davlat mehnat inspeksiyasi nazorati, Mehnat nizolari komissiyasi va Sudda ko‘rib chiqish.',
    details: [
      '531-modda: O‘zini o‘zi himoya qilish — xavfli yoki shartnomada ko‘rsatilmagan g‘ayriqonuniy ishni bajarishdan yozma ogohlantirib bosh tortish.',
      '535-modda: Davlat mehnat inspeksiyasi — mehnat qonunchiligi rioya etilishi ustidan davlat nazoratini amalga oshiradi.',
      '547–555-modda: Mehnat nizolari komissiyasi — arizani 10 kalendar kun ichida ko‘rib chiqadi.',
      '558-modda: Bevosita Suddan ko‘rib chiqiladigan nizolar: Ishga tiklash, ishga qabulni rad etish, zararni qoplash va ma’naviy ziyon.',
      '560-modda: Sudga murojaat qilish muddatlari: Ishga tiklash bo‘yicha — 3 oy (buyruq nusxasi olingach); Moddiy zararni qoplash bo‘yicha — 1 yil; Boshqa mehnat nizolarida — 6 oy.',
      '562-modda: Xodimlar mehnat munosabatlaridan kelib chiquvchi da’volar bo‘yicha sud xarajatlaridan ozod qilinadi.'
    ],
    keyArticles: [
      { number: 531, title: 'O‘zini o‘zi himoya qilish shakli', summary: 'Xodim hayotiga tahdid soluvchi yoki qonunga xilof ishni bajarishni yozma ravishda rad etish huquqiga ega.' },
      { number: 554, title: 'Nizolar komissiyasiga murojaat muddati', summary: 'Xodim huquqi buzilganini bilgan kundan e’tiboran 6 oy ichida murojaat qilishi mumkin.' },
      { number: 560, title: 'Sudga murojaat qilish muddatlari', summary: 'Ishga tiklashda — 3 oy; Moddiy zararda — 1 yil; Boshqa nizolarda — 6 oy.', dtmTip: 'Ishga tiklash havisida sudga murojaat muddati: 3 oy!' },
      { number: 562, title: 'Sud xarajatlaridan ozodlik', summary: 'Xodimlardan mehnat nizolari bo‘yicha sudga murojaat qilganda sud xarajatlari undirilmaydi.' },
      { number: 569, title: 'Darhol ijro etiladigan qarorlar', summary: 'G‘ayriqonuniy bo‘shatilgan xodimni ishga tiklash va 3 oygacha ish haqini undirish qarori darhol ijro etiladi.' }
    ]
  }
];

// Compatibility adapter for LegalSourceItem type
export const LEGAL_SOURCES: LegalSourceItem[] = [
  {
    id: 'konstitutsiya-full',
    title: 'O‘zbekiston Respublikasi Konstitutsiyasi (Yangi tahrir)',
    category: 'asosiy_qonun' as const,
    badge: 'Asosiy Qonun',
    description: 'O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasi (155 ta modda).',
    details: ['Muqaddima, asosiy prinsiplar, inson huquqlari, jamiyat va davlat tuzilishi hamda sud tizimi.']
  },
  {
    id: 'mk-full',
    title: 'O‘zbekiston Respublikasining Mehnat Kodeksi (To‘liq matn)',
    category: 'kodeks' as const,
    badge: '581 ta modda',
    description: 'Yangi tahrirdagi Mehnat kodeksining to‘liq matni. Oddiy kitob kabi o‘qish va qidiruv uchun.',
    details: ['Mehnat shartnomasi, ish va dam olish vaqti, mehnat intizomi, kafolatlar va kompensatsiyalar.']
  },
  {
    id: 'fk-full',
    title: 'O‘zbekiston Respublikasining Fuqarolik Kodeksi',
    category: 'kodeks' as const,
    badge: '1199 ta modda',
    description: 'Fuqarolik kodeksining rasmiy matni. Bitimlar, majburiyatlar va mulk munosabatlari.',
    details: ['Mulk huquqi, shartnomaviy majburiyatlar, fuqarolik muomalasi, intellektual mulk va meros huquqi.']
  },
  {
    id: 'ok-full',
    title: 'O‘zbekiston Respublikasining Oila Kodeksi',
    category: 'kodeks' as const,
    badge: '238 ta modda',
    description: 'Oila kodeksining rasmiy matni. Nikoh, oilaviy munosabatlar va aliment majburiyatlari.',
    details: ['Nikoh tuzish va bekor qilish, er-xotin huquq va majburiyatlari, ota-onalar va bolalar huquqlari.']
  },
  {
    id: 'mjtk-full',
    title: 'O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksi',
    category: 'kodeks' as const,
    badge: '665 ta modda',
    description: 'Ma’muriy javobgarlik to‘g‘risidagi kodeksning rasmiy to‘liq matni.',
    details: ['Ma’muriy huquqbuzarliklar, jazo turlari, sud va ichki ishlar organlari vakolatlari hamda ma’muriy ish yuritish.']
  },
  {
    id: 'jk-full',
    title: 'O‘zbekiston Respublikasining Jinoyat Kodeksi',
    category: 'kodeks' as const,
    badge: '459 ta modda & atama',
    description: 'Jinoyat kodeksining rasmiy to‘liq matni: Umumiy va Maxsus qismlar hamda atamalarning yuridik ma’nosi.',
    details: ['Jinoyat tarkibi, javobgarlik asoslari, jazo turlari va tayinlash tartibi, maxsus qism jinoyatlari hamda atamalar.']
  },
  ...MEHNAT_KODEKSI_CHAPTERS.map((ch) => ({
    id: ch.id,
    title: `${ch.chapterTitle} (${ch.moddaRange})`,
    category: 'kodeks' as const,
    badge: ch.badge,
    description: ch.description,
    details: ch.details
  }))
];
