import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Logo",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component
		:type="type"
		:size="size"
		:disabled="disabled"
		:fill="fill"
		:loading="loading"
		:beforeIcon="beforeIcon"
		:afterIcon="afterIcon"
		:onClick="onClick"
	>
		{{ text }}
	</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["primary", "secondary", "tertiary"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "Button",
  size: "large",
  type: "primary",
  disabled: false,
  fill: false,
  loading: false,
  afterIcon: "",
  beforeIcon: "",
	onClick: () => alert('clicked')
};
