"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      {/* Error Message */}
      <h1 className="text-6xl font-bold text-[#F7931A]">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Looks like the page you're looking for doesn’t exist.
      </p>

      <img src="/images/404.png" alt="Lost in Crypto" className="w-64 mt-8" />

      {/* Suggested Links */}
      <div className="mt-6 space-y-4">
        <Link
          href="/"
          className="block bg-[#F7931A] text-white px-6 py-3 rounded-md text-lg font-semibold shadow hover:bg-orange-600 transition"
        >
          Go Home
        </Link>
        <Link
          href="/books"
          className="block text-[#F7931A] font-semibold text-lg hover:underline"
        >
          Browse Books 📚
        </Link>
        <Link
          href="/audiobooks"
          className="block text-[#F7931A] font-semibold text-lg hover:underline"
        >
          Explore Audiobooks 🎧
        </Link>
      </div>

      {/* Footer Note */}
      <p className="text-gray-500 text-sm mt-6">
        If you think this is a mistake, contact me at{" "}
        <a
          href="mailto:ryancarrington@proton.me"
          className="text-[#F7931A] font-semibold"
        >
          ryancarrington@proton.me
        </a>
      </p>
    </div>
  );
}
