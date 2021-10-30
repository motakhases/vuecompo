import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/StoreStatus",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :state="state">
			{{ text }}
		</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  state: {
    options: ["inactive", "active", "pending", "deactive"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "وضعیت",
  state: "active",
};
