import { addons } from '@storybook/addons';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import theme from './zplTheme';

Vue.use(VueI18n);

addons.setConfig({
  isFullscreen: false,
  theme,
});
