import Radio from './index.vue';

export default {
  component: Radio,
  title: 'Components/Radio',
};

const Template = (_, { argTypes }) => ({
  components: { Radio },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
    <Radio
      :name="name"
      :options="options"
      :disabled="disabled"
    />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  options: [
    { label: 'اپل', value: 'apple' },
    { label: 'لنوو', value: 'lenovo' },
    { label: 'شیائومی', value: 'xiaomi' },
  ],
  name:'test',
  disabled:false
};
