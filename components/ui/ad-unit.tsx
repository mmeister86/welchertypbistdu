"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  adSlot: string; // Der Google AdSense Ad-Slot Code
  adFormat?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdUnit({
  adSlot,
  adFormat = "auto",
  className = "",
}: AdUnitProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Vermeiden Sie doppeltes Laden derselben Anzeige
    if (isLoaded.current) return;

    try {
      // Sicherstellen, dass AdSense-Array existiert
      if (typeof window !== "undefined") {
        window.adsbygoogle = window.adsbygoogle || [];
      }

      // Anzeige laden
      if (adContainerRef.current && typeof window !== "undefined") {
        window.adsbygoogle.push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error("Error loading ad:", error);
    }
  }, []);

  // Generiere Klassen basierend auf dem Format
  const formatClasses = {
    auto: "w-full h-auto",
    fluid: "w-full h-auto",
    rectangle: "w-[300px] h-[250px]",
    horizontal: "w-full h-[90px]",
    vertical: "w-[160px] h-[600px]",
  };

  return (
    <div
      ref={adContainerRef}
      className={`ad-container overflow-hidden ${formatClasses[adFormat]} ${className}`}
      style={{ minHeight: adFormat === "auto" ? "100px" : undefined }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-IHRE-PUBLISHER-ID" // Ersetzen mit Ihrer Publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
