import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Caveat } from 'next/font/google';
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const caveat = Caveat({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-caveat' });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="m-0 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
