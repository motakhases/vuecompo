/* eslint-disable import/prefer-default-export */
import '../../src/assets/tailwind.css';
import VueI18n from 'vue-i18n';
import Vue from 'vue';
// eslint-disable-next-line import/extensions
import langs from '../../lang/fa-IR.js';

const messages = { fa: langs };

export const parameters = {
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: false,
    },
  },
};

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'fa',
  messages,
});
export const decorators = [
  (story) => ({
    components: { story },
    i18n,
    template: '<story />',
  }),
];
