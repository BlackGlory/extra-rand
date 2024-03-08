import { mapToRange } from './map-to-range'

export function randomIntInclusive(min: number, max: number): number {
  return Math.floor(mapToRange(
    Math.random()
  , 0, 1
  , Math.ceil(min), Math.floor(max) + 1
  ))
}
