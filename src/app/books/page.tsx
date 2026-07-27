import Link from "next/link";
import JsonLd from "@/components/common/JsonLd";
import PhotoHero from "@/components/common/PhotoHero";
import BookGrid from "@/components/books/BookGrid";
import {
  getBooksBySeries,
  getBooksBySubSeries,
  getCollectionsBySeries,
  getCollectionsBySubSeries,
  withCollectionsFirst,
} from "@/utils/catalog";
import { buildBooksIndexJsonLd, generatePageMetadata } from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";

export function generateMetadata() {
  return generatePageMetadata({
    title: "Books",
    description:
      "Explore every book in the Your Crypto Crash Course and Instant Crypto series — jargon-free guides to understanding crypto.",
    canonical: `${SITE_URL}/books`,
    type: "website",
  });
}

export default function BooksPage() {
  const crashCourseCollection = getCollectionsBySeries("crash-course");
  const instantCrypto1Collection = getCollectionsBySubSeries("instant-crypto-1");
  const instantCrypto2Collection = getCollectionsBySubSeries("instant-crypto-2");

  const crashCourse = withCollectionsFirst(
    crashCourseCollection,
    getBooksBySeries("crash-course"),
  );
  const instantCrypto1 = withCollectionsFirst(
    instantCrypto1Collection,
    getBooksBySubSeries("instant-crypto-1"),
  );
  const instantCrypto2 = withCollectionsFirst(
    instantCrypto2Collection,
    getBooksBySubSeries("instant-crypto-2"),
  );

  const jsonLd = buildBooksIndexJsonLd([
    ...crashCourse,
    ...instantCrypto1,
    ...instantCrypto2,
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <PhotoHero
        image="/images/banners/books.jpg"
        alt="Crypto books"
        title="All Books"
        subtitle="Two series, one goal: understanding crypto with confidence."
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/books/crash-course"
            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition"
          >
            Your Crypto Crash Course
          </Link>
          <Link
            href="/books/instant-crypto"
            className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white/10 transition"
          >
            Instant Crypto
          </Link>
        </div>
      </PhotoHero>

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your Crypto Crash Course
          </h2>
          {crashCourseCollection[0] && (
            <p className="text-gray-700 mb-8">
              {crashCourseCollection[0].longDescription}
            </p>
          )}
          <BookGrid
            books={crashCourse}
            section="books"
            coverField="coverDigital"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Instant Crypto 1 — Books 1–10
          </h2>
          {instantCrypto1Collection[0] && (
            <p className="text-gray-700 mb-8">
              {instantCrypto1Collection[0].longDescription}
            </p>
          )}
          <BookGrid
            books={instantCrypto1}
            section="books"
            coverField="coverDigital"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Instant Crypto 2 — Books 11–20
          </h2>
          {instantCrypto2Collection[0] && (
            <p className="text-gray-700 mb-8">
              {instantCrypto2Collection[0].longDescription}
            </p>
          )}
          <BookGrid
            books={instantCrypto2}
            section="books"
            coverField="coverDigital"
          />
        </div>
      </section>
    </>
  );
}
