import { notFound } from "next/navigation";
import articlesData from "@/data/articles.json";
import type { Article } from "@/types/article";
import { SITE_URL } from "@/utils/constants";

const articles = articlesData as Article[];

import { generatePageMetadata, buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/utils/metadata";
import { formatArticleDate } from "@/utils/articles";
import { categoryColors } from "@/utils/categoryColors";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    canonical: `${SITE_URL}/articles/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  const jsonLd = buildArticleJsonLd({
    title: article.title,
    date: article.date,
    description: article.excerpt,
    url: `${SITE_URL}/articles/${article.slug}`,
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Articles", url: `${SITE_URL}/articles` },
    { name: article.title, url: `${SITE_URL}/articles/${article.slug}` },
  ]);

  const categoryColor = categoryColors[article.category] || categoryColors.default;

  return (
    <>
      <section className="bg-primary/10 py-16 px-6 text-center border-b border-primary/20">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className={`text-sm uppercase tracking-wide font-semibold ${categoryColor}`}>
            {article.category} · {formatArticleDate(article.date)}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {article.title}
          </h1>
          <p className="text-gray-800 leading-relaxed text-lg max-w-2xl mx-auto">
            {article.excerpt}
          </p>
        </div>
      </section>

      <Breadcrumbs />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <JsonLd data={[jsonLd, breadcrumbJsonLd]} />

        <article>
          {article.content.map((section, i) => (
            <section key={i} className="mb-10">
              {section.heading && (
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.heading}
                </h2>
              )}
              {section.text && (
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.text}
                </p>
              )}
              {section.list && (
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>
    </>
  );
}
