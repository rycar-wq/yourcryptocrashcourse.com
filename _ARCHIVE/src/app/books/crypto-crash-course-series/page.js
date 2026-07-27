import bookData from "@/data/bookData.json";

export default function CCCSeriesPage() {
  // Filter only books from the CCC series
  const cccBooks = bookData.filter((book) =>
    [
      "crypto-crash-course",
      "crypto-creations",
      "web-3-wonders",
      "crypto-confidence",
      "crypto-conundrum",
      "crypto-crash-course-bundle",
      "future-proof-your-tech-career",
    ].includes(book.slug)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-[#F7931A] text-center">
        Your Crypto Crash Course Series
      </h1>
      <p className="text-lg text-gray-700 text-center mt-4">
        The complete series covering Bitcoin, Web3, DeFi, security, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cccBooks.map((book) => (
          <a
            key={book.slug}
            href={`/books/${book.slug}`}
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-sm text-gray-700">{book.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
