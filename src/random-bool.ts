import { random } from './random'

export function randomBool(probabilityOfTrue: number): boolean {
  return random(0, 1) < probabilityOfTrue
}
