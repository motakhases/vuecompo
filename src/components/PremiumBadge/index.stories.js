import PremiumBadge from './index.vue';

const Template = (_, { argTypes }) => ({
  components: {
    PremiumBadge,
  },
  props: Object.keys(argTypes),

  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
	  <PremiumBadge />
  </div>
  `,
});

export const Default = Template.bind({});
