import test from 'ava';

import isObject from '../lib/is_object';

test('isObject', t => {
  t.is(isObject([]), false);
  t.is(isObject(new Array()), false);
  t.is(isObject(true), false);
  t.is(isObject('true'), false);
  t.is(isObject(false), false);
  t.is(isObject('false'), false);
  t.is(isObject(() => {}), false);
  t.is(isObject(function() {}), false);
  t.is(isObject(new Function()), false);
  t.is(isObject(null), false);
  t.is(isObject('null'), false);
  t.is(isObject(1), false);
  t.is(isObject(1.1), false);
  t.is(isObject({}), true);
  t.is(isObject(new Object()), true);
  t.is(isObject('string'), false);
  t.is(isObject(new String()), true);
  t.is(isObject(undefined), false);
  t.is(isObject(), false);
});
