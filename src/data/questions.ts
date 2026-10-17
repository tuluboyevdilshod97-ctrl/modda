import { Question } from '../types';
import { USER_MIXED_QUESTIONS } from './userQuestions';
import { USER_QUESTIONS_PART1 } from './userQuestionsPart1';
import { USER_QUESTIONS_PART2 } from './userQuestionsPart2';
import { KONSTITUTSIYA_200_QUESTIONS } from './konstitutsiyaQuestions';
import { DARSLIK_10_QUESTIONS } from './darslik10Questions';
import { DARSLIK_8_QUESTIONS } from './darslik8Questions';
import { DARSLIK_9_QUESTIONS } from './darslik9Questions';
import { DARSLIK_11_QUESTIONS } from './darslik11Questions';
import { EDULAW_QIYIN_QUESTIONS } from './edulawQiyinQuestions';
import { BLOCK_QIYIN_QUESTIONS } from './blockQiyinQuestions';
import { OLIMPIADA_2025_QUESTIONS } from './olimpiada2025Questions';
import { MENTOR_QIYIN_QUESTIONS } from './mentorQiyinQuestions';
import { DARSLIK_11_UMUMIY_QIYIN_QUESTIONS } from './darslik11UmumiyQiyinQuestions';
import { BMBA_HUQUQ_VODIYSI_QUESTIONS } from './bmbaHuquqVodiysiQuestions';
import { BMBA_23_DEC_QUESTIONS } from './bmbaHuquqVodiysi23DecQuestions';
import { HUQUQOLOGIYA_QIYIN_QUESTIONS } from './huquqologiyaQiyinQuestions';
import { EDULAW_JAVOHIR_QUESTIONS } from './edulawJavohirQuestions';
import { BMBA_LEGALDOCTOR_QUESTIONS } from './bmbaLegaldoctorQuestions';
import { MILLIY_SERTIFIKAT_2_VARIANT } from './milliySertifikat2VariantQuestions';

const BASE_QUESTIONS: Question[] = [
  // ===================== 1. KONSTITUTSIYA =====================
  {
    id: 'konst-1',
    topicId: 'konstitutsiya',
    question: "Yangi tahrirdagi O‘zbekiston Respublikasi Konstitutsiyasining 1-moddasiga ko‘ra, O‘zbekiston qanday davlat deb e’lon qilingan?",
    options: [
      "Boshqaruvning respublika shakliga ega bo‘lgan mustaqil davlat",
      "Boshqaruvning prezidentlik shakliga ega bo‘lgan unar davlat",
      "Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat",
      "Demokratik, federativ, dunyoviy va sotsialistik davlat"
    ],
    correctIndex: 2,
    explanation: "Yangi tahrirdagi Konstitutsiyaning 1-moddasi: 'O‘zbekiston — boshqaruvning respublika shakliga ega bo‘lgan suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat'.",
    legalBasis: "O'zR Konstitutsiyasi, 1-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'konst-2',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Prezidenti lavozimiga saylanuvchi fuqaroga qo‘yiladigan yosh talabi necha yoshdan kam bo‘lmasligi kerak?",
    options: [
      "25 yoshdan",
      "30 yoshdan",
      "35 yoshdan",
      "40 yoshdan"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaning 106-moddasiga muvofiq, O‘zbekiston Respublikasi Prezidenti lavozimiga o‘ttiz besh yoshdan kichik bo‘lmagan, davlat tilini yaxshi biladigan, saylovgacha kamida 10 yil O‘zbekiston hududida muqim yashayotgan fuqaro saylanishi mumkin.",
    legalBasis: "O'zR Konstitutsiyasi, 106-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'konst-3',
    topicId: 'konstitutsiya',
    question: "Yangi Konstitutsiyaga binoan, O‘zbekiston Respublikasi Prezidentining vakolat muddati necha yil qilib belgilangan?",
    options: [
      "4 yil",
      "5 yil",
      "6 yil",
      "7 yil"
    ],
    correctIndex: 3,
    explanation: "2023-yilgi yangi tahrirdagi Konstitutsiyaning 106-moddasiga binoan, Prezident O‘zbekiston Respublikasi fuqarolari tomonidan yetti yil muddatga saylanadi.",
    legalBasis: "O'zR Konstitutsiyasi, 106-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'konst-4',
    topicId: 'konstitutsiya',
    question: "Oliy Majlis Qonunchilik palatasi deputatligiga nomzod ko‘rsatish huquqiga kimlar ega?",
    options: [
      "siyosiy partiyalar",
      "Siyosiy partiyalar va fuqarolarning o‘zini o‘zi boshqarish organlari",
      "bevosita fuqarolar tashabbuskor guruhlari",
      "Siyosiy partiyalar hamda kasaba uyushmalari"
    ],
    correctIndex: 0,
    explanation: "Saylov qonunchiligiga ko'ra, Qonunchilik palatasi deputatligiga ro'yxatga olingan siyosiy partiyalar nomzod ko'rsatish huquqiga ega.",
    legalBasis: "Saylov kodeksi, 70-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'konst-5',
    topicId: 'konstitutsiya',
    question: "Yangi Konstitutsiyaga ko‘ra, Oliy Majlis Senati necha nafar a’zodan (senatorlardan) iborat bo‘ladi?",
    options: [
      "100 nafar",
      "150 nafar",
      "65 nafar",
      "84 nafar"
    ],
    correctIndex: 2,
    explanation: "Yangi tahrirdagi Konstitutsiyaning 92-moddasiga asosan Senat 65 nafar a'zodan iborat: Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahridan 4 nafardan (jami 56 kishi) va Prezident tomonidan tayinlanadigan 9 kishi.",
    legalBasis: "O'zR Konstitutsiyasi, 92-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'konst-6',
    topicId: 'konstitutsiya',
    question: "Sudning qarorisiz shaxs necha soatdan ortiq muddatga ushlab turilishi mumkin emas (Habeas Corpus)?",
    options: [
      "24 soatdan",
      "48 soatdan",
      "72 soatdan",
      "3 sutkadan"
    ],
    correctIndex: 1,
    explanation: "Konstitutsiyaning 27-moddasiga asosan: 'Hech kim sudning qarorisiz qirq sakkiz soatdan ortiq muddat ushlab turilishi mumkin emas. Qonunda belgilangan muddatda ushlab turishning qonuniyligi va asosliligi sudda isbotlanmasa, shaxs darhol ozod qilinishi kerak'.",
    legalBasis: "O'zR Konstitutsiyasi, 27-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'konst-7',
    topicId: 'konstitutsiya',
    question: "Inson huquqlari sohasidagi 'Miranda qoidasi' yangi Konstitutsiyaning qaysi prinsipida mustahkamlangan?",
    options: [
      "Shaxsga uning nima sababdan ushlab turilganligi va sukut saqlash huquqi darhol tushuntirilishi shart",
      "Har bir fuqaro o‘z mulkidan erkin foydalanish huquqiga ega",
      "Aybdorligi qonunda belgilangan tartibda isbotlanmaguncha har kim aybsiz hisoblanadi",
      "Qonun buzilgan holda olingan dalillardan foydalanishga yo'l qo'yilmaydi"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 27-moddasiga ko‘ra, shaxsni ushlash chog‘ida unga tushunarli tilda uning huquqlari va ushlab turilishi asoslari, sukut saqlash huquqi tushuntirilishi shart.",
    legalBasis: "O'zR Konstitutsiyasi, 27-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'konst-8',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Vazirlar Mahkamasining vakolatiga nimalar kiradi?",
    options: [
      "Sudlar faoliyatini nazorat qilish va sudyalarni tayinlash",
      "Qonunlarni qabul qilish va ularga rasmiy sharh berish",
      "Ijtimoiy-iqtisodiy sohaning samarali faoliyatiga rahbarlik qilish va ijro hokimiyatini ta'minlash",
      "Xalqaro shartnomalarni ratifikatsiya qilish"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaning 114-moddasiga muvofiq, O‘zbekiston Respublikasi Vazirlar Mahkamasi ijro etuvchi hokimiyatni amalga oshiradi, iqtisodiy, ijtimoiy, moliyaviy-pul sohalarining samarali faoliyatiga rahbarlik qiladi.",
    legalBasis: "O'zR Konstitutsiyasi, 114-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },
  {
    id: 'konst-9',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Konstitutsiyaviy sudining sudyasi necha yil muddatga saylanadi?",
    options: [
      "5 yil",
      "7 yil",
      "10 yil",
      "Muddatsiz (umrbod)"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaning 131-moddasiga muvofiq, Konstitutsiyaviy sud sudyalari qayta saylanish huquqisiz o‘n yil muddatga saylanadi.",
    legalBasis: "O'zR Konstitutsiyasi, 131-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'konst-10',
    topicId: 'konstitutsiya',
    question: "Qonunchilik takliflarini Oliy Majlis Qonunchilik palatasiga kiritish huquqiga (xalq tashabbusi) necha nafardan kam bo‘lmagan fuqarolar guruhi ega?",
    options: [
      "10 ming nafar",
      "50 ming nafar",
      "100 ming nafar",
      "250 ming nafar"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaning 98-moddasiga ko‘ra, yuz ming nafardan kam bo‘lmagan fuqarolar qonunchilik takliflarini Oliy Majlis Qonunchilik palatasiga kiritishga haqlidir.",
    legalBasis: "O'zR Konstitutsiyasi, 98-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },

  // ===================== 2. DAVLAT VA HUQUQ NAZARIYASI =====================
  {
    id: 'dh-1',
    topicId: 'davlat_huquq',
    question: "Davlat boshqaruv shakliga ko‘ra asosan qanday turlarga bo‘linadi?",
    options: [
      "Unitar va federativ",
      "Monarxiya va respublika",
      "Demokratik va totalitar",
      "Konfederatsiya va imperiya"
    ],
    correctIndex: 1,
    explanation: "Davlat boshqaruv shakli oliy hokimiyatning tashkil etilishi va uning xalq bilan munosabatiga ko'ra ikkiga: Monarxiya va Respublika shakllariga bo'linadi.",
    legalBasis: "Davlat va huquq nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'dh-2',
    topicId: 'davlat_huquq',
    question: "Huquqiy normaning qaysi tarkibiy qismida qoidaning o‘zi, ya’ni subyektlarning huquq va majburiyatlari bayon etiladi?",
    options: [
      "Gipoteza",
      "Dispozitsiya",
      "Sanksiya",
      "Preambula"
    ],
    correctIndex: 1,
    explanation: "Huquqiy norma 3 ta elementdan iborat: Gipoteza (hayotiy sharoit), Dispozitsiya (xulq-atvor qoidasi, huquq va majburiyatlar), Sanksiya (qoidabuzarlik oqibati/jazo).",
    legalBasis: "Huquqiy normalar nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },
  {
    id: 'dh-3',
    topicId: 'davlat_huquq',
    question: "Quyidagilardan qaysi biri davlatning asosiy ichki belgisi hisoblanmaydi?",
    options: [
      "Aholining hududiy bo‘linishi",
      "Ommaviy hokimiyatning mavjudligi",
      "Yagona dunyoqarash yoki rasmiy mafkuraning majburiyligi",
      "Soliqlar va yig‘imlarning olinishi"
    ],
    correctIndex: 2,
    explanation: "Huquqiy va demokratik davlatda biror bir mafkura davlat mafkurasi sifatida o'rnatilishi mumkin emas. Davlatning belgilari: hudud, aholi, suverenitet, soliqlar, ommaviy hokimiyat, huquq tizimi.",
    legalBasis: "Davlat nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'dh-4',
    topicId: 'davlat_huquq',
    question: "Huquqbuzarlik tarkibining subyektiv tomoni deganda nima tushuniladi?",
    options: [
      "Huquqbuzarning o‘z qilmishiga va uning oqibatlariga bo‘lgan ruhiy munosabati (ayb, qasd, ehtiyotsizlik, sabab va maqsad)",
      "Qilmish natijasida yetkazilgan moddiy zarar",
      "Huquqbuzarlik sodir etilgan vaqt, joy va qurol",
      "Qilmish sodir etilgan ijtimoiy munosabatlar"
    ],
    correctIndex: 0,
    explanation: "Subyektiv tomon — shaxsning sodir etgan qilmishiga ruhiy munosabati, ya'ni aybi (qasd yoki ehtiyotsizlik), motivi va maqsadi hisoblanadi.",
    legalBasis: "Huquqbuzarlik tarkibi nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'dh-5',
    topicId: 'davlat_huquq',
    question: "Normativ-huquqiy hujjatlar qabul qilinish kuchiga ko‘ra qaysi ikki asosiy guruhga bo‘linadi?",
    options: [
      "Qonunlar va qonunosti hujjatlari",
      "Kodekslar va nizomlar",
      "Dekretlar va rezolyutsiyalar",
      "Mahalliy va xalqaro hujjatlar"
    ],
    correctIndex: 0,
    explanation: "Normativ-huquqiy hujjatlar yuridik kuchiga qarab: Qonunlar (Konstitutsiya, konstitutsiyaviy qonunlar, oddiy qonunlar) va Qonunosti hujjatlari (Prezident farmonlari, Hukumat qarorlari, vazirlik buyruqlari)ga bo'linadi.",
    legalBasis: "'Normativ-huquqiy hujjatlar to'g'risida'gi qonun",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'dh-6',
    topicId: 'davlat_huquq',
    question: "Huquqiy munosabatlarning elementlari to‘g‘ri ko‘rsatilgan qatorni aniqlang:",
    options: [
      "Subyekt, obyekt, mazmun (huquq va majburiyatlar)",
      "Gipoteza, dispozitsiya, sanksiya",
      "Sud, prokuror, jabrlanuvchi",
      "Ayb, sabab, natija"
    ],
    correctIndex: 0,
    explanation: "Har qanday huquqiy munosabat tarkibi 3 qismdan iborat: Subyektlar (ishtirokchilar), Obyekt (munosabat qaratilgan narsa/manfaat) va Mazmun (subyektiv huquqlar va yuridik majburiyatlar).",
    legalBasis: "Huquqiy munosabat nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },
  {
    id: 'dh-7',
    topicId: 'davlat_huquq',
    question: "Davlat shaklining elementlari qaysilar?",
    options: [
      "Boshqaruv shakli, tuzilish shakli, siyosiy rejim",
      "Prezidentlik, monarxiya, respublika",
      "Qonun chiqaruvchi, ijro etuvchi, sud hokimiyati",
      "Iqtisodiy, ijtimoiy va siyosiy tuzum"
    ],
    correctIndex: 0,
    explanation: "Davlat shakli uch tarkibiy qismdan iborat: 1) Davlat boshqaruv shakli, 2) Davlat tuzilishi shakli, 3) Siyosiy-huquqiy rejim.",
    legalBasis: "Davlat nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'dh-8',
    topicId: 'davlat_huquq',
    question: "Qonuniy kuchga kirgan sud qarorlarining O‘zbekiston Respublikasi hududida bajarilishi qanday xarakterga ega?",
    options: [
      "Tavsiyaviy xarakterga ega",
      "Barcha davlat organlari, tashkilotlar va fuqarolar uchun majburiydir",
      "sud jarayoni ishtirokchilari uchungina majburiydir",
      "ijro organi ruxsat berganidan so'ng kuchga kiradi"
    ],
    correctIndex: 1,
    explanation: "Qonuniy kuchga kirgan sud hujjatlari barcha davlat organlari, jamoat birlashmalari, mansabdor shaxslar va fuqarolar uchun majburiydir va butun hududda so'zsiz ijro etilishi shart.",
    legalBasis: "Konstitutsiya 138-modda, 'Sudlar to'g'risida'gi qonun",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },

  // ===================== 3. FUQAROLIK HUQUQI =====================
  {
    id: 'fuq-1',
    topicId: 'fuqarolik',
    question: "Fuqaroning o‘z harakatlari bilan fuqarolik huquqlariga ega bo‘lish va fuqarolik majburiyatlarini vujudga keltirish layoqati nima deyiladi?",
    options: [
      "Huquq layoqati",
      "Muomala layoqati",
      "Huquq subyektligi",
      "Delikt qobiliyati"
    ],
    correctIndex: 1,
    explanation: "Fuqaroning o'z harakatlari bilan huquqlarga ega bo'lish va majburiyatlarni bajarish qobiliyati 'muomala layoqati' deb ataladi (huquq layoqati esa tug'ilishdan vujudga keladi).",
    legalBasis: "Fuqarolik kodeksi, 22-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'fuq-2',
    topicId: 'fuqarolik',
    question: "Fuqarolik huquqida umumiy da’vo muddati necha yil qilib belgilangan?",
    options: [
      "1 yil",
      "3 yil",
      "5 yil",
      "10 yil"
    ],
    correctIndex: 1,
    explanation: "O‘zbekiston Respublikasi Fuqarolik kodeksining 150-moddasiga ko‘ra, umumiy da’vo muddati uch yilni tashkil etadi.",
    legalBasis: "Fuqarolik kodeksi, 150-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'fuq-3',
    topicId: 'fuqarolik',
    question: "14 yoshdan 18 yoshgacha bo‘lgan voyaga yetmaganlar qanday bitimlarni ota-onasi yoki vasiysining roziligisiz mustaqil tuzishi mumkin?",
    options: [
      "Ko‘chmas mulkni sotish yoki hadya qilish bitimlarini",
      "O‘z ish haqi, stipendiyasi va boshqa daromadlarini tasarruf etish, mayda maishiy bitimlar",
      "Katta miqdordagi bank kreditlari olish shartnomalarini",
      "Barcha bitimlarni notarial tasdiqlash sharti bilan"
    ],
    correctIndex: 1,
    explanation: "FKning 27-moddasiga binoan, 14 yoshdan 18 yoshgacha bo‘lganlar o‘z stipendiyasi, ish haqi va boshqa daromadlarini mustaqil tasarruf etish, mayda maishiy bitimlar tuzish va mualliflik huquqini amalga oshirishga haqlidir.",
    legalBasis: "Fuqarolik kodeksi, 27-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'fuq-4',
    topicId: 'fuqarolik',
    question: "16 yoshga to‘lgan voyaga yetmagan shaxs mehnat shartnomasi bo‘yicha ishlayotgan bo‘lsa, uni to‘liq muomala layoqatli deb e’lon qilish qanday ataladi?",
    options: [
      "Reabilitatsiya",
      "Legitimatsiya",
      "Emansipatsiya",
      "Ratifitsiya"
    ],
    correctIndex: 2,
    explanation: "16 yoshga to‘lgan voyaga yetmagan shaxs mehnat shartnomasi bo‘yicha ishlayotgan yoki tadbirkorlik bilan shug‘ullanayotgan bo‘lsa, ota-onasining roziligi bilan (vasiylik organi orqali yoki sud qarori bilan) to‘la muomala layoqatli deb e’lon qilinishi — emansipatsiya deyiladi.",
    legalBasis: "Fuqarolik kodeksi, 28-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'fuq-5',
    topicId: 'fuqarolik',
    question: "Quyidagilardan qaysi biri yuridik shaxsning belgisi hisoblanmaydi?",
    options: [
      "O‘z nomidan mulkiy va shaxsiy nomulkiy huquqlarga ega bo‘lish",
      "Mustaqil balans yoki smetaga ega bo‘lish",
      "Sudda da’vogar va javobgar bo‘la olish",
      "Kamida 18 yoshga to‘lgan O‘zbekiston fuqarosi bo‘lishi shartligi"
    ],
    correctIndex: 3,
    explanation: "Yuridik shaxs inson (jismoniy shaxs) emas, balki tashkilotdir. Uning belgilari: tashkiliy birlik, alohida mol-mulk, mustaqil mulkiy javobgarlik, sudda o'z nomidan ishtirok etish.",
    legalBasis: "Fuqarolik kodeksi, 39-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },
  {
    id: 'fuq-6',
    topicId: 'fuqarolik',
    question: "Mulk huquqi egasiga qanday 3 ta klassik vakolatlar yig‘indisini beradi?",
    options: [
      "Egalik qilish, foydalanish, tasarruf etish",
      "Sotish, ijaraga berish, yo'q qilish",
      "Soliq to'lash, hisobga qo'yish, sug'urtalash",
      "Boshqarish, nazorat qilish, jazolash"
    ],
    correctIndex: 0,
    explanation: "FKning 164-moddasiga ko‘ra, mulk huquqi shaxsning o‘ziga qarashli mol-mulkka o‘z xohishicha egalik qilish, undan foydalanish va uni tasarruf etish huquqidir.",
    legalBasis: "Fuqarolik kodeksi, 164-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'fuq-7',
    topicId: 'fuqarolik',
    question: "Fuqaroni bedarak yo‘qolgan deb topish uchun uning yashash joyida qancha vaqt davomida ma’lumotlar bo‘lmasligi kerak?",
    options: [
      "Kamida 6 oy",
      "Kamida 1 yil",
      "Kamida 3 yil",
      "Kamida 5 yil"
    ],
    correctIndex: 1,
    explanation: "Agar fuqaroning qayerda turganligi haqida uning yashash joyida bir yil davomida ma’lumotlar bo‘lmasa, manfaatdor shaxslarning arizasiga ko‘ra sud uni bedarak yo‘qolgan deb topishi mumkin.",
    legalBasis: "Fuqarolik kodeksi, 33-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'fuq-8',
    topicId: 'fuqarolik',
    question: "Fuqarolik huquqida bitimlar qanday shakllarda tuzilishi mumkin?",
    options: [
      "yozma va notarial shaklda",
      "Og‘zaki yoki yozma (oddiy yozma yoki notarial tasdiqlangan)",
      "davlat ro'yxatidan o'tkazilgan shaklda",
      "elektron raqamli imzo orqali"
    ],
    correctIndex: 1,
    explanation: "FKning 105-moddasiga ko‘ra bitimlar og‘zaki yoki yozma (oddiy yozma yoki notarial tasdiqlangan) shaklda tuziladi.",
    legalBasis: "Fuqarolik kodeksi, 105-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },

  // ===================== 4. MEHNAT HUQUQI =====================
  {
    id: 'meh-1',
    topicId: 'mehnat',
    question: "O‘zbekiston Respublikasining yangi Mehnat kodeksiga ko‘ra, ishga qabul qilishga qaysi yoshdan yo‘l qo‘yiladi?",
    options: [
      "14 yoshdan",
      "15 yoshdan",
      "16 yoshdan",
      "18 yoshdan"
    ],
    correctIndex: 2,
    explanation: "Yangi Mehnat kodeksining 118-moddasiga asosan, ishga qabul qilishga o‘n olti yoshdan yo‘l qo‘yiladi (istisno tariqasida 15 yoshdan ota-ona roziligi bilan yengil ishlarga).",
    legalBasis: "Yangi Mehnat kodeksi, 118-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'meh-2',
    topicId: 'mehnat',
    question: "Yangi Mehnat kodeksiga binoan, har yilgi asosiy eng kam mehnat ta’tili davomiyligi necha kalendar kundan kam bo‘lmasligi kerak?",
    options: [
      "15 ish kuni",
      "18 kalendar kun",
      "21 kalendar kun",
      "30 kalendar kun"
    ],
    correctIndex: 2,
    explanation: "Yangi Mehnat kodeksining 217-moddasiga ko‘ra, har yilgi asosiy eng kam mehnat ta’tilining davomiyligi yigirma bir kalendar kundan kam bo‘lishi mumkin emas.",
    legalBasis: "Yangi Mehnat kodeksi, 217-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'meh-3',
    topicId: 'mehnat',
    question: "Xodimni ishga qabul qilishda dastlabki sinov muddati ko‘pi bilan necha oydan oshmasligi kerak?",
    options: [
      "1 oydan",
      "2 oydan",
      "3 oydan (tashkilot rahbarlari uchun 6 oydan)",
      "Har doim 6 oydan"
    ],
    correctIndex: 2,
    explanation: "Yangi MK 130-moddasiga binoan dastlabki sinov muddati 3 oydan, tashkilot rahbarlari, ularning o‘rinbosarlari, bosh buxgalterlar va alohida bo‘linma rahbarlari uchun esa 6 oydan oshmasligi kerak.",
    legalBasis: "Yangi Mehnat kodeksi, 130-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'meh-4',
    topicId: 'mehnat',
    question: "Quyidagi shaxslardan qaysi biriga ishga qabul qilinayotganda dastlabki sinov belgilanmaydi?",
    options: [
      "Oldin boshqa sohada ishlagan fuqarolarga",
      "Homilador ayollar, 3 yoshga to'lmagan bolasi bor ayollar va ta'lim muassasasini tamomlaganiga 1 yil bo'lmagan yangi bitiruvchilarga",
      "Pensiya yoshidagi fuqarolarga",
      "Chet el fuqarolariga"
    ],
    correctIndex: 1,
    explanation: "MK 129-moddasiga binoan, homilador ayollarga, 3 yoshga to'lmagan bolasi bor ayollarga, oliy yoki o'rta maxsus ta'lim bitiruvchilari birinchi bor ishga kirayotganda sinov belgilanmaydi.",
    legalBasis: "Yangi Mehnat kodeksi, 129-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'meh-5',
    topicId: 'mehnat',
    question: "Xodim mehnat shartnomasini o‘z xohishiga ko‘ra bekor qilmoqchi bo‘lsa, ish beruvchini necha kun oldin yozma ravishda ogohlantirishi shart?",
    options: [
      "3 kun oldin",
      "7 kun oldin",
      "14 kalendar kun oldin",
      "1 oy oldin"
    ],
    correctIndex: 2,
    explanation: "Mehnat kodeksining 160-moddasiga asosan, xodim nomuayyan muddatli mehnat shartnomasini o‘n to‘rt kalendar kun oldin ish beruvchini yozma ravishda ogohlantirgan holda bekor qilishga haqlidir.",
    legalBasis: "Yangi Mehnat kodeksi, 160-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'meh-6',
    topicId: 'mehnat',
    question: "O‘n olti yoshdan o‘n sakkiz yoshgacha bo‘lgan xodimlar uchun haftalik ish vaqti necha soatdan oshmasligi kerak?",
    options: [
      "24 soatdan",
      "36 soatdan",
      "40 soatdan",
      "48 soatdan"
    ],
    correctIndex: 1,
    explanation: "MKning 118- va 415-moddalariga muvofiq, 16 dan 18 yoshgacha bo‘lgan xodimlar uchun qisqartirilgan ish vaqti haftasiga 36 soatdan oshmasligi kerak (15-16 yoshdagilar uchun 24 soat).",
    legalBasis: "Yangi Mehnat kodeksi, 415-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'meh-7',
    topicId: 'mehnat',
    question: "Mehnat intizomini buzganligi uchun ish beruvchi xodimga nisbatan qanday intizomiy jazo choralarini qo‘llashi mumkin?",
    options: [
      "Hayfsan, o‘rtacha oylik ish haqining o‘ttiz foizidan (qonunda 50%) oshmagan jarima, mehnat shartnomasini bekor qilish",
      "Ma'muriy qamoq, jarima va mol-mulkni musodara qilish",
      "Ish haqini to'liq ushlab qolish va majburiy jamoat ishlariga jalb qilish",
      "Boshqa viloyatga ko'chirish va unvondan mahrum qilish"
    ],
    correctIndex: 0,
    explanation: "Mehnat kodeksining 312-moddasiga ko‘ra, intizomiy jazo choralari: 1) hayfsan; 2) jarima (o‘rtacha oylik ish haqining o‘ttiz foizidan, ichki tartib qoidalarida nazarda tutilgan hollarda 50% gacha); 3) mehnat shartnomasini bekor qilish.",
    legalBasis: "Yangi Mehnat kodeksi, 312-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'meh-8',
    topicId: 'mehnat',
    question: "Xodimga intizomiy jazo nojo‘ya xatti-harakat aniqlangan kundan boshlab ko‘pi bilan qancha muddat ichida qo‘llanilishi mumkin?",
    options: [
      "1 oy ichida",
      "3 oy ichida",
      "6 oy ichida",
      "1 yil ichida"
    ],
    correctIndex: 0,
    explanation: "Intizomiy jazo nojo‘ya xatti-harakat aniqlangan kundan e’tiboran bir oydan kechiktirmay beriladi (xodimning kasalligi yoki ta'tilda bo'lgan vaqti hisobga olinmaydi).",
    legalBasis: "Yangi Mehnat kodeksi, 313-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },

  // ===================== 5. JINOYAT HUQUQI =====================
  {
    id: 'jin-1',
    topicId: 'jinoyat',
    question: "O‘zbekiston Respublikasi Jinoyat kodeksiga binoan, umumiy jinoiy javobgarlik necha yoshdan boshlanadi?",
    options: [
      "14 yoshdan",
      "16 yoshdan",
      "18 yoshdan",
      "21 yoshdan"
    ],
    correctIndex: 1,
    explanation: "JKning 17-moddasiga binoan, jinoyat sodir etgunga qadar o‘n olti yoshga to‘lgan aqli raso jismoniy shaxslar javobgarlikka tortiladilar.",
    legalBasis: "Jinoyat kodeksi, 17-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'jin-2',
    topicId: 'jinoyat',
    question: "O‘n to‘rt yoshga to‘lgan shaxslar quyidagi qaysi jinoyat uchun javobgarlikka tortilishi mumkin?",
    options: [
      "Hokimiyatni suiiste'mol qilish",
      "Qasddan odam o‘ldirish, talonchilik, bosqinchilik",
      "Mehnatni muhofaza qilish qoidalarini buzish",
      "Soliq to'lashdan bo'yin tovlash"
    ],
    correctIndex: 1,
    explanation: "JKning 17-moddasi 2-qismiga ko‘ra, 14 yoshga to‘lgan shaxslar qasddan odam o‘ldirish (97-modda), nomusga tegish, bosqinchilik, talonchilik, o‘g‘rilik va boshqa og‘ir jinoyatlar uchun javobgar bo‘ladilar.",
    legalBasis: "Jinoyat kodeksi, 17-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'jin-3',
    topicId: 'jinoyat',
    question: "Jinoyat tarkibi nechta majburiy elementdan iborat?",
    options: [
      "2 ta (ayb va zarar)",
      "3 ta (gipoteza, dispozitsiya, sanksiya)",
      "4 ta (obyekt, obyektiv tomon, subyekt, subyektiv tomon)",
      "5 ta (shaxs, joy, vaqt, motiv, qurol)"
    ],
    correctIndex: 2,
    explanation: "Jinoyat tarkibi to'rtta elementdan iborat: 1. Jinoyat obyekti, 2. Jinoyatning obyektiv tomoni, 3. Jinoyat subyekti, 4. Jinoyatning subyektiv tomoni.",
    legalBasis: "Jinoyat huquqi nazariyasi",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'jin-4',
    topicId: 'jinoyat',
    question: "O‘zini yoki boshqa shaxslarni jamiyat va davlat manfaatlarini qonunga xilof tajovuzdan himoya qilish chog‘ida tajovuzchiga zarar yetkazish nima deb ataladi?",
    options: [
      "Oxirgi zarurat",
      "Zaruriy mudofaa",
      "Buyruqni bajarish",
      "Kasbiy tavakkalchilik"
    ],
    correctIndex: 1,
    explanation: "JKning 37-moddasiga ko‘ra, zaruriy mudofaa holatida, ya’ni tajovuzchiga zarar yetkazgan holda qonun bilan qo‘riqlanadigan manfaatlarni himoya qilish chog‘ida sodir etilgan harakat jinoyat deb topilmaydi.",
    legalBasis: "Jinoyat kodeksi, 37-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'jin-5',
    topicId: 'jinoyat',
    question: "O‘zbekiston Respublikasida jinoyat qonunchiligiga ko‘ra, o‘lim jazosi qo‘llaniladimi?",
    options: [
      "Ha, o'ta og'ir qotilliklar uchun qo'llaniladi",
      "Yo‘q, 2008-yil 1-yanvardan bekor qilingan va yangi Konstitutsiyada ham qat'iy taqiqlangan",
      "harbiy jinoyatchilarga qo'llaniladi",
      "Oliy Majlis ruxsati bilan qo'llaniladi"
    ],
    correctIndex: 1,
    explanation: "Konstitutsiyaning 25-moddasiga ko‘ra: 'O‘zbekiston Respublikasida o‘lim jazosi taqiqlanadi'. Jinoyat kodeksida ham bunday jazo turi mavjud emas.",
    legalBasis: "Konstitutsiya 25-modda, JK 43-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'jin-6',
    topicId: 'jinoyat',
    question: "Ozodlikdan mahrum qilish jazosining eng yuqori umumiy muddati necha yil qilib belgilangan (umrbod ozodlikdan mahrum qilishdan tashqari)?",
    options: [
      "15 yil",
      "20 yil",
      "25 yil",
      "30 yil"
    ],
    correctIndex: 1,
    explanation: "JKning 50-moddasiga binoan, ozodlikdan mahrum qilish olti oydan yigirma yilgacha muddatga belgilanadi (hukmlar jami bo‘yicha esa yigirma besh yilgacha tayinlanishi mumkin).",
    legalBasis: "Jinoyat kodeksi, 50-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },
  {
    id: 'jin-7',
    topicId: 'jinoyat',
    question: "Aybning qanday ikki xil shakli mavjud?",
    options: [
      "Qasd va ehtiyotsizlik",
      "To'g'ri va egri javobgarlik",
      "Moddiy va ma'naviy",
      "Faol va nofaol"
    ],
    correctIndex: 0,
    explanation: "JKning 20-moddasiga ko‘ra, qasddan (to‘g‘ri yoki egri qasd) yoki ehtiyotsizlik orqasida (o‘z-o‘ziga ishonish yoki beparvolik) sodir etilgan ijtimoiy xavfli qilmish jinoyat deb topiladi.",
    legalBasis: "Jinoyat kodeksi, 20-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'jin-8',
    topicId: 'jinoyat',
    question: "Voyaga yetmagan shaxslarga nisbatan ozodlikdan mahrum qilish jazosi ko‘pi bilan necha yil muddatga tayinlanishi mumkin?",
    options: [
      "5 yil",
      "7 yil",
      "10 yil",
      "15 yil"
    ],
    correctIndex: 2,
    explanation: "JKning 86-moddasiga ko‘ra, voyaga yetmaganlarga nisbatan ozodlikdan mahrum qilish jazosi o‘n yildan oshmagan muddatga tayinlanadi (o'ta og'ir jinoyat uchun ham 10 yildan oshmaydi).",
    legalBasis: "Jinoyat kodeksi, 86-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },

  // ===================== 6. OILA HUQUQI =====================
  {
    id: 'oila-1',
    topicId: 'oila',
    question: "O‘zbekiston Respublikasi Oila kodeksiga muvofiq nikoh yoshi qanday belgilangan?",
    options: [
      "Erkaklar uchun 18 yosh, ayollar uchun 17 yosh",
      "Erkaklar va ayollar uchun teng ravishda 18 yosh",
      "Har ikki jins uchun 17 yosh",
      "Erkaklar uchun 20 yosh, ayollar uchun 18 yosh"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 15-moddasiga muvofiq, nikoh yoshi erkaklar va ayollar uchun o‘n sakkiz yosh etib belgilangan.",
    legalBasis: "Oila kodeksi, 15-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'oila-2',
    topicId: 'oila',
    question: "Uzrli sabablar bo‘lganda, tuman (shahar) hokimi nikoh yoshini ko‘pi bilan qanchaga kamaytirishi mumkin?",
    options: [
      "6 oyga",
      "1 yilga",
      "2 yilga",
      "Umuman kamaytirish mumkin emas"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 15-moddasiga binoan, uzrli sabablar bo‘lganida (homiladorlik, bola tug'ilishi), ariza bo‘yicha tuman, shahar hokimi nikoh yoshini ko‘pi bilan bir yilga kamaytirishi mumkin.",
    legalBasis: "Oila kodeksi, 15-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'oila-3',
    topicId: 'oila',
    question: "Ota-onadan bir nafar voyaga yetmagan bola uchun sud tartibida har oylik maosh va daromadning qancha qismi aliment sifatida undiriladi?",
    options: [
      "1/4 qismi",
      "1/3 qismi",
      "1/2 qismi",
      "20 foizi"
    ],
    correctIndex: 0,
    explanation: "Oila kodeksining 99-moddasiga asosan aliment ota-onaning har oydagi ish haqi/daromadidan: bir bola uchun — to‘rtdan bir qismi (1/4); ikki bola uchun — uchdan bir qismi (1/3); uch va undan ortiq bola uchun — yarmi (1/2) miqdorida undiriladi.",
    legalBasis: "Oila kodeksi, 99-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'oila-4',
    topicId: 'oila',
    question: "Er va xotinning nikoh davomida orttirgan mol-mulki qanday mulk hisoblanadi?",
    options: [
      "kimning nomiga rasmiylashtirilgan bo'lsa, o'shaniki",
      "Er va xotinning birgalikdagi umumiy mulki",
      "Davlat va oilaning aralash mulki",
      "oila boshlig'ining shaxsiy mulki"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 23-moddasiga muvofiq, er va xotinning nikoh davomida orttirgan mol-mulki ularning birgalikdagi umumiy mulki hisoblanadi (agar nikoh shartnomasida boshqacha belgilanmagan bo'lsa).",
    legalBasis: "Oila kodeksi, 23-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2022'
  },
  {
    id: 'oila-5',
    topicId: 'oila',
    question: "Farzandlikka oluvchi bilan farzandlikka olinuvchi o‘rtasidagi yosh farqi kamida necha yosh bo‘lishi shart?",
    options: [
      "10 yosh",
      "15 yosh",
      "18 yosh",
      "20 yosh"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 152-moddasiga asosan farzandlikka oluvchi bilan olinuvchi o‘rtasidagi yosh farqi kamida o‘n besh yosh bo‘lishi shart (o‘gay ota va o‘gay ona bundan mustasno).",
    legalBasis: "Oila kodeksi, 152-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },

  // ===================== 7. MA'MURIY JAVOBGARLIK (MJtK) =====================
  {
    id: 'mam-1',
    topicId: 'mamuriy',
    question: "Ma’muriy javobgarlikka tortish yoshi qilib necha yosh belgilangan?",
    options: [
      "14 yosh",
      "16 yosh",
      "18 yosh",
      "21 yosh"
    ],
    correctIndex: 1,
    explanation: "MJtKning 13-moddasiga binoan, ma’muriy huquqbuzarlik sodir etgan paytda o‘n olti yoshga to‘lgan shaxslar ma’muriy javobgarlikka tortiladilar.",
    legalBasis: "MJtK, 13-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'mam-2',
    topicId: 'mamuriy',
    question: "Ma’muriy qamoq jazosi qancha muddatga belgilanishi mumkin?",
    options: [
      "3 kundan 10 kungacha",
      "15 sutkagacha, favqulodda holatda esa 30 sutkagacha",
      "1 oygacha",
      "6 oygacha"
    ],
    correctIndex: 1,
    explanation: "MJtKning 29-moddasiga asosan ma’muriy qamoq o‘n besh sutkagacha, favqulodda holat tartibi sharoitida esa o‘ttiz sutkagacha bo‘lgan muddatga sudya tomonidan qo‘llaniladi.",
    legalBasis: "Ma'muriy javobgarlik to'g'risidagi kodeks, 29-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'mam-3',
    topicId: 'mamuriy',
    question: "Ma’muriy huquqbuzarlik sodir etgan shaxsga nisbatan ma’muriy jazo chorasi huquqbuzarlik sodir etilgan kundan boshlab ko‘pi bilan qancha muddat ichida qo‘llanilishi mumkin?",
    options: [
      "1 oy ichida",
      "2 oy ichida",
      "1 yil ichida",
      "3 yil ichida"
    ],
    correctIndex: 2,
    explanation: "MJtKning 36-moddasiga ko‘ra, ma’muriy jazo huquqbuzarlik sodir etilgan kundan boshlab, davom etayotgan huquqbuzarlik bo‘lsa u aniqlangan kundan boshlab bir yildan kechiktirmay qo‘llanilishi mumkin.",
    legalBasis: "MJtK, 36-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2023'
  },
  {
    id: 'mam-4',
    topicId: 'mamuriy',
    question: "Kimlarga nisbatan ma’muriy qamoq jazosi qo‘llanilishi mumkin emas?",
    options: [
      "Talabalarga va o'qituvchilarga",
      "Homilador ayollarga, o‘n ikki yoshgacha bolasi bo‘lgan ayollarga, o‘n sakkiz yoshga to‘lmagan shaxslarga, birinchi va ikkinchi guruh nogironlariga",
      "Nafaqaxo'rlarga va chet el fuqarolariga",
      "Tadbirkorlarga va fermerlarga"
    ],
    correctIndex: 1,
    explanation: "MJtK 29-moddasiga ko‘ra: homilador ayollarga, o‘n ikki yoshgacha bolasi bo‘lgan ayollarga, 18 yoshga to‘lmagan shaxslarga, birinchi va ikkinchi guruh nogironligiga ega shaxslarga ma’muriy qamoq qo‘llanilishi mumkin emas.",
    legalBasis: "MJtK, 29-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  },
  {
    id: 'mam-5',
    topicId: 'mamuriy',
    question: "Huquqbuzar jarima solish to‘g‘risidagi qaror topshirilgan kundan boshlab necha kun ichida jarima miqdorining 70 foizini to‘lasa, qolgan qismidan ozod qilinadi?",
    options: [
      "5 kun",
      "10 kun",
      "15 kun",
      "30 kun"
    ],
    correctIndex: 2,
    explanation: "MJtK 332-1-moddasiga ko‘ra, huquqbuzar jarima solish to‘g‘risidagi qaror topshirilgan kundan e'tiboran o‘n besh kun ichida jarima miqdorining 70 foizini ixtiyoriy to‘lasa, qolgan qismini to‘lashdan ozod etiladi.",
    legalBasis: "MJtK, 332-1-modda",
    difficulty: 'oson',
    yearOrSource: 'DTM 2024'
  }
];

const NEW_TELEGRAM_HARD_QUESTIONS: Question[] = [
  {
    id: 'tg-hard-1',
    topicId: 'mehnat',
    question: "Quyidagilarning qaysi biri xodimga qo‘llaniladigan intizomiy jazo chorasiga kirmaydi?",
    options: [
      "hayfsan",
      "jarima",
      "ogohlantirish",
      "mehnat shartnomasini bekor qilish"
    ],
    correctIndex: 2,
    explanation: "Mehnat kodeksining 312-moddasiga ko‘ra, intizomiy jazo choralari faqat uchtadir: 1) hayfsan; 2) jarima (30-50%); 3) mehnat shartnomasini bekor qilish. Ogohlantirish intizomiy jazo chorasi hisoblanmaydi.",
    legalBasis: "Mehnat kodeksi, 312-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-2',
    topicId: 'fuqarolik',
    question: "Familiya yoki ismni o‘zgartirish haqida shaxs necha yoshga to‘lgandan so‘ng ariza berishi mumkin?",
    options: [
      "15 yosh",
      "16 yosh",
      "17 yosh",
      "18 yosh"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksi va FHDYo organlari qoidalariga ko‘ra, 16 yoshga to‘lgan shaxs familiyasi, ismi va otasining ismini o‘zgartirish to‘g‘risida mustaqil (yoki ota-ona roziligi bilan) ariza berish huquqiga ega.",
    legalBasis: "Oila kodeksi, FHDYo qoidalari",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-3',
    topicId: 'konstitutsiya',
    question: "Konstitutsiyaviy sudning sudyasi bo‘lishning eng katta yoshi necha yoshni tashkil etadi?",
    options: [
      "60 yosh",
      "65 yosh",
      "70 yosh",
      "cheklanmaydi"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaviy sud to‘g‘risidagi qonunning 16-moddasiga binoan, Konstitutsiyaviy sud sudyasi bo‘lishning eng katta (chegara) yoshi 70 yoshni tashkil etadi.",
    legalBasis: "\"Konstitutsiyaviy sud to‘g‘risida\"gi Qonun",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-4',
    topicId: 'konstitutsiya',
    question: "Oliy Majlis deputatiga va senatoriga ... ish kunidan iborat haq to‘lanadigan har yilgi mehnat ta'tili beriladi.",
    options: [
      "30",
      "36",
      "56",
      "21"
    ],
    correctIndex: 1,
    explanation: "Qonunchilikka muvofiq, Oliy Majlis Qonunchilik palatasi deputati va Senat a'zolariga (senatorga) 36 ish kunidan iborat har yilgi haq to‘lanadigan mehnat ta'tili beriladi.",
    legalBasis: "\"Deputatlar statusi to‘g‘risida\"gi Qonun",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-5',
    topicId: 'jinoyat',
    question: "Ozodlikdan mahrum qilish jinoyat sodir etish paytida o‘n olti yoshdan o‘n sakkiz yoshgacha bo‘lgan shaxslarga nisbatan og‘ir jinoyat uchun — (a) yilgacha, o‘ta og‘ir jinoyat uchun — (b) yilgacha tayinlanadi. To‘g‘ri moslashtirilgan javobni aniqlang.",
    options: [
      "a-olti yilgacha; b-o‘n yilgacha",
      "a-yetti yilgacha; b-o‘n yilgacha",
      "a-olti yilgacha; b-o‘n ikki yilgacha",
      "a-yetti yilgacha; b-o‘n ikki yilgacha"
    ],
    correctIndex: 0,
    explanation: "Jinoyat kodeksining 85-moddasiga ko‘ra, 16 yoshdan 18 yoshgacha bo‘lgan voyaga yetmaganlarga og‘ir jinoyati uchun 6 yilgacha, o‘ta og‘ir jinoyati uchun esa 10 yilgacha ozodlikdan mahrum qilish jazosi tayinlanishi mumkin.",
    legalBasis: "Jinoyat kodeksi, 85-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-6',
    topicId: 'mehnat',
    question: "Mehnat kodeksiga ko‘ra muvofiq ishlash majburiy hisoblanmaydigan (majburiy mehnat taqiqi istisnolari) holat noto‘g‘ri berilgan javobni aniqlang?",
    options: [
      "favqulodda holat sharoitlarida",
      "harbiy yoki muqobil xizmat o‘tash davrida",
      "sud hukmi kuchga kirganida",
      "sinov muddati davrida"
    ],
    correctIndex: 3,
    explanation: "Mehnat kodeksining 6-moddasiga ko‘ra, harbiy xizmat, favqulodda holat va sud hukmi bo‘yicha bajariladigan ishlar majburiy mehnat deb hisoblanmaydi (istisnolar). Ammo sinov muddati davridagi ish oddiy ixtiyoriy mehnat munosabati bo‘lib, ushbu istisnolarga kirmaydi.",
    legalBasis: "Mehnat kodeksi, 6-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-7',
    topicId: 'konstitutsiya',
    question: "Quyidagi qaysi saylov jarayonida \"Sanoq Komissiyasi\" tuziladi? (Saylov kodeksi 10.03.2025 yilgi holatga ko'ra)",
    options: [
      "Oliy Majlis Qonunchilik palatasi saylovida",
      "Oliy Majlis Senati saylovida",
      "O'zbekiston Respublikasi Prezidenti saylovida",
      "Mahalliy davlat xalq deputatlari saylovida"
    ],
    correctIndex: 1,
    explanation: "Saylov kodeksiga muvofiq, Oliy Majlis Senati a'zolarini saylash jarayonida ovozlarni hisoblash uchun Sanoq komissiyasi tuziladi.",
    legalBasis: "Saylov kodeksi",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-8',
    topicId: 'fuqarolik',
    question: "Quyidagi qaysi shartnomaga muvofiq har bir taraf boshqa tarafga bir tovarni boshqa tovarga almashtirish yo‘li bilan mulk qilib topshirish majburiyatini oladi?",
    options: [
      "Oldi-sotdi",
      "Ayirboshlash",
      "Hadya",
      "Topshirish"
    ],
    correctIndex: 1,
    explanation: "Fuqarolik kodeksining 497-moddasiga binoan, ayirboshlash shartnomasiga muvofiq har bir taraf boshqa tarafga bir tovarni boshqa tovarga almashtirish yo‘li bilan mulk qilib topshirish majburiyatini oladi.",
    legalBasis: "Fuqarolik kodeksi, 497-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-9',
    topicId: 'fuqarolik',
    question: "Kredit shartnomasiga oid quyidagi mulohazalardan to‘g‘ri javobni aniqlang.",
    options: [
      "Kredit shartnomasi og'zaki va yozma tuziladi",
      "Yozma tarzda tuzilgan kredit shartnomasi o'z-o'zidan haqiqiy emas",
      "Bir tomon kreditor ikkinchi tomon qarz oluvchi hisoblanadi",
      "Kredit shartnomasi konsensual bitim"
    ],
    correctIndex: 2,
    explanation: "Fuqarolik kodeksining 744-moddasiga ko‘ra, kredit shartnomasi bo‘yicha bir taraf — bank yoki boshqa kredit tashkiloti (kreditor) ikkinchi tarafga (qarz oluvchiga) kredit berish majburiyatini oladi.",
    legalBasis: "Fuqarolik kodeksi, 744-modda",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-10',
    topicId: 'konstitutsiya',
    question: "Bosh prokuror qaysi sudning majlislarida ishtirok etishi mumkin, uning ko‘rib chiqishi uchun masalalar kiritishi va ko‘rilayotgan masala yuzasidan fikr bildirishi mumkin?",
    options: [
      "Oliy sud Plenumi",
      "Konstitutsiyaviy sud",
      "Harbiy sud",
      "Jinoyat sudi"
    ],
    correctIndex: 1,
    explanation: "\"Konstitutsiyaviy sud to‘g‘risida\"gi Qonunning 29-moddasiga ko‘ra, Bosh prokuror Konstitutsiyaviy sud majlislarida ishtirok etishi, ko‘rib chiqish uchun masalalar kiritishi va ko‘rilayotgan masala yuzasidan fikr bildirishi mumkin.",
    legalBasis: "\"Konstitutsiyaviy sud to‘g‘risida\"gi Qonun",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-11',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Bosh prokurori O‘zbekiston Respublikasi Prezidentiga har 6 oyda nima to‘g‘risida axborot taqdim etadi?",
    options: [
      "Qonuniylik va jinoyatchilikka qarshi kurashning holati to‘g‘risida",
      "O‘ta og‘ir jinoyatlar va favqulodda hodisalar to‘g‘risida",
      "Prokuratura organlari amalga oshirgan ishlar to‘g‘risida",
      "Bosh prokuror o‘z faoliyati to‘g‘risida"
    ],
    correctIndex: 2,
    explanation: "Qonunchilikka binoan, Bosh prokuror Prezidentga har 6 oyda prokuratura organlari amalga oshirgan ishlar to‘g‘risida axborot taqdim etadi.",
    legalBasis: "\"Prokuratura to‘g‘risida\"gi Qonun",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  },
  {
    id: 'tg-hard-12',
    topicId: 'mamuriy',
    question: "O‘zbekiston Respublikasi Bosh prokuraturasi huzuridagi Majburiy ijro byurosini (MIB) kim boshqaradi?",
    options: [
      "Rais",
      "Direktori",
      "Boshliq",
      "Rahbar"
    ],
    correctIndex: 1,
    explanation: "Prezident Farmoni va MIB Nizomiga ko‘ra, Majburiy ijro byurosiga O‘zbekiston Respublikasi Bosh prokurorining taqdimnomasiga binoan Prezident tomonidan tayinlanadigan Direktor boshchilik qiladi.",
    legalBasis: "MIB to‘g‘risidagi Nizom",
    difficulty: 'qiyin',
    yearOrSource: 'Telegram Quiz 2026'
  }
];

const RAW_QUESTIONS: Question[] = [
  ...NEW_TELEGRAM_HARD_QUESTIONS,
  ...KONSTITUTSIYA_200_QUESTIONS,
  ...BASE_QUESTIONS,
  ...USER_QUESTIONS_PART1,
  ...USER_QUESTIONS_PART2,
  ...DARSLIK_10_QUESTIONS,
  ...DARSLIK_8_QUESTIONS,
  ...DARSLIK_9_QUESTIONS,
  ...DARSLIK_11_QUESTIONS,
  ...EDULAW_QIYIN_QUESTIONS,
  ...BLOCK_QIYIN_QUESTIONS,
  ...OLIMPIADA_2025_QUESTIONS,
  ...MENTOR_QIYIN_QUESTIONS,
  ...DARSLIK_11_UMUMIY_QIYIN_QUESTIONS,
  ...BMBA_HUQUQ_VODIYSI_QUESTIONS,
  ...BMBA_23_DEC_QUESTIONS,
  ...HUQUQOLOGIYA_QIYIN_QUESTIONS,
  ...EDULAW_JAVOHIR_QUESTIONS,
  ...BMBA_LEGALDOCTOR_QUESTIONS,
  ...MILLIY_SERTIFIKAT_2_VARIANT
];

const VALID_TOPIC_IDS = new Set([
  'konstitutsiya',
  'davlat_huquq',
  'fuqarolik',
  'mehnat',
  'jinoyat',
  'oila',
  'mamuriy'
]);

function normalizeQuestionTopic(q: Question): string {
  if (VALID_TOPIC_IDS.has(q.topicId)) {
    return q.topicId;
  }
  const text = `${q.question} ${q.legalBasis || ''} ${q.explanation || ''}`.toLowerCase();
  
  if (text.includes('mehnat') || text.includes('ish vaqti') || text.includes('ish beruvchi') || text.includes('ishbay')) {
    return 'mehnat';
  }
  if (text.includes('jinoyat') || text.includes('jinoiy') || text.includes('sudlanganlik')) {
    return 'jinoyat';
  }
  if (text.includes('oila') || text.includes('nikoh') || text.includes('aliment') || text.includes('er-xotin')) {
    return 'oila';
  }
  if (text.includes("ma'muriy") || text.includes("ma’muriy") || text.includes('mamuriy') || text.includes('jarima') || text.includes('mjtk')) {
    return 'mamuriy';
  }
  if (text.includes('fuqarolik huquqi') || text.includes('bitim') || text.includes('mulk huquqi') || text.includes('meros')) {
    return 'fuqarolik';
  }
  if (text.includes('konstitutsiya') || text.includes('prezident') || text.includes('oliy majlis') || text.includes('senat') || text.includes('qonunchilik palatasi') || text.includes('konstitutsiyaviy')) {
    return 'konstitutsiya';
  }
  return 'davlat_huquq';
}

// ID bo'yicha takrorlanishlarni tozalash, qiyinlikni faqat 'oson' va 'qiyin' ga standartlashtirish
// hamda barcha savollarni bosh sahifadagi 7 ta asosiy bloklarga to'liq taqsimlash:
const seenQuestionIds = new Set<string>();
export const QUESTIONS: Question[] = [];
for (const raw of RAW_QUESTIONS) {
  if (!seenQuestionIds.has(raw.id)) {
    seenQuestionIds.add(raw.id);
    const normalized: Question = {
      ...raw,
      topicId: normalizeQuestionTopic(raw),
      difficulty: raw.difficulty === 'qiyin' ? 'qiyin' : 'oson'
    };
    QUESTIONS.push(normalized);
  }
}


