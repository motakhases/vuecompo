import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
// import * as VeeValidate from 'vee-validate';

// Vue.use(VeeValidate, { inject: false });

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
