import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/TopBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component
		:beforeIcon="beforeIcon"
		:afterIcon="afterIcon"
		:onClick="onClick"
	>
		{{ text }}
	</Component>
  `,
});

export const Default = Template.bind({});

