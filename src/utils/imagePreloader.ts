/**
 * Utility to pre-warm browser cache and decode images off the main thread
 * ensuring 0ms instant display and zero animation stutter when pages open.
 */

const CRITICAL_IMAGES = [
  '/assets/images/uzbekistan_courtroom.avif',
  '/assets/images/uzbekistan_courtroom.webp',
  '/assets/images/uzbekistan_courtroom.jpg',
  '/assets/images/law_pencil_sketch.avif',
  '/assets/images/law_pencil_sketch.webp',
  '/assets/images/law_pencil_sketch.jpg',
  '/assets/images/chronology_sketch.avif',
  '/assets/images/chronology_sketch.webp',
  '/assets/images/chronology_sketch.jpg',
  '/assets/images/luxury_pen_case.avif',
  '/assets/images/luxury_pen_case.webp',
  '/assets/images/luxury_pen_case.jpg'
];

export const preWarmAndDecodeImages = () => {
  if (typeof window === 'undefined') return;

  CRITICAL_IMAGES.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.decoding = 'async';
    if (typeof img.decode === 'function') {
      img.decode().catch(() => {
        // Ignored, decoding failure will gracefully fallback to standard render
      });
    }
  });
};
