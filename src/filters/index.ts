import Vue from 'vue';

alert('filter');

Vue.filter(
  'strLimit',
  require('./stringLimit'),
);

