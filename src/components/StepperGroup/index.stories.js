import StepperGroup from "./index.vue";
export default {
  component: StepperGroup,
  title: "Components/StepperGroup",
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
	  <StepperGroup :steppers="list" />


  </div>
  `,
});

export const Default = Template.bind({});
