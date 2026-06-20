import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Script from "next/script";
import Providers from "./_components/Providers";

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
  metadataBase: new URL("https://tiredbooy.ir"), // Replace with your actual domain
  title: {
    default: "Mahdi Kazemi — Full-Stack Developer",
    template: "%s | Mahdi Kazemi",
  },
  description:
    "Full-stack developer building end to end — React & Next.js on the front, Go, Node.js, PostgreSQL and Redis behind. I ship real products and build alongside AI tools like Claude Code.",
  keywords: [
    "Mahdi Kazemi",
    "Full-Stack Developer",
    "Front-End Developer",
    "Backend Developer",
    "Go Developer",
    "Golang",
    "React Developer",
    "Next.js Developer",
    "PostgreSQL",
    "Redis",
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
    url: "https://tiredbooy.ir",
    title: "Mahdi Kazemi — Full-Stack Developer",
    description:
      "Full-stack developer shipping real products end to end — React, Next.js, Go, PostgreSQL & Redis.",
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
    title: "Mahdi Kazemi — Full-Stack Developer",
    description:
      "Full-stack developer shipping real products end to end — React, Next.js, Go, PostgreSQL & Redis.",
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
    canonical: "https://tiredbooy.ir",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isFa = locale === "fa";

  return (
    <html
      lang={locale}
      dir={isFa ? "rtl" : "ltr"}
      className={`${inter.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${isFa ? "font-fa" : "font-sans"} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <Providers>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FGS0BPRBZB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FGS0BPRBZB');
        `}
        </Script>
      </body>
    </html>
  );
}
