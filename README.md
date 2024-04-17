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
type IRandomModel =
| number
| {
    min: number
    max: number
  }
| NonEmptyArray<{
    weight: number
    value: IRandomModel
  }>
```

### random
```ts
function random(min: number, max: number): number
```

The function returns a number in the range `[min, max)`.

### randomInt
```ts
function randomInt(min: number, max: number): number
```

The function returns an integer in the range `[Math.ceil(min), Math.floor(max))`.

### randomIntInclusive
```ts
function randomIntInclusive(min: number, max: number): number
```

The function returns an integer in the range `[Math.ceil(min), Math.floor(max)]`.

### randomBool
```ts
function randomBool(probabilityOfTrue: number): boolean
```

### randomIndexByWeight
```ts
function randomIndexByWeight(weights: NonEmptyArray<number>): number
```

The function returns an index of one of weights.

### randomWeighted
```ts
interface IWeighted {
  weight: number
}

function randomWeighted<T extends IWeighted>(values: NonEmptyArray<T>): T
```

### randomByWeightModel
```ts
type IWeightModel<T> = NonEmptyArray<{
  weight: number
  value: T
}>

function randomByWeightModel<T>(model: IWeightModel<T>): number
```

### randomByModel
```ts
function randomByModel(model: IRandomModel): number
```

### randomIntByModel
```ts
function randomIntByModel(model: IRandomModel): number
```

### randomIntInclusiveByModel
```ts
function randomIntInclusiveByModel(model: IRandomModel): number
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
