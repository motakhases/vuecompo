import moment from 'moment-jalaali';

moment.loadPersian();

const jDateName = (value) => {
  if (value !== null) {
    return moment(value).format('dddd jDD jMMMM');
  }

  return '---';
};

export default jDateName;
