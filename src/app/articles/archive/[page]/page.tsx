import { notFound } from "next/navigation";
import ArticleCard from "@/components/articles/ArticleCard";
import CategoryFilter from "@/components/articles/CategoryFilter";
import ArticlesHero from "@/components/articles/ArticlesHero";
import ArticlesPagination from "@/components/articles/ArticlesPagination";
import {
  getPaginatedArticles,
  getVisibleArticles,
  ARTICLES_PER_PAGE,
} from "@/utils/articles";

export function generateStaticParams() {
  const totalPages = Math.ceil(
    getVisibleArticles().length / ARTICLES_PER_PAGE,
  );

  return Array.from({ length: totalPages - 1 }).map((_, i) => ({
    page: String(i + 2),
  }));
}

export default async function ArticlesPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = Number(page);

  const { paginatedArticles, totalPages } = getPaginatedArticles(pageNumber);

  if (!pageNumber || pageNumber < 2 || pageNumber > totalPages) {
    return notFound();
  }

  return (
    <main className="bg-neutral-50 min-h-screen">
      <ArticlesHero />

      <CategoryFilter />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <ArticlesPagination currentPage={pageNumber} totalPages={totalPages} />
      </section>
    </main>
  );
}
