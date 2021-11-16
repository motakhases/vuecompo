import Vue from 'vue';
import App from './App.vue';
import * as filters from '@/filters/index';
import './assets/tailwind.css';

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, (filters as any)[key]);
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
