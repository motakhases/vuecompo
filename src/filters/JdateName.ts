import moment from 'moment-jalaali';

moment.loadPersian();

export default (value:string) => {
  if (value !== null) {
    return moment(value).format('dddd jDD jMMMM');
  }

  return '---';
};
