import moment from 'moment-jalaali';

moment.loadPersian();

export const hour = (date: string): string => moment(date).format('HH:mm');
export const dayName = (date: string): string => moment(date).format('dddd');
export const dayNumber = (date: string): string => moment(date).format('D');
export const month = (date: string): string => moment(date).format('D jMMMM');

export const now = (format: string): string => moment().format(format);
export const yesterday = (format: string): string => moment().subtract(1, 'days').format(format);
export const beforeDays = (days: number, format: string): string => moment().subtract(days, 'days').format(format);
