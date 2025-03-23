export type Answer = {
  id: string;
  text: string;
  points: Record<Pokemon, number>;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Pokemon =
  | "pikachu"
  | "relaxo"
  | "bisasam"
  | "glumanda"
  | "mew"
  | "evoli"
  | "glurak"
  | "mewtu"
  | "gengar"
  | "schiggy"
  | "arkani"
  | "arceus"
  | "dragoran"
  | "enton"
  | "galoppa";

export type PokemonResult = {
  id: Pokemon;
  name: string;
  description: string;
  image: string;
  color: string;
  type: string;
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  answerHistory: number[]; // Speichert Indizes der beantworteten Fragen
  result: Pokemon | null;
  showResult: boolean;
};
