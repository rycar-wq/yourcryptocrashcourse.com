import Link from "next/link";
import type { Article } from "@/types/article";

export default function ArticleNavigation({
  previousArticle,
  nextArticle,
}: {
  previousArticle: Pick<Article, "slug" | "title"> | null;
  nextArticle: Pick<Article, "slug" | "title"> | null;
}) {
  if (!previousArticle && !nextArticle) return null;

  return (
    <section className="mt-12 border-t border-gray-200 pt-8 grid sm:grid-cols-2 gap-4">
      {previousArticle ? (
        <Link
          href={`/articles/${previousArticle.slug}`}
          className="block bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
        >
          <p className="text-xs text-gray-500 mb-2">Previous Article</p>
          <h3 className="text-base font-semibold text-gray-900">
            {previousArticle.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}

      {nextArticle ? (
        <Link
          href={`/articles/${nextArticle.slug}`}
          className="block bg-white border border-gray-200 rounded-2xl p-5 transition sm:text-right hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-xs text-gray-500 mb-2">Next Article</p>
          <h3 className="text-base font-semibold text-gray-900">
            {nextArticle.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
