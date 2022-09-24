import Stepper from "./index.vue";
export default {
  component: Stepper,
  title: "Components/Stepper",
};
const Template = (_, { argTypes }) => ({
  components: {
    Stepper,
  },
  props: Object.keys(argTypes),
  data: () => ({
    sm: "سلام از طرف یک فیلد غیر فعال",
    md: "",
    lg: "",
  }),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
	  <Stepper :subSteps="1" :completed="1" />
	  <Stepper :subSteps="2" :completed="1" />
	  <Stepper :subSteps="3" :completed="2" />
	  <Stepper :subSteps="4" :completed="3" />

  </div>
  `,
});

export const Default = Template.bind({});
