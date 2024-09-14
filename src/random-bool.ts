import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'
import { randomFloat } from './random-float.js'

export function randomBool(probabilityOfTrue: number): boolean
export function randomBool(
  generator: IRandomNumberGenerator
, probabilityOfTrue: number
): boolean
export function randomBool(...args:
| [probabilityOfTrue: number]
| [generator: IRandomNumberGenerator, probabilityOfTrue: number]
): boolean {
  let generator: IRandomNumberGenerator
  let probabilityOfTrue: number

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[probabilityOfTrue] = args
  } else {
    [generator, probabilityOfTrue] = args
  }

  return randomFloat(generator, 0, 1) < probabilityOfTrue
}
