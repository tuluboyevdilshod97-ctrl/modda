import { ARTICLES_PART_1, ArticleItem } from './part1';
import { ARTICLES_PART_2 } from './part2';
import { ARTICLES_PART_3 } from './part3';
import { ARTICLES_PART_4 } from './part4';

export type { ArticleItem };

export const ALL_KONSTITUTSIYA_ARTICLES: Record<number, ArticleItem> = {
  ...ARTICLES_PART_1,
  ...ARTICLES_PART_2,
  ...ARTICLES_PART_3,
  ...ARTICLES_PART_4,
};

export function getKonstitutsiyaArticle(num: number): ArticleItem | undefined {
  return ALL_KONSTITUTSIYA_ARTICLES[num];
}
