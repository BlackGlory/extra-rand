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

Return a number in the range `[min, max)`.

### randomInt

```ts
function randomInt(min: number, max: number): number
```

Return an integer in the range `[Math.ceil(min), Math.floor(max))`.

### randomIntInclusive

```ts
function randomIntInclusive(min: number, max: number): number
```

Return an integer in the range `[Math.ceil(min), Math.floor(max)]`.
