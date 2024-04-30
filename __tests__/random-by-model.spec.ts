import { describe, test, expect } from 'vitest'
import { randomByModel, IRandomModel, Type } from '@src/random-by-model.js'
import { NativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

describe.each([
  randomByModel
, randomByModel.bind(null, NativeRandomNumberGenerator)
])('randomByModel', randomByModel => {
  test('number', () => {
    const model: IRandomModel = 0.5

    for (let i = 10000; i--;) {
      const result = randomByModel(model)

      expect(result).toBe(model)
    }
  })

  test('getter', () => {
    const value = 0.5
    const model: IRandomModel = () => value

    for (let i = 10000; i--;) {
      const result = randomByModel(model)

      expect(result).toBe(value)
    }
  })

  describe('min, max', () => {
    test('float', () => {
      const model: IRandomModel = {
        type: Type.Float
      , min: 0.1
      , max: 9.9
      }

      for (let i = 10000; i--;) {
        const result = randomByModel(model)

        expect(result).toBeGreaterThanOrEqual(model.min)
        expect(result).toBeLessThan(model.max)
      }
    })

    test('integer', () => {
      const model: IRandomModel = {
        type: Type.Integer
      , min: 0.1
      , max: 9.9
      }

      for (let i = 10000; i--;) {
        const result = randomByModel(model)

        expect(Number.isInteger(result)).toBe(true)
        expect(result).toBeGreaterThanOrEqual(Math.ceil(model.min))
        expect(result).toBeLessThan(Math.floor(model.max))
      }
    })

    test('integer inclusive', () => {
      const model: IRandomModel = {
        type: Type.IntegerInclusive
      , min: 0.1
      , max: 9.9
      }

      for (let i = 10000; i--;) {
        const result = randomByModel(model)

        expect(Number.isInteger(result)).toBe(true)
        expect(result).toBeGreaterThanOrEqual(Math.ceil(model.min))
        expect(result).toBeLessThanOrEqual(Math.floor(model.max))
      }
    })
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
