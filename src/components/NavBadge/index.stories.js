import NavBadge from "./index.vue";

export default {
  component: NavBadge,
  title: "Components/NavBadge",
};

const Template = (_, { argTypes }) => ({
  components: { NavBadge },
  props: Object.keys(argTypes),
  template: `
		<NavBadge :text="text" />
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "12",
};
