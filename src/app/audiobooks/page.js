export const metadata = {
  title: "Audiobooks | Your Crypto Crash Course",
  description: "Master Crypto, Web3 & Blockchain—One Book at a Time",
};

export default function AudiobooksPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/banners/5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            🎧 Listen & Learn – Crypto, Blockchain & Web3 On the Go
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Get expert crypto insights while you commute, exercise, or relax.
          </p>
          <a
            href="https://geni.us/crypto-course-audio"
            className="mt-6 inline-block bg-[#F7931A] text-white font-bold py-4 px-8 rounded-lg shadow-md text-lg hover:bg-[#d67b16] transition"
          >
            🎧 Start Listening Now
          </a>
        </div>
      </section>

      {/* Audiobook Series Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Your Crypto Crash Course – Audiobooks
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Learn everything you need to know about{" "}
          <strong>crypto, blockchain, Web3, and DeFi</strong>—all in an
          easy-to-digest audiobook format.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Bundle */}
          <a
            href="https://geni.us/crypto-course-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/bundle.jpg"
              alt="Your Crypto Crash Course Bundle Audiobook"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">The 5-Book Bundle</h3>
            </div>
          </a>

          {/* Book 1 */}
          <a
            href="https://geni.us/crypto-crash-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/1.jpg"
              alt="Crypto Crash Course Audiobook"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Crypto Crash Course</h3>
            </div>
          </a>

          {/* Book 2 */}
          <a
            href="https://geni.us/crypto-creations-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/2.jpg"
              alt="Crypto Creations Audiobook"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Crypto Creations</h3>
            </div>
          </a>

          {/* Book 3 */}
          <a
            href="https://geni.us/web-3-wonders-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/3.jpg"
              alt="Web 3 Wonders Audiobook"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Web 3 Wonders</h3>
            </div>
          </a>

          {/* Book 4 */}
          <a
            href="https://geni.us/crypto-conf-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/4.jpg"
              alt="Crypto Confidence Audiobook"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Crypto Confidence</h3>
            </div>
          </a>

          {/* Book 5 */}
          <a
            href="https://geni.us/crypto-conundrum-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/CCC/5.jpg"
              alt="Crypto's Carbon Conundrum Audiobook"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Crypto's Carbon Conundrum</h3>
            </div>
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Start Listening Today!
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Dive into <strong>crypto, blockchain, and Web3</strong> with
          audiobooks. Listen anytime, anywhere, and expand your knowledge on the
          go.
        </p>

        <div className="mt-8">
          <a
            href="https://geni.us/crypto-course-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md hover:bg-[#d67b16] transition duration-300"
          >
            🎧 Browse Audiobooks
          </a>
        </div>
      </section>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />

      {/* Free Trial Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Get Your First Audiobook FREE
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          <strong>
            Audible gives you a 30-day free trial, including 1 FREE audiobook.
          </strong>
          <br />
          Choose any of my books, listen instantly, and start your crypto
          journey today.
        </p>

        <div className="mt-8">
          <a
            href="https://geni.us/crypto-course-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md hover:bg-[#d67b16] transition duration-300"
          >
            🎧 Get a Free Audiobook on Audible
          </a>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          <em>Cancel anytime. Keep your free book forever.</em>
        </p>
      </section>
    </>
  );
}
