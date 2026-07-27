import books from "@/data/books.json";
import series from "@/data/series.json";
import type { Book, SeriesSlug } from "@/types/book";
import type { SeriesInfo } from "@/types/series";

const typedBooks = books as Book[];
const typedSeries = series as SeriesInfo[];

export function getAllBooks(): Book[] {
  return [...typedBooks].sort((a, b) => a.order - b.order);
}

export function getBookBySlug(slug: string): Book | undefined {
  return typedBooks.find((book) => book.slug === slug);
}

export function getSeriesInfo(seriesSlug: SeriesSlug): SeriesInfo | undefined {
  return typedSeries.find((s) => s.slug === seriesSlug);
}

export function getBooksBySeries(seriesSlug: SeriesSlug): Book[] {
  return typedBooks
    .filter((book) => book.series === seriesSlug && book.kind !== "collection")
    .sort((a, b) => a.order - b.order);
}

export function getCollectionsBySeries(seriesSlug: SeriesSlug): Book[] {
  return typedBooks
    .filter((book) => book.series === seriesSlug && book.kind === "collection")
    .sort((a, b) => a.order - b.order);
}

export function getSeriesItems(seriesSlug: SeriesSlug): Book[] {
  return typedBooks
    .filter((book) => book.series === seriesSlug)
    .sort((a, b) => a.order - b.order);
}

export function getBooksBySubSeries(subSeries: string): Book[] {
  return typedBooks
    .filter((book) => book.subSeries === subSeries && book.kind !== "collection")
    .sort((a, b) => a.order - b.order);
}

export function getCollectionsBySubSeries(subSeries: string): Book[] {
  return typedBooks
    .filter((book) => book.subSeries === subSeries && book.kind === "collection")
    .sort((a, b) => a.order - b.order);
}

// Site-wide display rule: bundles/collections are shown before the
// individual books/bonus items they group, wherever both appear together.
export function withCollectionsFirst(
  collections: Book[],
  individuals: Book[],
): Book[] {
  return [...collections, ...individuals];
}

export function getBooksWithFormat(format: Book["formats"][number]): Book[] {
  return typedBooks
    .filter((book) => book.formats.includes(format))
    .sort((a, b) => a.order - b.order);
}

// Builds the href for a book/collection under either the "books" or
// "audiobooks" section, nested under its series slug.
export function bookHref(section: "books" | "audiobooks", book: Book): string {
  return `/${section}/${book.series}/${book.slug}`;
}

// Amazon links are derived from the book's ASIN — no separate link map to
// keep in sync. Audible links aren't ASIN-derivable (the URL includes a
// descriptive slug), so those come from book.audibleUrl directly.
export function amazonUrl(book: Book): string | undefined {
  return book.asin ? `https://www.amazon.com/dp/${book.asin}` : undefined;
}

// The badge label shown on a book's card. Collections and bonus items get a
// flat label; individual books get a series-appropriate one, using `role`
// to distinguish crash-course's single "Core" book from the rest.
export function getBookBadgeLabel(book: Book): string {
  if (book.kind === "collection") return "Collection";
  if (book.kind === "bonus") return "Bonus";
  if (book.series === "instant-crypto") return "Mini Guide";
  return book.role === "core" ? "Core" : "Deep Dive";
}

// A random sample of non-collection books/bonus items for a "discover more"
// style section. Called from a statically-exported page component, so this
// only ever runs once at `next build` time — the same selection is baked
// into the output HTML for every visitor until the next build, not
// re-rolled per page load.
export function getFeaturedBooks(count: number): Book[] {
  const pool = typedBooks.filter((book) => book.kind !== "collection");
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
