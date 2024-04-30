import { test, expect } from 'vitest'
import { randomBool } from '@src/random-bool.js'
import { NativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomBool
, randomBool.bind(null, NativeRandomNumberGenerator)
])('randomBool', randomBool => {
  const loops = 10000
  const counters = [0, 0]

  for (let i = loops; i--;) {
    const result = randomBool(0.2)

    if (result) {
      counters[0]++
    } else {
      counters[1]++
    }
  }

  expect(counters[0] / loops).toBeGreaterThan(0.1)
  expect(counters[0] / loops).toBeLessThan(0.3)
  expect(counters[1] / loops).toBeGreaterThan(0.7)
  expect(counters[1] / loops).toBeLessThan(0.9)
})
