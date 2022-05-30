import moment from 'moment-jalaali';

const jalaali = (value) => {
  const formatted = moment(value, 'YYYY-MM-DD HH:mm:ss').format(' jYYYY/jMM/jDD، HH:mm:ss ');
  return value ? formatted : '---';
};

export default jalaali;
