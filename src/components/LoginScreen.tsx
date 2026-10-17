import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from './FirebaseProvider';
import { Shield, Lock, Award, GraduationCap, CheckCircle, Scale, ChevronRight, User as UserIcon, Mail, Key } from 'lucide-react';

export const LoginScreen: React.FC = () => {
  const { signInWithGoogle, registerWithEmail, loginWithEmail, loginAsGuest, loading } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // Input fields state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const user = await signInWithGoogle();
      if (!user) {
        // User closed or dismissed the popup — no error needed
        return;
      }
    } catch (e: any) {
      if (
        e?.code !== 'auth/popup-closed-by-user' &&
        e?.code !== 'auth/cancelled-popup-request' &&
        e?.code !== 'auth/user-cancelled'
      ) {
        setErrorMsg("Google hisobi orqali autentifikatsiyadan o'tib bo'lmadi. Qaytadan urinib ko'ring.");
      }
    }
  };

  const handleEmailAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email || !password) {
      setErrorMsg("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Parol kamida 6 ta belgidan iborat bo'lishi lozim.");
      return;
    }

    try {
      if (authMode === 'register') {
        if (!name) {
          setErrorMsg("Iltimos, ism-sharifingizni kiriting.");
          return;
        }
        await registerWithEmail(email, password, name);
        setSuccessMsg("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");
      } else {
        await loginWithEmail(email, password);
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setErrorMsg("Ushbu elektron pochta manzili allaqachon ro'yxatdan o'tkazilgan.");
      } else if (err.code === 'auth/invalid-email') {
        setErrorMsg("Noto'g'ri elektron pochta manzili kiritildi.");
      } else if (err.code === 'auth/weak-password') {
        setErrorMsg("Parol juda zaif. Kamida 6 ta belgidan foydalaning.");
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setErrorMsg("Elektron pochta manzili yoki parol noto'g'ri.");
      } else {
        setErrorMsg("Xatolik yuz berdi: " + (err.message || "Iltimos, qayta urinib ko'ring."));
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-[#FAF8F5] text-[#1E1A16] overflow-hidden">
      {/* Side Brand panel - visible on md and up */}
      <div className="relative hidden md:flex md:w-[45%] lg:w-[40%] text-white p-12 flex-col justify-between border-r border-[#8C6B38]/20 shrink-0 overflow-hidden">
        {/* Elegant pen background image */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source srcSet="/assets/images/luxury_pen_case.avif" type="image/avif" />
            <source srcSet="/assets/images/luxury_pen_case.webp" type="image/webp" />
            <img
              src="/assets/images/luxury_pen_case.jpg"
              alt="Ruchka orqa foni"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
        
        <div className="relative z-20 space-y-8 drop-shadow-md">
          <motion.div
            className="flex items-center space-x-3.5 select-none"
            initial={{ opacity: 0, y: -10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="w-11 h-11 bg-[#FACC15] text-[#1E1A16] font-bold flex items-center justify-center rounded-xl text-3xl leading-none -rotate-6 shadow-md border border-[#EAB308]/60 pb-0.5 relative"
              style={{ fontFamily: 'Calibri, "Segoe UI", sans-serif' }}
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  '0 0 0 0 rgba(250, 204, 21, 0.6)',
                  '0 0 0 8px rgba(250, 204, 21, 0)',
                  '0 0 0 0 rgba(250, 204, 21, 0)',
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.15, rotate: 0 }}
            >
              m
            </motion.div>
            <div>
              <h1 className="font-syne text-2xl font-black uppercase tracking-tight text-white drop-shadow-sm">
                MODDA
              </h1>
              <p className="text-[10px] text-[#E6DCC8]/85 font-semibold tracking-widest uppercase">
                Milliy Sertifikat & BMBA
              </p>
            </div>
          </motion.div>

          <div className="space-y-4 pt-8">
            <h2
              className="text-2xl lg:text-3xl font-extrabold text-white leading-tight -mt-[32px] -ml-[3px]"
              style={{ paddingTop: '-12px', marginLeft: '-3px', marginTop: '-32px' }}
            >
              O‘zbekiston qonunchiligi bo‘yicha eng mukammal test platformasi
            </h2>
            <p className="text-sm text-[#C4BCB2] leading-relaxed">
              Yangi tahrirdagi Konstitutsiya (2023), yangi Mehnat kodeksi, Fuqarolik, Oila, Ma’muriy va Jinoyat kodeksi bo‘yicha 2024–2025 yillarning rasmiy testlari.
            </p>
          </div>
        </div>

        <div className="relative z-10 text-[11px] text-[#8A8175] flex items-center justify-between border-t border-[#8C6B38]/10 pt-4">
          <span>© 2026 Huquqshunoslik Tizimi</span>
          <span>Barcha huquqlar himoyalangan</span>
        </div>
      </div>

      {/* Main interactive Login / Register form */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-10 md:p-16 relative overflow-y-auto">
        <motion.div
          className="absolute top-6 left-6 md:hidden flex items-center space-x-2 select-none cursor-pointer"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-8 h-8 bg-[#FACC15] text-[#1E1A16] font-bold flex items-center justify-center rounded-lg text-2xl leading-none -rotate-6 shadow-sm border border-[#EAB308]/60 pb-0.5 relative"
            style={{ fontFamily: 'Calibri, "Segoe UI", sans-serif' }}
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                '0 0 0 0 rgba(250, 204, 21, 0.6)',
                '0 0 0 6px rgba(250, 204, 21, 0)',
                '0 0 0 0 rgba(250, 204, 21, 0)',
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            m
          </motion.div>
          <span className="font-syne text-base font-black uppercase tracking-tight text-[#1E1A16]">MODDA</span>
        </motion.div>

        <div className="w-full max-w-md space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#DDD7CD] shadow-xl md:shadow-none md:border-0 md:bg-transparent my-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#FAF5ED] border border-[#E6DCC8] text-xs text-[#8C6B38] font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Xavfsiz Tizim</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1A16] tracking-tight">
              {authMode === 'login' ? 'Tizimga kirish' : 'Ro‘yxatdan o‘tish'}
            </h3>
            <p className="text-xs sm:text-sm text-[#736B60] leading-relaxed">
              Platforma xavfsizligi va natijalar sinxronizatsiyasi uchun istalgan usul orqali hisobingizga kiring.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium animate-in fade-in duration-200">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium animate-in fade-in duration-200">
              {successMsg}
            </div>
          )}

          {/* Email & Password login form */}
          <form onSubmit={handleEmailAuthSubmit} className="space-y-4">
            {authMode === 'register' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#5C544A] uppercase tracking-wider">Ism-sharifingiz</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#8C8479]">
                    <UserIcon className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masalan: Dilshod Tuluboyev"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#DDD7CD] focus:border-[#8C6B38] rounded-xl text-sm transition-all focus:outline-none placeholder-[#A39A8F]"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#5C544A] uppercase tracking-wider">Elektron pochta (Email)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#8C8479]">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masalan: misol@mail.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#DDD7CD] focus:border-[#8C6B38] rounded-xl text-sm transition-all focus:outline-none placeholder-[#A39A8F]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#5C544A] uppercase tracking-wider">Parol</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#8C8479]">
                  <Key className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Kamida 6 ta belgi"
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#DDD7CD] focus:border-[#8C6B38] rounded-xl text-sm transition-all focus:outline-none placeholder-[#A39A8F]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#8C6B38] text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-[#73582E] active:scale-[0.98] cursor-pointer shadow-md disabled:opacity-50"
            >
              {loading ? 'Kutib turing...' : (authMode === 'login' ? "Tizimga kirish" : "Ro‘yxatdan o‘tish")}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-[#EAE5DD]"></div>
            <span className="flex-shrink mx-4 text-xs font-semibold text-[#8C8479] uppercase tracking-widest">Yoki</span>
            <div className="flex-grow border-t border-[#EAE5DD]"></div>
          </div>

          {/* Core Action: Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-between p-3.5 rounded-xl border border-[#DDD7CD] hover:border-[#8C6B38] bg-white text-[#1E1A16] font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 active:scale-[0.98] cursor-pointer hover:shadow-xs hover:bg-[#FAF8F5] group"
          >
            <div className="flex items-center space-x-3.5">
              {/* Google Icon logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="group-hover:text-[#8C6B38] transition-colors">
                Google orqali kirish
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8C8479] group-hover:text-[#8C6B38] group-hover:translate-x-0.5 transition-all shrink-0" />
          </button>

          {/* Quick Admin / Guest Direct Entrance */}
          <button
            type="button"
            onClick={loginAsGuest}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-dashed border-[#8C6B38]/50 hover:border-[#8C6B38] bg-[#FAF8F5] text-[#8C6B38] font-bold text-xs sm:text-sm tracking-wide transition-all hover:bg-[#FAF5ED] active:scale-[0.98] cursor-pointer"
          >
            <span>Ro‘yxatdan o‘tmasdan tezkor kirish (Admin rejimi)</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Toggle Form Mode */}
          <div className="text-center text-xs sm:text-sm">
            {authMode === 'login' ? (
              <p className="text-[#736B60]">
                Sizda hali hisob yo‘qmi?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg(null);
                    setSuccessMsg(null);
                    setAuthMode('register');
                  }}
                  className="font-bold text-[#8C6B38] hover:underline cursor-pointer"
                >
                  Yangi hisob yaratish
                </button>
              </p>
            ) : (
              <p className="text-[#736B60]">
                Sizda allaqachon hisob bormi?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg(null);
                    setSuccessMsg(null);
                    setAuthMode('login');
                  }}
                  className="font-bold text-[#8C6B38] hover:underline cursor-pointer"
                >
                  Tizimga kirish
                </button>
              </p>
            )}
          </div>

          {/* Information box */}
          <div className="rounded-2xl bg-[#FAF5ED] border border-[#E6DCC8] p-4 space-y-2 text-xs leading-relaxed text-[#5C544A]">
            <div className="flex items-center space-x-2 text-[#8C6B38] font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Xavfsizlik Kafolati</span>
            </div>
            <p>
              Hamma ma'lumotlar shifrlangan holatda (Firebase Auth) saqlanadi. Pochtalar va parollar mutlaqo xavfsiz va daxlsizdir.
            </p>
          </div>

          <div className="text-center text-xs text-[#8C8479] md:hidden">
            © 2026 Huquqshunoslik Tizimi
          </div>
        </div>
      </div>
    </div>
  );
};
