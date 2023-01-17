import StepperGroup from './index.vue';
export default {
  component: StepperGroup,
  title: 'Components/StepperGroup',
};
const Template = (_, { argTypes }) => ({
  components: {
    StepperGroup,
  },
  props: Object.keys(argTypes),
  data: () => ({
    list: [
      { id: 1, subSteps: 3, completed: 3 },
      { id: 2, subSteps: 1, completed: 1 },
      { id: 3, subSteps: 5, completed: 5 },
      { id: 4, subSteps: 8, completed: 2 },
    ],
  }),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
  <div class="grid grid-cols-12">
    <h1 class="col-span-3 text-center">استپر اول: ۳ مرحله ای</h1>
    <h1 class="col-span-3 text-center">استپر دوم: ۱ مرحله ای</h1>
    <h1 class="col-span-3 text-center">استپر سوم: ۵ مرحله ای</h1>
    <h1 class="col-span-3 text-center">استپر چهارم: ۸ مرحله ای  که ۲ مرحله کامل شده</h1>
  </div>
  <h1 class="mt-sm font-bold dark:text-surface">
  </h1>

	  <StepperGroup :steppers="list" />


  </div>
  `,
});

export const Default = Template.bind({});
