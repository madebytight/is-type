JavaScript type checkers

[![npm version](https://img.shields.io/npm/v/@tight/is-type.svg)](https://www.npmjs.com/package/@tight/is-type) [![Build status](https://img.shields.io/circleci/project/github/madebytight/is-type.svg)](https://circleci.com/gh/madebytight/is-type)

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
