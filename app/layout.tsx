import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { AdBlockerModal } from "@/components/ui/adblocker-modal";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";

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
      <head>
        <script
          defer
          src="https://umami.matthias.lol/script.js"
          data-website-id="17e002d4-b037-4b55-93e6-8491073abec1"
        ></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <AdBlockerModal />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
