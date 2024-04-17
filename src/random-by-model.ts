import { isArray, isNumber } from 'extra-utils'
import { randomByWeightModel } from './random-by-weight-model.js'
import { IRandomModel } from './types.js'
import { random } from './random.js'

export function randomByModel(model: IRandomModel): number {
  if (isNumber(model)) {
    return model
  } else if (isArray(model)) {
    const subModel = randomByWeightModel(model)
    return randomByModel(subModel)
  } else {
    const { min, max } = model
    return random(min, max)
  }
}
