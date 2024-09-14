import { remap } from 'extra-utils'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export function randomFloat(min: number, max: number): number
export function randomFloat(
  generator: IRandomNumberGenerator
, min: number
, max: number
): number
export function randomFloat(...args:
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

  return remap(
    generator.next()
  , [0, 1]
  , [min, max]
  )
}
