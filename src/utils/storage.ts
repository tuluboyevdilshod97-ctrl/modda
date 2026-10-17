import { QuizResultHistory } from '../types';

const STORAGE_KEY_RESULTS = 'huquq_quiz_results';
const STORAGE_KEY_MISTAKES = 'huquq_mistakes_ids';

export function getSavedResults(): QuizResultHistory[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_RESULTS);
    if (!data) return [];
    const list: QuizResultHistory[] = JSON.parse(data);
    let modified = false;
    const seen = new Set<string>();
    const normalized: QuizResultHistory[] = [];

    for (const item of list) {
      let title = item.topicTitle || '';
      if (
        title.includes('Oila va Ma\'muriy') ||
        title.includes('Oila va Mamuriy') ||
        title.includes('OK / MJtK') ||
        title.includes('mamuriy_oila')
      ) {
        title = 'OK — Oila huquqi';
        modified = true;
      } else if (
        title.includes('O‘zbekiston Respublikasi Konstitutsiyasi') ||
        title.includes('O\'zbekiston Respublikasi Konstitutsiyasi') ||
        title.includes('Konstitutsiya (2023)')
      ) {
        if (title !== 'Konstitutsiya (2023)') {
          title = 'Konstitutsiya (2023)';
          modified = true;
        }
      }

      const dedupeKey = title;
      if (!seen.has(dedupeKey)) {
        seen.add(dedupeKey);
        normalized.push({
          ...item,
          topicTitle: title
        });
      } else {
        modified = true;
      }
    }

    if (modified) {
      localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(normalized));
    }

    return normalized;
  } catch (e) {
    console.error('Error reading results', e);
    return [];
  }
}

export function removeResult(id: string): void {
  try {
    const history = getSavedResults();
    const updated = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error removing result', e);
  }
}

export function saveResult(result: QuizResultHistory): void {
  try {
    const history = getSavedResults();
    const updated = [result, ...history.slice(0, 49)]; // keep latest 50
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(updated));

    // Also update mistakes list
    const currentMistakes = getSavedMistakes();
    const newMistakes = Array.from(new Set([...currentMistakes, ...result.incorrectQuestionIds]));
    localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(newMistakes));
  } catch (e) {
    console.error('Error saving result', e);
  }
}

export function getSavedMistakes(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_MISTAKES);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading mistakes', e);
    return [];
  }
}

export function removeMistake(questionId: string): void {
  try {
    const current = getSavedMistakes();
    const updated = current.filter(id => id !== questionId);
    localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(updated));
  } catch (e) {
    console.error('Error removing mistake', e);
  }
}

export function clearAllHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_RESULTS);
    localStorage.removeItem(STORAGE_KEY_MISTAKES);
  } catch (e) {
    console.error('Error clearing history', e);
  }
}

export function clearMistakesOnly(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_MISTAKES);
  } catch (e) {
    console.error('Error clearing mistakes', e);
  }
}

export function clearResultsOnly(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_RESULTS);
  } catch (e) {
    console.error('Error clearing results', e);
  }
}

