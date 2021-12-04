import moment from 'moment-jalaali';

moment.loadPersian();

export const now = (format:string) => moment().format(format);
export const yesterday = (format:string) => moment().subtract(1, 'days').format(format);
export const beforeDays = (days:number, format:string, value:string) => moment(value).subtract(days, 'days').format(format);
