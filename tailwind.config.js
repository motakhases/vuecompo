/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require('./src/designTokens/colors');
const { fontFamily } = require('./src/designTokens/fontFamily');
const { screens } = require('./src/designTokens/screens');
const { spacing } = require('./src/designTokens/spacing');
const { fontSize } = require('./src/designTokens/fontSize');
const { boxShadow } = require('./src/designTokens/boxShadow');
const { borderRadius } = require('./src/designTokens/borderRadius');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    screens,
    colors,
    fontFamily,
    spacing,
    fontSize,
    boxShadow,
    borderRadius,
  },
  variants: {},
};
