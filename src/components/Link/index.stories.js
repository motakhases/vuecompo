import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Link",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :to="to">
      {{ text }}
    </Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "لینک",
  to: "/link",
};
