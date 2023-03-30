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

### Linear Map
These low-level methods help you to use random number generators other than `Math.random()`.

#### mapToRange
```ts
function mapToRange(
  value: number
, oldMin: number, oldMax: number
, newMin: number, newMax: number
): number
```

#### mapToIntRange
```ts
function mapToIntRange(
  value: number
, oldMin: number, oldMax: number
, newMin: number, newMax: number
): number
```
