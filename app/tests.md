# Datei- und Ordnerstruktur für Tests

Am Beispiel des SpongeBob-Persönlichkeitstests:

## Ordnerstruktur

- **app/tests/spongebob/**

  - `page.tsx` - Hauptseite für den SpongeBob-Test
  - **ergebnis/** - Ordner für die Ergebnisseite
    - `page.tsx` - Server-Komponente für die Ergebnisseite
    - `result-content.tsx` - Client-Komponente für die Ergebnisdarstellung

- **components/tests/spongebob/**
  - Enthält alle wiederverwendbaren Komponenten und Logik für den Test

## Dateien und ihre Funktionen

### App-Komponenten

- **app/tests/spongebob/page.tsx**

  - Hauptseite des Tests
  - Importiert und rendert die SpongebobTest-Komponente
  - Definiert Metadaten für die Seite (Titel, Beschreibung)

- **app/tests/spongebob/ergebnis/page.tsx**

  - Server-Komponente für die Ergebnisseite
  - Verarbeitet URL-Parameter (character)
  - Generiert dynamische Metadaten basierend auf dem Testergebnis
  - Implementiert strukturierte Daten (JSON-LD) für SEO
  - Rendert die UI mit BubbleBackground, AdBanner und ResultContent

- **app/tests/spongebob/ergebnis/result-content.tsx**
  - Client-Komponente für die Ergebnisanzeige
  - Verarbeitet den Character-Parameter
  - Zeigt die ResultCard-Komponente mit entsprechenden Daten an
  - Implementiert die "Test wiederholen" Funktionalität

### Komponenten

- **components/tests/spongebob/spongebob-test.tsx**

  - Hauptkomponente für den Test
  - Implementiert useReducer für die Zustandsverwaltung
  - Enthält Logik für Teststart, Antworten und Ergebnisberechnung
  - Verwendet framer-motion für Animationen
  - Zeigt IntroCard, QuestionCard oder ResultCard je nach Testphase

- **components/tests/spongebob/result-card.tsx**

  - Anzeige des Testergebnisses
  - Zeigt Character-Informationen, Bild und Beschreibung
  - Implementiert Sharing-Funktionalität
  - Enthält "Test wiederholen" Button

- **components/tests/spongebob/question-card.tsx**

  - Anzeige der Testfragen
  - Rendert die Frage und mögliche Antworten
  - Verarbeitet Benutzerinteraktionen (Antwortauswahl)

- **components/tests/spongebob/intro-card.tsx**

  - Startbildschirm des Tests
  - Enthält Einführungstext und Start-Button

- **components/tests/spongebob/bubble-background.tsx**

  - Dekorative Hintergrundkomponente mit animierten Blasen
  - Sorgt für das Unterwasser-Feeling von Bikini Bottom

- **components/tests/spongebob/ad-banner.tsx**

  - Werbekomponente für Anzeigen
  - Wird am Anfang und Ende der Testseiten eingebunden

- **components/tests/spongebob/analytics.ts**
  - Funktionen für das Tracking von Testergebnissen
  - Integriert mit Google Analytics

### Daten und Typen

- **components/tests/spongebob/types.ts**

  - TypeScript-Definitionen für den Test
  - Character-Typen (spongebob, patrick, squidward, usw.)
  - Test-Zustands-Interface
  - Fragen- und Antwort-Strukturen

- **components/tests/spongebob/test-data.ts**
  - Enthält die Testfragen und Antwortoptionen
  - Definiert Charaktereigenschaften und Ergebnisbeschreibungen
  - Bilder und Farben für die Ergebnisanzeige

## Datenfluss

1. Benutzer startet den Test auf der Hauptseite
2. Die SpongebobTest-Komponente verwaltet den Zustand und zeigt Fragen an
3. Nach Beantwortung aller Fragen wird das Ergebnis berechnet
4. Benutzer wird zur Ergebnisseite weitergeleitet
5. Die Ergebnisseite lädt die Charakterdaten und zeigt die ResultCard an

## Besonderheiten

- Die Tests verwenden eine Client-Server-Architektur
- Server-Komponenten für SEO und Meta-Tags
- Client-Komponenten für interaktive Elemente
- Verwendung von Next.js App Router für dynamische Routing
- Framer Motion für Animationen
- Responsive Design für alle Bildschirmgrößen

## Umgang mit dynamischen APIs in Next.js

Ab Next.js 15 sind dynamische APIs wie `searchParams`, `params`, `cookies()`, `headers()` und `draftMode()` asynchron. Dies hat Auswirkungen auf die Implementierung der Ergebnisseiten bei Tests:

### Asynchrone Verarbeitung von URL-Parametern

- **Typ-Definition für Props:**

  ```typescript
  type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };
  ```

- **Korrekte Verwendung in async Server-Komponenten:**

  ```typescript
  export default async function TestResultPage({ searchParams }: Props) {
    // Korrekte Art, searchParams zu verwenden
    const currParams = await searchParams;
    const resultId = (currParams.result as string) || "default";

    // Rest der Komponente
  }
  ```

- **Verwendung in generateMetadata:**

  ```typescript
  export async function generateMetadata({
    searchParams,
  }: Props): Promise<Metadata> {
    const currParams = await searchParams;
    const resultId = (currParams.result as string) || "default";

    // Generiere Metadaten basierend auf resultId
  }
  ```

### Alternative Verwendung mit React.use Hook

In bestimmten Fällen kann auch der `use` Hook verwendet werden:

```typescript
import { use } from "react";

export default function TestResultPage({ searchParams }: Props) {
  // Mit use ist die Komponente nicht async
  const currParams = use(searchParams);
  const resultId = (currParams.result as string) || "default";

  // Rest der Komponente
}
```

### Vorteile der asynchronen APIs

- Verbesserte Performanz durch paralleles Rendering
- Server-Komponenten können sofort mit dem Rendering beginnen, während auf searchParams gewartet wird
- Bessere Optimierung der Anwendung durch Next.js

### Best Practices

- Niemals direkt auf searchParams-Eigenschaften zugreifen (z.B. `searchParams.result`)
- Immer zuerst mit `await searchParams` den gesamten Wert auflösen
- In einer Server-Komponente entweder `async/await` oder `use` verwenden
- In Client-Komponenten stattdessen `useSearchParams()` aus `next/navigation` verwenden
