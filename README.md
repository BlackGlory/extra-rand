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

### randomFloat
```ts
function randomFloat(min: number, max: number): number
function randomFloat(generator: IRandomNumberGenerator, min: number, max: number): number
```

The function returns a float in the range `[min, max)`.

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

### randomNumber
```ts
enum NumberType {
  Float
, Integer
, IntegerInclusive
}

type INumberModel =
| number
| Getter<number>
| {
    type: NumberType
    min: number
    max: number
  }
| NonEmptyArray<{
    weight: number
    model: INumberModel
  }>

function randomNumber(model: INumberModel): number
function randomNumber(generator: IRandomNumberGenerator, model: INumberModel): number
```

### randomBool
```ts
function randomBool(probabilityOfTrue: number): boolean
function randomBool(generator: IRandomNumberGenerator, probabilityOfTrue: number): boolean
```

### randomPickItem
```ts
function randomPickItem<T>(items: NonEmptyArray<T>): T
function randomPickItem<T>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
): T
```

### randomPickWeightedItem
```ts
interface IWeightedItem {
  weight: number
}

function randomPickWeightedItem<T>(items: NonEmptyArray<T>, weights: NonEmptyArray<number>): T
function randomPickWeightedItem<T extends IWeightedItem>(items: NonEmptyArray<T>): T
function randomPickWeightedItem<T>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
, weights: NonEmptyArray<number>
): T
function randomPickWeightedItem<T extends IWeightedItem>(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<T>
): T
```

### randomPickIndex
```ts
function randomPickIndex(items: NonEmptyArray<unknown>): number
function randomPickIndex(
  generator: IRandomNumberGenerator
, items: NonEmptyArray<unknown>
): number
```

The function returns an integer in the range `[0, items.length]`.

### randomPickWeightedIndex
```ts
function randomPickWeightedIndex(weights: NonEmptyArray<number>): number
function randomPickWeightedIndex(
  generator: IRandomNumberGenerator
, weights: NonEmptyArray<number>
): number
```

The function returns an integer in the range `[0, weights.length]`.

### shuffle
```ts
function shuffle(arr: unknown[]): void
function shuffle(generator: IRandomNumberGenerator, arr: unknown[]): void
```
