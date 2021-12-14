import Radio from "./index.vue";

export default {
  component: Radio,
  title: "Components/Radio",
};

const Template = (_, { argTypes }) => ({
  components: { Radio },
  props: Object.keys(argTypes),
  data: () => ({
    selectedOption: 'val1'
  }),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md h-[100vh]">
    <Radio
      v-model="selectedOption"
      :disabled="disabled"
      :name="name"
      val="val1"
      text="text1"
    />
    <Radio
      v-model="selectedOption"
      :disabled="disabled"
      :name="name"
      val="val2"
      text="text2"
    />
    <Radio
      v-model="selectedOption"
      :disabled="disabled"
      :name="name"
      val="val3"
      text="text3"
    />

    {{ selectedOption }}
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
