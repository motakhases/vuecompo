import Radio from "./index.vue";

export default {
  component: Radio,
  title: "Components/Radio",
};

const Template = (_, { argTypes }) => ({
  components: { Radio },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md h-[100vh]">
    <Radio
      :disabled="disabled"
      :name="name"
      :val="val"
      :text="text"
    />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  name: 'some name',
  text: 'یک عنوان',
  val: 'value',
  disabled: false
};
