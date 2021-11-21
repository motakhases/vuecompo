import moment from 'moment-jalaali';

export default function jalaali(value: string) {
  /**
   * check value date
   */
  if (typeof value === 'undefined') {
    return value;
  }
  if (value !== null) {
    return moment(value, 'YYYY-MM-DD HH:mm:ss').format(' jDD jMMMM jYYYY، HH:mm:ss ');
  }
  return '---';
}

