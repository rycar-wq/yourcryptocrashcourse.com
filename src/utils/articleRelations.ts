import { getVisibleArticles } from "@/utils/articles";
import type { Article } from "@/types/article";

export function getPreviousNextArticles(currentArticle: Pick<Article, "slug">) {
  const visibleArticles = getVisibleArticles();

  const currentIndex = visibleArticles.findIndex(
    (article) => article.slug === currentArticle.slug,
  );

  return {
    previousArticle: visibleArticles[currentIndex + 1] ?? null,
    nextArticle: visibleArticles[currentIndex - 1] ?? null,
  };
}
