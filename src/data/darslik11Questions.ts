import { Question } from '../types';

/**
 * 11-SINF DAVLAT VA HUQUQ ASOSLARI DARSLIK SAVOLLARI (2025-yil Yangi nashr)
 * 
 * Ushbu savollar 11-sinf yangi darsligi boblariga mos ravishda tuzilgan:
 * I BOB. Mehnat huquqi (d11-q001 - d11-q010)
 * II BOB. Ma'muriy huquq (d11-q011 - d11-q020)
 * III BOB. Jinoyat huquqi. Kriminologiya (d11-q021 - d11-q030)
 * IV BOB. Ekologiya huquqi (d11-q031 - d11-q040)
 */
export const DARSLIK_11_QUESTIONS: Question[] = [
  // ==========================================
  // I BOB. MEHNAT HUQUQI
  // ==========================================
  {
    id: 'd11-q001',
    topicId: 'mehnat',
    question: "Mehnatga oid huquqiy munosabatlar deganda nima tushuniladi?",
    options: [
      "Ish beruvchi va xodim o‘rtasida mehnat shartnomasiga asosan yuzaga keladigan huquqiy munosabatlar",
      "Fuqarolar o‘rtasidagi faqat oldi-sotdi va ijaraga oid shartnomaviy kelishuvlar",
      "Korxonalar o‘rtasida imzolangan iqtisodiy va moliyaviy hamkorlik bitimlari",
      "Faqat kasaba uyushmalari va davlat organlari o‘rtasidagi ijtimoiy munosabatlar"
    ],
    correctIndex: 0,
    explanation: "Mehnatga oid huquqiy munosabatlar — xodim va ish beruvchi o‘rtasida mehnat shartnomasida belgilangan majburiyatlarni bajarish asosida yuzaga keladigan huquqiy aloqadir.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 1-dars"
  },
  {
    id: 'd11-q002',
    topicId: 'mehnat',
    question: "O‘zbekiston Respublikasi Konstitutsiyasining 42-moddasiga ko‘ra, har bir shaxs mehnat sohasida qanday huquqlarga ega?",
    options: [
      "Munosib mehnat qilish, kasb va faoliyat turini erkin tanlash, xavfsiz va gigiyena talablariga javob beradigan qulay mehnat sharoitlarida ishlash hamda kamsitishlarsiz adolatli haq olish",
      "Faqat davlat idoralarida rahbarlik lavozimlarida ishlash va har oyda rag‘batlantiruvchi mukofotlar olish",
      "Ish beruvchining ruxsatisiz xohlagan paytda ishga kelish va mehnat majburiyatlarini o‘zgartirish",
      "Hech qanday tibbiy ko‘riklarsiz va hujjatlarsiz xohlagan korxonaga ishga joylashish"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 42-moddasida har kimning munosib mehnat qilish, kasb tanlash erkinligi, qulay mehnat sharoitlari va adolatli haq olish huquqlari kafolatlangan.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 1-dars"
  },
  {
    id: 'd11-q003',
    topicId: 'mehnat',
    question: "Yangi Mehnat kodeksiga ko‘ra, O‘zbekistonda har yilgi asosiy eng kam mehnat ta’tilining davomiyligi necha kun qilib belgilangan?",
    options: [
      "21 kalendar kuni",
      "15 ish kuni",
      "10 kalendar kuni",
      "30 ish kuni"
    ],
    correctIndex: 0,
    explanation: "Yangi tahrirdagi Mehnat kodeksida har yilgi asosiy eng kam mehnat ta'tilining davomiyligi 21 kalendar kuni qilib belgilangan.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 4-dars"
  },
  {
    id: 'd11-q004',
    topicId: 'mehnat',
    question: "Mehnat kodeksida ruxsat etilgan intizomiy jazo choralari qaysilar?",
    options: [
      "Hayfsan, jarima, mehnat shartnomasini bekor qilish",
      "Ogohlantirish, hayfsan, oylik maoshni butunlay to‘xtatib qo‘yish",
      "Hayfsan, ma’muriy qamoq, korxonadan haydash",
      "Ogohlantirish, jarima, majburiy jamoat ishlariga jalb qilish"
    ],
    correctIndex: 0,
    explanation: "Mehnat kodeksiga ko‘ra, intizomiy jazo choralari faqat uchtadir: hayfsan, jarima va mehnat shartnomasini bekor qilish.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 6-dars"
  },
  {
    id: 'd11-q005',
    topicId: 'mehnat',
    question: "O‘zbekistonda mustaqil ravishda mehnat shartnomasi tuzish va ishga joylashishga necha yoshdan ruxsat etiladi?",
    options: [
      "16 yoshdan",
      "18 yoshdan",
      "15 yoshdan",
      "14 yoshdan"
    ],
    correctIndex: 0,
    explanation: "Mehnat kodeksiga ko‘ra, 16 yoshdan boshlab har bir shaxs mustaqil ravishda mehnat shartnomasi tuzish huquqiga ega.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 3-dars"
  },
  {
    id: 'd11-q006',
    topicId: 'mehnat',
    question: "Voyaga yetmagan (16 dan 18 yoshgacha bo‘lgan) xodimlar uchun qonunchilikda haftalik ish vaqtining muddati qancha qilib cheklangan?",
    options: [
      "Haftasiga 36 soatdan oshmasligi kerak",
      "Haftasiga 40 soatdan oshmasligi kerak",
      "Haftasiga 24 soatdan oshmasligi kerak",
      "Haftasiga 30 soatdan oshmasligi kerak"
    ],
    correctIndex: 0,
    explanation: "Voyaga yetmagan xodimlar uchun qisqartirilgan ish vaqti belgilanadi. Bunda 16 dan 18 yoshgacha bo‘lgan xodimlarga haftasiga 36 soatdan oshmaydigan ish vaqti belgilanadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 4-dars"
  },
  {
    id: 'd11-q007',
    topicId: 'mehnat',
    question: "Mehnat kodeksining 106-moddasiga muvofiq, ishga qabul qilish paytida ish beruvchi tomonidan talab qilinishi taqiqlangan hujjat qaysi?",
    options: [
      "Yashash joyidan yoki mahalladan ma’lumotnoma va oila a’zolarining shaxsiy hujjatlari",
      "Pasport yoki identifikatsiyalovchi ID-karta",
      "Oxirgi ish joyidan olingan mehnat daftarchasi yoki uning ko‘chirmasi",
      "Harbiy xizmatga majburlar yoki harbiy xizmatga chaqiriluvchilar uchun harbiy hisob hujjatlari"
    ],
    correctIndex: 0,
    explanation: "Ish beruvchi tomonidan qonun hujjatlarida nazarda tutilmagan hujjatlarni, masalan, yashash joyidan ma'lumotnoma yoki oila a'zolari haqidagi ma'lumotlarni talab qilish taqiqlanadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 3-dars"
  },
  {
    id: 'd11-q008',
    topicId: 'mehnat',
    question: "Xodimga intizomiy chora tariqasida jarima qo‘llanilganda, uning miqdori qonun bo‘yicha qanday cheklanadi?",
    options: [
      "Xodim o‘rtacha oylik ish haqining 30 foizidan, ichki tartib-qoidalar buzilganda esa 50 foizidan oshmasligi kerak",
      "Har qanday holatda xodim oylik ish haqining aniq 80 foizi miqdorida ushlab qolinadi",
      "Faqat bir kunlik o‘rtacha ish haqi miqdorida jarima qo‘llanilishi mumkin",
      "Jarima miqdori ish beruvchi tomonidan cheksiz ravishda mustaqil belgilanishi mumkin"
    ],
    correctIndex: 0,
    explanation: "Jarima xodim o‘rtacha oylik ish haqining 30 foizidan, alohida hollarda esa ichki tartib-qoidalarga muvofiq 50 foizidan oshmagan miqdorda undiriladi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 6-dars"
  },
  {
    id: 'd11-q009',
    topicId: 'mehnat',
    question: "Homilador ayollar va voyaga yetmagan bolalari bor ayollar mehnatini muhofaza qilish bo‘yicha qanday qoida amal qiladi?",
    options: [
      "Ularni tungi ishlarga va muddatidan tashqari ishlarga jalb etishga faqat o‘zlarining yozma roziligi bilan yo‘l qo‘yiladi",
      "Ular hech qanday holatda tungi navbatchilikka yoki bayram kunlaridagi ishlarga jalb etilishi mumkin emas",
      "Ular har kuni majburiy ravishda 12 soatlik smenada ishlashlari shart",
      "Ular ish beruvchining birinchi buyrug‘i bilan xizmat safarlariga ketishga majburdirlar"
    ],
    correctIndex: 0,
    explanation: "Homilador ayollar va voyaga yetmagan bolalari bor ayollarni tungi ishlarga va muddatidan tashqari ishlarga jalb etish faqat ularning yozma roziligi bilan amalga oshiriladi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 7-dars"
  },
  {
    id: 'd11-q010',
    topicId: 'mehnat',
    question: "Aholini ishga joylashtirish tizimidagi «Kasbiy ko‘nikmalar markazlari»ning asosiy huquqiy vazifasi nimadan iborat?",
    options: [
      "Fuqarolarni mehnat bozoridagi ehtiyojlarga qarab bepul kasb-hunarga o‘rgatish va ularning bandligini ta’minlashga ko‘maklashish",
      "Barcha ishsiz fuqarolarga har oyda majburiy ravishda yuqori miqdorda jarimalar belgilash",
      "Tadbirkorlik subyektlaridan majburiy ravishda soliq to‘lovlarini undirib olish",
      "Faqat oliy ma’lumotli mutaxassislarni xorijiy davlatlarga ish safarlariga jo‘natish"
    ],
    correctIndex: 0,
    explanation: "Ushbu markazlar ishsiz va ish qidirayotgan fuqarolarni mehnat bozorida talab yuqori bo'lgan kasblarga qayta tayyorlash va ularga ish topishda ko'maklashish uchun xizmat qiladi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 2-dars"
  },

  // ==========================================
  // II BOB. MA'MURIY HUQUQ
  // ==========================================
  {
    id: 'd11-q011',
    topicId: 'mamuriy',
    question: "Ma’muriy huquq sohasi asosan qaysi munosabatlarni tartibga soladi?",
    options: [
      "Davlat boshqaruvi organlari (ijro etuvchi hokimiyat) faoliyati jarayonida yuzaga keladigan ijtimoiy munosabatlarni",
      "Fuqarolar o‘rtasidagi meros huquqi va oilaviy kelishmovchiliklarni",
      "Tadbirkorlar o‘rtasidagi bitimlar buzilishi va fuqarolik nizolarini",
      "Faqat xalqaro tashkilotlar va davlatlar o‘rtasidagi diplomatik aloqalarni"
    ],
    correctIndex: 0,
    explanation: "Ma’muriy huquq — davlat boshqaruvi organlarining o‘z vazifalarini amalga oshirishi davomida vujudga keladigan munosabatlarni tartibga soluvchi ommaviy huquq tarmog‘idir.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 10-dars"
  },
  {
    id: 'd11-q012',
    topicId: 'mamuriy',
    question: "O‘zbekistonda Yagona interaktiv davlat xizmatlari portali (YIDXP — my.gov.uz) qaysi yilda tashkil etilgan?",
    options: [
      "2013-yilda",
      "2017-yilda",
      "2020-yilda",
      "2010-yilda"
    ],
    correctIndex: 0,
    explanation: "Aholiga masofadan turib tezkor va qulay davlat xizmatlarini ko‘rsatish maqsadida my.gov.uz portali 2013-yilda ishga tushirilgan.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 11-dars"
  },
  {
    id: 'd11-q013',
    topicId: 'mamuriy',
    question: "Davlat organlari qarorlari va mansabdor shaxslar harakatlari ustidan berilgan shikoyatlarni qaysi sud ko‘rib chiqadi?",
    options: [
      "Ma’muriy sudlar",
      "Jinoyat ishlari bo‘yicha sudlar",
      "Fuqarolik ishlari bo‘yicha sudlar",
      "Iqtisodiy sudlar"
    ],
    correctIndex: 0,
    explanation: "Davlat boshqaruvi organlari va mansabdor shaxslarning qonunga zid qarorlari hamda harakatlari ustidan berilgan shikoyatlarni Ma’muriy sudlar ko‘rib hal etadi.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 12-dars"
  },
  {
    id: 'd11-q014',
    topicId: 'mamuriy',
    question: "O‘zbekiston Respublikasida haftaning qaysi kuni «Huquqbuzarliklar profilaktikasi kuni» deb belgilangan?",
    options: [
      "Payshanba",
      "Dushanba",
      "Shanba",
      "Juma"
    ],
    correctIndex: 0,
    explanation: "Huquqbuzarliklarning oldini olish, aholi o‘rtasida tushuntirish ishlarini olib borish uchun har haftaning payshanba kuni profilaktika kuni etib belgilangan.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 15-dars"
  },
  {
    id: 'd11-q015',
    topicId: 'mamuriy',
    question: "Qonunda ma’muriy javobgarlik belgilangan ma’muriy huquqbuzarlik tushunchasining asosi nima?",
    options: [
      "Davlat yoki jamoat tartibiga, mulkka, fuqarolarning huquqlariga tajovuz qiladigan g‘ayriqonuniy, aybli harakat yoki harakatsizlik",
      "Faqat iqtisodiy shartnomalar shartlarini bajarmaslik natijasida yetkazilgan moddiy zarar",
      "Og‘ir jinoyat sodir etib, inson hayotiga xavf solish bilan bog‘liq ijtimoiy xavfli qilmishlar",
      "Kasbiy majburiyatlarni buzib, korxonaga ma’naviy ziyon yetkazish"
    ],
    correctIndex: 0,
    explanation: "Ma’muriy huquqbuzarlik — jamiyatda o‘rnatilgan tartib-qoidalarni buzadigan, lekin jinoiy darajadagi og‘ir xavfga ega bo‘lmagan aybli va g‘ayriqonuniy qilmishdir.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 13-dars"
  },
  {
    id: 'd11-q016',
    topicId: 'mamuriy',
    question: "Ma’muriy javobgarlik to‘g‘risidagi kodeksga muvofiq, ma’muriy qamoq jazosining muddati qancha etib belgilangan?",
    options: [
      "Odatda 15 sutkagacha, favqulodda holatlarda esa 30 sutkagacha",
      "Odatda 3 oygacha va majburiy axloq tuzatish ishlari",
      "Faqat 5 sutkagacha va jarima jazosi",
      "Kamida 1 yildan 3 yilgacha ozodlikni cheklash"
    ],
    correctIndex: 0,
    explanation: "Ma’muriy qamoq jazosi eng og‘ir ma’muriy jazo turi bo‘lib, u sud tomonidan odatda 15 sutkagacha, favqulodda vaziyatlarda esa 30 sutkagacha belgilanadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 14-dars"
  },
  {
    id: 'd11-q017',
    topicId: 'mamuriy',
    question: "Quyidagilardan qaysi biri bevosita ma’muriy-huquqiy munosabat hisoblanadi?",
    options: [
      "Avtotransport vositasini davlat ro‘yxatidan o‘tkazish va haydovchilik guvohnomasini olish jarayoni",
      "Ikki fuqaro o‘rtasida xususiy uy-joyni ijaraga berish bo‘yicha shartnoma imzolash",
      "Vasiyatnoma tuzish va uni notariusda rasmiylashtirish",
      "Tadbirkor tomonidan o‘z xodimlariga oylik ish haqi to‘lash"
    ],
    correctIndex: 0,
    explanation: "Avtotransport vositasini ro‘yxatdan o‘tkazish davlat organi (IIB) va fuqaro o‘rtasidagi hokimiyat vakolatiga asoslangan munosabat, ya’ni ma’muriy-huquqiy munosabatdir.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 10-dars"
  },
  {
    id: 'd11-q018',
    topicId: 'mamuriy',
    question: "Fuqaro qanday holatda bevosita ma’muriy sudga murojaat qilish huquqiga ega bo‘ladi?",
    options: [
      "Davlat organining noqonuniy qarori yoki mansabdor shaxsning harakati uning huquqlari va erkinliklarini buzgan deb hisoblaganda",
      "Soliq idoralari tomonidan unga soliq imtiyozlari berilishi rad etilganda va u buni adolatsiz deb bilganida",
      "Qo‘shnisi bilan yer chegarasi masalasida o‘zaro nizo kelib chiqqanida",
      "Ish beruvchi tomonidan intizomiy jazo sifatida hayfsan berilganda"
    ],
    correctIndex: 0,
    explanation: "Ma'muriy sud davlat organlarining jismoniy yoki yuridik shaxs huquqlarini cheklovchi noqonuniy hujjatlari va qarorlarini bekor qilish bo'yicha shikoyatlarni ko'rib chiqadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 12-dars"
  },
  {
    id: 'd11-q019',
    topicId: 'mamuriy',
    question: "Huquqbuzarliklar profilaktikasining eng asosiy va birlamchi vazifasi nima hisoblanadi?",
    options: [
      "Huquqbuzarliklarni sodir etish sabablari va ularga imkon beradigan shart-sharoitlarni aniqlash hamda ularni bartaraf etish",
      "Huquqbuzarlarni qidirib topib, ularni qamoqxonaga joylashtirish va mol-mulkini davlat foydasiga musodara qilish",
      "Aholi o‘rtasida faqat jarima to‘lovlari tizimini yanada kuchaytirish",
      "Faqat maktab o‘quvchilarini huquq darslariga majburiy qatnashishlarini ta’minlash"
    ],
    correctIndex: 0,
    explanation: "Profilaktikaning mohiyati huquqbuzarlik sodir etilguncha uning oldini olish, bunga sabab bo'lgan omillarni bartaraf etishdan iborat.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 15-dars"
  },
  {
    id: 'd11-q020',
    topicId: 'mamuriy',
    question: "Quyida keltirilgan jazo turlaridan qaysi biri ma’muriy jazo turlariga kirmaydi va u fuqarolarga nisbatan qo‘llanilmaydi?",
    options: [
      "Axloq tuzatish ishlari va ozodlikni cheklash",
      "Ma’muriy jarima va maxsus huquqdan (haydovchilik huquqidan) mahrum qilish",
      "Ma’muriy qamoq va litsenziyani bekor qilish",
      "Huquqbuzarlik sodir etish quroli bo‘lgan ashyoni musodara qilish"
    ],
    correctIndex: 0,
    explanation: "Axloq tuzatish ishlari va ozodlikni cheklash jazo turlari faqat Jinoyat kodeksida belgilangan bo'lib, sud tomonidan jinoiy jazolar sifatida qo'llaniladi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 14-dars"
  },

  // ==========================================
  // III BOB. JINOYAT HUQUQI. KRIMINOLOGIYA
  // ==========================================
  {
    id: 'd11-q021',
    topicId: 'jinoyat',
    question: "Jinoyat huquqi sohasining asosiy vazifasi va mohiyati nimadan iborat?",
    options: [
      "Qaysi ijtimoiy xavfli qilmishlar jinoyat ekanligini belgilash hamda ularni sodir etgan shaxslarga nisbatan jazo choralarini belgilash",
      "Faqat iqtisodiy bitimlar buzilganda taraflarga moddiy kompensatsiya to‘lash tartibini belgilash",
      "Davlat idoralari o‘rtasida vakolatlar taqsimotini tartibga solish",
      "Merosxo‘rlar o‘rtasida mol-mulkni qonuniy taqsimlab berish"
    ],
    correctIndex: 0,
    explanation: "Jinoyat huquqi ijtimoiy xavfli qilmishlarni taqiqlaydi, ularni jinoyat deb tasniflaydi va ularga qarshi jazo choralarini belgilaydi.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 17-dars"
  },
  {
    id: 'd11-q022',
    topicId: 'jinoyat',
    question: "Yuridik sohada keng qo‘llaniladigan «Aybsizlik prezumpsiyasi» tamoyili nimani anglatadi?",
    options: [
      "Shaxsning aybi qonuniy tartibda isbotlanmaguncha va sudning qonuniy kuchga kirgan hukmi bo‘lmaguncha u aybsiz hisoblanadi",
      "Har qanday gumon qilinuvchi shaxs darhol aybdor deb topilishi va qamoqqa olinishi kerak",
      "Agar shaxs o‘zining aybsizligini isbotlab bera olmasa, u avtomatik ravishda aybdor deb topiladi",
      "Faqat davlat idoralari rahbarlari har qanday vaziyatda aybsiz deb tan olinadi"
    ],
    correctIndex: 0,
    explanation: "Aybsizlik prezumpsiyasi konstitutsiyaviy tamoyil bo‘lib, unga ko‘ra shaxs sudda aybi tasdiqlanmaguncha aybsiz hisoblanadi (shaxs o‘z aybsizligini isbotlashga majbur emas).",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 26-dars"
  },
  {
    id: 'd11-q023',
    topicId: 'jinoyat',
    question: "O‘zbekistonda favqulodda xavf tug‘ilganda yoki zo‘ravonlikka duch kelganda ichki ishlar organlariga qaysi qisqa raqam orqali murojaat qilinadi?",
    options: [
      "102",
      "101",
      "103",
      "104"
    ],
    correctIndex: 0,
    explanation: "Ichki ishlar organlarining (militsiya/politsiya) tezkor navbatchilik qismiga ulanish raqami 102 hisoblanadi.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 21-dars"
  },
  {
    id: 'd11-q024',
    topicId: 'jinoyat',
    question: "Xalqaro va milliy qonunchilikda «Genotsid» jinoyati qanday ta’riflanadi?",
    options: [
      "Muayyan milliy, etnik, irqiy yoki diniy guruhni to‘liq yoki qisman yo‘q qilib yuborish maqsadida qasddan sodir etilgan jinoiy harakatlar",
      "Davlat chegarasini noqonuniy kesib o‘tib, kontrabanda tovarlarini olib kirish",
      "Ekologik ofat zonalarida ruxsatsiz qurilish ishlarini amalga oshirish",
      "Tashkilot va korxonalarning pullarini o‘zlashtirish orqali moddiy ziyon yetkazish"
    ],
    correctIndex: 0,
    explanation: "Genotsid — insoniyat tinchligi va xavfsizligiga qarshi qaratilgan eng og‘ir jinoyatlardan bo‘lib, ma’lum guruhlarni guruh sifatidagi mavjudligini yo‘q qilishga qaratilgan.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 23-dars"
  },
  {
    id: 'd11-q025',
    topicId: 'jinoyat',
    question: "«Bulling» (Bullying) tushunchasining yuridik-pedagogik mohiyati nima?",
    options: [
      "Bir shaxs yoki guruh tomonidan zaifroq bo‘lgan shaxsga nisbatan qasddan va tizimli ravishda amalga oshiriladigan tazyiq, qo‘rqitish va kamsitish harakatlari",
      "Dars qoldirgan o‘quvchilarga nisbatan maktab ma’muriyati tomonidan qo‘llaniladigan intizomiy jazo choralari",
      "Do‘stlar o‘rtasidagi vaqtincha va ijobiy hazil-mutoyibalar",
      "Ota-onalar tomonidan o‘z farzandlarini sport to‘garaklariga majburan berishi"
    ],
    correctIndex: 0,
    explanation: "Bulling — tizimli ravishda shaxsiyatni kamsitish, jismoniy yoki ruhiy tazyiq o‘tkazish bo‘lib, zo‘ravonlikning boshlang‘ich ko‘rinishlaridan biridir.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 21-dars"
  },
  {
    id: 'd11-q026',
    topicId: 'jinoyat',
    question: "Jinoyat kodeksida belgilangan jazo tizimiga ko‘ra, quyidagilardan qaysi biri jinoiy jazo turlariga kirmaydi?",
    options: [
      "Ma’muriy qamoq va ogohlantirish xati",
      "Jarima va majburiy jamoat ishlari",
      "Axloq tuzatish ishlari va ozodlikni cheklash",
      "Ozodlikdan mahrum qilish va umrbod ozodlikdan mahrum qilish"
    ],
    correctIndex: 0,
    explanation: "Ma’muriy qamoq (15 sutkagacha) va ogohlantirish faqat ma’muriy huquqbuzarliklarga nisbatan qo‘llaniladigan jazo turlari hisoblanadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 18-dars"
  },
  {
    id: 'd11-q027',
    topicId: 'jinoyat',
    question: "O‘zbekiston Respublikasida jinoyat sodir etgan shaxs necha yoshdan boshlab umumiy tartibda jinoiy javobgarlikka tortiladi?",
    options: [
      "16 yoshdan (ayrim o‘ta og‘ir jinoyatlar uchun esa 13 yoki 14 yoshdan)",
      "Faqat 18 yoshga to‘lib, to‘liq muomala layoqatiga ega bo‘lgandan so‘ng",
      "Barcha holatlarda 14 yoshdan boshlab",
      "15 yoshdan boshlab, agar maktab o‘quvchisi bo‘lsa"
    ],
    correctIndex: 0,
    explanation: "Jinoyat kodeksiga ko‘ra, umumiy jinoiy javobgarlikka tortish yoshi 16 yosh hisoblanadi. Biroq ayrim o‘ta og‘ir jinoyatlar (masalan, qasddan odam o‘ldirish) uchun javobgarlik 13 yoki 14 yoshdan boshlanadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 18-dars"
  },
  {
    id: 'd11-q028',
    topicId: 'jinoyat',
    question: "Jinoyat kodeksidagi «Hech kim aynan bitta jinoyat uchun ikki marta javobgarlikka tortilishi mumkin emas» degan qoida qaysi prinsipga tegishli?",
    options: [
      "Odillik prinsipi",
      "Qonuniylik prinsipi",
      "Insonparvarlik prinsipi",
      "Demokratizm prinsipi"
    ],
    correctIndex: 0,
    explanation: "Jinoyat kodeksining 7-moddasiga ko‘ra, jazo qilmishning og‘irligiga mos bo‘lishi shart va hech kim bitta jinoyat uchun ikki marta jazolanishi mumkin emas, bu odillik prinsipidir.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 17-dars"
  },
  {
    id: 'd11-q029',
    topicId: 'jinoyat',
    question: "Quyidagi jinoiy qilmishlardan qaysilari «Boshqaruv tartibiga va davlat hokimiyatiga qarshi jinoyatlar» guruhiga kiritiladi?",
    options: [
      "Hokimiyat yoki mansab vakolatini suiiste’mol qilish, pora olish va pora berish",
      "O‘g‘rilik, firbgarlik va birovning mashinasini olib qochish",
      "Tuhmat qilish va odamlarni haqorat qilish",
      "Daraxtlarni noqonuniy kesish va tabiatga ommaviy zarar yetkazish"
    ],
    correctIndex: 0,
    explanation: "Pora olish, pora berish va mansab vakolatidan tashqariga chiqish davlat hokimiyati va boshqaruv tartibiga qarshi qaratilgan korrupsiyaviy jinoyatlardir.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 25-dars"
  },
  {
    id: 'd11-q030',
    topicId: 'jinoyat',
    question: "Yuridik amaliyotda «Ekstraditsiya» (jinoyatchilarni topshirish) jarayonida O‘zbekiston qonunchiligida qanday cheklov mavjud?",
    options: [
      "O‘zbekiston Respublikasi o‘z fuqarolarini tergov qilish yoki jazolash uchun chet davlatga topshirmaydi",
      "Faqat iqtisodiy jinoyat sodir etgan chet el fuqarolari ekstraditsiya qilinadi",
      "Har qanday gumon qilinuvchi shaxs so‘ralgan zahoti darhol chet davlatga topshirilishi shart",
      "O‘zbekiston faqat ayol jinoyatchilarni ekstraditsiya qilishga ruxsat beradi"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiya va Jinoyat kodeksi normalariga ko‘ra, O‘zbekiston o‘z fuqarolarini xorijiy davlatga bermaydi (jazo muqarrarligi O‘zbekiston hududida ta’minlanadi).",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 18-dars"
  },

  // ==========================================
  // IV BOB. EKOLOGIYA HUQUQI
  // ==========================================
  {
    id: 'd11-q031',
    topicId: 'ekologiya',
    question: "Ekologiya huquqi sohasining asosiy tartibga solish predmeti nimadan iborat?",
    options: [
      "Atrof-muhitni muhofaza qilish, tabiiy resurslardan oqilona foydalanish va ekologik xavfsizlikni ta’minlash borasidagi ijtimoiy munosabatlarni",
      "Faqat qishloq xo‘jaligi korxonalari o‘rtasida yer ijarasiga doir munosabatlarni",
      "Fuqarolarga tegishli uy-joy mulkini sotish va taqdim etish qoidalarini",
      "Xalqaro savdo-sotiq shartnomalari tuzish munosabatlarini"
    ],
    correctIndex: 0,
    explanation: "Ekologiya huquqi tabiat va inson o‘rtasidagi aloqalarni muvozanatda saqlash, tabiiy resurslarni asrash munosabatlarini tartibga soladi.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 29-dars"
  },
  {
    id: 'd11-q032',
    topicId: 'ekologiya',
    question: "O‘zbekiston Respublikasi Konstitutsiyasining qaysi moddasida fuqarolarning atrof-tabiiy muhitga ehtiyotkorona munosabatda bo‘lish majburiyati belgilangan?",
    options: [
      "62-modda",
      "49-modda",
      "15-modda",
      "28-modda"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 62-moddasiga ko‘ra: Fuqarolar atrof-tabiiy muhitga ehtiyotkorona munosabatda bo‘lishga majburdirlar.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 29-dars"
  },
  {
    id: 'd11-q033',
    topicId: 'ekologiya',
    question: "Yo‘qolib ketish xavfi ostida turgan noyob hayvonlar va o‘simliklar turlarini ro‘yxatga oluvchi «Qizil kitob» O‘zbekistonda birinchi marta qaysi yilda nashr etilgan?",
    options: [
      "1984-yilda",
      "1991-yilda",
      "2001-yilda",
      "1970-yilda"
    ],
    correctIndex: 0,
    explanation: "O‘zbekiston hududida yo‘qolib borayotgan biologik turlarni asrash maqsadida birinchi Qizil kitob 1984-yilda chop etilgan.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 32-dars"
  },
  {
    id: 'd11-q034',
    topicId: 'ekologiya',
    question: "Yuridik va biologik sohalardagi «Biologik xilma-xillik» tushunchasi nimani ifodalaydi?",
    options: [
      "Muayyan hududdagi va butun sayyoramizdagi barcha turdagi tirik organizmlar va tabiiy ekotizimlarning rang-barangligini",
      "Faqat chorvachilik korxonalarida parvarish qilinadigan uy hayvonlari sonini",
      "Orol dengizi qurishi natijasida faqat u yerda qolgan baliq turlarini",
      "Inson tomonidan sun’iy yaratilgan barcha kimyoviy elementlar ro‘yxatini"
    ],
    correctIndex: 0,
    explanation: "Biologik xilma-xillik (biodiversity) — barcha o‘simlik, hayvonot va tabiiy muhit turlarining bir butunlikdagi xilma-xilligi va genofondidir.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 32-dars"
  },
  {
    id: 'd11-q035',
    topicId: 'ekologiya',
    question: "Tabiatni muhofaza qilish qoidalarini buzganlik uchun qonunchilikda javobgarlikning qanday turlari belgilangan?",
    options: [
      "Intizomiy, ma’muriy, fuqaroviy-huquqiy (moddiy) va jinoiy javobgarlik",
      "Faqat ma’muriy jarimalar va korxonadan haydash choralari",
      "Faqat og‘izaki ogohlantirish va jamoat ishlari",
      "Faqat xalqaro sudlar tomonidan jarimalar qo‘llash javobgarligi"
    ],
    correctIndex: 0,
    explanation: "Ekologik huquqbuzarlikning og‘irligi va xususiyatiga qarab javobgarlikning to‘rtta asosiy turi: intizomiy, ma'muriy, fuqaroviy va jinoiy javobgarlik qo'llanilishi mumkin.",
    difficulty: 'oson',
    legalBasis: "11-sinf darsligi, 30-dars"
  },
  {
    id: 'd11-q036',
    topicId: 'ekologiya',
    question: "Konstitutsiyaning 49-moddasiga binoan, har bir fuqaro ekologik sohada qanday muhim huquqlarga ega?",
    options: [
      "Qulay atrof-muhitga, uning holati to‘g‘risidagi ishonchli axborotga ega bo‘lish huquqi",
      "Tabiiy daryo va ko‘llardan hech qanday ruxsatnomasiz cheksiz foydalanish huquqi",
      "O‘rmon hududlarida o‘z xohishiga ko‘ra har qanday qurilishlarni amalga oshirish huquqi",
      "Faqat davlat qo‘riqxonalaridagi hayvonlarni ov qilish huquqi"
    ],
    correctIndex: 0,
    explanation: "Konstitutsiyaning 49-moddasi fuqarolarning qulay tabiiy muhitda yashash va tabiat holati haqida haqiqiy ma'lumot olish huquqini kafolatlaydi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 29-dars"
  },
  {
    id: 'd11-q037',
    topicId: 'ekologiya',
    question: "Qonunchilikka binoan, «Qizil kitob»ga kiritilgan noyob o‘simliklar va hayvonlarni asrashning eng asosiy huquqiy oqibati nima?",
    options: [
      "Ulardan har qanday shaklda foydalanish (kesish, ovlash) qat’iyan taqiqlanadi hamda qonuniy javobgarlikka sabab bo‘ladi",
      "Ular faqat xususiy hayvonot bog‘larida ko‘paytirilishi shart",
      "Ular davlat tomonidan faqat chet el mamlakatlariga eksport qilinishi mumkin",
      "Ular uchun fuqarolar har oyda majburiy ravishda soliq to‘lashlari zarur"
    ],
    correctIndex: 0,
    explanation: "Qizil kitobga kiritilgan biologik turlarni nobud qilish yoki ularga zarar yetkazish qat'iy taqiqlangan bo'lib, jinoiy javobgarlikkacha olib boradigan jazo choralarini keltirib chiqaradi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 32-dars"
  },
  {
    id: 'd11-q038',
    topicId: 'ekologiya',
    question: "Ekologik qoidalarni buzish oqibatida atrof-muhitga yetkazilgan moddiy zararni qoplash majburiyati kimning zimmasiga yuklanadi?",
    options: [
      "Zararni yetkazgan jismoniy yoki yuridik shaxslar zimmasiga",
      "Faqat mahalliy hokimiyat idoralari va Ekologiya qo‘mitasi zimmasiga",
      "Zarar ko‘rgan hududdagi barcha istiqomat qiluvchi aholi zimmasiga",
      "Faqat davlat byudjeti hisobidan qoplanadi"
    ],
    correctIndex: 0,
    explanation: "«Zarar yetkazganlik uchun javobgarlik» tamoyiliga ko‘ra, tabiatga va atrof-muhitga zarar yetkazgan shaxs yoki korxona yetkazilgan moddiy zararni to‘liq qoplashi shart.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 30-dars"
  },
  {
    id: 'd11-q039',
    topicId: 'ekologiya',
    question: "Jinoyat kodeksida belgilangan «Ekotsid» jinoyatining huquqiy ta’rifi qanday?",
    options: [
      "O‘simliklar yoki hayvonot dunyosini ommaviy qirib tashlash, atmosferani, yer yoki suv resurslarini zaharlash hamda ekologik ofat keltirib chiqarish",
      "Ruxsat etilmagan joylarga maishiy chiqindilarni va qog‘ozlarni tashlab ketish",
      "Ekologik toza oziq-ovqat mahsulotlarini noqonuniy ravishda sotish",
      "Faqat daryo qirg‘oqlarida ruxsatsiz cho‘milish qoidalarini buzish"
    ],
    correctIndex: 0,
    explanation: "Ekotsid — tabiatga qarshi sodir etiladigan eng og‘ir xalqaro va milliy jinoiy harakat bo‘lib, ommaviy ekologik halokat keltirib chiqarishni anglatadi.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 23-dars"
  },
  {
    id: 'd11-q040',
    topicId: 'ekologiya',
    question: "O‘zbekistonda «Muhofaza etiladigan tabiiy hududlar»ni (davlat qo‘riqxonalari, milliy bog‘lar) tashkil etishdan ko‘zlangan eng asosiy maqsad nima?",
    options: [
      "Tabiiy ekotizimlarni, noyob biologik turlarni va landshaftlarni o‘zining tabiiy holatida saqlab qolish va o‘rganish",
      "Aholi va sayyohlar uchun faqat keng ko‘lamli tijoriy ov maydonlarini yaratish",
      "Ushbu hududlardagi barcha o‘rmonlarni kesib, yog‘och sanoatini rivojlantirish",
      "Faqat chorvachilik va dehqonchilik fermer xo‘jaliklari uchun yangi yerlar ochish"
    ],
    correctIndex: 0,
    explanation: "Qo‘riqxona va milliy bog‘larning asosiy maqsadi — inson aralashuvini cheklab, tabiat genofondini hamda yovvoyi turlarni asl holicha asrab qolishdir.",
    difficulty: 'qiyin',
    legalBasis: "11-sinf darsligi, 32-dars"
  }
];
