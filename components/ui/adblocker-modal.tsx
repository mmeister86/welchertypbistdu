"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// TypeScript-Definition für das Google Ads Fenster-Objekt
declare global {
  interface Window {
    google_ad_status?: any;
  }
}

// Verbesserte Funktion zur Erkennung von Adblockern mit mehreren Methoden
const detectAdBlocker = async (): Promise<boolean> => {
  try {
    // Methode 1: Test-Element Methode
    const testElement = document.createElement("div");
    testElement.className =
      "adsbox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links";
    testElement.style.height = "1px";
    document.body.appendChild(testElement);

    // Methode 2: Bait-URLs testen mit fetch
    const testUrls = [
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      "https://static.ads-twitter.com/uwt.js",
      "https://www.googletagservices.com/tag/js/gpt.js",
    ];

    // Wir führen einen schnellen HEAD request aus, um zu sehen, ob die Anfrage blockiert wird
    const testFetch = async (url: string) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 500);

        const response = await fetch(url, {
          method: "HEAD",
          mode: "no-cors",
          signal: controller.signal,
          cache: "no-store",
        });

        clearTimeout(timeoutId);
        return true; // Request durchgelassen
      } catch (error) {
        return false; // Request blockiert oder Timeout
      }
    };

    // Mehrere Tests gleichzeitig ausführen
    const fetchResults = await Promise.all(
      testUrls.map((url) => testFetch(url))
    );

    // Warten und Tests auswerten
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verschiedene Erkennungsmethoden kombinieren
    const checks = [
      // Check 1: Test-Element Sichtbarkeit
      testElement.offsetHeight === 0,
      // Check 2: Test-Element wurde entfernt oder unsichtbar gemacht
      !document.body.contains(testElement),
      // Check 3: Mindestens zwei der Fetch-Requests wurden blockiert
      fetchResults.filter((result) => !result).length >= 2,
    ];

    // Aufräumen
    if (document.body.contains(testElement))
      document.body.removeChild(testElement);

    // Wenn mindestens zwei Checks positiv sind, ist wahrscheinlich ein Adblocker aktiv
    return checks.filter(Boolean).length >= 2;
  } catch (error) {
    console.log("AdBlock detection error:", error);
    // Im Zweifelsfall nehmen wir an, dass kein Adblocker aktiv ist
    return false;
  }
};

export function AdBlockerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Prüfen ob ein Adblocker aktiv ist, aber nur einmal beim ersten Laden
    const checkAdBlocker = async () => {
      if (!hasChecked) {
        const isBlocked = await detectAdBlocker();
        console.log("AdBlock detected:", isBlocked); // Debug-Ausgabe
        setIsOpen(isBlocked);
        setHasChecked(true);
      }
    };

    checkAdBlocker();
  }, [hasChecked]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>🛡️ Oha, ein Adblocker!</DialogTitle>
          <DialogDescription className="space-y-4">
            <p>
              Hey du Schlauberger! 🧠 Wir sehen, dass du einen Adblocker
              benutzt. Clever, clever...
            </p>
            <p>
              Unsere armen Server müssen auch von irgendwas leben - sie träumen
              von Strom und gelegentlichen Upgrades. 🔌✨
            </p>
            <p>
              Aber keine Sorge! Du darfst die Seite trotzdem nutzen. Wir sind ja
              nicht die Werbe-Polizei. 👮‍♂️
            </p>
            <p className="italic text-sm">
              PS: Falls du uns doch unterstützen möchtest, schalte den Adblocker
              aus. Unsere Werbung ist wie ein gut erzogener Hund - sie bellt
              nicht und beißt nicht! 🐕
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Weiter mit Adblocker
          </Button>
          <Button
            onClick={() => {
              window.open("about:addons", "_blank");
              setIsOpen(false);
            }}
          >
            Adblocker deaktivieren
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
