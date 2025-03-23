// Definiert die möglichen Antworten für jede Frage
export type Answer = {
  id: string; // z.B. 'a', 'b', 'c', etc.
  text: string;
  points: Record<CarBrand, number>; // Punktzahl 1-3 für jede Marke
};

// Definiert die Struktur einer Frage
export type Question = {
  id: number;
  text: string;
  answers: Answer[];
  category?: "personality" | "lifestyle" | "behavior"; // Optionale Kategorisierung der Fragen
};

// Definiert alle verfügbaren Automarken
export type CarBrand =
  | "Volkswagen"
  | "BMW"
  | "Mercedes-Benz"
  | "Audi"
  | "Porsche"
  | "Opel"
  | "Skoda"
  | "Toyota"
  | "Honda"
  | "Ford"
  | "Fiat"
  | "Peugeot"
  | "Renault"
  | "Volvo"
  | "Tesla"
  | "Mazda"
  | "Hyundai"
  | "Suzuki"
  | "Mini"
  | "Jeep";

// Gruppierung der Automarken
export type CarBrandGroup = "Deutsche Automarken" | "Internationale Automarken";

// Definiert die Persönlichkeitsbeschreibung einer Automarke
export type CarBrandProfile = {
  name: CarBrand;
  group: CarBrandGroup;
  traits: string[]; // Charaktereigenschaften
  description: string;
  animal: string; // Tier-Analogie
  keywords: string[]; // Zusätzliche Schlüsselwörter
};

// Definiert das Ergebnis des Tests
export type TestResult = {
  brand: CarBrand;
  score: number;
  profile: CarBrandProfile;
  matchPercentage: number; // Prozentuale Übereinstimmung
  alternativeBrands: Array<{ brand: CarBrand; score: number }>; // Alternative Marken bei ähnlicher Punktzahl
};

// Definiert den Zustand des Tests
export type TestState = {
  currentQuestionIndex: number;
  answers: Record<number, Answer>; // Speichert die Antworten pro Frage
  completed: boolean;
  result?: TestResult;
};

// Definiert die möglichen Test-Aktionen
export type TestAction =
  | { type: "START_TEST" }
  | { type: "ANSWER_QUESTION"; questionId: number; answer: Answer }
  | { type: "NAVIGATE_TO_QUESTION"; questionIndex: number }
  | { type: "FINISH_TEST"; result: TestResult };
