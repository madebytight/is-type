import isArray from './is_array';
import isNull from './is_null';

export default (arg) => {
  return !isArray(arg) &&
    !isNull(arg) &&
    typeof arg === 'object';
};
