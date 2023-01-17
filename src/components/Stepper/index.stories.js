import Stepper from './index.vue';
export default {
  component: Stepper,
  title: 'Components/Stepper',
};
const Template = (_, { argTypes }) => ({
  components: {
    Stepper,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
  <h1 class="mt-sm font-bold dark:text-surface"> استپر ۱ مرحله ای</h1>
	  <Stepper :subSteps="1" :completed="1" />
    <h1 class="mt-sm font-bold dark:text-surface"> استپر ۲ مرحله ای</h1>
	  <Stepper :subSteps="2" :completed="1" />
    <h1 class="mt-sm font-bold dark:text-surface"> استپر ۳ مرحله ای</h1>
	  <Stepper :subSteps="3" :completed="2" />
    <h1 class="mt-sm font-bold dark:text-surface"> استپر ۴ مرحله ای</h1>
	  <Stepper :subSteps="4" :completed="3" />
  </div>
  `,
});

export const Default = Template.bind({});
