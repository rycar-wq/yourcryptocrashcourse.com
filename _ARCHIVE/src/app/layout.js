import "../../styles/globals.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer.jsx";

export const metadata = {
  title:
    "Your Crypto Crash Course | Master Crypto, Web3 & Blockchain—One Book at a Time",
  description: "Master Crypto, Web3 & Blockchain—One Book at a Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GVNXG337WK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GVNXG337WK', { page_path: window.location.pathname });
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sora">
        <main className="min-h-screen bg-gray-50 text-gray-900 pt-16">
          <Navigation />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
