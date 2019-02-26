import isUndefined from './is_undefined';
import isNull from './is_null';

export default (arg) => {
  return !isUndefined(arg) && !isNull(arg);
};
