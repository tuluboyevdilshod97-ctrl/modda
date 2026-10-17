import { Question } from '../types';

/**
 * RASMIY BMBA TEST SINOVI (23.12.2025)
 * Muallif: @huquq_vodiysi
 * Huquqshunoslik fani bo'yicha Bilimni baholash agentligi (BMBA) davlat standarti
 */
export const BMBA_23_DEC_QUESTIONS: Question[] = [
  {
    id: 'bmba-23dec-1',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Konstitutsiyasining 98-moddasiga muvofiq, quyidagilar orasidan qonunchilik tashabbusi huquqiga ega bo‘lgan subyektlarni aniqlang.\n1) O‘zbekiston Respublikasi Prezidenti;\n2) Vazirlar Mahkamasi;\n3) O‘zbekiston Respublikasi Bosh prokurori;\n4) Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesi;\n5) Kamida 100 ming nafardan kam bo‘lmagan fuqarolar;\n6) Inson huquqlari bo‘yicha Milliy markaz.",
    options: [
      "1, 2, 4, 5",
      "1, 2, 3, 4, 5",
      "1, 2, 3, 6",
      "2, 4, 5, 6"
    ],
    correctIndex: 1,
    explanation: "Konstitutsiyaning 98-moddasiga ko‘ra, qonunchilik tashabbusi huquqiga: O‘zbekiston Respublikasi Prezidenti, davlat hokimiyatining oliy vakillik organi orqali Qoraqalpog‘iston Respublikasi, Oliy Majlis Qonunchilik palatasi deputatlari, Vazirlar Mahkamasi, Konstitutsiyaviy sud, Oliy sud, Bosh prokuror hamda kamida 100 ming nafar ovoz berish huquqiga ega fuqarolar ega.",
    legalBasis: "O‘zR Konstitutsiyasi, 98-modda (2023-yilgi tahrir)",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-2',
    topicId: 'davlat_huquq',
    question: "Davlat tuzilishi shakliga ko‘ra federatsiya hisoblangan davlatlar qatorini toping.",
    options: [
      "Fransiya, Italiya, Yaponiya",
      "AQSH, Rossiya, Germaniya, Hindiston",
      "Buyuk Britaniya, Shvetsiya, Ispaniya",
      "Polsha, Ukraina, Belarus"
    ],
    correctIndex: 1,
    explanation: "AQSH, Rossiya, Germaniya, Hindiston, Shveysariya, Braziliya kabi davlatlar o‘z tarkibida ma'lum siyosiy mustaqillikka ega bo‘lgan subyektlar (shtatlar, yerlar, respublikalar)dan iborat bo‘lgan federativ davlatlardir.",
    legalBasis: "Davlat va huquq nazariyasi, Davlat tuzilishi shakllari",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-3',
    topicId: 'mehnat',
    question: "O‘zbekiston Respublikasining yangi Mehnat kodeksiga ko‘ra, quyidagi qaysi shaxslar ishga qabul qilinayotganda dastlabki sinov muddati BELGILANMAYDI?\n1) Homilador ayollar;\n2) Uch yoshga to‘lmagan bolasi bor ayollar yoki yolg‘iz otalar;\n3) Oliy yoki o‘rta maxsus ta'lim tashkilotini bitirgan va birinchi bor ishga kirayotgan bitiruvchilar (1 yil davomida);\n4) Mehnat shartnomasi 6 oygacha muddatga tuzilayotgan xodimlar;\n5) Boshqa tashkilotdan o‘tkazish (perevod) yo‘li bilan ishga qabul qilinayotganlar.",
    options: [
      "1, 2, 3",
      "1, 2, 4, 5",
      "1, 2, 3, 4, 5",
      "2, 3, 5"
    ],
    correctIndex: 2,
    explanation: "Yangi Mehnat kodeksining 129-moddasiga binoan: homilador ayollar, 3 yoshga to'lmagan bolasi bor shaxslar, ta'lim tashkilotlarini tamomlagan kundan 1 yil ichida birinchi bor ishga kirayotgan bitiruvchilar, 6 oygacha muddatga shartnoma tuzilayotgan xodimlar va boshqa ish beruvchi bilan kelishuvga ko'ra o'tkazilayotganlar uchun dastlabki sinov belgilanmaydi.",
    legalBasis: "O‘zR Mehnat kodeksi, 129-modda",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-4',
    topicId: 'fuqarolik',
    question: "O‘n to‘rt yoshdan o‘n sakkiz yoshgacha bo‘lgan voyaga yetmaganlar qonuniy vakillari (ota-onalari, farzandlikka oluvchilari yoki homiylari)ning roziligisiz MUSTAQIL ravishda amalga oshirishi MUMKIN BO‘LGAN harakatlarni aniqlang.\n1) O‘z ish haqi, stipendiyasi va boshqa daromadlarini tasarruf etish;\n2) Fan, adabiyot yoki san'at asarining, ixtironing mualliflik huquqini amalga oshirish;\n3) Kredit tashkilotlariga omonatlar qo‘yish va ularni tasarruf etish;\n4) Ko‘chmas mulkni hadya qilish yoki oldi-sotdi shartnomasini tuzish;\n5) Mayda maishiy bitimlarni mustaqil tuzish.",
    options: [
      "1, 2, 3, 5",
      "1, 3, 4",
      "2, 4, 5",
      "Barchasini (1, 2, 3, 4, 5)"
    ],
    correctIndex: 0,
    explanation: "FK 27-moddasiga binoan 14 yoshdan 18 yoshgacha bo'lganlar daromadlarini mustaqil tasarruf etish, mualliflik huquqlarini amalga oshirish, omonat qo'yish va mayda maishiy bitimlar tuzish huquqiga ega. Ko'chmas mulk bilan bog'liq bitimlar esa ota-onaning yozma roziligi va vasiylik organi ruxsati bilan tuziladi.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 27-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-5',
    topicId: 'jinoyat',
    question: "Jinoyat sodir etilgan kundan boshlab quyidagi muddatlar o‘tgan bo‘lsa, shaxs jinoiy javobgarlikdan ozod qilinadi (JK 64-moddasi):\nI. Ijtimoiy xavfi katta bo‘lmagan jinoyat sodir etilgan kundan boshlab\nII. Uncha og‘ir bo‘lmagan jinoyat sodir etilgan kundan boshlab\nIII. Og‘ir jinoyat sodir etilgan kundan boshlab\nIV. O‘ta og‘ir jinoyat sodir etilgan kundan boshlab\na) 10 yil;\nb) 2 yil;\nc) 5 yil;\nd) 15 yil.",
    options: [
      "I-b, II-c, III-a, IV-d",
      "I-c, II-b, III-d, IV-a",
      "I-b, II-a, III-c, IV-d",
      "I-a, II-b, III-c, IV-d"
    ],
    correctIndex: 0,
    explanation: "JK 64-moddasi bo'yicha javobgarlikka tortish muddatlari: Ijtimoiy xavfi katta bo'lmagan jinoyat uchun — 2 yil (I-b), Uncha og'ir bo'lmagan uchun — 5 yil (II-c), Og'ir jinoyat uchun — 10 yil (III-a), O'ta og'ir jinoyat uchun — 15 yil (IV-d).",
    legalBasis: "O‘zR Jinoyat kodeksi, 64-modda",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-6',
    topicId: 'oila',
    question: "Oila kodeksiga ko‘ra, quyidagi holatlardan qaysi birida er-xotin o‘rtasida umumiy voyaga yetmagan bolalari bo‘lsa ham nikoh FHDYo (fuqarolik holati dalolatnomalarini yozish) organi tomonidan bekor qilinishi mumkin?",
    options: [
      "Er-xotindan biri sud tomonidan bedarak yo‘qolgan deb topilgan bo‘lsa",
      "Er-xotin o‘zaro kelishuvga erishgan bo‘lsa",
      "Er-xotindan biri boshqa shahar yoki viloyatga ko‘chib ketgan bo‘lsa",
      "Er-xotin bir yildan ortiq birga yashamayotgan bo‘lsa"
    ],
    correctIndex: 0,
    explanation: "Oila kodeksining 43-moddasiga binoan, er-xotindan biri sud tomonidan bedarak yo'qolgan deb topilgan, ruhiyati buzilishi sababli muomalaga layoqatsiz deb topilgan yoxud jinoyat sodir etganligi uchun kamida 3 yil muddatga ozodlikdan mahrum qilingan bo'lsa, voyaga yetmagan bolalari borligidan qat'i nazar, nikoh FHDYo organida bekor qilinadi.",
    legalBasis: "O‘zR Oila kodeksi, 43-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-7',
    topicId: 'mamuriy',
    question: "Ma'muriy javobgarlik to‘g‘risidagi kodeksning 36-moddasiga muvofiq, ma'muriy huquqbuzarlik sodir etilgan kundan boshlab, davom etayotgan huquqbuzarliklar uchun esa u aniqlangan kundan boshlab qancha muddat o‘tgach ma'muriy jazo qo‘llanilishi MUMKIN EMAS?",
    options: [
      "Bir oydan kech bo‘lmagan muddatda",
      "Bir yildan kech bo‘lmagan muddatda",
      "Olti oydan kech bo‘lmagan muddatda",
      "Uch yildan kech bo‘lmagan muddatda"
    ],
    correctIndex: 1,
    explanation: "MJtK 36-moddasiga ko‘ra, ma'muriy jazo huquqbuzarlik sodir etilgan kundan boshlab, davom etayotgan huquqbuzarliklar uchun esa aniqlangan kundan boshlab bir yildan kechiktirmay qo‘llanilishi mumkin.",
    legalBasis: "O‘zR Ma'muriy javobgarlik to‘g‘risidagi kodeks, 36-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-8',
    topicId: 'konstitutsiya',
    question: "Yangi tahrirdagi O‘zbekiston Respublikasi Konstitutsiyasining 27-moddasiga muvofiq, shaxsni ushlash chog‘ida unga tushuntirilishi shart bo‘lgan huquqlarni («Miranda qoidasi») aniqlang.\n1) Uning huquqlari va ushlab turilishi asoslari;\n2) Sukut saqlash huquqi;\n3) Bergan ko‘rsatmalari sudda o‘ziga qarshi ishlatilishi mumkinligi;\n4) Ushlangan paytdan e'tiboran himoyachiga (advokatga) bo‘lgan huquqi.",
    options: [
      "1, 2, 4",
      "1, 3, 4",
      "1, 2, 3, 4",
      "2, 4"
    ],
    correctIndex: 2,
    explanation: "Konstitutsiyaning 27-moddasida to‘g‘ridan-to‘g‘ri mustahkamlandi: Shaxsni ushlash chog‘ida unga tushunarli tilda uning huquqlari va ushlab turilishi asoslari tushuntirilishi, shaxs sukut saqlash huquqiga egaligi, bu huquqdan foydalanishi o‘ziga qarshi foydalanilmasligi hamda ushlangan paytdan boshlab advokat yordamidan foydalanish huquqiga egaligi kafolatlanadi.",
    legalBasis: "O‘zR Konstitutsiyasi, 27-modda (2023)",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-9',
    topicId: 'davlat_huquq',
    question: "Huquqiy ongning tarkibiy qismlarini aniqlang.",
    options: [
      "Huquqiy mafkura va huquqiy psixologiya",
      "Gipoteza, dispozitsiya va sanksiya",
      "Subyekt, obyekt va obyektiv tomon",
      "Huquq layoqati va muomala layoqati"
    ],
    correctIndex: 0,
    explanation: "Huquqiy ong tuzilish jihatidan ikki qismdan: ilmiy-nazariy g'oyalar, prinsiplar va qarashlar tizimi bo'lgan Huquqiy mafkura (ideologiya) hamda insonlarning huquqqa bo'lgan hissiyotlari, kechinmalari va munosabatlarini ifodalovchi Huquqiy psixologiyadan iborat.",
    legalBasis: "Davlat va huquq nazariyasi, Huquqiy ong va huquqiy madaniyat",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-10',
    topicId: 'jinoyat',
    question: "O‘zbekiston Respublikasi Jinoyat kodeksiga binoan, shaxsning harakati qilmishda jinoyat alomatlari bo‘lsa-da, qilmishning jinoiyligini istisno qiladigan holat hisoblanadi, agar u:\n1) Zaruriy mudofaa holatida sodir etilgan bo‘lsa;\n2) Oxirgi zarurat holatida sodir etilgan bo‘lsa;\n3) Ijtimoiy xavfli qilmish sodir etgan shaxsni ushlash paytida zarar yetkazilgan bo‘lsa;\n4) Jismoniy yoki ruhiy majburlash yoxud qo‘rqitish natijasida sodir etilgan bo‘lsa;\n5) Buyruq yoki boshqa farmoyishni ijro etish oqibatida sodir etilgan bo‘lsa.",
    options: [
      "Faqat 1 va 2",
      "1, 2, 3",
      "1, 2, 3, 4, 5",
      "1, 3, 5"
    ],
    correctIndex: 2,
    explanation: "JKning 37–41-1-moddalarida qilmishning jinoiyligini istisno qiluvchi barcha holatlar sanab o'tilgan: zaruriy mudofaa, oxirgi zarurat, shaxsni ushlashda zarar yetkazish, buyruqni bajarish, oqlangan kasbiy xavf hamda jismoniy yoki ruhiy majburlash.",
    legalBasis: "O‘zR Jinoyat kodeksi, 37–41-1-moddalar",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-11',
    topicId: 'mehnat',
    question: "Yangi Mehnat kodeksining 217-moddasiga ko‘ra, har yilgi asosiy mehnat ta'tilining eng kam davomiyligi qancha etib belgilangan?",
    options: [
      "15 ish kuni",
      "21 kalendar kuni",
      "24 ish kuni",
      "30 kalendar kuni"
    ],
    correctIndex: 1,
    explanation: "2023-yil 30-apreldan kuchga kirgan yangi Mehnat kodeksining 217-moddasiga ko‘ra, har yilgi asosiy eng kam mehnat ta'tilining davomiyligi 21 kalendar kunini tashkil etadi (eski tahrirda 15 ish kuni edi).",
    legalBasis: "O‘zR Mehnat kodeksi, 217-modda (yangi tahrir)",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-12',
    topicId: 'fuqarolik',
    question: "Fuqarolik kodeksining 150-moddasiga binoan, O‘zbekiston Respublikasida da'vo taqdim etishning umumiy muddati qancha etib belgilangan?",
    options: [
      "1 yil",
      "3 yil",
      "5 yil",
      "10 yil"
    ],
    correctIndex: 1,
    explanation: "FK 150-moddasiga muvofiq, huquqi buzilgan shaxsning talabi bo‘yicha huquqni himoya qilish uchun da'vo muddati (umumiy da'vo muddati) uch yil qilib belgilangan.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 150-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-13',
    topicId: 'konstitutsiya',
    question: "Quyida berilgan ma'lumotlarni tahlil qilib, Eyler-Venn diagrammasiga mos keladigan to‘g‘ri javobni aniqlang.\nI. Oliy Majlis Qonunchilik palatasi vakolatlari\nII. Oliy Majlis Senati vakolatlari\na) Qonun loyihalarini muhokama qilish va qabul qilish;\nb) O‘zbekiston Respublikasi Bosh vaziri nomzodini ko‘rib chiqish va ma'qullash;\nc) Bosh prokuror, Hisob palatasi raisi, DXX rahbarini tayinlash to‘g‘risidagi Prezident farmonlarini tasdiqlash;\nd) O‘zbekiston Respublikasining xorijiy davlatlardagi diplomatik vakillarini tayinlash va chaqirib olish to‘g‘risidagi farmonlarini tasdiqlash;\ne) Davlat budjeti ijrosi ustidan parlament nazoratini amalga oshirish.",
    options: [
      "I - a, b; II - c, d; Umumiy - e",
      "I - a, c; II - b, d; Umumiy - e",
      "I - a, d; II - b, c; Umumiy - e",
      "I - b, e; II - c, d; Umumiy - a"
    ],
    correctIndex: 0,
    explanation: "Qonunchilik palatasi qonunlarni qabul qiladi va Bosh vazir nomzodini ma'qullaydi (a, b). Senat esa Bosh prokuror, DXX raisi, elchilarni tayinlash farmonlarini tasdiqlaydi (c, d). Budjet ijrosi nazorati esa har ikki palataning umumiy nazorat vakolatiga kiradi (e).",
    legalBasis: "O‘zR Konstitutsiyasi, 94 va 95-moddalar",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-14',
    topicId: 'davlat_huquq',
    question: "Quyida berilgan yuridik atamalar va ularning ta'riflari to‘g‘ri juftlangan javobni aniqlang.\n1. Apatrid\n2. Bipatrid\n3. Radifikatsiya (Ratifikatsiya)\na) Ikki yoki undan ortiq davlat fuqaroligiga ega bo‘lgan shaxs;\nb) Xalqaro shartnomaga uning oliy davlat hokimiyati organi tomonidan yuridik kuch berilishi;\nc) Hech qaysi davlat fuqarosi bo‘lmagan fuqaroligi yo‘q shaxs.",
    options: [
      "1-c, 2-a, 3-b",
      "1-a, 2-c, 3-b",
      "1-c, 2-b, 3-a",
      "1-b, 2-a, 3-c"
    ],
    correctIndex: 0,
    explanation: "Apatrid — fuqaroligi bo'lmagan shaxs (1-c). Bipatrid — qo'shfuqarolikka ega shaxs (2-a). Ratifikatsiya — xalqaro shartnomani oliy qonun chiqaruvchi organ tomonidan tasdiqlanishi (3-b).",
    legalBasis: "Davlat va huquq asoslari, Yuridik atamalar",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-15',
    topicId: 'oila',
    question: "Oila kodeksining 99-moddasiga binoan, voyaga yetmagan bolalariga aliment to‘lash haqida ota-ona o‘rtasida kelishuv bo‘lmagan taqdirda, aliment sud tomonidan ota-onaning har oylik ish haqi va boshqa daromadining qancha miqdorida undiriladi?\n1) Bir bola uchun — … (a)\n2) Ikki bola uchun — … (b)\n3) Uch va undan ortiq bola uchun — … (c)",
    options: [
      "a - 1/4; b - 1/3; c - 1/2",
      "a - 1/3; b - 1/4; c - 1/2",
      "a - 1/4; b - 1/2; c - 2/3",
      "a - 1/6; b - 1/4; c - 1/3"
    ],
    correctIndex: 0,
    explanation: "Oila kodeksining 99-moddasiga ko‘ra, aliment ota-onaning har oydagi ish haqi va (yoki) boshqa daromadining: bir bola uchun — to‘rtdan bir qismi (1/4); ikki bola uchun — uchdan bir qismi (1/3); uch va undan ortiq bola uchun — yarmi (1/2) miqdorida undiriladi.",
    legalBasis: "O‘zR Oila kodeksi, 99-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-16',
    topicId: 'jinoyat',
    question: "Jinoyat kodeksining 15-moddasiga ko‘ra jinoyatlarning toifalariga mos maksimal ozodlikdan mahrum qilish muddatlarini to‘g‘ri moslashtiring.\nI. Ijtimoiy xavfi katta bo‘lmagan jinoyatlar\nII. Uncha og‘ir bo‘lmagan jinoyatlar\nIII. Og‘ir jinoyatlar\nIV. O‘ta og‘ir jinoyatlar\na) Qasddan sodir etilib, qonunda besh yildan ortiq, lekin o‘n yildan ortiq bo‘lmagan muddatga ozodlikdan mahrum qilish jazosi nazarda tutilgan jinoyatlar;\nb) Qasddan sodir etilib, qonunda o‘n yildan ortiq muddatga ozodlikdan mahrum qilish yoki umrbod ozodlikdan mahrum qilish jazosi nazarda tutilgan jinoyatlar;\nc) Qasddan sodir etilib, qonunda uch yildan ortiq, lekin besh yildan ko‘p bo‘lmagan muddatga ozodlikdan mahrum qilish jazosi nazarda tutilgan jinoyatlar;\nd) Qonunda uch yildan ko‘p bo‘lmagan muddatga ozodlikdan mahrum qilish nazarda tutilgan jinoyatlar.",
    options: [
      "I-d, II-c, III-a, IV-b",
      "I-c, II-d, III-a, IV-b",
      "I-d, II-a, III-c, IV-b",
      "I-a, II-b, III-c, IV-d"
    ],
    correctIndex: 0,
    explanation: "JK 15-moddasiga muvofiq: 3 yilgacha — ijtimoiy xavfi katta bo'lmagan (I-d); 3 yildan 5 yilgacha — uncha og'ir bo'lmagan (II-c); 5 yildan 10 yilgacha — og'ir (III-a); 10 yildan ortiq yoki umrbod — o'ta og'ir (IV-b).",
    legalBasis: "O‘zR Jinoyat kodeksi, 15-modda",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-17',
    topicId: 'mehnat',
    question: "Yangi Mehnat kodeksining 118-moddasiga binoan, ish beruvchi qaysi yoshga to‘lmagan shaxslarni ishga qabul qilishda ularning ota-onasidan birining (ota-onasining o‘rnini bosuvchi shaxsning) yozma roziligini olishi shart?",
    options: [
      "14 yoshga to‘lgan shaxslarni",
      "15 yoshga to‘lgan shaxslarni",
      "16 yoshga to‘lgan shaxslarni",
      "18 yoshga to‘lmagan barcha shaxslarni"
    ],
    correctIndex: 1,
    explanation: "Mehnat kodeksining 118-moddasiga binoan, umumiy o‘rta ta'lim oluvchilar 15 yoshga to‘lganlarida ota-onadan birining yozma roziligi bilan o‘qishdan bo‘sh vaqtlarida yengil mehnat qilish uchun ishga qabul qilinishiga yo‘l qo‘yiladi. Asosiy ishga qabul qilish yoshi esa 16 yoshdir.",
    legalBasis: "O‘zR Mehnat kodeksi, 118-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-18',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Konstitutsiyasiga muvofiq, O‘zbekiston Respublikasining Sudyalar oliy kengashi raisi va a'zolari kim tomonidan saylanadi yoki tasdiqlanadi?",
    options: [
      "O‘zbekiston Respublikasi Prezidentining taqdimiga binoan Oliy Majlis Senati tomonidan",
      "Oliy Majlis Qonunchilik palatasi deputatlari tomonidan",
      "Oliy sud plenumi tomonidan",
      "Adliya vazirligi taklifiga asosan Vazirlar Mahkamasi tomonidan"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 95-moddasiga ko‘ra, Sudyalar oliy kengashining raisi va a'zolarini O‘zbekiston Respublikasi Prezidentining taqdimiga binoan saylash Oliy Majlis Senatining mutlaq vakolatiga kiradi.",
    legalBasis: "O‘zR Konstitutsiyasi, 95 va 135-moddalar",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-19',
    topicId: 'fuqarolik',
    question: "Fuqarolik huquqida yuridik faktlarning qaysi turi insonning irodasi va xohishiga bog‘liq bo‘lmagan holda yuz beradi?",
    options: [
      "Yuridik harakatlar",
      "Yuridik hodisalar (voqealar)",
      "Bitimlar va shartnomalar",
      "Ma'muriy hujjatlar"
    ],
    correctIndex: 1,
    explanation: "Yuridik hodisalar (voqealar) — inson irodasiga bog'liq bo'lmagan holda sodir bo'ladigan, ammo qonun bo'yicha huquqiy oqibat keltirib chiqaradigan holatlardir (masalan, insonning tug'ilishi, tabiiy o'limi, zilzila, da'vo muddatining o'tishi). Harakatlar esa inson irodasi bilan bog'liq.",
    legalBasis: "Davlat va fuqarolik huquqi nazariyasi, Yuridik faktlar",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-20',
    topicId: 'mamuriy',
    question: "O‘zbekiston Respublikasi MJtK 23-moddasiga muvofiq, ma'muriy jazo choralaridan qaysi biri FAQAT asosiy jazo sifatida qo‘llaniladi?",
    options: [
      "Maxsus huquqdan mahrum etish",
      "Ma'muriy qamoqqa olish",
      "Ashyoni haqini to‘lash sharti bilan olib qo‘yish",
      "Musodara qilish"
    ],
    correctIndex: 1,
    explanation: "MJtK 23-moddasiga asosan ma'muriy qamoq, jarima va ogohlantirish faqat asosiy jazo tariqasida qo'llaniladi. Ashyoni haqini to'lab olib qo'yish, musodara qilish va maxsus huquqdan mahrum etish esa asosiy hamda qo'shimcha jazo tariqasida qo'llanilishi mumkin.",
    legalBasis: "O‘zR Ma'muriy javobgarlik to‘g‘risidagi kodeks, 23-modda",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-21',
    topicId: 'davlat_huquq',
    question: "Inson huquqlari umumjahon deklaratsiyasi BMT Bosh Assambleyasi tomonidan qachon qabul qilingan va O‘zbekiston Respublikasi unga qachon qo‘shilgan?",
    options: [
      "1948-yil 10-dekabrda qabul qilingan; O‘zbekiston 1991-yil 30-sentabrda qo‘shilgan",
      "1945-yil 24-oktabrda qabul qilingan; O‘zbekiston 1992-yil 2-martda qo‘shilgan",
      "1966-yil 16-dekabrda qabul qilingan; O‘zbekiston 1995-yil 31-avgustda qo‘shilgan",
      "1950-yil 4-noyabrda qabul qilingan; O‘zbekiston 1993-yil 8-dekabrda qo‘shilgan"
    ],
    correctIndex: 0,
    explanation: "Inson huquqlari umumjahon deklaratsiyasi BMT Bosh Assambleyasi tomonidan 1948-yil 10-dekabrda qabul qilingan. O‘zbekiston Respublikasi mustaqillikka erishgach, birinchi bo‘lib ratifikatsiya qilgan xalqaro hujjati aynan shu bo‘lib, Oliy Kengash tomonidan 1991-yil 30-sentabrda ma'qullangan.",
    legalBasis: "Inson huquqlari xalqaro huquqi, O‘zR Oliy Kengashi qarori",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-22',
    topicId: 'jinoyat',
    question: "O‘n to‘rt yoshga to‘lgan shaxslar qaysi jinoyatlarni sodir etgan taqdirdagina jinoiy javobgarlikka tortiladi? (JK 17-moddasi)\n1) Qasddan odam o‘ldirish;\n2) Bosqinchilik;\n3) Nomusga tegish;\n4) Bezorilik (og‘irlashtiruvchi holatlarda);\n5) O‘g‘rilik;\n6) Tuhmat.",
    options: [
      "1, 2, 3, 4, 5",
      "1, 2, 3, 6",
      "2, 3, 4, 5, 6",
      "Barchasi (1–6)"
    ],
    correctIndex: 0,
    explanation: "JK 17-moddasiga ko‘ra, 14 yoshdan javobgarlik faqat qonunda qat'iy sanab o'tilgan og'ir va o'ta og'ir jinoyatlar uchun belgilanadi (odam o'ldirish, nomusga tegish, bosqinchilik, o'g'rilik, talonchilik, tovlamachilik, bezorilikning og'ir turlari). Tuhmat (JK 139-modda) uchun esa javobgarlik 16 yoshdan boshlanadi.",
    legalBasis: "O‘zR Jinoyat kodeksi, 17-modda",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-23',
    topicId: 'fuqarolik',
    question: "O‘zbekiston Respublikasi «Iste'molchilarning huquqlarini himoya qilish to‘g‘risida»gi Qonuniga muvofiq, iste'molchi nuqsonsiz nooziq-ovqat tovarini sotib olgan kundan boshlab necha kun ichida uni xarid qilingan joydagi sotuvchidan boshqa shunday tovarga almashtirib olishga haqli?",
    options: [
      "7 kun ichida",
      "10 kun ichida",
      "14 kun ichida",
      "1 oy ichida"
    ],
    correctIndex: 1,
    explanation: "O‘zbekiston Respublikasining «Iste'molchilarning huquqlarini himoya qilish to‘g‘risida»gi Qonunining 18-moddasiga ko‘ra, iste'molchi maqbul sifatli nooziq-ovqat tovarini xarid qilgan kundan boshlab o‘n kun ichida xarid joyidagi sotuvchidan boshqa shunday tovarga almashtirish huquqiga ega.",
    legalBasis: "O‘zR «Iste'molchilarning huquqlarini himoya qilish to‘g‘risida»gi Qonuni, 18-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-24',
    topicId: 'konstitutsiya',
    question: "Konstitutsiyaning 42-moddasiga muvofiq, mehnatga haq to‘lashning eng kam miqdori qanday mezondan kam bo‘lishi mumkin emas?",
    options: [
      "Insonning munosib turmush darajasini ta'minlash uchun yetarli bo‘lgan yashash minimumidan",
      "Iste'mol savatchasi narxining 50 foizidan",
      "O‘rtacha oylik ish haqining uchdan bir qismidan",
      "Bazaviy hisoblash miqdorining 10 baravaridan"
    ],
    correctIndex: 0,
    explanation: "2023-yilgi yangi tahrirdagi O‘zR Konstitutsiyasining 42-moddasida mustahkamlandi: «O‘zbekiston Respublikasida mehnatga haq to‘lashning eng kam miqdori insonning munosib turmush darajasini ta'minlash uchun zarur bo‘lgan yashash minimumi miqdoridan kam bo‘lishi mumkin emas».",
    legalBasis: "O‘zR Konstitutsiyasi, 42-modda (2023)",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-25',
    topicId: 'mehnat',
    question: "Xodim bilan tuzilgan mehnat shartnomasini ish beruvchining tashabbusi bilan bekor qilishda kasaba uyushmasi qo‘mitasining oldindan roziligini olish qaysi holatda TALAB ETILMAYDI?",
    options: [
      "Xodim malakasi yetarli bo‘lmaganligi sababli bajarayotgan ishiga noloyiq deb topilganda",
      "Korxona yoki uning alohida bo‘linmasi tugatilganda",
      "Xodim o‘z mehnat majburiyatlarini muntazam ravishda buzganligi sababli",
      "Xodim o‘z mehnat majburiyatlarini bir marta qo‘pol ravishda buzganligi sababli"
    ],
    correctIndex: 1,
    explanation: "Yangi Mehnat kodeksining 164-moddasiga ko‘ra, korxona to‘liq tugatilganligi munosabati bilan mehnat shartnomasi bekor qilingan taqdirda kasaba uyushmasi qo‘mitasining oldindan roziligini olish talab qilinmaydi.",
    legalBasis: "O‘zR Mehnat kodeksi, 161 va 164-moddalar",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-26',
    topicId: 'davlat_huquq',
    question: "Qonunosti hujjatlarining iyerarxik pog‘onasida eng yuqori yuridik kuchga ega bo‘lgan hujjat turini aniqlang.",
    options: [
      "O‘zbekiston Respublikasi Prezidentining farmonlari va qarorlari",
      "Vazirlar Mahkamasining qarorlari",
      "Vazirlik va idoralarning buyruqlari",
      "Mahalliy davlat hokimiyati organlarining qarorlari"
    ],
    correctIndex: 0,
    explanation: "Qonunchilik tizimida qonunlardan keyin eng oliy yuridik kuchga ega bo'lgan qonunosti hujjati — bu davlat boshlig'i hisoblangan O'zbekiston Respublikasi Prezidentining Farmonlari va qarorlaridir. Vazirlar Mahkamasi qarorlari ularga zid kelishi mumkin emas.",
    legalBasis: "O‘zR «Normativ-huquqiy hujjatlar to‘g‘risida»gi Qonuni, 6-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-27',
    topicId: 'oila',
    question: "Oila kodeksiga ko‘ra er va xotinning shaxsiy (alohida) mulki hisoblanadigan mulk turini aniqlang.",
    options: [
      "Nikoh davomida er va xotinning birgalikdagi mehnati evaziga orttirilgan ko‘chmas mulk",
      "Er va xotindan biriga nikoh tuzilgunga qadar tegishli bo‘lgan yoki nikoh davomida hadya yoxud meros tariqasida olingan mol-mulk",
      "Er va xotinning mehnat faoliyatidan, tadbirkorlikdan olgan umumiy daromadlari",
      "Er va xotinning umumiy daromadlari hisobiga sotib olingan qimmatli qog‘ozlar"
    ],
    correctIndex: 1,
    explanation: "Oila kodeksining 25-moddasiga muvofiq, er va xotinning nikohga qadar o‘ziga tegishli bo‘lgan mol-mulki, shuningdek ulardan birining nikoh davomida hadya, meros tariqasida yoki boshqa tekin bitimlar asosida olgan mol-mulki uning shaxsiy mulki hisoblanadi.",
    legalBasis: "O‘zR Oila kodeksi, 25-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-28',
    topicId: 'konstitutsiya',
    question: "O‘zbekiston Respublikasi Konstitutsiyasining 133-moddasiga muvofiq, O‘zbekiston Respublikasi fuqarolari qaysi organga qonunda nazarda tutilgan tartibda o‘zlarining konstitutsiyaviy huquq va erkinliklari buzilganligi to‘g‘risida shikoyat bilan murojaat qilish huquqiga ega?",
    options: [
      "O‘zbekiston Respublikasi Konstitutsiyaviy sudiga",
      "BMTning Inson huquqlari bo‘yicha Oliy komissariga",
      "Oliy Majlis Senatining Qonunchilik qo‘mitasiga",
      "Xalqaro Valyuta Jamg‘armasiga"
    ],
    correctIndex: 0,
    explanation: "2023-yilgi Konstitutsiyaning 133-moddasida fuqarolarga, agar sudda ko‘rib chiqilishi tugallangan muayyan ishda sud tomonidan ularga nisbatan qo‘llanilgan qonun Konstitutsiyaga muvofiq bo‘lmasa, Konstitutsiyaviy sudga to‘g‘ridan-to‘g‘ri murojaat qilish huquqi berildi.",
    legalBasis: "O‘zR Konstitutsiyasi, 133-modda (2023)",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-29',
    topicId: 'fuqarolik',
    question: "17 yoshli kollej o‘quvchisi Bobur o‘ziga vasiyatnoma bo‘yicha meros qolgan xonadonni sotish to‘g‘risida xaridor bilan shartnoma tuzmoqchi bo‘ldi. Notarius ushbu shartnomani tasdiqlash uchun qanday hujjatlarni talab qilishi shart?",
    options: [
      "Boburning shaxsiy arizasining o‘zi kifoya, chunki u 16 yoshdan oshgan",
      "Ota-onasining (yoki qonuniy vakillarining) yozma roziligi va Vasiylik va homiylik organining ruxsatnomasi",
      "Faqat Bobur ta'lim olayotgan kollej direktorining tavsiyanomasi",
      "Faqat ichki ishlar bo‘limining ma'lumotnomasi"
    ],
    correctIndex: 1,
    explanation: "Fuqarolik kodeksining 27-moddasi va «Notariat to‘g‘risida»gi Qonunning 38-moddasiga asosan, 14 yoshdan 18 yoshgacha bo‘lgan voyaga yetmaganlar tomonidan ko‘chmas mulkni tasarruf etish bo‘yicha bitimlar ularning ota-onasi (vasiylari)ning yozma roziligi va vasiylik organining oldindan berilgan ruxsati bilangina rasmiylashtiriladi.",
    legalBasis: "O‘zR Fuqarolik kodeksi, 27-modda; «Notariat to‘g‘risida»gi Qonun",
    difficulty: 'qiyin',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  },
  {
    id: 'bmba-23dec-30',
    topicId: 'jinoyat',
    question: "Sudlanuvchi shaxs o‘g‘rilik jinoyati sodir etganlikda ayblanmoqda. Biroq sudda uning aybi to‘liq isbotlanmadi va ayblov bo‘yicha ayrim shubhalar saqlanib qoldi. O‘zbekiston Respublikasi Konstitutsiyasining 28-moddasiga ko‘ra ushbu shubhalar kimning foydasiga hal etilishi lozim?",
    options: [
      "Aybdorlikka oid barcha shubhalar, agar ularni bartaraf etish imkoniyatlari tugagan bo‘lsa, gumon qilinuvchining, ayblanuvchining, sudlanuvchining yoki mahkumning foydasiga hal qilinishi kerak",
      "Jabrlanuvchining foydasiga hal qilinadi",
      "Davlat ayblovchisi (prokuror)ning talabiga qarab hal qilinadi",
      "Ishni qayta tergovga yuborish uchun asos bo‘ladi va shaxs qamoqda qoladi"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 28-moddasi va JPK 23-moddasiga (aybsizlik prezumpsiyasi) asosan: aybdorlikka oid barcha shubhalar, agar ularni bartaraf etish imkoniyatlari tugagan bo‘lsa, gumon qilinuvchining, ayblanuvchining, sudlanuvchining yoki mahkumning foydasiga hal qilinishi shart.",
    legalBasis: "O‘zR Konstitutsiyasi, 28-modda; JPK, 23-modda",
    difficulty: 'oson',
    yearOrSource: "BMBA 23.12.2025 (@huquq_vodiysi)"
  }
];
