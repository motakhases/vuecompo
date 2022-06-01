export default (value) => {
  if (typeof value === 'undefined' || !value) {
    return value;
  }
  // eslint-disable-next-line no-param-reassign
  value = typeof value === 'number' ? value.toString() : value;
  // eslint-disable-next-line radix
  return value.toString().replace(/\d/g, (match) => ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][parseInt(match)]);
};
