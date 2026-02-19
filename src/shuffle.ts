import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { randomIntInclusive } from './random-int-inclusive.js'

export function shuffle(arr: unknown[]): void
export function shuffle(generator: IRandomNumberGenerator, arr: unknown[]): void
export function shuffle(...args:
| [arr: unknown[]]
| [generator: IRandomNumberGenerator, arr: unknown[]]
) {
  let generator: IRandomNumberGenerator
  let arr: unknown[]

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[arr] = args
  } else {
    [generator, arr] = args
  }

  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  for (let targetIndex = arr.length - 1; targetIndex >= 1; targetIndex--) {
    const index = randomIntInclusive(generator, 0, targetIndex)
    const temp = arr[targetIndex]
    arr[targetIndex] = arr[index]
    arr[index] = temp
  }
}
