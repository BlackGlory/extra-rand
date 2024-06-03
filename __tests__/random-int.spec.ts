import { test, expect } from 'vitest'
import { randomInt } from '@src/random-int.js'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomInt
, randomInt.bind(null, nativeRandomNumberGenerator)
])('randomInt', randomInt => {
  const min = 0.1
  const max = 9.9

  for (let i = 10000; i--;) {
    const result = randomInt(min, max)

    expect(Number.isInteger(result)).toBe(true)
    expect(result).toBeGreaterThanOrEqual(Math.ceil(min))
    expect(result).toBeLessThan(Math.floor(max))
  }
})
