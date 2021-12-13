import InlineMessage from "./index.vue";

export default {
  component: InlineMessage,
  title: "Components/InlineMessage",
};

const Template = (_, { argTypes }) => ({
  components: { InlineMessage },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
		<InlineMessage v-bind="$props" />
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
    options: ["neutral", "informative", "warning", "negative", "positive"],
    control: { type: "select" },
  },
};

Default.args = {
  text: "دکمه",
  size: "large",
  type: "primary",
  disabled: false,
  fill: false,
  loading: false,
  afterIcon: "",
  beforeIcon: "",
  icon: "",
};
