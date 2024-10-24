import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], display: "swap" });


export const metadata: Metadata = {
  title: "Cha-Ching 💵",
  description: "A simple personal finance dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <div className="flex min-h-screen bg-zinc-900 text-white">
          <Sidebar />
          <main className="flex-1 overflow-auto max-h-screen p-8">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
