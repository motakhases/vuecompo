import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/UserProfile",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :username="username"></Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  username: "نام کاربر",
};
