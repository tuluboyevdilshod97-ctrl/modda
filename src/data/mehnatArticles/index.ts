import { MehnatArticleItem, MEHNAT_PART_1 } from './part1';
import { MEHNAT_PART_2 } from './part2';
import { MEHNAT_PART_3 } from './part3';
import { MEHNAT_PART_4 } from './part4';
import { MEHNAT_PART_5 } from './part5';
import { MEHNAT_PART_6 } from './part6';
import { MEHNAT_PART_7 } from './part7';

export { type MehnatArticleItem } from './part1';

export const ALL_MEHNAT_ARTICLES: Record<number, MehnatArticleItem> = {
  ...MEHNAT_PART_1,
  ...MEHNAT_PART_2,
  ...MEHNAT_PART_3,
  ...MEHNAT_PART_4,
  ...MEHNAT_PART_5,
  ...MEHNAT_PART_6,
  ...MEHNAT_PART_7,
};
