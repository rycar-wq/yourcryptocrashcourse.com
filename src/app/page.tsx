import Link from "next/link";
import JsonLd from "@/components/common/JsonLd";
import PhotoHero from "@/components/common/PhotoHero";
import CollectionsSpotlight from "@/components/audiobooks/CollectionsSpotlight";
import BookGrid from "@/components/books/BookGrid";
import {
  getCollectionsBySeries,
  getCollectionsBySubSeries,
  getFeaturedBooks,
} from "@/utils/catalog";
import { buildSiteJsonLd } from "@/utils/metadata";

export default function Home() {
  const jsonLd = buildSiteJsonLd();

  const audiobookCollections = [
    ...getCollectionsBySeries("crash-course"),
    ...getCollectionsBySubSeries("instant-crypto-1"),
    ...getCollectionsBySubSeries("instant-crypto-2"),
  ].filter((collection) => collection.formats.includes("audible"));

  // Randomised at build time only — this is a fully static export, so this
  // executes once during `next build`, not per visitor.
  const featuredBooks = getFeaturedBooks(8);

  return (
    <>
      <JsonLd data={jsonLd} />
      <PhotoHero
        image="/images/banners/home.jpg"
        alt="Bitcoin"
        title="Your Crypto Crash Course"
        subtitle="Books, audiobooks, and quick reads to help you understand crypto with confidence."
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/books"
            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition"
          >
            Books
          </Link>
          <Link
            href="/audiobooks"
            className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white/10 transition"
          >
            Audiobooks
          </Link>
          <Link
            href="/articles"
            className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white/10 transition"
          >
            Articles
          </Link>
        </div>
      </PhotoHero>

      <CollectionsSpotlight collections={audiobookCollections} />

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore the Series
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Dive into a selection of the latest books
            </p>
          </div>

          <BookGrid
            books={featuredBooks}
            section="books"
            coverField="coverAudio"
            columns={4}
            coverAspect="square"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/books"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow transition"
            >
              📖 Browse Books
            </Link>
            <Link
              href="/audiobooks"
              className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-medium rounded-xl transition"
            >
              🎧 Browse Audiobooks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
