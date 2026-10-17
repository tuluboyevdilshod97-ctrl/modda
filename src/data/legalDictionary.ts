export interface LegalTerm {
  id: string;
  term: string;
  definition: string;
  category: '8-sinf' | '9-sinf' | '10-sinf' | '11-sinf' | 'Konstitutsiya' | 'Kodekslar';
  source: string;
  letter: string;
  etymology?: string;
  example?: string;
}

export const LEGAL_TERMS: LegalTerm[] = [
  // --- A HARFI ---
  {
    id: 'term-1',
    term: 'Apatrid (Fuqaroligi bo‘lmagan shaxs)',
    definition: 'Hech bir davlatning fuqarosi bo‘lmagan va o‘zining biron-bir davlat fuqaroligiga mansubligini isbotlay olmaydigan jismoniy shaxs.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 4-bob; "O‘zbekiston Respublikasining fuqaroligi to‘g‘risida"gi Qonun',
    letter: 'A',
    etymology: 'Yunoncha "a" - inkor qo‘shimchasi va "patris" - vatan, fuqarolik',
    example: 'Apatridlar O‘zbekiston hududida chet el fuqarolari kabi huquq va majburiyatlardan foydalanadilar (ayrim siyosiy huquqlar bundan mustasno).'
  },
  {
    id: 'term-2',
    term: 'Aybsizlik prezumpsiyasi',
    definition: 'Har bir shaxs jinoyat sodir etganlikda aybi qonunda nazarda tutilgan tartibda oshkora sud muhokamasi yo‘li bilan isbotlanmaguncha va sudning qonuniy kuchga kirgan hukmi bilan aniqlanmaguncha aybsiz hisoblanadi.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 28-modda; Jinoyat-protsessual kodeksi, 23-modda',
    letter: 'A',
    etymology: 'Lotincha "praesumptio" - taxmin, oldindan bilish',
    example: 'Gumon qilinuvchi yoki ayblanuvchi o‘zining aybsizligini isbotlab berishi shart emas. Barcha bartaraf etib bo‘lmaydigan shubhalar uning foydasiga talqin qilinadi.'
  },
  {
    id: 'term-3',
    term: 'Aliment',
    definition: 'Oila qonunchiligiga binoan, voyaga yetmagan bolalarni ta’minlash yoki mehnatga layoqatsiz muhtoj oila a’zolariga moddiy ta’minot berish uchun to‘lanadigan majburiy pul mablag‘i.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Oila kodeksi, 96–147-moddalar',
    letter: 'A',
    etymology: 'Lotincha "alimentum" - oziq-ovqat, ta’minot',
    example: 'Ota-ona voyaga yetmagan bolalariga ta’minot berishlari shart. 1 bola uchun daromadning 1/4 qismi, 2 bola uchun 1/3 qismi, 3 va undan ortiq bola uchun 1/2 qismi undiriladi.'
  },
  {
    id: 'term-4',
    term: 'Advokatura',
    definition: 'Jismoniy va yuridik shaxslarga ularning huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilish maqsadida professional yuridik yordam ko‘rsatuvchi mustaqil huquqiy institut.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; "Advokatura to‘g‘risida"gi Qonun; Konstitutsiya 141-modda',
    letter: 'A',
    etymology: 'Lotincha "advoco" - yordamga chaqiraman',
    example: 'Sud jarayonida har bir shaxsga o‘zi tanlagan advokat orqali professional himoyalanish huquqi kafolatlanadi.'
  },
  {
    id: 'term-5',
    term: 'Apellatsiya',
    definition: 'Sudning qonuniy kuchga kirmagan hal qiluv qarorlari, hukmlari va ajrimlari ustidan yuqori turuvchi sud instansiyasiga shikoyat keltirish yoki protest bildirish tartibi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Fuqarolik va Jinoyat protsessual kodekslari',
    letter: 'A',
    etymology: 'Lotincha "appellatio" - murojaat qilish, shikoyat',
    example: 'Sud hukmi e’lon qilingan kundan boshlab belgilangan 20 kunlik muddat ichida apellatsiya shikoyati berilishi mumkin.'
  },
  {
    id: 'term-6',
    term: 'Amnistiya',
    definition: 'Oliy davlat hokimiyati organi (Oliy Majlis Senati) tomonidan jinoyat sodir etgan shaxslarning ma’lum toifasini jinoiy javobgarlikdan yoki asosiy/qo‘shimcha jazodan butunlay yoki qisman ozod qilish to‘g‘risidagi umumiy huquqiy akt.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 76-modda; Konstitutsiya 93-modda',
    letter: 'A',
    etymology: 'Yunoncha "amnestia" - kechirish, unutish',
    example: 'Amnistiya akti individual emas, balki shaxslarning ma’lum toifalariga (ayollar, voyaga yetmaganlar, birinchi marta jinoyat sodir etganlar) nisbatan qo‘llanadi.'
  },
  {
    id: 'term-7',
    term: 'Akkreditatsiya',
    definition: 'Diplomatik vakil yoki xalqaro jurnalist, kuzatuvchilarning boshqa davlatda rasmiy faoliyat yuritishi uchun beriladigan vakolat va uni tan olish tartibi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari, Xalqaro huquq bobi',
    letter: 'A',
    etymology: 'Lotincha "accredere" - ishonch bildirmoq',
    example: 'Xorijiy elchi qabul qiluvchi davlat rahbari huzurida ishonch yorliqlarini topshirib akkreditatsiyadan o‘tadi.'
  },
  {
    id: 'term-8',
    term: 'Anklav',
    definition: 'Bir davlat hududining butunlay boshqa bir davlat quruqlik hududi bilan o‘ralgan qismi (masalan, Qirg‘iziston hududida joylashgan O‘zbekistonga qarashli So‘x hududi).',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari, Xalqaro ommaviy huquq',
    letter: 'A',
    etymology: 'Fransuzcha "enclave" - qulflangan, o‘ralgan',
    example: 'Anklav hududlarida xalqaro tranzit va erkin harakatlanish masalalari ikki tomonlama shartnomalar bilan tartibga solinadi.'
  },
  {
    id: 'term-9',
    term: 'Aggressiya (Tajovuz)',
    definition: 'Bir davlatning boshqa davlat suvereniteti, hududiy daxlsizligi yoki siyosiy mustaqilligiga qarshi qurolli kuch ishlatishi; eng og‘ir xalqaro jinoyat.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; BMT Nizomi',
    letter: 'A',
    etymology: 'Lotincha "aggressio" - hujum qilmoq',
    example: 'BMT Bosh Assambleyasi 1974-yilda tajovuz tushunchasining rasmiy ta’rifini qabul qilgan.'
  },
  {
    id: 'term-10',
    term: 'Alibi',
    definition: 'Gumon qilinuvchi yoki ayblanuvchining jinoyat sodir etilgan vaqtda mutlaqo boshqa joyda bo‘lganligini va shuning uchun jinoyatni sodir eta olmasligini tasdiqlovchi faktik holat.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Kriminalistika va jinoyat protsessi',
    letter: 'A',
    etymology: 'Lotincha "alibi" - boshqa joyda',
    example: 'Agar shaxs jinoyat sodir bo‘lgan paytda boshqa shaharda bo‘lganligini video yoki chipta bilan isbotlasa, alibi tasdiqlangan hisoblanadi.'
  },
  {
    id: 'term-11',
    term: 'Analogiya (Qonun va huquq analogiyasi)',
    definition: 'Aniq norma mavjud bo‘lmaganda shunga o‘xshash munosabatlarni tartibga soluvchi qonun normasini qo‘llash (qonun analogiyasi) yoki huquqning umumiy tamoyillariga asoslanish (huquq analogiyasi).',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 5-modda',
    letter: 'A',
    etymology: 'Yunoncha "analogia" - o‘xshashlik, mutanosiblik',
    example: 'Fuqarolik huquqida analogiyaga ruxsat beriladi, lekin Jinoyat huquqida qonun analogiyasini qo‘llash qat’iyan taqiqlanadi.'
  },
  {
    id: 'term-12',
    term: 'Axloq tuzatish ishlari',
    definition: 'Sudlangan shaxsni ish haqining o‘ndan o‘ttiz foizigacha qismini davlat daromadiga ushlab qolgan holda o‘z ish joyida yoki maxsus belgilangan joylarda majburiy mehnatga jalb etish jazosi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 46-modda',
    letter: 'A',
    example: 'Axloq tuzatish ishlari olti oydan uch yilgacha muddatga tayinlanadi.'
  },

  // --- B HARFI ---
  {
    id: 'term-13',
    term: 'Bipatrid (Ikki fuqarolik)',
    definition: 'Bir vaqtning o‘zida ikki yoki undan ortiq davlat fuqaroligi huquqiy maqomiga ega bo‘lgan shaxs.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; O‘zbekiston Respublikasi Konstitutsiyasi, 23-modda',
    letter: 'B',
    etymology: 'Lotincha "bi" - ikki va yunoncha "patris" - vatan',
    example: 'O‘zbekiston Respublikasida barcha fuqarolar uchun yagona fuqarolik o‘rnatilgan bo‘lib, O‘zbekiston fuqarosining chet davlat fuqaroligiga mansubligi tan olinmaydi.'
  },
  {
    id: 'term-14',
    term: 'Bitim',
    definition: 'Fuqarolar va yuridik shaxslarning fuqarolik huquq va burchlarini belgilash, o‘zgartirish yoki bekor qilishga qaratilgan harakatlari.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 101-modda',
    letter: 'B',
    example: 'Bitimlar bir tomonlama (masalan, vasiyatnoma) yoki ikki va ko‘p tomonlama (shartnomalar) bo‘lishi mumkin.'
  },
  {
    id: 'term-15',
    term: 'Bedarak yo‘qolgan deb topish',
    definition: 'Fuqaroning turgan joyi haqida uning yashash joyida bir yil davomida hech qanday ma’lumot bo‘lmasa, manfaatdor shaxslarning arizasiga ko‘ra sud tomonidan e’lon qilinadigan fuqarolik holati.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 33-modda',
    letter: 'B',
    example: 'Bedarak yo‘qolgan deb topilgan fuqaroning mol-mulki ishonchli boshqaruvga topshiriladi.'
  },
  {
    id: 'term-16',
    term: 'Bojxona rejimi',
    definition: 'Tovarlar va transport vositalarining bojxona chegarasi orqali olib o‘tilishi, boj to‘lovlari va cheklovlar qo‘llanilishini belgilovchi qoidalar majmui.',
    category: 'Kodekslar',
    source: 'Bojxona kodeksi',
    letter: 'B',
    example: 'Erkin muomala uchun chiqarish (import), eksport, tranzit va vaqtincha olib kirish kabi asosiy rejimlar mavjud.'
  },
  {
    id: 'term-17',
    term: 'Byudjet',
    definition: 'Davlat yoki mahalliy hokimiyat organlarining o‘z vazifalari va funksiyalarini bajarish uchun mo‘ljallangan daromadlari va xarajatlarining yillik moliyaviy rejasi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Byudjet kodeksi',
    letter: 'B',
    etymology: 'Inglizcha "budget" - charm xalta, hamyon',
    example: 'Davlat byudjeti Oliy Majlis palatalari tomonidan qonun shaklida tasdiqlanadi.'
  },

  // --- D HARFI ---
  {
    id: 'term-18',
    term: 'Demokratiya',
    definition: 'Xalq hokimiyatchiligini, inson huquq va erkinliklarining ustuvorligini, qonun oldida barchaning tengligini e’tirof etuvchi siyosiy tuzum shakli.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; O‘zbekiston Respublikasi Konstitutsiyasi, 7-modda',
    letter: 'D',
    etymology: 'Yunoncha "demos" - xalq, "kratos" - hokimiyat',
    example: 'Xalq davlat hokimiyatining birdan-bir manbaidir.'
  },
  {
    id: 'term-19',
    term: 'Davlat suvereniteti',
    definition: 'Davlat hokimiyatining mamlakat ichida to‘la mustaqilligi, oliyligi va tashqi xalqaro munosabatlarda boshqa davlatlardan mutlaqo mustaqil yuritilishi.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 1-modda',
    letter: 'D',
    etymology: 'Fransuzcha "souverainete" - oliy hokimiyat',
    example: 'O‘zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat.'
  },
  {
    id: 'term-20',
    term: 'Da’vo muddati',
    definition: 'Shaxs o‘zining buzilgan huquqini sud orqali himoya qilishi mumkin bo‘lgan qonunda belgilangan vaqt davri.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 150-modda',
    letter: 'D',
    example: 'O‘zbekiston Respublikasida umumiy da’vo muddati — uch yil qilib belgilangan.'
  },
  {
    id: 'term-21',
    term: 'Delikt (Huquqbuzarlik)',
    definition: 'Qonunga xilof, aybli tarzda sodir etilgan va jamiyat, davlat yoki shaxs manfaatlariga zarar yetkazuvchi xatti-harakat (harakat yoki harakatsizlik).',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqbuzarlik mavzusi',
    letter: 'D',
    etymology: 'Lotincha "delictum" - nojo‘ya harakat, qonunbuzarlik',
    example: 'Delikt o‘z xavflilik darajasiga ko‘ra intizomiy, fuqarolik, ma’muriy nojo‘ya harakatlarga va jinoyatga bo‘linadi.'
  },
  {
    id: 'term-22',
    term: 'Denonsatsiya',
    definition: 'Xalqaro shartnomani unda ko‘rsatilgan shartlar asosida bir tomonlama tartibda qonuniy ravishda bekor qilish yoki undan chiqish.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Xalqaro shartnomalar to‘g‘risidagi Qonun',
    letter: 'D',
    etymology: 'Fransuzcha "denonciation" - xabardor qilish, bekor qilish',
    example: 'Davlat xalqaro konvensiya talablaridan chiqish haqida oldindan rasmiy bildirishnoma yuboradi.'
  },
  {
    id: 'term-23',
    term: 'Deklaratsiya',
    definition: 'Xalqaro miqyosda yoki davlat miqyosida muhim umumiy prinsiplar, niyatlar yoki maqsadlarni e’lon qiluvchi rasmiy tantanali hujjat.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari, 1-bob',
    letter: 'D',
    etymology: 'Lotincha "declaratio" - e’lon qilish, bayonot',
    example: '1990-yil 20-iyunda O‘zbekiston Respublikasining Mustaqillik deklaratsiyasi qabul qilingan.'
  },
  {
    id: 'term-24',
    term: 'Diplomatik immunitet',
    definition: 'Xorijiy davlat elchilari va diplomatik xodimlariga qabul qiluvchi davlatning sud, ma’muriy va soliq yurisdiksiyasidan beriladigan daxlsizlik va imtiyozlar majmui.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; 1961-yilgi Vena konvensiyasi',
    letter: 'D',
    etymology: 'Lotincha "immunitas" - ozod bo‘lish, xalos bo‘lish',
    example: 'Diplomatning shaxsi, turar joyi va xizmat yozishmalari daxlsizdir.'
  },
  {
    id: 'term-25',
    term: 'Deputatlik daxlsizligi',
    definition: 'Deputatning o‘z vakolatlari davrida jinoiy javobgarlikka tortilishi, qamoqqa olinishi yoki sud tomonidan ma’muriy jazo berilishiga faqat tegishli parlament palatasining roziligi bilan yo‘l qo‘yilishi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 90-modda',
    letter: 'D',
    example: 'Deputat o‘zining deputatlik faoliyati davomida bildirgan fikri va ovoz berishi uchun javobgarlikka tortilishi mumkin emas.'
  },
  {
    id: 'term-26',
    term: 'Dispozitsiya',
    definition: 'Huquqiy normaning ishtirokchilar uchun ruxsat etilgan, buyurilgan yoki taqiqlangan aniq xulq-atvor qoidasini ifodalovchi markaziy qismi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqiy norma tuzilishi',
    letter: 'D',
    etymology: 'Lotincha "dispositio" - joylashtirish, tartibga solish',
    example: '"...har kim o‘z mehnati uchun haq olish huquqiga ega" qoidasi dispozitsiyadir.'
  },
  {
    id: 'term-27',
    term: 'Dunyoviy davlat',
    definition: 'Davlat boshqaruvi va qonunchiligi dindan ajratilgan, diniy tashkilotlar davlat ishlariga aralashmaydigan, har kimga vijdon erkinligi to‘liq kafolatlangan davlat shakli.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 1-modda, 75-modda',
    letter: 'D',
    example: 'Dunyoviy davlatda hech qaysi dinga rasmiy davlat dini maqomi berilmaydi.'
  },
  {
    id: 'term-28',
    term: 'Dalolatchi',
    definition: 'Qasddan jinoyat sodir etishga qiziqtirgan, ko‘ndirgan yoki undagan shaxs (masalan, pul berib yoki aldab jinoyatga yo‘naltirgan kishi).',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 28-modda',
    letter: 'D',
    example: 'Dalolatchi bajaruvchi bilan bir qatorda jinoiy javobgarlikka tortiladi.'
  },

  // --- E HARFI ---
  {
    id: 'term-29',
    term: 'Emansipatsiya',
    definition: 'O‘n olti yoshga to‘lgan voyaga yetmagan shaxs mehnat shartnomasi bo‘yicha ishlayotgan bo‘lsa yoki ota-onasi roziligi bilan tadbirkorlik faoliyati bilan shug‘ullanayotgan bo‘lsa, uni to‘la muomalaga layoqatli deb e’lon qilish.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 28-modda',
    letter: 'E',
    etymology: 'Lotincha "emancipatio" - otalik hokimiyatidan ozod bo‘lish',
    example: 'Emansipatsiya ota-onaning roziligi bilan vasiylik va homiylik organining qaroriga binoan, bunday rozilik bo‘lmaganda esa sud qarori bilan amalga oshiriladi.'
  },
  {
    id: 'term-30',
    term: 'Ekstraditsiya',
    definition: 'Jinoyat sodir etgan yoki sudlangan shaxsni jinoiy javobgarlikka tortish yoxud jazo muddatini o‘tash uchun boshqa davlatga qonuniy tartibda topshirish.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 17-modda',
    letter: 'E',
    etymology: 'Lotincha "ex" - tashqariga va "traditio" - topshirish',
    example: 'O‘zbekiston fuqarosi chet davlatga ekstraditsiya qilinishi mumkin emas (Konstitutsiya 23-modda).'
  },
  {
    id: 'term-31',
    term: 'Ekspertiza (Sud ekspertizasi)',
    definition: 'Ish bo‘yicha ahamiyatga ega holatlarni aniqlash maqsadida fan, texnika, san’at yoki kasb sohasidagi maxsus bilimlardan foydalangan holda o‘tkaziladigan tadqiqot.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; "Sud ekspertizasi to‘g‘risida"gi Qonun',
    letter: 'E',
    etymology: 'Lotincha "expertus" - tajribali, sinovdan o‘tgan',
    example: 'Sud-tibbiy, xatshunoslik, ballistik, sud-iqtisodiy ekspertizalari sud ishlarida hal qiluvchi dalil bo‘lib xizmat qiladi.'
  },
  {
    id: 'term-32',
    term: 'Egalik huquqi',
    definition: 'Mol-mulkni amalda o‘z qo‘lida ushlab turish, uni xo‘jalik jihatidan o‘z tasarrufida saqlab turishning qonun bilan ta’minlangan imkoniyati.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 164-modda',
    letter: 'E',
    example: 'Mulk huquqi uchlikdan iborat: egalik qilish, foydalanish va tasarruf etish.'
  },
  {
    id: 'term-33',
    term: 'Ehtiyotsizlik (Jinoyatda)',
    definition: 'O‘z-o‘ziga ishonish yoki beparvolik orqasida jinoyat qonunida nazarda tutilgan ijtimoiy xavfli oqibatlarning kelib chiqishiga sabab bo‘lgan ayb shakli.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 22-modda',
    letter: 'E',
    example: 'Tezlikni oshirib yo‘l transport hodisasi sodir etish ehtiyotsizlik orqasida sodir etilgan jinoyat hisoblanadi.'
  },
  {
    id: 'term-34',
    term: 'Ekologik huquq',
    definition: 'Atrof-muhitni muhofaza qilish, tabiiy resurslardan oqilona foydalanish va insonning qulay atrof-muhitga ega bo‘lish huquqini ta’minlovchi huquq sohasi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Konstitutsiya 49-modda',
    letter: 'E',
    example: 'Har kim qulay atrof-muhitga, uning holati to‘g‘risidagi ishonchli axborotga ega bo‘lish huquqiga ega.'
  },

  // --- F HARFI ---
  {
    id: 'term-35',
    term: 'Federatsiya',
    definition: 'Muayyan darajadagi davlat mustaqilligiga ega bo‘lgan davlat tuzilmalari (shtatlar, respublikalar, yerlar, viloyatlar)dan tashkil topgan murakkab ittifoqchi davlat shakli.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 2-bob',
    letter: 'F',
    etymology: 'Lotincha "foederatio" - ittifoq, birlashma',
    example: 'Rossiya, AQSh, Germaniya va Hindiston federativ davlatlarga misoldir.'
  },
  {
    id: 'term-36',
    term: 'FHDYo (Fuqarolik holati dalolatnomalarini yozish)',
    definition: 'Tug‘ilish, nikoh tuzish, nikohdan ajralish, o‘lim, otalikni belgilash, ism, ota ismi va familiyani o‘zgartirish kabi fuqarolik holatlarini davlat ro‘yxatidan o‘tkazuvchi adliya organi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Oila kodeksi, 201-modda',
    letter: 'F',
    example: 'Nikoh FHDYo organlarida ro‘yxatga olingan kundan boshlab qonuniy kuchga kiradi.'
  },
  {
    id: 'term-37',
    term: 'Fors-major (Yengib bo‘lmas kuch)',
    definition: 'Muayyan sharoitlarda oldini olib bo‘lmaydigan, kutilmagan favqulodda hodisalar (tabiiy ofatlar, urushlar, epidemiya) oqibatida shartnoma majburiyatlarini bajarishning ob’yektiv imkonsizligi.',
    category: 'Kodekslar',
    source: 'Fuqarolik kodeksi, 333-modda',
    letter: 'F',
    etymology: 'Fransuzcha "force majeure" - oliy qudrat, yengib bo‘lmas kuch',
    example: 'Fors-major holati tasdiqlanganda tomonlar majburiyatni bajarmaganlik uchun jarima va penyalardan ozod etiladi.'
  },
  {
    id: 'term-38',
    term: 'Fraktsiya (Parlament fraktsiyasi)',
    definition: 'Siyosiy partiyadan saylangan deputatlarning o‘z partiyasi manfaatlarini ilgari surish maqsadida Oliy Majlis Qonunchilik palatasida tuzadigan rasmiy uyushmasi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; "Qonunchilik palatasi to‘g‘risida"gi Qonun',
    letter: 'F',
    etymology: 'Lotincha "fractio" - sindirish, bo‘lak',
    example: 'Fraktsiya tuzish uchun kamida 9 nafar Qonunchilik palatasi deputati birlashishi zarur.'
  },
  {
    id: 'term-39',
    term: 'Fuqarolik jamiyati',
    definition: 'Inson huquq va erkinliklarini eng oliy qadriyat deb biluvchi, davlatdan mustaqil nodavlat notijorat tashkilotlari, jamoat birlashmalari va fuqarolarning erkin faoliyatiga tayanuvchi ijtimoiy tizim.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 13-bob',
    letter: 'F',
    example: 'Mahallalar, jamoat fondlari, kasaba uyushmalari fuqarolik jamiyatining tayanch institutlaridir.'
  },

  // --- G HARFI ---
  {
    id: 'term-40',
    term: 'Garov',
    definition: 'Qarz yoki boshqa asosiy majburiyatning bajarilishini ta’minlash usuli; qarzdor majburiyatni bajarmagan taqdirda kreditor garovga qo‘yilgan mol-mulk qiymatidan o‘z talabini qanoatlantirish huquqiga ega bo‘ladi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 264-modda',
    letter: 'G',
    example: 'Ipoteka — bu ko‘chmas mulk (uy, bino, yer uchastkasi) garovidir.'
  },
  {
    id: 'term-41',
    term: 'Genotsid',
    definition: 'Biron bir milliy, etnik, irqiy yoki diniy guruhni to‘liq yoxud qisman yo‘q qilib yuborish maqsadida sodir etilgan harakatlar; insoniyat xavfsizligiga qarshi eng og‘ir jinoyat.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 153-modda; 1948-yilgi BMT Konvensiyasi',
    letter: 'G',
    etymology: 'Yunoncha "genos" - qabila, urug‘ va lotincha "caedo" - o‘ldiraman',
    example: 'Genotsid jinoyati bo‘yicha jinoiy javobgarlikka tortishda da’vo muddati qo‘llanilmaydi.'
  },
  {
    id: 'term-42',
    term: 'Gipoteza',
    definition: 'Huquqiy normaning qaysi sharoitlar, vaziyatlar va hayotiy faktlar yuz berganda amal qilishi va qo‘llanilishini ko‘rsatuvchi tarkibiy qismi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqiy norma tuzilishi',
    letter: 'G',
    etymology: 'Yunoncha "hypothesis" - asos, taxmin',
    example: '"Agar shaxs 18 yoshga to‘lsa..." qismi gipotezaga misoldir.'
  },
  {
    id: 'term-43',
    term: 'Guvoh',
    definition: 'Ish bo‘yicha ahamiyatga ega bo‘lgan biror holatdan xabardor bo‘lishi mumkin bo‘lgan va ko‘rsatuv berish uchun tergovchi yoxud sud tomonidan chaqirilgan har qanday shaxs.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi',
    letter: 'G',
    example: 'Hech kim o‘ziga va yaqin qarindoshlariga qarshi guvohlik berishga majbur emas (Konstitutsiya 28-modda).'
  },

  // --- H HARFI ---
  {
    id: 'term-44',
    term: 'Habeas Corpus',
    definition: 'Shaxsni qamoqqa olish, hibsda saqlash va erkinligini cheklovchi choralarni qo‘llash ustidan faqat sud orqali nazorat o‘rnatish huquqiy kafolati.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 27-modda',
    letter: 'H',
    etymology: 'Lotincha "Habeas corpus" - tanani (shaxsni) sudga keltir',
    example: 'Sud qarorisiz hech kim qirq sakkiz soatdan ortiq muddat ushlab turilishi mumkin emas.'
  },
  {
    id: 'term-45',
    term: 'Huquq layoqati',
    definition: 'Fuqaroning fuqarolik huquqlariga ega bo‘lish va burchlarni o‘z zimmasiga olish qobiliyati. U inson tug‘ilgan paytdan boshlanadi va vafot etishi bilan tugaydi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 17-modda',
    letter: 'H',
    example: 'Barcha fuqarolar teng huquq layoqatiga egadir. Uni cheklash qonunda belgilangan hollardan tashqari taqiqlanadi.'
  },
  {
    id: 'term-46',
    term: 'Huquqiy norma',
    definition: 'Davlat tomonidan o‘rnatilgan yoki tasdiqlangan, umumiy majburiy xarakterga ega bo‘lgan va buzilgan taqdirda davlatning majburlov kuchi bilan ta’minlanadigan rasmiy xulq-atvor qoidasi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 1-bob',
    letter: 'H',
    example: 'Huquqiy norma uch qismdan iborat bo‘ladi: Gipoteza (shart), Dispozitsiya (qoida), Sanksiya (chora).'
  },
  {
    id: 'term-47',
    term: 'Homiylik',
    definition: 'O‘n to‘rt yoshdan o‘n sakkiz yoshgacha bo‘lgan ota-ona qaramog‘idan mahrum voyaga yetmaganlarga hamda muomala layoqati cheklangan fuqarolarga ularning huquqlarini himoya qilish uchun tayinlanadigan huquqiy vasiylik shakli.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 32-modda',
    letter: 'H',
    example: '14 yoshgacha bo‘lgan bolalarga vasiylik, 14 yoshdan 18 yoshgacha esa homiylik belgilanadi.'
  },
  {
    id: 'term-48',
    term: 'Hukm',
    definition: 'Sudlanuvchining aybdorligi yoki aybsizligi, unga nisbatan jazo qo‘llash yoki qo‘llamaslik to‘g‘risida sud tomonidan O‘zbekiston Respublikasi nomidan chiqariladigan asosiy qaror.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi',
    letter: 'H',
    example: 'Hukm qonuniy, asosli va adolatli bo‘lishi shart.'
  },
  {
    id: 'term-49',
    term: 'Huquqiy ong',
    definition: 'Insonlarning huquqqa, qonunlarga, odil sudlovga va adolatga bo‘lgan qarashlari, his-tuyg‘ulari va baholari majmui.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqiy madaniyat',
    letter: 'H',
    example: 'Huquqiy ong huquqiy mafkura va huquqiy psixologiyadan tashkil topadi.'
  },
  {
    id: 'term-50',
    term: 'Huquqiy madaniyat',
    definition: 'Shaxs va butun jamiyatning qonunlarni chuqur bilishi, ularga ongli va ixtiyoriy ravishda amal qilishi hamda huquqbuzarliklarga murosasiz munosabatda bo‘lishi darajasi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 1-bob',
    letter: 'H',
    example: 'Yuksak huquqiy madaniyat huquqiy davlatning asosiy poydevoridir.'
  },

  // --- I HARFI ---
  {
    id: 'term-51',
    term: 'Intizomiy jazo',
    definition: 'Mehnat majburiyatlarini buzgan, xizmat intizomini bajarmagan xodimga nisbatan ish beruvchi tomonidan qo‘llaniladigan qonuniy ta’sir chorasi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Yangi Mehnat kodeksi, 312-modda',
    letter: 'I',
    example: 'Mehnat kodeksida belgilangan intizomiy jazolar: hayfsan, o‘rtacha oylik ish haqining o‘ttiz foizidan (ayrim hollarda 50%) ko‘p bo‘lmagan jarima, mehnat shartnomasini bekor qilish.'
  },
  {
    id: 'term-52',
    term: 'Ish vaqti',
    definition: 'Xodim mehnat shartnomasiga va ichki mehnat tartibi qoidalariga muvofiq o‘z mehnat vazifalarini bajarishi lozim bo‘lgan vaqt davri.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Mehnat kodeksi, 181-modda',
    letter: 'I',
    example: 'Haftalik ish vaqtining normal muddati qirq soatdan ortiq bo‘lishi mumkin emas. 16 yoshgacha 24 soat, 16–18 yoshdagilar uchun esa 36 soatdan oshmasligi kerak.'
  },
  {
    id: 'term-53',
    term: 'Ishonchnoma',
    definition: 'Bir shaxs (ishonch bildiruvchi) tomonidan ikkinchi shaxsga (ishonchli vakilga) uchinchi shaxslar oldida vakillik qilish uchun beriladigan yozma vakolatnoma.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 134-modda',
    letter: 'I',
    example: 'Ishonchnoma ko‘pi bilan uch yil muddatga berilishi mumkin. Agar unda muddat ko‘rsatilmagan bo‘lsa, berilgan kundan boshlab bir yil davomida kuchini saqlaydi.'
  },
  {
    id: 'term-54',
    term: 'Impechment',
    definition: 'Oliy mansabdor shaxslarni (xususan, davlat rahbarini) konstitutsiya va qonunlarni qo‘pol ravishda buzganligi yoki og‘ir jinoyat sodir etganligi uchun parlament tomonidan lavozimidan chetlashtirish maxsus huquqiy tartibi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Davlat hokimiyati bo‘limi',
    letter: 'I',
    etymology: 'Inglizcha "impeachment" - ayblov bildirish',
    example: 'Prezidentlik va parlamentar respublikalarda parlament nazoratining o‘ta muhim mexanizmi hisoblanadi.'
  },
  {
    id: 'term-55',
    term: 'Inkorporatsiya',
    definition: 'Amaldagi qonun hujjatlarini ularning mazmunini o‘zgartirmagan holda muayyan tartibda (masalan, xronologik yoki sohaviy tartibda) to‘plamlar holida tizimlashtirish.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Qonunchilik texnikasi',
    letter: 'I',
    etymology: 'Lotincha "incorporatio" - birlashtirish, tarkibga kiritish',
    example: 'Qonun hujjatlari milliy bazasi (Lex.uz)da me’yoriy-huquqiy hujjatlarning doimiy inkorporatsiyasi yuritiladi.'
  },
  {
    id: 'term-56',
    term: 'Intervensiya',
    definition: 'Bir yoki bir necha davlatning boshqa suveren davlatning ichki ishlariga uning roziligisiz harbiy, iqtisodiy yoki siyosiy yo‘l bilan zo‘ravonlik bilan aralashishi (xalqaro huquq bo‘yicha qat’iyan taqiqlangan).',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; BMT Nizomi',
    letter: 'I',
    etymology: 'Lotincha "interventio" - aralashuv',
    example: 'Xalqaro huquqda davlatlarning ichki ishlariga aralashmaslik qat’iy prinsip hisoblanadi.'
  },
  {
    id: 'term-57',
    term: 'Ijtimoiy davlat',
    definition: 'Har bir inson uchun munosib hayot kechirish, ijtimoiy adolat, kambag‘allikni qisqartirish, bepul umumiy ta’lim va kafolatlangan tibbiy xizmatni o‘z zimmasiga oladigan davlat.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 1-modda',
    letter: 'I',
    example: 'Yangi tahrirdagi Konstitutsiyada O‘zbekiston rasman "ijtimoiy davlat" deb belgilandi.'
  },
  {
    id: 'term-58',
    term: 'Iste’molchi huquqlari',
    definition: 'Tovarlarni (ishlarni, xizmatlarni) shaxsiy ehtiyoj uchun sotib oluvchi fuqaroning xavfsiz va sifatli mahsulot olish, to‘g‘ri ma’lumotga ega bo‘lish va nuqson yetkazilganda zararni undirish bo‘yicha kafolatlangan huquqlari.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; "Iste’molchilarning huquqlarini himoya qilish to‘g‘risida"gi Qonun',
    letter: 'I',
    example: 'Iste’molchi sifatli bo‘lmagan tovarni 10 kun ichida shunga o‘xshash sifatlisiga almashtirish yoki pulini talab qilishga haqli.'
  },
  {
    id: 'term-59',
    term: 'Ijroiya hokimiyati',
    definition: 'Qonunlarni, parlament va davlat rahbari qarorlarini hayotga tatbiq etuvchi, davlat boshqaruvini bevosita amalga oshiruvchi hokimiyat tarmog‘i (Vazirlar Mahkamasi, vazirliklar, hokimliklar).',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 114-modda',
    letter: 'I',
    example: 'O‘zbekiston Respublikasi Vazirlar Mahkamasi ijro etuvchi hokimiyatning oliy organidir.'
  },

  // --- J HARFI ---
  {
    id: 'term-60',
    term: 'Jinoyat',
    definition: 'Jinoyat kodeksi bilan taqiqlangan, aybli tarzda sodir etilgan, ijtimoiy xavflilik darajasi yuqori bo‘lgan qilmish (harakat yoki harakatsizlik).',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 14-modda',
    letter: 'J',
    example: 'Jinoyat 4 toifaga bo‘linadi: ijtimoiy xavfi katta bo‘lmagan, uncha og‘ir bo‘lmagan, og‘ir, o‘ta og‘ir jinoyatlar.'
  },
  {
    id: 'term-61',
    term: 'Jinoyat tarkibi',
    definition: 'Qilmishni muayyan jinoyat deb baholash uchun zarur bo‘lgan qonunda ko‘rsatilgan to‘rtta obyektiv va subyektiv belgilar majmui: obyekt, obyektiv tomon, subyekt, subyektiv tomon.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi umumiy qismi',
    letter: 'J',
    example: 'Tarkib elementlaridan bittasi mavjud bo‘lmasa ham, shaxsni jinoiy javobgarlikka tortish mumkin emas.'
  },
  {
    id: 'term-62',
    term: 'Jazoni og‘irlashtiruvchi holatlar',
    definition: 'Jinoyat sodir etilishida aybdorning qilmishini yanada xavfliroq qiluvchi, qonunda qat’iy sanab o‘tilgan va sud tomonidan jazoni og‘irroq tayinlashga asos bo‘ladigan omillar.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 56-modda',
    letter: 'J',
    example: 'Homilador ayolga, yosh bolaga, ojiz shaxsga nisbatan jinoyat sodir etish, guruh bo‘lib til biriktirish, mastlik holati.'
  },
  {
    id: 'term-63',
    term: 'Jazoni yengillashtiruvchi holatlar',
    definition: 'Shaxsning aybini kamaytiruvchi, uning pushaymonligini yoki yordam berganligini ko‘rsatuvchi va sud tomonidan yengilroq jazo tayinlanishiga xizmat qiluvchi qonuniy omillar.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 55-modda',
    letter: 'J',
    example: 'Aybdorning o‘z xohishi bilan aybini bo‘yniga olishi, yetkazilgan zararni ixtiyoriy qoplash, voyaga yetmaganlik, birinchi marta jinoyat sodir etganlik.'
  },
  {
    id: 'term-64',
    term: 'Jinoiy javobgarlik yoshi',
    definition: 'Shaxs sodir etgan jinoyati uchun qonunan jazo choralariga tortilishi mumkin bo‘lgan eng kichik yosh chegarasi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 17-modda',
    letter: 'J',
    example: 'Umumiy qoida bo‘yicha jinoiy javobgarlik 16 yoshdan, o‘ta og‘ir jinoyatlar uchun esa 14 va 13 yoshdan boshlanadi.'
  },
  {
    id: 'term-65',
    term: 'Jazo tizimi',
    definition: 'Jinoyat kodeksi umumiy qismida qat’iy belgilangan, og‘irlik darajasiga qarab tizimlashtirilgan va faqat sud tomonidan qo‘llaniladigan davlat majburlov choralari ro‘yxati.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 43-modda',
    letter: 'J',
    example: 'Jarima, majburiy jamoat ishlari, axloq tuzatish ishlari, ozodlikni cheklash, ozodlikdan mahrum qilish, umrbod ozodlikdan mahrum qilish.'
  },
  {
    id: 'term-66',
    term: 'Jabrlanuvchi',
    definition: 'Jinoyat yoki huquqbuzarlik oqibatida ma’naviy, jismoniy yoki mulkiy zarar ko‘rgan va qonuniy tartibda jabrlanuvchi deb e’tirof etilgan shaxs.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi, 54-modda',
    letter: 'J',
    example: 'Jabrlanuvchi sudda dalillar taqdim etish, ayblovni qo‘llab-quvvatlash va zararni qoplatish huquqiga ega.'
  },

  // --- K HARFI ---
  {
    id: 'term-67',
    term: 'Konstitutsiya',
    definition: 'Davlatning asosiy qonuni; oliy yuridik kuchga ega bo‘lib, davlat tuzilishi, boshqaruv shakli, inson huquqlari va hokimiyat bo‘linishi prinsiplarini belgilab beradi.',
    category: 'Konstitutsiya',
    source: '8-sinf Davlat va huquq asoslari; O‘zbekiston Respublikasi Konstitutsiyasi',
    letter: 'K',
    etymology: 'Lotincha "constitutio" - tuzilish, o‘rnatish',
    example: 'Konstitutsiya butun mamlakat hududida oliy yuridik kuchga ega va to‘g‘ridan-to‘g‘ri amal qiladi.'
  },
  {
    id: 'term-68',
    term: 'Konfederatsiya',
    definition: 'Mustaqil davlatlarning muayyan umumiy maqsadlar (mudofaa, savdo, tashqi siyosat)ga erishish uchun tuzgan vaqtincha va cheklangan xalqaro-huquqiy ittifoqi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 2-bob',
    letter: 'K',
    etymology: 'Lotincha "confoederatio" - shartnoma orqali uyushish',
    example: 'Konfederatsiyada umumiy yagona konstitutsiya yoki yagona armiya bo‘lmaydi, har bir a’zo davlat o‘z to‘liq suverenitetini saqlab qoladi.'
  },
  {
    id: 'term-69',
    term: 'Kassatsiya',
    definition: 'Qonuniy kuchga kirgan sud qarorlari, hukmlari ustidan qonuniylik va adolatlilikni tekshirish maqsadida yuqori instansiya sudiga shikoyat keltirish bosqichi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Protsessual kodekslar',
    letter: 'K',
    etymology: 'Fransuzcha "casser" - sindirish, bekor qilish',
    example: 'Kassatsiya shikoyati qonuniy kuchga kirgan sud hujjatlari yuzasidan beriladi.'
  },
  {
    id: 'term-70',
    term: 'Kodifikatsiya',
    definition: 'Muayyan huquq sohasidagi qonunchilik normalarini chuqur qayta ishlab, ularni yaxlit, mantiqan mukammal yagona qonun hujjatiga — kodeksga aylantirish.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Qonunchilik tizimi',
    letter: 'K',
    etymology: 'Lotincha "codex" - kitob va "facio" - bajaraman',
    example: 'Fuqarolik kodeksi, Jinoyat kodeksi, Mehnat kodeksi kodifikatsiya natijasidir.'
  },
  {
    id: 'term-71',
    term: 'Konsullik',
    definition: 'Bir davlatning boshqa davlat hududidagi doimiy vakolatxonasi bo‘lib, o‘z davlati hamda fuqarolarining iqtisodiy, huquqiy, pasport va viza manfaatlarini himoya qiladi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari, Xalqaro munosabatlar',
    letter: 'K',
    example: 'Elchixona butun davlat nomidan siyosiy aloqalarni olib borsa, konsullik esa asosan fuqarolarga bevosita amaliy va yuridik xizmat ko‘rsatadi.'
  },
  {
    id: 'term-72',
    term: 'Kolliziya (Huquqiy kolliziya)',
    definition: 'Ayni bir ijtimoiy munosabatni tartibga soluvchi ikki yoki undan ortiq me’yoriy-huquqiy hujjatlar o‘rtasidagi qarama-qarshilik yoki nomuvofiqlik.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Qonunchilik asoslari',
    letter: 'K',
    etymology: 'Lotincha "collisio" - to‘qnashuv',
    example: 'Kolliziya vujudga kelganda yuqoriroq yuridik kuchga ega bo‘lgan hujjat qo‘llaniladi.'
  },
  {
    id: 'term-73',
    term: 'Konsolidatsiya',
    definition: 'Bir sohadagi bir nechta tarqoq me’yoriy-huquqiy hujjatlarni tahririy o‘zgarishlar kiritmasdan yagona qonun hujjatiga birlashtirish.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Qonunchilik tizimlashtirilishi',
    letter: 'K',
    etymology: 'Lotincha "consolidatio" - mustahkamlash, bir butun qilish',
    example: 'Qonunchilik bazasini ixchamlashtirish uchun konsolidatsiya usulidan foydalaniladi.'
  },
  {
    id: 'term-74',
    term: 'Konstitutsiyaviy sud',
    definition: 'Qonun chiqaruvchi va ijro etuvchi hokimiyatlarning hujjatlari Konstitutsiyaga muvofiqligi to‘g‘risidagi ishlarni ko‘rib chiquvchi konstitutsiyaviy odil sudlov organi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; "Konstitutsiyaviy sud to‘g‘risida"gi Qonun',
    letter: 'K',
    example: 'Fuqarolar ham o‘z konstitutsiyaviy huquq va erkinliklariga zid deb hisoblangan qonunlar yuzasidan Konstitutsiyaviy sudga to‘g‘ridan-to‘g‘ri murojaat qilish huquqiga ega.'
  },
  {
    id: 'term-75',
    term: 'Ko‘zdan kechirish',
    definition: 'Hodisa sodir bo‘lgan joy, bino, hudud, hujjatlar va narsalarni tergovchi yoki sud tomonidan bevosita tekshirish va dalillarni qayd qilishga qaratilgan tergov harakati.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi',
    letter: 'K',
    example: 'Hodisa joyini ko‘zdan kechirish kechiktirib bo‘lmaydigan hollarda jinoyat ishi qo‘zg‘atilishidan oldin ham o‘tkazilishi mumkin.'
  },

  // --- L HARFI ---
  {
    id: 'term-76',
    term: 'Legitimlik',
    definition: 'Davlat hokimiyatining, uning qarorlarining xalq tomonidan ixtiyoriy tan olinishi, qo‘llab-quvvatlanishi va ma’qullanishi darajasi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Davlat nazariyasi',
    letter: 'L',
    etymology: 'Lotincha "legitimus" - qonuniy, ma’qul',
    example: 'Erkin va adolatli saylovlar orqali shakllangan hokimiyat eng yuqori darajadagi legitimlikka ega bo‘ladi.'
  },
  {
    id: 'term-77',
    term: 'Legal (Legallik)',
    definition: 'Qilmish, harakat yoki hujjatning amaldagi qonun talablariga, qonunchilik matniga qat’iy muvofiq kelishi holati.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari',
    letter: 'L',
    etymology: 'Lotincha "lex", "legis" - qonun',
    example: 'Tadbirkorlik faoliyati davlat ro‘yxatidan o‘tgan kundan boshlab legal hisoblanadi.'
  },
  {
    id: 'term-78',
    term: 'Litsenziya',
    definition: 'Vakolatli davlat organi tomonidan beriladigan va muayyan faoliyat turini amalga oshirish huquqini tasdiqlovchi maxsus ruxsatnoma.',
    category: 'Kodekslar',
    source: '"Litsenziyalash, ruxsat berish va xabardor qilish tartib-taomillari to‘g‘risida"gi Qonun',
    letter: 'L',
    etymology: 'Lotincha "licentia" - ruxsat, ijozat',
    example: 'Tibbiy, advokatlik yoki farmatsevtika faoliyati faqat litsenziya asosida amalga oshiriladi.'
  },

  // --- M HARFI ---
  {
    id: 'term-79',
    term: 'Muomala layoqati',
    definition: 'Fuqaroning o‘z harakatlari bilan fuqarolik huquqlariga ega bo‘lish va ularni amalga oshirish, o‘zi uchun fuqarolik burchlarini vujudga keltirish va ularni bajarish qobiliyati.',
    category: '8-sinf',
    source: '8-sinf va 9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 22-modda',
    letter: 'M',
    example: 'To‘liq muomala layoqati fuqaro voyaga yetishi bilan, ya’ni o‘n sakkiz yoshga to‘lishi bilan vujudga keladi.'
  },
  {
    id: 'term-80',
    term: 'Mehnat shartnomasi',
    definition: 'Xodim bilan ish beruvchi o‘rtasidagi kelishuv bo‘lib, unga ko‘ra xodim muayyan mutaxassislik, malaka yoki lavozim bo‘yicha ishni bajarishga, ish beruvchi esa unga ish haqi to‘lashga va mehnat sharoitlarini ta’minlashga majbur bo‘ladi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Mehnat kodeksi, 103-modda',
    letter: 'M',
    example: 'Mehnat shartnomasi yozma shaklda, kamida ikki nusxada tuziladi.'
  },
  {
    id: 'term-81',
    term: 'Ma’muriy javobgarlik',
    definition: 'Ma’muriy huquqbuzarlik sodir etgan shaxsga nisbatan vakolatli davlat organi yoki sud tomonidan ma’muriy jazo chorasining qo‘llanilishi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Ma’muriy javobgarlik to‘g‘risidagi kodeks, 10-modda',
    letter: 'M',
    example: 'Ma’muriy javobgarlik o‘n olti yoshga to‘lgan shaxslarga nisbatan qo‘llaniladi.'
  },
  {
    id: 'term-82',
    term: 'Ma’muriy jazo turlari',
    definition: 'Ma’muriy huquqbuzarlik sodir etgan shaxsni tarbiyalash va yangi huquqbuzarliklar sodir etilishining oldini olish maqsadida qonunda belgilangan ta’sir choralari.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; MJtK, 23-modda',
    letter: 'M',
    example: 'Jarima, ashyoni musodara qilish, maxsus huquqdan (haydovchilik) mahrum etish, ma’muriy qamoq (15 sutkagacha).'
  },
  {
    id: 'term-83',
    term: 'Monarxiya',
    definition: 'Oliy davlat hokimiyati yakka hukmdor (podsho, qirol, sulton, amir) qo‘lida bo‘lgan va avloddan-avlodga meros qilib qoldiriladigan davlat boshqaruv shakli.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 2-bob',
    letter: 'M',
    etymology: 'Yunoncha "monos" - bitta va "arche" - hokimiyat',
    example: 'Monarxiya mutlaq (Saudiya Arabistoni) yoki cheklangan/parlamentar (Buyuk Britaniya, Yaponiya) ko‘rinishida bo‘ladi.'
  },
  {
    id: 'term-84',
    term: 'Mulk huquqi',
    definition: 'Shaxsning o‘ziga tegishli mol-mulkka o‘z xohishiga ko‘ra va o‘z manfaatlarida egalik qilish, undan foydalanish va uni tasarruf etish bo‘yicha qonun bilan tan olinadigan va muhofaza qilinadigan huquqi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 164-modda',
    letter: 'M',
    example: 'Mulk daxlsizdir va qonun bilan qo‘riqlanadi. Mulkdorning mol-mulkini musodara qilishga faqat sud qarori asosida yo‘l qo‘yiladi.'
  },
  {
    id: 'term-85',
    term: 'Majoritar saylov tizimi',
    definition: 'Saylovchilarning qonunda belgilangan ko‘pchilik (mutlaq yoki nisbiy) ovozini olgan nomzod saylangan deb hisoblanadigan saylov tizimi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Saylov kodeksi',
    letter: 'M',
    etymology: 'Fransuzcha "majorite" - ko‘pchilik',
    example: 'O‘zbekistonda Oliy Majlis Qonunchilik palatasining 75 nafar deputati majoritar tizim (bir mandatli saylov okruglari) bo‘yicha saylanadi.'
  },
  {
    id: 'term-86',
    term: 'Moratoriy',
    definition: 'Davlat yoki xalqaro shartnoma tomonidan ma’lum majburiyatlarni bajarish, qonuniy choralarni yoki harakatlarni vaqtincha to‘xtatib turish e’loni.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari',
    letter: 'M',
    etymology: 'Lotincha "moratorius" - sekinlashtiruvchi, kechiktiruvchi',
    example: 'Daraxtlarni kesishga qarshi yoki o‘lim jazosini ijro etishga nisbatan kiritilgan moratoriy bunga misoldir.'
  },
  {
    id: 'term-87',
    term: 'Merosxo‘rlik (Meros huquqi)',
    definition: 'Vafot etgan shaxsga (meros qoldiruvchiga) tegishli mol-mulk, huquq va burchlarning qonun yoki vasiyatnoma bo‘yicha boshqa shaxslarga o‘tishi tartibi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 1112-modda',
    letter: 'M',
    example: 'Qonun bo‘yicha birinchi navbatdagi merosxo‘rlar: meros qoldiruvchining bolalari, eri (xotini) va ota-onasi teng ulushlarda meros oladilar.'
  },
  {
    id: 'term-88',
    term: 'Majburiy ulush (Merosda)',
    definition: 'Vasiyatnomaning mazmunidan qat’i nazar, meros qoldiruvchining voyaga yetmagan yoki mehnatga layoqatsiz bolalari, shuningdek mehnatga layoqatsiz eri (xotini) va ota-onasiga qonun bo‘yicha tegishi kerak bo‘lgan ulushning kamida yarmi miqdorida ajratilishi shart bo‘lgan kafolatlangan qism.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 1142-modda',
    letter: 'M',
    example: 'Agar vasiyatnomada butun mulk begona shaxsga qoldirilgan bo‘lsa ham, voyaga yetmagan bola majburiy ulush olish huquqiga ega.'
  },
  {
    id: 'term-89',
    term: 'Majburiy jamoat ishlari',
    definition: 'Mahkum tomonidan haq to‘lanmaydigan, jamiyat foydasiga bajariladigan foydali mehnat jazosi bo‘lib, u ish yoki o‘qishdan bo‘sh vaqtda o‘taladi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 45(1)-modda',
    letter: 'M',
    example: 'Majburiy jamoat ishlari 120 soatdan 480 soatgacha muddatga belgilanadi.'
  },
  {
    id: 'term-90',
    term: 'Mualliflik huquqi',
    definition: 'Fan, adabiyot va san’at asarlarini yaratgan muallifning asarga bo‘lgan shaxsiy nomulkiy va mulkiy (eksklyuziv) huquqlari majmui.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; "Mualliflik huquqi va turdosh huquqlar to‘g‘risida"gi Qonun',
    letter: 'M',
    example: 'Mualliflik huquqi asarning yaratilishi faktining o‘zi bilan yuzaga keladi va maxsus ro‘yxatdan o‘tkazish talab etilmaydi.'
  },

  // --- N HARFI ---
  {
    id: 'term-91',
    term: 'Nikoh shartnomasi',
    definition: 'Nikohlanuvchi shaxslarning yoki er-xotinning nikohda bo‘lgan davrida va (yoki) er-xotin nikohdan ajralgan taqdirda ularning mulkiy huquq hamda majburiyatlarini belgilovchi yozma va notarial tasdiqlangan kelishuvi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Oila kodeksi, 29-modda',
    letter: 'N',
    example: 'Nikoh shartnomasida faqat mulkiy munosabatlar tartibga solinadi; er-xotinning shaxsiy nomulkiy huquqlari shartnoma mavzusi bo‘la olmaydi.'
  },
  {
    id: 'term-92',
    term: 'Notariat',
    definition: 'Fuqarolar va yuridik shaxslarning huquqlari hamda qonuniy manfaatlarini himoya qilish maqsadida bitimlar va faktlarni qonun yo‘li bilan tasdiqlovchi rasmiy davlat va xususiy huquqiy tuzilma.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; "Notariat to‘g‘risida"gi Qonun',
    letter: 'N',
    etymology: 'Lotincha "notarius" - mirza, kotib',
    example: 'Ko‘chmas mulk oldi-sotdisi, ishonchnomalar, meros guvohnomalari notarius tomonidan rasmiylashtiriladi.'
  },
  {
    id: 'term-93',
    term: 'Normativ-huquqiy hujjat',
    definition: 'Qonunchilikda belgilangan tartibda vakolatli davlat organlari yoki referendum orqali qabul qilingan, umummajburiy davlat ko‘rsatmalarini belgilash, o‘zgartirish yoki bekor qilishga qaratilgan rasmiy hujjat.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; "Normativ-huquqiy hujjatlar to‘g‘risida"gi Qonun',
    letter: 'N',
    example: 'Konstitutsiya, qonunlar, Oliy Majlis qarorlari, Prezident farmonlari va qarorlari normativ-huquqiy hujjat turlaridir.'
  },
  {
    id: 'term-94',
    term: 'Nikoh yoshi',
    definition: 'Qonun bo‘yicha erkaklar va ayollar uchun nikoh tuzishga ruxsat berilgan yosh chegarasi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Oila kodeksi, 15-modda',
    letter: 'N',
    example: 'O‘zbekistonda erkaklar va ayollar uchun nikoh yoshi o‘n sakkiz yosh etib belgilangan. Uzrli sabablar bo‘lganda tuman hokimi qarori bilan ko‘pi bilan bir yilga kamaytirilishi mumkin.'
  },

  // --- O HARFI ---
  {
    id: 'term-95',
    term: 'Ombudsman (Inson huquqlari bo‘yicha vakil)',
    definition: 'Davlat organlari, mansabdor shaxslar tomonidan inson huquqlari va erkinliklari to‘g‘risidagi qonun hujjatlariga rioya etilishi ustidan parlament nazoratini amalga oshiruvchi mustaqil mansabdor shaxs.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; O‘zbekiston Respublikasi Konstitutsiyasi, 98-modda',
    letter: 'O',
    etymology: 'Shvedcha "ombudsman" - boshqa shaxsning manfaatini himoya qiluvchi vakil',
    example: 'Oliy Majlisning Inson huquqlari bo‘yicha vakili (Ombudsman) fuqarolarning shikoyatlarini mustaqil ko‘rib chiqadi.'
  },
  {
    id: 'term-96',
    term: 'Oila',
    definition: 'Nikoh, qon-qarindoshlik, farzandlikka olish yoki bolalarni tarbiyaga olish orqali bog‘langan, birgalikda yashovchi, umumiy ro‘zg‘or yurituvchi hamda o‘zaro huquq va burchlar bilan bog‘langan shaxslar doirasi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Oila kodeksi; Konstitutsiya 76-modda',
    letter: 'O',
    example: 'Oila jamiyatning asosiy bo‘g‘inidir hamda u jamiyat va davlat muhofazasidadir.'
  },
  {
    id: 'term-97',
    term: 'Oxirgi zarurat',
    definition: 'Shaxs, jamiyat yoki davlat manfaatlariga xavf soluvchi tahdidni bartaraf etish uchun boshqa choralar bo‘lmaganda zarar yetkazish holati; yetkazilgan zarar bartaraf qilingan zarardan kam bo‘lsa, u jinoyat hisoblanmaydi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 38-modda',
    letter: 'O',
    example: 'Yong‘in boshqa uylarga tarqalmasligi uchun qo‘shni devorni buzish oxirgi zaruratga misoldir.'
  },
  {
    id: 'term-98',
    term: 'Obyekt (Jinoyat obyekti)',
    definition: 'Jinoyat qonuni bilan qo‘riqlanadigan, jinoiy tajovuz natijasida zarar yetkaziladigan yoki zarar yetkazish xavfi ostida qoladigan ijtimoiy munosabatlar majmui.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari, Jinoyat tarkibi mavzusi',
    letter: 'O',
    example: 'Odam o‘ldirish jinoyatida obyekt — insonning hayoti hisoblanadi.'
  },
  {
    id: 'term-99',
    term: 'Obyektiv tomon',
    definition: 'Jinoyatning tashqi ifodasi bo‘lib, u ijtimoiy xavfli harakat yoki harakatsizlik, uning jinoiy oqibati va ular o‘rtasidagi sababiy bog‘lanishni o‘z ichiga oladi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari, Jinoyat tarkibi',
    letter: 'O',
    example: 'Jinoyat sodir etilgan joy, vaqt, usul va qurol obyektiv tomonning fakultativ belgilaridir.'
  },
  {
    id: 'term-100',
    term: 'Ozodlikni cheklash',
    definition: 'Sud tomonidan mahkumga yashash joyini tark etishni butunlay taqiqlash yoki sutkaning muayyan vaqtida tark etishni cheklashdan iborat asosiy jazo turi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 48(1)-modda',
    letter: 'O',
    example: 'Ozodlikni cheklash 1 oydan 5 yilgacha muddatga tayinlanadi va unga elektron bilaguzuk qo‘llanilishi mumkin.'
  },
  {
    id: 'term-101',
    term: 'Ozodlikdan mahrum qilish',
    definition: 'Mahkumni jamiyatdan ajratib, uni manzil-koloniya, umumiy, qattiq yoki maxsus tartibli koloniyalarga yoxud turmaga joylashtirishdan iborat eng og‘ir asosiy jazo turlaridan biri.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 50-modda',
    letter: 'O',
    example: 'Ozodlikdan mahrum qilish 1 oydan 20 yilgacha (hukmlar jami bo‘yicha 25 yilgacha) muddatga belgilanadi.'
  },
  {
    id: 'term-102',
    term: 'Ochiqlik va oshkoralik',
    definition: 'Barcha sudlarda ishlar oshkora ko‘rilishi va davlat organlari faoliyatining jamoatchilik uchun ochiq, shaffof bo‘lishi prinsipi.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 33 va 137-moddalar',
    letter: 'O',
    example: 'Ishlarni yopiq majlisda ko‘rib chiqishga faqat qonunda belgilangan hollarda (davlat siri, farzandlikka olish siri, jinsiy jinoyatlar) yo‘l qo‘yiladi.'
  },

  // --- P HARFI ---
  {
    id: 'term-103',
    term: 'Preambula',
    definition: 'Qonun, xalqaro shartnoma yoki konstitutsiyaning kirish qismi bo‘lib, unda hujjatning qabul qilinish sabablari, maqsadi, tamoyillari va tarixiy asoslari bayon etiladi.',
    category: 'Konstitutsiya',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya kirish qismi',
    letter: 'P',
    etymology: 'Lotincha "praeambulus" - oldinda yuruvchi, muqaddima',
    example: 'O‘zbekiston Respublikasi Konstitutsiyasining Preambulasida xalqning suveren irodasi, insonparvar demokratik davlat barpo etish maqsadi tantanali ifodalangan.'
  },
  {
    id: 'term-104',
    term: 'Prokuratura',
    definition: 'Mamlakat hududida qonunlarning aniq va bir xilda ijro etilishi ustidan oliy nazoratni amalga oshiruvchi, jinoiy ta’qibni olib boruvchi va sudda davlat ayblovini qo‘llab-quvvatlovchi markazlashtirilgan davlat organi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; "Prokuratura to‘g‘risida"gi Qonun; Konstitutsiya 143-modda',
    letter: 'P',
    etymology: 'Lotincha "procuro" - g‘amxo‘rlik qilaman, nazorat qilaman',
    example: 'Bosh prokuror Oliy Majlis Senati roziligi bilan O‘zbekiston Respublikasi Prezidenti tomonidan 5 yil muddatga tayinlanadi.'
  },
  {
    id: 'term-105',
    term: 'Proporsional saylov tizimi',
    definition: 'Saylovchilar alohida nomzodlarga emas, balki siyosiy partiyalar ro‘yxatiga ovoz beradigan va deputatlik o‘rinlari partiyalar to‘plagan ovozlar ulushiga mutanosib taqsimlanadigan tizim.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Saylov kodeksi',
    letter: 'P',
    etymology: 'Lotincha "proportio" - mutanosiblik',
    example: 'O‘zbekistonda Qonunchilik palatasining 75 nafar deputati partiyaviy ro‘yxatlar bo‘yicha proporsional tizimda saylanadi.'
  },
  {
    id: 'term-106',
    term: 'Passiv saylov huquqi',
    definition: 'Fuqaroning davlat hokimiyati organlariga va mahalliy o‘zini o‘zi boshqarish organlariga saylanish (deputat, senator yoki prezident etib saylanish) huquqi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Konstitutsiya 128-modda',
    letter: 'P',
    example: 'Faol saylov huquqi — bu ovoz berish huquqi bo‘lsa, passiv saylov huquqi — o‘z nomzodini qo‘yib saylanish huquqidir.'
  },
  {
    id: 'term-107',
    term: 'Persona non grata',
    definition: 'Qabul qiluvchi davlat tomonidan o‘z hududida bo‘lishi nomaqbul deb e’lon qilingan xorijiy diplomatik vakil yoki rasmiy shaxs.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Xalqaro huquq',
    letter: 'P',
    etymology: 'Lotincha "persona non grata" - nomaqbul shaxs',
    example: 'Diplomat persona non grata deb topilganda ma’lum muddat ichida qabul qiluvchi davlat hududini tark etishi shart.'
  },
  {
    id: 'term-108',
    term: 'Probel (Huquqdagi bo‘shliq)',
    definition: 'Huquqiy tartibga solishni taqozo etuvchi ijtimoiy munosabat yuzasidan aniq qonun normasining mavjud emasligi holati.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqni qo‘llash texnikasi',
    letter: 'P',
    etymology: 'Nemischa "probel" - bo‘sh joy',
    example: 'Huquqdagi bo‘shliqlarni bartaraf etish uchun huquq analogiyasi yoki qonun analogiyasidan foydalaniladi.'
  },
  {
    id: 'term-109',
    term: 'Petitsiya (Kollektiv murojaat)',
    definition: 'Fuqarolarning davlat organlariga, parlamentga jamoaviy tarzda qonunchilikni takomillashtirish yoki muhim muammolarni hal qilish bo‘yicha yo‘llaydigan rasmiy murojaati.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; "Mening fikrim" veb-portali',
    letter: 'P',
    etymology: 'Lotincha "petitio" - iltimos, talab',
    example: 'Oliy Majlis palatalari tegishli miqdordagi imzo to‘plagan jamoaviy elektron murojaatlarni ko‘rib chiqishi shart.'
  },

  // --- Q HARFI ---
  {
    id: 'term-110',
    term: 'Qonun ustuvorligi',
    definition: 'Barcha davlat organlari, mansabdor shaxslar va fuqarolarning faoliyatida konstitutsiya va qonunlarning mutlaq ustunligi, ularning qat’iy ijro etilishi va qonun oldida barchaning tengligi prinsipi.',
    category: 'Konstitutsiya',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 15-modda',
    letter: 'Q',
    example: 'Konstitutsiyaviy davlatning asosiy ustuni qonun ustuvorligidir.'
  },
  {
    id: 'term-111',
    term: 'Qasd (Qasddan sodir etilgan jinoyat)',
    definition: 'Shaxs o‘z qilmishining ijtimoiy xavflilik xususiyatini anglagan, uning zararli oqibatlarini ko‘zda tutgan va shuni xohlagan (to‘g‘ri qasd) yoki bu oqibatlarga ongli ravishda yo‘l qo‘ygan (egri qasd) holat.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 21-modda',
    letter: 'Q',
    example: 'Qasd jinoiy javobgarlikning eng og‘ir subyektiv ayb shakli hisoblanadi.'
  },
  {
    id: 'term-112',
    term: 'Qonunchilik palatasi (Quyi palata)',
    definition: 'O‘zbekiston Respublikasi Oliy Majlisining doimiy asosda ishlovchi professional qonun chiqaruvchi palatasi bo‘lib, 150 nafar deputatdan iborat.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 88-modda',
    letter: 'Q',
    example: 'Qonun loyihalari avval Qonunchilik palatasida 3 ta o‘qishda ko‘rib chiqilib, qabul qilinadi, so‘ngra Senatga ma’qullash uchun yuboriladi.'
  },
  {
    id: 'term-113',
    term: 'Qonun osti hujjati',
    definition: 'Qonunlar asosida va ularni ijro etish maqsadida vakolatli davlat organlari tomonidan qabul qilinadigan, qonundan keyingi yuridik kuchga ega bo‘lgan normativ-huquqiy hujjat.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Qonunchilik tizimi',
    letter: 'Q',
    example: 'Prezident farmonlari va qarorlari, Vazirlar Mahkamasi qarorlari, vazirlik va idoralar buyruqlari qonun osti hujjatlaridir.'
  },
  {
    id: 'term-114',
    term: 'Qarzdor va Kreditor',
    definition: 'Majburiyat huquqining ikki asosiy tomoni: kreditor — majburiyatning bajarilishini talab qilish huquqiga ega bo‘lgan shaxs, qarzdor — muayyan harakatni amalga oshirishga majbur bo‘lgan shaxs.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 234-modda',
    letter: 'Q',
    example: 'Qarz shartnomasida qarz beruvchi kreditor, qarz oluvchi esa qarzdordir.'
  },

  // --- R HARFI ---
  {
    id: 'term-115',
    term: 'Referendum',
    definition: 'Davlat va jamiyat hayotining eng muhim masalalari yuzasidan xalqning bevosita ovoz berishi orqali qaror qabul qilish shakli; bevosita demokratiyaning oliy ko‘rinishi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; "Referendum to‘g‘risida"gi Qonun; Konstitutsiya 9-modda',
    letter: 'R',
    etymology: 'Lotincha "referendum" - xabar qilinishi kerak bo‘lgan narsa',
    example: 'O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasi 2023-yil 30-aprel kuni umumxalq referendumi orqali qabul qilingan.'
  },
  {
    id: 'term-116',
    term: 'Ratifikatsiya',
    definition: 'Davlatning vakolatli organi (parlament) tomonidan xalqaro shartnomaning tasdiqlanishi va uning ushbu davlat uchun majburiy yuridik kuchga ega deb tan olinishi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; Xalqaro shartnomalar to‘g‘risidagi Qonun',
    letter: 'R',
    etymology: 'Lotincha "ratum" - tasdiqlangan va "facio" - bajaraman',
    example: 'Oliy Majlis xalqaro konvensiyalarni ratifikatsiya qilish haqida maxsus qonun qabul qiladi.'
  },
  {
    id: 'term-117',
    term: 'Respublika',
    definition: 'Oliy davlat hokimiyati organlari xalq tomonidan muayyan muddatga saylanadigan davlat boshqaruv shakli.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 2-bob',
    letter: 'R',
    etymology: 'Lotincha "res publica" - umumiy ish, jamoat mulki',
    example: 'Respublikalar prezidentlik, parlamentar yoki aralash ko‘rinishda bo‘ladi. O‘zbekiston — prezidentlik boshqaruvidagi respublika.'
  },
  {
    id: 'term-118',
    term: 'Retsidiv (Xavfli retsidiv)',
    definition: 'Ilgari qasddan sodir etgan jinoyati uchun sudlangan shaxs tomonidan yana yangidan qasddan jinoyat sodir etilishi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 34-modda',
    letter: 'R',
    etymology: 'Lotincha "recidivus" - qaytalanuvchi, takroriy',
    example: 'Retsidiv jinoyat og‘irlashtiruvchi holat hisoblanadi va jazo muddatining qat’iyroq belgilanishiga olib keladi.'
  },
  {
    id: 'term-119',
    term: 'Reabilitatsiya',
    definition: 'Asossiz ravishda jinoiy javobgarlikka tortilgan, hibsga olingan yoki hukm qilingan shaxsning aybsizligini sud orqali tan olish va uning buzilgan huquqlari, sha’ni, qadr-qimmati hamda yetkazilgan zararni to‘liq tiklash.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi',
    letter: 'R',
    etymology: 'Lotincha "rehabilitatio" - avvalgi maqomini qaytarish',
    example: 'Oqlangan shaxsga yetkazilgan barcha mulkiy va ma’naviy zarar davlat tomonidan to‘liq qoplanadi.'
  },
  {
    id: 'term-120',
    term: 'Remissiya',
    definition: 'Qarzdan to‘liq yoki qisman voz kechish, soliq majburiyatlarini yengillashtirish yoki jazoni yengilrog‘iga almashtirish tartibi.',
    category: 'Kodekslar',
    source: 'Fuqarolik va Soliq qonunchiligi',
    letter: 'R',
    etymology: 'Lotincha "remissio" - kechirish, bo‘shashtirish',
    example: 'Kreditor qarzdorni o‘z majburiyatini bajarishdan butunlay ozod qilishi mumkin.'
  },

  // --- S HARFI ---
  {
    id: 'term-121',
    term: 'Sinov muddati (Mehnat huquqida)',
    definition: 'Xodimning topshirilayotgan ishga layoqatliligini tekshirish maqsadida ishga qabul qilish chog‘ida tomonlarning kelishuvi bilan belgilanadigan maxsus davr.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Yangi Mehnat kodeksi, 129–132-moddalar',
    letter: 'S',
    example: 'Dastlabki sinov muddati uch oydan, tashkilot rahbarlari va ularning o‘rinbosarlari uchun esa olti oydan oshmasligi kerak. Homilador ayollar va bitiruvchilarga sinov belgilanmaydi.'
  },
  {
    id: 'term-122',
    term: 'Sud hokimiyati',
    definition: 'Qonun chiqaruvchi va ijro etuvchi hokimiyatlardan mustaqil bo‘lgan, fuqarolar va davlat manfaatlarini odil sudlov yo‘li bilan himoya qiluvchi alohida davlat hokimiyati tarmog‘i.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Konstitutsiya 130-modda; "Sudlar to‘g‘risida"gi Qonun',
    letter: 'S',
    example: 'O‘zbekiston Respublikasida sud tizimi Konstitutsiyaviy sud, Oliy sud, harbiy sudlar, viloyat va tuman (shahar) sudlaridan iborat.'
  },
  {
    id: 'term-123',
    term: 'Sudya daxlsizligi',
    definition: 'Sudyaning odil sudlovni amalga oshirishdagi to‘liq mustaqilligi kafolati bo‘lib, uni jinoiy javobgarlikka tortish va hibsga olishga faqat Sudyalar oliy kengashining xulosasi va Bosh prokuror roziligi bilan yo‘l qo‘yiladi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Konstitutsiya 136-modda',
    letter: 'S',
    example: 'Sudyalar mustaqildirlar, faqat qonunga bo‘ysunadilar. Ularning odil sudlovni amalga oshirish borasidagi faoliyatiga biron-bir tarzda aralashish qat’iyan taqiqlanadi.'
  },
  {
    id: 'term-124',
    term: 'Sanksiya',
    definition: 'Huquqiy normaning qoidasi (dispozitsiyasi) buzilgan taqdirda huquqbuzarga nisbatan davlat tomonidan qo‘llaniladigan salbiy oqibatlar yoki jazo chorasi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqiy norma tarkibi',
    letter: 'S',
    etymology: 'Lotincha "sanctio" - qat’iy qaror, tasdiqlangan chora',
    example: 'Xalqaro huquqda xalqaro tinchlikni buzgan davlatga nisbatan BMT Xavfsizlik Kengashi tomonidan iqtisodiy sanksiyalar joriy etilishi mumkin.'
  },
  {
    id: 'term-125',
    term: 'Shartnoma erkinligi',
    definition: 'Fuqarolik huquqining asosiy tamoyillaridan biri bo‘lib, fuqarolar va yuridik shaxslarning shartnoma tuzishda, uning shartlarini belgilashda va hamkor tanlashda o‘z xohish-irodasi bilan mustaqil harakat qilish huquqi.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 354-modda',
    letter: 'S',
    example: 'Shartnoma tuzishga majburlashga yo‘l qo‘yilmaydi, qonunda nazarda tutilgan hollar bundan mustasno.'
  },
  {
    id: 'term-126',
    term: 'Sheriklik (Jinoyatda sheriklik)',
    definition: 'Ikki yoki undan ortiq shaxsning qasddan jinoyat sodir etishda birgalikda qatnashishi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 27-modda',
    letter: 'S',
    example: 'Jinoyatda sheriklar to‘rt toifaga bo‘linadi: bajaruvchi, tashkilotchi, dalolatchi va yordamchi.'
  },
  {
    id: 'term-127',
    term: 'Subyekt (Huquq subyekti)',
    definition: 'Huquqiy munosabatlarda ishtirok etish, huquqlarga ega bo‘lish va yuridik majburiyatlarni bajarish layoqatiga ega bo‘lgan jismoniy va yuridik shaxslar hamda davlat.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqiy munosabatlar',
    letter: 'S',
    example: 'Fuqarolar, chet el fuqarolari, korxonalar, davlat organlari huquq subyektlaridir.'
  },
  {
    id: 'term-128',
    term: 'Subyektiv tomon',
    definition: 'Shaxsning o‘zi sodir etgan jinoyatga va uning oqibatlariga bo‘lgan ichki ruhiy munosabati bo‘lib, u ayb (qasd yoki ehtiyotsizlik), sabab va maqsadni o‘z ichiga oladi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari, Jinoyat tarkibi',
    letter: 'S',
    example: 'Subyektiv tomon bo‘lmagan taqdirda shaxsning harakati jinoyat deb baholana olmaydi.'
  },
  {
    id: 'term-129',
    term: 'Senat (Yuqori palata)',
    definition: 'O‘zbekiston Respublikasi Oliy Majlisining hududiy vakillik palatasi bo‘lib, viloyatlar, Toshkent shahri va Qoraqalpog‘iston Respublikasidan saylanadigan hamda Prezident tomonidan tayinlanadigan 65 nafar senatordan tashkil topadi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 92-modda',
    letter: 'S',
    example: 'Senat Qonunchilik palatasi qabul qilgan qonunlarni ma’qullash yoki rad etish vakolatiga ega.'
  },

  // --- T HARFI ---
  {
    id: 'term-130',
    term: 'Tergov (Dastlabki tergov)',
    definition: 'Jinoyat ishi yuzasidan haqiqatni aniqlash, dalillarni to‘plash, mustahkamlash, aybdorlarni fosh etish va ayb e’lon qilish maqsadida tergovchi tomonidan o‘tkaziladigan protsessual harakatlar bosqichi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi',
    letter: 'T',
    example: 'O‘zbekistonda dastlabki tergov prokuratura, ichki ishlar va davlat xavfsizlik xizmati tergovchilari tomonidan olib boriladi.'
  },
  {
    id: 'term-131',
    term: 'Tenglik prinsipi',
    definition: 'Barcha fuqarolarning jinsi, irqi, millati, tili, dini, ijtimoiy kelib chiqishi, e’tiqodi, shaxsiy va ijtimoiy mavqeidan qat’i nazar, qonun oldida tengligi.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 19-modda',
    letter: 'T',
    example: 'Qonun oldida hech kimga alohida asossiz imtiyoz yoki ustunlik berilishi mumkin emas.'
  },
  {
    id: 'term-132',
    term: 'Tashkilotchi',
    definition: 'Jinoyat tayyorlanishiga yoki sodir etilishiga rahbarlik qilgan, jinoiy guruh tuzgan yoki uning faoliyatini boshqargan shaxs.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 28-modda',
    letter: 'T',
    example: 'Tashkilotchilik harakati jazo tayinlashda eng og‘ir sheriklik shakli sifatida baholanadi.'
  },
  {
    id: 'term-133',
    term: 'Tintuv',
    definition: 'Jinoyat qurollari, qidirilayotgan shaxslar yoki ish uchun ahamiyatga molik ashyolarni topish maqsadida xonadon, bino yoki shaxsning kiyim-kechagida majburiy qidiruv o‘tkazishga qaratilgan tergov harakati.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; JPK, Tintuv bobi',
    letter: 'T',
    example: 'Turar joyda tintuv o‘tkazishga faqat sudning qaroriga asosan yo‘l qo‘yiladi (Konstitutsiya 31-modda).'
  },

  // --- U HARFI ---
  {
    id: 'term-134',
    term: 'Unitar davlat',
    definition: 'Tarkibida alohida davlat suverenitetiga ega bo‘lgan davlat tuzilmalari bo‘lmagan, yagona konstitutsiya, yagona fuqarolik va yagona oliy hokimiyat organlariga ega yaxlit davlat shakli.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 2-bob',
    letter: 'U',
    etymology: 'Lotincha "unitas" - birlik, yaxlitlik',
    example: 'O‘zbekiston, Fransiya, Turkiya va Yaponiya unitar davlatlar hisoblanadi.'
  },
  {
    id: 'term-135',
    term: 'Umrbod ozodlikdan mahrum qilish',
    definition: 'Faqat javobgarlikni og‘irlashtiradigan holatlarda qasddan odam o‘ldirish va terrorizm jinoyatlari uchungina sud tomonidan tayinlanishi mumkin bo‘lgan eng favqulodda jazo chorasi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 51-modda',
    letter: 'U',
    example: 'Umrbod ozodlikdan mahrum qilish jazosi ayollarga, 18 yoshga to‘lmasdan jinoyat sodir etganlarga va 60 yoshdan oshgan erkaklarga nisbatan tayinlanishi mumkin emas.'
  },

  // --- V HARFI ---
  {
    id: 'term-136',
    term: 'Veto huquqi',
    definition: 'Davlat rahbari yoki xalqaro organning parlament yoxud xalqaro kengash tomonidan qabul qilingan qonun yoki qarorning kuchga kirishini to‘xtatish yoki rad etish vakolati.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari; Konstitutsiya 109-modda; BMT Nizomi',
    letter: 'V',
    etymology: 'Lotincha "veto" - taqiqlayman',
    example: 'BMT Xavfsizlik Kengashining 5 ta doimiy a’zosi (AQSh, Rossiya, Xitoy, Buyuk Britaniya, Fransiya) veto huquqiga ega.'
  },
  {
    id: 'term-137',
    term: 'Vasiylik',
    definition: 'O‘n to‘rt yoshga to‘lmagan yetim yoki ota-ona qaramog‘idan mahrum bolalar, shuningdek ruhiy kasalligi tufayli sud tomonidan muomalaga layoqatsiz deb topilgan fuqarolarni himoya qilish uchun belgilanadigan huquqiy institut.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Oila kodeksi; Fuqarolik kodeksi 32-modda',
    letter: 'V',
    example: 'Vasiylar o‘z qaramog‘idagi shaxslar nomidan barcha zarur bitimlarni qonuniy vakil sifatida amalga oshiradilar.'
  },
  {
    id: 'term-138',
    term: 'Vasiyatnoma',
    definition: 'Fuqaroning o‘ziga tegishli mol-mulkni vafot etgan taqdirda tasarruf etish to‘g‘risidagi bir tomonlama xohish-iroda ifodasi bo‘lgan, qat’iy yozma va notarial tasdiqlangan hujjat.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 1120-modda',
    letter: 'V',
    example: 'Vasiyat qiluvchi o‘z mol-mulkini qonuniy merosxo‘rlar doirasiga kiradigan yoki kirmaydigan har qanday shaxsga vasiyat qilishi mumkin.'
  },
  {
    id: 'term-139',
    term: 'Vijdon erkinligi',
    definition: 'Har bir insonning xohlagan dinga e’tiqod qilish yoki hech qanday dinga e’tiqod qilmaslik, diniy ta’limotlarga munosabatini erkin belgilash konstitutsiyaviy huquqi.',
    category: 'Konstitutsiya',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi, 35-modda; "Vijdon erkinligi va diniy tashkilotlar to‘g‘risida"gi Qonun',
    letter: 'V',
    example: 'Diniy qarashlarni majburan singdirishga yo‘l qo‘yilmaydi.'
  },

  // --- X HARFI ---
  {
    id: 'term-140',
    term: 'Xalqaro gumanitar huquq',
    definition: 'Qurolli to‘qnashuvlar davrida urush qurbonlarini (yaradorlar, asirlar, tinch aholi) himoya qilish hamda urush olib borish vositalari va usullarini cheklovchi xalqaro normalar majmui.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari; 1949-yilgi Jeneva konvensiyalari',
    letter: 'X',
    example: 'Tinch aholiga qarshi hujum qilish, qasddan ochlikka duchor qilish yoki asirlarni qiynoqqa solish xalqaro gumanitar huquqni qo‘pol buzishdir.'
  },
  {
    id: 'term-141',
    term: 'Xalqaro sud (Gaaga sudi)',
    definition: 'Birlashgan Millatlar Tashkilotining (BMT) bosh sud organi bo‘lib, davlatlar o‘rtasidagi huquqiy nizolarni ko‘rib chiqadi va xalqaro huquq bo‘yicha maslahat xulosalari beradi.',
    category: '11-sinf',
    source: '11-sinf Davlat va huquq asoslari, Xalqaro tashkilotlar bobi',
    letter: 'X',
    example: 'Xalqaro sud Gaaga shahrida (Niderlandiya) joylashgan va 15 nafar mustaqil sudyadan iborat.'
  },
  {
    id: 'term-142',
    term: 'Xolislar (Xolis guvohlar)',
    definition: 'Tergov harakatlari (masalan, tintuv, tanib olish, ko‘zdan kechirish) o‘tkazilishining to‘g‘riligi, ketma-ketligi va natijalarini tasdiqlash uchun chaqiriladigan ishdan mutlaqo manfaatdor bo‘lmagan kamida ikki nafar fuqaro.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat-protsessual kodeksi',
    letter: 'X',
    example: 'Xolislar tergov harakati bayonnomasini imzolaydilar va o‘z fikr-mulohazalarini yozishga haqlidirlar.'
  },

  // --- Y HARFI ---
  {
    id: 'term-143',
    term: 'Yurisdiksiya',
    definition: 'Muayyan davlat organi yoki sudining qonun bilan belgilangan doirada nizolarni ko‘rib chiqish, ish yuritish va huquqiy qaror qabul qilish vakolati.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Sud va huquqni muhofaza qilish',
    letter: 'Y',
    etymology: 'Lotincha "jurisdictio" - sudlov, huquqni aytish',
    example: 'Harbiy xizmatchilar tomonidan sodir etilgan jinoyatlar harbiy sudlar yurisdiksiyasiga kiradi.'
  },
  {
    id: 'term-144',
    term: 'Yuridik fakt',
    definition: 'Qonunda nazarda tutilgan va muayyan huquqiy munosabatlarning vujudga kelishi, o‘zgarishi yoki bekor bo‘lishiga sabab bo‘ladigan hayotiy holat.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, 1-bob',
    letter: 'Y',
    example: 'Yuridik faktlar inson irodasiga bog‘liq bo‘lishiga qarab harakatlarga (qonuniy yoki qonunga xilof) va hodisalarga (inson irodasisiz sodir bo‘ladigan: tug‘ilish, tabiiy ofat) bo‘linadi.'
  },
  {
    id: 'term-145',
    term: 'Yuridik javobgarlik',
    definition: 'Huquqbuzarlik sodir etgan shaxsga nisbatan davlat majburlovi choralari qo‘llanilishi bo‘lib, u shaxs uchun muayyan huquqiy mahrumliklar va cheklovlar keltirib chiqaradi.',
    category: '8-sinf',
    source: '8-sinf Davlat va huquq asoslari, Huquqbuzarlik va yuridik javobgarlik',
    letter: 'Y',
    example: 'Yuridik javobgarlik 4 ta asosiy turga bo‘linadi: intizomiy, fuqarolik-huquqiy, ma’muriy va jinoiy javobgarlik.'
  },
  {
    id: 'term-146',
    term: 'Yuridik shaxs',
    definition: 'O‘z mulkida, xo‘jalik yuritishida yoki tezkor boshqaruvida alohida mol-mulkka ega bo‘lgan hamda o‘z majburiyatlari yuzasidan ushbu mol-mulk bilan javob beradigan, sudda da’vogar va javobgar bo‘la oladigan tashkilot.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 39-modda',
    letter: 'Y',
    example: 'Yuridik shaxs davlat ro‘yxatidan o‘tgan paytdan boshlab tashkil etilgan hisoblanadi.'
  },
  {
    id: 'term-147',
    term: 'Yordamchi (Jinoyatda)',
    definition: 'Jinoyat sodir etilishiga maslahatlar berish, ko‘rsatmalar berish, vositalar taqdim etish yoki to‘siqlarni bartaraf etish bilan ko‘maklashgan shaxs.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 28-modda',
    letter: 'Y',
    example: 'Qonun bo‘yicha yordamchi ham jinoyat sherigi sifatida jinoiy javobgarlikka tortiladi.'
  },

  // --- Z HARFI ---
  {
    id: 'term-148',
    term: 'Zaruriy mudofaa',
    definition: 'Mudofaanuvchining yoxud boshqa shaxsning shaxsini yoki huquqlarini, jamiyat yoki davlat manfaatlarini qonunga xilof tajovuzdan tajovuzchiga zarar yetkazgan holda himoya qilish; zaruriy mudofaa chegarasidan chetga chiqilmasa, qilmish jinoyat hisoblanmaydi.',
    category: '10-sinf',
    source: '10-sinf Davlat va huquq asoslari; Jinoyat kodeksi, 37-modda',
    letter: 'Z',
    example: 'Tajovuzning xavflilik xususiyatiga to‘la mutanosib ravishda amalga oshirilgan mudofaa qonun bilan to‘liq oqlanadi.'
  },
  {
    id: 'term-149',
    term: 'Zararni qoplash (Moddiy va ma’naviy)',
    definition: 'G‘ayriqonuniy xatti-harakatlar natijasida shaxsning mol-mulkiga yoki sha’ni va qadr-qimmatiga yetkazilgan puturni pul yoki ashyo shaklida to‘liq qoplab berish majburiyati.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 14 va 1021-moddalar',
    letter: 'Z',
    example: 'Ma’naviy zarar yetkazilgan taqdirda sud aybdor shaxs zimmasiga jabrlanuvchi foydasiga pul kompensatsiyasi to‘lash majburiyatini yuklaydi.'
  },
  {
    id: 'term-150',
    term: 'Ziddiyatli bitimlar',
    definition: 'Qonun talablariga zid ravishda, aldash, zo‘rlik, tahdid ostida yoki o‘ta og‘ir holatlar ta’sirida tuzilgan va sud tomonidan haqiqiy emas deb topiladigan bitimlar.',
    category: '9-sinf',
    source: '9-sinf Davlat va huquq asoslari; Fuqarolik kodeksi, 113–128-moddalar',
    letter: 'Z',
    example: 'Haqiqiy emas deb topilgan bitim tuzilgan paytidan boshlab yuridik oqibat keltirib chiqarmaydi.'
  }
];

export const DICTIONARY_CATEGORIES = [
  'Hammasi',
  '8-sinf',
  '9-sinf',
  '10-sinf',
  '11-sinf',
  'Konstitutsiya',
  'Kodekslar'
] as const;

export const ALPHABET_LETTERS = [
  'Hammasi',
  'A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'
];
