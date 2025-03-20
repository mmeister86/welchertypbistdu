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
  | "gi-hun"
  | "sae-byeok"
  | "sang-woo"
  | "il-nam"
  | "deok-su"
  | "ali"
  | "mi-nyeo"
  | "ji-yeong"
  | "jun-ho"
  | "front-man";

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
  result: Character | null;
  showResult: boolean;
};
