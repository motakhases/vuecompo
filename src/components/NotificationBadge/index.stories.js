import NotificationBadge from "./index.vue";

export default {
  component: NotificationBadge,
  title: "Components/NotificationBadge",
};

const Template = (_, { argTypes }) => ({
  components: { NotificationBadge },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<NotificationBadge v-bind="$props" />
	</div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "۱۲",
};
