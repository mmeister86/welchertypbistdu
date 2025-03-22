export type Answer = {
  id: string
  text: string
  youtuberPoints: Record<Youtuber, number>
}

export type Question = {
  id: string
  text: string
  answers: Answer[]
}

export type Youtuber =
  | "bibisBeautypalace"
  | "gronkh"
  | "laserLuca"
  | "julienco"
  | "juliusChezame"
  | "vickelJose"
  | "uyenNinh"
  | "doktorLight"
  | "fabianMagic"
  | "werBistDu"
  | "pewDiePie"
  | "dudePerfect"
  | "jennaMarbles"
  | "davidDobrik"
  | "lizaKoshy"
  | "caseyNeistat"
  | "emmaChamberlain"
  | "markiplier"
  | "shaneDawson"
  | "jamesCharles"

export type YoutuberResult = {
  id: Youtuber
  name: string
  description: string
  image: string
  color?: string
}

export type TestState = {
  currentQuestionIndex: number
  answers: Record<string, string>
  result: Youtuber | null
  showResult: boolean
}
