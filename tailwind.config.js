/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require('./src/designTokens/colors');
const { fontFamily } = require('./src/designTokens/fontFamily');
const { screens } = require('./src/designTokens/screens');
const { spacing } = require('./src/designTokens/spacing');
const { fontSize } = require('./src/designTokens/fontSize');
const { boxShadow } = require('./src/designTokens/boxShadow');
const { borderRadius } = require('./src/designTokens/borderRadius');
const { rotate } = require('./src/designTokens/rotate');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    screens,
    colors,
    fontFamily,
    spacing,
    fontSize,
    boxShadow,
    borderRadius,
    backgroundImage: {
      'empty-box': "url('./Illustration/EmptyBox.svg')",
    },
    rotate,
  },
  variants: {},
  important: true,

};
