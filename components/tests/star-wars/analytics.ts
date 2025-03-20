export function trackTestStarted() {
  // This would be implemented with your analytics provider
  console.log("Test started")
}

export function trackQuestionAnswered(questionId: string, answerId: string) {
  // This would be implemented with your analytics provider
  console.log(`Question ${questionId} answered with ${answerId}`)
}

export function trackTestCompleted(character: string) {
  // This would be implemented with your analytics provider
  console.log(`Test completed with result: ${character}`)
}

