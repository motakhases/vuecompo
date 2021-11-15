import NotificationBadge from "./index.vue";

export default {
  component: NotificationBadge,
  title: "Components/NotificationBadge",
};

const Template = (_, { argTypes }) => ({
  components: { NotificationBadge },
  props: Object.keys(argTypes),
  template: `
		<NotificationBadge :numeric="numeric">
		  {{ text }}
		</NotificationBadge>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "۱۲",
  numeric: true,
};
