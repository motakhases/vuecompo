import moment from 'moment-jalaali';

window.moment = moment;
moment.loadPersian();

export default (value:any, format = 'HH:mm:ss jYYYY/jM/jD ') => {
  if (typeof value === 'undefined') {
    return value;
  }
  /**
   * Define time variables
   */
  if (value !== null) {
    /** * variables for today
     */
    const today = moment().format('jYYYY/jMM/jDD');
    /** *  variable for the past day
     */
    const yesterday = moment().subtract(1, 'days').format('jYYYY/jMM/jDD');
    /** *  variable for the next day
     */
    const tommorow = moment().add(1, 'days').format('jYYYY/jMM/jDD');
    /** *  variable for currentYear
     */
    const currentYear = moment().format('jYYYY');
    const jValue = moment(value).format('jYYYY/jMM/jDD');
    const valueCurrent = moment(value).format('jYYYY');
    if (jValue === today) {
      return `امروز، ${moment(value, 'YYYY-MM-DD HH:mm:ss').format(' HH:mm ')}`;
    }
    if (jValue === yesterday) {
      return `دیروز، ${moment(value, 'YYYY-MM-DD HH:mm:ss').format(' HH:mm ')}`;
    }
    if (jValue === tommorow) {
      return `فردا، ${moment(value, 'YYYY-MM-DD HH:mm:ss').format(' HH:mm ')}`;
    }
    if (valueCurrent === currentYear) {
      return moment(value, 'YYYY-MM-DD HH:mm:ss').format(' jDD jMMMM، HH:mm ');
    }
    return moment(value, 'YYYY-MM-DD HH:mm:ss').format(' jDD jMMMM jYY، HH:mm ');
  }

  return '---';
};

