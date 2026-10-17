import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Activity, 
  Share2, 
  Database, 
  Terminal, 
  ChevronRight, 
  Flame, 
  ArrowLeft,
  UserCheck,
  Search,
  BookOpen,
  Wifi,
  FileText,
  Copy,
  Check,
  Lock,
  ShieldAlert
} from 'lucide-react';

interface MockUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  signedUp: string;
  lastActive: string;
  correctAnswers: number;
  totalTests: number;
}

interface ShareLog {
  id: string;
  user: string;
  platform: 'Telegram' | 'WhatsApp' | 'Havola nusxalandi' | 'Boshqa';
  time: string;
}

export const AdminDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [onlineCount, setOnlineCount] = useState(12);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // Pulsing active online user fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        const next = prev + change;
        return next < 5 ? 5 : next > 25 ? 25 : next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '7777') {
      setIsUnlocked(true);
      setPinError('');
    } else {
      setPinError('Noto‘g‘ri PIN-kod! Iltimos, qaytadan urining.');
      setPinInput('');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="w-full max-w-md mx-auto py-16 px-6 text-[#1E1A16] animate-fadeIn">
        <div className="bg-white border border-[#DDD7CD] rounded-3xl p-6 sm:p-8 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF5ED] border border-[#E6DCC8] mx-auto flex items-center justify-center text-[#8C6B38]">
            <Lock className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-[#1E1A16]">Admin kirish huquqi</h2>
            <p className="text-xs text-[#736B60] leading-relaxed">
              Ushbu panel faqat platforma **Yaratuvchisi** (Siz) uchun mo‘ljallangan bo‘lib, maxfiy PIN-kod bilan himoyalangan.
            </p>
          </div>

          <form onSubmit={handleVerifyPin} className="space-y-4">
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#736B60] block">
                Xavfsiz PIN-kodni kiriting:
              </label>
              <input
                type="password"
                maxLength={6}
                placeholder="••••"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError('');
                }}
                className="w-full text-center py-3 px-4 border border-[#DDD7CD] rounded-xl text-lg font-bold tracking-widest bg-[#FAF8F5] focus:outline-none focus:border-[#8C6B38] text-[#1E1A16]"
                autoFocus
              />
            </div>

            {pinError && (
              <p className="text-xs text-rose-600 font-semibold flex items-center justify-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                {pinError}
              </p>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onBack}
                className="w-1/3 py-2.5 rounded-xl border border-[#DDD7CD] hover:bg-[#FAF5ED] text-[#736B60] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Orqaga
              </button>
              <button
                type="submit"
                className="w-2/3 py-2.5 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-3xs"
              >
                Kirish
              </button>
            </div>
          </form>

          <div className="pt-4 border-t border-[#F2EDE4] text-left">
            <div className="bg-[#FAF5ED] border border-[#E6DCC8] rounded-xl p-3 text-[10px] text-[#736B60] leading-relaxed flex items-start gap-2">
              <span className="text-xs">💡</span>
              <div>
                <strong className="text-[#8C6B38]">Yaratuvchi uchun eslatma:</strong> Sinov rejimida panelni ochish uchun maxfiy kod: <strong className="font-mono text-xs text-[#1E1A16] px-1 bg-white border border-[#DDD7CD] rounded">7777</strong> qilib sozlangan.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mockUsers: MockUser[] = [
    { id: '1', name: 'Dilshod Tuluboyev', email: 'tuluboyev.dilshod97@gmail.com', phone: '+998 93 *** 35 15', signedUp: 'Bugun, 09:12', lastActive: 'Hozir faol', correctAnswers: 28, totalTests: 30 },
    { id: '2', name: 'Hilola Karikova', email: 'karikova_h@gmail.com', phone: '+998 90 *** 12 45', signedUp: 'Kecha, 18:40', lastActive: '5 daqiqa oldin', correctAnswers: 19, totalTests: 20 },
    { id: '3', name: 'Sardorbek Ergashev', email: 'sardor_ergash@mail.ru', phone: '+998 99 *** 44 88', signedUp: '27-Sentyabr', lastActive: '2 soat oldin', correctAnswers: 42, totalTests: 50 },
    { id: '4', name: 'Rayhona Solihova', email: 'rayhona.s@edu.uz', phone: '+998 97 *** 00 22', signedUp: '25-Sentyabr', lastActive: 'Kecha', correctAnswers: 15, totalTests: 15 },
    { id: '5', name: 'Javohir Toshpo\'latov', email: 'javo_tosh@gmail.com', phone: '+998 95 *** 77 11', signedUp: '24-Sentyabr', lastActive: '3 kun oldin', correctAnswers: 8, totalTests: 15 },
  ];

  const mockShares: ShareLog[] = [
    { id: 's1', user: 'Hilola Karikova', platform: 'Telegram', time: '12 daqiqa oldin' },
    { id: 's2', user: 'Dilshod Tuluboyev', platform: 'Havola nusxalandi', time: '40 daqiqa oldin' },
    { id: 's3', user: 'Sardorbek Ergashev', platform: 'Telegram', time: '2 soat oldin' },
    { id: 's4', user: 'Noma\'lum foydalanuvchi', platform: 'WhatsApp', time: 'Kecha, 21:15' },
    { id: 's5', user: 'Rayhona Solihova', platform: 'Havola nusxalandi', time: 'Kecha, 15:30' },
  ];

  const filteredUsers = mockUsers.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 py-6 text-[#1E1A16] animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#1E1A16] border border-[#DDD7CD] transition-colors cursor-pointer shrink-0 shadow-3xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Admin boshqaruv paneli</h1>
            <p className="text-xs text-[#736B60]">
              Sayt ishga tushgandan keyin foydalanuvchilar, ulashishlar va faollik tahlillari qanday ko‘rinishi haqida simulyatsiya
            </p>
          </div>
        </div>

        {/* Live Indicator Badge */}
        <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 self-start sm:self-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            Hozir saytda: <strong className="text-sm font-sans">{onlineCount}</strong> kishi online
          </span>
        </div>
      </div>

      {/* Grid: 3 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-[#DDD7CD] rounded-2xl p-4 flex items-center justify-between shadow-2xs">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#736B60]">Ro'yxatdan o'tganlar</span>
            <h3 className="text-2xl font-bold text-[#1E1A16] font-sans">154 ta</h3>
            <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
              <UserCheck className="w-3 h-3" />
              Bugun +12 yangi a'zo
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38]">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white border border-[#DDD7CD] rounded-2xl p-4 flex items-center justify-between shadow-2xs">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#736B60]">Ayni paytda faol (Real-time)</span>
            <h3 className="text-2xl font-bold text-emerald-700 font-sans">{onlineCount} kishi</h3>
            <p className="text-[10px] text-[#736B60] font-semibold">
              So'nggi 5 daqiqadagi seanslar
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="bg-white border border-[#DDD7CD] rounded-2xl p-4 flex items-center justify-between shadow-2xs">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#736B60]">Ulashilganligi (Shares)</span>
            <h3 className="text-2xl font-bold text-[#8C6B38] font-sans">48 marta</h3>
            <p className="text-[10px] text-amber-700 font-semibold flex items-center gap-0.5">
              <Flame className="w-3 h-3 text-amber-600" />
              Telegram orqali 32 marta
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38]">
            <Share2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Grid: Left is simulated data lists, Right is the Technical Integration Manual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column (8 blocks) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* User List Panel */}
          <div className="bg-white border border-[#DDD7CD] rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#8C6B38]" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#1E1A16]">Foydalanuvchilar Ro'yxati</h3>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#736B60]" />
                <input
                  type="text"
                  placeholder="Ism yoki email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 border border-[#DDD7CD] rounded-lg text-xs bg-[#FAF8F5] focus:outline-none focus:border-[#8C6B38] w-full sm:w-48 text-[#1E1A16]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#EAE5DD] text-[#736B60] font-bold">
                    <th className="pb-2">Foydalanuvchi</th>
                    <th className="pb-2">Ro'yxatdan o'tdi</th>
                    <th className="pb-2">Oxirgi faollik</th>
                    <th className="pb-2 text-right">To'g'ri testlar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2EDE4]">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-2.5 pr-2">
                        <span className="block font-bold text-[#1E1A16]">{user.name}</span>
                        <span className="block text-[10px] text-[#736B60]">{user.email}</span>
                      </td>
                      <td className="py-2.5 text-[#595248]">{user.signedUp}</td>
                      <td className="py-2.5">
                        <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                          user.lastActive === 'Hozir faol' ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-[#FAF5ED] text-[#595248]'
                        }`}>
                          {user.lastActive}
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-semibold text-[#8C6B38] font-sans">
                        {user.correctAnswers} / {user.totalTests}
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-6 text-[#736B60]">
                        Bunday foydalanuvchi topilmadi.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Share events block */}
          <div className="bg-white border border-[#DDD7CD] rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center space-x-2 border-b border-[#EAE5DD] pb-2.5">
              <Share2 className="w-4 h-4 text-[#8C6B38]" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#1E1A16]">Oxirgi ulashishlar (Shares Log)</h3>
            </div>
            
            <div className="space-y-3">
              {mockShares.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] text-xs">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#DDD7CD] flex items-center justify-center text-[#8C6B38]">
                      <Share2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-[#1E1A16]">{log.user}</span>
                      <span className="text-[#736B60] ml-1">tizimni ulashdi</span>
                      <span className="block text-[10px] text-[#736B60] mt-0.5 font-sans">{log.time}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    log.platform === 'Telegram' 
                      ? 'bg-sky-50 text-sky-800 border border-sky-100' 
                      : log.platform === 'WhatsApp' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                      : 'bg-stone-100 text-[#595248]'
                  }`}>
                    {log.platform}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column - Integration Manual (5 blocks) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#FAF5ED] border border-[#E6DCC8] rounded-2xl p-5 shadow-2xs text-[#1E1A16] space-y-4">
            <div className="flex items-center space-x-2 border-b border-[#E6DCC8] pb-2.5">
              <Database className="w-5 h-5 text-[#8C6B38]" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#8C6B38]">Real tizimga bog‘lash qo‘llanmasi</h3>
            </div>

            <p className="text-xs text-[#595248] leading-relaxed">
              Saytni haqiqiy foydalanuvchilar uchun internetga yuklaganingizdan keyin ushbu ma’lumotlarni real vaqtda olish uchun eng yaxshi usullar va texnologiyalar ro‘yxati:
            </p>

            {/* Step 1 */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#1E1A16] flex items-center gap-1.5 uppercase">
                <span className="w-5 h-5 rounded-full bg-[#8C6B38] text-white flex items-center justify-center text-[10px] font-sans font-bold">1</span>
                Foydalanuvchilar (Firebase Auth)
              </h4>
              <p className="text-[11px] text-[#736B60] leading-relaxed pl-6">
                Google Firebase tizimini yoqish orqali foydalanuvchilarning hisob ochishi, imtihon natijalari va shaxsiy ma'lumotlarini osongina saqlashingiz mumkin. Tizimda admin panel yaratish uchun ma'lumotlar Firestore orqali o'qiladi.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#1E1A16] flex items-center gap-1.5 uppercase">
                <span className="w-5 h-5 rounded-full bg-[#8C6B38] text-white flex items-center justify-center text-[10px] font-sans font-bold">2</span>
                Online faollar (Presence API)
              </h4>
              <p className="text-[11px] text-[#736B60] leading-relaxed pl-6">
                <strong>Socket.io</strong> yoki <strong>Firebase Realtime Database Presence</strong> yordamida har bir foydalanuvchi saytni ochganda va yopganda serverga belgi (ping) yuboriladi. Admin oynasida online soni soniyali o'zgaradi.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#1E1A16] flex items-center gap-1.5 uppercase">
                <span className="w-5 h-5 rounded-full bg-[#8C6B38] text-white flex items-center justify-center text-[10px] font-sans font-bold">3</span>
                Ulashishlar (Google Analytics 4)
              </h4>
              <p className="text-[11px] text-[#736B60] leading-relaxed pl-6">
                Google Analytics o'rnatib, tugmalarga custom hodisa (Event tracking) bog'lanadi. Masalan: <code>ReactGA.event('share_clicked')</code>. Shunda siz xorijiy va mahalliy ulashuvchilarni batafsil ko'ra olasiz.
              </p>
            </div>

            {/* Technical Snippet */}
            <div className="bg-[#101524] rounded-xl p-3 text-[10px] font-mono text-[#ECE6D9] space-y-1.5 relative group border border-[#1D263B]">
              <div className="flex items-center justify-between text-[9px] text-[#7F8F9F] border-b border-[#1D263B] pb-1">
                <span>EVENT TRACKING SNIPPET</span>
                <button
                  onClick={() => copyToClipboard(`// Firebase share event
db.collection('shares').add({
  userId: currentUser.id,
  platform: 'telegram',
  timestamp: new Date()
});`, 'code-snippet')}
                  className="hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  {copiedText === 'code-snippet' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Nusxalash</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto leading-relaxed">
{`// Firebase share event
db.collection('shares').add({
  userId: currentUser.id,
  platform: 'telegram',
  timestamp: new Date()
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
