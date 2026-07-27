import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
// import bookData from "@/data/bookData.json";
import { loadBookData } from "@/utils/loadData";
const bookData = loadBookData(); // Load JSON statically at build time

// export function generateMetadata({ params }) {
//   const book = bookData.find((b) => b.slug === params.slug);
//   if (!book) {
//     return notFound();
//   }

//   return {
//     title: `${book.title} | Your Crypto Crash Course`,
//     description:
//       book.tagline || "Master Crypto, Web3 & Blockchain—One Book at a Time",
//     openGraph: {
//       title: book.title,
//       description:
//         book.tagline || "Master Crypto, Web3 & Blockchain—One Book at a Time",
//       url: `https://yourcryptocrashcourse.com/books/${book.slug}`,
//       type: "book",
//       images: [{ url: book.coverImage || "/images/social-preview.jpg" }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: book.title,
//       description:
//         book.tagline || "Master Crypto, Web3 & Blockchain—One Book at a Time",
//       images: [book.coverImage || "/images/social-preview.jpg"],
//     },
//   };
// }

// **Generate Static Paths for Books**
export function generateStaticParams() {
  return bookData.map((book) => ({ slug: book.slug }));
}

// Dynamic Book Page Component
export default function BookPage({ params }) {
  const book = bookData.find((b) => b.slug === params.slug);

  if (!book) {
    return <h1 className="text-center text-3xl mt-10">Book not found</h1>;
  }

  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto px-6 pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-[#F7931A]">
            {book.title}
          </h1>
          <h2 className="text-2xl text-gray-700 mt-2">{book.subtitle}</h2>
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-64 mx-auto mt-6 shadow-lg rounded-lg"
          />
        </section>

        {/* Book Description */}
        <section className="mt-10 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {book.description}
          </p>
          <p className="mt-4 text-gray-600 italic">"{book.tagline}"</p>
        </section>

        {/* Buy Links */}
        <section className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-[#F7931A]">Get Your Copy</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {book.formats.amazon && (
              <a
                href={book.formats.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F7931A] text-white text-lg font-bold py-4 px-6 rounded-lg shadow-md hover:bg-[#d67b16] transition"
              >
                🛒 Buy on Amazon
              </a>
            )}
            {book.formats.audible && (
              <a
                href={book.formats.audible}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F7931A] text-white text-lg font-bold py-4 px-6 rounded-lg shadow-md hover:bg-[#d67b16] transition"
              >
                🎧 Listen on Audible
              </a>
            )}
          </div>
        </section>
      </div>

      <hr className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 my-8 border-0" />

      <div className="max-w-4xl mx-auto px-6 py-6 pb-32">
        {/* Related Books */}
        <section className="mt-6 text-center">
          <h3 className="text-4xl font-bold text-[#F7931A]">Related Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {book.relatedBooks.map((relatedSlug) => {
              const relatedBook = bookData.find((b) => b.slug === relatedSlug);
              return relatedBook ? (
                <a
                  key={relatedBook.slug}
                  href={`/books/${relatedBook.slug}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={relatedBook.coverImage}
                    alt={relatedBook.title}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-medium">{relatedBook.title}</h4>
                  </div>
                </a>
              ) : null;
            })}
          </div>
        </section>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-6 pb-32">
        <section className="mt-6 text-center">
          <h3 className="text-4xl font-bold text-[#F7931A]">
            Check out the full collection
          </h3>
          {/* Amazon CTA Button */}
          <div className="mt-8">
            <a
              href="https://geni.us/ryan-carrington-amazon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F7931A] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
                  hover:bg-[#d67b16] transition duration-300"
            >
              🛒 View on Amazon
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
