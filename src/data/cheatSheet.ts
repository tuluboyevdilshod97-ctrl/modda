import { LegalCheatItem } from '../types';

export const CHEAT_SHEET_ITEMS: LegalCheatItem[] = [
  // --- YOSH MEZONLARI ---
  {
    id: 'yosh-10',
    category: 'yosh',
    title: "10 yosh",
    value: "Bolaning o'z fikrini bildirish huquqi & Farzandlikka olish roziligi",
    details: "10 yoshga to'lgan bolaning fikri sud yoki vasiylik organida eshitilishi shart. Bolaning familiyasi o'zgartirilishi yoki uni farzandlikka olish faqat uning roziligi bilan amalga oshiriladi.",
    article: "Oila kodeksi, 68, 124-moddalar"
  },
  {
    id: 'yosh-14',
    category: 'yosh',
    title: "14 yosh",
    value: "Qisman muomala layoqati & Og'ir jinoyatlar uchun jazo",
    details: "14 yoshdan 18 yoshgacha bo'lgan voyaga yetmaganlar cheklangan muomala layoqatiga ega. Og'ir va o'ta og'ir jinoyatlar uchun (qasddan odam o'ldirish, talonchilik, bosqinchilik, terrorizm va h.k.) jinoiy javobgarlik 14 yoshdan boshlanadi. Shuningdek, pasport (ID-karta) olish majburiyati vujudga keladi.",
    article: "FK 27-modda, JK 17-modda"
  },
  {
    id: 'yosh-15',
    category: 'yosh',
    title: "15 yosh",
    value: "Ishga qabul qilish (istisno tariqasida)",
    details: "Yoshlarni mehnatga tayyorlash uchun umumta'lim maktablari o'quvchilari ota-onalaridan birining yozma roziligi bilan, sog'lig'iga va ta'lim olishiga zarar yetkazmaydigan yengil ishlarga 15 yoshdan qabul qilinishi mumkin.",
    article: "Yangi Mehnat kodeksi, 118-modda"
  },
  {
    id: 'yosh-16',
    category: 'yosh',
    title: "16 yosh",
    value: "Mehnatga qabul qilish & Umumiy jinoiy javobgarlik",
    details: "Ishga qabul qilishga 16 yoshdan yo'l qo'yiladi. Umumiy jinoiy javobgarlik ham qoida tariqasida jinoyat sodir etgunga qadar 16 yoshga to'lgan shaxslarga nisbatan qo'llaniladi.",
    article: "MK 118-modda, JK 17-modda"
  },
  {
    id: 'yosh-16-emansipatsiya',
    category: 'yosh',
    title: "16 yosh (Emansipatsiya)",
    value: "To'la muomala layoqatli deb e'lon qilish",
    details: "16 yoshga to'lgan voyaga yetmagan shaxs mehnat shartnomasi bo'yicha ishlayotgan bo'lsa yoki ota-onasi roziligi bilan tadbirkorlik bilan shug'ullanayotgan bo'lsa, vasiylik organi yoki sud qarori bilan to'la muomala layoqatli (emansipatsiya) deb e'lon qilinishi mumkin.",
    article: "Fuqarolik kodeksi, 28-modda"
  },
  {
    id: 'yosh-18',
    category: 'yosh',
    title: "18 yosh",
    value: "To'liq muomala layoqati, Saylov huquqi, Nikoh yoshi",
    details: "Fuqaro 18 yoshga to'lishi bilan to'liq muomala layoqatiga ega bo'ladi. Faol saylov huquqi (ovoz berish) vujudga keladi. Qat'iy nikoh yoshi erkaklar va ayollar uchun teng ravishda 18 yosh etib belgilangan. Harbiy xizmatga chaqirilish yoshi ham 18 yosh.",
    article: "FK 22-modda, Saylov kodeksi 4-modda, OK 15-modda"
  },
  {
    id: 'yosh-21',
    category: 'yosh',
    title: "21 yosh",
    value: "Mahalliy Kengashlar deputatligi",
    details: "Xalq deputatlari viloyat, tuman va shahar Kengashlariga saylanish yoshi saylov kuni 21 yoshga to'lgan bo'lishi kerak.",
    article: "Saylov kodeksi, 90-modda"
  },
  {
    id: 'yosh-25',
    category: 'yosh',
    title: "25 yosh",
    value: "Qonunchilik palatasi deputatligi, Tuman sudi sudyasi & Ombudsman",
    details: "Saylov kuni 25 yoshga to'lgan va kamida 5 yil O'zR hududida muqim yashagan fuqaro Qonunchilik palatasi deputati bo'lishi mumkin. Tuman/shahar sudi sudyasi lavozimiga kamida 25 yosh va kamida 5 yillik yuridik stajga ega shaxs tayinlanadi. Oliy Majlisning Inson huquqlari bo'yicha vakili (Ombudsman) ham kamida 25 yoshda bo'lishi shart.",
    article: "Konstitutsiya 93-modda, 'Sudlar to'g'risida'gi qonun"
  },
  {
    id: 'yosh-30',
    category: 'yosh',
    title: "30 yosh",
    value: "Viloyat sudi, Toshkent shahar sudi & Harbiy sud sudyasi",
    details: "Viloyat sudi, Toshkent shahar sudi, Qoraqalpog'iston Respublikasi sudi va O'zbekiston Respublikasi Harbiy sudi sudyasi lavozimiga 30 yoshdan kichik bo'lmagan va kamida 7 yillik yuridik stajga ega bo'lgan fuqaro tayinlanishi/saylanishi mumkin.",
    article: "'Sudlar to'g'risida'gi qonun"
  },
  {
    id: 'yosh-35',
    category: 'yosh',
    title: "35 yosh",
    value: "Prezidentlik, Oliy sud va Konstitutsiyaviy sud sudyaligi",
    details: "O'zbekiston Respublikasi Prezidenti lavozimiga 35 yoshdan kichik bo'lmagan, davlat tilini yaxshi biladigan, bevosita saylovgacha kamida 10 yil O'zbekistonda muqim yashagan fuqaro 7 yilga saylanadi. Oliy sud va Konstitutsiyaviy sud sudyalari ham kamida 35 yoshda va 15 yillik stajga ega bo'lishi shart.",
    article: "Konstitutsiya 106, 131, 132-moddalar"
  },
  {
    id: 'yosh-vasiylik-homiylik',
    category: 'yosh',
    title: "14 yoshgacha / 14-18 yosh",
    value: "Vasiylik va Homiylik chegarasi",
    details: "Ota-ona qaramog'idan mahrum bo'lgan 14 yoshga to'lmagan yetim bolalarga hamda sud tomonidan muomalaga layoqatsiz deb topilganlarga VASIYLIK belgilanadi. 14 yoshdan 18 yoshgacha bo'lganlarga hamda muomala layoqati cheklangan shaxslarga HOMIYLIK tayinlanadi.",
    article: "Fuqarolik kodeksi 32-modda, Oila kodeksi 173-modda"
  },

  // --- MUHIM MUDDATLAR ---
  {
    id: 'muddat-davo',
    category: 'muddat',
    title: "3 yil",
    value: "Umumiy da'vo muddati",
    details: "Fuqarolik huquqida shaxs o'zining buzilgan huquqini himoya qilish uchun sudga murojaat etishi mumkin bo'lgan umumiy da'vo muddati uch yil qilib belgilangan.",
    article: "Fuqarolik kodeksi, 150-modda"
  },
  {
    id: 'muddat-ishdan-boshatish-davo',
    category: 'muddat',
    title: "1 oy",
    value: "Ishga tiklash bo'yicha sudga murojaat muddati",
    details: "Ish beruvchi tomonidan nohaq ishdan bo'shatilgan xodim ishga tiklash to'g'risidagi nizo bo'yicha buyruq nusxasi topshirilgan kundan e'tiboran bir oy ichida sudga da'vo arizasi berishi shart.",
    article: "Yangi Mehnat kodeksi, 560-modda"
  },
  {
    id: 'muddat-ogohlantirish-xodim',
    category: 'muddat',
    title: "14 kalendar kun",
    value: "Xodim o'z xohishi bilan bo'shaganda ogohlantirish muddati",
    details: "Xodim nomuayyan muddatli mehnat shartnomasini o'z tashabbusi bilan bekor qilish haqida ish beruvchini kamida 14 kalendar kun oldin yozma ravishda ogohlantirishi shart.",
    article: "Yangi Mehnat kodeksi, 160-modda"
  },
  {
    id: 'muddat-ogohlantirish-shtat',
    category: 'muddat',
    title: "2 oy oldin",
    value: "Tashkilot tugatilganda yoki shtat qisqarganda ogohlantirish",
    details: "Ish beruvchi korxona tugatilishi yoki xodimlar soni (shtati) qisqarishi munosabati bilan mehnat shartnomasini bekor qilish niyati haqida xodimni kamida ikki oy oldin yozma ravishda (tilxat olib) ogohlantirishi shart.",
    article: "Yangi Mehnat kodeksi, 165-modda"
  },
  {
    id: 'muddat-sinov',
    category: 'muddat',
    title: "3 oy (rahbarlar uchun 6 oy)",
    value: "Dastlabki sinov muddati chegarasi",
    details: "Dastlabki sinov muddati uch oydan, tashkilot rahbarlari, ularning o'rinbosarlari va bosh buxgalterlar uchun olti oydan oshmasligi kerak. Homilador ayollar, 3 yoshgacha bolasi bor ayollar va yangi bitiruvchilarga sinov belgilanmaydi.",
    article: "Yangi Mehnat kodeksi, 130, 131-moddalar"
  },
  {
    id: 'muddat-tatil',
    category: 'muddat',
    title: "21 kalendar kun",
    value: "Yillik asosiy eng kam mehnat ta'tili",
    details: "Yangi Mehnat kodeksiga ko'ra, har yilgi asosiy eng kam mehnat ta'tilining davomiyligi yigirma bir kalendar kundan kam bo'lishi mumkin emas (eski kodeksda 15 ish kuni edi).",
    article: "Yangi Mehnat kodeksi, 217-modda"
  },
  {
    id: 'muddat-tatil-imtiyozli',
    category: 'muddat',
    title: "30 kalendar kun",
    value: "Voyaga yetmaganlar va nogironligi bo'lgan xodimlar ta'tili",
    details: "O'n sakkiz yoshga to'lmagan xodimlarga hamda I va II guruh nogironligi bo'lgan shaxslarga yillik asosiy uzaytirilgan ta'til kamida 30 kalendar kuni miqdorida beriladi.",
    article: "Yangi Mehnat kodeksi, 218-modda"
  },
  {
    id: 'muddat-meros',
    category: 'muddat',
    title: "6 oy",
    value: "Merosni qabul qilish muddati",
    details: "Meros ochilgan kundan (meros qoldiruvchi vafot etgan kundan) e'tiboran olti oy ichida merosxo'rlar tomonidan notariusga ariza berish orqali qabul qilinishi lozim.",
    article: "Fuqarolik kodeksi, 1146-modda"
  },
  {
    id: 'muddat-nikoh-ariza',
    category: 'muddat',
    title: "1 oy",
    value: "Nikohni qayd etish kutish muddati",
    details: "Nikoh tuzish nikohlanuvchilar tomonidan FHDYo organiga ariza berilgan kundan e'tiboran bir oy o'tgach, shaxslarning bevosita ishtirokida amalga oshiriladi. Uzrli sabablar (homiladorlik, bola tug'ilishi) bo'lganda muddat qisqartirilishi mumkin.",
    article: "Oila kodeksi, 13-modda"
  },
  {
    id: 'muddat-aliment-miqdori',
    category: 'muddat',
    title: "1/4, 1/3, 1/2 qism",
    value: "Voyaga yetmagan bolalar uchun oylik aliment",
    details: "Sud tartibida ota-onadan olinadigan aliment miqdori: 1 nafar bola uchun — daromadning 1/4 qismi, 2 nafar bola uchun — 1/3 qismi, 3 va undan ortiq bola uchun — 1/2 qismi miqdorida undiriladi.",
    article: "Oila kodeksi, 99-modda"
  },
  {
    id: 'muddat-mamuriy-qamoq',
    category: 'muddat',
    title: "15 sutka (favqulodda holatda 30 sutka)",
    value: "Ma'muriy qamoq muddati",
    details: "Ma'muriy qamoq o'n besh sutkagacha, favqulodda holat sharoitida o'ttiz sutkagacha bo'lgan muddatga faqat sud tomonidan qo'llaniladi. Homilador ayollarga, 12 yoshgacha bolasi bor ayollarga, 18 yoshga to'lmaganlarga va 1-2 guruh nogironlariga qo'llanilmaydi.",
    article: "MJtK 29-modda"
  },

  // --- SUD VA JAVOBGARLIK ---
  {
    id: 'sud-habeas-corpus',
    category: 'sud',
    title: "48 soat (Habeas Corpus)",
    value: "Sud qarorisiz ushlab turishning chekka muddati",
    details: "Hech kim sudning qarorisiz qirq sakkiz soatdan ortiq muddat ushlab turilishi mumkin emas. Shaxsni ushlab turishning qonuniyligi va asosliligi 48 soat ichida sudda ko'rib chiqilishi shart.",
    article: "Konstitutsiya, 27-modda"
  },
  {
    id: 'sud-miranda',
    category: 'sud',
    title: "Miranda qoidasi",
    value: "Ushlangan shaxsga huquqlarini darhol tushuntirish",
    details: "Shaxsni ushlash chog'ida unga tushunarli tilda uning huquqlari va ushlab turilishi asoslari tushuntirilishi, shuningdek sukut saqlash huquqi va himoyachiga (advokatga) ega bo'lish huquqi kafolatlanishi shart.",
    article: "Konstitutsiya, 27-modda"
  },
  {
    id: 'sud-aybsizlik-prezumpsiyasi',
    category: 'sud',
    title: "Aybsizlik prezumpsiyasi",
    value: "Sud hukmi qonuniy kuchga kirmaguncha shaxs aybsiz",
    details: "Jinoyat sodir etganlikda ayblanayotgan har bir shaxs uning aybi qonunda nazarda tutilgan tartibda ochiq sud muhokamasi yo'li bilan isbotlanmaguncha va sudning qonuniy kuchga kirgan hukmi bilan aniqlanmaguncha aybsiz hisoblanadi. Barcha shubhalar ayblanuvchining foydasiga hal qilinadi.",
    article: "Konstitutsiya 28-modda, JPK 23-modda"
  },
  {
    id: 'sud-zaruriy-mudofaa',
    category: 'sud',
    title: "Zaruriy mudofaa & Oxirgi zarurat",
    value: "Qilmishning jinoiyligini istisno qiluvchi holatlar",
    details: "Hujum qiluvchiga zarar yetkazish yo'li bilan o'zini yoki boshqa shaxslarni, jamiyat va davlat manfaatlarini qonunga xilof tajovuzdan himoya qilishda sodir etilgan harakat jinoyat deb topilmaydi (zaruriy mudofaa chegarasidan chetga chiqilmagan bo'lsa).",
    article: "Jinoyat kodeksi, 37, 38-moddalar"
  },
  {
    id: 'sud-gumon-ushlash',
    category: 'sud',
    title: "72 soat",
    value: "Gumon qilinuvchini ushlab turishning umumiy muddati",
    details: "Jinoyat sodir etishda gumon qilinayotgan shaxs ichki ishlar yoki tergov organlari tomonidan ushlangan vaqtdan boshlab ko'pi bilan 72 soat ichida unga ayblov e'lon qilinishi yoki unga nisbatan qamoqqa olish ehtiyot chorasi qo'llanilishi yoinki u ozod qilinishi shart.",
    article: "Jinoyat-protsessual kodeksi, 226-modda"
  },

  // --- DAVLAT ORGANLARI ---
  {
    id: 'davlat-parlament',
    category: 'davlat',
    title: "150 deputat & 65 senator",
    value: "Oliy Majlis tarkibi (yangi Konstitutsiya)",
    details: "Qonunchilik palatasi 150 nafar deputatdan iborat bo'lib, aralash (majoritar-proporsional) saylov tizimi asosida saylanadi. Senat 65 nafar a'zodan (har bir viloyat, Toshkent shahri va Qoraqalpog'istondan 4 tadan jami 56 nafar, va Prezident tomonidan tayinlanadigan 9 nafar) iborat bo'ladi.",
    article: "Konstitutsiya 92, 94-moddalar"
  },
  {
    id: 'davlat-qonun-qabul',
    category: 'davlat',
    title: "Qonun qabul qilish zanjiri",
    value: "Palata qabul qiladi -> Senat ma'qullaydi -> Prezident imzolaydi",
    details: "Qonun Qonunchilik palatasi tomonidan qabul qilinadi, Senat tomonidan ma'qullanadi va Prezident tomonidan imzolangach va rasmiy e'lon qilingach qonuniy kuchga kiradi. Agar Senat rad etsa, Qonunchilik palatasi deputatlar umumiy sonining kamida uchdan ikki qismi ovozi bilan qonunni qabul qilishi mumkin.",
    article: "Konstitutsiya, 99-modda"
  },
  {
    id: 'davlat-vazirlar-mahkamasi',
    category: 'davlat',
    title: "Vazirlar Mahkamasi",
    value: "Ijro etuvchi hokimiyatning oliy organi",
    details: "O'zbekiston Respublikasi ijro etuvchi hokimiyatini Vazirlar Mahkamasi amalga oshiradi. U iqtisodiy, ijtimoiy va madaniy sohalarga rahbarlik qiladi. Bosh vazir nomzodi Qonunchilik palatasining ma'qullashidan so'ng Prezident tomonidan tayinlanadi.",
    article: "Konstitutsiya, 114, 118-moddalar"
  },
  {
    id: 'davlat-konstitutsiyaviy-sud',
    category: 'davlat',
    title: "Konstitutsiyaviy sud",
    value: "Qonunlarning Konstitutsiyaga muvofiqligini nazorat qiluvchi sud",
    details: "Konstitutsiyaviy sud qonunlar, Prezident farmonlari va hukumat qarorlarining Konstitutsiyaga muvofiqligini aniqlaydi. Fuqarolar ham o'zlarining konstitutsiyaviy huquqlari buzilgan taqdirda sud muhokamasidan so'ng Konstitutsiyaviy sudga to'g'ridan-to'g'ri shikoyat qilish huquqiga ega.",
    article: "Konstitutsiya, 133-modda"
  },

  // --- SAYLOV VA MUDDATLAR ---
  {
    id: 'saylov-muddatlari',
    category: 'saylov',
    title: "7 yil va 5 yil",
    value: "Prezident (7 yil), Parlament va Kengashlar (5 yil)",
    details: "O'zbekiston Respublikasi Prezidentining vakolat muddati yangi Konstitutsiyaga binoan 7 yil. Oliy Majlis Qonunchilik palatasi deputatlari, Senati a'zolari va mahalliy Kengashlar deputatlarining vakolat muddati esa 5 yil.",
    article: "Konstitutsiya 92, 106, 120-moddalar"
  },
  {
    id: 'saylov-tashabbus-100-ming',
    category: 'saylov',
    title: "100 000 fuqaro",
    value: "Xalq qonunchilik tashabbusi huquqi",
    details: "Yangi Konstitutsiyaga ko'ra, 100 ming nafardan kam bo'lmagan fuqarolar qonunchilik takliflarini Qonunchilik palatasiga kiritish huquqiga ega bo'ldi. Shuningdek Oliy sud, Bosh prokuror va Ombudsman ham qonunchilik tashabbusi huquqiga ega.",
    article: "Konstitutsiya, 98-modda"
  },
  {
    id: 'saylov-faol-passiv',
    category: 'saylov',
    title: "Faol va Passiv saylov huquqi",
    value: "Ovoz berish (18 yosh) / Saylanish (21, 25, 35 yosh)",
    details: "Saylov kuni 18 yoshga to'lgan fuqarolar saylash huquqiga ega. Sud tomonidan muomalaga layoqatsiz deb topilgan hamda og'ir va o'ta og'ir jinoyatlar uchun sud hukmi bilan ozodlikdan mahrum etish joylarida saqlanayotgan shaxslar saylovda ishtirok etmaydi.",
    article: "Konstitutsiya 128-modda, Saylov kodeksi"
  },
  {
    id: 'saylov-referendum',
    category: 'saylov',
    title: "Referendum",
    value: "Xalq hokimiyatining bevosita ifodasi (Umumxalq ovozi)",
    details: "Referendum — jamiyat va davlat hayotining eng muhim masalalari bo'yicha fuqarolarning umumxalq ovoz berishidir. Konstitutsiyani qabul qilish yoki unga o'zgartirishlar kiritish referendum orqali hal qilinishi mumkin.",
    article: "Konstitutsiya 8, 9-moddalar"
  }
];

