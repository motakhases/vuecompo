import moment from "moment-jalaali";
export default (value: any) => {
  /**
   * check value date
   */
  if (typeof value === 'undefined') {
    return value;
  }
  if (value !== null) {
    return moment(value, 'YYYY-MM-DD HH:mm:ss').format(' jDD jMMMM jYYYY، HH:mm:ss ');
  } else {
    return '---';

  }
}






