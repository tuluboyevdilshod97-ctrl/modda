import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface SlidePageTransitionProps {
  isOpen: boolean;
  onClose: () => void;
  viewName: string;
  children: React.ReactNode;
  showBackHeader?: boolean;
  backTitle?: string;
  zIndex?: number;
}

export const SlidePageTransition: React.FC<SlidePageTransitionProps> = ({
  isOpen,
  onClose,
  viewName,
  children,
  showBackHeader = false,
  backTitle = "Orqaga qaytish",
  zIndex = 50,
}) => {
  // Render state: keeps component in DOM during exit animation
  const [shouldRender, setShouldRender] = useState(isOpen);
  // Animation state: drives translateX and opacity classes
  const [isSlideIn, setIsSlideIn] = useState(false);
  
  const panelRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const isClosingRef = useRef(false);

  // Touch tracking refs for vanilla JS swipe-to-close
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isDraggingRef = useRef(false);

  // Trigger smooth 400ms slide-out close
  const triggerClose = useCallback((fromHistoryPop = false) => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    // Slide out to the right
    setIsSlideIn(false);

    if (panelRef.current) {
      panelRef.current.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
      panelRef.current.style.transform = 'translateX(100%)';
    }
    if (overlayRef.current) {
      overlayRef.current.style.transition = 'opacity 400ms ease';
      overlayRef.current.style.opacity = '0';
    }

    // Handle History API: if close wasn't triggered by popstate itself, go back
    if (!fromHistoryPop && window.history.state?.view === viewName) {
      try {
        window.history.back();
      } catch {
        // Fallback if history state cannot be popped
      }
    }

    // Wait exactly 400ms for slide animation to complete, then unmount
    setTimeout(() => {
      setShouldRender(false);
      isClosingRef.current = false;
      onClose();
    }, 400);
  }, [onClose, viewName]);

  // Handle open / close lifecycle
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      isClosingRef.current = false;

      // Push history state with Vanilla JS History API
      const targetHash = '#' + viewName;
      if (window.location.hash !== targetHash) {
        window.history.pushState({ view: viewName }, '', targetHash);
      }

      // Lock body scroll while slide-over page is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Next tick triggers slide-in from right: translateX(0) in 400ms
      const rAF = requestAnimationFrame(() => {
        setIsSlideIn(true);
        if (panelRef.current) {
          panelRef.current.style.transform = 'translateX(0)';
          panelRef.current.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
        }
        if (overlayRef.current) {
          overlayRef.current.style.opacity = '1';
          overlayRef.current.style.transition = 'opacity 400ms ease';
        }
      });

      return () => {
        cancelAnimationFrame(rAF);
        document.body.style.overflow = originalOverflow;
      };
    } else if (shouldRender) {
      triggerClose(false);
    }
  }, [isOpen, viewName]);

  // Vanilla JS Event Listeners:
  // 1. Browser Back / PopState
  // 2. ESC key press
  useEffect(() => {
    if (!shouldRender) return;

    // 1. History API: Browser Back Button
    const handlePopState = (e: PopStateEvent) => {
      // If user pressed browser back button away from this view
      if (e.state?.view !== viewName) {
        triggerClose(true);
      }
    };
    window.addEventListener('popstate', handlePopState);

    // 2. ESC Key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        e.stopPropagation();
        triggerClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shouldRender, viewName, triggerClose]);

  // 3. Touch Swipe Gesture (Vanilla JS touchstart, touchmove, touchend)
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !shouldRender) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      // Only initiate swipe if starting near edge or general swipe gesture
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      };
      isDraggingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || isClosingRef.current) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      // Check if predominantly horizontal swipe to the right
      if (deltaX > 15 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
        isDraggingRef.current = true;
        
        // Live drag follow finger
        panel.style.transition = 'none';
        panel.style.transform = `translateX(${Math.max(0, deltaX)}px)`;

        // Live diminish backdrop opacity proportionally
        if (overlayRef.current) {
          const ratio = Math.max(0, Math.min(1, 1 - deltaX / (window.innerWidth * 0.8)));
          overlayRef.current.style.opacity = `${ratio}`;
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || !isDraggingRef.current) {
        touchStartRef.current = null;
        isDraggingRef.current = false;
        return;
      }

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaTime = Date.now() - touchStartRef.current.time;
      const velocity = deltaX / Math.max(deltaTime, 1);

      touchStartRef.current = null;
      isDraggingRef.current = false;

      // Close if swiped > 80px or flicked quickly to the right
      if (deltaX > 80 || (velocity > 0.45 && deltaX > 40)) {
        triggerClose(false);
      } else {
        // Snap back to 0
        panel.style.transition = 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)';
        panel.style.transform = 'translateX(0)';
        if (overlayRef.current) {
          overlayRef.current.style.transition = 'opacity 260ms ease';
          overlayRef.current.style.opacity = '1';
        }
      }
    };

    panel.addEventListener('touchstart', handleTouchStart, { passive: true });
    panel.addEventListener('touchmove', handleTouchMove, { passive: true });
    panel.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      panel.removeEventListener('touchstart', handleTouchStart);
      panel.removeEventListener('touchmove', handleTouchMove);
      panel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [shouldRender, triggerClose]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex }}
      aria-modal="true"
      role="dialog"
    >
      {/* 1. Black blur overlay behind with 400ms fade */}
      <div
        ref={overlayRef}
        onClick={() => triggerClose(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity cursor-pointer"
        style={{
          opacity: isSlideIn ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}
        aria-label="Yopish uchun bosing"
      />

      {/* 2. Slide Container coming in from the right: translateX(100%) -> translateX(0) */}
      <div
        ref={panelRef}
        className="fixed inset-y-0 right-0 w-full bg-[#FAF8F5] text-[#1E1A16] shadow-2xl flex flex-col overflow-y-auto select-text will-change-transform"
        style={{
          transform: isSlideIn ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Optional Back Navigation Bar on top */}
        {showBackHeader && (
          <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DD] px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => triggerClose(false)}
              className="flex items-center space-x-2 text-sm font-bold text-[#8C6B38] hover:text-[#73582E] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{backTitle}</span>
            </button>
            <button
              onClick={() => triggerClose(false)}
              className="p-1.5 rounded-lg text-[#8C8479] hover:text-[#1E1A16] hover:bg-[#EAE5DD]/50 transition-colors cursor-pointer"
              title="Yopish (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Page Content */}
        <div className="flex-1 w-full min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
