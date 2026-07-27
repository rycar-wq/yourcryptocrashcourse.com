import Link from "next/link";

export default function ArticlesPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-12">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const href = page === 1 ? "/articles" : `/articles/archive/${page}`;

        return (
          <Link
            key={page}
            href={href}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
              page === currentPage
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
