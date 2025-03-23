# Automarken Persönlichkeitstest

Ein interaktiver Persönlichkeitstest, der basierend auf den Antworten des Benutzers die am besten passende Automarke ermittelt.

## Funktionen

- 10 Fragen zu Persönlichkeit, Lifestyle und Verhalten
- 20 verschiedene Automarken mit detaillierten Persönlichkeitsprofilen
- Prozentuale Übereinstimmung mit der besten Marke
- Alternative Markenvorschläge basierend auf der Punktzahl
- Teilen der Ergebnisse über Social Media oder Link
- Responsive Design für alle Geräte
- Animationen für bessere Benutzerinteraktion

## Technische Details

### Komponenten

- `intro-card.tsx`: Startseite mit Einführung und Testbeschreibung
- `question-card.tsx`: Fragenanzeige mit Antwortoptionen
- `result-card.tsx`: Ergebnisanzeige mit Markendetails und Alternativen
- `analytics.ts`: Event-Tracking für Testinteraktionen
- `types.ts`: TypeScript Typdefinitionen
- `test-data.ts`: Fragen, Antworten und Markenprofile

### Datenstruktur

- Jede Frage hat 6 Antwortoptionen
- Jede Antwort vergibt 0-3 Punkte für verschiedene Automarken
- Marken sind in deutsche und internationale Marken gruppiert
- Jedes Markenprofil enthält:
  - Charaktereigenschaften
  - Beschreibung
  - Spirit Animal
  - Schlüsselwörter

### Scoring-System

- Maximale Punktzahl pro Frage: 3 Punkte
- Gesamtpunktzahl wird in Prozent umgerechnet
- Alternative Marken werden basierend auf ähnlichen Punktzahlen vorgeschlagen

## Verwendung

```typescript
// Test starten
<IntroCard onStart={handleStart} />

// Frage anzeigen
<QuestionCard
  question={currentQuestion}
  onAnswer={handleAnswer}
  currentIndex={currentQuestionIndex}
  totalQuestions={10}
/>

// Ergebnis anzeigen
<ResultCard result={testResult} onRestart={handleRestart} />
```

## Anpassung

Um neue Automarken hinzuzufügen oder bestehende zu ändern:

1. `types.ts`: Neue Marke zur `CarBrand` Type hinzufügen
2. `test-data.ts`: Markenprofil erstellen und Punkteverteilung anpassen
3. Bilder: Neues Markenbild unter `/images/automarken/` hinzufügen

## Bildquellen

Die Bilder der Automarken müssen im Format `markenname.jpg` unter `/images/automarken/` abgelegt werden.

## Analytics

Der Test trackt folgende Events:

- Teststart
- Beantwortung jeder Frage
- Testabschluss mit Ergebnis
- Teilen des Ergebnisses
- Neustart des Tests

## Lizenz

MIT
