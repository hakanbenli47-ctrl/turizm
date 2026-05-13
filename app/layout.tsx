import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sezenturizm.com"),
  title: {
    default: "Sezen Turizm | VIP Transfer ve Özel Ulaşım Hizmetleri",
    template: "%s | Sezen Turizm",
  },
  description:
    "Sezen Turizm; VIP transfer, düğün gelin arabası, engelsiz ulaşım, kurumsal transfer, misafir ve davetli transferi, organizasyon filo yönetimi hizmetleri sunar.",
  keywords: [
    "Sezen Turizm",
    "VIP transfer",
    "düğün gelin arabası",
    "engelsiz ulaşım",
    "kurumsal transfer",
    "misafir transferi",
    "davetli transferi",
    "organizasyon filo yönetimi",
    "özel ulaşım hizmetleri",
  ],
  openGraph: {
    title: "Sezen Turizm | VIP Transfer ve Özel Ulaşım Hizmetleri",
    description:
      "VIP transfer, düğün gelin arabası, engelsiz ulaşım, kurumsal transfer ve organizasyon filo yönetimi hizmetleri.",
    url: "https://sezenturizm.com",
    siteName: "Sezen Turizm",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://sezenturizm.com",
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
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}