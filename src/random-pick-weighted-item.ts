import { randomIndexByWeight } from './random-index-by-weight.js'
import { NonEmptyArray } from 'justypes'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export interface IWeightedItem {
  weight: number
}

export function randomPickWeightedItem<T extends IWeightedItem>(items: NonEmptyArray<T>): T
export function randomPickWeightedItem<T extends IWeightedItem>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
): T
export function randomPickWeightedItem<T extends IWeightedItem>(...args:
| [items: NonEmptyArray<T>]
| [generator: IRandomNumberGenerator, items: NonEmptyArray<T>]
): T {
  let generator: IRandomNumberGenerator
  let items: NonEmptyArray<T>

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[items] = args
  } else {
    [generator, items] = args
  }

  const weights = items.map(option => option.weight) as NonEmptyArray<number>
  const index = randomIndexByWeight(generator, weights)
  return items[index]
}
