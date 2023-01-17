import Timer from './index.vue';

export default {
  component: Timer,
  title: 'Components/Timer',
};

const Template = () => ({
  components: { Timer },
  template: `
  <div class="bg-gray-100 dark:bg-gray-dark-100 p-lg rounded-md flex flex-col gap-md rtl">
    <Timer :time="60" text="تا امکان ارسال مجدد کد" />
  </div>
  `,
});

export const Default = Template.bind({});
