import moment from 'moment-jalali';

moment.loadPersian();

export default (value) => {
  if (value !== null) {
    return moment(value).format('dddd jDD jMMMM');
  }

  return '---';
};
