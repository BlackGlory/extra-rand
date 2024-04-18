import { NonEmptyArray } from 'justypes'
import { randomWeighted } from './random-weighted.js'

export type IWeightModel<T> = NonEmptyArray<{
  weight: number
  value: T
}>

export function randomByWeightModel<T>(model: IWeightModel<T>): T {
  const { value } = randomWeighted(model)
  return value
}
