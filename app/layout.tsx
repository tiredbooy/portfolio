import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";

// Configure fonts with optimal settings
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-vazirmatn",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://tiredboy.netlify.app"), // Replace with your actual domain
  title: {
    default: "Mahdi Kazemi - Front-End & Desktop App Developer",
    template: "%s | Mahdi Kazemi",
  },
  description:
    "Experienced Front-End & Desktop App Developer specializing in React, Next.js, and modern web technologies. Crafting immersive, performant digital experiences with clean code and stunning design.",
  keywords: [
    "Mahdi Kazemi",
    "Front-End Developer",
    "Desktop App Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mahdi Kazemi" }],
  creator: "Mahdi Kazemi",
  publisher: "Mahdi Kazemi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tiredboy.netlify.app",
    title: "Mahdi Kazemi - Front-End & Desktop App Developer",
    description:
      "Crafting immersive digital experiences with modern web technologies",
    siteName: "Mahdi Kazemi Portfolio",
    images: [
      {
        url: "/og-image.png", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Mahdi Kazemi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi Kazemi - Front-End & Desktop App Developer",
    description:
      "Crafting immersive digital experiences with modern web technologies",
    images: ["/og-image.png"], // Add your Twitter image
    creator: "@tiredboy", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "x4-B9aq4Ch5-Xpgu7vzQfZ6sQrpPHOhDqVEf_jNWSL4",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  alternates: {
    canonical: "https://tiredboy.netlify.app",
  },
  category: "technology",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.className} light`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/profile.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
      </head>
      <body
        className={`${inter.className} gradient-hero antialiased min-h-screen`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
