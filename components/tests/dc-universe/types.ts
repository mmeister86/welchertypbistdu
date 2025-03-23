export type Answer = {
  id: string;
  text: string;
  points: Record<Trait, number>;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Trait =
  | "courage"
  | "intelligence"
  | "humor"
  | "morality"
  | "leadership"
  | "chaos"
  | "justice";

export type DCCharacter =
  | "superman"
  | "batman"
  | "wonderWoman"
  | "flash"
  | "aquaman"
  | "cyborg"
  | "shazam"
  | "supergirl"
  | "greenLantern"
  | "martianManhunter"
  | "blueBeetle"
  | "joker"
  | "harleyQuinn"
  | "lexLuthor"
  | "blackAdam";

export type CharacterType = "hero" | "villain";

export type DCCharacterResult = {
  id: DCCharacter;
  name: string;
  description: string;
  image: string;
  color: string;
  type: CharacterType;
  traits: Record<Trait, number>;
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  answerHistory: number[];
  result: DCCharacter | null;
  showResult: boolean;
};
