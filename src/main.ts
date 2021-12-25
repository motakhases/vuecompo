import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/tailwind.css';
import './utils/directives';

Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
