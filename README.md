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

```ts
[min, max)
```

### randomInt

```ts
function randomInt(min: number, max: number): number
```

```ts
[Math.ceil(min), Math.floor(max))
```

### randomIntInclusive

```ts
function randomIntInclusive(min: number, max: number): number
```

```ts
[Math.ceil(min), Math.floor(max)]
```
