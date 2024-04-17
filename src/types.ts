import { NonEmptyArray } from 'justypes'

export type IRandomModel =
| number
| {
    min: number
    max: number
  }
| NonEmptyArray<{
    weight: number
    value: IRandomModel
  }>
