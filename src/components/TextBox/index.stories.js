import TextBox from "./index.vue";
import "@/utils/validations";

export default {
  component: TextBox,
  title: "Components/TextBox",
};

const Template = (_, { argTypes }) => ({
  components: {
    TextBox,
  },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<TextBox v-model="value" v-bind="$props" />
	</div>
	`,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
};

Default.args = {
  size: "medium",
  disabled: false,
  label: "label",
  value: "",
  helperHint: "",
  successHint: "",
  limit: 0,
  rules: "odd|required|min",
};
