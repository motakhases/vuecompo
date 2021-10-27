import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/NavBadge",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component>
		  {{ text }}
		</Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "12",
};
