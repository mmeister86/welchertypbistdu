export function trackTestStarted() {
  // This would be implemented with your analytics provider
  console.log("Spongebob test started")
}

export function trackQuestionAnswered(questionId: string, character: string) {
  // This would be implemented with your analytics provider
  console.log(`Question ${questionId} answered with character: ${character}`)
}

export function trackTestCompleted(character: string) {
  // This would be implemented with your analytics provider
  console.log(`Spongebob test completed with result: ${character}`)
}

