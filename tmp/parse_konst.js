const fs = require('fs');

const rawText = `1. O'zbekiston qanday davlat hisoblanadi?
   A) unitar monarxiya
   B) boshqaruvning respublika shakliga ega bo'lgan suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat
   C) federal parlamentar respublika
   D) teokratik davlat
   JAVOB: B
   ASOS: 1-modda

2. "O'zbekiston Respublikasi" va "O'zbekiston" degan nomlari nimani anglatadi?
   A) turli ma'nonlarni anglatadi
   B) faqat xalqaro hujjatlarda ishlatiladi
   C) bir ma'noni anglatadi
   D) birinchisi eskirgan nomdir
   JAVOB: C
   ASOS: 1-modda

3. Davlat organlari va mansabdor shaxslar kim oldida mas'uldirlar?
   A) faqat Prezident oldida
   B) xalqaro tashkilotlar oldida
   C) jamiyat va fuqarolar oldida
   D) faqat sud oldida
   JAVOB: C
   ASOS: 2-modda

4. O'zbekistonning davlat chegarasi va hududi qanday?
   A) referendum bilan o'zgartirilishi mumkin
   B) daxlsiz va bo'linmasdir
   C) qo'shni davlatlar roziligida belgilanadi
   D) faqat ichki qonunlar bilan belgilanadi
   JAVOB: B
   ASOS: 3-modda

5. O'zbekiston Respublikasining davlat tili qaysi til?
   A) rus tili
   B) qoraqalpoq tili
   C) o'zbek tili
   D) ikki tilda
   JAVOB: C
   ASOS: 4-modda

6. O'zbekiston Respublikasining davlat ramzlari qaysilar?
   A) faqat bayroq va gerb
   B) Konstitutsiya, bayroq va gerb
   C) bayroq, gerb va madhiya
   D) gerb, madhiya va poytaxt
   JAVOB: C
   ASOS: 5-modda

7. O'zbekiston Respublikasining poytaxti qaysi shahar?
   A) Samarqand
   B) Buxoro
   C) Nukus
   D) Toshkent shahri
   JAVOB: D
   ASOS: 6-modda

8. Davlat hokimiyatining birdan-bir manbasi kim hisoblanadi?
   A) Prezident
   B) Oliy Majlis
   C) Konstitutsiya
   D) xalq
   JAVOB: D
   ASOS: 7-modda

9. O'zbekiston Respublikasida davlat hokimiyati qanday organlar tomonidan amalga oshiriladi?
   A) har qanday saylangan organ tomonidan
   B) fuqarolik jamiyati institutlari tomonidan
   C) Konstitutsiya hamda uning asosida qabul qilingan qonunlar vakolat bergan organlar tomonidangina
   D) siyosiy partiyalar tomonidan
   JAVOB: C
   ASOS: 7-modda

10. O'zbekiston xalqini kimlar tashkil etadi?
   A) millatidan qat'i nazar, O'zbekiston Respublikasining fuqarolari
   B) faqat o'zbek millati vakillari
   C) O'zbekistonda doimiy yashovchi barcha shaxslar
   D) 18 yoshga to'lgan barcha shaxslar
   JAVOB: A
   ASOS: 8-modda

11. Jamiyat va davlat hayotining eng muhim masalalari qanday hal etiladi?
   A) hukumat qarori bilan
   B) Prezident farmoni bilan
   C) sud muhokamasida
   D) xalq muhokamasiga taqdim etiladi hamda umumxalq ovoziga — referendumga qo'yiladi
   JAVOB: D
   ASOS: 9-modda

12. O'zbekiston xalqi nomidan ish olib borishga kimlar haqli?
   A) barcha davlat organlari
   B) siyosiy partiyalar
   C) faqat xalq saylagan O'zbekiston Respublikasi Oliy Majlisi va Prezidenti
   D) fuqarolik jamiyati institutlari
   JAVOB: C
   ASOS: 10-modda

13. O'zbekiston Respublikasi davlat hokimiyatining tizimi qaysi prinsipga asoslanadi?
   A) hokimiyatning bir butunligi prinsipiga
   B) hokimiyatning siyosiy partiyalarga tegishliligi prinsipiga
   C) markazlashuv prinsipiga
   D) hokimiyatning qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo'linishi prinsipiga
   JAVOB: D
   ASOS: 11-modda

14. O'zbekiston Respublikasida ijtimoiy hayot nimalar asosida rivojlanadi?
   A) yagona davlat mafkurasi asosida
   B) faqat diniy qadriyatlar asosida
   C) bitta siyosiy partiya siyosati asosida
   D) siyosiy institutlar, mafkuralar va fikrlarning xilma-xilligi asosida
   JAVOB: D
   ASOS: 12-modda

15. O'zbekiston Respublikasida demokratiya qanday prinsiplarga asoslanadi?
   A) milliy mafkuraga
   B) partiyaviy dasturlarga
   C) umuminsoniy prinsiplarga
   D) diniy qoidalarga
   JAVOB: C
   ASOS: 13-modda

16. Demokratiya umuminsoniy prinsiplariga ko'ra nima oliy qadriyat hisoblanadi?
   A) davlat manfaati
   B) iqtisodiy o'sish
   C) inson, uning hayoti, erkinligi, sha'ni, qadr-qimmati va boshqa ajralmas huquqlari
   D) hududiy yaxlitlik
   JAVOB: C
   ASOS: 13-modda

17. Davlat o'z faoliyatini qaysi prinsiplar asosida amalga oshiradi?
   A) qonuniylik, ijtimoiy adolat va birdamlik prinsiplari asosida
   B) ko'pchilikning irodasi asosida
   C) bozor iqtisodiyoti talablari asosida
   D) xalqaro hamkorlik prinsiplari asosida
   JAVOB: A
   ASOS: 14-modda

18. O'zbekiston Respublikasining Konstitutsiyasi qanday kuchga ega?
   A) mamlakatning butun hududida oliy yuridik kuchga; to'g'ridan-to'g'ri amal qiladi
   B) maslahat kuchiga
   C) faqat sudlarda qo'llanadigan kuchga
   D) qonunlar bilan kuchaytirilgandagina amal qiladi
   JAVOB: A
   ASOS: 15-modda

19. Mamlakatdagi yagona huquqiy makonning asosini nima tashkil etadi?
   A) O'zbekiston Respublikasining Konstitutsiyasi
   B) Prezident farmonlari
   C) Vazirlar Mahkamasi qarorlari
   D) mahalliy normativ-huquqiy hujjatlar
   JAVOB: A
   ASOS: 15-modda

20. Konstitutsiyaning birorta qoidasi qanday talqin etilishi mumkin emas?
   A) O'zbekiston Respublikasining huquq va manfaatlariga, Konstitutsiyaning birinchi bo'limidagi asosiy prinsip va normalarga zarar yetkazadigan tarzda
   B) davlat manfaatlariga mos holda
   C) sud amaliyoti bilan bog'liq holda
   D) xalqaro shartnomalar asosida
   JAVOB: A
   ASOS: 16-modda

21. O'zbekiston Respublikasining qonunlari va boshqa normativ-huquqiy hujjatlari nima asosida va nimani maqsad qilib qabul qilinadi?
   A) Prezident farmonlarini asos qilib
   B) xalqaro shartnomalarni asos qilib
   C) umumxalq referendumini asos qilib
   D) Konstitutsiyani asos qilib va uni ijro etish yuzasidan
   JAVOB: D
   ASOS: 16-modda

22. O'zbekiston Respublikasi xalqaro munosabatlarda qanday subyekt hisoblanadi?
   A) cheklangan huquqli subyekt
   B) to'la huquqli subyekt
   C) faqat kuzatuvchi
   D) xalqaro tashkilotlarga a'zolikka nomzod
   JAVOB: B
   ASOS: 17-modda

23. O'zbekiston Respublikasining tashqi siyosati qaysi prinsiplarga asoslanadi?
   A) kuch ishlatish va harbiy ittifoqchilik prinsiplariga
   B) yopiq siyosat va izolyatsiya prinsiplariga
   C) davlatlarning suveren tengligi, kuch ishlatmaslik yoki kuch bilan tahdid qilmaslik, chegaralarning buzilmasligi, hududiy yaxlitlik, nizolarni tinch yo'l bilan hal etish, boshqa davlatlarning ichki ishlariga aralashmaslik prinsiplariga
   D) iqtisodiy imtiyozlar olish prinsiplariga
   JAVOB: C
   ASOS: 17-modda

24. O'zbekiston Respublikasi qanday tashqi siyosat olib boradi?
   A) bloklararo kurash siyosati
   B) izolyatsion siyosat
   C) tinchliksevar tashqi siyosat
   D) neytralitetdan voz kechish siyosati
   JAVOB: C
   ASOS: 18-modda

25. Insonning huquq va erkinliklari har kimga qachondan tegishli bo'ladi?
   A) 18 yoshga to'lgandan boshlab
   B) fuqarolik olingandan boshlab
   C) tug'ilganidan boshlab
   D) 16 yoshga to'lgandan boshlab
   JAVOB: C
   ASOS: 19-modda

26. Insonning huquq va erkinliklari nimaga binoan e'tirof etiladi va kafolatlanadi?
   A) faqat milliy qonunchilikka muvofiq
   B) xalqaro huquqning umume'tirof etilgan normalariga binoan hamda Konstitutsiyaga muvofiq
   C) Prezident farmoniga binoan
   D) sud amaliyotiga ko'ra
   JAVOB: B
   ASOS: 19-modda

27. O'zbekiston Respublikasi fuqarosi va davlat bir-biriga nisbatan nima bilan bog'liqdir?
   A) faqat soliq majburiyatlari bilan
   B) o'zaro huquq va majburiyatlar bilan
   C) shartnomaviy munosabatlar bilan
   D) a'zolik munosabatlari bilan
   JAVOB: B
   ASOS: 20-modda

28. Insonning Konstitutsiya va qonunlarda mustahkamlangan huquq va erkinliklaridan kimning qarorisiz mahrum etishga hech kim haqli emas?
   A) sud
   B) prokuror
   C) hokim
   D) ichki ishlar organi rahbari
   JAVOB: A
   ASOS: 20-modda

29. O'zbekiston Respublikasining butun hududida qanday fuqarolik o'rnatiladi?
   A) ikki darajali fuqarolik
   B) hududiy fuqarolik
   C) ixtiyoriy fuqarolik
   D) yagona fuqarolik
   JAVOB: D
   ASOS: 22-modda

30. Qoraqalpog'iston Respublikasining fuqarosi kim hisoblanadi?
   A) ayni vaqtda O'zbekiston Respublikasining fuqarosi
   B) faqat Qoraqalpog'iston Respublikasining fuqarosi
   C) ikkita alohida fuqarolikka ega shaxs
   D) alohida maqomga ega bo'lmagan shaxs
   JAVOB: A
   ASOS: 22-modda

31. O'zbekiston Respublikasi fuqarosi O'zbekistondan tashqariga majburiy chiqarib yuborilishi yoki boshqa davlatga berib yuborilishi mumkinmi?
   A) jinoyat sodir etgan hollarda mumkin
   B) xalqaro sud qarori bilan mumkin
   C) mumkin emas
   D) ikki fuqarolikda bo'lganda mumkin
   JAVOB: C
   ASOS: 23-modda

32. Davlat xorijda yashayotgan vatandoshlar bilan aloqalarni qanday saqlaydi?
   A) faqat elchixonalar orqali
   B) haq to'lanadigan vakillik orqali
   C) xalqaro huquq normalariga muvofiq g'amxo'rlik qilish va aloqalarni rivojlantirish to'g'risida
   D) alohida aloqa yo'lga qo'ymaydi
   JAVOB: C
   ASOS: 23-modda

33. O'zbekiston Respublikasi hududidagi chet el fuqarolari va fuqaroligi bo'lmagan shaxslarning huquq va erkinliklari nima asosida ta'minlanadi?
   A) mahalliy qarorlar asosida
   B) xalqaro huquq normalariga muvofiq
   C) maxsus ruxsatnoma asosida
   D) Prezident farmoni asosida
   JAVOB: B
   ASOS: 24-modda

34. Yashash huquqi qanday huquq hisoblanadi?
   A) har bir insonning ajralmas huquqi bo'lib, u qonun bilan muhofaza qilinadi
   B) faqat fuqarolarga tegishli huquq
   C) sud tomonidan beriladigan huquq
   D) iqtisodiy imkoniyatga bog'liq huquq
   JAVOB: A
   ASOS: 25-modda

35. O'zbekiston Respublikasida o'lim jazosi qanday?
   A) ayrim og'ir jinoyatlar uchun qo'llanadi
   B) sud qarori bilan qo'llaniladi
   C) taqiqlanadi
   D) favqulodda holatda qo'llanadi
   JAVOB: C
   ASOS: 25-modda

36. Konstitutsiyaga ko'ra qiynoqqa solish haqida nima deyilgan?
   A) tergov davrida yo'l qo'yiladi
   B) ayrim hollarda yo'l qo'yiladi
   C) hech kim qiynoqqa solinishi, zo'ravonlikka, boshqa shafqatsiz, g'ayriinsoniy yoki inson qadr-qimmatini kamsituvchi muomalaga yoxud jazoga duchor etilishi mumkin emas
   D) maxsus rejimli muassasalarda qo'llanadi
   JAVOB: C
   ASOS: 26-modda

37. Tibbiy va ilmiy tajribalar o'tkazilishi haqida Konstitutsiyada nima deyilgan?
   A) davlat buyrug'i bilan o'tkaziladi
   B) favqulodda holatlarda majburiy o'tkaziladi
   C) hech kimda uning roziligisiz o'tkazilishi mumkin emas
   D) 18 yoshga to'lgan shaxslarga nisbatan majburiy o'tkaziladi
   JAVOB: C
   ASOS: 26-modda

38. Hibsga olishga, qamoqqa olishga va qamoqda saqlashga qanday asosda yo'l qo'yiladi?
   A) faqat sudning qaroriga ko'ra
   B) prokurorning sanadiga ko'ra
   C) tergovchi qaroriga ko'ra
   D) ma'muriy tartibda
   JAVOB: A
   ASOS: 27-modda

39. Shaxs sudning qarorisiz qancha muddatdan ortiq ushlab turilishi mumkin emas?
   A) yigirma to'rt soatdan
   B) qirq sakkiz soatdan (48 soat)
   C) yetmish ikki soatdan
   D) o'n kundan
   JAVOB: B
   ASOS: 27-modda

40. Aybsizlik prezumpsiyasi mohiyatiga ko'ra ayblanayotgan shaxs qachongacha aybsiz deb hisoblanadi?
   A) tergov yakunlanguncha
   B) uning aybi oshkora sud muhokamasi yo'li bilan isbotlanmaguncha va sudning qonuniy kuchga kirgan hukmi bilan aniqlanmaguncha
   C) ayblanuvchining ikroriga qadar
   D) prokuror ayblanuvchi bo'lmaguncha
   JAVOB: B
   ASOS: 28-modda

41. Malakali yuridik yordam olish huquqi haqida Konstitutsiyada nima kafolatlangan?
   A) har kimga kafolatlanadi; qonunda nazarda tutilgan hollarda yuridik yordam davlat hisobidan ko'rsatiladi
   B) faqat imkoniyati bor shaxslarga yuridik yordam
   C) faqat jinoyat ishlarida yuridik yordam
   D) faqat sud bosqichida yuridik yordam
   JAVOB: A
   ASOS: 29-modda

42. Shaxs advokat yordamidan qachondan foydalanish huquqiga ega?
   A) sud jarayoni boshlangan paytdan
   B) hukm chiqarilgan paytdan
   C) apellyatsiya bosqichidan
   D) shaxs ushlanganida, uning harakatlanish erkinligi huquqi amalda cheklangan paytdan e'tiboran
   JAVOB: D
   ASOS: 29-modda

43. Rasmiy e'lon qilinmagan qonun asosida nima qilish mumkin emas?
   A) hukm qilinishi, jazoga tortilishi, mol-mulkidan yoki biron-bir huquqidan mahrum etilishi
   B) ma'muriy tekshiruv o'tkazish
   C) profilaktik suhbat o'tkazish
   D) ma'muriy nazorat o'rnatish
   JAVOB: A
   ASOS: 30-modda

44. Har kimning yozishmalari, telefon orqali so'zlashuvlari, pochta, elektron va boshqa xabarlari sir saqlanishi huquqining cheklanishiga qanday hollarda yo'l qo'yiladi?
   A) prokuror ruxsati bilan
   B) tergov organi tashabbusi bilan
   C) mahalliy hokim roziligi bilan
   D) faqat qonunga muvofiq va sudning qaroriga asosan
   JAVOB: D
   ASOS: 31-modda

45. Erkin harakatlanish huquqi haqida nima deyilgan?
   A) faqat fuqarolar erkin harakatlanadi
   B) faqat vizaga ega shaxslar harakatlanadi
   C) qonuniy asoslarda O'zbekiston Respublikasi hududida bo'lib turgan har kim mamlakat bo'ylab erkin harakatlanish, turar va yashash joyini tanlash huquqiga ega; fuqaro O'zbekistonga to'sqinliksiz qaytish huquqiga ega
   D) faqat mehnat shartnomasi bo'lgan shaxslar harakatlanadi
   JAVOB: C
   ASOS: 32-modda

46. Axborot huquqiga ko'ra har kim nima qilish huquqiga ega?
   A) istalgan axborotni izlash, olish va tarqatish
   B) davlat sirlarini oshkor qilish
   C) boshqa shaxslarning shaxsiy ma'lumotlarini sotish
   D) ommaviy axborot vositalarini yopish
   JAVOB: A
   ASOS: 33-modda

47. Davlat organlari va tashkilotlari, mansabdor shaxslar o'z huquqlari hamda qonuniy manfaatlariga daxldor bo'lgan hujjatlar, qarorlar va boshqa materiallar bilan tanishish imkoniyatini kim uchun ta'minlashi shart?
   A) faqat huquqbuzarlik sodir etgan shaxslar uchun
   B) har kim uchun
   C) faqat yuridik shaxslar uchun
   D) faqat deputatlar uchun
   JAVOB: B
   ASOS: 34-modda

48. Vijdon erkinligi haqida Konstitutsiyada nima deyilgan?
   A) faqat davlat tomonidan tan olingan dinga e'tiqod erkin
   B) diniy qarashlarni majburan singdirish mumkin
   C) vijdon erkinligi faqat 18 yoshdan keyin amal qiladi
   D) hamma uchun kafolatlanadi; har kim xohlagan dinga e'tiqod qilish yoki hech qaysi dinga e'tiqod qilmaslik huquqiga ega; diniy qarashlarni majburan singdirishga yo'l qo'yilmaydi
   JAVOB: D
   ASOS: 35-modda

49. Fuqarolar jamiyat va davlat ishlarini boshqarishda qanday ishtirok etishadi?
   A) bevosita hamda o'z vakillari orqali
   B) faqat referendum orqali
   C) faqat saylovlar orqali
   D) faqat siyosiy partiyalar orqali
   JAVOB: A
   ASOS: 36-modda

50. Boshqarishda ishtirok etish qanday vositalar orqali amalga oshiriladi?
   A) faqat mitinglar orqali
   B) faqat tashviqot orqali
   C) o'zini o'zi boshqarish, referendumlar o'tkazish, davlat organlarini demokratik tarzda shakllantirish, davlat organlari faoliyati ustidan jamoatchilik nazorati vositasida
   D) faqat ommaviy harakatlar orqali
   JAVOB: C
   ASOS: 36-modda

51. Davlat xizmatiga kirishda qanday huquq belgilangan?
   A) favqulodda imtiyozlar belgilangan
   B) faqat mahalliy kadrlar uchun huquq belgilangan
   C) yosh chegarasi bilan belgilangan
   D) fuqarolar teng huquqqa egadirlar
   JAVOB: D
   ASOS: 37-modda

52. Fuqarolar o'z ijtimoiy faolliklarini qanday shakllarda amalga oshirish huquqiga ega?
   A) ommaviy tartibsizliklar shaklida
   B) mitinglar, yig'ilishlar va namoyishlar shaklida
   C) davlat organlarini blokirovka qilish shaklida
   D) yashirin faoliyat shaklida
   JAVOB: B
   ASOS: 38-modda

53. Hokimiyat organlari miting, yig'ilish va namoyishni qanday holatda to'xtatishi yoki taqiqlashi mumkin?
   A) siyosiy sabablarga ko'ra
   B) ishtirokchilar soniga ko'ra
   C) faqat xavfsizlik nuqtai nazaridan
   D) o'tkazilish vaqtiga ko'ra istalgan hollarda
   JAVOB: C
   ASOS: 38-modda

54. Fuqarolar qanday birlashmalarga uyushish huquqiga egadirlar?
   A) kasaba uyushmalariga, siyosiy partiyalarga va boshqa jamoat birlashmalariga, ommaviy harakatlarda ishtirok etishga
   B) faqat kasaba uyushmalariga
   C) faqat diniy tashkilotlarga
   D) yashirin birlashmalarga
   JAVOB: A
   ASOS: 39-modda

55. Har kim davlat organlariga, mansabdor shaxslarga qanday hujjatlar bilan murojaat qilish huquqiga ega?
   A) faqat xalqaro shikoyatlar bilan
   B) maxfiy murojaatlar bilan
   C) arizalar, takliflar va shikoyatlar bilan
   D) jamoaviy buyruqlar bilan
   JAVOB: C
   ASOS: 40-modda

56. Mulkdor bo'lish huquqi kimga tegishli?
   A) faqat fuqarolarga
   B) faqat yuridik shaxslarga
   C) faqat davlatga
   D) har bir shaxsga
   JAVOB: D
   ASOS: 41-modda

57. Nimalar qonun bilan kafolatlanadi (41-modda)?
   A) faqat meros huquqi
   B) bank operatsiyalarining, omonatlarning va hisobvaraqlarning sir tutilishi, shuningdek meros huquqi
   C) bank seyflaridagi qimmatbaho buyumlar
   D) chet el valyutasidagi hisobvaraqlar
   JAVOB: B
   ASOS: 41-modda

58. Fuqarolar mehnati uchun qanday haq olish huquqiga ega?
   A) mulkdorning irodasi bilan belgilanadigan haq
   B) hech qanday kamsitishlarsiz hamda mehnatga haq to'lashning belgilangan eng kam miqdoridan kam bo'lmagan tarzda adolatli haq
   C) faqat ishlab chiqarish natijalariga qarab haq
   D) oila ehtiyojlariga qarab haq
   JAVOB: B
   ASOS: 42-modda

59. Davlat fuqarolarning bandligini ta'minlash bo'yicha nimalar qiladi?
   A) ish o'rnini majburiy beradi
   B) fuqarolarni chet elga mehnatga majburiy yuboradi
   C) faqat bandlik statistikasini yuritadi
   D) bandlikni ta'minlash, ishsizlikdan himoya qilish, kambag'allikni qisqartirish choralarini ko'radi; kasbiy tayyorgarlik va qayta tayyorlanishni tashkil etadi hamda rag'batlantiradi
   JAVOB: D
   ASOS: 43-modda

60. Majburiy mehnat qanday hollardan tashqari taqiqlanadi?
   A) barcha hollarda majburiy bo'ladi
   B) favqulodda holatda majburiy bo'ladi
   C) qishloq joylarda majburiy bo'ladi
   D) sud qarori bilan tayinlangan jazoni ijro etish tartibidan yoxud qonunda nazarda tutilgan boshqa hollardan tashqari
   JAVOB: D
   ASOS: 44-modda

61. Bolalar mehnatining qanday shakllari taqiqlanadi?
   A) yozgi ta'tildagi mehnat
   B) bolaning sog'lig'iga, xavfsizligiga, axloqiga, aqliy va jismoniy rivojlanishiga xavf soluvchi, shu jumladan uning ta'lim olishiga to'sqinlik qiluvchi har qanday shakllari
   C) uy mehnati
   D) oilaviy xo'jalik mehnati
   JAVOB: B
   ASOS: 44-modda

62. Dam olish huquqi qanday ta'minlanadi?
   A) faqat bayram kunlari orqali
   B) o'zaro kelishuv orqali
   C) tadbirkorlik erkinligi orqali
   D) ish vaqtining davomiyligini, dam olish va ishlanmaydigan bayram kunlarini, haq to'lanadigan har yilgi mehnat ta'tilini belgilash orqali
   JAVOB: D
   ASOS: 45-modda

63. Ijtimoiy ta'minot huquqi qaysi hollarda beriladi?
   A) qariganda, mehnat qobiliyatini yo'qotganda, ishsizlikda, boquvchisini yo'qotganda va qonunda nazarda tutilgan boshqa hollarda
   B) faqat qariganda
   C) faqat nogironlik holatida
   D) faqat ko'p bolali oilalarga
   JAVOB: A
   ASOS: 46-modda

64. Qonunda belgilangan pensiyalar, nafaqalar va boshqa turdagi ijtimoiy yordamning miqdorlari nimadan oz bo'lishi mumkin emas?
   A) o'rtacha oylik ish haqidan
   B) rasman belgilangan eng kam iste'mol xarajatlaridan
   C) budjet daromadlaridan
   D) minimal oziq-ovqat to'plami qiymatidan
   JAVOB: B
   ASOS: 46-modda

65. Uy-joydan mahrum etish haqida nima deyilgan?
   A) mahalliy hokim qarori bilan mahrum etish mumkin
   B) hech kim sudning qarorisiz va qonunga zid tarzda uy-joyidan mahrum etilishi mumkin emas
   C) kommunal to'lov qarzdoranligi uchun avtomatik mahrum etish mumkin
   D) jamoa qarori bilan mahrum etish mumkin
   JAVOB: B
   ASOS: 47-modda

66. O'zbekiston Respublikasi fuqarolari tibbiy yordamning kafolatlangan hajmini kim qonunda belgilangan tartibda olishga haqli?
   A) faqat sug'urta qilingan shaxslar
   B) faqat byudjet tashkilotlari xodimlari
   C) davlat hisobidan — fuqarolari
   D) faqat yoshlar va keksalar
   JAVOB: C
   ASOS: 48-modda

67. Qulay atrof-muhitga ega bo'lish huquqi bilan birga har kimning qanday axborotga bo'lgan huquqi kafolatlanadi?
   A) maxfiy statistik ma'lumotlarga
   B) xorijiy tahlil ma'lumotlariga
   C) atrof-muhit holati to'g'risidagi ishonchli axborotga
   D) tarixiy arxiv hujjatlariga
   JAVOB: C
   ASOS: 49-modda

68. Davlat qaysi ta'limni bepul olishni kafolatlaydi?
   A) barcha darajadagi ta'limni
   B) bepul umumiy o'rta ta'lim va boshlang'ich professional ta'limni; umumiy o'rta ta'lim majburiydir
   C) faqat maktabgacha ta'limni
   D) faqat oliy ta'limni
   JAVOB: B
   ASOS: 50-modda

69. Fuqarolar davlat ta'lim tashkilotlarida nima asosida davlat hisobidan oliy ma'lumot olishga haqli?
   A) tanlov asosida
   B) taqdimot asosida
   C) stipendiya to'lash asosida
   D) ish staji asosida
   JAVOB: A
   ASOS: 51-modda

70. O'qituvchining mehnati nima sifatida e'tirof etiladi?
   A) iqtisodiy o'sishning asosi sifatida
   B) jamiyat va davlatni rivojlantirish, sog'lom, barkamol avlodni shakllantirish hamda tarbiyalash, xalqning ma'naviy va madaniy salohiyatini saqlash hamda boyitishning asosi sifatida
   C) xalqaro obro'ning asosi sifatida
   D) texnologik rivojlanishning asosi sifatida
   JAVOB: B
   ASOS: 52-modda

71. Har kimga qanday erkinlik kafolatlanadi va nima qonun bilan muhofaza qilinadi (53-modda)?
   A) ilmiy, texnikaviy va badiiy ijod erkinligi; intellektual mulk qonun bilan muhofaza qilinadi
   B) tadbirkorlik erkinligi; korxonalar muhofaza qilinadi
   C) saylov erkinligi; partiyalar muhofaza qilinadi
   D) diniy erkinlik; ibodatxonalar muhofaza qilinadi
   JAVOB: A
   ASOS: 53-modda

72. Insonning huquq va erkinliklarini ta'minlash nimadir — nima?
   A) davlatning oliy maqsadi
   B) fuqarolik jamiyatining vazifasi
   C) xalqaro tashkilotlar vazifasi
   D) mahalliy hokimiyat vazifasi
   JAVOB: A
   ASOS: 54-modda

73. Har kim o'z huquq va erkinliklarini qanday usullar bilan himoya qilishga haqli?
   A) faqat sud orqali
   B) qonunda taqiqlanmagan barcha usullar bilan
   C) faqat ommaviy axborot vositalari orqali
   D) faqat o'zini o'zi boshqarish organlari orqali
   JAVOB: B
   ASOS: 55-modda

74. Davlat organlarining hamda boshqa tashkilotlarning, ular mansabdor shaxslarining qonunga xilof qarorlari, harakatlari va harakatsizligi ustidan nima qilish huquqi kafolatlanadi?
   A) prokuraturaga shikoyat qilish
   B) Prezidentga murojaat qilish
   C) jamoatchilik muhokamasiga chiqarish
   D) sudga shikoyat qilish
   JAVOB: D
   ASOS: 55-modda

75. Inson huquqlari bo'yicha milliy institutlar qanday vazifa bajaradi?
   A) davlat organlari faoliyatini o'rniga bajaradi
   B) inson huquqlari va erkinliklarini himoya qilishning mavjud shakllari hamda vositalarini to'ldiradi, fuqarolik jamiyatini rivojlantirishga va inson huquqlari madaniyatini yuksaltirishga ko'maklashadi
   C) faqat statistik hisobotlar tayyorlaydi
   D) sud hukmlarini qayta ko'radi
   JAVOB: B
   ASOS: 56-modda

76. Qaysi toifadagi shaxslarning huquqlari davlat himoyasidadir?
   A) faqat davlat xizmatchilari
   B) faqat urush qatnashchilari
   C) faqat ko'p bolali otalar
   D) mehnatga layoqatsiz va yolg'iz keksalar, nogironligi bo'lgan shaxslar hamda aholining ijtimoiy jihatdan ehtiyojmand boshqa toifalari
   JAVOB: D
   ASOS: 57-modda

77. Xotin-qizlar va erkaklarning huquqlari haqida Konstitutsiyada nima deyilgan?
   A) xotin-qizlar huquqlari ustuvor hisoblanadi
   B) erkaklar huquqlari ustuvor hisoblanadi
   C) huquqlar oila ijrosi orqali belgilanadi
   D) xotin-qizlar va erkaklar teng huquqlidirlar
   JAVOB: D
   ASOS: 58-modda

78. Davlat xotin-qizlar va erkaklarga nimani ta'minlaydi?
   A) faqat mehnat sohasida imtiyozlarni
   B) jamiyat hamda davlat ishlarini boshqarishda, shuningdek jamiyat va davlat hayotining boshqa sohalarida teng huquq va imkoniyatlarni
   C) faqat ta'lim sohasida kvotalarni
   D) faqat pensiya ta'minotini
   JAVOB: B
   ASOS: 58-modda

79. Konstitutsiyada belgilab qo'yilgan burchlarni kim bajarishi shart?
   A) faqat davlat xizmatchilari
   B) barcha fuqarolar
   C) faqat harbiylar
   D) faqat 18 yoshga to'lgan fuqarolar
   JAVOB: B
   ASOS: 59-modda

80. Fuqarolar nimaga majburdirlar (60-modda)?
   A) faqat soliqlarni o'z vaqtida to'lashga
   B) davlat bayramlarida ishtirok etishga
   C) mahalliy an'analarga qat'iyan rioya etishga
   D) Konstitutsiya va qonunlarga rioya etishga, boshqa insonlarning huquqlari, erkinliklari, sha'ni va qadr-qimmatini hurmat qilishga
   JAVOB: D
   ASOS: 60-modda

81. Fuqarolar O'zbekiston xalqining qanday merosini asrab-avaylashi shart?
   A) faqat tarixiy merosini
   B) faqat madaniy merosini
   C) tarixiy, ma'naviy, madaniy, ilmiy va tabiiy merosini
   D) faqat tabiiy merosini
   JAVOB: C
   ASOS: 61-modda

82. Tarixiy, ma'naviy, madaniy, ilmiy va tabiiy meros kim tomonidan muhofaza qilinadi?
   A) mahalliy jamoatlar tomonidan
   B) jamoat birlashmalari tomonidan
   C) xalqaro tashkilotlar tomonidan
   D) davlat tomonidan
   JAVOB: D
   ASOS: 61-modda

83. Fuqarolar atrof tabiiy muhitga qanday munosabatda bo'lishga majburdirlar?
   A) ehtiyotkorona munosabatda
   B) betaraf munosabatda
   C) faqat ma'lumot olish munosabatida
   D) iqtisodiy foydalanish munosabatida
   JAVOB: A
   ASOS: 62-modda

84. Fuqarolar qonun bilan belgilangan nimalarni to'lashi shart?
   A) faqat mahalliy yig'imlarni
   B) soliqlar va yig'imlarni
   C) ixtiyoriy badallarni
   D) jamoat jamg'armalarini
   JAVOB: B
   ASOS: 63-modda

85. Soliq va yig'imlar qanday bo'lishi kerak?
   A) maksimal yuqori bo'lishi kerak
   B) adolatli bo'lishi hamda fuqarolarning konstitutsiyaviy huquqlarini amalga oshirishiga to'sqinlik qilmasligi kerak
   C) bir jinsli bo'lishi kerak
   D) mahalliy organlar tomonidan belgilanishi kerak
   JAVOB: B
   ASOS: 63-modda

86. Vatan himoyasi kimning burchidir?
   A) O'zbekiston Respublikasi har bir fuqarosining burchidir
   B) faqat professional armiya xodimlarining
   C) faqat harbiy xizmatdagi shaxslarning
   D) fuqarolik holatiga qarab belgilanadi
   JAVOB: A
   ASOS: 64-modda

87. O'zbekiston iqtisodiyotining negizini nima tashkil etadi?
   A) xilma-xil shakllardagi mulk
   B) davlat monopoliyasi
   C) faqat xususiy korxonalar
   D) xorijiy investitsiyalar
   JAVOB: A
   ASOS: 65-modda

88. Konstitutsiyaga ko'ra mulk shakllari qanday himoya qilinadi?
   A) faqat davlat mulki himoyada
   B) faqat xususiy mulk himoyada
   C) O'zbekiston Respublikasida barcha mulk shakllari teng himoya qilinadi
   D) mulk shakllari bo'yicha farqlanadi
   JAVOB: C
   ASOS: 65-modda

89. Mulkdor o'ziga tegishli mol-mulkka qanday munosabatda bo'lishi mumkin?
   A) faqat foydalanadi
   B) o'z xohishicha egalik qiladi, undan foydalanadi va uni tasarruf etadi
   C) faqat davlat ruxsati bilan tasarruf etadi
   D) faqat meros qoldiradi
   JAVOB: B
   ASOS: 66-modda

90. Davlat qanday muhitni ta'minlaydi va nima kafolatlanadi (67-modda)?
   A) faqat ichki bozor muhitini ta'minlaydi
   B) davlat monopoliyasini ta'minlaydi
   C) import cheklovlarini ta'minlaydi
   D) qulay investitsiyaviy va ishbilarmonlik muhitini ta'minlaydi; iqtisodiy makon birligi, tovarlar, xizmatlar, mehnat resurslari va moliyaviy mablag'larning erkin harakatlanishi kafolatlanadi
   JAVOB: D
   ASOS: 67-modda

91. Tadbirkorlar nimalarga haqli?
   A) faqat hukumat topshiriqlarini bajarishga
   B) faqat mahalliy bozorda savdo qilishga
   C) faqat davlat bilan hamkorlikda faoliyat yuritishga
   D) qonunchilikka muvofiq har qanday faoliyatni amalga oshirishga va o'z faoliyati yo'nalishlarini mustaqil ravishda tanlashga
   JAVOB: D
   ASOS: 67-modda

92. Yer, yer osti boyliklari, suv, o'simlik va hayvonot dunyosi hamda boshqa tabiiy resurslar nima hisoblanadi?
   A) tadbirkorlarning mulki
   B) mahalliy jamoalar mulki
   C) erkin tasarrufdagi resurslar
   D) umummilliy boylik bo'lib, ulardan oqilona foydalanish zarur va ular davlat muhofazasidadir
   JAVOB: D
   ASOS: 68-modda

93. Fuqarolik jamiyatining asosini nimalar tashkil etadi?
   A) faqat siyosiy partiyalar
   B) faqat davlat organlari
   C) faqat kasaba uyushmalari
   D) fuqarolik jamiyati institutlari, shu jumladan jamoat birlashmalari va boshqa nodavlat notijorat tashkilotlari, fuqarolarning o'zini o'zi boshqarish organlari, ommaviy axborot vositalari
   JAVOB: D
   ASOS: 69-modda

94. O'zbekiston Respublikasida nimalar jamoat birlashmalari sifatida e'tirof etiladi?
   A) faqat siyosiy partiyalar
   B) faqat ijodiy uyushmalar
   C) kasaba uyushmalari, siyosiy partiyalar, olimlarning jamiyatlari, xotin-qizlar tashkilotlari, faxriylar, yoshlar va nogironligi bo'lgan shaxslar tashkilotlari, ijodiy uyushmalar, ommaviy harakatlar hamda fuqarolarning boshqa birlashmalari
   D) faqat diniy jamoalar
   JAVOB: C
   ASOS: 70-modda

95. Qaysi faoliyatga yo'l qo'yilmaydi (71-modda)?
   A) siyosiy kurash faoliyatiga
   B) Konstitutsiyaviy tuzumni zo'rlik bilan o'zgartirishni maqsad qilib qo'yuvchi, O'zbekistonning davlat suverenitetiga, hududiy yaxlitligiga va xavfsizligiga qarshi chiquvchi, urushni, ijtimoiy, milliy, irqiy hamda diniy adovatni targ'ib qiluvchi birlashmalar faoliyatiga
   C) tanqid faoliyatiga
   D) saylov kampaniyasi faoliyatiga
   JAVOB: B
   ASOS: 71-modda

96. Davlat nodavlat notijorat tashkilotlarining huquqlariga qanday munosabatda bo'ladi?
   A) huquqlari va qonuniy manfaatlariga rioya etilishini ta'minlaydi, ular faoliyatiga aralashmaydi
   B) ularga qattiq nazorat o'rnatadi
   C) ular faoliyatini davlat tasarrufiga oladi
   D) faqat byudjet orqali qo'llab-quvvatlaydi
   JAVOB: A
   ASOS: 72-modda

97. Kasaba uyushmalari qanday vazifa bajaradi va a'zolik qanday?
   A) xodimlarning ijtimoiy-iqtisodiy huquqlarini va manfaatlarini ifoda etadilar va himoya qiladilar; kasaba uyushmalariga a'zo bo'lish ixtiyoriydir
   B) davlat boshqaruvini amalga oshiradilar; a'zolik majburiydir
   C) faqat mehnat nizolarini hal etadilar; a'zolik majburiydir
   D) ijro etuvchi hokimiyat funksiyalarini bajaradilar; a'zolik yopiq
   JAVOB: A
   ASOS: 73-modda

98. Siyosiy partiyalar nimalarni ifodalaydi va qanday ishtirok etadi?
   A) davlat hokimiyatini to'g'ridan-to'g'ri amalga oshiradilar
   B) turli ijtimoiy tabaqa va guruhlarning siyosiy irodasini ifodalaydilar va o'zlarining demokratik yo'l bilan saylab qo'yilgan vakillari orqali davlat hokimiyatini tuzishda ishtirok etadilar
   C) faqat saylovlarda kuzatuvchi bo'ladilar
   D) faqat jamoatchilik fikrini o'rganadilar
   JAVOB: B
   ASOS: 74-modda

99. Diniy tashkilotlarning davlatga nisbatan mavqei qanday?
   A) davlatdan ajratilgan hamda qonun oldida tengdirlar; davlat diniy tashkilotlarning faoliyatiga aralashmaydi
   B) davlat dinini ifodalaydi
   C) davlat tomonidan boshqariladi
   D) davlat byudjetidan moliyalashtiriladi
   JAVOB: A
   ASOS: 75-modda

100. Oila nima hisoblanadi?
   A) faqat shaxsiy munosabatlar sohasi
   B) mahalliy hokimiyat nazoratidagi birlik
   C) faqat an'anaviy tuzilma
   D) jamiyatning asosiy bo'g'ini hamda u jamiyat va davlat muhofazasidadir
   JAVOB: D
   ASOS: 76-modda

101. Nikoh nimlarga asoslanadi?
   A) O'zbekiston xalqining an'anaviy oilaviy qadriyatlariga, nikohlanuvchilarning ixtiyoriy roziligiga va teng huquqliligiga
   B) faqat ota-onalar irodasiga
   C) faqat mulkiy holatga
   D) mahalliy organlar qaroriga
   JAVOB: A
   ASOS: 76-modda

102. Ota-onalar va ularning o'rnini bosuvchi shaxslar nimalarga majburdirlar?
   A) faqat farzandlarini boqishga
   B) o'z farzandlarini voyaga yetguniga qadar boqishga, ularning tarbiyasi, ta'lim olishi, sog'lom, to'laqonli va har tomonlama kamol topishi xususida g'amxo'rlik qilishga
   C) faqat o'qitishga
   D) faqat moddiy yordam berishga
   JAVOB: B
   ASOS: 77-modda

103. Farzandlarning qonun oldidagi mavqei qanday?
   A) nikohda tug'ilganlar ustun
   B) ota-onasining nasl-nasabi va fuqarolik holatidan qat'i nazar, qonun oldida tengdirlar
   C) to'ng'ich farzand ustun
   D) o'g'il farzandlar ustun
   JAVOB: B
   ASOS: 78-modda

104. Onalik, otalik va bolalik nimadan iborat?
   A) soliq imtiyozlari bilan ta'minlangan
   B) mahalliy jamoalar himoyasida
   C) davlat tomonidan muhofaza qilinadi
   D) faqat oila a'zolari javobgarligida
   JAVOB: C
   ASOS: 78-modda

105. Davlat yoshlarning qanday huquqlari himoyasini ta'minlaydi?
   A) shaxsiy, siyosiy, iqtisodiy, ijtimoiy, madaniy, ekologik huquqlari himoya qilinishini ta'minlaydi, jamiyat va davlat hayotida faol ishtirok etishini rag'batlantiradi
   B) faqat ta'lim huquqlarini
   C) faqat bandlik huquqlarini
   D) faqat sport huquqlarini
   JAVOB: A
   ASOS: 79-modda

106. Voyaga yetgan mehnatga layoqatli farzandlar kim haqida g'amxo'rlik qilishga majburdirlar?
   A) yaqin qarindoshlari haqida
   B) o'z ota-onalari haqida
   C) mahalladagi keksalar haqida
   D) davlat muassasalari tarbiyalanuvchilari haqida
   JAVOB: B
   ASOS: 80-modda

107. Ommaviy axborot vositalari qanday faoliyat yuritadi?
   A) erkindir va qonunga muvofiq ish olib boradilar
   B) faqat davlat buyrug'i bilan
   C) senzura nazorati ostida
   D) faqat mahalliy miqyosda
   JAVOB: A
   ASOS: 81-modda

108. Ommaviy axborot vositalari nima uchun javobgardir?
   A) o'zi taqdim etadigan axborotning ishonchliligi uchun
   B) tahririyat xarajatlari uchun
   C) obunachilar soni uchun
   D) reklama daromadlari uchun
   JAVOB: A
   ASOS: 81-modda

109. Senzura haqida Konstitutsiyada nima deyilgan?
   A) senzura favqulodda holatlarda kiritiladi
   B) senzuraga yo'l qo'yilmaydi
   C) senzura mahalliy darajada amal qiladi
   D) senzura ixtiyoriy asosda o'tkaziladi
   JAVOB: B
   ASOS: 82-modda

110. O'zbekiston Respublikasi nimalardan iborat?
   A) viloyatlar, tumanlar, shaharlar, shaharchalar, qishloqlar, ovullar, shuningdek Qoraqalpog'iston Respublikasidan
   B) faqat viloyatlar va Toshkent shahridan
   C) faqat Qoraqalpog'iston Respublikasidan
   D) faqat tumanlar va shaharlardan
   JAVOB: A
   ASOS: 83-modda

111. Qoraqalpog'iston Respublikasi, viloyatlar, Toshkent shahrining chegaralarini o'zgartirish, viloyatlar, shaharlar, tumanlar tashkil qilish va ularni tugatish nima bilan amalga oshiriladi?
   A) Prezident farmoni bilan
   B) Vazirlar Mahkamasi qarori bilan
   C) O'zbekiston Respublikasi Oliy Majlisining roziligi bilan
   D) mahalliy Kengash qarori bilan
   JAVOB: C
   ASOS: 84-modda

112. Tumanga bo'ysunmaydigan shaharlar tarkibiga kim kiradi?
   A) faqat viloyat markazlari
   B) faqat Toshkent shahri
   C) Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahri tarkibidagi shaharlar
   D) tumanlar markazlari
   JAVOB: C
   ASOS: 83-modda

113. Qoraqalpog'iston Respublikasi qanday maqomga ega?
   A) alohida davlat
   B) avtonom viloya tuzilmasi
   C) xalqaro shartnoma subyekti
   D) suveren Respublika bo'lib, O'zbekiston Respublikasi tarkibiga kiradi
   JAVOB: D
   ASOS: 85-modda

114. Qoraqalpog'iston Respublikasining suverenitetini kim muhofaza etadi?
   A) Qoraqalpog'iston Respublikasi o'zi
   B) xalqaro hamjamiyat
   C) O'zbekiston Respublikasi
   D) mintaqaviy tashkilotlar
   JAVOB: C
   ASOS: 85-modda

115. Qoraqalpog'iston Respublikasining Konstitutsiyasi haqida nima deyilgan?
   A) Qoraqalpog'iston Respublikasining o'z Konstitutsiyasiga ega bo'lib, u O'zbekiston Respublikasining Konstitutsiyasiga zid bo'lishi mumkin emas
   B) alohida Konstitutsiyaga ega emas
   C) O'zbekiston Konstitutsiyasidan mustaqil kuchga ega
   D) faqat mahalliy NHT maqomiga ega
   JAVOB: A
   ASOS: 86-modda

116. O'zbekiston Respublikasi qonunlari Qoraqalpog'iston Respublikasi hududida qanday kuchga ega?
   A) majburiydirlar
   B) maslahat xarakterida
   C) Qoraqalpog'iston qonunlari bilan tasdiqlangandagina amal qiladi
   D) umuman amal qilmaydi
   JAVOB: A
   ASOS: 87-modda

117. Qoraqalpog'iston Respublikasining hududi va chegaralari haqida nima deyilgan?
   A) Prezident farmoni bilan o'zgartiriladi
   B) uning roziligisiz o'zgartirilishi mumkin emas
   C) referendum orqali istalgan vaqtda o'zgartiriladi
   D) xalqaro shartnomalar bilan o'zgartiriladi
   JAVOB: B
   ASOS: 88-modda

118. Qoraqalpog'iston Respublikasi O'zbekiston Respublikasi tarkibidan qanday asosda ajralib chiqish huquqiga ega?
   A) Qoraqalpog'iston Respublikasi xalqining umumiy referendumi asosida
   B) parlament qarori asosida
   C) xalqaro tashkilot qarori asosida
   D) iqtisodiy hisob-kitob asosida
   JAVOB: A
   ASOS: 89-modda

119. O'zbekiston Respublikasi bilan Qoraqalpog'iston Respublikasining o'zaro munosabatlari nimaga ko'ra tartibga solinadi?
   A) bir tomonlama qarorlar bilan
   B) Konstitutsiya doirasida tuzilgan shartnomalar hamda bitimlar bilan; nizolar murosaga keltiruvchi vositalar yordamida hal etiladi
   C) faqat mahalliy kelishuvlar bilan
   D) xalqaro sud qarorlari bilan
   JAVOB: B
   ASOS: 90-modda

120. O'zbekiston Respublikasining Oliy Majlisi qanday organ hisoblanadi?
   A) oliy davlat vakillik organi bo'lib, qonun chiqaruvchi hokimiyatni amalga oshiradi
   B) oliy ijro etuvchi organ
   C) oliy nazorat organi
   D) konstitutsiyaviy nazorat organi
   JAVOB: A
   ASOS: 91-modda

121. O'zbekiston Respublikasi Oliy Majlisi nechta palatadan iborat va vakolat muddati qancha?
   A) uch palata; uch yil
   B) bitta palata; to'rt yil
   C) ikki palata; yetti yil
   D) ikki palata — Qonunchilik palatasi (quyi) va Senat (yuqori); vakolat muddati — besh yil
   JAVOB: D
   ASOS: 91-modda

122. O'zbekiston Respublikasi Oliy Majlisining Qonunchilik palatasi nechta deputatdan iborat?
   A) yuz deputatdan
   B) ikki yuz deputatdan
   C) bir yuz ellik deputatdan
   D) oltmish besh deputatdan
   JAVOB: C
   ASOS: 92-modda

123. Senat qanday palata hisoblanadi va senatorlar qanday saylanadi?
   A) umummilliy palata; umumxalq saylovida saylanadi
   B) hududiy vakillik palatasi; Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahridan teng miqdorda — to'rt kishidan saylanadi
   C) ijro etuvchi palata; Prezident tayinlaydi
   D) maslahat palata; partiyalar taqsimlaydi
   JAVOB: B
   ASOS: 92-modda

124. O'zbekiston Respublikasi Oliy Majlisi Senatining to'qqiz nafar a'zosini kim tayinlaydi va ular qanday shaxslar bo'ladi?
   A) Senat o'zi saylaydi; faqat huquqshunoslar
   B) Vazirlar Mahkamasi tavsiya qiladi; davlat xizmatchilari
   C) mahalliy Kengashlar saylaydi; deputatlar
   D) Prezident tayinlaydi; fan, san'at, adabiyot, ishlab chiqarish sohasida hamda davlat va jamiyat faoliyatining boshqa tarmoqlarida katta amaliy tajribaga ega bo'lgan hamda alohida xizmat ko'rsatgan eng obro'li fuqarolar
   JAVOB: D
   ASOS: 92-modda

125. Konstitutsiyani qabul qilish, unga o'zgartirish va qo'shimchalar kiritish kimga tegishli vakolat?
   A) Oliy Majlis palatalarining birgalikdagi vakolatiga
   B) Prezidentga
   C) Konstitutsiyaviy sudga
   D) xalq referendumi tashabbusiga
   JAVOB: A
   ASOS: 93-modda

126. Qonunchilik palatasining mutlaq vakolatlariga nimalar kiradi?
   A) Konstitutsiyaviy sud raisini saylash
   B) Bosh prokurorni tayinlash
   C) Markaziy bankni boshqarish
   D) O'zbekiston Respublikasi Davlat budjetining ijro etilishi ustidan nazorat qilish, Hisob palatasining hisobotini ko'rib chiqish va boshqalar
   JAVOB: D
   ASOS: 94-modda

127. Senat Prezident taqdimiga binoan qaysi organlar rahbarlarini saylaydi?
   A) Vazirlar Mahkamasi a'zolarini
   B) mahalliy hokimlarni
   C) O'zbekiston Respublikasi Konstitutsiyaviy sudini, Oliy sudini, Sudyalar oliy kengashini, respublika korrupsiyaga qarshi kurashish organining va respublika monopoliyaga qarshi kurashish organining rahbarlarini
   D) viloyat prokurorlarini
   JAVOB: C
   ASOS: 95-modda

128. Vakolat muddati tugagach, avvalgi chaqiriq Qonunchilik palatasi va Senati qachongacha faoliyatini davom ettiradi?
   A) tegishlicha yangi chaqiriq Qonunchilik palatasi va Senati ish boshlaguniga qadar
   B) Prezident qaroriga qadar
   C) bir yil mobaynida
   D) saylov kuni e'lon qilinguncha
   JAVOB: A
   ASOS: 96-modda

129. Oliy Majlis palatalarining qarorlari qanday ovoz bilan qabul qilinadi?
   A) qatnashayotganlarning mutlaq ovozi bilan
   B) uchdan ikki qism ovozi bilan
   C) Qonunchilik palatasi deputatlari yoki Senat a'zolari umumiy sonining ko'pchilik ovozi bilan
   D) yashirin kelishuv asosida
   JAVOB: C
   ASOS: 97-modda

130. Qonunchilik tashabbusi huquqiga kimlar ega?
   A) O'zbekiston Respublikasi Prezidenti, davlat hokimiyatining oliy vakillik organi orqali Qoraqalpog'iston Respublikasi, Oliy Majlis Qonunchilik palatasi deputatlari, Vazirlar Mahkamasi, shuningdek Konstitutsiyaviy sud, Oliy sud va boshqalar
   B) faqat Prezident
   C) faqat deputatlar
   D) faqat Vazirlar Mahkamasi
   JAVOB: A
   ASOS: 98-modda

131. Qonun qanday tartibda yuridik kuchga ega bo'ladi?
   A) Qonunchilik palatasi qabul qilishi bilanoq
   B) Senat ma'qullashi bilanoq
   C) Vazirlar Mahkamasi e'lon qilgach
   D) Qonunchilik palatasi tomonidan qabul qilinib, Senat tomonidan ma'qullanib, Prezidenti tomonidan imzolangach va qonunda belgilangan tartibda rasmiy manbalarda e'lon qilingach
   JAVOB: D
   ASOS: 99-modda

132. Qonunchilik palatasining Spikerini kim saylaydi?
   A) Prezident
   B) Senat
   C) Qonunchilik palatasi o'zi o'z tarkibidan saylaydi
   D) xalq referendumi
   JAVOB: C
   ASOS: 100-modda

133. Senat Raisi qanday saylanadi va Senat Raisi o'rinbosarlaridan biri kim bo'ladi?
   A) Prezident taqdimiga binoan saylanadi; o'rinbosarlardan biri Qoraqalpog'iston Respublikasining vakili bo'ladi
   B) Senat o'zi tanlaydi; deputatlar vakili
   C) xalq saylovida saylanadi; viloyatlar vakili
   D) Konstitutsiyaviy sud tavsiyasi bilan; sud mahkamasi vakili
   JAVOB: A
   ASOS: 101-modda

134. Parlament tekshiruvi qanday qaror bilan o'tkaziladi?
   A) Prezident farmoni bilan
   B) Senat Raisi qarori bilan
   C) Konstitutsiyaviy sud taklifi bilan
   D) Qonunchilik palatasi va Senatining qo'shma qarori bilan
   JAVOB: D
   ASOS: 103-modda

135. O'zbekiston Respublikasining Prezidenti qanday maqomga ega?
   A) faqat ijro etuvchi hokimiyat rahbari
   B) davlat boshlig'idir va davlat hokimiyati organlarining kelishilgan holda faoliyat yuritishini hamda hamkorligini ta'minlaydi
   C) faqat qonun chiqaruvchi hokimiyat rahbari
   D) partiya yetakchisi
   JAVOB: B
   ASOS: 105-modda

136. O'zbekiston Respublikasi Prezidenti lavozimiga qancha yoshdan kichik bo'lmagan shaxs saylanishi mumkin?
   A) o'ttiz yoshdan
   B) qirq yoshdan
   C) o'ttiz besh yoshdan
   D) yigirma besh yoshdan
   JAVOB: C
   ASOS: 106-modda

137. Prezident etib saylanish uchun shaxs qanday talablarga javob berishi kerak (yashash va til bilimi)?
   A) kamida 5 yil yashagan, chet tili biladigan fuqaro
   B) umrbod O'zbekistonda yashagan shaxs
   C) til bilimi talab qilinmaydi
   D) davlat tilini yaxshi biladigan, bevosita saylovgacha kamida 10 yil O'zbekiston hududida muqim yashayotgan O'zbekiston Respublikasi fuqarosi bo'lishi kerak
   JAVOB: D
   ASOS: 106-modda

138. Ayni bir shaxs surunkasiga necha muddatdan ortiq Prezident bo'lishi mumkin emas?
   A) bir muddatdan
   B) ikki muddatdan
   C) uch muddatdan
   D) to'rt muddatdan
   JAVOB: B
   ASOS: 106-modda

139. O'zbekiston Respublikasining Prezidenti necha yil muddatga saylanadi?
   A) besh yilga
   B) yetti yilga
   C) o'n yilga
   D) uch yilga
   JAVOB: B
   ASOS: 106-modda

140. Prezident o'z vazifasini bajarib turgan davrda nimada cheklovlar mavjud?
   A) xorijga chiqishi mumkin emas
   B) ilmiy faoliyat bilan shug'llanishi mumkin emas
   C) oilasi bilan aloqada bo'lishi mumkin emas
   D) boshqa haq to'lanadigan lavozimni egallashi, vakillik organining deputati bo'lishi, tadbirkorlik faoliyati bilan shug'llanishi mumkin emas
   JAVOB: D
   ASOS: 107-modda

141. Prezident o'z lavozimiga qachon kirishgan hisoblanadi?
   A) saylov natijalari e'lon qilangach
   B) vakolat berilgan hujjat imzolangach
   C) O'zbekiston Respublikasi Oliy Majlisi yig'ilishida qasamyodni qabul qilgan paytdan boshlab
   D) hukumat tuzilgach
   JAVOB: C
   ASOS: 108-modda

142. Prezident qaysi masalalarda kafil hisoblanadi?
   A) faqat iqtisodiy barqarorlikning kafili
   B) faqat xalqaro shartnomalarning kafili
   C) fuqarolarning huquqlari va erkinliklariga, O'zbekiston Respublikasining Konstitutsiyasi va qonunlariga rioya etilishining, suvereniteti, xavfsizligi va hududiy yaxlitligining kafilidir
   D) faqat partiya dasturining kafili
   JAVOB: C
   ASOS: 109-modda

143. Prezident qanday hujjatlar chiqaradi?
   A) faqat buyruqlar
   B) Konstitutsiyaga va qonunlarga asoslanib respublikaning butun hududida majburiy kuchga ega bo'lgan farmonlar, qarorlar va farmoyishlar
   C) faqat taqdimnomalar
   D) faqat qarorlar
   JAVOB: B
   ASOS: 110-modda

144. Palatalar qanday hollarda tarqatib yuborilishi mumkin?
   A) Prezidentning ixtiyoriga ko'ra istalgan vaqtda
   B) Bosh vazir taklifi bilan
   C) normal faoliyatiga tahdid soluvchi hal qilib bo'lmaydigan ixtiloflar yuz berganda yoki Konstitutsiyaga zid qarorlar bir necha marta qabul qilinganda — Prezidentning Konstitutsiyaviy sud bilan bamaslahat qabul qilgan qarori asosida; favqulodda holat davrida tarqatib yuborilishi mumkin emas
   D) mahalliy Kengashlar tashabbusi bilan
   JAVOB: C
   ASOS: 111-modda

145. Amaldagi Prezidenti o'z vazifalarini bajara olmaydigan holatlarda uning vazifa va vakolatlari kimga yuklatiladi va saylov qachon o'tkaziladi?
   A) Vazirlar Mahkamasi Raisiga; olti oy ichida
   B) Konstitutsiyaviy sud Raisiga; bir oy ichida
   C) Oliy Majlis Senati Raisining zimmasiga; uch oy muddat ichida
   D) Bosh prokurorga; bir yil ichida
   JAVOB: C
   ASOS: 112-modda

146. Vakolati tugashi munosabati bilan iste'foga chiqqan Prezident qanday maqomga ega bo'ladi?
   A) umrbod O'zbekiston Respublikasi Oliy Majlisi Senati a'zosi lavozimini egallaydi
   B) umrbod deputat maqomini egallaydi
   C) davlat pensiyasiga chiqadi
   D) Prezident maslahatchisi bo'ladi
   JAVOB: A
   ASOS: 113-modda

147. O'zbekiston Respublikasi Vazirlar Mahkamasi qanday hokimiyatni amalga oshiradi?
   A) qonun chiqaruvchi
   B) sud
   C) ijro etuvchi
   D) konstitutsiyaviy nazorat
   JAVOB: C
   ASOS: 114-modda

148. Vazirlar Mahkamasi kimlardan iborat?
   A) O'zbekiston Respublikasi Bosh vaziri, uning o'rinbosarlari va vazirlardan; Qoraqalpog'iston Respublikasi hukumatining boshlig'i ham o'z lavozimi bo'yicha tarkibiga kiradi
   B) faqat vazirlardan
   C) faqat Bosh vazir va o'rinbosarlaridan
   D) viloyat hokimlaridan
   JAVOB: A
   ASOS: 114-modda

149. Vazirlar Mahkamasi nimalar uchun javob bo'ladi?
   A) samarali iqtisodiy, ijtimoiy, soliq va budjet siyosati amalga oshirilishi, ilm-fan, madaniyat, ta'lim, sog'liqni saqlashni hamda iqtisodiyotning va ijtimoiy sohaning boshqa tarmoqlarini rivojlantirishga doir dasturlarning ishlab chiqilishi hamda bajarilishi uchun
   B) faqat xalqaro munosabatlar uchun
   C) faqat mudofaa masalalari uchun
   D) faqat sud tizimi uchun
   JAVOB: A
   ASOS: 115-modda

150. Vazirlar Mahkamasi qanday hujjatlar chiqaradi?
   A) butun hududidagi barcha organlar, korxonalar, muassasalar, tashkilotlar, mansabdor shaxslar va fuqarolar tomonidan bajarilishi majburiy bo'lgan qarorlar va farmoyishlar
   B) farmon va farmoyishlar
   C) buyruqlar va ko'rsatmalar
   D) konstitutsiyaviy qonunlar
   JAVOB: A
   ASOS: 116-modda

151. O'zbekiston Respublikasi Bosh vaziri qanday vakolatlarga ega?
   A) faqat majlislarda raislik qiladi
   B) faqat ichki siyosatni boshqaradi
   C) faqat mahalliy hokimlarni nazorat qiladi
   D) Vazirlar Mahkamasi faoliyatini tashkil etadi va unga rahbarlik qiladi, uning samarali ishlashi uchun shaxsan javob beradi; majlislarida raislik qiladi, qarorlarini imzolaydi; xalqaro munosabatlarda Vazirlar Mahkamasi nomidan ish ko'radi
   JAVOB: D
   ASOS: 117-modda

152. Bosh vazir nomzodi qachon va kim tomonidan ko'rib chiqiladi?
   A) saylovlardan keyin bir hafta ichida Senatga taqdim etiladi
   B) uch oy ichida xalq referendumiga qo'yiladi
   C) mansabdor shaxslari saylangan va organlari shakllanganidan so'ng bir oy ichida yoki Bosh vazir iste'foga chiqqanidan keyin bir oy ichida Qonunchilik palatasi ko'rib chiqishi va ma'qullashi uchun kiritiladi
   D) Prezident qarori bilan darhol tayinlanadi
   JAVOB: C
   ASOS: 118-modda

153. Bosh vazirga ishonchsizlik bildirish tashabbusi bilan kim chiqishi mumkin?
   A) Senat a'zolari umumiy sonining yarmi
   B) har qanday deputat yaksonlikda
   C) Qonunchilik palatasi deputatlari umumiy sonining kamida uchdan bir qismi
   D) faqat Prezident
   JAVOB: C
   ASOS: 119-modda

154. Viloyatlar, tumanlar va shaharlarda qaysi organlar davlat hokimiyati vakillik organlaridir?
   A) xalq deputatlari Kengashlari
   B) hokimiyat idoralari
   C) fuqarolarning yig'inlari
   D) mahalla jamoatchilik kengashlari
   JAVOB: A
   ASOS: 120-modda

155. Xalq deputatlari Kengashiga kim boshchilik qiladi?
   A) alohida saylanadigan rais
   B) Prezident tomonidan tayinlanadigan vakil
   C) prokuror
   D) viloyat, tuman, shahar hokimi lavozimini egallab turgan shaxs bir vaqtning o'zida xalq deputatlari Kengashining raisi
   JAVOB: D
   ASOS: 120-modda

156. Tegishli hududdagi ijro etuvchi hokimiyatga kim boshchilik qiladi va vakolatlari muddati qancha?
   A) viloyat, tuman va shahar hokimi; besh yil
   B) Kengash raisi; uch yil
   C) Prezident vakili; yetti yil
   D) mahalla raisi; bir yil
   JAVOB: A
   ASOS: 121-modda

157. Ayni bir shaxs surunkasiga necha muddatdan ortiq ayni bir viloyat, tuman, shaharning hokimi etib tayinlanishi mumkin emas?
   A) bir muddatdan
   B) ikki muddatdan
   C) uch muddatdan
   D) to'rt muddatdan
   JAVOB: B
   ASOS: 121-modda

158. Xalq deputatlari Kengashlarining vakolatlariga nimalar kiradi?
   A) qonunlar qabul qilish
   B) tegishli mahalliy budjetlarni ko'rib chiqish va qabul qilish, ijrosi ustidan nazorat qilish; hududlarni ijtimoiy-iqtisodiy rivojlantirish dasturlarini tasdiqlash; hokimni lavozimga tasdiqlash va hisobotlarini eshitish
   C) sud tizimini shakllantirish
   D) xalqaro shartnomalar tuzish
   JAVOB: B
   ASOS: 122-modda

159. Viloyat va Toshkent shahar hokimini kim tayinlaydi va lavozimidan ozod etadi?
   A) Vazirlar Mahkamasi
   B) viloyat Kengashi
   C) xalq ovozi bilan
   D) O'zbekiston Respublikasi Prezidenti qonunga muvofiq
   JAVOB: D
   ASOS: 124-modda

160. Tuman va shaharlarning hokimlari qanday tartibda tayinlanadi?
   A) Prezident tomonidan to'g'ridan-to'g'ri tayinlanadi
   B) xalq saylovi orqali saylanadi
   C) Vazirlar Mahkamasi tomonidan tayinlanadi
   D) viloyat, Toshkent shahar hokimi tomonidan tayinlanadi va lavozimidan ozod etiladi hamda tegishli xalq deputatlari Kengashi tomonidan tasdiqlanadi
   JAVOB: D
   ASOS: 124-modda

161. Viloyat, tuman va shahar hokimi o'z vakolatlarini qanday asosda amalga oshiradi?
   A) kollegial asosda
   B) jamoatchilik ko'rsatmasi asosida
   C) yakkaboshchilik asosida hamda rahbarlik qilayotgan organlarning qarorlari va harakatlari uchun shaxsan javob beradi
   D) Kengash delegatsiyasi asosida
   JAVOB: C
   ASOS: 125-modda

162. Shaharchalar, qishloqlar va ovullarda, mahallalarda fuqarolarning o'zini o'zi boshqarish organlari kimlar bo'lib, kimni saylaydi?
   A) hokimiyat idoralari; maslahatchilarni saylaydi
   B) fuqarolarning yig'inlari; ular raisni saylaydi; bu organlar davlat hokimiyati organlari tizimiga kirmaydi
   C) mahalla qo'mitalari; deputatlarni saylaydi
   D) mahalliy budjet komissiyalari; hisobchilarni saylaydi
   JAVOB: B
   ASOS: 127-modda

163. O'zbekiston Respublikasining fuqarolari qanday huquqlarga egadirlar (128-modda)?
   A) faqat saylash huquqiga
   B) faqat mahalliy saylovlarda saylanish huquqiga
   C) faqat referendumda ovoz berish huquqiga
   D) davlat hokimiyati vakillik organlariga saylash va saylanish huquqiga; har bir saylovchi bir ovozga ega
   JAVOB: D
   ASOS: 128-modda

164. Saylovlar qachon o'tkaziladi?
   A) vakolat muddati tugaydigan yilda — oktabr oyi uchinchi o'n kunligining birinchi yakshanbasida
   B) yanvar oyining ikkinchi shanbasida
   C) mart oyining birinchi yakshanbasida
   D) iyul oyining oxirgi yakshanbasida
   JAVOB: A
   ASOS: 128-modda

165. Ovoz berish huquqi qanday asosda amalga oshiriladi?
   A) umumiy, teng va to'g'ridan-to'g'ri saylov huquqi asosida yashirin ovoz berish yo'li bilan
   B) mulkiy sensus asosida
   C) ta'lim darajasi asosida
   D) yashash staji asosida
   JAVOB: A
   ASOS: 128-modda

166. Markaziy saylov komissiyasi kim tomonidan tuziladi va uning asosiy prinsiplari qaysilar?
   A) Vazirlar Mahkamasi tomonidan; mustaqillik va adolatlilikdan
   B) Prezident tomonidan; markazlashuv va oshkoralikdan
   C) Konstitutsiyaviy sud tomonidan; qonuniylik va kollegiallikdan
   D) O'zbekiston Respublikasi Oliy Majlisi tomonidan; mustaqillik, qonuniylik, kollegiallik, oshkoralik va adolatlilikdan iborat
   JAVOB: D
   ASOS: 129-modda

167. O'zbekiston Respublikasida odil sudlov kim tomonidan amalga oshiriladi?
   A) prokuratura tomonidan
   B) faqat sud tomonidan
   C) ichki ishlar organlari tomonidan
   D) adliya organlari tomonidan
   JAVOB: B
   ASOS: 130-modda

168. Sud hokimiyati kimdan mustaqil holda ish yuritadi?
   A) faqat ijro etuvchi hokimiyatdan
   B) qonun chiqaruvchi va ijro etuvchi hokimiyatdan, siyosiy partiyalardan, fuqarolik jamiyatining boshqa institutlaridan
   C) faqat qonun chiqaruvchi hokimiyatdan
   D) faqat mahalliy hokimiyatdan
   JAVOB: B
   ASOS: 130-modda

169. O'zbekiston Respublikasida sud tizimi va sudlar faoliyatining tartibi nima bilan belgilanadi?
   A) Prezident farmoni bilan
   B) Vazirlar Mahkamasi qarori bilan
   C) qonun bilan
   D) Sudyalar oliy kengashi qarori bilan
   JAVOB: C
   ASOS: 131-modda

170. O'zbekiston Respublikasi Konstitutsiyaviy sudi qanday ishlarni ko'radi?
   A) fuqarolik ishlarini
   B) jinoyat ishlarini
   C) ma'muriy huquqbuzarlik ishlarini
   D) qonun chiqaruvchi va ijro etuvchi hokimiyat hujjatlarining Konstitutsiyaga muvofiqligi to'g'risidagi ishlarni
   JAVOB: D
   ASOS: 132-modda

171. Konstitutsiyaviy sud a'zolari qanday tartibda saylanadi?
   A) xalq ovozi bilan
   B) Vazirlar Mahkamasi tomonidan tayinlanadi
   C) Oliy sud plenumi tomonidan saylanadi
   D) Prezidentning taqdimiga binoan Oliy Majlis Senati tomonidan Sudyalar oliy kengashi tavsiyasiga ko'ra
   JAVOB: D
   ASOS: 132-modda

172. O'zbekiston Respublikasi Oliy sudi qanday organ hisoblanadi?
   A) faqat jinoyat ishlari bo'yicha oliy organ
   B) fuqarolik, jinoiy, iqtisodiy va ma'muriy sud ishlarini yuritish sohasida sud hokimiyatining oliy organi
   C) faqat iqtisodiy ishlar bo'yicha oliy organ
   D) sudlar ustidan ma'muriy nazorat organi
   JAVOB: B
   ASOS: 134-modda

173. O'zbekiston Respublikasi Sudyalar oliy kengashi qanday organ hisoblanadi?
   A) sudyalar hamjamiyatining mustaqil organi bo'lib, sudyalar korpusining shakllantirilishini, sud hokimiyati mustaqilligining konstitutsiyaviy prinsipiga rioya etilishini ta'minlaydi
   B) sudlar ustidan boshqaruv organi
   C) prokuratura bo'ysunishidagi organ
   D) Adliya vazirligi bo'limi
   JAVOB: A
   ASOS: 135-modda

174. Sudyalar haqida nima deyilgan?
   A) Vazirlar Mahkamasi oldida hisobdordirlar
   B) hokimlar rahbarligida ish ko'radilar
   C) ishlar yopiq ko'riladi
   D) mustaqildirlar, faqat Konstitutsiya va qonunga bo'ysunadilar; odil sudlovga doir faoliyatlariga aralashishga yo'l qo'yilmaydi; muayyan ishlar bo'yicha hisobdor bo'lmaydilar; sudyalar daxlsizdir
   JAVOB: D
   ASOS: 136-modda

175. Sudlarda ishlar qanday ko'riladi?
   A) hamma ishlar yopiq ko'riladi
   B) hamma sudlarda ishlar ochiq ko'riladi; yopiq majlisda tinglashga qonunda belgilangan hollardagina yo'l qo'yiladi
   C) faqat jinoyat ishlari ochiq ko'riladi
   D) fuqarolik ishlari yopiq ko'riladi
   JAVOB: B
   ASOS: 137-modda

176. Sud hokimiyatining hujjatlari kimlar uchun majburiydir?
   A) barcha davlat organlari va boshqa tashkilotlar, mansabdor shaxslar hamda fuqarolar uchun
   B) faqat sud tizimi uchun
   C) faqat ijro etuvchi hokimiyat uchun
   D) faqat qonun chiqaruvchi hokimiyat uchun
   JAVOB: A
   ASOS: 138-modda

177. O'zbekiston Respublikasida sud ishlarini qaysi tillarda yuritish mumkin?
   A) faqat o'zbek tilida
   B) o'zbek tilida, qoraqalpoq tilida yoki muayyan joydagi ko'pchilik aholi so'zlashadigan tilda yoxud qonunga muvofiq boshqa tilda
   C) faqat rus tilida
   D) faqat davlat va xalqaro tillarda
   JAVOB: B
   ASOS: 139-modda

178. Sudlarning faoliyatini moliyalashtirish qanday amalga oshiriladi?
   A) faqat O'zbekiston Respublikasining Davlat budjetidan
   B) mahalliy budjetlardan
   C) maxsus fondlardan
   D) xalqaro grantlar hisobidan
   JAVOB: A
   ASOS: 140-modda

179. Advokatura nima maqsadda va qanday prinsiplar asosida faoliyat ko'rsatadi?
   A) davlat organlarini yuridik xizmat bilan ta'minlash uchun; markazlashuv prinsipiga asoslanadi
   B) sudlarda davlat ayblovini qo'llab-quvvatlash uchun; kollegiallik prinsipiga asoslanadi
   C) normativ hujjatlar loyihalarini tayyorlash uchun; ierarxiya prinsipiga asoslanadi
   D) jismoniy va yuridik shaxslarga malakali yuridik yordam ko'rsatish uchun; qonuniylik, mustaqillik va o'zini o'zi boshqarish prinsiplariga asoslanadi
   JAVOB: D
   ASOS: 141-modda

180. Advokatning kasbiy faoliyati davrida nimalar kafolatlanadi?
   A) uchrashuvlar faqat prokuror ruxsati bilan
   B) uning faoliyatiga aralashishga yo'l qo'yilmaydi; o'z himoyasidagi shaxs bilan moneliksiz va xoli uchrashish, maslahatlar berish uchun shart-sharoitlar ta'minlanadi
   C) faqat yozma murojaatlar orqali uchrashuvlar
   D) himoyasidagi shaxs bilan uchrashuvlar faqat sud zali mumkin
   JAVOB: B
   ASOS: 142-modda

181. Advokat va uning kasbiy faoliyati nimada bo'ladi?
   A) mahalliy hokimiyat himoyasida
   B) advokatlar uyushmasi himoyasida
   C) xalqaro advokatlar birligining himoyasida
   D) advokat, uning sha'ni, qadr-qimmati va kasbiy faoliyati davlat himoyasida bo'ladi va qonun bilan muhofaza qilinadi
   JAVOB: D
   ASOS: 142-modda

182. O'zbekiston Respublikasi hududida qonunlarning aniq va bir xilda bajarilishi ustidan nazoratni kim amalga oshiradi?
   A) Oliy sud
   B) O'zbekiston Respublikasining Bosh prokurori va unga bo'ysunuvchi prokurorlar
   C) Ichki ishlar vazirligi
   D) Adliya vazirligi
   JAVOB: B
   ASOS: 143-modda

183. Prokuratura organlarining yagona markazlashtirilgan tizimiga kim boshchilik qiladi?
   A) Oliy sud raisi
   B) Adliya vaziri
   C) Prezident ma'muriyati rahbari
   D) O'zbekiston Respublikasining Bosh prokurori
   JAVOB: D
   ASOS: 144-modda

184. Qoraqalpog'iston Respublikasining prokurori qanday tartibda tayinlanadi?
   A) Prezident tomonidan to'g'ridan-to'g'ri
   B) Bosh prokuror tomonidan yakkao'zi
   C) xalq saylovi orqali
   D) Qoraqalpog'iston Respublikasining oliy vakillik organi tomonidan O'zbekiston Respublikasining Bosh prokurori bilan kelishilgan holda
   JAVOB: D
   ASOS: 144-modda

185. Prokurorlar o'z vakolatlari davrida qanday faoliyat bilan cheklangan?
   A) jamoat birlashmalariga a'zo bo'lishi mumkin emas
   B) kasaba uyushmasiga a'zo bo'lishi mumkin emas
   C) ilmiy faoliyat bilan shug'llanishi mumkin emas
   D) siyosiy partiyalarga va siyosiy maqsadlarni ko'zlovchi boshqa birlashmalarga a'zo bo'lishi mumkin emas
   JAVOB: D
   ASOS: 145-modda

186. Jinoyatchilikka qarshi kurash bo'yicha tezkor-qidiruv va maxsus vazifalarni bajaruvchi qanday tuzilmalarni tuzish taqiqlanadi?
   A) xususiy tashkilotlar, jamoat birlashmalari va ularning bo'linmalarini
   B) davlat organlari bo'linmalarini
   C) xalqaro tashkilotlar vakolatxonalarini
   D) ta'lim muassasalaridagi tuzilmalarni
   JAVOB: A
   ASOS: 146-modda

187. O'zbekiston Respublikasi qanday tizimga ega?
   A) alohida hududiy tizimlarga
   B) xalqaro tizimlarga qo'shilgan tizimlarga
   C) yagona moliya, pul va bank tizimiga
   D) aralash tizimlarga
   JAVOB: C
   ASOS: 147-modda

188. O'zbekiston Respublikasining Davlat budjeti nimlardan iborat?
   A) faqat respublika budjetidan
   B) respublika budjetidan, Qoraqalpog'iston Respublikasi budjetidan va mahalliy budjetlardan
   C) faqat mahalliy budjetlardan
   D) maxsus fondlar budjetidan
   JAVOB: B
   ASOS: 148-modda

189. Soliqlarni joriy qilish huquqi kimga tegishlidir?
   A) Prezidentga
   B) Vazirlar Mahkamasiga
   C) O'zbekiston Respublikasining Oliy Majlisiga
   D) Moliya vazirligiga
   JAVOB: C
   ASOS: 149-modda

190. O'zbekiston Respublikasining pul birligi nima?
   A) rubl
   B) dollar
   C) evro
   D) so'm — O'zbekiston Respublikasining butun hududida yagona cheklanmagan qonuniy to'lov vositasi
   JAVOB: D
   ASOS: 150-modda

191. Pul belgilarini muomalaga kiritish va muomaladan chiqarish bo'yicha mutlaq huquq kimga tegishli?
   A) Moliya vazirligiga
   B) O'zbekiston Respublikasi Markaziy bankiga
   C) tijorat banklariga
   D) Vazirlar Mahkamasiga
   JAVOB: B
   ASOS: 150-modda

192. O'zbekiston Respublikasining bank tizimi nimlardan iborat?
   A) faqat tijorat banklaridan
   B) faqat Markaziy bankdan
   C) O'zbekiston Respublikasi Markaziy bankidan va banklardan
   D) davlat va xususiy fondlardan
   JAVOB: C
   ASOS: 151-modda

193. O'zbekiston Respublikasi Qurolli Kuchlari nima uchun tuziladi?
   A) xalqaro operatsiyalarda qatnashish uchun
   B) ichki siyosiy kurashni ta'minlash uchun
   C) O'zbekiston Respublikasining davlat suverenitetini va hududiy yaxlitligini, aholining tinch hayoti va xavfsizligini himoya qilish uchun
   D) chegara tashqarisidagi manfaatlarni kengaytirish uchun
   JAVOB: C
   ASOS: 152-modda

194. Qurolli Kuchlarning tuzilishi va ularni tashkil etish nima bilan belgilanadi?
   A) Prezident farmoni bilan
   B) Mudofaa vazirligi buyrug'i bilan
   C) qonun bilan
   D) Vazirlar Mahkamasi qarori bilan
   JAVOB: C
   ASOS: 152-modda

195. O'zbekiston Respublikasi o'z xavfsizligini ta'minlash uchun nimaga ega?
   A) yetarli darajada Qurolli Kuchlariga
   B) xalqaro harbiy ittifoqqa
   C) nuqsonli yadroviy arsenalga
   D) xorijdagi harbiy bazalarga
   JAVOB: A
   ASOS: 153-modda

196. O'zbekiston Respublikasining Konstitutsiyasiga o'zgartirish va qo'shimchalar nimasi orqali kiritiladi?
   A) Prezident farmoni yoki Vazirlar Mahkamasi qarori orqali
   B) O'zbekiston Respublikasining referendumi yoki deputatlar va senatorlar umumiy sonining kamida uchdan ikki qismidan iborat ko'pchilik tomonidan qabul qilingan konstitutsiyaviy qonun bilan
   C) Oliy sud qarori yoki Bosh prokuror taqdimnomasi orqali
   D) mahalliy referendumlar orqali
   JAVOB: B
   ASOS: 154-modda

197. Konstitutsiyaga o'zgartirish kiritish to'g'risidagi konstitutsiyaviy qonun qanday ko'pchilik bilan qabul qilinadi?
   A) qatnashayotgan deputatlar va senatorlar ko'pchiligi bilan
   B) umumiy sonning oltmish foizi bilan
   C) bir ovoz farqi bilan
   D) deputatlar va senatorlar umumiy sonining kamida uchdan ikki qismidan iborat ko'pchiligi bilan
   JAVOB: D
   ASOS: 154-modda

198. Oliy Majlis Konstitutsiyaga o'zgartirish va qo'shimchalar kiritish to'g'risidagi konstitutsiyaviy qonunni tegishli taklif kiritilgandan keyin necha oy mobaynida qabul qilishi mumkin?
   A) uch oy mobaynida
   B) o'n ikki oy mobaynida
   C) olti oy mobaynida
   D) bir oy mobaynida
   JAVOB: C
   ASOS: 155-modda

199. Agar Oliy Majlis Konstitutsiyani o'zgartirish to'g'risidagi taklifni rad etsa, taklif qachon qayta kiritilishi mumkin?
   A) bir oy o'tgandan keyingina
   B) olti oy o'tgandan keyingina
   C) umuman qayta kiritilmaydi
   D) bir yil o'tgandan keyingina
   JAVOB: D
   ASOS: 155-modda

200. Konstitutsiyani o'zgartirish va qo'shimchalar kiritish to'g'risidagi konstitutsiyaviy qonunni qabul qilish vakolati kimga tegishli?
   A) O'zbekiston Respublikasining Prezidentiga
   B) Vazirlar Mahkamasiga
   C) O'zbekiston Respublikasining Oliy Majlisiga
   D) Konstitutsiyaviy sudiga
   JAVOB: C
   ASOS: 155-modda`;

const lines = rawText.split('\n');

const questions = [];
let currentQ = null;
let currentOptions = [];
let correctChar = '';
let legalBasis = '';

const optionMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

function saveCurrent() {
  if (currentQ && currentOptions.length === 4 && correctChar) {
    const correctIndex = optionMap[correctChar] ?? 0;
    const correctOptionText = currentOptions[correctIndex] || '';
    const numMatch = currentQ.match(/^(\d+)\.\s*(.*)/s);
    const qNum = numMatch ? numMatch[1] : (questions.length + 1);
    const qText = numMatch ? numMatch[2].trim() : currentQ.trim();

    questions.push({
      id: `konst-new-${qNum}`,
      topicId: 'konstitutsiya',
      question: qText,
      options: currentOptions,
      correctIndex: correctIndex,
      explanation: `To‘g‘ri javob: ${correctChar}) ${correctOptionText}. Qonuniy asos: O‘zbekiston Respublikasi Konstitutsiyasi, ${legalBasis || 'tegishli modda'}.`,
      legalBasis: `O'zR Konstitutsiyasi, ${legalBasis}`,
      difficulty: parseInt(qNum, 10) > 130 ? 'o‘rta' : 'oson',
      yearOrSource: 'Yangi Konstitutsiya (2023)'
    });
  }
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  const numMatch = line.match(/^(\d+)\.\s+(.*)/);
  if (numMatch) {
    saveCurrent();
    currentQ = line;
    currentOptions = [];
    correctChar = '';
    legalBasis = '';
    continue;
  }

  const optMatch = line.match(/^([A-D])\)\s+(.*)/);
  if (optMatch) {
    currentOptions.push(optMatch[2].trim());
    continue;
  }

  const javobMatch = line.match(/^JAVOB:\s*([A-D])/i);
  if (javobMatch) {
    correctChar = javobMatch[1].toUpperCase();
    continue;
  }

  const asosMatch = line.match(/^ASOS:\s*(.*)/i);
  if (asosMatch) {
    legalBasis = asosMatch[1].trim();
    continue;
  }

  // continuation line
  if (currentOptions.length > 0 && !correctChar) {
    currentOptions[currentOptions.length - 1] += ' ' + line;
  } else if (currentQ && currentOptions.length === 0) {
    currentQ += ' ' + line;
  }
}

saveCurrent();

console.log('Total parsed questions:', questions.length);

const output = `import { Question } from '../types';

export const KONSTITUTSIYA_200_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/konstitutsiyaQuestions.ts', output, 'utf8');
console.log('Successfully wrote src/data/konstitutsiyaQuestions.ts!');
