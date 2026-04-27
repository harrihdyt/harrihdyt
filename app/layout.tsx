import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Geist to Inter
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harri Hidayat - Software Engineer",
  description: "Portfolio of Harri Hidayat, a Mobile Engineer specializing in Flutter, iOS, and Android.",
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
