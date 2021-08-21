module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    // Breakpoints
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    // Color pallete
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#19191A',
      text: '#0A0A0A',
      primary: {
        light: {
          DEFAULT: '#0A33FF',
          hover: '#082BD5',
          active: '#0722AA',
          disabled: '#9DADFF',
        },
        dark: {
          DEFAULT: '#90AEF4',
          hover: '#C3D3F9',
          active: '#D6E0FA',
          disabled: '#404C68',
        },
      },
    },

    // Spacing [margin, padding, top, ...]
    spacing: {
      px: '1px',
      'btn-md': '8px 16px',
    },

    // Radius
    borderRadius: {
      none: '0',
      sm: '5px',
    },

    boxShadow: {},

    container: {},

    cursor: {},

    fontFamily: {
      sans: ['system-ui'],
      serif: ['Georgia'],
    },

    fontSize: {
      xs: ['12px', { lineHeight: '14px' }],
      md: ['14px', { lineHeight: '16px' }],
    },

    fontWeight: {
      normal: '400',
      bold: '700',
    },

    gap: {},
  },
  variants: {},
};
