import { Question } from '../types';

/**
 * MILLIY SERTIFIKAT A+ HUQUQSHUNOSLIK (1-VARIANT)
 * BMBA (Bilimni baholash agentligi) rasmiy imtihon standartiga muvofiq:
 * - 1–20: Yopiq testlar (A, B, C, D variantli testlar)
 * - 21–25: Muvofiqlikni aniqlash (Guruhlangan / moslashtirish testlari - Left va Right items)
 * - 26–35: Amaliy vaziyatlar (Kazuslar — hayotiy voqea asosida yuridik yechim)
 * - 36–45: Ochiq testlar (Qisqa javobli, variantlarsiz — o'quvchi mustaqil yozadi)
 */
export const MILLIY_SERTIFIKAT_1_VARIANT: Question[] = [
  // ==========================================
  // 1. YOPIQ TESTLAR (1 - 20)
  // ==========================================
  {
    id: 'ms1-q1',
    topicId: 'davlat_huquq',
    question: "Muayyan hududda yashovchi, o‘z ehtiyoj va manfaatlariga ko‘ra birlashgan kishilardan iborat jamoa bu — ... .",
    options: ["Davlat", "Xalq", "Aholi", "Millat"],
    correctIndex: 2,
    explanation: "Muayyan hududda yashovchi, o‘z ehtiyoj va manfaatlariga ko‘ra birlashgan kishilar majmui huquqiy adabiyotlarda aholi deb yuritiladi.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat tushunchasi va belgilari",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q2',
    topicId: 'davlat_huquq',
    question: "«Shayx-ur-rais» (donishmandlar yetakchisi) unvoniga ega bo‘lgan buyuk mutafakkir olim kim?",
    options: ["Abu Nasr Forobiy", "Abu Rayhon Beruniy", "Abu Ali ibn Sino", "Alisher Navoiy"],
    correctIndex: 2,
    explanation: "Sharqda Abu Ali ibn Sino o‘zining beqiyos ilmiy merosi sababli «Shayx-ur-rais» unvoni bilan sharaflangan.",
    legalBasis: "Siyosiy va huquqiy ta’limotlar tarixi",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q3',
    topicId: 'konstitutsiya',
    question: "«Oila jamiyatning asosiy bo‘g‘inidir hamda jamiyat va davlat muhofazasida bo‘lish huquqiga ega». Mazkur qoida O‘zbekiston Respublikasi Konstitutsiyasining nechanchi moddasida belgilangan?",
    options: ["75-modda", "76-modda", "77-modda", "78-modda"],
    correctIndex: 1,
    explanation: "Yangi tahrirdagi Konstitutsiyaning 76-moddasi 1-qismida «Oila jamiyatning asosiy bo‘g‘inidir hamda jamiyat va davlat muhofazasida bo‘lish huquqiga ega» deb qat’iy belgilangan.",
    legalBasis: "O‘zR Konstitutsiyasi, 76-modda",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q4',
    topicId: 'davlat_huquq',
    question: "Insoniyatning ibtidoiy jamoa tuzumidan sivilizatsiya tomon burilishiga sabab bo‘lgan eng asosiy tarixiy omil nima?",
    options: [
      "Yozuvning ixtiro qilinishi",
      "Mehnat qurollarining takomillashishi va mehnat taqsimotining vujudga kelishi",
      "Qabilalar o‘rtasidagi harbiy to‘qnashuvlar",
      "Diniy qarashlarning shakllanishi"
    ],
    correctIndex: 1,
    explanation: "Mehnat qurollarining takomillashishi, uchta yirik ijtimoiy mehnat taqsimoti, ortiqcha mahsulot va xususiy mulk paydo bo‘lishi davlat va huquqning shakllanishiga zamin yaratgan.",
    legalBasis: "Davlat va huquq asoslari darsligi",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q5',
    topicId: 'davlat_huquq',
    question: "«Davlatu saltanat uch narsa bilan: mulk, xazina va lashkar bilan tikdir. Dono va tadbirkor vazir esa ularning posbonidir». Ushbu hikmatli fikrlar qaysi tarixiy asarda qayd etilgan?",
    options: ["«Fozil odamlar shahri»", "«Qobusnoma»", "«Temur tuzuklari»", "«Siyosatnoma»"],
    correctIndex: 2,
    explanation: "Sohibqiron Amir Temurning «Temur tuzuklari» asarida davlat boshqaruvi, xazina, lashkar va vazirlarning o‘rni haqida batafsil to‘xtalib o‘tilgan.",
    legalBasis: "«Temur tuzuklari», Davlat boshqaruvi bo‘limi",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q6',
    topicId: 'davlat_huquq',
    question: "«Odamiy ersang, demagil odami, Onikim, yo‘q xalq g‘amidin g‘ami» iborasi muallifi kim?",
    options: ["Alisher Navoiy", "Amir Temur", "Suqrot", "Nizomulmulk"],
    correctIndex: 0,
    explanation: "Ushbu mashhur hikmat Alisher Navoiyning «Hayrat ul-abror» dostonidan olingan bo'lib, insoniylikning eng muhim sharti sifatida xalq g'ami bilan yashashni ko'rsatadi.",
    legalBasis: "Alisher Navoiy, G'azaliyot va dostonlar",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q7',
    topicId: 'davlat_huquq',
    question: "Quyidagi javoblar ichidan mantiqiy moslik to‘g‘ri keltirilgan qatorni aniqlang:\n1) Monarxiya — Davlat boshlig‘i lavozimi meros bo‘yicha o‘tadigan boshqaruv shakli;\n2) Respublika — Davlat boshlig‘i ma’lum muddatga saylanadigan boshqaruv shakli;\n3) Federatsiya — O‘z tarkibida davlat tuzilmalariga ega bo‘lgan murakkab ittifoq davlat.",
    options: ["Faqat 1 va 2", "Faqat 2 va 3", "1, 2 va 3 to‘liq to‘g‘ri", "Faqat 1"],
    correctIndex: 2,
    explanation: "Monarxiya, Respublika va Federatsiya tushunchalariga berilgan barcha ta’riflar huquq nazariyasiga to‘liq mos keladi.",
    legalBasis: "Davlat va huquq nazariyasi",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q8',
    topicId: 'fuqarolik',
    question: "Fuqarolik huquq va burchlari vujudga kelish asoslariga KIRMEYDIGAN javobni aniqlang:",
    options: [
      "Qonunda nazarda tutilgan shartnomalar va boshqa bitimlardan",
      "Fuqarolik huquqiy oqibatlarini vujudga keltiruvchi sud qarorlaridan",
      "Boshqa shaxsga zarar yetkazish natijasida",
      "Faqat ichki ishlar organlarining og‘zaki talabi asosida"
    ],
    correctIndex: 3,
    explanation: "Fuqarolik kodeksining 8-moddasiga binoan fuqarolik huquq va burchlari shartnomalar, bitimlar, ma’muriy hujjatlar, sud qarorlari, intellektual faoliyat natijalari va zarar yetkazish oqibatida vujudga keladi. Ichki ishlar organining og‘zaki talabi huquqiy asos bo‘lmaydi.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 8-modda",
    difficulty: "qiyin",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q9',
    topicId: 'davlat_huquq',
    question: "Davlatning ichki funksiyalariga kirmaydigan javobni aniqlang:",
    options: [
      "Iqtisodiy barqarorlikni ta’minlash va soliq siyosatini yuritish",
      "Jamoat tartibini saqlash va fuqarolar xavfsizligini ta’minlash",
      "Boshqa suveren davlatlar bilan diplomatik aloqalar o‘rnatish va xalqaro tinchlikni mustahkamlash",
      "Ta’lim, madaniyat va sog‘liqni saqlash sohalarini rivojlantirish"
    ],
    correctIndex: 2,
    explanation: "Diplomatik munosabatlar va xalqaro hamkorlik davlatning TASHQI funksiyasi hisoblanadi.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat funksiyalari",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q10',
    topicId: 'davlat_huquq',
    question: "Davlat mexanizmiga to‘g‘ri berilgan ta’rifni aniqlang:",
    options: [
      "Faqat harbiy va qurolli kuchlar majmui",
      "Davlat vazifalari va funksiyalarini amalga oshiruvchi davlat organlari va muassasalarining yaxlit tizimi",
      "Mamlakatdagi barcha jamoat birlashmalari va siyosiy partiyalar yig‘indisi",
      "Davlat hududidagi barcha xo‘jalik yurituvchi subyektlar"
    ],
    correctIndex: 1,
    explanation: "Davlat mexanizmi (apparati) — bu davlat o‘z vazifa va funksiyalarini bajarishi uchun xizmat qiladigan davlat organlari, muassasalari va mansabdor shaxslarining o‘zaro bog‘liq tizimidir.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat apparati",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q11',
    topicId: 'davlat_huquq',
    question: "«Davlat — umumiy manfaatlar uchun birlashgan insonlar ittifoqidir» ta'rifi qaysi buyuk huquqshunosga tegishli?",
    options: ["Arastu", "Sitseron", "Platon", "Jan Jak Russo"],
    correctIndex: 1,
    explanation: "Rim huquqshunosi va faylasufi Sitseron davlatni umumiy manfaatlarni ko'zlab birlashgan odamlar uyushmasi (ittifoqi) deb ta'riflagan.",
    legalBasis: "Siyosiy-huquqiy ta’limotlar tarixi, Sitseron asarlari",
    difficulty: "qiyin",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q12',
    topicId: 'konstitutsiya',
    question: "Dunyo tarixidagi dastlabki yozma konstitutsiya qachon va qayerda qabul qilingan?",
    options: [
      "1215-yil Angliyada (Buyuk erkinliklar xartiyasi)",
      "1787-yil AQSHda",
      "1791-yil Fransiyada",
      "1918-yil Rossiyada"
    ],
    correctIndex: 1,
    explanation: "Dunyo tarixidagi dastlabki yaxlit yozma konstitutsiya 1787-yilda AQSH Filadelfiya konventida qabul qilingan.",
    legalBasis: "Dunyo konstitutsiyaviy huquqi tarixi",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q13',
    topicId: 'davlat_huquq',
    question: "Zamonaviy dunyoda nechadan ortiq davlatlar mavjud va ularning deyarli barchasi suveren hisoblanadi?",
    options: ["100 dan ortiq", "150 dan ortiq", "200 dan ortiq", "350 dan ortiq"],
    correctIndex: 2,
    explanation: "Hozirgi vaqtda dunyoda 200 dan ortiq mustaqil davlat va hududlar mavjud bo‘lib, ulardan 193 tasi BMTga to‘laqonli a’zodir.",
    legalBasis: "9-sinf Davlat va huquq asoslari darsligi",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q14',
    topicId: 'davlat_huquq',
    question: "Huquqiy davlatning eng muhim va markaziy belgisi qaysi javobda to‘g‘ri ko‘rsatilgan?",
    options: [
      "Iqtisodiyotda davlat sektorining mutlaq ustunligi",
      "Qonun ustuvorligi hamda inson huquq va erkinliklarining oliy qadriyat sifatida ta’minlanishi",
      "Davlat organlarining nazoratdan mutlaqo xoli faoliyat yuritishi",
      "Yagona majburiy mafkuraning qonun darajasida belgilanishi"
    ],
    correctIndex: 1,
    explanation: "Huquqiy davlatning markaziy xususiyati barcha sohalarda qonun ustuvorligi va inson qadr-qimmati, uning huquq va erkinliklarining oliy qadriyat deb tan olinishidir.",
    legalBasis: "O‘zR Konstitutsiyasi, 1- va 13-moddalar",
    difficulty: "qiyin",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q15',
    topicId: 'davlat_huquq',
    question: "Davlat shakli o‘z ichiga qaysi uchta tarkibiy elementni qamrab oladi?",
    options: [
      "Davlat boshqaruvi shakli, davlat tuzilishi shakli va siyosiy (davlat) rejim",
      "Sud hokimiyati, qonun chiqaruvchi hokimiyat va ijro etuvchi hokimiyat",
      "Aholi, hudud va suveren davlat apparati",
      "Konstitutsiya, qonunlar va qonunosti hujjatlari"
    ],
    correctIndex: 0,
    explanation: "Davlat shakli uchta asosiy elementdan iborat: 1) Boshqaruv shakli (monarxiya/respublika); 2) Davlat tuzilishi (unitar/federatsiya); 3) Siyosiy rejim (demokratik/nodemokratik).",
    legalBasis: "Davlat va huquq nazariyasi, Davlat shakli",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q16',
    topicId: 'fuqarolik',
    question: "Fuqarolik huquqiy munosabatlarida ishtirok etuvchi tomonlarning maqomi qanday tamoyilga asoslanadi?",
    options: [
      "Hokimiyat va bo‘ysunish tamoyiliga",
      "Ishtirokchilarning tengligi va mulkiy mustaqilligi tamoyiliga",
      "Faqat davlat organining bir tomonlama ko‘rsatmalariga",
      "Ma’muriy bo‘ysunuvchanlik tamoyiliga"
    ],
    correctIndex: 1,
    explanation: "Fuqarolik qonunchiligining asosiy tamoyillaridan biri — fuqarolik muomalasi qatnashchilarining tengligi, mulkining daxlsizligi va shartnoma erkinligidir.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 1-modda",
    difficulty: "qiyin",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q17',
    topicId: 'jinoyat',
    question: "Jinoyat qonunchiligiga ko‘ra, jinoiy javobgarlikka tortishning eng kichik umumiy yoshi necha yosh qilib belgilangan?",
    options: [
      "14 yosh (faqat o‘ta og‘ir jinoyatlarda)",
      "16 yosh (umumiy javobgarlik yoshi)",
      "18 yosh",
      "21 yosh"
    ],
    correctIndex: 1,
    explanation: "Jinoyat kodeksining 17-moddasiga binoan, jinoyat sodir etgunga qadar 16 yoshga to‘lgan shaxslar umumiy tartibda jinoiy javobgarlikka tortiladilar (ayrim og‘ir jinoyatlarda 14 yosh).",
    legalBasis: "O‘zR Jinoyat kodeksi, 17-modda",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q18',
    topicId: 'mehnat',
    question: "Mehnat shartnomasini xodimning tashabbusi bilan bekor qilishda xodim ish beruvchini qancha muddat oldin yozma ravishda ogohlantirishi shart?",
    options: ["3 kun oldin", "7 kun oldin", "14 kun (ikki hafta) oldin", "1 oy oldin"],
    correctIndex: 2,
    explanation: "Yangi Mehnat kodeksiga ko‘ra, xodim nomuayyan muddatli mehnat shartnomasini 14 kalendar kun oldin ish beruvchini yozma ogohlantirgan holda bekor qilishga haqlidir.",
    legalBasis: "O‘zR Mehnat kodeksi, 160-modda",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q19',
    topicId: 'oila',
    question: "Oila kodeksiga muvofiq, O‘zbekiston Respublikasida nikoh yoshi erkaklar va ayollar uchun necha yosh etib belgilangan?",
    options: [
      "Erkaklar uchun 18 yosh, ayollar uchun 17 yosh",
      "Erkaklar va ayollar uchun teng 18 yosh",
      "Erkaklar uchun 21 yosh, ayollar uchun 18 yosh",
      "Erkaklar va ayollar uchun 17 yosh"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 15-moddasiga binoan, nikoh yoshi erkaklar va ayollar uchun o‘n sakkiz yosh etib qat’iy belgilangan.",
    legalBasis: "O‘zR Oila kodeksi, 15-modda",
    difficulty: "oson",
    questionType: 'yopiq'
  },
  {
    id: 'ms1-q20',
    topicId: 'davlat_huquq',
    question: "Eyler-Venn diagrammasi tahlili: Fashistik (I) va Totalitar (II) davlat rejimlarining xususiyatlari hamda ular uchun umumiy (III) belgilarni to‘g‘ri moslang:\na) Har qanday hukmron muxolifat yakson etiladi;\nb) Yagona partiyaning hukmronligi o‘rnatilishi;\nc) Biron-bir irqning hukmronligi e’lon qilinadi;\nd) Huquq va erkinliklarning poymol etilishi;\ne) Boshqa hududlarni bosib olishga harakat kuchayadi;\nf) Davlat idoralari demokratik tamoyillar va qoidalarga rioya etmaydilar;\ng) Saylovchilarning muqobil deputatlarni saylash imkoniyati bo‘lmaydi;\nh) O‘zgacha fikrlarga qarshi kurashiladi.",
    options: [
      "I — b, d, g, h; II — a, c, e; III — f",
      "I — a, c, e; II — b, d, g; III — f, h",
      "I — b, d, g, h; II — a, c, e; III — f, h",
      "I — c, e; II — b, g; III — a, d, f, h"
    ],
    correctIndex: 3,
    explanation: "Irqiy ustunlik va tajovuzkor bosqinchilik faqat fashizmga xos (c, e). Yagona partiya monopoliyasi va soxta birpartiyaviy saylov totalitarizmga xos (b, g). Muxolifatni yo‘qotish, huquqlarni poymol qilish, antidemokratiklik va o‘zgacha fikrni taqiqlash har ikkisiga umumiy (a, d, f, h).",
    legalBasis: "Davlat va huquq nazariyasi, Siyosiy rejimlar tasnifi",
    difficulty: "qiyin",
    questionType: 'yopiq'
  },

  // ==========================================
  // 2. MUVOFIQLIKNI ANIQLASH (21 - 25)
  // ==========================================
  {
    id: 'ms1-q21',
    topicId: 'davlat_huquq',
    question: "Muvofiqlikni aniqlash: Quyidagi diniy-huquqiy atamalar va ularning qonuniy ta'riflarini o'zaro to'g'ri moslashtiring.",
    options: ["", "", "", ""], // will be completed dynamically in UI
    correctIndex: 0,
    explanation: "1-Missionerlik: shaxsni o'z diniga kiritishga doir faoliyat; 2-Diniy professional ta'lim: diniy ta’lim muassasalarida professional bilim berish; 3-Diniy tashkilot: fuqarolarning ibodat uchun tuzilgan ko'ngilli birlashmasi; 4-Budjetdan ajratiladigan mablag'lar: Davlat budjetidan tashkilotlar uchun ajratilgan pul.",
    legalBasis: "«Vijdon erkinligi va diniy tashkilotlar to‘g‘risida»gi Qonun",
    difficulty: "qiyin",
    questionType: 'muvofiqlik',
    matchingPairsLeft: [
      "1) Missionerlik",
      "2) Diniy professional ta’lim",
      "3) Diniy tashkilot",
      "4) Budjetdan ajratiladigan mablag‘lar"
    ],
    matchingPairsRight: [
      "a) Diniy muassasalarda professional bilimlar berish jarayoni",
      "b) Muayyan mafkuraviy ta’sir o‘tkazish orqali shaxsni o‘z diniga kiritish faoliyati",
      "c) Davlat budjetidan tashkilot va oluvchilar uchun ajratiladigan pul mablag‘lari",
      "d) Dinga e’tiqod qilish va ibodat qilish maqsadida tuzilgan notijorat ko‘ngilli uyushma"
    ],
    correctAnswerText: "1-b, 2-a, 3-d, 4-c"
  },
  {
    id: 'ms1-q22',
    topicId: 'fuqarolik',
    question: "Muvofiqlikni aniqlash: Quyidagi fuqarolik huquqiy tushunchalari va ularning yuridik mohiyatini to'g'ri moslang.",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Emansipatsiya — 16 yoshli shaxsning mehnat shartnomasi yoki tadbirkorlik tufayli to‘la muomalaga layoqatli deb e’lon qilinishi. Rekvizitsiya — haqini to‘lagan holda mulkni davlat ixtiyoriga majburiy olish. Konfiskatsiya — bepul olib qo‘yish. Servitut — cheklangan foydalanish huquqi.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 28, 173, 203, 204-moddalar",
    difficulty: "qiyin",
    questionType: 'muvofiqlik',
    matchingPairsLeft: [
      "1) Emansipatsiya",
      "2) Rekvizitsiya",
      "3) Konfiskatsiya",
      "4) Servitut"
    ],
    matchingPairsRight: [
      "a) Favqulodda vaziyatlarda mulkni haqini to‘lagan holda davlat tasarrufiga majburiy olish",
      "b) 16 yoshli shaxsni vasiylik organi yoki sud qarori bilan to‘la muomalaga layoqatli deb e’lon qilish",
      "c) O‘zganing yer uchastkasidan cheklangan tarzda foydalanish huquqi",
      "d) Sud qarori asosida mulkni tekinga davlat egaligiga olib qo‘yish"
    ],
    correctAnswerText: "1-b, 2-a, 3-d, 4-c"
  },
  {
    id: 'ms1-q23',
    topicId: 'konstitutsiya',
    question: "Muvofiqlikni aniqlash: Davlat hokimiyati organlarining yuridik maqomi va ularning konstitutsiyaviy tavsiflarini moslashtiring.",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Prezident — davlat boshlig'i. Oliy Majlis — oliy vakillik va qonun chiqaruvchi organ. Vazirlar Mahkamasi — ijro etuvchi hokimiyat. Sud tizimi — odil sudlovni amalga oshiruvchi mustaqil hokimiyat tarmog'i.",
    legalBasis: "O‘zR Konstitutsiyasi, VIII, IX, X, XI bo‘limlar",
    difficulty: "qiyin",
    questionType: 'muvofiqlik',
    matchingPairsLeft: [
      "1) O‘zbekiston Respublikasi Prezidenti",
      "2) Oliy Majlis",
      "3) Vazirlar Mahkamasi",
      "4) Sud hokimiyati"
    ],
    matchingPairsRight: [
      "a) Davlatning oliy vakillik va qonun chiqaruvchi organi",
      "b) O‘zbekiston Respublikasida davlat boshlig‘idir",
      "c) Davlat hokimiyatining mustaqil tarmog‘i bo‘lib, odil sudlovni amalga oshiradi",
      "d) O‘zbekiston Respublikasining ijro etuvchi hokimiyatini amalga oshiradi"
    ],
    correctAnswerText: "1-b, 2-a, 3-d, 4-c"
  },
  {
    id: 'ms1-q24',
    topicId: 'mehnat',
    question: "Muvofiqlikni aniqlash: Ish vaqti turlari va ularning yangi Mehnat kodeksida belgilangan yuridik ta'riflarini o'zaro moslang.",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Normal ish vaqti — haftasiga 40 soatdan oshmaydigan muddat. Qisqartirilgan ish vaqti — yoshi, sog'lig'iga qarab qonunda belgilangan kamaytirilgan me'yor. To'liqsiz ish vaqti — tomonlar kelishuvi bilan o'rnatilgan qisqa ish vaqti (ishlagan soatga qarab haq to'lanadi). Ish vaqtidan tashqari ish — smenadan tashqari ortiqcha bajarilgan ish.",
    legalBasis: "O‘zR Mehnat kodeksi, Ish vaqti bo‘limi (181, 182, 186-moddalar)",
    difficulty: "qiyin",
    questionType: 'muvofiqlik',
    matchingPairsLeft: [
      "1) Normal ish vaqti",
      "2) Qisqartirilgan ish vaqti",
      "3) To‘liqsiz ish vaqti",
      "4) Ish vaqtidan tashqari ish"
    ],
    matchingPairsRight: [
      "a) Ayrim toifadagi xodimlar uchun mehnat shartlariga ko‘ra qonun bilan kamaytirilgan me’yor",
      "b) Haftasiga 40 soatdan ortiq bo‘lmagan umumiy qonuniy ish muddati",
      "c) Xodimning tashabbusi yoki kelishuv bilan kunlik yoki haftalik muddatni qisqartirish (mehnat haqi mutanosib to‘lanadi)",
      "d) Xodim uchun belgilangan kunlik ish (smena) muddatidan tashqari bajariladigan ish"
    ],
    correctAnswerText: "1-b, 2-a, 3-c, 4-d"
  },
  {
    id: 'ms1-q25',
    topicId: 'jinoyat',
    question: "Muvofiqlikni aniqlash: Jinoyat kodeksi bo'yicha jazo turlari va ularning yuridik chegaralarini o'zaro moslang.",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Majburiy jamoat ishlari 120 soatdan 480 soatgacha belgilanadi. Axloq tuzatish ishlari 6 oydan 3 yilgacha o'taydi. Ozodlikni cheklash 1 oydan 5 yilgacha tayinlanadi. Ozodlikdan mahrum qilish 6 oydan 20 yilgacha (maxsus hollarda 25) belgilanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 45, 46, 48, 50-moddalar",
    difficulty: "qiyin",
    questionType: 'muvofiqlik',
    matchingPairsLeft: [
      "1) Majburiy jamoat ishlari",
      "2) Axloq tuzatish ishlari",
      "3) Ozodlikni cheklash",
      "4) Ozodlikdan mahrum qilish"
    ],
    matchingPairsRight: [
      "a) 6 oydan 3 yilgacha muddatga davlat foydasiga 10% dan 30% gacha ushlab qolingan holda ishlash",
      "b) 120 soatdan 480 soatgacha bepul jamoat ishlarini bajarish",
      "c) 6 oydan 20 yilgacha muddatga shaxsni jamiyatdan ajratib saqlash",
      "d) 1 oydan 5 yilgacha muddatga sud belgilagan taqiqlarga rioya qilish"
    ],
    correctAnswerText: "1-b, 2-a, 3-d, 4-c"
  },

  // ==========================================
  // 3. AMALIY VAZIYATLAR (KAZUSLAR) (26 - 35)
  // ==========================================
  {
    id: 'ms1-q26',
    topicId: 'oila',
    question: "[KAZUS — Oila huquqi]: Er va xotin o‘zaro notarial tartibda nikoh shartnomasi tuzib, unda erning kelgusida oladigan tadbirkorlik daromadlari va ish haqini faqat uning shaxsiy mulki deb belgilash, xotin esa ajrashgan taqdirda eridan hech qanday ta’minot (aliment) talab qilmasligini ko‘rsatishdi. Mazkur shartnoma shartlarining huquqiy oqibati qanday bo‘ladi?",
    options: [
      "Shartnoma to‘liq o‘z-o‘zidan haqiqiy emas deb topiladi",
      "Aliment talab qilish huquqidan voz kechish qismi o‘z-o‘zidan haqiqiy emas hisoblanadi, erning daromadiga oid qism esa haqiqiy qoladi",
      "Shartnoma to‘liq haqiqiy bo‘lib, taraflar unga qat’iy rioya etishlari shart",
      "Faqat erning ish haqini shaxsiy mulk deb belgilash qismi bekor qilinadi"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 31-moddasiga binoan, nikoh shartnomasi er-xotindan birining qonunda kafolatlangan ta’minot (aliment) olish huquqini cheklashi mumkin emas. Bunday shartlar o‘z-o‘zidan haqiqiy emasdir. Biroq umumiy mulk rejimini shartnoma orqali o‘zgartirish (erning daromadini alohida mulk qilish) qonunan ruxsat etilgan.",
    legalBasis: "O‘zR Oila kodeksi, 31-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q27',
    topicId: 'mehnat',
    question: "[KAZUS — Mehnat huquqi]: Korxona direktori ishlab chiqarish hajmi qisqarganligi sababli xodimlar sonini qisqartirish to‘g‘risida buyruq chiqardi va malakali hisobchi ayol S.ni (u 2 yoshli farzandini tarbiyalamoqda) 2 oy oldin yozma ogohlantirib, shtat qisqarganligi asosi bilan ishdan bo‘shatdi. Ish beruvchining xatti-harakati qonuniymi?",
    options: [
      "Qonuniy, chunki ish beruvchi xodimni 2 oy oldin yozma ravishda ogohlantirgan",
      "Noqonuniy, chunki 3 yoshgacha bolasi bor ayollar bilan ish beruvchi tashabbusi bilan mehnat shartnomasini bekor qilishga faqat korxona to‘liq tugatilgandagina yo‘l qo‘yiladi",
      "Qonuniy, agar unga 3 oylik o‘rtacha ish haqi miqdorida ishdan bo‘shatish nafaqasi to‘langan bo‘lsa",
      "Noqonuniy, faqatgina kasaba uyushmasi yozma rozilik bermagan taqdirdagina noqonuniy bo‘ladi"
    ],
    correctIndex: 1,
    explanation: "Mehnat kodeksining 408-moddasiga muvofiq, homilador ayollar va uch yoshga to‘lmagan bolasi bor ayollar bilan mehnat shartnomasini ish beruvchining tashabbusi bilan bekor qilishga faqat tashkilot (uning alohida bo‘linmasi) tugatilgan hollardagina yo‘l qo‘yiladi.",
    legalBasis: "O‘zR Mehnat kodeksi, 408-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q28',
    topicId: 'fuqarolik',
    question: "[KAZUS — Fuqarolik huquqi]: 16 yoshli fuqaro R. otasi sovg‘a qilgan qimmatbaho mototsiklni ota-onasining roziligisiz va xabarisiz 22 yoshli tanishi K.ga arzonlashtirilgan narxda sotib yubordi. R.ning otasi bu bitimni bekor qilishni talab qilmoqda. Sud qanday qaror qabul qiladi?",
    options: [
      "Bitim to‘liq haqiqiy, chunki 16 yoshli shaxs mayda maishiy bitimlarni mustaqil tuza oladi",
      "Ota-onasining yozma roziligisiz tuzilgan bunday bitim qonuniy vakillarining (ota-ona) da’vosi bo‘yicha sud tomonidan haqiqiy emas deb topiladi",
      "Bitim faqat mototsikl bozor narxidan ikki barobar arzon sotilgan taqdirdagina bekor qilinadi",
      "Bitim haqiqiy, chunki mototsikl R.ning shaxsiy nomiga sovg‘a qilingan edi"
    ],
    correctIndex: 1,
    explanation: "Fuqarolik kodeksining 27-moddasiga ko‘ra, 14 yoshdan 18 yoshgacha bo‘lgan voyaga yetmaganlar o‘z ish haqlaridan tashqari bo‘lgan yirik mol-mulkni tasarruf etish bo‘yicha bitimlarni ota-onalarining yozma roziligi bilan tuzadilar. Roziliksiz tuzilgan bitim FK 118-moddasiga asosan sud tomonidan haqiqiy emas deb topiladi.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 27- va 118-moddalar",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q29',
    topicId: 'jinoyat',
    question: "[KAZUS — Jinoyat huquqi]: Fuqaro B. kechasi uyiga qaytayotganda unga pichoq bilan qurollangan noma’lum shaxs hujum qilib, pullarini talab qildi. B. o‘z hayotini himoya qilish maqsadida yerda yotgan tosh bilan hujumchining boshiga zarba berdi. Natijada bosqinchining sog‘lig‘iga og‘ir shikast yetdi. B.ning harakatlari jinoyat hisoblanadimi?",
    options: [
      "Ha, bu qasddan badanga og‘ir shikast yetkazish jinoyati hisoblanadi (JK 104-modda)",
      "Yo‘q, bu hayot uchun real xavfli bo‘lgan tajovuzdan zaruriy mudofaa holatida sodir etilgan bo‘lib, jinoiy javobgarlikni istisno etadi",
      "Ha, chunki u zaruriy mudofaa chegarasidan chetga chiqqan",
      "Faqat ehtiyotsizlik orqasida yetkazilgan shikast sifatida ma’muriy javobgarlikka tortiladi"
    ],
    correctIndex: 1,
    explanation: "Jinoyat kodeksining 37-moddasiga binoan, shaxsning hayoti uchun xavfli bo‘lgan zo‘rlik ishlatilganda tajovuzchiga har qanday zarar yetkazish, shu jumladan uning sog‘lig‘iga og‘ir putur yetkazish zaruriy mudofaa hisoblanadi va jinoiy javobgarlikni to‘liq istisno qiladi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 37-modda (Zaruriy mudofaa)",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q30',
    topicId: 'fuqarolik',
    question: "[KAZUS — Meros huquqi]: Fuqaro V. vafot etdi. Uning ortidan tirik xotini, 20 yoshli ishga layoqatli o‘g‘li, 75 yoshli nogiron onasi va birga yashamaydigan tug‘ishgan akasi qoldi. Marhum vasiyatnoma qoldirmagan. Qonun bo‘yicha meros qanday taqsimlanadi?",
    options: [
      "Meros barcha 4 nafar qarindosh o‘rtasida teng 4 qismga bo‘linadi",
      "Meros 1-navbatdagi merosxo‘rlar (xotini, o‘g‘li va nogiron onasi) o‘rtasida teng 3 qismga bo‘linadi, 2-navbatdagi aka merosdan chetlatiladi",
      "Meros faqat voyaga yetgan o‘g‘ilga o‘tadi",
      "Merosning yarmi xotiniga, qolgan qismi faqat onasiga beriladi"
    ],
    correctIndex: 1,
    explanation: "Fuqarolik kodeksining 1135-moddasiga muvofiq, vafot etganning bolalari, eri (xotini) va ota-onasi teng ulushlarda 1-navbatdagi merosxo‘rlar sanaladi. Birinchi navbatdagi merosxo‘rlar mavjud bo‘lganda, 2-navbatdagi merosxo‘rlar (aka-uka, opa-singillar) merosga chaqirilmaydi.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 1135-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q31',
    topicId: 'mamuriy',
    question: "[KAZUS — Ma’muriy huquq]: Haydovchi D. tezlikni me’yoridan oshirganligi holati fotoradar orqali qayd etildi. Biroq vakolatli organ tomonidan ma’muriy jazo qo‘llash to‘g‘risidagi qaror huquqbuzarlik sodir etilgan kundan boshlab 13 oy o‘tgach chiqarildi. Mazkur qarorning huquqiy oqibati qanday?",
    options: [
      "Qaror to‘liq qonuniy, chunki jarima muddatsiz undiriladi",
      "Qaror bekor qilinishi lozim va ijro etilmaydi, chunki ma’muriy jazo huquqbuzarlik sodir etilgan kundan boshlab ko‘pi bilan 1 yil o‘tgach qo‘llanilishi mumkin",
      "Qaror to'g'ri, chunki avtomatlashtirilgan vositalar uchun muddat 3 yil",
      "Qaror bo'yicha haydovchilik guvohnomasi olib qo'yilishi shart"
    ],
    correctIndex: 1,
    explanation: "MJtKning 36-moddasiga binoan, ma’muriy jazo huquqbuzarlik sodir etilgan kundan boshlab ko‘pi bilan bir yildan kechiktirmay qo‘llanilishi mumkin. 13 oy o‘tib chiqarilgan qaror muddati o‘tgani sababli haqiqiy emas va ish tugatiladi.",
    legalBasis: "O‘zR MJtK, 36-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q32',
    topicId: 'mehnat',
    question: "[KAZUS — Mehnat huquqi]: Ish beruvchi oliy o‘quv yurtini ilk bor tamomlab, o‘qishni bitirganidan so‘ng 1 yil o‘tib birinchi bor ishga qabul qilinayotgan mutaxassis M. bilan mehnat shartnomasi tuzishda unga nisbatan 3 oylik dastlabki sinov muddati belgiladi. Ushbu sinov sharti qonuniymi?",
    options: [
      "Qonuniy, chunki barcha xodimlar uchun 3 oygacha sinov muddati belgilanishi mumkin",
      "Noqonuniy, chunki davlat akkreditatsiyasidan o‘tgan oliy ta’lim muassasasi bitiruvchilari o‘qishni tamomlaganidan keyin 3 yil ichida birinchi bor ishga kirayotganda sinov belgilanmaydi",
      "Qonuniy, agar bu jamoa shartnomasida ruxsat etilgan bo'lsa",
      "Noqonuniy, oliy ma'lumotlilar uchun sinov muddati faqat 15 kun bo'ladi"
    ],
    correctIndex: 1,
    explanation: "Yangi Mehnat kodeksining 129-moddasiga muvofiq, oliy ta’lim muassasalarining davlat granti yoki to‘lov-kontrakt asosida ta’lim olgan bitiruvchilari o‘qishni tamomlagan kundan e’tiboran uch yil ichida birinchi bor ishga kirayotganda dastlabki sinov belgilanmaydi.",
    legalBasis: "O‘zR Mehnat kodeksi, 129-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q33',
    topicId: 'jinoyat',
    question: "[KAZUS — Jinoyat huquqi]: Fuqaro T. fuqaro G.ga do‘kondan tovarlarni o‘g‘irlash rejasini taklif qildi va unga do‘konning signalizatsiya kodlarini berdi. O‘g‘rilikni G. yolg‘iz o‘zi amalga oshirdi. Mazkur jinoiy holatda T.ning ishtirokchilikdagi roli qanday tasniflanadi?",
    options: [
      "Bajaruvchi",
      "Tashkilotchi va yordamchi (dalolatchi)",
      "Beparvolik qiluvchi guvoh",
      "Xavfli retsidivist"
    ],
    correctIndex: 1,
    explanation: "Jinoyat kodeksining 28-moddasiga binoan, jinoyatga tayyorgarlik ko‘rgan yoki unga rahbarlik qilgan shaxs tashkilotchi, maslahat yoki vositalar (signalizatsiya kodini) bergan shaxs esa yordamchi hisoblanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 28-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q34',
    topicId: 'fuqarolik',
    question: "[KAZUS — Iste’molchilar huquqlari]: Xaridor maishiy texnika do‘konidan xarid qilgan yangi televizorida 10 kundan so‘ng zavod nuqsoni tufayli ekran tasviri yo‘qolganini aniqladi. Do‘kon ma’muriyati tovarni qaytarib olishdan bosh tortib, faqat servis markazida ta’mirlatishni taklif qildi. Qonunchilikka asosan xaridor qanday huquqlarga ega?",
    options: [
      "Xaridor faqat bepul ta’mirlashga rozi bo‘lishga majbur",
      "Xaridor o‘z tanloviga ko‘ra tovarning bepul ta’mirlanishini, maqbul sifatdagi tovarga almashtirilishini yoki shartnomani bekor qilib to‘langan pulni to‘liq qaytarishni talab qilishga haqli",
      "Xaridor tovar qutisini ochgani uchun barcha huquqlaridan mahrum bo‘ladi",
      "Do‘kon tovar qiymatining 50 foizini ushlab qolib, qolganini qaytaradi"
    ],
    correctIndex: 1,
    explanation: "«Iste’molchilarning huquqlarini himoya qilish to‘g‘risida»gi Qonunning 13-moddasiga ko‘ra, nuqsonli tovar sotilganda iste’molchi tovarni almashtirish, narxini mutanosib kamaytirish, bepul ta’mirlash yoki pulni to‘liq qaytarib olish huquqiga egadir.",
    legalBasis: "«Iste’molchilarning huquqlarini himoya qilish to‘g‘risida»gi Qonun, 13-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },
  {
    id: 'ms1-q35',
    topicId: 'davlat_huquq',
    question: "[KAZUS — Sud va Konstitutsiya]: Sobiq tuman sudyasi bo‘lgan, sudyalik lavozimida 6 yil ishlagan oliy yuridik ma'lumotli 28 yoshli fuqaro R. notarius bo'lish uchun ariza topshirdi. Adliya boshqarmasi undan 1 yillik majburiy stajirovkadan o'tishni talab qilmoqda. Sud mazkur da'voni qanday hal qilishi lozim?",
    options: [
      "Adliya boshqarmasining talabi mutlaqo qonuniy",
      "Notarius bo‘lish uchun sudyalik lavozimida kamida 5 yil ishlagan shaxslardan stajirovkadan o‘tish talab etilmaydi, ariza qabul qilinishi shart",
      "Sudya 40 yoshga to‘lguniga qadar notarius bo‘lishi taqiqlanadi",
      "Stajirovka talab etilmaydi, lekin u 3 yil davomida imtihonsiz faoliyat ko'rsatadi"
    ],
    correctIndex: 1,
    explanation: "«Notariat to‘g‘risida»gi qonunning 2-moddasiga muvofiq, sudyalik lavozimida kamida 5 yil ishlagan shaxslar notarius lavozimiga tayinlanishda majburiy stajirovkadan o‘tishdan ozod qilinadi.",
    legalBasis: "«Notariat to‘g‘risida»gi O‘zR Qonuni, 2-modda",
    difficulty: "qiyin",
    questionType: 'kazus'
  },

  // ==========================================
  // 4. OCHIQ TESTLAR (QISQA JAVOBLI) (36 - 45)
  // ==========================================
  {
    id: 'ms1-q36',
    topicId: 'mehnat',
    question: "[OCHIQ TEST]: Yangi Mehnat kodeksiga asosan, haftalik ish vaqtining normal muddati ko‘pi bilan necha soatdan oshmasligi lozim?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Mehnat kodeksining 181-moddasiga muvofiq, xodim uchun ish vaqtining normal muddati haftasiga 40 soatdan ortiq bo‘lishi mumkin emas.",
    legalBasis: "O‘zR Mehnat kodeksi, 181-modda",
    difficulty: "oson",
    questionType: 'ochiq',
    correctAnswerText: "40"
  },
  {
    id: 'ms1-q37',
    topicId: 'fuqarolik',
    question: "[OCHIQ TEST]: Fuqarolik qonunchiligida belgilangan umumiy da’vo muddati necha yil etib belgilangan?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Fuqarolik kodeksining 150-moddasiga asosan, umumiy da’vo muddati uch yil qilib belgilangan.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 150-modda",
    difficulty: "oson",
    questionType: 'ochiq',
    correctAnswerText: "3"
  },
  {
    id: 'ms1-q38',
    topicId: 'konstitutsiya',
    question: "[OCHIQ TEST]: O‘zR Konstitutsiyasiga muvofiq, Oliy Majlis Qonunchilik palatasining birinchi majlisi saylovdan keyin ko‘pi bilan necha oydan kechiktirmay Markaziy saylov komissiyasi tomonidan chaqiriladi?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "O‘zR Konstitutsiyasining 96-moddasiga ko‘ra, Qonunchilik palatasining birinchi majlisi saylovdan keyin ikki oydan kechiktirmay chaqiriladi.",
    legalBasis: "O‘zR Konstitutsiyasi, 96-modda",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "2"
  },
  {
    id: 'ms1-q39',
    topicId: 'oila',
    question: "[OCHIQ TEST]: Oila kodeksiga ko‘ra, er o'z xotinining homiladorlik vaqtida va bola tug‘ilganidan keyin necha yil mobaynida xotinining roziligisiz nikohdan ajratish to‘g‘risida da’vo qo‘zg‘ata olmaydi?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Oila kodeksining 39-moddasiga asosan, xotinining homiladorlik vaqtida va bola tug‘ilganidan keyin bir yil mobaynida er xotinining roziligisiz nikohdan ajratish to‘g‘risida da’vo qo‘zg‘atishga haqli emas.",
    legalBasis: "O‘zR Oila kodeksi, 39-modda",
    difficulty: "oson",
    questionType: 'ochiq',
    correctAnswerText: "1"
  },
  {
    id: 'ms1-q40',
    topicId: 'mamuriy',
    question: "[OCHIQ TEST]: Ma’muriy javobgarlik to‘g‘risidagi kodeksga ko‘ra, ma’muriy qamoq jazosining eng minimal muddati necha kecha-kunduzni (sutka) tashkil etadi?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "MJtKning 29-moddasiga binoan, ma’muriy qamoq uch sutkadan o‘n besh sutkagacha muddatga qo‘llaniladi.",
    legalBasis: "O‘zR MJtK, 29-modda",
    difficulty: "oson",
    questionType: 'ochiq',
    correctAnswerText: "3"
  },
  {
    id: 'ms1-q41',
    topicId: 'mehnat',
    question: "[OCHIQ TEST]: Yangi Mehnat kodeksiga asosan, yillik asosiy eng kam mehnat ta’tili davomiyligi necha kalendar kun etib belgilangan?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Yangi Mehnat kodeksining 217-moddasiga muvofiq, xodimlarga beriladigan yillik asosiy eng kam mehnat ta’tilining davomiyligi yigirma bir kalendar kunni tashkil etadi.",
    legalBasis: "O‘zR Mehnat kodeksi, 217-modda",
    difficulty: "oson",
    questionType: 'ochiq',
    correctAnswerText: "21"
  },
  {
    id: 'ms1-q42',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Jinoyat kodeksiga ko‘ra, umumiy tartibda tayinlanadigan jarima jazosining eng minimal miqdori bazaviy hisoblash miqdorining (BHM) necha baravarini tashkil etadi?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Jinoyat kodeksining 44-moddasiga binoan, jarima miqdori bazaviy hisoblash miqdorining o‘ttiz baravaridan besh yuz baravarigacha miqdorda belgilanadi. Demak eng kamida 30 baravar.",
    legalBasis: "O‘zR Jinoyat kodeksi, 44-modda",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "30"
  },
  {
    id: 'ms1-q43',
    topicId: 'davlat_huquq',
    question: "[OCHIQ TEST]: Huquqiy normaning tarkibiy tuzilishi (strukturasi) an'anaviy ravishda uchta elementdan iborat bo'lib, ular: Gipoteza, Dispozitsiya va ... . (Uchinchi element nomini yozing)",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Huquq normasi mantig‘i uch tarkibiy qismdan tashkil topadi: Gipoteza (shart-sharoit), Dispozitsiya (xulq-atvor qoidasi) va Sanksiya (huquqiy oqibat/jazo).",
    legalBasis: "Davlat va huquq nazariyasi, Huquq normasi tuzilishi",
    difficulty: "oson",
    questionType: 'ochiq',
    correctAnswerText: "Sanksiya"
  },
  {
    id: 'ms1-q44',
    topicId: 'konstitutsiya',
    question: "[OCHIQ TEST]: Yangi tahrirdagi Konstitutsiyaning nechanchi moddasida insonning sha'ni va qadr-qimmati daxlsizligi hamda hech narsa ularni kamsitish uchun asos bo'la olmasligi mustahkamlangan?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 26-moddasiga binoan: 'Insonning sha'ni va qadr-qimmati daxlsizdir. Hech narsa ularni kamsitish uchun asos bo'lishi mumkin emas'.",
    legalBasis: "O‘zR Konstitutsiyasi, 26-modda",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "26"
  },
  {
    id: 'ms1-q45',
    topicId: 'davlat_huquq',
    question: "[OCHIQ TEST]: «Siyosatnoma» (yoki «Siyar ul-muluk») asari orqali davlat boshqaruvi va adolatli saltanat tuzumini batafsil bayon etgan buyuk vazir, mutafakkir kim?",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "Saljuqiylar sulolasi vaziri Nizomulmulk o‘zining mashhur «Siyosatnoma» asari orqali davlat boshqaruvi nazariyasini mukammal yoritib bergan.",
    legalBasis: "Siyosiy-huquqiy ta’limotlar tarixi, Nizomulmulk",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "Nizomulmulk"
  }
];
