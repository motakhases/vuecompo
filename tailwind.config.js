const typography = require('@tailwindcss/typography');
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
  important: true,
  content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js', './safelist.txt'],
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
      skeleton:
        'linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))',
      'skeleton-dark':
        'linear-gradient(90deg, rgba(0, 0, 0, 0) 0,rgba(0, 0, 0, 0.2) 20%,rgba(0, 0, 0, 0.5) 60%,rgba(0, 0, 0, 0))',
    },
    container: {
      center: true,
    },
  },
  plugins: [typography],
  variants: {},
};
