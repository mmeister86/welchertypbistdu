"use client";

import { AdUnit } from "@/components/ui/ad-unit";

export function AdBanner() {
  return (
    <div className="w-full py-3">
      <div className="max-w-6xl mx-auto px-4">
        {/* Fallback für den Fall, dass AdSense blockiert wird */}
        <noscript>
          <div className="h-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white border border-white border-opacity-20">
            Werbung - Advertisement
          </div>
        </noscript>

        {/* Ersetzen Sie IHRE-AD-SLOT-ID mit der tatsächlichen Slot-ID aus Ihrem AdSense-Konto */}
        <AdUnit
          adSlot="IHRE-AD-SLOT-ID"
          adFormat="horizontal"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
