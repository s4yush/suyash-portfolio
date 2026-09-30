import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CommandPalette from "@/components/CommandPalette";
import PageAssist from "@/components/PageAssist";
import { Archivo, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suyash · Aspiring Software Engineer",
    template: "%s · Suyash",
  },
  description:
    "Suyash is a 19-year-old first-year BTech CSE student building toward a career in software engineering.",
  keywords: [
    "Suyash",
    "s4yush",
    "BTech CSE",
    "software engineer",
    "portfolio",
    "student",
  ],
  authors: [{ name: "Suyash", url: "https://github.com/s4yush" }],
  creator: "Suyash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/s4yush",
    siteName: "Suyash Portfolio",
    title: "Suyash · Aspiring Software Engineer",
    description:
      "First-year BTech CSE student. Projects and journey coming soon.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@YOUR_TWITTER",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${archivo.variable} ${space.variable} ${jetmono.variable}`}
    >
      <head />
      <body className="grid-bg">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <GoogleAnalytics />
        <SmoothScroll />
        <Navbar />
        <main id="main" style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <PageAssist />
      </body>
    </html>
  );
}
