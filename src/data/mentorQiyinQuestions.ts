import { Question } from '../types';

export const MENTOR_QIYIN_QUESTIONS: Question[] = [
  // 1
  {
    id: 'mentor-1',
    topicId: 'konstitutsiya',
    question: "Quyidagi berilganlardan qaysi biri O‘zbekiston Respublikasi Oliy Majlisi Senati va Qonunchilik palatasining birgalikdagi vakolati hisoblanmaydi?",
    options: [
      "O‘zbekiston Respublikasining referendumini o‘tkazish va sanasini tayinlash haqida qaror qabul qilish",
      "O‘zbekiston Respublikasi Oliy Majlisining Inson huquqlari bo‘yicha vakili va uning o‘rinbosarini saylash",
      "O‘zbekiston Respublikasi qonun chiqaruvchi, ijro etuvchi hamda sud hokimiyati organlarining tizimini va vakolatlarini belgilash",
      "Oʻzbekiston Respublikasi Bosh vazirining mamlakatni ijtimoiy-iqtisodiy jihatdan rivojlantirishning dolzarb masalalari yuzasidan, shuningdek Vazirlar Mahkamasi aʼzolarining oʻz faoliyati masalalari yuzasidan hisobotlarini eshitish"
    ],
    correctIndex: 3,
    explanation: "Bosh vazirning hisobotini hamda Vazirlar Mahkamasi a'zolarining axborotini eshitish Oliy Majlis Qonunchilik palatasining mutlaq vakolatidir (Konstitutsiya, 94-modda). Bu palatalarning birgalikdagi vakolatiga kirmaydi.",
    legalBasis: "Konstitutsiya, 93 va 94-moddalar",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 2
  {
    id: 'mentor-2',
    topicId: 'oila',
    question: "Quyidagi ma’lumotlarning yakuniy xulosasi (to‘g‘ri/noto‘g‘ri) keltirilgan javobni toping.\nI. Nikohni tugatish deganda er-xotindan biri yoki ikkalasining arizasiga binoan nikohni sud tomonidan ajratish tushuniladi;\nII. Nikoh ajratilayotganda sud organlari voyaga yetmagan bolalar kim bilan yashashi, ularga ota-ona tomonidan ta’minot berilishi, mulkiy masalalarni hal etmaydi u ota-onalarning o’zaro kelishuvi asosida belgilanadi;\nIII. Nikoh tuzish vaqtida er va xotin oʻz xohishi bilan eri yoki xotinining familiyasini umumiy familiya qilib tanlashi mumkin emas, ular o’zlarning sobiq familiyasida qolishi shart hisoblanadi;\nIV. Nikohgacha er va xotinning o‘ziga tegishli bo‘lgan mol-mulki, nikoh davomida hadya yoki meros tariqasida olgan mol-mulki ularning o‘z mulki hisoblanadi;\nV. O‘zbekiston Respublikasi Konstitutsiyasida belgilanganidek, farzandlar ota-onalarining nasl-nasabidan va fuqarolik holatidan qat’i nazar, qonun oldida tengdirlar.",
    options: [
      "I-to‘g‘ri, II-to‘g‘ri, III-noto‘g‘ri, IV-to‘g‘ri, V-noto‘g‘ri",
      "I-noto‘g‘ri, II-noto‘g‘ri, III-noto‘g‘ri, IV-to‘g‘ri, V-to‘g‘ri",
      "I-to‘g‘ri, II-noto‘g‘ri, III-to‘g‘ri, IV-noto‘g‘ri, V-to‘g‘ri",
      "I-noto‘g‘ri, II-noto‘g‘ri, III-to‘g‘ri, IV-noto‘g‘ri, V-noto‘g‘ri"
    ],
    correctIndex: 1,
    explanation: "I noto‘g‘ri (nikoh vafot etish bilan ham tugaydi); II noto‘g‘ri (kelishuv bo‘lmaganda sud bularni hal qilishi shart - OK 44-modda); III noto‘g‘ri (umumiy familiya tanlashga haqli - OK 20-modda); IV to‘g‘ri (xususiy mulk - OK 25-modda); V to‘g‘ri (Konstitutsiya 77-modda).",
    legalBasis: "Oila kodeksi 20, 25, 44-moddalar; Konstitutsiya 77-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 3
  {
    id: 'mentor-3',
    topicId: 'mamuriy',
    question: "Ma’muriy qamoqqa olish qancha muddatgacha – (a) va favqulodda holat tartibi sharoitida esa, jamoat tartibiga tajovuz qilganligi uchun qancha muddatga – (b) qo‘llaniladi? (MJtK 29-moddasi)\n1) ellik sutkagacha; 2) o‘n besh sutkagacha; 3) o‘ttiz sutkagacha; 4) yigirma besh sutkagacha.",
    options: [
      "(a) – 4, (b) – 3",
      "(a) – 2, (b) – 3",
      "(a) – 4, (b) – 2",
      "(a) – 3, (b) – 2"
    ],
    correctIndex: 1,
    explanation: "MJtK 29-moddasiga ko‘ra, ma'muriy qamoqqa olish o‘n besh sutkagacha (2), favqulodda holat tartibi sharoitida jamoat tartibiga tajovuz qilganlik uchun esa o‘ttiz sutkagacha (3) muddatga qo‘llaniladi.",
    legalBasis: "MJtK, 29-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 4
  {
    id: 'mentor-4',
    topicId: 'fuqarolik',
    question: "To‘g‘ri berilgan ma’lumotlarni aniqlang. (Fuqarolik kodeksi 366, 502, 631, 733, 1118, 1147-moddalar)\n1) Notarial tasdiqlanishi yoki davlat ro‘yxatidan o‘tkazilishi shart bo‘lgan shartnoma notarial tasdiqlangan yoki ro‘yxatdan o‘tkazilgan paytdan e’tiboran, ikkalasi ham zarur bo‘lganda esa – ro‘yxatdan o‘tkazilgan paytdan e’tiboran tuzilgan hisoblanadi;\n2) Hadya shartnomasiga muvofiq bir taraf boshqa tarafga ashyoni tekinga mulk qilib beradi yoki berish majburiyatini oladi yoxud mulkiy huquqni beradi yoinki mulkiy majburiyatdan ozod qiladi;\n3) Pudrat shartnomasining ayrim turlariga, agar ushbu Kodeksning bunday turdagi shartnomalar to‘g‘risidagi qoidalarida boshqacha tartib belgilangan bo‘lmasa, ushbu umumiy paragraf qoidalari qo‘llanadi;\n4) Fuqarolar o‘rtasida qarz shartnomasi, agar bu qarzning summasi bazaviy hisoblash miqdorining o‘n besh baravaridan ortiq bo‘lsa, oddiy yozma shaklda tuzilishi shart;\n5) Meros ochilgan paytda hayot bo‘lgan fuqarolar, shuningdek meros qoldiruvchining hayotlik paytida homila holida bo‘lgan va meros ochilgandan keyin tirik tug‘ilgan bolalari vasiyat va qonun bo‘yicha merosxo‘r bo‘lishlari mumkin emas;\n6) Agar ishonchnomada vakil orqali merosdan voz kechish vakolati maxsus nazarda tutilgan bo‘lsa, merosdan shu tarzda voz kechilishi mumkin.",
    options: [
      "2, 3, 4, 5",
      "1, 2, 3, 6",
      "1, 2, 4, 6",
      "2, 3, 4, 5"
    ],
    correctIndex: 1,
    explanation: "1, 2, 3 va 6-bandlar to‘g‘ri. 4-band noto‘g‘ri (15 baravar emas, BHMning 10 baravari - FK 733-modda). 5-band noto‘g‘ri (FK 1118-moddaga ko‘ra ular merosxo‘r bo‘lishlari mumkin).",
    legalBasis: "Fuqarolik kodeksi, 366, 502, 631, 733, 1118, 1147-moddalar",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 5
  {
    id: 'mentor-5',
    topicId: 'konstitutsiya',
    question: "Noto‘g‘ri hukm berilgan javobni toping. (“O‘zbekiston Respublikasi Davlat bayrog‘i to‘g‘risida”gi Qonun)",
    options: [
      "O‘zbekiston Respublikasining Davlat bayrog‘i – bayroqning butun uzunligi bo‘ylab o‘tgan to‘q moviy rang, oq rang va to‘q yashil rangli uchta endan tarkib topgan to‘g‘ri to‘rtburchak shaklidagi matodir.",
      "O‘zbekiston Respublikasi Davlat bayrog‘ining yuqori qismidagi moviy rangli enning yuz tomoni va orqa tomonida dastaga yaqin joyida oq rangli yangi oy va uning yonida o‘n ikkita oq rangdagi besh qirrali yulduz tasvirlangan.",
      "Ko‘tarib qo‘yilgan O‘zbekiston Respublikasi Davlat bayrog‘ining matosi yer sathidan kamida 2,5 metr balandlikda bo‘lishi kerak.",
      "O‘zbekiston Respublikasining davlat bayrog‘i va uning tasviri katta-kichikligidan qat’iy nazar, hamma vaqt ushbu Qonunga ilova qilinayotgan rangli va sxematik tasviriga aniq mos bo‘lishi kerak emas."
    ],
    correctIndex: 3,
    explanation: "Qonunning 10-moddasiga ko‘ra, Davlat bayrog‘i va uning tasviri katta-kichikligidan qat’i nazar, hamma vaqt ushbu Qonunga ilova qilinayotgan rangli va sxematik tasviriga aniq mos bo‘lishi shart.",
    legalBasis: "Davlat bayrog‘i to‘g‘risidagi Qonun, 10-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 6
  {
    id: 'mentor-6',
    topicId: 'jinoyat',
    question: "Quyida berilgan qaysi bir holatda jazoni o‘tashdan muddatidan ilgari shartli ravishda ozod qilish tartibi berilgan? (Jinoyat kodeksi, 88-modda)\n1) ijtimoiy xavfi katta bo‘lmagan yoki uncha og‘ir bo‘lmagan jinoyat uchun tayinlangan jazo muddatining kamida to‘rtdan bir qismi;\n2) ijtimoiy xavfi katta bo‘lmagan yoki uncha og‘ir bo‘lmagan jinoyat uchun tayinlangan jazo muddatining kamida beshdan bir qismi;\n3) og‘ir jinoyat uchun tayinlangan jazo muddatining kamida uchdan bir qismi;\n4) og‘ir jinoyat uchun tayinlangan jazo muddatining kamida to‘rtdan bir qismi;\n5) o‘ta og‘ir jinoyat uchun, shuningdek qasddan sodir etgan jinoyati uchun, agar shaxs ilgari qasddan sodir etilgan jinoyat uchun ozodlikdan mahrum etishga hukm qilingan bo‘lsa, tayinlangan jazo muddatining kamida yarmini haqiqatda o‘tab bo‘lganidan keyin qo‘llaniladi;\n6) o‘ta og‘ir jinoyat uchun jazo muddatining kamida uchdan bir qismini o‘tab bo‘linganidan keyin qo‘llanilishi mumkin.",
    options: [
      "2, 5, 6",
      "3, 4, 6",
      "1, 3, 4",
      "1, 3, 5"
    ],
    correctIndex: 3,
    explanation: "JK 88-moddasiga binoan, voyaga yetmaganlarga nisbatan: uncha og‘ir bo‘lmagan jinoyatlarda kamida to‘rtdan bir qismi (1), og‘ir jinoyatda kamida uchdan bir qismi (3), o‘ta og‘ir jinoyatda esa kamida yarmi (5) haqiqatda o‘talganidan keyin qo‘llaniladi.",
    legalBasis: "Jinoyat kodeksi, 88-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 7
  {
    id: 'mentor-7',
    topicId: 'davlat_huquq',
    question: "Yuridik javobgarlikning turlari qaysi qatorda to‘g‘ri berilgan?\n1) Jarima yoki jazo; 2) Maxsus huquqdan mahrum qilish; 3) Hayfsan; 4) Huquqni tiklovchi javobgarlik.",
    options: [
      "1, 3",
      "2, 3",
      "1, 4",
      "2, 4"
    ],
    correctIndex: 2,
    explanation: "Davlat va huquq nazariyasida yuridik javobgarlik o‘z vazifasiga ko‘ra jazolovchi (jazo) javobgarlik va huquqni tiklovchi (kompensatsion) javobgarlik turlariga bo‘linadi (1 va 4). Jarima, hayfsan va maxsus huquqdan mahrum qilish esa jazo choralari hisoblanadi.",
    legalBasis: "Davlat va huquq nazariyasi, Yuridik javobgarlik",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 8
  {
    id: 'mentor-8',
    topicId: 'davlat_huquq',
    question: "Davlatning moliyaviy-iqtisodiy faoliyati quyidagi qaysi yo‘nalishlarda amalga oshiriladi?\n1) kreditlar, imtiyozlar va hokazolarni berish orqali;\n2) qonunlar shakllangan iqtisodiy munosabatlarni mustahkamlash va barqaror saqlash orqali;\n3) moddiy yordamga muhtoj fuqarolar (nogironlar, yetimlar va hokazolar)ni ijtimoiy muhofaza qilish orqali;\n4) mamlakat iqtisodiy rivojlanishi barqarorligini tan oladi va kafolatlash orqali;\n5) madaniyat-ta’lim muassasalari, ommaviy axborot vositalarini rivojlantirishni qo‘llab-quvvatlash orqali;\n6) yangi iqtisodiy munosabatlar yaratilishi va rivojlantirilishiga ko‘mak berish orqali;\n7) atrof-muhitni muhofaza qilish bo‘yicha chora-tadbirlar belgilash orqali.",
    options: [
      "1, 3, 5, 6",
      "3, 4, 5, 6",
      "1, 3, 5, 7",
      "2, 3, 5, 7"
    ],
    correctIndex: 0,
    explanation: "Davlatning moliyaviy-iqtisodiy faoliyati: kredit va imtiyozlar berish (1), muhtojlarni ijtimoiy muhofaza qilish (3), madaniyat, ta'lim, OAVni qo‘llab-quvvatlash (5), yangi iqtisodiy munosabatlar rivojiga ko‘mak berish (6) yo‘nalishlarida amalga oshiriladi.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat funksiyalari",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 9
  {
    id: 'mentor-9',
    topicId: 'davlat_huquq',
    question: "Quyida berilgan xalqaro konvensiyalarni qabul qilingan yili bilan to‘g‘ri moslashtiring.\n1) 1972-yil; 2) 1995-yil 16-iyunda; 3) 1973-yil 3-martda; 4) 1976-yil 10-dekabrda;\na) Atrof-muhitga nisbatan harbiy yoki boshqa zarar yetkazuvchi vositalar ishlatilishining oldini olishga doir Konvensiya;\nb) Yo‘qolish arafasidagi yovvoyi flora va fauna turlari bilan xalqaro savdo-sotiq qilish to‘g‘risidagi Konvensiya;\nc) «Osiyo va Afrika botqoqliklarida yashovchi va ko‘chib yuruvchi qushlarni himoya qilish to‘g‘risida»gi shartnoma;\nd) «Dunyoning madaniy va tabiiy merosini himoya qilish to‘g‘risida»gi Konvensiya.",
    options: [
      "1-a, 2-c, 3-b, 4-d",
      "1-d, 2-b, 3-c, 4-a",
      "1-b, 2-c, 3-d, 4-a",
      "1-d, 2-c, 3-b, 4-a"
    ],
    correctIndex: 3,
    explanation: "1-d: 1972-yil — Dunyoning madaniy va tabiiy merosini himoya qilish; 2-c: 1995-yil 16-iyun — Qushlarni himoya qilish; 3-b: 1973-yil 3-mart — Yovvoyi flora va fauna (CITES); 4-a: 1976-yil 10-dekabr — Harbiy vositalar ishlatilishini oldini olish (ENMOD).",
    legalBasis: "Xalqaro ekologik huquq hujjatlari",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 10
  {
    id: 'mentor-10',
    topicId: 'jinoyat',
    question: "Quyida berilgan ma’lumotlarni tahlil qilib o‘zaro muvofiqlashtirilgan javobni aniqlang.\n1) Hokimiyat yoki mansab vakolatini suiiste’mol qilish jinoyati?\n2) Korrupsiya?\n3) Texnika xavfsizligi?\n4) Sanoat sanitariyasi?\na) hokimiyat va boshqaruv asoslarini yemiradigan, uning aholi oldidagi obro‘siga putur yetkazadigan, fuqarolarning qonuniy huquq va manfaatlariga daxl qiladigan xavfli jinoiy hodisaning nisbatan ko‘p tarqalgan va o‘ziga xos hodisasi hisoblanadi;\nb) subyektiv tomondan qasddan sodir etilishi bilan tavsiflanadi. Jinoyat motivlari qilmishning huquqiy baholanishiga va jinoiy javobgarlikka o‘z ta’sirini ko‘rsatmaydi.",
    options: [
      "2-a, 3-b",
      "1-b, 3-a",
      "2-a, 4-b",
      "1-b, 2-a"
    ],
    correctIndex: 3,
    explanation: "1-b: Hokimiyat yoki mansab vakolatini suiiste'mol qilish subyektiv tomondan qasddan sodir etiladi va motivlar javobgarlikka ta'sir ko‘rsatmaydi. 2-a: Korrupsiya boshqaruv asoslarini yemiradigan xavfli jinoiy hodisadir.",
    legalBasis: "Jinoyat kodeksi, 205-modda; Korrupsiyaga qarshi kurashish to‘g‘risidagi Qonun",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 11
  {
    id: 'mentor-11',
    topicId: 'davlat_huquq',
    question: "Notenglik, ya’ni kamsitish ma’nosini quyidagilardan qaysi biri anglatadi?",
    options: [
      "Gender",
      "Zo‘ravonlik",
      "Ratifikatsiya",
      "Diskriminatsiya"
    ],
    correctIndex: 3,
    explanation: "Diskriminatsiya (lotincha discriminatio — ajratish, kamsitish) — shaxslarning huquqlarini jinsi, irqi, millati yoki diniy mansubligiga qarab kamsitish yoki cheklashni anglatadi.",
    legalBasis: "Inson huquqlari umumjahon deklaratsiyasi",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 12
  {
    id: 'mentor-12',
    topicId: 'oila',
    question: "“Agar oilaning baxtini boylik belgilaganda edi, bironta boy xonadonda oilaviy janjal koʻtarilmas edi”. Ushbu gap muallifini aniqlang.",
    options: [
      "Teodor Ruzvelt",
      "Sh. Mirziyoyev",
      "Abu Ali ibn Sino",
      "Tohir Malik"
    ],
    correctIndex: 3,
    explanation: "Ushbu ibratli mulohaza atoqli yozuvchi va ma'naviyat targ'ibotchisi Tohir Malik qalamiga mansub.",
    legalBasis: "Oila va jamiyat ma'naviyati asoslari",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 13
  {
    id: 'mentor-13',
    topicId: 'jinoyat',
    question: "So‘roq qilish jarayoni bo‘yicha yakuniy hukmni aniqlang (to‘g‘ri/noto‘g‘ri):\n1) So‘roq qilinuvchining shaxsi aniqlangandan keyin unga Jinoyat kodeksida nazarda tutilgan huquq va majburiyatlari tushuntiriladi;\n2) So‘roq qilinuvchi ish yuritilayotgan tilni biladimi, u qaysi tilda ko‘rsatuv bera olishi mumkinligini ham aniqlashtirishi lozim;\n3) So‘roq qilinuvchi so‘roq jarayonida o‘zidagi yoki ishga qo‘shib qo‘yilgan hujjatlardan yoxud boshqa yozuvlardan foydalanishi mumkin emas;\n4) Surishtiruvchi, tergovchi va sud so‘roq qilish oldidan so‘roq qilinuvchidan uning mashg‘ulot turini aniqlashi lozim;\n5) O‘n olti yoshgacha bo‘lgan guvoh yoki jabrlanuvchini so‘roq qilish qonuniy vakili yoki katta yoshdagi yaqin qarindoshi, pedagog yoki jabrlanuvchining vakili ishtirokida ularning roziligi bilan o‘tkaziladi;\n6) So‘roq qilinuvchiga so‘roq qilish jarayonida o‘zidagi hujjatlar va boshqa yozuvlarni o‘qib eshittirishga ruxsat etilishi mumkin.",
    options: [
      "1-noto‘g‘ri, 2-to‘g‘ri, 3-noto‘g‘ri, 4-to‘g‘ri, 5-to‘g‘ri, 6-to‘g‘ri",
      "1-noto‘g‘ri, 2-to‘g‘ri, 3-noto‘g‘ri, 4-to‘g‘ri, 5-noto‘g‘ri, 6-to‘g‘ri",
      "1-noto‘g‘ri, 2-to‘g‘ri, 3-to‘g‘ri, 4-to‘g‘ri, 5-to‘g‘ri, 6-to‘g‘ri",
      "1-noto‘g‘ri, 2-noto‘g‘ri, 3-noto‘g‘ri, 4-to‘g‘ri, 5-to‘g‘ri, 6-to‘g‘ri"
    ],
    correctIndex: 0,
    explanation: "1 noto‘g‘ri (JPKda nazarda tutilgan huquqlar tushuntiriladi); 2 to‘g‘ri; 3 noto‘g‘ri (yozuvlardan foydalanishi mumkin - JPK 103-modda); 4 to‘g‘ri; 5 to‘g‘ri (JPK 121-modda); 6 to‘g‘ri.",
    legalBasis: "Jinoyat-protsessual kodeksi, 96-108, 121-moddalar",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 14
  {
    id: 'mentor-14',
    topicId: 'davlat_huquq',
    question: "Davlat budjeti daromadlarini shakllantirish jarayoniga kirmaydigan javobni belgilang. (Budjet kodeksi 50-modda)",
    options: [
      "rezident-yuridik shaxslarga berilgan budjet ssudalari, kredit liniyalari va chet davlatlarga ajratilgan kreditlar mablag‘larini qaytarish hisobiga to‘lovlar, shuningdek ular bo‘yicha foizli tushumlar",
      "meros, hadya huquqi bo‘yicha davlat mulkiga o‘tgan pul mablag‘lari",
      "yuridik va jismoniy shaxslardan, shuningdek chet davlatlardan tushadigan qaytarilmaydigan pul tushumlari",
      "fuqarolar o‘rtasida tuziladigan qarz shartnomalaridan tushumlar"
    ],
    correctIndex: 3,
    explanation: "Fuqarolar o‘rtasida tuziladigan o‘zaro qarz shartnomalari jismoniy shaxslarning shaxsiy bitimi hisoblanadi va Davlat budjeti daromadlari manbalari sirasiga kirmaydi.",
    legalBasis: "Budjet kodeksi, 50-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 15
  {
    id: 'mentor-15',
    topicId: 'konstitutsiya',
    question: "Oliy Majlisning Qonunchilik palatasi haqida berilgan to‘g‘ri ma’lumotlarni aniqlang.\n1) zarur bilim, tajriba va malakaga ega yuqori saviyadagi mutaxassislardan iborat bo‘ladi;\n2) hududlar manfaatlarini ifoda etishini inobatga olgan holda uning tarkibi asosan xalq deputatlari mahalliy Kengashlari vakillaridan tashkil topadi;\n3) o‘z faoliyatini doimiy professional asosda amalga oshiradi;\n4) parlamentning quyi palatasi;\n5) parlamentning yuqori palatasi.",
    options: [
      "1, 2, 5",
      "1, 3, 4",
      "1, 2, 3, 4, 5",
      "1, 3, 4, 5"
    ],
    correctIndex: 1,
    explanation: "Qonunchilik palatasi professional va doimiy asosda ishlovchi quyi palatadir (1, 3, 4). 2 va 5-bandlar Senatga (yuqori palataga) tegishli.",
    legalBasis: "Konstitutsiya, 91 va 92-moddalar",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 16
  {
    id: 'mentor-16',
    topicId: 'konstitutsiya',
    question: "Yuridik ixtisoslik boʻyicha kamida (a) yillik ish stajiga, shu jumladan, qoida tariqasida, sudya sifatida kamida (b) yillik ish stajiga ega boʻlgan shaxs Oʻzbekiston Respublikasi Oliy sudi sudyasi boʻlishi mumkin.",
    options: [
      "(a) – 10, (b) – 2",
      "(a) – 15, (b) – 3",
      "(a) – 7, (b) – 10",
      "(a) – 15, (b) – 7"
    ],
    correctIndex: 3,
    explanation: "“Sudlar to‘g‘risida”gi Qonunning 63-moddasiga ko‘ra, yuridik ixtisoslik bo‘yicha kamida 15 yil, shu jumladan sudya sifatida kamida 7 yil ish stajiga ega shaxs Oliy sud sudyasi bo‘lishi mumkin.",
    legalBasis: "Sudlar to‘g‘risidagi Qonun, 63-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 17
  {
    id: 'mentor-17',
    topicId: 'konstitutsiya',
    question: "Sud-huquq tizimini izchil demokratlashtirish va liberallashtirish boʻyicha soʻnggi yillarda olib borilgan ishlar natijasida, Konstitutsiyaviy sud vakolatlari kengaytirildi va uning doirasiga qaysi majburiyat kiritildi?",
    options: [
      "Prezident farmonlarining Konstitutsiyaga mosligini aniqlash",
      "Apellatsiya shikoyatlarini kassatsiya tartibida oʻrganish",
      "Yuridik xizmat koʻrsatish institutlari faoliyatini tashkil etish",
      "Xalqaro sud normalarini qonunchilikka moslashtirish"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaviy sud O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlarining Konstitutsiyaga muvofiqligini aniqlaydi.",
    legalBasis: "Konstitutsiya, 133-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 18
  {
    id: 'mentor-18',
    topicId: 'konstitutsiya',
    question: "Quyidagilardan qay biri O‘zbekiston Respublikasi Prezidentining vakolatlariga oid emas?",
    options: [
      "O‘zbekiston Respublikasining chet davlatlardagi diplomatik vakolatxonalarining rahbarlarini tayinlash uchun nomzodlarni Senatga taqdim etadi.",
      "Vazirliklarni va boshqa respublika ijro etuvchi hokimiyat organlarini tuzadi hamda tugatadi, shu masalalarga doir farmonlarni tasdiqqa kiritadi.",
      "O‘zbekiston Respublikasining ordenlari, medallari bilan mukofotlaydi, oliy harbiy va maxsus unvonlarni beradi.",
      "Ijro etuvchi hokimiyat organlarining ishida ochiqlik va shaffoflikni, qonuniylik va samaradorlikni ta’minlash bo‘yicha choralar ko‘radi."
    ],
    correctIndex: 3,
    explanation: "Ijro etuvchi hokimiyat organlarining ishida ochiqlik, shaffoflik, qonuniylik va samaradorlikni ta'minlash Vazirlar Mahkamasining konstitutsiyaviy vakolatidir (115-modda).",
    legalBasis: "Konstitutsiya, 109 va 115-moddalar",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 19
  {
    id: 'mentor-19',
    topicId: 'konstitutsiya',
    question: "Fuqaroning huquq va manfaatlariga daxldor bo‘lgan hujjatlar, qarorlar va boshqa materiallar bilan tanisha olish huquqi qanday huquqlar sirasiga kiradi?",
    options: [
      "Madaniy huquqlar",
      "Iqtisodiy huquqlar",
      "Siyosiy huquqlar",
      "Shaxsiy huquqlar"
    ],
    correctIndex: 2,
    explanation: "O‘z huquq va manfaatlariga daxldor bo‘lgan hujjatlar bilan tanishish huquqi Konstitutsiyaning 34-moddasida \"Siyosiy huquqlar\" bobi tarkibida mustahkamlangan.",
    legalBasis: "Konstitutsiya, 34-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 20
  {
    id: 'mentor-20',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi sud tizimining xalqaro andozalarga mos ekanligini tasdiqlovchi jihatlaridan biri bu — …..?",
    options: [
      "aybsizlik prezumpsiyasi",
      "o‘zini o‘zi boshqarish organlarining mavjudligi",
      "sud-huquq tizimini izchil demokratlashtirish islohotlari",
      "O‘zbekiston Respublikasi Sudyalar oliy kengashining tashkil qilinishi"
    ],
    correctIndex: 3,
    explanation: "Sudyalik lavozimlariga nomzodlarni tanlash, tayinlash va sud hokimiyati mustaqilligini ta'minlash bo‘yicha xalqaro standartlarga mos Sudyalar oliy kengashining tuzilishi muhim yutuqdir.",
    legalBasis: "Konstitutsiya, 135-modda; Sudyalar oliy kengashi to‘g‘risidagi Qonun",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 21
  {
    id: 'mentor-21',
    topicId: 'konstitutsiya',
    question: "Quyida berilgan normalardan qay biri Qoraqalpog‘iston Respublikasiga bag‘ishlangan moddalar sirasiga kirmaydi (boshqa bobda keltirilgan)?",
    options: [
      "Suveren Qoraqalpog‘iston Respublikasi O‘zbekiston Respublikasi tarkibiga kiradi. Qoraqalpog‘iston Respublikasining suvereniteti O‘zbekiston Respublikasi tomonidan muhofaza etiladi.",
      "O‘zbekiston Respublikasi va Qoraqalpog‘iston Respublikasi o‘rtasidagi nizolar murosaga keltiruvchi vositalar yordamida hal etiladi.",
      "Qoraqalpog‘iston Respublikasining Konstitutsiyasi O‘zbekiston Respublikasining Konstitutsiyasiga zid bo‘lishi mumkin emas.",
      "Qoraqalpog‘iston Respublikasining fuqarosi ayni vaqtda O‘zbekiston Respublikasining fuqarosi hisoblanadi."
    ],
    correctIndex: 3,
    explanation: "“Qoraqalpog‘iston Respublikasining fuqarosi ayni vaqtda O‘zbekiston Respublikasining fuqarosi hisoblanadi” degan norma alohida “Fuqarolik” bobida (23-modda) mustahkamlangan.",
    legalBasis: "Konstitutsiya, 23 va 85-89-moddalar",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 22
  {
    id: 'mentor-22',
    topicId: 'davlat_huquq',
    question: "Xato berilgan hukmni aniqlang.",
    options: [
      "Senat Raisi O‘zbekiston Respublikasi Prezidentining taqdimiga binoan saylanadi",
      "Oliy Majlis ishining tashkiliy shakli – bu sessiyadir",
      "Davlat boshqaruvida vertikal boshqaruv organlarining vakolatlarini qisqartirish hisobiga gorizontal boshqaruv organlarining vakolatlarini kengaytirish davlat boshqaruvi sohasida markazlashtirishni kengaytirishga imkoniyat yaratadi",
      "Fuqarolik ishlari bo‘yicha tumanlararo sudlar mavjud"
    ],
    correctIndex: 2,
    explanation: "Vertikal organlar vakolatini qisqartirib, gorizontal boshqaruvni kengaytirish markazlashtirishga emas, markazsizlashtirish (desentralizatsiya) va boshqaruv erkinligini oshirishga xizmat qiladi.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat boshqaruvi",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 23
  {
    id: 'mentor-23',
    topicId: 'davlat_huquq',
    question: "Boshqaruv shakli haqida berilgan to‘g‘ri javobni belgilang.",
    options: [
      "davlat hokimiyatini amalga oshirish usullari va uslublari tizimi",
      "davlat hokimiyati, uning idoralarining aholi bilan o‘zaro munosabatlari, aholining ushbu idoralarni shakllantirishda ishtirok etish darajasi",
      "davlat faoliyatining asosiy yo‘nalishlari bo‘lib, ularda davlatning ijtimoiy jihatlari ro‘yobga chiqariladi",
      "davlatning boshqaruv, hududiy tuzilishi va siyosiy tartibi jihatidan qanday shakllarga bo‘linishi tushuniladi"
    ],
    correctIndex: 1,
    explanation: "Boshqaruv shakli — davlat oliy hokimiyati organlarining shakllanishi, tuzilishi va ularning aholi bilan munosabatlari usulini ifodalaydi.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat shakli",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 24
  {
    id: 'mentor-24',
    topicId: 'jinoyat',
    question: "Xato berilgan hukmni aniqlang.",
    options: [
      "Jinoyat subyektining aqli raso bo‘lishi shart, ya’ni u o‘z harakati yoki harakatsizligining ijtimoiy xavfli xususiyatini anglagan bo‘lishi va ularni boshqara olishi shart",
      "Aqli rasolik ayb va jinoiy javobgarlikning zaruriy shartidir",
      "Jinoyat har doim ham aniq jismoniy shaxslar tomonidan sodir qilinavermaydi",
      "Jinoyatga oid qonunlarda subyektga nisbatan aybdor, mahkum, jinoyat sodir etgan shaxs, jinoyat sodir etishda aybdor bo‘lgan shaxs kabi tushunchalar ishlatiladi"
    ],
    correctIndex: 2,
    explanation: "Jinoyat qonunchiligiga binoan faqat muayyan yoshga yetgan va aqli raso bo‘lgan jismoniy shaxs jinoyat subyekti hisoblanadi va u har doim aniq jismoniy shaxs tomonidan sodir etiladi.",
    legalBasis: "Jinoyat kodeksi, 17-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 25
  {
    id: 'mentor-25',
    topicId: 'davlat_huquq',
    question: "“Oltin va kumushi bo‘lmagan odam kambag‘al emas, balki es-xushi va kasb-hunari bo‘lmagan kishi kambag‘aldir” ushbu jumla muallifini aniqlang.",
    options: [
      "Ali ibn Abu Tolib",
      "Abu Bakr Xorazmiy",
      "Majiddin Xavofiy",
      "Farobiy"
    ],
    correctIndex: 1,
    explanation: "Ushbu hikmatli so‘z mashhur mutafakkir va olim Abu Bakr Xorazmiyga tegishli.",
    legalBasis: "Huquqiy ta'limotlar va allomalar merosi",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 26
  {
    id: 'mentor-26',
    topicId: 'konstitutsiya',
    question: "Quyidagi berilganlardan qay biri O‘zbekiston Respublikasi Oliy Majlisining Inson huquqlari bo‘yicha vakilini va uning o‘rinbosarini saylash vakolatiga ega?",
    options: [
      "O‘zbekiston Respublikasi Vazirlar Mahkamasi",
      "O‘zbekiston Respublikasi Oliy Majlis Senati",
      "O‘zbekiston Respublikasi Oliy Majlis Qonunchilik palatasi",
      "O‘zbekiston Respublikasi Oliy Majlis (Qonunchilik palatasi va Senat birgalikda)"
    ],
    correctIndex: 3,
    explanation: "Konstitutsiyaning 93-moddasi 8-bandiga muvofiq, Oliy Majlisning Inson huquqlari bo‘yicha vakili va uning o‘rinbosarini saylash Qonunchilik palatasi va Senatning birgalikdagi vakolatidir.",
    legalBasis: "Konstitutsiya, 93-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 27
  {
    id: 'mentor-27',
    topicId: 'davlat_huquq',
    question: "“Vijdoningga teskari yurma va haqiqatga zid narsani gapirma. Shu muhim nasihatga rioya qilsang, hayotingda o‘z oldingga qo‘ygan vazifalarni to‘la ado etasan”. Ushbu so‘zning muallifini aniqlang.",
    options: [
      "Pifagor",
      "Mark Avreliy",
      "Jaloliddin Rumiy",
      "Lev Tolstoy"
    ],
    correctIndex: 1,
    explanation: "Ushbu mashhur axloqiy va falsafiy o‘git Qadimgi Rim faylasufi va imperatori Mark Avreliy qalamiga mansub.",
    legalBasis: "Huquq falsafasi va axloq mezonlari",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 28
  {
    id: 'mentor-28',
    topicId: 'konstitutsiya',
    question: "Noto‘g‘ri mulohazani toping. (“O‘zbekiston Respublikasining fuqaroligi to‘g‘risida”gi Qonun)",
    options: [
      "Bolaning fuqaroligi o‘zgargan taqdirda, ota-onalik huquqidan mahrum bo‘lgan ota-onaning roziligi talab qilinadi.",
      "Ota-ona (yolg‘iz ota yoki ona) O‘zbekiston fuqaroligini o‘zgartirganda bolaning fuqaroligi, basharti u fuqaroligi bo‘lmagan shaxs bo‘lib qolmasa, o‘zgarishi mumkin.",
      "Ota-onasining fuqaroligi o‘zgarganda o‘n to‘rt yoshdan o‘n sakkiz yoshgacha bo‘lgan bolaning fuqaroligi faqat uning yozma roziligi bilan o‘zgartirilishi mumkin.",
      "Fuqarolikka qabul qilish, tiklash yoki undan chiqish to‘g‘risidagi iltimosnoma Prezident nomiga ariza beruvchi tomonidan shaxsan beriladi."
    ],
    correctIndex: 0,
    explanation: "Qonunchilikka binoan, ota-onalik huquqidan mahrum etilgan ota-onaning farzand fuqaroligini o‘zgartirish bo‘yicha roziligi talab qilinmaydi.",
    legalBasis: "Fuqarolik to‘g‘risidagi Qonun, 25-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 29
  {
    id: 'mentor-29',
    topicId: 'davlat_huquq',
    question: "… xulq-atvor normalari yoki qoidalari yig‘indisidir. Nuqtalar o‘rnini to‘ldiring.",
    options: [
      "Axloq",
      "Huquqiy odat",
      "Huquq",
      "Huquqiy ong"
    ],
    correctIndex: 0,
    explanation: "Axloq — jamiyatda qaror topgan ezgulik, burch, insoflilik kabi ijtimoiy ong mezonlariga tayanuvchi xulq-atvor normalari yoki qoidalari yig‘indisidir.",
    legalBasis: "Davlat va huquq nazariyasi, Huquq va axloq",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  },
  // 30
  {
    id: 'mentor-30',
    topicId: 'mamuriy',
    question: "Axborotdan foydalanish tizimini qanday shaklda buzish fuqarolarga bazaviy hisoblash miqdorining (eng kam ish haqining) ikki baravaridan besh baravarigacha, mansabdor shaxslarga esa besh baravaridan yetti baravarigacha jarima solishga sabab bo‘ladi?",
    options: [
      "Yuridik va jismoniy shaxslarning axborot tizimlarini xalqaro axborot tarmoqlariga qonunga xilof ravishda ulash yoki himoya choralarini ko‘rmasdan ulanish",
      "Axborot tizimlarining ishini buzishga olib kelgan huquqbuzarlik yoki kirish cheklangan axborot tizimlarini tarmoqlarga ulash chog‘ida tegishli himoya choralarini ko‘rmaganlik",
      "Axborot tizimidan foydalanish maqsadida unga ruxsatsiz kirib olishda ifodalangan axborot va axborot tizimlaridan foydalanish qoidalarini buzish",
      "O‘zganing elektron hisoblash mashinalari uchun yaratilgan dasturini o‘z nomidan chiqarish yoki ruxsatsiz nusxa ko‘chirish"
    ],
    correctIndex: 2,
    explanation: "MJtK 155-moddasining 1-qismiga ko‘ra: Axborot tizimidan foydalanish maqsadida unga ruxsatsiz kirib olishda ifodalangan axborot va axborot tizimlaridan foydalanish qoidalarini buzish — fuqarolarga 2 baravardan 5 baravargacha, mansabdor shaxslarga 5 baravardan 7 baravargacha jarima solishga sabab bo‘ladi.",
    legalBasis: "MJtK, 155-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Huquqshunoslik test to‘plami'
  }
];
