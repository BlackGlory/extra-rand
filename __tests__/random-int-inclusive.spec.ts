import { randomIntInclusive } from '@src/random-int-inclusive'
import { countup } from 'extra-generator'

describe('randomIntInclusive(min: number, max: number): number', () => {
  it('return integer in [Math.ceil(min), Math.floor(max)]', () => {
    const min = 0.1
    const max = 9.9

    for (const _ of countup(0, 10000)) {
      const result = randomIntInclusive(min, max)

      expect(Number.isInteger(result)).toBeTruthy()
      expect(result).toBeGreaterThanOrEqual(Math.ceil(min))
      expect(result).toBeLessThanOrEqual(Math.floor(max))
    }
  })
})
