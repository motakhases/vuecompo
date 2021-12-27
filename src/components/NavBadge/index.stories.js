import NavBadge from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { NavBadge },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md rtl">
  	<NavBadge text="23" />
  </div>
  `,
});

const navBadge = Template.bind({});

export default navBadge;
