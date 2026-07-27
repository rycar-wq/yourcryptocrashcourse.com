import Link from "next/link";
import { SITE_AUTHOR } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Your Crypto Crash Course
          </h3>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {SITE_AUTHOR}.{" "}
            <Link href="/disclaimer" className="hover:text-primary transition">
              Disclaimer
            </Link>
          </p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <Link
            href="/books"
            className="text-gray-600 hover:text-primary transition"
          >
            Books
          </Link>
          <Link
            href="/audiobooks"
            className="text-gray-600 hover:text-primary transition"
          >
            Audiobooks
          </Link>
          <Link
            href="/articles"
            className="text-gray-600 hover:text-primary transition"
          >
            Articles
          </Link>
        </nav>
      </div>
    </footer>
  );
}
