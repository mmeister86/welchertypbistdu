export type Answer = {
  id: string;
  text: string;
  points: Record<DogBreed, number>;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type DogBreed =
  | "borderCollie"
  | "australianShepherd"
  | "siberianHusky"
  | "beagle"
  | "pug"
  | "cavalierKingCharles"
  | "shihTzu"
  | "frenchBulldog"
  | "goldenRetriever"
  | "labradorRetriever"
  | "irishWolfhound"
  | "brusselsGriffon"
  | "bullTerrier"
  | "cotonDeTulear"
  | "alaskanKleeKai";

export type DogBreedResult = {
  id: DogBreed;
  name: string;
  description: string;
  image: string;
  color: string;
  size: string;
  activityLevel: string;
  groomingNeeds: string;
  goodWith: string[];
};

export type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  answerHistory: number[];
  result: DogBreed | null;
  showResult: boolean;
};
