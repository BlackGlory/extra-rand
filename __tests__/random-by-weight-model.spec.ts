import { describe, test, expect } from 'vitest'
import { randomByWeightModel, IWeightModel } from '@src/random-by-weight-model.js'
import { NativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

describe.each([
  randomByWeightModel
, randomByWeightModel.bind(null, NativeRandomNumberGenerator) as typeof randomByWeightModel
])('randomByWeightModel', randomByWeightModel => {
  test('[0, 100]', () => {
    const model: IWeightModel<number> = [
      { weight: 0, value: 0 }
    , { weight: 100, value: 1 }
    ]

    for (let i = 10000; i--;) {
      const result = randomByWeightModel(model)

      expect(result === 1).toBe(true)
    }
  })

  test('[100, 0]', () => {
    const model: IWeightModel<number> = [
      { weight: 100, value: 0 }
    , { weight: 0, value: 100 }
    ]

    for (let i = 10000; i--;) {
      const result = randomByWeightModel(model)

      expect(result === 0).toBe(true)
    }
  })

  test('[50, 50]', () => {
    const loops = 10000
    const model: IWeightModel<number> = [
      { weight: 50, value: 0 }
    , { weight: 50, value: 1 }
    ]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const result = randomByWeightModel(model)
      counters[result]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.4)
    expect(counters[0] / loops).toBeLessThan(0.6)
    expect(counters[1] / loops).toBeGreaterThan(0.4)
    expect(counters[1] / loops).toBeLessThan(0.6)
  })

  test('[20, 80]', () => {
    const loops = 10000
    const model: IWeightModel<number> = [
      { weight: 20, value: 0 }
    , { weight: 80, value: 1 }
    ]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const result = randomByWeightModel(model)
      counters[result]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.1)
    expect(counters[0] / loops).toBeLessThan(0.3)
    expect(counters[1] / loops).toBeGreaterThan(0.7)
    expect(counters[1] / loops).toBeLessThan(0.9)
  })
})
