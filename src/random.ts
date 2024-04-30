import { mapToRange } from './map-to-range.js'
import { IRandomNumberGenerator } from './types.js'
import { NativeRandomNumberGenerator } from './native-random-number-generator.js'

export function random(min: number, max: number): number
export function random(
  generator: IRandomNumberGenerator
, min: number
, max: number
): number
export function random(...args:
| [min: number, max: number]
| [generator: IRandomNumberGenerator, min: number, max: number]
): number {
  let generator: IRandomNumberGenerator
  let min: number
  let max: number

  if (args.length === 2) {
    generator = NativeRandomNumberGenerator
    ;[min, max] = args
  } else {
    [generator, min, max] = args
  }

  return mapToRange(
    generator.next()
  , 0, 1
  , min, max
  )
}
