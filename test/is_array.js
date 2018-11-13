import test from 'ava';

import isArray from '../lib/is_array';

test('isArray', t => {
  t.is(isArray([]), true);
  t.is(isArray(new Array()), true);
  t.is(isArray(true), false);
  t.is(isArray('true'), false);
  t.is(isArray(false), false);
  t.is(isArray('false'), false);
  t.is(isArray(() => {}), false);
  t.is(isArray(function() {}), false);
  t.is(isArray(new Function()), false);
  t.is(isArray(null), false);
  t.is(isArray('null'), false);
  t.is(isArray(1), false);
  t.is(isArray(1.1), false);
  t.is(isArray({}), false);
  t.is(isArray(new Object()), false);
  t.is(isArray('string'), false);
  t.is(isArray(new String()), false);
  t.is(isArray(undefined), false);
  t.is(isArray(), false);
});
