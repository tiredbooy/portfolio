import { Vazirmatn } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import Head from "next/head";

// Configure fonts
const vazirmatn = Vazirmatn({ subsets: ["arabic"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mahdi Kazemi - Portfolio",
    template: "%s | Mahdi Kazemi",
  },
  description:
    "Front-End & Desktop App Developer - Crafting immersive digital experiences",
  verification: {
    google: "x4-B9aq4Ch5-Xpgu7vzQfZ6sQrpPHOhDqVEf_jNWSL4",
  },
};

export default function Layout({ children }) {
  const language = "en";
  const direction = dir(language);

  return (
    <html lang="en" className="">
      <body className={`${inter.className} gradient-hero min-h-screen`}>
        {children}
      </body>
    </html>
  );
}


