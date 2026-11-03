export const retryPolicy = { attempts: 3, backoffMs: 200 }

export function shouldRetry(attempt, error) {
  return attempt < retryPolicy.attempts && error.retryable
}

export function delay(attempt) {
  return retryPolicy.backoffMs * 2 ** attempt
}

export const routes = {
  'GET /retry-policy': () => retryPolicy,
}
