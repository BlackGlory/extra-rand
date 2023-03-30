import { randomInt } from '@src/random-int'
import { countup } from 'extra-generator'

describe('randomInt(min: number, max: number): number', () => {
  it('returns an integer in [Math.ceil(min), Math.floor(max))', () => {
    const min = 0.1
    const max = 9.9

    for (const _ of countup(0, 10000)) {
      const result = randomInt(min, max)

      expect(Number.isInteger(result)).toBeTruthy()
      expect(result).toBeGreaterThanOrEqual(Math.ceil(min))
      expect(result).toBeLessThan(Math.floor(max))
    }
  })
})
