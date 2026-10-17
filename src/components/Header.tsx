import React, { useState } from 'react';
import { Menu, Clock, BarChart3, AlertCircle, LogOut, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from './FirebaseProvider';

interface HeaderProps {
  onStartDtmExam: () => void;
  onStartAralashTest?: () => void;
  onOpenCheatSheet?: () => void;
  onOpenStats: () => void;
  onStartMistakesPractice: () => void;
  mistakesCount: number;
  onGoHome: () => void;
  activeView: 'home' | 'quiz' | 'result' | 'manbalar' | 'xronologiya';
  onOpenNavMenu: (tab?: 'sozlamalar' | 'manbalar' | 'sertifikat' | 'xronologiya') => void;
  onOpenMilliySertifikat?: () => void;
  onOpenIntroVideo?: () => void;
  onOpenSplashScreen?: () => void;
  currentSession?: any;
}

export const Header: React.FC<HeaderProps> = ({
  onStartDtmExam,
  onOpenStats,
  onStartMistakesPractice,
  mistakesCount,
  onGoHome,
  onOpenNavMenu,
  onOpenIntroVideo,
  onOpenSplashScreen,
  activeView,
  currentSession,
}) => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const showProgress = activeView === 'quiz' && currentSession && currentSession.timeLimitSeconds > 0 && !currentSession.isFinished;
  const pct = showProgress ? Math.max(0, Math.min(100, (currentSession.timeRemainingSeconds / currentSession.timeLimitSeconds) * 100)) : 0;
  
  // Dynamic colors: Green (high time) > Orange (medium) > Red (critical/low)
  const isCritical = showProgress && pct <= 10;
  const barColorClass = pct > 50 
    ? 'bg-emerald-500' 
    : pct > 15 
    ? 'bg-amber-500' 
    : `bg-rose-500 ${isCritical ? 'animate-pulse' : ''}`;

  const labelColorClass = pct > 50
    ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
    : pct > 15
    ? 'text-amber-700 bg-amber-50 border-amber-200'
    : `text-rose-600 bg-rose-50 border-rose-200 ${isCritical ? 'animate-pulse' : ''}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DD] text-[#1E1A16] transition-colors shadow-xs relative">
      <div className="w-full px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Logo with motion/react entrance and continuous subtle pulse */}
        <motion.button
          onClick={onGoHome}
          id="brand-logo-btn"
          className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
          initial={{ opacity: 0, y: -8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-8.5 h-8.5 sm:w-9 sm:h-9 bg-[#FACC15] group-hover:bg-[#EAB308] text-[#1E1A16] font-bold flex items-center justify-center rounded-lg text-2xl sm:text-[25px] leading-none -rotate-6 transition-all select-none shadow-sm border border-[#EAB308]/40 pb-0.5 relative"
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-syne font-extrabold text-xl sm:text-2xl tracking-tight text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors uppercase">
              MODDA
            </span>
          </div>
        </motion.button>

        {/* Action Bar */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mistakes Button */}
          {mistakesCount > 0 && (
            <button
              id="header-mistakes-btn"
              onClick={onStartMistakesPractice}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-[#FAF5ED] border border-[#E6DCC8] text-[#8C6B38] text-xs font-semibold hover:border-[#8C6B38] transition-all"
              title={`${mistakesCount} ta xato ustida ishlash`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-[#8C6B38]" />
              <span className="hidden sm:inline">Xatolar</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#8C6B38] text-white text-[9px] font-bold">
                {mistakesCount}
              </span>
            </button>
          )}

          {/* Intro / Splash Video Button */}
          {onOpenIntroVideo && (
            <button
              id="header-intro-video-btn"
              onClick={onOpenIntroVideo}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
              title="7-sekundlik Intro video va Splash Screen"
            >
              <Play className="w-3 h-3 text-amber-700 fill-amber-700" />
              <span className="inline font-semibold">Intro</span>
            </button>
          )}

          {/* Main Menyu Button */}
          <button
            id="header-nav-toggle-btn"
            onClick={() => onOpenNavMenu('sozlamalar')}
            className="p-2 rounded-lg bg-white border border-[#DDD7CD] hover:border-[#8C6B38] text-[#1E1A16] hover:text-[#8C6B38] transition-colors shadow-2xs cursor-pointer"
            title="Asosiy menyuni ochish"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* User Profile Avatar with Dropdown */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-8.5 h-8.5 rounded-full border border-[#DDD7CD] hover:border-[#8C6B38] overflow-hidden transition-all shadow-2xs flex items-center justify-center bg-white cursor-pointer"
                title={user.displayName || 'Profil'}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-bold text-xs text-[#8C6B38] uppercase">
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </span>
                )}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl border border-[#DDD7CD] shadow-lg py-1.5 z-50 text-[#1E1A16] animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-[#EAE5DD] text-left">
                    <p className="text-xs font-bold truncate text-[#1E1A16]">
                      {user.displayName || 'Foydalanuvchi'}
                    </p>
                    <p className="text-[10px] text-[#736B60] truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      logout();
                    }}
                    className="w-full flex items-center space-x-2.5 px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50/50 transition-colors text-left cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 shrink-0 stroke-[2.5]" />
                    <span>Tizimdan chiqish</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Persistent shrinking horizontal progress bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-stone-200/50 flex items-center justify-end">
          <div
            className={`h-full absolute left-0 top-0 transition-all duration-1000 ease-linear ${barColorClass}`}
            style={{ width: `${pct}%` }}
          />
          <span className={`absolute right-4 -top-5 text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded border shadow-2xs leading-none z-20 ${labelColorClass}`}>
            {Math.round(pct)}%
          </span>
        </div>
      )}
    </header>
  );
};



