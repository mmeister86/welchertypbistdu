"use client";

import { useEffect } from "react";

export function GoogleAdSenseScript() {
  useEffect(() => {
    // Vermeiden Sie doppeltes Laden des Scripts
    if (document.querySelector('script[src*="adsbygoogle.js"]')) {
      return;
    }

    try {
      // Script-Element erstellen
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      // Ersetzen Sie IHRE-PUBLISHER-ID mit Ihrer tatsächlichen Google AdSense Publisher-ID
      script.setAttribute("data-ad-client", "ca-pub-IHRE-PUBLISHER-ID");
      script.onerror = () => console.log("AdSense script loading failed");

      // Zum Head hinzufügen
      document.head.appendChild(script);
    } catch (error) {
      console.error("Error loading AdSense script:", error);
    }
  }, []);

  return null;
}
