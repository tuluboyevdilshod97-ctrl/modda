const fs = require('fs');
let content = fs.readFileSync('src/data/darslik8Complete.ts', 'utf8');

const additionalTerms = [
  { term: 'Oila', definition: 'Qonun-qoidalarga asoslangan, umumiy turmush va o‘zaro mas’uliyat bilan bog‘langan kishilar guruhi.' },
  { term: 'Mehnat shartnomasi', definition: 'Xodim va ish beruvchi o‘rtasida tuziladigan, xodimning ma’lum mutaxassislik bo‘yicha ishlashini va ish beruvchining unga ish haqi to‘lashini kafolatlovchi kelishuv.' },
  { term: 'Jarima', definition: 'Qonunbuzarlik uchun davlat foydasiga undiriladigan pul undiruvi shaklidagi jazo chorasi.' },
  { term: 'Huquq layoqati', definition: 'Shaxsning fuqarolik huquq va majburiyatlarga ega bo‘la olish qobiliyati. Tug‘ilgan paytdan boshlanadi.' },
  { term: 'Muomala layoqati', definition: 'Shaxsning o‘z harakatlari bilan fuqarolik huquq va majburiyatlarni vujudga keltirish qobiliyati. To‘liq muomala layoqati 18 yoshdan boshlanadi.' },
  { term: 'Prokuratura', definition: 'Qonunlarning aniq va bir xilda bajarilishi ustidan nazoratni amalga oshiruvchi davlat organi.' },
  { term: 'Sud', definition: 'Odil sudlovni amalga oshiruvchi, fuqarolarning huquqlarini himoya qiluvchi davlat organi.' },
  { term: 'Xususiy mulk', definition: 'Shaxsning o‘ziga tegishli bo‘lgan mol-mulkka nisbatan egalik qilish, foydalanish va tasarruf etish huquqi.' },
  { term: 'Davlat ramzlari', definition: 'Davlatning suvereniteti va mustaqilligini ifodalovchi belgilar: bayroq, gerb va madhiya.' },
  { term: 'Vasiylik', definition: '14 yoshgacha bo‘lgan yetim bolalarni yoxud sud tomonidan muomalaga layoqatsiz deb topilgan fuqarolarni himoya qilish shakli.' },
  { term: 'Homiylik', definition: '14 yoshdan 18 yoshgacha bo‘lgan voyaga yetmaganlarni va muomala layoqati cheklanganlarni himoya qilish shakli.' },
  { term: 'Dalil', definition: 'Jinoyat ishi yoki fuqarolik ishi bo‘yicha haqiqatni aniqlash uchun ahamiyatga ega bo‘lgan har qanday ma’lumotlar.' },
  { term: 'Gumon qilinuvchi', definition: 'Jinoyat sodir etganlikda shubha qilinib ushlangan yoki unga nisbatan qamoqqa olish ehtiyot chorasi qo‘llanilgan shaxs.' },
  { term: 'Ayblanuvchi', definition: 'Qonunda belgilangan tartibda jinoyat ishi bo‘yicha ayblanuvchi tariqasida ishda ishtirok etishga jalb qilingan shaxs.' },
  { term: 'Sudlanuvchi', definition: 'O‘ziga nisbatan jinoyat ishi sudda ko‘rilishi tayinlangan ayblanuvchi.' },
  { term: 'Voyaga yetmagan', definition: '18 yoshga to‘lmagan shaxs.' },
  { term: 'Saylov huquqi', definition: 'Fuqarolarning davlat hokimiyati organlariga saylash va saylanish huquqi.' },
  { term: 'Referendum', definition: 'Davlat va jamiyat hayotining eng muhim masalalari bo‘yicha o‘tkaziladigan umumxalq ovoz berishi.' },
  { term: 'Notarius', definition: 'Bitimlarni, vasiyatnomalarni va boshqa huquqiy hujjatlarni tasdiqlovchi, yuridik ahamiyatga ega bo‘lgan harakatlarni amalga oshiruvchi shaxs.' },
  { term: 'FHDYo (Fuxarolik holati dalolatnomalarini yozish)', definition: 'Tug‘ilish, o‘lim, nikoh va nikohdan ajralish kabi faktlarni davlat ro‘yxatidan o‘tkazuvchi organ.' },
  { term: 'Gipoteza', definition: 'Huquq normasining qaysi sharoitlarda amal qilishini ko‘rsatuvchi qismi.' },
  { term: 'Dispozitsiya', definition: 'Huquq normasining asosiy qismi, ya\'ni xulq-atvor qoidasining o\'zi.' },
  { term: 'Sanksiya', definition: 'Huquq normasini buzganlik uchun qo\'llaniladigan jazo yoki ta\'sir chorasi.' },
  { term: 'Monarxiya', definition: 'Davlat hokimiyati bir shaxs (podshoh, qirol, amir) qo\'lida to\'plangan va meros bo\'lib o\'tadigan boshqaruv shakli.' },
  { term: 'Respublika', definition: 'Davlat hokimiyatining oliy organlari xalq tomonidan ma\'lum muddatga saylanadigan boshqaruv shakli.' },
  { term: 'Avtoritarizm', definition: 'Hokimiyat bir kishi yoki kichik guruh qo\'lida to\'plangan, demokratik huquqlar cheklangan siyosiy rejim.' },
  { term: 'Totalitarizm', definition: 'Davlat jamiyat hayotining barcha sohalarini to\'liq nazorat qiladigan, inson huquqlari butunlay poymol etiladigan siyosiy rejim.' },
  { term: 'Korrupsiya', definition: 'Mansabdor shaxsning o\'z xizmat mavqeidan shaxsiy manfaatlari yo\'lida foydalanishi.' },
  { term: 'Iste\'molchi', definition: 'Shaxsiy ehtiyojlari uchun tovar (ish, xizmat) sotib oluvchi, buyurtma qiluvchi yoki shunday niyatda bo\'lgan fuqaro.' },
  { term: 'Oliy Majlis', definition: 'O\'zbekiston Respublikasining oliy davlat vakillik va qonun chiqaruvchi organi.' },
  { term: 'Senat', definition: 'O\'zbekiston Respublikasi Oliy Majlisining hududiy vakillik palatasi.' },
  { term: 'Qonunchilik palatasi', definition: 'O\'zbekiston Respublikasi Oliy Majlisining quyi, doimiy ishlovchi palatasi.' },
  { term: 'Konstitutsiyaviy sud', definition: 'Qonun chiqaruvchi va ijro etuvchi hokimiyat hujjatlarining Konstitutsiyaga mosligini ko\'rib chiquvchi oliy sud organi.' },
  { term: 'Vasiyatnoma', definition: 'Fuqaroning o\'zi vafot etgan taqdirda o\'ziga tegishli mol-mulkni tasarruf etish bo\'yicha xohish-irodasi.' },
  { term: 'Meros', definition: 'Vafot etgan shaxsdan uning merosxo\'rlariga o\'tadigan mol-mulk va mulkiy huquqlar.' },
  { term: 'Qonun', definition: 'Davlatning oliy vakillik organi tomonidan qabul qilinadigan, eng yuksak yuridik kuchga ega bo\'lgan normativ-huquqiy hujjat.' },
  { term: 'Farmon', definition: 'Prezident tomonidan qabul qilinadigan, muhim davlat ahamiyatiga ega normativ-huquqiy hujjat.' },
  { term: 'Qaror', definition: 'Ijro etuvchi hokimiyat organlari (Vazirlar Mahkamasi, hokimlar) yoki sudlar tomonidan qabul qilinadigan hujjat.' },
  { term: 'Majburiyat', definition: 'Bir shaxs (qarzdor) boshqa shaxs (kreditor) foydasiga muayyan harakatni amalga oshirishga yoki harakatdan o\'zini tiyishga majbur bo\'ladigan huquqiy munosabat.' },
  { term: 'Kreditor', definition: 'Majburiyat munosabatida talab qilish huquqiga ega bo\'lgan taraf.' },
  { term: 'Qarzdor', definition: 'Majburiyat munosabatida ma\'lum harakatni bajarishi shart bo\'lgan taraf.' },
  { term: 'Shartnoma', definition: 'Ikki yoki undan ortiq shaxsning fuqarolik huquq va majburiyatlarini belgilash, o\'zgartirish yoki bekor qilish to\'g\'risidagi kelishuvi.' },
  { term: 'Intizomiy jazo', definition: 'Mehnat intizomini buzgan xodimga nisbatan ish beruvchi tomonidan qo\'llaniladigan chora (hayfsan, jarima, ishdan bo\'shatish).' },
  { term: 'Ekstraditsiya', definition: 'Jinoyat sodir etgan shaxsni u jinoyat sodir etgan yoki qidirilayotgan davlatga topshirish.' }
];

let glossaryMatch = content.match(/glossary:\s*\[([\s\S]*?)\]\n\};/);
if (glossaryMatch) {
  let existingGlossary = glossaryMatch[1];
  let newGlossaryItems = additionalTerms.map(item => `    { term: '${item.term.replace(/'/g, "\\'")}', definition: '${item.definition.replace(/'/g, "\\'")}' }`).join(',\n');
  let newContent = content.replace(glossaryMatch[0], `glossary: [\n${existingGlossary},\n${newGlossaryItems}\n  ]\n};`);
  fs.writeFileSync('src/data/darslik8Complete.ts', newContent);
  console.log("Added terms.");
} else {
  console.log("Could not find glossary array.");
}
