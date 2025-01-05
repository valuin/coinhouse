import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ["100", "300", "400", "700", "900"],
});


export const metadata: Metadata = {
  title: "Coinhouse",
  description: "Turning Properties into Opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${InterFont.className} antialiased `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
