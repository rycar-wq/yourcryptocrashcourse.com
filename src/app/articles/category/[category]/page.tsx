import categories from "@/data/categories.json";
import articlesData from "@/data/articles.json";
import type { Article } from "@/types/article";

const articles = articlesData as Article[];
import ArticleCard from "@/components/articles/ArticleCard";
import CategoryFilter from "@/components/articles/CategoryFilter";
import JsonLd from "@/components/common/JsonLd";
import { categoryFromSlug, categoryToSlug } from "@/utils/categorySlug";
import { buildBreadcrumbJsonLd } from "@/utils/metadata";
import { SITE_URL, SITE_ORGANIZATION } from "@/utils/constants";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categoryFromSlug(categorySlug);

  if (!category) return {};

  return {
    title: `${category} Articles | ${SITE_ORGANIZATION.name}`,
    description: `Explore ${category.toLowerCase()} articles to help you understand crypto with confidence.`,
    openGraph: {
      title: `${category} Articles | ${SITE_ORGANIZATION.name}`,
      description: `Explore ${category.toLowerCase()} articles from the ${SITE_ORGANIZATION.name} collection.`,
      url: `${SITE_URL}/articles/category/${categorySlug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categoryFromSlug(categorySlug);

  if (!category) return notFound();

  const filtered = articles.filter(
    (article) =>
      new Date(article.date) <= new Date() && article.category === category,
  );

  if (filtered.length === 0) return notFound();

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Articles", url: `${SITE_URL}/articles` },
    {
      name: category,
      url: `${SITE_URL}/articles/category/${categorySlug}`,
    },
  ]);

  return (
    <main className="bg-neutral-50 min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <section className="bg-primary/10 py-16 px-6 text-center mb-16 border-b border-primary/20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {category} Articles
        </h1>
        <p className="text-gray-700 mx-auto">
          Explore the latest {category.toLowerCase()} articles from the{" "}
          {SITE_ORGANIZATION.name} series.
        </p>
      </section>

      <CategoryFilter active={categorySlug} />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
