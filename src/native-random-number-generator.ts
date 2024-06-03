import { IRandomNumberGenerator } from './types.js'

export const nativeRandomNumberGenerator: IRandomNumberGenerator = {
  next: Math.random
}
