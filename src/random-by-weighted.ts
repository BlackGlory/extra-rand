import { randomIndexByWeight } from './random-index-by-weight.js'
import { NonEmptyArray } from 'justypes'

export interface IWeighted {
  weight: number
}

export function randomWeighted<T extends IWeighted>(values: NonEmptyArray<T>): T {
  const weights = values.map(option => option.weight) as NonEmptyArray<number>
  const index = randomIndexByWeight(weights)
  return values[index]
}
