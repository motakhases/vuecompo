import CheckBox from './index.vue';

export default {
  component: CheckBox,
  title: 'Components/CheckBox',
};

const Template = (_, { argTypes }) => ({
  components: { CheckBox },
  props: Object.keys(argTypes),
  template: `
    <div class="dark:bg-surface-dark p-sm rounded-md">
      <CheckBox
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
  name: 'some name',
  disabled: false
};
