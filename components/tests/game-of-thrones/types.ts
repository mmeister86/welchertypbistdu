export type Answer = {
  id: string
  text: string
  character: Character
}

export type Question = {
  id: string
  text: string
  answers: Answer[]
}

export type Character = "ned" | "cersei" | "tyrion" | "daenerys" | "jon" | "arya" | "jaime" | "sansa"

export type CharacterResult = {
  id: Character
  name: string
  description: string
  image: string
  house: string
  color: string
}

export type TestState = {
  currentQuestionIndex: number
  answers: Record<string, Character>
  result: Character | null
  showResult: boolean
}

