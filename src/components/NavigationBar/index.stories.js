import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/NavigationBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component
	>
		{{ text }}
	</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  text: "Button",
  size: "large",
};
