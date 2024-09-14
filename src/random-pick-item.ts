import { NonEmptyArray } from 'justypes'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { randomInt } from './random-int.js'

export function randomPickItem<T>(items: NonEmptyArray<T>): T
export function randomPickItem<T>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
): T
export function randomPickItem<T>(...args:
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

  const index = randomInt(generator, 0, items.length)
  return items[index]
}
