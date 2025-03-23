import type { CarBrand } from "./types";

export function trackTestStarted() {
  // This would be implemented with your analytics provider
  console.log("Automarken Persönlichkeitstest gestartet");
}

export function trackQuestionAnswered(questionId: number, answerId: string) {
  // This would be implemented with your analytics provider
  console.log(`Frage ${questionId} beantwortet mit Antwort: ${answerId}`);
}

export function trackTestCompleted(brand: CarBrand, matchPercentage: number) {
  // This would be implemented with your analytics provider
  console.log(
    `Automarken Test abgeschlossen mit Ergebnis: ${brand} (${matchPercentage}% Übereinstimmung)`
  );
}

export function trackResultShared(brand: CarBrand) {
  // This would be implemented with your analytics provider
  console.log(`Ergebnis geteilt: ${brand}`);
}

export function trackTestRestarted(previousBrand: CarBrand) {
  // This would be implemented with your analytics provider
  console.log(`Test neu gestartet nach vorherigem Ergebnis: ${previousBrand}`);
}
