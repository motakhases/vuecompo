import Vue from 'vue';
import VueI18n from 'vue-i18n';
// eslint-disable-next-line import/extensions
import langs from '../lang/fa-IR.js';

Vue.use(VueI18n);

// const routes: RouteConfig[] = [];
const messages = { fa: langs };
const i18n = new VueI18n({
  locale: 'fa',
  messages,
});

export default i18n;
