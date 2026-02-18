import { remap } from 'extra-utils'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { assert } from '@blackglory/errors'

export function randomIntInclusive(
  min: number
, max: number
): number
export function randomIntInclusive(
  generator: IRandomNumberGenerator
, min: number
, max: number
): number
export function randomIntInclusive(...args:
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
  assert(min <= max, 'The parameter min must be less than or equal to the parameter max')

  return Math.floor(remap(
    generator.next()
  , [0, 1]
  , [min, max + 1]
  ))
}
