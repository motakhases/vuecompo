import Vue from 'vue';
import strLimit from './stringLimit';
import cJalaali from './cJalaali';
import jalaali from './jalaali';
import numberFormat from './numberFormat';
import JdateName from './JdateName';

Vue.filter(
  'strLimit', strLimit,
);
Vue.filter(
  'numberFormat', numberFormat,
);
Vue.filter(
  'cJalaali', cJalaali,
);
Vue.filter(
  'jalaali', jalaali,
);
Vue.filter(
  'JdateName', JdateName,
);

