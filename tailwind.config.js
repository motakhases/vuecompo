const {
  colors,
  fontFamily,
  screens,
  spacing,
  fontSize,
  boxShadow,
  borderRadius,
  rotate,
} = require('./src/designTokens/index');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './safelist.txt',
  ],
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwind-safelist-generator')({
      patterns: [
        '{screens}:col-{gridColumn}',
        '{screens}:grid-cols-{gridTemplateColumns}',
        'col-{gridColumn}',
        'grid-cols-{gridTemplateColumns}',
      ],
    }),
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    colors,
    fontFamily,
    screens,
    spacing,
    fontSize,
    boxShadow,
    borderRadius,
    rotate,
    backgroundImage: {
      'empty-box': "url('./Illustration/EmptyBox.svg')",
    },
  },
  variants: {},
};
