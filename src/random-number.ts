import { Getter, NonEmptyArray } from 'justypes'
import { isArray, isFunction, isNumber } from 'extra-utils'
import { randomByWeightModel } from './random-by-weight-model.js'
import { randomFloat } from './random-float.js'
import { randomInt } from './random-int.js'
import { randomIntInclusive } from './random-int-inclusive.js'
import { IRandomNumberGenerator } from './types.js'
import { nativeRandomNumberGenerator } from './native-random-number-generator.js'

export enum NumberType {
  Float
, Integer
, IntegerInclusive
}

export type INumberModel =
| number
| Getter<number>
| {
    type: NumberType
    min: number
    max: number
  }
| NonEmptyArray<{
    weight: number
    value: INumberModel
  }>

export function randomNumber(model: INumberModel): number
export function randomNumber(
  generator: IRandomNumberGenerator
, model: INumberModel
): number
export function randomNumber(...args:
| [model: INumberModel]
| [generator: IRandomNumberGenerator, model: INumberModel]
): number {
  let generator: IRandomNumberGenerator
  let model: INumberModel

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
      case NumberType.Float: return randomFloat(generator, min, max)
      case NumberType.Integer: return randomInt(generator, min, max)
      case NumberType.IntegerInclusive: return randomIntInclusive(generator, min, max)
    }
  }
}
