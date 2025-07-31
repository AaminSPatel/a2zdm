import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TechProvider } from '@/components/TechContext';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Trusted Martech Partner for Unstoppable Digital Success | Indore",
  description: "Your go-to Martech agency for smarter growth. We blend SEO, analytics, and marketing tech to help you scale faster and convert better.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >        <TechProvider>
         <Navbar />
        {children}
         <Footer />
                 </TechProvider>
      </body>
    </html>
  );
}
