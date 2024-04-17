import { test, expect } from 'vitest'
import { randomIntInclusive } from '@src/random-int-inclusive.js'

test('randomIntInclusive', () => {
  const min = 0.1
  const max = 9.9

  for (let i = 10000; i--;) {
    const result = randomIntInclusive(min, max)

    expect(Number.isInteger(result)).toBe(true)
    expect(result).toBeGreaterThanOrEqual(Math.ceil(min))
    expect(result).toBeLessThanOrEqual(Math.floor(max))
  }
})
