import { describe, expect, it } from "vitest";
import { buildBookJsonLd, buildBooksIndexJsonLd } from "./books";
import type { Book } from "@/types/book";

const book: Book = {
  slug: "crypto-crash-course",
  series: "crash-course",
  kind: "book",
  order: 1,
  title: "Your Crypto Crash Course",
  subtitle: "Fast-Tracking The Journey into Bitcoin, Blockchain, and Beyond",
  isbn: "1234567890",
  coverDigital: "crash-course/crypto-crash-course.jpg",
  coverAudio: "crash-course/crypto-crash-course.jpg",
  description: "A beginner-friendly deep dive into Bitcoin and blockchain.",
  longDescription: "A longer description.",
  keyTakeaways: ["Understand Bitcoin."],
  relatedSlugs: [],
  formats: ["kindle", "print", "audible"],
};

describe("buildBookJsonLd", () => {
  it("builds schema.org Book structured data from a book record", () => {
    const jsonLd = buildBookJsonLd(book);

    expect(jsonLd["@type"]).toBe("Book");
    expect(jsonLd.name).toBe(book.title);
    expect(jsonLd.alternateName).toBe(book.subtitle);
    expect(jsonLd.isbn).toBe(book.isbn);
    expect(jsonLd.url).toBe(
      "https://yourcryptocrashcourse.com/books/crash-course/crypto-crash-course",
    );
    expect(jsonLd.image).toBe(
      "https://yourcryptocrashcourse.com/images/covers/crash-course/crypto-crash-course.jpg",
    );
    expect(jsonLd.keywords).toContain(book.title);
  });

  it("uses EBook format when kindle is available", () => {
    expect(buildBookJsonLd(book).bookFormat).toBe("EBook");
  });

  it("falls back to Paperback when only print is available", () => {
    const printOnly = { ...book, formats: ["print"] as Book["formats"] };
    expect(buildBookJsonLd(printOnly).bookFormat).toBe("Paperback");
  });

  it("omits isbn when not provided", () => {
    const { isbn: _isbn, ...bookWithoutIsbn } = book;
    const jsonLd = buildBookJsonLd(bookWithoutIsbn as Book);
    expect(jsonLd.isbn).toBeUndefined();
  });

  it("uses the book's own keywords when provided", () => {
    const jsonLd = buildBookJsonLd({
      ...book,
      keywords: ["bitcoin for beginners", "blockchain basics"],
    });
    expect(jsonLd.keywords).toEqual([
      "bitcoin for beginners",
      "blockchain basics",
    ]);
  });

  it("falls back to generic keywords when none are provided", () => {
    const jsonLd = buildBookJsonLd(book);
    expect(jsonLd.keywords).toEqual([
      "crypto",
      "cryptocurrency",
      "blockchain",
      "investing",
      book.title,
    ]);
  });
});

describe("buildBooksIndexJsonLd", () => {
  it("builds an ItemList with one entry per book, preserving order", () => {
    const books = [
      book,
      { ...book, slug: "crypto-creations", title: "Crypto Creations" },
    ];
    const jsonLd = buildBooksIndexJsonLd(books);

    expect(jsonLd["@type"]).toBe("ItemList");
    expect(jsonLd.itemListElement).toHaveLength(2);
    expect(jsonLd.itemListElement[0].position).toBe(1);
    expect(jsonLd.itemListElement[1].position).toBe(2);
    expect(jsonLd.itemListElement[1].name).toBe("Crypto Creations");
  });
});
