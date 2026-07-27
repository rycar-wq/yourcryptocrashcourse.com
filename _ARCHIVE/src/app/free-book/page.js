export const metadata = {
  title: "FREE Crypto Guide | Your Crypto Crash Course",
  description: "Sign up to my newsletter and download your FREE Crypto guide!",
};

export default function FreeBookPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/banners/4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            📖 Get Your Free Crypto Guide!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Download <strong>Crypto’s Carbon Conundrum</strong> (Book 5) for
            FREE and uncover blockchain’s environmental impact.
          </p>
          <a
            href="https://BookHip.com/TKCVHRS"
            className="mt-6 inline-block bg-[#00d3db] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
            hover:bg-[#00aabb] transition duration-300"
          >
            📥 Get the Free Book Now
          </a>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00d3db]">
          What’s Inside the Free Book?
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          <strong>Crypto’s Carbon Conundrum</strong> explores blockchain’s
          impact on the environment, the debate around{" "}
          <strong>Bitcoin mining energy use</strong>, and the future of{" "}
          <strong>eco-friendly blockchain solutions</strong>.
        </p>

        <ul className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto space-y-3">
          <li>
            ✅ <strong>How blockchain technology consumes energy</strong>
          </li>
          <li>
            ✅ <strong>The truth behind Bitcoin’s carbon footprint</strong>
          </li>
          <li>
            ✅ <strong>Innovations making crypto more sustainable</strong>
          </li>
          <li>
            ✅ <strong>Future trends in green blockchain solutions</strong>
          </li>
        </ul>
      </section>

      <hr className="h-1 bg-gradient-to-r from-[#00d3db] via-[#00aabb] to-[#008b9a] my-8 border-0" />

      {/* Why Sign Up Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00d3db]">Why Sign Up?</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          By signing up, you’ll{" "}
          <strong>
            get exclusive access to new books, expert crypto insights, and
            special deals
          </strong>
          —all delivered straight to your inbox.
        </p>

        <div className="mt-8">
          <a
            href="https://BookHip.com/TKCVHRS"
            className="inline-block bg-[#00d3db] text-white text-lg font-bold py-4 px-8 rounded-lg shadow-md 
            hover:bg-[#00aabb] transition duration-300"
          >
            📥 Claim Your Free Copy
          </a>
        </div>

        <p className="mt-8 text-gray-600 text-sm">
          <strong>No spam. Just valuable insights. Unsubscribe anytime.</strong>
        </p>
      </section>
    </>
  );
}
