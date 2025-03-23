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
  | "rachel"
  | "monica"
  | "chandler"
  | "joey"
  | "ross"
  | "phoebe"
  | "michael"
  | "dwight"
  | "pam"
  | "jim"
  | "leslie"
  | "ron"
  | "april"
  | "andy"
  | "mandalorian"
  | "grogu"
  | "tyrion"
  | "arya";

export type CharacterResult = {
  id: Character;
  name: string;
  description: string;
  image: string;
  show: string;
  color: string;
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, Character>;
  answerHistory: number[];
  result: Character | null;
  showResult: boolean;
};
