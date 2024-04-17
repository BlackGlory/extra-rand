import { isArray, isNumber } from 'extra-utils'
import { randomIntInclusive } from './random-int-inclusive.js'
import { randomByWeightModel } from './random-by-weight-model.js'
import { IRandomModel } from './types.js'

export function randomIntInclusiveByModel(model: IRandomModel): number {
  if (isNumber(model)) {
    return model
  } else if (isArray(model)) {
    const subModel = randomByWeightModel(model)
    return randomIntInclusiveByModel(subModel)
  } else {
    const { min, max } = model
    return randomIntInclusive(min, max)
  }
}