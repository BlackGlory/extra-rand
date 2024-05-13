import { test, expect } from 'vitest'
import { shuffle } from '@src/shuffle.js'

test('shuffle', () => {
  const arr = [1, 2, 3, 4, 5]

  for (let i = 10000; i--;) {
    shuffle(arr)
  }

  expect(arr.length).toBe(5)
  expect(arr.filter(x => x === 1).length).toBe(1)
  expect(arr.filter(x => x === 2).length).toBe(1)
  expect(arr.filter(x => x === 3).length).toBe(1)
  expect(arr.filter(x => x === 4).length).toBe(1)
  expect(arr.filter(x => x === 5).length).toBe(1)
})
