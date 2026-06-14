import type { Metadata } from "next";

import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const Playfair = Playfair_Display ({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-Lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Start Smiling",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Playfair.variable} ${lato.variable} h-full antialiased` } suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
