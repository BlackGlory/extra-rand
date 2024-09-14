import { Getter, NonEmptyArray } from 'justypes'
import { isArray, isFunction, isNumber } from 'extra-utils'
import { randomByWeightModel } from './random-by-weight-model.js'
import { randomFloat } from './random-float.js'
import { randomInt } from './random-int.js'
import { randomIntInclusive } from './random-int-inclusive.js'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export enum Type {
  Float
, Integer
, IntegerInclusive
}

export type IRandomModel =
| number
| Getter<number>
| {
    type: Type
    min: number
    max: number
  }
| NonEmptyArray<{
    weight: number
    value: IRandomModel
  }>

export function randomNumber(model: IRandomModel): number
export function randomNumber(
  generator: IRandomNumberGenerator
, model: IRandomModel
): number
export function randomNumber(...args:
| [model: IRandomModel]
| [generator: IRandomNumberGenerator, model: IRandomModel]
): number {
  let generator: IRandomNumberGenerator
  let model: IRandomModel

  if (args.length === 1) {
    generator = nativeRandomNumberGenerator
    ;[model] = args
  } else {
    [generator, model] = args
  }

  if (isNumber(model)) {
    return model
  } else if (isFunction(model)) {
    return model()
  } else if (isArray(model)) {
    const subModel = randomByWeightModel(generator, model)
    return randomNumber(generator, subModel)
  } else {
    const { type, min, max } = model
    switch (type) {
      case Type.Float: return randomFloat(generator, min, max)
      case Type.Integer: return randomInt(generator, min, max)
      case Type.IntegerInclusive: return randomIntInclusive(generator, min, max)
    }
  }
}
