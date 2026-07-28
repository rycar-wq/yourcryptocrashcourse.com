import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types/book";
import { bookHref } from "@/utils/catalog";

export default function ArticleBookSidebar({ book }: { book: Book }) {
  const hasAudio = book.formats.includes("audible");
  const cover = hasAudio ? book.coverAudio : book.coverDigital;

  return (
    <aside className="bg-white rounded-2xl border border-primary/20 shadow p-6 space-y-4 h-fit">
      <p className="text-xs uppercase tracking-wide font-semibold text-primary text-center">
        From the Series
      </p>

      <Image
        src={`/images/covers/${cover}`}
        alt={book.title}
        width={300}
        height={300}
        className="rounded-xl shadow mx-auto"
      />

      <div className="text-center">
        <h3 className="font-semibold text-gray-900">{book.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{book.subtitle}</p>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        {book.formats.includes("kindle") && (
          <Link
            href={bookHref("books", book)}
            className="text-center px-4 py-2.5 bg-primary text-white font-medium rounded-xl shadow hover:bg-primary/90 transition"
          >
            📖 Read 
          </Link>
        )}
        {hasAudio && (
          <Link
            href={bookHref("audiobooks", book)}
            className="text-center px-4 py-2.5 border border-primary text-neutral-800 font-medium rounded-xl hover:bg-primary/10 transition"
          >
            🎧 Listen 
          </Link>
        )}
      </div>
    </aside>
  );
}
