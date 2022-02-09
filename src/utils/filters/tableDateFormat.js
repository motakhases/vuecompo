import moment from 'moment-jalaali';

const tableDateFormat = (value) => {
  const formatted = moment(value, 'YYYY-MM-DD HH:mm:ss').format('jDD jMMMM، HH:mm');
  return value ? formatted : '---';
};

export default tableDateFormat;
