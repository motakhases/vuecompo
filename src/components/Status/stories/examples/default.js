import Status from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Status },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
    <Status v-bind="$props" />
  </div>
  `,
});

const Default = Template.bind({});

Default.argTypes = {
  type: {
    options: ['neutral', 'informative', 'warning', 'negative', 'positive'],
    control: { type: 'select' },
  },
};

Default.args = {
  text: 'Neutral',
  type: 'neutral',
  indicator: false,
};

export default Default;

