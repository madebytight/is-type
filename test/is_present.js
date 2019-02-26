import test from 'ava';

import { isPresent } from '..';

test('isPresent', (t) => {
  t.is(isPresent(undefined), false);
  t.is(isPresent(null), false);

  t.is(isPresent('string'), true);
  t.is(isPresent(1), true);
  t.is(isPresent({}), true);
  t.is(isPresent([]), true);
});
