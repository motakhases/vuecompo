import Rating from "./index.vue";

export default {
  component: Rating,
  title: "Components/Rating",
};

const Template = (_, { argTypes }) => ({
  components: { Rating },
  props: Object.keys(argTypes),
	methods: {
    testEmit(item) {
      console.log(item);
    },
  },
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md relative z-10" dir="rtl">
	<Rating :caption="caption" :captionRight="captionRight" :users="ratingUsers" :has-avatar="hasAvatar" @rating="testEmit"/>
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
	hasAvatar:true,
	captionRight: false,
	caption:"میزان رضایت خود از پاسخ‌دهی تیم پشتیبانی زرین‌پال را با ما در میان بگذارید",
	ratingUsers: [
		{
			id: '99',
			name: 'کسری دارا',
			avatar: 'https://www.gravatar.com/avatar/292e906e5948aa0364ff177897e57cdb/?s=128&r=g&d=mm',
		},
		{
			id: '7',
			name: 'مسعود امینی',
			avatar: 'https://www.gravatar.com/avatar/d33e6318d8c78ce839c69495f8b618c2/?s=128&r=g&d=mm',
		},
	],
};