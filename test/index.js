import test from 'ava';

import {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isPresent,
  isString,
  isUndefined
} from '..';

test('all function are exported', t => {
  t.is(typeof isArray, 'function');
  t.is(typeof isBoolean, 'function');
  t.is(typeof isFunction, 'function');
  t.is(typeof isNull, 'function');
  t.is(typeof isNumber, 'function');
  t.is(typeof isObject, 'function');
  t.is(typeof isPresent, 'function');
  t.is(typeof isString, 'function');
  t.is(typeof isUndefined, 'function');
});
