import moment from 'moment-jalaali';

moment.loadPersian();

const jDateHour = (value) => {
  if (value !== null) {
    return moment(value).format('jYYYY/jMM/jDD، HH:mm');
  }

  return '---';
};

export default jDateHour;
