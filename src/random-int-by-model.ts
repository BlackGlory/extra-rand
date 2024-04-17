import { isArray, isNumber } from 'extra-utils'
import { randomByWeightModel } from './random-by-weight-model.js'
import { IRandomModel } from './types.js'
import { randomInt } from './random-int.js'

export function randomIntByModel(model: IRandomModel): number {
  if (isNumber(model)) {
    return model
  } else if (isArray(model)) {
    const subModel = randomByWeightModel(model)
    return randomIntByModel(subModel)
  } else {
    const { min, max } = model
    return randomInt(min, max)
  }
}
