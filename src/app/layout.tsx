import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/organisms/HeaderNavigation";
import { FavoritesProvider } from "@/context/FavoritesContext";

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description:
    "Explore Pangasinan's iconic heritage sites: Balingasay River, Cabongaoan Beach, Manaoag Basilica, Tayug Sunflower Maze, and Cape Bolinao Lighthouse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Casual sans-serif pairing: Poppins (headings) + Inter (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-sand-50 min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white p-2 rounded"
        >
          Skip to main content
        </a>
        <FavoritesProvider>
          <HeaderNavigation />
          <main id="main-content">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
