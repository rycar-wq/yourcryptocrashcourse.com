import articlesData from "@/data/articles.json";
import type { Article } from "@/types/article";

const articles = articlesData as Article[];

export const ARTICLES_PER_PAGE = 12;

export function getVisibleArticles() {
  const now = new Date();

  return [...articles]
    .filter((article) => new Date(article.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPaginatedArticles(page: number) {
  const visibleArticles = getVisibleArticles();
  const totalPages = Math.ceil(visibleArticles.length / ARTICLES_PER_PAGE);

  const start = (page - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = visibleArticles.slice(
    start,
    start + ARTICLES_PER_PAGE,
  );

  return { paginatedArticles, totalPages };
}

export function formatArticleDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
