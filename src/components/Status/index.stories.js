import Status from "./index.vue";

export default {
  component: Status,
  title: "Components/Status",
};

const Template = (_, { argTypes }) => ({
  components: { Status },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<Status v-bind="$props" />
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  type: {
    options: ["neutral", "informative", "warning", "negative", "positve"],
    control: { type: "select" },
  },
};

Default.args = {
  text: "وضعیت",
  type: "neutral",
  indicator: true,
};
