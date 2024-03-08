# extra-rand
Yet another random library.

## Install
```sh
npm install --save extra-rand
# or
yarn add extra-rand
```

## API
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

### randomByWeight
```ts
function randomByWeight(weights: number[]): number
```

The function returns an index of one of weights.

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
function mapByWeight(
  value: number
, oldMin: number, oldMax: number
, weights: number[]
): number
```

A low-level function helps you to use random number generators other than `Math.random()`.
