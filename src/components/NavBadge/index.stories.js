import NavBadge from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { NavBadge },
  props: Object.keys(argTypes),
  template: `
		<NavBadge text="23" />
  `,
});

const navBadge = Template.bind({});

export default navBadge