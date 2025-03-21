"use client";

import * as React from "react";
import {
  Share2,
  Facebook,
  MessageCircle,
  Send,
  Mail,
  Copy,
} from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
  iconSize?: number;
  variant?: "default" | "outline" | "subtle";
  color?: string;
}

/**
 * Eine wiederverwendbare Komponente für verschiedene Sharing-Optionen
 *
 * @param url - Die URL, die geteilt werden soll
 * @param title - Der Titel für den Share-Dialog
 * @param className - Optionale CSS-Klassen für den Container
 * @param iconSize - Optionale Größe der Icons (Standard: 18)
 * @param variant - Styling-Variante (default, outline, subtle)
 * @param color - Farbe für die Icons und Hover-Effekte
 */
export function ShareButtons({
  url,
  title,
  className = "",
  iconSize = 18,
  variant = "default",
  color = "",
}: ShareButtonsProps) {
  // Kopiert die URL in die Zwischenablage
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Link kopiert", {
        description: "Der Link wurde in die Zwischenablage kopiert.",
        duration: 3000,
      });
    } catch (err) {
      toast("Fehler", {
        description: "Der Link konnte nicht kopiert werden.",
        style: { backgroundColor: 'red', color: 'white' },
        duration: 3000,
      });
      console.error("Failed to copy:", err);
    }
  };

  // URLs für die verschiedenen Sharing-Plattformen
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&t=${encodeURIComponent(title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title} ${url}`
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(`${title} ${url}`)}`,
  };

  // Styling auf Basis der Variante
  let buttonStyles = "";

  switch (variant) {
    case "outline":
      buttonStyles = "border rounded-full p-2 transition-colors";
      break;
    case "subtle":
      buttonStyles = "p-2 rounded-full transition-colors";
      break;
    default:
      buttonStyles = "p-2 rounded-full transition-colors";
  }

  // Standardfarbe bestimmen, wenn keine explizite Farbe angegeben wurde
  const defaultColorStyles =
    color || "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={copyToClipboard}
        className={`${buttonStyles} ${defaultColorStyles}`}
        aria-label="Link kopieren"
        title="Link kopieren"
      >
        <Copy size={iconSize} />
      </button>

      <a
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyles} text-blue-600 hover:text-blue-800 hover:bg-blue-50`}
        aria-label="Auf Facebook teilen"
        title="Auf Facebook teilen"
      >
        <Facebook size={iconSize} />
      </a>

      <a
        href={shareUrls.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyles} text-green-600 hover:text-green-800 hover:bg-green-50`}
        aria-label="Über WhatsApp teilen"
        title="Über WhatsApp teilen"
      >
        <MessageCircle size={iconSize} />
      </a>

      <a
        href={shareUrls.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyles} text-blue-500 hover:text-blue-700 hover:bg-blue-50`}
        aria-label="Über Telegram teilen"
        title="Über Telegram teilen"
      >
        <Send size={iconSize} />
      </a>

      <a
        href={shareUrls.email}
        className={`${buttonStyles} text-gray-700 hover:text-gray-900 hover:bg-gray-100`}
        aria-label="Per E-Mail teilen"
        title="Per E-Mail teilen"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
}
