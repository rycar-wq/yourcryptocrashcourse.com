import Link from "next/link";
import JsonLd from "@/components/common/JsonLd";
import PhotoHero from "@/components/common/PhotoHero";
import SectionJumpNav from "@/components/common/SectionJumpNav";
import BookGrid from "@/components/books/BookGrid";
import {
  getBooksBySeries,
  getBooksBySubSeries,
  getCollectionsBySeries,
  getCollectionsBySubSeries,
  withCollectionsFirst,
} from "@/utils/catalog";
import {
  buildAudiobooksIndexJsonLd,
  generatePageMetadata,
} from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";

export function generateMetadata() {
  return generatePageMetadata({
    title: "Audiobooks",
    description:
      "Listen to the Your Crypto Crash Course and Instant Crypto audiobooks — crypto explained in short, focused audio guides.",
    canonical: `${SITE_URL}/audiobooks`,
    type: "website",
  });
}

const isAudible = (b: { formats: string[] }) => b.formats.includes("audible");

export default function AudiobooksPage() {
  const crashCourseCollection = getCollectionsBySeries("crash-course").filter(isAudible);
  const instantCrypto1Collection = getCollectionsBySubSeries("instant-crypto-1").filter(isAudible);
  const instantCrypto2Collection = getCollectionsBySubSeries("instant-crypto-2").filter(isAudible);

  const crashCourse = withCollectionsFirst(
    crashCourseCollection,
    getBooksBySeries("crash-course").filter(isAudible),
  );
  const instantCrypto1 = withCollectionsFirst(
    instantCrypto1Collection,
    getBooksBySubSeries("instant-crypto-1").filter(isAudible),
  );
  const instantCrypto2 = withCollectionsFirst(
    instantCrypto2Collection,
    getBooksBySubSeries("instant-crypto-2").filter(isAudible),
  );

  const jsonLd = buildAudiobooksIndexJsonLd([
    ...crashCourse,
    ...instantCrypto1,
    ...instantCrypto2,
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <PhotoHero
        image="/images/banners/audiobooks.jpg"
        alt="Crypto audiobooks"
        title="All Audiobooks"
        subtitle="Two series, one goal: understanding crypto with confidence — now on Audible."
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/audiobooks/crash-course"
            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition"
          >
            Your Crypto Crash Course
          </Link>
          <Link
            href="/audiobooks/instant-crypto"
            className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white/10 transition"
          >
            Instant Crypto
          </Link>
        </div>
      </PhotoHero>

      <SectionJumpNav
        sections={[
          { id: "crash-course", label: "Your Crypto Crash Course" },
          { id: "instant-crypto-1", label: "Instant Crypto 1 — Books 1–10" },
          { id: "instant-crypto-2", label: "Instant Crypto 2 — Books 11–20" },
        ]}
      />

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div id="crash-course" className="scroll-mt-24">
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
            section="audiobooks"
            coverField="coverAudio"
          />
        </div>

        <div id="instant-crypto-1" className="scroll-mt-24">
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
            section="audiobooks"
            coverField="coverAudio"
          />
        </div>

        <div id="instant-crypto-2" className="scroll-mt-24">
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
            section="audiobooks"
            coverField="coverAudio"
          />
        </div>
      </section>
    </>
  );
}
