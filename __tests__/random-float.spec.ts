import { test, expect } from 'vitest'
import { randomFloat } from '@src/random-float.js'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomFloat
, randomFloat.bind(null, nativeRandomNumberGenerator)
])('randomFloat', randomFloat => {
  const min = 0.1
  const max = 9.9

  for (let i = 10000; i--;) {
    const result = randomFloat(min, max)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThan(max)
  }
})
