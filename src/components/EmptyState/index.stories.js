import EmptyState from './index.vue';

export default {
  component: EmptyState,
  title: 'Components/EmptyState',
};

const Template = (_, { argTypes }) => ({
  components: {
    EmptyState,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      emptyStateButtons: [
        {
          text: 'دکمه',
          action: () => {
            console.log('hi');
          },
          type: 'secondary',
        },
        {
          text: 'دکمه',
          action: () => {
            console.log('hi');
          },
        },
      ],
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
  <Empty-state :buttons="emptyStateButtons" image="Transactions" caption="تراکنش‌های شما به صورت لحظه‌ای در این صفحه قابل مشاهده است" title="‌تراکنش‌های درگاه شما" />
  </div>
  `,
});

export const Default = Template.bind({});
