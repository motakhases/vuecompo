import NotificationBadge from './index.vue';

const Template = (_, { argTypes }) => ({
  components: { NotificationBadge },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
		<NotificationBadge />
    <h1 class="mt-sm font-bold dark:text-surface"> همراه با متن </h1>
		<NotificationBadge text="2" />
	</div>
  `,
});

const notificationBadge = Template.bind({});

export default notificationBadge;
