import Image from "next/image";
import Link from "next/link";
import { bookHref } from "@/utils/catalog";
import type { Book } from "@/types/book";

export default function CollectionsSpotlight({
  collections,
}: {
  collections: Book[];
}) {
  if (collections.length === 0) return null;

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎧 Listen to the Complete Collections
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Skip the wait between books — get every title in a series as one
            audiobook bundle, ready to binge from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={bookHref("audiobooks", collection)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition text-left"
            >
              <Image
                src={`/images/covers/${collection.coverAudio}`}
                alt={collection.title}
                width={500}
                height={500}
                className="object-cover w-full group-hover:scale-105 transition-transform"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary transition">
                  {collection.title}
                </h3>
                <p className="text-sm text-white/70">{collection.subtitle}</p>
                <span className="inline-block text-primary font-semibold text-sm pt-2">
                  Listen on Audible →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/audiobooks"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow transition"
        >
          Browse All Audiobooks
        </Link>
      </div>
    </section>
  );
}
