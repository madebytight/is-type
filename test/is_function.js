import test from 'ava';

import { isFunction } from '..';

test('isFunction', t => {
  t.is(isFunction([]), false);
  t.is(isFunction(new Array()), false);
  t.is(isFunction(true), false);
  t.is(isFunction('true'), false);
  t.is(isFunction(false), false);
  t.is(isFunction('false'), false);
  t.is(isFunction(() => {}), true);
  t.is(isFunction(function() {}), true);
  t.is(isFunction(null), false);
  t.is(isFunction('null'), false);
  t.is(isFunction(1), false);
  t.is(isFunction(1.1), false);
  t.is(isFunction({}), false);
  t.is(isFunction(new Object()), false);
  t.is(isFunction('string'), false);
  t.is(isFunction(new String()), false);
  t.is(isFunction(undefined), false);
  t.is(isFunction(), false);
});
