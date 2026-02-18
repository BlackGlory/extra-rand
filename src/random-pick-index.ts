import { NonEmptyArray } from '@blackglory/prelude'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { randomInt } from './random-int.js'

export function randomPickIndex(items: NonEmptyArray<unknown>): number
export function randomPickIndex(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<unknown>
): number
export function randomPickIndex(...args:
| [items: NonEmptyArray<unknown>]
| [generator: IRandomNumberGenerator, items: NonEmptyArray<unknown>]
): number {
  let generator: IRandomNumberGenerator
  let items: NonEmptyArray<unknown>

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[items] = args
  } else {
    [generator, items] = args
  }

  return randomInt(generator, 0, items.length)
}
