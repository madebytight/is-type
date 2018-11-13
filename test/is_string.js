import test from 'ava';

import isString from '../lib/is_string';

test('isString', t => {
  t.is(isString([]), false);
  t.is(isString(new Array()), false);
  t.is(isString(true), false);
  t.is(isString('true'), true);
  t.is(isString(false), false);
  t.is(isString('false'), true);
  t.is(isString(() => {}), false);
  t.is(isString(function() {}), false);
  t.is(isString(new Function()), false);
  t.is(isString(null), false);
  t.is(isString('null'), true);
  t.is(isString(1), false);
  t.is(isString(1.1), false);
  t.is(isString({}), false);
  t.is(isString(new Object()), false);
  t.is(isString('string'), true);
  t.is(isString(new String()), true);
  t.is(isString(undefined), false);
  t.is(isString(), false);
});
