import { describe, test, expect } from 'vitest'
import { randomWeighted } from '@src/random-weighted.js'
import { NonEmptyArray } from 'justypes'
import { NativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

describe.each([
  randomWeighted
, randomWeighted.bind(null, NativeRandomNumberGenerator) as typeof randomWeighted
])('randomWeighted', randomWeighted => {
  test('[0, 100]', () => {
    const values: NonEmptyArray<{
      weight: number
      value: number
    }> = [
      { weight: 0, value: 0 }
    , { weight: 100, value: 1 }
    ]

    for (let i = 10000; i--;) {
      const result = randomWeighted(values)

      expect(result).toBe(values[1])
    }
  })

  test('[100, 0]', () => {
    const values: NonEmptyArray<{
      weight: number
      value: number
    }> = [
      { weight: 100, value: 0 }
    , { weight: 0, value: 100 }
    ]

    for (let i = 10000; i--;) {
      const result = randomWeighted(values)

      expect(result).toBe(values[0])
    }
  })

  test('[50, 50]', () => {
    const loops = 10000
    const values: NonEmptyArray<{
      weight: number
      value: number
    }> = [
      { weight: 50, value: 0 }
    , { weight: 50, value: 1 }
    ]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const result = randomWeighted(values)
      counters[result.value]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.4)
    expect(counters[0] / loops).toBeLessThan(0.6)
    expect(counters[1] / loops).toBeGreaterThan(0.4)
    expect(counters[1] / loops).toBeLessThan(0.6)
  })

  test('[20, 80]', () => {
    const loops = 10000
    const values: NonEmptyArray<{
      weight: number
      value: number
    }> = [
      { weight: 20, value: 0 }
    , { weight: 80, value: 1 }
    ]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const result = randomWeighted(values)
      counters[result.value]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.1)
    expect(counters[0] / loops).toBeLessThan(0.3)
    expect(counters[1] / loops).toBeGreaterThan(0.7)
    expect(counters[1] / loops).toBeLessThan(0.9)
  })
})
