export const metadata = {
  title: "Books | Your Crypto Crash Course",
  description: "Master Crypto, Web3 & Blockchain—One Book at a Time",
};

export default function BooksPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/banners/3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Your Crypto Library—From Beginner to Expert
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Explore both series and start your crypto journey today.
          </p>
        </div>
      </section>

      {/* Book Series Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Discover the Series
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Choose from <strong>in-depth full-length guides</strong> or{" "}
          <strong>quick, actionable reads</strong> designed for crypto
          enthusiasts at every level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Crypto Crash Course Series */}
          <a
            href="/books/crypto-crash-course-series"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/bundle.jpg"
              alt="Your Crypto Crash Course"
              className="w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#F7931A]">
                📘 Your Crypto Crash Course
              </h3>
              <p className="text-gray-700 mt-2">
                A 5-book deep dive into Bitcoin, Blockchain, DeFi, Web3, and
                security.
              </p>
            </div>
          </a>

          {/* Instant Crypto Series */}
          <a
            href="/books/instant-crypto-series"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/IC/bundle.jpg"
              alt="Instant Crypto"
              className="w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#F7931A]">
                ⚡ Instant Crypto
              </h3>
              <p className="text-gray-700 mt-2">
                A series of 10 bite-sized, 30-minute reads covering key crypto
                concepts.
              </p>
            </div>
          </a>
        </div>
      </section>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />

      {/* Best-Selling Books */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Best-Selling Books
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          These are the most popular books among readers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <a
            href="/books/crypto-confidence"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/4.jpg"
              alt="Crypto Confidence"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                A Beginner’s Blueprint to Protecting Your Digital Assets
              </h3>
            </div>
          </a>

          <a
            href="/books/web-3-wonders"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/3.jpg"
              alt="Web 3 Wonders"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Your Guide to Unpacking DAOs, Decentralization, and the
                Metaverse
              </h3>
            </div>
          </a>

          <a
            href="/books/crypto-creations"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/2.jpg"
              alt="Crypto Creations"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                How Smart Contracts, NFTs, and DeFi Are Shaping the Future
              </h3>
            </div>
          </a>

          <a
            href="/books/unbreakable-crypto"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/IC/9.jpg"
              alt="Unbreakable Crypto"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Defend Your Digital Fortune Against Scams
              </h3>
            </div>
          </a>

          <a
            href="/books/yield-farming-fast-track"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/IC/3.jpg"
              alt="Yield Farming Fast-Track"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Maximizing Returns with Minimal Effort
              </h3>
            </div>
          </a>

          <a
            href="/books/crypto-wallets-unlocked"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/IC/1.jpg"
              alt="Crypto Wallets Unlocked"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Secure Your Wealth Now</h3>
            </div>
          </a>
        </div>
      </section>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />

      {/* Final CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Start Your Crypto Learning Journey Today
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Whether you're a complete beginner or looking to go deeper,{" "}
          <strong>
            these books will guide you through the world of blockchain, Web3,
            and crypto investing.
          </strong>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://geni.us/ryan-carrington-amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
                  hover:bg-[#d67b16] transition duration-300"
          >
            📘 Browse on Amazon
          </a>

          <a
            href="https://BookHip.com/TKCVHRS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00d3db] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
            hover:bg-[#00aabb] transition duration-300"
          >
            📩 Get a Free Book
          </a>
        </div>
      </section>
    </>
  );
}
