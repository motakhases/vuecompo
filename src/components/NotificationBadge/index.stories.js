import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/NotificationBadge",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :numeric="numeric">
		  {{ text }}
		</Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "۱۲",
  numeric: true,
};
