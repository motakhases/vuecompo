export default (value:any) => {
  if (typeof value === 'undefined') {
    return value;
  }
  return parseInt(value).toLocaleString('en');
};
