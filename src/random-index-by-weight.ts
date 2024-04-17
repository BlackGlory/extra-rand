import { NonEmptyArray } from 'justypes'
import { mapToIndexByWeight } from './map-to-index-by-weight.js'

export function randomIndexByWeight(weights: NonEmptyArray<number>): number {
  return mapToIndexByWeight(
    Math.random()
  , 0, 1
  , weights
  )
}
