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
  buildAudiobooksIndexJsonLd,
  buildBreadcrumbJsonLd,
  generatePageMetadata,
} from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";

const series = getSeriesInfo("instant-crypto")!;

export function generateMetadata() {
  return generatePageMetadata({
    title: `${series.name} Audiobooks`,
    description: series.tagline,
    canonical: `${SITE_URL}/audiobooks/instant-crypto`,
    type: "website",
  });
}

export default function InstantCryptoAudiobooksPage() {
  const collections1 = getCollectionsBySubSeries("instant-crypto-1").filter(
    (b) => b.formats.includes("audible"),
  );
  const collections2 = getCollectionsBySubSeries("instant-crypto-2").filter(
    (b) => b.formats.includes("audible"),
  );

  const part1 = withCollectionsFirst(
    collections1,
    getBooksBySubSeries("instant-crypto-1").filter((b) =>
      b.formats.includes("audible"),
    ),
  );
  const part2 = withCollectionsFirst(
    collections2,
    getBooksBySubSeries("instant-crypto-2").filter((b) =>
      b.formats.includes("audible"),
    ),
  );

  const jsonLd = buildAudiobooksIndexJsonLd([...part1, ...part2]);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Audiobooks", url: `${SITE_URL}/audiobooks` },
    { name: series.name, url: `${SITE_URL}/audiobooks/instant-crypto` },
  ]);

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />
      <Breadcrumbs />

      <section className="bg-primary/10 py-16 px-6 text-center border-b border-primary/20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {series.name} Audiobooks
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
          <BookGrid
            books={part1}
            section="audiobooks"
            coverField="coverAudio"
          />
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
          <BookGrid
            books={part2}
            section="audiobooks"
            coverField="coverAudio"
          />
        </div>
      </section>
    </>
  );
}
