import { describe, test, expect } from 'vitest'
import { randomNumber, INumberModel, NumberType } from '@src/random-number.js'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

describe.each([
  randomNumber
, randomNumber.bind(null, nativeRandomNumberGenerator)
])('randomNumber', randomNumber => {
  test('number', () => {
    const model: INumberModel = 0.5

    for (let i = 10000; i--;) {
      const result = randomNumber(model)

      expect(result).toBe(model)
    }
  })

  test('getter', () => {
    const value = 0.5
    const model: INumberModel = () => value

    for (let i = 10000; i--;) {
      const result = randomNumber(model)

      expect(result).toBe(value)
    }
  })

  describe('min, max', () => {
    test('float', () => {
      const model: INumberModel = {
        type: NumberType.Float
      , min: 0.1
      , max: 9.9
      }

      for (let i = 10000; i--;) {
        const result = randomNumber(model)

        expect(result).toBeGreaterThanOrEqual(model.min)
        expect(result).toBeLessThan(model.max)
      }
    })

    test('integer', () => {
      const model: INumberModel = {
        type: NumberType.Integer
      , min: 0
      , max: 10
      }

      for (let i = 10000; i--;) {
        const result = randomNumber(model)

        expect(Number.isInteger(result)).toBe(true)
        expect(result).toBeGreaterThanOrEqual(model.min)
        expect(result).toBeLessThan(model.max)
      }
    })

    test('integer inclusive', () => {
      const model: INumberModel = {
        type: NumberType.IntegerInclusive
      , min: 0
      , max: 10
      }

      for (let i = 10000; i--;) {
        const result = randomNumber(model)

        expect(Number.isInteger(result)).toBe(true)
        expect(result).toBeGreaterThanOrEqual(model.min)
        expect(result).toBeLessThanOrEqual(model.max)
      }
    })
  })

  test('weighted', () => {
    const loops = 10000
    const model: INumberModel = [
      {
        weight: 20
      , model: 0
      }
    , {
        weight: 80
      , model: 1
      }
    ]

    const counters = [0, 0]
    for (let i = 10000; i--;) {
      const result = randomNumber(model)

      counters[result]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.1)
    expect(counters[0] / loops).toBeLessThan(0.3)
    expect(counters[1] / loops).toBeGreaterThan(0.7)
    expect(counters[1] / loops).toBeLessThan(0.9)
  })
})
