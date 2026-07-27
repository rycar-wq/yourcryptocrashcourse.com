import Image from "next/image";
import Link from "next/link";
import { bookHref, getBookBadgeLabel } from "@/utils/catalog";
import type { Book } from "@/types/book";

const COLUMN_CLASS = {
  3: "sm:grid-cols-2 md:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

export default function BookGrid({
  books,
  section,
  coverField,
  columns = 3,
  coverAspect = "portrait",
}: {
  books: Book[];
  section: "books" | "audiobooks";
  coverField: "coverDigital" | "coverAudio";
  columns?: 3 | 4;
  coverAspect?: "portrait" | "square";
}) {
  return (
    <div className={`grid grid-cols-1 gap-10 ${COLUMN_CLASS[columns]}`}>
      {books.map((book) => (
        <Link
          key={book.slug}
          href={bookHref(section, book)}
          className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
        >
          <Image
            src={`/images/covers/${book[coverField]}`}
            alt={book.title}
            width={500}
            height={500}
            className={`w-full object-cover group-hover:scale-105 transition-transform ${
              coverAspect === "square" ? "aspect-square" : "h-auto"
            }`}
          />
          <div className="p-6 space-y-2 flex-1 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {getBookBadgeLabel(book)}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600">{book.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
