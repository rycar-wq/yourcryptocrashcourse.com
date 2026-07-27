import { SITE_URL, SITE_AUTHOR, SITE_ORGANIZATION } from "../constants";
import type { Book } from "@/types/book";

export function buildAudiobookJsonLd(book: Book) {
  return {
    "@context": "https://schema.org",
    "@type": "Audiobook",
    name: `${book.title} (Audiobook)`,
    description: book.description,
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
    },
    publisher: SITE_ORGANIZATION,
    inLanguage: "en-GB",
    url: `${SITE_URL}/audiobooks/${book.series}/${book.slug}`,
    image: `${SITE_URL}/images/covers/${book.coverAudio}`,
    offers: book.audibleUrl
      ? {
          "@type": "Offer",
          url: book.audibleUrl,
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
        }
      : undefined,
    audio: book.audioSample
      ? {
          "@type": "AudioObject",
          contentUrl: `${SITE_URL}${book.audioSample}`,
          encodingFormat: "audio/mpeg",
        }
      : undefined,
    keywords: book.keywords ?? [
      "crypto audiobook",
      "cryptocurrency",
      "blockchain",
      "investing",
      book.title,
    ],
  };
}

export function buildAudiobooksIndexJsonLd(audiobooks: Book[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_ORGANIZATION.name} Audiobooks`,
    description:
      "Listen to the full audiobook catalog — crypto explained in short, focused audio guides.",
    itemListElement: audiobooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/audiobooks/${book.series}/${book.slug}`,
      name: `${book.title} (Audiobook)`,
      image: `${SITE_URL}/images/covers/${book.coverAudio}`,
      description: book.description,
    })),
  };
}
