import { random } from './random'

export function randomByWeight(weights: number[]): number {
  const min = 0
  const max = weights.reduce((acc, cur) => acc + Math.max(cur, 0))

  const randomValue = random(min, max)
  for (let i = 0, acc = weights[i]; i < weights.length; acc += weights[++i]) {
    if (randomValue < acc) {
      return i
    }
  }

  throw new Error('Impossible route')
}
