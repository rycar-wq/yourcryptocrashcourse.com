import { notFound } from "next/navigation";
import Image from "next/image";
import JsonLd from "@/components/common/JsonLd";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AmazonLink from "@/components/common/AmazonLink";
import AudibleLink from "@/components/common/AudibleLink";
import ReviewCta from "@/components/common/ReviewCta";
import RelatedBooksGrid from "@/components/books/RelatedBooksGrid";
import {
  getBookBySlug,
  getSeriesInfo,
  bookHref,
  amazonUrl,
  reviewUrl,
} from "@/utils/catalog";
import {
  buildBookJsonLd,
  buildBreadcrumbJsonLd,
  generatePageMetadata,
} from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";
import type { SeriesSlug } from "@/types/book";

export function bookDetailMetadata(seriesSlug: SeriesSlug, slug: string) {
  const book = getBookBySlug(slug);
  if (!book || book.series !== seriesSlug) return {};

  return generatePageMetadata({
    title: book.title,
    description: book.description,
    canonical: `${SITE_URL}${bookHref("books", book)}`,
    image: `/images/covers/${book.coverDigital}`,
    type: "article",
  });
}

export default function BookDetail({
  seriesSlug,
  slug,
}: {
  seriesSlug: SeriesSlug;
  slug: string;
}) {
  const book = getBookBySlug(slug);
  if (!book || book.series !== seriesSlug) notFound();

  const series = getSeriesInfo(seriesSlug)!;
  const jsonLd = buildBookJsonLd(book);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Books", url: `${SITE_URL}/books` },
    { name: series.name, url: `${SITE_URL}/books/${seriesSlug}` },
    { name: book.title, url: `${SITE_URL}${bookHref("books", book)}` },
  ]);

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />
      <Breadcrumbs />

      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <Image
              src={`/images/covers/${book.coverDigital}`}
              alt={book.title}
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
            <h2 className="text-xl text-primary font-semibold">
              {book.subtitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <i>{book.description}</i>
            </p>

            {book.longDescription && (
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {book.longDescription}
              </div>
            )}

            {book.keyTakeaways && book.keyTakeaways.length > 0 && (
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Takeaways
                </h3>
                <ul className="list-none md:list-disc list-inside text-gray-700 sm:space-y-2 space-y-1">
                  {book.keyTakeaways.map((point, index) => (
                    <li key={index} className="pl-0 pb-4 md:pb-0 sm:pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start pt-4">
              {book.formats.includes("kindle") && (
                <AmazonLink
                  href={amazonUrl(book)}
                  className="flex-1 text-center px-6 py-3 bg-primary text-white font-medium rounded-xl shadow hover:bg-primary/90 transition"
                >
                  📖 Read on Kindle
                </AmazonLink>
              )}
              {book.formats.includes("print") ? (
                <AmazonLink
                  href={amazonUrl(book)}
                  className="flex-1 text-center px-6 py-3 border border-primary bg-white text-neutral-800 font-medium rounded-xl hover:bg-primary/10 transition"
                >
                  📚 Buy the Paperback
                </AmazonLink>
              ) : (
                book.formats.includes("audible") && (
                  <AudibleLink
                    href={book.audibleUrl}
                    className="flex-1 text-center px-6 py-3 border border-primary bg-white text-neutral-800 font-medium rounded-xl hover:bg-primary/10 transition"
                  >
                    🎧 Listen on Audible
                  </AudibleLink>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {reviewUrl(book) && (
        <ReviewCta
          title="Leave a Quick Review"
          description="Reviews genuinely help more readers discover Your Crypto Crash Course and Instant Crypto, and support future books and audiobooks."
          buttonText="⭐ Review on Amazon"
          buttonHref={reviewUrl(book)!}
        />
      )}

      <RelatedBooksGrid
        relatedSlugs={book.relatedSlugs}
        section="books"
        coverField="coverDigital"
        heading={`More from ${series.name}`}
        sectionClassName="bg-primary/10 py-16 px-6 text-center mt-10"
      />
    </>
  );
}
