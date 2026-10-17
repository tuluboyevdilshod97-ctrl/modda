import { Question } from '../types';
import { MILLIY_SERTIFIKAT_1_VARIANT } from './milliySertifikat1VariantQuestions';
import { MILLIY_SERTIFIKAT_2_VARIANT } from './milliySertifikat2VariantQuestions';
import { BMBA_HUQUQ_VODIYSI_QUESTIONS } from './bmbaHuquqVodiysiQuestions';
import { BMBA_23_DEC_QUESTIONS } from './bmbaHuquqVodiysi23DecQuestions';
import { BMBA8_OTAJONOV_QUESTIONS } from './bmba8OtajonovQuestions';
import { BMBA_LEGALZONE_RAHMONALIYEV_QUESTIONS } from './bmbaLegalzoneRahmonaliyevQuestions';
import { BMBA_LEGALDOCTOR_QUESTIONS } from './bmbaLegaldoctorQuestions';
import { BMBA_OTM_2025_QIYIN_QUESTIONS } from './bmbaOtm2025QiyinQuestions';
import { BMBA_OTM_2024_QIYIN_QUESTIONS } from './bmbaOtm2024QiyinQuestions';
import { BMBA_NEW_UPLOADED_QUESTIONS } from './bmbaNewUploadedQuestions';

// 1-Variant: BMBA test (21.12.2025 @huquq_vodiysi) - 30 ta savol
export const BMBA_21_DEC_QUESTIONS: Question[] = [
  ...BMBA_HUQUQ_VODIYSI_QUESTIONS
];

// 2-Variant: BMBA test (23.12.2025 @huquq_vodiysi) - 30 ta savol
export const BMBA_23_DEC_QUESTIONS_LIST: Question[] = [
  ...BMBA_23_DEC_QUESTIONS
];

// 3-Variant: BMBA 8-test (Diyorbek Otajonov) - 30 ta savol
export const BMBA_OTAJONOV_8_QUESTIONS: Question[] = [
  ...BMBA8_OTAJONOV_QUESTIONS
];

// 4-Variant: BMBA 2026 (@HUQUQ_RAHMONALIYEV & @LEGALZONEUZ) - 30 ta savol
export const BMBA_LEGALZONE_QUESTIONS: Question[] = [
  ...BMBA_LEGALZONE_RAHMONALIYEV_QUESTIONS
];

// 5-Variant: BMBA 2026 (Legaldoctor_uz / Eldor Asadov) - 30 ta savol
export const BMBA_LEGALDOCTOR_5_QUESTIONS: Question[] = [
  ...BMBA_LEGALDOCTOR_QUESTIONS
];

// 6-Variant: BMBA 2025 OTM Imtihoni Qiyin Savollar To'plami (@sodikov_admin) - 30 ta savol
export const BMBA_OTM_2025_QUESTIONS: Question[] = [
  ...BMBA_OTM_2025_QIYIN_QUESTIONS
];

// 7-Variant: BMBA 2024 OTM Imtihoni Qiyin Savollar To'plami (@sodikov_admin) - 30 ta savol
export const BMBA_OTM_2024_QUESTIONS: Question[] = [
  ...BMBA_OTM_2024_QIYIN_QUESTIONS
];

// 8-Variant: BMBA Yangi Yuklangan Imtihon Savollari - 30 ta savol
export const BMBA_NEW_UPLOADED_QUESTIONS_LIST: Question[] = [
  ...BMBA_NEW_UPLOADED_QUESTIONS
];

// Barcha BMBA testlari to'plami
export const BMBA_USER_QUESTIONS: Question[] = [
  ...BMBA_21_DEC_QUESTIONS,
  ...BMBA_23_DEC_QUESTIONS_LIST,
  ...BMBA_OTAJONOV_8_QUESTIONS,
  ...BMBA_LEGALZONE_QUESTIONS,
  ...BMBA_LEGALDOCTOR_5_QUESTIONS,
  ...BMBA_OTM_2025_QUESTIONS,
  ...BMBA_OTM_2024_QUESTIONS,
  ...BMBA_NEW_UPLOADED_QUESTIONS
];

// Milliy sertifikat ehtimoliy testlari:
export { MILLIY_SERTIFIKAT_1_VARIANT, MILLIY_SERTIFIKAT_2_VARIANT };

// 1-Variant to'liq to'plami - 45 ta savol
export const MILLIY_SERTIFIKAT_1_QUESTIONS: Question[] = [
  ...MILLIY_SERTIFIKAT_1_VARIANT
];

// 2-Variant (Yangi rasmiy to'plam) - 45 ta savol
export const MILLIY_SERTIFIKAT_2_QUESTIONS: Question[] = [
  ...MILLIY_SERTIFIKAT_2_VARIANT
];

// Milliy sertifikat barcha aralash testlari (jami 90 ta test)
export const USER_MIXED_QUESTIONS: Question[] = [
  ...MILLIY_SERTIFIKAT_2_VARIANT,
  ...MILLIY_SERTIFIKAT_1_VARIANT
];

// Savollarni tasodifiy (random) aralashtirish funksiyasi
export const shuffleQuestions = (list: Question[]): Question[] => {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Tasodifiy miqdorda aralash savollar olish
export const getRandomUserQuestions = (count: number = 45): Question[] => {
  const shuffled = shuffleQuestions(USER_MIXED_QUESTIONS);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Resort statistikasi (mavzular bo'yicha saralangan holati)
export const USER_QUESTIONS_STATS = {
  total: USER_MIXED_QUESTIONS.length,
  byTopic: {
    konstitutsiya: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'konstitutsiya').length,
    davlat_huquq: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'davlat_huquq').length,
    mehnat: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'mehnat').length,
    jinoyat: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'jinoyat').length,
    fuqarolik: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'fuqarolik').length,
    oila: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'oila').length,
    mamuriy: USER_MIXED_QUESTIONS.filter((q) => q.topicId === 'mamuriy').length
  }
};
