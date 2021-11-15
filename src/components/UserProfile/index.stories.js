import UserProfile from "./index.vue";

export default {
  component: UserProfile,
  title: "Components/UserProfile",
};

const Template = (_, { argTypes }) => ({
  components: { UserProfile },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<UserProfile :username="username" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  username: "نام کاربر",
};
