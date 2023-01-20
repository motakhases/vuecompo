/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { VueConstructor } from 'vue';
import * as components from './components';

const install = (Vue: VueConstructor) => {
  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export * from './components';
