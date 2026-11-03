export const retryPolicy = { attempts: 1, backoffMs: 0 }

export function shouldRetry(attempt, error) {
  return attempt < retryPolicy.attempts && error.retryable
}

export const routes = {
  'GET /retry-policy': () => retryPolicy,
}
