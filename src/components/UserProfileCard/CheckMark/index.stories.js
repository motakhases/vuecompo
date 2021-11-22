import CheckMark from "./index.vue";

export default {
  component: CheckMark,
  title: "Components/UserProfileCard/CheckMark",
};

const Template = (_, { argTypes }) => ({
  components: {
    CheckMark,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl inline-flex flex-col">
		<CheckMark :complete="complete" :before="before" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  complete: true,
  before: true,
};
