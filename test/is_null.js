import test from 'ava';

import { isNull } from '..';

test('isNull', t => {
  t.is(isNull([]), false);
  t.is(isNull(new Array()), false);
  t.is(isNull(true), false);
  t.is(isNull('true'), false);
  t.is(isNull(false), false);
  t.is(isNull('false'), false);
  t.is(isNull(() => {}), false);
  t.is(isNull(function() {}), false);
  t.is(isNull(new Function()), false);
  t.is(isNull(null), true);
  t.is(isNull('null'), false);
  t.is(isNull(1), false);
  t.is(isNull(1.1), false);
  t.is(isNull({}), false);
  t.is(isNull(new Object()), false);
  t.is(isNull('string'), false);
  t.is(isNull(new String()), false);
  t.is(isNull(undefined), false);
  t.is(isNull(), false);
});
