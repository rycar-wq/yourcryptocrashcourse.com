import { describe, expect, it } from "vitest";
import {
  getAllBooks,
  getBookBySlug,
  getSeriesInfo,
  getBooksBySeries,
  getCollectionsBySeries,
  getSeriesItems,
  getBooksBySubSeries,
  getBooksWithFormat,
  bookHref,
  amazonUrl,
  reviewUrl,
  getBookBadgeLabel,
  getFeaturedBooks,
} from "./catalog";
import type { Book } from "@/types/book";

function makeBook(overrides: Partial<Book> = {}): Book {
  return {
    slug: "test-book",
    series: "crash-course",
    kind: "book",
    order: 1,
    title: "Test Book",
    subtitle: "Test Subtitle",
    description: "Test description.",
    longDescription: "Test long description.",
    keyTakeaways: [],
    coverDigital: "crash-course/test-book.jpg",
    coverAudio: "crash-course/test-book.jpg",
    relatedSlugs: [],
    formats: ["kindle"],
    ...overrides,
  };
}

function isSortedByOrder(books: { order: number }[]) {
  return books.every(
    (book, i) => i === 0 || books[i - 1].order <= book.order,
  );
}

describe("getAllBooks", () => {
  it("returns every book, sorted ascending by order", () => {
    const books = getAllBooks();
    expect(books.length).toBeGreaterThan(0);
    expect(isSortedByOrder(books)).toBe(true);
  });
});

describe("getBookBySlug", () => {
  it("finds a known book", () => {
    const [first] = getAllBooks();
    expect(getBookBySlug(first.slug)?.slug).toBe(first.slug);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getBookBySlug("does-not-exist")).toBeUndefined();
  });
});

describe("getSeriesInfo", () => {
  it("returns info for both known series", () => {
    expect(getSeriesInfo("crash-course")?.slug).toBe("crash-course");
    expect(getSeriesInfo("instant-crypto")?.slug).toBe("instant-crypto");
  });
});

describe("getBooksBySeries", () => {
  it("only returns non-collection items from the requested series, sorted by order", () => {
    const books = getBooksBySeries("crash-course");
    expect(books.length).toBeGreaterThan(0);
    expect(books.every((b) => b.series === "crash-course")).toBe(true);
    expect(books.every((b) => b.kind !== "collection")).toBe(true);
    expect(isSortedByOrder(books)).toBe(true);
  });
});

describe("getCollectionsBySeries", () => {
  it("only returns collection-kind items from the requested series", () => {
    const collections = getCollectionsBySeries("instant-crypto");
    expect(collections.length).toBeGreaterThan(0);
    expect(collections.every((b) => b.series === "instant-crypto")).toBe(
      true,
    );
    expect(collections.every((b) => b.kind === "collection")).toBe(true);
  });
});

describe("getSeriesItems", () => {
  it("returns everything for a series — books, bonus, and collections combined", () => {
    const items = getSeriesItems("crash-course");
    const expectedCount =
      getBooksBySeries("crash-course").length +
      getCollectionsBySeries("crash-course").length;
    expect(items.length).toBe(expectedCount);
    expect(isSortedByOrder(items)).toBe(true);
  });
});

describe("getBooksBySubSeries", () => {
  it("only returns non-collection items from the requested sub-series", () => {
    const books = getBooksBySubSeries("instant-crypto-2");
    expect(books.length).toBeGreaterThan(0);
    expect(books.every((b) => b.subSeries === "instant-crypto-2")).toBe(true);
    expect(books.every((b) => b.kind !== "collection")).toBe(true);
  });

  it("returns nothing for an unused sub-series", () => {
    expect(getBooksBySubSeries("does-not-exist")).toEqual([]);
  });
});

describe("getBooksWithFormat", () => {
  it("only returns items that include the requested format", () => {
    const audible = getBooksWithFormat("audible");
    expect(audible.length).toBeGreaterThan(0);
    expect(audible.every((b) => b.formats.includes("audible"))).toBe(true);
  });
});

describe("bookHref", () => {
  it("nests the slug under its series within the given section", () => {
    const book = getAllBooks()[0];
    expect(bookHref("books", book)).toBe(
      `/books/${book.series}/${book.slug}`,
    );
    expect(bookHref("audiobooks", book)).toBe(
      `/audiobooks/${book.series}/${book.slug}`,
    );
  });
});

describe("amazonUrl", () => {
  it("builds a dp link from the book's ASIN", () => {
    expect(amazonUrl(makeBook({ asin: "B0DKB6C424" }))).toBe(
      "https://www.amazon.com/dp/B0DKB6C424",
    );
  });

  it("returns undefined when there's no ASIN yet", () => {
    expect(amazonUrl(makeBook())).toBeUndefined();
  });
});

describe("reviewUrl", () => {
  it("builds a review-creation link from the book's ASIN", () => {
    expect(reviewUrl(makeBook({ asin: "B0DKB6C424" }))).toBe(
      "https://www.amazon.com/review/create-review?asin=B0DKB6C424",
    );
  });

  it("returns undefined when there's no ASIN yet", () => {
    expect(reviewUrl(makeBook())).toBeUndefined();
  });
});

describe("getBookBadgeLabel", () => {
  it("labels collections regardless of series or role", () => {
    expect(
      getBookBadgeLabel(makeBook({ kind: "collection", series: "instant-crypto" })),
    ).toBe("Collection");
  });

  it("labels bonus items regardless of series or role", () => {
    expect(
      getBookBadgeLabel(makeBook({ kind: "bonus", series: "instant-crypto" })),
    ).toBe("Bonus");
  });

  it("labels crash-course's core book as Core", () => {
    expect(
      getBookBadgeLabel(makeBook({ series: "crash-course", role: "core" })),
    ).toBe("Core");
  });

  it("labels other crash-course books as Deep Dive", () => {
    expect(
      getBookBadgeLabel(makeBook({ series: "crash-course", role: "deep-dive" })),
    ).toBe("Deep Dive");
  });

  it("labels every Instant Crypto book as Mini Guide, regardless of role", () => {
    expect(
      getBookBadgeLabel(makeBook({ series: "instant-crypto", role: "deep-dive" })),
    ).toBe("Mini Guide");
    expect(
      getBookBadgeLabel(makeBook({ series: "instant-crypto", role: "core" })),
    ).toBe("Mini Guide");
  });
});

describe("getFeaturedBooks", () => {
  it("returns the requested number of books", () => {
    expect(getFeaturedBooks(8)).toHaveLength(8);
  });

  it("never includes collections", () => {
    const books = getFeaturedBooks(30);
    expect(books.every((b) => b.kind !== "collection")).toBe(true);
  });

  it("never repeats a book in the same sample", () => {
    const books = getFeaturedBooks(15);
    expect(new Set(books.map((b) => b.slug)).size).toBe(books.length);
  });

  it("caps out at the size of the eligible pool", () => {
    const all = getFeaturedBooks(10_000);
    const nonCollections = getAllBooks().filter((b) => b.kind !== "collection");
    expect(all).toHaveLength(nonCollections.length);
  });
});
