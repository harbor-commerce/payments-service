import test from 'node:test'
import assert from 'node:assert/strict'
import { shouldRetry } from '../src/charges.js'

test('never retries a non-retryable error', () => assert.equal(shouldRetry(0, { retryable: false }), false))
