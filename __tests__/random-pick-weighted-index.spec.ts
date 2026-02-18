import { describe, test, expect } from 'vitest'
import { randomPickWeightedIndex } from '@src/random-pick-weighted-index.js'
import { NonEmptyArray } from '@blackglory/prelude'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

describe.each([
  randomPickWeightedIndex
, randomPickWeightedIndex.bind(null, nativeRandomNumberGenerator)
])('randomPickWeightedIndex', randomPickWeightedIndex => {
  test('[0, 100]', () => {
    const weights: NonEmptyArray<number> = [0, 100]

    for (let i = 10000; i--;) {
      const index = randomPickWeightedIndex(weights)

      expect(index === 1).toBe(true)
    }
  })

  test('[100, 0]', () => {
    const weights: NonEmptyArray<number> = [100, 0]

    for (let i = 10000; i--;) {
      const index = randomPickWeightedIndex(weights)

      expect(index === 0).toBe(true)
    }
  })

  test('[50, 50]', () => {
    const loops = 10000
    const weights: NonEmptyArray<number> = [50, 50]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const index = randomPickWeightedIndex(weights)
      counters[index]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.4)
    expect(counters[0] / loops).toBeLessThan(0.6)
    expect(counters[1] / loops).toBeGreaterThan(0.4)
    expect(counters[1] / loops).toBeLessThan(0.6)
  })

  test('[20, 80]', () => {
    const loops = 10000
    const weights: NonEmptyArray<number> = [20, 80]

    const counters = [0, 0]
    for (let i = loops; i--;) {
      const index = randomPickWeightedIndex(weights)
      counters[index]++
    }

    expect(counters[0] / loops).toBeGreaterThan(0.1)
    expect(counters[0] / loops).toBeLessThan(0.3)
    expect(counters[1] / loops).toBeGreaterThan(0.7)
    expect(counters[1] / loops).toBeLessThan(0.9)
  })
})
