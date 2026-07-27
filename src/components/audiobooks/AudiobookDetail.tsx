import { notFound } from "next/navigation";
import Image from "next/image";
import JsonLd from "@/components/common/JsonLd";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import AudibleLink from "@/components/common/AudibleLink";
import AudioSample from "@/components/audiobooks/AudioSample";
import RelatedBooksGrid from "@/components/books/RelatedBooksGrid";
import { getBookBySlug, getSeriesInfo, bookHref } from "@/utils/catalog";
import {
  buildAudiobookJsonLd,
  buildBreadcrumbJsonLd,
  generatePageMetadata,
} from "@/utils/metadata";
import { SITE_URL } from "@/utils/constants";
import type { SeriesSlug } from "@/types/book";

export function audiobookDetailMetadata(seriesSlug: SeriesSlug, slug: string) {
  const book = getBookBySlug(slug);
  if (!book || book.series !== seriesSlug || !book.formats.includes("audible"))
    return {};

  return generatePageMetadata({
    title: `${book.title} (Audiobook)`,
    description: book.description,
    canonical: `${SITE_URL}${bookHref("audiobooks", book)}`,
    image: `/images/covers/${book.coverAudio}`,
    type: "article",
  });
}

export default function AudiobookDetail({
  seriesSlug,
  slug,
}: {
  seriesSlug: SeriesSlug;
  slug: string;
}) {
  const book = getBookBySlug(slug);
  if (!book || book.series !== seriesSlug || !book.formats.includes("audible"))
    notFound();

  const series = getSeriesInfo(seriesSlug)!;
  const jsonLd = buildAudiobookJsonLd(book);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Audiobooks", url: `${SITE_URL}/audiobooks` },
    { name: series.name, url: `${SITE_URL}/audiobooks/${seriesSlug}` },
    { name: book.title, url: `${SITE_URL}${bookHref("audiobooks", book)}` },
  ]);

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd]} />
      <Breadcrumbs />

      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <Image
              src={`/images/covers/${book.coverAudio}`}
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

            <AudibleLink
              href={book.audibleUrl}
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-xl shadow hover:bg-primary/80 transition"
            >
              🎧 Listen on Audible
            </AudibleLink>

            <AudioSample title={book.title} filePath={book.audioSample} />
          </div>
        </div>
      </section>

      <RelatedBooksGrid
        relatedSlugs={book.relatedSlugs}
        section="audiobooks"
        coverField="coverAudio"
        heading={`More from ${series.name}`}
        sectionClassName="bg-primary/10 py-16 px-6 text-center mt-10"
      />
    </>
  );
}
