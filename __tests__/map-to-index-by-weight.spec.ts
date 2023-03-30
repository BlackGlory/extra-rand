import { mapToIndexByWeight } from '@src/map-to-index-by-weight'

describe('mapToIndexByWeight', () => {
  describe('[0, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const oldMin = 0
      const oldMax = 1
      const weights = [0, 0]

      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(0)
      expect(mapToIndexByWeight(0.5, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })

    test('weights: [0, 100]', () => {
      const oldMin = 0
      const oldMax = 1
      const weights = [0, 100]

      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(0.5, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })

    test('weights: [100, 0]', () => {
      const oldMin = 0
      const oldMax = 1
      const weights = [0, 100]

      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(0.5, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })

    test('weights: [50, 50]', () => {
      const oldMin = 0
      const oldMax = 1
      const weights = [50, 50]

      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(0)
      expect(mapToIndexByWeight(0.5, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })
  })

  describe('[-1, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const oldMin = -1
      const oldMax = 1
      const weights = [0, 0]

      expect(mapToIndexByWeight(-1, oldMin, oldMax, weights)).toBe(0)
      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })

    test('weights: [0, 100]', () => {
      const oldMin = -1
      const oldMax = 1
      const weights = [0, 100]

      expect(mapToIndexByWeight(-1, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })

    test('weights: [100, 0]', () => {
      const oldMin = -1
      const oldMax = 1
      const weights = [100, 0]

      expect(mapToIndexByWeight(-1, oldMin, oldMax, weights)).toBe(0)
      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(0)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(0)
    })

    test('weights: [50, 50]', () => {
      const oldMin = -1
      const oldMax = 1
      const weights = [50, 50]

      expect(mapToIndexByWeight(-1, oldMin, oldMax, weights)).toBe(0)
      expect(mapToIndexByWeight(0, oldMin, oldMax, weights)).toBe(1)
      expect(mapToIndexByWeight(1, oldMin, oldMax, weights)).toBe(1)
    })
  })
})
