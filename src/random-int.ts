import { mapToRange } from './map-to-range.js'

export function randomInt(min: number, max: number): number {
  return Math.floor(mapToRange(
    Math.random()
  , 0, 1
  , Math.ceil(min), Math.floor(max)
  ))
}
