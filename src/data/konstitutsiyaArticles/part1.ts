export interface ArticleItem {
  number: number;
  title: string;
  content: string[];
  dtmTip?: string;
}

export const ARTICLES_PART_1: Record<number, ArticleItem> = {
  1: {
    number: 1,
    title: '1-modda. Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat',
    content: [
      'O‘zbekiston – boshqaruvning respublika shakliga ega bo‘lgan suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat.',
      'Davlatning “O‘zbekiston Respublikasi” va “O‘zbekiston” degan nomlari bir ma’noni anglatadi.'
    ],
    dtmTip: 'O‘zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat (5 ta sifat).'
  },
  2: {
    number: 2,
    title: '2-modda. Xalq manfaatlari va davlat organlari mas’uliyati',
    content: [
      'Davlat xalq irodasini ifoda etib, uning manfaatlariga xizmat qiladi. Davlat organlari va mansabdor shaxslar jamiyat va fuqarolar oldida mas’uldirlar.'
    ],
    dtmTip: 'Davlat organlari va mansabdor shaxslar jamiyat va fuqarolar oldida mas’uldirlar.'
  },
  3: {
    number: 3,
    title: '3-modda. Davlat tuzilishi, chegarasi va hududi',
    content: [
      'O‘zbekiston Respublikasi o‘zining milliy-davlat va ma’muriy-hududiy tuzilishini, davlat hokimiyati organlarining tizimini belgilaydi, ichki va tashqi siyosatini amalga oshiradi.',
      'O‘zbekistonning davlat chegarasi va hududi daxlsiz va bo‘linmasdir.'
    ]
  },
  4: {
    number: 4,
    title: '4-modda. Davlat tili va millatlar tillari hurmati',
    content: [
      'O‘zbekiston Respublikasining davlat tili o‘zbek tilidir.',
      'O‘zbekiston Respublikasi o‘z hududida istiqomat qiluvchi barcha millat va elatlarning tillari, urf-odatlari va an’analari hurmat qilinishini ta’minlaydi, ularning rivojlanishi uchun sharoit yaratadi.'
    ],
    dtmTip: 'Davlat tili — o‘zbek tili. Barcha millat va elatlarning tillari, urf-odatlari hurmat qilinishi ta’minlanadi.'
  },
  5: {
    number: 5,
    title: '5-modda. Davlat ramzlari',
    content: [
      'O‘zbekiston Respublikasi qonun bilan tasdiqlanadigan o‘z davlat ramzlari – bayrog‘i, gerbi va madhiyasiga ega.',
      'Davlat ramzlari davlat himoyasidadir.'
    ]
  },
  6: {
    number: 6,
    title: '6-modda. Poytaxt',
    content: [
      'O‘zbekiston Respublikasining poytaxti – Toshkent shahri.'
    ]
  },
  7: {
    number: 7,
    title: '7-modda. Xalq – davlat hokimiyatining birdan-bir manbai',
    content: [
      'Xalq davlat hokimiyatining birdan-bir manbaidir.',
      'O‘zbekiston Respublikasida davlat hokimiyati xalq manfaatlarini ko‘zlab va O‘zbekiston Respublikasi Konstitutsiyasi hamda uning asosida qabul qilingan qonunlar vakolat bergan organlar tomonidangina amalga oshiriladi.',
      'Konstitutsiyada nazarda tutilmagan tartibda davlat hokimiyati vakolatlarini o‘zlashtirish, hokimiyat organlari faoliyatini to‘xtatib qo‘yish yoki tugatish, hokimiyatning yangi va muvofiq bo‘lmagan tuzilmalarini tashkil etish Konstitutsiyaga xilof hisoblanadi va qonunga ko‘ra javobgarlikka sabab bo‘ladi.'
    ],
    dtmTip: 'Xalq davlat hokimiyatining birdan-bir manbaidir.'
  },
  8: {
    number: 8,
    title: '8-modda. O‘zbekiston xalqi tarkibi',
    content: [
      'O‘zbekiston xalqini millatidan qat’i nazar, O‘zbekiston Respublikasining fuqarolari tashkil etadi.'
    ]
  },
  9: {
    number: 9,
    title: '9-modda. Referendum va muhim masalalar',
    content: [
      'Jamiyat va davlat hayotining eng muhim masalalari xalq muhokamasiga taqdim etiladi, umumxalq ovoziga — referendumga qo‘yiladi.',
      'Referendumni o‘tkazish tartibi qonun bilan belgilanadi.'
    ],
    dtmTip: 'Eng muhim masalalar umumxalq ovoziga — referendumga qo‘yiladi.'
  },
  10: {
    number: 10,
    title: '10-modda. O‘zbekiston xalqi nomidan ish olib borish',
    content: [
      'O‘zbekiston xalqi nomidan faqat u saylagan O‘zbekiston Respublikasi Oliy Majlisi va O‘zbekiston Respublikasi Prezidenti ish olib borishi mumkin.',
      'Jamiyatning biron-bir qismi, siyosiy partiya, jamoat birlashmasi, ommaviy harakat yoki alohida shaxs O‘zbekiston xalqi nomidan ish olib borishga haqli emas.'
    ],
    dtmTip: 'Faqat Oliy Majlis va O‘zbekiston Respublikasi Prezidenti xalq nomidan ish olib borishi mumkin.'
  },
  11: {
    number: 11,
    title: '11-modda. Hokimiyatlar bo‘linishi prinsipi',
    content: [
      'O‘zbekiston Respublikasi davlat hokimiyatining tizimi – hokimiyatning qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo‘linishi prinsipiga asoslanadi.'
    ],
    dtmTip: 'Hokimiyatlar bo‘linishi: qonun chiqaruvchi, ijro etuvchi va sud hokimiyati.'
  },
  12: {
    number: 12,
    title: '12-modda. Siyosiy institutlar, mafkuralar va fikrlar xilma-xilligi',
    content: [
      'O‘zbekiston Respublikasida ijtimoiy hayot siyosiy institutlar, mafkuralar va fikrlarning xilma-xilligi asosida rivojlanadi.',
      'Hech qaysi mafkura davlat mafkurasi sifatida o‘rnatilishi mumkin emas.'
    ],
    dtmTip: 'Plyuralizm: Hech qaysi mafkura davlat mafkurasi sifatida o‘rnatilishi mumkin emas.'
  },
  13: {
    number: 13,
    title: '13-modda. Inson qadri va qonunlardagi noaniqliklarni inson foydasiga talqin etish',
    content: [
      'O‘zbekiston Respublikasida demokratiya umuminsoniy prinsiplarga asoslanadi, ularga ko‘ra inson, uning hayoti, erkinligi, sha’ni, qadr-qimmati va boshqa ajralmas huquqlari oliy qadriyat hisoblanadi.',
      'Inson bilan davlat organlarining o‘zaro munosabatlarida qonunchilikda yuzaga keladigan, bartaraf etib bo‘lmaydigan barcha qarama-qarshiliklar va noaniqliklar inson foydasiga talqin qilinadi.'
    ],
    dtmTip: 'Qonunchilikdagi noaniqliklar va ziddiyatlar inson foydasiga talqin qilinadi.'
  },
  14: {
    number: 14,
    title: '14-modda. Davlat faoliyatining asosiy prinsiplari',
    content: [
      'Davlat o‘z faoliyatini inson hamda jamiyat farovonligini ko‘zlab, qonuniylik, ijtimoiy adolat va birdamlik prinsiplari asosida amalga oshiradi.'
    ]
  },
  15: {
    number: 15,
    title: '15-modda. Konstitutsiya va qonunlarning ustunligi',
    content: [
      'O‘zbekiston Respublikasida O‘zbekiston Respublikasi Konstitutsiyasi va qonunlarining ustunligi so‘zsiz tan olinadi.',
      'O‘zbekiston Respublikasi Konstitutsiyasi mamlakatning butun hududida oliy yuridik kuchga ega, to‘g‘ridan-to‘g‘ri amal qiladi va yagona huquqiy makonning asosini tashkil etadi.',
      'O‘zbekiston Respublikasining xalqaro shartnomalari xalqaro huquqning umume’tirof etilgan prinsip va normalari bilan bir qatorda O‘zbekiston Respublikasi huquqiy tizimining tarkibiy qismidir.',
      'Agar O‘zbekiston Respublikasining xalqaro shartnomasida O‘zbekiston Respublikasining qonunida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.',
      'Davlat va uning organlari, fuqarolik jamiyati institutlari, tashkilotlar, mansabdor shaxslar, fuqarolar o‘z faoliyatini Konstitutsiya va qonunlarga muvofiq amalga oshiradilar.'
    ],
    dtmTip: 'Konstitutsiya oliy yuridik kuchga ega, to‘g‘ridan-to‘g‘ri amal qiladi; xalqaro shartnoma qoidalari milliy qonundan ustun turadi.'
  },
  16: {
    number: 16,
    title: '16-modda. Normativ-huquqiy hujjatlarning Konstitutsiyaga muvofiqligi',
    content: [
      'Ushbu Konstitutsiyaning birorta qoidasi O‘zbekiston Respublikasining huquq va manfaatlariga, ushbu Konstitutsiyaning birinchi bo‘limida nazarda tutilgan asosiy prinsip va qoidalarga zarar yetkazadigan tarzda talqin etilishi mumkin emas.',
      'Qonunlar va boshqa normativ-huquqiy hujjatlar O‘zbekiston Respublikasining Konstitutsiyasi asosida va uni ijro etish uchun qabul qilinadi. Birorta ham qonun yoki boshqa normativ-huquqiy hujjat Konstitutsiyaning prinsip va normalariga zid bo‘lishi mumkin emas.'
    ]
  },
  17: {
    number: 17,
    title: '17-modda. Tashqi siyosat prinsiplari',
    content: [
      'O‘zbekiston Respublikasi xalqaro munosabatlarning to‘la huquqli subyektidir.',
      'O‘zbekistonning tashqi siyosati davlatlarning suveren tengligi, kuch ishlatmaslik yoki kuch bilan tahdid qilmaslik, chegaralarning daxlsizligi, nizolarni tinch yo‘l bilan hal etish, boshqa davlatlarning ichki ishlariga aralashmaslik prinsiplariga hamda xalqaro huquqning umume’tirof etilgan boshqa prinsip va normalariga asoslanadi.',
      'O‘zbekiston davlatlarning va xalqaro tashkilotlarning ittifoqlariga, hamdo‘stliklariga kirishi hamda ulardan ajralib chiqishi mumkin.'
    ],
    dtmTip: 'Tashqi siyosat suveren tenglik, tinchlik, nizolarni tinch hal etish va ichki ishlarga aralashmaslikka asoslanadi.'
  },
  18: {
    number: 18,
    title: '18-modda. Tinchliksevar tashqi siyosat',
    content: [
      'O‘zbekiston Respublikasi davlatlar va xalqaro tashkilotlar bilan tinchliksevar tashqi siyosat olib boradi.',
      'O‘zbekiston Respublikasi barcha davlatlar bilan ikki tomonlama va ko‘p tomonlama hamkorlikni har tomonlama rivojlantirishga intiladi.'
    ]
  },
  19: {
    number: 19,
    title: '19-modda. Inson huquqlarining tug‘ma xarakteri va qonun oldida tenglik',
    content: [
      'O‘zbekiston Respublikasida insonning huquq va erkinliklari xalqaro huquqning umume’tirof etilgan normalariga binoan hamda ushbu Konstitutsiyaga muvofiq e’tirof etiladi va kafolatlanadi.',
      'Inson huquq va erkinliklari har kimga tug‘ilganidan boshlab tegishli bo‘ladi.',
      'O‘zbekiston Respublikasida barcha fuqarolar bir xil huquq va erkinliklarga ega bo‘lib, jinsi, irqi, millati, tili, dini, e’tiqodi, ijtimoiy kelib chiqishi, ijtimoiy mavqeyidan qat’i nazar, qonun oldida tengdirlar.',
      'Imtiyozlar faqat qonun bilan belgilanadi hamda ijtimoiy adolat prinsiplariga mos bo‘lishi shart.'
    ],
    dtmTip: 'Inson huquqlari har kimga tug‘ilganidan tegishli; imtiyozlar faqat qonun bilan belgilanadi.'
  },
  20: {
    number: 20,
    title: '20-modda. Huquq va erkinliklarning daxlsizligi va ularni cheklash asoslari',
    content: [
      'Fuqaroning Konstitutsiya va qonunlarda mustahkamlab qo‘yilgan huquq va erkinliklari daxlsizdir hamda ulardan sud qarorisiz mahrum etishga yoki ularni cheklab qo‘yishga hech kim haqli emas.',
      'Insonning huquq va erkinliklari faqat qonunga muvofiq hamda faqat konstitutsiyaviy tuzumni, aholining sog‘lig‘ini, ijtimoiy axloqni, boshqa shaxslarning huquq va erkinliklarini himoya qilish, jamoat xavfsizligini hamda jamoat tartibini ta’minlash maqsadida zarur bo‘lgan doirada cheklanishi mumkin.'
    ]
  },
  21: {
    number: 21,
    title: '21-modda. Boshqalarning huquqlariga putur yetkazmaslik majburiyati',
    content: [
      'Inson o‘z huquq va erkinliklarini amalga oshirishda boshqa shaxslarning, jamiyat hamda davlatning huquqlari, erkinliklari va qonuniy manfaatlariga putur yetkazmasligi shart.'
    ]
  },
  22: {
    number: 22,
    title: '22-modda. Yagona fuqarolik va fuqarolarning himoyasi',
    content: [
      'O‘zbekiston Respublikasining butun hududida yagona fuqarolik o‘rnatiladi. O‘zbekiston Respublikasining fuqaroligi, unga qanday asoslarda ega bo‘linganidan qat’i nazar, hamma uchun tengdir.',
      'Qoraqalpog‘iston Respublikasining fuqarosi ayni vaqtda O‘zbekiston Respublikasining fuqarosi hisoblanadi.',
      'Fuqarolikka ega bo‘lish va uni yo‘qotish asoslari hamda tartibi qonun bilan belgilanadi.',
      'O‘zbekiston Respublikasining fuqarosi O‘zbekistondan tashqariga chiqarib yuborilishi yoki boshqa davlatga topshirilishi mumkin emas.',
      'Davlat chet elda yashayotgan vatandoshlar bilan aloqalarni saqlab qolish hamda rivojlantirish to‘g‘risida g‘amxo‘rlik qiladi.'
    ],
    dtmTip: 'O‘zbekiston fuqarosi O‘zbekistondan tashqariga chiqarib yuborilishi yoki topshirilishi mumkin emas.'
  },
  23: {
    number: 23,
    title: '23-modda. Fuqarolikka doir kafolatlar',
    content: [
      'O‘zbekiston Respublikasi o‘z hududida ham, uning tashqarisida ham o‘z fuqarolarini himoya qilish va ularga homiylik ko‘rsatishni kafolatlaydi.',
      'O‘zbekiston Respublikasi fuqarosi fuqarolikdan mahrum qilinishi mumkin emas.'
    ],
    dtmTip: 'O‘zbekiston Respublikasi fuqarosi fuqarolikdan mahrum qilinishi mumkin emas.'
  },
  24: {
    number: 24,
    title: '24-modda. Chet el fuqarolari va fuqaroligi bo‘lmagan shaxslar huquqlari',
    content: [
      'Chet el fuqarolarining va fuqaroligi bo‘lmagan shaxslarning huquq va erkinliklari xalqaro huquq normalariga hamda qonunga muvofiq ta’minlanadi.'
    ]
  },
  25: {
    number: 25,
    title: '25-modda. Yashash huquqi va o‘lim jazosini taqiqlash',
    content: [
      'Yashash huquqi har bir insonning ajralmas huquqidir va u qonun bilan muhofaza qilinadi. Inson hayotiga suiqasd qilish eng og‘ir jinoyatdir.',
      'O‘zbekiston Respublikasida o‘lim jazosi taqiqlanadi.'
    ],
    dtmTip: 'O‘zbekiston Respublikasida o‘lim jazosi qat’iyan taqiqlanadi.'
  },
  26: {
    number: 26,
    title: '26-modda. Sha’n va qadr-qimmat daxlsizligi, qiynoqlarni taqiqlash',
    content: [
      'Insonning sha’ni va qadr-qimmati daxlsizdir. Hech narsa ularni kamsitish uchun asos bo‘lishi mumkin emas.',
      'Hech kim qiynoqqa solinishi, zo‘ravonlikka, boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsituvchi muomalaga yoxud jazoga duchor etilishi mumkin emas.',
      'Hech kimda uning roziligisiz tibbiy, ilmiy va boshqa tajribalar o‘tkazilishi mumkin emas.'
    ],
    dtmTip: 'Inson sha’ni va qadr-qimmati daxlsizdir; qiynoqlar va roziliksiz tibbiy tajribalar taqiqlanadi.'
  },
  27: {
    number: 27,
    title: '27-modda. Shaxsiy erkinlik, daxlsizlik, Habeas Corpus va Miranda qoidalari',
    content: [
      'Har kim erkinlik va shaxsiy daxlsizlik huquqiga ega.',
      'Hech kim qonunga asoslanmagan holda hibsga olinishi, ushlab turilishi, qamoqqa olinishi, qamoqda saqlanishi yoki uning erkinligi boshqacha tarzda cheklanishi mumkin emas.',
      'Hibsga olishga, qamoqqa olishga va qamoqda saqlashga faqat sudning qaroriga ko‘ra yo‘l qo‘yiladi. Shaxs sud qarorisiz qirq sakkiz soatdan ortiq muddat ushlab turilishi mumkin emas.',
      'Shaxsni ushlash chog‘ida unga tushunarli tilda uning huquqlari va ushlab turilishi asoslari tushuntirilishi shart.'
    ],
    dtmTip: 'Habeas Corpus (sud qarorisiz 48 soatdan ortiq ushlab turilishi mumkin emas) va Miranda qoidasi.'
  },
  28: {
    number: 28,
    title: '28-modda. Aybsizlik prezumpsiyasi va sukut saqlash huquqi',
    content: [
      'Jinoyat sodir etganlikda ayblanayotgan shaxs uning aybi qonunda nazarda tutilgan tartibda oshkora sud muhokamasi yo‘li bilan isbotlanmaguncha va sudning qonuniy kuchga kirgan hukmi bilan aniqlanmaguncha aybsiz hisoblanadi.',
      'Ayblanuvchiga o‘zini himoya qilish uchun barcha imkoniyatlar ta’minlanadi.',
      'Aybdorlikka oid barcha shubhalar, agar ularni bartaraf etish imkoniyatlari tugagan bo‘lsa, gumon qilinuvchining, ayblanuvchining, sudlanuvchining yoki mahkumning foydasiga hal qilinishi kerak.',
      'Gumon qilinuvchi, ayblanuvchi yoki sudlanuvchi o‘zining aybsizligini isbotlab berishi shart emas va istalgan vaqtda sukut saqlash huquqidan foydalanishi mumkin.',
      'Hech kim o‘ziga va yaqin qarindoshlariga qarshi guvohlik berishga majbur emas.',
      'Qonunni buzgan holda olingan dalillardan odil sudlovni amalga oshirishda foydalanishga yo‘l qo‘yilmaydi.',
      'Qonunga xilof ravishda ushlab turilgan, qamoqqa olingan yoki hukm qilingan shaxs davlat hisobidan yetkazilgan zararning o‘rni qoplanishi huquqiga ega.',
      'Hech kim ayni bir jinoyat uchun takroran javobgarlikka tortilishi mumkin emas.'
    ],
    dtmTip: 'Aybsizlik prezumpsiyasi: shubhalar ayblanuvchi foydasiga talqin qilinadi; sukut saqlash huquqi.'
  },
  29: {
    number: 29,
    title: '29-modda. Malakali yuridik yordam olish huquqi',
    content: [
      'Har kimga malakali yuridik yordam olish huquqi kafolatlanadi. Qonunda nazarda tutilgan hollarda yuridik yordam davlat hisobidan ko‘rsatiladi.',
      'Har bir shaxs jinoyat protsessining har qanday bosqichida o‘z tanloviga ko‘ra advokat yordamidan foydalanish huquqiga ega.'
    ],
    dtmTip: 'Advokat yordamidan jinoyat protsessining har qanday bosqichida foydalanish mumkin.'
  },
  30: {
    number: 30,
    title: '30-modda. Erkin harakatlanish va yashash joyini tanlash huquqi',
    content: [
      'Qonuniy asoslarda O‘zbekiston Respublikasi hududida bo‘lib turgan har kim respublika hududi bo‘ylab erkin harakatlanish, turar va yashash joyini erkin tanlash huquqiga ega, bundan qonunda belgilangan cheklovlar mustasno.',
      'Har kim mamlakatdan erkin chiqish huquqiga ega. O‘zbekiston Respublikasi fuqarolari O‘zbekistonga to‘sqinliksiz qaytish huquqiga ega.'
    ]
  },
  31: {
    number: 31,
    title: '31-modda. Shaxsiy hayot daxlsizligi va shaxsga doir ma’lumotlar himoyasi',
    content: [
      'Har kim shaxsiy hayotining daxlsizligi, shaxsiy va oilaviy sirga ega bo‘lish, o‘z sha’ni va qadr-qimmatini himoya qilish huquqiga ega.',
      'Har kim o‘z shaxsiga doir ma’lumotlarning himoya qilinishi huquqiga, shuningdek noto‘g‘ri ma’lumotlarning tuzatilishini, o‘zi to‘g‘risida qonunga xilof ravishda to‘plangan yoki huquqiy asoslarga ega bo‘lmay qolgan ma’lumotlarning yo‘q qilinishini talab qilish huquqiga ega.',
      'Har kim yozishmalari, telefon orqali so‘zlashuvlari, pochta, elektron va boshqa xabarlari sir saqlanishi huquqiga ega. Ushbu huquqning cheklanishiga faqat qonunga muvofiq va sudning qaroriga asosan yo‘l qo‘yiladi.'
    ]
  },
  32: {
    number: 32,
    title: '32-modda. Uy-joy daxlsizligi',
    content: [
      'Uy-joy daxlsizdir.',
      'Hech kim uy-joyga unda yashovchi shaxslarning xohishiga qarshi kirishi mumkin emas. Uy-joyga kirishga, shuningdek unda ko‘zdan kechirish va tintuv o‘tkazishga faqat qonunda belgilangan hollarda va tartibda, sudning qaroriga asosan yo‘l qo‘yiladi.',
      'Uy-joyda ko‘zdan kechirish va tintuv o‘tkazishga kechiktirib bo‘lmaydigan hollarda sud qarorisiz ham yo‘l qo‘yilishi mumkin, biroq keyinchalik sud bunday harakatlarning qonuniyligi to‘g‘risida qaror qabul qilishi shart.'
    ],
    dtmTip: 'Uy-joyga kirish, ko‘zdan kechirish va tintuv o‘tkazishga faqat sud qaroriga asosan yo‘l qo‘yiladi.'
  },
  33: {
    number: 33,
    title: '33-modda. Fikr, so‘z va axborot erkinligi',
    content: [
      'Har kim fikrlash, so‘z va e’tiqod erkinligi huquqiga ega. Har kim istalgan axborotni izlash, olish va tarqatish huquqiga ega.',
      'Davlat Internet jahon axborot tarmog‘idan foydalanishni ta’minlash uchun shart-sharoitlar yaratadi.',
      'Axborotni izlash, olish va tarqatishga bo‘lgan huquqni cheklashga faqat qonunga muvofiq hamda faqat konstitutsiyaviy tuzumni, aholining sog‘lig‘ini, ijtimoiy axloqni, boshqa shaxslarning huquq va erkinliklarini himoya qilish, jamoat xavfsizligini hamda jamoat tartibini ta’minlash, shuningdek davlat sirlari yoki qonun bilan qo‘riqlanadigan boshqa sir oshkor etilishining oldini olish maqsadida zarur bo‘lgan doirada yo‘l qo‘yiladi.'
    ]
  },
  34: {
    number: 34,
    title: '34-modda. Hujjatlar va qarorlar bilan tanishish huquqi',
    content: [
      'Davlat organlari va tashkilotlari, fuqarolarning o‘zini o‘zi boshqarish organlari, ularning mansabdor shaxslari har kimga o‘z huquqlari va qonuniy manfaatlariga daxldor bo‘lgan hujjatlar, qarorlar va boshqa materiallar bilan tanishish imkoniyatini ta’minlashi shart.'
    ]
  },
  35: {
    number: 35,
    title: '35-modda. Vijdon va din erkinligi',
    content: [
      'Hamma uchun vijdon erkinligi kafolatlanadi. Har kim xohlagan dinga e’tiqod qilish yoki hech qaysi dinga e’tiqod qilmaslik huquqiga ega.',
      'Diniy qarashlarni majburan singdirishga yo‘l qo‘yilmaydi.'
    ],
    dtmTip: 'Vijdon erkinligi: xohlagan dinga e’tiqod qilish yoki hech qaysi dinga e’tiqod qilmaslik huquqi.'
  },
  36: {
    number: 36,
    title: '36-modda. Jamiyat va davlat ishlarini boshqarishda ishtirok etish huquqi',
    content: [
      'O‘zbekiston Respublikasi fuqarolari jamiyat va davlat ishlarini boshqarishda bevosita hamda o‘z vakillari orqali ishtirok etish huquqiga egadirlar.',
      'Bunday ishtirok etish o‘zini o‘zi boshqarish, referendumlar o‘tkazish va davlat organlarini demokratik tarzda shakllantirish, shuningdek davlat organlarining faoliyati ustidan jamoatchilik nazorati vositasida amalga oshiriladi.'
    ]
  },
  37: {
    number: 37,
    title: '37-modda. Davlat xizmatiga kirishda tenglik',
    content: [
      'O‘zbekiston Respublikasi fuqarolari davlat xizmatiga kirishda teng huquqqa egadirlar.',
      'Davlat xizmatini o‘tash bilan bog‘liq cheklovlar qonun bilan belgilanadi.'
    ]
  },
  38: {
    number: 38,
    title: '38-modda. Mitinglar, yig‘ilishlar va namoyishlar erkinligi',
    content: [
      'Fuqarolar o‘z ijtimoiy faolliklarini O‘zbekiston Respublikasi qonunlariga muvofiq mitinglar, yig‘ilishlar va namoyishlar shaklida amalga oshirish huquqiga ega.',
      'Hokimiyat organlari faqat xavfsizlik nuqtai nazaridan bu tadbirlarni to‘xtatish yoki taqiqlash huquqiga ega.'
    ]
  },
  39: {
    number: 39,
    title: '39-modda. Jamoat birlashmalariga birlashish huquqi',
    content: [
      'O‘zbekiston Respublikasi fuqarolari kasaba uyushmalariga, siyosiy partiyalarga va boshqa jamoat birlashmalariga birlashish, ommaviy harakatlarda ishtirok etish huquqiga egadirlar.',
      'Kasaba uyushmalariga, siyosiy partiyalarga, boshqa jamoat birlashmalariga a’zo bo‘lgan yoki a’zo bo‘lmagan shaxslarning huquqlari, erkinliklari va qonuniy manfaatlarini kamsitishga yo‘l qo‘yilmaydi.'
    ]
  },
  40: {
    number: 40,
    title: '40-modda. Murojaat qilish huquqi',
    content: [
      'Har kim davlat organlariga va tashkilotlariga, fuqarolarning o‘zini o‘zi boshqarish organlariga, ularning mansabdor shaxslariga yakka tartibda yoki jamoa bo‘lib murojaat qilish huquqiga ega.',
      'Murojaatlar qonunda belgilangan tartibda va muddatlarda ko‘rib chiqilishi shart.'
    ],
    dtmTip: 'Yakka tartibda yoki jamoa bo‘lib murojaat qilish (ariza, taklif, shikoyat) huquqi.'
  }
};
