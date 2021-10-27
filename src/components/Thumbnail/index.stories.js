import Component from "./index.vue";
import Icon from '../Icon/index.vue';

export default {
  component: Component,
  title: "Components/Thumbnail",
};

const Template = (_, { argTypes }) => ({
  components: { Component, Icon },
  props: Object.keys(argTypes),
  template: `
		<Component>
			<Icon name="terminal" />
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
