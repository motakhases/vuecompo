import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['src/utils/filters/index.js', 'src/designTokens/index.js'],
  output: {
    exports: 'auto',
    dir: 'dist',
  },
  plugins: [commonjs(), resolve(), multiInput()],
};
