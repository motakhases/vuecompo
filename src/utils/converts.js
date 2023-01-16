const toInt = (...str) => {
  if (str.length > 1) {
    const res = [];
    for (let i = 0; i < str.length; i += 1) {
      res.push(toInt(str[i])[0]);
    }
    return res;
  }
  const res = str[0];

  return [parseInt(res, 10)];
};

module.exports.toInt = toInt;
