import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Button",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-background-dark p-sm rounded-md">
		<Component
      :type="type"
      :size="size"
      :disabled="disabled"
      :fill="fill"
      :loading="loading"
      :beforeIcon="beforeIcon"
      :afterIcon="afterIcon"
      :onClick="onClick"
    >
      {{ text }}
    </Component>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["primary", "secondary", "tertiary"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "Button",
  size: "large",
  type: "primary",
  disabled: false,
  fill: false,
  loading: false,
  afterIcon: "",
  beforeIcon: "",
	onClick: () => alert('clicked')
};
