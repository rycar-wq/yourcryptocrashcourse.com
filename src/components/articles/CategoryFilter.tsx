"use client";

import { useState } from "react";
import Link from "next/link";
import categories from "@/data/categories.json";
import { getVisibleArticles } from "@/utils/articles";
import { categoryToSlug } from "@/utils/categorySlug";

const VISIBLE_CATEGORY_LIMIT = 6;

function getVisibleCategoryCounts() {
  const counts: Record<string, number> = {};
  for (const article of getVisibleArticles()) {
    counts[article.category] = (counts[article.category] || 0) + 1;
  }
  return counts;
}

export default function CategoryFilter({ active }: { active?: string }) {
  const counts = getVisibleCategoryCounts();
  // Categories with no published articles yet have nowhere to link to
  // (the category page 404s until they have at least one live post).
  const withContent = categories.filter((cat) => (counts[cat] || 0) > 0);
  const featured = withContent.slice(0, VISIBLE_CATEGORY_LIMIT);
  const more = withContent.slice(VISIBLE_CATEGORY_LIMIT);
  const activeIsInMore = more.some((cat) => categoryToSlug(cat) === active);

  const [showMore, setShowMore] = useState(activeIsInMore);

  const pillClass = (isActive: boolean) =>
    `px-4 py-2 rounded-full border text-sm font-medium transition ${
      isActive
        ? "bg-primary text-white border-primary"
        : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
    }`;

  return (
    <nav className="flex flex-col items-center gap-3 mb-10">
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/articles" className={pillClass(!active)}>
          All
        </Link>
        {featured.map((cat) => (
          <Link
            key={cat}
            href={`/articles/category/${categoryToSlug(cat)}`}
            className={pillClass(active === categoryToSlug(cat))}
          >
            {cat}
          </Link>
        ))}
        {more.length > 0 && (
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
            className={pillClass(activeIsInMore)}
          >
            {showMore ? "Fewer topics ▲" : "More topics ▾"}
          </button>
        )}
      </div>

      {showMore && more.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3">
          {more.map((cat) => (
            <Link
              key={cat}
              href={`/articles/category/${categoryToSlug(cat)}`}
              className={pillClass(active === categoryToSlug(cat))}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
