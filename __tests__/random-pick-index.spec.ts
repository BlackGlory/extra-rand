import { test, expect } from 'vitest'
import { randomPickIndex } from '@src/random-pick-index.js'
import { NonEmptyArray } from 'justypes'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomPickIndex
, randomPickIndex.bind(null, nativeRandomNumberGenerator) as typeof randomPickIndex
])('randomPickItem', randomPickIndex => {
  const loops = 10000
  const items: NonEmptyArray<number> = [0, 1]

  const counters = [0, 0]
  for (let i = loops; i--;) {
    const result = randomPickIndex(items)
    counters[result]++
  }

  expect(counters[0] / loops).toBeGreaterThan(0.4)
  expect(counters[0] / loops).toBeLessThan(0.6)
  expect(counters[1] / loops).toBeGreaterThan(0.4)
  expect(counters[1] / loops).toBeLessThan(0.6)
})
