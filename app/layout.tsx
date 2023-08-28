"use client";
import "./globals.css";
import { Navigation as Navbar } from "./Components/Navigation/navigation";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "./Components/modals/RegisterModal";
import ToaterProvider from "./Components/providers/ToaterProvider";

const inter = Nunito({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToaterProvider />
        <RegisterModal />
        <Navbar />
      </body>
    </html>
  );
}
