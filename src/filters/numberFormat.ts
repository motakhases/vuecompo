export default function numberFormat(value:string) {
  if (typeof value === 'undefined') {
    return value;
  }
  // eslint-disable-next-line radix
  return parseInt(value).toLocaleString('en');
}
