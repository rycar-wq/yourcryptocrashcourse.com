import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import books from "./books.json";
import series from "./series.json";
import categories from "./categories.json";
import articles from "./articles.json";
import { categoryColors } from "@/utils/categoryColors";
import type { Book, BookFormat, BookKind, BookRole } from "@/types/book";

const COVERS_DIR = join(process.cwd(), "public/images/covers");
const coverExists = (relPath: string) => existsSync(join(COVERS_DIR, relPath));

const typedBooks = books as Book[];
const bookSlugs = new Set(typedBooks.map((b) => b.slug));
const seriesSlugs = new Set(series.map((s) => s.slug));

const VALID_KINDS: BookKind[] = ["book", "bonus", "collection"];
const VALID_ROLES: BookRole[] = ["core", "deep-dive", "supplementary"];
const VALID_FORMATS: BookFormat[] = ["kindle", "print", "audible"];

describe("books.json", () => {
  it("has unique slugs", () => {
    expect(bookSlugs.size).toBe(typedBooks.length);
  });

  it("only references relatedSlugs that exist as books", () => {
    const broken = typedBooks.flatMap((book) =>
      book.relatedSlugs
        .filter((slug) => !bookSlugs.has(slug))
        .map((slug) => `${book.slug} -> ${slug}`),
    );
    expect(broken).toEqual([]);
  });

  it("only references collectionSlugs that exist as books", () => {
    const broken = typedBooks.flatMap((book) =>
      (book.collectionSlugs ?? [])
        .filter((slug) => !bookSlugs.has(slug))
        .map((slug) => `${book.slug} -> ${slug}`),
    );
    expect(broken).toEqual([]);
  });

  it("only has collectionSlugs on kind: collection entries", () => {
    const misplaced = typedBooks
      .filter((book) => book.kind !== "collection" && book.collectionSlugs)
      .map((book) => book.slug);
    expect(misplaced).toEqual([]);
  });

  it("every series value is registered in series.json", () => {
    const broken = typedBooks
      .filter((book) => !seriesSlugs.has(book.series))
      .map((book) => `${book.slug} -> ${book.series}`);
    expect(broken).toEqual([]);
  });

  it("every book/collection series used is registered in series.json (inverse check)", () => {
    const usedSeries = new Set(typedBooks.map((b) => b.series));
    const missing = [...usedSeries].filter((s) => !seriesSlugs.has(s));
    expect(missing).toEqual([]);
  });

  it("has a valid kind for every book", () => {
    const invalid = typedBooks
      .filter((book) => !VALID_KINDS.includes(book.kind))
      .map((book) => book.slug);
    expect(invalid).toEqual([]);
  });

  it("has a valid role where one is set", () => {
    const invalid = typedBooks
      .filter((book) => book.role && !VALID_ROLES.includes(book.role))
      .map((book) => book.slug);
    expect(invalid).toEqual([]);
  });

  it("has at least one valid format for every book", () => {
    const invalid = typedBooks
      .filter(
        (book) =>
          book.formats.length === 0 ||
          book.formats.some((f) => !VALID_FORMATS.includes(f)),
      )
      .map((book) => book.slug);
    expect(invalid).toEqual([]);
  });

  it("has a non-empty cover path for every book", () => {
    const missing = typedBooks
      .filter((book) => !book.coverDigital || !book.coverAudio)
      .map((book) => book.slug);
    expect(missing).toEqual([]);
  });

  it("has a cover image file on disk for every book's coverDigital/coverAudio path", () => {
    const missing = typedBooks
      .flatMap((book) => [
        !coverExists(book.coverDigital) && `${book.slug} -> ${book.coverDigital}`,
        !coverExists(book.coverAudio) && `${book.slug} -> ${book.coverAudio}`,
      ])
      .filter((entry): entry is string => Boolean(entry));
    expect(missing).toEqual([]);
  });

  it("has a unique order within each series/sub-series grouping (excluding collections)", () => {
    const groups = new Map<string, Book[]>();
    for (const book of typedBooks) {
      if (book.kind === "collection") continue;
      const key = `${book.series}:${book.subSeries ?? ""}`;
      groups.set(key, [...(groups.get(key) ?? []), book]);
    }

    const duplicateGroups = [...groups.entries()]
      .filter(([, group]) => {
        const orders = group.map((b) => b.order);
        return new Set(orders).size !== orders.length;
      })
      .map(([key]) => key);

    expect(duplicateGroups).toEqual([]);
  });

  it("has a plausible ASIN format where one is set (10 uppercase alphanumeric chars)", () => {
    const invalid = typedBooks
      .filter((book) => book.asin && !/^[A-Z0-9]{10}$/.test(book.asin))
      .map((book) => `${book.slug} -> ${book.asin}`);
    expect(invalid).toEqual([]);
  });

  it("has a plausible ISBN-13 format where one is set (13 digits, hyphens allowed)", () => {
    const invalid = typedBooks
      .filter((book) => book.isbn && !/^\d{13}$/.test(book.isbn.replace(/-/g, "")))
      .map((book) => `${book.slug} -> ${book.isbn}`);
    expect(invalid).toEqual([]);
  });
});

describe("categories.json", () => {
  it("every registered category has a display color", () => {
    const missing = categories.filter((c) => !categoryColors[c]);
    expect(missing).toEqual([]);
  });
});

describe("articles.json", () => {
  it("has a slug for every article, and slugs are unique", () => {
    const slugs = articles.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every category is registered in categories.json", () => {
    const registered = new Set(categories);
    const used = new Set(articles.map((a) => a.category));
    const unregistered = [...used].filter((c) => !registered.has(c));
    expect(unregistered).toEqual([]);
  });

  it("only references recommendedBook slugs that exist as books", () => {
    const broken = articles
      .filter((a) => a.recommendedBook && !bookSlugs.has(a.recommendedBook))
      .map((a) => `${a.slug} -> ${a.recommendedBook}`);
    expect(broken).toEqual([]);
  });
});
