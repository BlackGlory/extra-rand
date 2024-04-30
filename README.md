# extra-rand
Yet another random library.

## Install
```sh
npm install --save extra-rand
# or
yarn add extra-rand
```

## API
```ts
interface IRandomNumberGenerator {
  next(): number // [0, 1)
}
```

### random
```ts
function random(min: number, max: number): number
function random(generator: IRandomNumberGenerator, min: number, max: number): number
```

The function returns a number in the range `[min, max)`.

### randomInt
```ts
function randomInt(min: number, max: number): number
function randomInt(generator: IRandomNumberGenerator, min: number, max: number): number
```

The function returns an integer in the range `[Math.ceil(min), Math.floor(max))`.

### randomIntInclusive
```ts
function randomIntInclusive(min: number, max: number): number
function randomIntInclusive(
  generator: IRandomNumberGenerator
, min: number
, max: number
): number
```

The function returns an integer in the range `[Math.ceil(min), Math.floor(max)]`.

### randomBool
```ts
function randomBool(probabilityOfTrue: number): boolean
function randomBool(generator: IRandomNumberGenerator, probabilityOfTrue: number): boolean
```

### randomIndexByWeight
```ts
function randomIndexByWeight(weights: NonEmptyArray<number>): number
function randomIndexByWeight(
  generator: IRandomNumberGenerator
, weights: NonEmptyArray<number>
): number
```

The function returns an index of one of weights.

### randomWeighted
```ts
interface IWeighted {
  weight: number
}

function randomWeighted<T extends IWeighted>(values: NonEmptyArray<T>): T
function randomWeighted<T extends IWeighted>(
  generator: IRandomNumberGenerator
, values: NonEmptyArray<T>
): T
```

### randomByWeightModel
```ts
type IWeightModel<T> = NonEmptyArray<{
  weight: number
  value: T
}>

function randomByWeightModel<T>(model: IWeightModel<T>): T
function randomByWeightModel<T>(generator: IRandomNumberGenerator, model: IWeightModel<T>): T
```

### randomByModel
```ts
enum Type {
  Float
, Integer
, IntegerInclusive
}

type IRandomModel =
| number
| Getter<number>
| {
    type: Type
    min: number
    max: number
  }
| NonEmptyArray<{
    weight: number
    value: IRandomModel
  }>


function randomByModel(model: IRandomModel): number
function randomByModel(generator: IRandomNumberGenerator, model: IRandomModel): number
```

### mapToRange
```ts
function mapToRange(
  value: number
, oldMin: number, oldMax: number
, newMin: number, newMax: number
): number
```

A low-level function helps you to use random number generators other than `Math.random()`.

### mapToIndexByWeight
```ts
function mapToIndexByWeight(
  value: number
, oldMin: number, oldMax: number
, weights: NonEmptyArray<number>
): number
```

A low-level function helps you to use random number generators other than `Math.random()`.
