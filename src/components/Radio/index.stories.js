import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Radio",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<Component
			:name="name"
			:options="options"
			:disabled="disabled"
		/>
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  options: [
    { label: "اپل", value: "apple" },
    { label: "لنوو", value: "lenovo" },
    { label: "شیائومی", value: "xiaomi" },
  ],
  name: "test",
  disabled: false,
};
