import { NonEmptyArray } from 'justypes'
import { mapToIndexByWeight } from './map-to-index-by-weight.js'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export function randomPickWeightedIndex(weights: NonEmptyArray<number>): number
export function randomPickWeightedIndex(
  generator: IRandomNumberGenerator
, weights: NonEmptyArray<number>
): number
export function randomPickWeightedIndex(...args:
| [weights: NonEmptyArray<number>]
| [generator: IRandomNumberGenerator, weights: NonEmptyArray<number>]
): number {
  let generator: IRandomNumberGenerator
  let weights: NonEmptyArray<number>

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[weights] = args
  } else {
    [generator, weights] = args
  }

  return mapToIndexByWeight(
    generator.next()
  , 0, 1
  , weights
  )
}
