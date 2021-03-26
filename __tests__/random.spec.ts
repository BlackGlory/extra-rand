import { random } from '@src/random'
import { countup } from 'extra-generator'

describe('random(min: number, max: number): number', () => {
  it('return number in [min, max)', () => {
    const min = 0.1
    const max = 9.9

    for (const _ of countup(0, 10000)) {
      const result = random(min, max)

      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThan(max)
    }
  })
})
