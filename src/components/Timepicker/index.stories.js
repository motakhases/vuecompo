import Timepicker from "./index.vue";

export default {
  component: Timepicker,
  title: "Components/Timepicker",
};

const Template = (_, { argTypes }) => ({
  components: { Timepicker },
  props: Object.keys(argTypes),
  data() {
    return {
      singleDate: "",
      rangeDate: [],
      previewDate: "",
      rangeMode: true,
      previewMode: true,
    };
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md rtl">
    <div class="w-[296px] flex flex-col gap-md">
      <h1 class="font-bold dark:text-surface">  </h1>
		  <Timepicker v-model="singleDate" />
    </div>
  </div>
  `,
});

export const Default = Template.bind({});
