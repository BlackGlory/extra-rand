import { randomPickWeightedIndex } from './random-pick-weighted-index.js'
import { NonEmptyArray } from 'justypes'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { isArray } from 'extra-utils'

export interface IWeightedItem {
  weight: number
}

export function randomPickWeightedItem<T>(
  items: NonEmptyArray<T>
, weights: NonEmptyArray<number>
): T
export function randomPickWeightedItem<T extends IWeightedItem>(items: NonEmptyArray<T>): T
export function randomPickWeightedItem<T>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
, weights: NonEmptyArray<number>
): T
export function randomPickWeightedItem<T extends IWeightedItem>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
): T
export function randomPickWeightedItem<T extends IWeightedItem>(...args:
| [items: NonEmptyArray<T>, weights: NonEmptyArray<number>]
| [items: NonEmptyArray<T>]
| [
    generator: IRandomNumberGenerator
  , items: NonEmptyArray<T>
  , weights: NonEmptyArray<number>
  ]
| [generator: IRandomNumberGenerator, items: NonEmptyArray<T>]
): T {
  let generator: IRandomNumberGenerator
  let items: NonEmptyArray<T>
  let weights: NonEmptyArray<number>

  switch (args.length) {
    case 1: {
      generator = nativeRandomNumberGenerator
      ;[items] = args
      weights = items.map(option => option.weight) as NonEmptyArray<number>

      break
    }
    case 2: {
      if (isArray(args[0])) {
        generator = nativeRandomNumberGenerator
        ;[items, weights] = args as [items: NonEmptyArray<T>, weights: NonEmptyArray<number>]
      } else {
        [generator, items] = args as [
          generator: IRandomNumberGenerator
        , items: NonEmptyArray<T>
        ]
        weights = items.map(option => option.weight) as NonEmptyArray<number>
      }

      break
    }
    case 3: {
      ;[generator, items, weights] = args

      break
    }
  }

  const index = randomPickWeightedIndex(generator, weights)
  return items[index]
}
