import { NonEmptyArray } from '@blackglory/prelude'
import { remapToWeightedIndex } from 'extra-utils'
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

  return remapToWeightedIndex(
    generator.next()
  , [0, 1]
  , weights
  )
}
