import articlesData from "@/data/articles.json";
import type { Article } from "@/types/article";

const articles = articlesData as Article[];
import ArticleCard from "@/components/articles/ArticleCard";
import CategoryFilter from "@/components/articles/CategoryFilter";
import ArticlesHero from "@/components/articles/ArticlesHero";
import ArticlesPagination from "@/components/articles/ArticlesPagination";
import JsonLd from "@/components/common/JsonLd";
import { generatePageMetadata, buildBreadcrumbJsonLd } from "@/utils/metadata";
import { getPaginatedArticles } from "@/utils/articles";
import { SITE_URL } from "@/utils/constants";

const { paginatedArticles, totalPages } = getPaginatedArticles(1);

export const metadata = generatePageMetadata({
  title: "Articles",
  description:
    "Short, practical crypto articles on trading, wallets, security, and blockchain basics.",
  canonical: `${SITE_URL}/articles`,
  type: "website",
});

export default function ArticlesPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Articles", url: `${SITE_URL}/articles` },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `${SITE_URL}/articles/${article.slug}`,
    })),
  };

  return (
    <main className="bg-neutral-50 min-h-screen">
      <JsonLd data={[breadcrumbSchema, itemListSchema]} />
      <ArticlesHero />

      <CategoryFilter />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <ArticlesPagination currentPage={1} totalPages={totalPages} />
      </section>
    </main>
  );
}
