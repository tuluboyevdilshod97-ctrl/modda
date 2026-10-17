const fs = require('fs');
const path = require('path');

const existingQuestions = JSON.parse(fs.readFileSync('konst_dump.json', 'utf8'));

// Replacement map for questions that need deceptive, close variants and length balance
const enhancedMap = {
  "konst-new-1": {
    question: "O'zbekiston qanday davlat hisoblanadi (1-modda)?",
    options: [
      "boshqaruvning parlamentar shakliga ega bo'lgan unitar va dunyoviy davlat",
      "boshqaruvning respublika shakliga ega bo'lgan suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat",
      "prezidentlik boshqaruvi tizimidagi suveren, federativ, huquqiy va ijtimoiy davlat",
      "boshqaruvning aralash shakliga ega bo'lgan demokratik, unitar va suveren davlat"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) boshqaruvning respublika shakliga ega bo'lgan suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 1-modda."
  },
  "konst-new-2": {
    question: "\"O'zbekiston Respublikasi\" va \"O'zbekiston\" degan nomlar qanday yuridik ma'noni anglatadi?",
    options: [
      "ikki xil mustaqil konstitutsiyaviy maqomni anglatadi",
      "faqat xalqaro shartnomalarda rasmiy kuchga ega bo'ladi",
      "bir ma'noni anglatadi",
      "birinchisi davlat idorasini, ikkinchisi geografik hududni anglatadi"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) bir ma'noni anglatadi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 1-modda: 'O‘zbekiston Respublikasi va O‘zbekiston degan nomlar bir ma’noni anglatadi.'"
  },
  "konst-new-3": {
    question: "Davlat organlari va mansabdor shaxslar kim oldida mas'uldirlar?",
    options: [
      "O'zbekiston Respublikasi Prezidenti va Oliy Majlis oldida",
      "davlat hokimiyati vakillik organlari va saylovchilar oldida",
      "jamiyat va fuqarolar oldida",
      "xalq deputatlari mahalliy Kengashlari oldida"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) jamiyat va fuqarolar oldida. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 2-modda: 'Davlat organlari va mansabdor shaxslar jamiyat va fuqarolar oldida mas’uldirlar.'"
  },
  "konst-new-4": {
    question: "O'zbekistonning davlat chegarasi va hududi qanday xususiyatga ega?",
    options: [
      "faqat umumxalq referendumi bilan o'zgartirilishi mumkin",
      "daxlsiz va bo'linmasdir",
      "qo'shni davlatlar bilan tuzilgan shartnomalarga bog'liqdir",
      "hududiy chegaralari ochiq va konfederativ asosda belgilanadi"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) daxlsiz va bo'linmasdir. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 3-modda."
  },
  "konst-new-9": {
    question: "O'zbekiston Respublikasida davlat hokimiyati qanday organlar tomonidan amalga oshiriladi?",
    options: [
      "xalq tomonidan to'g'ridan-to'g'ri saylangan jamoat birlashmalari tomonidan",
      "Konstitutsiyaviy sud tomonidan vakolat berilgan barcha tuzilmalar tomonidan",
      "Konstitutsiya hamda uning asosida qabul qilingan qonunlar vakolat bergan organlar tomonidangina",
      "Oliy Majlis va Vazirlar Mahkamasining qo'shma rayosati qaror qilgan organlar tomonidan"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) Konstitutsiya hamda uning asosida qabul qilingan qonunlar vakolat bergan organlar tomonidangina. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 7-modda."
  },
  "konst-new-10": {
    question: "Konstitutsiyaga ko'ra O'zbekiston xalqini kimlar tashkil etadi?",
    options: [
      "millatidan qat'i nazar, O'zbekiston Respublikasining fuqarolari",
      "faqat o'zbek millatiga mansub bo'lgan barcha shaxslar",
      "respublika hududida doimiy istiqomat qiluvchi barcha fuqarolar va ajnabiylar",
      "saylov huquqiga ega bo'lgan 18 yoshga to'lgan fuqarolar"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) millatidan qat'i nazar, O'zbekiston Respublikasining fuqarolari. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 8-modda."
  },
  "konst-new-11": {
    question: "Jamiyat va davlat hayotining eng muhim masalalari qanday hal etiladi?",
    options: [
      "faqat Vazirlar Mahkamasi va Prezident qarorlari bilan",
      "parlament palatalarining qo'shma yopiq majlisi qarori bilan",
      "xalq muhokamasiga taqdim etiladi hamda umumxalq ovoziga — referendumga qo'yiladi",
      "Sudyalar oliy kengashi va Adliya vazirligi xulosasi asosida"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) xalq muhokamasiga taqdim etiladi hamda umumxalq ovoziga — referendumga qo'yiladi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 9-modda."
  },
  "konst-new-12": {
    question: "O'zbekiston xalqi nomidan ish olib borishga qaysi subyektlar haqli?",
    options: [
      "har qanday davlat boshqaruvi va huquqni muhofaza qiluvchi organlar",
      "Oliy sud va O'zbekiston Respublikasi Konstitutsiyaviy sudi",
      "xalq saylagan O'zbekiston Respublikasi Oliy Majlisi va Prezidenti",
      "faqat saylovda eng ko'p ovoz olgan yetakchi siyosiy partiya fraksiyasi"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) xalq saylagan O'zbekiston Respublikasi Oliy Majlisi va Prezidenti. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 10-modda."
  },
  "konst-new-13": {
    question: "O'zbekiston Respublikasi davlat hokimiyatining tizimi qaysi prinsipga asoslanadi?",
    options: [
      "vakillik, ijroiya va prokuratura nazorati uyg'unligi prinsipiga",
      "hokimiyat vakolatlarining qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo'linishi prinsipiga",
      "davlat boshqaruvida yagona markazlashgan idora boshchiligi prinsipiga",
      "hududiy hokimiyatlarning to'liq avtonom mustaqilligi prinsipiga"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) hokimiyat vakolatlarining qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo'linishi prinsipiga. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 11-modda."
  },
  "konst-new-14": {
    question: "O'zbekiston Respublikasida ijtimoiy hayot qanday asosda rivojlanadi?",
    options: [
      "yagona davlat mafkurasi va partiyaviy yakdillik asosida",
      "an'anaviy qadriyatlar va diniy me'yorlar ustuvorligi asosida",
      "siyosiy institutlar, mafkuralar va fikrlarning xilma-xilligi asosida",
      "iqtisodiy korporatsiyalar va kasaba uyushmalari kelishuvi asosida"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) siyosiy institutlar, mafkuralar va fikrlarning xilma-xilligi asosida. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 12-modda."
  },
  "konst-new-16": {
    question: "Demokratiya umuminsoniy prinsiplariga ko'ra O'zbekistonda nima oliy qadriyat hisoblanadi?",
    options: [
      "davlat xavfsizligi, uning hududiy daxlsizligi va mustaqilligi",
      "inson, uning hayoti, erkinligi, sha'ni, qadr-qimmati va boshqa ajralmas huquqlari",
      "jamiyatning barqaror iqtisodiy o'sishi va davlat mulkining daxlsizligi",
      "davlat hokimiyati organlarining nufuzi va xalqaro maydondagi mavqeyi"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) inson, uning hayoti, erkinligi, sha'ni, qadr-qimmati va boshqa ajralmas huquqlari. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 13-modda."
  },
  "konst-new-18": {
    question: "O'zbekiston Respublikasining Konstitutsiyasi mamlakat hududida qanday yuridik kuchga ega?",
    options: [
      "mamlakat hududida oliy yuridik kuchga ega bo'lib, to'g'ridan-to'g'ri amal qiladi",
      "faqat maxsus ijro mexanizmi to'g'risidagi qonunlar qabul qilingandagina amal qiladi",
      "sudlarda faqat quyi qonun hujjatlariga havola qilingan holdagina qo'llaniladi",
      "xalqaro shartnomalar bilan bir xil darajadagi tavsiyaviy maqomga egadir"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) mamlakat hududida oliy yuridik kuchga ega bo'lib, to'g'ridan-to'g'ri amal qiladi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 15-modda."
  },
  "konst-new-20": {
    question: "Konstitutsiyaning birorta qoidasi qanday maqsadda talqin etilishi mumkin emas?",
    options: [
      "Prezident farmonlarining ustunligini ta'minlash maqsadida",
      "O'zbekiston Respublikasining huquq va manfaatlariga, asosiy prinsip va normalarga zarar yetkazadigan tarzda",
      "sud amaliyotidagi tushunmovchiliklarni ma'muriy tartibda bartaraf etish uchun",
      "xalqaro tashkilotlarning odatiy tavsiyalarini joriy etish maqsadida"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) O'zbekiston Respublikasining huquq va manfaatlariga, asosiy prinsip va normalarga zarar yetkazadigan tarzda. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 16-modda."
  },
  "konst-new-28": {
    question: "Insonning Konstitutsiya va qonunlarda mustahkamlangan huquq va erkinliklaridan kimning qarorisiz mahrum etishga yoki ularni cheklashga hech kim haqli emas?",
    options: [
      "sudning",
      "prokurorning",
      "tergov sudyasining",
      "surishtiruv yoki dastlabki tergov organining"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) sudning. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 20-modda: 'Insonning Konstitutsiya va qonunlarda mustahkamlangan huquq va erkinliklari faqat sud qarori asosida cheklanishi mumkin... hech kim sudning qarorisiz mahrum etishga yoki ularni cheklashga haqli emas.'"
  },
  "konst-new-39": {
    question: "Shaxs sudning qarorisiz qancha muddatdan ortiq ushlab turilishi mumkin emas?",
    options: [
      "yigirma to'rt soatdan ortiq muddatga",
      "qirq sakkiz soatdan ortiq muddatga",
      "yetmish ikki soatdan ortiq muddatga",
      "o'n sutkadan ortiq muddatga"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) qirq sakkiz soatdan ortiq muddatga. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 27-modda: 'Shaxs sudning qarorisiz qirq sakkiz soatdan ortiq muddat ushlab turilishi mumkin emas.'"
  },
  "konst-new-47": {
    question: "Davlat organlari va tashkilotlari, mansabdor shaxslar o'z huquqlari hamda qonuniy manfaatlariga daxldor bo'lgan hujjatlar, qarorlar va boshqa materiallar bilan tanishish imkoniyatini kim uchun ta'minlashi shart?",
    options: [
      "faqat O'zbekiston Respublikasi fuqarolari uchun",
      "har kim uchun",
      "faqat rasmiy guvohnomaga ega bo'lgan advokatlar uchun",
      "voyaga yetgan va muomala layoqatiga ega bo'lgan shaxslar uchun"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) har kim uchun. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 34-modda: 'Davlat organlari, tashkilotlar... har kimga o‘z huquqlari va qonuniy manfaatlariga daxldor bo‘lgan hujjatlar, qarorlar va boshqa materiallar bilan tanishish imkoniyatini ta’minlashi shart.'"
  },
  "konst-new-55": {
    question: "Har kim davlat organlariga, tashkilotlariga yakka tartibda yoki jamoa bo'lib qanday shakllarda murojaat qilish huquqiga ega?",
    options: [
      "arizalar, iltimosnomalar va e'tirozlar bilan",
      "takliflar, so'rovnomalar va tushuntirish xatlari bilan",
      "arizalar, takliflar va shikoyatlar bilan",
      "da'vo arizalari, protestlar va taqdimnomalar bilan"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) arizalar, takliflar va shikoyatlar bilan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 40-modda."
  },
  "konst-new-64": {
    question: "Qonunda belgilangan pensiyalar, nafaqalar va boshqa turdagi ijtimoiy yordamning miqdorlari nimadan oz bo'lishi mumkin emas?",
    options: [
      "mehnatga haq to'lashning eng kam miqdoridan (MHTEKM)",
      "rasman belgilangan eng kam iste'mol xarajatlaridan",
      "bazaviy hisoblash miqdorining uch baravaridan (BHM)",
      "minimal iste'mol savatchasining yetmish foizidan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) rasman belgilangan eng kam iste'mol xarajatlaridan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 46-modda."
  },
  "konst-new-67": {
    question: "Qulay atrof-muhitga ega bo'lish huquqi bilan birga har kim qanday axborotga ega bo'lish huquqiga ega?",
    options: [
      "davlat xavfsizligi organlarining ekologik hisobotlariga",
      "tabiiy resurslardan foydalanish litsenziyalarining to'liq ro'yxatiga",
      "atrof-muhit holati to'g'risidagi haqqoniy va ishonchli axborotga",
      "xorijiy ekologik fondlarning ichki ekspertiza ma'lumotlariga"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) atrof-muhit holati to'g'risidagi haqqoniy va ishonchli axborotga. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 49-modda."
  },
  "konst-new-72": {
    question: "Insonning huquq va erkinliklarini ta'minlash Konstitutsiyaga ko'ra nimadir?",
    options: [
      "davlatning oliy maqsadidir",
      "adliya organlarining idoraviy vazifasidir",
      "fuqarolik jamiyati institutlarining ixtiyoriy majburiyatidir",
      "xalqaro tashkilotlar oldidagi deklarativ va'dadir"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) davlatning oliy maqsadidir. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 54-modda."
  },
  "konst-new-74": {
    question: "Davlat organlarining hamda boshqa tashkilotlarning, ular mansabdor shaxslarining qonunga xilof qarorlari, harakatlari va harakatsizligi ustidan nima qilish huquqi kafolatlanadi?",
    options: [
      "faqat yuqori turuvchi idoraviy organga e'tiroz bildirish",
      "Inson huquqlari bo'yicha vakilga (Ombudsman) taqdimnoma kiritish",
      "Bosh prokurorga nazorat tartibida shikoyat berish",
      "sudga shikoyat qilish"
    ],
    correctIndex: 3,
    explanation: "To‘g‘ri javob: D) sudga shikoyat qilish. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 55-modda: 'Har kimga davlat organlarining hamda boshqa tashkilotlarning, ular mansabdor shaxslarining qonunga xilof qarorlari, harakatlari va harakatsizligi ustidan sudga shikoyat qilish huquqi kafolatlanadi.'"
  },
  "konst-new-82": {
    question: "Tarixiy, ma'naviy, madaniy, ilmiy va tabiiy meros kim tomonidan muhofaza qilinadi?",
    options: [
      "faqat YuNESKO va xalqaro madaniy fondlar tomonidan",
      "davlat tomonidan (u ushbu boyliklarni saqlash haqida g'amxo'rlik qiladi)",
      "xususiy meros egalari va kolleksionerlar tomonidan",
      "mahalliy davlat hokimiyati va mahalla fuqarolar yig'inlari tomonidan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) davlat tomonidan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 61-modda."
  },
  "konst-new-97": {
    question: "Kasaba uyushmalari qanday vazifa bajaradi va ularga a'zolik tartibi qanday?",
    options: [
      "xodimlarning ijtimoiy-iqtisodiy huquqlarini ifoda etadilar; ularga a'zo bo'lish ixtiyoriydir",
      "korxona ichki boshqaruvini amalga oshiradilar; barcha xodimlar uchun a'zolik majburiydir",
      "mehnat nizolari bo'yicha yakuniy sud qarorlarini chiqaradilar; a'zolik pullikdir",
      "ijro etuvchi hokimiyat topshiriqlarini bajaradilar; a'zolik kasbiy stajga qarab belgilanadi"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) xodimlarning ijtimoiy-iqtisodiy huquqlarini ifoda etadilar; ularga a'zo bo'lish ixtiyoriydir. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 71-modda."
  },
  "konst-new-98": {
    question: "Siyosiy partiyalar jamiyatda qanday rolni bajaradilar?",
    options: [
      "davlat boshqaruvi apparatini bevosita tuzib, vazirliklarni boshqaradilar",
      "ijtimoiy tabaqalarning siyosiy irodasini ifodalab, davlat hokimiyatini shakllantirishda ishtirok etadilar",
      "saylov o'tkazish komissiyalari ustidan mutlaq ma'muriy nazoratni o'rnatadilar",
      "qonunlarning ijrosini nazorat qiluvchi konstitutsiyaviy tergov organi vazifasini bajaradilar"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) ijtimoiy tabaqalarning siyosiy irodasini ifodalab, davlat hokimiyatini shakllantirishda ishtirok etadilar. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 74-modda."
  },
  "konst-new-100": {
    question: "Konstitutsiyaga ko'ra oilaning maqomi va uning muhofazasi qanday belgilangan?",
    options: [
      "faqat er-xotinning shaxsiy manfaatlariga tegishli xususiy ittifoqdir",
      "jamiyatning asosiy bo'g'ini bo'lib, u jamiyat va davlat muhofazasidadir",
      "davlat ro'yxatidan o'tishi bilan fuqarolik munosabatlarini cheklovchi tuzilmadir",
      "mahalliy ijro hokimiyati va fuqarolar yig'inlariga to'liq bo'ysunuvchi tashkilotdir"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) jamiyatning asosiy bo'g'ini bo'lib, u jamiyat va davlat muhofazasidadir. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 76-modda."
  },
  "konst-new-118": {
    question: "Qoraqalpog'iston Respublikasi O'zbekiston Respublikasi tarkibidan qanday asosda ajralib chiqish huquqiga ega?",
    options: [
      "Qoraqalpog'iston Respublikasi xalqining umumiy referendumi asosida",
      "Jo'qorg'i Kenges deputatlari umumiy sonining mutlaq ko'pchiligi qarori bilan",
      "O'zbekiston Respublikasi Oliy Majlisi palatalarining qo'shma roziligi bilan",
      "Prezident farmoni va xalqaro arbitraj sudi xulosasi asosida"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) Qoraqalpog'iston Respublikasi xalqining umumiy referendumi asosida. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 89-modda."
  },
  "konst-new-120": {
    question: "O'zbekiston Respublikasining Oliy Majlisi qanday maqomdagi organ hisoblanadi?",
    options: [
      "oliy ijro etuvchi va qonunosti hujjatlarini qabul qiluvchi organ",
      "oliy davlat vakillik organi bo'lib, qonun chiqaruvchi hokimiyatni amalga oshiradi",
      "sud hokimiyati va konstitutsiyaviy nazoratni muvofiqlashtiruvchi markaz",
      "Prezident huzuridagi doimiy faoliyat yurituvchi maslahat organi"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) oliy davlat vakillik organi bo'lib, qonun chiqaruvchi hokimiyatni amalga oshiradi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 91-modda."
  },
  "konst-new-127": {
    question: "Senat Prezident taqdimiga binoan qaysi oliy organlar tarkibini saylaydi yoki tayinlaydi?",
    options: [
      "Vazirlar Mahkamasi a'zolari hamda viloyat hokimlarini",
      "Konstitutsiyaviy sud, Oliy sud sudyalari, Sudyalar oliy kengashini va korrupsiyaga qarshi kurashish organi rahbarini",
      "Bosh prokuror o'rinbosarlari hamda viloyat sudlarining barcha raislarini",
      "Markaziy bank boshqaruvi a'zolari hamda Hisob palatasining barcha auditorlarini"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) Konstitutsiyaviy sud, Oliy sud sudyalari, Sudyalar oliy kengashini va korrupsiyaga qarshi kurashish organi rahbarini. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 95-modda."
  },
  "konst-new-130": {
    question: "O'zbekiston Respublikasida qonunchilik tashabbusi huquqi kimlarga tegishli?",
    options: [
      "Prezident, Qonunchilik palatasi deputatlari, Qoraqalpog'iston Jo'qorg'i Kengesi, Vazirlar Mahkamasi, oliy sudlar va Bosh prokurorga",
      "faqat Qonunchilik palatasining tegishli qo'mitalari va siyosiy partiyalar fraksiyalariga",
      "barcha vazirliklar, davlat qo'mitalari hamda viloyat hokimlariga",
      "Inson huquqlari bo'yicha vakil (Ombudsman) va fuqarolik jamiyati institutlariga"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) Prezident, Qonunchilik palatasi deputatlari, Qoraqalpog'iston Jo'qorg'i Kengesi, Vazirlar Mahkamasi, oliy sudlar va Bosh prokurorga. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 98-modda."
  },
  "konst-new-135": {
    question: "O'zbekiston Respublikasining Prezidenti qanday konstitutsiyaviy maqomga ega?",
    options: [
      "ijro etuvchi hokimiyat boshlig'i bo'lib, Vazirlar Mahkamasini to'g'ridan-to'g'ri boshqaradi",
      "davlat boshlig'idir va davlat hokimiyati organlarining kelishilgan holda faoliyat yuritishini ta'minlaydi",
      "parlament palatalarining faxriy raisi hisoblanadi",
      "sud hokimiyati va huquqni muhofaza qiluvchi barcha tizimlar ustidan bevosita rahbarlik qiladi"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) davlat boshlig'idir va davlat hokimiyati organlarining kelishilgan holda faoliyat yuritishini ta'minlaydi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 105-modda."
  },
  "konst-new-138": {
    question: "Ayni bir shaxs surunkasiga necha muddatdan ortiq O'zbekiston Respublikasi Prezidenti bo'lishi mumkin emas?",
    options: [
      "bir muddatdan (7 yil)",
      "ikki muddatdan (jami 14 yil)",
      "uch muddatdan (jami 21 yil)",
      "muddatlar soni cheklanmagan, faqat yosh chegarasi belgilanadi"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) ikki muddatdan (jami 14 yil). Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 106-modda: 'Ayni bir shaxs surunkasiga ikki muddatdan ortiq O‘zbekiston Respublikasining Prezidenti bo‘lishi mumkin emas.'"
  },
  "konst-new-148": {
    question: "O'zbekiston Respublikasi Vazirlar Mahkamasining tarkibi kimlardan iborat?",
    options: [
      "Bosh vazir, uning o'rinbosarlari, vazirlar va o'z lavozimi bo'yicha Qoraqalpog'iston hukumati boshlig'idan",
      "Bosh vazir, uning o'rinbosarlari hamda viloyatlar va Toshkent shahar hokimlaridan",
      "Prezident Administratsiyasi rahbarlari hamda vazirlik va davlat qo'mitalari raislaridan",
      "faqat Qonunchilik palatasi deputatlari orasidan saylangan komissiya a'zolaridan"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) Bosh vazir, uning o'rinbosarlari, vazirlar va o'z lavozimi bo'yicha Qoraqalpog'iston hukumati boshlig'idan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 114-modda."
  },
  "konst-new-151": {
    question: "O'zbekiston Respublikasi Bosh vazirining asosiy vakolatlari nimadan iborat?",
    options: [
      "Prezident farmonlariga veto qo'yish va qonun loyihalarini yakka tartibda qabul qilish",
      "Vazirlar Mahkamasi faoliyatini tashkil etadi, samarali ishlashi uchun javob beradi va qarorlarni imzolaydi",
      "Konstitutsiyaviy sud sudyalarining faoliyatini nazorat qiladi va sud qarorlarini tasdiqlaydi",
      "mahalliy davlat hokimiyati organlariga bevosita sud qarorisiz jazolar qo'llash"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) Vazirlar Mahkamasi faoliyatini tashkil etadi, samarali ishlashi uchun javob beradi va qarorlarni imzolaydi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 116-modda."
  },
  "konst-new-153": {
    question: "Hukumat a'zosi yoki Bosh vazirga ishonchsizlik bildirish tashabbusi bilan kimlar chiqishi mumkin?",
    options: [
      "Senat a'zolari umumiy sonining kamida uchdan bir qismi",
      "Qonunchilik palatasi deputatlari umumiy sonining kamida uchdan bir qismi",
      "har qanday fraksiya rahbari yakka tartibda",
      "Hisob palatasining barcha a'zolari birgalikda"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) Qonunchilik palatasi deputatlari umumiy sonining kamida uchdan bir qismi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 118-modda."
  },
  "konst-new-155": {
    question: "Yangi Konstitutsiyaga muvofiq, xalq deputatlari Kengashiga kim rahbarlik qiladi?",
    options: [
      "tegishli viloyat, tuman, shahar hokimi lavozimini egallagan shaxs",
      "deputatlar orasidan qonunga muvofiq saylanadigan Kengash raisi",
      "Oliy Majlis Senati Kengashi tomonidan tayinlanadigan komissar",
      "adliya boshqarmasi rahbari lavozimi bo'yicha"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) deputatlar orasidan qonunga muvofiq saylanadigan Kengash raisi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 120-modda: 'Xalq deputatlari Kengashiga uning deputatlari orasidan qonunga muvofiq saylanadigan rais boshchilik qiladi.'"
  },
  "konst-new-157": {
    question: "Ayni bir shaxs surunkasiga necha muddatdan ortiq ayni bir viloyat, tuman, shahar hokimi etib tayinlanishi mumkin emas?",
    options: [
      "bir muddatdan (5 yil)",
      "ikki muddatdan (jami 10 yil)",
      "uch muddatdan (jami 15 yil)",
      "mahalliy Kengash roziligi bilan cheklanmagan muddatda"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) ikki muddatdan (jami 10 yil). Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 121-modda: 'Ayni bir shaxs surunkasiga ikki muddatdan ortiq ayni bir viloyat, tuman, shahar hokimi lavozimiga tayinlanishi mumkin emas.'"
  },
  "konst-new-158": {
    question: "Xalq deputatlari Kengashlarining mutlaq vakolatlariga nimalar kiradi?",
    options: [
      "viloyat va tuman prokurorlarini lavozimga tayinlash hamda jinoiy ishlarni ko'rib chiqish",
      "mahalliy budjetni qabul qilish, ijrosini nazorat qilish va ijtimoiy dasturlarni tasdiqlash",
      "mamlakat hududida umummajburiy qonunlar qabul qilish va sud hukmlarini bekor qilish",
      "tashqi davlatlar bilan mustaqil ravishda harbiy va iqtisodiy shartnomalar tuzish"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) mahalliy budjetni qabul qilish, ijrosini nazorat qilish va ijtimoiy dasturlarni tasdiqlash. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 122-modda."
  },
  "konst-new-160": {
    question: "Tuman va shaharlarning hokimlari qanday tartibda lavozimga tayinlanadi?",
    options: [
      "O'zbekiston Respublikasi Prezidenti tomonidan to'g'ridan-to'g'ri farmon bilan",
      "aholi tomonidan umumiy, teng va to'g'ridan-to'g'ri saylov yo'li bilan",
      "viloyat (Toshkent shahar) hokimi tomonidan tayinlanadi va tegishli Kengash tasdiqlaydi",
      "Vazirlar Mahkamasi taqdimiga binoan Oliy Majlis Senati tomonidan"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) viloyat (Toshkent shahar) hokimi tomonidan tayinlanadi va tegishli Kengash tasdiqlaydi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 123-modda."
  },
  "konst-new-161": {
    question: "Viloyat, tuman va shahar hokimi o'z vakolatlarini qanday tamoyil asosida amalga oshiradi?",
    options: [
      "tegishli Kengash deputatlari bilan kollegial kelishuv asosida",
      "yakkaboshchilik asosida hamda qabul qilgan qarorlari uchun shaxsan javob beradi",
      "adliya boshqarmasining majburiy dastlabki roziligi asosida",
      "boshqa hududlar hokimlari kengashining umumiy qaroriga binoan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) yakkaboshchilik asosida hamda qabul qilgan qarorlari uchun shaxsan javob beradi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 124-modda."
  },
  "konst-new-162": {
    question: "Shaharcha, qishloq, ovul va mahallalardagi o'zini o'zi boshqarish organlari qanday maqomga ega?",
    options: [
      "mahalliy ijro hokimiyati tizimiga kiruvchi davlat organi hisoblanadi",
      "fuqarolar yig'inlari bo'lib, davlat hokimiyati organlari tizimiga kirmaydi",
      "viloyat hokimining bevosita hududiy bo'limi va quyi apparati hisoblanadi",
      "faqat jamoat tartibini saqlash bo'yicha maxsus politsiya bo'linmasidir"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) fuqarolar yig'inlari bo'lib, davlat hokimiyati organlari tizimiga kirmaydi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 127-modda."
  },
  "konst-new-163": {
    question: "Konstitutsiyaning 128-moddasiga ko'ra O'zbekiston fuqarolari saylov bo'yicha qanday huquqqa ega?",
    options: [
      "davlat hokimiyati vakillik organlariga saylash va saylanish huquqiga (bir saylovchi bir ovoz)",
      "faqat yashash joyidagi mahalliy o'zini o'zi boshqarish organlariga saylash huquqiga",
      "davlat idoralariga tanlovsiz va imtihonsiz to'g'ridan-to'g'ri tayinlanish huquqiga",
      "sudyalarni umumxalq ovoz berish yo'li bilan muddatli saylash huquqiga"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) davlat hokimiyati vakillik organlariga saylash va saylanish huquqiga (bir saylovchi bir ovoz). Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 128-modda."
  },
  "konst-new-164": {
    question: "O'zbekiston Respublikasi Prezidenti va parlament palatalari saylovlari qachon o'tkaziladi?",
    options: [
      "vakolat muddati tugaydigan yilda — oktabr oyi uchinchi o'n kunligining birinchi yakshanbasida",
      "har besh yilda — dekabr oyining birinchi yakshanbasida",
      "vakolat muddati tugaganidan so'ng bir oy ichidagi istalgan ish kunida",
      "bahorgi sessiya yakunida — may oyining oxirgi shanbasida"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) vakolat muddati tugaydigan yilda — oktabr oyi uchinchi o'n kunligining birinchi yakshanbasida. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 128-modda."
  },
  "konst-new-165": {
    question: "Saylovlarda ovoz berish qanday asosiy prinsiplar bo'yicha amalga oshiriladi?",
    options: [
      "ochiq ovoz berish va jamoaviy delegatsiyalar vositachiligida",
      "umumiy, teng va to'g'ridan-to'g'ri saylov huquqi asosida yashirin ovoz berish yo'li bilan",
      "soliq to'lovchilarning moliyaviy ulushiga mutanosib ravishda ochiq shaklda",
      "partiya yetakchilari orqali bilvosita ovoz berish mexanizmi vositasida"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) umumiy, teng va to'g'ridan-to'g'ri saylov huquqi asosida yashirin ovoz berish yo'li bilan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 128-modda."
  },
  "konst-new-168": {
    question: "O'zbekistonda sud hokimiyati kimlardan mustaqil holda ish yuritadi?",
    options: [
      "faqat Ichki ishlar vazirligi va prokuratura organlaridan",
      "qonun chiqaruvchi va ijro etuvchi hokimiyatdan, siyosiy partiyalardan, boshqa institutlardan",
      "faqat mahalliy hokimiyat organlari va jamoat komissiyalaridan",
      "faqat xorijiy davlatlar va xalqaro nodavlat tashkilotlaridan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) qonun chiqaruvchi va ijro etuvchi hokimiyatdan, siyosiy partiyalardan, boshqa institutlardan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 130-modda."
  },
  "konst-new-169": {
    question: "O'zbekiston Respublikasida sud tizimi va sudlar faoliyatining tartibi nima bilan belgilanadi?",
    options: [
      "faqat O'zbekiston Respublikasi Konstitutsiyasi bilan",
      "Oliy sud Plenumi va Sudyalar oliy kengashi qarorlari bilan",
      "qonun bilan",
      "O'zbekiston Respublikasining Konstitutsiyaviy qonunlari bilan"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) qonun bilan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 131-modda: 'O‘zbekiston Respublikasida sud tizimi va sudlar faoliyatining tartibi qonun bilan belgilanadi.'"
  },
  "konst-new-170": {
    question: "O'zbekiston Respublikasi Konstitutsiyaviy sudi qanday toifadagi ishlarni ko'rib chiqadi?",
    options: [
      "og'ir jinoyatlar va korrupsiya bo'yicha jinoiy ishlarni",
      "xo'jalik yurituvchi subyektlar o'rtasidagi yirik iqtisodiy nizolarni",
      "qonun chiqaruvchi va ijro etuvchi hokimiyat hujjatlarining Konstitutsiyaga muvofiqligini",
      "fuqarolarning ma'muriy huquqbuzarliklar bo'yicha jarimalariga doir shikoyatlarini"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) qonun chiqaruvchi va ijro etuvchi hokimiyat hujjatlarining Konstitutsiyaga muvofiqligini. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 133-modda."
  },
  "konst-new-172": {
    question: "O'zbekiston Respublikasi Oliy sudi qanday maqomdagi organ hisoblanadi?",
    options: [
      "barcha sudyalarni ishga qabul qiluvchi va ma'muriy jazolovchi idora",
      "fuqarolik, jinoiy, iqtisodiy va ma'muriy sud ishlarini yuritish sohasida oliy sud organi",
      "faqat harbiy tribunal va davlat sirlari bo'yicha ishlarni ko'ruvchi yopiq organ",
      "qonunlarning Konstitutsiyaga muvofiqligini tekshiruvchi yagona konstitutsiyaviy organ"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) fuqarolik, jinoiy, iqtisodiy va ma'muriy sud ishlarini yuritish sohasida oliy sud organi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 134-modda."
  },
  "konst-new-173": {
    question: "O'zbekiston Respublikasi Sudyalar oliy kengashi qanday organ hisoblanadi?",
    options: [
      "sudyalar korpusini shakllantiruvchi va mustaqillik prinsipini ta'minlovchi mustaqil organ",
      "Adliya vazirligining sud ijrosi bo'yicha maxsus nazorat departamenti",
      "Bosh prokuratura huzuridagi sudyalarni tergov qiluvchi intizomiy qo'mita",
      "faqat sudyalarning maosh va pensiya ta'minotini hisoblovchi moliya idorasi"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) sudyalar korpusini shakllantiruvchi va mustaqillik prinsipini ta'minlovchi mustaqil organ. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 135-modda."
  },
  "konst-new-174": {
    question: "Konstitutsiyaga ko'ra sudyalarning maqomi va faoliyati haqida nima belgilangan?",
    options: [
      "tegishli tuman va shahar hokimlari oldida har yili hisobot berishga majburdirlar",
      "mustaqildirlar, faqat Konstitutsiya va qonunga bo'ysunadilar; daxlsizdirlar",
      "ko'rib chiqayotgan ishlari bo'yicha prokurorning majburiy yozma ko'rsatmalarini bajaradilar",
      "faqat advokatlar roziligi mavjud bo'lgandagina yakuniy hukm chiqarish huquqiga egadirlar"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) mustaqildirlar, faqat Konstitutsiya va qonunga bo'ysunadilar; daxlsizdirlar. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 136-modda."
  },
  "konst-new-175": {
    question: "Sudlarda ishlarni ko'rib chiqishning ochiqligi qanday tartibga solinadi?",
    options: [
      "barcha toifadagi ishlar istisnosiz ravishda to'liq yopiq majlislarda ko'riladi",
      "hamma sudlarda ishlar ochiq ko'riladi; yopiq eshitishga qonunda belgilangan hollardagina yo'l qo'yiladi",
      "faqat fuqarolik ishlari ochiq, jinoiy va iqtisodiy ishlar esa doim yopiq ko'riladi",
      "sud majlisining ochiqligi masalasi faqat tergovchi ruxsati bilan hal etiladi"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) hamma sudlarda ishlar ochiq ko'riladi; yopiq eshitishga qonunda belgilangan hollardagina yo'l qo'yiladi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 137-modda."
  },
  "konst-new-176": {
    question: "Qonuniy kuchga kirgan sud hujjatlarining majburiyligi kimlarga taalluqlidir?",
    options: [
      "barcha davlat organlari, tashkilotlar, mansabdor shaxslar hamda fuqarolar uchun",
      "faqat sud jarayonida ishtirok etgan taraflar va ularning advokatlari uchungina",
      "faqat ijroiya hokimiyati organlari uchun (qonun chiqaruvchi organlar bundan mustasno)",
      "faqat ma'muriy jarimaga tortilgan jismoniy shaxslar uchungina"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) barcha davlat organlari, tashkilotlar, mansabdor shaxslar hamda fuqarolar uchun. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 138-modda."
  },
  "konst-new-177": {
    question: "O'zbekiston Respublikasida sud ishlarini yuritish qaysi tillarda amalga oshiriladi?",
    options: [
      "istisnosiz ravishda faqat davlat tilida (o'zbek tilida)",
      "o'zbek tilida, qoraqalpoq tilida yoki ko'pchilik aholi so'zlashadigan tilda",
      "faqat sudya va advokat o'zaro kelishib tanlagan tilda",
      "barcha sudlarda bir vaqtning o'zida parallel uchta tilda"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) o'zbek tilida, qoraqalpoq tilida yoki ko'pchilik aholi so'zlashadigan tilda. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 139-modda."
  },
  "konst-new-180": {
    question: "Advokatning kasbiy faoliyati kafolatlari bo'yicha Konstitutsiyada nima belgilangan?",
    options: [
      "faoliyatiga aralashishga yo'l qo'yilmaydi; himoyasidagi shaxs bilan moneliksiz uchrashishi ta'minlanadi",
      "himoyasidagi shaxs bilan uchrashish uchun prokurorning maxsus ruxsatnomasi talab etiladi",
      "advokat tergov organlariga o'z mijozi sir tutgan ma'lumotlarni oshkor qilishga majburdir",
      "advokat faqat davlat tomonidan belgilangan yozma konspekt asosida gapirishga haqlidir"
    ],
    correctIndex: 0,
    explanation: "To‘g‘ri javob: A) faoliyatiga aralashishga yo'l qo'yilmaydi; himoyasidagi shaxs bilan moneliksiz uchrashishi ta'minlanadi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 142-modda."
  },
  "konst-new-181": {
    question: "Advokat va uning kasbiy faoliyatining konstitutsiyaviy himoyasi qanday belgilanadi?",
    options: [
      "advokatlik byurosi hisobidan moliyalashtiriluvchi xususiy shartnoma asosida",
      "advokat, uning sha'ni, qadr-qimmati va faoliyati davlat himoyasida bo'lib, qonun bilan muhofaza qilinadi",
      "faqat Adliya vazirligi attestatsiya komissiyasining idoraviy himoyasida",
      "xalqaro inson huquqlari tashkilotlarining monitoringi doirasidagina"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) advokat, uning sha'ni, qadr-qimmati va faoliyati davlat himoyasida bo'lib, qonun bilan muhofaza qilinadi. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 143-modda."
  },
  "konst-new-182": {
    question: "O'zbekiston hududida qonunlarning aniq va bir xilda ijro etilishi ustidan nazoratni kim amalga oshiradi?",
    options: [
      "O'zbekiston Respublikasi Konstitutsiyaviy sudi va Oliy sudi",
      "O'zbekiston Respublikasining Bosh prokurori va unga bo'ysunuvchi prokurorlar",
      "Adliya vazirligi hamda uning viloyat va tuman adliya boshqarmalari",
      "Ichki ishlar vazirligi va Davlat xavfsizlik xizmati organlari"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) O'zbekiston Respublikasining Bosh prokurori va unga bo'ysunuvchi prokurorlar. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 144-modda."
  },
  "konst-new-184": {
    question: "Qoraqalpog'iston Respublikasining prokurori qanday tartibda lavozimga tayinlanadi?",
    options: [
      "O'zbekiston Respublikasi Prezidenti tomonidan to'g'ridan-to'g'ri farmon bilan",
      "Jo'qorg'i Kenges tomonidan O'zbekiston Bosh prokurori bilan kelishilgan holda",
      "O'zbekiston Bosh prokurori tomonidan Jo'qorg'i Kengesga xabar bermasdan mustaqil ravishda",
      "Qoraqalpog'iston Respublikasi Vazirlar Kengashi raisi taqdimiga binoan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) Jo'qorg'i Kenges tomonidan O'zbekiston Bosh prokurori bilan kelishilgan holda. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 146-modda."
  },
  "konst-new-188": {
    question: "O'zbekiston Respublikasining Davlat budjeti tarkibiy jihatdan nimalardan iborat?",
    options: [
      "faqat respublika budjeti hamda xorijiy investitsiya fondlaridan",
      "respublika budjetidan, Qoraqalpog'iston budjetidan va mahalliy budjetlardan",
      "Markaziy bank aktivlari hamda tijorat banklarining zaxira fondlaridan",
      "barcha davlat unitar korxonalarining sof yillik foydalaridan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) respublika budjetidan, Qoraqalpog'iston budjetidan va mahalliy budjetlardan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 150-modda."
  },
  "konst-new-189": {
    question: "O'zbekiston Respublikasi hududida soliqlarni joriy qilish huquqi kimga tegishlidir?",
    options: [
      "O'zbekiston Respublikasi Soliq qo'mitasi va Moliya vazirligiga",
      "Vazirlar Mahkamasining normativ qarorlariga",
      "O'zbekiston Respublikasining Oliy Majlisiga",
      "O'zbekiston Respublikasi Prezidentining qarorlariga"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) O'zbekiston Respublikasining Oliy Majlisiga. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 151-modda: 'Soliqlar va yig‘imlarni belgilash hamda bekor qilish huquqi O‘zbekiston Respublikasi Oliy Majlisiga tegishlidir.'"
  },
  "konst-new-193": {
    question: "O'zbekiston Respublikasi Qurolli Kuchlari nima maqsadda tuziladi?",
    options: [
      "hududiy ekspansiya va xalqaro koalitsiyalarning chet eldagi amaliyotlarida qatnashish uchun",
      "davlat suverenitetini, hududiy yaxlitligini, aholining tinch hayoti va xavfsizligini himoya qilish uchun",
      "ichki siyosiy muxolifat va partiyalar ustidan qurolli nazorat olib borish uchun",
      "faqat davlat chegarasida bojxona bojlarini undirish va tekshiruvlar o'tkazish uchun"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) davlat suverenitetini, hududiy yaxlitligini, aholining tinch hayoti va xavfsizligini himoya qilish uchun. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 153-modda."
  },
  "konst-new-197": {
    question: "Konstitutsiyaga o'zgartirish kiritish to'g'risidagi qonun Oliy Majlisda qanday ko'pchilik ovoz bilan qabul qilinadi?",
    options: [
      "majlisda qatnashayotgan deputatlar va senatorlarning oddiy ko'pchiligi bilan",
      "palatalar a'zolari umumiy sonining kamida uchdan ikki qismidan iborat ko'pchiligi bilan",
      "har ikki palata a'zolari umumiy sonining to'rtdan uch qismidan iborat ko'pchiligi bilan",
      "Qonunchilik palatasi deputatlarining ellik foizi va Senat a'zolarining bir ovoz ustunligi bilan"
    ],
    correctIndex: 1,
    explanation: "To‘g‘ri javob: B) palatalar a'zolari umumiy sonining kamida uchdan ikki qismidan iborat ko'pchiligi bilan. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 155-modda."
  },
  "konst-new-200": {
    question: "Konstitutsiyaga o'zgartirishlar va qo'shimchalar kiritish to'g'risidagi qonunni qabul qilish qaysi subyekt yoki mexanizm orqali amalga oshiriladi?",
    options: [
      "faqat Konstitutsiyaviy sud xulosasi asosida O'zbekiston Respublikasi Prezidenti farmoni bilan",
      "Vazirlar Mahkamasining taqdimiga asosan Adliya vazirligi tomonidan",
      "Oliy Majlis palatalari deputat va senatorlari umumiy sonining kamida 2/3 qismi yoki referendum orqali",
      "faqat umumxalq referendumi o'tkazish yo'li bilan (parlament qabul qilishi qat'iyan taqiqlangan)"
    ],
    correctIndex: 2,
    explanation: "To‘g‘ri javob: C) Oliy Majlis palatalari deputat va senatorlari umumiy sonining kamida 2/3 qismi yoki referendum orqali. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, 155-modda."
  }
};

let updatedCount = 0;
const updatedList = existingQuestions.map(q => {
  if (enhancedMap[q.id]) {
    updatedCount++;
    const enh = enhancedMap[q.id];
    return {
      ...q,
      question: enh.question || q.question,
      options: enh.options,
      correctIndex: enh.correctIndex,
      explanation: enh.explanation,
      difficulty: q.difficulty // keep or adjust
    };
  }
  return q;
});

console.log("Directly enhanced curated questions:", updatedCount);
fs.writeFileSync("konst_updated.json", JSON.stringify(updatedList, null, 2));

module.exports = { enhancedMap };
