import { create } from '@storybook/theming';
import brandImage from './public/ZarinPal-Logo-Storybook.svg';

export default create({
  base: 'light',

  // UI
  appBorderRadius: 8,

  appBg: '#F5F5F5',
  colorSecondary: '#0A33FF',

  // Toolbar default and active colors
  barSelectedColor: '#0A33FF',

  brandTitle: 'ZarinPal web components doc',
  brandImage,
});
