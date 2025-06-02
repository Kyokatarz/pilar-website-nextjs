import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilar Miralles · Sound artist - Researcher",
  description:
    "Hi, I'm Pilar Miralles - a composer and researcher. Welcome to my website!",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* insert favicon */}
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main className="pt-14 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
