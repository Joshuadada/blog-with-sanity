import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedestal",
  description: "Pedestal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Analytics & Tracking Scripts */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ecda1562-2226-4694-8764-8c8fa4b3dd4d"
        />
        <Script
          async
          src="https://cdn.seline.so/seline.js"
          data-token="7e3634a85d355b0"
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b818bd97-e292-43a5-aa47-d1636cf64440"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />
        {children}
        <ToastContainer className={"text-sm py-2"} />
      </body>
    </html>
  );
}
