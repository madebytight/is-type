import test from 'ava';

import isBoolean from '../lib/is_boolean';

test('isBoolean', t => {
  t.is(isBoolean([]), false);
  t.is(isBoolean(new Array()), false);
  t.is(isBoolean(true), true);
  t.is(isBoolean('true'), false);
  t.is(isBoolean(false), true);
  t.is(isBoolean('false'), false);
  t.is(isBoolean(() => {}), false);
  t.is(isBoolean(function() {}), false);
  t.is(isBoolean(new Function()), false);
  t.is(isBoolean(null), false);
  t.is(isBoolean('null'), false);
  t.is(isBoolean(1), false);
  t.is(isBoolean(1.1), false);
  t.is(isBoolean({}), false);
  t.is(isBoolean(new Object()), false);
  t.is(isBoolean('string'), false);
  t.is(isBoolean(new String()), false);
  t.is(isBoolean(undefined), false);
  t.is(isBoolean(), false);
});
