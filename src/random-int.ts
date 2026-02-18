import { remap } from 'extra-utils'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { assert } from '@blackglory/prelude'

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
  assert(Number.isInteger(min), 'The parameter min must be an integer')
  assert(Number.isInteger(max), 'The parameter max must be an integer')
  assert(min < max, 'The parameter min must be less than the parameter max')

  return Math.floor(remap(
    generator.next()
  , [0, 1]
  , [min, max]
  ))
}
