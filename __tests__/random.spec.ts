import { test, expect } from 'vitest'
import { random } from '@src/random.js'
import { NativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  random
, random.bind(null, NativeRandomNumberGenerator)
])('random', random => {
  const min = 0.1
  const max = 9.9

  for (let i = 10000; i--;) {
    const result = random(min, max)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThan(max)
  }
})
