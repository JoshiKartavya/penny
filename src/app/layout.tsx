import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Penny | your money. simplified.",
  description: "Penny is the simple finance app. You don't need another finance app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black antialiased overflow-x-hidden selection:bg-black selection:text-white`}>
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
