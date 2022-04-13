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
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './safelist.txt',
  ],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4)/,
      variants: ['md', 'lg', 'xl'],
    },
    {
      pattern: /col-span-(1|2|3|4)/,
      variants: ['md', 'lg', 'xl'],
    },
    '!text-text-danger',
  ],
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
      'empty-state': "url('./Illustration/emptyState.png')",
    },
    container: {
      center: true,
    },
  },
  variants: {},
};
