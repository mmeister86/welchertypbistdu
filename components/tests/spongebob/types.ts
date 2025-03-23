export type Answer = {
  id: string;
  text: string;
  character: Character;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Character =
  | "spongebob"
  | "patrick"
  | "squidward"
  | "krabs"
  | "sandy"
  | "plankton"
  | "gary"
  | "puff"
  | "pearl"
  | "karen";

export type CharacterResult = {
  id: Character;
  name: string;
  description: string;
  image: string;
  color: string;
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, Character>;
  answerHistory: number[]; // Speichert Indizes der beantworteten Fragen
  result: Character | null;
  showResult: boolean;
};
