export default function stringLimit(value: string, stop: number, fromEnd: boolean) {
  if (typeof value === 'undefined') {
    return value;
  }
  if (fromEnd) {
    return value.slice(-stop) + (stop < value.length ? '....' : '');
  }
  return value.slice(0, stop) + (stop < value.length ? '....' : '');
}
