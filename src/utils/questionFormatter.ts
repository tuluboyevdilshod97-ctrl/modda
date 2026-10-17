import { Question } from '../types';

/**
 * Utility functions for cleaning and formatting question texts and metadata.
 * Strips school grade/class references ("11-sinf darsligiga ko'ra", "8-sinf Darsligi", etc.)
 * as requested for a cleaner, professional exam experience.
 */

export function cleanQuestionText(text: string): string {
  if (!text) return '';
  let cleaned = text
    .replace(/^[0-9]+-sinf\s+(?:Davlat\s+va\s+huquq\s+asoslari\s+)?(?:darsligiga\s+ko['‘`]?ra|darsligi\s+bo['‘`]?yicha|darsligida),?\s*/gi, '')
    .replace(/^Darslikka\s+ko['‘`]?ra,?\s*/gi, '')
    .replace(/^[0-9]+-sinf\s+darsligi\s+[0-9]+-mavzusiga\s+ko['‘`]?ra,?\s*/gi, '')
    .replace(/^[0-9]+-sinfda\s+o['‘`]?tiladigan\s+/gi, '')
    .trim();

  // Ensure first letter is capitalized
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return cleaned;
}

export function cleanSourceBadge(badge?: string): string | null {
  if (!badge) return null;
  const trimmed = badge.trim();

  // If it's purely a grade mention like "8-sinf Darsligi", "9-sinf Darsligi", hide it completely
  if (/^[0-9]+-sinf\s+(?:darsligi|darslik)$/i.test(trimmed)) {
    return null;
  }

  // Remove leading grade mentions like "8-sinf Darsligi (5-mavzu)" -> "5-mavzu" or "8-sinf "
  const cleaned = trimmed
    .replace(/^[0-9]+-sinf\s+(?:darsligi|darslik)\s*/i, '')
    .replace(/^[0-9]+-sinf\s+/i, '')
    .replace(/^,\s*/, '')
    .replace(/^\((.+)\)$/, '$1') // strip outer parens if alone, e.g. "(5-mavzu)" -> "5-mavzu"
    .trim();

  if (!cleaned || /^[0-9]+-sinf$/i.test(cleaned)) {
    return null;
  }

  return cleaned;
}

export function cleanLegalBasis(basis?: string): string | null {
  if (!basis) return null;
  const trimmed = basis.trim();

  // If it only says "11-sinf darsligi" or "8-sinf Davlat va huquq asoslari"
  const cleaned = trimmed
    .replace(/^[0-9]+-sinf\s+darsligi,\s*/i, '')
    .replace(/^[0-9]+-sinf\s+darsligi\s*/i, '')
    .replace(/^[0-9]+-sinf\s+/i, '')
    .trim();

  return cleaned || null;
}

export function isQuestionCorrect(q: Question, userChoice: number | string | undefined): boolean {
  if (userChoice === undefined || userChoice === null || userChoice === '') return false;

  if (q.questionType === 'ochiq' || q.questionType === 'muvofiqlik') {
    if (typeof userChoice === 'string' && q.correctAnswerText) {
      const cleanUser = userChoice.trim().replace(/\s+/g, ' ').toLowerCase();
      const cleanCorrect = q.correctAnswerText.trim().replace(/\s+/g, ' ').toLowerCase();
      return cleanUser === cleanCorrect;
    }
    return false;
  }

  // default / yopiq / kazus
  return userChoice === q.correctIndex;
}
