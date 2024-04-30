import { IRandomNumberGenerator } from './types.js'

export const NativeRandomNumberGenerator: IRandomNumberGenerator = {
  next: Math.random
}
