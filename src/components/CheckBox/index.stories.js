import CheckBox from './index.vue';

export default {
  component: CheckBox,
  title: 'Components/CheckBox',
};

const Template = (_, { argTypes }) => ({
  components: { CheckBox },
  props: Object.keys(argTypes),
  template: `
    <div class="dark:bg-surface-dark p-sm rounded-md h-[100vh]">
      <CheckBox
        :disabled="disabled"
        :name="name"
        :val="val"
        :text="text"
      />
    </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  name: 'some name',
  text: 'یک عنوان',
  val: 'value',
  disabled: false
};
