import { mapToRange } from './map-to-range.js'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export function randomInt(min: number, max: number): number
export function randomInt(
  generator: IRandomNumberGenerator
, min: number
, max: number
): number
export function randomInt(...args:
| [min: number, max: number]
| [generator: IRandomNumberGenerator, min: number, max: number]
): number {
  let generator: IRandomNumberGenerator
  let min: number
  let max: number

  if (args.length === 2) {
    generator = nativeRandomNumberGenerator
    ;[min, max] = args
  } else {
    [generator, min, max] = args
  }

  return Math.floor(mapToRange(
    generator.next()
  , 0, 1
  , Math.ceil(min), Math.floor(max)
  ))
}
