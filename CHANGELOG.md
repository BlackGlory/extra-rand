# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/BlackGlory/extra-rand/compare/v0.4.1...v0.5.0) (2026-02-18)


### ⚠ BREAKING CHANGES

* **shuffle:** Node.js v18 => Node.js v22
* **random-int, random-int-inclusive:** - The `randomInt` no longer allow non-integer ranges.
- The `randomIntInclusive` no longer allow non-integer ranges.
- The `randomNumber` no longer allow non-integer ranges
  when the model type is `Integer` or `IntegerInclusive`.

### Features

* **random-int, random-int-inclusive:** no longer allow non-integer ranges ([f1263b2](https://github.com/BlackGlory/extra-rand/commit/f1263b23eea206db3e19921fc6872ec0f2df3712))


### Bug Fixes

* **shuffle:** make the shuffle result uniform ([eeba4da](https://github.com/BlackGlory/extra-rand/commit/eeba4daf401aa5a2cac8b392fcc3072d05d4dcfd))

### [0.4.1](https://github.com/BlackGlory/extra-rand/compare/v0.4.0...v0.4.1) (2024-09-14)


### Features

* improve `randomPickWeightedItem` ([fa5da42](https://github.com/BlackGlory/extra-rand/commit/fa5da42d2805b0e70352ef110a7dbde039643d15))

## [0.4.0](https://github.com/BlackGlory/extra-rand/compare/v0.3.3...v0.4.0) (2024-09-14)


### ⚠ BREAKING CHANGES

* Removed `mapToIndexByWeight`
* Removed `randomByWeightModel`
* Renamed `randomIndexByWeight` to
`randomPickWeightedIndex`
* Modified `INumberModel`
* - Renamed `Type` to `NumberType`
- Renamed `IRandomModel` to `INumberModel`
* - Renamed `randomWeighted` to `randomPickWeightedItem`
- Renamed `IWeighted` to `IWeightedItem`
* Removed `mapToRange`
* - Renamed `randomByModel` to `randomNumber`
- Renamed `random` to `randomFloat`

### Features

* add `randomPickIndex` ([f0c3f70](https://github.com/BlackGlory/extra-rand/commit/f0c3f70277d385642ae20f45df88404a56f26fff))
* add `randomPickItem` ([d131502](https://github.com/BlackGlory/extra-rand/commit/d131502156b25624e6128002110d7294b6ae5d68))
* remove `mapToIndexByWeight` ([b58f771](https://github.com/BlackGlory/extra-rand/commit/b58f7715015cd16083323b703bd1b9882f2d817e))
* remove `randomByWeightModel` ([9e74edd](https://github.com/BlackGlory/extra-rand/commit/9e74edda50aea1f64217682f86e6a81ee6c2b8f2))


* rename ([b0082df](https://github.com/BlackGlory/extra-rand/commit/b0082dfe489d5d66f284a50d94c739cb7a1095ee))
* rename ([c47f81a](https://github.com/BlackGlory/extra-rand/commit/c47f81abf1c6e82b1a5b803ae2604314108aaa51))
* rename ([cff7cae](https://github.com/BlackGlory/extra-rand/commit/cff7cae56de69ff9479cbd08ec48c85e8482cd81))
* rename ([2052445](https://github.com/BlackGlory/extra-rand/commit/2052445ff4790415ae6db92e083017fbaf3430f8))
* rename ([bf51e8d](https://github.com/BlackGlory/extra-rand/commit/bf51e8d68f0c61a9440df5a80a769651a2694866))
* replace `mapToRange` with `remap` from `extra-utils` ([547b7ff](https://github.com/BlackGlory/extra-rand/commit/547b7ffc7ee15d7e56f783ca49e8185974d199c9))

### [0.3.3](https://github.com/BlackGlory/extra-rand/compare/v0.3.2...v0.3.3) (2024-07-19)

### [0.3.2](https://github.com/BlackGlory/extra-rand/compare/v0.3.1...v0.3.2) (2024-05-13)


### Features

* add `shuffle` ([fa4c854](https://github.com/BlackGlory/extra-rand/commit/fa4c854f3417607e8be2ff466b4f4507324e2f83))

### [0.3.1](https://github.com/BlackGlory/extra-rand/compare/v0.3.0...v0.3.1) (2024-04-30)


### Features

* add `IRandomNumberGenerator` support ([69294a6](https://github.com/BlackGlory/extra-rand/commit/69294a6407a83c079c91a524307d11e241e64db4))

## [0.3.0](https://github.com/BlackGlory/extra-rand/compare/v0.2.1...v0.3.0) (2024-04-18)


### ⚠ BREAKING CHANGES

* - Removed `randomIntByModel`, `randomIntInclusiveByModel`
- Rewritten `randomByModel`
* - Rename `randomByWeight` to `randomIndexByWeight`
- CommonJS => ESM
- It requires Node.js >= v18.17.0

### Features

* add model-related functions ([35777f3](https://github.com/BlackGlory/extra-rand/commit/35777f3864b293f64917e9ba7b7d467caee4f38b))
* export `IRandomModel` ([eeeb5be](https://github.com/BlackGlory/extra-rand/commit/eeeb5be5f80caac975bf06259144a5642773bbc3))


* replace `randomIntByModel`, `randomIntInclusiveByModel` with `randomByModel` ([8ff1f62](https://github.com/BlackGlory/extra-rand/commit/8ff1f62eaf9055b37a6379146847e5bd9bd0360e))

### [0.2.1](https://github.com/BlackGlory/extra-rand/compare/v0.2.0...v0.2.1) (2024-04-17)


### Features

* add `randomBool` ([18db19d](https://github.com/BlackGlory/extra-rand/commit/18db19d7a9b93073fd8b16c4872faaec918baf88))

## [0.2.0](https://github.com/BlackGlory/extra-rand/compare/v0.1.5...v0.2.0) (2024-03-08)


### ⚠ BREAKING CHANGES

* Removed `mapToIntRange`

* remove `mapToIntRange` ([d1d233f](https://github.com/BlackGlory/extra-rand/commit/d1d233f85527bfaa86186ca0a01d1e518f158d8a))

### [0.1.5](https://github.com/BlackGlory/extra-rand/compare/v0.1.4...v0.1.5) (2023-06-10)


### Bug Fixes

* export src ([1c11cb2](https://github.com/BlackGlory/extra-rand/commit/1c11cb21b8dabd2899ef385401307ff62fe0a8ff))

### [0.1.4](https://github.com/BlackGlory/extra-rand/compare/v0.1.3...v0.1.4) (2023-03-30)


### Features

* add `mapToIndexByWeight` ([d8896b5](https://github.com/BlackGlory/extra-rand/commit/d8896b5672ed1241d864bbb33d88fab1c9d74372))

### [0.1.3](https://github.com/BlackGlory/extra-rand/compare/v0.1.2...v0.1.3) (2023-03-30)


### Features

* add `randomByWeight` ([890ac11](https://github.com/BlackGlory/extra-rand/commit/890ac110d1191ca58a61ab036da65a0683791a6f))

### [0.1.2](https://github.com/BlackGlory/extra-rand/compare/v0.1.1...v0.1.2) (2023-03-30)


### Features

* add `mapToRange`, `mapToIntRange` ([9514c7c](https://github.com/BlackGlory/extra-rand/commit/9514c7c03ff26fb13c44c10e138f23ea56e09124))

### [0.1.1](https://github.com/BlackGlory/extra-rand/compare/v0.1.0...v0.1.1) (2022-01-05)

## 0.1.0 (2021-03-26)


### Features

* init ([19bc50c](https://github.com/BlackGlory/extra-rand/commit/19bc50ca88b649eef6738e858048e40418a6fb84))
