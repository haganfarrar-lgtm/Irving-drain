import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LeadPopup from '@/components/LeadPopup';
import Footer from "@/components/Footer";
import { generateLocalBusinessSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Irving Drainage Pros | Professional Drainage Services Services",
  description: "Expert drainage, hardscaping, irrigation, and outdoor design services in Irving and surrounding areas. Call (682) 628-0778 for a free consultation.",
  keywords: "drainage, drainage specialist, Irving, Texas, property protection, hardscaping, irrigation, outdoor design, professional drainage, garden design",
  authors: [{ name: "Irving Drainage Pros" }],
  creator: "Irving Drainage Pros",
  publisher: "Irving Drainage Pros",
  metadataBase: new URL('https://irvingdrainagepros.com'),
  alternates: {
    canonical: 'https://irvingdrainagepros.com',
  },
  openGraph: {
    title: "Irving Drainage Pros | Professional Drainage Services Services",
    description: "Expert drainage, hardscaping, irrigation, and outdoor design services in Irving and surrounding areas. Call (682) 628-0778 for a free consultation.",
    url: 'https://irvingdrainagepros.com',
    siteName: 'Irving Drainage Pros',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Irving Drainage Pros | Professional Drainage Services Services",
    description: "Expert drainage, hardscaping, irrigation, and outdoor design services in Irving and surrounding areas.",
    creator: '@haltomcitydrainage',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'script:ld+json': JSON.stringify(generateLocalBusinessSchema())
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-body`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
          <LeadPopup />
      </body>
    </html>
  );
}
