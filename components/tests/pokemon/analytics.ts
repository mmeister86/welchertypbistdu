export function trackTestStarted() {
  // This would be implemented with your analytics provider
  console.log("Pokémon test started")
}

export function trackQuestionAnswered(questionId: string, answerId: string) {
  // This would be implemented with your analytics provider
  console.log(`Question ${questionId} answered with ${answerId}`)
}

export function trackTestCompleted(pokemon: string) {
  // This would be implemented with your analytics provider
  console.log(`Pokémon test completed with result: ${pokemon}`)
}

