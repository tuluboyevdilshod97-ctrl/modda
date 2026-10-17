import React, { useState } from 'react';
import {
  ArrowLeft,
  Award,
  CheckCircle,
  Clock,
  Sparkles,
  BookOpen,
  Search,
  BookMarked,
  User,
  Calendar,
  Building,
  Landmark,
  Scale
} from 'lucide-react';
import { CHEAT_SHEET_ITEMS } from '../data/cheatSheet';
import { LegalCheatItem } from '../types';

interface TipsModalProps {
  onBack: () => void;
  onStartExam?: () => void;
  initialTab?: 'cheatsheet' | 'tips';
}

export const TipsModal: React.FC<TipsModalProps> = ({
  onBack,
  onStartExam,
  initialTab = 'cheatsheet'
}) => {
  const [activeTab, setActiveTab] = useState<'cheatsheet' | 'tips'>(initialTab);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tipSearchQuery, setTipSearchQuery] = useState<string>('');
  const [tipFilterCategory, setTipFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barchasi', icon: BookMarked },
    { id: 'yosh', label: 'Yosh mezonlari', icon: User },
    { id: 'muddat', label: 'Muhim muddatlar', icon: Calendar },
    { id: 'sud', label: 'Sud & Javobgarlik', icon: Scale },
    { id: 'davlat', label: 'Davlat organlari', icon: Building },
    { id: 'saylov', label: 'Saylov va muddatlar', icon: Landmark }
  ];

  const filteredCheatItems = CHEAT_SHEET_ITEMS.filter((item: LegalCheatItem) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      item.title.toLowerCase().includes(query) ||
      item.value.toLowerCase().includes(query) ||
      item.details.toLowerCase().includes(query) ||
      item.article.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const tips = [
    {
      id: 'tip-1',
      num: '01',
      category: 'konstitutsiya',
      title: 'Yangi tahrirdagi Konstitutsiya va eng ko‘p tushadigan o‘zgarishlar',
      badge: 'Oliy ustuvorlik',
      description:
        '2023-yilgi umumxalq referendumida qabul qilingan yangi tahrirdagi Konstitutsiyaning konseptual o‘zgarishlari testlarning eng asosiy o‘zagidir.',
      points: [
        'Miranda qoidasi: Shaxsni ushlash chog‘idayoq uning huquqlari va sukut saqlash huquqi tushuntirilishi shart (27-modda)',
        'Habeas Corpus: Hech kim sud qarorisiz 48 soatdan ortiq muddat ushlab turilishi mumkin emas (27-modda)',
        'Uy-joy daxlsizligi: Sud qarorisiz hech kimning uy-joyiga kirish yoki tintuv o‘tkazish taqiqlanadi (31-modda)',
        'Senat a’zolari soni: 100 nafardan 65 nafarga tushirilgan (har bir hududdan 4 tadan 56 nafar, va Prezident tomonidan 9 nafar)',
        'Prezidentlik vakolat muddati: 5 yildan 7 yilga uzaytirilgan (106-modda)',
        'Qonunchilik tashabbusi: Kamida 100 ming nafar fuqaro qonun taklifini kiritish huquqiga ega (98-modda)'
      ]
    },
    {
      id: 'tip-2',
      num: '02',
      category: 'yosh_muddat',
      title: 'Yosh mezonlari va subyektlarning huquqiy layoqat darajalari',
      badge: 'Yod olish shart',
      description:
        'Huquq testlarining eng nozik savollari yosh chegaralari va muomala layoqatiga bog‘liq bo‘ladi.',
      points: [
        '10 yosh: Bolaning fikri eshitilishi shart, familiya o‘zgartirish va farzandlikka olishda uning roziligi talab qilinadi (OK 68, 124)',
        '14 yosh: Qisman muomala layoqati (FK 27) & Og‘ir va o‘ta og‘ir jinoyatlar uchun jinoiy javobgarlik (JK 17)',
        '15 yosh: Maktab o‘quvchilarini ota-ona yozma roziligi bilan ta’limdan bo‘sh vaqtda yengil ishlarga qabul qilish (MK 118)',
        '16 yosh: Mehnatga qabul qilishning umumiy yoshi, umumiy jinoiy javobgarlik va Emansipatsiya (to‘la layoqatli deb topish) (FK 28)',
        '18 yosh: To‘liq fuqarolik muomala layoqati, saylovda ovoz berish (faol huquq) va qat’iy nikoh yoshi (FK 22, OK 15)',
        '21 yosh: Mahalliy Kengashlar deputatligiga saylanish yoshi (Saylov kodeksi 90)',
        '25 yosh: Qonunchilik palatasi deputati, tuman sudi sudyasi (kamida 5 yillik yuridik staj) va Ombudsman',
        '30 yosh: Viloyat sudi, Harbiy sud va Toshkent shahar sudi sudyasi (kamida 7 yillik staj)',
        '35 yosh: O‘zbekiston Respublikasi Prezidenti (kamida 10 yil muqim yashagan), Oliy sud va Konstitutsiyaviy sud sudyalari'
      ]
    },
    {
      id: 'tip-3',
      num: '03',
      category: 'strategiya',
      title: 'Inkor va taqiqlovchi so‘zlarni darhol payqash uslubi',
      badge: 'Xatolarning 45% siri',
      description:
        'Abituriyentlarning eng ko‘p adashadigan sababi — savol shartidagi inkor qo‘shimchasini payqamasdan, odatdagi to‘g‘ri variantni belgilab qo‘yishdir.',
      points: [
        'Savol shartidagi "...mumkin emas", "...to‘g‘ri kelmaydi", "...istisno tariqasida", "...taqiqlanadi", "...mansub emas" so‘zlariga diqqat qiling',
        'Savolni doimo oxirigacha, tinish belgilariga e’tibor qaratib kamida 2 marta to‘liq o‘qing',
        'Inkor savollarda 3 ta variant qonuniy to‘g‘ri haqiqat, faqat 1 tasi noto‘g‘ri bo‘ladi — aynan o‘sha 1 ta noto‘g‘risini topishingiz talab etiladi',
        'Ko‘zingiz ilg‘agan birinchi to‘g‘ri faktni shoshib belgilamang, avval savol nima talab qilayotganini aniqlang'
      ]
    },
    {
      id: 'tip-4',
      num: '04',
      category: 'strategiya',
      title: 'Mantiqiy chiqarib tashlash (Elimination) taktikasi',
      badge: 'Tezkor usul',
      description:
        'Aniq javobni eslay olmagan taqdiringizda ham to‘g‘ri javob ehtimolini 25% dan 100% gacha oshirish mumkin.',
      points: [
        'Mutlaq so‘zlar tuzog‘i: Variantdagi "faqat", "har doim", "hech qachon", "mutlaqo istisnosiz" so‘zlari bo‘lgan javoblar 90% holatda xato bo‘ladi, chunki huquqda doim istisnolar mavjud',
        'Konstitutsiyaviy inson huquqlariga yoki mantiqqa mutlaqo zid bo‘lgan 2 ta variantni dastlabki 5 soniyadayoq hisobdan chiqaring',
        'Qolgan ikkita o‘xshash variant orasida qonun moddasining rasmiy grammatik ta’rifiga eng to‘liq va aniq mos kelganini tanlang'
      ]
    },
    {
      id: 'tip-5',
      num: '05',
      category: 'yosh_muddat',
      title: 'Muhim protsessual muddatlar va vaqt mezonlari formulasi',
      badge: 'Raqamli mezonlar',
      description:
        'Fuqarolik, mehnat, oila va jinoyat protsessidagi muhim muddatlar DTM testlarida alohida savol bloklari sifatida keladi.',
      points: [
        'Umumiy da’vo muddati — 3 yil; ishdan nohaq bo‘shatish bo‘yicha sudga da’vo — 1 oy ichida (MK 560)',
        'Mehnat shartnomasida dastlabki sinov muddati: oddiy xodimlar uchun 3 oy, rahbarlar va bosh buxgalterlar uchun 6 oy',
        'Ogohlantirish muddatlari: Xodim o‘z xohishi bilan bo‘shaganda kamida 14 kalendar kun oldin, shtat qisqarganda esa kamida 2 oy oldin yozma ogohlantiradi',
        'Yangi Mehnat kodeksida har yilgi eng kam asosiy ta’til — 21 kalendar kuni (voyaga yetmaganlar uchun 30 kalendar kuni)',
        'Meros ochilgan kundan e’tiboran 6 oy ichida notarius orqali qabul qilinadi',
        'Ma’muriy qamoq muddati — 15 sutkagacha (favqulodda holatda 30 sutkagacha)',
        'Gumon qilinuvchini ushlab turish muddati — ko‘pi bilan 72 soat'
      ]
    },
    {
      id: 'tip-6',
      num: '06',
      category: 'organlar',
      title: 'Davlat organlari va mansabdor shaxslarning vakolatlarini chegaralash',
      badge: 'Konstitutsiyaviy tuzilma',
      description:
        'Davlat hokimiyatining qonun chiqaruvchi, ijro etuvchi va sud hokimiyati organlari vakolatlari savollarda aralashtirib beriladi.',
      points: [
        'Qonun chiqaruvchi organ: Qonunchilik palatasi (150 deputat) qonun qabul qiladi, Senat (65 senator) ma’qullaydi',
        'Davlat boshlig‘i: O‘zbekiston Respublikasi Prezidenti davlat boshlig‘i va Oliy Bosh Qo‘mondon bo‘lib, qonunlarni imzolaydi',
        'Ijro hokimiyati: Vazirlar Mahkamasi (Bosh vazir boshchiligida) ijro etuvchi hokimiyatning oliy organi hisoblanadi',
        'Konstitutsiyaviy sud: Qonunlarning Konstitutsiyaga muvofiqligini nazorat qiladi (oddiy sud nizolarini ko‘rmaydi)',
        'Sudyalar oliy kengashi: Sudyalar mustaqilligini ta’minlash va nomzodlarni tanlash bo‘yicha mustaqil organ'
      ]
    },
    {
      id: 'tip-7',
      num: '07',
      category: 'kazus',
      title: 'Kazus va vaziyatli amaliy masalalarni yechish algoritmi',
      badge: 'Milliy Sertifikat siri',
      description:
        'Milliy sertifikat va yangilangan DTM testlaridagi uzun matnli kazuslarni 4 elementli tahlil tizimi bilan xatosiz yechish mumkin.',
      points: [
        '1-qadam (Subyekt): Voqeada ishtirok etayotgan shaxsning yoshi, muomala layoqati, mansabi yoki maqomini aniqlang',
        '2-qadam (Obyekt): Qaysi huquqiy munosabatga daxl qilingan (mulk huquqi, mehnat, oilaviy ajrim, shaxsiy daxlsizlik)?',
        '3-qadam (Organ): Masalani ko‘rib chiqishga qaysi organ vakolatli (Sud, FHDYo, Prokuratura, IIB yoki Mehnat inspeksiyasi)?',
        '4-qadam (Muddat va faktlar): Da’vo yoki murojaat muddati buzilmaganmi? Tegishli protsessual ogohlantirish berilganmi?'
      ]
    },
    {
      id: 'tip-8',
      num: '08',
      category: 'strategiya',
      title: 'Xatolar ustida ishlash va chuqur tahlil qilish strategiyasi',
      badge: 'Natijani 40% oshirish',
      description:
        'Shunchaki yuzlab test yechish emas, aynan adashgan savollarning huquqiy moddasini tahlil qilish natijani karrasiga oshiradi.',
      points: [
        'Har bir test yakunlangach, javoblar tahlilida ko‘rsatilgan huquqiy asos (modda matni)ni sinchiklab o‘qib chiqing',
        'Ilovadagi "Xatolar ustida ishlash" maxsus rejimini har 2-3 kunda ishga tushirib, xato savollaringizni nolga tushiring',
        'Savolga ikkilanganingizda uni bayroqcha (flag) bilan belgilab qo‘ying va test yakunida qayta tekshiring',
        'Xato qilgan mavzuingizni "Huquqiy Lug‘at" yoki "Shpargalka" bo‘limidan qayta mustahkamlang'
      ]
    },
    {
      id: 'tip-9',
      num: '09',
      category: 'vaqt',
      title: 'Imtihon vaqtini 3 to‘lqinli boshqarish taktikasi (3-Wave System)',
      badge: 'Vaqtni tejash',
      description:
        'Imtihonda vaqt yetishmovchiligi yoki shoshilish tufayli oson savollarni boy bermaslik uchun vaqtingizni 3 bosqichga taqsimlang.',
      points: [
        '1-to‘lqin (birinchi 30 daqiqa): Savolni o‘qishingiz bilanoq 100% ishonchingiz komil bo‘lgan oson va yodlangan faktik savollarni darhol belgilang',
        '2-to‘lqin (keyingi 40 daqiqa): Ikkilanish tug‘dirgan, hisoblash yoki mantiqiy taqqoslash talab qiladigan o‘rta darajali savollarni tahlil qiling',
        '3-to‘lqin (oxirgi 20 daqiqa): Eng qiyin, uzun matnli kazuslarni yeching va javoblar varaqasidagi barcha raqamlarni birma-bir tekshirib chiqing'
      ]
    },
    {
      id: 'tip-10',
      num: '10',
      category: 'atamalar',
      title: 'Huquqiy atamalarni sinonimlar va o‘xshash tushunchalar bilan adashtirmaslik',
      badge: 'Atamalar nozikligi',
      description:
        'Qonunchilikda har bir termin qat’iy ma’noga ega. O‘xshash ko‘ringan lekin boshqa-boshqa huquqiy oqibat tug‘diruvchi tushunchalarni farqlang.',
      points: [
        'Huquq layoqati (tug‘ilgan ondan boshlanib vafot etguncha saqlanadi) vs Muomala layoqati (yosh va aqliy sog‘lomlikka bog‘liq)',
        'Vasiylik (14 yoshgacha yetim bolalarga va muomalaga layoqatsizlarga) vs Homiylik (14–18 yoshdagi bolalarga va muomala layoqati cheklanganlarga)',
        'Emansipatsiya — 16 yoshga to‘lgan voyaga yetmagan shaxsning to‘liq muomala layoqatli deb e’lon qilinishi',
        'Referendum — umumxalq ovoz berishi (oddiy so‘rovnoma emas, oliy yuridik kuchga ega qarorlar qabul qilinadi)',
        'Aybsizlik prezumpsiyasi — sudning qonuniy kuchga kirgan hukmigacha har qanday shaxs aybsiz hisoblanadi'
      ]
    },
    {
      id: 'tip-11',
      num: '11',
      category: 'oila',
      title: 'Oila va nikoh huquqidagi eng nozik mezonlar',
      badge: 'Ko‘p uchraydigan savollar',
      description:
        'Oila kodeksi bo‘yicha tuzilgan testlarda nikoh yoshi, kutish muddatlari va ajrashish cheklovlari doimiy ravishda tushadi.',
      points: [
        'Nikoh yoshi: Erkaklar va ayollar uchun teng 18 yosh. Uzrli sabablar bo‘lganda tuman/shahar hokimi tomonidan ko‘pi bilan 1 yilga kamaytirilishi mumkin',
        'Kutish muddati: FHDYo organiga ariza berilgan kundan e’tiboran 1 oy o‘tgach nikoh qayd etiladi (homiladorlik, bola tug‘ilishi sababli qisqartirilishi mumkin)',
        'Ajrashishga qat’iy taqiq: Xotinining homiladorlik vaqtida va bola 1 yoshga to‘lguniga qadar er xotinining roziligisiz nikohdan ajratish to‘g‘risida da’vo qo‘zg‘ata olmaydi (OK 39)',
        'Aliment miqdori: 1 bola uchun — oylik daromadന്റെ 1/4 qismi, 2 bola uchun — 1/3 qismi, 3 va undan ortiq bola uchun — 1/2 qismi undiriladi',
        'Taqiqlangan nikohlar: To‘g‘ri shajara bo‘yicha qarindoshlar, aka-uka va opa-singillar hamda ruhiy kasalligi sabab muomalaga layoqatsiz deb topilganlar o‘rtasida nikoh tuzilishi taqiqlanadi'
      ]
    },
    {
      id: 'tip-12',
      num: '12',
      category: 'psixologiya',
      title: 'Imtihon kunidagi psixologik barqarorlik va diqqatni jamlash',
      badge: 'Psixologik tayyorgarlik',
      description:
        'Bilim darajasi teng bo‘lgan ikki nomzodning natijasidagi asosiy farmq ularning imtihon zolidagi ruhiy xotirjamligi va stressni boshqara olishidadir.',
      points: [
        'Imtihondan oldingi tunda uxlamasdan dars qilmang: toliqqan miya diqqatni jamlay olmaydi va eng oddiy savollarda ham qo‘pol xato qiladi',
        'Dastlabki 2-3 ta savol juda qiyin bo‘lib tuyulsa, sarosimaga tushmang — ularni belgilab o‘tkazib yuboring va keyingi oson savollarga o‘ting',
        'Har 15-20 ta savoldan so‘ng 10-15 soniya ko‘zlaringizni yumib, chuqur nafas oling — bu miyani kislorod bilan ta’minlab fikrlash tezligini tiklaydi',
        'Savol matnini va barcha variantlarni diqqat bilan to‘liq o‘qimasdan turib, hech qachon shoshib javob belgilamang'
      ]
    }
  ];

  const tipCategories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'konstitutsiya', label: 'Konstitutsiya' },
    { id: 'yosh_muddat', label: 'Yosh & Muddatlar' },
    { id: 'strategiya', label: 'Test strategiyalari' },
    { id: 'organlar', label: 'Davlat organlari' },
    { id: 'kazus', label: 'Kazuslar tahlili' },
    { id: 'oila', label: 'Oila huquqi' },
    { id: 'atamalar', label: 'Huquqiy atamalar' },
    { id: 'psixologiya', label: 'Psixologiya' }
  ];

  const filteredTips = tips.filter((tip) => {
    const matchesCategory = tipFilterCategory === 'all' || tip.category === tipFilterCategory;
    const q = tipSearchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesQuery =
      tip.title.toLowerCase().includes(q) ||
      tip.description.toLowerCase().includes(q) ||
      tip.badge.toLowerCase().includes(q) ||
      tip.points.some((p) => p.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1E1A16] flex flex-col font-sans selection:bg-[#8C6B38] selection:text-white pb-16">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#EAE5DD] shadow-xs">
        <div className="w-full px-2 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2.5 rounded-xl border border-[#EAE5DD] bg-white hover:bg-[#F2ECE1] text-[#736B60] hover:text-[#1E1A16] transition-colors cursor-pointer"
              title="Asosiy sahifaga qaytish"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-[#1E1A16] tracking-tight font-serif flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#8C6B38]" />
                  Huquqiy Shpargalka & Tavsiyalar
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#8C6B38]/10 text-[#8C6B38] border border-[#8C6B38]/20">
                  {CHEAT_SHEET_ITEMS.length} ta mezon
                </span>
              </div>
              <p className="text-xs text-[#736B60] hidden sm:block">
                Testlarda eng ko‘p uchraydigan yoshlar, muddatlar va metodik ko‘rsatmalar
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full px-2 sm:px-4 py-4 flex flex-col flex-1">
        {/* Tab Switcher */}
        <div className="flex items-center space-x-2 pb-4 border-b border-[#EAE5DD]">
          <button
            id="tab-btn-cheatsheet"
            onClick={() => setActiveTab('cheatsheet')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'cheatsheet'
                ? 'bg-[#8C6B38] text-white shadow-2xs'
                : 'text-[#595248] hover:text-[#1E1A16] hover:bg-[#FAF5ED] border border-transparent hover:border-[#EAE5DD]'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Huquqiy Shpargalka (Mezonlar)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/15 font-bold">
              {CHEAT_SHEET_ITEMS.length} ta
            </span>
          </button>

          <button
            id="tab-btn-tips"
            onClick={() => setActiveTab('tips')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'tips'
                ? 'bg-[#8C6B38] text-white shadow-2xs'
                : 'text-[#595248] hover:text-[#1E1A16] hover:bg-[#FAF5ED] border border-transparent hover:border-[#EAE5DD]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Imtihon Tavsiyalari & Taktikalar</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/15 font-bold">
              {tips.length} ta
            </span>
          </button>
        </div>

        {/* Tab 1: Shpargalka */}
        {activeTab === 'cheatsheet' && (
          <div className="flex-1 flex flex-col pt-4">
            {/* Search & Categories */}
            <div className="bg-[#FAF8F5] border border-[#EAE5DD] rounded-2xl p-4 sm:p-5 mb-6 space-y-4 shadow-2xs">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736B60]" />
                <input
                  type="text"
                  id="cheatsheet-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Qidirish: masalan 14 yosh, da'vo muddati, 7 yil, aliment, sudyalik..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#DDD7CD] rounded-xl text-sm text-[#1E1A16] placeholder-[#736B60] focus:outline-none focus:border-[#8C6B38] transition-colors"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === 'all'
                      ? CHEAT_SHEET_ITEMS.length
                      : CHEAT_SHEET_ITEMS.filter((i) => i.category === cat.id).length;
                  return (
                    <button
                      key={`cat-${cat.id}-${idx}`}
                      id={`cat-btn-${cat.id}`}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#8C6B38] text-white shadow-2xs'
                          : 'bg-white border border-[#DDD7CD] text-[#595248] hover:text-[#1E1A16] hover:border-[#8C6B38]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#EAE5DD] text-[#736B60]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shpargalka Cards */}
            <div className="flex-1 space-y-4">
              {filteredCheatItems.length === 0 ? (
                <div className="text-center py-16 bg-[#FAF8F5] border border-[#EAE5DD] rounded-2xl text-[#736B60]">
                  <p className="text-base font-semibold text-[#1E1A16]">Hech qanday ma'lumot topilmadi</p>
                  <p className="text-xs mt-1 text-[#736B60]">Boshqa so‘z yoki kategoriya orqali qidirib ko‘ring</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="mt-3 text-xs font-bold text-[#8C6B38] underline cursor-pointer"
                  >
                    Filtrlarni tozalash
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCheatItems.map((item, idx) => (
                    <div
                      key={`cheat-${item.id}-${idx}`}
                      className="p-5 rounded-2xl bg-white border border-[#EAE5DD] hover:border-[#8C6B38] hover:shadow-md transition-all flex flex-col justify-between shadow-2xs"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-base font-extrabold text-[#8C6B38]">
                            {item.title}
                          </span>
                          <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-md bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] shrink-0">
                            {item.category === 'yosh' && 'Yosh mezoni'}
                            {item.category === 'muddat' && 'Muddat'}
                            {item.category === 'sud' && 'Sud & Javobgarlik'}
                            {item.category === 'davlat' && 'Davlat'}
                            {item.category === 'saylov' && 'Saylov'}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#1E1A16] mb-2.5">
                          {item.value}
                        </h4>
                        <p className="text-xs text-[#595248] leading-relaxed">
                          {item.details}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#EAE5DD] flex items-center justify-between text-[11px] text-[#8C6B38] font-bold">
                        <span>Asos: {item.article}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Tips */}
        {activeTab === 'tips' && (
          <div className="flex-1 flex flex-col pt-4">
            {/* Search & Topic Filters for Tips */}
            <div className="bg-[#FAF8F5] border border-[#EAE5DD] rounded-2xl p-4 sm:p-5 mb-6 space-y-4 shadow-2xs">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736B60]" />
                <input
                  type="text"
                  id="tip-search-input"
                  value={tipSearchQuery}
                  onChange={(e) => setTipSearchQuery(e.target.value)}
                  placeholder="Tavsiyalardan qidirish: masalan Miranda, elimination, muddat, kazus, nikoh, psixologiya..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#DDD7CD] rounded-xl text-sm text-[#1E1A16] placeholder-[#736B60] focus:outline-none focus:border-[#8C6B38] transition-colors"
                />
              </div>

              {/* Category Pills for Tips */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
                {tipCategories.map((cat) => {
                  const isActive = tipFilterCategory === cat.id;
                  const count =
                    cat.id === 'all'
                      ? tips.length
                      : tips.filter((t) => t.category === cat.id).length;
                  return (
                    <button
                      key={`tip-cat-${cat.id}`}
                      onClick={() => setTipFilterCategory(cat.id)}
                      className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#8C6B38] text-white shadow-2xs'
                          : 'bg-white border border-[#DDD7CD] text-[#595248] hover:text-[#1E1A16] hover:border-[#8C6B38]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#EAE5DD] text-[#736B60]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tips Content */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#E6DCC8] text-[#2D241E] text-xs sm:text-sm flex items-start space-x-3 shadow-2xs">
                <Sparkles className="w-5 h-5 text-[#8C6B38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#8C6B38] block uppercase mb-1 font-bold">
                    DTM & Milliy Sertifikat imtihonlari strategiyasi:
                  </strong>
                  <span className="leading-relaxed">
                    Savollarda faqat rasmiy qonunchilik matnidagi moddalar, aniq mezonlar va muddatlar so‘raladi. Quyidagi 12 ta taktik ko‘rsatma imtihonda maksimal ball olishingiz uchun ishlab chiqilgan.
                  </span>
                </div>
              </div>

              {filteredTips.length === 0 ? (
                <div className="text-center py-16 bg-[#FAF8F5] border border-[#EAE5DD] rounded-2xl text-[#736B60]">
                  <p className="text-base font-semibold text-[#1E1A16]">Hech qanday tavsiya topilmadi</p>
                  <p className="text-xs mt-1 text-[#736B60]">Boshqa so‘z yoki bo‘lim orqali qidirib ko‘ring</p>
                  <button
                    onClick={() => {
                      setTipSearchQuery('');
                      setTipFilterCategory('all');
                    }}
                    className="mt-3 text-xs font-bold text-[#8C6B38] underline cursor-pointer"
                  >
                    Barcha tavsiyalarni ko‘rsatish
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTips.map((tip, idx) => (
                    <div
                      key={`tip-${tip.id}-${idx}`}
                      className="p-6 rounded-2xl bg-white border border-[#EAE5DD] hover:border-[#8C6B38] hover:shadow-md transition-all space-y-4 shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8]">
                            {tip.num}
                          </span>
                          <h3 className="text-sm sm:text-base font-extrabold text-[#1E1A16] leading-snug">
                            {tip.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border bg-[#FAF5ED] text-[#8C6B38] border-[#E6DCC8] shrink-0">
                          {tip.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                        {tip.description}
                      </p>

                      <div className="pt-3.5 border-t border-[#EAE5DD] space-y-2">
                        {tip.points.map((pt, pIdx) => (
                          <div
                            key={`tip-pt-${tip.id}-${pIdx}`}
                            className="flex items-start space-x-2 text-xs sm:text-sm text-[#2D241E]"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <footer className="mt-auto px-2 sm:px-4 py-4 border-t border-[#EAE5DD] bg-[#FAF8F5] text-xs text-[#736B60] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-[#8C6B38]" />
          Amaldagi O‘zbekiston Respublikasi qonunchiligi asosida tuzilgan
        </span>
      </footer>
    </div>
  );
};
