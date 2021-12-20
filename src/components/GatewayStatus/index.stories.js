import GatewayStatus from "./index.vue";

export default {
  component: GatewayStatus,
  title: "Components/GatewayStatus",
};

const Template = (_, { argTypes }) => ({
  components: { GatewayStatus },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<GatewayStatus v-bind="$props" />
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
