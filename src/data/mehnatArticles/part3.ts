import { MehnatArticleItem } from './part1';

export const MEHNAT_PART_3: Record<number, MehnatArticleItem> = {
  181: {
    number: 181,
    title: '181-modda. Ish vaqti tushunchasi',
    content: [
      'Ish vaqti – xodim ichki mehnat tartibi qoidalariga hamda mehnat shartnomasi shartlariga muvofiq o‘z mehnat vazifalarini bajarishi kerak bo‘lgan davrdir.',
      'Shuningdek qonunchilikka muvofiq ish vaqtiga kiritiladigan boshqa davrlar ham (masalan, ovqatlantirish tanaffuslari, isinish tanaffuslari) ish vaqtiga tenglashtiriladi.'
    ]
  },
  182: {
    number: 182,
    title: '182-modda. Normal ish vaqti davomiyligi',
    content: [
      'Xodim uchun ish vaqtining normal davomiyligi haftasiga qirq soatdan oshishi mumkin emas.',
      'Besh kunlik yoki olti kunlik ish haftasida kunlik ish vaqti qirq soatlik me’yordan oshmasligi shart.'
    ],
    dtmTip: 'Normal ish vaqti chegarasi: haftasiga ko‘pi bilan 40 soat.'
  },
  183: {
    number: 183,
    title: '183-modda. Qisqartirilgan ish vaqti davomiyligi',
    content: [
      'Xodimlarning ayrim toifalari uchun mehnatga haq to‘lash kamaytirilmagan holda qisqartirilgan ish vaqti davomiyligi belgilanadi:',
      '1) o‘n olti yoshdan o‘n sakkiz yoshgacha bo‘lgan xodimlarga — haftasiga o‘ttiz olti soatdan oshmaydigan;',
      '2) o‘n besh yoshdan o‘n olti yoshgacha bo‘lgan shaxslarga — haftasiga yigirma to‘rt soatdan oshmaydigan;',
      '3) I va II guruh nogironligi bo‘lgan xodimlarga — haftasiga o‘ttiz olti soatdan oshmaydigan;',
      '4) noqulay mehnat sharoitlaridagi ishlarda band bo‘lgan xodimlarga — haftasiga o‘ttiz olti soatdan oshmaydigan;',
      '5) uch yoshga to‘lmagan bolasi bor byudjet sohasi xodimlariga — haftasiga o‘ttiz besh soatdan oshmaydigan.'
    ],
    dtmTip: 'Qisqartirilgan ish vaqti: 16-18 yosh: 36 soat; 15-16 yosh: 24 soat; I-II guruh nogironlar: 36 soat; zararli ishlar: 36 soat; 3 yoshgacha bolali byudjetdagilar: 35 soat.'
  },
  184: {
    number: 184,
    title: '184-modda. To‘liqsiz ish vaqti',
    content: [
      'Xodim va ish beruvchi o‘rtasidagi kelishuvga ko‘ra ishga qabul qilish chog‘ida ham, keyinchalik ham to‘liqsiz ish kuni yoki to‘liqsiz ish haftasi belgilanishi mumkin.',
      'To‘liqsiz ish vaqtida mehnatga haq to‘lash ishlangan vaqtga yoki ishlab chiqarilgan mahsulotga mutanosib ravishda amalga oshiriladi.',
      'To‘liqsiz ish vaqti sharoitida ishlash xodimning har yilgi asosiy mehnat ta’tili davomiyligini qisqartirishga yoki mehnat stajini cheklashga sabab bo‘lmaydi.'
    ],
    dtmTip: 'To‘liqsiz ish vaqtida ishlash stajga to‘liq o‘tadi va ta’til muddatini kamaytirmaydi.'
  },
  185: {
    number: 185,
    title: '185-modda. To‘liqsiz ish vaqtini belgilash majburiyati',
    content: [
      'Ish beruvchi homilador ayolning, o‘n to‘rt yoshga to‘lmagan bolasi (o‘n olti yoshga to‘lmagan nogironligi bo‘lgan bolasi) bor shaxsning, shuningdek oilaning betob a’zosini parvarishlayotgan shaxsning arizasiga ko‘ra to‘liqsiz ish vaqti belgilashga majburdir.'
    ]
  },
  186: {
    number: 186,
    title: '186-modda. Ish haftasining turlari va ish vaqti rejimi',
    content: [
      'Xodimlar uchun besh kunlik ish haftasi (ikki dam olish kuni bilan) yoki olti kunlik ish haftasi (bir dam olish kuni bilan) belgilanadi.'
    ]
  },
  187: {
    number: 187,
    title: '187-modda. Bayram (ishlanmaydigan) kunlari arafasidagi ish vaqti',
    content: [
      'Ishlanmaydigan bayram kunlari arafasida kundalik ish (smena) davomiyligi barcha xodimlar uchun kamida bir soatga qisqartiriladi.',
      'Uzluksiz ishlaydigan tashkilotlarda va ayrim ishlarda ish vaqtini qisqartirish imkoni bo‘lmasa, ortiqcha ishlangan bir soat ish vaqtidan tashqari ish deb hisoblanadi va kompensatsiya qilinadi.'
    ],
    dtmTip: 'Bayram arafasida ish vaqti barcha xodimlar uchun kamida 1 soatga qisqartiriladi.'
  },
  188: {
    number: 188,
    title: '188-modda. Tungi vaqtdagi ish',
    content: [
      'Soat 22:00 dan soat 06:00 gacha bo‘lgan vaqt tungi vaqt hisoblanadi.',
      'Agar xodim uchun belgilangan ish vaqtining kamida yarmi tungi vaqtga to‘g‘ri kelsa, tungi vaqtdagi ishning (smenaning) davomiyligi bir soatga qisqartiriladi.'
    ],
    dtmTip: 'Tungi vaqt: soat 22:00 dan 06:00 gacha.'
  },
  189: {
    number: 189,
    title: '189-modda. Tungi ishlarga jalb qilishdagi taqiqlar va cheklovlar',
    content: [
      'O‘n sakkiz yoshga to‘lmagan xodimlarni, shuningdek homilador ayollarni tungi ishlarga jalb qilish taqiqlanadi.',
      'Nogironligi bo‘lgan shaxslar, uch yoshgacha bolasi bor ayollar faqat ularning yozma roziligi bilan va tibbiy xulosada taqiq bo‘lmagandagina tungi ishlarga jalb etilishi mumkin.'
    ],
    dtmTip: '18 yoshga to‘lmaganlar va homilador ayollarni tungi ishlarga jalb qilish qat’iyan taqiqlanadi.'
  },
  190: {
    number: 190,
    title: '190-modda. Ish vaqtidan tashqari ish chegaralari',
    content: [
      'Ish vaqtidan tashqari ish deganda xodim tomonidan ish beruvchining tashabbusi bilan uning uchun belgilangan kundalik ish (smena) davomiyligidan ortiqcha bajariladigan ish tushuniladi.',
      'Ish vaqtidan tashqari ishning davomiyligi xodim uchun surunkasiga ikki kun davomida to‘rt soatdan va yiliga bir yuz yigirma soatdan oshmasligi kerak.'
    ],
    dtmTip: 'Ish vaqtidan tashqari ish: ketma-ket 2 kunda 4 soatdan va yiliga 120 soatdan oshishi mumkin emas.'
  },
  191: {
    number: 191,
    title: '191-modda. Ish vaqtidan tashqari ishlarga jalb etishning istisno hollari',
    content: [
      'Tabiiy ofat, ishlab chiqarish avariyasi yoki mudofaa ehtiyojlarini bartaraf etish hollarida xodim ish vaqtidan tashqari ishlarga uning roziligisiz jalb qilinishi mumkin.'
    ]
  },
  192: {
    number: 192,
    title: '192-modda. Ish vaqtidan tashqari ishlarga jalb qilish taqiqlanadigan shaxslar',
    content: [
      'O‘n sakkiz yoshga to‘lmagan xodimlarni va homilador ayollarni ish vaqtidan tashqari ishlarga jalb etish taqiqlanadi.'
    ]
  },
  193: {
    number: 193,
    title: '193-modda. Smenali ish',
    content: [
      'Ishlab chiqarish jarayonining davomiyligi kundalik ish normasidan ortiq bo‘lganda smenali ish joriy etiladi. Xodimni ketma-ket ikki smena davomida ishga jalb qilish taqiqlanadi.'
    ],
    dtmTip: 'Xodimni ketma-ket 2 smena davomida ishlatish qat’iyan taqiqlanadi.'
  },
  194: {
    number: 194,
    title: '194-modda. Moslashuvchan ish vaqti rejimi',
    content: [
      'Taraflarning kelishuviga binoan xodim uchun ish kuni boshlanishi, tugashi va tanaffus vaqti moslashuvchan (erkin) tartibda belgilanishi mumkin.'
    ]
  },
  195: {
    number: 195,
    title: '195-modda. Ish kunini qismlarga bo‘lish',
    content: [
      'Alohida xususiyatga ega ishlarda (shahar jamoat transporti, aloqa) ish kuni ikki soatdan ko‘p bo‘lgan tanaffus bilan ikki yoki undan ortiq qismga bo‘linishi mumkin.'
    ]
  },
  196: {
    number: 196,
    title: '196-modda. Ish vaqtining jamlangan hisobi',
    content: [
      'Uzluksiz faoliyat yuritadigan korxonalarda ish vaqtining oylik, choraklik yoki yillik jamlangan hisobi joriy etiladi. Bunda hisob davridagi soatlar normadan oshmasligi kerak.'
    ]
  },
  197: {
    number: 197,
    title: '197-modda. Navbatchilik va uning davomiyligi',
    content: [
      'Ish vaqtidan tashqari navbatchilikka xodim faqat o‘z yozma roziligi bilan jalb etilishi mumkin va unga keyinchalik teng vaqtli dam olish beriladi.'
    ]
  },
  198: {
    number: 198,
    title: '198-modda. Xizmat safari davridagi ish vaqti',
    content: [
      'Xizmat safariga yuborilgan xodimga u borgan korxonaning ish vaqti va dam olish vaqti rejimi tatbiq etiladi.'
    ]
  },
  199: {
    number: 199,
    title: '199-modda. Ish vaqtining aniq hisobini yuritish',
    content: [
      'Ish beruvchi har bir xodim tomonidan haqiqatda ishlangan barcha ish vaqtining (shu jumladan qo‘shimcha ishlangan soatlarning) aniq hisobini yuritishi shart.'
    ]
  },
  200: {
    number: 200,
    title: '200-modda. Masofaviy ishda ish vaqti',
    content: [
      'Masofadan turib ishlovchi xodim o‘z ish vaqti va dam olish vaqti tartibini mehnat shartnomasida boshqacha qoida nazarda tutilmagan bo‘lsa, o‘z xohishiga ko‘ra belgilaydi.'
    ]
  },
  201: {
    number: 201,
    title: '201-modda. Dam olish vaqti tushunchasi va turlari',
    content: [
      'Dam olish vaqti – xodim mehnat vazifalarini bajarishdan xoli bo‘lgan va undan o‘z xohishiga ko‘ra foydalanishi mumkin bo‘lgan vaqtdir.',
      'Dam olish vaqtining turlari: ish kuni (smena) davomidagi tanaffuslar; kundalik (smenalar oralig‘idagi) dam olish; dam olish kunlari (har haftalik dam olish); ishlanmaydigan bayram kunlari; har yilgi mehnat ta’tillari.'
    ]
  },
  202: {
    number: 202,
    title: '202-modda. Dam olish va ovqatlanish uchun tanaffus',
    content: [
      'Ish kuni davomida xodimga davomiyligi kamida o‘ttiz daqiqa va ko‘pi bilan ikki soat bo‘lgan dam olish va ovqatlanish uchun tanaffus beriladi. Bu tanaffus ish vaqtiga kiritilmaydi.'
    ],
    dtmTip: 'Ovqatlanish va dam olish tanaffusi: kamida 30 daqiqa, ko‘pi bilan 2 soat (ish vaqtiga kirmaydi).'
  },
  203: {
    number: 203,
    title: '203-modda. Isinish va dam olish uchun maxsus tanaffuslar',
    content: [
      'Yilning sovuq davrida ochiq havoda yoki isitilmaydigan xonalarda ishlovchilarga, yuk ortish-tushirish ishlaridagi xodimlarga isinish uchun maxsus tanaffuslar beriladi va bu ish vaqtiga kiritiladi.'
    ]
  },
  204: {
    number: 204,
    title: '204-modda. Bolani ovqatlantirish uchun tanaffuslar',
    content: [
      'Ikki yoshga to‘lmagan bolasi bor ayollarga har uch soatda kamida o‘ttiz daqiqadan (ikki bolasi bo‘lsa bir soatdan) bolani ovqatlantirish uchun tanaffuslar beriladi va ular ish vaqtiga kiritilib, o‘rtacha ish haqi to‘lanadi.'
    ],
    dtmTip: '2 yoshgacha bolali onalarga har 3 soatda kamida 30 daqiqalik tanaffus beriladi (ish vaqtiga kiradi va puli to‘lanadi).'
  },
  205: {
    number: 205,
    title: '205-modda. Ish joyini tark etish huquqi',
    content: [
      'Xodim ovqatlanish va dam olish tanaffusi vaqtida ish joyidan chiqib ketish va undan o‘z xohishiga ko‘ra foydalanish huquqiga ega.'
    ]
  },
  206: {
    number: 206,
    title: '206-modda. Kundalik (smenalar oralig‘idagi) dam olish davomiyligi',
    content: [
      'Kundalik dam olish davomiyligi (ish tugashi bilan keyingi kuni ish boshlanishi oralig‘i) tanaffus bilan birga kamida o‘n ikki soatdan kam bo‘lishi mumkin emas.'
    ],
    dtmTip: 'Kundalik dam olish: kamida 12 soat.'
  },
  207: {
    number: 207,
    title: '207-modda. Har haftalik uzluksiz dam olish',
    content: [
      'Barcha xodimlarga har haftalik dam olish kunlari beriladi. Har haftalik uzluksiz dam olishning davomiyligi qirq ikki soatdan kam bo‘lishi mumkin emas.'
    ],
    dtmTip: 'Haftalik uzluksiz dam olish davomiyligi: kamida 42 soat.'
  },
  208: {
    number: 208,
    title: '208-modda. Ishlanmaydigan bayram kunlari',
    content: [
      'O‘zbekiston Respublikasida quyidagi kunlar ishlanmaydigan bayram kunlaridir:',
      '1-yanvar – Yangi yil;',
      '8-mart – Xotin-qizlar kuni;',
      '21-mart – Navro‘z bayrami;',
      '9-may – Xotira va qadrlash kuni;',
      '1-sentyabr – Mustaqillik kuni;',
      '1-oktyabr – O‘qituvchi va murabbiylar kuni;',
      '8-dekabr – O‘zbekiston Respublikasi Konstitutsiyasi kuni;',
      'Ro‘za hayit (Iyd al-Fitr) bayramining birinchi kuni;',
      'Qurbon hayit (Iyd al-Adha) bayramining birinchi kuni.'
    ],
    dtmTip: 'O‘zbekistonda 9 ta rasmiy ishlanmaydigan bayram kuni bor.'
  },
  209: {
    number: 209,
    title: '209-modda. Dam olish kuni bayram kuniga to‘g‘ri kelganda ko‘chirilishi',
    content: [
      'Yangi Mehnat kodeksiga binoan, agar dam olish kuni ishlanmaydigan bayram kuniga to‘g‘ri kelsa, dam olish kuni bayramdan keyingi ish kuniga ko‘chiriladi.'
    ],
    dtmTip: 'Yangi qoida: dam olish kuni bayramga to‘g‘ri kelsa, dam olish kuni bayramdan keyingi ish kuniga ko‘chiriladi!'
  },
  210: {
    number: 210,
    title: '210-modda. Dam olish va bayram kunlaridagi ishlarni taqiqlash',
    content: [
      'Dam olish va bayram kunlarida xodimlarni ishga jalb etish taqiqlanadi. Istisno hollarda faqat xodimning yozma roziligi bilan yo‘l qo‘yiladi.'
    ]
  },
  211: {
    number: 211,
    title: '211-modda. Dam olish kunlaridagi ish uchun kompensatsiya',
    content: [
      'Dam olish yoki bayram kunidagi ish uchun kamida ikki hissa miqdorida haq to‘lanadi yoki xodimning xohishiga ko‘ra boshqa dam olish kuni (otgul) beriladi.'
    ],
    dtmTip: 'Dam olish kunida ishlaganlik uchun kamida 2 baravar haq to‘lanadi yoki boshqa dam olish kuni beriladi.'
  },
  212: {
    number: 212,
    title: '212-modda. Diniy bayramlarda dam olish kunlarini ko‘chirish',
    content: [
      'Hukumat qarori bilan bayram kunlarini uzaytirish maqsadida ayrim dam olish kunlari boshqa ish kunlariga ko‘chirilishi mumkin.'
    ]
  },
  213: {
    number: 213,
    title: '213-modda. Ta’tillar tushunchasi va turlari',
    content: [
      'Ta’tillar – har yilgi asosiy ta’tillar, har yilgi qo‘shimcha ta’tillar, ijtimoiy ta’tillar va ish haqi saqlanmaydigan ta’tillarga bo‘linadi.'
    ]
  },
  214: {
    number: 214,
    title: '214-modda. Ta’tillar davrida ish joyi va maoshning saqlanishi',
    content: [
      'Har yilgi ta’tillar berilganda xodimning ish joyi (lavozimi) va o‘rtacha ish haqi saqlanadi.'
    ]
  },
  215: {
    number: 215,
    title: '215-modda. Ta’til davomiyligini kalendar kunlarda hisoblash',
    content: [
      'Barcha mehnat ta’tillari kalendar kunlarda hisoblanadi. Ta’til davriga to‘g‘ri kelgan ishlanmaydigan bayram kunlari ta’til muddatini belgilashda hisobga olinmaydi va unga haq to‘lanmaydi.'
    ],
    dtmTip: 'Ta’tillar kalendar kunlarda hisoblanadi; ta’tilga to‘g‘ri kelgan bayram kunlari ta’til kunlari soniga kirmaydi.'
  },
  216: {
    number: 216,
    title: '216-modda. Har yilgi asosiy ta’tillar',
    content: [
      'Har yilgi asosiy ta’til har bir xodimga o‘z mehnat vazifalarini uzluksiz bajarganligi uchun beriladi.'
    ]
  },
  217: {
    number: 217,
    title: '217-modda. Har yilgi asosiy eng kam mehnat ta’tili davomiyligi',
    content: [
      'Har yilgi asosiy eng kam mehnat ta’tilining davomiyligi yigirma bir kalendar kundan kam bo‘lishi mumkin emas.',
      'Eslatma: Avvalgi eski Mehnat kodeksida eng kam ta’til 15 ish kuni edi, yangi tahrirdagi Kodeksda esa 21 kalendar kun etib belgilandi.'
    ],
    dtmTip: 'Yangi Mehnat kodeksida eng kam mehnat ta’tili — 21 kalendar kun (eski kodeksda 15 ish kuni edi).'
  },
  218: {
    number: 218,
    title: '218-modda. Har yilgi asosiy uzaytirilgan mehnat ta’tillari',
    content: [
      'Quyidagi xodimlarga har yilgi uzaytirilgan asosiy ta’tillar beriladi:',
      '1) o‘n sakkiz yoshga to‘lmagan shaxslarga — o‘ttiz kalendar kun;',
      '2) I va II guruh nogironligi bo‘lgan xodimlarga — o‘ttiz kalendar kun;',
      '3) pedagogik xodimlarga — ellik olti kalendar kungacha;',
      '4) davlat fuqarolik xizmatchilariga — yigirma yetti kalendar kun.'
    ],
    dtmTip: 'Uzaytirilgan ta’tillar: 18 yoshgacha xodimlarga — 30 kun; I-II guruh nogironlarga — 30 kun; o‘qituvchilarga — 56 kungacha.'
  },
  219: {
    number: 219,
    title: '219-modda. Mehnat staji uchun beriladigan qo‘shimcha ta’tillar',
    content: [
      'Xodimga bitta tashkilotda yoki sohada ishlagan har besh yillik staji uchun davomiyligi ikki kalendar kun bo‘lgan, biroq jami sakkiz kalendar kundan oshmaydigan qo‘shimcha ta’til beriladi.'
    ],
    dtmTip: 'Staj uchun qo‘shimcha ta’til: har 5 yilga 2 kalendar kun, lekin eng ko‘pi bilan 8 kundan oshmaydi.'
  },
  220: {
    number: 220,
    title: '220-modda. Noqulay mehnat sharoitlaridagi ish uchun qo‘shimcha ta’til',
    content: [
      'Zararli va og‘ir mehnat sharoitlarida ishlovchilarga kamida yetti kalendar kunlik qo‘shimcha ta’til beriladi.'
    ]
  },
  221: {
    number: 221,
    title: '221-modda. Og‘ir tabiiy-iqlimiy sharoitlar uchun qo‘shimcha ta’til',
    content: [
      'Cho‘l va suvsiz yerlarda, baland tog‘li hududlarda ishlovchilarga qo‘shimcha ta’tillar kafolatlanadi.'
    ]
  },
  222: {
    number: 222,
    title: '222-modda. Qo‘shimcha ta’tillarni qo‘shish tartibi',
    content: [
      'Qo‘shimcha ta’tillar har yilgi asosiy ta’tilga qo‘shib hisoblanadi.'
    ]
  },
  223: {
    number: 223,
    title: '223-modda. Har yilgi ta’tildan foydalanish huquqini beruvchi ish staji',
    content: [
      'Ta’til olish huquqini beruvchi stajga haqiqatda ishlangan vaqt, xodim ishlamay ish joyi saqlangan vaqt (kasallik, dam olish) kiradi. Uzrsiz ishga kelmagan kunlar kirmaydi.'
    ]
  },
  224: {
    number: 224,
    title: '224-modda. Birinchi ish yilida ta’tildan foydalanish huquqining vujudga kelishi',
    content: [
      'Birinchi ish yilida har yilgi mehnat ta’tilidan foydalanish huquqi xodimda ushbu tashkilotda uzluksiz olti oy ishlaganidan keyin vujudga keladi.',
      'Olti oy to‘lmasdan oldin quyidagilar arizasiga ko‘ra ta’til berilishi shart: ayollarga tug‘ruq ta’tilidan oldin yoki keyin; 18 yoshga to‘lmaganlarga; muddatli harbiy xizmatdan bo‘shaganlarga.'
    ],
    dtmTip: 'Birinchi ta’til olish huquqi 6 oylik uzluksiz ishdan keyin beriladi.'
  },
  225: {
    number: 225,
    title: '225-modda. Keyingi ish yillari uchun ta’til berish navbati (ta’tillar jadvali)',
    content: [
      'Ta’tillar jadvali har yili kalendar yil boshlanishidan oldin ish beruvchi tomonidan kasaba uyushmasi bilan kelishilgan holda tasdiqlanadi va xodimga ma’lum qilinadi.'
    ]
  },
  226: {
    number: 226,
    title: '226-modda. Ta’til boshlanishi haqida xabardor qilish',
    content: [
      'Ish beruvchi xodimni ta’til boshlanishi haqida kamida o‘n besh kun oldin yozma ravishda xabardor qilishi shart.'
    ],
    dtmTip: 'Ta’til boshlanishi haqida kamida 15 kun oldin xodimga ma’lum qilinadi.'
  },
  227: {
    number: 227,
    title: '227-modda. Ta’til vaqti uchun haq to‘lash muddati',
    content: [
      'Mehnat ta’tili uchun haq to‘lash (ta’til puli) ta’til boshlanishidan oldingi oxirgi ish kunidan kechiktirmay amalga oshirilishi shart.'
    ],
    dtmTip: 'Ta’til puli ta’til boshlanishidan oldingi oxirgi ish kunidan kechiktirmasdan to‘lanadi.'
  },
  228: {
    number: 228,
    title: '228-modda. Ta’tilni uzaytirish yoki boshqa muddatga ko‘chirish',
    content: [
      'Xodim ta’til davrida vaqtincha mehnatga qobiliyatsiz bo‘lsa (kasallansa) yoki davlat vazifalarini bajarsa, ta’til tegishli kunlarga uzaytiriladi yoki boshqa vaqtga ko‘chiriladi.'
    ]
  },
  229: {
    number: 229,
    title: '229-modda. Ta’tildan chaqirib olish qoidalari',
    content: [
      'Xodimni ta’tildan chaqirib olishga faqat uning yozma roziligi bilan yo‘l qo‘yiladi.',
      'O‘n sakkiz yoshga to‘lmagan xodimlarni, homilador ayollarni hamda noqulay mehnat sharoitlarida ishlovchilarni ta’tildan chaqirib olish qat’iyan taqiqlanadi.'
    ],
    dtmTip: '18 yoshga to‘lmaganlarni, homiladorlarni va zararli sharoitdagilarni ta’tildan chaqirib olish taqiqlanadi.'
  },
  230: {
    number: 230,
    title: '230-modda. Ta’tilni qismlarga bo‘lish',
    content: [
      'Taraflarning kelishuvi bilan ta’til qismlarga bo‘linishi mumkin, bunda uning kamida bir qismi o‘n to‘rt kalendar kundan kam bo‘lmasligi shart.'
    ],
    dtmTip: 'Ta’til bo‘linganda bir qismi kamida 14 kalendar kun bo‘lishi shart.'
  },
  231: {
    number: 231,
    title: '231-modda. Ta’til bermaslikni taqiqlash',
    content: [
      'Xodimga ketma-ket ikki yil davomida har yilgi asosiy ta’tilni bermaslik taqiqlanadi.'
    ]
  },
  232: {
    number: 232,
    title: '232-modda. Ta’tilni pul kompensatsiyasiga almashtirish',
    content: [
      'Yigirma bir kalendar kundan ortiq bo‘lgan ta’til qismi xodimning yozma arizasiga binoan pulli kompensatsiyaga almashtirilishi mumkin.',
      '18 yoshga to‘lmaganlar va nogironlarning ta’tilini pulga almashtirish taqiqlanadi.'
    ]
  },
  233: {
    number: 233,
    title: '233-modda. Ishdan bo‘shatishda ta’til berish',
    content: [
      'Xodimning yozma arizasiga ko‘ra, ishdan bo‘shatish bilan bog‘liq holda foydalanilmagan ta’tillar berilib, oxirgi ta’til kuni ishdan bo‘shash kuni deb hisoblanishi mumkin.'
    ]
  },
  234: {
    number: 234,
    title: '234-modda. Ijtimoiy ta’tillar tushunchasi',
    content: [
      'Ijtimoiy ta’tillarga homiladorlik va tug‘ish ta’tillari, bolani parvarishlash ta’tillari va o‘quv ta’tillari kiradi.'
    ]
  },
  235: {
    number: 235,
    title: '235-modda. Ta’lim tashkilotlarida o‘qiyotganlarga beriladigan o‘quv ta’tillari',
    content: [
      'Oliy va o‘rta maxsus o‘quv yurtlarida sirtqi yoki kechki ta’limda o‘qiyotgan xodimlarga sessiya va imtihonlarni topshirish davrida o‘rtacha ish haqi saqlangan holda o‘quv ta’tillari beriladi.'
    ]
  },
  236: {
    number: 236,
    title: '236-modda. O‘quv ta’tillarining davomiyligi',
    content: [
      'Oliy o‘quv yurtlari talabalariga 1- va 2-kursda kamida 30 kalendar kun, yuqori kurslarda kamida 40 kalendar kun, davlat imtihonlari va diplom himoyasida 4 oygacha o‘quv ta’tili beriladi.'
    ]
  },
  237: {
    number: 237,
    title: '237-modda. Kirish imtihonlari topshiruvchilarga beriladigan ta’til',
    content: [
      'OTMga kirish imtihonlarini topshirayotgan xodimlarga kamida o‘n besh kalendar kun ish haqi saqlanmaydigan ta’til beriladi.'
    ]
  },
  238: {
    number: 238,
    title: '238-modda. Ijodiy ta’tillar',
    content: [
      'Darsliklar yozish, doktorlik (PhD, DSc) dissertatsiyalarini yakunlash uchun xodimlarga o‘rtacha ish haqi saqlangan holda uch oydan olti oygacha ijodiy ta’tillar beriladi.'
    ]
  },
  239: {
    number: 239,
    title: '239-modda. Oila a’zolariga qarash uchun ta’tillar',
    content: [
      'Oila a’zolari betob bo‘lganda xodimga tibbiy muassasa xulosasiga binoan ish haqi saqlanmaydigan ta’til beriladi.'
    ]
  },
  240: {
    number: 240,
    title: '240-modda. Majburiy beriladigan ish haqi saqlanmaydigan ta’tillar',
    content: [
      'Ish beruvchi quyidagi hollarda xodim arizasiga ko‘ra ish haqi saqlanmaydigan ta’til berishga majburdir:',
      '1) bola tug‘ilganda yoki nikoh tuzilganda — besh kalendar kungacha;',
      '2) yaqin qarindosh vafot etganda — besh kalendar kungacha;',
      '3) 1941–1945-yillardagi urush qatnashchilari va nogironlarga — yiliga o‘n to‘rt kalendar kungacha;',
      '4) I va II guruh nogironlariga — yiliga o‘ttiz kalendar kungacha.'
    ],
    dtmTip: 'To‘y, bola tug‘ilishi yoki dafn marosimi uchun ish beruvchi kamida 5 kungacha pulsiz ta’til berishi shart.'
  },
  241: {
    number: 241,
    title: '241-modda. Ish haqi saqlanmaydigan ta’tilning eng ko‘p davomiyligi',
    content: [
      'Xodimning arizasiga ko‘ra unga ish haqi saqlanmaydigan ta’til berilishi mumkin, uning davomiyligi o‘n ikki oylik davr mobaynida jamlangan holda uch oydan oshmasligi kerak.'
    ],
    dtmTip: 'Ish haqi saqlanmaydigan ta’til 1 yil ichida ko‘pi bilan 3 oydan oshmasligi kerak.'
  },
  242: {
    number: 242,
    title: '242-modda. Karantin va favqulodda vaziyatda ish haqi saqlanmaydigan ta’til',
    content: [
      'Karantin choralari joriy etilganda xodim arizasiga ko‘ra olti oygacha ish haqi saqlanmaydigan ta’tilda bo‘lishi mumkin.'
    ]
  },
  243: {
    number: 243,
    title: '243-modda. Mehnatga haq to‘lash tushunchasi',
    content: [
      'Mehnatga haq to‘lash – ish beruvchi tomonidan xodimga uning mehnati uchun qonunchilikka, mehnat haqidagi boshqa huquqiy hujjatlarga va mehnat shartnomasiga muvofiq to‘lanadigan to‘lovlar tizimidir.'
    ]
  },
  244: {
    number: 244,
    title: '244-modda. Mehnatga haq to‘lashning asosiy prinsiplari',
    content: [
      'Teng mehnat uchun teng haq to‘lash, kamsitishga yo‘l qo‘ymaslik, eng kam ish haqidan kam bo‘lmagan haq to‘lash kafolati.'
    ]
  },
  245: {
    number: 245,
    title: '245-modda. Mehnatga haq to‘lashning eng kam miqdori (MHTEKM)',
    content: [
      'Mehnatga haq to‘lashning eng kam miqdori O‘zbekiston Respublikasi Prezidentining farmoni bilan belgilanadi va mamlakatning butun hududida majburiydir.',
      'To‘liq oylik ish normasini bajargan xodimning ish haqi belgilangan MHTEKMdan kam bo‘lishi mumkin emas.'
    ],
    dtmTip: 'To‘liq stavkada ishlagan xodimning oyligi Mehnatga haq to‘lashning eng kam miqdoridan kam bo‘lishi mumkin emas.'
  },
  246: {
    number: 246,
    title: '246-modda. Mehnatga haq to‘lash tizimlari',
    content: [
      'Tashkilotlarda vaqtbay, ishbay, mukofotli, tarif va notarif mehnatga haq to‘lash tizimlari qo‘llanilishi mumkin.'
    ]
  },
  247: {
    number: 247,
    title: '247-modda. Tarif tizimi va yagona tarif setkasi',
    content: [
      'Byudjet tashkilotlarida haq to‘lash Yagona tarif setkasi asosida razryadlar bo‘yicha amalga oshiriladi.'
    ]
  },
  248: {
    number: 248,
    title: '248-modda. Rag‘batlantiruvchi to‘lovlar va ustamalar',
    content: [
      'Mehnat unumdorligi, yuqori malaka va ko‘p yillik xizmat uchun qo‘shimcha haq, ustama va mukofotlar berilishi mumkin.'
    ]
  },
  249: {
    number: 249,
    title: '249-modda. Kompensatsiya to‘lovlari',
    content: [
      'Noqulay va zararli mehnat sharoitlari, tungi ishlar va ortiqcha ishlangan vaqt uchun maxsus ustama kompensatsiyalar to‘lanadi.'
    ]
  },
  250: {
    number: 250,
    title: '250-modda. Mehnatga haq to‘lash shakli',
    content: [
      'Mehnatga haq to‘lash milliy valyutada (so‘mda) naqd pulsiz yoki naqd pul shaklida amalga oshiriladi.',
      'Ish haqini natura shaklida (mahsulot, tovar, spirtli ichimliklar yoki qarz majburiyatlari bilan) to‘lash qat’iyan taqiqlanadi.'
    ],
    dtmTip: 'Ish haqini tovar, spirtli ichimlik yoki qarz qog‘ozi shaklida to‘lash qat’iyan taqiqlanadi!'
  },
  251: {
    number: 251,
    title: '251-modda. Ish haqini to‘lash joyi',
    content: [
      'Ish haqi xodimning ish joyida yoki uning arizasiga binoan bank plastik kartasiga o‘tkazib beriladi.'
    ]
  },
  252: {
    number: 252,
    title: '252-modda. Hisob-kitob varaqasi (raschyotka) berish majburiyati',
    content: [
      'Ish beruvchi ish haqini to‘lashda har bir xodimga yozma yoki elektron shaklda hisoblangan ish haqi tarkibiy qismlari, ushlab qolingan summalar va to‘lanadigan sof summa ko‘rsatilgan hisob-kitob varaqasini taqdim etishi shart.'
    ]
  },
  253: {
    number: 253,
    title: '253-modda. Ish haqini to‘lash muddatlari',
    content: [
      'Ish haqi har yarim oyda bir martadan kam bo‘lmagan muddatda to‘lanadi.',
      'Xodimlarga ish haqi to‘lash muddatlari jamoa shartnomasida yoki ichki hujjatda belgilanadi (masalan, har oyning 20-kuni avans va keyingi oyning 5-kuni yakuniy hisob-kitob).',
      'Ish haqi to‘lanadigan kun dam olish yoki bayram kuniga to‘g‘ri kelsa, to‘lov ushbu kundan oldingi oxirgi ish kunida amalga oshiriladi.'
    ],
    dtmTip: 'Ish haqi har yarim oyda kamida bir marta to‘lanishi shart.'
  },
  254: {
    number: 254,
    title: '254-modda. Ish haqi kechiktirilganda ish beruvchining moddiy javobgarligi',
    content: [
      'Ish beruvchi ish haqini, ta’til pullarini yoki ishdan bo‘shash hisob-kitobini belgilangan muddatdan kechiktirsa, har bir kechiktirilgan kun uchun O‘zbekiston Respublikasi Markaziy bankining qayta moliyalashtirish stavkasining o‘n foizi miqdorida pulli kompensatsiya to‘lashi shart.'
    ],
    dtmTip: 'Yangi norma: Ish haqi kechiktirilsa, ish beruvchi har bir kechiktirilgan kun uchun Markaziy bank stavkasining 10%i miqdorida jarima kompensatsiyasini to‘laydi!'
  },
  255: {
    number: 255,
    title: '255-modda. O‘rtacha ish haqini hisoblab chiqarish tartibi',
    content: [
      'O‘rtacha ish haqi ta’til pullari, ishdan bo‘shatish nafaqasi va kompensatsiyalarni to‘lash uchun hisob-kitob qilinayotgan oydan oldingi o‘n ikki kalendar oy bo‘yicha hisoblanadi.'
    ]
  },
  256: {
    number: 256,
    title: '256-modda. Ish haqi darajasini indeksatsiya qilish',
    content: [
      'Ish haqining xarid qobiliyatini saqlab qolish maqsadida davlat tashkilotlarida va boshqa korxonalarda inflatsiya darajasiga qarab oyliklar muntazam indeksatsiya qilinadi.'
    ]
  },
  257: {
    number: 257,
    title: '257-modda. Bir necha kasbda (lavozimda) ishlaganda haq to‘lash',
    content: [
      'Bir necha kasbda ishlagan, xizmat ko‘rsatish doirasini kengaytirgan yoki vaqtincha yo‘q xodim vazifasini bajargan xodimga qo‘shimcha haq to‘lanadi.'
    ]
  },
  258: {
    number: 258,
    title: '258-modda. O‘rindoshlik asosidagi ishga haq to‘lash',
    content: [
      'O‘rindoshlik asosida ishlaganda haq ishlangan vaqtga yoki ishlab chiqarilgan mahsulotga mutanosib to‘lanadi.'
    ]
  },
  259: {
    number: 259,
    title: '259-modda. Boshqa ishga o‘tkazilganda haq to‘lash',
    content: [
      'Sog‘lig‘i tufayli yengilroq ishga o‘tkazilganda yoki homiladorlikda avvalgi maosh saqlanadi.'
    ]
  },
  260: {
    number: 260,
    title: '260-modda. Bekor turib qolgan vaqt uchun haq to‘lash',
    content: [
      'Ish beruvchining aybi bilan bekor turib qolingan vaqt uchun xodimga uning o‘rtacha ish haqining kamida uchdan ikki qismi miqdorida haq to‘lanadi.',
      'Xodimning aybisiz yuz bergan tabiiy ofat yoki boshqa sabablarda kamida tarif stavkasining uchdan ikki qismi to‘lanadi. Xodimning aybi bilan bekor turilgan vaqtga haq to‘lanmaydi.'
    ],
    dtmTip: 'Bekor turib qolingan vaqtda ish beruvchi aybi bo‘lsa o‘rtacha ish haqining kamida 2/3 qismi to‘lanadi.'
  },
  261: {
    number: 261,
    title: '261-modda. Mehnat normalari bajarilmaganda haq to‘lash',
    content: [
      'Xodimning aybisiz me’yorlar bajarilmaganda ish haqining kamida uchdan ikki qismi saqlanadi.'
    ]
  },
  262: {
    number: 262,
    title: '262-modda. Ish vaqtidan tashqari ish uchun haq to‘lash',
    content: [
      'Ish vaqtidan tashqari ish uchun kamida ikki hissa miqdorida haq to‘lanadi.',
      'Xodimning xohishiga ko‘ra ikki hissa haq o‘rniga ortiqcha ishlangan vaqtga teng qo‘shimcha dam olish vaqti berilishi mumkin (bunda ish bir hissa miqdorida to‘lanadi).'
    ],
    dtmTip: 'Ish vaqtidan tashqari ishga kamida 2 hissa haq to‘lanadi.'
  },
  263: {
    number: 263,
    title: '263-modda. Dam olish va ishlanmaydigan bayram kunlaridagi ish uchun haq to‘lash',
    content: [
      'Dam olish va bayram kunlaridagi ish uchun kamida ikki hissa miqdorida haq to‘lanadi.'
    ]
  },
  264: {
    number: 264,
    title: '264-modda. Tungi vaqtdagi ish uchun haq to‘lash',
    content: [
      'Tungi vaqtdagi (soat 22:00 dan 06:00 gacha) ishning har bir soati uchun kamida bir yarim hissa (1.5 baravar) miqdorida haq to‘lanadi.'
    ],
    dtmTip: 'Tungi ish soatlariga kamida 1.5 baravar haq to‘lanadi.'
  },
  265: {
    number: 265,
    title: '265-modda. Yaroqsiz mahsulot tayyorlanganda haq to‘lash',
    content: [
      'Xodimning aybisiz tayyorlangan qisman yaroqsiz mahsulot uchun pasaytirilgan baholar bo‘yicha haq to‘lanadi. Xodimning aybi bilan to‘liq brak tayyorlansa, haq to‘lanmaydi.'
    ]
  },
  266: {
    number: 266,
    title: '266-modda. Yangi ishlab chiqarishni o‘zlashtirish davrida haq to‘lash',
    content: [
      'Yangi texnika yoki mahsulotni o‘zlashtirish davrida (olt oygacha) xodimga uning avvalgi o‘rtacha oylik maoshi to‘lab turiladi.'
    ]
  },
  267: {
    number: 267,
    title: '267-modda. Ish haqidan chegirmalar (ushlab qolishlar) tushunchasi',
    content: [
      'Ish haqidan ushlab qolish faqat xodimning yozma roziligi bilan yoki qonunda nazarda tutilgan hollarda sud qarori bo‘yicha amalga oshirilishi mumkin.'
    ]
  },
  268: {
    number: 268,
    title: '268-modda. Xodimning roziligisiz ish haqidan ushlab qolish asoslari',
    content: [
      'Quyidagi hollarda xodim roziligisiz ish haqidan ushlab qolinadi:',
      '1) soliqlar va majburiy to‘lovlarni undirish uchun;',
      '2) sudning ijro hujjatlari (aliment, jarimalar) bo‘yicha;',
      '3) xizmat safariga yoki hisobdorlikka berilib qaytarilmagan bo‘naklar (avanslar) bo‘yicha;',
      '4) buxgalteriya xatosi oqibatida ortiqcha to‘langan summalar bo‘yicha;',
      '5) ish yili tugamasdan ishdan bo‘shagan xodimdan ta’tilning ishlanmagan kunlari uchun.',
      'Xizmat safari avansi yoki hisoblashdagi xatolik bo‘yicha buyruq bir oydan kechiktirmay chiqarilishi shart.'
    ]
  },
  269: {
    number: 269,
    title: '269-modda. Ortiqcha to‘langan ish haqini qaytarib olish cheklovi',
    content: [
      'Xodimga qonunlarni noto‘g‘ri qo‘llash oqibatida ortiqcha to‘langan ish haqi (agar buxgalteriya arifmetik xatosi bo‘lmasa va xodimning g‘arazli niyati bo‘lmasa) undan qaytarib undirilishi mumkin emas.'
    ]
  },
  270: {
    number: 270,
    title: '270-modda. Ish haqidan ushlab qolishlarning chegarasi (miqdori)',
    content: [
      'Ish haqini har gal to‘lash vaqtida ushlab qolinadigan summaning umumiy miqdori xodimga tegishli bo‘lgan ish haqining ellik foizidan oshishi mumkin emas.',
      'Aliment majburiyatlari bo‘yicha, shuningdek axloq tuzatish ishlari jazosi o‘talayotganda ushlab qolishlar miqdori yetmish foizgacha belgilanishi mumkin.'
    ],
    dtmTip: 'Ish haqidan ushlab qolish chegarasi: odatda ko‘pi bilan 50%, aliment va axloq tuzatish ishlarida ko‘pi bilan 70%.'
  },
  271: {
    number: 271,
    title: '271-modda. Ushlab qolish taqiqlanadigan to‘lovlar',
    content: [
      'Xizmat safari kompensatsiyalari, bolaning tug‘ilishi munosabati bilan berilgan bir martalik nafaqalar va dafn marosimi nafaqalaridan ushlab qolish taqiqlanadi.'
    ]
  }
};
