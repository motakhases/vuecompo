import Button from "./index.vue";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Button
      :type="type"
      :size="size"
      :disabled="disabled"
      :fill="fill"
      :loading="loading"
      :beforeIcon="beforeIcon"
      :afterIcon="afterIcon"
    >
      {{ text }}
    </Button>
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
};
