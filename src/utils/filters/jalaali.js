import moment from 'moment-jalaali';

const jalaali = (value) => {
  const formatted = moment(value, 'YYYY-MM-DD HH:mm:ss').format(' jDD jMMMM jYYYY، HH:mm:ss ');
  return value ? formatted : '---';
};

export default jalaali;
