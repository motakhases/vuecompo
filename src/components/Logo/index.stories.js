import Component from "./index.vue";
export default {
  component: Component,
  title: "Components/Logo",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<div class="dark:bg-surface-dark p-sm rounded-md">
      <Component
        :size="size"
        :name="name"
        :type="type"
        :language="language"
      />
    </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ['medium', 'large'],
    control: { type: "radio" },
  },
	type: {
    options: ['logo', 'logo-type', 'logo-mark'],
    control: { type: "radio" },
  },
	name: {
    options: ['zarinpal'],
    control: { type: "radio" },
  },
	language: {
    options: ['fa', 'en'],
    control: { type: "radio" },
  },
};

Default.args = {
  size: 'medium',
	type: 'logo',
	name: 'zarinpal',
	language: 'fa'
};
