export interface MehnatArticleItem {
  number: number;
  title: string;
  content: string[];
  dtmTip?: string;
}

export const MEHNAT_PART_1: Record<number, MehnatArticleItem> = {
  1: {
    number: 1,
    title: '1-modda. Ushbu Kodeks bilan tartibga solinadigan munosabatlar',
    content: [
      'Ushbu Kodeks xodimlar, ish beruvchilar va davlat manfaatlarining muvozanatini ta’minlash hamda ularni muvofiqlashtirish asosida yakka tartibdagi mehnatga oid munosabatlarni va ular bilan bevosita bog‘liq bo‘lgan ijtimoiy munosabatlarni tartibga soladi.',
      'Yakka tartibdagi mehnatga oid munosabatlar deganda xodim bilan ish beruvchi o‘rtasidagi xodim tomonidan mehnat to‘g‘risidagi qonunchilikda, mehnat haqidagi boshqa huquqiy hujjatlarda, mehnat shartnomasida nazarda tutilgan shartlar asosida muayyan mehnat vazifasini shaxsan bajarishga doir munosabatlar tushuniladi.'
    ],
    dtmTip: 'Yakka tartibdagi mehnat munosabatlarining asosiy maqsadi: xodim, ish beruvchi va davlat manfaatlari muvozanatini ta’minlash.'
  },
  2: {
    number: 2,
    title: '2-modda. Ushbu Kodeksning asosiy vazifalari',
    content: [
      'Ushbu Kodeksning asosiy vazifalari quyidagilardan iborat:',
      '1) xodimlar mehnat huquqlari va erkinliklarining, shu jumladan mehnat qilishga, erkin ish tanlashga, adolatli va xavfsiz mehnat sharoitlariga hamda ishsizlikdan himoyalanishga bo‘lgan huquqining davlat kafolatlarini belgilash;',
      '2) ish beruvchilarning xodimlarni tanlash, joy-joyiga qo‘yish va mehnat jarayonini samarali tashkil etish sohasidagi huquqlari ta’minlanishiga ko‘maklashish;',
      '3) mehnat sohasida ijtimoiy sheriklikni rivojlantirish va rag‘batlantirish;',
      '4) xodimlar va ish beruvchilarning huquqlari hamda qonuniy manfaatlari himoya qilinishini ta’minlash;',
      '5) mehnat bozorining samarali faoliyat ko‘rsatishiga ko‘maklashish.'
    ]
  },
  3: {
    number: 3,
    title: '3-modda. Yakka tartibdagi mehnatga oid munosabatlarni tartibga solishning asosiy prinsiplari',
    content: [
      'Yakka tartibdagi mehnatga oid munosabatlarni tartibga solishning asosiy prinsiplari quyidagilardan iborat:',
      '1) mehnat huquqlarining tengligi, mehnat va mashg‘ulotlar sohasida kamsitishni taqiqlash;',
      '2) mehnat erkinligi va majburiy mehnatni taqiqlash;',
      '3) mehnat sohasidagi ijtimoiy sheriklik;',
      '4) mehnat huquqlari ta’minlanishining va ularning himoya qilinishi kafolatlanganligi;',
      '5) xodimning huquqiy holati yomonlashishiga yo‘l qo‘yilmasligi.'
    ],
    dtmTip: 'Mehnat huquqining 5 ta asosiy prinsipi: tenglik, mehnat erkinligi, ijtimoiy sheriklik, himoya kafolati, holatni yomonlashtirmaslik.'
  },
  4: {
    number: 4,
    title: '4-modda. Mehnat huquqlarining tengligi, mehnat va mashg‘ulotlar sohasida kamsitishni taqiqlash',
    content: [
      'Barcha fuqarolar mehnat huquqlariga ega bo‘lish va ulardan foydalanishda teng imkoniyatlarga egadir.',
      'Jinsi, yoshi, irqi, millati, tili, ijtimoiy kelib chiqishi, mulkiy holati va mansab mavqeyi, yashash joyi, dinga munosabati, e’tiqodi, jamoat birlashmalariga mansubligi yoki mansub emasligi sababli biron-bir to‘g‘ridan-to‘g‘ri yoki bilvosita kamsitish taqiqlanadi.',
      'Ishning o‘ziga xos talablariga asoslangan yoki davlat tomonidan aholining alohida toifalariga (ayollar, voyaga yetmaganlar, nogironligi bo‘lgan shaxslar) g‘amxo‘rlik ko‘rsatishga qaratilgan farqlashlar kamsitish hisoblanmaydi.'
    ],
    dtmTip: 'Aholining ijtimoiy himoyaga muhtoj toifalariga beriladigan imtiyozlar kamsitish deb hisoblanmaydi.'
  },
  5: {
    number: 5,
    title: '5-modda. Mehnat erkinligi va majburiy mehnatni taqiqlash',
    content: [
      'Mehnat erkinligi har kimning mehnat qilishga bo‘lgan o‘z qobiliyatini tasarruf etish, kasb, faoliyat turi va ish joyini erkin tanlash huquqini anglatadi.',
      'Majburiy mehnat taqiqlanadi. Majburiy mehnat deganda har qanday shaxsdan biron-bir jazoni qo‘llash tahdidi ostida talab etiladigan, bajarilishi uchun ushbu shaxs ixtiyoriy ravishda o‘z xizmatlarini taklif qilmagan har qanday ish yoki xizmat tushuniladi.',
      'Quyidagilar majburiy mehnat deb hisoblanmaydi: harbiy yoki muqobil xizmat to‘g‘risidagi qonunchilik asosida bajariladigan ishlar; favqulodda yoki harbiy holat joriy etilganda bajariladigan ishlar; qonuniy kuchga kirgan sud hukmi asosida va davlat organlari nazorati ostida bajariladigan ishlar.'
    ],
    dtmTip: 'Harbiy xizmat, favqulodda holatdagi ishlar va sudning qonuniy hukmi bo‘yicha ishlar majburiy mehnat hisoblanmaydi.'
  },
  6: {
    number: 6,
    title: '6-modda. Mehnat sohasidagi ijtimoiy sheriklik',
    content: [
      'Mehnat sohasidagi ijtimoiy sheriklik xodimlar (ularning vakillari), ish beruvchilar (ularning vakillari) va davlat organlari o‘rtasida yakka tartibdagi mehnat munosabatlarini va ular bilan bog‘liq ijtimoiy munosabatlarni tartibga solish masalalari bo‘yicha o‘zaro hamkorlik tizimidir.'
    ]
  },
  7: {
    number: 7,
    title: '7-modda. Mehnat huquqlari ta’minlanishining va ularning himoya qilinishi kafolatlanganligi',
    content: [
      'Davlat har kimning mehnat huquqlariga rioya etilishini, ushbu huquqlarning davlat organlari, kasaba uyushmalari va sudlar tomonidan himoya qilinishini kafolatlaydi.'
    ]
  },
  8: {
    number: 8,
    title: '8-modda. Xodimning huquqiy holati yomonlashishiga yo‘l qo‘yilmasligi',
    content: [
      'Jamoa shartnomalarining, kelishuvlarining, shuningdek mehnat shartnomalarining xodimlar ahvolini mehnat to‘g‘risidagi qonunchilikka nisbatan yomonlashtiradigan qoidalari haqiqiy emasdir.',
      'Ish beruvchining xodimlar ahvolini yomonlashtiradigan ichki lokal hujjatlari ham haqiqiy hisoblanmaydi va qo‘llanilmaydi.'
    ],
    dtmTip: 'Xodimning ahvolini qonunga nisbatan yomonlashtiruvchi har qanday shartnoma yoki buyruq o‘z-o‘zidan haqiqiy emas.'
  },
  9: {
    number: 9,
    title: '9-modda. Ushbu Kodeksda nazarda tutilgan muddatlarni hisoblash',
    content: [
      'Ushbu Kodeksda nazarda tutilgan muddatning o‘tishi kalendar sanadan yoki uning boshlanishi belgilangan voqea yuz berganidan keyingi kundan e’tiboran boshlanadi.',
      'Yillar, oylar yoki haftalar bilan hisoblanadigan muddatlar tegishli davrning oxirgi kunida tugaydi.',
      'Agar muddatning oxirgi kuni ishlanmaydigan kunga to‘g‘ri kelsa, undan keyin keladigan birinchi ish kuni muddat tugaydigan kun hisoblanadi.',
      'Kalendar kunlar bilan hisoblanadigan muddatga ishlanmaydigan kunlar ham kiradi.'
    ],
    dtmTip: 'Muddat belgilangan kundan keyingi kundan boshlanadi; oxirgi kun dam olish kuniga to‘g‘ri kelsa, keyingi ish kuni hisoblanadi.'
  },
  10: {
    number: 10,
    title: '10-modda. Mehnat to‘g‘risidagi qonunchilik',
    content: [
      'Mehnat to‘g‘risidagi qonunchilik ushbu Kodeksdan va boshqa qonunchilik hujjatlaridan iboratdir.',
      'Agar xalqaro shartnomada O‘zbekiston Respublikasining mehnat to‘g‘risidagi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.'
    ]
  },
  11: {
    number: 11,
    title: '11-modda. Mehnat to‘g‘risidagi qonunchilikning amal qilish doirasi',
    content: [
      'Mehnat to‘g‘risidagi qonunchilik O‘zbekiston Respublikasi hududida ish beruvchi bilan tuzilgan mehnat shartnomasi bo‘yicha ishlayotgan barcha xodimlarga nisbatan tatbiq etiladi.',
      'Chet el fuqarolari, fuqaroligi bo‘lmagan shaxslar, shuningdek chet el yuridik shaxslari va xalqaro tashkilotlarda ishlovchilar uchun ham umumiy qoidalar tatbiq etiladi.'
    ]
  },
  12: {
    number: 12,
    title: '12-modda. Fuqarolik-huquqiy shartnomalar asosida amalga oshiriladigan munosabatlar',
    content: [
      'Haqiqatda yakka tartibdagi mehnat munosabatlarini tartibga soluvchi fuqarolik-huquqiy tusdagi shartnomalarni (pudrat, topshiriq va b.) tuzish taqiqlanadi.',
      'Agar fuqarolik-huquqiy shartnoma bo‘yicha xizmat ko‘rsatish amalda mehnat munosabatlari belgilariga ega bo‘lsa, bunday munosabatlarga nisbatan mehnat to‘g‘risidagi qonunchilik qoidalari qo‘llaniladi.'
    ],
    dtmTip: 'Mehnat munosabatlarini fuqarolik-huquqiy shartnoma (GPH) bilan niqoblash taqiqlanadi.'
  },
  13: {
    number: 13,
    title: '13-modda. Mehnat haqidagi boshqa huquqiy hujjatlar',
    content: [
      'Mehnat haqidagi boshqa huquqiy hujjatlarga jamoa kelishuvlari, jamoa shartnomalari, shuningdek ish beruvchi tomonidan qabul qilinadigan ichki lokal hujjatlar (ichki mehnat tartibi qoidalari, shtat jadvallari va nizomlar) kiradi.'
    ]
  },
  14: {
    number: 14,
    title: '14-modda. Mehnat to‘g‘risidagi qonunchilikning vaqt bo‘yicha amal qilishi',
    content: [
      'Mehnat to‘g‘risidagi qonunchilik hujjatlari orqaga qaytish kuchiga ega emas va ular amalga kiritilganidan keyin vujudga kelgan munosabatlarga nisbatan tatbiq etiladi.',
      'Qonunchilik hujjatlariga orqaga qaytish kuchi faqat qonunda to‘g‘ridan-to‘g‘ri nazarda tutilgan hollarda berilishi mumkin.'
    ]
  },
  15: {
    number: 15,
    title: '15-modda. Mehnat to‘g‘risidagi qonunchilikning hudud bo‘yicha amal qilishi',
    content: [
      'O‘zbekiston Respublikasining mehnat to‘g‘risidagi qonunchiligi mamlakatning butun hududida majburiydir.'
    ]
  },
  16: {
    number: 16,
    title: '16-modda. Mehnat to‘g‘risidagi qonunchilikning shaxslar bo‘yicha amal qilishi',
    content: [
      'Mehnat to‘g‘risidagi qonunchilik O‘zbekiston hududida mehnat qilayotgan xodimlarga, shu jumladan o‘rindoshlarga, masofaviy xodimlarga, uy xodimlariga va vaqtinchalik xodimlarga nisbatan amal qiladi.'
    ]
  },
  17: {
    number: 17,
    title: '17-modda. Mehnat to‘g‘risidagi qonunchilikning harbiy xizmatchilarga va boshqa toifalarga tatbiq etilishi',
    content: [
      'Harbiy xizmatni, huquqni muhofaza qiluvchi organlarda xizmatni o‘tayotgan shaxslarga mehnat to‘g‘risidagi qonunchilik ushbu xizmat to‘g‘risidagi maxsus qonunchilik hujjatlari bilan tartibga solinmagan qismida tatbiq etiladi.'
    ]
  },
  18: {
    number: 18,
    title: '18-modda. Qonunchilik hujjatlaridagi noaniqliklarni xodim foydasiga talqin etish',
    content: [
      'Mehnat to‘g‘risidagi qonunchilikda va mehnat haqidagi boshqa huquqiy hujjatlarda bartaraf etib bo‘lmaydigan barcha ziddiyatlar va noaniqliklar xodimning foydasiga talqin qilinadi.'
    ],
    dtmTip: 'Mehnat qonunchiligidagi barcha noaniqlik va ziddiyatlar har doim xodim foydasiga talqin qilinadi!'
  },
  19: {
    number: 19,
    title: '19-modda. Yakka tartibdagi mehnatga oid munosabatlarning subyektlari',
    content: [
      'Yakka tartibdagi mehnatga oid munosabatlarning subyektlari xodim va ish beruvchidir.'
    ]
  },
  20: {
    number: 20,
    title: '20-modda. Xodimning mehnat huquq layoqati va muomala layoqati',
    content: [
      'Xodimning mehnat huquq layoqati va muomala layoqati u o‘n olti yoshga to‘lgan paytdan e’tiboran vujudga keladi.',
      'O‘n besh yoshga to‘lgan shaxslar ota-onadan birining (yoki ularning o‘rnini bosuvchi shaxsning) yozma roziligi bilan yengil ishlarni bajarish uchun ishga qabul qilinishi mumkin.'
    ],
    dtmTip: 'Umumiy mehnat muomala layoqati yoshi — 16 yosh; ota-ona roziligi bilan — 15 yosh.'
  },
  21: {
    number: 21,
    title: '21-modda. Xodimning asosiy mehnat huquqlari',
    content: [
      'Xodim quyidagi huquqlarga ega: mehnat shartnomasini tuzish, o‘zgartirish va bekor qilish; xavfsiz mehnat sharoitlariga ega bo‘lish; o‘z vaqtida va to‘liq hajmda adolatli ish haqi olish; dam olish va ta’tillar; kasbiy tayyorgarlik va malaka oshirish; jamoa muzokaralari olib borish; o‘z mehnat huquqlarini qonun bilan himoya qilish.'
    ]
  },
  22: {
    number: 22,
    title: '22-modda. Xodimning asosiy majburiyatlari',
    content: [
      'Xodim quyidagilarga majbur: o‘z mehnat vazifalarini vijdonan bajarish; mehnat intizomiga va ichki mehnat tartibi qoidalariga rioya etish; mehnatni muhofaza qilish talablariga rioya etish; ish beruvchining mol-mulkiga ehtiyotkorona munosabatda bo‘lish; texnologik intizomga rioya qilish.'
    ]
  },
  23: {
    number: 23,
    title: '23-modda. Ish beruvchi tushunchasi',
    content: [
      'Ish beruvchi – xodim bilan mehnat shartnomasini tuzgan yuridik shaxs (tashkilot, korxona), shuningdek o‘n sakkiz yoshga to‘lgan muomalaga layoqatli jismoniy shaxs (yakka tartibdagi tadbirkor, xususiy amaliyot bilan shug‘ullanuvchi notarius yoki advokat, uy xizmatchisini yollovchi shaxs).'
    ],
    dtmTip: 'Ish beruvchi jismoniy shaxs bo‘lsa, u kamida 18 yoshga to‘lgan va muomalaga layoqatli bo‘lishi shart.'
  },
  24: {
    number: 24,
    title: '24-modda. Ish beruvchining asosiy huquqlari',
    content: [
      'Ish beruvchi quyidagi huquqlarga ega: mehnat shartnomalarini tuzish, o‘zgartirish va bekor qilish; xodimlardan mehnat majburiyatlarini bajarishni talab qilish; xodimlarni rag‘batlantirish; intizomiy va moddiy javobgarlikka tortish; ichki lokal hujjatlarni qabul qilish.'
    ]
  },
  25: {
    number: 25,
    title: '25-modda. Ish beruvchining asosiy majburiyatlari',
    content: [
      'Ish beruvchi quyidagilarga majbur: xodimga mehnat shartnomasida shartlashilgan ishni berish; xavfsiz va gigiyena talablariga javob beradigan mehnat sharoitlarini ta’minlash; ish haqini o‘z vaqtida va to‘liq to‘lash; xodimning mehnat daftarchasini va hisobini yuritish; xodimning shaxsiga doir ma’lumotlarni himoya qilish.'
    ]
  },
  26: {
    number: 26,
    title: '26-modda. Ish beruvchining vakillari',
    content: [
      'Tashkilotning rahbari va uning o‘rinbosarlari, shuningdek ustav yoki ishonchnoma asosida vakolat berilgan boshqa mansabdor shaxslar ish beruvchining vakillari hisoblanadi.'
    ]
  },
  27: {
    number: 27,
    title: '27-modda. Xodimlarning vakillari',
    content: [
      'Kasaba uyushmalari va ularning saylab qo‘yiladigan organlari, kasaba uyushmasi bo‘lmaganda esa xodimlarning umumiy yig‘ilishida saylangan boshqa vakillik organlari xodimlarning vakillari hisoblanadi.'
    ]
  },
  28: {
    number: 28,
    title: '28-modda. Kasaba uyushmalarining mehnat sohasidagi huquqlari',
    content: [
      'Kasaba uyushmalari xodimlarning mehnat va ijtimoiy-iqtisodiy huquqlarini himoya qiladi, jamoa muzokaralarida ishtirok etadi, mehnat to‘g‘risidagi qonunchilikka rioya etilishi ustidan jamoatchilik nazoratini amalga oshiradi.'
    ]
  },
  29: {
    number: 29,
    title: '29-modda. Ish beruvchilarning vakillari',
    content: [
      'Ish beruvchilarning birlashmalari va ittifoqlari (Savdo-sanoat palatasi va b.) ijtimoiy sheriklik sohasida ish beruvchilar manfaatlarini ifoda etadilar.'
    ]
  },
  30: {
    number: 30,
    title: '30-modda. Yakka tartibdagi mehnat munosabatlarining vujudga kelish asoslari',
    content: [
      'Yakka tartibdagi mehnat munosabatlari xodim bilan ish beruvchi o‘rtasida tuzilgan mehnat shartnomasi asosida vujudga keladi.',
      'Shuningdek, saylab qo‘yiladigan lavozimga saylanish, tanlovdan o‘tish yoki vakolatli organ tomonidan lavozimga tayinlanish natijasida ham mehnat shartnomasi tuzilishi orqali vujudga keladi.'
    ]
  },
  31: {
    number: 31,
    title: '31-modda. Xodimning ishga haqiqatda qo‘yilishi oqibatlari',
    content: [
      'Xodim ish beruvchining yoki uning vakolatli shaxsining ruxsati bilan haqiqatda ishga qo‘yilgan taqdirda, mehnat shartnomasi yozma ravishda rasmiylashtirilmagan bo‘lsa ham, mehnat munosabatlari vujudga kelgan hisoblanadi.',
      'Ish beruvchi xodim haqiqatda ishga qo‘yilgan kundan e’tiboran uch kundan kechiktirmay mehnat shartnomasini yozma shaklda rasmiylashtirishi shart.'
    ],
    dtmTip: 'Ishga haqiqatda qo‘yilganda yozma shartnoma 3 kundan kechiktirmay rasmiylashtirilishi shart!'
  },
  32: {
    number: 32,
    title: '32-modda. Mehnatga oid munosabatlarni qonunchilik bilan tartibga solish darajalari',
    content: [
      'Mehnat munosabatlari markazlashtirilgan qonunchilik, tarmoq kelishuvlari, hududiy kelishuvlar, jamoa shartnomalari va yakka tartibdagi mehnat shartnomalari orqali tartibga solinadi.'
    ]
  },
  33: {
    number: 33,
    title: '33-modda. Mehnat sohasidagi huquqiy hujjatlarning iyerarxiyasi',
    content: [
      'Har qanday quyi darajadagi hujjat (shartnoma, buyruq, kelishuv) yuqori darajadagi qonun hujjatiga zid bo‘lishi va xodim huquqlarini cheklashi mumkin emas.'
    ]
  },
  34: {
    number: 34,
    title: '34-modda. Mehnat sohasidagi ijtimoiy sheriklik tushunchasi va darajalari',
    content: [
      'Ijtimoiy sheriklik quyidagi darajalarda amalga oshiriladi: respublika darajasida (Bosh kelishuv); tarmoq darajasida (tarmoq kelishuvlari); hududiy darajada (viloyat va shahar kelishuvlari); tashkilot darajasida (jamoa shartnomasi).'
    ],
    dtmTip: 'Ijtimoiy sheriklik 4 darajada tuziladi: Respublika, tarmoq, hududiy va tashkilot darajasi.'
  },
  35: {
    number: 35,
    title: '35-modda. Ijtimoiy sheriklikning asosiy prinsiplari',
    content: [
      'Prinsiplar: taraflarning teng huquqliligi; taraflar manfaatlarini hisobga olish; qonuniylik; davlatning sheriklikni qo‘llab-quvvatlashi; majburiyatlarni ixtiyoriy ravishda o‘z zimmasiga olish va ularni bajarishning majburiyligi.'
    ]
  },
  36: {
    number: 36,
    title: '36-modda. Ijtimoiy sheriklik taraflari',
    content: [
      'Ijtimoiy sheriklik taraflari xodimlar, ish beruvchilar va davlat ijro etuvchi hokimiyat organlaridir.'
    ]
  },
  37: {
    number: 37,
    title: '37-modda. Ijtimoiy sheriklik organlari va komissiyalari',
    content: [
      'Ijtimoiy-mehnat masalalari bo‘yicha uch tomonlama komissiyalar (respublika, tarmoq va hududiy) ijtimoiy sheriklikni doimiy ravishda olib boruvchi organlar hisoblanadi.'
    ]
  },
  38: {
    number: 38,
    title: '38-modda. Xodimlar vakillarining huquqlari kafolatlari',
    content: [
      'Xodimlar vakillari o‘z faoliyatini to‘sqinliksiz amalga oshirish huquqiga ega. Ularni ish beruvchi tashabbusi bilan intizomiy javobgarlikka tortish yoki ishdan bo‘shatish kasaba uyushmasi organi roziligi bilan amalga oshiriladi.'
    ]
  },
  39: {
    number: 39,
    title: '39-modda. Ijtimoiy sheriklik shakllari',
    content: [
      'Ijtimoiy sheriklik jamoa muzokaralari, maslahatlashuvlar, jamoa shartnomalari va kelishuvlarini tuzish, shuningdek mehnat nizolarini hal etish shaklida amalga oshiriladi.'
    ]
  },
  40: {
    number: 40,
    title: '40-modda. Jamoa muzokaralarini boshlash tashabbusi',
    content: [
      'Taraflarning har biri jamoa muzokaralarini boshlash to‘g‘risida ikkinchi tarafga yozma bildirishnoma yuborish huquqiga ega.',
      'Bildirishnoma olgan taraf yetti kalendar kun ichida muzokaralarga kirishishi shart.'
    ],
    dtmTip: 'Jamoa muzokaralari bildirishnomasi olingach, 7 kalendar kun ichida muzokaralarga kirishish shart!'
  },
  41: {
    number: 41,
    title: '41-modda. Jamoa muzokaralarini olib borish tartibi',
    content: [
      'Muzokaralar komissiya tuzish va qoidalar ishlab chiqish orqali olib boriladi. Muzokaralar davrida taraflar zarur ma’lumotlarni bir-biriga taqdim etishi shart.'
    ]
  },
  42: {
    number: 42,
    title: '42-modda. Axborot taqdim etish majburiyati',
    content: [
      'Ish beruvchi kasaba uyushmasiga jamoa muzokaralarini olib borish uchun zarur bo‘lgan iqtisodiy va mehnat sharoitlari to‘g‘risidagi axborotni ikki haftadan kechiktirmay taqdim etishi shart.'
    ]
  },
  43: {
    number: 43,
    title: '43-modda. Muzokaralar ishtirokchilarining kafolatlari',
    content: [
      'Muzokaralarda ishtirok etayotgan shaxslar muzokaralar davrida asosiy ishidan o‘rtacha ish haqi saqlangan holda ozod etiladi (yiliga ko‘pi bilan 3 oygacha).'
    ]
  },
  44: {
    number: 44,
    title: '44-modda. Kelishmovchiliklar bayonnomasi',
    content: [
      'Agar muzokaralar davomida ayrim qoidalar bo‘yicha kelishuvga erishilmasa, kelishmovchiliklar bayonnomasi tuziladi va hal etish uchun vositachiga yuboriladi.'
    ]
  },
  45: {
    number: 45,
    title: '45-modda. Jamoa kelishuvlari tushunchasi',
    content: [
      'Jamoa kelishuvi tegishli darajada xodimlar va ish beruvchilar uchun mehnat shart-sharoitlarini, kafolatlar va imtiyozlarni belgilovchi huquqiy hujjatdir.'
    ]
  },
  46: {
    number: 46,
    title: '46-modda. Jamoa kelishuvlarining turlari',
    content: [
      'Bosh kelishuv, tarmoq kelishuvi va hududiy kelishuv.'
    ]
  },
  47: {
    number: 47,
    title: '47-modda. Kelishuvlarning amal qilish muddati',
    content: [
      'Kelishuvlar bir yildan uch yilgacha bo‘lgan muddatga tuziladi va taraflar imzolagan paytdan e’tiboran kuchga kiradi.'
    ]
  },
  48: {
    number: 48,
    title: '48-modda. Jamoa kelishuvlarining ro‘yxatdan o‘tkazilishi',
    content: [
      'Jamoa kelishuvlari imzolangan kundan e’tiboran yetti kun ichida vakolatli mehnat organlariga xabardor qilish tartibida ro‘yxatdan o‘tkazish uchun yuboriladi.'
    ]
  },
  49: {
    number: 49,
    title: '49-modda. Jamoa shartnomasi tushunchasi',
    content: [
      'Jamoa shartnomasi – tashkilotda yoki yakka tartibdagi tadbirkorda xodimlar bilan ish beruvchi o‘rtasidagi ijtimoiy-mehnat munosabatlarini tartibga soluvchi lokal normativ hujjatdir.'
    ]
  },
  50: {
    number: 50,
    title: '50-modda. Jamoa shartnomasini tuzish zaruriyati',
    content: [
      'Tashkilotda jamoa shartnomasini tuzish zarurligi to‘g‘risidagi qarorni xodimlar vakillik organi yoki ish beruvchi qabul qiladi.'
    ]
  },
  51: {
    number: 51,
    title: '51-modda. Jamoa shartnomasi taraflari',
    content: [
      'Jamoa shartnomasining taraflari xodimlar nomidan kasaba uyushmasi qo‘mitasi (yoki saylangan vakil) va ish beruvchi (uning rahbari) hisoblanadi.'
    ]
  },
  52: {
    number: 52,
    title: '52-modda. Jamoa shartnomasi mazmuni va tuzilishi',
    content: [
      'Jamoa shartnomasi mehnatga haq to‘lash shakllari, tarif stavkalari, qo‘shimcha to‘lovlar, mukofotlar, ish vaqti va dam olish vaqti, ta’tillar davomiyligi, mehnat muhofazasi va xodimlarga beriladigan ijtimoiy yordamlarni o‘z ichiga oladi.'
    ]
  },
  53: {
    number: 53,
    title: '53-modda. Jamoa shartnomasining qonunchilikka muvofiqligi',
    content: [
      'Jamoa shartnomasi xodimlar uchun qonunda belgilanganidan ko‘ra imtiyozliroq shartlarni nazarda tutishi mumkin, ammo qonundan past standartlarni belgilash qat’iyan taqiqlanadi.'
    ]
  },
  54: {
    number: 54,
    title: '54-modda. Jamoa shartnomasi loyihasini muhokama qilish',
    content: [
      'Jamoa shartnomasi loyihasi xodimlarning bo‘linmalarida muhokama qilinadi va umumiy yig‘ilishda (konferensiyada) tasdiqlanadi.'
    ]
  },
  55: {
    number: 55,
    title: '55-modda. Jamoa shartnomasini imzolash',
    content: [
      'Umumiy yig‘ilishda ma’qullangan jamoa shartnomasi taraflarning vakolatli vakillari tomonidan imzolanadi.'
    ]
  },
  56: {
    number: 56,
    title: '56-modda. Jamoa shartnomasining amal qilish muddati',
    content: [
      'Jamoa shartnomasi bir yildan uch yilgacha bo‘lgan muddatga tuziladi va imzolangan kundan kuchga kiradi.',
      'Tashkilot qayta tashkil etilganda yoki mulkdor o‘zgarganda jamoa shartnomasi qayta tuzilgunga qadar amal qilishini davom ettiradi.'
    ],
    dtmTip: 'Jamoa shartnomasi 1 yildan 3 yilgacha muddatga tuziladi.'
  },
  57: {
    number: 57,
    title: '57-modda. Jamoa shartnomasining amal qilish doirasi',
    content: [
      'Jamoa shartnomasi tashkilotning barcha xodimlariga, shu jumladan shartnoma tuzilganidan keyin ishga qabul qilingan xodimlarga nisbatan ham tatbiq etiladi.'
    ]
  },
  58: {
    number: 58,
    title: '58-modda. Jamoa shartnomasiga o‘zgartish va qo‘shimchalar kiritish',
    content: [
      'Jamoa shartnomasiga o‘zgartish va qo‘shimchalar kiritish taraflarning o‘zaro roziligi bilan uning o‘zida belgilangan tartibda amalga oshiriladi.'
    ]
  },
  59: {
    number: 59,
    title: '59-modda. Jamoa shartnomasi bajarilishini nazorat qilish',
    content: [
      'Jamoa shartnomasining bajarilishi ustidan nazorat taraflar, ularning vakillari hamda davlat mehnat inspeksiyasi tomonidan amalga oshiriladi.'
    ]
  },
  60: {
    number: 60,
    title: '60-modda. Jamoa shartnomasi bajarilishi to‘g‘risida hisobot berish',
    content: [
      'Taraflar har yili kamida bir marta jamoa shartnomasining bajarilishi to‘g‘risida xodimlarning umumiy yig‘ilishida hisobot beradilar.'
    ]
  },
  61: {
    number: 61,
    title: '61-modda. Jamoa shartnomasini bajarmaganlik uchun javobgarlik',
    content: [
      'Jamoa shartnomasida nazarda tutilgan majburiyatlarni buzganlikda yoki bajarmaganlikda aybdor bo‘lgan mansabdor shaxslar qonunga ko‘ra ma’muriy javobgarlikka tortiladi.'
    ]
  },
  62: {
    number: 62,
    title: '62-modda. Muzokaralardan bo‘yin tovlaganlik uchun javobgarlik',
    content: [
      'Ish beruvchi jamoa muzokaralarida ishtirok etishdan bo‘yin tovlasa yoki muddatlarni buzsa, qonunchilikda belgilangan javobgarlikka tortiladi.'
    ]
  },
  63: {
    number: 63,
    title: '63-modda. Ma’lumotlarni taqdim etmaganlik uchun javobgarlik',
    content: [
      'Jamoa muzokaralari olib borish va nazoratni amalga oshirish uchun zarur bo‘lgan axborotni taqdim etmagan shaxslar intizomiy va ma’muriy javobgarlikka tortiladi.'
    ]
  },
  64: {
    number: 64,
    title: '64-modda. Ijtimoiy sheriklik organlari qarorlarining majburiyligi',
    content: [
      'Uch tomonlama komissiyalarning o‘z vakolatlari doirasida qabul qilgan qarorlari taraflar uchun majburiydir.'
    ]
  },
  65: {
    number: 65,
    title: '65-modda. Jamoa kelishuvlarini ishlab chiqish tartibi',
    content: [
      'Tegishli uch tomonlama komissiyalar kelishuv loyihasini ishlab chiqadi va uni manfaatdor tashkilotlar o‘rtasida kelishadi.'
    ]
  },
  66: {
    number: 66,
    title: '66-modda. Tarmoq tarif kelishuvlarining o‘ziga xosligi',
    content: [
      'Tarmoq kelishuvlarida sohaning iqtisodiy xususiyatlaridan kelib chiqqan holda eng kam ish haqi koeffitsiyentlari va qo‘shimcha to‘lovlar belgilanadi.'
    ]
  },
  67: {
    number: 67,
    title: '67-modda. Hududiy kelishuvlarning xususiyatlari',
    content: [
      'Hududiy kelishuvlar viloyat va shahar miqyosida ish o‘rinlarini tashkil etish, aholi bandligini ta’minlash va ijtimoiy imtiyozlarni belgilaydi.'
    ]
  },
  68: {
    number: 68,
    title: '68-modda. Jamoa kelishuvlarining amal qilish doirasini kengaytirish',
    content: [
      'Vakolatli davlat organi tarmoq kelishuvini imzolamagan tarmoqdagi boshqa ish beruvchilarga ham uning amal qilishini taklif etish huquqiga ega.'
    ]
  },
  69: {
    number: 69,
    title: '69-modda. Kelishuvlarning bajarilishini tekshirish',
    content: [
      'Har yarim yilda komissiyalar kelishuvlarning ijrosi holatini o‘rganadi va ommaviy axborot vositalarida e’lon qiladi.'
    ]
  },
  70: {
    number: 70,
    title: '70-modda. Ish beruvchilarning ijtimoiy majburiyatlari',
    content: [
      'Ish beruvchi o‘z xodimlarining sog‘lomlashtirilishi, sanatoriy-kurort davolanishi va sport tadbirlariga mablag‘lar ajratishi mumkin.'
    ]
  },
  71: {
    number: 71,
    title: '71-modda. Kasaba uyushmasi a’zolik badallari',
    content: [
      'Xodimning yozma arizasiga ko‘ra, ish beruvchi uning oylik maoshidan kasaba uyushmasi badalini ushlab qolib, kasaba uyushmasi hisobvarag‘iga o‘tkazib berishi shart.'
    ]
  },
  72: {
    number: 72,
    title: '72-modda. Kasaba uyushmasiga xonalar va sharoitlar berish',
    content: [
      'Ish beruvchi kasaba uyushmasi qo‘mitasi faoliyati uchun bepul xona, aloqa va zarur jihozlar bilan ta’minlashi shart.'
    ]
  },
  73: {
    number: 73,
    title: '73-modda. Ish beruvchining yakka o‘zi qabul qiladigan buyruqlari',
    content: [
      'Ish beruvchi qonunda nazarda tutilgan hollarda kasaba uyushmasi bilan kelishmasdan mustaqil buyruqlar chiqarishi mumkin.'
    ]
  },
  74: {
    number: 74,
    title: '74-modda. Kasaba uyushmasi fikrini hisobga olgan holda qabul qilinadigan hujjatlar',
    content: [
      'Mehnat me’yorlari, ish vaqti jadvallari va ta’tillar jadvali kasaba uyushmasi fikrini hisobga olgan holda tasdiqlanadi.'
    ]
  },
  75: {
    number: 75,
    title: '75-modda. Kasaba uyushmasi roziligi bilan qabul qilinadigan buyruqlar',
    content: [
      'Jamoa shartnomasida belgilangan hollarda ish beruvchi tashabbusi bilan xodimni ishdan bo‘shatish faqat kasaba uyushmasi qo‘mitasining oldindan berilgan roziligi bilan amalga oshiriladi.'
    ],
    dtmTip: 'Jamoa shartnomasida nazarda tutilgan bo‘lsa, ish beruvchi xodimni kasaba uyushmasi roziligisiz bo‘shata olmaydi.'
  },
  76: {
    number: 76,
    title: '76-modda. Kasaba uyushmasi roziligini olish muddati',
    content: [
      'Kasaba uyushmasi qo‘mitasi ish beruvchining yozma taqdimnomasini o‘n kun ichida ko‘rib chiqishi va o‘z qarori haqida ish beruvchiga yozma xabar berishi shart.'
    ],
    dtmTip: 'Kasaba uyushmasi taqdimnomani 10 kun ichida ko‘rib chiqadi.'
  },
  77: {
    number: 77,
    title: '77-modda. Ish beruvchining rozilikdan keyin shartnomani bekor qilish muddati',
    content: [
      'Ish beruvchi kasaba uyushmasining roziligini olgan kundan e’tiboran bir oydan kechiktirmay mehnat shartnomasini bekor qilishga haqlidir.'
    ],
    dtmTip: 'Kasaba uyushmasi rozilik bergan kundan e’tiboran 1 oy ichida buyruq chiqarilishi shart.'
  },
  78: {
    number: 78,
    title: '78-modda. Rozilik olinmagan buyruqning oqibatlari',
    content: [
      'Kasaba uyushmasi roziligi olinmasdan chiqarilgan ishdan bo‘shatish to‘g‘risidagi buyruq qonunga xilof deb topiladi va xodim ishiga tiklanadi.'
    ]
  }
};
