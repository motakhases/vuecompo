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
    sm: "سلام از طرف یک فیلد غیر فعال",
    md: "",
    lg: "",
  }),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
	  <StepperGroup :subSteps="1" :completed="1" />
	  <StepperGroup :subSteps="2" :completed="1" />
	  <StepperGroup :subSteps="3" :completed="2" />
	  <StepperGroup :subSteps="4" :completed="3" />

  </div>
  `,
});

export const Default = Template.bind({});
