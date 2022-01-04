import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/utils/filters/index.js',
  output: {
    file: 'dist/filters.js',
    exports: 'auto',
  },
  plugins: [commonjs(), resolve()],
};
