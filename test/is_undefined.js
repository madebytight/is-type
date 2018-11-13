import test from 'ava';

import isUndefined from '../lib/is_undefined';

test('isUndefined', t => {
  t.is(isUndefined([]), false);
  t.is(isUndefined(new Array()), false);
  t.is(isUndefined(true), false);
  t.is(isUndefined('true'), false);
  t.is(isUndefined(false), false);
  t.is(isUndefined('false'), false);
  t.is(isUndefined(() => {}), false);
  t.is(isUndefined(function() {}), false);
  t.is(isUndefined(new Function()), false);
  t.is(isUndefined(null), false);
  t.is(isUndefined('null'), false);
  t.is(isUndefined(1), false);
  t.is(isUndefined(1.1), false);
  t.is(isUndefined({}), false);
  t.is(isUndefined(new Object()), false);
  t.is(isUndefined('string'), false);
  t.is(isUndefined(new String()), false);
  t.is(isUndefined(undefined), true);
  t.is(isUndefined(), true);
});
