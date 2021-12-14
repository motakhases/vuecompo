import Label from "./index.vue";

export default {
  component: Label,
  title: "Components/Label",
};

const Template = (_, { argTypes }) => ({
  components: { Label },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md h-full rtl">
		<Label v-bind="$props" />
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium"],
    control: { type: "radio" },
  },
  type: {
    options: ["positive", "negative", "neutral", "outlined"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "لیبل",
  size: "small",
  type: "positive",
};
