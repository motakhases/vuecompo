const lgConf = {
  priority: 0,
};
const lg = (val, str = '', prio = -1) => {
  if (prio < lgConf.priority) {
    return;
  }
  if (str) {
    // console.log(str, val);
  } else {
    // console.log(val);
  }
};

const prevUp = (e) => {
  e.stopPropagation();
  e.cancelBubble = true;
  e.preventDefault();
};

module.exports.lg = lg;
module.exports.prevUp = prevUp;
module.exports.lgConf = lgConf;
