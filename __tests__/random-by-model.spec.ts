import { describe, test, expect } from 'vitest'
import { randomByModel } from '@src/random-by-model.js'
import { IRandomModel } from '@src/types.js'

describe('randomByModel', () => {
  test('number', () => {
    const model: IRandomModel = 0.5

    for (let i = 10000; i--;) {
      const result = randomByModel(model)

      expect(result).toBe(model)
    }
  })

  test('min, max', () => {
    const model: IRandomModel = {
      min: 0.1
    , max: 9.9
    }

    for (let i = 10000; i--;) {
      const result = randomByModel(model)

      expect(result).toBeGreaterThanOrEqual(model.min)
      expect(result).toBeLessThan(model.max)
    }
  })

  test('weighted', () => {
    const loops = 10000
    const model: IRandomModel = [
      {
        weight: 20
      , value: 0
      }
    , {
        weight: 80
      , value: 1
      }
    ]

    const counters = [0, 0]
    for (let i = 10000; i--;) {
      const result = randomByModel(model)

      counters[result]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.1)
    expect(counters[0] / loops).toBeLessThan(0.3)
    expect(counters[1] / loops).toBeGreaterThan(0.7)
    expect(counters[1] / loops).toBeLessThan(0.9)
  })
})
