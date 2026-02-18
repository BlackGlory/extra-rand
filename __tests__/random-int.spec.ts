import { test, expect } from 'vitest'
import { randomInt } from '@src/random-int.js'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomInt
, randomInt.bind(null, nativeRandomNumberGenerator)
])('randomInt', randomInt => {
  const min = 0
  const max = 10

  for (let i = 10000; i--;) {
    const result = randomInt(min, max)

    expect(Number.isInteger(result)).toBe(true)
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThan(max)
  }
})
