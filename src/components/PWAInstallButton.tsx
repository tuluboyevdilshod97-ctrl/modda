import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Sparkles, Smartphone, Share, PlusSquare, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // If already installed or dismissed, hide
  if (isInstalled || dismissed) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <div className="bg-[#FAF5ED] border border-[#E6DCC8] rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs animate-fadeIn text-[#1E1A16]">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6B38] flex items-center justify-center sm:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6B38]" />
              Ilovani o'rnatish
            </h4>
            <p className="text-[11px] text-[#736B60] leading-relaxed mt-0.5">
              MODDA platformasini telefon yoki kompyuterga tezkor ilova qilib yuklab oling!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto shrink-0 justify-center">
          <button
            onClick={install}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#8C6B38] hover:bg-[#78592c] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs cursor-pointer transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>O'rnatish</span>
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-lg bg-white border border-[#DDD7CD] text-[#736B60] hover:text-[#1E1A16] cursor-pointer"
            title="Yopish"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // iOS Safari flow
  if (isIOS && !isInstalled) {
    return (
      <div className="bg-[#FAF5ED] border border-[#E6DCC8] rounded-xl p-3.5 shadow-xs animate-fadeIn text-[#1E1A16]">
        {!showIOSGuide ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6B38] flex items-center justify-center sm:justify-start gap-1">
                  iPhone ilovasi
                </h4>
                <p className="text-[11px] text-[#736B60] leading-relaxed mt-0.5">
                  Ilovani iPhone ekraniga tezkor o'rnatish qo'llanmasi.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto shrink-0 justify-center">
              <button
                onClick={() => setShowIOSGuide(true)}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#8C6B38] hover:bg-[#78592c] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs cursor-pointer"
              >
                Qanday o'rnatiladi?
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="p-1.5 rounded-lg bg-white border border-[#DDD7CD] text-[#736B60] hover:text-[#1E1A16] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 relative">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute right-0 top-0 p-1 rounded-lg bg-white border border-[#DDD7CD] text-[#736B60]"
              title="Yopish"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6B38]">
              iOS (Safari) uchun o'rnatish qo'llanmasi:
            </h4>
            <ol className="text-[11px] text-[#595248] space-y-1.5 list-decimal pl-4 pt-1">
              <li className="flex items-center gap-1.5">
                Safari brauzerining quyi qismidagi <Share className="w-3.5 h-3.5 text-blue-500 inline" /> <strong>«Ulashish» (Share)</strong> tugmasini bosing.
              </li>
              <li className="flex items-center gap-1.5">
                Menyudan pastga tushib, <PlusSquare className="w-3.5 h-3.5 inline" /> <strong>«Bosh ekranga qo'shish» (Add to Home Screen)</strong> bandini tanlang.
              </li>
              <li>
                Oyna ochilganda, o'ng yuqoridagi <strong>«Qo'shish» (Add)</strong> tugmasini bosing.
              </li>
            </ol>
            <p className="text-[10px] text-stone-500 pt-1">
              Shundan so'ng, telefoningiz ekranida MODDA ilovasi paydo bo'ladi!
            </p>
          </div>
        )}
      </div>
    );
  }

  // Default: show a simulated or always-available manual install guide
  // for devices that don't support beforeinstallprompt natively
  return (
    <div className="bg-[#FAF5ED] border border-[#E6DCC8] rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs text-[#1E1A16]">
      <div className="flex items-center space-x-3 text-center sm:text-left">
        <div className="w-10 h-10 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center shrink-0">
          <Smartphone className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6B38] flex items-center justify-center sm:justify-start gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6B38]" />
            Ilovani o'rnatish
          </h4>
          <p className="text-[11px] text-[#736B60] leading-relaxed mt-0.5">
            Platformani telefoningiz asosiy ekraniga ilova qilib joylashtiring.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 w-full sm:w-auto shrink-0 justify-center">
        <button
          onClick={() => {
            alert("Ilovani o'rnatish uchun brauzeringiz menyusini ochib (masalan Chrome'da o'ng tepadagi 3 nuqta) «Ilovani o'rnatish» (Install app) bandini tanlang.");
          }}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#8C6B38] hover:bg-[#78592c] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs cursor-pointer transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Ilova Yuklash</span>
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-lg bg-white border border-[#DDD7CD] text-[#736B60] hover:text-[#1E1A16] cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
