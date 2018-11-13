export default (arg) => {
  return typeof arg === 'string' ||
    arg instanceof String;
};
