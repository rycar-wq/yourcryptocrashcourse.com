import Image from "next/image";
import Link from "next/link";
import { getBookBySlug, bookHref } from "@/utils/catalog";

export default function RelatedBooksGrid({
  relatedSlugs,
  section,
  coverField,
  heading,
  sectionClassName,
}: {
  relatedSlugs: readonly string[];
  section: "books" | "audiobooks";
  coverField: "coverDigital" | "coverAudio";
  heading: string;
  sectionClassName: string;
}) {
  const related = relatedSlugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is NonNullable<typeof book> => Boolean(book));

  if (related.length === 0) return null;

  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">{heading}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {related.map((book) => (
            <Link
              key={book.slug}
              href={bookHref(section, book)}
              className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <Image
                src={`/images/covers/${book[coverField]}`}
                alt={book.title}
                width={400}
                height={400}
                className="object-cover w-full group-hover:scale-105 transition-transform"
              />
              <div className="p-5 space-y-2">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                  {book.title}
                </h4>
                <p className="text-sm text-gray-600">{book.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
