const { colors } = require('./src/designTokens/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1456px',
    },

    colors,

    spacing: {
      0: '0px',
      '2xs': '4px',
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
      '5xl': '96px',
      '6xl': '128px',
    },

    fontFamily: {
      sans: ['system-ui'],
      serif: ['Georgia'],
    },

    fontSize: {
      // large screen
      'ls-xl': ['56px', { lineHeight: '84px' }],
      'ls-lg': ['44px', { lineHeight: '64px' }],
      'ls-md': ['32px', { lineHeight: '52px' }],
      'ls-sm': ['28px', { lineHeight: '40px' }],
      'ls-h1': ['20px', { lineHeight: '32px' }],
      'ls-h2': ['18px', { lineHeight: '28px' }],
      'ls-h3': ['16px', { lineHeight: '24px' }],
      'ls-cp': ['11px', { lineHeight: '12px' }],
      // small screen
      'ss-xl': ['44px', { lineHeight: '84px' }],
      'ss-lg': ['26px', { lineHeight: '64px' }],
      'ss-md': ['32px', { lineHeight: '52px' }],
      'ss-sm': ['28px', { lineHeight: '40px' }],
      'ss-h1': ['18px', { lineHeight: '32px' }],
      'ss-h2': ['14px', { lineHeight: '28px' }],
      'ss-h3': ['12px', { lineHeight: '24px' }],
      'ss-cp': ['12px', { lineHeight: '12px' }],
      // use in both (b = body)
      b1: ['18px', { lineHeight: '32px' }],
      b2: ['14px', { lineHeight: '24px' }],
      b3: ['12px', { lineHeight: '20px' }],
      btn: ['14px', { lineHeight: '24px' }],
    },

    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      circle: '100%',
    },

    ringColor: {
      light: colors.interactive.focus,
      dark: colors.interactive.dark.focus,
    },
  },
  variants: {},
};
