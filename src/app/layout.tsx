import "./globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { SITE_URL } from "@/utils/constants";

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Your Crypto Crash Course",
  description:
    "Your Crypto Crash Course — books, audiobooks, and quick reads to help you understand crypto with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} text-gray-800`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
