import { SITE_URL, SITE_AUTHOR, SITE_ORGANIZATION } from "../constants";
import type { Book } from "@/types/book";

function schemaBookFormat(book: Book): string {
  if (book.formats.includes("kindle")) return "EBook";
  if (book.formats.includes("print")) return "Paperback";
  return "EBook";
}

export function buildBookJsonLd(book: Book) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternateName: book.subtitle,
    bookFormat: schemaBookFormat(book),
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
    },
    publisher: SITE_ORGANIZATION,
    inLanguage: "en-GB",
    isbn: book.isbn || undefined,
    image: `${SITE_URL}/images/covers/${book.coverDigital}`,
    url: `${SITE_URL}/books/${book.series}/${book.slug}`,
    description: book.description,
    keywords: book.keywords ?? [
      "crypto",
      "cryptocurrency",
      "blockchain",
      "investing",
      book.title,
    ],
  };
}

export function buildBooksIndexJsonLd(books: Book[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_ORGANIZATION.name} Book Series`,
    description:
      "Explore the full book catalog — practical, jargon-free guides to understanding crypto.",
    itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/books/${book.series}/${book.slug}`,
      name: book.title,
      image: `${SITE_URL}/images/covers/${book.coverDigital}`,
      description: book.description,
    })),
  };
}
