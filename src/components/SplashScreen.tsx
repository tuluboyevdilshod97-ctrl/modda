import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ArrowRight, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
  /**
   * Total display duration in seconds before auto-dismiss. Default 4.5s.
   */
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  duration = 4.5,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const dismissedRef = useRef(false);

  // Play subtle organic sound effects
  const playSound = (type: 'whoosh' | 'thud' | 'chime') => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      if (type === 'whoosh') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.9);
        gain.gain.setValueAtTime(0.005, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.0);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.0);
      } else if (type === 'thud') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(130, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.24);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.26);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
      } else if (type === 'chime') {
        [587.33, 739.99, 880.0, 1174.66].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
          gain.gain.setValueAtTime(0.06 / (i + 1), ctx.currentTime + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.06);
          osc.stop(ctx.currentTime + 1.7);
        });
      }
    } catch {
      // Audio not permitted
    }
  };

  const handleDismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setIsDismissing(true);
    setTimeout(() => {
      onComplete();
    }, 420);
  };

  useEffect(() => {
    // 1. Initial roll whoosh sound
    const t0 = setTimeout(() => {
      playSound('whoosh');
    }, 120);

    // 2. Logo lands in dead center
    const t1 = setTimeout(() => {
      playSound('thud');
    }, 1320);

    // 3. Text locking into final place
    const t2 = setTimeout(() => {
      playSound('chime');
    }, 2150);

    // Auto-dismiss after duration
    const dismissTimer = setTimeout(() => {
      handleDismiss();
    }, duration * 1000);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(dismissTimer);
    };
  }, [duration, isMuted]);

  return (
    <div
      id="modda-splash-screen"
      className={`fixed inset-0 z-100 bg-[#FFFFFF] flex flex-col justify-between items-center select-none overflow-hidden transition-all duration-400 ease-out ${
        isDismissing ? 'opacity-0 scale-103 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Dynamic CSS styles for pure 60fps/120fps GPU compositor animation */}
      <style>{`
        #modda-splash-screen {
          --badge-size: 80px;
        }
        @media (min-width: 640px) {
          #modda-splash-screen {
            --badge-size: 96px;
          }
        }
        @media (min-width: 768px) {
          #modda-splash-screen {
            --badge-size: 112px;
          }
        }

        /* 1. Yellow Square Badge rolling in from off-screen left into its flex slot */
        @keyframes moddaBadgeMotion {
          0% {
            transform: translateX(-75vw) rotate(-720deg);
            opacity: 0.9;
          }
          65% {
            transform: translateX(0) rotate(-3deg);
            opacity: 1;
          }
          82% {
            transform: translateX(0) rotate(-6.5deg);
          }
          100% {
            transform: translateX(0) rotate(-5.5deg);
            opacity: 1;
          }
        }

        /* 2. Text Container (MODDA & HUQUQ PLATFORMASI):
           - Fades and slides in side-by-side to the right
        */
        @keyframes moddaTextMotion {
          0%, 32% {
            transform: translateX(20px);
            opacity: 0;
            visibility: hidden;
          }
          38% {
            visibility: visible;
            opacity: 0.2;
          }
          65%, 100% {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
        }

        /* Subtitle Fade and Micro-lift */
        @keyframes moddaSubtitleFade {
          0%, 45% {
            opacity: 0;
            transform: translateY(6px);
          }
          68%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Living & Breathing Float in exact center */
        @keyframes moddaLivingBreathe {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-4px) scale(1.012);
          }
        }

        /* Continuous Progress Bar */
        @keyframes moddaProgressBar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .anim-badge {
          animation: moddaBadgeMotion 4.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform;
        }

        .anim-text {
          animation: moddaTextMotion 4.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        .anim-sub {
          animation: moddaSubtitleFade 4.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        .anim-living-stage {
          animation: moddaLivingBreathe 3.4s ease-in-out infinite;
          animation-delay: 2.45s;
          will-change: transform;
        }

        .anim-progress {
          transform-origin: left;
          animation: moddaProgressBar ${duration}s linear forwards;
          will-change: transform;
        }
      `}</style>

      {/* Top Bar: Skip and Sound Toggle */}
      <div className="w-full px-5 py-4 sm:px-8 sm:py-6 flex items-center justify-between z-30">
        {/* Audio Toggle */}
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className="p-2 sm:p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
          title={isMuted ? 'Ovozni yoqish' : "Ovozni o'chirish"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
          )}
        </button>

        {/* Skip Button */}
        <button
          onClick={handleDismiss}
          className="group flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs"
        >
          <span>O‘tkazib yuborish</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Main Presentation Stage: Dead-Center Anchor Point */}
      <div className="relative w-full flex-1 flex items-center justify-center px-4 overflow-hidden">
        {/* Living Breathing Wrapper for the combined lockup */}
        <div className="relative w-full h-full flex items-center justify-center anim-living-stage">
          {/* Side-by-Side Lockup Group Container */}
          <div className="absolute top-1/2 left-1/2 anim-group flex items-center space-x-4 sm:space-x-6 md:space-x-8 z-20" style={{ transform: 'translate(-50%, -50%)' }}>
            {/*
              1. Yellow Square Badge with letter 'm'
              - Rolls in from off-screen left and sits on the left of the flex row
            */}
            <div
              className="anim-badge shrink-0 flex items-center justify-center"
              style={{
                width: 'var(--badge-size)',
                height: 'var(--badge-size)',
              }}
            >
              <div
                className="w-full h-full bg-[#FACC15] text-[#1E1A16] font-bold flex items-center justify-center rounded-2xl sm:rounded-3xl shadow-lg border-2 border-[#EAB308] select-none pb-1"
                style={{
                  fontFamily: 'Calibri, "Segoe UI", sans-serif',
                  boxShadow: '0 10px 28px -4px rgba(234, 179, 8, 0.38)',
                }}
              >
                <span className="text-5xl sm:text-6xl md:text-7xl leading-none font-bold">
                  m
                </span>
              </div>
            </div>

            {/*
              2. Brand Typography Container:
              - Sits side-by-side to the right of the badge, never overlapping
            */}
            <div className="anim-text flex flex-col justify-center select-none whitespace-nowrap">
              {/* Primary Wordmark "MODDA" (Clean, solid, dark luxury, NO glossy shimmer flare) */}
              <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1E1A16] uppercase leading-none select-none">
                MODDA
              </h1>

              {/* Subtitle "HUQUQ PLATFORMASI" */}
              <div className="mt-1 sm:mt-1.5 anim-sub">
                <span className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#8C6B38] font-mono block select-none">
                  Huquq platformasi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Clean minimalist hardware-accelerated progress bar */}
      <div className="w-full pb-6 px-8 flex flex-col items-center z-20">
        <div className="w-48 sm:w-64 h-1 bg-stone-100 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full anim-progress" />
        </div>
        <span className="text-[10px] sm:text-xs font-mono text-stone-400 mt-2 tracking-wider">
          Yuklanmoqda...
        </span>
      </div>
    </div>
  );
};
