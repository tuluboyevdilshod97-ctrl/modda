import { Question } from '../types';

/**
 * MILLIY SERTIFIKAT HUQUQSHUNOSLIK — 2-VARIANT (YANGI RASMIY TO‘PLAM)
 * Huquqshunoslik fanidan milliy sertifikat namunasida tuzilgan 45 ta test topshiriqlari:
 * - 1–35: Yopiq va muvofiqlashtirish testlari (A, B, C, D)
 * - 36–45: Ochiq / yozma savollar (a va b bandli yozma topshiriqlar)
 */
export const MILLIY_SERTIFIKAT_2_VARIANT: Question[] = [
  // ==========================================
  // 1-35. YOPIQ VA MOSLASHTIRISH TESTLARI
  // ==========================================
  {
    id: 'ms2-q1',
    topicId: 'davlat_huquq',
    question: "Quyidagi fikrlardan to‘g‘risini aniqlang.",
    options: [
      "Davlat suvereniteti oliy hokimiyat xalqqa tegishli ekanligini anglatadi",
      "Davlat hokimiyati xalq erki-irodasining mahsuli bo‘lib, bunday hokimiyatni amalga oshiruvchilar xalq tomonidan tayinlanadi",
      "Konstitutsiyaviy davlat, eng avvalo, huquq bilan uzviy bog‘liqlikdir",
      "Xalq suvereniteti mustaqil hokimiyat, ya’ni mamlakatning ichki va tashqi siyosatini xalq nomidan davlat amalga oshirishini anglatadi"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaviy davlatning tub mohiyati uning eng avvalo huquq ustuvorligi va qonun bilan uzviy bog'liqligida namoyon bo'ladi.",
    legalBasis: "Davlat va huquq nazariyasi, Konstitutsiyaviy davlat asoslari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q2',
    topicId: 'oila',
    question: "Quyidagi fikrlardan to‘g‘ri mulohazani aniqlang.\n1) Fuqarolarning O‘zbekiston Respublikasi oila qonunlarida nazarda tutilgan huquqlari, erkinliklari va majburiyatlari tarkibiga: ota-onalar va bolalar, er-xotin, sobiq er-xotin, qarindoshlar va boshqa shaxslarning aliment majburiyatlari kiradi;\n2) oilaviy huquqiy munosabatlar asosini mulkiy munosabatlar tashkil etadi;\n3) oila to‘g‘risidagi qonun hujjatlari ota-ona qaramog‘idan mahrum bo‘lgan bolalarni oilaga olish shakl va qoidalarini, fuqarolik holati dalolatnomalarini qayd etish tartibini belgilaydi;\n4) Ota-onalik huquqidan mahrum etish instituti oilaviy huquqiy munosabatlarda alohida o‘rin tutadi.",
    options: [
      "1, 2, 3, 4",
      "1, 3, 4",
      "2, 3, 4",
      "2, 4"
    ],
    correctIndex: 1,
    explanation: "1, 3 va 4-mulohazalar to'g'ri. 2-mulohaza noto'g'ri, chunki oilaviy huquqiy munosabatlar asosini mulkiy emas, balki shaxsiy nomulkiy munosabatlar tashkil etadi.",
    legalBasis: "O‘zbekiston Respublikasi Oila kodeksi, 1-5-moddalar",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q3',
    topicId: 'davlat_huquq',
    question: "Huquqiy sohaga mansub atamalarni izohi bilan birga to‘g‘ri moslashtiring.\n1. Kredit mexanizmi\n2. Davlat qarzi\n3. Markazlashmagan fondlar\n4. G‘arazgo‘ylik\n\na) Mamlakatning ichki va tashqi mablag‘larini jalb qilish natijasida vujudga keladigan majburiyatlar;\nb) Korxona va tashkilotlar pul fondlari bo‘lib, ular ishlab chiqarish va boshqa ijtimoiy maqsadlarga ishlatiladi;\nc) Pul yoki tovarlarni foizlar to‘lab qaytarish sharti bilan berish;\nd) O‘zi uchun yoki boshqa shaxslar uchun moddiy manfaat undirish;\ne) Kredit munosabatlarini tashkil qilishda qo‘llaniladigan elementlar majmuasidir;\nf) Respublika, viloyat fondlari.",
    options: [
      "1-e, 2-a, 3-f, 4-d",
      "1-c, 2-a, 3-b, 4-d",
      "1-e, 2-a, 3-b, 4-d",
      "1-c, 2-f, 3-a, 4-b"
    ],
    correctIndex: 2,
    explanation: "1-e: Kredit mexanizmi — kredit munosabatlarini tashkil etish elementlari majmuasi; 2-a: Davlat qarzi — ichki va tashqi mablag'larni jalb qilish majburiyatlari; 3-b: Markazlashmagan fondlar — korxona va tashkilotlar pul fondlari; 4-d: G'arazgo'ylik — o'zi yoki boshqalar uchun moddiy manfaat undirish.",
    legalBasis: "Moliya huquqi va Jinoyat huquqi atamalari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q4',
    topicId: 'davlat_huquq',
    question: "Davlat moliyaviy munosabatlar va faoliyatini huquqiy tartibga solishning asoslari Konstitutsiyaning «Moliya, pul va kredit» bobida mustahkamlangan. O‘zbekiston Respublikasi moliya tizimi quyidagi qaysi bo‘g‘inlardan tarkib topgan?\n1) byudjet sohasidagi faoliyat; 2) majburiy sug'urta; 3) kredit (davlat krediti va bank krediti); 4) mulkni sug‘urta qilish va shaxsiy sug‘urta; 5) byudjetdan tashqari jamg'armalar; 6) korxonalarning moliyaviy faoliyati; 7) davlat byudjeti (respublika, Qoraqalpog'iston va mahalliy byudjetlar); 8) davlat maqsadli jamg‘armalari va byudjetdan tashqari jamg‘armalar; 9) xo‘jalik yurituvchi subyektlar va iqtisodiyot tarmoqlari moliyasi; 10) soliq sohasidagi faoliyat.",
    options: [
      "1, 2, 6, 10",
      "3, 4, 5, 6, 9, 10",
      "1, 2, 5, 8, 9",
      "3, 4, 7, 8, 9"
    ],
    correctIndex: 3,
    explanation: "O'zbekiston Respublikasi moliya tizimi bo'g'inlari tarkibiga: 3) kredit, 4) sug'urta tizimi, 7) davlat byudjeti, 8) davlat maqsadli va byudjetdan tashqari jamg'armalari hamda 9) xo'jalik yurituvchi subyektlar moliyasi kiradi.",
    legalBasis: "Moliya huquqi, O‘zR Moliya tizimi tuzilishi",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q5',
    topicId: 'davlat_huquq',
    question: "“Pora o‘nglanib ketgan ishlarni buzadi, bitayotgan ishlarni barbod qiladi”. Ushbu hikmatli fikr muallifini aniqlang.",
    options: [
      "Yusuf Xos Hojib",
      "Mahmud Zamaxshariy",
      "Luqmoni Hakim",
      "Aflotun"
    ],
    correctIndex: 0,
    explanation: "Ushbu mashhur hikmat «Qutadg‘u bilig» asari muallifi Yusuf Xos Hojib tomonidan aytilgan.",
    legalBasis: "Yusuf Xos Hojib, «Qutadg‘u bilig»",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q6',
    topicId: 'davlat_huquq',
    question: "Soliq huquqi munosabatlari quyidagi qaysi xususiyatlarga ega?\n1) soliqlarni va boshqa majburiy to‘lovlarni o‘rnatish va undirishga qaratilgan davlat faoliyati jarayonida yuzaga keladi;\n2) tadbirkorlik faoliyatining ayrim turlari bo‘yicha qat’iy belgilangan soliq;\n3) ma’lum bir subyektlar o‘rtasida bo‘ladigan aniq aloqalarni tartibga soladi;\n4) davlat maqsadli jamg‘armalariga majburiy ajratmalar;\n5) maqsadli tizimga ega, ya’ni soliq sohasidagi huquqiy munosabatlarning tizimi ma’lum bir maqsadga – soliqlarni o‘rnatish va undirishga qaratilgan;\n6) yer qa’ridan foydalanuvchilar uchun soliqlar va maxsus to‘lovlar;\n7) davlatning majburlov kuchi bilan himoya qilinadi, ya’ni soliq qonunlari buzilganda davlatning majburlov choralari harakatga keladi;\n8) Pensiya jamg‘armasiga fuqarolarning sug‘urta badallari.",
    options: [
      "1, 3, 5, 8",
      "2, 4, 6, 8",
      "1, 3, 5, 7",
      "2, 3, 6, 8"
    ],
    correctIndex: 2,
    explanation: "Soliq huquqiy munosabatlarining xususiyatlari: 1) davlatning soliq faoliyatida yuzaga kelishi, 3) aniq subyektlar aloqalarini tartibga solishi, 5) maqsadli tizimga egaligi hamda 7) davlat majburlov kuchi bilan ta'minlanishi.",
    legalBasis: "Soliq huquqi nazariyasi",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q7',
    topicId: 'mehnat',
    question: "Konstitutsiyada har kim munosib mehnat qilish, qulay mehnat sharoitlarida ishlash, adolatli haq olish huquqiga ega ekani belgilangan. Mazkur huquq buzilishi natijasida yuz berishi mumkin bo‘lgan jinoyatning subyektiv tomoni to‘g‘ri berilgan javobni aniqlang.\n1) texnika xavfsizligi;\n2) sanoat sanitariyasi;\n3) qasd;\n4) mehnatni muhofaza qiluvchi boshqa qoidalarning buzilishi;\n5) ehtiyotsizlik;\n6) korxonalarda ishlayotgan shaxslarning mehnat sharoitlarini tartibga soluvchi ijtimoiy munosabatlar.",
    options: [
      "1, 2, 4, 6",
      "1, 2",
      "3, 5",
      "4, 6"
    ],
    correctIndex: 2,
    explanation: "Jinoyatning subyektiv tomoni ayb shakllarini o'z ichiga oladi, bu esa faqat qasd (3) va ehtiyotsizlik (5) dir.",
    legalBasis: "Jinoyat huquqi, Jinoyatning subyektiv tomoni",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q8',
    topicId: 'jinoyat',
    question: "Quyidagi qaysi jinoyat turining belgisi berilgan?\n«Mulkka qarshi g‘arazli jinoyatlardan biri hisoblanadi. Ijtimoiy xavflilik xususiyati uning nafaqat mulkchilikka, balki mulkchilik manfaatlarining mustaqil shakli sifatida namoyon bo‘luvchi boshqa (majburiyat yuklovchi, meros bo‘lib o‘tuvchi, uy-joy kabi) mulkiy munosabatlarga ham tajovuz qilishidan iborat».",
    options: [
      "Bosqinchilik",
      "Tovlamachilik",
      "Talonchilik",
      "Soxta tadbirkorlik"
    ],
    correctIndex: 1,
    explanation: "Tovlamachilik (JK 165-modda) nafaqat mulkni, balki mulkiy huquqlar yoki mulkiy xarakterdagi boshqa harakatlarni sodir etishni talab qilish bilan ifodalanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 165-modda",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q9',
    topicId: 'jinoyat',
    question: "Ta’rifga mos tushuvchi javobni aniqlang:\n«Ijtimoiy xavfli qilmishning yuz berganmi yoki yo‘qligini, shu qilmishni sodir etgan shaxsning aybli-aybsizligini va ishni to‘g‘ri hal qilish uchun ahamiyatga molik boshqa holatlarni surishtiruvchining, tergovchining va sudning qonunda belgilangan tartibda aniqlashiga asos bo‘ladigan har qanday haqiqiy ma’lumotlar».",
    options: [
      "jinoiy oqibat",
      "jinoyat",
      "dalil",
      "tergov jarayoni"
    ],
    correctIndex: 2,
    explanation: "JPK 81-moddasiga ko'ra, ish uchun ahamiyatga molik holatlarni qonunda belgilangan tartibda aniqlashga asos bo'ladigan har qanday haqiqiy ma'lumotlar dalil hisoblanadi.",
    legalBasis: "Jinoyat-protsessual kodeksi, 81-modda",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q10',
    topicId: 'davlat_huquq',
    question: "Nuqtalar o‘rniga to‘g‘ri javobni qo‘ying:\n«… davlat hokimiyati organlari funksiyalarini ta’minlash maqsadida pul mablag‘larini tashkil etish va xarajat qilish shaklidir».",
    options: [
      "Moliya",
      "Byudjet",
      "Daromad",
      "Pul"
    ],
    correctIndex: 1,
    explanation: "Byudjet — davlat hokimiyati organlari vazifa va funksiyalarini ta'minlash uchun mo'ljallangan pul mablag'lari jamg'armasini tashkil etish va sarflash shaklidir.",
    legalBasis: "O‘zR Byudjet kodeksi, 4-modda",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q11',
    topicId: 'davlat_huquq',
    question: "O‘zbekiston Respublikasining byudjet tizimi quyidagi qaysi prinsiplarga asoslanadi?\n1) byudjet tizimining yagonaligi;\n2) milliy daromadni qayta taqsimlash;\n3) byudjet tizimining ma’muriy-hududiy tuzilishga muvofiqligi;\n4) byudjetlarning balansliligi va o‘zaro bog‘liqligi;\n5) iqtisodiyotni tartibga solish;\n6) ochiqlik;\n7) davlat aktivlarini sotish;\n8) byudjet jarayoni ishtirokchilarining javobgarligi;\n9) kassaning yagonaligi;\n10) meros pul mablag'lari;\n11) byudjetlarning mustaqilligi;\n12) pul o'tkazish hujjatlari;\n13) mablag‘lardan foydalanishning aniq yo‘naltirilganligi va maqsadlilik xususiyati;\n14) daromadlarni prognoz qilish va xarajatlarni rejalashtirish.",
    options: [
      "1, 3, 4, 6, 7, 8, 9, 11, 13, 14",
      "2, 4, 7, 10, 12, 14",
      "1, 3, 4, 6, 8, 9, 11, 13, 14",
      "1, 3, 4, 5, 8, 9, 11, 12, 13, 14"
    ],
    correctIndex: 2,
    explanation: "Byudjet tizimi prinsiplariga: yagonalik (1), hududiy tuzilishga muvofiqlik (3), balanslilik (4), ochiqlik (6), javobgarlik (8), kassa yagonaligi (9), mustaqillik (11), maqsadlilik (13) va rejalashtirish (14) kiradi.",
    legalBasis: "O‘zR Byudjet kodeksi, Byudjet tizimi prinsiplari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q12',
    topicId: 'davlat_huquq',
    question: "Fikr muallifini toping:\n«Yaxshi ishlarning yana bir afzalligi shundaki, u qalbni yuksaltiradi va uni yanada ezgu ishlarga moyil qiladi».",
    options: [
      "Aflotun",
      "Jan Jak Russo",
      "Adam Smit",
      "Abdurauf Fitrat"
    ],
    correctIndex: 1,
    explanation: "Ezgu amallar va inson qalbi yuksakligi haqidagi mazkur ibratli fikr fransuz faylasufi Jan Jak Russo qalamiga mansub.",
    legalBasis: "Falsafiy va axloqiy meros, Jan Jak Russo",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q13',
    topicId: 'jinoyat',
    question: "Shaxsning ozodligi, sha’ni va qadr-qimmatiga qarshi jinoyatlar qaysi javobda to‘g‘ri berilgan?\n1) odam savdosi;\n2) odam o‘ldirish;\n3) tuhmat;\n4) mehnat qilish huquqini buzish;\n5) o‘g‘irlik;\n6) haqorat qilish;\n7) saylov qonunchiligini buzish.",
    options: [
      "1, 3, 5, 6",
      "1, 2, 3, 6",
      "1, 3, 6",
      "1, 3, 4"
    ],
    correctIndex: 2,
    explanation: "JK Maxsus qismi II bobi: Odam savdosi (135-modda), Tuhmat (139-modda) va Haqorat qilish (140-modda) bevosita shaxsning ozodligi, sha'ni va qadr-qimmatiga qarshi jinoyatlardir.",
    legalBasis: "O‘zR Jinoyat kodeksi, Maxsus qism II bob",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q14',
    topicId: 'oila',
    question: "Normativning manbasini ko‘rsating:\n«Qimmatbaho buyumlar va zebu-ziynatlardan boshqa shaxsiy foydalanishdagi buyumlar (kiyim-bosh, poyabzal va boshqa shu kabilar), garchi nikoh davomida er va xotinning umumiy mablag‘i hisobiga olingan bo‘lsa ham, ulardan foydalanib kelgan er va xotinning xususiy mulki hisoblanadi».",
    options: [
      "O‘zbekiston Respublikasining Oila kodeksi, 26-modda",
      "O‘zbekiston Respublikasining Oila kodeksi, 10-modda",
      "O‘zbekiston Respublikasining Oila kodeksi, 73-modda",
      "O‘zbekiston Respublikasining Oila kodeksi, 51-modda"
    ],
    correctIndex: 0,
    explanation: "Oila kodeksining 26-moddasi «Er va xotinning har birining mulki» deb nomlanib, shaxsiy foydalanishdagi buyumlar ulardan foydalangan er yoki xotinning shaxsiy mulki deb belgilangan.",
    legalBasis: "O‘zR Oila kodeksi, 26-modda",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q15',
    topicId: 'oila',
    question: "Er-xotinning mulkiy huquq va majburiyatlari haqida berilgan fikrlardan to‘g‘risini aniqlang:\n1) Er va xotinning umumiy daromadlari hisobiga olingan ashyolar kimning nomiga rasmiylashtirilganidan qat’i nazar, ularning umumiy mol-mulki hisoblanadi;\n2) Bolalar nomiga qo‘yilgan omonatlar kompensatsiyasiz er yoki xotinga beriladi;\n3) Er va xotin nikoh shartnomasiga ko‘ra birgalikdagi umumiy mulk rejimini o‘zgartirishga haqlidir;\n4) Nikoh shartnomasida qayd qilinmagan mulklarga nisbatan umumiy birgalikdagi mulk rejimi saqlanib qoladi;\n5) Nikoh shartnomasida nazarda tutilgan huquq va majburiyatlar muayyan muddat bilan cheklanishi yoki shart-sharoitga bog'liq bo'lishi mumkin;\n6) Nikoh shartnomasidan bir tomonlama bosh tortish mumkin.",
    options: [
      "1, 3, 4, 6",
      "2, 4, 5",
      "1, 3, 4, 5",
      "1, 2, 5, 6"
    ],
    correctIndex: 2,
    explanation: "1, 3, 4 va 5-qoidalar Oila kodeksiga muvofiq to'g'ri. 2-qoida noto'g'ri (omonat bolaga tegishli bo'lib, bo'linmaydi) va 6-qoida noto'g'ri (shartnomani bir tomonlama bekor qilish taqiqlanadi).",
    legalBasis: "O‘zR Oila kodeksi, 23, 29, 30, 31-moddalar",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q16',
    topicId: 'jinoyat',
    question: "Pora bilan bog‘liq harakatlarni to‘g‘ri kvalifikatsiyasiga moslang:\n1) Yolg‘on vositachi bo'lib, mansabdorga berishni ro‘kach qilib, aldab pulni o‘zlashtirgan shaxs... \n2) Aldab o‘zlashtirgan soxta vositachiga pora bergan shaxsning harakati... \n3) Harakat yoki harakatsizlikka erishish uchun pora taklif etgan shaxs... \n4) Pora evaziga ma’lum harakatlarni bajarishga kelishgan va porani topshirgan shaxslar....\n\na) pora berishga suiqasd sifatida kvalifikatsiya qilinadi;\nb) firibgarlik uchun javobgarlikka tortiladi;\nc) pora berishda ishtirokchilar sifatida javobgarlikka tortiladi;\nd) pora beruvchi sifatida javobgarlikka tortiladi.",
    options: [
      "1-b, 2-a, 3-d, 4-c",
      "1-b, 2-d, 3-a, 4-c",
      "1-b, 2-a, 3-c, 4-d",
      "1-a, 2-b, 3-c, 4-d"
    ],
    correctIndex: 0,
    explanation: "1-b: Soxta vositachi firibgarlik (168-m) uchun; 2-a: Unga bergan shaxs pora berishga suiqasd (25, 211-m) uchun; 3-d: Pora taklif etgan shaxs pora beruvchi (211-m) sifatida; 4-c: Kelishgan va topshirganlar ishtirokchi sifatida kvalifikatsiya qilinadi.",
    legalBasis: "Oliy sud Plenumi Qarori, Pora olish va berish ishlari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q17',
    topicId: 'jinoyat',
    question: "O‘zbekiston Respublikasining amaldagi Jinoyat kodeksi qaysi yilda qabul qilingan?",
    options: [
      "1995-yil",
      "1994-yil",
      "1997-yil",
      "1993-yil"
    ],
    correctIndex: 1,
    explanation: "O'zbekiston Respublikasi Jinoyat kodeksi 1994-yil 22-sentabrda qabul qilingan va 1995-yil 1-apreldan kuchga kirgan.",
    legalBasis: "O‘zbekiston Respublikasi Jinoyat kodeksi",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q18',
    topicId: 'jinoyat',
    question: "Quyidagilardan qaysilari jinoyat sodir etish natijasida yuzaga keladigan qilmishlar istisno qiluvchi holatlar deb topilmaydi?\n1) kam ahamiyatli qilmish;\n2) zaruriy mudofaa;\n3) buyruq yoki boshqacha tarzdagi vazifani bajarish;\n4) jismoniy majburlash;\n5) ruhiy majburlash yoxud qo‘rqitish natijasida sodir etilgan qilmish;\n6) sir saqlanishi zarur bo‘lgan axborotlarni ehtiyotsizlik oqibatida tarqatish.",
    options: [
      "1, 2, 3, 4",
      "1, 2, 3, 5",
      "2, 3, 5, 6",
      "1, 2, 3, 6"
    ],
    correctIndex: 1,
    explanation: "Rasmiy test kalitiga ko'ra (18. B: 1, 2, 3, 5), ushbu savolda qilmishning jinoiyligini istisno qiluvchi holatlar va boshqa asoslar qiyoslangan.",
    legalBasis: "O‘zR Jinoyat kodeksi, IV bob",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q19',
    topicId: 'jinoyat',
    question: "O‘zbekiston Respublikasining konstitutsiyaviy tuzumiga tajovuz qilish jinoyatida, hokimiyat konstitutsiyaviy organlarining qonuniy faoliyatiga to‘sqinlik qilish yoki ularni Konstitutsiyada nazarda tutilmagan parallel hokimiyat tuzilmalari bilan almashtirishga qaratilgan zo‘ravonlik harakatlari qanday jazolanadi?\n1) BHMning ikki yuz baravaridan olti yuz baravarigacha jarima;\n2) BHMning olti yuz baravarigacha jarima;\n3) ikki yildan besh yilgacha ozodlikni cheklash;\n4) uch yildan besh yilgacha ozodlikni cheklash;\n5) besh yilgacha ozodlikdan mahrum qilish;\n6) uch yildan besh yilgacha ozodlikdan mahrum qilish.",
    options: [
      "2, 3, 5",
      "1, 3, 4",
      "2, 3, 4",
      "1, 4, 6"
    ],
    correctIndex: 3,
    explanation: "JK 159-moddasi 2-qismiga binoan: BHMning 200 baravaridan 600 baravarigacha jarima (1) yoki 3 yildan 5 yilgacha ozodlikni cheklash (4) yoxud 3 yildan 5 yilgacha ozodlikdan mahrum qilish (6) bilan jazolanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 159-modda 2-qism",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q20',
    topicId: 'davlat_huquq',
    question: "Quyidagi jadvalda berilgan huquqiy normalarning o‘zaro muvofiqligi saqlangan to‘g‘ri qatorlarni aniqlang:\n1. Soxta tadbirkorlik — Xo'jalik yurituvchining nohaq deklaratsiyasi bilan bog'liq ta'rif;\n2. Talonchilik — Jinoyatchi mulkka ochiqdan-ochiq, axloqiy va jamiyat qadriyatlarini mensimaslik bilan tajovuz qiladi;\n3. Markazlashgan daromadlar — Korxonalarning mustaqil daromadlari;\n4. Kredit mexanizmi — Kredit munosabatlarini tashkil qilishda qo‘llaniladigan elementlar majmuasidir;\n5. Yordamchi — Jinoyat sodir etishga qiziqtiruvchi shaxs;\n6. Nikoh shartnomasi — Er va xotin mulkining shartnomaviy rejimi hisoblanadi.",
    options: [
      "1, 3, 5",
      "2, 4, 6",
      "1, 4, 6",
      "2, 3, 5"
    ],
    correctIndex: 1,
    explanation: "2 (Talonchilik ta'rifi), 4 (Kredit mexanizmi ta'rifi) va 6 (Nikoh shartnomasi rejimi) bandlaridagi huquqiy sharhlar o'zaro to'liq muvofiqdir.",
    legalBasis: "Jinoyat, Moliya va Oila huquqi asoslari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q21',
    topicId: 'davlat_huquq',
    question: "Quyidagi jadvalni huquq sohasi, vazifasi va unga oid tushunchalar bo‘yicha to‘g‘ri moslashtirilgan qatorlarini toping:\n1. Moliya huquqi — O‘zR qonunchiligining mustaqil tarmog‘i — foyda;\n2. Ekologiya huquqi — atrof muhitni muhofaza qilish, aholi ekologik xavfsizligini ta’minlash — tabiat bilan jamiyat o‘rtasidagi munosabatlar;\n3. Oila huquqi — oilaning jamiyatdagi mavqeyini mustahkamlash — Nikoh shartnomasi;\n4. Jinoyat huquqi — atrof muhit holati haqida axborot berish — tilxat.",
    options: [
      "1, 3, 4",
      "2, 3, 4",
      "1, 2, 4",
      "1, 2, 3"
    ],
    correctIndex: 3,
    explanation: "1 (Moliya huquqi), 2 (Ekologiya huquqi) va 3 (Oila huquqi) mosligi to'g'ri berilgan. 4-qatorda esa ekologik axborot jinoyat huquqining asosiy vazifasi emas.",
    legalBasis: "Huquq sohalari va institutlari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q22',
    topicId: 'jinoyat',
    question: "Tahlil qilgan holda, Eyler-Venn diagrammasini to‘ldiring (JK 159-modda va 127-modda):\nI (159-modda: Konstitutsiyaviy tuzumga tajovuz);\nII (127-modda: Voyaga yetmagan shaxsni g'ayriijtimoiy xatti-harakatlarga jalb qilish);\nIII (Umumiy xususiyat).\n\na) Fitna to‘g‘risida xabar bergan shaxs jazodan ozod qilinishi;\nb) Fitna uyushtirish — 10 yildan 20 yilgacha ozodlikdan mahrum qilish;\nc) o‘quv yurtlarida sodir etilishi — 5 yildan 10 yilgacha ozodlikdan mahrum qilish;\nd) ikki yoki undan ortiq voyaga yetmagan shaxsga nisbatan;\ne) O‘zbekiston Respublikasida berilgan kodekslar to‘plami;\nf) O‘zbekiston Respublikasining Jinoyat kodeksi moddalari.",
    options: [
      "I-b,a II-d, III-f",
      "I-a,b II-c, III-e",
      "I-b, II-c,a III-f",
      "I-a,c II-b, III-e"
    ],
    correctIndex: 0,
    explanation: "159-moddaga: b va a (rag'batlantiruvchi norma); 127-moddaga: d (og'irlashtiruvchi belgi); III (kesishma): f — ikkalasi ham Jinoyat kodeksi moddalaridir.",
    legalBasis: "O‘zR Jinoyat kodeksi, 127 va 159-moddalar",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q23',
    topicId: 'davlat_huquq',
    question: "Quyidagi ta’riflar qaysi atamaga tegishli ekanligini to‘g‘ri moslang:\nI. Byudjet huquqi\nII. Individual subyektlar\nIII. Xalqaro shartnoma\n\na) Xalqaro shartnomalarda byudjet qonun hujjatlariga zid qoidalar belgilangan bo‘lsa, shartnoma qoidalari qo‘llaniladi;\nb) O‘zR fuqarolari, chet el fuqarolari va fuqaroligi bo‘lmagan shaxslar bo‘lib, ular teng moliyaviy-huquqiy subyektlikka ega;\nc) davlat byudjeti mablag‘larini tashkil etish, taqsimlash va ulardan foydalanish ijtimoiy munosabatlarini tartibga soluvchi normalar majmuyi.",
    options: [
      "I-b, II-a, III-c",
      "I-b, II-c, III-a",
      "I-c, II-b, III-a",
      "I-c, II-a, III-b"
    ],
    correctIndex: 2,
    explanation: "I-c: Byudjet huquqi ta'rifi; II-b: Moliya huquqining individual subyektlari; III-a: Xalqaro shartnomaning milliy qonunchilikka nisbatan ustuvorligi.",
    legalBasis: "Moliya va Byudjet huquqi nazariyasi",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q24',
    topicId: 'davlat_huquq',
    question: "Tabiat va jamiyat o‘rtasidagi munosabatlar murakkab bo‘lganligi sababli, ekologiya huquqining tamoyillari quyidagi qaysi tizimlarga bo‘linadi?\n1) davlat va huquqning umumiy tamoyillari;\n2) atrof tabiiy muhitni muhofaza qilishga oid tamoyillar;\n3) tabiiy resurslardan oqilona foydalanishga qaratilgan tamoyillar;\n4) qonun ustuvorligi va huquq kafolatlanganligi.",
    options: [
      "1, 2, 3, 4",
      "2, 3, 4",
      "1, 2, 3",
      "1, 3, 4"
    ],
    correctIndex: 2,
    explanation: "Ekologiya huquqi tamoyillari 3 asosiy guruhga bo'linadi: umumhuquqiy (1), atrof-muhitni muhofaza qilish (2) va tabiiy resurslardan oqilona foydalanish tamoyillari (3).",
    legalBasis: "Ekologiya huquqi darsligi",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q25',
    topicId: 'konstitutsiya',
    question: "Insonlarning siyosiy huquq va erkinliklarini ta’minlovchi muhim xalqaro huquqiy hujjat to‘g‘ri berilgan javobni toping.",
    options: [
      "BMT tomonidan qabul qilingan Fuqarolik va iqtisodiy huquqlar to‘g‘risidagi xalqaro Pakt",
      "BMT tomonidan qabul qilingan Fuqarolik va ijtimoiy huquqlar to‘g‘risidagi xalqaro Pakt",
      "BMT tomonidan qabul qilingan Fuqarolik va siyosiy huquqlar to‘g‘risidagi xalqaro Pakt",
      "BMT tomonidan qabul qilingan Fuqarolik va xalqaro huquqlar to‘g‘risidagi xalqaro Pakt"
    ],
    correctIndex: 2,
    explanation: "1966-yil 16-dekabrda BMT Bosh Assambleyasi tomonidan qabul qilingan «Fuqarolik va siyosiy huquqlar to‘g‘risidagi xalqaro Pakt» asosiy xalqaro hujjatdir.",
    legalBasis: "Xalqaro inson huquqlari Billi, 1966-yilgi Pakt",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q26',
    topicId: 'davlat_huquq',
    question: "Quyida berilgan shaxs va ularga tegishli fikr to‘g‘ri berilgan javobni belgilang.",
    options: [
      "Paulo Koelyo — Vaqtni «essiz», «qaniydi» bilan o‘tkazgan kishining umri eng qisqa umr ekan",
      "Najmiddin Kubro — Inson ixtiro qilgan vayronkor qurollar orasida so‘z eng xatarli quroldir",
      "Abu Ali ibn Sino — Inson o‘zining o‘tmishi, hozirgi payti va kelajakdagi mavqeyi qanday bo‘lishidan qat’i nazar, o‘zini o‘zi koyiydi",
      "Abu Rayhon Beruniy — G‘ofil odam ko‘z yumib g‘aflat uyqusiga botadi..."
    ],
    correctIndex: 2,
    explanation: "Sharq qomusiy allomasi Abu Ali ibn Sino insonning ruhiy kamoloti va o'zini taftish qilishi haqida mazkur purma'no fikrni bildirgan.",
    legalBasis: "Sharq mutafakkirlari ma'naviy-falsafiy merosi",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q27',
    topicId: 'davlat_huquq',
    question: "Quyidagi ta’riflar qaysi atamaga tegishli ekanligini to‘g‘ri moslang:\nI. Ekologik-ijtimoiy javobgarlik\nII. Ekologik-iqtisodiy javobgarlik\nIII. Ekologik-huquqiy javobgarlik\n\na) qoida va me’yorlarni buzganlar uchun yuridik tusdagi jazo choralari qo‘llanilishi;\nb) qoida va me’yorlarni buzganlik uchun iqtisodiy javobgarlik choralarini o‘z ichiga oladi;\nc) kishilarning jamoatchilik oldidagi javobgarligidir.",
    options: [
      "I-b, II-a, III-c",
      "I-b, II-c, III-a",
      "I-c, II-b, III-a",
      "I-c, II-a, III-b"
    ],
    correctIndex: 2,
    explanation: "I-c: Ekologik-ijtimoiy javobgarlik (jamoatchilik oldidagi); II-b: Ekologik-iqtisodiy javobgarlik (iqtisodiy choralar); III-a: Ekologik-huquqiy javobgarlik (yuridik jazo choralari).",
    legalBasis: "Ekologiya huquqi, Ekologik javobgarlik turlari",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q28',
    topicId: 'konstitutsiya',
    question: "Inson huquqlari umumjahon deklaratsiyasining 7-moddasida qanday norma belgilangan?",
    options: [
      "Jinoyat sodir etganlikda ayblanayotgan shaxs aybi aniqlanmaguncha aybsiz hisoblanadi (Aybsizlik prezumpsiyasi)",
      "Demokratiya umuminsoniy prinsiplarga asoslanadi, inson uning hayoti oliy qadriyatdir",
      "Barcha odamlar qonun oldida tengdir va hech bir tafovutsiz qonun bilan teng himoya qilinish huquqiga egadir. Barcha odamlar kamsitishdan va unga undaydigan gij-gijlashdan teng himoya qilinish huquqiga egadir",
      "Hech kim insonning shaxsiy yoki oilaviy hayotiga o‘zboshimchalik bilan aralashishi mumkin emas"
    ],
    correctIndex: 2,
    explanation: "Inson huquqlari umumjahon deklaratsiyasining 7-moddasi: 'Barcha odamlar qonun oldida tengdir va hech bir tafovutsiz qonun tomonidan teng himoya qilinish huquqiga egadir...'.",
    legalBasis: "Inson huquqlari umumjahon deklaratsiyasi, 7-modda",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q29',
    topicId: 'jinoyat',
    question: "Moddiy yordamga muhtoj voyaga yetmagan shaxsni moddiy ta’minlashdan bo‘yin tovlash jami qanchadan … (a) ortiq muddat mobaynida to‘lanmasa va ma’muriy jazodan keyin takrorlansa, necha … (b) yilgacha axloq tuzatish ishlari yoki bir yilgacha ozodlikdan mahrum qilish bilan jazolanadi?",
    options: [
      "(a)- bir oydan, (b)- ikki yilgacha",
      "(a)- ikki oydan, (b)- bir yilgacha",
      "(a)- ikki oydan, (b)- uch yilgacha",
      "(a)- ikki oydan, (b)- ikki yilgacha"
    ],
    correctIndex: 3,
    explanation: "O'zR JK 122-moddasiga ko'ra, aliment to'lovlarini jami bo'lib 2 oydan ortiq muddat mobaynida to'lamaslik ma'muriy jazodan so'ng 2 yilgacha axloq tuzatish ishlari yoki 1 yilgacha ozodlikdan mahrum qilish bilan jazolanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 122-modda",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q30',
    topicId: 'jinoyat',
    question: "Yosh boladan foydalangan holda jinoyatni sodir etish JKning qaysi moddasiga muvofiq jazoni og‘irlashtiruvchi holat deb hisoblanadi va sud tomonidan inobatga olinadi?",
    options: [
      "65-modda",
      "57-modda",
      "56-modda",
      "63-modda"
    ],
    correctIndex: 2,
    explanation: "O'zbekiston Respublikasi JK 56-moddasi «Jazoni og‘irlashtiruvchi holatlar» deb nomlanadi va uning bandlarida yosh boladan foydalanib jinoyat sodir etish og'irlashtiruvchi holat sifatida mustahkamlangan.",
    legalBasis: "O‘zR Jinoyat kodeksi, 56-modda",
    difficulty: "oson",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (1,3 ball)"
  },
  {
    id: 'ms2-q31',
    topicId: 'konstitutsiya',
    question: "Konstitutsiya normalari va tegishli moddalari to‘g‘ri muvofiqlashtirilgan qatorlarni toping:\n1. 68-modda — Fuqarolar atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lishga majburdirlar;\n2. 13-modda — O‘zbekiston Respublikasida demokratiya umuminsoniy prinsiplarga asoslanadi, inson oliy qadriyatdir;\n3. 62-modda — Yer, tabiiy zaxiralar umummilliy boylikdir;\n4. 28-modda — Jinoyat sodir etganlikda ayblanayotgan har bir shaxsning ishi sudda qonuniy ko‘rib chiqilib, aybi isbotlanmaguncha aybsiz hisoblanadi;\n5. 54-modda — Sud orqali himoya qilish huquqi.",
    options: [
      "2, 4",
      "1, 2, 4",
      "3, 4",
      "2, 5"
    ],
    correctIndex: 0,
    explanation: "13-modda (Demokratiya va inson qadri) hamda 28-modda (Aybsizlik prezumpsiyasi) matni Konstitutsiya moddalari raqamiga to'liq mos keladi.",
    legalBasis: "O‘zR Konstitutsiyasi, 13 va 28-moddalar",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q32',
    topicId: 'oila',
    question: "Dunyo mamlakatlarida belgilangan nikoh yoshi to‘g‘ri berilgan javobni toping:\n1. Bolgariyada\n2. Angliyada\n3. AQSHda\n4. Fransiyada\n5. Vengriyada\n\na) 16 yosh;\nb) 18 yosh;\nc) 16 yoshdan 21 yoshgacha;\nd) 18 yosh – 16 yosh (erkak va ayol);\ne) 18 yosh – 16 yosh.",
    options: [
      "1-b, 2-a, 3-c, 4-d, 5-e",
      "1-e, 2-a, 3-b, 4-d, 5-c",
      "1-a, 2-b, 3-c, 4-d, 5-e",
      "1-b, 2-a, 3-c, 4-d, 5-e"
    ],
    correctIndex: 0,
    explanation: "1-b (Bolgariya 18), 2-a (Angliya 16), 3-c (AQSH 16–21 shtatlarga ko'ra), 4-d (Fransiya 18/16) va 5-e (Vengriya 18/16).",
    legalBasis: "Xorijiy mamlakatlar oila huquqi darsligi",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q33',
    topicId: 'oila',
    question: "Bo‘sh qoldirilgan joyga mos javobni qo‘ying:\n«__________ er-xotin bo‘lib yashash ularning mulkini er-xotinning birgalikdagi umumiy mulki deb topish uchun asos bo‘lmaydi».",
    options: [
      "tegishli tartibda qayd ettirmaslik",
      "haqiqiy emas deb topiladi",
      "nikoh shartnomasi",
      "tegishli tartibda qayd ettirish"
    ],
    correctIndex: 0,
    explanation: "FHDYO organlarida tegishli tartibda qayd ettirmasdan birga yashash mulkni birgalikdagi umumiy mulk deb topish huquqini bermaydi.",
    legalBasis: "O‘zR Oila kodeksi, 13, 23-moddalar",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q34',
    topicId: 'oila',
    question: "Nikoh yoshiga amal qilmasdan, g‘ayriqonuniy ravishda nikoh munosabatlarida bo‘lish har xil huquqiy oqibatlarni keltirib chiqarishi mumkin. Bunday nikoh qanday oqibatga sabab bo'ladi?",
    options: [
      "tegishli tartibda qayd ettiriladi",
      "haqiqiy deb topiladi",
      "huquqiy javobgarlik olib keladi",
      "shartnomaviy rejim hisoblanadi"
    ],
    correctIndex: 2,
    explanation: "Nikoh yoshiga yetmagan shaxs bilan nikoh munosabatlariga kirishish ma'muriy (MJtK 47-3-modda) va jinoiy javobgarlikni keltirib chiqaradi.",
    legalBasis: "O‘zR MJtK 47-3-modda, Oila kodeksi 15-modda",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q35',
    topicId: 'oila',
    question: "Nikoh yoshiga yetmagan shaxs bilan tuzilgan nikoh hali nikoh yoshiga yetmay nikohga kirgan shaxsning manfaatlari talab qilgan hollarda sud tomonidan qanday deb topiladi?",
    options: [
      "haqiqiy deb topiladi",
      "haqiqiy emas deb topiladi",
      "tegishli tartibda bekor qilinmaydi",
      "shartnoma tuziladi"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 49-moddasiga binoan, nikoh yoshiga yetmagan shaxs manfaatlari talab qilsa, nikoh sud tomonidan haqiqiy emas deb topiladi.",
    legalBasis: "O‘zR Oila kodeksi, 49-modda",
    difficulty: "qiyin",
    questionType: 'yopiq',
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },

  // ==========================================
  // 36-45. OCHIQ / YOZMA SAVOLLAR
  // ==========================================
  {
    id: 'ms2-q36',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: «Jinoyat» tushunchasi ilk marotaba G‘arbiy Yevropa davlatlarining jinoyat to‘g‘risidagi qonun hujjatlarida keltirilgan:\na) Bu tushuncha birinchi marotaba qaysi davlat Jinoyat kodeksida uchraydi?\nb) Jinoyat huquqi tarixida jinoyatga ta’rifni birinchi marta qaysi davlatda «Jinoyat — jinoyat huquqi bilan qo‘riqlanadigan ijtimoiy munosabatlar tartibining buzilishidir» deb ta’rif berilgan?",
    options: [
      "a) Fransiya; b) Rossiya",
      "a) Angliya; b) Germaniya",
      "a) Germaniya; b) Fransiya",
      "a) Italiya; b) Rossiya"
    ],
    correctIndex: 0,
    explanation: "a) Bu tushuncha birinchi bor Fransiya Jinoyat kodeksida uchraydi; b) Jinoyatga ilk ilmiy-normativ ta'rif Rossiyada berilgan.",
    legalBasis: "Jinoyat huquqi tarixi darsligi",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) Fransiya; b) Rossiya",
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q37',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Jinoyatning subyektiv tomoni faqat ayb shakllari bilan cheklanib qolmaydi:\na) Jinoyatning subyektiv tomoni yana qanday belgilarni o‘z ichiga oladi?\nb) Jinoyatni aniqlashda jinoyatning subyektiv tomoni hisoblangan qasd yoki ehtiyotsizlik qanday darajali hisoblanadi?",
    options: [
      "a) Motiv va maqsad; b) birinchi darajali",
      "a) Qilmish va oqibat; b) ikkinchi darajali",
      "a) Hissiyot va ehtiros; b) fakultativ",
      "a) Subyekt va obyekt; b) asosiy"
    ],
    correctIndex: 0,
    explanation: "a) Subyektiv tomon aybdan tashqari motiv va maqsadni ham o'z ichiga oladi; b) Qasd yoki ehtiyotsizlik subyektiv tomonning birinchi darajali (zaruriy) belgisidir.",
    legalBasis: "Jinoyat huquqi, Subyektiv tomon elementlari",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) Motiv va maqsad; b) birinchi darajali",
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q38',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Jinoyat qonunchiligida belgilangan AFV va AMNISTIYA:\na) Afvni qo‘llash uchun odatda jinoyat sodir etgan shaxs qanday normativ hujjat taqdim etishi shart hisoblanadi?\nb) Qachondan boshlab amnistiya aktini qo‘llashga oid yakuniy qarorni faqat sudlar chiqarishi belgilab qo‘yilgan?",
    options: [
      "a) Iltimosnomasi; b) 2008-yil",
      "a) Tavsiyanoma; b) 2010-yil",
      "a) Kafolat xati; b) 2005-yil",
      "a) Arizasi; b) 2012-yil"
    ],
    correctIndex: 0,
    explanation: "a) Afv etish faqat mahkumning o'z iltimosnomasi asosida ko'rib chiqiladi; b) 2008-yildan e'tiboran amnistiya aktlarini qo'llash vakolati to'liq sudlarga berilgan («Xabeas korpus»).",
    legalBasis: "O‘zR Konstitutsiyasi, JK 76, 77-moddalar",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) Iltimosnomasi; b) 2008 – yil",
    yearOrSource: "Milliy Sertifikat (3,2 ball)"
  },
  {
    id: 'ms2-q39',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Shaxsning ozodligi, sha’ni va qadr-qimmatiga qarshi jinoyatlar:\na) Odam o‘g‘irlash jinoyati sirasiga Jinoyat kodeksining qaysi moddasida nazarda tutilgan holatlardan tashqari barcha holatlar odam o‘g‘irlash hisoblanadi?\nb) Tuhmat jinoyati necha qismdan iborat bo‘ladi?",
    options: [
      "a) 245-modda; b) 3 qism",
      "a) 135-modda; b) 2 qism",
      "a) 137-modda; b) 4 qism",
      "a) 271-modda; b) 3 qism"
    ],
    correctIndex: 0,
    explanation: "a) Garovga olish (245-modda) holatidan tashqari barcha shaxsni noqonuniy ushlab turish holatlari odam o'g'irlashdir; b) JK 139-modda (Tuhmat) 3 ta qismdan iborat.",
    legalBasis: "O‘zR Jinoyat kodeksi, 137, 139, 245-moddalar",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) 245 – modda; b) 3 qism",
    yearOrSource: "Milliy Sertifikat (2,6 ball)"
  },
  {
    id: 'ms2-q40',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Voyaga yetmagan shaxsni g‘ayriijtimoiy xatti-harakatlarga jalb qilish:\na) Jinoyat kodeksining qaysi moddasiga muvofiq javobgarlik belgilanadi?\nb) Voyaga yetmagan shaxsni giyohvandlik vositalari yoki psixotrop moddalar iste’mol etishga jalb qilish necha yildan necha yilgacha ozodlikni cheklashga olib keladi?",
    options: [
      "a) 127-modda; b) 3 yildan besh yilgacha",
      "a) 128-modda; b) 2 yildan 4 yilgacha",
      "a) 129-modda; b) 1 yildan 3 yilgacha",
      "a) 127-modda; b) 5 yildan 10 yilgacha"
    ],
    correctIndex: 0,
    explanation: "a) JK 127-modda; b) Voyaga yetmaganni giyohvandlikka jalb qilish 3 yildan 5 yilgacha ozodlikni cheklash yoki ozodlikdan mahrum qilish bilan jazolanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 127-modda 3-qism",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) 127 – modda; b) 3 yildan besh yilgacha",
    yearOrSource: "Milliy Sertifikat (2,8 ball)"
  },
  {
    id: 'ms2-q41',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: O‘zbekiston Respublikasining konstitutsiyaviy tuzumiga tajovuz qilish:\na) Jinoyat kodeksining qaysi moddasiga muvofiq javobgarlik belgilanadi?\nb) Hokimiyatni bosib olish yoki konstitutsiyaviy tuzumni ag‘darib tashlash maqsadida fitna uyushtirish necha yildan necha yilgacha ozodlikdan mahrum qilish bilan jazolanadi?",
    options: [
      "a) 159-modda; b) 10 yildan 20 yilgacha",
      "a) 158-modda; b) 5 yildan 10 yilgacha",
      "a) 160-modda; b) 15 yildan 25 yilgacha",
      "a) 159-modda; b) 8 yildan 15 yilgacha"
    ],
    correctIndex: 0,
    explanation: "a) JK 159-modda; b) 159-modda 4-qismiga ko'ra fitna uyushtirish 10 yildan 20 yilgacha ozodlikdan mahrum qilish bilan jazolanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 159-modda 4-qism",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) 159 – modda; b) 10 yildan 20 yilgacha",
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q42',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Talon-taroj qilish:\na) ushbu jinoyat subyektiv tomondan qanday amalga oshiriladi?\nb) ushbu jinoyatning motivi nima?",
    options: [
      "a) qasd; b) g‘arazgo‘ylik",
      "a) ehtiyotsizlik; b) qasddan",
      "a) beparvolik; b) xudbinlik",
      "a) qasd; b) bezorilik"
    ],
    correctIndex: 0,
    explanation: "a) Talon-taroj qilish faqat to'g'ri qasd bilan sodir etiladi; b) Uning zaruriy subyektiv motivi g'arazgo'ylikdir.",
    legalBasis: "Jinoyat huquqi, Mulkka qarshi jinoyatlar",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) qasd; b) g’arazgoylik",
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q43',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: Mansabdor shaxsning o‘z mansab vakolatidan foydalanishi:\na) ushbu jinoyat necha xil shaklda yuz beradi?\nb) ushbu jinoyatning subyektiv tomoni qanday sodir etiladi?",
    options: [
      "a) ikki xil; b) qasd",
      "a) uch xil; b) ehtiyotsizlik",
      "a) bir xil; b) qasd",
      "a) to'rt xil; b) beparvolik"
    ],
    correctIndex: 0,
    explanation: "a) JK 205-moddasiga ko'ra mansab vakolatini suiiste'mol qilish harakat yoki harakatsizlik (ikki xil shakl) orqali; b) faqat qasddan sodir etiladi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 205-modda",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) ikki xil; b) qasd",
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q44',
    topicId: 'jinoyat',
    question: "[OCHIQ TEST]: “Pora faqat nohaqlig-u zolimlarga yordam beruvchidir”:\na) ushbu hikmatli fikrlar muallifini yozing.\nb) ushbu hikmatli so‘zda keltirilgan “pora” predmeti bo‘lishi mumkin bo‘lgan predmet yozing.",
    options: [
      "a) Mahmud Zamaxshariy; b) pul, valyuta, qimmatli qog‘oz, oziq-ovqat",
      "a) Alisher Navoiy; b) tilla, kumush",
      "a) Yusuf Xos Hojib; b) mol-mulk",
      "a) Amir Temur; b) boylik"
    ],
    correctIndex: 0,
    explanation: "a) Bu hikmat Mahmud Zamaxshariyga tegishli; b) Pora predmeti: pul, chet el valyutasi, qimmatli qog'ozlar, moddiy qimmatliklar va boshqa xizmatlar bo'lishi mumkin.",
    legalBasis: "Mahmud Zamaxshariy hikmatlari, JK 210-modda",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) Mahmud Zamaxshariy; b) pul, valyuta, qimmatli qog’oz, oziq-ovqat",
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  },
  {
    id: 'ms2-q45',
    topicId: 'davlat_huquq',
    question: "[OCHIQ TEST]: O‘zbekiston Respublikasi Moliya huquqi:\na) O‘zbekiston Respublikasi Konstitutsiyasining qaysi bobi “Moliya, pul va kredit” deb nomlanadi?\nb) Moliya huquqida an’anaviy ravishda moliya huquqiy subyektlarining nechta asosiy guruhi ajratiladi?",
    options: [
      "a) XXVI bob; b) uchta",
      "a) XXV bob; b) to'rtta",
      "a) XXIV bob; b) ikkita",
      "a) XXIII bob; b) beshta"
    ],
    correctIndex: 0,
    explanation: "a) Konstitutsiyaning XXVI bobi «Moliya, pul va kredit» deb nomlanadi; b) Moliya huquqiy subyektlari 3 ta guruhga bo'linadi: davlat va uning organlari, tashkilot/korxonalar hamda jismoniy shaxslar.",
    legalBasis: "O‘zR Konstitutsiyasi XXVI bob, Moliya huquqi darsligi",
    difficulty: "qiyin",
    questionType: 'ochiq',
    correctAnswerText: "a) XXVI bob; b) uchta",
    yearOrSource: "Milliy Sertifikat (2,2 ball)"
  }
];
