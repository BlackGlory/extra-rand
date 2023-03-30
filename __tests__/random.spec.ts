import { random } from '@src/random'

describe('random(min: number, max: number): number', () => {
  it('returns a number in [min, max)', () => {
    const min = 0.1
    const max = 9.9

    for (let i = 10000; i--;) {
      const result = random(min, max)

      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThan(max)
    }
  })
})
