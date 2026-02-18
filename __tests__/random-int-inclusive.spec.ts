import { test, expect } from 'vitest'
import { randomIntInclusive } from '@src/random-int-inclusive.js'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomIntInclusive
, randomIntInclusive.bind(null, nativeRandomNumberGenerator)
])('randomIntInclusive', randomIntInclusive => {
  const min = 0
  const max = 10

  for (let i = 10000; i--;) {
    const result = randomIntInclusive(min, max)

    expect(Number.isInteger(result)).toBe(true)
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  }
})
