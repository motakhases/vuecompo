import NotificationBadge from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { NotificationBadge },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md flex gap-sm">
		<NotificationBadge text="۳" />
		<NotificationBadge />
	</div>
  `,
});

const notificationBadge = Template.bind({});

export default notificationBadge