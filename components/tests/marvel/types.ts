export type Answer = {
  id: string
  text: string
  points: Record<MarvelCharacter, number>
}

export type Question = {
  id: string
  text: string
  answers: Answer[]
}

export type MarvelCharacter =
  | "ironMan"
  | "captainAmerica"
  | "thor"
  | "hulk"
  | "blackWidow"
  | "hawkeye"
  | "spiderMan"
  | "blackPanther"
  | "captainMarvel"
  | "doctorStrange"
  | "starLord"
  | "loki"
  | "thanos"
  | "ultron"
  | "hela"

export type MarvelCharacterResult = {
  id: MarvelCharacter
  name: string
  description: string
  image: string
  color: string
  type: "hero" | "villain"
  traits: string[]
}

export type TestState = {
  currentQuestionIndex: number
  answers: Record<string, string>
  result: MarvelCharacter | null
  showResult: boolean
}

