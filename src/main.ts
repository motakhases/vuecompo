import Vue from 'vue';

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
}).$mount('#app');
