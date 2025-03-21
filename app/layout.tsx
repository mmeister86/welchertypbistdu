import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { AdBlockerModal } from "@/components/ui/adblocker-modal";
import { Toaster } from "@/components/ui/toaster";
import { Footerdemo } from "@/components/footer2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WelcherTypBistDu - Entdecke deine Persönlichkeit",
  description:
    "Entdecke mehr über dich selbst mit unseren unterhaltsamen und aufschlussreichen Persönlichkeitstests!",
  metadataBase: new URL("https://welchertypbistdu.de"),
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
        <AdBlockerModal />
        <main>{children}</main>
        <Footerdemo />
        <Toaster />
      </body>
    </html>
  );
}
