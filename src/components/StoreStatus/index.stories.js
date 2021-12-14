import StoreStatus from "./index.vue";

export default {
  component: StoreStatus,
  title: "Components/StoreStatus",
};

const Template = (_, { argTypes }) => ({
  components: { StoreStatus },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<StoreStatus v-bind="$props" />
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  state: {
    options: ["inactive", "active", "pending", "deactive"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "وضعیت",
  state: "active",
};
