import FilterActions from "./index.vue";

export default {
  component: FilterActions,
  title: "Components/Filters/FilterActions",
};

const Template = (_, { argTypes }) => ({
  components: { FilterActions },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterActions/>
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
  text: "FilterActions",
  size: "large",
  type: "primary",
  disabled: false,
  fill: false,
  loading: false,
  afterIcon: "",
  beforeIcon: "",
	onClick: () => alert('clicked')
};
