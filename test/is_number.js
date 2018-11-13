import test from 'ava';

import isNumber from '../lib/is_number';

test('isNumber', t => {
  t.is(isNumber([]), false);
  t.is(isNumber(new Array()), false);
  t.is(isNumber(true), false);
  t.is(isNumber('true'), false);
  t.is(isNumber(false), false);
  t.is(isNumber('false'), false);
  t.is(isNumber(() => {}), false);
  t.is(isNumber(function() {}), false);
  t.is(isNumber(new Function()), false);
  t.is(isNumber(null), false);
  t.is(isNumber('null'), false);
  t.is(isNumber(1), true);
  t.is(isNumber(1.1), true);
  t.is(isNumber({}), false);
  t.is(isNumber(new Object()), false);
  t.is(isNumber('string'), false);
  t.is(isNumber(new String()), false);
  t.is(isNumber(undefined), false);
  t.is(isNumber(), false);
});
