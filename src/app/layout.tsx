import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Just a Chill Guy",
  description: "Just a Chill Guy",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Just a Chill Guy",
    description: "Just a Chill Guy",
    url: "https://limazia.dev",
    images: ["opengraph-image.png"],
    type: "website",
    locale: "pt_BR",
  },
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
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased overflow-hidden">
        <div className="fixed left-0 top-0 -z-10  h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

        {children}
      </body>
    </html>
  );
}
