import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import BackgroundParticles from "@/components/BackgroundParticles";
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
  title: "Meghanad Kheti · Senior Full Stack Developer",
  description: "Portfolio of Meghanad Kheti — Senior Full Stack Developer (PHP, Python, Django, Laravel, CI, MySQL, AI/LLMs)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-animated`}>
        {/* Background particles */}
        <BackgroundParticles />
        
        {/* 3D component removed */}
        
        <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/80 sticky top-0 z-50 mb-8">
          <Nav />
        </header>
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 relative z-10">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] py-6 text-center text-sm text-gray-400 relative z-10 mt-8">
          © {new Date().getFullYear()} Meghanad Kheti - Full Stack Developer
        </footer>
      </body>
    </html>
  );
}
