import Vue from 'vue';
import strLimit from './stringLimit';
import numberFormat from './numberFormat';

Vue.filter(
  'strLimit', strLimit,
);
Vue.filter(
  'numberFormat', numberFormat,
);

