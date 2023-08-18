import "./globals.css";
import { Navigation as Navbar } from "../Navigation/navigation";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
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
        <Navbar />
      </body>
    </html>
  );
}
