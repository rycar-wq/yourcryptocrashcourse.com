// export const metadata = {
//   title: "Instant Crypto Mini Series | Your Crypto Crash Course",
//   description: "Your 30-min reads on all topics in the world of crypto!",
// };

// import bookData from "@data/bookData.json";

// export default function InstantCryptoSeriesPage() {
//   // Filter only books from the IC series
//   const icBooks = bookData.filter((book) =>
//     [
//       "crypto-wallets-unlocked",
//       "nft-know-how",
//       "yield-farming-fast-track",
//       "staking-for-cash",
//       "gas-fee-hacks",
//       "profit-from-every-token",
//       "dao-empowerment",
//       "multi-chain-money",
//       "unbreakable-crypto",
//       "crypto-market-mastery",
//       "cbdcs-demystified",
//       "instant-crypto-bundle",
//     ].includes(book.slug)
//   );

import { loadBookData } from "@/utils/loadData";

export const metadata = {
  title: "Instant Crypto Mini Series | Your Crypto Crash Course",
  description: "Your 30-min reads on all topics in the world of crypto!",
};

export default function InstantCryptoSeriesPage() {
  const bookData = loadBookData(); // Load JSON statically at build time

  // Filter only books from the IC series
  const icBooks = bookData.filter((book) =>
    [
      "crypto-wallets-unlocked",
      "nft-know-how",
      "yield-farming-fast-track",
      "staking-for-cash",
      "gas-fee-hacks",
      "profit-from-every-token",
      "dao-empowerment",
      "multi-chain-money",
      "unbreakable-crypto",
      "crypto-market-mastery",
      "cbdcs-demystified",
      "instant-crypto-bundle",
    ].includes(book.slug)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-[#F7931A] text-center">
        Instant Crypto Series
      </h1>
      <p className="text-lg text-gray-700 text-center mt-4">
        Fast, 30-minute reads covering essential crypto concepts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {icBooks.map((book) => (
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
