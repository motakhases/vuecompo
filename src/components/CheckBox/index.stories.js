import CheckBox from './index.vue';

export default {
  component: CheckBox,
  title: 'Components/CheckBox',
};

const Template = (_, { argTypes }) => ({
  components: { CheckBox },
  props: Object.keys(argTypes),
  template: `
    <CheckBox dir="rtl" :name="name" :options="options" :disabled="disabled">
    </CheckBox>
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
