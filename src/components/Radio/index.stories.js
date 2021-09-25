import Radio from './index.vue';

export default {
  component: Radio,
  title: 'Components/Radio',
};

const Template = (_, { argTypes }) => ({
  components: { Radio },
  props: Object.keys(argTypes),
  template: `
    <Radio dir="rtl" :name="name" :options="options" :disabled="disabled">
    </Radio>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  options: [
    { label: 'لیبل', value: 'test' },
    { label: 'لیبل', value: 'test2' },
    { label: 'لیبل', value: 'test3' },
  ],
  name:'test',
  disabled:false
};
