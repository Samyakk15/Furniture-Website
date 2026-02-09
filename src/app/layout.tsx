import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ----- GLOBAL METADATA -----
// Default metadata applied to all pages (can be overridden per-page)
export const metadata: Metadata = {
  // Base URL for resolving relative URLs in metadata
  metadataBase: new URL('https://dreamfurniture.com'),

  // Default title with template for child pages
  title: {
    default: 'DreamFurniture | Premium Home Furniture',
    template: '%s | DreamFurniture',
  },

  // Default description for SEO
  description: 'Transform your living space with our curated collection of premium furniture. Quality craftsmanship meets modern design. Custom furniture, free delivery, and expert interior design services.',

  // Keywords for search engines
  keywords: ['furniture', 'home decor', 'custom furniture', 'modern furniture', 'living room', 'bedroom', 'dining room'],

  // Author information
  authors: [{ name: 'DreamFurniture' }],

  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DreamFurniture',
    title: 'DreamFurniture | Premium Home Furniture',
    description: 'Transform your living space with our curated collection of premium furniture. Quality craftsmanship meets modern design.',
    images: [
      {
        url: '/og-image.jpg', // Default OG image
        width: 1200,
        height: 630,
        alt: 'DreamFurniture - Premium Home Furniture',
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'DreamFurniture | Premium Home Furniture',
    description: 'Transform your living space with our curated collection of premium furniture.',
    images: ['/og-image.jpg'],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
