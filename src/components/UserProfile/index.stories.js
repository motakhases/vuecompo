import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/UserProfile",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component
		:username="username"
		:size="size"
		:disabled="disabled"
		:fill="fill"
		:loading="loading"
		:beforeIcon="beforeIcon"
		:afterIcon="afterIcon"
		:onClick="onClick"
	>
	</Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  username: "نام کاربر",
};
