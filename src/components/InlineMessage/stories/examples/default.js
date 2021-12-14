import InlineMessage from '../../index.vue';
import Button from '../../../Button/index.vue';

const Template = (_, { argTypes }) => ({
  components: { InlineMessage, Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <InlineMessage v-bind="$props"/>
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
  title: 'عنوان',
  description: '',
  type: 'neutral',
  toggle: false,
};

export default Default;
