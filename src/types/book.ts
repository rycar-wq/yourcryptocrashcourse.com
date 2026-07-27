export type BookFormat = "kindle" | "print" | "audible";
export type BookKind = "book" | "bonus" | "collection";
export type SeriesSlug = "crash-course" | "instant-crypto";
// Content-depth taxonomy (independent of BookKind, which is a structural/URL concern).
export type BookRole = "core" | "deep-dive" | "supplementary";

export interface Book {
  slug: string;
  series: SeriesSlug;
  // Groups Instant Crypto's two 10-book mini-series (e.g. "instant-crypto-1" / "instant-crypto-2").
  subSeries?: string;
  kind: BookKind;
  role?: BookRole;
  // For kind: "collection" — the individual book slugs bundled inside it.
  collectionSlugs?: string[];
  // Display order within its series/subSeries.
  order: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  keyTakeaways: string[];
  coverDigital: string;
  coverAudio: string;
  relatedSlugs: string[];
  formats: BookFormat[];
  audioSample?: string;
  // Amazon ASIN — the Amazon buy link is derived from this (see utils/catalog.ts).
  asin?: string;
  // Full Audible product URL (not ASIN-derivable — Audible URLs include a descriptive slug).
  audibleUrl?: string;
  isbn?: string;
  keywords?: string[];
}
