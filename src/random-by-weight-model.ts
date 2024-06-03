import { NonEmptyArray } from 'justypes'
import { randomWeighted } from './random-weighted.js'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export type IWeightModel<T> = NonEmptyArray<{
  weight: number
  value: T
}>

export function randomByWeightModel<T>(model: IWeightModel<T>): T
export function randomByWeightModel<T>(
  generator: IRandomNumberGenerator
, model: IWeightModel<T>
): T
export function randomByWeightModel<T>(...args:
| [model: IWeightModel<T>]
| [generator: IRandomNumberGenerator, model: IWeightModel<T>]
): T {
  let generator: IRandomNumberGenerator
  let model: IWeightModel<T>

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[model] = args
  } else {
    [generator, model] = args
  }

  const { value } = randomWeighted(generator, model)
  return value
}
