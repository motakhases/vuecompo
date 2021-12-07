import Filters from "./index.vue";

export default {
  component: Filters,
  title: "Components/Filters",
};

const Template = (_, { argTypes }) => ({
  components: { Filters },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Filters
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
    </Filters>
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
  text: "Filters",
  size: "large",
  type: "primary",
  disabled: false,
  fill: false,
  loading: false,
  afterIcon: "",
  beforeIcon: "",
	onClick: () => alert('clicked')
};
