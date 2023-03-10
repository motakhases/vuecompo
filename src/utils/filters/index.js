import Vue from 'vue';
import strLimit from './stringLimit';
import cJalaali from './cJalaali';
import jalaali from './jalaali';
import numberFormat from './numberFormat';
import JdateName from './JdateName';
import JdateHour from './JdateHour';
import faNum from './faNum';
import tableDateFormat from './tableDateFormat';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
Vue.filter('strLimit', strLimit);
Vue.filter('numberFormat', numberFormat);
Vue.filter('cJalaali', cJalaali);
Vue.filter('jalaali', jalaali);
Vue.filter('JdateName', JdateName);
Vue.filter('JdateHour', JdateHour);
Vue.filter('faNum', faNum);
Vue.filter('tableDateFormat', tableDateFormat);
