# Anleitung: Navigation für Quiz-Komponenten hinzufügen

Diese Anleitung beschreibt, wie du die Navigation zu deinen bestehenden Quiz-Komponenten hinzufügen kannst. Die Navigation wird unter deinem Test angezeigt.

## Schritte zur Implementierung

### 1. `types.ts` aktualisieren

Füge `answerHistory` zum `TestState`-Typ hinzu:

```typescript
export type TestState = {
  // ... bestehende Felder
  answerHistory: number[]; // Speichert Indizes der beantworteten Fragen
  result: ResultType | null;
  showResult: boolean;
};
```

### 2. `[testname]-test.tsx` aktualisieren

#### A. Reducer-Funktion erweitern

```typescript
function testReducer(state: TestState, action: any): TestState {
  switch (action.type) {
    case "START_TEST":
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: {},
        answerHistory: [], // Zurücksetzen des Verlaufs
        result: null,
        showResult: false,
      };
    case "ANSWER_QUESTION":
      const newAnswers = {
        ...state.answers,
        [questions[state.currentQuestionIndex].id]: action.answerId,
      };

      // Antwortenverlauf aktualisieren
      const newHistory = [...state.answerHistory];
      if (!newHistory.includes(state.currentQuestionIndex)) {
        newHistory.push(state.currentQuestionIndex);
      }

      // Wenn dies die letzte Frage war...
      if (state.currentQuestionIndex === questions.length - 1) {
        return {
          ...state,
          answers: newAnswers,
          answerHistory: newHistory,
          result: calculateResult(newAnswers),
          showResult: true,
        };
      }

      // Ansonsten zur nächsten Frage
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: newAnswers,
        answerHistory: newHistory,
      };
    case "NAVIGATE_TO_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.questionIndex,
      };
    // ... weitere cases
  }
}
```

#### B. Initialen State und Handler aktualisieren

```typescript
// State initialisieren
const [state, dispatch] = useReducer(testReducer, {
  currentQuestionIndex: -1,
  answers: {},
  answerHistory: [], // Neues Feld
  result: null,
  showResult: false,
});

// Neuen Handler hinzufügen
const handleNavigate = (questionIndex: number) => {
  dispatch({
    type: "NAVIGATE_TO_QUESTION",
    questionIndex,
  });
};

// QuestionCard-Komponente aktualisieren
<QuestionCard
  question={questions[state.currentQuestionIndex]}
  onAnswer={handleAnswer}
  currentIndex={state.currentQuestionIndex}
  totalQuestions={questions.length}
  answeredQuestions={state.answerHistory}
  onNavigate={handleNavigate}
/>;
```

### 3. `question-card.tsx` aktualisieren

```typescript
// Import hinzufügen
import { QuestionPagination } from "../question-pagination";

// Props-Interface erweitern
interface QuestionCardProps {
  // ... bestehende Props
  answeredQuestions: number[];
  onNavigate: (index: number) => void;
}

// Komponente aktualisieren
export function QuestionCard({
  // ... bestehende Props
  answeredQuestions,
  onNavigate,
}: QuestionCardProps) {
  // ... bestehender Code

  return (
    <motion.div>
      {/* ... bestehender Code */}

      {/* Navigation-Komponente einfügen */}
      <QuestionPagination
        totalQuestions={totalQuestions}
        currentIndex={currentIndex}
        answeredQuestions={answeredQuestions}
        onNavigate={onNavigate}
      />

      {/* ... bestehender Code für Antworten */}
    </motion.div>
  );
}
```

## Weitere Anpassungsmöglichkeiten

- Farben in `QuestionPagination` anpassen, um dem Test-Thema zu entsprechen
- Positionierung der Navigation (oben/unten/Seite)
- Möglichkeit zur Navigation mit Tastatur hinzufügen
- Zurück-Button für mobile Nutzer hinzufügen
