import Link from "next/link";
import { categoryColors } from "@/utils/categoryColors";
import { formatArticleDate } from "@/utils/articles";
import type { Article } from "@/types/article";

export default function ArticleCard({ article }: { article: Article }) {
  const color = categoryColors[article.category] || categoryColors.default;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="bg-white rounded-2xl shadow hover:shadow-lg transition block overflow-hidden"
    >
      <div className="p-6 space-y-3">
        <p className={`text-sm ${color} font-medium`}>{article.category}</p>
        <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {article.excerpt}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {formatArticleDate(article.date)}
        </p>
      </div>
    </Link>
  );
}
