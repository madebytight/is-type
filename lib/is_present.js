import { isUndefined, isNull } from '.';

export default (arg) => {
  return !isUndefined(arg) && !isNull(arg);
};
