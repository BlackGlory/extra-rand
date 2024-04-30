import { randomIndexByWeight } from './random-index-by-weight.js'
import { NonEmptyArray } from 'justypes'
import { IRandomNumberGenerator } from './types.js'
import { NativeRandomNumberGenerator } from './native-random-number-generator.js'

export interface IWeighted {
  weight: number
}

export function randomWeighted<T extends IWeighted>(values: NonEmptyArray<T>): T
export function randomWeighted<T extends IWeighted>(
  generator: IRandomNumberGenerator
, values: NonEmptyArray<T>
): T
export function randomWeighted<T extends IWeighted>(...args:
| [values: NonEmptyArray<T>]
| [generator: IRandomNumberGenerator, values: NonEmptyArray<T>]
): T {
  let generator: IRandomNumberGenerator
  let values: NonEmptyArray<T>

  if (args.length === 1) {
    generator = NativeRandomNumberGenerator
    ;[values] = args
  } else {
    [generator, values] = args
  }

  const weights = values.map(option => option.weight) as NonEmptyArray<number>
  const index = randomIndexByWeight(generator, weights)
  return values[index]
}
