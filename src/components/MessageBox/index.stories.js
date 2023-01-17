import MessageBox from './index.vue';

export default {
  component: MessageBox,
  title: 'Components/MessageBox',
};

const Template = (_, { argTypes }) => ({
  components: { MessageBox },
  props: Object.keys(argTypes),
  methods: {
    testEmit(item) {
      console.log(item);
    },
  },
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md relative z-10" dir="rtl">
	<message-box v-bind="reply" my-id="7" @reply-feedback="testEmit" loading />
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  reply: {
    id: '2231',
    feedback_type: 'NONE',
    content: 'سلام\n## تستت\nتست\n**تست**\nبا تشکر',
    created_at: '2020-10-31T15:17:01+03:30',
    attachment: 'https://www.gravatar.com/avatar/292e906e5948aa0364ff177897e57cdb/?s=128&r=g&d=mm',
    user: {
      id: '1',
      name: 'کسری دارا',
      avatar: 'https://www.gravatar.com/avatar/292e906e5948aa0364ff177897e57cdb/?s=128&r=g&d=mm',
    },
  },
};
