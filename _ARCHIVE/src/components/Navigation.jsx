// "use client";

// import Link from "next/link";

// export default function Navigation() {
//   return (
//     <nav className="bg-[#F7931A] text-white py-4 px-6 fixed w-full top-0 shadow-lg z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <a href="/" className="text-2xl font-bold tracking-wide">
//           Your Crypto Crash Course
//         </a>
//         <ul className="hidden md:flex space-x-6 text-lg font-semibold">
//           <li>
//             <Link href="/about" className="hover:underline">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/books" className="hover:underline">
//               Books
//             </Link>
//           </li>
//           <li>
//             <Link href="/audiobooks" className="hover:underline">
//               Audiobooks
//             </Link>
//           </li>
//           <li>
//             <Link href="/articles" className="hover:underline">
//               Articles
//             </Link>
//           </li>
//           <li>|</li>
//           <li>
//             <Link href="/free-book" className="hover:underline">
//               FREE Book
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Install with `npm install lucide-react`

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F7931A] text-white py-4 px-6 fixed w-full top-0 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          Your Crypto Crash Course
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="/books" className="hover:underline">Books</Link>
          </li>
          <li>
            <Link href="/audiobooks" className="hover:underline">Audiobooks</Link>
          </li>
          <li>
            <Link href="/articles" className="hover:underline">Articles</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/free-book" className="hover:underline">FREE Book</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#F7931A] shadow-lg border-t border-white">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            <li>
              <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/books" className="hover:underline" onClick={() => setIsOpen(false)}>Books</Link>
            </li>
            <li>
              <Link href="/audiobooks" className="hover:underline" onClick={() => setIsOpen(false)}>Audiobooks</Link>
            </li>
            <li>
              <Link href="/articles" className="hover:underline" onClick={() => setIsOpen(false)}>Articles</Link>
            </li>
            <li>
              <Link href="/free-book" className="hover:underline" onClick={() => setIsOpen(false)}>FREE Book</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}