import Vue from 'vue';
import i18n from './i18n';

// Router
import router from './routes';

// Style
import './assets/tailwind.css';

// Utils
import './utils/directives';
import './utils/filters/index';
import App from './App.vue';

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  i18n,
}).$mount('#app');

// Now tell vue to use this plugin

