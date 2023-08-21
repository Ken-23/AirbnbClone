import "./globals.css";
import { Navigation as Navbar } from "./Components/Navigation/navigation";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Modal } from "./Components/modals/modal";
import { useCallback } from "react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        <Modal title="Hello " isOpen />
        <Navbar />
      </body>
    </html>
  );
}
