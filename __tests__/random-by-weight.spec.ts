import { randomByWeight } from '@src/random-by-weight'

describe('randomByWeight', () => {
  test('[0, 100]', () => {
    const weights = [0, 100]

    for (let i = 10000; i--;) {
      const index = randomByWeight(weights)

      expect(index === 1).toBe(true)
    }
  })

  test('[100, 0]', () => {
    const weights = [100, 0]

    for (let i = 10000; i--;) {
      const index = randomByWeight(weights)

      expect(index === 0).toBe(true)
    }
  })

  test('[50, 50]', () => {
    const loops = 10000
    const weights = [50, 50]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const index = randomByWeight(weights)
      counters[index]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.4)
    expect(counters[0] / loops).toBeLessThan(0.6)
    expect(counters[1] / loops).toBeGreaterThan(0.4)
    expect(counters[1] / loops).toBeLessThan(0.6)
  })

  test('[20, 80]', () => {
    const loops = 10000
    const weights = [20, 80]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const index = randomByWeight(weights)
      counters[index]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.1)
    expect(counters[0] / loops).toBeLessThan(0.3)
    expect(counters[1] / loops).toBeGreaterThan(0.7)
    expect(counters[1] / loops).toBeLessThan(0.9)
  })
})
