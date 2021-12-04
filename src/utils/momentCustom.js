import moment from 'moment-jalali';

moment.loadPersian();

// eslint-disable-next-line import/prefer-default-export
export const now = (format) => moment().format(format);
export const yesterday = (format) => moment().subtract(1, 'days').format(format);
export const beforeDays = (days, format, value) => moment(value).subtract(days, 'days').format(format);
