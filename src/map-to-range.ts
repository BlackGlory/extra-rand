import { remap } from 'extra-utils'

/**
 * @deprecated use `remap` of `extra-utils` instead
 */
export function mapToRange(
  value: number
, oldMin: number, oldMax: number
, newMin: number, newMax: number
): number {
  return remap(value, [oldMin, oldMax], [newMin, newMax])
}
