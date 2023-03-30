import { mapToIntRange } from '@src/map-to-int-range'

describe('mapToIntRange', () => {
  test('[0, 1] to [10, 20]', () => {
    const oldMin = 0
    const oldMax = 1
    const newMin = 10
    const newMax = 20

    expect(mapToIntRange(0, oldMin, oldMax, newMin, newMax)).toBe(10)
    expect(mapToIntRange(0.25, oldMin, oldMax, newMin, newMax)).toBe(12)
    expect(mapToIntRange(0.5, oldMin, oldMax, newMin, newMax)).toBe(15)
    expect(mapToIntRange(0.75, oldMin, oldMax, newMin, newMax)).toBe(17)
    expect(mapToIntRange(1, oldMin, oldMax, newMin, newMax)).toBe(20)
  })

  test('[-1, 1] to [10, 20]', () => {
    const oldMin = -1
    const oldMax = 1
    const newMin = 10
    const newMax = 20

    expect(mapToIntRange(-1, oldMin, oldMax, newMin, newMax)).toBe(10)
    expect(mapToIntRange(-0.5, oldMin, oldMax, newMin, newMax)).toBe(12)
    expect(mapToIntRange(0, oldMin, oldMax, newMin, newMax)).toBe(15)
    expect(mapToIntRange(0.5, oldMin, oldMax, newMin, newMax)).toBe(17)
    expect(mapToIntRange(1, oldMin, oldMax, newMin, newMax)).toBe(20)
  })
})
