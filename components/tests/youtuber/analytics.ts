export function trackTestStarted() {
  // This would be implemented with your analytics provider
  console.log("TV Characters test started")
}

export function trackQuestionAnswered(questionId: string, character: string) {
  // This would be implemented with your analytics provider
  console.log(`Question ${questionId} answered with character: ${character}`)
}

export function trackTestCompleted(character: string) {
  // This would be implemented with your analytics provider
  console.log(`TV Characters test completed with result: ${character}`)
}
