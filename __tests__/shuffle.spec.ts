import { describe, test, expect } from 'vitest'
import { shuffle } from '@src/shuffle.js'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'
import { fromEntries } from 'extra-utils'
import { toArray } from '@blackglory/prelude'
import { countup } from 'extra-generator'

describe.each([
  shuffle
, shuffle.bind(null, nativeRandomNumberGenerator)
])('shuffle', () => {
  test('general', () => {
    for (let i = 10000; i--;) {
      const arr = [1, 2, 3, 4, 5]

      shuffle(arr)

      expect(arr.length).toBe(5)
      expect(arr.filter(x => x === 1).length).toBe(1)
      expect(arr.filter(x => x === 2).length).toBe(1)
      expect(arr.filter(x => x === 3).length).toBe(1)
      expect(arr.filter(x => x === 4).length).toBe(1)
      expect(arr.filter(x => x === 5).length).toBe(1)
    }
  })

  test.each([
    1
  , 2
  , 3
  ])('uniform', arrLength => {
    const times = 10000
    const arr = toArray(countup(1, arrLength))
    const indexToValueCount: Record<number, Record<number, number>> = fromEntries(
      arr.map((_, i) => {
        return [i, fromEntries(arr.map(x => [x, 0]))]
      })
    )

    for (let i = times; i--;) {
      const arrClone = [...arr]

      shuffle(arrClone)

      for (let i = 0; i < arrClone.length; i++) {
        indexToValueCount[i][arrClone[i]]++
      }
    }

    for (let i = 0; i < arr.length; i++) {
      const valueCount = indexToValueCount[i]

      for (const count of Object.values(valueCount )) {
        expect(Math.abs(count / times - 1 / arr.length)).lessThan(0.05)
      }
    }
  })
})
