import { Getter, NonEmptyArray } from 'justypes'
import { isArray, isFunction, isNumber } from 'extra-utils'
import { randomByWeightModel } from './random-by-weight-model.js'
import { random } from './random.js'
import { randomInt } from './random-int.js'
import { randomIntInclusive } from './random-int-inclusive.js'

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

export function randomByModel(model: IRandomModel): number {
  if (isNumber(model)) {
    return model
  } else if (isArray(model)) {
    const subModel = randomByWeightModel(model)
    return randomByModel(subModel)
  } else if (isFunction(model)) {
    return model()
  } else {
    const { type, min, max } = model
    switch (type) {
      case Type.Float: return random(min, max)
      case Type.Integer: return randomInt(min, max)
      case Type.IntegerInclusive: return randomIntInclusive(min, max)
    }
  }
}
