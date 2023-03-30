import { randomInt } from '@src/random-int'

describe('randomInt(min: number, max: number): number', () => {
  it('returns an integer in [Math.ceil(min), Math.floor(max))', () => {
    const min = 0.1
    const max = 9.9

    for (let i = 10000; i--;) {
      const result = randomInt(min, max)

      expect(Number.isInteger(result)).toBe(true)
      expect(result).toBeGreaterThanOrEqual(Math.ceil(min))
      expect(result).toBeLessThan(Math.floor(max))
    }
  })
})
