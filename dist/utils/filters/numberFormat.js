const numberFormat = (value) => {
  if (typeof value === 'undefined') {
    return value;
  }
  // eslint-disable-next-line radix
  return parseInt(value).toLocaleString('en');
};

export default numberFormat;
