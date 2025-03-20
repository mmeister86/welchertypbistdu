export type Answer = {
  id: string
  text: string
  characterPoints: Record<Character, number>
}

export type Question = {
  id: string
  text: string
  answers: Answer[]
}

export type Character =
  | "luke"
  | "anakin"
  | "vader"
  | "palpatine"
  | "leia"
  | "han"
  | "chewbacca"
  | "yoda"
  | "grogu"
  | "mandalorian"
  | "maul"
  | "obiwan"
  | "padme"
  | "rey"

export type CharacterResult = {
  id: Character
  name: string
  description: string
  image: string
}

export type TestState = {
  currentQuestionIndex: number
  answers: Record<string, string>
  result: Character | null
  showResult: boolean
}

