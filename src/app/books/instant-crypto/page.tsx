import JsonLd from "@/components/common/JsonLd";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BookGrid from "@/components/books/BookGrid";
import {
  getBooksBySubSeries,
  getCollectionsBySubSeries,
  getSeriesInfo,
  withCollectionsFirst,
} from "@/utils/catalog";
import {
  buildBooksIndexJsonLd,
  buildBreadcrumbJsonLd,
  generatePageMetadata,
} from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";

const series = getSeriesInfo("instant-crypto")!;

export function generateMetadata() {
  return generatePageMetadata({
    title: series.name,
    description: series.tagline,
    canonical: `${SITE_URL}/books/instant-crypto`,
    type: "website",
  });
}

export default function InstantCryptoBooksPage() {
  const collections1 = getCollectionsBySubSeries("instant-crypto-1");
  const collections2 = getCollectionsBySubSeries("instant-crypto-2");

  const part1 = withCollectionsFirst(
    collections1,
    getBooksBySubSeries("instant-crypto-1"),
  );
  const part2 = withCollectionsFirst(
    collections2,
    getBooksBySubSeries("instant-crypto-2"),
  );

  const jsonLd = buildBooksIndexJsonLd([...part1, ...part2]);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Books", url: `${SITE_URL}/books` },
    { name: series.name, url: `${SITE_URL}/books/instant-crypto` },
  ]);

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />
      <Breadcrumbs />

      <section className="bg-primary/10 py-16 px-6 text-center border-b border-primary/20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {series.name}
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">{series.tagline}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Instant Crypto 1 — Books 1–10
          </h2>
          {collections1[0] && (
            <p className="text-gray-700 mb-8">
              {collections1[0].longDescription}
            </p>
          )}
          <BookGrid books={part1} section="books" coverField="coverDigital" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Instant Crypto 2 — Books 11–20
          </h2>
          {collections2[0] && (
            <p className="text-gray-700 mb-8">
              {collections2[0].longDescription}
            </p>
          )}
          <BookGrid books={part2} section="books" coverField="coverDigital" />
        </div>
      </section>
    </>
  );
}
