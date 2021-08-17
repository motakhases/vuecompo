import * as components from './components';
import { VueConstructor } from 'vue';

const install = (Vue:VueConstructor) => {
  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export * from './components';
