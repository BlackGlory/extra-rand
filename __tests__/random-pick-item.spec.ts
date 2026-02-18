import { test, expect } from 'vitest'
import { randomPickItem } from '@src/random-pick-item.js'
import { NonEmptyArray } from '@blackglory/prelude'
import { nativeRandomNumberGenerator } from '@src/native-random-number-generator.js'

test.each([
  randomPickItem
, randomPickItem.bind(null, nativeRandomNumberGenerator) as typeof randomPickItem
])('randomPickItem', randomPickItem => {
  const loops = 10000
  const items: NonEmptyArray<'foo' | 'bar'> = ['foo', 'bar']

  const counters = {
    foo: 0
  , bar: 0
  }
  for (let i = loops; i--;) {
    const result = randomPickItem(items)
    counters[result]++
  }

  expect(counters.foo / loops).toBeGreaterThan(0.4)
  expect(counters.foo / loops).toBeLessThan(0.6)
  expect(counters.bar / loops).toBeGreaterThan(0.4)
  expect(counters.bar / loops).toBeLessThan(0.6)
})
