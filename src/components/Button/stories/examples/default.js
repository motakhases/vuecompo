import Button from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <Button v-bind="$props" />
  </div>
  `,
});

const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
  type: {
    options: [
      'primary',
      'secondary',
      'tertiary',
      'decretive',
      'neutral',
      'informative',
      'warning',
      'negative',
      'positive',

    ],
    control: { type: 'select' },
  },
};

Default.args = {
  text: 'دکمه',
  size: 'large',
  type: 'primary',
  disabled: false,
  fill: false,
  loading: false,
  afterIcon: '',
  beforeIcon: '',
  icon: '',
};

export default Default;
