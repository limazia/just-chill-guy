import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Apenas um cara tranquilo",
  description: "Apenas um gerador tranquilo de um cara tranquilo",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://guy-chill.vercel.app"),
  openGraph: {
    title: "Apenas um cara tranquilo",
    description: "Apenas um gerador tranquilo de um cara tranquilo",
    url: "https://guy-chill.vercel.app",
    images: "/og-image.png",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <div className="fixed left-0 top-0 -z-10  h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

        {children}
      </body>
    </html>
  );
}
