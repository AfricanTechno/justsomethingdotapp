import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://justsomething.app"),
  title: {
    default: "Just Apps | Simple health tracking apps",
    template: "%s | Just Apps",
  },
  description:
    "A growing family of simple apps for blood pressure, weight, glucose, and more.",
  openGraph: {
    title: "Just Apps | Simple health tracking apps",
    description:
      "A growing family of simple apps for blood pressure, weight, glucose, and more.",
    url: "https://justsomething.app",
    siteName: "Just Apps",
    type: "website",
  },
  icons: {
    // Placeholder — replace with final icon assets.
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
