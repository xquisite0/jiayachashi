import type { Metadata } from "next";
import { Merriweather, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-merriweather',
});

const notoSans = Noto_Sans({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: "Jia Ya Cha Shi (佳雅茶室) | Traditional Singapore Coffee Shop",
  description: "Experience authentic homemade drinks at Jia Ya Cha Shi, a traditional Singaporean coffee shop serving specialty beverages daily.",
  keywords: "Singapore coffee shop, hawker stall, homemade drinks, traditional beverages, Jia Ya Cha Shi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${notoSans.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
