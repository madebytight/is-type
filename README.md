JavaScript type checkers

[![Build status](https://circleci.com/gh/madebytight/is-type.svg?style=svg)](https://circleci.com/gh/madebytight/is-type)

## Installation

```console
yarn add @tight/is-type
```

## Usage

```js
import { 
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined
} from '@tight/is-type';

isArray([]); // true
isBoolean(true); // true
isFunction(() => {}); // true
isNull(null); // true
isNumber(1); // true
isObject({}); // true
isString('string'); // true
isUndefined(); // true
```
