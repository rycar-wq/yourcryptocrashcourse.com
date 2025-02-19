"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/banners/2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Ryan Carrington
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Author of <strong>Your Crypto Crash Course</strong> and{" "}
            <strong>Instant Crypto</strong>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Who is Ryan Carrington?
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Ryan is the author behind <strong>Your Crypto Crash Course</strong>{" "}
          and <strong>Instant Crypto</strong>—two book series designed to make{" "}
          <strong>crypto, blockchain, and Web3</strong> simple, accessible, and
          actionable for everyone.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          With a background in{" "}
          <strong>
            technology, digital finance, and investment strategies
          </strong>
          , Ryan has spent years{" "}
          <strong>
            breaking down complex blockchain concepts into easy-to-understand
            guides
          </strong>
          . His books are trusted by{" "}
          <strong>crypto beginners, Web3 enthusiasts, and professionals</strong>{" "}
          looking to navigate this fast-evolving space.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          When he’s not writing, Ryan enjoys hiking in the mountains near his
          home in Inverness, Scotland, reading sci-fi novels, and traveling to
          experience new cultures.
        </p>
      </section>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />

      {/* Why I Wrote These Books */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Why I Wrote These Books
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          The world of crypto is full of{" "}
          <strong>technical jargon, misinformation, and hype</strong>. Many
          people miss out on opportunities because they{" "}
          <strong>don’t know where to start</strong>—or worse, they fall into{" "}
          <strong>scams and bad investments</strong>.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          I created <strong>Your Crypto Crash Course</strong> and{" "}
          <strong>Instant Crypto</strong> to{" "}
          <strong>cut through the noise</strong> and provide{" "}
          <strong>clear, practical insights</strong> on:
        </p>

        <ul className="mt-6 text-lg text-gray-700 text-left max-w-3xl mx-auto space-y-3">
          <li>
            ✅ <strong>How Bitcoin, DeFi, and NFTs work</strong> (without the
            fluff)
          </li>
          <li>
            ✅{" "}
            <strong>How to secure your assets & avoid common pitfalls</strong>
          </li>
          <li>
            ✅{" "}
            <strong>
              How to use Web3 tools & build a future-proof career in blockchain
            </strong>
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          These guides <strong>aren’t just theory</strong>—they’re designed to
          help you <strong>take action today</strong> and confidently navigate
          the crypto landscape.
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

      {/* Explore the Website TODO
      
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A] mb-6">
          What You'll Find Here
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/books"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/books.jpg"
              alt="Books"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#F7931A]">
                📚 Books & Audiobooks
              </h3>
              <p className="text-gray-700">
                Dive into the full series to master blockchain and Web3.
              </p>
            </div>
          </a>

          <a
            href="/resources"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/resources.jpg"
              alt="Resources"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#F7931A]">
                🛠 Resources & Tools
              </h3>
              <p className="text-gray-700">
                Explore key platforms, wallets, and security best practices.
              </p>
            </div>
          </a>

          <a
            href="/blog"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="/images/cards/blog.jpg"
              alt="Blog"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#F7931A]">
                ✍️ Blog & Insights
              </h3>
              <p className="text-gray-700">
                Stay updated on trends, scams to avoid, and career strategies.
              </p>
            </div>
          </a>
        </div>
      </section>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />
      */}

      {/* Final CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F7931A]">
          Ready to Dive Into Crypto?
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          <strong>Start your journey today</strong> with{" "}
          <strong>my books, free guides, and expert insights</strong>—because
          the future of finance is being built right now, and
          <strong>you don’t want to be left behind.</strong>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/books"
            className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
                  hover:bg-[#d67b16] transition duration-300"
          >
            {/* <a
            href="https://geni.us/ryan-carrington-amazon"
            className=""
          > */}
            📚 Browse the Books
            {/* </a> */}
          </Link>

          <a
            href="/free-book"
            className="inline-block bg-[#00d3db] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
            hover:bg-[#00aabb] transition duration-300"
          >
            📩 Get Your Free Crypto Guide
          </a>
        </div>
      </section>
    </>
  );
}
