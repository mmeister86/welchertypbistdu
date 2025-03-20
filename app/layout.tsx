import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WelcherTypBistDu - Entdecke deine Persönlichkeit",
  description:
    "Entdecke mehr über dich selbst mit unseren unterhaltsamen und aufschlussreichen Persönlichkeitstests!",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
