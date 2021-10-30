import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/UserProfile",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Component :username="username"></Component>
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  username: "نام کاربر",
};
