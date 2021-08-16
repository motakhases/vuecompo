import * as components from './components';

const install = (Vue) => {
  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export * from './components';
