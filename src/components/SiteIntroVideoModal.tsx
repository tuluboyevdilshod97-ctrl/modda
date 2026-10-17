import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, Download, X, Sparkles, Volume2, VolumeX, CheckCircle2, Maximize2, Minimize2, Image } from 'lucide-react';

interface SiteIntroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSplash?: () => void;
}

export const SiteIntroVideoModal: React.FC<SiteIntroVideoModalProps> = ({ isOpen, onClose, onOpenSplash }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageSaved, setImageSaved] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  const TOTAL_DURATION = 7.0; // 7 seconds

  // Sound effects generator using Web Audio API
  const playSoundEffect = (type: 'whoosh' | 'thud' | 'chime') => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (type === 'whoosh') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(360, ctx.currentTime + 1.2);
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.5);
      } else if (type === 'thud') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(170, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.28);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'chime') {
        // Luxury harmonic crystal bell chime
        [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);
          gain.gain.setValueAtTime(0.1 / (i + 1), ctx.currentTime + i * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.07);
          osc.stop(ctx.currentTime + 2.3);
        });
      }
    } catch {
      // Audio not permitted or disabled
    }
  };

  // Start / Restart animation
  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentTime(0);
    pausedTimeRef.current = 0;
    startTimeRef.current = performance.now();
    playSoundEffect('whoosh');

    setTimeout(() => {
      playSoundEffect('thud');
    }, 2200);

    setTimeout(() => {
      playSoundEffect('chime');
    }, 3800);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      pausedTimeRef.current = currentTime;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    } else {
      if (currentTime >= TOTAL_DURATION) {
        startAnimation();
      } else {
        setIsPlaying(true);
        startTimeRef.current = performance.now() - pausedTimeRef.current * 1000;
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      startAnimation();
    } else {
      setIsPlaying(false);
      setCurrentTime(0);
      pausedTimeRef.current = 0;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [isOpen]);

  // Main animation timer loop
  useEffect(() => {
    if (!isPlaying) return;

    let id: number;
    const updateTime = () => {
      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      if (elapsed >= TOTAL_DURATION) {
        setCurrentTime(TOTAL_DURATION);
        setIsPlaying(false);
      } else {
        setCurrentTime(elapsed);
        id = requestAnimationFrame(updateTime);
      }
    };

    id = requestAnimationFrame(updateTime);
    animationFrameRef.current = id;
    return () => cancelAnimationFrame(id);
  }, [isPlaying]);

  // Easing Functions
  const easeOutBack = (x: number): number => {
    const c1 = 1.35;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  };

  const easeInOutCubic = (x: number): number =>
    x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

  // Timeline Phase Math for Preview and Canvas
  // 1. Roll in from left to center (0.2s - 2.2s)
  const rollProgress = Math.min(1, Math.max(0, (currentTime - 0.2) / 2.0));
  const rollEased = rollProgress >= 1 ? 1 : easeOutBack(rollProgress);

  // 2. Shift left from center to final brand lockup position (2.5s - 4.0s)
  const shiftProgress = Math.min(1, Math.max(0, (currentTime - 2.5) / 1.5));
  const shiftEased = easeInOutCubic(shiftProgress);

  // 3. Text slides out from behind badge (2.7s - 4.2s)
  const textProgress = Math.min(1, Math.max(0, (currentTime - 2.7) / 1.4));
  const textEased = easeInOutCubic(textProgress);

  // 4. Subtitle "HUQUQ PLATFORMASI" appears (3.5s - 4.5s)
  const subtitleProgress = Math.min(1, Math.max(0, (currentTime - 3.5) / 1.0));

  // 5. Living & breathing phase (4.0s - 7.0s): "Birgalikda markazda xuddi tirik va chiroyli bo'lsin"
  const isLivingPhase = currentTime >= 4.0;
  const livingTime = Math.max(0, currentTime - 4.0);
  const breathScale = isLivingPhase ? 1 + 0.024 * Math.sin(livingTime * 2.6) : 1;
  const livingFloatY = isLivingPhase ? -5 * Math.sin(livingTime * 2.6) : 0;
  const shineOffset = Math.min(1, Math.max(0, (currentTime - 4.2) / 2.2));

  // Responsive coordinates for web DOM display
  // Dead center is 0.
  // In Phase 1: badge target is 0 (exact center). Starts at -700px.
  // In Phase 2: badge shifts from 0 to -115px (desktop) / -80px (mobile).
  // In Phase 2: text emerges from behind badge (-115px) into +75px (desktop) / +55px (mobile).
  // Total span at rest: badge [-175px, -55px], gap 15px, text [-40px, +190px] -> exact midpoint = 0!
  const previewBadgeX = -700 * (1 - rollEased) - 128 * shiftEased;
  const previewBadgeRotate = -720 * (1 - rollProgress) - 6;

  // Text container offset in DOM
  const previewTextX = -118 * shiftEased + 80 * textEased;

  // Export as HD JPEG Image (satisfies request 8 & 10)
  const exportJpegImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d')!;

    // Render final living frame at 5.5s
    drawFrameToCanvas(ctx, 1920, 1080, 5.5);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'MODDA-logotip-markazda.jpeg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);

        setImageSaved(true);
        setTimeout(() => setImageSaved(false), 3500);
      },
      'image/jpeg',
      0.95
    );
  };

  // High-Resolution 1080p 60fps Canvas Video Exporter
  const exportVideo = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportProgress(0);
    setExportSuccess(false);

    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d')!;

    const stream = canvas.captureStream(60);
    let recorder: MediaRecorder;
    try {
      recorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
          ? 'video/webm;codecs=vp9'
          : 'video/webm',
        videoBitsPerSecond: 8000000,
      });
    } catch {
      recorder = new MediaRecorder(stream);
    }

    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'MODDA-7s-Intro.webm';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 5000);

      setIsExporting(false);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 4500);
    };

    recorder.start();

    // Render 420 frames at 60 fps for 7 seconds
    const totalFrames = 420;
    for (let frame = 0; frame <= totalFrames; frame++) {
      const t = (frame / totalFrames) * TOTAL_DURATION;

      // Draw exact frame
      drawFrameToCanvas(ctx, 1920, 1080, t);
      setExportProgress(Math.round((frame / totalFrames) * 100));

      // Pacing for encoder stability
      if (frame % 14 === 0) {
        await new Promise((r) => setTimeout(r, 6));
      }
    }

    recorder.stop();
  };

  // Canvas Frame Drawing function (1920x1080 pure crisp vector rendition)
  const drawFrameToCanvas = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    // 1. Pure White Clean Background as requested
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    // Ultra-clean, subtle ambient light in center
    const bgRad = ctx.createRadialGradient(w / 2, h / 2, 60, w / 2, h / 2, 850);
    bgRad.addColorStop(0, '#FFFFFF');
    bgRad.addColorStop(0.7, '#FCFAF7');
    bgRad.addColorStop(1, '#F8F4EC');
    ctx.fillStyle = bgRad;
    ctx.fillRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2;

    // Timeline math for Canvas 1080p
    const rProg = Math.min(1, Math.max(0, (t - 0.2) / 2.0));
    const rEase = rProg >= 1 ? 1 : easeOutBack(rProg);

    const sProg = Math.min(1, Math.max(0, (t - 2.5) / 1.5));
    const sEase = easeInOutCubic(sProg);

    const tProg = Math.min(1, Math.max(0, (t - 2.7) / 1.4));
    const tEase = easeInOutCubic(tProg);

    const subProg = Math.min(1, Math.max(0, (t - 3.5) / 1.0));

    const isLive = t >= 4.0;
    const lTime = Math.max(0, t - 4.0);
    const scale = isLive ? 1 + 0.02 * Math.sin(lTime * 2.5) : 1;
    const floatY = isLive ? -4 * Math.sin(lTime * 2.5) : 0;

    // Coordinates:
    // Badge rolls in from off-screen left and stops at exact centered lockup position
    const bX = (centerX - 170) - 1200 * (1 - rEase);
    const bY = centerY;
    const bRot = ((-720 * (1 - rProg) - 6) * Math.PI) / 180;

    ctx.save();
    // Center transformation for breathing life
    ctx.translate(centerX, centerY + floatY);
    ctx.scale(scale, scale);
    ctx.translate(-centerX, -centerY);

    // 2. Draw MODDA Text FIRST (masked to emerge from behind the badge to the right)
    if (tProg > 0) {
      ctx.save();
      // Clip mask: only visible to the right of the badge's right boundary
      const badgeRightEdge = bX + 63; // 126 / 2 = 63
      ctx.beginPath();
      ctx.rect(badgeRightEdge, centerY - 140, 900, 280);
      ctx.clip();

      // Text slides out towards the right from behind badge
      const textBaseX = badgeRightEdge + 30 - (1 - tEase) * 220;
      const textBaseY = centerY - 12;

      // MODDA wordmark - pure solid dark #1E1A16 (NO glossy/shiny reflection)
      ctx.fillStyle = '#1E1A16';
      ctx.font = '900 102px "Syne", "Montserrat", "Segoe UI", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '2px';
      ctx.fillText('MODDA', textBaseX, textBaseY);

      // Subtitle "HUQUQ PLATFORMASI"
      if (subProg > 0) {
        ctx.globalAlpha = subProg;
        ctx.fillStyle = '#8C6B38'; // Elegant warm bronze
        ctx.font = '700 23px "Montserrat", "Segoe UI", sans-serif';
        ctx.textAlign = 'left';
        ctx.letterSpacing = '8px';
        ctx.fillText('HUQUQ PLATFORMASI', textBaseX + 6, textBaseY + 66);
      }

      ctx.restore();
    }

    // 3. Draw Rolling Yellow Badge "m" (drawn on top of emerging text)
    ctx.save();
    ctx.translate(bX, bY);
    ctx.rotate(bRot);

    // Yellow Badge Rounded Rect (Pure, solid, crisp)
    const badgeSize = 126;
    const rad = 24;
    ctx.fillStyle = '#FACC15'; // Warm rich gold
    ctx.shadowColor = 'rgba(234, 179, 8, 0.35)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 6;

    ctx.beginPath();
    ctx.roundRect(-badgeSize / 2, -badgeSize / 2, badgeSize, badgeSize, rad);
    ctx.fill();

    // Border
    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = '#EAB308';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    // Inner letter "m"
    ctx.fillStyle = '#1E1A16';
    ctx.font = 'bold 94px Calibri, "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('m', 0, -4);
    ctx.restore();

    ctx.restore();

    ctx.restore();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-2 sm:p-5"
        >
          {/* Main Modal Presentation Card */}
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className={`w-full ${
              isFullscreen ? 'max-w-none h-full rounded-none' : 'max-w-5xl rounded-3xl'
            } bg-white shadow-2xl border border-stone-200 overflow-hidden flex flex-col relative transition-all duration-300`}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-stone-100 bg-[#FAF8F5]/85">
              <div className="flex items-center space-x-2.5">
                <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="text-xs sm:text-sm font-bold text-[#1E1A16] flex items-center gap-2">
                  <span>MODDA • 7-Sekundlik Intro Video</span>
                  <span className="text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                    Oq fon & 60 FPS
                  </span>
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 transition-all cursor-pointer"
                  title={isMuted ? 'Ovozni yoqish' : 'Ovozni o‘chirish'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 transition-all cursor-pointer hidden sm:block"
                  title={isFullscreen ? 'Kichraytirish' : 'To‘liq ekran'}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white hover:bg-rose-50 border border-stone-200 text-stone-600 hover:text-rose-600 transition-all cursor-pointer"
                  title="Yopish"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 7-Second Video Presentation Stage (Pure White Canvas & Precise Positioning) */}
            <div className="relative w-full aspect-video sm:aspect-21/9 min-h-[380px] sm:min-h-[460px] bg-white flex items-center justify-center overflow-hidden select-none">
              {/* Subtle ambient luxury light overlay */}
              <div className="absolute inset-0 bg-radial from-white via-[#FCFAF7] to-[#F8F4EC] pointer-events-none" />

              {/* Dynamic Animated Scene Group centered perfectly */}
              <div
                style={{
                  transform: `scale(${breathScale}) translateY(${livingFloatY}px)`,
                  transition: isLivingPhase ? 'transform 0.1s ease-out' : 'none',
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Combined Side-by-Side Lockup Group Container */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'none',
                  }}
                  className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 z-25"
                >
                  {/* 1. Rolling Yellow Square Badge with letter 'm' */}
                  <div
                    style={{
                      transform: `translateX(${700 * (1 - rollEased)}px) rotate(${previewBadgeRotate}deg)`,
                      transition: 'none',
                    }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    {/* Golden Yellow Square Badge - Clean, crisp, solid */}
                    <div
                      className="w-20 h-20 sm:w-26 sm:h-26 md:w-30 md:h-30 bg-[#FACC15] text-[#1E1A16] font-bold flex items-center justify-center rounded-2xl sm:rounded-3xl shadow-xl border-2 border-[#EAB308]/70 relative select-none pb-1"
                      style={{
                        fontFamily: 'Calibri, "Segoe UI", sans-serif',
                        boxShadow: '0 12px 32px -6px rgba(234, 179, 8, 0.38)',
                      }}
                    >
                      <span className="text-5xl sm:text-7xl md:text-8xl leading-none font-bold">m</span>
                    </div>
                  </div>

                  {/* 2. MODDA Text Revealing Cleanly Side-by-Side to the Right */}
                  <div
                    style={{
                      transform: `translateX(${(1 - textEased) * -40}px)`,
                      opacity: textProgress,
                      transition: 'none',
                    }}
                    className="flex flex-col justify-center select-none whitespace-nowrap"
                  >
                    {/* MODDA Wordmark (Clean solid, NO shiny/glossy glare at the end) */}
                    <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1E1A16] uppercase leading-none whitespace-nowrap">
                      MODDA
                    </h1>

                    {/* Subtitle "HUQUQ PLATFORMASI" */}
                    <div
                      style={{
                        opacity: subtitleProgress,
                        transform: `translateY(${10 * (1 - subtitleProgress)}px)`,
                      }}
                      className="mt-1 sm:mt-2 transition-all whitespace-nowrap"
                    >
                      <span className="text-[9px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[#8C6B38] block font-mono">
                        Huquq platformasi
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage Watermark / Clean Second Counter */}
              <div className="absolute bottom-4 right-6 text-[11px] font-mono font-medium text-stone-400 bg-white/70 px-2.5 py-1 rounded-lg border border-stone-200/50 backdrop-blur-xs">
                {currentTime.toFixed(1)}s / {TOTAL_DURATION.toFixed(1)}s
              </div>
            </div>

            {/* Timeline Progress Bar (0 to 7 seconds) */}
            <div className="w-full h-1.5 bg-stone-100 relative overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-amber-400 to-[#8C6B38] transition-all duration-75"
                style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
              />
            </div>

            {/* Bottom Controls Bar */}
            <div className="px-5 sm:px-6 py-4 bg-[#FAF8F5] border-t border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {/* Play / Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-[#1E1A16] font-bold text-xs uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
                  title={isPlaying ? 'To‘xtatish' : 'O‘ynatish'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-600" /> : <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />}
                  <span>{isPlaying ? 'To‘xtatish' : 'O‘ynatish'}</span>
                </button>

                {/* Replay Button */}
                <button
                  onClick={startAnimation}
                  className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-[#1E1A16] font-bold text-xs uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
                  title="Boshidan qayta ko‘rish"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
                  <span>Qayta ko‘rish</span>
                </button>

                {/* Export as Real Video File Button */}
                <button
                  onClick={exportVideo}
                  disabled={isExporting}
                  className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#8C6B38] hover:bg-[#78592c] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                  title="7-sekundlik videoni to‘liq formatda yuklab olish"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>
                    {isExporting ? `Yozib olinmoqda (${exportProgress}%)` : 'Videoni yuklab olish (WebM)'}
                  </span>
                </button>

                {/* Export as HD JPEG Image (satisfies request 8 & 10) */}
                <button
                  onClick={exportJpegImage}
                  className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
                  title="Logotip va yozuvni markazda HD JPEG rasm qilib saqlash"
                >
                  <Image className="w-3.5 h-3.5 text-amber-700" />
                  <span>HD JPEG rasm</span>
                </button>

                {/* Open Real Fullscreen Splash Screen */}
                {onOpenSplash && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSplash();
                    }}
                    className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
                    title="Haqiqiy Splash Screen sifatida to'liq ekranda ochish"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-stone-700" />
                    <span>Splash Screen</span>
                  </button>
                )}
              </div>

              {/* Status or Close button */}
              <div className="flex items-center space-x-2.5 w-full md:w-auto justify-end">
                {exportSuccess && (
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Video fayl yuklab olindi!</span>
                  </span>
                )}
                {imageSaved && (
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>HD JPEG saqlandi!</span>
                  </span>
                )}
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-2xs cursor-pointer"
                >
                  Saytga qaytish
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
