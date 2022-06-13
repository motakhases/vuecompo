import moment from 'moment-jalaali';

moment.loadPersian();

export const now = (format:string):string => moment().format(format);
export const yesterday = (format:string):string => moment().subtract(1, 'days').format(format);
export const beforeDays = (days:number, format:string):string => moment().subtract(days, 'days').format(format);

