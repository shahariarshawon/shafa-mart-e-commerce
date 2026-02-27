import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import UpperHeader from "@/components/UppperHeader";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shafa Mart",
  description: "An e-commerce platform for buying and selling products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="">
          <UpperHeader />
          <Header />
          <div className="max-w-xl md:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
