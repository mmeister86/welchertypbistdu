export type Answer = {
  id: string;
  text: string;
  dogBreedPoints: Record<DogBreed, number>;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type DogBreed =
  | "border_collie"
  | "australian_shepherd"
  | "siberian_husky"
  | "beagle"
  | "pug"
  | "cavalier_king_charles_spaniel"
  | "shih_tzu"
  | "french_bulldog"
  | "golden_retriever"
  | "labrador_retriever"
  | "irish_wolfhound"
  | "brussels_griffon"
  | "bull_terrier"
  | "coton_de_tulear"
  | "alaskan_klee_kai";

export type DogBreedResult = {
  id: DogBreed;
  name: string;
  description: string;
  image: string;
  traits: string[];
  activityLevel: number; // 1-5
  grooming: number; // 1-5
  trainability: number; // 1-5
  familyFriendly: number; // 1-5
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  result: DogBreed | null;
  showResult: boolean;
};
