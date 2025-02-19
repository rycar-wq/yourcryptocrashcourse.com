"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <nav className="bg-[#F7931A] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold">
            Your Crypto Crash Course
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <ul className="hidden md:flex space-x-6 text-lg font-semibold">
              <li>
                <a
                  href="https://geni.us/ryan-carrington-amazon"
                  className="hover:underline"
                  target="_blank"
                >
                  Amazon
                </a>
              </li>
              <li>
                <a
                  href="https://www.audible.co.uk/author/Ryan-Carrington/B0DKFK87CB"
                  className="hover:underline"
                  target="_blank"
                >
                  Audible
                </a>
              </li>
              <li>
                <Link href="/free-book" className="hover:underline">
                  FREE Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Ryan Carrington. | <Link href="/disclaimer" className="underline hover:text-gray-300 ml-2">Disclaimer</Link>
        </p>
      </footer>
    </>
  );
}
