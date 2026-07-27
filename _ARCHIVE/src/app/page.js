import SEO from "@/components/SEO";

export const metadata = {
  title:
    "Your Crypto Crash Course | Master Crypto, Web3 & Blockchain—One Book at a Time",
  description: "Master Crypto, Web3 & Blockchain—One Book at a Time",
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Your Crypto Crash Course – Master Crypto Today"
        description="Get started with crypto, DeFi, and Web3 in simple terms. No hype, just facts!"
        url="https://yourcryptocrashcourse.com"
      />

      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('images/banners/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Master Crypto, Web3 & Blockchain—One Book at a Time
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Grab a free book and start your crypto journey today.
          </p>
          <a
            href="https://BookHip.com/TKCVHRS"
            className="mt-6 inline-block bg-[#F7931A] text-white font-bold py-4 px-8 rounded-lg shadow-md text-lg hover:bg-[#d67b16] transition"
          >
            📘 Get Your Free Book
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Why I Wrote These Guides
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Crypto is revolutionizing finance, technology, and careers.
        </p>

        <p className="mt-4 text-gray-700">
          I created this book series to help beginners and professionals
          navigate the blockchain space, understand Web3 opportunities, and
          secure their digital assets.
        </p>

        <p className="mt-4 text-gray-700">
          Whether you're an investor, developer, or enthusiast, these books will
          guide you.
        </p>

        {/* Amazon CTA Button */}
        <div className="mt-8">
          <a
            href="https://geni.us/ryan-carrington-amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
                  hover:bg-[#d67b16] transition duration-300"
          >
            🛒 Buy on Amazon
          </a>
        </div>
      </section>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />

      {/* Audible Free Trial Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A] mb-6">
          Sign up to Audible and get a FREE audiobook now!
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          With Audible’s 30-day free trial, you can get your first audiobook
          completely free—no strings attached! <br /> Simply sign up, choose one
          of my audiobooks with your free credit, and start listening instantly.
        </p>

        <p className="mt-4 mb-8 text-gray-700 leading-relaxed">
          🎧 Select an audiobook below to start your Audible trial and get your
          FREE copy! 👇
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Book 1 */}
          <a
            href="https://geni.us/crypto-crash-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="images/cards/CCC/1.jpg"
              alt="Crypto Crash Course"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Fast-Tracking The Journey into Bitcoin, Blockchain, and Beyond
              </h3>
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
              src="images/cards/CCC/2.jpg"
              alt="Crypto Creations"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                How Smart Contracts, NFTs, and DeFi Are Shaping the Future
              </h3>
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
              src="images/cards/CCC/3.jpg"
              alt="Web 3 Wonders"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Unpacking DAOs, Decentralization, and the Metaverse
              </h3>
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
              src="images/cards/CCC/4.jpg"
              alt="Crypto Confidence"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                A Beginner’s Blueprint to Protecting Your Digital Assets
              </h3>
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
              src="images/cards/CCC/5.jpg"
              alt="Crypto's Carbon Conundrum"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">
                Blockchain’s Battle with the Environment
              </h3>
            </div>
          </a>
        </div>

        <p className="mt-16 text-gray-700">
          If you love the experience, you can continue your membership after 30
          days, gaining a new audiobook credit each month. <br />
          If not, you can cancel anytime without being charged, and you’ll still
          keep your free audiobook forever.
        </p>
        <p className="mt-4 text-gray-700 mb-8">
          It’s a risk-free way to dive into crypto, Web3, and blockchain
          knowledge—completely on the house!
        </p>

        {/* Audible Bundle CTA */}
        <div className="mt-10">
          <a
            href="https://geni.us/crypto-course-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
                  hover:bg-[#d67b16] transition duration-300"
          >
            🎧 Get the Bundle FREE on Audible
          </a>
        </div>
      </section>
    </>
  );
}
